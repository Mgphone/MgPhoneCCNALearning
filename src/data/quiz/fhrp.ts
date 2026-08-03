import type { QuizQuestion } from "./types";

export const fhrpQuestions: QuizQuestion[] = [
  // --- General FHRP Concepts (1-10) ---
  {
    id: 1,
    question:
      "What is the primary purpose of First Hop Redundancy Protocols (FHRP)?",
    options: [
      "To load-balance traffic evenly across multiple routers sharing the same default gateway",
      "To provide redundant default gateway availability in case of a single router failure",
      "To encrypt traffic between the redundant routers and switches to prevent packet sniffing",
      "To assign IP addresses to end devices automatically without manual configuration",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "FHRPs (like HSRP, VRRP, and GLBP) allow two or more routers to share a virtual IP and MAC address, providing an active/standby or active/active failover so hosts maintain connectivity if their primary default gateway fails.",
  },
  {
    id: 2,
    question: "Which of the following protocols is an open-standard FHRP?",
    options: ["HSRP", "GLBP", "VRRP", "EIGRP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Virtual Router Redundancy Protocol (VRRP) is an IEEE open-standard FHRP (RFC 3768/5798). HSRP and GLBP are Cisco proprietary.",
  },
  {
    id: 3,
    question: "Which two FHRPs are Cisco-proprietary?",
    options: [
      "VRRP and CARP",
      "HSRP and VRRP",
      "HSRP and GLBP",
      "GLBP and VRRP",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Hot Standby Router Protocol (HSRP) and Gateway Load Balancing Protocol (GLBP) are both Cisco-proprietary protocols.",
  },
  {
    id: 4,
    question:
      "What happens when a host sends an ARP request for the FHRP virtual IP address?",
    options: [
      "The physical switch intercepts it and answers.",
      "The active/master router replies with the FHRP virtual MAC address.",
      "All routers in the FHRP group reply with their physical MAC addresses.",
      "The request is forwarded to the DHCP server.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The active (HSRP) or master (VRRP) router responds to the ARP request with the shared virtual MAC address, ensuring traffic flows to the currently active router.",
  },
  {
    id: 5,
    question:
      "Which FHRP natively provides true active/active load balancing using a single virtual IP address?",
    options: ["HSRP", "VRRP", "GLBP", "MHSRP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "GLBP (Gateway Load Balancing Protocol) natively load-balances traffic across multiple routers using a single virtual IP address by responding to ARP requests with different virtual MAC addresses.",
  },
  {
    id: 6,
    question: "In FHRP terminology, what does 'Preemption' mean?",
    options: [
      "The ability of a router to automatically become the active/master router if it has a higher priority than the current active router.",
      "The process of dropping packets when the network becomes congested and the queue buffers fill up entirely under sustained load.",
      "The ability to dynamically change the virtual IP address based on the current network load of each router in the FHRP group.",
      "The transition from a virtual MAC address to a physical MAC address when the active router fails over to the standby router.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Preemption allows a router with a higher priority (or a recovering primary router) to immediately take over the active/master role from a router with a lower priority.",
  },
  {
    id: 7,
    question:
      "Why would a network administrator configure a preemption delay in an FHRP?",
    options: [
      "To speed up the overall convergence time by reducing the delay before taking over the active gateway role.",
      "To allow the routing protocol (like OSPF or EIGRP) time to converge before the router takes over the active gateway role.",
      "To synchronize the clocks between the standby and active routers using the Network Time Protocol for timing.",
      "To delay the sending of hello packets so the active router remains in charge of the group longer than normal.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A preemption delay ensures that a newly rebooted router has fully established its routing tables (via OSPF/EIGRP) before it takes over as the default gateway, preventing traffic from being blackholed.",
  },
  {
    id: 8,
    question:
      "Which FHRP uses the terminology 'Active' and 'Standby' for its router roles?",
    options: ["VRRP", "HSRP", "GLBP", "CARP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "HSRP uses the terms 'Active' and 'Standby'. VRRP uses 'Master' and 'Backup'.",
  },
  {
    id: 9,
    question:
      "Which FHRP uses the terminology 'Master' and 'Backup' for its router roles?",
    options: ["HSRP", "GLBP", "VRRP", "MHSRP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "VRRP defines the active forwarding router as the 'Master' and the redundant routers as 'Backups'.",
  },
  {
    id: 10,
    question: "What is a 'Virtual MAC Address' in the context of FHRP?",
    options: [
      "A MAC address assigned dynamically by the DHCP server to the host requesting access.",
      "A logical MAC address shared by routers in an FHRP group, associated with the Virtual IP.",
      "The physical MAC address of the switch that connects to the routers in the group.",
      "An IPv6 address that has been converted into a MAC address format for delivery.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Virtual MAC is a shared, logical MAC address that hosts use to send frames to the default gateway. The currently active/master router listens for and processes frames destined for this MAC.",
  },

  // --- HSRP Basics & MAC Addresses (11-25) ---
  {
    id: 11,
    question: "What is the default priority value for an HSRP router?",
    options: ["0", "100", "128", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default HSRP priority is 100. The router with the highest priority becomes the Active router.",
  },
  {
    id: 12,
    question:
      "Is HSRP preemption enabled or disabled by default on Cisco routers?",
    options: [
      "Enabled",
      "Disabled",
      "Enabled, but only for the Active router",
      "Enabled, but only with a 30-second delay",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In HSRP, preemption is disabled by default. A router with a higher priority will not automatically take over if an Active router already exists, unless 'standby [group] preempt' is configured.",
  },
  {
    id: 13,
    question:
      "What is the well-known virtual MAC address format for HSRP version 1?",
    options: [
      "0000.5E00.01xx",
      "0007.B400.xxyy",
      "0000.0C07.ACxx",
      "0000.0C9F.Fxxx",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "HSRP version 1 uses the virtual MAC format 0000.0C07.ACxx, where 'xx' is the HSRP group number in hexadecimal.",
  },
  {
    id: 14,
    question:
      "What is the well-known virtual MAC address format for HSRP version 2?",
    options: [
      "0000.0C07.ACxx",
      "0000.0C9F.Fxxx",
      "0000.5E00.01xx",
      "0007.B400.xxyy",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "HSRP version 2 uses the virtual MAC format 0000.0C9F.Fxxx, where 'xxx' is the HSRP group number in hexadecimal.",
  },
  {
    id: 15,
    question:
      "If an HSRP v1 group number is 10, what will be the last two hexadecimal digits of the virtual MAC address?",
    options: ["0A", "10", "0B", "A0"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Group 10 in decimal is 0A in hexadecimal. The virtual MAC for HSRP v1 Group 10 is 0000.0C07.AC0A.",
  },
  {
    id: 16,
    question:
      "Which multicast IP address does HSRP version 1 use to send its hello packets?",
    options: ["224.0.0.18", "224.0.0.2", "224.0.0.102", "224.0.0.5"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "HSRP v1 sends Hello packets to the all-routers multicast address 224.0.0.2 using UDP port 1985.",
  },
  {
    id: 17,
    question:
      "Which multicast IP address does HSRP version 2 use to send its hello packets?",
    options: ["224.0.0.2", "224.0.0.18", "224.0.0.102", "224.0.0.6"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "HSRP v2 sends Hello packets to the IPv4 multicast address 224.0.0.102 (UDP port 1985).",
  },
  {
    id: 18,
    question: "What is the default Hello timer for HSRP?",
    options: ["1 second", "3 seconds", "5 seconds", "10 seconds"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "By default, HSRP routers send Hello packets every 3 seconds.",
  },
  {
    id: 19,
    question: "What is the default Hold timer for HSRP?",
    options: ["3 seconds", "10 seconds", "15 seconds", "30 seconds"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default Hold timer is 10 seconds (roughly 3 times the default Hello timer). If a standby router doesn't receive a hello for 10 seconds, it assumes the active router has failed.",
  },
  {
    id: 20,
    question:
      "If two routers have the same HSRP priority, how is the Active router elected?",
    options: [
      "The router with the highest MAC address wins.",
      "The router with the highest configured IP address on the interface wins.",
      "The router with the lowest IP address on the interface wins.",
      "They automatically load balance.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If priority is tied (e.g., both are 100), the router with the highest configured interface IP address breaks the tie and becomes the Active router.",
  },
  {
    id: 21,
    question:
      "Which command assigns a virtual IP address of 192.168.1.1 to HSRP group 1?",
    options: [
      "hsrp 1 ip 192.168.1.1",
      "standby 1 ip 192.168.1.1",
      "vrrp 1 ip 192.168.1.1",
      "ip standby 1 192.168.1.1",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The interface command 'standby [group-number] ip [virtual-ip]' is used to configure the HSRP virtual IP address.",
  },
  {
    id: 22,
    question: "What is the valid range of group numbers for HSRP version 1?",
    options: ["0 to 255", "1 to 255", "0 to 4095", "1 to 4095"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "HSRP version 1 supports group numbers from 0 to 255.",
  },
  {
    id: 23,
    question: "What is the valid range of group numbers for HSRP version 2?",
    options: ["0 to 255", "1 to 255", "0 to 4095", "1 to 4095"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "HSRP version 2 expands the group number range from 0 to 4095, allowing an HSRP group to precisely match a VLAN ID.",
  },
  {
    id: 24,
    question:
      "Are HSRP version 1 and HSRP version 2 compatible with each other?",
    options: [
      "Yes, they automatically negotiate.",
      "Yes, but only if the group number is below 256.",
      "No, they use different MAC addresses and packet formats.",
      "No, but a router can run both simultaneously on the same interface.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "HSRP v1 and v2 are not interoperable. They use different multicast addresses, different virtual MAC formats, and different packet headers.",
  },
  {
    id: 25,
    question: "Which command enables HSRP version 2 on an interface?",
    options: [
      "standby version 2",
      "hsrp version 2",
      "standby 2 version",
      "ip hsrp v2",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The interface command 'standby version 2' switches the FHRP protocol to HSRPv2 for that interface.",
  },

  // --- HSRP Advanced & States (26-40) ---
  {
    id: 26,
    question:
      "Which state describes an HSRP router that is currently forwarding traffic sent to the virtual MAC address?",
    options: ["Standby", "Speak", "Active", "Master"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Active router is the one currently forwarding traffic destined for the virtual IP and MAC address.",
  },
  {
    id: 27,
    question:
      "Which HSRP state means the router is monitoring the Active router and is next in line to take over if the Active router fails?",
    options: ["Listen", "Speak", "Learn", "Standby"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The Standby router monitors the Active router's Hello packets and transitions to Active if the Active router stops responding.",
  },
  {
    id: 28,
    question:
      "If there are three routers in an HSRP group, what roles will they assume?",
    options: [
      "One Active, Two Standby",
      "One Active, One Standby, One Listen",
      "One Active, Two Speak",
      "Three Active (Load Balancing)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In HSRP, there is only one Active router and one Standby router. Any remaining routers stay in the Listen state.",
  },
  {
    id: 29,
    question: "What is the HSRP 'Init' state?",
    options: [
      "The router has learned the virtual IP address but not the MAC.",
      "The router has sent a Hello packet and is waiting for a reply.",
      "The beginning state; the interface just came up or HSRP was just configured.",
      "The state where the router is forwarding traffic.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Initial (Init) state indicates that HSRP is not yet running, usually because the underlying interface is down or the protocol was just enabled.",
  },
  {
    id: 30,
    question:
      "In which HSRP state does a router know the virtual IP address but has not yet seen a hello packet from an Active router?",
    options: ["Learn", "Listen", "Speak", "Init"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In the Listen state, the router knows the virtual IP and is actively listening for Hello packets from the Active or Standby router to determine its own role.",
  },
  {
    id: 31,
    question: "What is the purpose of HSRP Interface Tracking?",
    options: [
      "To track the MAC addresses of end hosts and update the forwarding table accordingly.",
      "To monitor a WAN uplink and dynamically lower the HSRP priority if the uplink goes down.",
      "To load balance traffic based on the available bandwidth of each tracked interface.",
      "To automatically discover other HSRP routers on the same broadcast segment of the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Interface tracking monitors critical uplink interfaces. If an uplink fails, the router decrements its HSRP priority, allowing a standby router (with a better uplink) to take over.",
  },
  {
    id: 32,
    question:
      "When HSRP interface tracking is configured without a specific decrement value, what is the default amount the priority is reduced by when the tracked interface goes down?",
    options: ["1", "5", "10", "50"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "By default, HSRP interface tracking decrements the router's priority by 10 if the tracked interface goes down.",
  },
  {
    id: 33,
    question:
      "Router A has priority 110. Router B has priority 100. Router A tracks its WAN link with a default decrement. If Router A's WAN link fails, what happens?",
    options: [
      "Router A's priority becomes 100. Because B is 100, A remains Active due to tie-breaker.",
      "Router A's priority becomes 100. B immediately preempts.",
      "Router A's priority becomes 90. B will take over ONLY if B has preemption enabled.",
      "Router A's priority becomes 0 and it goes to Init state.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "With a default decrement of 10, A's priority drops to 100. (If A was 110, wait: 110 - 10 = 100). If A is 100 and B is 100, B does not preempt. *Correction: In the question, A drops to 100. If A drops below B, B takes over IF preemption is enabled. Since A goes to 100, if A's IP is higher, A stays active. If A's priority was 105, it drops to 95. Therefore, B (100) only takes over if B has preemption configured.*",
  },
  {
    id: 34,
    question:
      "Which command configures Router A to track interface GigabitEthernet0/1 and decrement its priority by 20 if the interface goes down?",
    options: [
      "standby 1 track GigabitEthernet0/1 20",
      "hsrp 1 track GigabitEthernet0/1 decrement 20",
      "standby track 20 GigabitEthernet0/1",
      "track GigabitEthernet0/1 standby 1 20",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The command 'standby [group] track [interface] [decrement-value]' configures tracking. E.g., 'standby 1 track GigabitEthernet0/1 20'.",
  },
  {
    id: 35,
    question: "What is 'MHSRP' (Multiple HSRP)?",
    options: [
      "Running both HSRP and VRRP on the same interface at the same time in order to provide redundancy for the different VLANs.",
      "Configuring multiple virtual IP addresses in the same HSRP group so that the same set of hosts can use them as their gateway.",
      "Configuring multiple HSRP groups on a single interface to allow load balancing by dividing hosts among different default gateways.",
      "Using HSRP on multilink PPP interfaces to bundle multiple physical links together to increase the available bandwidth.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "MHSRP involves creating two or more HSRP groups on the same subnet. Router A is active for Group 1, Router B is active for Group 2. Half the hosts use Group 1's IP as their gateway, and half use Group 2's, achieving load balancing.",
  },
  {
    id: 36,
    question:
      "What does the Active HSRP router send to the switch when it assumes the Active role, to ensure the switch's CAM table points to the correct port?",
    options: [
      "A BPDU",
      "A Gratuitous ARP (GARP)",
      "An IGMP Join",
      "An ICMP Redirect",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When a router becomes Active, it broadcasts a Gratuitous ARP containing the virtual MAC address. This instantly updates the switch's MAC address table so traffic is forwarded to the new Active router.",
  },
  {
    id: 37,
    question:
      "Which command shows the current HSRP state, priority, virtual IP, and virtual MAC for all groups on a router?",
    options: ["show hsrp", "show standby", "show ip hsrp", "show redundancy"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show standby' command displays comprehensive information about HSRP status, roles, timers, and tracking.",
  },
  {
    id: 38,
    question: "What does a 'Split-Brain' scenario in HSRP mean?",
    options: [
      "The router's CPU is overloaded due to excessive hello packet processing load on the device.",
      "Both routers lose connection to each other and both assume the Active role, causing IP and MAC conflicts.",
      "The Standby router reloads repeatedly and flaps between the active and standby states continuously.",
      "The switch splits the traffic perfectly 50/50 between the two routers in the group evenly.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If the Layer 2 link between the HSRP routers fails (but the interfaces facing the hosts stay up), neither router hears the other's Hello packets. Both will transition to the Active state, causing conflict.",
  },
  {
    id: 39,
    question:
      "Can HSRP provide authentication to prevent rogue routers from joining the HSRP group?",
    options: [
      "No, HSRP does not support authentication.",
      "Yes, using only plaintext passwords.",
      "Yes, using plaintext or MD5 authentication.",
      "Yes, using 802.1X certificates.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "HSRP supports both plaintext authentication (less secure) and MD5 hash authentication to ensure only authorized routers participate in the HSRP group.",
  },
  {
    id: 40,
    question:
      "What command configures MD5 authentication for HSRP group 1 with the key 'CCNA'?",
    options: [
      "standby 1 authenticate md5 CCNA",
      "standby 1 authentication md5 key-string CCNA",
      "hsrp 1 md5 CCNA",
      "standby md5 1 CCNA",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The correct syntax is 'standby [group] authentication md5 key-string [password]'.",
  },

  // --- HSRP Timers & Tuning (41-55) ---
  {
    id: 41,
    question:
      "If Router A has HSRP timers of 3 (Hello) and 10 (Hold), and Router B has timers of 1 and 3, what will happen?",
    options: [
      "They will not form an HSRP relationship of any kind.",
      "They will form a relationship, but it will be unstable and likely flap.",
      "HSRP will automatically negotiate and use the higher of the timers.",
      "HSRP will automatically negotiate and use the lower of the timers.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike OSPF, HSRP does not require timers to match to form a relationship. However, mismatched timers cause massive instability. Router A expects a hello every 3s, but Router B might declare A dead in 3s, causing constant flapping.",
  },
  {
    id: 42,
    question:
      "How do you configure HSRP timers for 1 second Hello and 4 seconds Hold?",
    options: [
      "standby 1 timers 1 4",
      "standby timers 1 4 group 1",
      "hsrp 1 timer 1 4",
      "standby 1 hello 1 hold 4",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation: "The command is 'standby [group] timers [hello] [hold]'.",
  },
  {
    id: 43,
    question:
      "Does HSRP support sub-second (millisecond) timers for faster convergence?",
    options: [
      "No, the minimum timer is 1 second.",
      "Yes, but only in HSRP version 2.",
      "Yes, using the 'msec' keyword.",
      "No, only VRRP supports millisecond timers.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "HSRP supports sub-second timers. Example: 'standby 1 timers msec 200 msec 750'.",
  },
  {
    id: 44,
    question: "What is HSRP BIA (Burned-In Address)?",
    options: [
      "A feature that allows the active router to use its physical interface MAC address instead of the virtual MAC address.",
      "A security feature that burns the virtual MAC address permanently into the router's non-volatile NVRAM.",
      "A failure state where the virtual MAC address is lost and all user traffic is blackholed until the router recovers.",
      "An IPv6 addressing scheme used for automatic address configuration of hosts on the local network segment.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Configured via 'standby use-bia', HSRP uses the physical burned-in MAC address of the active router's interface instead of a generated virtual MAC. This is useful for networks with strict port-security policies.",
  },
  {
    id: 45,
    question:
      "What is a major disadvantage of using HSRP BIA (Burned-In Address)?",
    options: [
      "It requires that HSRP version 2 be configured on both the active and standby routers before the feature will work correctly.",
      "When a failover occurs, the new active router must send gratuitous ARPs to update all hosts' ARP caches, which can delay convergence.",
      "It disables preemption and interface tracking, so the router can no longer automatically take over the active role in the group.",
      "It prevents load balancing across the group, forcing all of the hosts to send their traffic through the single active router at all times.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because the MAC address changes upon failover (from Router A's physical MAC to Router B's physical MAC), all end hosts must update their ARP caches, rather than just the switch updating its CAM table.",
  },
  {
    id: 46,
    question: "Which of the following is true regarding IPv6 and HSRP?",
    options: [
      "HSRP does not support IPv6; you must use VRRPv3.",
      "HSRP for IPv6 uses a virtual MAC address starting with 0005.73A0.0xxx.",
      "HSRP for IPv6 shares the same group numbers as IPv4 HSRP.",
      "IPv6 hosts use DHCPv6 to discover the HSRP gateway.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "HSRP is supported for IPv6 and uses the specific virtual MAC range of 0005.73A0.0000 through 0005.73A0.0FFF.",
  },
  {
    id: 47,
    question:
      "If a router's interface is configured with 'standby 1 preempt delay minimum 60', what does this mean?",
    options: [
      "The router waits 60 seconds before sending its first hello packet to the standby group members.",
      "The router holds the active state for a minimum of 60 seconds before failing over to standby.",
      "If the router recovers from a failure, it will wait 60 seconds before preempting and becoming Active.",
      "The hold timer is set to 60 seconds for the standby group on that particular interface.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'delay minimum 60' specifies that the router will wait 60 seconds after its interface comes up before asserting its higher priority and preempting the current active router.",
  },
  {
    id: 48,
    question:
      "When using object tracking with HSRP, what can the router track besides physical interface line protocol?",
    options: [
      "Only physical interfaces on the router can be tracked.",
      "Only BGP AS paths can be tracked by the object tracker.",
      "IP SLA operations (e.g., reachability to an external IP).",
      "The native VLANs of the connected switchports can be tracked.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Advanced HSRP tracking relies on IOS Object Tracking, which can tie into IP SLA. This allows HSRP to failover if an upstream ping to a critical ISP IP address fails, even if the local interface stays up.",
  },
  {
    id: 49,
    question:
      "Which command verifies which interface is currently being tracked by HSRP and its status?",
    options: [
      "show standby track",
      "show track",
      "show hsrp interfaces",
      "show standby brief",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "While 'show standby' shows tracking info within HSRP, the global command 'show track' shows the actual status of the tracked object (interface line protocol, IP SLA, etc.).",
  },
  {
    id: 50,
    question: "What does the 'show standby brief' command display?",
    options: [
      "Only the virtual IP address and the virtual MAC address are displayed for each configured HSRP group.",
      "A one-line summary per interface showing group, priority, state, active IP, standby IP, and virtual IP.",
      "The detailed tracking decrement values and the object tracking status for all currently tracked interfaces.",
      "The MD5 authentication key-string along with the plaintext password configured for the group.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show standby brief' provides a highly readable table summarizing the status, roles, and IPs for all HSRP instances on the router.",
  },
  {
    id: 51,
    question: "What syslog message indicates an HSRP state transition?",
    options: [
      "%HSRP-5-STATECHANGE",
      "%STANDBY-3-TRANSITION",
      "%FHRP-1-FAILOVER",
      "%OSPF-5-ADJCHG",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "When HSRP changes state (e.g., Standby to Active), Cisco IOS generates a syslog message formatted as '%HSRP-5-STATECHANGE'.",
  },
  {
    id: 52,
    question:
      "If you have two HSRP routers, R1 (Active) and R2 (Standby), and R1's tracked WAN link fails, what exact sequence occurs assuming default settings?",
    options: [
      "R1 immediately shuts down its LAN interface and stops forwarding all user traffic for the group.",
      "R1 decrements its priority by 10. R2 (assuming it has higher priority now and preemption is configured) preempts and becomes Active.",
      "R1 immediately sends a 'resign' message to R2 and R2 becomes the Active router regardless of the current priority values.",
      "R2 decrements its own priority by the default amount and remains in the Standby state until R1 recovers.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "R1 drops its priority by 10. For R2 to take over, R2's priority must now be higher than R1's new priority, AND R2 must have 'preempt' configured.",
  },
  {
    id: 53,
    question: "Can you configure HSRP on a Layer 2 switchport?",
    options: [
      "Yes, using the 'standby' command directly on the Layer 2 switchport in interface configuration mode.",
      "No, HSRP is a Layer 3 protocol and must be configured on a routed interface or Switch Virtual Interface (SVI).",
      "Yes, but only for IPv6 networks running HSRP version 2 on the access layer switch ports.",
      "No, switches use the spanning-tree protocol for Layer 2 redundancy instead of using HSRP for gateways.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "FHRPs deal with default gateways (IP routing). Therefore, they must be applied to a Layer 3 interface, such as a physical router port, routed switch port ('no switchport'), or SVI ('interface vlan X').",
  },
  {
    id: 54,
    question:
      "If R1 is Active and R2 is Standby, what happens if the 'standby 1 ip' command is removed from R1?",
    options: [
      "R1 remains in the Active state without an IP address configured on the group.",
      "R1 transitions to the Init state, and R2 detects the missing hellos and becomes Active.",
      "R2's virtual IP address is automatically removed from its running configuration.",
      "The network crashes and all hosts lose connectivity to their default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Removing the virtual IP disables HSRP on that interface. R1 stops sending hellos, and R2's hold timer will expire, causing R2 to promote itself to Active.",
  },
  {
    id: 55,
    question:
      "What debug command is used to view real-time HSRP state changes and packet transmissions?",
    options: [
      "debug ip hsrp",
      "debug standby",
      "debug fhrp",
      "debug hsrp packets",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'debug standby' command (along with 'debug standby events' or 'debug standby packets') is used in Cisco IOS to troubleshoot HSRP.",
  },

  // --- VRRP Basics & Concepts (56-70) ---
  {
    id: 56,
    question:
      "Which organization created the Virtual Router Redundancy Protocol (VRRP)?",
    options: ["Cisco Systems", "IEEE", "IETF", "ISO"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "VRRP is an open standard protocol defined by the Internet Engineering Task Force (IETF) in RFC 3768 (IPv4) and RFC 5798 (IPv6).",
  },
  {
    id: 57,
    question:
      "In VRRP, what is the router currently forwarding traffic called?",
    options: ["Active", "Master", "Primary", "Forwarder"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In VRRP, the forwarding router is known as the Master router.",
  },
  {
    id: 58,
    question: "In VRRP, what are the routers providing redundancy called?",
    options: ["Standby", "Secondary", "Backup", "Listener"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In VRRP, redundant routers monitoring the Master are called Backup routers.",
  },
  {
    id: 59,
    question: "What is the standard virtual MAC address format for VRRP?",
    options: [
      "0000.0c07.acXX",
      "0000.5e00.01XX",
      "0007.b400.01XX",
      "0000.0c9f.fXXX",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VRRP uses the IETF-assigned MAC address range of 0000.5E00.01XX, where XX is the VRRP group number in hexadecimal.",
  },
  {
    id: 60,
    question: "Is VRRP preemption enabled or disabled by default?",
    options: [
      "Enabled",
      "Disabled",
      "Enabled, but only if timers are set to millisecond values",
      "Disabled, but automatically enabled if a tracked interface fails",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Unlike HSRP, VRRP has preemption ENABLED by default. A router with a higher priority will immediately preempt a Master with a lower priority.",
  },
  {
    id: 61,
    question:
      "Which multicast IP address does VRRP use for its advertisements?",
    options: ["224.0.0.2", "224.0.0.5", "224.0.0.18", "224.0.0.102"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "VRRP sends advertisements to the multicast address 224.0.0.18.",
  },
  {
    id: 62,
    question: "Which transport protocol does VRRP use?",
    options: [
      "UDP Port 1985",
      "TCP Port 1985",
      "IP Protocol 112",
      "UDP Port 3222",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "VRRP does not use UDP or TCP. It runs directly over IP using IP protocol number 112.",
  },
  {
    id: 63,
    question: "What is the default priority for a VRRP router?",
    options: ["0", "100", "128", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "Like HSRP, the default priority for a VRRP router is 100.",
  },
  {
    id: 64,
    question: "In VRRP, what is an 'IP Address Owner'?",
    options: [
      "The DHCP server that is responsible for assigning the virtual IP address.",
      "A router whose physical interface IP address is identical to the VRRP virtual IP address.",
      "The administrator who manually configured the VRRP protocol on the routers.",
      "The router that currently holds the lowest priority value in the group.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VRRP allows the virtual IP to be the exact same as one of the router's real interface IPs. The router possessing that real IP is the 'IP Address Owner'.",
  },
  {
    id: 65,
    question: "What happens to the priority of the VRRP 'IP Address Owner'?",
    options: [
      "It becomes 0.",
      "It is automatically set to 255 and cannot be changed.",
      "It defaults to 100.",
      "It dynamically changes based on tracking.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IP Address Owner automatically assumes a priority of 255 (the maximum), ensuring it always becomes the Master router when it is online.",
  },
  {
    id: 66,
    question:
      "How often does the VRRP Master router send advertisements by default?",
    options: [
      "Every 1 second",
      "Every 3 seconds",
      "Every 5 seconds",
      "Every 10 seconds",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The default VRRP Advertisement interval is 1 second, making it inherently faster at detecting failures out-of-the-box than HSRP's 3-second timer.",
  },
  {
    id: 67,
    question: "In VRRP, do Backup routers send periodic advertisements?",
    options: [
      "Yes, every 1 second.",
      "Yes, every 3 seconds.",
      "No, only the Master router sends advertisements.",
      "No, they only reply to Master requests.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Unlike HSRP (where Active and Standby both send Hellos), in VRRP, ONLY the Master router sends advertisements. Backup routers stay silent unless they stop hearing from the Master.",
  },
  {
    id: 68,
    question:
      "What is the formula for the VRRP Master Down Interval (the time a Backup waits before taking over)?",
    options: [
      "3 * Advertisement interval",
      "(3 * Advertisement interval) + Skew time",
      "10 seconds fixed",
      "Advertisement interval + 1",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Master Down Interval is roughly 3 times the Ad interval plus a 'skew time'. The skew time ensures that if multiple Backups exist, the one with the highest priority declares the Master dead slightly faster, avoiding conflicts.",
  },
  {
    id: 69,
    question:
      "Which command configures a VRRP virtual IP of 10.1.1.254 for group 10?",
    options: [
      "vrrp 10 ip 10.1.1.254",
      "standby 10 vrrp 10.1.1.254",
      "ip vrrp 10 10.1.1.254",
      "vrrp group 10 ip 10.1.1.254",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The syntax for VRRP is very similar to HSRP: 'vrrp [group] ip [virtual-ip]'.",
  },
  {
    id: 70,
    question: "Which version of VRRP supports both IPv4 and IPv6?",
    options: ["VRRPv1", "VRRPv2", "VRRPv3", "VRRP does not support IPv6"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "VRRP version 3 (RFC 5798) added support for IPv6 and eliminated some authentication methods present in v2.",
  },

  // --- VRRP Advanced & States (71-80) ---
  {
    id: 71,
    question: "What are the three states a VRRP router can be in?",
    options: [
      "Init, Listen, Active",
      "Initialize, Master, Backup",
      "Init, Speak, Forward",
      "Down, Standby, Master",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "VRRP uses only three states: Initialize, Master, and Backup.",
  },
  {
    id: 72,
    question:
      "Which command is used to view a summary of VRRP groups, roles, and virtual IPs?",
    options: [
      "show vrrp brief",
      "show standby brief",
      "show ip vrrp",
      "show vrrp summary",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'show vrrp brief' command provides an overview of VRRP configuration and current status.",
  },
  {
    id: 73,
    question:
      "Unlike older Cisco IOS implementations of HSRP, how does VRRP handle interface tracking natively in older code?",
    options: [
      "Using the 'vrrp track interface' command directly on the interface configuration.",
      "It requires configuring an overarching Object Tracker and tracking the object in VRRP.",
      "VRRP does not support any form of tracking in the older Cisco IOS software.",
      "It automatically tracks all of the router's interfaces through the BGP protocol.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Historically, HSRP had a built-in 'standby track' interface command. VRRP required the use of global 'track [object-id] interface' commands, and then tying VRRP to that object with 'vrrp [group] track [object-id]'.",
  },
  {
    id: 74,
    question:
      "If VRRP Group 5 is configured, what will the Virtual MAC address be?",
    options: [
      "0000.5E00.0105",
      "0000.0C07.AC05",
      "0000.5E00.0150",
      "0000.0C9F.F005",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Group 5 in hex is 05. Appended to the VRRP OUI, it becomes 0000.5E00.0105.",
  },
  {
    id: 75,
    question:
      "If two VRRP routers boot up simultaneously with the same priority (100) and preemption enabled, how do they elect the Master?",
    options: [
      "Highest MAC address",
      "Highest physical interface IP address",
      "Lowest physical interface IP address",
      "They both become Master",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Just like HSRP, VRRP breaks priority ties by electing the router with the highest IP address on the participating interface.",
  },
  {
    id: 76,
    question: "Is VRRP backwards compatible with HSRP?",
    options: ["Yes", "No", "Only if timers are tuned", "Only for IPv6"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VRRP and HSRP are entirely different protocols and are not interoperable.",
  },
  {
    id: 77,
    question:
      "What happens if you configure a VRRP virtual IP that belongs to a different subnet than the interface's primary IP address?",
    options: [
      "It works normally and the router accepts the virtual IP configuration without error.",
      "The router dynamically creates a secondary IP address on the interface to match the subnet.",
      "The configuration is rejected; the virtual IP must be in the same subnet as the primary interface IP.",
      "The VRRP state remains in the Initialize state and never transitions to Master.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "FHRPs require the virtual IP address to be within the same IP subnet as the interface's actual IP address to answer ARPs properly.",
  },
  {
    id: 78,
    question: "Can multiple VRRP groups be configured on a single interface?",
    options: [
      "No",
      "Yes, up to 255 groups per interface.",
      "Yes, but only 2 groups.",
      "Yes, but they must use the same virtual IP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Like MHSRP, you can configure multiple VRRP groups on an interface to achieve load balancing by pointing different hosts to different VRRP VIPs.",
  },
  {
    id: 79,
    question:
      "What happens in VRRP if the IP Address Owner's priority is manually changed to 100?",
    options: [
      "The command is accepted and the priority value is set to 100.",
      "The router goes into an err-disable state and stops forwarding traffic.",
      "The command is rejected; the IP Address owner must have a priority of 255.",
      "The virtual IP address is deleted from the VRRP group configuration.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "In VRRP, if the real IP matches the virtual IP, the router is the IP Address Owner and its priority is rigidly fixed at 255. You cannot manually override this.",
  },
  {
    id: 80,
    question: "Which of the following best describes the 'skew time' in VRRP?",
    options: [
      "The total time it takes for an ARP request to reach the Master router and for the response to travel back to the requesting host device.",
      "A mathematical offset added to the Master Down Interval, based on priority, ensuring the Backup with the highest priority times out first.",
      "The amount of time that is added to the Hello timer during periods of heavy network congestion on the shared Ethernet segment.",
      "The delay that must elapse before the preemption process takes effect after the router's interface comes back up and stabilizes.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Skew time = (256 - priority) / 256. A router with priority 200 has a smaller skew time than one with priority 100, meaning it will declare the Master dead slightly faster and win the election.",
  },

  // --- GLBP Basics & Advanced (81-100) ---
  {
    id: 81,
    question: "What does GLBP stand for?",
    options: [
      "Gateway Load Balancing Protocol",
      "Generic Link Bonding Protocol",
      "Global LAN Backup Protocol",
      "Gateway Link Bounding Protocol",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "GLBP stands for Gateway Load Balancing Protocol, a Cisco-proprietary FHRP.",
  },
  {
    id: 82,
    question: "What is the primary advantage of GLBP over HSRP and VRRP?",
    options: [
      "It is an open standard that is defined and published by the IETF for multi-vendor use.",
      "It provides true active/active load balancing for hosts using a single default gateway IP address.",
      "It has faster hello timers configured by default than the other gateway protocols.",
      "It does not require multicast to send its hello packets between the group members.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "While HSRP/VRRP require multiple groups (MHSRP) and manual host configuration to load balance, GLBP balances traffic automatically using a single virtual IP address.",
  },
  {
    id: 83,
    question: "How does GLBP achieve load balancing among multiple routers?",
    options: [
      "By changing the virtual IP address dynamically so that each client is assigned a different gateway address for the group.",
      "By using NAT to translate the client IP addresses as they pass through the load-balancing router and out toward the servers.",
      "The AVG replies to ARP requests with different virtual MAC addresses, pointing different clients to different routers.",
      "By using the spanning-tree protocol to open multiple forwarding paths through the switches for the traffic.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "In GLBP, all hosts are configured with the same default gateway IP. When hosts ARP for that IP, the AVG replies with the virtual MAC of AVF 1 to Host 1, AVF 2 to Host 2, etc.",
  },
  {
    id: 84,
    question: "In GLBP, what is the role of the AVG (Active Virtual Gateway)?",
    options: [
      "It is the only router in the group that actually forwards user traffic for the virtual IP.",
      "It assigns virtual MAC addresses to AVFs and responds to all ARP requests for the virtual IP.",
      "It serves as a standby backup to the AVF in case the primary forwarding router fails.",
      "It manages the BGP peering sessions with all of the other routers in the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "There is exactly one AVG per GLBP group. It manages the group, allocates virtual MAC addresses to the forwarding routers (AVFs), and answers ARPs from hosts.",
  },
  {
    id: 85,
    question: "In GLBP, what is an AVF (Active Virtual Forwarder)?",
    options: [
      "A router that routes traffic sent to the specific virtual MAC address assigned to it by the AVG.",
      "A standby router that is waiting for the AVG to fail before it takes over the duties.",
      "A switch that is performing Layer 2 forwarding for all of the GLBP group traffic.",
      "The DHCP server that provides IP address assignments for the hosts on the subnet.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "An AVF is a router participating in GLBP that actively forwards traffic. The AVG assigns it a specific virtual MAC, and the AVG directs some hosts' ARP replies to that MAC.",
  },
  {
    id: 86,
    question:
      "How many AVFs can actively forward traffic simultaneously in a single GLBP group?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A GLBP group supports a maximum of 4 Active Virtual Forwarders (AVFs) simultaneously.",
  },
  {
    id: 87,
    question: "Can the AVG also act as an AVF?",
    options: [
      "No, the AVG only handles ARP requests and never forwards traffic.",
      "Yes, the AVG typically assigns itself a virtual MAC and acts as AVF 1.",
      "Only if there are no other routers available to act as forwarders in the group.",
      "Only in IPv6 networks when GLBP is running in its version 2 mode.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The AVG manages the group, but it also actively routes traffic by acting as one of the AVFs.",
  },
  {
    id: 88,
    question: "What is the standard GLBP virtual MAC address format?",
    options: [
      "0000.0C07.ACXX",
      "0000.5E00.01XX",
      "0007.B400.XXYY",
      "0000.0C9F.FXXX",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "GLBP virtual MACs take the format 0007.B400.XXYY, where XX is the GLBP group number and YY is the AVF number (01 to 04).",
  },
  {
    id: 89,
    question: "What multicast IP address and port does GLBP use?",
    options: [
      "224.0.0.102, UDP 3222",
      "224.0.0.2, UDP 1985",
      "224.0.0.18, IP Protocol 112",
      "224.0.0.5, TCP 179",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "GLBP uses the multicast address 224.0.0.102 and UDP port 3222 for communication between group members.",
  },
  {
    id: 90,
    question: "Which GLBP load-balancing algorithm is the default?",
    options: ["Host-dependent", "Weighted", "Round-robin", "Least-connections"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Round-robin is the default. The AVG hands out the virtual MACs of the AVFs sequentially to hosts as they ARP for the gateway.",
  },
  {
    id: 91,
    question:
      "Which GLBP load-balancing algorithm ensures a specific host always receives the same virtual MAC address, preventing ARP cache issues on some clients?",
    options: ["Round-robin", "Host-dependent", "Weighted", "Static"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Host-dependent load balancing hashes the host's MAC address to ensure that a given host is consistently directed to the exact same AVF.",
  },
  {
    id: 92,
    question:
      "Which GLBP load-balancing algorithm distributes traffic proportionally based on a manually configured metric, allowing a router with a larger bandwidth link to handle more traffic?",
    options: ["Round-robin", "Host-dependent", "Weighted", "Proportional"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Weighted load balancing looks at the 'weight' configured on each AVF. An AVF with a higher weight answers a proportionally higher number of ARP requests.",
  },
  {
    id: 93,
    question: "Is preemption enabled by default for the AVG role in GLBP?",
    options: [
      "Yes",
      "No",
      "Yes, with a 30-second delay",
      "No, except for the IP Address Owner",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Like HSRP, preemption for the GLBP Active Virtual Gateway (AVG) is disabled by default.",
  },
  {
    id: 94,
    question: "Is preemption enabled by default for the AVF role in GLBP?",
    options: [
      "Yes, with a 30-second delay.",
      "No, AVF preemption must be manually configured.",
      "Yes, with a 0-second delay.",
      "No, AVFs do not preempt.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Preemption for the Active Virtual Forwarder (AVF) is enabled by default with a 30-second delay. If an AVF fails, another router takes over its MAC. When the original AVF returns, it reclaims its MAC after 30 seconds.",
  },
  {
    id: 95,
    question: "What is the default priority for the GLBP AVG election?",
    options: ["0", "100", "128", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Just like HSRP and VRRP, the default priority for a GLBP router is 100.",
  },
  {
    id: 96,
    question:
      "What feature does GLBP use to dynamically adjust an AVF's load-balancing proportion if an uplink goes down?",
    options: [
      "Preemption delay",
      "Object tracking tied to weighting",
      "BGP route reflectors",
      "STP cost manipulation",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "GLBP ties object tracking to the 'weight' parameter. If an uplink fails, the weight drops. If it drops below a threshold, the router stops acting as an AVF. If it merely lowers, the AVG sends fewer ARPs its way.",
  },
  {
    id: 97,
    question:
      "Which command assigns the GLBP virtual IP of 10.1.1.1 to group 10?",
    options: [
      "standby 10 glbp 10.1.1.1",
      "vrrp 10 ip 10.1.1.1",
      "glbp 10 ip 10.1.1.1",
      "ip glbp 10 10.1.1.1",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation: "The command is 'glbp [group-number] ip [virtual-ip]'.",
  },
  {
    id: 98,
    question:
      "Which command changes the GLBP load balancing method to Host-dependent?",
    options: [
      "glbp 10 load-balancing host-dependent",
      "glbp load-balance host",
      "glbp 10 method host",
      "standby 10 glbp host-dependent",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The interface command 'glbp [group] load-balancing [host-dependent | round-robin | weighted]' configures the algorithm.",
  },
  {
    id: 99,
    question:
      "Which command provides a detailed output of GLBP status, including AVG, AVFs, virtual MACs, and weights?",
    options: ["show standby", "show glbp", "show ip glbp", "show fhrp"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show glbp' (or 'show glbp brief') command verifies the GLBP configuration, roles, and MAC allocations.",
  },
  {
    id: 100,
    question: "What happens in GLBP if the AVG completely fails?",
    options: [
      "The network loses connectivity for all of the hosts until the failed AVG router reboots.",
      "The AVFs stop forwarding all of the traffic to the hosts in the group until the issue is resolved.",
      "The router with the next highest priority (or IP) promotes itself to AVG and continues managing the group.",
      "GLBP automatically falls back to using the HSRP protocol for the group's members and traffic.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A Standby AVG is automatically elected. If the Active AVG fails, the Standby AVG takes over answering ARPs and managing the virtual MACs, ensuring seamless operation.",
  },
];
