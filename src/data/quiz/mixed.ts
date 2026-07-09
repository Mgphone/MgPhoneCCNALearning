import type { QuizQuestion } from "./types";

export const mixedQuestions: QuizQuestion[] = [
  // --- IP Connectivity & Fundamentals ---
  {
    id: 1,
    question:
      "A PC with IP 192.168.1.10/24 needs to communicate with a server at 10.0.0.5/24. What must be configured on the PC?",
    options: [
      "A route to 10.0.0.0/24",
      "A default gateway in the 192.168.1.0/24 network",
      "A static ARP entry for the server",
      "The subnet mask must be changed to /16",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Since the destination is on a different network, the PC must send packets to its default gateway. The gateway router then forwards the traffic toward the 10.0.0.0/24 network.",
  },
  {
    id: 2,
    question:
      "Which OSI layer is responsible for logical addressing and routing?",
    options: [
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)",
      "Layer 7 (Application)",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Layer 3 (Network Layer) manages logical addressing (IP addresses) and path determination (routing).",
  },
  {
    id: 3,
    question: "Which of the following is a characteristic of UDP?",
    options: [
      "Connection-oriented",
      "Provides windowing and flow control",
      "Connectionless and best-effort delivery",
      "Guarantees packet delivery",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "User Datagram Protocol (UDP) is a connectionless, best-effort transport protocol. It does not provide error recovery, windowing, or guaranteed delivery.",
  },
  {
    id: 4,
    question:
      "What is the primary difference between Single-mode and Multimode fiber optic cables?",
    options: [
      "Multimode has a smaller core and is used for longer distances.",
      "Single-mode uses a laser light source and is used for long-distance transmissions.",
      "Single-mode uses LEDs and is used for short distances.",
      "Multimode supports higher speeds over long distances.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Single-mode fiber has a very small core, uses a laser, and supports much longer distances. Multimode has a larger core, typically uses LEDs or VCSELs, and is for shorter distances.",
  },
  {
    id: 5,
    question:
      "Which IEEE standard defines Power over Ethernet Plus (PoE+), providing up to 30W of power?",
    options: ["802.3af", "802.3at", "802.3bt", "802.1X"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "802.3af is standard PoE (15.4W). 802.3at is PoE+ (30W). 802.3bt is UPOE/PoE++ (60W-100W).",
  },
  {
    id: 6,
    question:
      "Which Cisco IOS command saves the active configuration to NVRAM?",
    options: [
      "copy startup-config running-config",
      "write terminal",
      "copy running-config startup-config",
      "save config",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'copy running-config startup-config' command copies the current RAM configuration into the NVRAM so it persists after a reboot.",
  },
  {
    id: 7,
    question:
      "Which protocol is the vendor-neutral, IEEE standard alternative to Cisco Discovery Protocol (CDP)?",
    options: ["STP", "LLDP", "NDP", "VTP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Link Layer Discovery Protocol (LLDP) is an open IEEE standard (802.1AB) used for discovering neighboring devices on a local network.",
  },

  // --- Network Access (Switching & VLANs) ---
  {
    id: 8,
    question: "How does a Layer 2 switch populate its MAC address table?",
    options: [
      "By reading the destination MAC address of incoming frames.",
      "By broadcasting ARP requests.",
      "By reading the source MAC address of incoming frames.",
      "By exchanging MAC tables with neighboring switches.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Switches dynamically learn MAC addresses by inspecting the source MAC address of every incoming Ethernet frame and mapping it to the receiving port.",
  },
  {
    id: 9,
    question:
      "What action does a switch take if it receives a frame destined for a MAC address that is NOT in its MAC table?",
    options: [
      "It drops the frame.",
      "It floods the frame out all active ports in the VLAN except the receiving port.",
      "It sends an ARP request to find the destination.",
      "It forwards the frame to the default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "This is known as 'unknown unicast flooding'. The switch floods the frame to ensure it reaches the destination.",
  },
  {
    id: 10,
    question: "What is the purpose of the Native VLAN on an 802.1Q trunk?",
    options: [
      "To carry all management traffic.",
      "To carry voice traffic.",
      "To carry untagged frames across the trunk link.",
      "To prevent VLAN hopping.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Native VLAN is the single VLAN on an 802.1Q trunk that does not receive a VLAN tag. Traffic sent and received without a tag is associated with the Native VLAN.",
  },
  {
    id: 11,
    question:
      "Which DTP (Dynamic Trunking Protocol) mode actively attempts to convert the link into a trunk?",
    options: ["Dynamic Auto", "Dynamic Desirable", "Trunk", "Access"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Dynamic Desirable actively sends DTP negotiation messages to the neighbor. Dynamic Auto waits passively for the neighbor to initiate.",
  },
  {
    id: 12,
    question:
      "If Switch A is configured as 'dynamic auto' and Switch B is 'dynamic auto', what will the operational mode of the link be?",
    options: ["Trunk", "Access", "Err-disable", "It fluctuates"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Since both sides are waiting passively for the other to initiate trunking, they will fall back to becoming Access ports.",
  },
  {
    id: 13,
    question: "What does the 'switchport mode nonegotiate' command do?",
    options: [
      "It drops all untagged traffic.",
      "It prevents the interface from generating DTP frames.",
      "It disables STP on the port.",
      "It sets the port speed and duplex manually.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "It disables the transmission of DTP packets. This is typically used when statically configuring a trunk to a non-Cisco device or for security.",
  },

  // --- STP & EtherChannel ---
  {
    id: 14,
    question: "What is the primary function of Spanning Tree Protocol (STP)?",
    options: [
      "To aggregate multiple links into one.",
      "To prevent Layer 2 loops by logically blocking redundant paths.",
      "To route traffic between VLANs.",
      "To secure access ports from unauthorized MAC addresses.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "STP prevents broadcast storms and MAC table instability caused by physical loops in a Layer 2 network by placing redundant ports in a Blocking state.",
  },
  {
    id: 15,
    question: "How is the Root Bridge elected in STP?",
    options: [
      "The switch with the highest Bridge ID becomes Root.",
      "The switch with the highest IP address becomes Root.",
      "The switch with the lowest Bridge ID becomes Root.",
      "The switch with the most active ports becomes Root.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Root Bridge is the switch with the lowest Bridge ID (BID). The BID consists of the Bridge Priority (default 32768) and the switch's MAC address.",
  },
  {
    id: 16,
    question:
      "Which STP port state actively learns MAC addresses but does NOT forward user data?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In the Learning state, the switch port begins to populate the MAC address table but drops all user payload frames.",
  },
  {
    id: 17,
    question: "What does the PortFast feature do?",
    options: [
      "Increases the speed of an interface.",
      "Transitions an access port immediately to the Forwarding state, bypassing Listening and Learning.",
      "Aggregates ports for more bandwidth.",
      "Disables STP completely on the switch.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "PortFast allows end devices (like PCs and servers) to bypass the 30-second STP delay and connect to the network instantly.",
  },
  {
    id: 18,
    question:
      "What is the expected behavior if a PortFast-enabled interface with BPDU Guard receives a BPDU?",
    options: [
      "It becomes a trunk port.",
      "It forwards the BPDU to the root bridge.",
      "It is immediately placed into the err-disable state.",
      "It ignores the BPDU.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "BPDU Guard protects the network. Receiving a BPDU implies a switch was connected to an edge port. To prevent loops, the port shuts down (err-disable).",
  },
  {
    id: 19,
    question:
      "Which link aggregation protocol is an IEEE standard (802.3ad/802.1AX)?",
    options: ["PAgP", "VTP", "LACP", "CDP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Link Aggregation Control Protocol (LACP) is the industry standard. Port Aggregation Protocol (PAgP) is Cisco proprietary.",
  },
  {
    id: 20,
    question: "Which LACP mode actively attempts to negotiate an EtherChannel?",
    options: ["Desirable", "Active", "Passive", "Auto"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In LACP, 'Active' initiates negotiation. 'Desirable' is the equivalent mode for PAgP.",
  },
  {
    id: 21,
    question:
      "How does an EtherChannel balance traffic across its physical links?",
    options: [
      "Round-robin (per packet).",
      "It sends all traffic over one link until it is full.",
      "By applying a hashing algorithm to frame/packet headers to map flows to specific links.",
      "It broadcasts all traffic over all links.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "EtherChannel uses a hashing algorithm (like src-mac, dst-ip) to ensure that all packets in a single flow take the same physical link, preventing out-of-order delivery.",
  },

  // --- IPv4 & IPv6 Addressing ---
  {
    id: 22,
    question: "What is the network address for the host 192.168.10.45/28?",
    options: [
      "192.168.10.0",
      "192.168.10.32",
      "192.168.10.40",
      "192.168.10.48",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A /28 mask has a block size of 16 (256-240). Subnets are 0, 16, 32, 48. The IP 45 falls into the 32 subnet.",
  },
  {
    id: 23,
    question: "How many usable hosts are available in a /26 subnet?",
    options: ["30", "62", "64", "126"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A /26 leaves 6 host bits (32 - 26). 2^6 = 64 total IPs. 64 - 2 (network/broadcast) = 62 usable hosts.",
  },
  {
    id: 24,
    question: "Which of the following is a private IPv4 address?",
    options: ["11.0.0.1", "172.33.1.1", "192.168.200.5", "224.0.0.5"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The RFC 1918 private ranges are 10.0.0.0/8, 172.16.0.0/12 (172.16-31), and 192.168.0.0/16.",
  },
  {
    id: 25,
    question: "What is the IPv6 loopback address?",
    options: ["::/0", "::1/128", "FE80::1", "FF02::1"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "::1/128 is the IPv6 loopback address, equivalent to 127.0.0.1 in IPv4.",
  },
  {
    id: 26,
    question: "Which IPv6 prefix represents Link-Local addresses?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Link-Local addresses, required for local subnet communication, start with the FE80::/10 prefix.",
  },
  {
    id: 27,
    question:
      "What protocol replaces IPv4 ARP to resolve MAC addresses in IPv6?",
    options: ["DHCPv6", "ICMPv4", "NDP (Neighbor Discovery Protocol)", "SLAAC"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "NDP uses ICMPv6 Neighbor Solicitation and Neighbor Advertisement messages to map IPv6 addresses to MAC addresses.",
  },
  {
    id: 28,
    question:
      "In IPv6 SLAAC, what process does a host use to verify its generated IPv6 address is unique on the network?",
    options: [
      "Duplicate Address Detection (DAD)",
      "DHCPv6 Request",
      "EUI-64 Validation",
      "Router Solicitation",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Hosts use DAD, sending a Neighbor Solicitation for their own intended IP, to ensure no other device is already using it.",
  },
  {
    id: 29,
    question: "What does the EUI-64 process do?",
    options: [
      "Compresses IPv6 addresses.",
      "Automatically generates a 64-bit Interface ID by manipulating a device's 48-bit MAC address.",
      "Encrypts the IPv6 header.",
      "Calculates the OSPFv3 metric.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EUI-64 splits the MAC, inserts FFFE in the middle, and flips the 7th bit to create a unique 64-bit IPv6 host identifier.",
  },

  // --- IP Routing (Static & Dynamic) ---
  {
    id: 30,
    question: "What is Administrative Distance (AD)?",
    options: [
      "A measure of bandwidth on a link.",
      "A value representing the trustworthiness or preference of a route source.",
      "The hop count to a destination.",
      "The maximum physical length of a cable.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "AD determines which routing protocol to trust if a router learns about the same exact destination network from multiple sources. Lower AD is preferred.",
  },
  {
    id: 31,
    question: "What is the default Administrative Distance of OSPF?",
    options: ["1", "90", "110", "120"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF has a default AD of 110. (Connected=0, Static=1, EIGRP=90, RIP=120).",
  },
  {
    id: 32,
    question:
      "A router has an OSPF route to 10.1.1.0/24 and a Static route to 10.1.1.0/26. Where does it send a packet destined for 10.1.1.5?",
    options: [
      "The OSPF route because dynamic protocols are preferred.",
      "The Static route because it has a lower AD.",
      "The Static route because it is the longest prefix match.",
      "It load balances between them.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The router always uses the Longest Prefix Match (/26 is more specific than /24). AD is only used to break ties if the subnet masks are identical.",
  },
  {
    id: 33,
    question:
      "How do you configure an IPv4 default static route pointing to next-hop 192.168.1.1?",
    options: [
      "ip route default 192.168.1.1",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "route 0.0.0.0 255.255.255.255 192.168.1.1",
      "ip default-gateway 192.168.1.1",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default route matches all traffic. The syntax is 'ip route 0.0.0.0 0.0.0.0 [next-hop]'.",
  },
  {
    id: 34,
    question: "What is a floating static route?",
    options: [
      "A route used for load balancing.",
      "A static route with an AD higher than the primary dynamic protocol, acting as a backup.",
      "A route that changes its next hop dynamically.",
      "A default route assigned by DHCP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By assigning a higher AD (e.g., 115 to back up OSPF's 110), the static route 'floats' hidden in the config and only enters the routing table if the primary route fails.",
  },
  {
    id: 35,
    question: "Which metric does OSPF use to determine the best path?",
    options: [
      "Hop count",
      "Bandwidth and Delay",
      "Cost (based on interface bandwidth)",
      "Reliability",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF calculates 'Cost' by dividing a Reference Bandwidth (default 100 Mbps) by the interface's actual bandwidth.",
  },
  {
    id: 36,
    question:
      "Which multicast address does OSPFv2 use to send Hello packets to all OSPF routers?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "224.0.0.5 targets all OSPF routers. 224.0.0.6 targets only the DR/BDR.",
  },
  {
    id: 37,
    question:
      "On an Ethernet segment, how does OSPF determine which router becomes the Designated Router (DR)?",
    options: [
      "Lowest Router ID",
      "Highest interface IP address (ignoring priority)",
      "Highest OSPF interface priority, then highest Router ID as tie-breaker",
      "The first router to boot up",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The router with the highest interface priority (default is 1) wins. If priorities are equal, the router with the highest Router ID becomes the DR.",
  },
  {
    id: 38,
    question:
      "In OSPF, what is the default Hello interval on a broadcast multi-access network?",
    options: ["5 seconds", "10 seconds", "30 seconds", "40 seconds"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default Hello interval for broadcast networks is 10 seconds. The default Dead interval is 40 seconds.",
  },
  {
    id: 39,
    question: "What does the 'passive-interface' command do in OSPF?",
    options: [
      "It disables the interface completely.",
      "It prevents OSPF Hello packets from being sent or processed on the interface, dropping neighbor adjacencies, while still advertising the subnet.",
      "It turns the interface into a secondary backup path.",
      "It converts the interface to a trunk.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Passive-interface secures the network edge by preventing unauthorized routers from forming an adjacency, while allowing OSPF to still route traffic to that subnet.",
  },
  {
    id: 40,
    question:
      "Which code indicates an OSPF route in the output of 'show ip route'?",
    options: ["R", "D", "S", "O"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "'O' stands for OSPF. 'R' is RIP, 'D' is EIGRP (DUAL), and 'S' is Static.",
  },
  {
    id: 41,
    question: "What is Router-on-a-Stick?",
    options: [
      "A wireless router configuration.",
      "A single physical router interface acting as an 802.1Q trunk, using subinterfaces to route traffic between multiple VLANs.",
      "A router configured strictly as a DHCP server.",
      "A Layer 3 switch configuration.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "ROAS uses subinterfaces (e.g., G0/0.10, G0/0.20) on a single physical trunk link to provide inter-VLAN routing.",
  },
  {
    id: 42,
    question: "What is an SVI (Switch Virtual Interface)?",
    options: [
      "A physical interface on a switch.",
      "A logical Layer 3 interface on a multilayer switch used to route traffic for a specific VLAN.",
      "A tunnel interface for VPNs.",
      "A virtual MAC address used in HSRP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An SVI (e.g., 'interface vlan 10') provides a default gateway IP for hosts in that VLAN and routes traffic between VLANs at hardware speeds.",
  },

  // --- IP Services (DHCP, NAT, NTP, DNS, FHRP) ---
  {
    id: 43,
    question: "What is the correct order of the DHCPv4 message process?",
    options: [
      "Discover, Offer, Request, Acknowledgment (DORA)",
      "Request, Offer, Discover, Acknowledgment",
      "Discover, Request, Offer, Acknowledgment",
      "Offer, Discover, Acknowledgment, Request",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The client Discovers a server, the server Offers an IP, the client Requests it, and the server Acknowledges the lease (DORA).",
  },
  {
    id: 44,
    question:
      "Why is a DHCP Relay Agent ('ip helper-address') required on a router interface?",
    options: [
      "To encrypt DHCP packets.",
      "Because routers do not forward Layer 2 broadcasts, the relay agent intercepts the DHCP broadcast and forwards it as a unicast to the central server.",
      "To assign static IP addresses.",
      "To translate private IPs to public IPs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCPDISCOVER is a broadcast. If the DHCP server is on a different subnet, the local router must convert the broadcast to a unicast packet.",
  },
  {
    id: 45,
    question:
      "What is NAT Overload, also known as PAT (Port Address Translation)?",
    options: [
      "Mapping one private IP to one public IP.",
      "Translating IPv4 to IPv6.",
      "Mapping multiple private IP addresses to a single public IP address using unique source port numbers.",
      "Forwarding traffic from outside to an inside server.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "PAT allows an entire internal network to share a single routable public IP address by assigning unique source ports to each connection.",
  },
  {
    id: 46,
    question: "In Cisco NAT terminology, what does 'Inside Local' represent?",
    options: [
      "The public IP address assigned to the router.",
      "The private IP address of an internal host before translation.",
      "The IP address of the destination server on the internet.",
      "The translated public IP address of the internal host.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "'Inside' refers to the host you control. 'Local' means how it appears on the local network (private). 'Inside Global' is the public translated IP.",
  },
  {
    id: 47,
    question: "Which protocol synchronizes the clocks of network devices?",
    options: ["SNMP", "STP", "NTP", "CDP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Network Time Protocol (NTP) uses UDP port 123 to synchronize clocks to authoritative time sources, crucial for accurate logging and certificates.",
  },
  {
    id: 48,
    question: "In NTP, what does Stratum 1 indicate?",
    options: [
      "An unsynchronized clock.",
      "A server directly connected to an authoritative time source (like an atomic or GPS clock).",
      "A client receiving time from a server.",
      "The highest possible delay.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Stratum indicates the distance from the reference clock. Stratum 0 is the hardware clock itself; Stratum 1 servers connect directly to Stratum 0.",
  },
  {
    id: 49,
    question: "What is the primary function of DNS?",
    options: [
      "To automatically assign IP addresses.",
      "To resolve human-readable domain names (e.g., cisco.com) into IP addresses.",
      "To route packets over the internet.",
      "To synchronize network time.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Domain Name System (DNS) operates on UDP/TCP port 53 to map hostnames to IP addresses.",
  },
  {
    id: 50,
    question:
      "What is the purpose of a First Hop Redundancy Protocol (FHRP) like HSRP?",
    options: [
      "To load balance internet links.",
      "To provide a highly available default gateway by allowing multiple routers to share a virtual IP and MAC address.",
      "To route traffic faster via ASICs.",
      "To automatically discover neighbor routers.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "HSRP, VRRP, and GLBP ensure that if the primary router fails, a standby router seamlessly takes over the virtual gateway IP without host reconfiguration.",
  },
  {
    id: 51,
    question: "Which FHRP is an IEEE open standard?",
    options: ["HSRP", "GLBP", "VRRP", "EIGRP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Virtual Router Redundancy Protocol (VRRP) is the open standard. HSRP and GLBP are Cisco proprietary.",
  },

  // --- Security Fundamentals ---
  {
    id: 52,
    question:
      "What is the implicit rule at the bottom of every Access Control List (ACL)?",
    options: [
      "permit any any",
      "deny all (implicit deny)",
      "log all",
      "permit ip any any",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If a packet does not match any configured statements in the ACL, it hits the hidden 'deny all' statement at the end and is dropped.",
  },
  {
    id: 53,
    question: "What does a Standard IPv4 ACL filter based upon?",
    options: [
      "Source and Destination IP",
      "Source IP address only",
      "Destination IP and Port",
      "MAC addresses",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Standard ACLs (numbered 1-99) only evaluate the Source IP address in the IPv4 header.",
  },
  {
    id: 54,
    question:
      "Where should an Extended ACL generally be placed according to Cisco best practices?",
    options: [
      "As close to the destination as possible.",
      "As close to the source as possible.",
      "On the core router.",
      "On the internet edge.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because Extended ACLs can filter precisely based on destination and port, they should be placed close to the source to drop unwanted traffic early and save network bandwidth.",
  },
  {
    id: 55,
    question: "What is the wildcard mask for a /24 subnet (255.255.255.0)?",
    options: ["0.0.0.0", "255.255.255.255", "0.0.0.255", "0.255.255.255"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A wildcard mask flips the bits of a subnet mask. 255.255.255.255 minus 255.255.255.0 = 0.0.0.255.",
  },
  {
    id: 56,
    question:
      "In Port Security, which violation mode drops unauthorized traffic, increments a violation counter, and generates a syslog message without shutting down the port?",
    options: ["Protect", "Restrict", "Shutdown", "Err-disable"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Restrict mode drops traffic and logs it. Protect mode drops silently. Shutdown mode puts the port in err-disable.",
  },
  {
    id: 57,
    question: "What attack does DHCP Snooping prevent?",
    options: [
      "MAC Flooding",
      "Rogue DHCP servers issuing invalid IP addresses to clients",
      "VLAN Hopping",
      "ARP Poisoning directly",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCP Snooping places switch ports in an Untrusted state by default, blocking DHCPOFFER messages from attackers trying to act as the gateway.",
  },
  {
    id: 58,
    question:
      "Which security feature utilizes the DHCP Snooping Binding Database to block spoofed ARP responses?",
    options: [
      "Port Security",
      "BPDU Guard",
      "Dynamic ARP Inspection (DAI)",
      "IP Source Guard",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "DAI intercepts ARP packets and verifies the MAC-to-IP binding against the trusted DHCP Snooping database to prevent ARP poisoning/Man-in-the-Middle attacks.",
  },
  {
    id: 59,
    question: "What does the 'A's in AAA stand for?",
    options: [
      "Authentication, Authorization, Accounting",
      "Access, Authorization, Auditing",
      "Authentication, Availability, Accounting",
      "Access, Availability, Auditing",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Authentication (who are you?), Authorization (what are you allowed to do?), Accounting (what did you do?).",
  },
  {
    id: 60,
    question:
      "Which AAA protocol encrypts the entire payload and separates Authentication and Authorization into distinct processes?",
    options: ["RADIUS", "TACACS+", "LDAP", "Kerberos"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TACACS+ is Cisco proprietary, uses TCP port 49, encrypts the entire payload, and fully separates Authentication and Authorization. RADIUS encrypts only the password and uses UDP.",
  },
  {
    id: 61,
    question:
      "Which type of VPN securely connects a remote mobile user over the internet to the corporate network?",
    options: [
      "Site-to-Site IPsec VPN",
      "Remote Access VPN (Client-based or SSL)",
      "DMVPN",
      "MPLS",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Remote Access VPNs allow individual users with software (like Cisco AnyConnect) to securely tunnel into the network.",
  },
  {
    id: 62,
    question:
      "What protocol framework provides confidentiality, integrity, and authentication for Site-to-Site VPNs?",
    options: ["SSL/TLS", "IPsec", "PPTP", "L2TP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPsec is the standard framework for securing IP communications, utilizing protocols like ESP and IKE to build VPN tunnels.",
  },

  // --- Wireless LANs ---
  {
    id: 63,
    question:
      "What is the primary function of a Wireless LAN Controller (WLC)?",
    options: [
      "To provide wireless signal physically.",
      "To centralize the management, configuration, and security of numerous Lightweight Access Points (LAPs).",
      "To route traffic to the internet.",
      "To act as a RADIUS server.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A WLC manages 'split-MAC' architectures, handling all the complex control-plane operations for the LAPs.",
  },
  {
    id: 64,
    question:
      "Which protocol is used to encapsulate traffic between a Lightweight Access Point and a WLC?",
    options: ["IPsec", "GRE", "CAPWAP", "802.1Q"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Control and Provisioning of Wireless Access Points (CAPWAP) uses UDP to tunnel control and data traffic between LAPs and the WLC.",
  },
  {
    id: 65,
    question:
      "Which WLC interface is used for out-of-band management and initial setup?",
    options: [
      "Management Interface",
      "Virtual Interface",
      "Service-Port Interface",
      "Dynamic Interface",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The Service-Port is the physical out-of-band management port. The Management interface handles in-band management and CAPWAP.",
  },
  {
    id: 66,
    question:
      "Which Wi-Fi security standard introduced SAE (Simultaneous Authentication of Equals) to replace Pre-Shared Keys and prevent dictionary attacks?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "WPA3 significantly enhances security over WPA2 by implementing SAE, ensuring forward secrecy and protecting against brute-force offline dictionary attacks.",
  },
  {
    id: 67,
    question: "What does the 802.11 standard govern?",
    options: [
      "Ethernet LANs",
      "Wireless LANs (Wi-Fi)",
      "Bluetooth",
      "VLAN Trunking",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IEEE 802.11 is the suite of standards for Wireless Local Area Networks (WLANs).",
  },
  {
    id: 68,
    question:
      "Which of the following wireless frequency bands generally provides better wall penetration but less overall bandwidth?",
    options: ["2.4 GHz", "5 GHz", "6 GHz", "60 GHz"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 2.4 GHz band penetrates solid objects better than higher frequencies, providing longer range but slower speeds and fewer non-overlapping channels.",
  },

  // --- QoS & Miscellaneous ---
  {
    id: 69,
    question:
      "In Quality of Service (QoS), what is the function of 'Classification'?",
    options: [
      "Dropping packets that exceed a rate limit.",
      "Changing the DSCP value in the IP header.",
      "Identifying and grouping traffic based on specific criteria (like IP, port, or protocol).",
      "Storing packets in a buffer.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Classification is the first step in QoS, where the router identifies the traffic (e.g., matching VoIP traffic via an ACL).",
  },
  {
    id: 70,
    question: "Which QoS marking field is located in the Layer 3 IPv4 header?",
    options: [
      "Class of Service (CoS)",
      "Differentiated Services Code Point (DSCP)",
      "VLAN ID",
      "Traffic Class (TC)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DSCP is a 6-bit field in the IPv4 header used to mark packets for QoS. CoS is a 3-bit field in the Layer 2 802.1Q trunk tag.",
  },
  {
    id: 71,
    question:
      "Voice traffic should generally have a one-way delay of no more than how many milliseconds?",
    options: ["50 ms", "150 ms", "400 ms", "1000 ms"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco and industry standards dictate that for high-quality VoIP, one-way delay should not exceed 150 ms, jitter should be under 30 ms, and packet loss under 1%.",
  },
  {
    id: 72,
    question: "What is 'Jitter' in a network?",
    options: [
      "The total time it takes a packet to reach its destination.",
      "The variation in the delay of received packets.",
      "The percentage of packets lost in transit.",
      "A security vulnerability.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Jitter is the variance in latency between packets in a flow, which severely degrades real-time applications like VoIP.",
  },

  // --- Automation, Programmability, & SDN ---
  {
    id: 73,
    question:
      "In a Software-Defined Networking (SDN) architecture, which plane is centralized into a controller rather than operating on each individual switch?",
    options: [
      "Data Plane",
      "Control Plane",
      "Management Plane",
      "Forwarding Plane",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SDN decouples the Control Plane (the 'brains' making routing/switching decisions) from the Data Plane (hardware forwarding packets) and centralizes it in an SDN Controller.",
  },
  {
    id: 74,
    question: "What is a 'Southbound API' in an SDN architecture?",
    options: [
      "An interface used by applications to talk to the SDN controller.",
      "An interface used by the SDN controller to communicate with and program the physical network devices.",
      "A web GUI for human administrators.",
      "An API used strictly for BGP peering.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Southbound APIs (like NETCONF, OpenFlow) operate 'downward' from the controller to the infrastructure devices. Northbound APIs operate 'upward' from the controller to scripts/apps.",
  },
  {
    id: 75,
    question:
      "Which of the following is a common Northbound API protocol architecture that relies on HTTP methods like GET, POST, PUT, and DELETE?",
    options: ["NETCONF", "REST", "SNMP", "IPsec"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "REST (Representational State Transfer) APIs use standard HTTP verbs to interact with the controller from external applications.",
  },
  {
    id: 76,
    question:
      "Which data serialization format utilizes key-value pairs, relies heavily on curly braces '{}', and is the standard for most REST APIs?",
    options: ["XML", "YAML", "JSON", "HTML"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "JavaScript Object Notation (JSON) is a lightweight, human-readable format built on key-value pairs and arrays.",
  },
  {
    id: 77,
    question:
      "Which data serialization format relies entirely on strict indentation (whitespace) to define structure, making it highly readable for humans?",
    options: ["JSON", "XML", "YAML", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "YAML (YAML Ain't Markup Language) uses spaces/indentation to structure data, making it very popular for Ansible playbooks and configuration files.",
  },
  {
    id: 78,
    question:
      "Which configuration management tool is uniquely 'agentless' and connects to devices natively via SSH to execute modules?",
    options: ["Puppet", "Chef", "Ansible", "SaltStack"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Ansible is agentless. It uses SSH (or NETCONF/RESTCONF) to 'push' configurations to devices using Playbooks written in YAML.",
  },
  {
    id: 79,
    question:
      "Which configuration management tool uses a 'pull' model, where devices check in with a master server, and relies on 'Recipes' and 'Cookbooks' written in Ruby?",
    options: ["Ansible", "Puppet", "Chef", "DNA Center"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Chef is an agent-based tool utilizing a Ruby-based DSL organized into Recipes and Cookbooks. Puppet uses 'Manifests'.",
  },
  {
    id: 80,
    question: "What is Cisco DNA Center?",
    options: [
      "A firewall appliance.",
      "An intent-based networking controller providing centralized management, automation, and assurance for enterprise networks.",
      "A cloud-only routing protocol.",
      "An Ansible module.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco DNA Center is the foundational controller and analytics platform for Cisco Software-Defined Access (SD-Access).",
  },
  {
    id: 81,
    question:
      "In modern data centers, what topology has largely replaced the traditional 3-tier (Core/Distribution/Access) model to optimize east-west traffic?",
    options: ["Ring topology", "Hub and Spoke", "Spine-and-Leaf", "Full Mesh"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Spine-and-Leaf (Clos) topology ensures every Leaf switch connects to every Spine switch, providing predictable, low-latency, single-hop paths for east-west server traffic.",
  },
  {
    id: 82,
    question:
      "Which HTTP status code signifies that a REST API request was successful?",
    options: ["404", "500", "200", "401"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "200 OK (and generally all 2xx codes) means the server successfully processed the request.",
  },
  {
    id: 83,
    question: "An API returns a '401' status code. What does this indicate?",
    options: [
      "Not Found",
      "Internal Server Error",
      "Unauthorized (Authentication failed)",
      "Bad Request (Malformed JSON)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "401 Unauthorized means the request lacks valid authentication credentials (e.g., missing or invalid API token).",
  },
  {
    id: 84,
    question:
      "Which HTTP method is idempotent and used to completely replace an existing resource?",
    options: ["POST", "PATCH", "PUT", "GET"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "PUT replaces the entire resource and is idempotent (doing it multiple times yields the same state). PATCH partially updates. POST creates new resources and is non-idempotent.",
  },

  // --- Deeper Mix / Troubleshooting / Scenarios ---
  {
    id: 85,
    question:
      "You cannot ping a newly configured local router interface from a connected PC. The interface shows 'administratively down'. What is the fix?",
    options: [
      "Check the physical cable.",
      "Issue the 'no shutdown' command on the router interface.",
      "Configure a default route.",
      "Disable the firewall.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, Cisco router interfaces are disabled. 'Administratively down' means the administrator must issue the 'no shutdown' command.",
  },
  {
    id: 86,
    question:
      "You see incrementing 'CRC errors' on a switch interface via the 'show interfaces' command. What is the most likely cause?",
    options: [
      "A routing loop.",
      "A faulty cable or a duplex mismatch.",
      "MAC flooding.",
      "Spanning tree convergence.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cyclic Redundancy Check (CRC) errors indicate that frames are physically corrupted during transit, usually caused by bad physical media or a half/full duplex mismatch.",
  },
  {
    id: 87,
    question: "What is a 'Late Collision' in Ethernet?",
    options: [
      "A collision that occurs after the first 64 bytes of the frame have been transmitted.",
      "A collision in full-duplex mode.",
      "A delayed ping.",
      "A broadcast storm.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Late collisions indicate that the collision occurred outside the normal timing window (the first 64 bytes). This is almost always caused by a duplex mismatch or cables exceeding maximum length limits.",
  },
  {
    id: 88,
    question:
      "If a switch has VTP mode set to 'Transparent', what does it do with VTP advertisements it receives?",
    options: [
      "It drops them.",
      "It updates its own VLAN database with them.",
      "It forwards them out trunk links to other switches but ignores them locally.",
      "It sends a VTP error.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Transparent mode allows a switch to maintain its own independent, local VLAN database, but it still passes VTP messages along to help other switches sync.",
  },
  {
    id: 89,
    question:
      "Why might a network engineer configure 'switchport nonegotiate' on a trunk port?",
    options: [
      "To disable STP.",
      "To prevent DTP spoofing attacks by stopping the transmission of dynamic trunking packets.",
      "To force the port into access mode.",
      "To negotiate LACP faster.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Disabling DTP frames hardens the switch against VLAN hopping attacks where an attacker might try to spoof a switch to form an unauthorized trunk.",
  },
  {
    id: 90,
    question:
      "A PC has the IP 10.1.1.10/24 and gateway 10.1.1.1. It pings 8.8.8.8 and the first ping drops, but the next 3 succeed. Why?",
    options: [
      "The router dropped the first packet while performing an ARP request to find the ISP's MAC address.",
      "The PC dropped the packet while ARPing for the default gateway (10.1.1.1) MAC address.",
      "ICMP has a built-in delay.",
      "Spanning tree took 1 second to forward.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The PC knows it must send traffic to the gateway, but its ARP cache is empty. It drops the first packet while waiting for the ARP reply from the gateway.",
  },
  {
    id: 91,
    question:
      "Which command shows the Layer 3 to Layer 2 address mappings on a Cisco router?",
    options: [
      "show mac address-table",
      "show ip arp",
      "show ip route",
      "show cdp neighbors",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show ip arp' command displays the ARP cache, mapping IPv4 addresses to their corresponding MAC addresses.",
  },
  {
    id: 92,
    question:
      "What is a major advantage of utilizing an overlay network (like VXLAN in SD-Access) over a traditional network?",
    options: [
      "It completely eliminates the need for physical routers.",
      "It decouples the logical network topology from the physical underlay hardware, allowing seamless mobility and segmentation.",
      "It removes the need for IP addresses.",
      "It prevents hardware failures.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Overlay networks create virtual tunnels (like VXLAN) over a routed physical underlay, allowing Layer 2 stretch across Layer 3 boundaries and extreme flexibility.",
  },
  {
    id: 93,
    question: "In JSON, which of the following represents an array?",
    options: [
      '{"name": "value"}',
      '["Router1", "Router2"]',
      '("Router1", "Router2")',
      "<Router1, Router2>",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In JSON, arrays (lists of items) are enclosed in square brackets [].",
  },
  {
    id: 94,
    question: "Which of the following is true about IPv6 addressing?",
    options: [
      "It uses NAT extensively to save addresses.",
      "It does not use broadcasts; it uses multicasts instead.",
      "It is backward compatible with IPv4 without translation.",
      "The subnet mask is represented in dotted-decimal format.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPv6 eliminates broadcast addressing entirely, relying on targeted multicast addressing (like Solicited-Node multicast) for efficiency.",
  },
  {
    id: 95,
    question: "Which routing protocol is an Exterior Gateway Protocol (EGP)?",
    options: ["OSPF", "EIGRP", "BGP", "IS-IS"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Border Gateway Protocol (BGP) is an EGP used to route traffic between different Autonomous Systems across the internet.",
  },
  {
    id: 96,
    question:
      "What does the 'ip route 0.0.0.0 0.0.0.0 203.0.113.1' command do?",
    options: [
      "Creates a loopback interface.",
      "Configures the router to drop all traffic.",
      "Creates a gateway of last resort (default route) sending all unknown traffic to 203.0.113.1.",
      "Enables dynamic routing.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 0.0.0.0 0.0.0.0 mask matches any destination IP. It is the static default route.",
  },
  {
    id: 97,
    question:
      "If a switch port is placed in 'err-disable' by Port Security, how can an admin recover it?",
    options: [
      "By rebooting the server connected to it.",
      "By issuing the 'shutdown' command followed by 'no shutdown' on the interface.",
      "By changing the VLAN.",
      "By clearing the MAC address table.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An err-disabled port requires intervention to reset its state. Bouncing the port (shut / no shut) clears the error state.",
  },
  {
    id: 98,
    question:
      "Which configuration component allows a router to translate many private inside IPs to a single public IP address?",
    options: [
      "Static NAT",
      "Dynamic NAT without 'overload'",
      "NAT Overload (PAT)",
      "Port Forwarding",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'overload' keyword enables Port Address Translation (PAT), tracking connections via Layer 4 source ports.",
  },
  {
    id: 99,
    question:
      "A router has an OSPF route with a metric of 100, and an EIGRP route to the same destination with a metric of 150000. Which route will be installed in the routing table?",
    options: [
      "The OSPF route, because 100 is less than 150000.",
      "The EIGRP route, because EIGRP has a lower Administrative Distance (90 vs 110).",
      "Both, for load balancing.",
      "Neither, the router drops it.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Administrative Distance determines which routing protocol is trusted FIRST. Since EIGRP's AD (90) is better than OSPF's AD (110), the EIGRP route is installed regardless of the metric values.",
  },
  {
    id: 100,
    question: "What is the primary function of a Hypervisor in virtualization?",
    options: [
      "To route traffic between physical servers.",
      "To act as a firewall.",
      "To abstract the physical hardware resources (CPU, RAM) and allocate them to multiple Virtual Machines (VMs).",
      "To compile code for SDN applications.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The hypervisor (like VMware ESXi or Microsoft Hyper-V) creates a virtualization layer that manages and divides the physical hardware resources among distinct, isolated VMs.",
  },
];
