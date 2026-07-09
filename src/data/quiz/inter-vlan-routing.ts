import type { QuizQuestion } from "./types";

export const interVlanRoutingQuestions: QuizQuestion[] = [
  // --- Basic Concepts & Legacy Inter-VLAN Routing ---
  {
    id: 1,
    question: "What is a router-on-a-stick configuration?",
    options: [
      "A single router connected to a switch via a trunk link to route between VLANs",
      "A router with both ports connected to different switches",
      "A standalone router performing NAT for multiple VLANs",
      "A wireless router providing VLAN segmentation",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "In router-on-a-stick, one physical router interface is configured as a trunk with multiple subinterfaces, each assigned to a different VLAN, enabling inter-VLAN routing.",
  },
  {
    id: 2,
    question:
      "Why is a Layer 3 device required to route traffic between two different VLANs?",
    options: [
      "Because VLANs operate at Layer 4",
      "Because each VLAN represents a separate broadcast domain and logical network",
      "Because switches cannot learn MAC addresses from different VLANs",
      "Because VLANs require NAT to communicate",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Each VLAN is a distinct broadcast domain and IP subnet. A Layer 3 device (router or multilayer switch) is required to forward packets between different subnets.",
  },
  {
    id: 3,
    question:
      "In legacy inter-VLAN routing, how were routers physically connected to switches?",
    options: [
      "Using a single trunk link",
      "Using multiple physical router interfaces, with each interface connected to a separate switch access port for each VLAN",
      "Using a wireless bridge",
      "Using a serial cable",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Before trunking protocols became standard, legacy inter-VLAN routing required dedicating a separate physical router interface and switch port for every individual VLAN.",
  },
  {
    id: 4,
    question: "What is the primary disadvantage of legacy inter-VLAN routing?",
    options: [
      "It requires a routing protocol like OSPF.",
      "It does not scale well because physical router interfaces are limited and expensive.",
      "It causes broadcast storms.",
      "It requires a Layer 3 switch.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Legacy inter-VLAN routing uses one physical interface per VLAN. As the number of VLANs grows, the router quickly runs out of physical ports, making it unscalable.",
  },
  {
    id: 5,
    question: "Which of the following is NOT a method of inter-VLAN routing?",
    options: [
      "Router-on-a-stick",
      "Legacy inter-VLAN routing",
      "Layer 3 switching using SVIs",
      "VLAN Trunking Protocol (VTP)",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "VTP is a Layer 2 protocol used to synchronize VLAN databases across switches. It does not route traffic between VLANs.",
  },
  {
    id: 6,
    question:
      "When a PC in VLAN 10 sends a packet to a PC in VLAN 20, what destination MAC address does it put in the Ethernet frame?",
    options: [
      "The MAC address of the destination PC",
      "The MAC address of its local default gateway",
      "The broadcast MAC address (FF:FF:FF:FF:FF:FF)",
      "The MAC address of the Layer 2 switch",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When communicating outside its local subnet, a host encapsulates the packet in a frame destined for the MAC address of its default gateway.",
  },
  {
    id: 7,
    question:
      "What happens to the Source and Destination IP addresses when a packet is routed between VLANs?",
    options: [
      "They are replaced with the router's IP addresses.",
      "They remain unchanged end-to-end.",
      "The Source IP changes, but the Destination IP remains the same.",
      "They are converted to MAC addresses.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "During routing, the Layer 2 MAC addresses change at each hop, but the original Layer 3 Source and Destination IP addresses remain unchanged from end to end.",
  },
  {
    id: 8,
    question:
      "Which table does a Layer 3 switch use to make routing decisions between VLANs?",
    options: [
      "MAC Address Table",
      "VLAN Database",
      "Routing Table",
      "ARP Cache",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Layer 3 switch, like a router, uses its IP Routing Table to determine the next hop and exit interface for inter-VLAN traffic.",
  },
  {
    id: 9,
    question:
      "Which technology is primarily used in enterprise networks today for inter-VLAN routing due to its speed and scalability?",
    options: [
      "Router-on-a-stick",
      "Legacy physical interfaces",
      "Layer 3 Multilayer Switching",
      "External Firewalls",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Layer 3 switching (using SVIs) is the standard in modern enterprises because routing is performed in hardware (ASICs), making it much faster and more scalable than a router-on-a-stick.",
  },
  {
    id: 10,
    question:
      "What must be configured on a PC to allow it to communicate with devices in other VLANs?",
    options: [
      "A trunk port",
      "A default gateway",
      "An SVI",
      "A routing protocol",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The PC must be configured with the correct IP address of a default gateway (a router subinterface or an SVI) on its local subnet to send traffic off-subnet.",
  },

  // --- Router-on-a-Stick (ROAS) Configuration & Concepts ---
  {
    id: 11,
    question: "In a router-on-a-stick configuration, what is a subinterface?",
    options: [
      "A physical port added to a router",
      "A logical, virtual interface created by dividing one physical interface into multiple logical interfaces",
      "A port on a switch connected to the router",
      "A loopback interface",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A subinterface is a software-based logical interface that uses the parent physical interface's hardware. Multiple subinterfaces can be configured on a single physical link.",
  },
  {
    id: 12,
    question:
      "Which command correctly creates subinterface 10 on the GigabitEthernet 0/0 interface?",
    options: [
      "interface gigabitethernet 0/0 vlan 10",
      "interface gigabitethernet 0/0 sub 10",
      "interface gigabitethernet 0/0.10",
      "interface vlan 10",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Subinterfaces are created by appending a dot (.) and a number to the physical interface name, such as 'interface g0/0.10'.",
  },
  {
    id: 13,
    question:
      "Before assigning an IP address to a router subinterface, what MUST be configured?",
    options: [
      "The physical interface must be shut down",
      "The encapsulation type and VLAN ID",
      "A routing protocol",
      "A MAC address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco IOS requires the encapsulation type (usually dot1q) and the associated VLAN ID to be defined before it allows an IP address to be configured on a subinterface.",
  },
  {
    id: 14,
    question:
      "Which command configures 802.1Q encapsulation for VLAN 20 on a router subinterface?",
    options: [
      "encapsulation dot1q 20",
      "switchport trunk allowed vlan 20",
      "vlan 20 encapsulation dot1q",
      "dot1q encapsulation 20",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The command 'encapsulation dot1q [vlan-id]' binds the subinterface to a specific VLAN tag.",
  },
  {
    id: 15,
    question:
      "Does the subinterface number (e.g., the '10' in G0/0.10) have to match the VLAN ID?",
    options: [
      "Yes, the router will reject the configuration otherwise.",
      "No, but it is highly recommended for administrative consistency and troubleshooting.",
      "Yes, it is required by the 802.1Q standard.",
      "No, subinterfaces cannot be numbered higher than 9.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The subinterface number is locally significant to the router. G0/0.99 could be mapped to VLAN 10 via 'encapsulation dot1q 10', but matching them is best practice.",
  },
  {
    id: 16,
    question:
      "In a ROAS setup, what state must the parent physical interface (e.g., G0/0) be in?",
    options: [
      "Administratively down",
      "Configured with an IP address",
      "Up, using the 'no shutdown' command",
      "Configured as an access port",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The physical parent interface must be brought up using 'no shutdown'. If the parent is down, all associated subinterfaces will also go down.",
  },
  {
    id: 17,
    question:
      "Should you configure an IP address on the physical parent interface in a ROAS configuration?",
    options: [
      "Yes, it serves as the default gateway for the native VLAN.",
      "No, the physical interface typically does not have an IP address in a ROAS setup.",
      "Yes, it must have an IP address to enable routing.",
      "Yes, but only a loopback IP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In a typical ROAS setup, the physical interface is left without an IP address. IP addresses are assigned exclusively to the logical subinterfaces.",
  },
  {
    id: 18,
    question:
      "How do you configure a subinterface to handle the Native VLAN (untagged traffic)?",
    options: [
      "encapsulation dot1q [vlan-id] native",
      "switchport trunk native vlan [vlan-id]",
      "native vlan [vlan-id]",
      "encapsulation untagged [vlan-id]",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Adding the keyword 'native' to the encapsulation command (e.g., 'encapsulation dot1q 99 native') tells the router to process untagged frames on this subinterface.",
  },
  {
    id: 19,
    question:
      "If the switch port connected to the router is configured as a trunk, what VLANs are allowed to cross it by default?",
    options: [
      "Only the Native VLAN",
      "Only VLAN 1",
      "All VLANs (1-4094)",
      "Only the VLANs configured on the router's subinterfaces",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "By default, a Cisco switch trunk port allows all active VLANs to cross the link.",
  },
  {
    id: 20,
    question:
      "What command should be applied to the switch port that connects to the router in a ROAS topology?",
    options: [
      "switchport mode access",
      "switchport mode trunk",
      "switchport mode dynamic auto",
      "no switchport",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The switch port connecting to the router must be configured as an 802.1Q trunk port ('switchport mode trunk') to carry tagged traffic for multiple VLANs.",
  },
  {
    id: 21,
    question:
      "In ROAS, a packet is sent from VLAN 10 to VLAN 20. How many times does it cross the physical link between the switch and the router?",
    options: [
      "Once",
      "Twice (Up to the router, and back down to the switch)",
      "Three times",
      "It does not cross the physical link",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The packet travels from the switch to the router on the VLAN 10 subinterface, is routed, and travels back down the same physical link on the VLAN 20 subinterface.",
  },
  {
    id: 22,
    question: "What is a major performance drawback of Router-on-a-Stick?",
    options: [
      "It cannot route IPv6 traffic.",
      "The single physical link can become a bottleneck since all inter-VLAN traffic must cross it twice.",
      "It requires a separate physical interface for every VLAN.",
      "It does not support Gigabit speeds.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because inter-VLAN traffic goes up and back down the same trunk link, the available bandwidth on that physical link is effectively halved for inter-VLAN traffic.",
  },
  {
    id: 23,
    question:
      "If a router subinterface is configured with 'encapsulation dot1q 30', what happens when it receives an untagged frame?",
    options: [
      "It accepts it and routes it to VLAN 30.",
      "It drops the frame.",
      "It tags it with VLAN 1.",
      "It floods the frame to all other subinterfaces.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unless the subinterface is explicitly configured with the 'native' keyword, it expects an 802.1Q tag for VLAN 30. Untagged frames will be dropped if no native subinterface or physical interface IP is configured to handle them.",
  },
  {
    id: 24,
    question:
      "You configure 'interface g0/0.50'. What is the default administrative state of this subinterface?",
    options: [
      "Administratively down",
      "Up (assuming the parent interface is up)",
      "Down (line protocol down)",
      "Suspended",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike physical interfaces which default to 'administratively down', a newly created subinterface is 'Up' by default, provided its parent physical interface is in the 'no shutdown' state.",
  },
  {
    id: 25,
    question:
      "What does the router do with the 802.1Q tag when routing a packet from G0/0.10 to G0/0.20?",
    options: [
      "It strips the VLAN 10 tag and forwards it untagged.",
      "It strips the VLAN 10 tag, routes the packet, and adds a new VLAN 20 tag before sending it out.",
      "It encapsulates the VLAN 10 tagged frame inside a VLAN 20 tag (Q-in-Q).",
      "It leaves the VLAN 10 tag intact.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router strips the incoming Layer 2 header (and tag), performs the Layer 3 routing decision, and builds a new Layer 2 header with the appropriate VLAN 20 tag for the egress subinterface.",
  },
  {
    id: 26,
    question:
      "Can Router-on-a-Stick be used to route between two VLANs if the router is connected to a hub instead of a switch?",
    options: [
      "Yes, hubs support 802.1Q tags.",
      "No, hubs do not understand or preserve 802.1Q VLAN tags properly, and PCs would see tagged frames.",
      "Yes, but only using ISL encapsulation.",
      "No, because routers cannot connect to hubs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Hubs are Layer 1 devices that simply copy bits. They cannot process trunks. Sending tagged frames into a hub would result in end devices receiving frames with unknown 802.1Q headers they cannot process.",
  },
  {
    id: 27,
    question:
      "Which of the following is true about MAC addresses on router subinterfaces?",
    options: [
      "Each subinterface generates a unique virtual MAC address.",
      "All subinterfaces on a physical interface share the same physical MAC address of the parent interface.",
      "Subinterfaces do not have MAC addresses.",
      "Subinterfaces use the MAC address of the connected switch.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because they are logical partitions of the same hardware, all subinterfaces on a given physical interface share the parent interface's burned-in MAC address.",
  },
  {
    id: 28,
    question:
      "When configuring ROAS, you forget to issue 'no shutdown' on the physical interface G0/0. What is the state of G0/0.10?",
    options: [
      "Up / Up",
      "Administratively Down / Down",
      "Up / Down",
      "Down / Down",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If the parent interface is administratively down, all subinterfaces under it will also show as administratively down / down.",
  },
  {
    id: 29,
    question:
      "A PC has IP 192.168.10.50/24 and Gateway 192.168.10.1. The router subinterface G0/0.10 has IP 192.168.10.1/24. If the PC pings 192.168.10.1, does the traffic cross the trunk link?",
    options: [
      "Yes, it travels to the switch, crosses the trunk to the router, and the router replies.",
      "No, the switch intercepts the ping and replies.",
      "No, pings to the default gateway are blocked.",
      "Yes, but it is dropped by the router.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The default gateway IP lives on the router. The ICMP echo request travels from the PC to the switch, crosses the trunk to the router's subinterface, and the router generates the ICMP echo reply.",
  },
  {
    id: 30,
    question:
      "If you change the native VLAN on the switch trunk port to VLAN 99, but forget to configure 'native' on the router's VLAN 99 subinterface, what happens to VLAN 99 traffic?",
    options: [
      "It routes normally.",
      "The switch drops the traffic.",
      "The router drops the traffic because it arrives untagged, and no subinterface is configured to accept untagged traffic.",
      "The router automatically assumes the untagged traffic belongs to VLAN 1.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A mismatch occurs. The switch sends VLAN 99 untagged. The router receives untagged frames, but since no subinterface has the 'native' keyword (and the physical interface has no IP), the router drops them.",
  },
  {
    id: 31,
    question:
      "Which command shows the IP addresses and status of all configured subinterfaces?",
    options: [
      "show ip interface brief",
      "show subinterfaces",
      "show vlan",
      "show interfaces trunk",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ip interface brief' lists all interfaces and subinterfaces, their assigned IP addresses, and their line/protocol status.",
  },
  {
    id: 32,
    question:
      "Which command would you use on a router to verify the 802.1Q encapsulation and VLAN ID assigned to subinterface G0/0.20?",
    options: [
      "show interfaces g0/0.20",
      "show ip interface brief",
      "show vlan",
      "show run interface g0/0",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "'show interfaces g0/0.20' (or looking at the running-config) will display the encapsulation type (802.1Q) and the configured VLAN ID.",
  },
  {
    id: 33,
    question:
      "You configure 'encapsulation dot1q 10' on G0/0.10 and 'encapsulation dot1q 10' on G0/0.20. What will the router do?",
    options: [
      "It creates a bridge between the two subinterfaces.",
      "It balances the load between the two subinterfaces.",
      "It rejects the configuration on G0/0.20 because VLAN 10 is already bound to G0/0.10.",
      "It accepts it, but traffic loops.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A specific VLAN ID can only be bound to one subinterface per physical interface. The router will throw an error if you try to assign the same 802.1Q tag to multiple subinterfaces on the same port.",
  },
  {
    id: 34,
    question:
      "What is required for the router to route traffic between two ROAS subinterfaces (e.g., G0/0.10 and G0/0.20)?",
    options: [
      "A static route must be configured.",
      "An IGP like OSPF must be configured.",
      "Nothing, they are directly connected routes, so the router routes between them automatically.",
      "NAT must be configured.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "As long as the subinterfaces have IP addresses in different subnets and are in the 'Up/Up' state, the router places them in its routing table as 'Connected' routes and routes between them automatically.",
  },
  {
    id: 35,
    question: "How does the router's routing table list ROAS subinterfaces?",
    options: [
      "As 'S' (Static) routes",
      "As 'C' (Connected) and 'L' (Local) routes",
      "As 'R' (RIP) routes",
      "They do not appear in the routing table.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Active subinterfaces appear in the routing table just like physical interfaces, marked as 'C' for connected networks and 'L' for the local interface IP.",
  },
  {
    id: 36,
    question:
      "In a ROAS configuration, where is the default gateway IP address configured?",
    options: [
      "On the switch access ports",
      "On the router physical interface",
      "On the router subinterfaces",
      "On the switch SVI",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Each VLAN's default gateway IP address is configured on its corresponding router subinterface.",
  },
  {
    id: 37,
    question: "Can an IPv6 address be assigned to a ROAS subinterface?",
    options: [
      "No, ROAS is strictly for IPv4.",
      "Yes, IPv6 is fully supported on 802.1Q encapsulated subinterfaces.",
      "Yes, but only if the physical interface has an IPv4 address.",
      "No, IPv6 requires Layer 3 switches.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Router-on-a-stick supports dual-stack or IPv6-only configurations. You can assign 'ipv6 address' to subinterfaces exactly as you would with IPv4.",
  },
  {
    id: 38,
    question:
      "If a switch port connected to a ROAS router is accidentally configured as an access port on VLAN 10, what will happen to traffic from VLAN 20?",
    options: [
      "It will be routed normally.",
      "The switch will strip the tags and send it to the router.",
      "The switch will drop traffic from VLAN 20 because an access port only belongs to one VLAN.",
      "The router will automatically convert the port to a trunk.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An access port can only carry traffic for a single VLAN. Traffic from any other VLAN will not traverse the link, breaking inter-VLAN routing for all VLANs except VLAN 10.",
  },
  {
    id: 39,
    question: "Is DHCP supported across a ROAS configuration?",
    options: [
      "No, DHCP broadcasts cannot cross a router.",
      "Yes, if the router is configured as a DHCP server, or if 'ip helper-address' is configured on the subinterfaces.",
      "Yes, but only if the DHCP server is in the Native VLAN.",
      "No, DHCP requires SVIs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A router can serve DHCP directly to its subnets, or act as a DHCP Relay Agent using the 'ip helper-address' command on each subinterface.",
  },
  {
    id: 40,
    question:
      "What is the maximum number of subinterfaces you can realistically configure on a single Cisco router interface?",
    options: [
      "10",
      "255",
      "1024",
      "Over 4 billion, limited only by available VLAN IDs (4094) and hardware resources.",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "Cisco IOS allows subinterface numbers up to 4.2 billion. However, practically, you are limited by the 4094 available 802.1Q VLAN IDs and the physical bandwidth/CPU of the router.",
  },

  // --- Layer 3 Switching (SVIs & Routed Ports) ---
  {
    id: 41,
    question: "What is an SVI?",
    options: [
      "Switch Virtual Interface",
      "Standard VLAN Identifier",
      "Secure Virtual Interconnect",
      "Switch VLAN Instance",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "An SVI (Switch Virtual Interface) is a logical Layer 3 interface configured on a multilayer switch to route traffic for a specific VLAN.",
  },
  {
    id: 42,
    question:
      "Which global configuration command is required on a Cisco multilayer switch to enable inter-VLAN routing?",
    options: [
      "route enable",
      "ip routing",
      "switchport routing",
      "vlan routing",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The global command 'ip routing' must be enabled on a Layer 3 switch for it to build a routing table and route packets between its SVIs.",
  },
  {
    id: 43,
    question:
      "If 'ip routing' is NOT enabled on a multilayer switch, how does the switch treat its SVIs?",
    options: [
      "It shuts them down automatically.",
      "It uses them only for local management access, acting like a Layer 2 switch.",
      "It drops all traffic entering the SVIs.",
      "It forwards all traffic to the default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Without 'ip routing', a Layer 3 switch acts purely as a Layer 2 switch. Any configured SVIs can only be used for remote management (like SSH/Ping) of the switch itself.",
  },
  {
    id: 44,
    question:
      "Which command creates an SVI for VLAN 10 and enters its configuration mode?",
    options: [
      "vlan 10",
      "interface vlan 10",
      "switchport access vlan 10",
      "interface SVI 10",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'interface vlan 10' creates the logical Layer 3 interface for VLAN 10.",
  },
  {
    id: 45,
    question:
      "What conditions must be met for an SVI (e.g., interface vlan 10) to be in the 'Up/Up' state?",
    options: [
      "The VLAN must exist in the VLAN database, and at least one active port (access or trunk) must be assigned to and forwarding in that VLAN.",
      "The SVI must be assigned a public IP address.",
      "A routing protocol must be configured.",
      "The switch must be connected to a router.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "An SVI will only transition to 'Up/Up' if the VLAN exists locally and there is at least one physical Layer 2 interface forwarding traffic for that VLAN.",
  },
  {
    id: 46,
    question:
      "In an enterprise network, what is the primary advantage of using a Layer 3 switch for inter-VLAN routing instead of Router-on-a-Stick?",
    options: [
      "Lower equipment cost",
      "Much higher performance (wire-speed routing via ASICs) and no single-link bottleneck",
      "It supports more routing protocols",
      "It doesn't require IP addresses",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Layer 3 switches process routing in specialized hardware (ASICs), allowing them to route traffic between VLANs at near wire-speed, without the physical link bottleneck of ROAS.",
  },
  {
    id: 47,
    question: "What is a 'routed port' on a multilayer switch?",
    options: [
      "An access port configured for a specific VLAN.",
      "A trunk port carrying multiple VLANs to a router.",
      "A physical switch port that has been converted to act exactly like a router interface, with no Layer 2 switching or VLAN association.",
      "A port used exclusively for OSPF.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A routed port is a physical switch interface that has Layer 2 switching disabled. It receives an IP address directly and acts like a port on a traditional router.",
  },
  {
    id: 48,
    question:
      "Which command converts a Layer 2 switchport into a Layer 3 routed port?",
    options: [
      "ip routing",
      "no switchport",
      "switchport mode route",
      "routing enable",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'no switchport' command, applied at the interface level, removes the port's Layer 2 switching capabilities, converting it into a Layer 3 routed port.",
  },
  {
    id: 49,
    question: "Can a routed port ('no switchport') be assigned to a VLAN?",
    options: [
      "Yes, using 'switchport access vlan'.",
      "No, a routed port is not associated with any VLAN.",
      "Yes, but only VLAN 1.",
      "Yes, it defaults to the native VLAN.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Once 'no switchport' is applied, the port ceases to be a Layer 2 entity. It has no VLAN association; it is a pure Layer 3 interface.",
  },
  {
    id: 50,
    question:
      "In a typical campus LAN design, where are SVIs usually placed to serve as default gateways for end-user PCs?",
    options: [
      "Access Layer switches",
      "Core Layer switches",
      "Distribution Layer switches",
      "Edge Routers",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In traditional multi-tier designs, Layer 2 is used at the Access layer, and the Distribution layer multilayer switches host the SVIs to provide inter-VLAN routing and policy enforcement.",
  },
  {
    id: 51,
    question:
      "A PC in VLAN 10 pings a PC in VLAN 20. Both VLANs have SVIs configured on a Multilayer Switch. What device rewrites the source and destination MAC addresses?",
    options: [
      "The sending PC",
      "The Multilayer Switch",
      "The receiving PC",
      "No device rewrites the MAC addresses",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Multilayer switch acts as the router. It receives the frame, strips the Layer 2 header, looks up the IP, and builds a new Layer 2 header for VLAN 20 with its own SVI MAC as the source.",
  },
  {
    id: 52,
    question:
      "If a Layer 3 switch has SVIs for VLANs 10, 20, and 30, and 'ip routing' is enabled, what command is needed to allow routing between these three VLANs?",
    options: [
      "router rip",
      "router ospf 1",
      "No extra commands are needed; directly connected SVIs route automatically.",
      "ip route 0.0.0.0 0.0.0.0",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Just like a physical router, a Layer 3 switch automatically routes between its 'Connected' interfaces (the SVIs) once 'ip routing' is enabled globally.",
  },
  {
    id: 53,
    question:
      "Which of the following is an advantage of routed ports over SVIs?",
    options: [
      "Routed ports allow a single physical port to route multiple subnets.",
      "Routed ports are not dependent on Spanning Tree Protocol (STP) state changes.",
      "Routed ports act as access ports.",
      "Routed ports do not require an IP address.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because a routed port has no Layer 2 switching capabilities, it does not run STP. Therefore, it is immune to STP topology changes, blocking states, and convergence delays.",
  },
  {
    id: 54,
    question:
      "You configure 'interface vlan 50' and assign an IP address. The interface shows 'administratively down / down'. What must you do?",
    options: [
      "Create the VLAN 50 in the VLAN database.",
      "Issue the 'no shutdown' command on the SVI.",
      "Assign a port to VLAN 50.",
      "Connect a router to the switch.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Like physical interfaces, an SVI must be explicitly brought up using the 'no shutdown' command in interface configuration mode.",
  },
  {
    id: 55,
    question:
      "A Layer 3 switch is replacing a ROAS setup. What should the default gateway of the PCs be changed to?",
    options: [
      "The IP address of the Layer 3 switch's physical port.",
      "The IP address of the SVI for their respective VLAN.",
      "The IP address of the core router.",
      "It does not need to be changed.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The PCs need to send traffic to their local subnet's router interface, which is now the SVI IP address configured on the Layer 3 switch.",
  },
  {
    id: 56,
    question: "How do you verify if 'ip routing' is enabled on a Cisco switch?",
    options: [
      "show ip routing",
      "show running-config | include ip routing",
      "show vlan",
      "show interface vlan",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Checking the running configuration using 'show run | inc ip routing' or checking if the routing table populates via 'show ip route' verifies if the feature is enabled.",
  },
  {
    id: 57,
    question: "What is the function of the 'autostate' feature on an SVI?",
    options: [
      "It automatically assigns an IP address via DHCP.",
      "It keeps the SVI up even if no physical ports are assigned to the VLAN.",
      "It automatically brings down the SVI line protocol if no active Layer 2 ports in that VLAN are forwarding.",
      "It enables routing automatically.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By default, an SVI's line protocol relies on the 'autostate' feature. If the last physical port in the VLAN goes down, the SVI automatically goes down so the switch doesn't blackhole routed traffic.",
  },
  {
    id: 58,
    question:
      "How can you bypass the 'autostate' behavior to keep an SVI up indefinitely?",
    options: [
      "switchport autostate disable",
      "no autostate",
      "keepalive disable",
      "There is no way to bypass it.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The interface command 'no autostate' disables this tracking, keeping the SVI line protocol up regardless of the physical port states in that VLAN.",
  },
  {
    id: 59,
    question:
      "Which feature on a Cisco Multilayer switch allows hardware-based high-speed IP packet forwarding?",
    options: [
      "Process Switching",
      "Fast Switching",
      "Cisco Express Forwarding (CEF)",
      "Cut-Through Switching",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Cisco Express Forwarding (CEF) builds a Forwarding Information Base (FIB) and an Adjacency Table in hardware ASICs to route packets at wire speed.",
  },
  {
    id: 60,
    question:
      "If a Layer 3 switch routes a packet from SVI 10 to SVI 20, what MAC address is used as the source MAC in the new Ethernet frame?",
    options: [
      "The MAC address of the original sending PC.",
      "The MAC address of the physical ingress port.",
      "The MAC address assigned to SVI 20.",
      "The broadcast MAC address.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "When the Layer 3 switch routes the packet out of SVI 20 towards the destination PC, it uses SVI 20's MAC address as the source MAC.",
  },

  // --- Troubleshooting Inter-VLAN Routing ---
  {
    id: 61,
    question:
      "A PC in VLAN 10 cannot ping a PC in VLAN 20. Both PCs can ping their respective default gateways. What is the most likely issue?",
    options: [
      "A trunk link is down.",
      "The PC in VLAN 10 has the wrong default gateway.",
      "Routing is not enabled between the two subnets (e.g., missing 'ip routing' on the L3 switch).",
      "The switch port for the PC is in the wrong VLAN.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "If both PCs can reach their gateways, Layer 2 and local IP configurations are correct. The failure lies in the Layer 3 device failing to route the packets between the two subnets.",
  },
  {
    id: 62,
    question:
      "In a ROAS setup, PC1 (VLAN 10) cannot ping its default gateway. What is a possible cause?",
    options: [
      "The router's physical interface is administratively down.",
      "The switch port connected to the router is configured as an access port instead of a trunk.",
      "The subinterface has the wrong VLAN ID configured in the encapsulation command.",
      "All of the above.",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "All of these issues break the ROAS path: parent interface down drops the subinterface, access port drops tagged frames, and mismatched VLAN ID misdirects the traffic.",
  },
  {
    id: 63,
    question:
      "A PC has IP 10.1.1.50/24. The ROAS subinterface is 10.1.2.1/24. Why can't the PC ping the internet?",
    options: [
      "The PC needs an IPv6 address.",
      "The PC and the default gateway subinterface are on different IP subnets.",
      "The router doesn't have a routing protocol.",
      "The trunk port is blocking VLAN 10.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A PC and its default gateway must be on the exact same IP subnet. 10.1.1.0/24 and 10.1.2.0/24 are different subnets.",
  },
  {
    id: 64,
    question:
      "You configure 'interface vlan 30' on a switch, assign an IP, and type 'no shut'. The interface state is 'down/down'. 'show vlan' reveals VLAN 30 is not in the database. What happens if you add it?",
    options: [
      "The SVI state remains down until an access port is also assigned to VLAN 30.",
      "The SVI instantly goes Up/Up.",
      "The SVI becomes a routed port.",
      "The switch crashes.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Even if the VLAN exists in the database, the autostate rule requires at least one active Layer 2 port (access or trunk) forwarding in that VLAN for the SVI to come up.",
  },
  {
    id: 65,
    question:
      "A router has subinterface G0/0.10 configured with 'encapsulation dot1q 10'. The switch trunk port native VLAN is changed to 10. What happens to VLAN 10 traffic?",
    options: [
      "It routes faster because it is untagged.",
      "The switch sends it untagged, but the router expects a tag. The router drops the traffic.",
      "The router automatically strips the tag.",
      "Traffic flows normally.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because the native VLAN is 10, the switch sends VLAN 10 frames untagged. Subinterface G0/0.10 expects a tag of 10. Since it arrives untagged, the router ignores/drops it.",
  },
  {
    id: 66,
    question:
      "How do you fix the issue described in the previous question (switch native VLAN is 10, router expects a tag)?",
    options: [
      "Change the switch trunk native VLAN to a different, unused VLAN (e.g., 99).",
      "Configure 'encapsulation dot1q 10 native' on the router subinterface.",
      "Either A or B will resolve the mismatch.",
      "Change the router to an SVI.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "You can align them by telling the router to expect untagged traffic on VLAN 10 (using the 'native' keyword) OR by changing the switch to tag VLAN 10 (by moving the native VLAN to an unused ID).",
  },
  {
    id: 67,
    question:
      "PC1 (VLAN 10) and PC2 (VLAN 10) are on different switches connected by a trunk. They cannot ping each other. Inter-VLAN routing is NOT involved. What is a possible trunking issue?",
    options: [
      "VLAN 10 is not permitted on the trunk allowed list.",
      "The router is down.",
      "The SVIs are down.",
      "The native VLAN doesn't match.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "If intra-VLAN traffic fails across a trunk, the most likely Layer 2 issue is that the VLAN has been removed from the 'switchport trunk allowed vlan' list.",
  },
  {
    id: 68,
    question:
      "You issue 'show ip route' on a Multilayer switch and see nothing, despite configuring 5 SVIs with IP addresses and 'no shut'. What did you forget?",
    options: [
      "To save the configuration.",
      "To enable 'ip routing' globally.",
      "To connect a router.",
      "To configure a default route.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Without the 'ip routing' command, the Multilayer switch will not build an IP routing table, and the SVIs will act only as local management interfaces.",
  },
  {
    id: 69,
    question:
      "If two PCs are in different VLANs on the same switch, and NO router or Layer 3 switch is present, can they ping each other?",
    options: [
      "Yes, the switch bridges the connection.",
      "No, a Layer 3 device is required to cross broadcast domain boundaries.",
      "Yes, if they use IPv6.",
      "Yes, if Proxy ARP is enabled on the PCs.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VLANs completely isolate Layer 2 traffic. A router or Layer 3 switch is absolutely mandatory to forward packets between different VLANs.",
  },
  {
    id: 70,
    question:
      "A PC has the correct IP and subnet mask but is missing the default gateway configuration. Can it ping a PC in the SAME VLAN?",
    options: [
      "No, pings always go to the default gateway first.",
      "Yes, local subnet traffic relies on ARP and MAC addresses, not the default gateway.",
      "Only if the switch has 'ip routing' enabled.",
      "Only if the router is online.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The default gateway is only used when the destination IP address is outside the local subnet. Local traffic goes directly from host to host via Layer 2 switching.",
  },
  {
    id: 71,
    question:
      "What error message might a PC display if it tries to ping a host in another VLAN, but the PC's default gateway is down?",
    options: [
      "Destination host unreachable",
      "Request timed out",
      "Hardware error",
      "Network path not found",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Depending on the OS, if the PC sends an ARP for the gateway and gets no reply, it cannot forward the packet, often resulting in 'Destination host unreachable' generated locally by the PC.",
  },
  {
    id: 72,
    question:
      "In ROAS, what happens if the router's interface is configured with an IP address, and subinterfaces are also configured with IPs?",
    options: [
      "The router crashes.",
      "The physical interface IP handles untagged (native VLAN) traffic, while subinterfaces handle tagged traffic.",
      "The physical IP overrides the subinterfaces.",
      "The physical interface cannot have an IP address.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "While not best practice, configuring an IP directly on the physical parent interface makes it the gateway for untagged frames received on that port, while subinterfaces handle tagged frames.",
  },
  {
    id: 73,
    question:
      "You run 'show interfaces trunk' and see VLAN 20 is under 'Vlans in spanning tree forwarding state and not pruned'. What does this mean?",
    options: [
      "VLAN 20 is blocked by STP.",
      "VLAN 20 is active, allowed, and successfully forwarding traffic across the trunk.",
      "VLAN 20 is not created in the database.",
      "VLAN 20 is pruned by VTP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "This section of the output confirms that the VLAN exists, is allowed on the trunk, and Spanning Tree has placed the port in the forwarding state for that VLAN.",
  },
  {
    id: 74,
    question:
      "A Layer 3 switch has SVIs for VLAN 10 and 20. PC1 (VLAN 10) pings PC2 (VLAN 20). PC2 receives the ping but PC1 gets 'Request timed out'. PC2 can ping its own gateway. What is a likely cause?",
    options: [
      "PC1 has the wrong default gateway.",
      "PC2 has a firewall blocking incoming ICMP.",
      "PC2 has the wrong default gateway configured.",
      "The trunk is down.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If PC2 receives the ping, PC1's routing is fine. If PC2 cannot reply, it means PC2 doesn't know how to reach PC1's subnet, likely because PC2's default gateway IP is misconfigured.",
  },
  {
    id: 75,
    question:
      "When troubleshooting ROAS, you see 'encapsulation dot1q 10' on G0/0.20. What is the most likely result?",
    options: [
      "It will route normally for VLAN 20.",
      "It will cause confusion, as G0/0.20 is now routing traffic for VLAN 10.",
      "The command will be rejected.",
      "It will act as a backup for VLAN 10.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router will use G0/0.20 to process tags for VLAN 10. While functional, it is a severe misconfiguration against best practices and will confuse administrators troubleshooting IP subnets.",
  },

  // --- Design, Packets & Advanced Details ---
  {
    id: 76,
    question:
      "Which MAC address does a PC use as the Destination MAC when sending an ARP request to find its default gateway?",
    options: [
      "The gateway's MAC address",
      "FF:FF:FF:FF:FF:FF (Broadcast)",
      "00:00:00:00:00:00",
      "The switch's MAC address",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "ARP requests are always sent as Layer 2 broadcasts (FF:FF:FF:FF:FF:FF) so that all devices on the local subnet, including the gateway, receive the query.",
  },
  {
    id: 77,
    question:
      "How does a router process an ARP request received on subinterface G0/0.10?",
    options: [
      "It floods it to all other subinterfaces.",
      "It checks if the requested IP matches the IP of G0/0.10, and if so, replies with the router's MAC address.",
      "It forwards it to the internet.",
      "It ignores all ARP requests.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Routers do not forward broadcasts. If the ARP is asking for the subinterface's own IP, the router replies. Otherwise, it drops the broadcast.",
  },
  {
    id: 78,
    question:
      "When a packet is routed from VLAN 10 to VLAN 20 via ROAS, what happens to the Time-To-Live (TTL) field in the IP header?",
    options: [
      "It is increased by 1.",
      "It remains unchanged.",
      "It is decreased by 1.",
      "It is set to 255.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Every time a Layer 3 device (router or L3 switch) routes a packet, it decrements the IPv4 TTL (or IPv6 Hop Limit) field by 1 to prevent infinite routing loops.",
  },
  {
    id: 79,
    question:
      "If a multilayer switch has a routed port (no switchport) connected to an ISP, and SVIs for internal VLANs, what must be configured to allow internet access?",
    options: [
      "VLAN Trunking to the ISP",
      "A default route (e.g., 'ip route 0.0.0.0 0.0.0.0') pointing to the ISP's IP",
      "Subinterfaces on the routed port",
      "A dynamic MAC address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The switch needs a default static route pointing out the routed port to forward internet-bound traffic that doesn't match its local SVIs.",
  },
  {
    id: 80,
    question:
      "What is an advantage of using SVIs over Router-on-a-Stick regarding port density?",
    options: [
      "SVIs don't use any ports.",
      "SVIs require more physical ports.",
      "A Layer 3 switch typically has 24-48 physical ports built-in, whereas routers have fewer, requiring external switches.",
      "ROAS does not require a switch.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Layer 3 switch is an all-in-one device providing high port density for end devices while handling the inter-VLAN routing internally.",
  },
  {
    id: 81,
    question:
      "In a ROAS design, what encapsulation must be supported by the router?",
    options: ["Frame Relay", "HDLC", "802.1Q", "PPP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The router must support 802.1Q encapsulation to read and insert VLAN tags on the trunk link.",
  },
  {
    id: 82,
    question:
      "Which of the following is true about the SVI MAC address on a Cisco Catalyst switch?",
    options: [
      "Every SVI gets a unique, hardware-generated MAC address.",
      "All SVIs on the switch share the exact same base MAC address.",
      "SVIs do not use MAC addresses.",
      "SVIs dynamically adopt the MAC address of the core router.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "On most Cisco Catalyst platforms, all SVIs share a single base MAC address burned into the switch's backplane (though some platforms can assign unique ones).",
  },
  {
    id: 83,
    question:
      "What happens if a PC tries to send a packet to a destination IP on a different subnet, but the PC's ARP table is empty?",
    options: [
      "It sends an ARP request for the destination IP.",
      "It sends an ARP request for the default gateway's IP.",
      "It drops the packet.",
      "It broadcasts the packet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because the destination is off-subnet, the PC knows it must send the packet to the router. It ARPs for the router's IP to get the router's MAC address.",
  },
  {
    id: 84,
    question: "What command enables IPv6 routing on a Layer 3 switch?",
    options: [
      "ipv6 enable",
      "ip routing ipv6",
      "ipv6 unicast-routing",
      "route ipv6",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "While 'ip routing' enables IPv4, the global configuration command 'ipv6 unicast-routing' must be issued to enable IPv6 inter-VLAN routing.",
  },
  {
    id: 85,
    question: "In a ROAS setup, what is the best practice for the native VLAN?",
    options: [
      "Leave it as VLAN 1 and do not configure it on the router.",
      "Change it to an unused VLAN (e.g., 999) on the switch and create a matching subinterface on the router to sink untagged traffic.",
      "Configure the router to tag the native VLAN.",
      "Disable the native VLAN entirely.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Best practice dictates moving the native VLAN to an unused, dedicated 'dummy' VLAN to prevent VLAN hopping attacks, and optionally configuring the router to drop its traffic.",
  },
  {
    id: 86,
    question: "Can a router physical interface act as an access port?",
    options: [
      "No, routers only support trunking.",
      "Yes, if connected to a switch access port, a standard router interface with an IP acts effectively like a device in a single VLAN.",
      "Only if the 'switchport' command is used.",
      "Only for VLAN 1.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A standard routed interface sends and receives untagged traffic. If plugged into a switch access port (e.g., VLAN 10), the router interface routes traffic purely for VLAN 10.",
  },
  {
    id: 87,
    question:
      "Which of the following describes a 'black hole' routing issue in inter-VLAN routing?",
    options: [
      "The router sends traffic to a switch that drops it due to a missing VLAN.",
      "The switch MAC table overflows.",
      "BGP drops the traffic.",
      "The router CPU hits 100%.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "If the router has an active route/subinterface for a VLAN, but the switch has deleted that VLAN or pruned it from the trunk, the router sends traffic down the trunk where it is silently dropped by the switch.",
  },
  {
    id: 88,
    question:
      "Which interface configuration creates a logical subinterface on a router for IPv6?",
    options: [
      "ipv6 interface g0/0.10",
      "interface g0/0 v6 10",
      "interface g0/0.10 (same as IPv4)",
      "subinterface ipv6 10",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The command to create the subinterface ('interface g0/0.10') is identical regardless of whether you are assigning an IPv4 or IPv6 address to it.",
  },
  {
    id: 89,
    question:
      "What determines if a multilayer switch uses process switching (CPU) or CEF (Hardware ASICs) for routing?",
    options: [
      "The size of the packet.",
      "CEF is enabled by default. Only unsupported features or complex packets fall back to the CPU.",
      "The 'ip routing' command dictates it.",
      "SVIs use CEF, routed ports use CPU.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Cisco Express Forwarding (CEF) is on by default and handles almost all routing in hardware. Packets with complex options, TTL=1, or bound for the switch itself hit the CPU.",
  },
  {
    id: 90,
    question:
      "Which command shows the MAC address table of the Layer 3 switch to verify if it has learned a PC's MAC address?",
    options: [
      "show arp",
      "show ip route",
      "show mac address-table",
      "show interfaces",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show mac address-table' displays the Layer 2 CAM table showing which ports learned which MAC addresses.",
  },
  {
    id: 91,
    question:
      "Which command shows the Layer 3 to Layer 2 mapping (IP to MAC) on a router or Layer 3 switch?",
    options: [
      "show ip arp",
      "show mac address-table",
      "show ip route",
      "show ip interface",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ip arp' displays the ARP cache, mapping IP addresses to learned MAC addresses for all directly connected subnets.",
  },
  {
    id: 92,
    question:
      "If a Layer 3 switch has a routed port (G0/1) with IP 10.1.1.1 and an SVI (VLAN 20) with IP 10.1.2.1, how does traffic flow from VLAN 20 to G0/1?",
    options: [
      "It must go through an external router.",
      "The switch routes it internally from the SVI to the routed port via its backplane routing table.",
      "It bridges the traffic.",
      "It uses NAT.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Layer 3 switch handles both SVIs and routed ports as standard internal routing interfaces and passes traffic between them exactly like a router.",
  },
  {
    id: 93,
    question: "What is Proxy ARP?",
    options: [
      "A feature where a switch acts as a DHCP server.",
      "A feature where a router answers an ARP request on behalf of a destination host if the router has a route to that host.",
      "A protocol to sync ARP tables between switches.",
      "A security feature to block ARP spoofing.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Proxy ARP (enabled by default on Cisco routers) allows a router to answer ARPs for remote networks with its own MAC address, helping misconfigured hosts (without a default gateway) reach external subnets.",
  },
  {
    id: 94,
    question:
      "Why can Proxy ARP cause confusion in inter-VLAN routing troubleshooting?",
    options: [
      "It disables the trunk link.",
      "It changes the IP addresses.",
      "A host without a configured gateway might still successfully ping remote subnets because the router responds to its local ARP broadcasts, masking the configuration error.",
      "It drops all ICMP traffic.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If a host sends an ARP for an external IP, the router uses Proxy ARP to reply. The host works, but its configuration is technically broken. If Proxy ARP is turned off, the host immediately loses connectivity.",
  },
  {
    id: 95,
    question:
      "What happens to the 802.1Q tag when an SVI forwards a packet to a routed port ('no switchport')?",
    options: [
      "The tag is forwarded to the routed port.",
      "The switch strips the VLAN tag because routed ports do not process VLAN tags.",
      "The switch changes the tag to VLAN 1.",
      "The packet is dropped.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Routed ports do not understand or use 802.1Q tags natively. The L3 switch strips the tag from the incoming VLAN before routing it out the routed port.",
  },
  {
    id: 96,
    question:
      "You want to configure inter-VLAN routing using a router. The router has 4 physical interfaces. You need to route 6 VLANs. What is the best solution?",
    options: [
      "Buy another router.",
      "Use Router-on-a-Stick with subinterfaces on one of the physical interfaces.",
      "Use legacy routing and combine two VLANs on one port.",
      "You cannot route 6 VLANs with 4 interfaces.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "ROAS allows you to route dozens of VLANs over a single physical interface using logical subinterfaces, overcoming the physical port limitation.",
  },
  {
    id: 97,
    question:
      "A subinterface is configured with 'encapsulation dot1q 40'. What determines the subnet mask for this VLAN?",
    options: [
      "The native VLAN.",
      "The 'ip address' command applied to the subinterface.",
      "The switch's VTP configuration.",
      "The DHCP server automatically.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'ip address [ip] [mask]' command explicitly defines the subnet mask and network boundary for the subinterface.",
  },
  {
    id: 98,
    question:
      "When pinging from a router to a local PC, the first ping often fails (times out) while the next 4 succeed. Why?",
    options: [
      "The switch is blocking ICMP.",
      "The router drops the first packet while waiting for the ARP resolution process to complete.",
      "The trunk link is negotiating.",
      "Spanning tree is recalculating.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router has to send an ARP request to find the PC's MAC address. It drops the first ICMP packet while waiting for the ARP reply. Subsequent packets succeed because the MAC is now cached.",
  },
  {
    id: 99,
    question:
      "Which of the following commands is used to view the detailed routing process, indicating whether a packet was routed via hardware (CEF) or software (CPU)?",
    options: [
      "show ip route",
      "show ip cef",
      "show interfaces",
      "show mac address-table",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "'show ip cef' displays the Cisco Express Forwarding table, showing the next-hop MAC addresses and interfaces resolved in hardware.",
  },
  {
    id: 100,
    question:
      "In summary, what are the three primary requirements for successful Inter-VLAN routing on a Multilayer Switch?",
    options: [
      "VTP Server mode, DTP auto, and STP Portfast",
      "'ip routing' enabled, SVIs configured with IP addresses, and active Layer 2 ports assigned to those VLANs",
      "Router-on-a-stick, subinterfaces, and static routes",
      "NAT, Access Control Lists, and Default routes",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "For an SVI to route traffic, the global routing engine must be on ('ip routing'), the SVI must have an IP address, and the VLAN must be active in Layer 2 (Up/Up state).",
  },
];
