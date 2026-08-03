import type { QuizQuestion } from "./types";
export const vlansQuestions: QuizQuestion[] = [
  {
    id: 2,
    question:
      "Which of the following describes the normal range of VLAN IDs on a Cisco switch?",
    options: ["1 - 1001", "1 - 1005", "1006 - 4094", "0 - 4095"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The normal range for VLANs is 1 to 1005. VLANs 1002-1005 are reserved for legacy protocols (FDDI/Token Ring), and VLAN 1 is the default.",
  },
  {
    id: 3,
    question:
      "Where is the VLAN database for normal range VLANs stored on a Cisco switch by default?",
    options: [
      "running-config",
      "startup-config",
      "vlan.dat in flash memory",
      "NVRAM",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Normal range VLANs (1-1005) are stored in a file called vlan.dat located in flash memory, not in the running or startup configuration.",
  },
  {
    id: 4,
    question: "Where are extended range VLANs (1006-4094) stored by default?",
    options: ["vlan.dat", "startup-config only", "running-config", "NVRAM"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Extended range VLANs are saved in the running configuration (and subsequently the startup-config) and require VTP Transparent mode to be configured in VTP versions 1 and 2.",
  },
  {
    id: 5,
    question:
      "What happens to an access port if the VLAN it is assigned to is deleted?",
    options: [
      "It automatically reverts to the default VLAN 1 and keeps forwarding.",
      "It is placed in an inactive state and cannot forward traffic.",
      "It negotiates a trunk link with the neighboring switch.",
      "It shuts down administratively and enters an err-disable state.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If a port's assigned VLAN is deleted, the port becomes inactive. It will not show up in the 'show vlan' output until the VLAN is recreated or the port is reassigned.",
  },
  {
    id: 6,
    question: "Which IEEE standard defines VLAN tagging for Ethernet frames?",
    options: ["802.1D", "802.1w", "802.1Q", "802.3ad"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IEEE 802.1Q is the industry standard for VLAN tagging on trunk links. 802.1D/w are Spanning Tree, and 802.3ad is EtherChannel.",
  },
  {
    id: 7,
    question:
      "How many bytes does an 802.1Q tag insert into the original Ethernet frame?",
    options: ["2 bytes", "4 bytes", "8 bytes", "30 bytes"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An 802.1Q tag adds 4 bytes to the Ethernet header (2 bytes for the TPID and 2 bytes for TCI, which includes the VLAN ID).",
  },
  {
    id: 8,
    question:
      "Which proprietary Cisco trunking protocol encapsulates the entire original Ethernet frame rather than inserting a tag?",
    options: ["802.1Q", "VTP", "ISL", "DTP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Inter-Switch Link (ISL) is a Cisco-proprietary protocol that encapsulates the entire frame with a 26-byte header and a 4-byte FCS, totaling 30 bytes.",
  },
  {
    id: 9,
    question:
      "What is the primary purpose of the Native VLAN on an 802.1Q trunk?",
    options: [
      "To carry management traffic only.",
      "To carry untagged traffic across the trunk link.",
      "To encrypt inter-switch communications.",
      "To dynamically negotiate trunking status.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Native VLAN is designed to carry untagged traffic over an 802.1Q trunk. Any untagged frame received on a trunk is assumed to belong to the Native VLAN.",
  },
  {
    id: 10,
    question: "What is the default Native VLAN on a Cisco Catalyst switch?",
    options: ["VLAN 0", "VLAN 1", "VLAN 1002", "VLAN 4094"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, all Cisco switch ports belong to VLAN 1, and VLAN 1 is the default Native VLAN for all 802.1Q trunks.",
  },
  {
    id: 11,
    question:
      "If Switch A has a Native VLAN of 10 and Switch B has a Native VLAN of 20 on their connecting trunk, what happens?",
    options: [
      "The trunk link drops and the port enters an err-disable state, blocking traffic.",
      "CDP generates Native VLAN mismatch warnings, and STP may block the port to prevent loops.",
      "The switches dynamically negotiate to use VLAN 1 for all untagged traffic.",
      "Traffic flows normally, automatically translating VLAN 10 to VLAN 20 on the link.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Native VLAN mismatch causes untagged traffic to bleed between different VLANs. CDP will detect this and issue warnings, and Spanning Tree may put the port into a blocking state (PVID inconsistent).",
  },
  {
    id: 12,
    question:
      "Which command configures a port to permanently operate as a trunk?",
    options: [
      "switchport mode dynamic desirable",
      "switchport mode dynamic auto",
      "switchport mode access",
      "switchport mode trunk",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The 'switchport mode trunk' command hardcodes the interface to become a trunk link, bypassing DTP negotiation (though it still sends DTP frames unless disabled).",
  },
  {
    id: 13,
    question: "What does the command 'switchport nonegotiate' do?",
    options: [
      "It disables Spanning Tree and STP BPDUs on the switch port.",
      "It prevents the port from sending DTP (Dynamic Trunking Protocol) frames.",
      "It disables CDP advertisements on the local switch interface.",
      "It forces the port to become an access port and stop trunk negotiation.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'switchport nonegotiate' disables DTP. The port will no longer send DTP negotiation frames. It must be paired with static 'mode trunk' or 'mode access'.",
  },
  {
    id: 14,
    question:
      "Switch A is configured with 'switchport mode dynamic auto'. Switch B is configured with 'switchport mode dynamic auto'. What will the link become?",
    options: [
      "A trunk link.",
      "An access link.",
      "An err-disabled link.",
      "A routed port.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Dynamic auto waits for the other side to initiate trunking. If both sides are waiting (auto), neither initiates, and the link defaults to an access link.",
  },
  {
    id: 15,
    question:
      "Switch A is 'dynamic desirable' and Switch B is 'dynamic auto'. What will the link become?",
    options: [
      "An access link.",
      "A trunk link.",
      "Err-disabled.",
      "Half-duplex.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Dynamic desirable actively attempts to form a trunk. Dynamic auto is willing to form a trunk if asked. Therefore, they will successfully negotiate a trunk.",
  },
  {
    id: 16,
    question:
      "Which of the following pairs of DTP modes will result in an access link?",
    options: [
      "Desirable - Desirable",
      "Desirable - Trunk",
      "Auto - Auto",
      "Auto - Trunk",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "When both sides are set to 'dynamic auto', neither side initiates the trunk negotiation, resulting in a standard access link.",
  },
  {
    id: 17,
    question:
      "What is the primary function of the VLAN Trunking Protocol (VTP)?",
    options: [
      "To dynamically negotiate trunk links between connected switches.",
      "To route traffic between different VLANs using a router or firewall.",
      "To synchronize VLAN creation, modification, and deletion across a switch domain.",
      "To prevent Layer 2 switching loops by running the Spanning Tree Protocol.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "VTP allows a network administrator to configure a VLAN on a VTP Server and have that VLAN dynamically propagated and created on all other VTP Client switches in the domain.",
  },
  {
    id: 18,
    question: "What is the default VTP mode on a Cisco Catalyst switch?",
    options: ["Client", "Transparent", "Server", "Off"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "By default, Cisco switches are in VTP Server mode, meaning they are capable of creating, modifying, and deleting VLANs for the domain.",
  },
  {
    id: 19,
    question:
      "Which VTP mode allows local VLAN creation but does not advertise its own VLANs or sync its database with other switches?",
    options: ["Server", "Client", "Transparent", "Pruning"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "VTP Transparent mode ignores VTP updates from the domain (keeping its local VLANs independent) but forwards VTP advertisements out its other trunk ports.",
  },
  {
    id: 20,
    question:
      "In VTP, what determines if a switch will overwrite its VLAN database with an incoming VTP advertisement?",
    options: [
      "The lowest MAC address of the sender.",
      "A higher Configuration Revision Number.",
      "The switch with the longest uptime.",
      "A lower Configuration Revision Number.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A switch will overwrite its VLAN database (vlan.dat) if it receives a VTP advertisement with the same domain name, matching password, and a higher Configuration Revision number.",
  },
  {
    id: 21,
    question:
      "A new switch is added to a network. It accidentally wipes out all VLANs in the entire network. What caused this?",
    options: [
      "The new switch had an old VTP password that prevented it from joining the VTP domain of the network.",
      "The new switch was in VTP Client mode with a configuration revision number of 0 at first startup.",
      "The new switch was in VTP Server or Client mode with the same domain name and a higher VTP revision number.",
      "The new switch had STP Root Guard enabled on all of its trunk interfaces facing the network.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If a switch is connected to the network with a matching domain and a higher revision number (even if in Client mode), the rest of the network will sync to its database, potentially erasing all existing VLANs.",
  },
  {
    id: 22,
    question:
      "What is the safest way to reset a switch's VTP Configuration Revision number to 0 before attaching it to a production network?",
    options: [
      "Erase the startup-config and reload the switch completely.",
      "Change the VTP domain name to a bogus name, then change it back.",
      "Change the switch to VTP Server mode before connecting it.",
      "Issue the 'clear vtp counters' command to reset the revision count.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Changing the VTP domain name (or changing the VTP mode to Transparent) resets the VTP Configuration Revision number back to 0.",
  },
  {
    id: 23,
    question:
      "What happens if you try to create a VLAN on a switch operating in VTP Client mode?",
    options: [
      "The VLAN is created and synced to the server.",
      "The VLAN is created locally but not synced.",
      "The CLI will reject the command and display an error.",
      "The switch crashes.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "VTP Client mode specifically prevents the creation, modification, or deletion of VLANs from the local CLI. The command will be rejected.",
  },
  {
    id: 24,
    question: "What is the purpose of VTP Pruning?",
    options: [
      "To delete unused VLANs from the VTP database and remove them from every switch in the entire domain automatically for consistency.",
      "To stop broadcast, multicast, and unknown unicast traffic for a VLAN from traversing trunk links where no active ports for that VLAN exist.",
      "To automatically disable err-disabled ports and bring them back online without any manual intervention on the switch itself.",
      "To limit the number of allowed trunks per switch to reduce the bandwidth wasted on unnecessary links across the network entirely.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VTP Pruning saves bandwidth by dynamically restricting flooded traffic (broadcasts) for a specific VLAN across trunk links leading to switches that do not have any ports assigned to that VLAN.",
  },
  {
    id: 25,
    question:
      "Which of the following is required for VTP to operate between two switches?",
    options: [
      "An active trunk link between them.",
      "Both must be in VTP Server mode.",
      "A Layer 3 routing protocol.",
      "Identical Native VLANs.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "VTP advertisements are only sent over trunk links. If the connection between switches is an access link, VTP will not synchronize.",
  },
  {
    id: 26,
    question:
      "Which VTP version supports the synchronization of Extended Range VLANs (1006-4094)?",
    options: [
      "VTP Version 1",
      "VTP Version 2",
      "VTP Version 3",
      "VTP does not support extended VLANs",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Only VTP Version 3 supports the synchronization of Extended Range VLANs. Versions 1 and 2 require Transparent mode to even configure them locally.",
  },
  {
    id: 27,
    question:
      "What is a major enhancement introduced in VTP Version 3 compared to Versions 1 and 2?",
    options: [
      "It supports Token Ring and FDDI VLANs in addition to standard Ethernet VLANs on the switch.",
      "It eliminates the need for trunk links between switches in the same VTP domain altogether.",
      "It introduces the concept of a Primary Server to prevent accidental database overrides by rogue servers.",
      "It changes the default mode to Transparent so VLANs are never automatically overwritten at all.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "VTPv3 introduces a 'Primary Server'. Even if another switch joins with a higher revision number, it cannot overwrite the database unless it is explicitly promoted to the Primary Server role.",
  },
  {
    id: 28,
    question:
      "By default, how often does a VTP Server transmit summary advertisements?",
    options: [
      "Every 5 seconds",
      "Every 30 seconds",
      "Every 5 minutes",
      "Every 30 minutes",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "VTP sends summary advertisements every 5 minutes (300 seconds) or immediately following a configuration change.",
  },
  {
    id: 29,
    question:
      "You configure 'switchport trunk allowed vlan 10,20'. Then you type 'switchport trunk allowed vlan 30'. What is the result?",
    options: [
      "The trunk allows VLANs 10, 20, and 30.",
      "The trunk ONLY allows VLAN 30.",
      "The command is rejected.",
      "The trunk allows all VLANs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Without the 'add' keyword (e.g., 'switchport trunk allowed vlan add 30'), the command completely overrides the previous list.",
  },
  {
    id: 30,
    question:
      "Which command correctly adds VLAN 40 to an existing trunk without removing the current allowed VLANs?",
    options: [
      "switchport trunk allow vlan 40",
      "switchport trunk allowed vlan 40",
      "switchport trunk allowed vlan add 40",
      "switchport trunk append vlan 40",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'add' keyword is required to append a VLAN to the existing allowed list without overwriting it: 'switchport trunk allowed vlan add 40'.",
  },
  {
    id: 31,
    question: "What does Router-on-a-Stick (ROAS) accomplish?",
    options: [
      "It allows a router to act as a wireless access point for the entire network and all of its connected wireless clients at the same time without any issues at all.",
      "It allows inter-VLAN routing using a single physical router interface divided into multiple logical subinterfaces.",
      "It aggregates multiple physical links into one logical link for higher bandwidth and redundancy between the two switches at the same time.",
      "It prevents Spanning Tree loops from forming on a router's subinterfaces, which is a common concern in complex routing designs.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "ROAS uses 802.1Q subinterfaces on a single physical router port connected to a switch trunk to route traffic between multiple VLANs.",
  },
  {
    id: 32,
    question:
      "When configuring a subinterface for ROAS (e.g., interface g0/0.10), what command MUST be entered before an IP address can be assigned?",
    options: ["ip routing", "no shutdown", "encapsulation dot1q 10", "vlan 10"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "You must specify the trunking encapsulation and VLAN ID ('encapsulation dot1q [vlan-id]') before the router will accept an IP address on a subinterface.",
  },
  {
    id: 33,
    question:
      "In a ROAS configuration, what does the number in 'encapsulation dot1q 50' represent?",
    options: [
      "The subinterface number used to identify the virtual interface.",
      "The Administrative Distance assigned to the subinterface's routes.",
      "The VLAN ID that the subinterface will tag and untag.",
      "The IP subnet mask length assigned to the subinterface.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The number following dot1q is the 802.1Q VLAN tag ID. It tells the router to accept traffic tagged with this VLAN and to tag outbound traffic with this VLAN.",
  },
  {
    id: 34,
    question: "What is an SVI (Switch Virtual Interface)?",
    options: [
      "A physical interface on a Layer 3 switch that carries routed traffic between VLANs.",
      "A logical Layer 3 interface representing a VLAN, used for inter-VLAN routing or management.",
      "A trunk port carrying multiple VLANs between two switches using 802.1Q tagging.",
      "A virtual MAC address used by HSRP for gateway redundancy within the VLAN.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An SVI is a logical interface (e.g., 'interface vlan 10') that provides a Layer 3 presence for a Layer 2 VLAN, allowing routing or remote management (SSH/Telnet).",
  },
  {
    id: 35,
    question:
      "You configure 'interface vlan 20' with an IP address on a Multilayer Switch, but it remains in a 'down/down' state. What is a possible reason?",
    options: [
      "IP routing is not enabled on the switch for this VLAN.",
      "VLAN 20 does not exist in the VLAN database, or no active ports are assigned to it.",
      "The SVI requires an 'encapsulation dot1q' command before it will work.",
      "The switch is in VTP Client mode and cannot route any VLANs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "For an SVI to transition to 'up/up', the VLAN must exist in the database, and there must be at least one active port (access or trunk) forwarding traffic for that VLAN.",
  },
  {
    id: 36,
    question:
      "Which global configuration command is required on a Cisco Catalyst Multilayer Switch to enable inter-VLAN routing?",
    options: [
      "router ospf 1",
      "ip forward-protocol",
      "ip routing",
      "spanning-tree mode rapid-pvst",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Layer 3 switches function as Layer 2 devices by default. The global 'ip routing' command activates the routing engine, allowing SVIs to route traffic.",
  },
  {
    id: 37,
    question:
      "What command converts a Layer 2 switchport into a Layer 3 routed port?",
    options: [
      "switchport mode access",
      "ip address [ip] [mask]",
      "no switchport",
      "routing enable",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'no switchport' command removes Layer 2 functionality from the port, allowing you to assign an IP address directly to the physical interface, like a router.",
  },
  {
    id: 38,
    question:
      "Which is a major advantage of using Layer 3 SVIs for inter-VLAN routing compared to Router-on-a-Stick?",
    options: [
      "SVIs do not require an IP address or any Layer 3 configuration in order to function on the switch completely at all.",
      "SVIs utilize the switch's hardware switching fabric, providing significantly higher throughput than a router's physical CPU/link.",
      "SVIs automatically configure DHCP for every host that joins the VLAN on the network without any extra configuration work.",
      "SVIs eliminate the need for Spanning Tree on the Layer 3 switch entirely, so STP can be disabled and turned off safely.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Layer 3 switches route packets in hardware (CEF) at wire-speed across the switching fabric, whereas ROAS is bottlenecked by the router's physical interface speed and CPU.",
  },
  {
    id: 39,
    question:
      "How does a Cisco IP phone learn which VLAN to use for its voice traffic?",
    options: [
      "Via DHCP Option 150.",
      "Via the 802.1Q Native VLAN.",
      "Via Cisco Discovery Protocol (CDP) or LLDP-MED.",
      "It must be statically configured on the phone's keypad.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The switch uses CDP (or LLDP-MED for non-Cisco phones) to inform the connected IP phone of the configured Voice VLAN ID.",
  },
  {
    id: 40,
    question:
      "When configuring a Voice VLAN on an access port, what kind of link does the port essentially become?",
    options: [
      "An EtherChannel bundling multiple physical links together.",
      "A routed port with an IP address assigned directly.",
      "A 'mini-trunk' carrying tagged voice traffic and untagged data traffic.",
      "A static trunk carrying all VLANs on the switch.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A port configured with a voice and access VLAN technically operates as a specialized 802.1Q trunk. It accepts tagged frames from the phone (Voice VLAN) and untagged frames from the daisy-chained PC (Access VLAN).",
  },
  {
    id: 41,
    question:
      "Which command configures VLAN 50 as the voice VLAN on an interface?",
    options: [
      "switchport access vlan 50 voice",
      "switchport voice vlan 50",
      "vlan voice 50",
      "encapsulation dot1q 50 voice",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The interface-level command 'switchport voice vlan 50' specifies the VLAN that the switch will advertise to the IP phone via CDP.",
  },
  {
    id: 42,
    question:
      "What does the 'switchport priority extend trust' command do when attached to an IP Phone?",
    options: [
      "It trusts the Spanning Tree BPDU priority of the phone's own interface instead of the switch.",
      "It instructs the switch to trust the QoS CoS values sent by the PC daisy-chained to the phone.",
      "It tells the phone to forward CDP packets to the switch unchanged on the uplink.",
      "It trusts DHCP packets from the PC to assign the voice VLAN and the access VLAN.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "This command configures the IP phone to trust the Class of Service (CoS) prioritization markings applied by the PC attached to the back of the phone, rather than remarking them.",
  },
  {
    id: 43,
    question:
      "You issue 'show vlan brief' but do not see VLAN 100, yet 'show interface trunk' shows VLAN 100 allowed. What is wrong?",
    options: [
      "VLAN 100 is the Native VLAN.",
      "VLAN 100 has not been created in the VLAN database.",
      "VLAN 100 is VTP pruned.",
      "Trunks do not show in 'show vlan brief'.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Trunk allowed lists are essentially filters; you can allow a VLAN on a trunk even if the VLAN doesn't exist locally on the switch. It must be created in the database to function.",
  },
  {
    id: 44,
    question:
      "Which interface state will hide a port from the 'show vlan brief' output?",
    options: [
      "Administratively down",
      "Err-disabled",
      "Configured as an 802.1Q trunk",
      "Port-security violation",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'show vlan brief' command only displays ports currently operating as access ports. Ports operating as trunks are omitted from this output and viewed via 'show interfaces trunk'.",
  },
  {
    id: 45,
    question: "What is a 'VLAN Leak'?",
    options: [
      "When a switch runs out of MAC address table space and is forced to drop unknown unicast frames for that specific VLAN entirely.",
      "When untagged traffic crosses a trunk with mismatched Native VLANs, moving from one subnet to another without going through a router.",
      "When VTP advertises too many VLANs to the entire switch domain and floods the trunk links with updates on a regular basis.",
      "When a Voice VLAN overlaps with an Access VLAN on the same port, causing untagged traffic confusion between the two VLANs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If Native VLANs are mismatched across a trunk, untagged frames sent from VLAN 10 on Switch A will be received and placed into VLAN 20 on Switch B, 'leaking' Layer 2 traffic between broadcast domains.",
  },
  {
    id: 46,
    question: "What is the purpose of a Private VLAN (PVLAN)?",
    options: [
      "To encrypt VLAN traffic using IPsec between switches in the same building and campus network.",
      "To isolate ports within the same VLAN at Layer 2 so they cannot communicate with each other directly.",
      "To hide the VLAN ID from Wireshark packet captures on the wire to improve security overall.",
      "To tunnel VLANs over an MPLS provider backbone network using pseudowires to extend the LAN.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Private VLANs partition a standard VLAN into sub-domains. Isolated ports in a PVLAN can only communicate with the promiscuous port (usually the router), not with other isolated hosts.",
  },
  {
    id: 47,
    question: "In a Private VLAN, what is a 'Promiscuous' port?",
    options: [
      "A port that accepts untagged traffic on the PVLAN and can be an isolated port.",
      "A port that can communicate with all other ports within the PVLAN (isolated and community).",
      "A port that sniffs traffic for the network analyzer using SPAN session.",
      "A port that ignores BPDU Guard and PortFast settings on the interface.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A promiscuous port (usually an uplink to a router/firewall) can talk to any port in the PVLAN. Isolated ports can only talk to the promiscuous port.",
  },
  {
    id: 48,
    question:
      "What command verifies the VTP domain name, mode, and configuration revision number?",
    options: [
      "show vtp status",
      "show vlan vtp",
      "show spanning-tree vtp",
      "show interface trunk vtp",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'show vtp status' command provides a summary of all VTP parameters including version, domain, mode, and the critical configuration revision number.",
  },
  {
    id: 49,
    question: "Which of the following is true regarding VLAN 1?",
    options: [
      "It can be deleted but not renamed.",
      "It cannot be deleted or renamed.",
      "It is an extended VLAN.",
      "It is reserved exclusively for Voice traffic.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VLAN 1 is the factory default VLAN. It is hardcoded into the switch OS; it cannot be deleted, suspended, or renamed.",
  },
  {
    id: 50,
    question:
      "You want to capture traffic for VLAN 10 and forward it to a packet analyzer on FastEthernet 0/5. What feature must be used?",
    options: [
      "VLAN ACL (VACL)",
      "Private VLANs",
      "SPAN (Switched Port Analyzer)",
      "VTP Pruning",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "SPAN (or Port Mirroring) is used to copy traffic from a source VLAN or port and send it to a destination port for monitoring/analysis.",
  },
  {
    id: 51,
    question:
      "When creating a Local SPAN session, what is the term for the port connected to the Wireshark analyzer?",
    options: [
      "Source port",
      "Destination port",
      "Promiscuous port",
      "Trunk port",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In a SPAN configuration, the source is what you are monitoring (a port or VLAN), and the destination port is where the analyzer is plugged in.",
  },
  {
    id: 52,
    question: "What does RSPAN allow you to do?",
    options: [
      "Route SPAN traffic using OSPF between the two switches across the network backbone for analysis.",
      "Mirror traffic from a port on one switch to an analyzer connected to a different switch across the network.",
      "Encrypt SPAN traffic to protect the mirrored packets from being sniffed in transit across the LAN.",
      "Monitor routing protocols only on the local switch where the source port resides physically located.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Remote SPAN (RSPAN) uses a dedicated RSPAN VLAN to carry mirrored traffic across trunk links to an analyzer located on another physical switch.",
  },
  {
    id: 53,
    question:
      "Which MAC address does a PC use as the destination MAC when sending a packet to a host in a different VLAN?",
    options: [
      "The destination host's MAC address in the ARP cache.",
      "The MAC address of the switch's management SVI.",
      "The MAC address of its Default Gateway (Router/SVI).",
      "The broadcast MAC address FF:FF:FF:FF:FF:FF.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because the destination is on a different subnet/VLAN, the PC will ARP for its Default Gateway and use the router's MAC address as the Layer 2 destination.",
  },
  {
    id: 54,
    question:
      "A Layer 2 switch receives a broadcast frame on VLAN 20. How does it process the frame?",
    options: [
      "It routes the broadcast to all VLANs using the routing table and forwards it as unicast to each one.",
      "It forwards it out all ports assigned to VLAN 20, plus all trunk ports allowing VLAN 20, except the incoming port.",
      "It drops the broadcast frame immediately without forwarding it to any of the other ports on the switch.",
      "It sends it to the default gateway for the VLAN 20 network for routing decisions so it can be routed properly.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Switches flood broadcast frames within the same broadcast domain (VLAN). It goes to all active access ports in that VLAN and across any trunks carrying that VLAN.",
  },
  {
    id: 55,
    question: "What is the primary difference between a VLAN and a subnet?",
    options: [
      "They are identical concepts and can be used interchangeably in network design documentation.",
      "A VLAN is a Layer 2 concept (broadcast domain), while a subnet is a Layer 3 concept (IP network).",
      "VLANs only work on IPv6 networks, not on IPv4 networks that use ARP.",
      "Subnets are configured on switches, while VLANs are configured on routers instead.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VLANs segment the network at the Data Link layer using MAC addresses and tags. Subnets segment the network at the Network layer using IP addresses. There is usually a 1:1 mapping between them.",
  },
  {
    id: 56,
    question:
      "If an IP phone is attached to Fa0/1, and a PC is attached to the phone, how many MAC addresses will the switch dynamically learn on Fa0/1?",
    options: ["One", "Two", "Three", "Zero"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The switch port will learn two MAC addresses: the MAC of the IP Phone (on the voice VLAN) and the MAC of the PC (on the access VLAN).",
  },
  {
    id: 57,
    question:
      "You want to limit Fa0/1 to only learn 2 MAC addresses to secure the Voice/PC deployment. Which command achieves this?",
    options: [
      "switchport port-security maximum 2",
      "mac-address-table limit 2",
      "spanning-tree portfast max 2",
      "switchport block unicast 2",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The Port Security feature uses 'switchport port-security maximum [value]' to restrict the number of MAC addresses allowed on an interface.",
  },
  {
    id: 58,
    question: "Which of the following describes a VTP 'Summary Advertisement'?",
    options: [
      "A message sent by clients to request specific VLAN information from the VTP server when needed.",
      "A message sent every 5 minutes containing the domain name, version, and configuration revision number.",
      "A packet containing the exact details of every VLAN in the database, including names and ports.",
      "A message used to prune unused VLANs from the trunk links to save bandwidth.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Summary advertisements announce the general VTP parameters to neighbors. If a neighbor sees a higher revision number in the summary, it will then send an Advertisement Request for the actual VLAN data.",
  },
  {
    id: 59,
    question:
      "What type of VTP message is sent when a client needs missing VLAN information (e.g., after a reboot)?",
    options: [
      "Summary Advertisement",
      "Subset Advertisement",
      "Advertisement Request",
      "Join Message",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An Advertisement Request is sent by a VTP client when it realizes its revision number is lower than the server's, asking the server to send Subset Advertisements.",
  },
  {
    id: 60,
    question: "What does the VTP password actually do?",
    options: [
      "It requires a user to type a password before creating a VLAN on the switch.",
      "It encrypts the VTP payload so no one can read the VLAN names.",
      "It generates an MD5 hash of the VTP message to authenticate the source of the VTP updates.",
      "It restricts console access to the switch's privileged EXEC mode.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The VTP password is used to compute an MD5 hash included in the VTP advertisements. Switches will only process updates if the received hash matches their locally computed hash.",
  },
  {
    id: 61,
    question:
      "Which protocol is utilized to negotiate EtherChannel bundles dynamically?",
    options: ["DTP", "VTP", "LACP", "CDP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Link Aggregation Control Protocol (LACP) is the IEEE standard protocol (802.3ad) used to dynamically negotiate EtherChannels. (PAgP is the Cisco proprietary alternative).",
  },
  {
    id: 62,
    question:
      "When aggregating multiple VLAN trunks into an EtherChannel, what must match on all physical ports?",
    options: [
      "IP addresses",
      "Speed, duplex, and allowed VLAN lists",
      "MAC addresses",
      "Port security sticky addresses",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "For physical interfaces to bundle into an EtherChannel, they must have identical configurations: speed, duplex, switchport mode, native VLAN, and allowed VLANs.",
  },
  {
    id: 63,
    question:
      "Which command configures a port to actively try to form an LACP EtherChannel?",
    options: [
      "channel-group 1 mode desirable",
      "channel-group 1 mode auto",
      "channel-group 1 mode active",
      "channel-group 1 mode on",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'mode active' configures LACP to actively send negotiation packets. 'desirable/auto' are used for PAgP. 'mode on' forces bundling without a protocol.",
  },
  {
    id: 64,
    question:
      "In LACP, what happens if both sides are configured as 'mode passive'?",
    options: [
      "The EtherChannel forms successfully and passes traffic.",
      "The EtherChannel fails to form and ports act independently.",
      "The link err-disables after a few seconds.",
      "It falls back to PAgP negotiation.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'Passive' mode means the port waits for LACP packets but doesn't send them first. If both sides wait, the negotiation never starts, and the channel fails to form.",
  },
  {
    id: 65,
    question: "What is a 'black hole' VLAN?",
    options: [
      "A VLAN used to drop malicious traffic via VACLs or by routing to null0.",
      "A VLAN that cannot be routed.",
      "A VLAN where Spanning Tree is disabled.",
      "An unused VLAN where unused access ports are parked for security.",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "A security best practice is to move all unused switch ports out of VLAN 1 and assign them to an unused, dead-end 'black hole' VLAN (e.g., VLAN 999) that has no Layer 3 SVI.",
  },
  {
    id: 66,
    question: "Why is it a security risk to leave the Native VLAN as VLAN 1?",
    options: [
      "VLAN 1 traffic is unencrypted.",
      "It facilitates VLAN Hopping attacks.",
      "It causes routing loops.",
      "It disables Spanning Tree.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Attackers can use Double-Tagging (VLAN Hopping) by sending frames with two 802.1Q tags. If the outer tag matches the Native VLAN, the first switch strips it, allowing the inner tag to jump to an unauthorized VLAN on the next switch.",
  },
  {
    id: 67,
    question: "How do you mitigate a Double-Tagging VLAN Hopping attack?",
    options: [
      "Disable DTP on all user-facing switch ports.",
      "Use ISL instead of 802.1Q for all trunk links.",
      "Change the Native VLAN to an unused VLAN ID on all trunks.",
      "Enable BPDU Guard on all access ports.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By changing the Native VLAN to a dummy VLAN (e.g., 999) that no access ports belong to, an attacker's double-tagged frame will never be permitted to exploit the untagged forwarding behavior.",
  },
  {
    id: 68,
    question: "How do you mitigate a Switch Spoofing VLAN Hopping attack?",
    options: [
      "Configure 'switchport nonegotiate' and hardcode access/trunk ports.",
      "Enable DHCP Snooping to prevent rogue DHCP servers on the network.",
      "Implement VTP Version 3 on all of the switches in the domain.",
      "Change the Native VLAN to an unused VLAN ID on the trunks.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Switch spoofing involves an attacker sending DTP frames to negotiate a trunk link to their PC. Disabling DTP ('nonegotiate') and explicitly setting ports to 'mode access' prevents this.",
  },
  {
    id: 69,
    question:
      "A PC connected to an access port sends an 802.1Q tagged frame (e.g., VLAN 10). How does a standard Cisco access port handle this frame by default?",
    options: [
      "It strips the tag and forwards it to VLAN 10.",
      "It drops the frame.",
      "It routes the frame.",
      "It converts the port to a trunk.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "By default, an access port expects untagged frames. If it receives a tagged frame (except for a voice VLAN tag if configured), it will drop the frame.",
  },
  {
    id: 70,
    question:
      "Which of the following is true regarding MAC address tables and VLANs?",
    options: [
      "A switch maintains one global MAC address table for all VLANs.",
      "A switch maintains a separate, logical MAC address table for every VLAN.",
      "MAC addresses are not tied to VLANs.",
      "The MAC table only tracks trunk ports.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco switches use independent MAC learning per VLAN. This prevents traffic from one VLAN leaking into another based on MAC lookups.",
  },
  {
    id: 71,
    question:
      "You want to route traffic between VLANs without using a physical router. What do you need?",
    options: [
      "A Layer 2 switch with VTP enabled in Server mode on the network.",
      "A Multilayer (Layer 3) switch with SVIs and 'ip routing' enabled.",
      "An ASA Firewall with a virtual router configured for routing.",
      "A Hub connected to the core switch with all hosts in one VLAN.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Multilayer switches can perform inter-VLAN routing internally using Switch Virtual Interfaces (SVIs) when the 'ip routing' command is enabled.",
  },
  {
    id: 72,
    question:
      "What occurs if you execute 'switchport trunk allowed vlan remove 10' on a trunk link?",
    options: [
      "VLAN 10 is deleted from the global database on the switch.",
      "VLAN 10 traffic is blocked from traversing this specific trunk link.",
      "The Native VLAN of the trunk changes to VLAN 10.",
      "The port becomes an access port assigned to VLAN 10.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'remove' keyword selectively prunes VLAN 10 from the trunk's allowed list, stopping its traffic from crossing the link, but it does not delete the VLAN globally.",
  },
  {
    id: 73,
    question:
      "A router interface configured for ROAS shows 'up/up', but inter-VLAN routing is failing. What is the most common misconfiguration?",
    options: [
      "The router's physical interface lacks an IP address and has no configured subinterfaces at all.",
      "The switch port connected to the router is configured as an access port instead of a trunk.",
      "VTP is not configured on the router for the VLANs that are being routed between them.",
      "Spanning Tree is blocking the router port at the root switch on the trunk link instead.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "ROAS requires the switchport facing the router to be an 802.1Q trunk port. If it is an access port, it strips tags and breaks the subinterface logic on the router.",
  },
  {
    id: 74,
    question:
      "Which command shows the status of DTP negotiation on a specific interface?",
    options: [
      "show dtp status on the switch",
      "show interfaces [interface] switchport",
      "show interface trunk on the switch",
      "show vlan brief for all VLANs",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show interfaces [interface] switchport' reveals the administrative mode, operational mode, negotiation of trunking status, and Native VLAN settings.",
  },
  {
    id: 75,
    question:
      "In the 'show interfaces switchport' output, Administrative Mode is 'dynamic auto' and Operational Mode is 'static access'. What does this mean?",
    options: [
      "The port successfully negotiated a trunk with the neighbor.",
      "The port failed to negotiate a trunk and is operating as an access port.",
      "The port is err-disabled due to a security violation.",
      "The port is part of an EtherChannel bundle with other ports.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Administrative Mode is what the port is configured as (dynamic auto). Operational Mode is what it currently acts as based on negotiation (static access because the other side didn't initiate).",
  },
  {
    id: 76,
    question: "What is the command to create an SVI for VLAN 30?",
    options: [
      "vlan 30 ip",
      "interface vlan 30",
      "switchport vlan 30",
      "ip route vlan 30",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'interface vlan 30' enters interface configuration mode for the Switch Virtual Interface representing VLAN 30.",
  },
  {
    id: 77,
    question:
      "Which of the following describes standard Ethernet MTU and how 802.1Q tagging affects it?",
    options: [
      "Standard is 1500 bytes payload. The 4-byte 802.1Q tag increases the maximum frame size to 1522 bytes (including header/FCS).",
      "Standard is 1500 bytes of payload. 802.1Q does not change the maximum frame size in any way at all whatsoever.",
      "Standard is 9000 bytes. 802.1Q requires the use of Jumbo Frames on all trunk links to carry the tags on the network.",
      "802.1Q fragments the packet into two smaller frames to fit the MTU without needing a larger header to do the job at all.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "A standard Ethernet frame maxes at 1518 bytes. The IEEE 802.3ac standard extended this to 1522 bytes specifically to accommodate the 4-byte 802.1Q VLAN tag without causing giant frame errors.",
  },
  {
    id: 78,
    question:
      "You want to configure an IPv6 address on a Layer 3 switch SVI. What must you enable globally first?",
    options: [
      "ipv6 unicast-routing",
      "ip routing",
      "ipv6 enable",
      "switchport mode trunk",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Just as 'ip routing' is required for IPv4 routing, 'ipv6 unicast-routing' must be enabled globally for the Layer 3 switch to route IPv6 packets between SVIs.",
  },
  {
    id: 79,
    question:
      "What happens if you issue 'vlan 20' followed by 'name IT_DEPT' on a VTP Transparent switch?",
    options: [
      "The VLAN is created and advertised to the domain.",
      "The VLAN is created locally but NOT advertised.",
      "The command fails.",
      "The VTP revision number increases by 1.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Transparent mode switches allow local VLAN creation and naming, but they do not increment their revision number or advertise these local VLANs to the rest of the VTP domain.",
  },
  {
    id: 80,
    question:
      "Which Cisco technology dynamically assigns a switch port to a VLAN based on the user's MAC address or 802.1X credentials?",
    options: [
      "DTP (Dynamic Trunking Protocol)",
      "VTP (VLAN Trunking Protocol)",
      "Dynamic VLAN Assignment (VMPS/Radius)",
      "Port Security MAC address limiting",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Dynamic VLAN assignment uses a RADIUS server (like Cisco ISE) and 802.1X authentication to push a specific VLAN down to the switch port based on who just logged in.",
  },
  {
    id: 81,
    question:
      "On a router performing ROAS, you configure 'encapsulation dot1q 10 native' on subinterface G0/0.10. What does this do?",
    options: [
      "It drops all traffic arriving tagged as VLAN 10 on the G0/0 physical interface completely.",
      "It instructs the router to process untagged frames received on G0/0 as belonging to VLAN 10.",
      "It changes the switch's Native VLAN to match VLAN 10 on the connecting trunk port to fix mismatches.",
      "It encrypts all of the VLAN 10 traffic using IPsec on the subinterface to protect the data in transit fully.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'native' keyword tells the router subinterface to expect untagged traffic. This must match the Native VLAN configured on the connected switch's trunk port.",
  },
  {
    id: 82,
    question: "What is the purpose of the 'TPID' field in an 802.1Q tag?",
    options: [
      "It identifies the VLAN number that the frame belongs to on the trunk.",
      "It holds the QoS priority bits for Layer 2 marking of the frame.",
      "It identifies the frame as 802.1Q tagged by containing the value 0x8100.",
      "It replaces the source MAC address in the frame header with a new one.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The Tag Protocol Identifier (TPID) is a 16-bit field set to 0x8100, which tells the receiving switch that this is an 802.1Q tagged frame, not a standard IPv4 payload.",
  },
  {
    id: 83,
    question:
      "Which bits inside the 802.1Q tag are used for Layer 2 Quality of Service (QoS)?",
    options: [
      "The 12-bit VLAN ID field that identifies the VLAN in the tag.",
      "The 3-bit Priority Code Point (PCP) / Class of Service (CoS).",
      "The TPID value of 0x8100 that marks the frame as an 802.1Q tagged frame.",
      "The FCS field at the end of the frame used for error checking.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 3-bit PCP field (often referred to as CoS) allows 8 levels of prioritization (0-7) for Layer 2 traffic, critical for Voice over IP.",
  },
  {
    id: 84,
    question:
      "An IP phone is attached to a switch port. How does the phone distinguish its voice packets from the PC's data packets?",
    options: [
      "It routes them to a different IP address on the network so that each traffic type is kept separate and secure.",
      "It inserts an 802.1Q tag with the Voice VLAN ID into its own packets, leaving PC packets untagged.",
      "It changes the source MAC address of the voice packets to hide the identity of the phone device from the network.",
      "It relies on the switch to tag the packets for it automatically using the configured voice VLAN on the port.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IP phone acts as a mini-switch. It receives untagged frames from the PC and passes them through. It generates its own voice packets and inserts the 802.1Q Voice VLAN tag into them before sending to the switch.",
  },
  {
    id: 85,
    question:
      "You have an environment where some switches do not support VTP. How do you pass VTP updates through them?",
    options: [
      "You cannot; VTP requires all switches to support it.",
      "Configure them to VTP Client mode.",
      "Configure them to VTP Transparent mode.",
      "Use DTP.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "If a switch is in VTP Transparent mode, it will act as a passthrough, taking incoming VTP advertisements and flooding them out its other trunk ports without processing them locally.",
  },
  {
    id: 86,
    question:
      "What happens if two switches connected via a trunk have identical VTP Domain names but mismatched VTP passwords?",
    options: [
      "They negotiate a blank password.",
      "They ignore each other's VTP advertisements because the MD5 hashes fail.",
      "The switch with the higher revision number wins regardless of password.",
      "The trunk link err-disables.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VTP passwords are used to generate an MD5 hash. If the passwords differ, the hashes differ, and the switches silently discard the VTP packets.",
  },
  {
    id: 87,
    question:
      "Which command reveals the MAC addresses learned specifically on VLAN 50?",
    options: [
      "show mac address-table vlan 50",
      "show vlan 50 mac",
      "show arp vlan 50",
      "show interfaces vlan 50",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'show mac address-table vlan 50' command filters the forwarding table to only display Layer 2 MAC addresses associated with VLAN 50.",
  },
  {
    id: 88,
    question:
      "When replacing a switch in a production environment, why is it critical to check 'show vtp status' first?",
    options: [
      "To ensure it has the correct IP address for management access to the switch over the network first.",
      "To verify the Configuration Revision Number is 0 to avoid overwriting the network's VLANs.",
      "To ensure Spanning Tree is running on all of the interfaces of the replacement switch before it is used.",
      "To check that the iOS version is compatible with the network's existing switch configuration entirely.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A replacement switch might have old VTP data. If its revision number is higher than the production network, it will instantly wipe out the production VLANs.",
  },
  {
    id: 89,
    question:
      "Which of the following is true about routed ports on a Layer 3 switch?",
    options: [
      "They belong to VLAN 1 by default and forward Layer 2 traffic like normal.",
      "They are associated with an SVI that handles routing between the various VLANs on the switch.",
      "They have no Layer 2 VLAN association and act like a physical router interface.",
      "They can negotiate DTP to form a trunk link with the neighboring switch automatically over time.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "By issuing 'no switchport', the interface ceases to function as a Layer 2 switchport. It no longer belongs to any VLAN and does not send or process DTP or STP.",
  },
  {
    id: 90,
    question:
      "What does the 'switchport autostate exclude' command do on a Layer 3 switch?",
    options: [
      "It disables DTP negotiation on the interface completely for the port.",
      "It prevents a specific port from bringing the SVI (interface vlan) 'up'.",
      "It excludes a VLAN from being routed by the switch entirely.",
      "It prevents MAC learning on the entire switch for all of the VLANs.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "An SVI goes 'up' if at least one port in its VLAN is active. 'autostate exclude' applied to a port (like a monitoring port) tells the switch not to count that port when determining if the SVI should be up.",
  },
  {
    id: 91,
    question:
      "What is the primary troubleshooting step if a PC on VLAN 10 can ping its gateway but cannot ping a PC on VLAN 20?",
    options: [
      "Check if routing is enabled and the router/L3 switch has routes to both subnets.",
      "Check the physical cable on the PC for damage or loose connections.",
      "Check if VTP is synced between the two switches.",
      "Check DTP negotiation on the uplink to the router.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "If intra-VLAN traffic (to the gateway) works, Layer 2 is fine. Inter-VLAN failure usually indicates a Layer 3 issue: routing is disabled, missing routes, or firewall rules.",
  },
  {
    id: 92,
    question:
      "What error message implies a Native VLAN mismatch on Cisco devices?",
    options: [
      "%SPANTREE-2-BLOCK_BPDUGUARD",
      "%CDP-4-NATIVE_VLAN_MISMATCH",
      "%LINK-3-UPDOWN",
      "%VTP-3-MD5_MISMATCH",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "CDP (Cisco Discovery Protocol) actively monitors for configuration discrepancies and will output the '%CDP-4-NATIVE_VLAN_MISMATCH' syslog message.",
  },
  {
    id: 93,
    question:
      "In VTP Version 1 and 2, what happens if a VTP Transparent switch receives a VTP update for a different domain?",
    options: [
      "It floods it out its trunk ports.",
      "It processes it locally.",
      "It drops the packet and does not forward it.",
      "It changes its domain name.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "In VTP v1/v2, a transparent switch will ONLY forward VTP advertisements if the domain name in the advertisement matches its own domain name (or if its own domain name is null).",
  },
  {
    id: 94,
    question:
      "Which spanning-tree mode runs a separate STP instance for every single VLAN configured on the switch?",
    options: [
      "CST (Common Spanning Tree)",
      "MST (Multiple Spanning Tree)",
      "PVST+ (Per-VLAN Spanning Tree Plus)",
      "RSTP",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "PVST+ (and Rapid-PVST+) creates a unique spanning-tree topology for each VLAN, allowing for manual load balancing by making different switches the root for different VLANs.",
  },
  {
    id: 95,
    question:
      "What happens if a switch is configured for VTP Version 2 but the neighbor is running VTP Version 1?",
    options: [
      "They communicate fine using VTP Version 1.",
      "The neighbor automatically upgrades to Version 2.",
      "They cannot communicate VTP updates.",
      "The trunk link fails.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "VTP Version 2 is backwards compatible. If a VTPv2 switch detects a VTPv1 neighbor, it will transmit VTPv1 packets to interoperate.",
  },
  {
    id: 96,
    question:
      "You type 'vlan 100' and 'name SALES', then exit. When you type 'show vlan brief', VLAN 100 is missing. What is the most likely cause?",
    options: [
      "The switch is in VTP Client mode.",
      "You did not assign ports to it.",
      "You are in VTP Transparent mode.",
      "The VLAN creation was rejected but you ignored the error.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "If you are in VTP Client mode, the switch will reject the 'vlan 100' command. If you don't notice the CLI error message, you will find the VLAN missing from the database.",
  },
  {
    id: 97,
    question:
      "What does the command 'switchport nonegotiate' require in order to function properly?",
    options: [
      "VTP Transparent mode must be configured globally on the switch first.",
      "The port must first be statically configured as an access or trunk port.",
      "Portfast must be enabled on the interface first before trunking.",
      "A voice VLAN must be configured on the port before it can function properly at all.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "You cannot disable DTP negotiation if the port is in a 'dynamic' state. You must define it with 'switchport mode access' or 'switchport mode trunk' first.",
  },
  {
    id: 98,
    question:
      "Which of the following describes a 'tagged' port in non-Cisco terminology (like HP or Juniper)?",
    options: [
      "An access port.",
      "A trunk port.",
      "A routed port.",
      "An EtherChannel.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In industry-standard terminology, a 'tagged' port passes traffic for multiple VLANs using 802.1Q tags, which is identical to a Cisco 'trunk' port.",
  },
  {
    id: 99,
    question:
      "Which of the following describes an 'untagged' port in non-Cisco terminology?",
    options: ["A trunk port.", "An access port.", "An SVI.", "A VTP Server."],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An 'untagged' port strips 802.1Q tags before sending frames to the host, functioning exactly like a Cisco 'access' port.",
  },
  {
    id: 100,
    question:
      "How does a router running ROAS distinguish between traffic from VLAN 10 and VLAN 20 arriving on the same physical interface?",
    options: [
      "By using different MAC addresses for each subinterface on the same physical port of the router to separate the incoming traffic flows completely now.",
      "By examining the 802.1Q tag in the Ethernet header and matching it to the configured subinterface.",
      "By checking the source IP address of the arriving packet on the physical interface to identify which VLAN it belongs to on the router exactly now.",
      "By using VTP to inform the router of the VLANs that are configured on the switches in the VTP domain automatically as they change over time during normal operation of the network.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The router reads the 4-byte 802.1Q tag in the incoming frame. It matches the VLAN ID in the tag to the 'encapsulation dot1q [ID]' command on its subinterfaces.",
  },
  {
    id: 101,
    question:
      "If a switch has VTP Pruning enabled, which VLANs are eligible to be pruned by default?",
    options: [
      "VLANs 1-1005",
      "VLANs 2-1001",
      "All VLANs including VLAN 1",
      "Extended VLANs only",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "By default, VLANs 2 through 1001 are eligible for VTP pruning. VLAN 1 is required for control plane traffic (like CDP, VTP, PAgP) and cannot be pruned.",
  },
  {
    id: 1,
    question: "What is a VLAN?",
    options: [
      "A virtual network that spans multiple physical switches",
      "A logical segmentation of a Layer 2 broadcast domain",
      "A routing protocol for Layer 3 switches",
      "A security feature that blocks all broadcast traffic",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A VLAN (Virtual Local Area Network) logically segments a switch into multiple isolated Layer 2 broadcast domains without requiring separate physical hardware.",
  },

  {
    id: 222,
    question: "Which IEEE standard defines VLAN tagging?",
    options: ["802.1d", "802.1q", "802.1x", "802.3af"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IEEE 802.1Q is the standard that inserts a 4-byte VLAN tag into the Ethernet frame header, allowing trunk links to carry traffic for multiple VLANs simultaneously.",
  },
  {
    id: 333,
    question: "What is the default VLAN on a Cisco switch?",
    options: ["VLAN 1", "VLAN 100", "VLAN 0", "VLAN 255"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "VLAN 1 is the default VLAN on all Cisco switches. All ports are assigned to VLAN 1 by default, and management traffic uses VLAN 1 unless explicitly changed.",
  },
  {
    id: 444,
    question:
      "Which port mode is used on a switch interface to carry multiple VLANs to another switch?",
    options: ["Access", "Trunk", "Hybrid", "General"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A trunk port carries traffic for multiple VLANs using 802.1Q tagging. An access port belongs to a single VLAN and strips any VLAN tags from outgoing frames.",
  },
  {
    id: 555,
    question: "What is the valid range for extended VLANs on a Cisco switch?",
    options: ["1–1005", "1006–4094", "4095–8191", "1024–4096"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Extended VLANs range from 1006 to 4094. Normal VLANs are 1–1005 (with 1002–1005 reserved for Token Ring and FDDI). VLAN 4095 is reserved.",
  },
];
