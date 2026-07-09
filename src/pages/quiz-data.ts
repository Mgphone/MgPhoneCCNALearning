import type { Difficulty, QuizQuestion } from "@/data/quiz/types";
import { networkFundamentalsQuestions } from "@/data/quiz/network-fundamentals";
import { osiTcpipQuestions } from "@/data/quiz/osi-tcpip";
import { ethernetLanSwitchingQuestions } from "@/data/quiz/ethernet-lan-switching";
import { ipv4AddressingQuestions } from "@/data/quiz/ipv4-addressing";
import { ipv6AddressingQuestions } from "@/data/quiz/ipv6-addressing";
import { subnettingQuestions } from "@/data/quiz/subnetting";
import { vlsmQuestions } from "@/data/quiz/vlsm";
import { routingFundamentalsQuestions } from "@/data/quiz/routing-fundamentals";
import { staticRoutingQuestions } from "@/data/quiz/static-routing";
import { dynamicRoutingQuestions } from "@/data/quiz/dynamic-routing";
import { vlansQuestions } from "@/data/quiz/vlans";
import { interVlanRoutingQuestions } from "@/data/quiz/inter-vlan-routing";
import { stpQuestions } from "@/data/quiz/stp";
import { etherchannelQuestions } from "@/data/quiz/etherchannel";
import { aclQuestions } from "@/data/quiz/acl";
import { natPatQuestions } from "@/data/quiz/nat-pat";
import { dhcpQuestions } from "@/data/quiz/dhcp";
import { dnsQuestions } from "@/data/quiz/dns";
import { ntpQuestions } from "@/data/quiz/ntp";
import { fhrpQuestions } from "@/data/quiz/fhrp";
import { ipv6RoutingQuestions } from "@/data/quiz/ipv6-routing";
import { wirelessQuestions } from "@/data/quiz/wireless";
import { networkSecurityQuestions } from "@/data/quiz/network-security";
import { vpnQuestions } from "@/data/quiz/vpn";
import { qosQuestions } from "@/data/quiz/qos";
import { networkAutomationQuestions } from "@/data/quiz/network-automation";
import { jsonRestApiQuestions } from "@/data/quiz/json-rest-api";
import { ciscoIosQuestions } from "@/data/quiz/cisco-ios";
import { troubleshootingQuestions } from "@/data/quiz/troubleshooting";
import { mixedQuestions } from "@/data/quiz/mixed";

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const TOPIC_LOOKUP: Record<string, QuizQuestion[]> = {
  "network-fundamentals": networkFundamentalsQuestions,
  "osi-tcpip": osiTcpipQuestions,
  "ethernet-lan-switching": ethernetLanSwitchingQuestions,
  "ipv4-addressing": ipv4AddressingQuestions,
  "subnetting": subnettingQuestions,
  "vlsm": vlsmQuestions,
  "ipv6-addressing": ipv6AddressingQuestions,
  "ipv6-routing": ipv6RoutingQuestions,
  "routing-fundamentals": routingFundamentalsQuestions,
  "static-routing": staticRoutingQuestions,
  "dynamic-routing": dynamicRoutingQuestions,
  "vlans": vlansQuestions,
  "inter-vlan-routing": interVlanRoutingQuestions,
  "stp": stpQuestions,
  "etherchannel": etherchannelQuestions,
  "acl": aclQuestions,
  "nat-pat": natPatQuestions,
  "dhcp": dhcpQuestions,
  "dns": dnsQuestions,
  "ntp": ntpQuestions,
  "fhrp": fhrpQuestions,
  "wireless": wirelessQuestions,
  "network-security": networkSecurityQuestions,
  "vpn": vpnQuestions,
  "qos": qosQuestions,
  "network-automation": networkAutomationQuestions,
  "json-rest-api": jsonRestApiQuestions,
  "cisco-ios": ciscoIosQuestions,
  "troubleshooting": troubleshootingQuestions,
  "mixed": mixedQuestions,
};

export interface TopicItem {
  key: string;
  name: string;
}

export interface TopicCategory {
  name: string;
  topics: TopicItem[];
}

export const CATEGORIES: TopicCategory[] = [
  {
    name: "Network Fundamentals",
    topics: [{ key: "network-fundamentals", name: "Network Fundamentals" }],
  },
  {
    name: "OSI Model & TCP/IP",
    topics: [{ key: "osi-tcpip", name: "OSI Model & TCP/IP" }],
  },
  {
    name: "Ethernet & LAN Switching",
    topics: [
      { key: "ethernet-lan-switching", name: "Ethernet & LAN Switching" },
    ],
  },
  {
    name: "IPv4 Addressing",
    topics: [
      { key: "ipv4-addressing", name: "IPv4 Addressing" },
      { key: "subnetting", name: "Subnetting" },
      { key: "vlsm", name: "VLSM" },
    ],
  },
  {
    name: "IPv6",
    topics: [
      { key: "ipv6-addressing", name: "IPv6 Addressing" },
      { key: "ipv6-routing", name: "IPv6 Routing" },
    ],
  },
  {
    name: "Routing Concepts",
    topics: [
      { key: "routing-fundamentals", name: "Routing Fundamentals" },
      { key: "static-routing", name: "Static Routing" },
      { key: "dynamic-routing", name: "Dynamic Routing" },
    ],
  },
  {
    name: "VLANs & STP",
    topics: [
      { key: "vlans", name: "VLANs" },
      { key: "inter-vlan-routing", name: "Inter-VLAN Routing" },
      { key: "stp", name: "STP" },
      { key: "etherchannel", name: "EtherChannel" },
    ],
  },
  {
    name: "ACL & NAT",
    topics: [
      { key: "acl", name: "ACL" },
      { key: "nat-pat", name: "NAT/PAT" },
    ],
  },
  {
    name: "Infrastructure Services",
    topics: [
      { key: "dhcp", name: "DHCP" },
      { key: "dns", name: "DNS" },
      { key: "ntp", name: "NTP" },
      { key: "fhrp", name: "FHRP" },
    ],
  },
  {
    name: "Wireless",
    topics: [{ key: "wireless", name: "Wireless" }],
  },
  {
    name: "Network Security",
    topics: [{ key: "network-security", name: "Network Security" }],
  },
  {
    name: "VPN & QoS",
    topics: [
      { key: "vpn", name: "VPN" },
      { key: "qos", name: "QoS" },
    ],
  },
  {
    name: "Network Automation",
    topics: [
      { key: "network-automation", name: "Network Automation" },
      { key: "json-rest-api", name: "JSON & REST API" },
    ],
  },
  {
    name: "Cisco IOS & Troubleshooting",
    topics: [
      { key: "cisco-ios", name: "Cisco IOS" },
      { key: "troubleshooting", name: "Troubleshooting" },
    ],
  },
  {
    name: "Mixed Review",
    topics: [{ key: "mixed", name: "Mixed" }],
  },
];

export const MIXED_TOTAL = Object.values(TOPIC_LOOKUP).reduce(
  (sum, qs) => sum + qs.length,
  0,
);

export const PRESET_COUNTS = [5, 10, 20];

export const DIFFICULTIES: (Difficulty | "all")[] = ["all", "easy", "medium", "hard"];

export type Phase = "setup" | "playing" | "results";

export function getTopicName(key: string): string {
  if (key === "mixed") return "Mixed Quiz";
  for (const cat of CATEGORIES) {
    for (const t of cat.topics) {
      if (t.key === key) return t.name;
    }
  }
  return key;
}
