import type { QuizQuestion } from "./types";

export const ipv6RoutingQuestions: QuizQuestion[] = [
  // --- Enabling IPv6 Routing & Basic Concepts ---
  {
    id: 1,
    question: "Which command enables IPv6 routing on a Cisco router?",
    options: [
      "ipv6 routing",
      "ip routing ipv6",
      "ipv6 enable",
      "ipv6 unicast-routing",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "'ipv6 unicast-routing' in global configuration mode enables IPv6 traffic forwarding on a Cisco router. Without it, the router will not forward IPv6 packets.",
  },
  {
    id: 2,
    question:
      "If a router does NOT have 'ipv6 unicast-routing' enabled, but its interface has an IPv6 address, how does it behave?",
    options: [
      "It drops all IPv6 traffic.",
      "It acts as an IPv6 host, but will not forward packets between networks or send Router Advertisements.",
      "It forwards packets but does not use a routing table.",
      "It uses IPv4 to route the IPv6 packets.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Without unicast-routing enabled, the router acts strictly as an end host. It can ping other devices, but it will not act as a default gateway for other hosts.",
  },
  {
    id: 3,
    question:
      "What is the equivalent of the IPv4 command 'show ip route' in IPv6?",
    options: [
      "show route ipv6",
      "show ip route v6",
      "show ipv6 route",
      "show ip route 6",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'show ipv6 route' command displays the IPv6 routing table.",
  },
  {
    id: 4,
    question:
      "In the 'show ipv6 route' output, what does the letter 'C' indicate?",
    options: ["Configured", "Connected", "Candidate", "Current"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "As with IPv4, 'C' stands for a directly Connected network (the subnet attached to the interface).",
  },
  {
    id: 5,
    question:
      "In the 'show ipv6 route' output, what does the letter 'L' indicate?",
    options: ["Link-Local", "Local (Host Route)", "Loopback", "Learned"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'L' route is a /128 Local host route, representing the specific IPv6 address assigned to the router's interface. It allows the router to process packets destined directly to itself.",
  },
  {
    id: 6,
    question:
      "What type of address is typically used as the next-hop address in IPv6 routing protocols?",
    options: [
      "Global Unicast Address",
      "Unique Local Address",
      "Link-Local Address",
      "Multicast Address",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "IPv6 routing protocols (like OSPFv3 and EIGRPv6) almost exclusively use the neighbor's Link-Local Address (FE80::) as the next-hop IP, conserving global address space and increasing security.",
  },
  {
    id: 7,
    question: "Which of the following describes 'Dual-Stack' routing?",
    options: [
      "Routing OSPF and EIGRP simultaneously.",
      "Running IPv4 and IPv6 protocols simultaneously on the same network interfaces.",
      "Tunneling IPv6 traffic inside an IPv4 header.",
      "Translating IPv4 addresses to IPv6.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A Dual-Stack router runs both the IPv4 and IPv6 protocol stacks independently on its interfaces, allowing it to route both types of traffic natively.",
  },
  {
    id: 8,
    question:
      "What is the primary difference in how IPv6 handles packet fragmentation compared to IPv4?",
    options: [
      "IPv6 routers fragment packets into 1500 byte chunks automatically.",
      "IPv6 routers do NOT fragment packets; fragmentation is solely the responsibility of the sending host.",
      "IPv6 relies on switches to fragment frames.",
      "IPv6 does not support fragmentation at all.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To increase routing efficiency, IPv6 routers drop packets that exceed the link MTU and send an ICMPv6 'Packet Too Big' message back to the source, forcing the host to handle fragmentation.",
  },

  // --- Static Routing (IPv6) ---
  {
    id: 9,
    question:
      "Which command configures a static IPv6 route to the 2001:db8:acad:2::/64 network using a next-hop IP of 2001:db8:acad:1::2?",
    options: [
      "ipv6 route 2001:db8:acad:2::/64 2001:db8:acad:1::2",
      "ip route ipv6 2001:db8:acad:2::/64 2001:db8:acad:1::2",
      "ipv6 static 2001:db8:acad:2::/64 2001:db8:acad:1::2",
      "route ipv6 2001:db8:acad:2::/64 next-hop 2001:db8:acad:1::2",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The syntax for an IPv6 static route is: 'ipv6 route [destination-prefix/prefix-length] [next-hop-ip | exit-interface]'.",
  },
  {
    id: 10,
    question: "What is a 'Fully Specified' static IPv6 route?",
    options: [
      "A route that includes the /128 prefix.",
      "A route that specifies BOTH the exit interface AND the next-hop IPv6 address.",
      "A route pointing to the internet.",
      "A route that uses a global unicast address.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A fully specified static route includes both the local exit interface and the remote next-hop IP address (e.g., ipv6 route 2001:db8:2::/64 GigabitEthernet0/0 2001:db8:1::2).",
  },
  {
    id: 11,
    question:
      "If you configure an IPv6 static route using a Link-Local address (FE80::) as the next hop, what MUST you also include in the command?",
    options: [
      "The MAC address of the next hop",
      "The exit interface",
      "The administrative distance",
      "A tracking object",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because link-local addresses (FE80::) are identical in prefix across all subnets, the router cannot determine which physical interface to use unless you explicitly define the exit interface in the route.",
  },
  {
    id: 12,
    question:
      "Which of the following is a valid command for a static route using a link-local next hop?",
    options: [
      "ipv6 route 2001:db8:5::/64 fe80::2",
      "ipv6 route 2001:db8:5::/64 g0/0 fe80::2",
      "ipv6 route fe80::2 2001:db8:5::/64",
      "ipv6 route 2001:db8:5::/64 next-hop fe80::2 g0/0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "You must use a fully specified route: 'ipv6 route [destination] [exit-interface] [link-local-next-hop]'.",
  },
  {
    id: 13,
    question:
      "What is the Administrative Distance (AD) of a standard IPv6 static route?",
    options: ["0", "1", "90", "110"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Just like IPv4, a standard IPv6 static route has an Administrative Distance of 1.",
  },
  {
    id: 14,
    question:
      "How do you create an IPv6 floating static route to act as a backup to OSPFv3?",
    options: [
      "ipv6 route 2001:db8:2::/64 2001:db8:1::2 backup",
      "ipv6 route 2001:db8:2::/64 2001:db8:1::2 115",
      "ipv6 route 2001:db8:2::/64 2001:db8:1::2 floating",
      "ipv6 route floating 2001:db8:2::/64 2001:db8:1::2",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A floating static route is created by appending an Administrative Distance higher than the dynamic protocol (OSPF is 110, so 115 makes it a backup).",
  },
  {
    id: 15,
    question: "What does the IPv6 prefix ::/0 represent?",
    options: [
      "The loopback address",
      "The link-local prefix",
      "The default route (matches all IP addresses)",
      "The multicast prefix",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The prefix ::/0 is the IPv6 equivalent of the IPv4 0.0.0.0 0.0.0.0 default route mask. It matches any destination not explicitly found in the routing table.",
  },
  {
    id: 16,
    question:
      "Which command configures a static IPv6 default route pointing to exit interface GigabitEthernet0/1?",
    options: [
      "ipv6 route default g0/1",
      "ipv6 route 0::0/0 g0/1",
      "ipv6 route ::/0 g0/1",
      "ipv6 route any g0/1",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'ipv6 route ::/0 g0/1' directs all unknown traffic out the specified interface.",
  },
  {
    id: 17,
    question: "In the routing table, what does the 'S' code mean?",
    options: ["Standard", "Summary", "Static", "System"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'S' indicates a Static route configured manually by the administrator.",
  },
  {
    id: 18,
    question:
      "If you configure an IPv6 static route pointing only to an exit interface (e.g., ipv6 route 2001:db8:2::/64 g0/0) on an Ethernet network, what problem might occur?",
    options: [
      "The router will drop the packet.",
      "The router must use NDP (Neighbor Discovery Protocol) to find the MAC address for EVERY destination IP it routes out that interface, causing excessive overhead.",
      "The route will be marked with AD 255.",
      "IPv6 will disable the interface.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A directly attached static route on a broadcast network like Ethernet forces the router to resolve the MAC address for every single remote destination host, filling the neighbor cache and CPU. It's best to specify a next-hop IP.",
  },
  {
    id: 19,
    question:
      "To summarize the networks 2001:db8:acad:0::/64 through 2001:db8:acad:7::/64, which summary prefix should be used?",
    options: [
      "2001:db8:acad::/61",
      "2001:db8:acad::/62",
      "2001:db8:acad::/63",
      "2001:db8:acad::/64",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The numbers 0 through 7 take up 3 binary bits (000 to 111). 64 bits minus 3 borrowed bits = a /61 summary mask.",
  },
  {
    id: 20,
    question:
      "Which command shows only the static routes in the IPv6 routing table?",
    options: [
      "show ipv6 route static",
      "show ip route v6 static",
      "show ipv6 static route",
      "show running-config | include static",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ipv6 route static' filters the routing table to display only routes learned via static configuration.",
  },

  // --- Dynamic Routing Protocols: General & Differences ---
  {
    id: 21,
    question:
      "Which of the following is true about IPv6 routing protocols compared to IPv4?",
    options: [
      "They no longer use cost or metric.",
      "They rely heavily on IPsec for neighbor authentication rather than built-in protocol passwords.",
      "They all use TCP instead of UDP/IP.",
      "They do not support VLSM.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPv6 routing protocols (like OSPFv3 and older EIGRPv6) initially relied on the native IPsec capabilities of IPv6 for authentication, removing plain-text or MD5 passwords from the protocols themselves (though this changed in later RFCs).",
  },
  {
    id: 22,
    question:
      "What is the major architectural difference between OSPFv2 (IPv4) and OSPFv3 (IPv6)?",
    options: [
      "OSPFv3 is a Distance Vector protocol.",
      "OSPFv3 runs per-link rather than per-subnet.",
      "OSPFv3 does not use areas.",
      "OSPFv3 uses TCP instead of IP.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "OSPFv3 runs 'per-link' instead of 'per-subnet'. It forms adjacencies and floods LSAs based on the physical link (using Link-Local addresses), allowing multiple subnets to exist on a single link without breaking OSPF.",
  },
  {
    id: 23,
    question:
      "Do IPv6 routing protocols like OSPFv3 and EIGRPv6 require a 32-bit Router ID?",
    options: [
      "No, they use 128-bit IPv6 addresses as Router IDs.",
      "Yes, they still require a 32-bit Router ID, usually derived from an active IPv4 address.",
      "No, Router IDs are obsolete in IPv6.",
      "Yes, but it is automatically generated from the MAC address.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Despite routing IPv6, the Router ID format remains a 32-bit number (like an IPv4 address). If the router has no IPv4 addresses configured, you MUST manually configure the Router ID or the protocol will fail to start.",
  },
  {
    id: 24,
    question: "Which multicast address does RIPng (RIP next generation) use?",
    options: ["FF02::5", "FF02::9", "FF02::A", "FF02::1"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "RIPng uses FF02::9 for its routing updates, which is the IPv6 equivalent of IPv4's 224.0.0.9.",
  },
  {
    id: 25,
    question: "What metric does RIPng use?",
    options: ["Bandwidth", "Cost", "Hop Count", "Delay"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Like its IPv4 predecessor (RIPv2), RIPng is a distance-vector protocol that uses Hop Count as its metric, with a maximum of 15 hops.",
  },

  // --- OSPFv3 (IPv6) Configuration & Concepts ---
  {
    id: 26,
    question:
      "Which command initiates the OSPFv3 process globally on a Cisco router?",
    options: [
      "router ospf 10",
      "ipv6 router ospf 10",
      "router ospfv3 10",
      "ospfv3 run 10",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'ipv6 router ospf [process-id]' enables the OSPF routing process specifically for IPv6.",
  },
  {
    id: 27,
    question: "How do you enable OSPFv3 on a specific interface?",
    options: [
      "Using the 'network' command in router configuration mode.",
      "By configuring 'ipv6 ospf [process-id] area [area-id]' directly on the interface.",
      "By adding the interface IP to the OSPF neighbor list.",
      "OSPFv3 is automatically enabled on all IPv6 interfaces.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "OSPFv3 completely abandons the 'network' command. You must go into interface configuration mode and use 'ipv6 ospf [process] area [area]' to enable it.",
  },
  {
    id: 28,
    question: "What is the Administrative Distance of OSPFv3?",
    options: ["90", "110", "115", "120"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Just like OSPFv2, OSPFv3 has an Administrative Distance of 110.",
  },
  {
    id: 29,
    question:
      "Which multicast address does an OSPFv3 router use to send Hello packets to 'All OSPF Routers'?",
    options: ["FF02::5", "FF02::6", "FF02::9", "FF02::A"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "FF02::5 is the IPv6 equivalent of 224.0.0.5.",
  },
  {
    id: 30,
    question:
      "Which multicast address do DROTHER routers use to send Link-State Updates to the DR/BDR in OSPFv3?",
    options: ["FF02::5", "FF02::6", "FF02::9", "FF02::A"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "FF02::6 is the 'All DR/BDR Routers' address, equivalent to 224.0.0.6 in IPv4.",
  },
  {
    id: 31,
    question:
      "You have a pure IPv6 network with NO IPv4 addresses configured on any interface. You type 'ipv6 router ospf 1'. What happens?",
    options: [
      "OSPF starts normally using the lowest MAC address.",
      "OSPF starts but uses ::1 as the Router ID.",
      "The router throws a syslog error stating 'OSPFv3: Could not allocate router-id' and the process will not run.",
      "The router prompts you to enter a 128-bit Router ID.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "OSPFv3 absolutely requires a 32-bit Router ID. If there are no IPv4 addresses on the router to borrow from, OSPFv3 will fail to initialize until you manually configure one.",
  },
  {
    id: 32,
    question: "Which command manually sets the Router ID for OSPFv3?",
    options: [
      "ipv6 router-id 1.1.1.1",
      "router-id 1.1.1.1",
      "ospf router-id 1.1.1.1",
      "id 1.1.1.1",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Inside the 'ipv6 router ospf [process]' configuration mode, the command is simply 'router-id [32-bit-format]'.",
  },
  {
    id: 33,
    question: "What does the code 'O' mean in the 'show ipv6 route' table?",
    options: [
      "OSPFv3 Inter-Area Route",
      "OSPFv3 Intra-Area Route",
      "OSPFv3 External Route",
      "Open Route",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A plain 'O' means it is an Intra-Area route, meaning the destination network resides in the same OSPF area as the local router.",
  },
  {
    id: 34,
    question: "What does the code 'OI' mean in the 'show ipv6 route' table?",
    options: [
      "OSPFv3 Intra-Area",
      "OSPFv3 Inter-Area",
      "OSPFv3 Internal",
      "OSPFv3 Incomplete",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unlike IPv4 which uses 'O IA', IPv6 routing tables typically use 'OI' to represent an OSPF Inter-Area route (learned from a different area via an ABR).",
  },
  {
    id: 35,
    question:
      "What is the OSPFv3 default Hello timer on an Ethernet broadcast network?",
    options: ["5 seconds", "10 seconds", "30 seconds", "40 seconds"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default OSPFv3 Hello interval on a multi-access network (Ethernet) is 10 seconds.",
  },
  {
    id: 36,
    question: "What is the OSPFv3 default Dead timer on an Ethernet network?",
    options: ["10 seconds", "20 seconds", "30 seconds", "40 seconds"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The Dead timer is 4 times the Hello timer, meaning it is 40 seconds by default.",
  },
  {
    id: 37,
    question:
      "Which command changes the OSPFv3 cost of a GigabitEthernet interface to 50?",
    options: ["ipv6 ospf cost 50", "ospfv3 cost 50", "cost 50", "metric 50"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "The interface-level command is 'ipv6 ospf cost [value]'.",
  },
  {
    id: 38,
    question: "In OSPFv3, what is a Link-LSA (Type 8)?",
    options: [
      "An LSA that floods the entire autonomous system.",
      "An LSA used strictly between routers on a shared local link to advertise Link-Local addresses and prefixes.",
      "An LSA generated by an ASBR.",
      "A summary LSA generated by an ABR.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "OSPFv3 introduced new LSA types. The Type 8 Link-LSA is never flooded past the local link. It is used to share Link-Local addresses and IPv6 prefixes with neighbors on that specific segment.",
  },
  {
    id: 39,
    question: "In OSPFv3, what is an Intra-Area Prefix LSA (Type 9)?",
    options: [
      "It replaces the Router LSA (Type 1).",
      "It carries IPv6 prefix information within an area, decoupling prefix info from topology info.",
      "It advertises external routes.",
      "It connects two OSPF areas.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because OSPFv3 Router LSAs and Network LSAs no longer carry IP address information, the Type 9 LSA was created to carry the actual IPv6 subnet prefixes and associate them with the topology.",
  },
  {
    id: 40,
    question:
      "Which command shows the OSPFv3 neighbor table and their adjacency states?",
    options: [
      "show ip ospf neighbor",
      "show ipv6 ospf neighbor",
      "show ospfv3 neighbor",
      "show ipv6 route ospf",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ipv6 ospf neighbor' displays the neighbors, their 32-bit Router IDs, and their state (e.g., FULL/BDR).",
  },
  {
    id: 41,
    question:
      "Which command displays a list of interfaces configured for OSPFv3 and their assigned areas?",
    options: [
      "show ipv6 ospf interface brief",
      "show ipv6 ospf",
      "show ipv6 protocols",
      "show interface ospfv3",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "'show ipv6 ospf interface brief' provides a quick table of interfaces, Process ID, Area, Cost, and State (DR/BDR/Pt2Pt).",
  },
  {
    id: 42,
    question:
      "Which command prevents OSPFv3 from sending Hello packets out an interface but still advertises the interface's IPv6 prefix to the network?",
    options: [
      "passive-interface [interface-id]",
      "ipv6 ospf passive",
      "no ipv6 ospf hello",
      "suppress-updates [interface-id]",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Like OSPFv2, the 'passive-interface [interface]' command is applied under the 'ipv6 router ospf' configuration mode.",
  },
  {
    id: 43,
    question:
      "To inject an IPv6 default route into the OSPFv3 domain, which command is used under the routing process?",
    options: [
      "default-route originate",
      "default-information originate",
      "redistribute static default",
      "ipv6 route default ospf",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'default-information originate' generates an External LSA containing the ::/0 default route.",
  },
  {
    id: 44,
    question:
      "If two routers on an Ethernet link are stuck in the 'ExStart / Exchange' OSPFv3 state, what is the most likely issue?",
    options: [
      "Mismatched IPv6 subnets",
      "Mismatched MTU (Maximum Transmission Unit)",
      "Duplicate Router IDs",
      "Wrong multicast address",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "An MTU mismatch usually allows routers to form an initial neighbor state, but they fail and get stuck when attempting to exchange large Database Description (DBD) packets.",
  },
  {
    id: 45,
    question: "Can OSPFv2 and OSPFv3 run simultaneously on the same router?",
    options: [
      "Yes, they operate completely independently.",
      "No, they will conflict.",
      "Yes, but they must use different process IDs.",
      "Only if Dual-Stack routing is disabled.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "OSPFv2 (for IPv4) and OSPFv3 (for IPv6) are separate routing protocols and can run simultaneously on the same interfaces.",
  },

  // --- EIGRP for IPv6 Configuration & Concepts ---
  {
    id: 46,
    question:
      "Which command enables EIGRP for IPv6 globally on a Cisco router?",
    options: [
      "ipv6 router eigrp [AS-number]",
      "router eigrp ipv6 [AS-number]",
      "ipv6 eigrp run [AS-number]",
      "router eigrp [AS-number] address-family ipv6",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The traditional method to enable EIGRP for IPv6 is 'ipv6 router eigrp [AS-number]'. (Note: Named EIGRP mode uses 'router eigrp [name]' followed by 'address-family ipv6').",
  },
  {
    id: 47,
    question:
      "After typing 'ipv6 router eigrp 100', what command is uniquely required in EIGRP for IPv6 to make the routing process start?",
    options: ["no shutdown", "enable", "start", "network ::/0"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Unlike IPv4 EIGRP, the IPv6 EIGRP routing process is created in a 'shutdown' state by default. You must enter the process configuration and issue the 'no shutdown' command.",
  },
  {
    id: 48,
    question:
      "How are interfaces assigned to an EIGRP for IPv6 routing process?",
    options: [
      "Using the 'network' command in global configuration mode.",
      "Using the 'network' command under the EIGRP process.",
      "By configuring 'ipv6 eigrp [AS-number]' directly on the interface.",
      "It is automatic based on IPv6 address.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Like OSPFv3, EIGRP for IPv6 abandons the 'network' command in favor of interface-level configuration: 'ipv6 eigrp [AS-number]'.",
  },
  {
    id: 49,
    question: "Does EIGRP for IPv6 require a 32-bit Router ID?",
    options: [
      "Yes, and it must be manually configured if no IPv4 addresses exist.",
      "No, it uses the 128-bit IPv6 address.",
      "No, it uses the MAC address.",
      "Yes, but it defaults to 1.1.1.1 automatically.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Just like OSPFv3, EIGRP for IPv6 requires a 32-bit Router ID. If the router lacks an IPv4 address, you must configure 'eigrp router-id [32-bit-format]'.",
  },
  {
    id: 50,
    question:
      "Which multicast address does EIGRP for IPv6 use to send Hello packets?",
    options: ["FF02::5", "FF02::9", "FF02::A", "FF02::E"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "EIGRP for IPv6 uses FF02::A. (The IPv4 equivalent is 224.0.0.10. 'A' is Hexadecimal for 10).",
  },
  {
    id: 51,
    question:
      "What is the Administrative Distance of an internal EIGRP for IPv6 route?",
    options: ["90", "110", "115", "170"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "EIGRP maintains its Administrative Distances: 90 for Internal routes and 170 for External (redistributed) routes.",
  },
  {
    id: 52,
    question:
      "Which of the following metrics does EIGRP for IPv6 use by default to calculate the best path?",
    options: [
      "Bandwidth and Hop Count",
      "Cost and Delay",
      "Bandwidth and Delay",
      "Load and Reliability",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "EIGRP uses a composite metric based on the lowest Bandwidth along the path and the cumulative Delay of all links in the path.",
  },
  {
    id: 53,
    question:
      "What does the code 'D' represent in the 'show ipv6 route' table?",
    options: [
      "Distance Vector",
      "Dynamic Route",
      "Default Route",
      "EIGRP Route (DUAL)",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "'D' stands for DUAL (Diffusing Update Algorithm), which is the underlying algorithm used by EIGRP.",
  },
  {
    id: 54,
    question:
      "What does the code 'EX' mean next to a 'D' route in the IPv6 routing table?",
    options: [
      "EIGRP Experimental",
      "EIGRP External",
      "EIGRP Extinct",
      "EIGRP Extra",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'D EX' indicates an EIGRP External route, which is a route that was redistributed into EIGRP from another protocol (like a static route).",
  },
  {
    id: 55,
    question: "Which command displays the EIGRP for IPv6 neighbor table?",
    options: [
      "show ip eigrp neighbors",
      "show ipv6 eigrp neighbors",
      "show eigrp v6 neighbors",
      "show ipv6 route eigrp",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ipv6 eigrp neighbors' displays adjacent routers, their Link-Local addresses, the interface they connect to, and timers.",
  },
  {
    id: 56,
    question:
      "In the 'show ipv6 eigrp topology' output, what is the 'Feasible Distance' (FD)?",
    options: [
      "The neighbor's metric to reach the destination.",
      "The router's own total calculated metric to reach the destination.",
      "The physical distance in miles.",
      "The maximum hop count allowed.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Feasible Distance is the best total metric calculated by the local router to reach a specific destination network.",
  },
  {
    id: 57,
    question:
      "In the EIGRP topology table, what is the 'Reported Distance' (RD) or 'Advertised Distance' (AD)?",
    options: [
      "The neighbor's metric to reach the destination.",
      "The local router's metric.",
      "The time it took for the route to be advertised.",
      "The metric added by the exit interface.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The Reported Distance is the metric the neighboring router advertises. It tells the local router how far the neighbor is from the destination.",
  },
  {
    id: 58,
    question: "What is the EIGRP 'Feasibility Condition'?",
    options: [
      "The rule that a router must have a Router ID to form an adjacency.",
      "The rule that a neighbor's Reported Distance must be LESS THAN the local router's current Feasible Distance to be considered a loop-free backup path.",
      "The rule that Bandwidth and Delay must match on both ends of a link.",
      "The MTU matching requirement.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To prevent routing loops, EIGRP only accepts a backup path (Feasible Successor) if the neighbor's distance to the destination (RD) is strictly less than the local router's best total distance (FD).",
  },
  {
    id: 59,
    question: "What is a 'Successor' in EIGRP?",
    options: [
      "The backup route.",
      "The best primary route installed in the routing table.",
      "The neighbor router with the highest IP address.",
      "The designated router on the segment.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Successor is the best path to a destination and is installed in the active routing table.",
  },
  {
    id: 60,
    question: "What is a 'Feasible Successor' in EIGRP?",
    options: [
      "The primary route.",
      "A loop-free backup route kept in the topology table, ready to be used instantly if the Successor fails.",
      "A route that failed the Feasibility Condition.",
      "A neighbor that went offline.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Feasible Successor is a valid, loop-free alternate path. If the primary route drops, EIGRP immediately switches to the Feasible Successor without recalculating.",
  },

  // --- IPv6 Route Filtering, Summarization & Tuning ---
  {
    id: 61,
    question: "In OSPFv3, where is route summarization configured?",
    options: [
      "On every router in the area.",
      "On the interface connected to the network being summarized.",
      "On the Area Border Router (ABR) using the 'area range' command.",
      "Globally using a route-map.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Inter-area summarization can only be performed on ABRs (or ASBRs for external routes). The command is 'area [area-id] range [ipv6-prefix/length]'.",
  },
  {
    id: 62,
    question: "In EIGRP for IPv6, where is route summarization configured?",
    options: [
      "Under the routing process.",
      "On the specific interface where the summary route will be advertised out.",
      "Globally using an access-list.",
      "EIGRP auto-summarizes by default, no configuration needed.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EIGRP allows summarization at any point in the network. It is configured directly on the outbound interface using 'ipv6 summary-address eigrp [AS] [prefix/length]'.",
  },
  {
    id: 63,
    question:
      "Does EIGRP for IPv6 perform automatic network summarization at major classful boundaries?",
    options: [
      "Yes, it is on by default.",
      "No, IPv6 is entirely classless, so auto-summary does not exist in EIGRP for IPv6.",
      "Yes, but only for Link-Local addresses.",
      "Yes, but it can be turned off.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because IPv6 has no concept of Class A/B/C networks, the 'auto-summary' feature found in IPv4 EIGRP and RIP does not exist in their IPv6 equivalents.",
  },
  {
    id: 64,
    question: "What is an IPv6 Prefix List used for?",
    options: [
      "To assign IPs via DHCP.",
      "To filter routing updates, permitting or denying specific IPv6 networks from entering or leaving a routing table.",
      "To block ping traffic.",
      "To change the MAC address.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An 'ipv6 prefix-list' is similar to an ACL but is specifically designed to match routing prefixes and subnet mask lengths to filter routing protocol updates.",
  },
  {
    id: 65,
    question:
      "Which feature allows you to balance traffic unequally across multiple paths in EIGRP for IPv6?",
    options: ["maximum-paths", "variance", "offset-list", "weight"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'variance' command multiplies the metric of the best path. Any feasible successor whose metric is less than this multiplied value is added to the routing table for unequal-cost load balancing.",
  },
  {
    id: 66,
    question:
      "How do you disable EIGRP for IPv6 on a specific interface without removing the network from the routing process?",
    options: [
      "no ipv6 eigrp [AS]",
      "passive-interface [interface]",
      "shutdown",
      "no network [prefix]",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Under the 'ipv6 router eigrp' process, the 'passive-interface [interface]' command stops Hellos from being sent out that interface, breaking neighbor adjacencies, but still advertises the subnet.",
  },
  {
    id: 67,
    question:
      "In OSPFv3, what command verifies which router is the DR and which is the BDR on an Ethernet segment?",
    options: [
      "show ipv6 ospf neighbor",
      "show ipv6 ospf database",
      "show ipv6 route",
      "show ipv6 interface",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ipv6 ospf neighbor' lists the adjacent routers and explicitly states their role in the 'State' column (e.g., FULL/DR, FULL/BDR, 2WAY/DROTHER).",
  },
  {
    id: 68,
    question: "In OSPFv3, how do you force a router to become the DR?",
    options: [
      "Assign it the highest IPv6 address.",
      "Configure 'ipv6 ospf priority 255' on the interface.",
      "Configure 'ipv6 ospf priority 0'.",
      "Configure a loopback interface.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router with the highest interface priority (0-255) becomes the DR. Priority 255 guarantees it will win the election (unless another router is also 255 and has a higher Router ID).",
  },
  {
    id: 69,
    question: "What does 'ipv6 ospf priority 0' accomplish?",
    options: [
      "It forces the router to be the DR.",
      "It makes the router a BDR.",
      "It prevents the router from ever participating in the DR/BDR election (it stays a DROTHER).",
      "It shuts down OSPF on the interface.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A priority of 0 completely removes the interface from the Designated Router election.",
  },
  {
    id: 70,
    question:
      "What happens if a router running OSPFv3 receives a Router Advertisement (RA) from another router?",
    options: [
      "It drops its OSPF configuration and uses SLAAC.",
      "It adds the RA prefix to its OSPF database.",
      "Routers typically ignore RAs by default, as RAs are meant for host autoconfiguration.",
      "It forms an OSPF adjacency.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By default, Cisco routers have SLAAC disabled on their interfaces because routers are meant to provide network information, not receive it like a PC. You can enable it with 'ipv6 address autoconfig' if needed.",
  },

  // --- IPv6 Neighbor Discovery & Operations in Routing ---
  {
    id: 71,
    question:
      "You want to ping a remote IPv6 network. How do you instruct a Cisco router to source the ping from a specific loopback interface?",
    options: [
      "ping ipv6 2001:db8::1 from loopback0",
      "ping 2001:db8::1 source loopback0",
      "ping -s loopback0 2001:db8::1",
      "ping 2001:db8::1 loopback0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The extended ping command is 'ping [destination_ip] source [source_interface_or_ip]'.",
  },
  {
    id: 72,
    question:
      "Which protocol is used by the 'traceroute' command in IPv6 to discover the path to a destination?",
    options: [
      "TCP Port 80",
      "ICMPv6",
      "UDP with incrementing Hop Limits",
      "NDP",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Like IPv4, standard Cisco traceroute for IPv6 sends UDP probes with an incrementing Hop Limit (TTL). It relies on receiving ICMPv6 'Time Exceeded' messages from the routers along the path.",
  },
  {
    id: 73,
    question:
      "If an IPv6 static route is in the routing table, but the next-hop router's interface goes physically down, what happens to the static route?",
    options: [
      "It remains in the table indefinitely.",
      "It is removed from the routing table immediately if the exit interface goes down.",
      "It waits for the Dead timer to expire.",
      "It is changed to an Administrative Distance of 255.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If a static route is bound to an exit interface, and that interface goes down, the router removes the static route from the routing table to prevent traffic black-holing.",
  },
  {
    id: 74,
    question: "What is an IPv6 'Null0' route?",
    options: [
      "A route used to broadcast traffic.",
      "A route that discards (black-holes) traffic matching the prefix.",
      "A route pointing back to the sender.",
      "A route used for management traffic only.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Routing traffic to the Null0 interface acts as a trash can. It silently drops the packets. It is often used to discard traffic for a summarized network that doesn't match a more specific route.",
  },
  {
    id: 75,
    question:
      "If a router has a route to 2001:db8:1::/48 (via OSPF) and a route to 2001:db8:1:A::/64 (via Static), where does a packet destined for 2001:db8:1:A::5 go?",
    options: [
      "The OSPF route because dynamic protocols are preferred.",
      "The Static route because it has a better Administrative Distance.",
      "The Static route because it has the Longest Prefix Match.",
      "It load balances between them.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A router ALWAYS uses the Longest Prefix Match (the most specific subnet mask) to determine the path. A /64 is more specific than a /48, so it uses the static route. AD is only considered if the prefixes are identical.",
  },
  {
    id: 76,
    question:
      "What command verifies the configured Administrative Distances, K-values, and metrics for the EIGRP IPv6 process?",
    options: [
      "show ipv6 route",
      "show ipv6 protocols",
      "show ipv6 eigrp topology",
      "show ipv6 eigrp interfaces",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show ipv6 protocols' displays the active routing protocols, their AS numbers, Router IDs, Administrative Distances, and interfaces participating in the process.",
  },
  {
    id: 77,
    question:
      "In OSPFv3, what is the default reference bandwidth used to calculate cost?",
    options: [
      "10 Mbps",
      "100 Mbps",
      "1000 Mbps (1 Gbps)",
      "10000 Mbps (10 Gbps)",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Like OSPFv2, OSPFv3 uses a default reference bandwidth of 10^8 bits per second (100 Mbps). Cost = Reference Bandwidth / Interface Bandwidth.",
  },
  {
    id: 78,
    question:
      "Why is the default OSPFv3 reference bandwidth considered a problem on modern networks?",
    options: [
      "It is too high for dial-up links.",
      "Because 100M, 1G, and 10G links will all calculate to a cost of 1, meaning OSPF cannot differentiate between a FastEthernet and a 10-Gigabit link.",
      "It causes MTU mismatches.",
      "It slows down SPF calculation.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because OSPF cost is an integer with a minimum value of 1, any link 100Mbps or faster gets a cost of 1. You must use 'auto-cost reference-bandwidth' to increase the reference value.",
  },
  {
    id: 79,
    question:
      "What is the consequence of changing the OSPFv3 'auto-cost reference-bandwidth' on only ONE router in an area?",
    options: [
      "The router will not form an adjacency.",
      "It will cause an MTU mismatch.",
      "It can cause suboptimal routing or routing loops because routers will disagree on the shortest path metrics.",
      "It has no negative effect.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Reference bandwidth is a local calculation. If Router A thinks a 1G link costs 10, and Router B thinks it costs 1, they will calculate completely different SPF trees, leading to asymmetric routing or loops.",
  },
  {
    id: 80,
    question:
      "Which command assigns an IPv6 address automatically derived from a DHCPv6 server?",
    options: [
      "ipv6 address autoconfig",
      "ipv6 address dhcp",
      "ipv6 dhcp client",
      "ip address dhcp ipv6",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ipv6 address dhcp' command configures the interface to acquire an IPv6 address from a Stateful DHCPv6 server.",
  },

  // --- Advanced Scenarios & Troubleshooting ---
  {
    id: 81,
    question:
      "A router cannot ping a directly connected IPv6 neighbor using its Global Unicast Address. However, it CAN ping the neighbor using its Link-Local Address. What is the most likely issue?",
    options: [
      "The physical cable is broken.",
      "IPv6 unicast-routing is disabled.",
      "There is a subnet mismatch on the Global Unicast Addresses.",
      "The MAC address table is full.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Link-local addresses do not care about global subnets; they just require Layer 2 connectivity. If link-local works, Layer 1 and 2 are fine. The failure of GUA ping implies the two interfaces are configured in different IPv6 subnets (e.g., one is in 2001:db8:1::/64 and the other is in 2001:db8:2::/64).",
  },
  {
    id: 82,
    question:
      "When configuring OSPFv3, what does a 'Dead timer expired' syslog message indicate?",
    options: [
      "The router successfully formed an adjacency.",
      "The router has not received a Hello packet from the neighbor within the allowed time, and has torn down the adjacency.",
      "The MTU is mismatched.",
      "The LSDB is full.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If the Dead timer reaches 0 without a Hello packet arriving to refresh it, the router assumes the neighbor is offline or unreachable.",
  },
  {
    id: 83,
    question:
      "You configure 'ipv6 route ::/0 2001:db8:a::1'. You test internet access, but it fails. 'show ipv6 route' does not show the ::/0 route. Why?",
    options: [
      "The ::/0 route requires a MAC address.",
      "The next-hop IP address (2001:db8:a::1) is not reachable via any active interface.",
      "You must use a Link-Local address for default routes.",
      "Static routes require OSPF to inject them.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco routers will not install a static route into the routing table if the next-hop IP is unreachable (i.e., the router does not have a route to the subnet that the next-hop resides in).",
  },
  {
    id: 84,
    question: "What is an IPv6 'Connected' route's Administrative Distance?",
    options: ["0", "1", "5", "255"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Directly connected interfaces are the most trusted route source and have an Administrative Distance of 0.",
  },
  {
    id: 85,
    question:
      "If a Cisco router has two static routes to the exact same destination, but one has an AD of 1 and the other an AD of 10, which route is installed in the routing table?",
    options: [
      "The route with AD 10.",
      "The route with AD 1.",
      "Both are installed for load balancing.",
      "Neither, it causes an error.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router selects the route with the lowest Administrative Distance. The route with AD 10 becomes a floating static (backup) route.",
  },
  {
    id: 86,
    question:
      "How does a router process an IPv6 packet whose destination matches an OSPF route with a metric of 100, and a Static route to the SAME prefix with an AD of 1?",
    options: [
      "It uses the Static route.",
      "It uses the OSPF route.",
      "It drops the packet.",
      "It calculates a composite metric.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Administrative Distance is checked before metric. Static (AD 1) beats OSPF (AD 110), so the static route is installed in the routing table.",
  },
  {
    id: 87,
    question:
      "Which of the following is true about IPv6 Loopback interfaces on a router?",
    options: [
      "They are physical ports.",
      "They are logical, virtual interfaces that are always 'Up' unless administratively shut down.",
      "They cannot be routed by OSPFv3.",
      "They require a MAC address.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Loopback interfaces are software-only. They are highly stable because they never experience physical cable disconnects, making them ideal for Router IDs and management IPs.",
  },
  {
    id: 88,
    question:
      "When viewing an IPv6 routing table, you see a route to 2001:db8:1::/64 with next-hop FE80::A00:27FF:FE5E:1111. How did the router likely learn this next-hop address?",
    options: [
      "From a DHCPv6 server.",
      "It is a hardcoded default.",
      "It is the Link-Local address of the neighboring router, auto-generated using EUI-64.",
      "It was typed in manually.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'FF:FE' in the middle of the host portion is the hallmark signature of the EUI-64 MAC-to-IP conversion process.",
  },
  {
    id: 89,
    question:
      "Which command clears the dynamically learned OSPFv3 routes and forces a recalculation of the SPF algorithm?",
    options: [
      "clear ipv6 ospf process",
      "clear ipv6 route *",
      "reset ospf v6",
      "no ipv6 unicast-routing",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "'clear ipv6 ospf process' forces the router to tear down neighbor adjacencies, flush the LSDB, and start the OSPF process over.",
  },
  {
    id: 90,
    question:
      "What feature allows EIGRP for IPv6 to load balance across links that do NOT have identical metrics?",
    options: ["maximum-paths", "variance", "load-share", "ECMP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'variance' command multiplies the Feasible Distance. Any backup route (Feasible Successor) with a metric lower than the varied FD is added to the routing table for unequal-cost load balancing.",
  },
  {
    id: 91,
    question:
      "Which protocol number is used for IPv6 in an ACL or routing context?",
    options: [
      "IPv4 is protocol 4, IPv6 is protocol 41.",
      "IPv6 is protocol 6.",
      "IPv6 uses protocol 89.",
      "IPv6 uses TCP port 80.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "In IP packet headers, IP protocol 41 indicates IPv6 encapsulation (often used in tunneling).",
  },
  {
    id: 92,
    question:
      "If a router has a connected route to 2001:DB8:1::/64, what must a PC configure as its default gateway to reach the internet through this router?",
    options: [
      "The router's 2001:DB8:1::/64 Global Unicast address.",
      "The router's FE80:: Link-Local address.",
      "Either the GUA or the LLA will work.",
      "The ::/0 address.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A PC can use either the router's Global Unicast Address or its Link-Local Address as the default gateway, though SLAAC typically provides the Link-Local Address automatically.",
  },
  {
    id: 93,
    question:
      "When configuring a fully specified static IPv6 route on a multi-access network (like Ethernet), why must you include the next-hop IP and not just the exit interface?",
    options: [
      "To satisfy OSPFv3 requirements.",
      "Because Ethernet is a multi-access medium; the router needs the specific next-hop IP to determine the exact destination MAC address via NDP.",
      "To prevent MAC address spoofing.",
      "To enable IPv6 multicast.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "On point-to-point links (like Serial), there is only one device on the other end, so an exit interface is enough. On Ethernet, there could be hundreds of routers. You must specify the next-hop IP so the router knows exactly who to ask for a MAC address.",
  },
  {
    id: 94,
    question: "What is an IPv6 'Discard Route'?",
    options: [
      "A route pointing to Null0 to drop traffic matching a specific prefix.",
      "A route that failed DAD.",
      "A route learned from a rogue router.",
      "A route with an AD of 255.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A Discard route (or black-hole route) is a static route pointing to the Null0 interface, silently discarding matching packets.",
  },
  {
    id: 95,
    question:
      "Which show command displays the IPv6 interface parameters, including the joined multicast groups and the Link-Local address?",
    options: [
      "show ipv6 interface brief",
      "show ipv6 interface [id]",
      "show ipv6 neighbors",
      "show ipv6 protocols",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The detailed 'show ipv6 interface [id]' command outputs the GUA, LLA, subnet mask, DAD status, and the specific multicast groups (like FF02::1, FF02::2, and Solicited-Node addresses) the interface is listening to.",
  },
  {
    id: 96,
    question:
      "Which of the following routing protocols is a Path Vector protocol used to route IPv6 between different Autonomous Systems?",
    options: ["OSPFv3", "IS-IS", "MP-BGP (Multiprotocol BGP)", "EIGRPv6"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Multiprotocol BGP (MP-BGP) is an extension of BGP that supports routing for multiple address families, including IPv6, across the global Internet.",
  },
  {
    id: 97,
    question:
      "How does a router determine if a received IPv6 packet is intended for it, or if it should be routed?",
    options: [
      "It looks at the MAC address. If the destination MAC is its own, and the destination IP is its own, it processes it. If the destination IP is remote, it routes it.",
      "It looks at the source MAC address.",
      "It looks at the TTL.",
      "It queries the DNS server.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "When a host sends a packet to a remote subnet, it uses the router's MAC address but the remote device's IP address. The router receives the frame, strips the MAC, sees the remote IP, and checks its routing table.",
  },
  {
    id: 98,
    question:
      "What happens if a router receives an IPv6 packet with a Hop Limit of 1, and the destination is on another network?",
    options: [
      "It routes the packet and changes the Hop Limit to 0.",
      "It drops the packet and sends an ICMPv6 Time Exceeded message to the source.",
      "It resets the Hop Limit to 255.",
      "It forwards it to the default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A router decrements the Hop Limit before forwarding. If the Hop Limit is 1, decrementing makes it 0. The router drops the packet to prevent routing loops.",
  },
  {
    id: 99,
    question:
      "Which OSPFv3 LSA type is used to advertise IPv6 prefixes belonging to the local router into its own area?",
    options: [
      "Type 1 (Router LSA)",
      "Type 3 (Inter-Area Prefix LSA)",
      "Type 8 (Link LSA)",
      "Type 9 (Intra-Area Prefix LSA)",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "In OSPFv3, Type 1 LSAs only describe topology (router connections). Type 9 (Intra-Area Prefix LSA) is specifically responsible for advertising the actual IPv6 subnet prefixes.",
  },
  {
    id: 100,
    question:
      "If 'ipv6 unicast-routing' is disabled, what is the output of 'show ipv6 route'?",
    options: [
      "The routing table shows only connected and local routes.",
      "The command is rejected or shows an empty table.",
      "It shows the IPv4 routing table.",
      "It shows a default route to the internet.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Even with routing disabled, an IPv6 host maintains a local routing table containing its own connected subnets and local interface IPs, similar to how a Windows PC has a local routing table. However, it will not possess dynamic routes or forward traffic.",
  },
];
