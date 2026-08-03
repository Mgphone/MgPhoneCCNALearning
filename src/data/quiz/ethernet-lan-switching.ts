import type { QuizQuestion } from "./types";

export const ethernetLanSwitchingQuestions: QuizQuestion[] = [
  // --- MAC Address Learning & Switching Logic ---
  {
    id: 1,
    question: "How does a switch learn MAC addresses?",
    options: [
      "It reads the destination MAC address of incoming frames",
      "It reads the source MAC address of incoming frames",
      "It receives MAC addresses from the router",
      "MAC addresses are statically configured by default",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A switch learns MAC addresses by examining the source MAC address of every incoming frame and recording it in its MAC address table along with the receiving port.",
  },
  {
    id: 2,
    question:
      "What action does a switch take when it receives a frame with an unknown destination MAC address?",
    options: [
      "It drops the frame and sends an error message to the console",
      "It sends an ARP request to resolve the destination MAC address",
      "It floods the frame out all active ports except the receiving port",
      "It sends the frame to the default gateway for further processing",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "If the destination MAC address is not in the MAC address table, the switch performs 'unknown unicast flooding', sending the frame out all ports in the VLAN except the ingress port.",
  },
  {
    id: 3,
    question:
      "What is the default aging time for a dynamic MAC address entry on a Cisco switch?",
    options: [
      "60 seconds",
      "300 seconds (5 minutes)",
      "600 seconds (10 minutes)",
      "Never ages out",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, a Cisco switch retains a dynamic MAC address in its CAM table for 300 seconds. If no traffic is seen from that MAC within that time, the entry is removed.",
  },
  {
    id: 4,
    question: "Which command displays the MAC address table on a Cisco switch?",
    options: [
      "show mac-address",
      "show ip mac-table",
      "show mac address-table",
      "show arp",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'show mac address-table' (or 'show mac-address-table' in older IOS versions) command displays the learned MAC addresses, their VLANs, and associated ports.",
  },
  {
    id: 5,
    question:
      "What happens if a switch receives a frame where both the source and destination MAC addresses are on the same port?",
    options: [
      "The switch floods the frame.",
      "The switch filters (drops) the frame.",
      "The switch forwards it to the router.",
      "The switch generates a late collision.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If the switch determines the destination MAC is on the exact same interface it received the frame from (often due to a hub being attached), it filters (drops) the frame to save bandwidth.",
  },

  // --- Ethernet Frame Structure & CSMA/CD ---
  {
    id: 6,
    question:
      "What is the minimum valid size of a standard Ethernet frame (excluding the preamble)?",
    options: ["46 bytes", "64 bytes", "128 bytes", "1518 bytes"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The minimum size for a standard Ethernet frame is 64 bytes. Frames smaller than this are considered 'runts' or collision fragments.",
  },
  {
    id: 7,
    question:
      "What is the maximum valid size of a standard untagged Ethernet II frame?",
    options: ["1500 bytes", "1518 bytes", "1522 bytes", "9000 bytes"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A standard Ethernet II frame has a maximum size of 1518 bytes (1500 bytes of payload + 18 bytes of header/trailer). Adding an 802.1Q tag increases this to 1522 bytes.",
  },
  {
    id: 8,
    question: "Which field in the Ethernet frame is used for error detection?",
    options: [
      "Preamble",
      "EtherType",
      "Frame Check Sequence (FCS)",
      "Start of Frame Delimiter (SFD)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Frame Check Sequence (FCS) at the end of the frame uses a Cyclic Redundancy Check (CRC) to detect if the frame was corrupted during transit.",
  },
  {
    id: 9,
    question:
      "What is the purpose of the EtherType field in an Ethernet II frame?",
    options: [
      "It defines the source and destination MAC addresses used for Layer 2 forwarding decisions.",
      "It indicates the upper-layer protocol encapsulated in the frame payload (e.g., IPv4, IPv6).",
      "It synchronizes the receiving device's clock to ensure proper frame timing and order.",
      "It determines the QoS priority and the traffic class of the frame being transmitted.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The EtherType field (e.g., 0x0800 for IPv4, 0x86DD for IPv6) tells the receiving NIC which upper-layer protocol should process the payload.",
  },
  {
    id: 10,
    question:
      "Which protocol was historically used by Ethernet to manage access to the shared medium and handle collisions?",
    options: ["CSMA/CA", "CSMA/CD", "Token Ring", "STP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Carrier Sense Multiple Access with Collision Detection (CSMA/CD) was used in half-duplex Ethernet to detect and recover from collisions. Modern full-duplex switches eliminate collisions entirely.",
  },

  // --- Switching Methods & Hardware ---
  {
    id: 11,
    question:
      "Which LAN switching method receives the entire frame and performs a CRC check before forwarding it?",
    options: [
      "Cut-through",
      "Fragment-free",
      "Store-and-forward",
      "Fast-forward",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Store-and-forward switching waits until the entire frame is received to check the FCS for errors. If corrupt, it drops the frame, preventing bad data from propagating.",
  },
  {
    id: 12,
    question:
      "Which switching method begins forwarding the frame immediately after reading the destination MAC address?",
    options: [
      "Store-and-forward",
      "Cut-through",
      "Fragment-free",
      "Symmetric switching",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Cut-through switching offers the lowest latency because it forwards the frame as soon as the 6-byte destination MAC address is processed, though it may forward corrupted frames.",
  },
  {
    id: 13,
    question:
      "Which switching method compromises between latency and reliability by reading the first 64 bytes of the frame before forwarding?",
    options: [
      "Fragment-free",
      "Store-and-forward",
      "Cut-through",
      "Asymmetric switching",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Fragment-free reads the first 64 bytes to ensure no collision occurred (since collisions usually corrupt the first 64 bytes) before forwarding.",
  },
  {
    id: 14,
    question:
      "What hardware component inside a Cisco switch is responsible for making extremely fast, hardware-based forwarding decisions?",
    options: [
      "CPU (Central Processing Unit) running software",
      "RAM (Random Access Memory) caching the MAC table",
      "ASIC (Application-Specific Integrated Circuit)",
      "NVRAM (Non-Volatile RAM) storing the startup config",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Switches use ASICs to perform MAC address lookups and frame forwarding at wire speed in hardware, rather than relying on the slower CPU.",
  },
  {
    id: 15,
    question: "What is CAM in the context of LAN switching?",
    options: [
      "Collision Avoidance Mechanism",
      "Content Addressable Memory",
      "Centralized Access Management",
      "Cisco Auto-MDIX",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Content Addressable Memory (CAM) is the high-speed hardware memory used to store the MAC address table.",
  },
  {
    id: 16,
    question:
      "If a switch's CAM table fills up completely (e.g., during a MAC flooding attack), what happens to new incoming frames with unknown destination MACs?",
    options: [
      "The switch drops them.",
      "The switch floods them out all ports like a hub.",
      "The switch shuts down all ports.",
      "The switch routes them to the default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "When the CAM table is full, it cannot learn new MACs. It acts like a hub, flooding all unknown unicast frames out all ports, which is the goal of a MAC flooding attack.",
  },
  {
    id: 17,
    question:
      "What feature automatically detects whether a straight-through or crossover cable is connected and adjusts the interface accordingly?",
    options: ["Auto-Negotiation", "Auto-MDIX", "PoE", "CSMA/CD"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Auto-MDIX (Automatic Medium-Dependent Interface Crossover) dynamically detects the required cable connection type and configures the transmit and receive pins automatically.",
  },
  {
    id: 18,
    question:
      "What is the default duplex and speed setting on a Cisco Catalyst switch port?",
    options: [
      "Full duplex, 100 Mbps",
      "Half duplex, 10 Mbps",
      "Auto-negotiate",
      "Full duplex, Auto speed",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "By default, switch ports are set to auto-negotiate both speed and duplex with the connected device.",
  },
  {
    id: 19,
    question:
      "If auto-negotiation fails, what is the default fallback for a 10/100 Mbps Ethernet port?",
    options: [
      "It defaults to 100 Mbps and Full Duplex",
      "It defaults to 10 Mbps and Half Duplex",
      "It disables the port and requires manual configuration",
      "It uses the lowest sensed speed and Half Duplex",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "If a switch port senses the speed but cannot negotiate duplex, IEEE standards dictate it falls back to Half Duplex for 10 or 100 Mbps links, and Full Duplex for 1000 Mbps links.",
  },
  {
    id: 20,
    question:
      "Which interface counter indicates frames that were smaller than 64 bytes with a bad FCS, usually caused by collisions?",
    options: ["Giants", "Runts", "CRC errors", "Late collisions"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Runts are frames smaller than the minimum 64-byte size, typically fragments left over from collisions on half-duplex links.",
  },

  // --- Collision & Broadcast Domains ---
  {
    id: 21,
    question:
      "How many collision domains exist on a 24-port switch with all ports active?",
    options: ["1", "2", "24", "48"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Each port on a switch creates its own separate collision domain (microsegmentation). Thus, 24 active ports = 24 collision domains.",
  },
  {
    id: 22,
    question:
      "How many broadcast domains are created by default on a standalone 24-port switch?",
    options: ["1", "12", "24", "None"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "By default, all ports on a switch belong to VLAN 1, meaning they are all in a single broadcast domain.",
  },
  {
    id: 23,
    question:
      "Which device is required to route traffic between two different broadcast domains?",
    options: [
      "Hub",
      "Layer 2 Switch",
      "Router or Layer 3 Switch",
      "Wireless Access Point",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Routers and Layer 3 switches break up broadcast domains and are required to forward traffic between them.",
  },
  {
    id: 24,
    question:
      "If 5 PCs are connected to a Hub, and that Hub is connected to one port on a Switch, how many collision domains are there?",
    options: ["1", "5", "6", "0"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A hub is a Layer 1 device that repeats everything out all ports. All devices connected to the hub, and the switch port it connects to, share a single collision domain.",
  },
  {
    id: 25,
    question: "What type of address is FF:FF:FF:FF:FF:FF?",
    options: [
      "Unicast MAC Address",
      "Multicast MAC Address",
      "Broadcast MAC Address",
      "Loopback MAC Address",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "FF:FF:FF:FF:FF:FF is the Layer 2 broadcast MAC address. Switches flood frames destined to this address out all active ports in the VLAN.",
  },
  {
    id: 26,
    question:
      "Which of the following frames is NOT flooded by a switch by default?",
    options: [
      "Broadcast frames",
      "Multicast frames",
      "Unknown Unicast frames",
      "Known Unicast frames",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Known unicast frames (where the destination MAC is in the MAC table) are forwarded only out the specific port associated with that MAC. The others are flooded.",
  },
  {
    id: 27,
    question:
      "How can a network administrator divide a single physical switch into multiple logical broadcast domains?",
    options: [
      "By configuring STP",
      "By configuring VLANs",
      "By enabling PortFast",
      "By using Auto-MDIX",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Virtual LANs (VLANs) logically segment a single physical switch into multiple isolated broadcast domains.",
  },
  {
    id: 28,
    question:
      "Which bit in the MAC address indicates whether the frame is Unicast or Multicast?",
    options: [
      "The Individual/Group (I/G) bit, the least significant bit of the first octet",
      "The Universally/Locally Administered (U/L) bit in the first octet",
      "The least significant bit of the third octet in the MAC address field",
      "The first bit of the Frame Check Sequence trailer at the end of the frame",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The I/G bit (least significant bit of the first byte) determines if the MAC is unicast (0) or multicast (1). E.g., 01:00:5E... starts with a 1 in binary for that bit.",
  },
  {
    id: 29,
    question:
      "Which protocol relies heavily on Layer 2 broadcasts to discover MAC addresses on the local subnet?",
    options: ["DNS", "DHCP", "ARP", "BGP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Address Resolution Protocol (ARP) sends a broadcast frame to ask 'Who has this IP address?' so it can learn the target's MAC address.",
  },
  {
    id: 30,
    question: "What happens to a broadcast frame when it reaches a router?",
    options: [
      "The router forwards it to all interfaces.",
      "The router drops it.",
      "The router converts it to a unicast frame.",
      "The router caches the payload.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, routers do not forward Layer 2 or Layer 3 broadcasts. This is how they create broadcast domain boundaries.",
  },

  // --- VLAN Concepts & Configuration ---
  {
    id: 31,
    question: "What is the default VLAN on a Cisco switch?",
    options: ["VLAN 0", "VLAN 1", "VLAN 10", "VLAN 1002"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VLAN 1 is the default VLAN. All ports are assigned to it by default, and it cannot be deleted or renamed.",
  },
  {
    id: 32,
    question: "Which of the following is a 'normal range' VLAN ID?",
    options: ["VLAN 0", "VLAN 100", "VLAN 1006", "VLAN 4095"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Normal range VLANs are 1 through 1005. Extended range VLANs are 1006 through 4094.",
  },
  {
    id: 33,
    question: "Where are normal range VLANs (1-1005) stored on a Cisco switch?",
    options: [
      "In the running-config",
      "In the startup-config",
      "In the vlan.dat file in flash memory",
      "In ROMMON",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Normal range VLANs are saved in a special database file called vlan.dat located in flash memory, not in the standard configuration files.",
  },
  {
    id: 34,
    question: "Where are extended range VLANs (1006-4094) stored?",
    options: [
      "In the vlan.dat file",
      "In the running-config file",
      "In NVRAM specifically",
      "They cannot be stored",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike normal range VLANs, extended range VLANs are not saved in vlan.dat. They are saved in the switch's running-config (and startup-config when saved).",
  },
  {
    id: 35,
    question: "Which command configures an interface as a static access port?",
    options: [
      "switchport mode access",
      "switchport access vlan 10",
      "switchport mode trunk",
      "switchport trunk allowed vlan 10",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'switchport mode access' forces the port to be an access port. 'switchport access vlan X' assigns the specific VLAN to it.",
  },
  {
    id: 36,
    question: "What is the purpose of a Voice VLAN?",
    options: [
      "To encrypt voice traffic using SRTP to protect the calls from being intercepted and replayed by attackers.",
      "To allow a single switchport to carry both untagged data traffic for a PC and tagged voice traffic for an IP Phone.",
      "To block data traffic on the port, preventing any host from transmitting non-voice frames to the switch.",
      "To route traffic between switches using a dynamic routing protocol such as OSPF or EIGRP on each device in the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Voice VLAN (configured with 'switchport voice vlan X') allows a trunk-like behavior on an access port so a Cisco IP Phone can tag its voice traffic while the daisy-chained PC sends untagged data.",
  },
  {
    id: 37,
    question:
      "What happens if you assign an interface to a VLAN that does not exist yet (e.g., switchport access vlan 50)?",
    options: [
      "The command is rejected with an error.",
      "The switchport goes into err-disable.",
      "The switch automatically creates the VLAN.",
      "The switch changes the native VLAN to 50.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In Cisco IOS, if you assign an access port to a non-existent VLAN, the switch will automatically create the VLAN in the database.",
  },
  {
    id: 38,
    question:
      "Which command is used to verify the VLAN assignment of switch ports?",
    options: [
      "show vlan brief",
      "show interfaces trunk",
      "show ip interface brief",
      "show port access",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show vlan brief' displays all VLANs currently existing in the database and the specific access ports assigned to them.",
  },
  {
    id: 39,
    question:
      "What happens to a port if its assigned access VLAN is deleted from the VLAN database?",
    options: [
      "It automatically reverts to VLAN 1.",
      "It becomes a trunk port.",
      "It becomes inactive and cannot forward traffic.",
      "It shuts down at the interface level.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If an access VLAN is deleted, any ports assigned to it become 'inactive'. They remain 'up/up' but will not forward any traffic until reassigned to an active VLAN.",
  },
  {
    id: 40,
    question: "What is a 'Management VLAN'?",
    options: [
      "A VLAN dedicated to transporting CDP and VTP advertisements between neighboring switches on the network.",
      "A VLAN assigned to a Switch Virtual Interface (SVI) to allow remote administration (SSH/Telnet) to the switch.",
      "A VLAN that cannot be routed and is restricted to carrying only control plane traffic on the switch itself.",
      "A VLAN reserved for legacy Token Ring and FDDI which is used to carry management traffic on the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The management VLAN is the VLAN associated with the SVI (e.g., interface vlan 99) that holds the IP address used to manage the switch remotely.",
  },
  {
    id: 41,
    question:
      "Which command creates an SVI for VLAN 20 and enters its configuration mode?",
    options: [
      "vlan 20",
      "interface vlan 20",
      "switchport access vlan 20",
      "ip routing 20",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The global command 'interface vlan 20' creates the logical Switch Virtual Interface (SVI) where you can assign an IP address for routing or management.",
  },
  {
    id: 42,
    question:
      "Why is it considered a security best practice to change the Native VLAN from VLAN 1?",
    options: [
      "To speed up trunk negotiation.",
      "To mitigate VLAN hopping attacks.",
      "Because VLAN 1 cannot be routed.",
      "Because VLAN 1 does not support spanning tree.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Changing the Native VLAN (and using an unused/dummy VLAN) helps prevent Double-Tagging VLAN hopping attacks, which abuse the untagged nature of the native VLAN.",
  },
  {
    id: 43,
    question: "What is the function of the Native VLAN on an 802.1Q trunk?",
    options: [
      "It encrypts all traffic sent across the trunk link.",
      "It drops all management frames arriving on the trunk link.",
      "It carries untagged traffic across the trunk link.",
      "It manages VTP advertisements sent across the trunk link.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The native VLAN is the one VLAN on an 802.1Q trunk that does NOT receive a VLAN tag. Traffic belonging to the native VLAN is sent untagged.",
  },
  {
    id: 44,
    question:
      "Which command deletes the entire VLAN database on a Cisco switch?",
    options: [
      "erase startup-config",
      "delete vlan.dat",
      "clear vlan all",
      "no vlan 1-4094",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because normal VLANs are stored in flash, 'delete flash:vlan.dat' (or simply 'delete vlan.dat') is required to wipe them. Erasing the startup-config is not enough.",
  },
  {
    id: 45,
    question:
      "VLANs 1002-1005 are reserved by default for what legacy technologies?",
    options: [
      "ISL and 802.1Q",
      "Token Ring and FDDI",
      "Frame Relay and ATM",
      "Voice and Wireless",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "VLANs 1002-1005 are permanently reserved in Cisco IOS for legacy Token Ring and FDDI support and cannot be deleted or used for Ethernet.",
  },

  // --- Trunking (802.1Q, ISL) & DTP ---
  {
    id: 46,
    question: "Which IEEE standard defines VLAN tagging on Ethernet trunks?",
    options: ["802.1D", "802.1w", "802.1Q", "802.3ad"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IEEE 802.1Q (often called Dot1Q) is the industry standard for VLAN tagging.",
  },
  {
    id: 47,
    question: "How many bytes does the 802.1Q tag add to an Ethernet frame?",
    options: ["2 bytes", "4 bytes", "8 bytes", "30 bytes"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "802.1Q inserts a 4-byte (32-bit) tag into the original Ethernet frame header, right after the Source MAC address.",
  },
  {
    id: 48,
    question:
      "What was the Cisco-proprietary alternative to 802.1Q that encapsulated the entire frame rather than inserting a tag?",
    options: ["DTP", "VTP", "ISL", "PAgP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Inter-Switch Link (ISL) was Cisco's proprietary trunking protocol. It encapsulated the entire frame with a 26-byte header and 4-byte trailer. It is largely obsolete today.",
  },
  {
    id: 49,
    question:
      "Which command forces an interface to become a trunk regardless of the neighbor's configuration?",
    options: [
      "switchport mode dynamic desirable",
      "switchport mode trunk",
      "switchport nonegotiate",
      "switchport trunk encapsulation dot1q",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'switchport mode trunk' statically configures the port as a trunk, bypassing DTP negotiation for the mode.",
  },
  {
    id: 50,
    question: "What does the command 'switchport nonegotiate' do?",
    options: [
      "It disables Spanning Tree Protocol BPDUs from being sent out on the port.",
      "It disables DTP (Dynamic Trunking Protocol) frames from being sent on the port.",
      "It forces the port to access mode so it stops sending trunk negotiation frames.",
      "It drops untagged frames that arrive on the switchport and logs the activity.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'switchport nonegotiate' stops the port from sending DTP negotiation frames. It is typically used on static trunks pointing to non-Cisco devices or for security.",
  },
  {
    id: 51,
    question:
      "If Switch A is configured with 'switchport mode dynamic auto' and Switch B is configured with 'switchport mode dynamic auto', what will the link become?",
    options: [
      "Trunk",
      "Access",
      "Err-disable",
      "It will fluctuate between both",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Both sides are waiting passively for the other to initiate trunking. Since neither asks, the link falls back to an Access port.",
  },
  {
    id: 52,
    question:
      "If Switch A is 'dynamic desirable' and Switch B is 'dynamic auto', what will the link become?",
    options: ["Trunk", "Access", "Err-disable", "Suspended"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Desirable actively sends DTP messages asking to form a trunk. Auto responds favorably to those messages, so the link successfully negotiates to a Trunk.",
  },
  {
    id: 53,
    question:
      "What happens if a switch receives a tagged frame on an access port?",
    options: [
      "It strips the tag and forwards it.",
      "It forwards it to the router.",
      "It drops the frame.",
      "It converts the port to a trunk.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Access ports expect untagged traffic. If they receive an 802.1Q tagged frame (excluding Voice VLAN scenarios), they drop the frame.",
  },
  {
    id: 54,
    question:
      "Which command restricts a trunk link to only carry traffic for VLANs 10, 20, and 30?",
    options: [
      "switchport trunk native vlan 10,20,30",
      "switchport access vlan 10,20,30",
      "switchport trunk allowed vlan 10,20,30",
      "vlan allow 10,20,30",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'switchport trunk allowed vlan' command creates an allowed list. By default, trunks allow all VLANs (1-4094).",
  },
  {
    id: 55,
    question:
      "You issue 'switchport trunk allowed vlan 40' on a trunk that currently allows VLANs 10, 20, and 30. What happens?",
    options: [
      "VLAN 40 is added to the list.",
      "Only VLAN 40 is allowed; 10, 20, and 30 are removed.",
      "The command fails due to missing keywords.",
      "The native VLAN changes to 40.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Without using the 'add' keyword (switchport trunk allowed vlan add 40), the command completely overwrites the existing list.",
  },
  {
    id: 56,
    question:
      "What is the command to change the native VLAN on a trunk to VLAN 99?",
    options: [
      "switchport native vlan 99",
      "switchport trunk native vlan 99",
      "switchport access vlan 99",
      "vlan native 99",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The interface command is 'switchport trunk native vlan 99'. This ensures untagged traffic is placed into VLAN 99.",
  },
  {
    id: 57,
    question:
      "What issue is indicated if CDP reports a '%CDP-4-NATIVE_VLAN_MISMATCH' error?",
    options: [
      "The trunk link is down because one of the trunk ports has been administratively shut down.",
      "One switch has native VLAN 1, and the connected switch has native VLAN 99 on the same link.",
      "The VTP domains do not match, so the switches reject each other's VLAN advertisements.",
      "Spanning Tree Protocol is blocking the native VLAN on both ends of the trunk link.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "This means the two ends of the trunk do not agree on which VLAN should be untagged. This can merge two distinct VLANs and cause spanning-tree loops.",
  },
  {
    id: 58,
    question:
      "Which command shows the specific VLANs that are currently active and forwarding across a specific trunk?",
    options: [
      "show vlan brief",
      "show interfaces trunk",
      "show port trunk",
      "show spanning-tree vlan",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show interfaces trunk' displays all trunking interfaces, their encapsulation, native VLAN, and the list of VLANs allowed and currently forwarding.",
  },
  {
    id: 59,
    question:
      "If a multilayer switch interface supports both ISL and 802.1Q, what command is required before you can issue 'switchport mode trunk'?",
    options: [
      "switchport trunk encapsulation dot1q",
      "switchport nonegotiate",
      "switchport mode dynamic desirable",
      "no switchport",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "On older Cisco switches that support both ISL and 802.1Q, you must specify the encapsulation type before hardcoding the port as a trunk.",
  },
  {
    id: 60,
    question: "What is a 'Router-on-a-Stick'?",
    options: [
      "A router connected to a hub, forwarding all traffic out every port into a single shared collision domain segment.",
      "A router using a single physical interface connected to a switch trunk, utilizing subinterfaces to route between VLANs.",
      "A router configured to perform switching functions by enabling IP routing and creating bridge group interfaces.",
      "A wireless access point acting as a router and performing NAT for all connected wireless clients on the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Router-on-a-Stick uses 802.1Q trunking on a router interface. Subinterfaces (e.g., G0/0.10, G0/0.20) are created, each assigned to a different VLAN, allowing Inter-VLAN routing.",
  },

  // --- VTP (VLAN Trunking Protocol) ---
  {
    id: 61,
    question: "What is the primary purpose of VTP (VLAN Trunking Protocol)?",
    options: [
      "To negotiate trunk links between switches and determine their encapsulation type.",
      "To synchronize VLAN creation, deletion, and renaming across a switched network.",
      "To route traffic between VLANs using a router or a Layer 3 switch with SVIs.",
      "To prevent Layer 2 loops by placing redundant ports into a blocking state.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VTP allows an administrator to create a VLAN on one VTP Server switch and have that VLAN automatically created on all other switches in the VTP domain.",
  },
  {
    id: 62,
    question:
      "Which VTP mode allows a switch to create, modify, and delete VLANs, and propagates those changes to others?",
    options: ["Client", "Transparent", "Server", "Off"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "VTP Server is the default mode and allows the administrator to manage the VLAN database for the entire VTP domain.",
  },
  {
    id: 63,
    question:
      "Which VTP mode forwards VTP advertisements but does NOT synchronize its own VLAN database with them?",
    options: ["Server", "Client", "Transparent", "Disabled"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Transparent mode switches pass VTP packets through to other switches but maintain their own independent, local VLAN database.",
  },
  {
    id: 64,
    question:
      "What is the danger of inserting a new switch into a production network with VTP enabled?",
    options: [
      "It will disable all trunk links on the switch, halting inter-VLAN traffic and requiring manual reconfiguration of every port.",
      "If the new switch has a higher VTP Configuration Revision Number, it can overwrite and delete all VLANs on the production network.",
      "It will cause a spanning-tree broadcast storm that will saturate every link on the switch and completely stop all network connectivity.",
      "It will change the native VLAN to 1002 on all trunk links, breaking the delivery of untagged traffic across the entire network.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "VTP clients/servers always sync to the database with the highest Revision Number. A lab switch with a higher number can accidentally wipe the production VLANs.",
  },
  {
    id: 65,
    question:
      "How can you safely reset a switch's VTP Configuration Revision Number to 0 before adding it to a network?",
    options: [
      "Reboot the switch and wait for it to reload and boot up completely.",
      "Change the VTP domain name to something else, then change it back.",
      "Clear the MAC address table using the clear mac address-table command.",
      "Issue 'clear vtp counters' and then reconfigure the domain.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Changing the VTP domain name to a dummy name and then back (or changing the VTP mode to Transparent and back) resets the revision number to 0.",
  },

  // --- STP / RSTP Concepts & Operations ---
  {
    id: 66,
    question:
      "What is the primary purpose of the Spanning Tree Protocol (STP)?",
    options: [
      "To logically block redundant links to prevent Layer 2 switching loops.",
      "To load balance traffic across multiple physical links.",
      "To translate between IPv4 and IPv6.",
      "To assign dynamic MAC addresses.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "STP prevents broadcast storms and MAC table instability caused by physical loops in a Layer 2 network by placing redundant ports in a Blocking state.",
  },
  {
    id: 67,
    question: "What is the IEEE standard for classic Spanning Tree Protocol?",
    options: ["802.1Q", "802.1D", "802.1w", "802.1X"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IEEE 802.1D is the original STP standard. 802.1w is RSTP, and 802.1Q is VLAN Trunking.",
  },
  {
    id: 68,
    question: "How is the Root Bridge elected in STP?",
    options: [
      "The switch with the highest Bridge ID becomes Root.",
      "The switch with the lowest Bridge ID becomes Root.",
      "The switch with the highest MAC address becomes Root.",
      "The switch with the fastest CPU becomes Root.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Root Bridge is the switch with the lowest Bridge ID (BID). The BID is composed of the Bridge Priority + the switch's MAC address.",
  },
  {
    id: 69,
    question: "What is the default STP Bridge Priority on a Cisco switch?",
    options: ["0", "4096", "32768", "65536"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default base priority is 32768. Because of the Extended System ID (VLAN ID), VLAN 1's priority is typically seen as 32769.",
  },
  {
    id: 70,
    question:
      "In STP, if two switches have the same Bridge Priority, how is the tie broken to elect the Root Bridge?",
    options: [
      "Lowest Port Cost",
      "Lowest MAC Address",
      "Highest MAC Address",
      "Lowest IP Address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If the priorities are tied (e.g., both are 32768), the switch with the lowest, oldest hardware MAC address wins the Root election.",
  },
  {
    id: 71,
    question:
      "Which STP port role is responsible for forwarding traffic away from the Root Bridge for a specific network segment?",
    options: ["Root Port", "Designated Port", "Alternate Port", "Blocked Port"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Every collision domain/segment elects one Designated Port. This port forwards traffic onto the segment. All ports on the Root Bridge are Designated Ports.",
  },
  {
    id: 72,
    question:
      "Which STP port role is the single best path back to the Root Bridge?",
    options: ["Designated Port", "Alternate Port", "Root Port", "Backup Port"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Every non-root switch elects exactly one Root Port, which is the interface with the lowest total path cost to reach the Root Bridge.",
  },
  {
    id: 73,
    question:
      "What are the four transitional states a port goes through in classic STP (802.1D) before forwarding traffic?",
    options: [
      "Blocking, Listening, Learning, Forwarding",
      "Discarding, Learning, Forwarding",
      "Disabled, Blocking, Forwarding",
      "Listening, Analyzing, Forwarding",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "In 802.1D, ports transition from Blocking -> Listening (15s) -> Learning (15s) -> Forwarding. It takes 30-50 seconds to converge.",
  },
  {
    id: 74,
    question:
      "Which IEEE standard represents Rapid Spanning Tree Protocol (RSTP)?",
    options: ["802.1D", "802.1w", "802.1s", "802.3ad"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IEEE 802.1w is Rapid Spanning Tree Protocol, which drastically reduces convergence time from 50 seconds to a few seconds or less.",
  },
  {
    id: 75,
    question:
      "How does RSTP (802.1w) differ from classic STP in its port states?",
    options: [
      "It adds a Listening state that lasts for 15 seconds before Forwarding.",
      "It combines Blocking, Listening, and Disabled into a single 'Discarding' state.",
      "It completely eliminates the Learning state and replaces it with a new state.",
      "It uses 'Forwarding' and 'Active' states to describe forwarding behavior.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "RSTP simplifies the states to Discarding, Learning, and Forwarding.",
  },
  {
    id: 76,
    question: "What is a BPDU?",
    options: [
      "Broadcast Protocol Data Unit",
      "Bridge Protocol Data Unit",
      "Base Port Data Unit",
      "Bandwidth Policy Distribution Unit",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Bridge Protocol Data Units (BPDUs) are the multicast frames switches send to exchange STP information, elect the Root Bridge, and detect loops.",
  },
  {
    id: 77,
    question:
      "Which Cisco-proprietary feature allows an access port to bypass the STP Listening and Learning states and transition immediately to Forwarding?",
    options: ["BPDU Guard", "Root Guard", "PortFast", "UplinkFast"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "PortFast is configured on ports connected to end devices (PCs, servers) to allow them to connect to the network instantly without the 30-second STP delay.",
  },
  {
    id: 78,
    question: "What happens if a PortFast-enabled port receives a BPDU?",
    options: [
      "It forwards it normally and continues to operate as a PortFast access port without any issue.",
      "If BPDU Guard is enabled, the port is immediately placed into an err-disable state to prevent a loop.",
      "It becomes a trunk port and begins to dynamically negotiate trunking with the connected device.",
      "It ignores the BPDU and continues forwarding traffic, only logging the event in the syslog.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "End devices shouldn't send BPDUs. Receiving one implies a switch/hub was plugged in, creating a loop risk. BPDU Guard protects PortFast ports by shutting them down if this happens.",
  },
  {
    id: 79,
    question:
      "What is the command to force a switch to become the Root Bridge for VLAN 10 by automatically lowering its priority?",
    options: [
      "spanning-tree vlan 10 priority 0",
      "spanning-tree vlan 10 root primary",
      "set root vlan 10",
      "spanning-tree vlan 10 active",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The macro command 'spanning-tree vlan 10 root primary' checks the current Root's priority and automatically sets this switch's priority lower (usually 24576) to win the election.",
  },
  {
    id: 80,
    question:
      "When changing STP priority manually, the value must be a multiple of what number?",
    options: ["256", "1024", "4096", "8192"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Due to the Extended System ID taking up 12 bits of the original 16-bit priority field, the remaining 4 bits for priority mean it must be configured in increments of 4096 (e.g., 4096, 8192, 32768).",
  },
  {
    id: 81,
    question:
      "What is Cisco's default Spanning Tree mode on Catalyst switches?",
    options: [
      "Common Spanning Tree (CST)",
      "PVST+ (Per-VLAN Spanning Tree Plus)",
      "Rapid-PVST+",
      "MST (Multiple Spanning Tree)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Historically and currently on many unconfigured Catalysts, PVST+ is the default. It runs a separate 802.1D instance for every VLAN. (Rapid-PVST+ is highly recommended but must be enabled).",
  },
  {
    id: 82,
    question:
      "Which STP port role in RSTP acts as a backup to the Root Port and provides an immediate alternate path to the Root Bridge?",
    options: [
      "Designated Port",
      "Alternate Port",
      "Backup Port",
      "Forwarding Port",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Alternate Port receives superior BPDUs from another switch and acts as an immediate backup to the Root Port if it fails, allowing sub-second failover.",
  },
  {
    id: 83,
    question: "What does the Root Guard feature do?",
    options: [
      "It prevents the switch from ever becoming the Root Bridge by discarding all superior BPDUs that arrive on any of its configured interfaces.",
      "It ignores all BPDUs received on the port, so the switch never participates in spanning tree elections or sends its own BPDUs on that link.",
      "It prevents a downstream port from becoming a Root Port, protecting the network from a rogue switch attempting to usurp the Root Bridge role.",
      "It speeds up root election by lowering the bridge priority so this switch always becomes the Root Bridge without a long convergence delay.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Root Guard places a port into 'root-inconsistent' (blocked) state if it receives superior BPDUs, protecting the core Root Bridge from being hijacked by a newly plugged-in switch.",
  },
  {
    id: 84,
    question:
      "In classic STP, what is the default cost of a 1 Gbps (GigabitEthernet) link?",
    options: ["2", "4", "19", "100"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Using the classic STP short cost method: 10 Mbps = 100, 100 Mbps = 19, 1 Gbps = 4, 10 Gbps = 2.",
  },
  {
    id: 85,
    question: "What happens during the STP 'Listening' state?",
    options: [
      "The port forwards data but doesn't learn MAC addresses or update the switch's MAC address table at all.",
      "The port learns MAC addresses but doesn't forward data frames or participate in STP elections at all.",
      "The port sends and receives BPDUs to determine the active topology, but does not learn MACs or forward data.",
      "The port is administratively down, so no frames, BPDUs, or data of any kind are transmitted on it.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In Listening (15s), the port actively participates in STP elections via BPDUs but drops all user data and does not populate the MAC table.",
  },

  // --- Layer 2 Discovery & Troubleshooting ---
  {
    id: 86,
    question:
      "Which Cisco-proprietary protocol is enabled by default to discover basic information about directly connected Cisco devices?",
    options: ["LLDP", "CDP", "VTP", "PAgP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Cisco Discovery Protocol (CDP) shares hardware platforms, IP addresses, and connected port details between directly attached Cisco devices.",
  },
  {
    id: 87,
    question: "Which command completely disables CDP on the entire switch?",
    options: ["no cdp enable", "no cdp run", "cdp off", "disable cdp"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The global configuration command 'no cdp run' turns off CDP for the whole chassis. 'no cdp enable' turns it off on a per-interface basis.",
  },
  {
    id: 88,
    question: "What is the open-standard (IEEE 802.1AB) alternative to CDP?",
    options: ["NDP", "SNMP", "LLDP", "RSTP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Link Layer Discovery Protocol (LLDP) is the vendor-neutral standard for discovering connected neighbor devices.",
  },
  {
    id: 89,
    question:
      "You need to find the IP address of a connected Cisco router from your switch. Which command shows this?",
    options: [
      "show cdp neighbors",
      "show cdp neighbors detail",
      "show ip route",
      "show arp",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "While 'show cdp neighbors' shows device IDs and local/remote ports, you must use 'show cdp neighbors detail' (or 'show cdp entry *') to see the neighbor's Management IP address.",
  },
  {
    id: 90,
    question:
      "Which of the following causes a switch port to go into the 'err-disable' state?",
    options: [
      "A BPDU received on a BPDU Guard enabled port.",
      "A Port Security violation (with default shutdown action).",
      "UDLD detecting a unidirectional link.",
      "All of the above.",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Err-disable is a protective state triggered by various severe violations or physical errors, requiring an administrator to shut/no shut the port, or use 'errdisable recovery'.",
  },
  {
    id: 91,
    question:
      "In a 'show interfaces' output, what generally causes an incrementing 'CRC errors' or 'input errors' counter?",
    options: [
      "Network congestion and buffer overruns on the switch",
      "A faulty cable, bad NIC, or a duplex mismatch",
      "A routing loop causing packets to bounce around",
      "MAC flooding by an attacker on the segment",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cyclic Redundancy Check (CRC) errors mean frames are arriving physically corrupted, almost always due to physical layer issues (bad cables/ports) or duplex mismatches.",
  },
  {
    id: 92,
    question: "What is a 'Late Collision'?",
    options: [
      "A collision that occurs after the first 64 bytes of the frame have been transmitted.",
      "A collision that occurs on a full-duplex link where both sides transmit simultaneously.",
      "A collision that is caused by the CPU being too slow to process frames in time.",
      "A collision that the switch ignores because it happens after the FCS is checked.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Late collisions happen after 512 bits (64 bytes). They are illegal in Ethernet and strongly indicate either a cable length exceeding specifications or a duplex mismatch.",
  },
  {
    id: 93,
    question:
      "If a switch port is configured for Full Duplex, but the connected PC is hardcoded to Half Duplex, what is the result on the switch port?",
    options: [
      "It will automatically fall back to Half Duplex.",
      "The link will not come up.",
      "The switch port will show high CRC errors and late collisions.",
      "The PC will show high late collisions.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "In a duplex mismatch, the Full Duplex side (switch) transmits whenever it wants, causing collisions on the Half Duplex side (PC). The switch then receives corrupted frames (CRCs/runts).",
  },
  {
    id: 94,
    question:
      "Which command verifies if an interface is operating as a trunk or access port, and shows its operational VLANs?",
    options: [
      "show interface switchport",
      "show ip interface brief",
      "show mac address-table",
      "show vlan",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "'show interface [id] switchport' provides comprehensive Layer 2 details: administrative mode, operational mode, encapsulation, access VLAN, native VLAN, etc.",
  },
  {
    id: 95,
    question: "What is Port Security?",
    options: [
      "A feature that encrypts all data traversing access ports using 802.1AE MACsec to prevent eavesdropping on the wire by attackers.",
      "A feature that restricts input to an interface by limiting and identifying MAC addresses of the stations allowed to access the port.",
      "A feature that requires 802.1X username/password authentication before any host can gain access to the switchport interface.",
      "A firewall feature applied to VLANs that inspects all traffic and blocks unauthorized flows between different network segments.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Port Security locks down a port by only allowing traffic from specific learned or statically configured MAC addresses, mitigating MAC spoofing and flooding.",
  },
  {
    id: 96,
    question:
      "What is the default violation action for Port Security on a Cisco switch?",
    options: ["Protect", "Restrict", "Shutdown", "Log"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "By default, if an unauthorized MAC address sends a frame, the port instantly enters the 'err-disable' state (Shutdown).",
  },
  {
    id: 97,
    question: "What is a 'Sticky' MAC address in Port Security?",
    options: [
      "A MAC address that never ages out of the CAM table and stays active until the port or the entire switch is rebooted.",
      "A dynamically learned MAC address that is converted into a static configuration command and saved in the running-config.",
      "A MAC address that is assigned to the management VLAN for the switch's remote administration and management interfaces.",
      "A multicast MAC address that is used to deliver frames to a group of destination devices on the local LAN segment.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'switchport port-security mac-address sticky' tells the switch to learn the first connected MAC address dynamically and hardcode it into the configuration so it survives reboots.",
  },
  {
    id: 98,
    question:
      "Which IEEE standard defines Power over Ethernet (PoE), supplying up to 15.4 Watts of power over standard Ethernet cables?",
    options: ["802.1X", "802.3af", "802.3at", "802.11"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IEEE 802.3af is the original PoE standard (15.4W). 802.3at is PoE+ (up to 30W), and 802.3bt is UPOE/PoE++ (up to 60W/100W).",
  },
  {
    id: 99,
    question:
      "Which of the following devices relies most heavily on PoE provided by switches?",
    options: [
      "Desktop computers",
      "Core Routers",
      "IP Phones and Wireless Access Points",
      "Storage Area Networks (SANs)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IP Phones, WAPs, and IP Cameras are the primary consumers of PoE, allowing them to operate without requiring a separate wall power outlet.",
  },
  {
    id: 100,
    question: "What does the command 'show power inline' display?",
    options: [
      "The CPU power consumption and temperature of the switch hardware components.",
      "The status of the redundant power supply and fan components in the chassis.",
      "The PoE status, showing how much wattage is allocated to each connected device.",
      "The optical power levels of the SFP modules connected to the switch ports.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'show power inline' command displays PoE availability, total wattage, and the specific power draw of devices connected to PoE-capable ports.",
  },
];
