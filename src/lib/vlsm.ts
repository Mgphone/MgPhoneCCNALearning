export interface SubnetRequirement {
  id: string;
  name: string;
  requestedHosts: string;
}

export interface UserInput {
  networkIp: string;
  cidr: string;
  firstHost: string;
  lastHost: string;
  broadcast: string;
}

export interface ShadowAllocation {
  id: string;
  name: string;
  requestedHosts: number;
  allocatedSize: number;
  networkAddress: string;
  subnetMask: string;
  cidr: number;
  firstHost: string;
  lastHost: string;
  usableRange: string;
  broadcast: string;
}

export function isValidIp(ip: string): boolean {
  const parts = ip.split(".");
  if (parts.length !== 4) return false;
  return parts.every((p) => {
    if (p.length === 0 || (p.length > 1 && p.startsWith("0"))) return false;
    const n = parseInt(p, 10);
    return !isNaN(n) && n >= 0 && n <= 255;
  });
}

export function isValidCidr(cidr: string): boolean {
  const n = parseInt(cidr, 10);
  return !isNaN(n) && n >= 0 && n <= 32 && String(n) === cidr.trim();
}

export function ipToLong(ip: string): number {
  return (
    ip
      .split(".")
      .reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0
  );
}

export function longToIp(long: number): string {
  return [
    (long >>> 24) & 255,
    (long >>> 16) & 255,
    (long >>> 8) & 255,
    long & 255,
  ].join(".");
}

export function getRequiredCidr(hosts: number): number | null {
  if (hosts <= 0) return null;
  const requiredTotal = hosts + 2;
  for (let cidr = 30; cidr >= 8; cidr--) {
    if (Math.pow(2, 32 - cidr) >= requiredTotal) return cidr;
  }
  return null;
}

export function cidrToMask(cidr: number): string {
  const mask = (0xffffffff << (32 - cidr)) >>> 0;
  return longToIp(mask);
}

export function solveVlsm(
  baseIp: string,
  baseCidr: number,
  requirements: SubnetRequirement[],
): { solution: ShadowAllocation[] | null; error: string | null } {
  if (!baseIp || !baseCidr) {
    return { solution: null, error: null };
  }

  if (!isValidIp(baseIp)) {
    return { solution: null, error: "Invalid base network IP address." };
  }

  if (isNaN(baseCidr) || baseCidr < 0 || baseCidr > 32) {
    return { solution: null, error: "Invalid CIDR prefix." };
  }

  const parsedReqs = requirements
    .map((r) => ({ ...r, num: parseInt(r.requestedHosts, 10) }))
    .filter((r) => !isNaN(r.num) && r.num > 0);

  if (parsedReqs.length !== requirements.length) {
    const hasInvalid = requirements.some(
      (r) =>
        r.requestedHosts.trim() !== "" &&
        (isNaN(parseInt(r.requestedHosts, 10)) ||
          parseInt(r.requestedHosts, 10) <= 0),
    );
    return {
      solution: null,
      error: hasInvalid ? "All host counts must be greater than 0." : null,
    };
  }

  const sortedReqs = [...parsedReqs].sort((a, b) => b.num - a.num);

  let currentIpLong = ipToLong(baseIp);
  const maxCapacity = Math.pow(2, 32 - baseCidr);
  let usedCapacity = 0;

  const solution: ShadowAllocation[] = [];

  for (const req of sortedReqs) {
    const cidr = getRequiredCidr(req.num);
    if (!cidr) {
      return {
        solution: null,
        error: `Capacity Exceeded: Cannot fit these requirements into a /${baseCidr} network.`,
      };
    }

    const blockSize = Math.pow(2, 32 - cidr);
    usedCapacity += blockSize;

    if (usedCapacity > maxCapacity) {
      return {
        solution: null,
        error: `Capacity Exceeded: Cannot fit these requirements into a /${baseCidr} network.`,
      };
    }

    const firstHostIp = longToIp(currentIpLong + 1);
    const lastHostIp = longToIp(currentIpLong + blockSize - 2);

    solution.push({
      id: req.id,
      name: req.name,
      requestedHosts: req.num,
      allocatedSize: blockSize,
      networkAddress: longToIp(currentIpLong),
      subnetMask: cidrToMask(cidr),
      cidr: cidr,
      firstHost: firstHostIp,
      lastHost: lastHostIp,
      usableRange: `${firstHostIp} - ${lastHostIp}`,
      broadcast: longToIp(currentIpLong + blockSize - 1),
    });

    currentIpLong += blockSize;
  }

  const orderedSolution = requirements.map(
    (r) => solution.find((s) => s.id === r.id)!,
  );

  return { solution: orderedSolution, error: null };
}
