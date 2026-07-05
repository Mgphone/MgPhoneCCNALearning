export interface IpDetails {
  subnetMask: string;
  wildcard: string;
  network: string;
  broadcast: string;
  firstHost: string;
  lastHost: string;
  hosts: string;
  error: null;
}

export interface IpDetailsError {
  error: string;
}

/**
 * Calculates network details for a given IPv4 address and CIDR prefix.
 * * @param ip - The IPv4 address string (e.g., "192.168.1.5")
 * @param cidrStr - The CIDR prefix string (e.g., "24")
 * @returns An object containing subnet details or an error message.
 */
export const calculateIpDetails = (
  ip: string,
  cidrStr: string,
): IpDetails | IpDetailsError => {
  try {
    const cidr = parseInt(cidrStr, 10);
    if (isNaN(cidr) || cidr < 0 || cidr > 32) throw new Error("Invalid CIDR");

    const ipParts = ip.split(".").map(Number);
    if (
      ipParts.length !== 4 ||
      ipParts.some((p) => isNaN(p) || p < 0 || p > 255)
    ) {
      throw new Error("Invalid IP");
    }

    // Convert IP to 32-bit integer
    const ipInt =
      ((ipParts[0] << 24) |
        (ipParts[1] << 16) |
        (ipParts[2] << 8) |
        ipParts[3]) >>>
      0;

    // Calculate Mask
    const maskInt = cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0;
    const maskParts = [
      (maskInt >>> 24) & 255,
      (maskInt >>> 16) & 255,
      (maskInt >>> 8) & 255,
      maskInt & 255,
    ];

    // Calculate Wildcard
    const wildcardInt = ~maskInt >>> 0;
    const wildcardParts = [
      (wildcardInt >>> 24) & 255,
      (wildcardInt >>> 16) & 255,
      (wildcardInt >>> 8) & 255,
      wildcardInt & 255,
    ];

    // Calculate Network & Broadcast
    const networkInt = (ipInt & maskInt) >>> 0;
    const broadcastInt = (networkInt | wildcardInt) >>> 0;

    const intToIp = (int: number): string =>
      `${(int >>> 24) & 255}.${(int >>> 16) & 255}.${(int >>> 8) & 255}.${int & 255}`;

    const totalHosts = cidr >= 31 ? 0 : Math.pow(2, 32 - cidr) - 2;

    return {
      subnetMask: maskParts.join("."),
      wildcard: wildcardParts.join("."),
      network: intToIp(networkInt),
      broadcast: intToIp(broadcastInt),
      firstHost: cidr >= 31 ? "N/A" : intToIp(networkInt + 1),
      lastHost: cidr >= 31 ? "N/A" : intToIp(broadcastInt - 1),
      hosts: totalHosts.toLocaleString(),
      error: null,
    };
  } catch (err) {
    return { error: "Please enter a valid IPv4 address and CIDR prefix." };
  }
};
