import type { QuizQuestion } from "./types";

export const dynamicRoutingQuestions: QuizQuestion[] = [
  // --- Dynamic Routing Fundamentals & Concepts ---
  {
    id: 1,
    question: "Which of the following is an interior gateway protocol (IGP)?",
    options: ["BGP", "OSPF", "EGP", "MPLS"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "OSPF (Open Shortest Path First) is an Interior Gateway Protocol (IGP) used to route traffic within a single Autonomous System (AS). BGP is an Exterior Gateway Protocol (EGP).",
  },
  {
    id: 2,
    question: "What is the primary function of a dynamic routing protocol?",
    options: [
      "To automatically assign IP addresses to interfaces.",
      "To securely encrypt traffic between routers.",
      "To dynamically discover remote networks and maintain accurate routing tables.",
      "To translate private IP addresses to public IP addresses.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Dynamic routing protocols share network information with other routers, allowing them to automatically learn about remote networks, find the best path, and adapt to topology changes.",
  },
  {
    id: 3,
    question:
      "Which term describes the 'trustworthiness' of a route source in Cisco routers?",
    options: [
      "Metric",
      "Administrative Distance (AD)",
      "Bandwidth",
      "Hop Count",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Administrative Distance (AD) is an integer from 0 to 255 that rates the trustworthiness of a routing information source. Lower AD values are preferred.",
  },
  {
    id: 4,
    question:
      "If a router learns about the destination 192.168.10.0/24 from both OSPF and internal EIGRP, which route will be installed in the routing table?",
    options: [
      "The OSPF route",
      "The EIGRP route",
      "Both routes will be installed to load balance",
      "Neither, it causes a routing loop",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Internal EIGRP has an Administrative Distance of 90, while OSPF has an AD of 110. The router chooses the protocol with the lowest AD.",
  },
  {
    id: 5,
    question: "What is the default Administrative Distance of OSPF?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "OSPF has a default Administrative Distance of 110.",
  },
  {
    id: 6,
    question: "Which metric does RIP use to determine the best path?",
    options: ["Bandwidth", "Delay", "Hop Count", "Cost"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Routing Information Protocol (RIP) uses hop count as its sole metric, with a maximum valid hop count of 15.",
  },
  {
    id: 7,
    question:
      "Which algorithm do Link-State routing protocols like OSPF use to calculate the best path?",
    options: [
      "Bellman-Ford",
      "DUAL (Diffusing Update Algorithm)",
      "Dijkstra's Shortest Path First (SPF)",
      "Distance Vector",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Link-state protocols use Dijkstra's SPF algorithm to build a topological map of the network and calculate the shortest path to each destination.",
  },
  {
    id: 8,
    question:
      "Which of the following is a characteristic of Distance Vector routing protocols?",
    options: [
      "They maintain a complete topological map of the network.",
      "They send periodic full routing table updates to immediate neighbors.",
      "They only send triggered updates when a change occurs.",
      "They use the SPF algorithm.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Traditional distance vector protocols (like RIP) broadcast their entire routing table to directly connected neighbors at periodic intervals.",
  },
  {
    id: 9,
    question:
      "A router has a static route to 10.0.0.0/8 (AD 1) and an OSPF route to 10.1.1.0/24 (AD 110). Where will it send a packet destined for 10.1.1.5?",
    options: [
      "Using the static route because it has a lower AD.",
      "Using the OSPF route because of the longest match rule.",
      "It will load balance between both.",
      "It will drop the packet.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Prefix length (longest match) ALWAYS overrides Administrative Distance. AD is only used as a tie-breaker if a router learns the EXACT same subnet mask (e.g., /24) from two different protocols.",
  },
  {
    id: 10,
    question:
      "What is the purpose of the 'passive-interface' command in dynamic routing?",
    options: [
      "To shut down the interface completely.",
      "To prevent routing updates from being sent out the interface, while still advertising the interface's network.",
      "To allow the interface to only receive routes, not send them.",
      "To configure the interface for a floating static route.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'passive-interface' command stops a routing protocol from sending hello packets and updates out of that interface, but the network attached to it is still advertised to other routers.",
  },
  {
    id: 11,
    question: "What is 'Split Horizon'?",
    options: [
      "A feature that allows a router to load balance over unequal cost paths.",
      "A loop-prevention mechanism that prevents a router from advertising a route back out the interface it was learned on.",
      "A method for dividing a large AS into smaller OSPF areas.",
      "A technique for injecting a default route into an IGP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Split Horizon is a distance-vector loop prevention rule stating that a router should not advertise a network back through the interface from which that network was learned.",
  },
  {
    id: 12,
    question:
      "Which protocol is classified as an Advanced Distance Vector protocol, using features of both link-state and distance vector?",
    options: ["RIPv2", "OSPF", "EIGRP", "IS-IS"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "EIGRP is often referred to as a hybrid or advanced distance vector protocol because it uses distance vector logic but sends triggered, partial updates like a link-state protocol.",
  },
  {
    id: 13,
    question: "What is Route Poisoning?",
    options: [
      "Injecting false routes to perform a Man-in-the-Middle attack.",
      "Advertising a down network with an infinite metric to ensure all routers instantly know it is unreachable.",
      "Filtering routes using a route-map.",
      "Translating an IPv4 route to an IPv6 route.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Route poisoning is a loop prevention mechanism where a router immediately advertises a failed route with an unreachable metric (e.g., 16 hops in RIP) to notify the network.",
  },
  {
    id: 14,
    question:
      "Which of the following routing protocols supports VLSM (Classless routing)?",
    options: [
      "RIPv1 and IGRP",
      "RIPv2, OSPF, and EIGRP",
      "Only OSPF",
      "Only BGP",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Classless routing protocols (RIPv2, OSPF, EIGRP, IS-IS) include the subnet mask in their routing updates, allowing for Variable Length Subnet Masking (VLSM).",
  },
  {
    id: 15,
    question: "In the routing table, what does the code 'D' represent?",
    options: ["Directly connected", "Dynamic", "EIGRP", "Default route"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The letter 'D' represents EIGRP (DUAL algorithm). 'C' is connected, 'S' is static, 'O' is OSPF, and 'R' is RIP.",
  },

  // --- OSPF Basics & Router ID ---
  {
    id: 16,
    question: "Which metric does OSPF use to evaluate paths?",
    options: [
      "Hop count",
      "Delay and Bandwidth",
      "Cost (based on interface bandwidth)",
      "Reliability",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF uses Cost as its metric. Cost is inversely proportional to the bandwidth of the interface.",
  },
  {
    id: 17,
    question:
      "Which OSPF area is required in all OSPF deployments and must connect to all other areas?",
    options: [
      "Area 1",
      "Area 0 (Backbone Area)",
      "The NSSA Area",
      "The Stub Area",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Area 0 (or 0.0.0.0) is the OSPF Backbone Area. In a multi-area OSPF design, all non-backbone areas must connect directly to Area 0 to route traffic properly.",
  },
  {
    id: 18,
    question:
      "What is the first criteria a Cisco router uses to select its OSPF Router ID?",
    options: [
      "The highest IP address of any active physical interface.",
      "The lowest MAC address of the router.",
      "The manually configured 'router-id' command.",
      "The highest IP address of a configured loopback interface.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The selection order is: 1. Manually configured router-id. 2. Highest active Loopback IP. 3. Highest active physical interface IP.",
  },
  {
    id: 19,
    question:
      "Why is a loopback interface preferred for an OSPF Router ID if no ID is manually configured?",
    options: [
      "Loopback interfaces have a higher default bandwidth.",
      "Loopback interfaces are logical and never go down (unless manually shut down), ensuring OSPF stability.",
      "Loopback interfaces bypass firewall rules.",
      "Loopback interfaces are required for Area 0.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because physical interfaces can fail, relying on a physical IP for the Router ID can cause the OSPF process to reset if that link goes down. Loopbacks remain up.",
  },
  {
    id: 20,
    question:
      "If a router has no manually configured router-id, a loopback with IP 10.1.1.1, and a Gigabit interface with IP 192.168.1.1, what will its OSPF Router ID be?",
    options: [
      "192.168.1.1",
      "10.1.1.1",
      "0.0.0.0",
      "It will randomly generate one.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The highest active Loopback IP takes precedence over any physical interface IP, regardless of which IP address is numerically higher.",
  },
  {
    id: 21,
    question: "What is an OSPF ABR?",
    options: [
      "Area Backup Router",
      "Autonomous Boundary Router",
      "Area Border Router",
      "Active Backbone Router",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "An Area Border Router (ABR) is a router that has interfaces in more than one OSPF area, typically Area 0 and at least one other area.",
  },
  {
    id: 22,
    question: "What is an OSPF ASBR?",
    options: [
      "Area Switch Border Router",
      "Autonomous System Boundary Router",
      "Automated State Backup Router",
      "All-System Broadcast Router",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An Autonomous System Boundary Router (ASBR) connects the OSPF routing domain to a different external routing protocol (like EIGRP, BGP, or static routes) and redistributes those routes into OSPF.",
  },
  {
    id: 23,
    question:
      "What multicast address is used for 'All OSPF Routers' to send Hello packets?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "224.0.0.5 is the multicast address used to reach all OSPF routers on a segment.",
  },
  {
    id: 24,
    question:
      "Which multicast address is used specifically to communicate with OSPF Designated Routers (DR) and Backup Designated Routers (BDR)?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DROTHERs (non-DR/BDR routers) send their Link State Updates to 224.0.0.6. The DR and BDR listen to this address.",
  },
  {
    id: 25,
    question: "What is an LSA in OSPF?",
    options: [
      "Link-State Acknowledgment",
      "Local State Advertisement",
      "Link-State Advertisement",
      "Local Server Authentication",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Link-State Advertisement (LSA) is a data packet containing routing and topology information that OSPF routers flood to build the Link-State Database (LSDB).",
  },
  {
    id: 26,
    question: "What is the primary function of the Link-State Database (LSDB)?",
    options: [
      "To store the OSPF neighbor passwords.",
      "To maintain an identical map of the network topology among all routers in an area.",
      "To filter malicious BGP routes.",
      "To hold only the best routes for the routing table.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The LSDB contains all the LSAs collected from the network. Every router in the same area has an identical LSDB, which Dijkstra's algorithm uses to calculate the best paths.",
  },
  {
    id: 27,
    question:
      "Does the OSPF Process ID have to match between two routers for them to form an adjacency?",
    options: [
      "Yes, absolutely.",
      "No, the Process ID is only locally significant.",
      "Only if they are in different areas.",
      "Only on point-to-point links.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The OSPF Process ID (e.g., router ospf 10) is locally significant to the router to differentiate multiple instances. It does NOT need to match the neighbor's Process ID.",
  },
  {
    id: 28,
    question:
      "In OSPF, what wildcard mask corresponds to a /30 subnet mask (255.255.255.252)?",
    options: ["0.0.0.0", "0.0.0.3", "0.0.0.15", "0.0.0.255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A wildcard mask is the inverse of a subnet mask. 255.255.255.255 - 255.255.255.252 = 0.0.0.3.",
  },
  {
    id: 29,
    question: "What wildcard mask corresponds to a /24 subnet mask?",
    options: ["0.0.0.255", "0.0.255.255", "0.255.255.255", "255.255.255.0"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "255.255.255.255 - 255.255.255.0 = 0.0.0.255.",
  },
  {
    id: 30,
    question:
      "What does a wildcard mask of 0.0.0.0 mean in an OSPF network statement?",
    options: [
      "Match any IP address.",
      "Match the specific interface IP address exactly.",
      "Exclude this IP address from OSPF.",
      "Enable OSPF on all interfaces.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A 0 wildcard bit means 'must match exactly'. Therefore, 0.0.0.0 forces OSPF to match the exact host IP address assigned to an interface.",
  },

  // --- OSPF Neighbor States & Timers ---
  {
    id: 31,
    question:
      "Which OSPF state indicates that a router has received a Hello packet from a neighbor, but its own Router ID is NOT yet in the neighbor's Hello packet?",
    options: ["Down", "Init", "2-Way", "ExStart"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In the Init state, a router has heard a Hello from the neighbor, but bidirectional communication hasn't been established yet.",
  },
  {
    id: 32,
    question:
      "At which OSPF state has bidirectional communication been established, and the DR/BDR election takes place?",
    options: ["Init", "2-Way", "Exchange", "Full"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In the 2-Way state, both routers see their own Router ID in each other's Hello packets. On multi-access networks, DR/BDR election happens here.",
  },
  {
    id: 33,
    question:
      "In which OSPF state do routers negotiate the Master/Slave relationship and determine the initial sequence number for database synchronization?",
    options: ["2-Way", "ExStart", "Exchange", "Loading"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "During ExStart, routers determine who will dictate the synchronization process (Master) based on the highest Router ID.",
  },
  {
    id: 34,
    question:
      "Which OSPF state signifies that the routers have fully synchronized their LSDBs and are fully adjacent?",
    options: ["2-Way", "Exchange", "Loading", "Full"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The Full state is the normal, operational state for OSPF routers that are adjacent (like DRs or point-to-point links). Databases are completely synchronized.",
  },
  {
    id: 35,
    question:
      "What is the normal stable state for two DROTHER (non-DR/BDR) routers on the same Ethernet segment?",
    options: ["Init", "2-Way", "ExStart", "Full"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "DROTHERs only form Full adjacencies with the DR and BDR. Between themselves, they stop at the 2-Way state to minimize LSA flooding.",
  },
  {
    id: 36,
    question:
      "What is the default OSPF Hello interval on a broadcast multi-access network (like Ethernet)?",
    options: ["5 seconds", "10 seconds", "30 seconds", "40 seconds"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default Hello interval on an Ethernet broadcast network is 10 seconds.",
  },
  {
    id: 37,
    question: "What is the default OSPF Dead interval on a broadcast network?",
    options: ["10 seconds", "20 seconds", "30 seconds", "40 seconds"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The Dead interval is by default 4 times the Hello interval. 4 * 10 = 40 seconds.",
  },
  {
    id: 38,
    question:
      "Which of the following MUST match for two routers to form an OSPF neighbor adjacency? (Select the most critical)",
    options: [
      "Process ID and Router ID",
      "Hello/Dead Timers and Area ID",
      "Priority and Cost",
      "MAC address and Hostname",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "For OSPF neighbors to form, the Hello/Dead timers, Area ID, Authentication, and Subnet Mask must match. Router IDs MUST be unique.",
  },
  {
    id: 39,
    question:
      "If two connected OSPF routers are stuck in the 'ExStart' or 'Exchange' state, what is the most likely cause?",
    options: [
      "Mismatched Hello timers",
      "Mismatched Area IDs",
      "Mismatched MTU (Maximum Transmission Unit) size on the interfaces",
      "Duplicate Router IDs",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "An MTU mismatch usually allows routers to reach ExStart/Exchange but fails when trying to send large Database Description (DBD) packets, causing them to get stuck.",
  },
  {
    id: 40,
    question:
      "What will happen if two OSPF routers are configured with the exact same Router ID?",
    options: [
      "The router with the highest MAC address changes its ID automatically.",
      "They will form a neighbor adjacency, but routing will be slow.",
      "They will not form a neighbor adjacency and error logs will generate.",
      "OSPF will automatically use the next available IP address.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "OSPF Router IDs must be unique across the entire OSPF domain. If they duplicate, adjacency will fail and LSDB corruption/SPF errors can occur.",
  },
  {
    id: 41,
    question:
      "Which OSPF packet type is used to request specific link-state records during the Loading state?",
    options: [
      "Hello Packet",
      "Database Description (DBD)",
      "Link-State Request (LSR)",
      "Link-State Update (LSU)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "After comparing DBDs, a router sends an LSR to request the full, detailed copies of any LSAs it is missing or has older versions of.",
  },
  {
    id: 42,
    question:
      "Which OSPF packet type actually contains the LSA data sent to neighbors?",
    options: [
      "LSAck",
      "LSU (Link-State Update)",
      "LSR (Link-State Request)",
      "DBD (Database Description)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The LSU (Link-State Update) packet transports one or more LSAs to the neighbor.",
  },
  {
    id: 43,
    question:
      "What command shows the OSPF neighbor states and the interface they are connected to?",
    options: [
      "show ip route ospf",
      "show ip ospf database",
      "show ip ospf neighbor",
      "show ip protocols",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show ip ospf neighbor' provides a table with Neighbor ID, Priority, State (e.g., FULL/BDR), Dead Time, and Local Interface.",
  },
  {
    id: 44,
    question:
      "If a router interface is placed in a 'passive-interface' state, what happens to its OSPF neighbor relationships?",
    options: [
      "They are maintained, but updates are filtered.",
      "They drop, because Hello packets are no longer sent or processed on that interface.",
      "They convert to a 2-Way state.",
      "Nothing, passive-interface only affects EIGRP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Passive-interface stops OSPF Hello packets. Without Hellos, the dead timer expires, and any existing OSPF neighbor adjacencies on that interface are broken.",
  },
  {
    id: 45,
    question:
      "How can you restart the OSPF process on a Cisco router to force a new Router ID or DR election?",
    options: [
      "clear ip route *",
      "reset ospf all",
      "clear ip ospf process",
      "no router ospf 1",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'clear ip ospf process' forces the router to tear down and rebuild its OSPF adjacencies and re-evaluate its Router ID.",
  },

  // --- OSPF DR/BDR Election ---
  {
    id: 46,
    question: "On which type of OSPF network is a DR/BDR election required?",
    options: [
      "Point-to-Point (e.g., serial links)",
      "Broadcast Multi-access (e.g., Ethernet)",
      "Loopback",
      "All of the above",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DR/BDR elections only occur on multi-access networks like Ethernet to reduce the number of adjacencies and LSA flooding.",
  },
  {
    id: 47,
    question: "What is the purpose of the Designated Router (DR)?",
    options: [
      "To act as the default gateway for PCs.",
      "To collect LSAs from all routers on the segment and flood them to the rest of the segment.",
      "To translate OSPF routes to BGP.",
      "To assign IP addresses to new routers.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The DR acts as a central collection and distribution point for LSAs on a multi-access segment, significantly reducing protocol traffic.",
  },
  {
    id: 48,
    question:
      "What is the primary factor used to determine the DR on an OSPF broadcast network?",
    options: [
      "Highest Router ID",
      "Lowest MAC Address",
      "Highest OSPF Interface Priority",
      "Highest Loopback IP",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The router with the highest OSPF Priority on the interface becomes the DR. If priorities are equal (default is 1), the highest Router ID is the tie-breaker.",
  },
  {
    id: 49,
    question: "What is the default OSPF interface priority on Cisco routers?",
    options: ["0", "1", "100", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The default OSPF priority is 1 on all broadcast interfaces.",
  },
  {
    id: 50,
    question: "What happens if an OSPF interface priority is set to 0?",
    options: [
      "It immediately becomes the DR.",
      "It becomes the BDR.",
      "It can never become a DR or BDR (it stays a DROTHER).",
      "The OSPF process shuts down on that interface.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Setting the priority to 0 removes the router from the DR/BDR election entirely. It will only ever be a DROTHER.",
  },
  {
    id: 51,
    question:
      "If a new router with a priority of 255 is added to a segment where a DR (priority 100) already exists, what happens?",
    options: [
      "The new router immediately preempts and becomes the DR.",
      "The new router becomes the BDR and waits for the DR to fail.",
      "Nothing changes. OSPF DR election is non-preemptive.",
      "The network goes down due to priority conflict.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "OSPF DR/BDR roles are non-preemptive. Once a DR is elected, it remains the DR until it goes offline or the OSPF process is reset, regardless of new routers with better priorities.",
  },
  {
    id: 52,
    question:
      "Which command changes the OSPF priority on a GigabitEthernet interface?",
    options: [
      "router ospf priority 100",
      "ip ospf priority 100",
      "ospf priority 100",
      "priority 100",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The interface-level command 'ip ospf priority [0-255]' is used to manually influence the DR/BDR election.",
  },
  {
    id: 53,
    question:
      "In a 'show ip ospf neighbor' output, you see the state 'FULL/BDR'. What does this mean?",
    options: [
      "Your local router is the BDR.",
      "The neighbor router is the BDR.",
      "Both routers are BDRs.",
      "The link is a point-to-point link.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The state shown is the state of the NEIGHBOR. 'FULL/BDR' means you have a full adjacency with this neighbor, and that neighbor holds the BDR role for the segment.",
  },
  {
    id: 54,
    question:
      "How many adjacencies are formed in a broadcast network of 5 routers if there was NO DR/BDR election?",
    options: ["4", "5", "10", "25"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The formula for full mesh adjacencies is n(n-1)/2. For 5 routers: 5(4)/2 = 10 adjacencies. This is why DR/BDR is used to reduce it.",
  },
  {
    id: 55,
    question:
      "When a DROTHER detects a topology change, to which multicast address does it send its LSU?",
    options: [
      "224.0.0.5",
      "224.0.0.6",
      "255.255.255.255",
      "To the specific unicast IP of the DR",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DROTHERs send updates to 224.0.0.6, which only the DR and BDR are listening to.",
  },
  {
    id: 56,
    question:
      "After the DR receives an LSU from a DROTHER, how does it forward that update to the rest of the DROTHERs?",
    options: [
      "It multicasts it to 224.0.0.6.",
      "It multicasts it to 224.0.0.5.",
      "It broadcasts it to 255.255.255.255.",
      "It relies on the BDR to forward it.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The DR floods the updated LSA out to the rest of the network using 224.0.0.5, the 'All OSPF Routers' multicast address.",
  },
  {
    id: 57,
    question:
      "On a point-to-point serial link configured with OSPF, what is the expected neighbor state?",
    options: ["FULL/DR", "FULL/BDR", "FULL/ -", "2-WAY/DROTHER"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Point-to-point networks do not elect a DR/BDR. The output will show 'FULL/ -' indicating full adjacency but no DR/BDR role.",
  },
  {
    id: 58,
    question: "What happens if the DR on a segment fails?",
    options: [
      "All routers immediately elect a new DR based on highest Router ID.",
      "The BDR immediately promotes itself to DR, and a new election is held for the BDR position.",
      "OSPF routing stops until an administrator resets the process.",
      "The DROTHER with the highest priority preempts.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Backup Designated Router (BDR) exists specifically to take over instantly if the DR fails. Then, a new election replaces the missing BDR.",
  },
  {
    id: 59,
    question:
      "What network type does OSPF default to on an Ethernet interface?",
    options: [
      "Point-to-Point",
      "Non-Broadcast Multi-Access (NBMA)",
      "Broadcast",
      "Point-to-Multipoint",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF automatically recognizes Ethernet interfaces as Broadcast networks and expects to run DR/BDR elections.",
  },
  {
    id: 60,
    question:
      "How can you manually force an Ethernet interface to NOT elect a DR/BDR, assuming only two routers are on the link?",
    options: [
      "ip ospf priority 0",
      "ip ospf network point-to-point",
      "passive-interface default",
      "no ip ospf dr-election",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Configuring 'ip ospf network point-to-point' on the interface disables the DR/BDR election and speeds up adjacency, which is best practice for /30 or /31 links between two routers.",
  },

  // --- OSPF Metric, Cost & Path Selection ---
  {
    id: 61,
    question: "What is the formula OSPF uses to calculate interface Cost?",
    options: [
      "Cost = Reference Bandwidth * Interface Bandwidth",
      "Cost = Interface Bandwidth / Reference Bandwidth",
      "Cost = Reference Bandwidth / Interface Bandwidth",
      "Cost = 100,000,000 * Delay",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Cost is calculated as (Reference Bandwidth / Interface Bandwidth). The default reference bandwidth is 10^8 bps (100 Mbps).",
  },
  {
    id: 62,
    question:
      "By default, what is the OSPF cost of a FastEthernet (100 Mbps) interface?",
    options: ["1", "10", "100", "1000"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "100 Mbps (Ref BW) / 100 Mbps (Int BW) = 1. The default cost for FastEthernet is 1.",
  },
  {
    id: 63,
    question:
      "By default, what is the OSPF cost of a GigabitEthernet (1000 Mbps) interface?",
    options: ["0.1", "1", "10", "100"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "100 Mbps / 1000 Mbps = 0.1. However, OSPF cost is an integer and cannot be less than 1. Therefore, it rounds up to 1.",
  },
  {
    id: 64,
    question:
      "Why is it highly recommended to change the 'auto-cost reference-bandwidth' on modern networks?",
    options: [
      "To enable IPv6 routing.",
      "Because the default 100 Mbps reference bandwidth makes FastEthernet, Gigabit, and 10-Gigabit all tie with a cost of 1.",
      "To prevent unauthorized routers from joining.",
      "To force OSPF to use Delay instead of Bandwidth.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because OSPF costs cannot go below 1, 100M, 1G, and 10G links all calculate to 1 by default, meaning OSPF cannot differentiate which is faster. Increasing the reference bandwidth (e.g., to 100000) fixes this.",
  },
  {
    id: 65,
    question:
      "Which command manually sets the cost of an OSPF interface to 50, overriding the automatic calculation?",
    options: ["bandwidth 50", "ospf cost 50", "ip ospf cost 50", "metric 50"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The interface configuration command 'ip ospf cost 50' explicitly sets the metric for that link.",
  },
  {
    id: 66,
    question:
      "How does an OSPF router calculate the total metric to a remote destination?",
    options: [
      "It adds the cost of all incoming interfaces along the path to the destination.",
      "It adds the cost of all outgoing interfaces along the path to the destination.",
      "It takes the highest cost link and uses that as the total.",
      "It multiplies the bandwidth of all links.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A router calculates the total path cost by accumulating the OSPF cost of every outgoing (exit) interface along the path from itself to the destination.",
  },
  {
    id: 67,
    question:
      "If OSPF finds two paths to the exact same destination subnet with the exact same total cost, what will it do by default?",
    options: [
      "Select the path with the highest next-hop IP.",
      "Select the path with the lowest next-hop IP.",
      "Perform Equal Cost Multipath (ECMP) load balancing across both paths.",
      "Drop the route to avoid routing loops.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "OSPF automatically performs load balancing when it finds multiple paths to the same destination with identical metrics.",
  },
  {
    id: 68,
    question:
      "By default, how many equal-cost paths will Cisco OSPF load balance across?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Historically and by default on many IOS versions, OSPF load balances over a maximum of 4 equal-cost paths, though this can be configured higher with the 'maximum-paths' command.",
  },
  {
    id: 69,
    question:
      "In the 'show ip route' output, what does the letter 'O' indicate next to a route?",
    options: [
      "OSPF Inter-Area route (from another area)",
      "OSPF Intra-Area route (within the same area)",
      "OSPF External route (redistributed)",
      "Open route (available to all protocols)",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A plain 'O' means it is an Intra-Area route, meaning the destination network is in the same OSPF area as the local router.",
  },
  {
    id: 70,
    question: "What does the code 'O IA' signify in the routing table?",
    options: [
      "OSPF Internal Autonomous",
      "OSPF Inter-Area route",
      "OSPF Inactive Adjacency",
      "OSPF Internet Address",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'O IA' stands for OSPF Inter-Area. It indicates a route learned from a different OSPF area (via an ABR).",
  },
  {
    id: 71,
    question: "What does 'O E2' mean in the Cisco routing table?",
    options: [
      "OSPF External Type 2 route",
      "OSPF EIGRP Type 2 route",
      "OSPF Error level 2",
      "OSPF Equal 2-path",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "'O E2' indicates an External Type 2 route, which is a route redistributed into OSPF from an outside source (like static or BGP).",
  },
  {
    id: 72,
    question: "What is the difference between an OSPF E1 and E2 route?",
    options: [
      "E1 routes are for IPv4; E2 routes are for IPv6.",
      "E2 metric remains static throughout the OSPF domain; E1 metric adds internal OSPF cost to the external cost.",
      "E1 routes are preferred over Intra-Area routes.",
      "E2 routes are generated by ABRs, E1 by ASBRs.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "External Type 2 (E2 - default) keeps the metric static as it traverses the OSPF domain. External Type 1 (E1) adds the internal link costs to the external metric as it propagates.",
  },
  {
    id: 73,
    question:
      "If a router has an Intra-Area route (O) and an Inter-Area route (O IA) to the exact same subnet, which will it prefer?",
    options: [
      "The Intra-Area route (O)",
      "The Inter-Area route (O IA)",
      "The one with the lowest cost",
      "It will load balance.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "OSPF has an absolute preference hierarchy: 1. Intra-Area (O), 2. Inter-Area (O IA), 3. External Type 1 (E1), 4. External Type 2 (E2). It will choose the (O) route regardless of metric.",
  },
  {
    id: 74,
    question:
      "Which interface command is commonly used to influence OSPF traffic engineering by artificially making a path less desirable?",
    options: [
      "delay 1000",
      "ip ospf priority 0",
      "ip ospf cost 10000",
      "distance 255",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Raising the 'ip ospf cost' manually makes that specific interface path look mathematically 'longer' to the SPF algorithm, diverting traffic to a lower-cost path.",
  },
  {
    id: 75,
    question:
      "What command verifies the reference bandwidth and other global OSPF protocol settings?",
    options: [
      "show ip ospf interface",
      "show ip protocols",
      "show ip route ospf",
      "show ip interface brief",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show ip protocols' displays active routing protocols, their timers, K-values/metrics, reference bandwidths, and networks they are routing for.",
  },

  // --- OSPF Configuration & Verification ---
  {
    id: 76,
    question:
      "Which global configuration command enters the OSPF configuration mode for process 10?",
    options: [
      "ip ospf 10",
      "router ospf 10",
      "ospf process 10",
      "router ospf process 10",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'router ospf [process-id]' enables the OSPF process on the router.",
  },
  {
    id: 77,
    question:
      "What does the command 'network 192.168.10.0 0.0.0.255 area 0' do in OSPF?",
    options: [
      "It creates a static route to 192.168.10.0.",
      "It assigns an IP address to area 0.",
      "It tells OSPF to enable the OSPF process on any interface whose IP address falls within that range and advertise that network.",
      "It blocks traffic from the 192.168.10.0 network.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'network' command in OSPF doesn't generate traffic itself; it acts as a matching tool to find local interfaces to run OSPF on and include in its LSAs.",
  },
  {
    id: 78,
    question:
      "Which is the modern, interface-level alternative to using the 'network' command for enabling OSPF?",
    options: [
      "ospf enable area 0",
      "ip ospf 1 area 0",
      "router ospf enable",
      "network area 0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Instead of typing network commands in router config mode, you can go directly to the interface and type 'ip ospf [process-id] area [area-id]' to enable OSPF explicitly on that interface.",
  },
  {
    id: 79,
    question:
      "Which command injects a static default route (0.0.0.0/0) present in the local routing table into the OSPF domain?",
    options: [
      "default-route originate",
      "redistribute static default",
      "default-information originate",
      "network 0.0.0.0 0.0.0.0 area 0",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'default-information originate' command tells the ASBR to generate a Type 5 LSA advertising a default route to the rest of the OSPF network, provided a default route exists in its routing table.",
  },
  {
    id: 80,
    question:
      "What does adding the 'always' keyword do: 'default-information originate always'?",
    options: [
      "It forces the router to advertise a default route into OSPF EVEN IF it does not actually have a default route in its own routing table.",
      "It makes the default route an E1 route instead of E2.",
      "It prevents the default route from expiring in the LSDB.",
      "It sends the default route to BGP peers as well.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Using the 'always' keyword forces the advertisement of the 0.0.0.0/0 route regardless of whether the router itself actually has a valid default route installed.",
  },
  {
    id: 81,
    question:
      "Which command provides a highly summarized view of which interfaces have OSPF enabled, their state (DR/BDR/Pt2Pt), and area?",
    options: [
      "show ip ospf",
      "show ip ospf interface brief",
      "show ip protocols",
      "show ip ospf database",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip ospf interface brief' is a quick command to verify which interfaces are participating in OSPF, their assigned area, cost, and DR/BDR role.",
  },
  {
    id: 82,
    question:
      "You configure 'passive-interface default' under the OSPF process. How do you allow OSPF to form neighbor relationships on GigabitEthernet0/0?",
    options: [
      "no passive-interface GigabitEthernet0/0",
      "active-interface GigabitEthernet0/0",
      "ip ospf enable GigabitEthernet0/0",
      "You cannot; 'default' affects all interfaces permanently.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "When you use 'passive-interface default' to silence all interfaces (a security best practice), you must explicitly use 'no passive-interface [interface]' to allow OSPF Hellos on your inter-router links.",
  },
  {
    id: 83,
    question:
      "A router has interfaces in Area 0 and Area 1. What type of LSA does it generate to summarize routes from Area 1 into Area 0?",
    options: [
      "Type 1 (Router LSA)",
      "Type 2 (Network LSA)",
      "Type 3 (Summary LSA)",
      "Type 5 (External LSA)",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "An ABR generates Type 3 (Summary) LSAs to advertise prefixes from one area into another area.",
  },
  {
    id: 84,
    question:
      "Which command would you use to verify the OSPF Router ID, OSPF timers, and the number of times the SPF algorithm has been executed?",
    options: [
      "show ip route",
      "show ip ospf",
      "show ip ospf neighbor",
      "show ip ospf border-routers",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show ip ospf' displays global OSPF process information, including the Router ID, SPF execution counts, and timer values.",
  },
  {
    id: 85,
    question:
      "When looking at 'show ip ospf database', what does the 'Link ID' represent for a Type 1 (Router) LSA?",
    options: [
      "The interface IP address.",
      "The Router ID of the router that generated it.",
      "The MAC address of the DR.",
      "The network address.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "For a Type 1 Router LSA, the Link ID column always identifies the OSPF Router ID of the router that originated the LSA.",
  },

  // --- EIGRP, RIP, and Basic BGP Concepts ---
  {
    id: 86,
    question:
      "Which routing protocol uses the DUAL (Diffusing Update Algorithm)?",
    options: ["OSPF", "BGP", "RIPv2", "EIGRP"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Enhanced Interior Gateway Routing Protocol (EIGRP) uses DUAL to calculate the shortest loop-free path and provide rapid convergence.",
  },
  {
    id: 87,
    question: "In EIGRP, what is the 'Feasible Distance' (FD)?",
    options: [
      "The metric reported by the neighbor to reach the destination.",
      "The lowest calculated total metric to reach a destination.",
      "The distance between two autonomous systems.",
      "The hop count to the destination.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Feasible Distance is the local router's total calculated metric to reach a remote network.",
  },
  {
    id: 88,
    question: "In EIGRP, what is a 'Successor'?",
    options: [
      "A backup route that meets the feasibility condition.",
      "The primary route used to forward traffic to a destination.",
      "The router that takes over if the active router fails.",
      "A metric used to calculate delay.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Successor is the best, primary path/next-hop router installed in the routing table to reach a destination.",
  },
  {
    id: 89,
    question:
      "What is the unique capability of EIGRP regarding load balancing?",
    options: [
      "It can load balance over unlimited links.",
      "It supports unequal-cost load balancing.",
      "It requires a central SDN controller to load balance.",
      "It load balances by default without configuration.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Using the 'variance' command, EIGRP can be configured to load balance traffic across multiple paths even if their metrics are unequal.",
  },
  {
    id: 90,
    question:
      "Which multicast address does EIGRP use to send hello packets and routing updates?",
    options: ["224.0.0.5", "224.0.0.6", "224.0.0.9", "224.0.0.10"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "EIGRP uses the multicast IP address 224.0.0.10 for communication between neighbors.",
  },
  {
    id: 91,
    question: "Which of the following is true about RIPv2?",
    options: [
      "It is a link-state protocol.",
      "It does not support VLSM.",
      "It uses hop count as a metric and multicasts updates to 224.0.0.9.",
      "It has an administrative distance of 90.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "RIPv2 is a classless distance-vector protocol that uses hop count (max 15) and multicasts its updates to 224.0.0.9.",
  },
  {
    id: 92,
    question: "What is the primary use case for BGP (Border Gateway Protocol)?",
    options: [
      "Routing traffic rapidly within a local corporate LAN.",
      "Routing traffic between different Autonomous Systems, such as routing the global Internet.",
      "Electing a DR/BDR for switch management.",
      "Replacing STP in Layer 2 networks.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "BGP is an Exterior Gateway Protocol (EGP) designed to exchange routing and reachability information among different Autonomous Systems (AS) on the Internet.",
  },
  {
    id: 93,
    question:
      "Which protocol relies on TCP Port 179 to establish neighbor relationships?",
    options: ["OSPF", "EIGRP", "RIPv2", "BGP"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Unlike OSPF/EIGRP which run directly over IP, BGP uses TCP port 179 for reliable delivery of its routing updates.",
  },
  {
    id: 94,
    question: "What type of routing protocol is BGP?",
    options: ["Link-State", "Distance Vector", "Path Vector", "Hybrid"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "BGP is a Path Vector protocol. It makes routing decisions based on the path (the list of Autonomous Systems a route traverses) rather than a simple metric like cost or hop count.",
  },
  {
    id: 95,
    question: "What is the Administrative Distance of eBGP (External BGP)?",
    options: ["20", "90", "110", "200"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "External BGP (eBGP) has a highly trusted Administrative Distance of 20. Internal BGP (iBGP) has an AD of 200.",
  },
  {
    id: 96,
    question:
      "If a router has an EIGRP route (AD 90) and an OSPF route (AD 110) to 10.0.0.0/8, but an eBGP route (AD 20) to 10.0.0.0/16, which route will it use for traffic to 10.0.0.5?",
    options: [
      "The eBGP route because of Administrative Distance.",
      "The eBGP route because of Longest Prefix Match.",
      "The EIGRP route because it is an IGP.",
      "The OSPF route.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The router always uses the Longest Prefix Match (/16 is more specific than /8). The AD is irrelevant because the subnet masks are different.",
  },
  {
    id: 97,
    question:
      "What does the BGP command 'neighbor 192.168.1.2 remote-as 65000' accomplish?",
    options: [
      "It specifies the local AS number.",
      "It defines a BGP neighbor and explicitly states the neighbor's Autonomous System number.",
      "It creates a static route to the neighbor.",
      "It filters routes from AS 65000.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In BGP, neighbors are not discovered automatically via multicast. They must be manually configured using the 'neighbor [ip] remote-as [AS-number]' command.",
  },
  {
    id: 98,
    question:
      "Which feature allows a router to have a backup static route that only enters the routing table if the primary dynamic routing protocol fails?",
    options: [
      "Route Poisoning",
      "Floating Static Route",
      "Default-information originate",
      "Split Horizon",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A floating static route is created by assigning it an Administrative Distance higher than the dynamic protocol (e.g., 'ip route 0.0.0.0 0.0.0.0 10.1.1.1 115' to back up OSPF).",
  },
  {
    id: 99,
    question:
      "In the context of the CCNA, which dynamic routing protocol is recommended for an enterprise network due to its fast convergence, scalability, and vendor neutrality?",
    options: ["RIPv2", "EIGRP", "OSPF", "BGP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF is the open-standard, highly scalable, link-state protocol most universally recommended and heavily tested in the current CCNA track.",
  },
  {
    id: 100,
    question:
      "A router receives a routing update containing a route to 172.16.5.0/24 with a metric of 2 from a neighbor. What routing protocol is likely being used?",
    options: ["OSPF", "EIGRP", "RIP", "BGP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A metric of '2' indicates a hop count, which is characteristic of RIP. OSPF metrics are usually much higher (based on bandwidth), and EIGRP metrics are complex, large numbers.",
  },
];
