import type { QuizQuestion } from "./types";

export const networkFundamentalsQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which network topology requires every device to be connected to every other device?",
    options: ["Star", "Bus", "Mesh", "Ring"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In a full-mesh topology every device has a direct connection to every other device, providing high redundancy at the cost of increased cabling and complexity.",
  },
  {
    id: 2,
    question:
      "Which OSI layer is responsible for logical addressing and routing?",
    options: ["Data Link", "Network", "Transport", "Session"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Network layer (Layer 3) handles logical addressing (IP addresses) and routing packets between different networks.",
  },
  {
    id: 3,
    question: "What is the default subnet mask for a Class C IPv4 address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Class C IP address uses a default subnet mask of 255.255.255.0, or /24.",
  },
  {
    id: 4,
    question: "Which protocol resolves IP addresses to MAC addresses?",
    options: ["DNS", "DHCP", "ARP", "NTP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Address Resolution Protocol (ARP) maps a known IPv4 address to an unknown MAC address on a local network.",
  },
  {
    id: 5,
    question: "Which port number does HTTPS use by default?",
    options: ["80", "22", "443", "21"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "HTTPS uses TCP port 443 to provide secure, encrypted web traffic.",
  },
  {
    id: 6,
    question: "What is the primary function of a Layer 2 switch?",
    options: [
      "Route packets between networks",
      "Forward frames based on MAC addresses",
      "Assign IP addresses",
      "Filter traffic based on IP headers",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A Layer 2 switch makes forwarding decisions based on destination MAC addresses in the Ethernet frame.",
  },
  {
    id: 7,
    question: "Which command reveals the MAC address table on a Cisco switch?",
    options: [
      "show ip arp",
      "show mac address-table",
      "show interfaces",
      "show run",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'show mac address-table' command displays the dynamically learned and static MAC addresses known to the switch.",
  },
  {
    id: 8,
    question: "What is the maximum hop count for RIPv2?",
    options: ["15", "16", "100", "255"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "RIP uses hop count as its metric, with a maximum valid limit of 15. A hop count of 16 is considered unreachable.",
  },
  {
    id: 9,
    question: "Which of the following is a link-state routing protocol?",
    options: ["EIGRP", "BGP", "RIP", "OSPF"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Open Shortest Path First (OSPF) is a link-state routing protocol that builds a complete topological map of the network.",
  },
  {
    id: 10,
    question: "What is the administrative distance of a static route?",
    options: ["0", "1", "90", "110"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, a manually configured static route has an administrative distance of 1.",
  },
  {
    id: 11,
    question: "Which IEEE standard is used for VLAN tagging on trunk links?",
    options: ["802.1D", "802.1Q", "802.1X", "802.3ad"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IEEE 802.1Q is the industry standard for VLAN tagging across trunk links.",
  },
  {
    id: 12,
    question: "What is the purpose of Spanning Tree Protocol (STP)?",
    options: [
      "To route packets dynamically",
      "To prevent Layer 2 loops",
      "To aggregate bandwidth",
      "To secure switch ports",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "STP prevents bridging loops in Layer 2 networks with redundant links by placing certain ports in a blocking state.",
  },
  {
    id: 13,
    question:
      "Which STP port state forwards data frames and learns MAC addresses?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The Forwarding state is the only STP state that actively forwards user data frames.",
  },
  {
    id: 14,
    question: "What does the PortFast feature do?",
    options: [
      "Bundles multiple links into one",
      "Immediately transitions a port to the forwarding state",
      "Disables STP globally",
      "Secures a port against unauthorized MAC addresses",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "PortFast bypasses the listening and learning stages, moving an access port directly to forwarding to prevent DHCP timeout issues for end hosts.",
  },
  {
    id: 15,
    question:
      "Which protocol is a Cisco-proprietary method for negotiating EtherChannels?",
    options: ["LACP", "STP", "PAgP", "VTP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Port Aggregation Protocol (PAgP) is Cisco-proprietary, while LACP (802.3ad) is the open standard.",
  },
  {
    id: 16,
    question: "What is the length of an IPv6 address?",
    options: ["32 bits", "64 bits", "128 bits", "256 bits"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IPv6 addresses are 128 bits long, represented as eight groups of four hexadecimal digits.",
  },
  {
    id: 17,
    question: "Which IPv6 prefix is used for link-local addresses?",
    options: ["FC00::/7", "FE80::/10", "FF00::/8", "2000::/3"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Link-local addresses, which are automatically configured on all IPv6 interfaces, begin with the prefix FE80::/10.",
  },
  {
    id: 18,
    question:
      "What mechanism allows an IPv6 host to generate its own interface ID using its MAC address?",
    options: ["DHCPv6", "EUI-64", "SLAAC", "NDP"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The EUI-64 process expands a 48-bit MAC address into a 64-bit interface ID by inserting FFFE in the middle and inverting the 7th bit.",
  },
  {
    id: 19,
    question: "Which message does an IPv6 host send to find the local router?",
    options: [
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Hosts send a Router Solicitation (RS) multicast message to prompt routers to respond with a Router Advertisement (RA).",
  },
  {
    id: 20,
    question: "What is the default OSPF reference bandwidth?",
    options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The default OSPF reference bandwidth is 100 Mbps, meaning Fast Ethernet and Gigabit Ethernet interfaces will both default to a cost of 1 unless adjusted.",
  },
  {
    id: 21,
    question: "In OSPF, what is the purpose of the Designated Router (DR)?",
    options: [
      "To route packets to other autonomous systems",
      "To reduce the number of adjacencies on a multiaccess network",
      "To inject default routes",
      "To encrypt OSPF packets",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "On multiaccess segments (like Ethernet), a DR is elected to act as the central point for routing updates, minimizing adjacency overhead.",
  },
  {
    id: 22,
    question: "Which command configures a default static route in IPv4?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 [next-hop]",
      "ip route default [next-hop]",
      "ip default-network [network]",
      "ip route 255.255.255.255 0.0.0.0 [next-hop]",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The command 'ip route 0.0.0.0 0.0.0.0' signifies a route that matches any destination IP address.",
  },
  {
    id: 23,
    question:
      "What type of address translates multiple private IP addresses to a single public IP address?",
    options: ["Static NAT", "Dynamic NAT", "PAT", "NAT64"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Port Address Translation (PAT), or NAT Overload, uses source port numbers to map multiple private IP addresses to a single public IP address.",
  },
  {
    id: 24,
    question: "Which protocol dynamically assigns IP addresses to hosts?",
    options: ["DNS", "ARP", "DHCP", "ICMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses and other network parameters to client devices.",
  },
  {
    id: 25,
    question:
      "What is the correct sequence of DHCP messages during address allocation?",
    options: [
      "DORA (Discover, Offer, Request, Acknowledge)",
      "SYN, SYN-ACK, ACK",
      "Discover, Request, Offer, Acknowledge",
      "Solicit, Advertise, Request, Reply",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The IPv4 DHCP process follows the DORA sequence: Discover, Offer, Request, and Acknowledge.",
  },
  {
    id: 26,
    question: "Which feature protects against rogue DHCP servers on a network?",
    options: [
      "Dynamic ARP Inspection",
      "DHCP Snooping",
      "Port Security",
      "BPDU Guard",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCP Snooping filters untrusted DHCP messages and ensures that DHCPOFFERs only enter the switch through explicitly trusted ports.",
  },
  {
    id: 27,
    question:
      "What does Dynamic ARP Inspection (DAI) use to validate ARP packets?",
    options: [
      "The routing table",
      "The MAC address table",
      "The DHCP snooping binding database",
      "The VLAN database",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "DAI relies on the DHCP snooping binding database to verify the IP-to-MAC address bindings of incoming ARP packets on untrusted ports.",
  },
  {
    id: 28,
    question:
      "By default, what is the maximum number of secure MAC addresses allowed on a port configured with port security?",
    options: ["1", "5", "10", "Unlimited"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "When switchport port-security is enabled, the default maximum number of allowed MAC addresses is 1.",
  },
  {
    id: 29,
    question:
      "Which port security violation mode drops offending frames but does NOT increment the violation counter?",
    options: ["Protect", "Restrict", "Shutdown", "Err-disable"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The 'protect' mode drops traffic from unknown MAC addresses but does not log the event or increment the violation counter, unlike 'restrict'.",
  },
  {
    id: 30,
    question: "What is the standard ACL number range in IPv4?",
    options: ["1-99", "100-199", "2000-2999", "1000-1999"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Standard IPv4 Access Control Lists use numbers 1-99 (and expanded range 1300-1999).",
  },
  {
    id: 31,
    question:
      "Which characteristic is unique to Extended ACLs compared to Standard ACLs?",
    options: [
      "They can only filter by source IP",
      "They are applied closest to the destination",
      "They can filter by source, destination, protocol, and port",
      "They only use numbers 1-99",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Extended ACLs provide granular control by filtering based on source and destination IPs, protocols (TCP/UDP), and specific port numbers.",
  },
  {
    id: 32,
    question: "Where should standard ACLs generally be placed?",
    options: [
      "As close to the source as possible",
      "As close to the destination as possible",
      "On the core router only",
      "On Layer 2 switches only",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because standard ACLs only check the source IP, placing them too close to the source could inadvertently block legitimate traffic to other destinations.",
  },
  {
    id: 33,
    question:
      "What is the implicit rule at the end of every Access Control List?",
    options: [
      "permit ip any any",
      "deny ip any any",
      "permit all",
      "deny all log",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Every ACL has a hidden 'deny ip any any' statement at the bottom, which drops any traffic that doesn't explicitly match a preceding permit statement.",
  },
  {
    id: 34,
    question:
      "Which command applies an ACL to a VTY line for SSH access control?",
    options: [
      "ip access-group",
      "access-class",
      "ip access-list",
      "apply access-list",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To restrict Telnet or SSH access, the 'access-class' command is applied within the line vty configuration mode.",
  },
  {
    id: 35,
    question:
      "What type of wireless architecture places the wireless intelligence and management on a central controller?",
    options: ["Autonomous", "Ad-hoc", "Split-MAC (Lightweight)", "Mesh"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In a Split-MAC (Lightweight) architecture, Access Points handle real-time RF tasks while a Wireless LAN Controller (WLC) manages policies and configurations.",
  },
  {
    id: 36,
    question:
      "Which protocol do Lightweight Access Points (LAPs) use to communicate with a WLC?",
    options: ["LWAPP", "CAPWAP", "SNMP", "RADIUS"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "CAPWAP (Control and Provisioning of Wireless Access Points) is the standard protocol used for communication between LAPs and a WLC.",
  },
  {
    id: 37,
    question:
      "Which wireless security protocol utilizes CCMP and AES encryption?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "WPA2 replaced TKIP with CCMP, which utilizes the highly secure AES encryption algorithm.",
  },
  {
    id: 38,
    question:
      "In WPA3, what replaces the Pre-Shared Key (PSK) exchange to prevent dictionary attacks?",
    options: [
      "TKIP",
      "Simultaneous Authentication of Equals (SAE)",
      "802.1X",
      "EAP-TLS",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "SAE protects against brute-force dictionary attacks by requiring a secure, peer-to-peer handshake even if the password is weak.",
  },
  {
    id: 39,
    question:
      "Which QoS model provides absolute guarantees of bandwidth and delay using RSVP?",
    options: [
      "Best Effort",
      "Differentiated Services (DiffServ)",
      "Integrated Services (IntServ)",
      "FIFO",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "IntServ uses the Resource Reservation Protocol (RSVP) to explicitly reserve network resources for a specific traffic flow end-to-end.",
  },
  {
    id: 40,
    question:
      "Which DSCP value is typically recommended for voice traffic (VoIP)?",
    options: ["AF31", "CS3", "EF (Expedited Forwarding)", "Default (0)"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Expedited Forwarding (EF), or DSCP 46, is the standard recommendation for latency-sensitive voice traffic.",
  },
  {
    id: 41,
    question: "What is the primary role of a Hypervisor in virtualization?",
    options: [
      "To route packets",
      "To host virtual machines and manage hardware allocation",
      "To act as a firewall",
      "To manage container images",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A hypervisor abstracts physical hardware resources (CPU, RAM, Storage) to create and manage multiple virtual machines (VMs).",
  },
  {
    id: 42,
    question:
      "Which data format relies on key-value pairs and uses curly braces {} for objects?",
    options: ["XML", "YAML", "JSON", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "JSON (JavaScript Object Notation) organizes data into key-value pairs encapsulated within curly braces.",
  },
  {
    id: 43,
    question:
      "Which HTTP method is typically used to create a new resource via a REST API?",
    options: ["GET", "PUT", "POST", "DELETE"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The POST method is conventionally used in RESTful APIs to submit data and create a new resource on the server.",
  },
  {
    id: 44,
    question:
      "What configuration management tool uses a declarative, push-based model over SSH with Playbooks written in YAML?",
    options: ["Puppet", "Chef", "Ansible", "SaltStack"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Ansible is agentless, utilizes SSH to push configurations, and uses human-readable YAML files called Playbooks.",
  },
  {
    id: 45,
    question:
      "In Software-Defined Networking (SDN), what plane is moved to a centralized controller?",
    options: [
      "Data plane",
      "Management plane",
      "Control plane",
      "Forwarding plane",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "SDN architecture separates the control plane from the data plane, centralizing the control plane logic in an SDN controller.",
  },
  {
    id: 46,
    question:
      "Which Cisco technology provides a centralized, software-defined solution for managing campus and branch networks?",
    options: ["Cisco ACI", "Cisco DNA Center", "Cisco SD-WAN", "Cisco Meraki"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco DNA Center is the foundational controller and analytics platform at the heart of Cisco's Software-Defined Access (SD-Access) architecture for enterprise networks.",
  },
  {
    id: 47,
    question:
      "Which interface communicates between the SDN Controller and the underlying network devices?",
    options: [
      "Northbound API",
      "Southbound API",
      "Eastbound API",
      "Westbound API",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Southbound APIs (like OpenFlow or NETCONF) allow the controller to push policies and configurations down to the physical switches and routers.",
  },
  {
    id: 48,
    question:
      "What protocol operates at Layer 4 and is connectionless, offering no guarantee of delivery?",
    options: ["TCP", "IP", "UDP", "ICMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "User Datagram Protocol (UDP) is a best-effort, connectionless transport protocol with low overhead.",
  },
  {
    id: 49,
    question:
      "How many usable host IP addresses are available in a /28 subnet?",
    options: ["14", "16", "30", "32"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A /28 subnet has 4 host bits. 2^4 = 16 total IPs, minus 2 (network and broadcast addresses) equals 14 usable hosts.",
  },
  {
    id: 50,
    question: "What is the purpose of the 'ip helper-address' command?",
    options: [
      "To configure a backup router",
      "To relay DHCP broadcasts to a unicast DHCP server",
      "To assist with NAT translation",
      "To resolve DNS queries",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ip helper-address' command configures a router to forward DHCP broadcast messages as unicast packets to a specified DHCP server.",
  },
  {
    id: 51,
    question:
      "Which command shows the status, IP address, and operational state of all interfaces briefly?",
    options: [
      "show ip route",
      "show interfaces",
      "show ip interface brief",
      "show running-config",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show ip interface brief' is a fundamental command used to quickly verify which interfaces are up/up and their assigned IP addresses.",
  },
  {
    id: 52,
    question:
      "What is the primary characteristic of a Spine-and-Leaf topology?",
    options: [
      "Hierarchical three-tier design",
      "Every leaf connects to every spine, forming a full-mesh backbone",
      "Spines connect directly to endpoints",
      "Uses STP to block redundant links",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In a two-tier spine-and-leaf design, every leaf switch connects to every spine switch, ensuring a predictable, single-hop latency for east-west traffic.",
  },
  {
    id: 53,
    question:
      "Which mechanism allows a router to group multiple contiguous subnets into a single routing table entry?",
    options: ["VLSM", "Route Summarization", "NAT", "Proxy ARP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Route summarization (or aggregation) consolidates multiple smaller networks into one larger prefix, reducing routing table size and instability.",
  },
  {
    id: 54,
    question:
      "Which OSPF router connects the OSPF domain to an external network (e.g., the Internet or EIGRP domain)?",
    options: ["ABR", "ASBR", "DR", "BDR"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An Autonomous System Boundary Router (ASBR) redistributes routes from external autonomous systems into the OSPF domain.",
  },
  {
    id: 55,
    question:
      "What determines the OSPF Router ID if no loopback interfaces are configured and the router-id command is not used?",
    options: [
      "The lowest MAC address",
      "The highest active physical IP address",
      "The lowest active physical IP address",
      "It defaults to 0.0.0.0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "OSPF chooses its Router ID in this order: configured router-id, highest loopback IP, highest active physical interface IP.",
  },
  {
    id: 56,
    question:
      "Which syslog severity level indicates an 'Error' condition (e.g., interface down)?",
    options: ["Level 0", "Level 1", "Level 3", "Level 7"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Syslog severity levels range from 0 (Emergency) to 7 (Debugging). Level 3 represents Errors.",
  },
  {
    id: 57,
    question: "What is the default native VLAN on a Cisco switch?",
    options: ["VLAN 0", "VLAN 1", "VLAN 1002", "VLAN 4094"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, all Cisco switch ports belong to VLAN 1, and it serves as the default native VLAN for 802.1Q trunks.",
  },
  {
    id: 58,
    question:
      "Which command prevents a trunk port from negotiating a trunking connection dynamically?",
    options: [
      "switchport mode trunk",
      "switchport nonegotiate",
      "switchport mode dynamic auto",
      "switchport access vlan 1",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'switchport nonegotiate' command disables DTP (Dynamic Trunking Protocol) packets, forcing the port to strictly abide by its configured mode.",
  },
  {
    id: 59,
    question:
      "What problem does a native VLAN mismatch cause between two switches?",
    options: [
      "Spanning tree loops",
      "VLAN hopping",
      "Routing loops",
      "Traffic from mismatched native VLANs merging",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Since native VLAN traffic is untagged, a mismatch will cause the untagged traffic from one switch's native VLAN to bleed into the other switch's native VLAN.",
  },
  {
    id: 60,
    question:
      "Which parameter does STP use first to determine the Root Bridge?",
    options: [
      "Lowest MAC Address",
      "Highest Bridge Priority",
      "Lowest Bridge Priority",
      "Highest Port Number",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Root Bridge election looks for the lowest Bridge ID, which is a combination of Bridge Priority (evaluated first) and the MAC address.",
  },
  {
    id: 61,
    question:
      "What feature should be enabled on edge ports to protect the STP topology if a rogue switch is plugged in?",
    options: ["BPDU Guard", "Root Guard", "Loop Guard", "PortFast"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "BPDU Guard immediately err-disables a port if it receives a BPDU, preventing a rogue device from affecting the spanning-tree topology.",
  },
  {
    id: 62,
    question: "What is the function of the LLDP protocol?",
    options: [
      "Negotiate trunk links",
      "Discover neighboring network devices and their capabilities",
      "Route IPv6 traffic",
      "Encrypt management traffic",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Link Layer Discovery Protocol (LLDP) is an IEEE standard (vendor-neutral) protocol used to advertise device identity and capabilities to neighbors.",
  },
  {
    id: 63,
    question:
      "Which HSRP state implies the router is actively forwarding traffic for the virtual IP address?",
    options: ["Standby", "Listen", "Active", "Speak"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In Hot Standby Router Protocol (HSRP), the Active router handles the forwarding of traffic sent to the virtual default gateway IP.",
  },
  {
    id: 64,
    question: "What is a characteristic of a REST API?",
    options: [
      "It maintains a constant stateful connection",
      "It operates over SSH",
      "It is stateless and relies on standard HTTP methods",
      "It relies entirely on XML payload format",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "REST (Representational State Transfer) is stateless, meaning every client request contains all necessary data, and it relies heavily on standard HTTP verbs (GET, POST, PUT, DELETE).",
  },
  {
    id: 65,
    question:
      "Which of the following describes standard PoE (802.3af) maximum power output per port?",
    options: ["15.4 W", "30 W", "60 W", "90 W"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The original IEEE 802.3af standard provides up to 15.4 Watts of DC power to each device.",
  },
  {
    id: 66,
    question:
      "Which component of an IPv4 packet header is used by QoS to classify traffic?",
    options: ["TTL", "Protocol", "DSCP / ToS byte", "Source IP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Type of Service (ToS) byte, specifically the Differentiated Services Code Point (DSCP) field, is used to mark and classify IPv4 traffic for QoS.",
  },
  {
    id: 67,
    question:
      "What is the primary benefit of Variable Length Subnet Masking (VLSM)?",
    options: [
      "It eliminates the need for routing tables",
      "It allows subnets of different sizes to be created from the same network space",
      "It secures the network layer",
      "It converts IPv4 to IPv6",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VLSM maximizes IP address efficiency by allowing network administrators to allocate subnet masks based on the exact number of hosts needed per segment.",
  },
  {
    id: 68,
    question:
      "Which command verifies the path a packet takes through an IP network and measures transit delays?",
    options: ["ping", "nslookup", "traceroute", "netstat"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Traceroute (or tracert in Windows) uses ICMP or UDP to track the sequence of hops a packet traverses to reach its destination.",
  },
  {
    id: 69,
    question:
      "If a router learns about a network via OSPF and EIGRP, which route will be placed in the routing table by default?",
    options: [
      "OSPF",
      "EIGRP",
      "Both will load balance",
      "Neither, a loop occurs",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router uses Administrative Distance (AD) as a tiebreaker. EIGRP has a default AD of 90, which is preferred over OSPF's AD of 110.",
  },
  {
    id: 70,
    question: "What is the wildcard mask for a /27 subnet?",
    options: ["0.0.0.31", "0.0.0.15", "0.0.0.63", "0.0.0.255"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A /27 subnet mask is 255.255.255.224. Subtracting this from 255.255.255.255 yields a wildcard mask of 0.0.0.31.",
  },
  {
    id: 71,
    question: "In wireless networking, what is RSSI?",
    options: [
      "A security encryption standard",
      "A measurement of the received signal strength",
      "The SSID broadcast beacon",
      "The authentication server",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Received Signal Strength Indicator (RSSI) is an estimated measurement of how well a device can hear a signal from an access point.",
  },
  {
    id: 72,
    question:
      "Which Wi-Fi frequency band provides higher throughput but lower range and poor wall penetration?",
    options: ["2.4 GHz", "5 GHz", "900 MHz", "Bluetooth"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 5 GHz band has a shorter wavelength, making it faster and less congested, but it cannot penetrate solid objects as effectively as the 2.4 GHz band.",
  },
  {
    id: 73,
    question:
      "Which of the following is an IPv6 transition mechanism that embeds an IPv4 packet inside an IPv6 packet?",
    options: ["Dual-stack", "NAT64", "Tunneling", "SLAAC"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Tunneling involves encapsulating one protocol payload inside another, such as placing an IPv4 packet inside an IPv6 header to traverse an IPv6 network.",
  },
  {
    id: 74,
    question:
      "What command saves the running configuration to NVRAM on a Cisco IOS device?",
    options: [
      "write memory",
      "copy running-config startup-config",
      "Both A and B",
      "save config",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Both 'copy running-config startup-config' and the legacy command 'write memory' (or 'wr') save the active configuration to persistent NVRAM.",
  },
  {
    id: 75,
    question: "Which AAA component verifies the identity of the user?",
    options: [
      "Authentication",
      "Authorization",
      "Accounting",
      "Access-Control",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Authentication is the process of verifying 'who the user is', typically via a username and password or certificate.",
  },
  {
    id: 76,
    question:
      "Which security protocol encrypts the entire payload of AAA packets and is Cisco-proprietary?",
    options: ["RADIUS", "TACACS+", "802.1X", "Kerberos"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TACACS+ is a Cisco proprietary protocol that encrypts the entire payload, whereas RADIUS only encrypts the password.",
  },
  {
    id: 77,
    question: "What is the purpose of an Anycast IPv6 address?",
    options: [
      "To send data to all nodes on the local link",
      "To route data to a single specific node globally",
      "To send data to the nearest interface among a group sharing the same address",
      "To replace loopback functionality",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "An Anycast address is assigned to multiple interfaces (usually on different routers). The network delivers the packet to the 'closest' interface based on routing metrics.",
  },
  {
    id: 78,
    question:
      "Which field in the IPv6 header replaces the IPv4 Time-to-Live (TTL) field?",
    options: ["Flow Label", "Traffic Class", "Next Header", "Hop Limit"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The Hop Limit field in IPv6 serves the exact same loop-prevention function as the TTL field in IPv4.",
  },
  {
    id: 79,
    question:
      "What is the primary function of the Core layer in the Cisco three-tier hierarchical model?",
    options: [
      "To provide end-user access",
      "To apply security and routing policies",
      "To transport large amounts of data quickly and reliably",
      "To manage wireless controllers",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Core layer acts as the high-speed backbone of the network, focused purely on fast transport and high availability, avoiding CPU-intensive policy applications.",
  },
  {
    id: 80,
    question:
      "Which technology allows multiple physical switches to logically act as a single switch?",
    options: ["VSS / StackWise", "VTP", "STP", "OSPF"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Technologies like Cisco StackWise and Virtual Switching System (VSS) cluster physical switches into one logical switch for simplified management and redundant pathways.",
  },
  {
    id: 81,
    question:
      "Which automation format heavily relies on whitespace and indentation for structural logic?",
    options: ["JSON", "XML", "YAML", "HTML"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "YAML (YAML Ain't Markup Language) uses strict indentation rules to define hierarchy and data structures.",
  },
  {
    id: 82,
    question:
      "In standard network troubleshooting, what is a top-down approach?",
    options: [
      "Starting at the physical cabling and moving up to applications",
      "Starting at the application layer and checking downward to physical links",
      "Replacing the core router first",
      "Looking at the routing table first",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A top-down troubleshooting approach begins at Layer 7 (e.g., verifying if the web browser works) and works its way down to Layer 1 (cabling).",
  },
  {
    id: 83,
    question:
      "What happens to a frame on a switch if its destination MAC address is not in the MAC address table?",
    options: [
      "The switch drops the frame",
      "The switch sends an ARP request",
      "The switch floods the frame out all ports except the receiving port",
      "The switch forwards it to the default gateway",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "When a switch encounters an unknown unicast frame, it floods the frame out all active ports in the same VLAN (except the ingress port) to ensure it reaches its destination.",
  },
  {
    id: 84,
    question: "Which port does SSH use for secure remote management?",
    options: ["21", "22", "23", "69"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Secure Shell (SSH) uses TCP port 22 to establish encrypted command-line sessions.",
  },
  {
    id: 85,
    question:
      "What does the command 'switchport port-security mac-address sticky' do?",
    options: [
      "Prevents MAC addresses from aging out",
      "Dynamically learns the connected MAC address and writes it to the running configuration",
      "Restricts the port to a single hard-coded vendor OUI",
      "Disables dynamic MAC learning globally",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'sticky' keyword dynamically learns the first MAC address seen on the port and saves it as a static entry in the switch's running configuration.",
  },
  {
    id: 86,
    question:
      "Which mechanism provides time synchronization across network devices?",
    options: ["SNMP", "NTP", "CDP", "DHCP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Network Time Protocol (NTP) synchronizes the clocks of computers and network devices over IP networks.",
  },
  {
    id: 87,
    question: "What network metric refers to the variation in packet delay?",
    options: ["Latency", "Bandwidth", "Jitter", "Throughput"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Jitter is the variance in the delay of received packets, which is highly disruptive to real-time traffic like VoIP and video.",
  },
  {
    id: 88,
    question:
      "Which VPN topology allows spoke routers to create dynamic, on-demand tunnels directly between each other?",
    options: ["Site-to-Site IPsec", "DMVPN", "SSL VPN", "Client-to-Site VPN"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Dynamic Multipoint VPN (DMVPN) allows branches to communicate directly without forcing traffic through a central hub, using mGRE and NHRP.",
  },
  {
    id: 89,
    question:
      "Which protocol is utilized in Cisco DNA Center for gathering rich network telemetry and traffic flow data?",
    options: ["NetFlow", "SNMPv2", "Syslog", "FTP"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "NetFlow provides detailed telemetry, tracking IP traffic flows to build a granular picture of network usage and anomalies.",
  },
  {
    id: 90,
    question:
      "Which cloud service model provides a complete, managed application delivered over the web?",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Software as a Service (SaaS) delivers fully functional software hosted in the cloud, such as Office 365 or Salesforce.",
  },
  {
    id: 91,
    question:
      "What does a floating static route require to function as a backup?",
    options: [
      "A lower administrative distance than the primary route",
      "A higher administrative distance than the primary route",
      "A metric of 0",
      "To be redistributed into OSPF",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By assigning a higher AD to a static route, it stays hidden in the routing table until the primary route (which has a lower AD) fails.",
  },
  {
    id: 92,
    question: "In a traditional WAN, what does the CPE stand for?",
    options: [
      "Customer Premise Equipment",
      "Central Processing Element",
      "Core Provider Edge",
      "Carrier Provisioned Ethernet",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Customer Premise Equipment (CPE) refers to the telecommunications hardware located on the customer's physical site.",
  },
  {
    id: 93,
    question: "Which metric does OSPF use to calculate the shortest path?",
    options: ["Hop Count", "Bandwidth (Cost)", "Delay", "Reliability"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "OSPF uses a metric called 'Cost', which is inversely proportional to the bandwidth of the link.",
  },
  {
    id: 94,
    question: "What is the global IPv6 unicast prefix defined by IANA?",
    options: ["FE80::/10", "FF00::/8", "2000::/3", "FC00::/7"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Global unicast IPv6 addresses, which are routable on the public Internet, currently fall within the 2000::/3 range.",
  },
  {
    id: 95,
    question:
      "Which network device operates entirely at Layer 1 of the OSI model and broadcasts all incoming signals to all ports?",
    options: ["Switch", "Router", "Hub", "Firewall"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A hub is a physical-layer repeater that replicates an electrical signal to all connected ports without inspecting MAC or IP addresses.",
  },
  {
    id: 96,
    question: "What does the Native VLAN do on an 802.1Q trunk?",
    options: [
      "Carries strictly management traffic",
      "Drops all unknown traffic",
      "Carries untagged traffic",
      "Encrypts inter-switch communication",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The native VLAN is responsible for carrying untagged frames across a trunk link to ensure backward compatibility with non-VLAN-aware devices.",
  },
  {
    id: 97,
    question: "Which spanning-tree version is compatible with IEEE 802.1w?",
    options: [
      "Legacy STP",
      "Rapid STP (RSTP)",
      "Multiple STP (MSTP)",
      "Per-VLAN STP (PVST+)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IEEE 802.1w defines Rapid Spanning Tree Protocol (RSTP), which dramatically speeds up convergence times compared to 802.1D.",
  },
  {
    id: 98,
    question:
      "Which of these is a private IPv4 address range as defined by RFC 1918?",
    options: [
      "8.8.8.0 /24",
      "172.16.0.0 /12",
      "169.254.0.0 /16",
      "11.0.0.0 /8",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Class B private address space spans from 172.16.0.0 to 172.31.255.255, matching the /12 prefix.",
  },
  {
    id: 99,
    question: "What is the primary purpose of Cisco Discovery Protocol (CDP)?",
    options: [
      "To route packets between switches",
      "To map logical network topologies using IP addresses",
      "To discover directly connected Cisco devices and their configurations",
      "To assign VLANs dynamically",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "CDP is a proprietary Layer 2 protocol used to discover basic hardware and configuration information about adjacent Cisco equipment.",
  },
  {
    id: 100,
    question:
      "Which network programmability data encoding format uses XML-like tags to define data structures?",
    options: ["JSON", "YAML", "XML", "Python"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Extensible Markup Language (XML) uses a hierarchical structure defined by <tags> to organize data for APIs like NETCONF.",
  },
];
