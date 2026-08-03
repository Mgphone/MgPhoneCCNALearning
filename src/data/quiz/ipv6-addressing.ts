import type { QuizQuestion } from "./types";

export const ipv6AddressingQuestions: QuizQuestion[] = [
  // --- IPv6 Format & Abbreviations ---
  {
    id: 1,
    question:
      "What is the abbreviated form of the IPv6 address 2001:0db8:0000:0000:003a:0000:0000:0001?",
    options: [
      "2001:db8::3a::1",
      "2001:db8::3a:0:0:1",
      "2001:db8:0:0:3a::1",
      "2001:db8:0:0:3a:0:0:1",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Leading zeros within each hextet can be omitted, and one contiguous series of all-zero hextets can be replaced with '::'. While compressing the first group of zeros is preferred by RFC 5952, 2001:db8:0:0:3a::1 is a widely accepted abbreviation. (Note: Using '::' twice is invalid).",
  },
  {
    id: 2,
    question: "How many bits make up an IPv6 address?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IPv6 addresses are 128 bits in length, providing an astronomically larger address space compared to the 32-bit IPv4 addresses.",
  },
  {
    id: 3,
    question: "How is an IPv6 address structurally represented?",
    options: [
      "Four 8-bit decimal numbers separated by periods",
      "Eight 16-bit hexadecimal blocks separated by colons",
      "Six 8-bit hexadecimal blocks separated by colons",
      "Sixteen 8-bit binary blocks separated by dashes",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An IPv6 address is represented as eight 16-bit blocks (often called hextets), written in hexadecimal and separated by colons.",
  },
  {
    id: 4,
    question: "Which of the following is an INVALID IPv6 address?",
    options: [
      "2001:db8::1",
      "fe80::02aa:ff:fe28:9c5a",
      "2001:0db8:85a3::8a2e:0370:7334",
      "2001:db8::1::2",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The double colon '::' can only be used once in an IPv6 address to represent contiguous blocks of zeros. Using it twice makes the address ambiguous.",
  },
  {
    id: 5,
    question: "What is the fully expanded form of the IPv6 address FF02::1?",
    options: [
      "FF02:0000:0000:0000:0000:0000:0000:0001",
      "FF02:0000:0000:0000:0000:0000:0000:1000",
      "FF02:0000:0000:0000:0000:0000:0001:0000",
      "FF02:0001:0000:0000:0000:0000:0000:0000",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The '::' represents all the missing zero hextets between FF02 and the final 1. Expanding it results in 7 blocks of zeros before the final 0001.",
  },
  {
    id: 6,
    question:
      "Which of the following characters is NOT valid in an IPv6 address?",
    options: ["a", "e", "f", "g"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "IPv6 addresses are written in hexadecimal format, which uses numbers 0-9 and letters a-f (or A-F). The letter 'g' is invalid.",
  },
  {
    id: 7,
    question: "How large is the standard fixed IPv6 header?",
    options: ["20 bytes", "40 bytes", "60 bytes", "Variable"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IPv6 header is fixed at 40 bytes. This streamlined header simplifies processing for routers compared to the variable-length IPv4 header.",
  },
  {
    id: 8,
    question:
      "Which field in the IPv4 header was completely removed in the IPv6 header because Layer 2 and Layer 4 already provide error detection?",
    options: [
      "Time to Live (TTL)",
      "Source Address",
      "Header Checksum",
      "Version",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Header Checksum was removed in IPv6 to speed up packet processing at routers. Error detection is handled by data link layer protocols (like Ethernet FCS) and upper-layer protocols (like TCP/UDP checksums).",
  },
  {
    id: 9,
    question:
      "What is the IPv6 equivalent of the IPv4 Time To Live (TTL) field?",
    options: ["Traffic Class", "Flow Label", "Hop Limit", "Next Header"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Hop Limit field in IPv6 serves the exact same purpose as the TTL field in IPv4: preventing packets from looping endlessly.",
  },
  {
    id: 10,
    question:
      "Which IPv6 header field is used to identify the type of payload carried (e.g., TCP, UDP, ICMPv6)?",
    options: ["Traffic Class", "Next Header", "Payload Length", "Flow Label"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Next Header field identifies the protocol encapsulated in the payload, equivalent to the Protocol field in IPv4. It also links to IPv6 Extension Headers.",
  },

  // --- IPv6 Address Types ---
  {
    id: 11,
    question:
      "Which of the following communication types does NOT exist in IPv6?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "IPv6 eliminates broadcast addressing entirely. Its functions are replaced by efficient multicast addressing.",
  },
  {
    id: 12,
    question:
      "Which IPv6 address type provides one-to-one communication between a single source and a single destination?",
    options: ["Unicast", "Multicast", "Anycast", "Broadcast"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Unicast addresses uniquely identify a single interface on an IPv6-enabled device.",
  },
  {
    id: 13,
    question:
      "Which IPv6 address type is assigned to multiple devices, but a packet sent to this address is delivered only to the closest device?",
    options: ["Unicast", "Multicast", "Anycast", "Link-Local"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Anycast addresses are assigned to multiple interfaces (usually on different nodes). Traffic sent to an anycast address is routed to the 'nearest' interface based on routing protocol metrics.",
  },
  {
    id: 14,
    question: "What is the IPv6 equivalent of a public IPv4 address?",
    options: [
      "Link-Local Address (LLA)",
      "Unique Local Address (ULA)",
      "Global Unicast Address (GUA)",
      "Site-Local Address",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Global Unicast Addresses (GUAs) are globally unique and routable on the IPv6 Internet, just like public IPv4 addresses.",
  },
  {
    id: 15,
    question:
      "What is the IPv6 equivalent of a private (RFC 1918) IPv4 address, meant for local site routing but not the public internet?",
    options: [
      "Link-Local Address (LLA)",
      "Unique Local Address (ULA)",
      "Global Unicast Address (GUA)",
      "Solicited-Node Address",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Unique Local Addresses (ULAs) are used for local communications within a site and are not routed on the global Internet. They are analogous to IPv4 private addresses.",
  },

  // --- IPv6 Prefixes & Special Addresses ---
  {
    id: 16,
    question: "Which prefix identifies a Global Unicast Address (GUA)?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Current Global Unicast Addresses are allocated from the 2000::/3 range, which includes all addresses starting with '2' or '3'.",
  },
  {
    id: 17,
    question: "Which prefix identifies an IPv6 Link-Local Address (LLA)?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Link-Local Addresses always begin with FE80, FE90, FEA0, or FEB0, falling under the FE80::/10 prefix.",
  },
  {
    id: 18,
    question: "Which prefix identifies a Unique Local Address (ULA)?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unique Local Addresses fall under the FC00::/7 prefix, meaning they begin with either 'FC' or 'FD'.",
  },
  {
    id: 19,
    question: "Which prefix identifies an IPv6 Multicast Address?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "All IPv6 Multicast addresses begin with the prefix FF00::/8, meaning the first two hex characters are always 'FF'.",
  },
  {
    id: 20,
    question: "What is the IPv6 loopback address?",
    options: ["::1/128", "::/128", "FE80::1", "FF02::1"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The loopback address is ::1/128 (all zeros ending in a 1). It is equivalent to 127.0.0.1 in IPv4.",
  },
  {
    id: 21,
    question: "What is the IPv6 unspecified address?",
    options: ["::1/128", "::/128", "FE80::/10", "::/0"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The unspecified address is all zeros, written as ::/128. It is used as a source address when an interface does not yet have a valid IP (e.g., during DAD or DHCPv6 request).",
  },
  {
    id: 22,
    question: "What does the IPv6 prefix ::/0 represent?",
    options: [
      "The Unspecified Address",
      "The Loopback Address",
      "The Default Route",
      "The All-Nodes Multicast Address",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "::/0 represents all possible IPv6 addresses and is used to configure an IPv6 default static route, equivalent to 0.0.0.0/0 in IPv4.",
  },
  {
    id: 23,
    question:
      "Which IPv6 prefix is reserved specifically for documentation and examples?",
    options: ["2001:db8::/32", "2002::/16", "3ffe::/16", "fc00::/7"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "RFC 3849 reserves the 2001:DB8::/32 prefix for use in documentation, avoiding the accidental use of production IPs in configurations.",
  },
  {
    id: 24,
    question: "An IPv6 address starts with FD01. What type of address is this?",
    options: ["Global Unicast", "Link-Local", "Unique Local", "Multicast"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Addresses starting with FC or FD fall into the FC00::/7 range, making it a Unique Local Address (ULA).",
  },
  {
    id: 25,
    question: "An IPv6 address starts with 2001. What type of address is this?",
    options: ["Global Unicast", "Link-Local", "Unique Local", "Multicast"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Addresses starting with a 2 or 3 fall into the 2000::/3 range, making them Global Unicast Addresses (GUAs).",
  },

  // --- Link-Local Addresses ---
  {
    id: 26,
    question:
      "Which of the following statements about IPv6 Link-Local addresses is true?",
    options: [
      "They are routable across the global internet.",
      "Every IPv6-enabled interface must have a link-local address.",
      "They are used for inter-site communication.",
      "They always begin with the prefix FC00.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An IPv6 interface MUST have a link-local address to operate. It is used for communication on the local subnet, NDP, and routing protocol neighbor establishment.",
  },
  {
    id: 27,
    question: "Are Link-Local addresses routable?",
    options: [
      "Yes, they are routed across the internet just like Global Unicast addresses.",
      "Yes, but only within a single autonomous system and its downstream networks.",
      "No, routers will not forward packets with a link-local source or destination address.",
      "No, they are only used to test the local device and never carry real traffic.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Link-Local addresses are strictly limited to the local link (broadcast domain/subnet). Routers will drop any packet destined for or sourced from a link-local address if it attempts to cross a router boundary.",
  },
  {
    id: 28,
    question:
      "When viewing an IPv6 routing table, what type of address is most commonly seen as the next-hop address?",
    options: [
      "Global Unicast Address",
      "Unique Local Address",
      "Link-Local Address",
      "Multicast Address",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "IPv6 routing protocols (like OSPFv3 and EIGRP) typically use the neighbor's Link-Local Address as the next-hop IP in the routing table, rather than their GUA.",
  },
  {
    id: 29,
    question:
      "How are Link-Local addresses typically created if not manually configured?",
    options: [
      "They are assigned by a DHCPv6 server, which the host must contact before it can use the local link at all.",
      "The router automatically generates them using the FE80::/10 prefix and the EUI-64 process (or a random interface ID).",
      "They are inherited from the nearest DNS server after the host has registered its hostname with that same server.",
      "They are broadcasted by the default gateway to every host the moment that it joins the local subnet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If not manually configured, an IPv6 node automatically self-assigns a link-local address using FE80::/10 as the network portion and dynamically generating the host portion.",
  },
  {
    id: 30,
    question:
      "Why might a network administrator choose to manually configure Link-Local addresses on routers?",
    options: [
      "To allow them to be routed over the internet to remote sites for redundancy.",
      "To prevent duplicate MAC addresses on the same broadcast domain.",
      "To make them shorter, recognizable, and easier to manage (e.g., fe80::1).",
      "To increase the bandwidth of the link between neighboring routers.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Automatically generated LLAs are long and complex. Manually configuring simple LLAs (like fe80::1 for Router 1, fe80::2 for Router 2) makes troubleshooting and static routing much easier.",
  },
  {
    id: 31,
    question:
      "Which command manually configures a Link-Local address on a Cisco router interface?",
    options: [
      "ipv6 address fe80::1",
      "ipv6 address fe80::1/64",
      "ipv6 address fe80::1 link-local",
      "ipv6 local-address fe80::1",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'link-local' keyword must be appended to the command to tell the router this is the designated link-local address, overriding the auto-generated one.",
  },
  {
    id: 32,
    question:
      "If a router has multiple interfaces, can you use the exact same Link-Local address (e.g., fe80::1) on all of them?",
    options: [
      "Yes, because Link-Local addresses only need to be unique on their specific local link.",
      "No, every IP address on the router must be unique across all of its interfaces.",
      "Yes, but only if all the interfaces belong to the exact same VLAN.",
      "No, this will trigger a duplicate address detection (DAD) failure on every interface.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Because LLAs are never routed off the local link, it is perfectly valid (and a common practice) to use the exact same LLA (like fe80::1) on every interface of a single router.",
  },
  {
    id: 33,
    question:
      "When pinging a Link-Local address from a PC or router, what extra piece of information is often required?",
    options: [
      "The MAC address of the destination device that resides on the local network segment",
      "The Zone ID (the specific outgoing interface, e.g., %eth0 or %GigabitEthernet0/0)",
      "The subnet mask of the local network segment that contains the target device",
      "The default gateway that the device should use to reach the remote target",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because the same LLA prefix exists on all interfaces, the OS doesn't know which physical interface to send the ping out of. You must specify the Zone ID (interface) to direct the traffic.",
  },
  {
    id: 34,
    question:
      "Does an interface require a Global Unicast Address to function in an IPv6 local network?",
    options: [
      "Yes, otherwise it cannot communicate with any device on the local network.",
      "No, the Link-Local address alone is sufficient for local subnet communication.",
      "Yes, but only when the device needs to use DHCPv6 for addressing.",
      "No, but it requires a Unique Local Address to join the local subnet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Nodes on the same subnet can communicate entirely using their Link-Local addresses. A GUA is only required if the device needs to communicate off-subnet.",
  },
  {
    id: 35,
    question:
      "Which of the following is true about the structure of an auto-generated Link-Local address?",
    options: [
      "The first 10 bits are 1111 1110 10.",
      "The first 64 bits are always exactly FE80:0000:0000:0000.",
      "The Interface ID is always 64 bits long.",
      "All of the above.",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "An LLA falls in the FE80::/10 range. Standard implementation sets the next 54 bits to zero, meaning the first 64 bits are FE80::. The remaining 64 bits form the Interface ID.",
  },

  // --- EUI-64 & Interface IDs ---
  {
    id: 36,
    question: "What is the purpose of the EUI-64 process?",
    options: [
      "To compress IPv6 addresses so they can be typed in a shortened form",
      "To automatically generate a 64-bit IPv6 Interface ID from a 48-bit MAC address.",
      "To translate IPv4 addresses into equivalent IPv6 addresses for migration.",
      "To encrypt the IPv6 header to protect the address information.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Extended Unique Identifier (EUI-64) takes a client's 48-bit Ethernet MAC address and manipulates it to create a globally unique 64-bit Interface ID.",
  },
  {
    id: 37,
    question:
      "What 16-bit hex value is inserted into the middle of a MAC address during the EUI-64 process?",
    options: ["FFFF", "FFFE", "FE80", "0000"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EUI-64 splits the 48-bit MAC address in half (24 bits OUI, 24 bits device ID) and inserts the 16-bit hex value 'FFFE' in the exact middle.",
  },
  {
    id: 38,
    question:
      "Which bit of the MAC address is flipped (inverted) during the EUI-64 process?",
    options: [
      "The 1st bit (the individual/group bit)",
      "The 7th bit (the Universal/Local bit)",
      "The 8th bit (the last bit of the first octet)",
      "The 64th bit (the last bit of the full address)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 7th bit of the first byte of the MAC address (the U/L bit) is flipped. If it's 0, it becomes 1, indicating the address has been modified to be globally unique.",
  },
  {
    id: 39,
    question:
      "A device has the MAC address 00:AA:BB:CC:DD:EE. What is its EUI-64 Interface ID?",
    options: [
      "02AA:BBFF:FECC:DDEE",
      "00AA:BBFF:FECC:DDEE",
      "02AA:BBFF:FFCC:DDEE",
      "00AA:BBFE:FFCC:DDEE",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "1) Split MAC: 00AA:BB CC:DDEE. 2) Insert FFFE: 00AA:BBFF:FECC:DDEE. 3) Flip 7th bit of 00 (00000000 becomes 00000010, which is 02). Result: 02AA:BBFF:FECC:DDEE.",
  },
  {
    id: 40,
    question:
      "A device has the MAC address 11:22:33:44:55:66. What is its EUI-64 Interface ID?",
    options: [
      "1322:33FF:FE44:5566",
      "1122:33FF:FE44:5566",
      "1122:33FF:FF44:5566",
      "0122:33FF:FE44:5566",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Split: 1122:33 44:5566. Insert: 1122:33FF:FE44:5566. Flip 7th bit of 11. Hex 11 = 0001 0001. Flipping 7th bit gives 0001 0011, which is Hex 13. Result: 1322:33FF:FE44:5566.",
  },
  {
    id: 41,
    question:
      "Which Cisco IOS command configures an interface to use the prefix 2001:DB8:1::/64 and auto-generate the host portion using EUI-64?",
    options: [
      "ipv6 address 2001:db8:1::/64 autoconfig",
      "ipv6 address 2001:db8:1::/64 eui-64",
      "ipv6 address 2001:db8:1::/64 dhcp",
      "ipv6 address 2001:db8:1::/64 anycast",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'eui-64' keyword tells the router to take the specified /64 prefix and append its own EUI-64 Interface ID to create the full 128-bit IPv6 address.",
  },
  {
    id: 42,
    question:
      "Why do modern operating systems (like Windows, macOS, and iOS) often avoid using EUI-64 for Global Unicast Addresses by default?",
    options: [
      "It is too slow to calculate for modern devices that need to generate addresses rapidly on the network.",
      "It creates duplicate IP addresses because the same vendor MAC address is used by multiple devices on the network.",
      "Privacy concerns; because the MAC address is embedded in the IP, a device can be tracked as it moves between networks.",
      "It requires a DHCPv6 server to be present on the local network before any address can be used at all.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "RFC 4941 introduced Privacy Extensions, which generate randomized, temporary Interface IDs. Embedding the physical MAC address in the global IP allows advertisers/attackers to track the user across the internet.",
  },
  {
    id: 43,
    question:
      "When using Privacy Extensions instead of EUI-64, how does a host ensure its randomly generated Interface ID is unique on the subnet?",
    options: [
      "It relies on the router to check.",
      "It uses Duplicate Address Detection (DAD).",
      "It queries the DNS server.",
      "It broadcasts a request.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Regardless of how an IPv6 address is generated, the host performs Duplicate Address Detection (DAD) using Neighbor Solicitation messages before officially using the IP.",
  },
  {
    id: 44,
    question:
      "In standard IPv6 networking, what is the length of the Interface ID (host portion)?",
    options: ["32 bits", "48 bits", "64 bits", "80 bits"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A standard IPv6 subnet is heavily recommended to be /64. This leaves exactly 64 bits for the Interface ID.",
  },
  {
    id: 45,
    question:
      "What is the consequence of subnetting an IPv6 LAN smaller than a /64 (e.g., using a /80)?",
    options: [
      "It breaks OSPFv3 because the routing protocol is unable to exchange routes on that particular subnet.",
      "It breaks Stateless Address Autoconfiguration (SLAAC) and EUI-64, which strictly require a 64-bit interface ID.",
      "It prevents Link-Local addresses from forming on any of the affected interfaces of the network.",
      "It causes broadcast storms that quickly flood the entire local network with repeated, duplicated frames.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "SLAAC and EUI-64 are hardcoded to rely on a /64 prefix. Using a longer prefix on a LAN breaks these autoconfiguration features.",
  },

  // --- Multicast Addresses ---
  {
    id: 46,
    question:
      "Which IPv6 multicast address targets all IPv6-enabled nodes on the local link?",
    options: ["FF02::1", "FF02::2", "FF02::5", "FF02::9"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "FF02::1 is the All-Nodes multicast address. A packet sent here acts similarly to a local IPv4 broadcast (255.255.255.255).",
  },
  {
    id: 47,
    question:
      "Which IPv6 multicast address targets all IPv6-enabled routers on the local link?",
    options: ["FF02::1", "FF02::2", "FF02::A", "FF02::C"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "FF02::2 is the All-Routers multicast address. Hosts send Router Solicitations to this address.",
  },
  {
    id: 48,
    question:
      "Which routing protocol uses the IPv6 multicast address FF02::5 and FF02::6?",
    options: ["RIPng", "EIGRP for IPv6", "OSPFv3", "BGP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "OSPFv3 uses FF02::5 for All OSPF Routers and FF02::6 for All DR/BDR Routers, equivalent to 224.0.0.5 and 224.0.0.6 in IPv4.",
  },
  {
    id: 49,
    question: "Which routing protocol uses the IPv6 multicast address FF02::A?",
    options: ["RIPng", "EIGRP for IPv6", "OSPFv3", "IS-IS"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EIGRP for IPv6 uses FF02::A (equivalent to 224.0.0.10 in IPv4).",
  },
  {
    id: 50,
    question: "Which routing protocol uses the IPv6 multicast address FF02::9?",
    options: ["RIPng", "EIGRP for IPv6", "OSPFv3", "BGP"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "RIP next generation (RIPng) uses FF02::9 (equivalent to 224.0.0.9 in IPv4).",
  },
  {
    id: 51,
    question: "What is a Solicited-Node Multicast Address used for?",
    options: [
      "Routing updates that are exchanged between OSPF neighboring routers",
      "Address resolution (finding a MAC address) and Duplicate Address Detection (DAD)",
      "Requesting an IPv6 address and other options from a DHCPv6 server",
      "Pinging all of the routers that are present on the local link",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Solicited-Node Multicast replaces IPv4 ARP broadcasts. It provides a more targeted, efficient way to resolve IPv6 addresses to MAC addresses and check for IP conflicts.",
  },
  {
    id: 52,
    question: "What is the prefix for all Solicited-Node Multicast Addresses?",
    options: [
      "FF02::1:FF00:0000/104",
      "FF02::2:FF00:0000/104",
      "FF02::1:FE00:0000/104",
      "FF00::/8",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Every IPv6 address is mapped to a Solicited-Node Multicast address beginning with FF02::1:FF, followed by the last 24 bits of the IPv6 address.",
  },
  {
    id: 53,
    question:
      "A device has the IPv6 address 2001:DB8::ABCD:1234:5678. What is its Solicited-Node Multicast Address?",
    options: [
      "FF02::1:FF34:5678",
      "FF02::1:FFCD:1234",
      "FF02::2:FF34:5678",
      "FF02::1:FF12:3456",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Take the prefix FF02::1:FF and append the last 24 bits (last 6 hex characters) of the host IP. The last 6 chars are 34:5678. Result: FF02::1:FF34:5678.",
  },
  {
    id: 54,
    question:
      "How does the Solicited-Node Multicast process map to an Ethernet MAC address?",
    options: [
      "It uses an ARP broadcast to resolve the address on the local network segment.",
      "It maps to 33:33:xx:xx:xx:xx, where the x's are the last 32 bits of the multicast IP address.",
      "It uses the IPv4 multicast MAC prefix 01:00:5E:xx:xx:xx instead.",
      "It uses the physical MAC address of the target device directly as the destination.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IPv6 multicast maps to Ethernet MAC addresses beginning with 33:33, followed by the last 32 bits of the IPv6 multicast address.",
  },
  {
    id: 55,
    question:
      "Why is the Solicited-Node Multicast approach more efficient than IPv4 ARP?",
    options: [
      "It is faster because it uses UDP instead of TCP, eliminating the connection setup latency for each resolution request sent on the link.",
      "It relies on the router to answer all resolution requests, which means that the hosts themselves never need to process or respond to any query.",
      "It targets a specific multicast group that usually contains only one host, avoiding interrupting every host on the subnet like a broadcast does.",
      "It is purely stateless, meaning it requires no neighbor cache, no state tracking, and no additional protocol overhead of any kind.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "IPv4 ARP broadcasts interrupt the CPU of every host on the subnet. Solicited-Node Multicast only interrupts the NICs of devices actively listening to that specific multicast group.",
  },

  // --- NDP & ICMPv6 ---
  {
    id: 56,
    question:
      "Which protocol forms the core of IPv6 local link operations, replacing IPv4 ARP and providing router discovery?",
    options: ["DHCPv6 (Dynamic Host Configuration Protocol)", "ICMPv4 (Internet Control Message Protocol version 4)", "NDP (Neighbor Discovery Protocol)", "SLAAC (Stateless Address Autoconfiguration)"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "NDP (Neighbor Discovery Protocol) operates using ICMPv6 messages to handle address resolution, duplicate address detection, and router discovery.",
  },
  {
    id: 57,
    question:
      "Which ICMPv6 message type is used to find the MAC address of another device on the local network (similar to an ARP Request)?",
    options: [
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A Neighbor Solicitation (NS) message is sent to a target's Solicited-Node Multicast address to ask for its MAC address.",
  },
  {
    id: 58,
    question:
      "Which ICMPv6 message type is used to reply to a MAC address request (similar to an ARP Reply)?",
    options: [
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The target responds with a Neighbor Advertisement (NA) message, typically sent as a unicast directly back to the solicitor, containing its MAC address.",
  },
  {
    id: 59,
    question:
      "When a host boots up, which ICMPv6 message does it send to discover the local default gateway and obtain network prefix information?",
    options: [
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Hosts send a Router Solicitation (RS) to the All-Routers multicast address (FF02::2) to prompt routers to respond immediately.",
  },
  {
    id: 60,
    question:
      "Which ICMPv6 message is sent by a router to provide hosts with network prefixes, default gateway info, and autoconfiguration flags?",
    options: [
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Routers send Router Advertisements (RAs) periodically (usually every 200 seconds) or in response to an RS, providing SLAAC details and gateway info.",
  },
  {
    id: 61,
    question: "What is Duplicate Address Detection (DAD)?",
    options: [
      "A feature that allows a device to use two IP addresses simultaneously for load balancing and redundancy.",
      "A process where an interface checks if its intended IPv6 address is already in use on the local link before assigning it.",
      "A routing protocol mechanism that is used to prevent routing loops from forming in the network topology.",
      "A security feature that blocks MAC address spoofing by validating the source address on each and every incoming frame.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Before officially claiming an IPv6 address, a host performs DAD to ensure no other device on the link is already using it.",
  },
  {
    id: 62,
    question:
      "Which NDP messages are used to perform Duplicate Address Detection (DAD)?",
    options: [
      "RS and RA",
      "NS and NA",
      "Echo Request and Echo Reply",
      "DHCP Discover and Offer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The host sends a Neighbor Solicitation (NS) for its own intended IP. If another host replies with a Neighbor Advertisement (NA), the address is a duplicate and DAD fails.",
  },
  {
    id: 63,
    question:
      "During the DAD process, what source IP address does the host use when sending the Neighbor Solicitation?",
    options: [
      "Its intended Global Unicast Address",
      "Its Link-Local Address",
      "The Unspecified Address (::)",
      "The Loopback Address (::1)",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Because the host hasn't verified the address is unique yet, it cannot legally use it. It sends the NS using the Unspecified Address (::) as the source.",
  },
  {
    id: 64,
    question:
      "Which ICMPv6 message type corresponds to a Router Advertisement (RA)?",
    options: ["Type 133", "Type 134", "Type 135", "Type 136"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "RS is Type 133, RA is Type 134, NS is Type 135, and NA is Type 136.",
  },
  {
    id: 65,
    question:
      "Which ICMPv6 message type corresponds to a Neighbor Solicitation (NS)?",
    options: ["Type 133", "Type 134", "Type 135", "Type 136"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation: "Neighbor Solicitation is ICMPv6 Type 135.",
  },

  // --- SLAAC & DHCPv6 ---
  {
    id: 66,
    question: "What does SLAAC stand for in IPv6?",
    options: [
      "Stateful Local Address Assignment Client",
      "Stateless Address Autoconfiguration",
      "Standard Local Area Address Configuration",
      "Static Link Address Assignment Control",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SLAAC (Stateless Address Autoconfiguration) allows hosts to generate their own IP addresses using prefix information received from a router, without needing a DHCP server.",
  },
  {
    id: 67,
    question:
      "In an IPv6 Router Advertisement (RA), what does the 'A' flag (Autonomous Address Autoconfiguration flag) tell the host?",
    options: [
      "To use DHCPv6 to obtain the IPv6 address for the interface.",
      "To use SLAAC to create its own IPv6 address from the provided prefix.",
      "To ignore the advertised prefix and request a new one.",
      "To request DNS information from the local DNS server.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When the A flag is set to 1, the router instructs the host to autonomously configure its own global unicast address using the prefix provided in the RA.",
  },
  {
    id: 68,
    question:
      "What does the 'O' flag (Other Configuration flag) indicate in a Router Advertisement?",
    options: [
      "To use SLAAC for the IP address, but contact a stateless DHCPv6 server for 'other' information like DNS servers.",
      "To use Stateful DHCPv6 to obtain both the IP address and all of the other configuration options.",
      "That the router is offline and unavailable, so the hosts should not expect any further configuration from it.",
      "To use an Other routing protocol, which the router will begin advertising shortly after this flag is seen.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The O flag tells hosts that SLAAC provides the addressing, but a DHCPv6 server is available to provide additional options like DNS and domain names (Stateless DHCPv6).",
  },
  {
    id: 69,
    question:
      "What does the 'M' flag (Managed Address Configuration flag) indicate in a Router Advertisement?",
    options: [
      "To use the router's MAC address as the network portion of the interface address rather than a prefix.",
      "To use SLAAC for the address and for all of the other configuration settings as well.",
      "To ignore SLAAC entirely and contact a Stateful DHCPv6 server to receive an assigned IP address and options.",
      "To manually configure the IP address on the interface before any traffic is ever sent over it.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "When the M flag is set to 1, the host knows it must use Stateful DHCPv6 to get its IP address, exactly like traditional IPv4 DHCP.",
  },
  {
    id: 70,
    question:
      "What is the primary difference between Stateless DHCPv6 and Stateful DHCPv6?",
    options: [
      "Stateless is faster but less secure, so most production networks avoid using it entirely and instead prefer the stateful DHCPv6 server model for all clients.",
      "Stateful DHCPv6 tracks which IP addresses are assigned to which clients (maintains state); Stateless DHCPv6 only provides options like DNS and does not assign IPs.",
      "Stateful uses TCP while Stateless uses UDP, which makes the stateless method much faster, but also far less reliable and more prone to packet loss overall.",
      "There is no difference between the two methods; they are simply two different names for the exact same process and configuration outcome on the server.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In Stateful DHCPv6, the server maintains a database of bindings (leases). In Stateless DHCPv6, the server doesn't track clients; it just hands out generic config info (DNS) upon request.",
  },
  {
    id: 71,
    question:
      "Which multicast address do clients use to send a DHCPv6 Solicit message to find a DHCPv6 server?",
    options: ["FF02::1", "FF02::2", "FF02::1:2", "FF05::1:3"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Clients send DHCPv6 Solicit messages to the All-DHCP-Relay-Agents-and-Servers link-local multicast address, which is FF02::1:2.",
  },
  {
    id: 72,
    question:
      "Instead of a MAC address, what identifier does DHCPv6 use to uniquely identify clients and servers?",
    options: [
      "Link-Local address",
      "DUID (DHCP Unique Identifier)",
      "EUI-64 value",
      "SLAAC Hash",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCPv6 uses a DUID to identify clients. This ensures the identification remains constant even if the client's network interface hardware changes.",
  },
  {
    id: 73,
    question: "Which UDP ports are used by DHCPv6?",
    options: [
      "UDP 67 (Server) and 68 (Client)",
      "UDP 546 (Client) and 547 (Server)",
      "TCP 546 and 547",
      "UDP 53 and 54",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unlike IPv4 (67/68), DHCPv6 uses UDP port 546 for clients receiving messages, and UDP port 547 for servers and relay agents receiving messages.",
  },
  {
    id: 74,
    question:
      "By default, what is the default gateway for an IPv6 host using SLAAC?",
    options: [
      "The Global Unicast Address of the router that is configured as the gateway.",
      "The Link-Local Address of the router that sent the Router Advertisement.",
      "The Unspecified Address that the router uses for all advertisements.",
      "SLAAC does not provide a default gateway to the hosts by itself.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When a host processes a Router Advertisement, it uses the source IP of the RA packet (which is the router's Link-Local Address) as its default gateway.",
  },
  {
    id: 75,
    question:
      "Which recent IPv6 standard allows SLAAC to provide DNS server information directly in the Router Advertisement, completely removing the need for DHCPv6?",
    options: ["RDNSS (Recursive DNS Server)", "EUI-64 (Extended Unique Identifier)", "IPsec (IP Security protocol suite)", "DAD (Duplicate Address Detection)"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "RFC 8106 defined the RDNSS option for Router Advertisements, allowing routers to broadcast DNS server IPs directly to SLAAC clients.",
  },

  // --- IPv6 Subnetting & Routing ---
  {
    id: 76,
    question:
      "An ISP assigns a company the IPv6 global routing prefix 2001:DB8:ACAD::/48. If the company uses standard /64 subnets, how many bits are available for the Subnet ID?",
    options: ["8 bits", "16 bits", "32 bits", "64 bits"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "64 (required subnet size) - 48 (provided prefix) = 16 bits dedicated to the Subnet ID field.",
  },
  {
    id: 77,
    question:
      "Following the previous question, how many distinct /64 subnets can the company create with a 16-bit Subnet ID?",
    options: ["256", "4,096", "65,536", "Over 4 billion"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "2^16 equals 65,536 subnets. A single /48 provides a massive amount of internal subnets.",
  },
  {
    id: 78,
    question:
      "Given the prefix 2001:DB8:ACAD::/48, what is the network address of the 5th subnet (assuming you start counting at 0)?",
    options: [
      "2001:DB8:ACAD:0004:0000:0000:0000:0000",
      "2001:DB8:ACAD:0005:0000:0000:0000:0000",
      "2001:DB8:ACAD:0004:0:0:0:0",
      "Both A and C are correct representations",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The subnets increment in hex: 0, 1, 2, 3, 4. So the 5th subnet is 2001:DB8:ACAD:0004::/64, which is abbreviated as 2001:DB8:ACAD:4::/64.",
  },
  {
    id: 79,
    question:
      "What is the recommended IPv6 subnet prefix length for a point-to-point router link according to RFC 6164 (to prevent ping-pong attacks and save addresses)?",
    options: ["/64", "/126", "/127", "/128"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "While /64 works, RFC 6164 recommends using /127 for inter-router point-to-point links. It leaves only 2 IP addresses (0 and 1) available, mirroring IPv4's /30.",
  },
  {
    id: 80,
    question:
      "Which global configuration command must be enabled on a Cisco router for it to forward IPv6 packets and send Router Advertisements?",
    options: [
      "ipv6 route enable",
      "ip routing ipv6",
      "ipv6 unicast-routing",
      "enable ipv6",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'ipv6 unicast-routing' command enables IPv6 routing. Without it, the router acts only as an IPv6 host and will not forward packets or send RAs.",
  },
  {
    id: 81,
    question:
      "How do you configure an IPv6 default static route on a Cisco router pointing to next-hop 2001:db8::1?",
    options: [
      "ipv6 route 0.0.0.0 0.0.0.0 2001:db8::1",
      "ipv6 route ::/128 2001:db8::1",
      "ipv6 route ::/0 2001:db8::1",
      "ipv6 route default 2001:db8::1",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The IPv6 default route is ::/0. The command syntax is 'ipv6 route ::/0 [next-hop]'.",
  },
  {
    id: 82,
    question:
      "If you configure an IPv6 static route using a Link-Local address as the next-hop, what else MUST you specify?",
    options: [
      "The MAC address",
      "The exit interface",
      "The routing protocol",
      "The administrative distance",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because link-local addresses (FE80::) are identical across all local subnets, the router won't know which physical interface to use to reach the next-hop unless you specify the exit interface (e.g., ipv6 route ::/0 G0/0 FE80::1).",
  },
  {
    id: 83,
    question:
      "In the output of 'show ipv6 route', what does the 'L' code represent?",
    options: [
      "Link-Local (the FE80::/10 route used on the local link)",
      "Local route (a /128 route for the exact IP address configured on the interface)",
      "Learned route (a route received from a dynamic routing protocol)",
      "Logical interface (a virtual interface without physical hardware)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Like IPv4, IPv6 creates a 'C' (Connected) route for the subnet prefix. The 'L' (Local) route is a /128 host route pointing specifically to the IP address assigned to the router's own interface to process traffic directed at it.",
  },
  {
    id: 84,
    question: "What is Dual-Stack routing?",
    options: [
      "Running two routing protocols (like OSPF and EIGRP) on the same router at the same time.",
      "Configuring a device to run both IPv4 and IPv6 protocol stacks simultaneously on the same interfaces.",
      "Tunneling IPv6 packets inside an IPv4 header so they can traverse an IPv4-only network.",
      "Translating IPv4 addresses to IPv6 using a Network Address Translation device.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Dual-Stack refers to nodes and routers running both IPv4 and IPv6 side-by-side, processing both types of traffic independently without translation or tunneling.",
  },
  {
    id: 85,
    question:
      "Which transition mechanism encapsulates an IPv6 packet inside an IPv4 packet to traverse an IPv4-only network?",
    options: ["NAT64 (Network Address Translation IPv6 to IPv4)", "Dual-Stack (running IPv4 and IPv6 together)", "Tunneling (e.g., 6to4, ISATAP)", "SLAAC (Stateless Address Autoconfiguration)"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Tunneling wraps IPv6 packets inside an IPv4 header so they can cross legacy IPv4 networks.",
  },
  {
    id: 86,
    question:
      "Which transition mechanism translates IPv6 packets into IPv4 packets (and vice versa) allowing communication between IPv6-only and IPv4-only hosts?",
    options: ["NAT64", "Dual-Stack", "GRE Tunnels", "IPsec"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "NAT64 is a Network Address Translation mechanism that converts IPv6 packets into IPv4 packets to allow disparate networks to communicate.",
  },

  // --- Configuration & Verification ---
  {
    id: 87,
    question:
      "Which command assigns the global unicast address 2001:db8:1::1/64 to an interface?",
    options: [
      "ipv6 address 2001:db8:1::1 mask /64",
      "ip address ipv6 2001:db8:1::1 /64",
      "ipv6 address 2001:db8:1::1/64",
      "set ipv6 2001:db8:1::1/64",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The interface command 'ipv6 address [ip-address]/[prefix-length]' directly assigns the IPv6 address and subnet mask.",
  },
  {
    id: 88,
    question:
      "Which command displays a summarized list of interfaces, their IPv6 status, and their assigned IPv6 addresses?",
    options: [
      "show ip interface brief",
      "show ipv6 interface brief",
      "show ipv6 route",
      "show interfaces ipv6",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ipv6 interface brief' provides a quick overview of physical status and assigned IPv6 addresses (both GUA and Link-Local).",
  },
  {
    id: 89,
    question:
      "You issue 'show ipv6 interface brief' and an interface shows 'up / up', but only has an FE80:: address. Why does it lack a global address?",
    options: [
      "IPv6 routing is disabled on the router, so no global addresses can ever be created.",
      "The interface is administratively down, which prevents any address from being assigned to it.",
      "A global address has not been statically configured and no RA/DHCPv6 was received to auto-configure one.",
      "The cable is unplugged from the interface, so it cannot receive any advertisements at all.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "When you simply type 'ipv6 enable' on an interface, it generates a Link-Local address automatically, but it will not have a Global Unicast Address until configured or assigned via SLAAC/DHCPv6.",
  },
  {
    id: 90,
    question:
      "Which command shows the IPv6 equivalent of the ARP table (the mappings of IPv6 addresses to MAC addresses)?",
    options: [
      "show ipv6 arp",
      "show ipv6 mac",
      "show ipv6 neighbors",
      "show ipv6 ndp",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Because NDP replaces ARP, the command 'show ipv6 neighbors' displays the IPv6 Neighbor Cache, showing IP-to-MAC mappings and their state.",
  },
  {
    id: 91,
    question:
      "In the 'show ipv6 neighbors' output, what does the state 'REACH' indicate?",
    options: [
      "The router is currently attempting to resolve the MAC address of the neighbor.",
      "The mapping is valid and reachability to the neighbor has been confirmed recently.",
      "The mapping has expired and the entry is being removed from the table.",
      "The neighbor is a router that advertises itself on the link.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "REACH (Reachable) means the neighbor has responded recently, and the MAC mapping is actively trusted for forwarding packets.",
  },
  {
    id: 92,
    question:
      "In the 'show ipv6 neighbors' output, what does the state 'STALE' indicate?",
    options: [
      "The MAC address is incorrect, so the entry must be deleted and re-learned before any traffic can be forwarded.",
      "The interface is down, so the router cannot send or receive any packets on that link until it has been restored to service.",
      "The timer for reachability has expired; the router will still use the MAC, but will send a new NS to verify it upon the next use.",
      "The entry has been permanently deleted from the neighbor table and will never be automatically rebuilt again on the router.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A STALE entry means the router hasn't verified the neighbor's presence recently. It assumes the MAC is still good, but will check it (transitioning to DELAY state) the next time a packet is sent.",
  },
  {
    id: 93,
    question:
      "In the 'show ipv6 neighbors' output, what does the state 'INCMP' (Incomplete) indicate?",
    options: [
      "The router sent a Neighbor Solicitation but has not yet received a Neighbor Advertisement.",
      "The address is a duplicate of another address and cannot be used on the local network.",
      "The interface lacks an IPv6 address, so no neighbor entry can ever be resolved.",
      "The neighbor is blocking ICMP, so the solicitation messages never arrive at all.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "INCMP means Address Resolution is in progress. The NS was sent, but the NA reply hasn't arrived, so the MAC is unknown.",
  },
  {
    id: 94,
    question: "What command verifies the IPv6 routing table?",
    options: [
      "show ip route v6",
      "show ipv6 route",
      "show route ipv6",
      "show ip route ipv6",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'show ipv6 route' displays the IPv6 routing table, parallel to 'show ip route' for IPv4.",
  },
  {
    id: 95,
    question:
      "When pinging the All-Routers multicast address (ping ipv6 FF02::2) from a PC, what is the expected result?",
    options: [
      "The ping will fail because multicast pings are disabled.",
      "All IPv6 routers on the local link will reply to the ping.",
      "Only the default gateway will reply.",
      "The packet is routed to the internet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Pinging a link-local multicast group address like FF02::2 causes all devices subscribed to that group (all routers on the subnet) to reply with their Link-Local unicast addresses.",
  },
  {
    id: 96,
    question:
      "What does the command 'ipv6 enable' do on a Cisco router interface?",
    options: [
      "It enables IPv6 routing globally on all of the interfaces of the entire router at once.",
      "It automatically generates an IPv6 Link-Local address, even if no Global Unicast address is configured.",
      "It configures SLAAC on the interface so that addresses are automatically assigned to hosts.",
      "It disables all IPv4 processing on the interface so that only IPv6 traffic is allowed on it.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'ipv6 enable' is used to turn on IPv6 processing on an interface and automatically generate a Link-Local address without needing to configure a global address.",
  },
  {
    id: 97,
    question:
      "How does a Cisco router behave if 'ipv6 unicast-routing' is NOT configured, but an interface is configured with an IPv6 address?",
    options: [
      "The IPv6 address is rejected by the router, and the interface will not come up until the 'ipv6 unicast-routing' command has been issued in global configuration mode.",
      "The interface stays administratively down until the 'ipv6 unicast-routing' command has been enabled globally on the router, even if a valid IPv6 address has been configured on it.",
      "The router acts as an IPv6 host. It can ping local and remote networks (if it has a gateway), but it will not forward IPv6 packets between its own interfaces or send RAs.",
      "The router sends Router Advertisements on all of its interfaces, but it will drop any incoming packets that need to be forwarded across the network to other devices.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Without 'ipv6 unicast-routing', the router acts exactly like a PC/Host. It participates in IPv6, but it cannot act as a router for other devices.",
  },
  {
    id: 98,
    question:
      "If an interface is configured with the address 2001:db8:1::1/64, what is the subnet's network prefix?",
    options: [
      "2001:db8:1::/64",
      "2001:db8::/32",
      "2000::/3",
      "2001:db8:1::1/128",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The /64 prefix length means the first 64 bits (the first four hextets: 2001:0db8:0001:0000) identify the network prefix. The prefix is 2001:db8:1::/64.",
  },
  {
    id: 99,
    question:
      "You want to find the exact IPv6 multicast groups a specific router interface has joined. Which command shows this?",
    options: [
      "show ipv6 route",
      "show ipv6 neighbors",
      "show ipv6 interface",
      "show ipv6 multicast",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'show ipv6 interface [id]' command provides verbose output, including the Link-Local address, Global addresses, and a list of all multicast groups the interface has joined (e.g., FF02::1, FF02::2, Solicited-Node groups).",
  },
  {
    id: 100,
    question: "Which characteristic is TRUE regarding IPv6 fragmentation?",
    options: [
      "IPv6 routers fragment packets that exceed the MTU of the outgoing link, just like IPv4 routers do when forwarding them.",
      "Fragmentation is handled entirely by the sending host; routers drop oversized packets and send an 'ICMPv6 Packet Too Big' message.",
      "IPv6 headers are fragmented at each router hop, but the payload itself is left intact and is never divided up at all.",
      "IPv6 does not support fragmentation at all, so any large packets are simply discarded silently by the routers on the path.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To improve routing efficiency, IPv6 routers do not fragment packets. If a packet exceeds the link MTU, the router drops it and sends an ICMPv6 'Packet Too Big' message. The sending host must perform Path MTU Discovery and fragment the packet itself.",
  },
];
