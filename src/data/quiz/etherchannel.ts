import type { QuizQuestion } from "./types";

export const etherchannelQuestions: QuizQuestion[] = [
  // --- Basic Concepts & Benefits ---
  {
    id: 1,
    question: "What is the primary benefit of EtherChannel?",
    options: [
      "It provides redundancy and increased bandwidth by aggregating multiple physical links.",
      "It enables VLAN trunking between switches.",
      "It replaces STP by eliminating loops.",
      "It allows switches to be managed from a single console.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "EtherChannel (Port Channel) combines multiple physical links into a single logical link, increasing overall throughput and providing fault tolerance if a single link fails.",
  },
  {
    id: 2,
    question:
      "How does Spanning Tree Protocol (STP) treat an EtherChannel bundle?",
    options: [
      "As multiple individual physical links",
      "As a single logical interface",
      "It disables STP on the bundled links",
      "It blocks all but one physical link in the bundle",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "STP views the entire EtherChannel bundle as a single logical port, preventing STP from blocking the redundant physical links inside the bundle.",
  },
  {
    id: 3,
    question:
      "What is the maximum number of active physical ports that can be bundled in a standard Cisco EtherChannel?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A standard EtherChannel can bundle up to 8 active physical interfaces.",
  },
  {
    id: 4,
    question:
      "Which two protocols are used to dynamically negotiate EtherChannel creation?",
    options: ["STP and RSTP", "CDP and LLDP", "PAgP and LACP", "VTP and DTP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Port Aggregation Protocol (PAgP) and Link Aggregation Control Protocol (LACP) are the two dynamic negotiation protocols for EtherChannel.",
  },
  {
    id: 5,
    question:
      "If an EtherChannel has 4 links of 1 Gbps each, what is the total aggregated bandwidth of the logical link?",
    options: ["1 Gbps", "2 Gbps", "4 Gbps", "8 Gbps"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The bandwidth of the physical links is aggregated, resulting in a 4 Gbps logical link.",
  },
  {
    id: 6,
    question:
      "Which statement about EtherChannel and physical link failure is true?",
    options: [
      "The entire EtherChannel goes down if one link fails.",
      "Traffic is dynamically redistributed across the remaining active links without bringing down the logical interface.",
      "STP must recalculate before traffic can use the remaining links.",
      "The logical interface IP address must be reassigned.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "As long as at least one physical link is up, the EtherChannel remains up. Traffic is automatically re-hashed to the surviving links without STP recalculation.",
  },
  {
    id: 7,
    question:
      "Can an EtherChannel span across multiple modules (line cards) in a modular chassis switch?",
    options: [
      "No, all ports must be on the same module.",
      "Yes, which provides redundancy against a line card failure.",
      "Yes, but only if using PAgP.",
      "No, EtherChannel only works on fixed-configuration switches.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Distributing EtherChannel physical ports across different modules in a chassis prevents the entire channel from failing if one module goes down.",
  },
  {
    id: 8,
    question: "What is the industry-standard protocol for link aggregation?",
    options: ["PAgP", "LACP", "EtherChannel", "VLAN Trunking Protocol"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "LACP (IEEE 802.3ad / 802.1AX) is the open industry standard, while PAgP is Cisco proprietary.",
  },
  {
    id: 9,
    question:
      "Which interface type represents the logical EtherChannel link in Cisco IOS?",
    options: [
      "interface etherchannel",
      "interface bundle",
      "interface port-channel",
      "interface lag",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "When you bundle physical ports, a logical 'port-channel' interface is created (e.g., interface port-channel 1).",
  },
  {
    id: 10,
    question:
      "What happens to the STP cost of an interface when it is successfully bundled into an EtherChannel?",
    options: [
      "It remains the same as a single physical link.",
      "It increases to reflect the higher complexity.",
      "It decreases because the aggregated bandwidth is higher.",
      "It is set to 0.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "STP cost is inversely proportional to bandwidth. Because an EtherChannel has higher bandwidth than a single link, its STP cost is lower.",
  },

  // --- LACP (Link Aggregation Control Protocol) ---
  {
    id: 11,
    question: "Which IEEE standard defines LACP?",
    options: ["802.1Q", "802.1D", "802.3ad", "802.11"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "LACP was originally defined in IEEE 802.3ad (and later moved to 802.1AX).",
  },
  {
    id: 12,
    question: "Which two modes are used by LACP to negotiate an EtherChannel?",
    options: [
      "Auto and Desirable",
      "Active and Passive",
      "On and Off",
      "Trunk and Access",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "LACP uses Active (initiates negotiation) and Passive (waits for negotiation) modes.",
  },
  {
    id: 13,
    question:
      "If Switch A is configured with LACP 'passive' and Switch B is configured with LACP 'passive', will the EtherChannel form?",
    options: [
      "Yes",
      "No",
      "Only if they are connected via fiber",
      "Only if STP is disabled",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "No. Since both sides are 'passive', neither side will initiate the LACP negotiation, so the channel will never form.",
  },
  {
    id: 14,
    question:
      "What is the maximum number of ports that can be assigned to an LACP channel group (including active and standby)?",
    options: ["8", "12", "16", "32"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "LACP allows up to 16 ports in a group: 8 act as active forwarders, and 8 remain in standby mode, ready to take over if an active link fails.",
  },
  {
    id: 15,
    question:
      "In LACP, what determines which ports are put into standby mode if more than 8 ports are assigned to the group?",
    options: [
      "LACP Port Priority",
      "MAC Address",
      "Spanning Tree Cost",
      "Port Speed",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "LACP uses Port Priority (default 32768) to determine which ports become active. Ports with a lower priority value are chosen as active.",
  },
  {
    id: 16,
    question:
      "If the LACP Port Priorities are identical, how does LACP break the tie to select active ports?",
    options: [
      "Highest interface number (e.g., Gi0/2 beats Gi0/1)",
      "Lowest interface number (e.g., Gi0/1 beats Gi0/2)",
      "Random selection",
      "The port with the highest MAC address",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If port priorities are tied, LACP uses the lowest physical port number (interface ID) to select the active ports.",
  },
  {
    id: 17,
    question:
      "Which switch dictates the port selection when placing LACP links into standby mode?",
    options: [
      "The switch with the higher LACP System Priority",
      "The switch with the lower LACP System Priority",
      "Both switches decide independently",
      "The STP Root Bridge",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The switch with the lowest LACP System Priority (default 32768 + MAC address) becomes the master and dictates which ports are active and which are standby.",
  },
  {
    id: 18,
    question:
      "What command creates an LACP EtherChannel interface and sets it to initiate negotiation?",
    options: [
      "channel-group 1 mode active",
      "channel-group 1 mode desirable",
      "channel-group 1 mode on",
      "channel-group 1 mode passive",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "'mode active' explicitly enables LACP and actively sends LACP packets to negotiate the bundle.",
  },
  {
    id: 19,
    question:
      "What is the multicast MAC address used by LACP to send control packets?",
    options: [
      "01:80:c2:00:00:00",
      "01:80:c2:00:00:02",
      "01:00:5e:00:00:01",
      "01:00:0c:cc:cc:cc",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "LACP uses the Slow Protocols Multicast address 01:80:c2:00:00:02 to transmit LACP Data Units (LACPDUs).",
  },
  {
    id: 20,
    question:
      "If one side of an LACP EtherChannel is set to 'active', what modes can the other side be set to for the channel to form? (Select the best matching pair)",
    options: [
      "Active or Passive",
      "Passive or On",
      "Auto or Desirable",
      "Active or Desirable",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "An 'active' interface will successfully form an LACP channel with either another 'active' interface or a 'passive' interface.",
  },

  // --- PAgP (Port Aggregation Protocol) ---
  {
    id: 21,
    question: "Who developed the Port Aggregation Protocol (PAgP)?",
    options: ["IEEE", "IETF", "Cisco", "Juniper"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "PAgP is a Cisco-proprietary protocol for negotiating EtherChannels.",
  },
  {
    id: 22,
    question: "Which two modes are used by PAgP to negotiate an EtherChannel?",
    options: [
      "Active and Passive",
      "Auto and Desirable",
      "On and Off",
      "Initiate and Wait",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "PAgP uses 'desirable' (actively negotiates) and 'auto' (passively waits for negotiation).",
  },
  {
    id: 23,
    question:
      "If Switch A is configured with PAgP 'auto' and Switch B is configured with PAgP 'auto', will the EtherChannel form?",
    options: [
      "Yes",
      "No",
      "Only if they are connected via crossover cables",
      "Only if VLAN 1 is allowed",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "No. Since both sides are waiting for the other to initiate ('auto'), the PAgP negotiation will never start.",
  },
  {
    id: 24,
    question:
      "What is the maximum number of physical ports that can be bundled in a PAgP EtherChannel?",
    options: ["4", "8", "12", "16"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Unlike LACP which allows 16 ports (8 active/8 standby), PAgP only supports a maximum of 8 ports per channel group.",
  },
  {
    id: 25,
    question:
      "What does the 'non-silent' keyword do when configuring PAgP mode desirable?",
    options: [
      "It encrypts PAgP messages.",
      "It requires the port to receive PAgP packets before it will add the port to the channel.",
      "It stops sending syslogs for channel changes.",
      "It disables STP on the channel.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "By default, PAgP operates in 'silent' mode, allowing ports to join the channel even if no PAgP packets are received (useful for connecting to dumb servers). 'non-silent' forces the switch to require PAgP packets from the neighbor.",
  },
  {
    id: 26,
    question:
      "Which command assigns an interface to PAgP channel group 2 and actively initiates negotiation?",
    options: [
      "channel-group 2 mode active",
      "channel-group 2 mode desirable",
      "channel-group 2 mode auto",
      "channel-group 2 mode on",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'mode desirable' configures the port to use PAgP and actively send PAgP packets to initiate the channel.",
  },
  {
    id: 27,
    question:
      "Can you form an EtherChannel if one switch is running PAgP 'desirable' and the other is running LACP 'active'?",
    options: [
      "Yes, they will fall back to a standard mode.",
      "No, PAgP and LACP are incompatible.",
      "Yes, but only 4 ports will become active.",
      "Yes, if 'mode on' is used.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "PAgP and LACP do not understand each other's packets. Both sides of the link must use the same protocol.",
  },
  {
    id: 28,
    question:
      "What multicast MAC address does PAgP use for its protocol packets?",
    options: [
      "01:00:0c:cc:cc:cc",
      "01:80:c2:00:00:02",
      "01:00:5e:00:00:01",
      "01:80:c2:00:00:00",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "PAgP packets are sent to the Cisco proprietary multicast address 01:00:0c:cc:cc:cc (the same address used by CDP and VTP).",
  },
  {
    id: 29,
    question:
      "If Switch A is 'desirable' and Switch B is 'auto', what happens?",
    options: [
      "The channel forms using PAgP.",
      "The channel forms using LACP.",
      "The channel fails to form.",
      "The ports go into err-disable.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Desirable initiates the PAgP negotiation, and auto responds to it. The EtherChannel will successfully form.",
  },
  {
    id: 30,
    question:
      "In PAgP, how often are PAgP packets typically sent on an active channel?",
    options: [
      "Every 1 second",
      "Every 30 seconds",
      "Every 60 seconds",
      "Only when a topology change occurs",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "PAgP packets are typically transmitted every 30 seconds to maintain the link state.",
  },

  // --- Static EtherChannel (Mode ON) ---
  {
    id: 31,
    question: "What does 'channel-group 1 mode on' configure?",
    options: [
      "LACP active mode",
      "PAgP desirable mode",
      "A static EtherChannel with no negotiation protocol",
      "It enables the port channel interface",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'mode on' forces the port to become part of the EtherChannel unconditionally, without sending LACP or PAgP negotiation packets.",
  },
  {
    id: 32,
    question:
      "If Switch A is set to 'mode on' and Switch B is set to 'mode desirable', will the EtherChannel form?",
    options: [
      "Yes, 'on' overrides all protocols.",
      "No, 'on' mode does not send negotiation packets, so Switch B will not form the channel.",
      "Yes, Switch B will fall back to 'on' mode.",
      "Only if they are connected with a crossover cable.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Since 'on' mode does not send PAgP packets, the 'desirable' side will never negotiate successfully, and the channel will not operate correctly (often causing a spanning-tree loop or err-disable).",
  },
  {
    id: 33,
    question:
      "To form a static EtherChannel, what mode MUST both sides be configured with?",
    options: ["active", "desirable", "on", "auto"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "For a static EtherChannel to work properly, both sides must be hardcoded to 'mode on'.",
  },
  {
    id: 34,
    question:
      "What is a major risk of using 'mode on' instead of LACP or PAgP?",
    options: [
      "It reduces the aggregated bandwidth by half.",
      "It increases CPU load on the switch.",
      "If a link has a unidirectional failure, it can cause severe routing and spanning-tree loops.",
      "It only supports access ports, not trunks.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because 'mode on' doesn't use keepalives or negotiation, if a link fails in one direction (or is misconfigured on the remote end), the switch continues to forward traffic into a black hole or loop.",
  },
  {
    id: 35,
    question:
      "Which scenario is the primary reason an administrator might choose 'mode on'?",
    options: [
      "Connecting to a device that does not support LACP or PAgP.",
      "To increase the speed of the physical links.",
      "To bypass spanning tree entirely.",
      "To allow 16 active ports in a single bundle.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Some older servers, load balancers, or third-party devices do not support negotiation protocols and require a static (mode on) channel.",
  },

  // --- Configuration Prerequisites & Matching Parameters ---
  {
    id: 36,
    question:
      "Which of the following physical interface parameters MUST match for ports to form an EtherChannel?",
    options: [
      "Speed and Duplex",
      "MAC addresses",
      "Interface descriptions",
      "Port security settings",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "All ports in an EtherChannel must operate at the same speed and duplex.",
  },
  {
    id: 37,
    question:
      "If forming a Layer 2 EtherChannel, what VLAN parameter must match across all physical ports?",
    options: [
      "The management VLAN only",
      "They must belong to the exact same access VLAN, or have the exact same allowed VLANs if trunking.",
      "Only the native VLAN needs to match.",
      "VLANs do not matter for EtherChannel.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "All ports must be in the same access VLAN, or if trunking, they must have the same native VLAN and identical allowed VLAN lists.",
  },
  {
    id: 38,
    question:
      "What happens if you change the allowed VLAN list on ONE physical interface that is currently part of an active EtherChannel?",
    options: [
      "The change applies to the entire Port-Channel.",
      "The physical interface is suspended or put into an err-disabled state.",
      "The EtherChannel ignores the change.",
      "The interface reverts to the previous configuration automatically.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Changing a critical parameter (like allowed VLANs) on a member port creates an inconsistency, and the switch will suspend that port from the EtherChannel.",
  },
  {
    id: 39,
    question:
      "To avoid configuration inconsistencies, where should you apply configuration changes (like allowed VLANs) for an existing EtherChannel?",
    options: [
      "To the first physical interface only.",
      "To each physical interface individually.",
      "Directly to the logical Port-Channel interface.",
      "In the global configuration mode.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Best practice is to apply changes to the logical 'interface port-channel X'. The switch will automatically propagate the changes to all physical member ports.",
  },
  {
    id: 40,
    question:
      "Can you bundle a FastEthernet port and a GigabitEthernet port into the same EtherChannel?",
    options: [
      "Yes, if they are in the same VLAN.",
      "Yes, but the channel will operate at FastEthernet speeds.",
      "No, all ports must have the identical speed capability and current operational speed.",
      "Yes, if using LACP instead of PAgP.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "EtherChannel requires identical speeds across all bundled links. You cannot mix 100Mbps and 1000Mbps ports in the same bundle.",
  },
  {
    id: 41,
    question:
      "Which Spanning Tree port setting must be identical on all member interfaces before they can form an EtherChannel?",
    options: ["PortFast", "BPDU Guard", "STP Port Cost", "All of the above"],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "Inconsistencies in STP configurations (like PortFast or custom costs) on individual physical links will prevent them from joining the channel.",
  },
  {
    id: 42,
    question:
      "You want to bundle Gi0/1 and Gi0/2. Gi0/1 is a trunk port, and Gi0/2 is an access port. Will the channel form?",
    options: [
      "Yes, it defaults to a trunk.",
      "Yes, it defaults to an access port.",
      "No, switchport modes must be identical.",
      "Only if mode 'on' is used.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Switchport modes (access vs. trunk) must be identical on all participating ports.",
  },
  {
    id: 43,
    question:
      "If Port A has Dynamic Auto mode and Port B has Dynamic Desirable mode, can they be bundled together in an EtherChannel?",
    options: [
      "Yes, DTP will negotiate them both to trunk.",
      "No, all ports must have the exact same DTP operational and administrative mode.",
      "Yes, but only using PAgP.",
      "Yes, as long as they negotiate to the same operational state.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco requires that the administrative DTP settings (dynamic auto, desirable, trunk, access) be completely identical across all ports in the bundle.",
  },
  {
    id: 44,
    question:
      "What happens if a SPAN (Switched Port Analyzer) destination port is added to an EtherChannel?",
    options: [
      "The entire channel becomes a SPAN destination.",
      "The port is suspended from the channel.",
      "It functions normally and captures all channel traffic.",
      "The SPAN session is deleted.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A port configured as a SPAN destination cannot be a functional member of an EtherChannel; it will be suspended.",
  },
  {
    id: 45,
    question:
      "When creating a Layer 2 EtherChannel, what happens if the logical Port-Channel interface does not exist yet when you type 'channel-group 1 mode active' on a physical port?",
    options: [
      "An error is thrown.",
      "The router prompts you to create it.",
      "The switch automatically creates 'interface port-channel 1'.",
      "The port is placed into an err-disable state.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The IOS automatically creates the logical port-channel interface as soon as the first physical port is assigned to that channel group.",
  },

  // --- Load Balancing Algorithms ---
  {
    id: 46,
    question: "How does EtherChannel divide traffic across the physical links?",
    options: [
      "By sending packet 1 on link 1, packet 2 on link 2 (Round Robin).",
      "By calculating a hash based on frame headers to pin a specific flow to a specific physical link.",
      "By sending all traffic on one link until it reaches 100% capacity, then using the next.",
      "By sending duplicate traffic on all links.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EtherChannel does not do per-packet round-robin (which would cause out-of-order packets). It uses a hashing algorithm on frame/packet headers to ensure all packets in a specific 'flow' take the same physical link.",
  },
  {
    id: 47,
    question:
      "Which global configuration command changes the EtherChannel load-balancing method?",
    options: [
      "port-channel load-balance [method]",
      "etherchannel load-balance [method]",
      "channel-group load-balance [method]",
      "interface port-channel hash [method]",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The global command 'port-channel load-balance' sets the hashing algorithm for all EtherChannels on the switch.",
  },
  {
    id: 48,
    question:
      "What is typically the default EtherChannel load-balancing method on a Cisco Layer 2 switch?",
    options: [
      "Source IP address (src-ip)",
      "Destination IP address (dst-ip)",
      "Source MAC address (src-mac)",
      "Source and Destination IP (src-dst-ip)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "On many traditional Cisco Layer 2 switches, the default load balancing algorithm uses only the Source MAC address (src-mac).",
  },
  {
    id: 49,
    question:
      "If a server with a single MAC address is sending backups to 50 different clients over an EtherChannel using 'src-mac' load balancing, what will happen?",
    options: [
      "Traffic will be perfectly balanced across all links.",
      "All traffic will traverse a single physical link, providing no bandwidth aggregation.",
      "The switch will dynamically switch to dst-mac.",
      "The EtherChannel will fail and fall back to STP.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because the Source MAC address is always the same (the server's MAC), the hash result will always be the same, pinning 100% of the traffic to one physical link.",
  },
  {
    id: 50,
    question:
      "In the previous scenario (one server to many clients), which load balancing method would optimize the bandwidth usage best?",
    options: ["src-mac", "dst-mac or dst-ip", "src-ip", "Round-robin"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because the destination MACs/IPs are diverse (50 different clients), using destination-based hashing will distribute the flows evenly across the bundled links.",
  },
  {
    id: 51,
    question:
      "What load balancing method includes both the source and destination IP addresses in the hash?",
    options: ["src-ip", "dst-ip", "src-dst-ip", "src-dst-mac"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'src-dst-ip' performs an XOR operation on the source and destination IP addresses to generate a highly randomized hash.",
  },
  {
    id: 52,
    question:
      "Which load-balancing method provides the most granular distribution of traffic, assuming the switch supports it?",
    options: [
      "src-mac",
      "src-dst-ip",
      "src-dst-port (Layer 4 ports)",
      "dst-mac",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Layer 4 port-based load balancing (src-dst-port) incorporates TCP/UDP port numbers, allowing multiple distinct flows between the exact same two IP addresses to be spread across different physical links.",
  },
  {
    id: 53,
    question:
      "Which command verifies which load-balancing algorithm is currently active on the switch?",
    options: [
      "show etherchannel summary",
      "show port-channel traffic",
      "show etherchannel load-balance",
      "show spanning-tree",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show etherchannel load-balance' displays the current operational hash algorithm used for EtherChannel distribution.",
  },
  {
    id: 54,
    question:
      "If an EtherChannel has 3 physical links, how will the load be distributed?",
    options: [
      "Equally: 33.3% on each.",
      "Unequally: The hashing algorithm uses 8 mathematical buckets. Some links will get more buckets than others.",
      "Only 2 links will be active, 1 will be standby.",
      "Traffic will be round-robined.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco switches divide the hash results into 8 buckets. With 3 links, the buckets cannot be divided evenly (e.g., Link 1 gets 3 buckets, Link 2 gets 3, Link 3 gets 2), causing an unequal distribution. For perfect balance, use 2, 4, or 8 links.",
  },
  {
    id: 55,
    question:
      "Can you configure different load balancing methods for different Port-Channels on the same Cisco IOS switch?",
    options: [
      "Yes, using interface configuration mode.",
      "Yes, using the channel-group command.",
      "No, the load-balancing algorithm is a global configuration applied to all Port-Channels on the switch.",
      "Yes, but only on Layer 3 switches.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'port-channel load-balance' command is a global configuration that affects every EtherChannel on the chassis.",
  },

  // --- Layer 3 EtherChannels ---
  {
    id: 56,
    question: "What is a Layer 3 EtherChannel?",
    options: [
      "An EtherChannel that routes based on MAC addresses.",
      "A bundled link that acts as a routed port with its own IP address, rather than a switchport.",
      "An EtherChannel that requires BGP to function.",
      "An EtherChannel created between two routers using serial links.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Layer 3 EtherChannel acts like a physical router interface. It does not carry VLANs; instead, it is assigned a direct IP address.",
  },
  {
    id: 57,
    question:
      "What is the very FIRST step required on the physical interfaces before creating a Layer 3 EtherChannel?",
    options: [
      "Assign an IP address to them.",
      "Issue the 'no switchport' command to convert them to routed ports.",
      "Issue the 'channel-group' command.",
      "Configure 'mode active'.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Before assigning them to a Layer 3 channel group, the physical ports must be converted to routed ports using 'no switchport'.",
  },
  {
    id: 58,
    question:
      "Where do you configure the IP address for a Layer 3 EtherChannel?",
    options: [
      "On all of the physical member interfaces.",
      "On the logical 'interface port-channel' interface.",
      "On a Loopback interface.",
      "On VLAN 1.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The IP address is placed on the logical Port-Channel interface. The physical interfaces simply become members of the bundle.",
  },
  {
    id: 59,
    question:
      "What happens if you configure an IP address on physical interface Gi0/1, and then add Gi0/1 to a Layer 3 Port-Channel?",
    options: [
      "The IP address is automatically transferred to the Port-Channel.",
      "The IP address on Gi0/1 is removed.",
      "The port-channel uses Gi0/1's IP as a secondary address.",
      "An IP conflict error occurs.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "When a physical port is added to an EtherChannel, any IP address configured on the physical port is stripped off.",
  },
  {
    id: 60,
    question:
      "Which dynamic routing protocol can form neighbor adjacencies over a Layer 3 EtherChannel?",
    options: ["OSPF", "EIGRP", "BGP", "All of the above"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Because a Layer 3 EtherChannel acts just like any normal routed interface, any IP routing protocol can run over it.",
  },
  {
    id: 61,
    question:
      "If a Layer 3 EtherChannel drops one physical link, what happens to the OSPF neighbor relationship running over it?",
    options: [
      "The OSPF neighbor drops and must re-establish.",
      "Nothing, OSPF is unaware of the physical link failure because the logical Port-Channel interface remains 'Up'.",
      "The OSPF cost instantly doubles.",
      "OSPF triggers an SPF recalculation.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The routing protocol only sees the logical interface. As long as one link remains, the Port-Channel stays 'Up', and the OSPF adjacency is unaffected.",
  },
  {
    id: 62,
    question:
      "How does the OSPF metric (cost) change when a physical link drops from a Layer 3 EtherChannel?",
    options: [
      "It remains exactly the same.",
      "The bandwidth of the logical interface drops, which causes OSPF to dynamically increase the cost.",
      "It drops to 0.",
      "OSPF goes into a Hold state.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "OSPF calculates cost based on interface bandwidth. When a link drops, the aggregated bandwidth of the Port-Channel decreases, causing OSPF to recalculate a higher cost for the path.",
  },
  {
    id: 63,
    question:
      "To configure a Layer 3 EtherChannel to negotiate using LACP, what command is used on the physical port?",
    options: [
      "channel-group 1 mode active",
      "ip lacp active",
      "channel-group 1 routing",
      "lacp mode active",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'channel-group [number] mode active' command is identical whether the port is Layer 2 ('switchport') or Layer 3 ('no switchport').",
  },
  {
    id: 64,
    question:
      "Can a Port-Channel interface be converted from Layer 2 to Layer 3 after it is created?",
    options: [
      "No, you must delete it and recreate it.",
      "Yes, by issuing 'no switchport' directly on the Port-Channel interface.",
      "Yes, but only if all physical links are unplugged first.",
      "Yes, by changing the LACP mode.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Like physical interfaces, the logical interface can be toggled using 'no switchport'. However, to avoid errors, it's best to configure the physical ports to Layer 3 first.",
  },
  {
    id: 65,
    question:
      "In an enterprise core network, why is a Layer 3 EtherChannel generally preferred over a Layer 2 EtherChannel between core switches?",
    options: [
      "Layer 3 EtherChannels support PAgP.",
      "Layer 3 EtherChannels eliminate Spanning Tree loops and allow routing protocols to manage failover.",
      "Layer 2 EtherChannels cannot load balance.",
      "Layer 3 EtherChannels have a higher maximum port limit.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Using Layer 3 routed links between core switches eliminates STP blocking entirely, ensuring all paths are active and failover is handled rapidly by protocols like OSPF or EIGRP.",
  },

  // --- Verification Commands & Flags ---
  {
    id: 66,
    question:
      "Which command is the most useful for verifying the overall status of all EtherChannels on a switch, including protocols used and member ports?",
    options: [
      "show interfaces trunk",
      "show etherchannel summary",
      "show spanning-tree",
      "show port-channel details",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show etherchannel summary' provides a one-line summary for each channel group, showing the logical interface, status flags, protocol, and physical port members.",
  },
  {
    id: 67,
    question:
      "In the 'show etherchannel summary' output, what does the flag 'SU' next to a Port-Channel mean?",
    options: [
      "Suspended and Unusable",
      "Static and Unconfigured",
      "Layer 2 (Switched) and In Use",
      "Switched and Unavailable",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'S' indicates it is a Layer 2 Switched port. 'U' indicates the channel is 'In Use' (operational).",
  },
  {
    id: 68,
    question:
      "What does the flag 'RU' indicate for a Port-Channel in 'show etherchannel summary'?",
    options: [
      "Redundant and Unusable",
      "Layer 3 (Routed) and In Use",
      "Ready and Up",
      "Routed and Unconfigured",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "'R' stands for Layer 3 Routed port. 'U' means it is In Use.",
  },
  {
    id: 69,
    question:
      "In 'show etherchannel summary', a physical port has a 'P' next to it. What does this mean?",
    options: [
      "Passive",
      "PAgP is running",
      "Bundled in port-channel",
      "Powered off",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'P' means the physical port is successfully Bundled in the Port-channel and actively forwarding.",
  },
  {
    id: 70,
    question:
      "What does an 'I' flag mean next to a physical port in 'show etherchannel summary'?",
    options: [
      "In use",
      "Independent (Stand-alone, not bundled)",
      "Initiating negotiation",
      "Inter-VLAN",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'I' means the port is Independent or Stand-alone. It is configured for an EtherChannel but failed to bundle, likely due to a configuration mismatch or lack of negotiation from the other side.",
  },
  {
    id: 71,
    question:
      "What does the 's' (lowercase) flag indicate for a physical port?",
    options: [
      "Switched",
      "Standby (LACP wait state)",
      "Suspended",
      "Speed mismatch",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A lowercase 's' means the physical port is Suspended from the bundle, usually because of an inconsistency like a different allowed VLAN list.",
  },
  {
    id: 72,
    question:
      "Which command shows detailed information about the LACP neighbor, including their System ID and Port Priorities?",
    options: [
      "show etherchannel summary",
      "show lacp neighbor",
      "show pagp neighbor",
      "show interfaces etherchannel",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show lacp neighbor' provides specifics about the connected device's LACP parameters, verifying that negotiation is reaching the correct peer.",
  },
  {
    id: 73,
    question:
      "Which command displays the number of times the hash algorithm has assigned a flow to a specific interface?",
    options: [
      "show interfaces port-channel hash",
      "show etherchannel summary",
      "show interfaces port-channel 1 etherchannel",
      "show etherchannel port-channel",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "'show etherchannel port-channel' displays detailed internal statistics for a bundle, including logical port state and time since last change.",
  },
  {
    id: 74,
    question:
      "You run 'show etherchannel summary' and see the protocol listed as '-'. What does this mean?",
    options: [
      "The protocol is disabled.",
      "The switch does not support LACP or PAgP.",
      "The channel is configured statically with 'mode on'.",
      "The negotiation failed.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A hyphen '-' in the protocol column indicates that no negotiation protocol is being used, meaning the ports were statically bundled with 'channel-group 1 mode on'.",
  },
  {
    id: 75,
    question:
      "How can you simulate a load balancing hash to see which physical link a specific source/destination MAC pair will take?",
    options: [
      "test etherchannel load-balance interface port-channel 1 mac [src] [dst]",
      "show etherchannel hash test",
      "ping [dst] source [src] etherchannel",
      "debug etherchannel load-balance",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Cisco IOS provides the hidden/diagnostic 'test etherchannel load-balance' command to calculate the hash bucket and identify the exact physical exit interface for a given pair of addresses.",
  },

  // --- Troubleshooting & Error States ---
  {
    id: 76,
    question:
      "What is a common result if one side of a link is configured as 'mode on' and the other side is 'mode desirable'?",
    options: [
      "The 'desirable' side becomes 'I' (Independent) and STP may block it to prevent loops.",
      "Both sides successfully form the channel.",
      "The 'on' side falls back to 'desirable'.",
      "The switches reboot.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Because 'mode on' does not reply to PAgP packets, the 'desirable' side never gets a response and leaves its ports as Independent. STP sees multiple links and blocks them to prevent a loop.",
  },
  {
    id: 77,
    question:
      "If physical port Gi0/1 is placed into 'err-disable' state due to an EtherChannel misconfiguration, how do you recover it?",
    options: [
      "Clear the counters.",
      "Remove it from the channel group.",
      "Shut down the physical interface, fix the configuration, and issue 'no shutdown'.",
      "Reboot the switch.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Ports in 'err-disable' require administrator intervention. You must resolve the root cause, then bounce the port using 'shutdown' followed by 'no shutdown'.",
  },
  {
    id: 78,
    question:
      "Which feature can detect a unidirectional link caused by a broken fiber strand and prevent an EtherChannel from causing a STP loop?",
    options: [
      "BPDU Filter",
      "UDLD (UniDirectional Link Detection)",
      "Storm Control",
      "DHCP Snooping",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "UDLD detects physical layer anomalies like unidirectional fiber links and disables the port before it can cause routing black holes or STP loops inside an EtherChannel.",
  },
  {
    id: 79,
    question:
      "You configure 'channel-group 1 mode active' on 10 ports. 8 ports become active. What state will the remaining 2 ports be in?",
    options: ["err-disable", "Suspended", "Hot-standby", "Down"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "LACP supports up to 16 ports. The top 8 (lowest priority) become active, and the remaining ports wait in a Hot-standby state, ready to take over if an active link fails.",
  },
  {
    id: 80,
    question:
      "A technician adds a new port to an existing active EtherChannel. The entire Port-Channel briefly goes down and comes back up. What likely caused this?",
    options: [
      "This is normal behavior for LACP.",
      "The new port had a misconfigured Native VLAN, causing the Port-Channel to flap.",
      "The Port-Channel interface was missing the 'no shutdown' command.",
      "The switch ran out of memory.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Adding a port with conflicting configurations (like a different native VLAN) can cause STP inconsistencies or force the entire logical interface to flap/suspend.",
  },
  {
    id: 81,
    question:
      "Which command shows the current LACP system ID, which includes the LACP System Priority and MAC address?",
    options: [
      "show lacp sys-id",
      "show etherchannel summary",
      "show spanning-tree",
      "show mac address-table",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show lacp sys-id' displays the 2-byte system priority followed by the 6-byte MAC address, used to elect the LACP master.",
  },
  {
    id: 82,
    question:
      "If you see a syslog message: 'PM-4-ERR_DISABLE: channel-misconfig error detected', what is the most likely cause?",
    options: [
      "A duplex mismatch on a single link.",
      "One side of the EtherChannel has more ports bundled than the other.",
      "STP detected a loop because negotiation failed, or the two ends of a link connect to different switches.",
      "LACP and PAgP were configured on the same port.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The channel-misconfig err-disable is triggered by STP (EtherChannel Guard) when it receives BPDUs that indicate the bundled links are not terminating on the same remote switch, or negotiation is improperly formed.",
  },
  {
    id: 83,
    question:
      "How do you disable EtherChannel Guard (the feature that err-disables misconfigured channels)?",
    options: [
      "no spanning-tree etherchannel guard misconfig",
      "no etherchannel guard",
      "etherchannel guard disable",
      "spanning-tree portfast",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The global command 'no spanning-tree etherchannel guard misconfig' disables this protection, though it is highly recommended to leave it enabled.",
  },
  {
    id: 84,
    question:
      "What happens if a physical port configured with 'switchport port-security' is added to an EtherChannel?",
    options: [
      "Port security applies to the whole channel.",
      "The command is rejected; port-security is not supported on EtherChannel members.",
      "The port err-disables immediately.",
      "Port security is automatically disabled.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco IOS prevents bundling physical ports that have port security enabled. You must disable port-security, bundle the ports, and then apply it to the logical Port-channel interface if supported.",
  },
  {
    id: 85,
    question:
      "You want to remove an EtherChannel completely. What is the safest order of operations?",
    options: [
      "Delete the physical ports.",
      "Type 'no channel-group 1' on physical ports, then 'no interface port-channel 1'.",
      "Reload the switch.",
      "Type 'no interface port-channel 1', which automatically removes the channel-group from physical ports.",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Deleting the logical interface using 'no interface port-channel X' automatically removes the 'channel-group' configurations from all member physical interfaces cleanly.",
  },

  // --- Miscellaneous & Design ---
  {
    id: 86,
    question:
      "Why is an EtherChannel with 3 physical links considered suboptimal for load balancing?",
    options: [
      "LACP only supports even numbers.",
      "Traffic hashing relies on a binary bit-mask (power of 2), meaning 3 links cannot be divided perfectly into 8 hash buckets.",
      "STP cannot calculate the cost of an odd number of links.",
      "It violates IEEE standards.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because load balancing hashes map to 8 internal buckets, 8 divided by 3 leaves a remainder. Two links will carry 3/8 of the traffic, and one will carry 2/8, leading to imbalance.",
  },
  {
    id: 87,
    question:
      "What is the recommended number of physical links in an EtherChannel to achieve perfect load balancing distribution?",
    options: ["1, 3, or 5", "2, 4, or 8", "6 or 12", "16"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Numbers that divide evenly into 8 (2, 4, and 8) allow the hashing algorithm to allocate buckets perfectly evenly across the physical links.",
  },
  {
    id: 88,
    question:
      "In a 'vPC' (Virtual Port Channel) on Cisco Nexus switches, or 'VSS' (Virtual Switching System) on Catalyst switches, what unique capability is provided?",
    options: [
      "An EtherChannel can span across two different physical switches, creating a multi-chassis EtherChannel (MEC).",
      "EtherChannel can bundle wireless links.",
      "EtherChannels can exceed 100 Gbps.",
      "LACP and PAgP can be run simultaneously.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Technologies like vPC, VSS, and StackWise allow downstream devices to form an EtherChannel where the physical links terminate on two separate physical chassis, eliminating single points of failure.",
  },
  {
    id: 89,
    question: "Can an EtherChannel provide per-packet load balancing?",
    options: [
      "Yes, it is the default.",
      "Yes, but it is rarely used because it causes out-of-order packet delivery, severely degrading TCP performance.",
      "No, hardware ASICs do not support it.",
      "Yes, but only for UDP traffic.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "While per-packet is technically possible on some routing platforms, it is avoided on switches because splitting a single TCP flow across multiple links guarantees out-of-order packets, ruining throughput.",
  },
  {
    id: 90,
    question: "What does the 'channel-protocol' command do?",
    options: [
      "It restricts the interface to ONLY use the specified protocol (LACP or PAgP), preventing accidental misconfiguration.",
      "It activates the Port-Channel interface.",
      "It tells the switch to use IPv4 or IPv6.",
      "It enables DTP.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Configuring 'channel-protocol lacp' ensures that a user cannot accidentally apply a 'channel-group mode desirable' (PAgP) command on that interface.",
  },
  {
    id: 91,
    question:
      "A PC is connected to Gi0/1 and a server to Gi0/2. Can you bundle these two ports into an EtherChannel?",
    options: [
      "Yes, to increase their speed.",
      "No, an EtherChannel must terminate on a single device (or logically single device like a stack) on the other end.",
      "Yes, if they are in the same VLAN.",
      "Only if they use mode 'on'.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "EtherChannels aggregate point-to-point links. Both ends of the bundled links must connect exactly the same two devices.",
  },
  {
    id: 92,
    question: "Which of the following describes LACP 'Fast Rate'?",
    options: [
      "It increases the speed of the physical links.",
      "It sends LACP control packets every 1 second instead of the default 30 seconds, allowing for sub-3-second failover.",
      "It disables the hash algorithm.",
      "It forces STP to skip the Listening state.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "LACP Fast rate (lacp rate fast) changes the transmission interval of LACPDUs to 1 second, speeding up the detection of an indirectly failed link.",
  },
  {
    id: 93,
    question:
      "If an LACP neighbor stops sending LACPDUs, how long does the switch wait before removing the port from the bundle (using default slow timers)?",
    options: ["3 seconds", "30 seconds", "90 seconds", "300 seconds"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The default slow timer is 30 seconds. The timeout is 3 times the transmission rate, so the switch waits 90 seconds before declaring the neighbor down.",
  },
  {
    id: 94,
    question:
      "What is the STP cost of an EtherChannel consisting of two 1 Gbps links (Total 2 Gbps)?",
    options: ["4", "3", "2", "1"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In the default short STP cost calculation, a 1 Gbps link is cost 4, a 2 Gbps channel is cost 3, a 10 Gbps link is cost 2.",
  },
  {
    id: 95,
    question:
      "If an EtherChannel is configured as a Layer 2 trunk, and you issue 'shutdown' on the Port-Channel interface, what happens to the physical interfaces?",
    options: [
      "They remain up but forward as access ports.",
      "They are logically shut down and stop forwarding traffic.",
      "They fall back to independent trunk links.",
      "Only the first physical interface shuts down.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Shutting down the logical Port-Channel interface cascades the shutdown state to all associated physical member ports.",
  },
  {
    id: 96,
    question:
      "You want to temporarily remove Gi0/1 from Port-Channel 1 without deleting the Port-Channel. What is the best command?",
    options: [
      "no interface Gi0/1",
      "shutdown on the Port-Channel",
      "Go to Gi0/1 and type 'no channel-group 1'",
      "no port-channel 1",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Removing the 'channel-group' command from the physical interface drops that single interface from the bundle, leaving the rest of the EtherChannel intact.",
  },
  {
    id: 97,
    question:
      "Which hash algorithm is generally recommended for an EtherChannel carrying traffic from multiple internal clients to the Internet via a single default gateway router?",
    options: [
      "Destination MAC (dst-mac)",
      "Source IP and Destination IP (src-dst-ip)",
      "Source MAC (src-mac)",
      "Round robin",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because all traffic goes to the same destination MAC (the router), MAC-based hashing will fail to load balance. 'src-dst-ip' ensures the diverse client IPs and diverse internet destination IPs create a balanced hash.",
  },
  {
    id: 98,
    question:
      "Which of the following best describes the 'Independent' state ('I') in an LACP configuration?",
    options: [
      "The port is actively load balancing.",
      "The port is operating as a stand-alone link because LACP negotiation timed out or failed.",
      "The port is waiting for STP convergence.",
      "The port is routing Layer 3 traffic.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If a port is set to 'active' or 'passive' but does not receive matching LACP packets from the other side, it falls into the 'I' (Independent) state and operates as a normal unbundled link.",
  },
  {
    id: 99,
    question:
      "Can you configure OSPF directly on a physical interface that is bundled into a Layer 3 EtherChannel?",
    options: [
      "Yes, OSPF treats it as a backup path.",
      "No, Layer 3 configurations (like routing protocols and IP addresses) must be applied to the logical Port-Channel interface.",
      "Yes, but only if it's the primary active port.",
      "Yes, but it will cause an MTU mismatch.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Once a physical port is part of a Layer 3 EtherChannel, all Layer 3 parameters must be configured on the Port-Channel interface.",
  },
  {
    id: 100,
    question:
      "Which protocol relies on a System Priority to determine which switch dictates active/standby port status when there are more links than the bundle limit?",
    options: ["PAgP", "CDP", "STP", "LACP"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "LACP uses System Priority (and Port Priority) to manage which physical links are placed into active or hot-standby states when exceeding the 8-port limit.",
  },
];
