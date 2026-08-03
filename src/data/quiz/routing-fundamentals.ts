import type { QuizQuestion } from "./types";

export const routingFundamentalsQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which type of route has the lowest administrative distance?",
    options: ["OSPF", "Static route", "Connected route", "EIGRP (internal)"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Connected routes have an administrative distance of 0, making them the most trusted. Static routes default to 1, EIGRP internal to 90, and OSPF to 110.",
  },
  {
    id: 2,
    question:
      "When a router receives a packet, which criterion is used FIRST to select the best path in the routing table?",
    options: [
      "Lowest Administrative Distance",
      "Lowest Metric",
      "Longest Prefix Match",
      "Highest Bandwidth",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The router always prioritizes the Longest Prefix Match (the most specific route) over Administrative Distance and Metric.",
  },
  {
    id: 3,
    question:
      "What does a router do with a packet if there is no matching route in the routing table and no default gateway configured?",
    options: [
      "Broadcasts the packet out all of the interfaces on the router",
      "Drops the packet and sends an ICMP Destination Unreachable message",
      "Forwards the packet back to the source device that sent it",
      "Buffers the packet in memory until a route is learned",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If no specific route or default route exists, the router discards the packet and notifies the sender using an ICMP Destination Unreachable message.",
  },
  {
    id: 4,
    question:
      "As a packet is routed from source to destination, which of the following changes at every router hop?",
    options: [
      "Source and Destination IP Addresses",
      "Source and Destination MAC Addresses",
      "The packet payload",
      "The TCP Sequence Number",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "At each Layer 3 hop, the router strips the old Layer 2 frame and creates a new one, changing the Source and Destination MAC addresses for the new physical link.",
  },
  {
    id: 5,
    question:
      "What happens to the TTL (Time to Live) field when a packet passes through a router?",
    options: [
      "It is increased by 1",
      "It remains unchanged",
      "It is decreased by 1",
      "It is reset to 255",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Routers decrement the TTL field by 1 to prevent packets from looping endlessly in the network. If TTL reaches 0, the packet is dropped.",
  },
  {
    id: 6,
    question:
      "What is the default Administrative Distance of an Internal EIGRP route?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Internal EIGRP routes have a default AD of 90. External EIGRP routes have an AD of 170.",
  },
  {
    id: 7,
    question: "Which of the following describes a 'Floating Static Route'?",
    options: [
      "A route that load-balances the traffic evenly across multiple active WAN links at the same time",
      "A static route configured with an Administrative Distance higher than the primary routing protocol",
      "A dynamic route that changes its path based on the available bandwidth of the underlying physical links",
      "A route that is used exclusively for the IPv6 networks and their associated addressing schemes in the network",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A floating static route acts as a backup. By configuring it with a higher AD than the primary route (like OSPF), it remains hidden until the primary route fails.",
  },
  {
    id: 8,
    question:
      "Which term describes a routing table lookup where the router must perform multiple lookups to find the exit interface?",
    options: [
      "Recursive lookup",
      "Proxy ARP",
      "Process switching",
      "Route summarization",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A recursive lookup occurs when a route specifies a next-hop IP address rather than an exit interface, requiring the router to perform a second lookup to find the interface to reach that next-hop.",
  },
  {
    id: 9,
    question: "What is the default Administrative Distance of OSPF?",
    options: ["90", "110", "115", "120"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "OSPF has a default Administrative Distance of 110.",
  },
  {
    id: 10,
    question:
      "In the 'show ip route' output, what does the 'L' code represent?",
    options: [
      "Local route (the IP address configured directly on the router's interface)",
      "A link-state protocol route (such as OSPF or IS-IS) in the routing table",
      "A loopback interface that is configured directly on the local router itself",
      "A route that was dynamically learned from a routing protocol neighbor device",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'L' code denotes a Local route, which is a /32 host route representing the router's own interface IP address.",
  },
  {
    id: 11,
    question: "What is the command to configure an IPv4 default static route?",
    options: [
      "ip route 0.0.0.0 255.255.255.255 [next-hop]",
      "ip route 0.0.0.0 0.0.0.0 [next-hop]",
      "ip default-network 0.0.0.0",
      "ip default-gateway 0.0.0.0",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'ip route 0.0.0.0 0.0.0.0' acts as a catch-all for any destination not explicitly listed in the routing table.",
  },
  {
    id: 12,
    question:
      "Which type of routing protocol maintains a complete topological map of the entire network?",
    options: [
      "Distance Vector",
      "Path Vector",
      "Link-State",
      "Exterior Gateway Protocol",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Link-State protocols, such as OSPF and IS-IS, build and maintain a complete SPF (Shortest Path First) tree of the network topology.",
  },
  {
    id: 13,
    question: "What primary metric does RIP use to determine the best path?",
    options: ["Bandwidth", "Delay", "Hop Count", "Reliability"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Routing Information Protocol (RIP) uses hop count as its sole metric, with a maximum valid hop count of 15.",
  },
  {
    id: 14,
    question:
      "Which two parameters are used by default to calculate the EIGRP metric?",
    options: [
      "Hop count and Bandwidth",
      "Bandwidth and Delay",
      "Reliability and Load",
      "Delay and MTU",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, EIGRP uses the slowest Bandwidth along the path and the cumulative Delay (K1 and K3) to calculate its composite metric.",
  },
  {
    id: 15,
    question: "What metric does OSPF use to determine the best path?",
    options: ["Cost", "Bandwidth", "Hop Count", "Delay"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "OSPF uses 'Cost' as its metric, which is inversely proportional to the interface bandwidth (Reference Bandwidth / Interface Bandwidth).",
  },
  {
    id: 16,
    question:
      "Which of the following is considered an Exterior Gateway Protocol (EGP)?",
    options: ["OSPF", "EIGRP", "RIPv2", "BGP"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Border Gateway Protocol (BGP) is the only EGP used today, designed to route traffic between different Autonomous Systems on the internet.",
  },
  {
    id: 17,
    question: "What does the code 'D' represent in a Cisco routing table?",
    options: [
      "Directly Connected",
      "Default Route",
      "EIGRP Route",
      "Dynamic Route",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'D' stands for DUAL (Diffusing Update Algorithm), which is the algorithm EIGRP uses, thus denoting an EIGRP route.",
  },
  {
    id: 18,
    question:
      "Which switching mechanism builds a Forwarding Information Base (FIB) and an Adjacency Table in hardware for rapid packet processing?",
    options: [
      "Process Switching",
      "Fast Switching",
      "Cisco Express Forwarding (CEF)",
      "Cut-through Switching",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "CEF optimizes routing by pre-building a FIB (derived from the routing table) and an Adjacency Table (derived from ARP), allowing hardware-level packet forwarding without CPU interruption.",
  },
  {
    id: 19,
    question: "What is a fully specified static route?",
    options: [
      "A route that includes both the exit interface and the next-hop IP address",
      "A route that is configured with a /32 host subnet mask instead of a network mask",
      "A route that tracks an IP SLA to verify the reachability of the path",
      "A route that is redistributed into the network via the OSPF protocol",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A fully specified static route includes both the local exit interface and the remote next-hop IP address, often necessary for Ethernet multi-access networks.",
  },
  {
    id: 20,
    question: "Which IPv6 prefix defines a default route?",
    options: ["::/0", "0::0/128", "FE80::/10", "FF00::/8"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The IPv6 default route is written as ::/0, equivalent to the IPv4 0.0.0.0 0.0.0.0.",
  },
  {
    id: 21,
    question:
      "If a router learns about the same destination network (e.g., 192.168.1.0/24) via OSPF and a Static Route, which route will be placed in the routing table?",
    options: [
      "The OSPF route",
      "The Static route",
      "Both routes (load balancing)",
      "Neither, it causes a conflict",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router uses Administrative Distance to break ties between different protocols. The Static Route (AD 1) beats OSPF (AD 110).",
  },
  {
    id: 22,
    question:
      "If a router has a route for 10.0.0.0/8 (AD 1) and a route for 10.1.1.0/24 (AD 110), where will a packet destined for 10.1.1.5 be routed?",
    options: [
      "Using the 10.0.0.0/8 route",
      "Using the 10.1.1.0/24 route",
      "It will be load-balanced",
      "It will be dropped",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Longest Prefix Match always wins before AD is considered. 10.1.1.0/24 is a more specific match for 10.1.1.5 than the /8 route.",
  },
  {
    id: 23,
    question:
      "What command is required to enable IPv6 routing globally on a Cisco router?",
    options: [
      "ipv6 enable",
      "ipv6 routing",
      "ip routing ipv6",
      "ipv6 unicast-routing",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The 'ipv6 unicast-routing' global configuration command must be entered to enable a router to forward IPv6 packets.",
  },
  {
    id: 24,
    question:
      "When configuring an IPv6 static route using a link-local address as the next hop, what else MUST be specified?",
    options: [
      "The MAC address of the next hop",
      "The local exit interface",
      "An Administrative Distance of 1",
      "A global unicast address",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because link-local addresses (FE80::) are locally significant and can exist on multiple interfaces simultaneously, you must specify the local exit interface so the router knows which link to use.",
  },
  {
    id: 25,
    question:
      "Which of the following routing protocols supports Equal-Cost Multi-Path (ECMP) load balancing?",
    options: ["OSPF only", "EIGRP only", "RIP only", "OSPF, EIGRP, and RIP"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "All standard interior gateway protocols (OSPF, EIGRP, RIP) support Equal-Cost load balancing by default.",
  },
  {
    id: 26,
    question:
      "Which dynamic routing protocol uniquely supports Unequal-Cost Multi-Path load balancing?",
    options: ["OSPF", "EIGRP", "BGP", "RIPv2"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EIGRP can perform unequal-cost load balancing using the 'variance' command, allowing paths with different metrics to share traffic.",
  },
  {
    id: 27,
    question: "What is the purpose of a Host Route?",
    options: [
      "To summarize multiple subnets",
      "To direct traffic to a specific, single endpoint device",
      "To route broadcast traffic",
      "To provide a default path out of the network",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A host route uses a /32 (IPv4) or /128 (IPv6) subnet mask to represent a single specific IP address, forcing traffic for that one host down a designated path.",
  },
  {
    id: 28,
    question: "What is the Administrative Distance of RIP?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The Routing Information Protocol (RIP) has a default AD of 120, making it less trusted than OSPF or EIGRP.",
  },
  {
    id: 29,
    question:
      "What is the Administrative Distance of an External BGP (eBGP) route?",
    options: ["20", "170", "200", "255"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "eBGP has a very trusted AD of 20, whereas Internal BGP (iBGP) has an AD of 200.",
  },
  {
    id: 30,
    question:
      "What loop-prevention mechanism prevents a router from advertising a route back out the same interface it learned it from?",
    options: [
      "Route Poisoning",
      "Hold-down Timer",
      "Split Horizon",
      "Poison Reverse",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Split Horizon is a distance-vector rule stating that it is never useful to send information about a route back in the direction from which the original information came.",
  },
  {
    id: 31,
    question:
      "Which feature allows a router to answer ARP requests on behalf of another device on a different subnet?",
    options: [
      "Inverse ARP",
      "Dynamic ARP Inspection",
      "Proxy ARP",
      "Gratuitous ARP",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Proxy ARP allows a router to answer an ARP request for a destination IP outside the local subnet, acting as a transparent gateway for misconfigured hosts.",
  },
  {
    id: 32,
    question: "What happens in Process Switching?",
    options: [
      "Packets are forwarded directly by the ASIC hardware",
      "Every single packet is sent to the router's CPU for a routing table lookup",
      "Only the first packet goes to the CPU, subsequent packets use a cache",
      "Packets are dropped if they exceed the MTU",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Process switching is the oldest and slowest forwarding method where the router's CPU must individually examine and route every single packet.",
  },
  {
    id: 33,
    question: "In the context of dynamic routing, what is 'convergence'?",
    options: [
      "The process of encapsulating a packet into a new Layer 2 frame structure for the link",
      "The point when all routers in a network share the same consistent routing information",
      "The aggregation of multiple IP subnets into one larger summarized address block",
      "The election of a designated router to manage traffic on the shared broadcast segment",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Convergence is achieved when all network routers have finished exchanging updates and their routing tables are completely synchronized.",
  },
  {
    id: 34,
    question:
      "Which command reveals the exact routing protocols currently running on a router, their timers, and neighbor limits?",
    options: [
      "show ip route",
      "show ip protocols",
      "show run",
      "show ip interfaces",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip protocols' displays active routing protocol parameters, metrics, passive interfaces, and the networks being advertised.",
  },
  {
    id: 35,
    question:
      "What does the 'passive-interface' command do in a dynamic routing protocol?",
    options: [
      "It shuts the interface down completely so that no traffic is able to pass through it in either direction whatsoever",
      "It stops sending routing updates out the interface, but still advertises the interface's subnet to other routers",
      "It makes the interface listen-only for the ARP requests that arrive on the local broadcast segment of the directly connected network",
      "It forces the interface into half-duplex mode for all of the traffic that flows through the port in both directions at the same time",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Passive-interface prevents routing hello packets and updates from being transmitted out an interface (securing it against rogue routers), but includes its connected subnet in the routing table updates sent elsewhere.",
  },
  {
    id: 36,
    question:
      "Which of the following creates a 'black hole' route to prevent routing loops during summarization?",
    options: [
      "A route to 0.0.0.0",
      "A route to Null0",
      "A route to 127.0.0.1",
      "A floating static route",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Routing traffic to the Null0 interface acts as a discard mechanism. It is often created automatically during summarization to drop traffic destined for subnets that don't actually exist within the summary block.",
  },
  {
    id: 37,
    question:
      "If a static route is configured with an exit interface that is currently in a 'down/down' state, what happens to the route?",
    options: [
      "It remains in the routing table but is marked as inactive",
      "It is removed from the routing table",
      "It causes a routing loop",
      "It switches to Process Switching",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A static route will only be installed in the routing table if the associated exit interface is active (up/up) or the next-hop IP is reachable.",
  },
  {
    id: 38,
    question:
      "What is the effect of the 'default-information originate' command in OSPF?",
    options: [
      "It creates a default static route in the global routing table",
      "It injects the router's existing default route into the OSPF domain",
      "It blocks default routes from entering the router's OSPF table",
      "It changes the OSPF administrative distance to a value of 1",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "This command takes a default route configured on the edge router and advertises it dynamically to all other OSPF neighbors.",
  },
  {
    id: 39,
    question:
      "Which output code in 'show ip route' represents a route learned via BGP?",
    options: ["B", "E", "D", "O"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The letter 'B' denotes a route learned via the Border Gateway Protocol.",
  },
  {
    id: 40,
    question:
      "When pinging a destination, what does the character 'U' indicate in the output?",
    options: [
      "The destination host is up and responding (Success)",
      "Unreachable (Destination Unreachable ICMP received)",
      "The protocol used is not recognized (Unknown protocol)",
      "An update is still pending on the network (Update pending)",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A 'U' means that a router along the path did not have a route to the destination and returned an ICMP Destination Unreachable message.",
  },
  {
    id: 41,
    question: "What does the period '.' indicate in a ping test output?",
    options: [
      "The packet arrived successfully at the destination",
      "Packet fragmentation occurred along the network path",
      "Request timed out (No reply received within timeout period)",
      "The network itself is unreachable from this host",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A period (.) signifies a timeout, meaning the ICMP Echo Request was sent, but no Echo Reply was received before the timer expired.",
  },
  {
    id: 42,
    question:
      "Which protocol does 'traceroute' rely on in Cisco IOS by default?",
    options: ["TCP and ARP", "UDP and ICMP", "ICMP exclusively", "TCP and IP"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco's implementation of traceroute sends UDP probes with incrementally increasing TTL values and relies on ICMP 'Time Exceeded' and 'Port Unreachable' messages returning.",
  },
  {
    id: 43,
    question: "What is the primary benefit of Route Summarization?",
    options: [
      "It encrypts routing updates",
      "It reduces the size of the routing table, saving CPU and memory",
      "It increases the bandwidth of the physical links",
      "It replaces the need for a default gateway",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Route summarization groups multiple contiguous subnets into a single, larger CIDR block, drastically shrinking routing tables and isolating topology changes.",
  },
  {
    id: 44,
    question:
      "Which address range constitutes the standard IPv4 loopback network?",
    options: ["10.0.0.0/8", "127.0.0.0/8", "169.254.0.0/16", "192.168.0.0/16"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 127.0.0.0/8 block is reserved for loopback and local host testing (e.g., ping 127.0.0.1).",
  },
  {
    id: 45,
    question:
      "If the 'network' command is issued in an OSPF configuration, what does it accomplish?",
    options: [
      "It creates a brand new subnet on the router for the specified network address space range",
      "It identifies which interfaces will participate in OSPF and advertises their connected subnets",
      "It assigns an IP address to a virtual interface that represents the specified network segment",
      "It limits the total bandwidth that is available to the traffic of the specified network segment",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The network command tells the routing process which local interfaces it should activate for sending/receiving updates, and which connected subnets to advertise to peers.",
  },
  {
    id: 46,
    question:
      "In OSPF, what wildcard mask would correctly match the interface IP 192.168.1.5 /24 strictly for that single interface?",
    options: ["0.0.0.255", "0.0.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A wildcard mask of 0.0.0.0 tells OSPF to match the IP address exactly bit-for-bit, binding OSPF to that exact specific interface regardless of the subnet mask.",
  },
  {
    id: 47,
    question: "What identifies an autonomous system in EIGRP?",
    options: [
      "The Area ID",
      "The Process ID",
      "The AS Number",
      "The Router ID",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "EIGRP uses an Autonomous System (AS) number. Routers must share the same AS number to form neighbor adjacencies.",
  },
  {
    id: 48,
    question: "What identifies the local routing instance in OSPF?",
    options: [
      "The Area ID",
      "The Process ID",
      "The AS Number",
      "The Subnet Mask",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "OSPF uses a locally significant Process ID (e.g., 'router ospf 10'). It does not need to match between neighbors to form an adjacency.",
  },
  {
    id: 49,
    question:
      "Which table stores all routes learned by EIGRP before the best paths are moved to the routing table?",
    options: [
      "The Adjacency Table",
      "The Topology Table",
      "The FIB",
      "The LSDB",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EIGRP stores all learned routes, including feasible successors (backups), in its Topology Table.",
  },
  {
    id: 50,
    question: "Which table holds the complete map of an OSPF area?",
    options: [
      "Link-State Database (LSDB)",
      "Topology Table",
      "Routing Information Base (RIB)",
      "MAC Table",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "OSPF builds a Link-State Database (LSDB) which contains all LSA (Link-State Advertisement) data for the area, identical on all routers within that area.",
  },
  {
    id: 51,
    question: "What is the primary function of a Router ID (RID) in OSPF?",
    options: [
      "To encrypt the OSPF packets for the security",
      "To uniquely identify the router within the OSPF domain",
      "To specify the default gateway for the router",
      "To define the backbone area of the OSPF network",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The RID is a 32-bit value (formatted like an IP address) that uniquely identifies a specific router to its OSPF peers.",
  },
  {
    id: 52,
    question: "Which route type has an Administrative Distance of 1?",
    options: ["Connected", "Static", "eBGP", "EIGRP Summary"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "Static routes have a default Administrative Distance of 1.",
  },
  {
    id: 53,
    question:
      "What is the command to view the Forwarding Information Base (FIB) used by CEF?",
    options: [
      "show ip route",
      "show ip cef",
      "show forwarding",
      "show fib table",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show ip cef' displays the CEF Forwarding Information Base, detailing how the router will actually switch packets in hardware.",
  },
  {
    id: 54,
    question:
      "Which layer of the hierarchical network design model is responsible for fast, reliable data transport between distribution switches without applying complex routing policies?",
    options: ["Access Layer", "Distribution Layer", "Core Layer", "Edge Layer"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Core layer acts as the high-speed backbone. Policy enforcement and routing boundaries are typically pushed to the Distribution layer.",
  },
  {
    id: 55,
    question: "How does a router determine if a packet needs to be fragmented?",
    options: [
      "If the packet's TTL reaches 0",
      "If the packet size is larger than the exit interface's MTU",
      "If the packet is encrypted via IPsec",
      "If the destination is on a different subnet",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Maximum Transmission Unit (MTU) defines the largest packet size allowed on a link. If a routed packet exceeds this, the router must fragment it (unless the Don't Fragment bit is set).",
  },
  {
    id: 56,
    question:
      "What happens if a packet exceeds the exit interface MTU, but the 'Don't Fragment' (DF) bit is set in the IP header?",
    options: [
      "The router fragments the oversized packet anyway despite the DF bit setting",
      "The router ignores the MTU entirely and sends the packet out in its whole form",
      "The router drops the packet and sends an ICMP 'Fragmentation Needed' message",
      "The router changes the DF bit value to 0 and then forwards the packet onward",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "If the DF bit is 1, the router is forbidden from fragmenting. It drops the oversized packet and informs the sender via ICMP.",
  },
  {
    id: 57,
    question: "What determines the metric of a static route?",
    options: ["Bandwidth", "Hop Count", "It is always 0", "Delay"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Static routes do not have a dynamically calculated metric; their metric in the routing table is typically displayed as 0.",
  },
  {
    id: 58,
    question:
      "In IPv6, what protocol replaces ARP to resolve IP addresses to MAC addresses?",
    options: [
      "DHCPv6 (Dynamic Host Configuration Protocol for IPv6)",
      "ICMPv6 Neighbor Discovery Protocol (NDP)",
      "SLAAC (Stateless Address Auto-Configuration)",
      "OSPFv3 (the IPv6 version of OSPF)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPv6 uses NDP (Neighbor Discovery Protocol), specifically Neighbor Solicitation and Neighbor Advertisement messages, to perform the function that ARP did in IPv4.",
  },
  {
    id: 59,
    question:
      "Which NDP message is sent by a host to locate default routers on the local link?",
    options: [
      "Neighbor Solicitation (NS)",
      "Neighbor Advertisement (NA)",
      "Router Solicitation (RS)",
      "Router Advertisement (RA)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A host sends a Router Solicitation (RS) multicast message to ask all local routers to identify themselves. Routers reply with a Router Advertisement (RA).",
  },
  {
    id: 60,
    question:
      "If a static route is configured as 'ip route 10.1.1.0 255.255.255.0 192.168.1.1 200', what does the '200' signify?",
    options: [
      "The metric",
      "The Administrative Distance",
      "The MTU limit",
      "The port number",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A number appended to the end of a static route configuration alters its Administrative Distance. In this case, setting it to 200 turns it into a floating static route.",
  },
  {
    id: 61,
    question:
      "Which term refers to the process of a router placing a network packet inside a new Layer 2 frame?",
    options: [
      "Decapsulation",
      "Encapsulation",
      "Fragmentation",
      "Summarization",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Encapsulation is the process where a router wraps the Layer 3 IP packet in a new Layer 2 frame structure suited for the outgoing interface.",
  },
  {
    id: 62,
    question: "Which routing protocol uses the DUAL algorithm?",
    options: ["OSPF", "RIP", "BGP", "EIGRP"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Enhanced Interior Gateway Routing Protocol (EIGRP) uses the Diffusing Update Algorithm (DUAL) to calculate best paths and backup paths.",
  },
  {
    id: 63,
    question: "Which routing protocol uses the Dijkstra algorithm?",
    options: ["EIGRP", "RIP", "OSPF", "BGP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF uses Dijkstra's Shortest Path First (SPF) algorithm to calculate the most efficient loop-free paths through its Link-State Database.",
  },
  {
    id: 64,
    question:
      "What is the primary function of a loopback interface on a router?",
    options: [
      "To connect the router to a physical switch on the local area network segment for all traffic",
      "To provide a stable, always-up virtual interface for management and router identification",
      "To load-balance the network traffic automatically across the multiple available links",
      "To prevent the Layer 2 bridging loops from forming in the switched network topology",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Loopback interfaces are logical interfaces that never go down. They are ideal for router IDs (OSPF/BGP) and management IPs (SSH/Telnet).",
  },
  {
    id: 65,
    question:
      "What command verifies the Layer 2 to Layer 3 mappings on a local IPv4 router?",
    options: [
      "show ip route",
      "show arp",
      "show mac address-table",
      "show interfaces",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show arp' command displays the router's ARP cache, which maps directly connected Layer 3 IPv4 addresses to their Layer 2 MAC addresses.",
  },
  {
    id: 66,
    question:
      "What command is used to view the IPv6 equivalent of the ARP table?",
    options: [
      "show ipv6 route",
      "show ipv6 neighbors",
      "show ipv6 arp",
      "show ndp",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show ipv6 neighbors' displays the IPv6 neighbor cache, mapping IPv6 addresses to MAC addresses via the Neighbor Discovery Protocol.",
  },
  {
    id: 67,
    question:
      "Which concept allows a router to forward traffic for multiple VLANs over a single physical link?",
    options: [
      "EtherChannel",
      "Router-on-a-Stick (ROAS)",
      "Proxy ARP",
      "Default Routing",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Router-on-a-Stick uses 802.1Q encapsulation on router subinterfaces to route traffic between multiple VLANs arriving over a single physical trunk link.",
  },
  {
    id: 68,
    question:
      "What must be configured on a Router-on-a-Stick subinterface before assigning an IP address?",
    options: [
      "A loopback address for management",
      "The 'encapsulation dot1Q [vlan-id]' command",
      "An OSPF network statement for the VLAN",
      "A static MAC address for the host",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco IOS requires the subinterface to be tied to a specific VLAN using 802.1Q encapsulation before it will accept an IP address configuration.",
  },
  {
    id: 69,
    question:
      "What happens if a routing table contains two routes to the exact same destination prefix with identical AD and identical Metric?",
    options: [
      "The router drops the older route from the routing table entirely to avoid conflict",
      "The router drops the newer route from the routing table entirely to avoid conflict",
      "The router performs Equal-Cost Multi-Path (ECMP) load balancing across both routes",
      "The router enters a routing loop state and the traffic is bounced back and forth",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "When AD, Prefix Length, and Metric tie exactly, the router installs both routes in the table and shares the traffic load across both paths.",
  },
  {
    id: 70,
    question:
      "Which of the following is a key advantage of Distance Vector protocols over Link-State protocols?",
    options: [
      "They have a complete view of the network topology",
      "They converge instantly",
      "They require less memory and CPU processing power",
      "They use Cost as a metric",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Distance Vector protocols (like RIP) simply pass routing tables to neighbors. They don't run complex SPF algorithms, making them lighter on router hardware resources.",
  },
  {
    id: 71,
    question: "Which of the following describes Route Poisoning?",
    options: [
      "Sending false routing updates to a router in order to hack into it and take complete control of its routing table and forwarding decisions",
      "Advertising a failed route with an infinite metric (e.g., 16 hops in RIP) to immediately inform neighbors the network is down",
      "Dropping the packets that match a Null0 discard route that is present in the routing table of the local router device in the network",
      "Injecting the default routes into the OSPF routing domain of the entire network infrastructure that is directly connected to the local router",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Route poisoning is a loop-prevention mechanism where a router advertises a down network with a metric deemed 'unreachable' to ensure neighbors flush it from their tables.",
  },
  {
    id: 72,
    question: "What does an Administrative Distance of 255 mean?",
    options: [
      "The route is highly trusted and will always be preferred over all other routes",
      "The route is a directly connected interface that belongs to the local router device",
      "The route is considered untrustworthy and will not be installed in the routing table",
      "The route is learned via iBGP from a peer in the same autonomous system",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An AD of 255 indicates an unreachable or completely untrusted source; Cisco routers will never install a route with an AD of 255 into the routing table.",
  },
  {
    id: 73,
    question:
      "Which command assigns an IPv6 address to an interface using the MAC address to generate the host portion?",
    options: [
      "ipv6 address dhcp",
      "ipv6 address autoconfig",
      "ipv6 address [prefix]/64 eui-64",
      "ipv6 enable",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The EUI-64 mechanism takes the interface's 48-bit MAC address, inserts FFFE in the middle, and flips the 7th bit to automatically generate a unique 64-bit interface ID.",
  },
  {
    id: 74,
    question:
      "What is the purpose of the 'ip routing' command on a Cisco Catalyst Layer 3 switch?",
    options: [
      "To enable the Spanning Tree Protocol to prevent switching loops on the switch fabric itself",
      "To activate routing capabilities and allow the switch to route packets between SVIs (VLANs)",
      "To enable the OSPF routing protocol on the switch for the dynamic routing of the network traffic",
      "To assign an IP address to a physical port on the switch for the management and administration purposes",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, Layer 3 switches operate entirely at Layer 2. The 'ip routing' global command turns on the routing engine, enabling inter-VLAN routing.",
  },
  {
    id: 75,
    question: "What type of route is denoted by 'O*E2' in the routing table?",
    options: [
      "An internal OSPF route",
      "An OSPF External Type 2 default route",
      "An EIGRP default route",
      "An OSPF Inter-Area route",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The asterisk (*) indicates a candidate default route. 'O' means OSPF, and 'E2' signifies an External Type 2 route (injected from outside the OSPF domain).",
  },
  {
    id: 76,
    question:
      "Why is a recursive static route (using next-hop IP) generally preferred over a directly attached static route (using exit interface) on Ethernet networks?",
    options: [
      "It avoids unnecessary ARP broadcasts for every destination IP address",
      "It is faster for the CPU to process and forward the packets",
      "It bypasses the routing table lookup process entirely on the router",
      "It automatically converts to a dynamic route when needed",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "If an exit interface is specified on a multi-access network (Ethernet), the router must send an ARP request for every single destination IP. A next-hop IP route only requires one ARP request for the next-hop router itself.",
  },
  {
    id: 77,
    question:
      "What is the primary role of an ASBR (Autonomous System Boundary Router) in OSPF?",
    options: [
      "To connect two different OSPF areas together (e.g., Area 0 and Area 1)",
      "To redistribute routes from another routing domain (e.g., EIGRP or Static) into OSPF",
      "To act as the designated router on a shared Ethernet broadcast segment link",
      "To calculate the SPF tree for the entire OSPF area of the network topology in the database",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An ASBR connects the OSPF network to an external routing domain and translates/injects external routes into the OSPF topology.",
  },
  {
    id: 78,
    question:
      "What is the primary role of an ABR (Area Border Router) in OSPF?",
    options: [
      "To connect an OSPF area to the OSPF Backbone Area (Area 0)",
      "To connect the OSPF network to the Internet",
      "To run the BGP protocol on the router for the eBGP peers",
      "To perform MAC address translation between the links",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "An ABR has interfaces in multiple OSPF areas (at least one in Area 0) and is responsible for summarizing and passing routing information between them.",
  },
  {
    id: 79,
    question: "In routing logic, what is a 'Gateway of Last Resort'?",
    options: [
      "The router that has the highest CPU power and the most memory capacity in the entire network",
      "The default route used when a packet's destination does not match any other specific route",
      "The ISP's core router that connects the enterprise network to the global internet backbone",
      "The final router that a packet passes through in the network path before it is dropped",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Gateway of Last Resort is simply the default route (0.0.0.0/0). It acts as the final option if no specific match is found.",
  },
  {
    id: 80,
    question: "Which metric does BGP use to make routing decisions?",
    options: [
      "The total Hop Count along the path (like RIP)",
      "Path Attributes (e.g., AS-Path, Local Preference, MED)",
      "The combined Bandwidth and Delay of the path",
      "The computed Cost of the link (like OSPF)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "BGP does not use a single numeric metric. Instead, it processes a complex list of Path Attributes to determine the best path, with AS-Path length being a primary factor.",
  },
  {
    id: 81,
    question:
      "If 'ping' uses ICMP, what specific ICMP message types are exchanged?",
    options: [
      "Type 3 Unreachable and Type 11 Time Exceeded",
      "Type 8 Echo Request and Type 0 Echo Reply",
      "Type 5 Redirect and Type 0 Echo Reply",
      "Type 13 Timestamp and Type 14 Timestamp Reply",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The standard ping utility sends ICMP Type 8 (Echo Request) packets and expects the target to return ICMP Type 0 (Echo Reply) packets.",
  },
  {
    id: 82,
    question:
      "Which of the following is NOT a required component of a basic routing table entry?",
    options: [
      "Destination Network / Prefix",
      "Next-Hop Address or Exit Interface",
      "Metric",
      "Source IP Address",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Routing tables only care about destination networks. The source IP address of a packet is not used for standard destination-based routing decisions.",
  },
  {
    id: 83,
    question: "What is an SVI?",
    options: [
      "Switch Virtual Interface: A logical Layer 3 interface on a switch used for routing a specific VLAN",
      "Static Variable Interface: A backup physical port on the switch that is used for the failover of traffic",
      "Standard Virtual Identifier: The BGP AS number that is assigned to the local router in the domain",
      "Stateful Virtual Inspection: A firewall rule that performs deep inspection of the traffic flows",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "An SVI (Switch Virtual Interface) acts as the Layer 3 default gateway for a specific Layer 2 VLAN on a multilayer switch.",
  },
  {
    id: 84,
    question: "Which command configures an SVI for VLAN 10?",
    options: [
      "interface vlan 10",
      "vlan 10 ip address",
      "interface fastethernet 0/1.10",
      "router vlan 10",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Entering global configuration mode and typing 'interface vlan 10' creates the logical SVI where you can assign an IP address.",
  },
  {
    id: 85,
    question:
      "What is the purpose of the 'ip classless' command in older Cisco IOS versions?",
    options: [
      "It disables the use of subnet masks and forces the router to rely on classful addressing boundaries for all of the routes that it learns",
      "It allows the router to use a default route even if a major network boundary is partially known but the specific subnet is missing",
      "It forces the router to use RIPv1 for all of its routing updates and advertisements that it sends out to its neighboring routers",
      "It enables IPv6 routing on the router so that it can forward the IPv6 traffic packets between the connected networks and subnets",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Without 'ip classless', if a router knows about 10.1.1.0/24, it assumes it knows ALL of network 10.0.0.0. If it gets a packet for 10.2.2.2, it drops it instead of using the default route. 'ip classless' fixes this classful boundary limitation.",
  },
  {
    id: 86,
    question:
      "Which Cisco IOS feature allows you to track the reachability of a next-hop IP and automatically remove a static route if it stops responding?",
    options: [
      "IP SLA (Service Level Agreement)",
      "Proxy ARP",
      "OSPF Hello Timers",
      "CEF Polling",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "IP SLA can be configured to continuously ping a next-hop IP. By tying a static route to the SLA tracker, the route is dynamically removed if the ping fails, allowing floating static routes to take over.",
  },
  {
    id: 87,
    question:
      "What type of route is created automatically when you assign an IP address to an interface and issue 'no shutdown'?",
    options: [
      "Static route",
      "Connected route",
      "Default route",
      "Summary route",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "When an interface is active and IP-addressed, the router automatically installs a 'Connected' (C) route to the subnet, and a 'Local' (L) route to the specific IP.",
  },
  {
    id: 88,
    question: "What does an IPv6 route denoted with 'FF00::/8' represent?",
    options: [
      "Multicast routing space",
      "Link-local routing space",
      "Global Unicast routing space",
      "The default route",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The FF00::/8 prefix is strictly reserved for IPv6 Multicast traffic.",
  },
  {
    id: 89,
    question:
      "Which of the following is true about a 'routed port' on a multilayer switch?",
    options: [
      "It belongs to all of the VLANs that are configured on the switch at the same time for forwarding of the traffic",
      "It acts exactly like a physical router port, possessing an IP address and no Layer 2 switching capabilities",
      "It is an SVI which is a logical Layer 3 interface that represents a specific VLAN on the switch itself for routing",
      "It requires 802.1Q encapsulation to be configured on the trunk link that carries the multiple VLANs between the connected switches",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Using the 'no switchport' command on a multilayer switch interface converts it into a pure routed port, stripping it of VLAN capabilities and allowing direct IP address assignment.",
  },
  {
    id: 90,
    question:
      "What is the maximum hop count allowed by RIP before a route is considered unreachable?",
    options: ["10", "15", "16", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "RIP considers 15 hops as the maximum valid distance. A hop count of 16 means the destination is infinitely far away and unreachable.",
  },
  {
    id: 91,
    question:
      "In the routing table, what does the bracketed value [110/65] represent for an OSPF route?",
    options: [
      "[Metric / Bandwidth]",
      "[Administrative Distance / Metric]",
      "[Process ID / Cost]",
      "[Hop Count / Administrative Distance]",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The first number is the Administrative Distance (110 for OSPF), and the second number is the calculated routing protocol Metric (Cost of 65).",
  },
  {
    id: 92,
    question:
      "Which routing protocol supports both IPv4 and IPv6 via address families, but requires IPv6 configurations to be done under the 'router bgp' process?",
    options: ["RIPng", "OSPFv3", "MP-BGP", "EIGRP for IPv6"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Multiprotocol BGP (MP-BGP) natively supports both IPv4 and IPv6 under a single routing process using specific address-family configuration blocks.",
  },
  {
    id: 93,
    question:
      "What is a major characteristic of a Classful routing protocol (like RIPv1)?",
    options: [
      "It fully supports VLSM and the CIDR addressing schemes in its routing update packets",
      "It sends the subnet mask information in its routing updates to all of the neighbors",
      "It does NOT send subnet mask information in updates, assuming default class boundaries",
      "It only routes the IPv6 traffic and completely ignores the IPv4 packets that arrive",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Classful protocols do not transmit subnet masks, forcing them to rely on default Class A, B, and C boundaries, which breaks Variable Length Subnet Masking (VLSM).",
  },
  {
    id: 94,
    question:
      "Which command shows the exact path traffic will take out of the router for a specific destination IP, calculating all longest-match logic?",
    options: [
      "show ip route [destination_ip]",
      "show ip path",
      "traceroute [destination_ip]",
      "show ip forwarding",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Typing 'show ip route' followed by a specific IP address forces the router to simulate its longest-prefix match logic and display the exact route it will select for that IP.",
  },
  {
    id: 95,
    question:
      "Why might a network engineer configure a static route pointing to the Null0 interface for a summary address (e.g., 10.0.0.0/8)?",
    options: [
      "To load balance the traffic across the multiple equal-cost paths that are available to the various destination networks in the table",
      "To prevent routing loops when traffic arrives for a subnet within the summary block that does not currently exist",
      "To enable Proxy ARP for the hosts that are on the local broadcast segment of the directly connected network link segment itself",
      "To bypass an access control list that is applied to the outbound interface of the local router device for all of the traffic",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If a router advertises a summary route but doesn't have a specific internal route for a matching packet, it might bounce the packet to a default route, creating a loop. A Null0 discard route instantly drops these orphaned packets.",
  },
  {
    id: 96,
    question:
      "What happens when two routers on the same Ethernet segment have mismatched MTU sizes?",
    options: [
      "Routing protocols like OSPF will fail to form an adjacency",
      "The connection speed automatically drops to 10 Mbps",
      "The routers will use the lower MTU automatically",
      "Nothing, MTU only affects Layer 4",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Routing protocols like OSPF enforce strict MTU matching. If the MTU does not match on both sides of the link, OSPF will remain stuck in the EXSTART/EXCHANGE state and fail to form a neighbor relationship.",
  },
  {
    id: 97,
    question:
      "Which mechanism allows IPv4 devices to communicate natively with IPv6 devices?",
    options: [
      "Dual-stack configuration",
      "NAT64",
      "Proxy ARP",
      "IPv4-to-IPv6 Tunneling",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "NAT64 translates IPv6 packet headers into IPv4 headers (and vice versa), allowing native communication between the two different protocols.",
  },
  {
    id: 98,
    question:
      "Which command will permanently save the active routing table into the configuration file?",
    options: [
      "copy route-table startup-config on the local router device",
      "write memory (equivalent to copy running-config startup-config)",
      "save routing-table to the flash memory of the router device",
      "None. The routing table is dynamic and rebuilt in RAM upon boot.",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The routing table itself is a dynamic structure kept in RAM. Only the static configurations (like 'ip route' commands) are saved in NVRAM; the actual dynamic table must be rebuilt every time the router boots.",
  },
  {
    id: 99,
    question:
      "What does it mean if a route is flagged as 'Administratively Down'?",
    options: [
      "The routing protocol process crashed and completely stopped running on the router",
      "The physical cable was unplugged from the interface port of the network device",
      "A network administrator manually issued the 'shutdown' command on the exit interface",
      "The administrative distance of the route has been set to the maximum value of 255",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "An interface status of 'administratively down' strictly means that the 'shutdown' command was applied by an admin.",
  },
  {
    id: 100,
    question:
      "Which type of Network Address Translation maps multiple private IP addresses to a single public IP address using Layer 4 port numbers?",
    options: [
      "Static NAT (one-to-one mapping)",
      "Dynamic NAT (pool-based mapping)",
      "PAT (Port Address Translation)",
      "NAT64 (IPv6 to IPv4 translation)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Port Address Translation (PAT), also known as NAT Overload, differentiates multiple internal hosts using a single external IP address by tracking their unique source port numbers.",
  },
  {
    id: 111,
    question: "Which type of route has the lowest administrative distance?",
    options: ["OSPF", "Static route", "Connected route", "EIGRP (internal)"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Connected routes have an administrative distance of 0, making them the most trusted. Static routes default to 1, EIGRP internal to 90, and OSPF to 110.",
  },
  {
    id: 200,
    question: "What is the primary purpose of a routing protocol?",
    options: [
      "To forward packets based on the MAC addresses in the table",
      "To dynamically learn and exchange network reachability information",
      "To assign the IP addresses to the router's interfaces",
      "To encrypt the traffic that flows between the routers",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Routing protocols (OSPF, EIGRP, etc.) enable routers to dynamically discover remote networks and share their knowledge to build a consistent routing table.",
  },
  {
    id: 300,
    question:
      "When a router receives a packet destined for a network not in its routing table, what happens?",
    options: [
      "The packet is queued until a route is learned",
      "The router broadcasts an ARP request for the destination",
      "The packet is discarded if no default route exists",
      "The router forwards the packet to all neighbors",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "If no matching route (including a default/quad-zero route) exists in the routing table, the router drops the packet and sends an ICMP Destination Unreachable message back to the source.",
  },
  {
    id: 400,
    question: "What does the 'longest prefix match' rule mean for routing?",
    options: [
      "The router prefers routes with the lowest metric",
      "The router prefers the route with the most specific subnet mask",
      "The router prefers routes with the highest administrative distance",
      "The router prefers the route learned most recently",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When multiple routes match a destination, the router chooses the one with the longest prefix length (most specific mask). For example, a /32 host route is preferred over a /24 network route.",
  },
  {
    id: 500,
    question: "Which command shows the routing table on a Cisco router?",
    options: [
      "show interfaces",
      "show ip route",
      "show running-config",
      "show cdp neighbors",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip route' displays the IP routing table with all known routes, their administrative distances, metrics, and next-hop information.",
  },
];
