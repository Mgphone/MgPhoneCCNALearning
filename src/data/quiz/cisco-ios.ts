import type { QuizQuestion } from "./types";
export const ciscoIosQuestions: QuizQuestion[] = [
  // --- Basic CLI & Device Management ---
  {
    id: 1,
    question:
      "Which command saves the running configuration to the startup configuration?",
    options: [
      "save running-config startup-config is the only valid command",
      "copy running-config startup-config is the only valid command",
      "write memory, which was removed in modern Cisco IOS",
      "Both 'copy running-config startup-config' and 'write memory'",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Both 'copy running-config startup-config' and 'write memory' (legacy command) save the current active configuration to NVRAM so it is retained after a reboot.",
  },
  {
    id: 2,
    question:
      "Which mode allows you to configure interface-specific settings on a Cisco router?",
    options: [
      "User EXEC mode",
      "Privileged EXEC mode",
      "Global Configuration mode",
      "Interface Configuration mode",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Interface Configuration mode (Router(config-if)#) is used to apply settings to a specific interface.",
  },
  {
    id: 3,
    question:
      "What is the command to encrypt all plaintext passwords on a Cisco device?",
    options: [
      "service password-encryption",
      "encrypt passwords all",
      "enable secret",
      "security password-protect",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'service password-encryption' command encrypts all current and future plaintext passwords in the configuration file.",
  },
  {
    id: 4,
    question:
      "Which command displays the status of all interfaces, including their IP addresses and line status, in a summarized format?",
    options: [
      "show interfaces",
      "show ip interface brief",
      "show ip route",
      "show running-config",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip interface brief' is a quick way to verify the IP address, Layer 1 (Status), and Layer 2 (Protocol) status of all interfaces.",
  },
  {
    id: 5,
    question:
      "Which keystroke combination interrupts an ongoing ping or traceroute process in Cisco IOS?",
    options: ["Ctrl+C", "Ctrl+Z", "Ctrl+Shift+6", "Alt+F4"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Ctrl+Shift+6 is the default escape sequence in Cisco IOS to break out of processes like ping, traceroute, or DNS lookups.",
  },

  // --- Network Fundamentals (OSI & TCP/IP) ---
  {
    id: 6,
    question: "At which layer of the OSI model do routers primarily operate?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Application Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Routers operate at the Network Layer (Layer 3) of the OSI model, making forwarding decisions based on logical (IP) addresses.",
  },
  {
    id: 7,
    question:
      "Which TCP/IP protocol is used to resolve an IP address to a MAC address?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Address Resolution Protocol (ARP) is used to map a known IPv4 address to an unknown MAC address on a local network.",
  },
  {
    id: 8,
    question: "Which of the following is a characteristic of UDP?",
    options: [
      "Connection-oriented",
      "Three-way handshake",
      "Best-effort delivery",
      "Windowing and flow control",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "User Datagram Protocol (UDP) is connectionless and provides best-effort delivery without reliability mechanisms like acknowledgments or flow control.",
  },
  {
    id: 9,
    question: "What is the well-known TCP port number for HTTPS?",
    options: ["80", "22", "443", "3389"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "HTTPS uses TCP port 443 for secure web traffic, whereas HTTP uses port 80.",
  },
  {
    id: 10,
    question:
      "Which layer of the TCP/IP model is equivalent to the OSI model's top three layers?",
    options: [
      "Network Access Layer",
      "Internet Layer",
      "Transport Layer",
      "Application Layer",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The TCP/IP Application layer encompasses the functions of the OSI Application, Presentation, and Session layers.",
  },

  // --- Switching & VLANs ---
  {
    id: 11,
    question:
      "What does a switch do when it receives a frame with an unknown destination MAC address?",
    options: [
      "Drops the frame and sends an error message to the sender",
      "Floods the frame out all ports except the receiving port",
      "Sends it to the default gateway to be routed onward",
      "Sends an ARP request back to the sender to resolve the address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When a switch doesn't have the destination MAC in its MAC address table, it floods the frame out all active interfaces except the ingress interface.",
  },
  {
    id: 12,
    question: "Which command shows the MAC address table of a Cisco switch?",
    options: [
      "show mac address-table",
      "show arp",
      "show ip interface",
      "show switch mac-address",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show mac address-table' (or 'show mac-address-table' on older IOS versions) displays the MAC addresses learned by the switch.",
  },
  {
    id: 13,
    question: "What is the default VLAN on a Cisco switch?",
    options: ["VLAN 0", "VLAN 1", "VLAN 10", "VLAN 1002"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, all ports on a Cisco switch belong to VLAN 1. It is also the default native VLAN.",
  },
  {
    id: 14,
    question: "Which protocol is an IEEE standard used for VLAN trunking?",
    options: ["ISL", "802.1Q", "VTP", "DTP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "802.1Q is the industry-standard trunking protocol that inserts a 4-byte VLAN tag into the Ethernet frame.",
  },
  {
    id: 15,
    question: "What is the purpose of the native VLAN on an 802.1Q trunk?",
    options: [
      "To carry management traffic only",
      "To carry untagged traffic",
      "To negotiate trunking dynamically",
      "To block unauthorized VLANs",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The native VLAN carries untagged traffic over an 802.1Q trunk link. Both sides of the trunk must agree on the native VLAN.",
  },
  {
    id: 16,
    question:
      "Which command assigns a switch port to VLAN 20 as an access port?",
    options: [
      "switchport trunk allowed vlan 20",
      "switchport mode trunk",
      "switchport access vlan 20",
      "vlan 20 access",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "After configuring 'switchport mode access', 'switchport access vlan 20' statically assigns the interface to VLAN 20.",
  },
  {
    id: 17,
    question:
      "What is the Cisco proprietary protocol used to negotiate trunking automatically?",
    options: ["LACP", "PAgP", "DTP", "STP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Dynamic Trunking Protocol (DTP) is a Cisco proprietary protocol that dynamically negotiates the formation of a trunk link.",
  },
  {
    id: 18,
    question:
      "What happens if you issue the 'switchport trunk allowed vlan 10' command on an existing trunk carrying VLANs 10, 20, and 30?",
    options: [
      "VLAN 10 is added to the allowed list.",
      "Only VLAN 10 is allowed; 20 and 30 are removed.",
      "The command is rejected.",
      "The trunk goes down.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Without the 'add' keyword, the command overwrites the existing list, meaning only VLAN 10 will be permitted.",
  },
  {
    id: 19,
    question:
      "How do you enable routing between different VLANs on a Layer 3 switch?",
    options: [
      "Enable 'ip routing' globally and create Switch Virtual Interfaces (SVIs)",
      "Configure Router-on-a-Stick with subinterfaces and a trunk link",
      "Configure VTP to route traffic between the VLANs automatically",
      "Configure the 'ip forward' command on every access port on the switch",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "To route between VLANs on a Layer 3 switch, you must issue the 'ip routing' global command and configure SVIs (Interface VLAN) for each VLAN.",
  },
  {
    id: 20,
    question: "What is the purpose of Voice VLAN?",
    options: [
      "To translate voice traffic into data traffic before forwarding it",
      "To separate voice traffic from data traffic on the same switchport",
      "To encrypt all VoIP call traffic before it exits the switch",
      "To block data traffic from ever reaching an IP phone on the network",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Voice VLAN allows a single switchport to carry both untagged data traffic (for a PC) and tagged voice traffic (for an IP Phone) separately.",
  },

  // --- Spanning Tree Protocol (STP) & EtherChannel ---
  {
    id: 21,
    question:
      "What is the primary purpose of the Spanning Tree Protocol (STP)?",
    options: [
      "To prevent routing loops",
      "To prevent Layer 2 switching loops",
      "To aggregate multiple links",
      "To encrypt traffic between switches",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "STP prevents Layer 2 broadcast storms and switching loops by placing redundant ports in a blocking state.",
  },
  {
    id: 22,
    question: "How is the Root Bridge elected in STP?",
    options: [
      "The switch with the highest MAC address",
      "The switch with the highest Bridge ID",
      "The switch with the lowest Bridge ID",
      "The switch with the highest IP address",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Root Bridge is the switch with the lowest Bridge ID (BID). The BID consists of a Bridge Priority value and the switch's MAC address.",
  },
  {
    id: 23,
    question: "What is the default STP priority value on a Cisco switch?",
    options: ["0", "4096", "32768", "65535"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default bridge priority value is 32768. Because of the sys-id-ext (VLAN ID), VLAN 1 will show as 32769.",
  },
  {
    id: 24,
    question:
      "Which STP feature should be enabled on access ports connected to end devices to bypass the listening and learning states?",
    options: ["BPDU Guard", "Root Guard", "PortFast", "UplinkFast"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "PortFast transitions an access port immediately to the forwarding state, bypassing the standard STP delay.",
  },
  {
    id: 25,
    question:
      "What action does BPDU Guard take if a BPDU is received on a PortFast-enabled port?",
    options: [
      "It forwards the BPDU to the root bridge.",
      "It drops the BPDU and logs a message.",
      "It disables PortFast on that port.",
      "It puts the port into an err-disabled state.",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "BPDU Guard protects the STP topology by immediately shutting down (err-disabling) any PortFast port that receives a BPDU.",
  },
  {
    id: 26,
    question:
      "Which IEEE standard represents Rapid Spanning Tree Protocol (RSTP)?",
    options: ["802.1D", "802.1w", "802.1s", "802.1Q"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IEEE 802.1w is Rapid Spanning Tree Protocol (RSTP), which provides much faster convergence than legacy 802.1D STP.",
  },
  {
    id: 27,
    question: "What is the purpose of EtherChannel?",
    options: [
      "To logically bundle multiple physical links into a single logical link",
      "To create a VPN tunnel between two switches over the network",
      "To prevent Layer 2 loops automatically through the spanning tree",
      "To provide Power over Ethernet (PoE) to connected end devices",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "EtherChannel bundles multiple physical links into one logical link to increase bandwidth and provide redundancy.",
  },
  {
    id: 28,
    question:
      "Which protocol is the IEEE standard for EtherChannel negotiation?",
    options: ["PAgP", "STP", "LACP", "VTP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Link Aggregation Control Protocol (LACP) is the IEEE 802.3ad standard. PAgP is Cisco proprietary.",
  },
  {
    id: 29,
    question:
      "Which LACP mode actively initiates negotiation with the remote switch?",
    options: ["Active", "Passive", "Desirable", "Auto"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "In LACP, the 'active' mode sends LACP packets to initiate negotiation. 'Desirable' is the equivalent mode for PAgP.",
  },
  {
    id: 30,
    question:
      "To verify the status of an EtherChannel, which command should you use?",
    options: [
      "show etherchannel summary",
      "show interfaces trunk",
      "show spanning-tree",
      "show port-channel traffic",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show etherchannel summary' provides a quick view of the port-channel interfaces, the protocols used, and the physical ports assigned.",
  },

  // --- IPv4 Addressing & Subnetting ---
  {
    id: 31,
    question:
      "What is the network address for the IP address 192.168.10.45/28?",
    options: [
      "192.168.10.0",
      "192.168.10.32",
      "192.168.10.40",
      "192.168.10.48",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A /28 subnet has a block size of 16 (256 - 240). The multiples are 0, 16, 32, 48. 45 falls in the 192.168.10.32 subnet.",
  },
  {
    id: 32,
    question: "What is the broadcast address for the subnet 172.16.5.0/24?",
    options: ["172.16.5.1", "172.16.5.254", "172.16.5.255", "172.16.255.255"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In a /24 network, the last octet is completely for host bits. Setting all host bits to 1 gives the broadcast address: 172.16.5.255.",
  },
  {
    id: 33,
    question: "Which subnet mask provides exactly 6 usable host addresses?",
    options: [
      "255.255.255.248 (/29)",
      "255.255.255.252 (/30)",
      "255.255.255.240 (/28)",
      "255.255.255.224 (/27)",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A /29 subnet leaves 3 host bits. 2^3 = 8 total IPs. Minus network and broadcast = 6 usable hosts.",
  },
  {
    id: 34,
    question: "What is the primary purpose of a default gateway?",
    options: [
      "To resolve hostnames to their corresponding IP addresses",
      "To route traffic from one local VLAN to another VLAN locally",
      "To route traffic intended for destinations outside the local network",
      "To assign IP addresses to hosts on the network dynamically",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A default gateway (usually a router interface) is where a host sends traffic destined for IP addresses not on its local subnet.",
  },
  {
    id: 35,
    question: "Which of the following is a private IPv4 address?",
    options: ["11.0.0.1", "172.33.1.1", "192.168.200.5", "224.0.0.5"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Private IP ranges (RFC 1918) are 10.x.x.x, 172.16.x.x to 172.31.x.x, and 192.168.x.x. Therefore, 192.168.200.5 is private.",
  },
  {
    id: 36,
    question: "What is an APIPA (Automatic Private IP Addressing) address?",
    options: ["10.0.0.1", "169.254.x.x", "127.0.0.1", "192.0.2.x"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Hosts automatically assign themselves a 169.254.x.x (APIPA) address when they cannot reach a DHCP server.",
  },
  {
    id: 37,
    question:
      "You need a subnet mask that allows for 500 hosts. Which is the most efficient mask?",
    options: ["/22", "/23", "/24", "/25"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A /23 leaves 9 host bits. 2^9 - 2 = 510 usable hosts, which is the smallest subnet that can accommodate 500 hosts.",
  },
  {
    id: 38,
    question: "Which of the following represents the loopback address in IPv4?",
    options: ["0.0.0.0", "127.0.0.1", "169.254.0.1", "255.255.255.255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "127.0.0.1 is the standard loopback address used to test the local TCP/IP stack.",
  },
  {
    id: 39,
    question: "How many bits make up an IPv4 address?",
    options: ["16", "32", "64", "128"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An IPv4 address consists of 32 bits, typically represented as 4 decimal octets.",
  },
  {
    id: 40,
    question:
      "What does the subnet mask 255.255.255.255 indicate in a routing table?",
    options: [
      "A default route",
      "A host route",
      "A broadcast route",
      "An invalid route",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A /32 (255.255.255.255) subnet mask specifies a single specific host address, known as a host route.",
  },

  // --- IPv6 Addressing ---
  {
    id: 41,
    question: "How many bits are in an IPv6 address?",
    options: ["32", "64", "128", "256"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IPv6 addresses are 128 bits long, written as eight groups of four hexadecimal digits.",
  },
  {
    id: 42,
    question: "Which IPv6 prefix is used for Link-Local addresses?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Link-Local addresses, used for communication on a single segment, always begin with FE80::/10.",
  },
  {
    id: 43,
    question:
      "What is the IPv6 equivalent of the IPv4 loopback address (127.0.0.1)?",
    options: ["::1", "0::0", "FE80::1", "FF02::1"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The IPv6 loopback address is 0:0:0:0:0:0:0:1, which is shortened to ::1.",
  },
  {
    id: 44,
    question: "Which of the following is an IPv6 multicast address prefix?",
    options: ["2001::", "FE80::", "FC00::", "FF00::/8"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation: "All IPv6 multicast addresses start with 'FF'.",
  },
  {
    id: 45,
    question:
      "What protocol does IPv6 use to discover the MAC address of a local neighbor?",
    options: ["ARP", "NDP", "DHCPv6", "ICMPv4"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPv6 uses Neighbor Discovery Protocol (NDP), which relies on ICMPv6 messages, to resolve IPv6 addresses to MAC addresses instead of ARP.",
  },
  {
    id: 46,
    question:
      "In IPv6 SLAAC, what process does a host use to generate the host portion (Interface ID) of its IP address?",
    options: [
      "DHCPv6 Request mechanism",
      "EUI-64 or Random generation",
      "ARP Request mechanism",
      "DNS Resolution mechanism",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In Stateless Address Autoconfiguration (SLAAC), the 64-bit Interface ID is dynamically created using the EUI-64 format (derived from the MAC address) or a randomly generated privacy extension.",
  },
  {
    id: 47,
    question:
      "What is the valid abbreviation for the IPv6 address 2001:0DB8:0000:0000:0000:0000:1428:57AB?",
    options: [
      "2001:DB8:0:0:0:0:1428:57AB",
      "2001:DB8::1428:57AB",
      "2001:0DB8::1428:57AB",
      "All of the above are valid.",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "Leading zeros can be dropped, and a single block of consecutive all-zero hextets can be replaced with a double colon (::). All options are technically valid representations.",
  },
  {
    id: 48,
    question:
      "Which IPv6 multicast address represents 'all-nodes' on a local network segment?",
    options: ["FF02::1", "FF02::2", "FF02::9", "FF02::A"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "FF02::1 targets all IPv6 nodes on the local link. FF02::2 targets all IPv6 routers.",
  },
  {
    id: 49,
    question: "Which command enables IPv6 routing globally on a Cisco router?",
    options: [
      "ip routing",
      "ipv6 route enable",
      "ipv6 unicast-routing",
      "enable ipv6",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'ipv6 unicast-routing' must be entered in global configuration mode to enable a Cisco router to forward IPv6 packets.",
  },
  {
    id: 50,
    question:
      "Unique Local Addresses (ULA) in IPv6 are analogous to what in IPv4?",
    options: [
      "Public IPs",
      "Private (RFC 1918) IPs",
      "APIPA IPs",
      "Multicast IPs",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "ULAs (prefix FC00::/7) are meant for internal network routing and are not publicly routable on the internet, similar to IPv4 private addresses.",
  },

  // --- Routing Fundamentals & Static Routing ---
  {
    id: 51,
    question: "What is Administrative Distance (AD) used for in Cisco routing?",
    options: [
      "To determine the metric of a route within a single routing protocol",
      "To select the best path among multiple routing protocols to the same destination",
      "To calculate the usable bandwidth of a physical link for load balancing",
      "To determine the hop count of routes learned from the same protocol",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "AD is the 'trustworthiness' of a route source. If a router learns about the same destination from OSPF and a Static route, it chooses the one with the lowest AD.",
  },
  {
    id: 52,
    question: "What is the default Administrative Distance of a static route?",
    options: ["0", "1", "90", "110"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A standard static route has an AD of 1. A directly connected interface has an AD of 0.",
  },
  {
    id: 53,
    question: "How do you configure a default static route in IPv4?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 [next-hop-ip]",
      "ip default-network [network-ip]",
      "ip route 255.255.255.255 0.0.0.0 [next-hop-ip]",
      "route add default [next-hop-ip]",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The command 'ip route 0.0.0.0 0.0.0.0' specifies that any traffic that does not match a more specific route in the routing table should be sent to the next-hop IP.",
  },
  {
    id: 54,
    question: "What is a floating static route?",
    options: [
      "A route that dynamically changes its next-hop based on link conditions.",
      "A static route with an AD higher than the primary routing protocol, used as a backup.",
      "A route that is injected automatically by a DHCP server when a lease expires.",
      "A route that is used exclusively for load balancing across parallel links.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A floating static route is configured with a higher Administrative Distance so it only appears in the routing table if the primary route goes down.",
  },
  {
    id: 55,
    question:
      "If a router's routing table contains a route to 192.168.10.0/24 and 192.168.10.0/26, where will a packet destined for 192.168.10.5 be sent?",
    options: [
      "Out the interface for the /24 route",
      "Out the interface for the /26 route",
      "It will be load-balanced across both",
      "It will be dropped",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Routers always use the 'longest match rule'. Since /26 is a more specific match than /24, the router forwards the packet to the /26 route.",
  },
  {
    id: 56,
    question: "Which command reveals the routing table on a Cisco router?",
    options: [
      "show ip protocols",
      "show interfaces",
      "show ip route",
      "show route",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show ip route' displays all IPv4 routes the router has learned and installed in its routing table.",
  },
  {
    id: 57,
    question:
      "What letter indicates an OSPF route in the 'show ip route' output?",
    options: ["R", "D", "O", "S"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "O stands for OSPF. R is RIP, D is EIGRP, and S is Static.",
  },
  {
    id: 58,
    question:
      "What is the primary function of a Router-on-a-Stick configuration?",
    options: [
      "Providing an internet connection to the entire LAN by using a cellular USB stick as a backup WAN.",
      "Routing traffic between different VLANs using a single physical router interface and subinterfaces.",
      "Using a router as an Ethernet switch to perform Layer 2 frame forwarding on a LAN instead of routing.",
      "Creating a secure VPN connection to a remote site across an untrusted public network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Router-on-a-Stick uses 802.1Q trunking on a single physical interface divided into subinterfaces to perform Inter-VLAN routing.",
  },
  {
    id: 59,
    question:
      "When configuring a subinterface for Router-on-a-Stick, what command must be applied before assigning an IP address?",
    options: [
      "switchport mode trunk",
      "encapsulation dot1Q [vlan-id]",
      "ip routing",
      "vlan [vlan-id]",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "You must specify the trunking encapsulation (encapsulation dot1Q [vlan-id]) on the subinterface before the router will accept an IP address on it.",
  },
  {
    id: 60,
    question:
      "What is the next-hop address for a static host route configured to direct traffic exclusively to the server at 10.1.1.50?",
    options: [
      "ip route 10.1.1.0 255.255.255.0",
      "ip route 10.1.1.50 255.255.255.255",
      "ip route 10.1.1.50 0.0.0.0",
      "ip route 0.0.0.0 10.1.1.50",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A host route targets a single specific IP address, which requires a /32 subnet mask (255.255.255.255).",
  },

  // --- OSPFv2 ---
  {
    id: 61,
    question: "What metric does OSPF use to determine the best path?",
    options: [
      "Hop count, counting every router in the path",
      "Bandwidth and Delay of the physical links",
      "Cost (based on interface bandwidth)",
      "Path vector, listing every AS in the path",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF uses Cost as its metric, which is inversely proportional to the bandwidth of the interface (Reference Bandwidth / Interface Bandwidth).",
  },
  {
    id: 62,
    question: "What is the Administrative Distance of OSPF?",
    options: ["90", "110", "115", "120"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "OSPF has a default AD of 110. EIGRP is 90, IS-IS is 115, and RIP is 120.",
  },
  {
    id: 63,
    question:
      "What is the multicast address used by OSPF to send Hello packets to all OSPF routers?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "224.0.0.5 is the All-OSPF-Routers multicast address. 224.0.0.6 is used to communicate specifically with the DR and BDR.",
  },
  {
    id: 64,
    question:
      "In an OSPF broadcast network type, what role is elected to minimize the number of adjacencies formed?",
    options: [
      "Area Border Router (ABR)",
      "Autonomous System Boundary Router (ASBR)",
      "Designated Router (DR)",
      "Root Bridge",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "On multiaccess networks (like Ethernet), OSPF elects a Designated Router (DR) and Backup DR (BDR) to act as a central point for routing updates.",
  },
  {
    id: 65,
    question:
      "How is the OSPF Router ID determined if it is not manually configured?",
    options: [
      "The highest MAC address on the router.",
      "The highest IP address of an active Loopback interface.",
      "The highest IP address of any active physical interface.",
      "A random 32-bit number.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "OSPF Router ID selection order: 1. Manually configured 'router-id'. 2. Highest active Loopback IP. 3. Highest active physical interface IP.",
  },
  {
    id: 66,
    question:
      "Which OSPF state indicates that a router has formed a fully functional neighbor relationship and databases are synchronized?",
    options: ["INIT", "2-WAY", "EXSTART", "FULL"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The FULL state means the routers have synchronized their Link-State Databases (LSDB) and are fully adjacent.",
  },
  {
    id: 67,
    question: "What command injects a default route into the OSPF domain?",
    options: [
      "default-information originate",
      "ip route 0.0.0.0 0.0.0.0 ospf",
      "redistribute static",
      "network 0.0.0.0 0.0.0.0 area 0",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'default-information originate' command is used in OSPF router configuration mode to advertise a static default route to other OSPF routers.",
  },
  {
    id: 68,
    question: "What is the backbone area in OSPF?",
    options: [
      "Area 1",
      "Area 0",
      "The area with the most routers",
      "The area where the DR resides",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Area 0 (or Area 0.0.0.0) is the backbone area. In multi-area OSPF, all other areas must connect to Area 0.",
  },
  {
    id: 69,
    question:
      "Which command shows the OSPF neighbors and their adjacency states?",
    options: [
      "show ip ospf route",
      "show ip ospf database",
      "show ip ospf neighbor",
      "show ip route ospf",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show ip ospf neighbor' displays neighbor IDs, priority, state (e.g., FULL/BDR), dead time, and interface.",
  },
  {
    id: 70,
    question:
      "To configure OSPF directly on an interface, which command is used?",
    options: [
      "router ospf 1 area 0",
      "network [ip] [wildcard] area 0",
      "ip ospf 1 area 0",
      "ospf enable area 0",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In modern IOS, you can enable OSPF directly on the interface using 'ip ospf [process-id] area [area-id]' rather than using network statements.",
  },

  // --- IP Services (DHCP, NAT, NTP, DNS) ---
  {
    id: 71,
    question:
      "Which of the following is the correct order of messages in the DHCP DORA process?",
    options: [
      "Discover, Offer, Request, Acknowledgment",
      "Discover, Request, Offer, Acknowledgment",
      "Demand, Offer, Request, Acceptance",
      "Discover, Offer, Reply, Acknowledgment",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A client Discovers a server, the server Offers an IP, the client Requests that IP, and the server Acknowledges the request (DORA).",
  },
  {
    id: 72,
    question: "What does the command 'ip helper-address 10.1.1.5' accomplish?",
    options: [
      "It sets a secondary default gateway for the local network.",
      "It relays DHCP broadcasts to a unicast DHCP server at 10.1.1.5.",
      "It configures a backup DNS server on the interface.",
      "It translates private IP addresses to the address 10.1.1.5.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ip helper-address' command intercepts UDP broadcasts (like DHCP) and forwards them as unicast packets to the specified server IP.",
  },
  {
    id: 73,
    question: "What is the purpose of NAT (Network Address Translation)?",
    options: [
      "To map domain names to IP addresses",
      "To map private IPv4 addresses to public IPv4 addresses",
      "To automatically assign IP addresses to hosts",
      "To route packets between different VLANs",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "NAT translates non-routable private IP addresses to routable public IP addresses so internal hosts can access the internet.",
  },
  {
    id: 74,
    question:
      "Which type of NAT allows multiple internal hosts to share a single public IP address using different port numbers?",
    options: [
      "Static NAT with a one-to-one address mapping",
      "Dynamic NAT using a pool of public addresses",
      "PAT (Port Address Translation / NAT Overload)",
      "Destination NAT, translating only the destination IP address",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "PAT (also called NAT Overload) uses unique source port numbers to distinguish between connections from multiple internal hosts sharing one public IP.",
  },
  {
    id: 75,
    question:
      "When configuring NAT, what represents the internal IP address before translation?",
    options: [
      "Inside Local",
      "Inside Global",
      "Outside Local",
      "Outside Global",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "'Inside Local' is the actual private IP configured on the internal host. 'Inside Global' is the public IP it is translated to.",
  },
  {
    id: 76,
    question: "What protocol synchronizes clocks across network devices?",
    options: ["SNMP", "STP", "NTP", "SYSLOG"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Network Time Protocol (NTP) uses UDP port 123 to synchronize device clocks with a central time server.",
  },
  {
    id: 77,
    question: "In NTP terminology, what does 'Stratum 1' mean?",
    options: [
      "A device that has lost time synchronization with its upstream NTP server.",
      "A time server directly attached to an authoritative time source (e.g., atomic clock).",
      "A client that receives its time directly from a Stratum 0 reference server.",
      "A backup NTP server that takes over when the primary time source is unreachable.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Stratum 1 servers are directly connected to an authoritative time source (Stratum 0, like a GPS clock). Stratum 2 gets time from Stratum 1, and so on.",
  },
  {
    id: 78,
    question:
      "Which Syslog severity level is 'Critical' (Critical conditions)?",
    options: ["Level 0", "Level 1", "Level 2", "Level 5"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Syslog levels: 0-Emergencies, 1-Alerts, 2-Critical, 3-Errors, 4-Warnings, 5-Notifications, 6-Informational, 7-Debugging.",
  },
  {
    id: 79,
    question: "What is the function of DNS?",
    options: [
      "Assigns IP addresses dynamically to hosts on the network.",
      "Translates human-readable domain names into IP addresses.",
      "Translates private IP addresses into public IP addresses.",
      "Encrypts all terminal traffic on the network.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Domain Name System (DNS) resolves FQDNs (like www.cisco.com) into IP addresses.",
  },
  {
    id: 80,
    question: "What protocol and port does TFTP use?",
    options: ["TCP Port 21", "UDP Port 69", "TCP Port 22", "UDP Port 53"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Trivial File Transfer Protocol (TFTP) operates over UDP port 69 and provides basic file transfer without authentication.",
  },

  // --- Security Fundamentals (ACLs, Port Security, AAA) ---
  {
    id: 81,
    question:
      "What is the implicit rule at the end of every Access Control List (ACL)?",
    options: [
      "permit any any by default",
      "deny any any (implicit deny)",
      "log all traffic to syslog",
      "redirect to the null0 interface",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Every ACL has a hidden 'deny all' statement at the end. If traffic doesn't match any of the preceding 'permit' lines, it is dropped.",
  },
  {
    id: 82,
    question: "Which number range is used for a Standard IPv4 ACL?",
    options: ["1 - 99", "100 - 199", "1000 - 1099", "2000 - 2099"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Standard IPv4 ACLs use numbers 1-99 and 1300-1999. Extended ACLs use 100-199 and 2000-2699.",
  },
  {
    id: 83,
    question: "What criteria does a Standard ACL use to filter traffic?",
    options: [
      "Source and Destination IP addresses",
      "Source IP address only",
      "Destination IP address and Port number",
      "MAC addresses only",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Standard ACLs evaluate only the source IP address in the IPv4 packet header to make forwarding or dropping decisions.",
  },
  {
    id: 84,
    question: "Best practice dictates placing an Extended ACL where?",
    options: [
      "As close to the destination as possible",
      "As close to the source as possible",
      "On the core router",
      "On the default gateway of the destination",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Extended ACLs can filter based on destination and port, so it is best to drop unwanted traffic as close to the source as possible to save bandwidth.",
  },
  {
    id: 85,
    question:
      "In ACL configuration, what is the inverse (wildcard) mask for a /24 subnet (255.255.255.0)?",
    options: ["0.0.0.255", "255.255.255.255", "0.255.255.255", "0.0.0.0"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A wildcard mask flips the bits of a subnet mask. 255.255.255.255 - 255.255.255.0 = 0.0.0.255.",
  },
  {
    id: 86,
    question:
      "What does the 'switchport port-security' command do when entered alone on a properly configured access port?",
    options: [
      "It shuts down the port.",
      "It limits the port to only 1 MAC address dynamically learned.",
      "It restricts traffic to only specific IP addresses.",
      "It enables 802.1X authentication.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, enabling port security allows a maximum of 1 MAC address, learns it dynamically, and sets the violation mode to 'shutdown'.",
  },
  {
    id: 87,
    question:
      "In Port Security, which violation mode drops unauthorized traffic, increments the violation counter, and generates a syslog message, but does NOT shut down the port?",
    options: ["Protect", "Restrict", "Shutdown", "Err-disable"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "'Restrict' mode drops violating traffic and generates logs/SNMP traps. 'Protect' drops traffic silently without logs. 'Shutdown' puts the port in err-disabled state.",
  },
  {
    id: 88,
    question: "What does the 'A's in AAA stand for?",
    options: [
      "Authentication, Authorization, Accounting",
      "Access, Authorization, Accounting",
      "Authentication, Availability, Auditing",
      "Access, Auditing, Accounting",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "AAA stands for Authentication (Who are you?), Authorization (What can you do?), and Accounting (What did you do?).",
  },
  {
    id: 89,
    question:
      "Which of the following is a standard protocol used for AAA services?",
    options: ["EIGRP", "RADIUS", "SNMP", "Syslog"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "RADIUS (Remote Authentication Dial-In User Service) and TACACS+ are the primary protocols used to interact with a centralized AAA server.",
  },
  {
    id: 90,
    question:
      "Which type of VPN connects two fixed physical locations securely over the internet?",
    options: [
      "Remote Access VPN",
      "Site-to-Site VPN",
      "Clientless SSL VPN",
      "AnyConnect VPN",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A Site-to-Site VPN establishes a persistent, encrypted IPsec tunnel between security gateways (like routers or firewalls) at two different physical branches.",
  },

  // --- Wireless, Automation & Programmability ---
  {
    id: 91,
    question: "Which standard governs Wi-Fi (Wireless LANs)?",
    options: ["IEEE 802.3", "IEEE 802.1Q", "IEEE 802.11", "IEEE 802.1X"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IEEE 802.11 is the suite of standards for Wireless LANs (e.g., 802.11ac, 802.11ax).",
  },
  {
    id: 92,
    question:
      "In a Controller-Based wireless network architecture, what protocol do Lightweight Access Points (LAPs) use to communicate with the WLC?",
    options: ["STP", "CAPWAP", "SNMP", "EAP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Control and Provisioning of Wireless Access Points (CAPWAP) is the protocol used to encapsulate data and control traffic between a WLC and LAPs.",
  },
  {
    id: 93,
    question:
      "What is the primary function of a Wireless LAN Controller (WLC)?",
    options: [
      "To provide the physical wireless radio signal to all wireless endpoints",
      "To centralize management, configuration, and security of multiple access points",
      "To route wireless traffic out to the Internet on behalf of clients",
      "To act as a stateful firewall for all wireless client traffic",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A WLC manages Lightweight Access Points, pushing configurations, handling roaming, and processing wireless security policies centrally.",
  },
  {
    id: 94,
    question:
      "In Software-Defined Networking (SDN), what is separated from the data plane?",
    options: [
      "The user plane",
      "The physical plane",
      "The control plane",
      "The management plane",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "SDN decouples the control plane (the brains making routing decisions) from the data plane (the hardware forwarding packets), centralizing the control plane in an SDN controller.",
  },
  {
    id: 95,
    question:
      "Which data serialization format uses key-value pairs and is highly human-readable, commonly used in REST APIs?",
    options: ["XML", "HTML", "JSON", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "JavaScript Object Notation (JSON) is a lightweight format structured with { 'key': 'value' } syntax, heavily used in modern APIs and network programmability.",
  },
  {
    id: 96,
    question:
      "Which HTTP method is typically used to CREATE a new resource in a RESTful API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In REST, POST is used to create a new resource, GET reads data, PUT/PATCH updates, and DELETE removes.",
  },
  {
    id: 97,
    question:
      "Which of the following configuration management tools uses a Push model and connects via SSH without needing an agent installed on the router?",
    options: ["Puppet", "Chef", "Ansible", "SaltStack"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Ansible uses an agentless 'push' architecture, connecting to managed network devices directly via SSH and executing Python or native CLI modules.",
  },
  {
    id: 98,
    question:
      "What architecture model replaces traditional Spanning Tree protocols in a modern Cisco Software-Defined Access (SD-Access) fabric?",
    options: [
      "Three-Tier Hierarchical Model",
      "Spine-and-Leaf Architecture",
      "Hub-and-Spoke",
      "Ring Topology",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Modern data centers and SD-Access fabrics utilize a Spine-and-Leaf topology, where every leaf is connected to every spine, eliminating Layer 2 loops and the need for STP.",
  },
  {
    id: 99,
    question:
      "What API is a subset of the Cisco DNA Center used to manage intent-based networks?",
    options: [
      "Meraki Dashboard API",
      "Cisco DNA Center Intent API",
      "NETCONF",
      "RESTCONF",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco DNA Center exposes an Intent API (a REST API) allowing programmers to automate network deployment, assurance, and policy changes.",
  },
  {
    id: 100,
    question:
      "Which data encoding format relies heavily on indentation (whitespace) to determine structure?",
    options: ["JSON", "XML", "YAML", "BGP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "YAML (YAML Ain't Markup Language) uses strict indentation for structure and is commonly used for Ansible playbooks and configuration files.",
  },
];
