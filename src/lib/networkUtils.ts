import { useMemo } from 'react';

export function randByte(): string {
  return Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

export function genMAC(): string {
  return Array.from({ length: 6 }, randByte).join(':');
}

export function toBin(hex: string): string {
  return parseInt(hex, 16).toString(2).padStart(8, '0');
}

export function stripHextet(h: string): string {
  return h.replace(/^0+/, '') || '0';
}

export function compressFull(hextets: string[]): string {
  const s = hextets.map(stripHextet);
  let start = -1, len = 0, cs = -1, cl = 0;
  const flush = () => {
    if (cl >= 2 && cl > len) { len = cl; start = cs; }
    cs = -1; cl = 0;
  };
  s.forEach((h, i) => {
    if (h === '0') { if (cs === -1) { cs = i; cl = 1; } else cl++; }
    else flush();
  });
  flush();
  if (start !== -1) {
    const a = [...s]; a.splice(start, len, '');
    return a.join(':').replace(/:{2,}/g, '::');
  }
  return s.join(':');
}

export function genGlobalPrefix(): string {
  const r1 = Math.floor(Math.random() * 4096).toString(16).padStart(3, '0').toUpperCase();
  const prefixFirstOctet = (0x2 + Math.floor(parseInt(r1[0], 16) / 8)).toString(16).toUpperCase();
  const firstHextet = (`${prefixFirstOctet}${r1.slice(1)}`).padStart(4, '0').toUpperCase();
  const h2 = Math.floor(Math.random() * 65536).toString(16).toUpperCase().padStart(4, '0');
  const h3 = Math.floor(Math.random() * 65536).toString(16).toUpperCase().padStart(4, '0');
  return `${firstHextet}:${h2}:${h3}`;
}

export function eui64Answer(mac: string) {
  const p = mac.split(':');
  const firstHalf = p.slice(0, 3).join(':');
  const secondHalf = p.slice(3).join(':');
  const beforeFlip = [...p.slice(0, 3), 'FF', 'FE', ...p.slice(3)];

  const firstOctet = p[0];
  const binBefore = toBin(firstOctet);
  const flippedVal = (parseInt(firstOctet, 16) ^ 0x02).toString(16).padStart(2, '0').toUpperCase();
  const binAfter = toBin(flippedVal);

  const afterFlip = [...beforeFlip];
  afterFlip[0] = flippedVal;

  const hextets: string[] = [];
  for (let i = 0; i < 8; i += 2) {
    hextets.push((afterFlip[i] + afterFlip[i + 1]).toLowerCase());
  }

  const full = ['fe80', '0000', '0000', '0000', ...hextets];
  const answer = compressFull(full);
  const uncompressed = full.join(':');

  return { firstHalf, secondHalf, insertedStr: beforeFlip.join(':'), firstOctet, binBefore, binAfter, flippedVal, hextets, ifStr: hextets.join(':'), uncompressed, answer };
}

export function useEUI64(mac: string) {
  return useMemo(() => eui64Answer(mac), [mac]);
}
