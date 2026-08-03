import type { QuizQuestion } from "./types";

export const stpQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary purpose of Spanning Tree Protocol (STP)?",
    options: [
      "To load-balance traffic across redundant links",
      "To prevent Layer 2 loops in a redundant switched network",
      "To assign IP addresses to switches",
      "To encrypt traffic between switches",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "STP prevents Layer 2 loops by dynamically blocking redundant ports while keeping a single active path between any two switches. It unblocks ports when the active path fails.",
  },
  {
    id: 2,
    question:
      "Which two values are combined to create a Spanning Tree Bridge ID (BID)?",
    options: [
      "IP Address and MAC Address",
      "Bridge Priority and MAC Address",
      "Bridge Priority and IP Address",
      "Port ID and MAC Address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Bridge ID is an 8-byte field composed of a 2-byte Bridge Priority (which includes the extended system ID for VLAN) and a 6-byte MAC address.",
  },
  {
    id: 3,
    question:
      "What is the default bridge priority for a Cisco switch running STP?",
    options: ["4096", "8192", "32768", "65536"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default bridge priority is 32768 (0x8000). The extended system ID (VLAN ID) is added to this value to create the effective priority for each VLAN.",
  },
  {
    id: 4,
    question:
      "In which STP port state does a switch learn MAC addresses but not forward user traffic?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In the Learning state, the switch processes BPDUs and begins building the MAC address table from received frames, but user data traffic is still not forwarded.",
  },
  {
    id: 5,
    question:
      "Which Rapid Spanning Tree Protocol (RSTP) port role provides connectivity to the root bridge, replacing the designated port when the root port fails?",
    options: ["Root Port", "Designated Port", "Alternate Port", "Backup Port"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "An Alternate Port is a port that provides a backup path to the root bridge, replacing the root port immediately if the root port fails. RSTP converges significantly faster than classic STP.",
  },
  {
    id: 111,
    question: "What is the primary purpose of Spanning Tree Protocol (STP)?",
    options: [
      "To load-balance traffic across redundant links",
      "To prevent Layer 2 loops in a redundant switched network",
      "To assign IP addresses to switches",
      "To encrypt traffic between switches",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "STP prevents Layer 2 loops by dynamically blocking redundant ports while keeping a single active path between any two switches. It unblocks ports when the active path fails.",
  },
  {
    id: 112,
    question:
      "Which standardized IEEE protocol defines the original Spanning Tree Protocol?",
    options: ["802.1Q", "802.1w", "802.1D", "802.1s"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IEEE 802.1D is the original standard for Spanning Tree Protocol. 802.1w is Rapid STP (RSTP), 802.1s is Multiple STP (MSTP), and 802.1Q is VLAN trunking.",
  },
  {
    id: 113,
    question:
      "What two components make up the classic 8-byte Bridge ID (BID) in standard 802.1D?",
    options: [
      "Bridge Priority and IP Address",
      "Bridge Priority and MAC Address",
      "System ID and MAC Address",
      "VLAN ID and IP Address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The classic Bridge ID consists of a 2-byte Bridge Priority and a 6-byte MAC Address. In modern implementations, the 2-byte priority is split to include the Extended System ID (VLAN ID).",
  },
  {
    id: 114,
    question:
      "What is the default STP bridge priority value on a Cisco switch before the Extended System ID is added?",
    options: ["0", "4096", "32768", "65536"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default bridge priority is 32768. The final priority value will be 32768 plus the VLAN ID (e.g., 32769 for VLAN 1).",
  },
  {
    id: 115,
    question: "Which criteria does STP use first to elect the Root Bridge?",
    options: [
      "Highest MAC Address",
      "Lowest MAC Address",
      "Highest Bridge Priority",
      "Lowest Bridge Priority",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "STP elects the Root Bridge based on the lowest Bridge ID. It first compares the Bridge Priority; if there is a tie, it breaks the tie using the lowest MAC Address.",
  },
  {
    id: 116,
    question:
      "In standard 802.1D STP, what is the sequence of port states a port transitions through before forwarding traffic?",
    options: [
      "Blocking -> Learning -> Listening -> Forwarding",
      "Blocking -> Listening -> Learning -> Forwarding",
      "Discarding -> Learning -> Forwarding",
      "Listening -> Blocking -> Learning -> Forwarding",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In standard STP, a port moves from Blocking, to Listening (15 seconds), to Learning (15 seconds), and finally to Forwarding.",
  },
  {
    id: 117,
    question:
      "Which STP port state populates the MAC address table but does NOT forward user data frames?",
    options: ["Blocking", "Listening", "Learning", "Discarding"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In the Learning state, the switch port listens to incoming frames to populate the MAC address table but drops the data payloads to prevent loops before transitioning to Forwarding.",
  },
  {
    id: 118,
    question: "What is the default Hello Timer interval for STP BPDUs?",
    options: ["1 second", "2 seconds", "15 seconds", "20 seconds"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default Hello Timer is 2 seconds. The Root Bridge sends Configuration BPDUs every 2 seconds by default.",
  },
  {
    id: 119,
    question:
      "What happens when a switch port configured with PortFast receives a BPDU?",
    options: [
      "It forwards the BPDU to the Root Bridge, treating the connected switch like a normal upstream neighbor.",
      "It immediately enters the err-disable state if BPDU Guard is enabled, or loses PortFast status otherwise.",
      "It ignores the BPDU and continues forwarding user traffic as if it were connected to an end host.",
      "It triggers a Topology Change Notification (TCN) and recalculates the entire spanning-tree topology.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "PortFast ports are meant for end-hosts. If a BPDU is received, it means another switch is connected. Without BPDU Guard, the port drops out of PortFast and goes through standard STP states. With BPDU Guard, it shuts down (err-disable).",
  },
  {
    id: 120,
    question:
      "Which IEEE standard defines Rapid Spanning Tree Protocol (RSTP)?",
    options: ["802.1D", "802.1w", "802.1s", "802.1X"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IEEE 802.1w is the standard for RSTP, which provides significantly faster convergence times than the original 802.1D standard.",
  },
  {
    id: 121,
    question:
      "How does RSTP (802.1w) differ from STP (802.1D) regarding port states?",
    options: [
      "RSTP adds a new 'Synchronizing' state that does not exist in the original 802.1D.",
      "RSTP combines Blocking, Listening, and Disabled into a single 'Discarding' state.",
      "RSTP eliminates the Learning state, moving ports directly from Listening to Forwarding.",
      "RSTP uses only two states: Blocking and Forwarding, dropping the others entirely.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "RSTP simplifies port states by merging Blocking, Listening, and Disabled into the 'Discarding' state. Learning and Forwarding remain.",
  },
  {
    id: 122,
    question: "In RSTP, which port role acts as a backup for the Root Port?",
    options: [
      "Designated Port",
      "Backup Port",
      "Alternate Port",
      "Standby Port",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "An Alternate Port receives more useful BPDUs from another bridge and serves as a backup path to the Root Bridge if the current Root Port fails.",
  },
  {
    id: 123,
    question: "In RSTP, what is the role of a Backup Port?",
    options: [
      "It backs up the Root Port, providing redundancy toward the Root Bridge on the same switch.",
      "It backs up a Designated Port on the same switch connected to the same shared segment.",
      "It replaces a failed edge port by immediately transitioning the segment to the Forwarding state.",
      "It connects to an Alternate Root Bridge located in a different spanning-tree region.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A Backup Port receives more useful BPDUs from its own switch. It serves as a backup to a Designated Port on a shared LAN segment (like through a hub).",
  },
  {
    id: 124,
    question:
      "What is the STP cost of a 1 Gbps Ethernet link using the standard (short) cost method?",
    options: ["2", "4", "19", "100"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Under the standard 802.1D (short) cost calculations: 10 Mbps = 100, 100 Mbps = 19, 1 Gbps = 4, and 10 Gbps = 2.",
  },
  {
    id: 125,
    question:
      "What command ensures a switch will become the Root Bridge for VLAN 10, assuming no other switch has a priority set to 0?",
    options: [
      "spanning-tree vlan 10 root primary",
      "spanning-tree vlan 10 priority 32768",
      "spanning-tree vlan 10 root secondary",
      "spanning-tree root primary vlan 10",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'spanning-tree vlan 10 root primary' macro command automatically lowers the switch's priority (usually to 24576 or 4096 lower than the current root) to ensure it wins the election.",
  },
  {
    id: 126,
    question:
      "What happens when you configure 'spanning-tree portfast' on an interface?",
    options: [
      "The port is permanently disabled from sending BPDUs out toward the connected end-user device.",
      "The port bypasses the Listening and Learning states and transitions immediately to Forwarding.",
      "The port speed is locked to the maximum available bandwidth negotiated on the physical link.",
      "The port will drop any BPDU it receives so it can never participate in the spanning-tree topology.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "PortFast transitions the port directly to the Forwarding state upon link-up, bypassing the standard 30-second delay. It should only be used on access ports connected to end devices.",
  },
  {
    id: 127,
    question:
      "Which Cisco proprietary STP version runs a separate spanning-tree instance for every VLAN?",
    options: ["MSTP", "RSTP", "PVST+", "CST"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Per-VLAN Spanning Tree Plus (PVST+) creates a unique 802.1D spanning tree instance for each VLAN, allowing for manual load balancing.",
  },
  {
    id: 128,
    question:
      "If all switches in a network have the default bridge priority, which switch becomes the Root Bridge?",
    options: [
      "The switch with the highest MAC address",
      "The switch with the lowest MAC address",
      "The switch with the highest IP address",
      "The switch with the lowest IP address",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If bridge priorities tie (all are 32768 + VLAN ID), the tiebreaker is the lowest MAC address associated with the switch.",
  },
  {
    id: 129,
    question:
      "Which mechanism protects the network by preventing a newly introduced switch from becoming the Root Bridge?",
    options: ["BPDU Guard", "Loop Guard", "Root Guard", "BPDU Filter"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Root Guard prevents an interface from becoming a Root Port. If superior BPDUs are received on a Root Guard-enabled port, it is placed into a root-inconsistent state.",
  },
  {
    id: 130,
    question: "What is the primary function of BPDU Guard?",
    options: [
      "To filter BPDUs so they are not sent to end hosts",
      "To err-disable a port if it receives a BPDU",
      "To protect the root bridge election process",
      "To prevent unidirectional links from causing loops",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "BPDU Guard shuts down (err-disables) a port if a BPDU is received. It is typically paired with PortFast to prevent unauthorized switches from joining the topology.",
  },
  {
    id: 131,
    question:
      "What does BPDU Filter do when configured globally via 'spanning-tree portfast bpdufilter default'?",
    options: [
      "It drops all incoming and outgoing BPDUs unconditionally on all ports, removing them from spanning-tree processing entirely.",
      "It stops sending BPDUs on PortFast-enabled ports, but if a BPDU is received, the port loses PortFast status and participates in STP.",
      "It err-disables the port immediately upon receiving any BPDU, preventing an unauthorized switch from joining the network.",
      "It changes the port to an Alternate Port, providing a backup path toward the Root Bridge that remains in the Discarding state.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "When configured globally, BPDU Filter stops the port from sending BPDUs. However, if a BPDU is received, the feature dynamically disables itself, and the port acts as a normal STP port.",
  },
  {
    id: 132,
    question:
      "Which spanning-tree feature prevents Alternate or Root ports from becoming Designated ports due to a sudden loss of BPDUs (e.g., unidirectional link failure)?",
    options: ["Root Guard", "BPDU Guard", "UDLD", "Loop Guard"],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "Loop Guard prevents a blocked port (Alternate or Root port) from transitioning to the forwarding state if it stops receiving BPDUs, putting it in a loop-inconsistent state instead.",
  },
  {
    id: 133,
    question: "In standard 802.1D, how long is the Max Age timer by default?",
    options: ["2 seconds", "15 seconds", "20 seconds", "30 seconds"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The default Max Age timer is 20 seconds. This is the amount of time a switch holds onto superior BPDU information before discarding it and recalculating the topology.",
  },
  {
    id: 134,
    question:
      "Which two parameters are used to determine the Root Port on a non-root switch? (Choose the first tie-breaker after lowest root path cost)",
    options: [
      "Lowest Sender Bridge ID",
      "Lowest Sender Port ID",
      "Highest Sender Bridge ID",
      "Lowest Local Port ID",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "To select a Root Port, a switch looks for: 1. Lowest Root Path Cost. 2. Lowest Sender Bridge ID. 3. Lowest Sender Port ID. 4. Lowest Local Port ID.",
  },
  {
    id: 135,
    question:
      "In PVST+, a switch is configured for VLAN 10. The priority is left at default. What is the exact Bridge Priority value sent in the BPDU?",
    options: ["32768", "32778", "4096", "10"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "PVST+ uses the Extended System ID. The default priority is 32768. 32768 + VLAN 10 = 32778.",
  },
  {
    id: 136,
    question: "Which of the following is true regarding RSTP Link Types?",
    options: [
      "Link type is solely determined by the speed of the interface.",
      "A full-duplex link is automatically considered a Point-to-Point link type.",
      "A half-duplex link is automatically considered a Point-to-Point link type.",
      "Link types must be manually configured on every interface.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "RSTP automatically determines the link type based on duplex. Full-duplex interfaces are considered Point-to-Point, allowing rapid transitions. Half-duplex interfaces are considered Shared.",
  },
  {
    id: 137,
    question:
      "What is the primary advantage of MSTP (Multiple Spanning Tree Protocol) over PVST+?",
    options: [
      "MSTP elects a Root Bridge much faster than the traditional 802.1D timer-based election.",
      "MSTP maps multiple VLANs to a single spanning-tree instance, reducing CPU overhead.",
      "MSTP eliminates the need for BPDUs by relying entirely on the control plane for updates.",
      "MSTP is Cisco proprietary, integrating better with Cisco hardware than IEEE standardized options.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "MSTP (802.1s) allows multiple VLANs to be grouped into a single spanning-tree instance. This drastically reduces the number of BPDUs and CPU overhead compared to PVST+ running an instance per VLAN.",
  },
  {
    id: 138,
    question:
      "Which port role exists in 802.1D STP but not as a distinct role name in 802.1w RSTP?",
    options: [
      "Root Port",
      "Designated Port",
      "Non-Designated (Blocking) Port",
      "Alternate Port",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In standard 802.1D, blocked ports are simply 'Non-Designated'. RSTP explicitly defines these blocking roles as either 'Alternate' or 'Backup' ports.",
  },
  {
    id: 139,
    question:
      "What is the default STP mode on modern Cisco Catalyst switches out-of-the-box?",
    options: ["MST", "PVST+", "Rapid-PVST+", "802.1D CST"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Historically and currently out-of-the-box, traditional Cisco Catalyst switches default to PVST+. However, many administrators immediately upgrade them to Rapid-PVST+.",
  },
  {
    id: 140,
    question:
      "In 802.1D, what triggers a Topology Change Notification (TCN) BPDU?",
    options: [
      "When a root bridge fails and a new root election must be performed.",
      "When any port transitions to the Forwarding or Disabled state.",
      "Only when a port enters the Blocking state and stops forwarding user data.",
      "When a BPDU is dropped due to a faulty cable or interface errors.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In standard 802.1D, a switch sends a TCN out its Root Port when it detects a topology change, specifically when a port transitions to the Forwarding state or when a forwarding port transitions to the Down/Disabled state.",
  },
  {
    id: 141,
    question:
      "How does the Root Bridge respond to receiving a TCN BPDU in 802.1D?",
    options: [
      "It ignores the TCN entirely and waits for the Max Age timer to expire before it recalculates the topology and flushes the stale MAC table entries.",
      "It sends a Configuration BPDU with the Topology Change Acknowledgment (TCA) bit set, followed by setting the Topology Change (TC) bit to flush MAC tables.",
      "It immediately changes the root election process by forcing a new comparison of all Bridge IDs to select a different Root Bridge.",
      "It shuts down the port that sent the TCN, blocking all user traffic on it and placing the interface into an err-disabled state.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Root Bridge acknowledges the TCN with a TCA bit, and then sets the TC (Topology Change) bit in its normal Configuration BPDUs. This instructs all switches to reduce their MAC table aging time to the Forward Delay (15 seconds) to quickly flush stale entries.",
  },
  {
    id: 142,
    question:
      "When configuring EtherChannel (Port-Channel), how does STP treat the bundled physical links?",
    options: [
      "It treats each physical link as a separate interface, blocking all but one.",
      "It disables STP on the physical links to allow all traffic.",
      "It treats the entire Port-Channel bundle as a single logical interface.",
      "It load-balances BPDUs across all physical links.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "STP views an EtherChannel bundle as a single logical interface. This prevents STP from blocking redundant physical links that are bundled together, allowing full utilization of bandwidth.",
  },
  {
    id: 143,
    question:
      "If a switch has two links to the Root Bridge with identical root path costs and identical sender BIDs, what is the final tie-breaker to elect the Root Port?",
    options: [
      "Lowest Sender Port ID",
      "Highest Sender Port ID",
      "Lowest Local Port ID",
      "Highest Local Port ID",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "If cost and sender BID tie (meaning two cables from the local switch connect to the exact same upstream switch), the tie is broken by the Lowest Sender Port ID (the port number on the upstream switch).",
  },
  {
    id: 144,
    question: "Which command configures a Cisco switch to use Rapid-PVST+?",
    options: [
      "spanning-tree mode rstp",
      "spanning-tree mode rapid-pvst",
      "spanning-tree rstp enable",
      "spanning-tree rapid-pvst",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The global configuration command is 'spanning-tree mode rapid-pvst'.",
  },
  {
    id: 145,
    question:
      "What is an RSTP Edge Port conceptually identical to in standard Cisco 802.1D terminology?",
    options: ["Root Port", "PortFast", "BPDU Guard", "Alternate Port"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An RSTP Edge Port is a port connected to an end device. It transitions to forwarding immediately, which is functionally identical to the Cisco proprietary PortFast feature.",
  },
  {
    id: 146,
    question:
      "You issue 'show spanning-tree' and see a port status of 'BKN'. What does this indicate?",
    options: [
      "The port is a Backup port providing redundancy on a shared segment with another switch.",
      "The port is in a Broken/Err-disabled state due to a violation like BPDU Guard.",
      "The port is currently Blocking loops by discarding all BPDUs and user data frames.",
      "The port is a Backbone port connecting two core switches in the network core layer.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "BKN stands for Broken. This typically happens when a port is err-disabled, often because a BPDU Guard enabled port received a BPDU or a Loop Guard violation occurred.",
  },
  {
    id: 147,
    question:
      "How often do non-root switches generate their own BPDUs in RSTP?",
    options: [
      "Never; only the Root Bridge generates BPDUs.",
      "Every 2 seconds, independently of the Root Bridge.",
      "Only when a topology change occurs.",
      "Every 20 seconds.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike 802.1D where non-root switches only relay BPDUs received from the Root, in RSTP (802.1w) every switch generates and sends its own BPDUs every 2 seconds to act as a keepalive mechanism.",
  },
  {
    id: 148,
    question:
      "In RSTP, how many consecutive BPDUs must a switch miss before it considers a neighbor lost?",
    options: ["2", "3", "5", "10"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In RSTP, if a switch misses 3 consecutive BPDUs (equivalent to 6 seconds with default timers), it assumes the connection to the neighbor is lost and immediately flushes MAC addresses for that port.",
  },
  {
    id: 149,
    question:
      "When you run the command 'spanning-tree vlan 10 root secondary', what priority does the switch typically assign itself?",
    options: ["0", "24576", "28672", "32768"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'root secondary' macro typically sets the bridge priority to 28672, which is one increment (4096) lower than the default 32768, assuming the current root is at default or lower.",
  },
  {
    id: 150,
    question:
      "Which STP feature allows a switch port to dynamically recover from an err-disable state after a specified time?",
    options: [
      "spanning-tree portfast auto",
      "errdisable recovery cause bpduguard",
      "spanning-tree bpduguard recovery",
      "errdisable autorecover",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "To allow an err-disabled port to come back up automatically, you use the 'errdisable recovery cause bpduguard' global command, usually accompanied by an 'errdisable recovery interval' command.",
  },
  {
    id: 151,
    question: "What does the 'Proposal/Agreement' handshake achieve in RSTP?",
    options: [
      "It establishes the EtherChannel protocol parameters and configures the port-channel load-balancing hash method.",
      "It allows point-to-point links to rapidly transition to the Forwarding state without relying on timers.",
      "It elects the Root Bridge securely without spoofing by using encrypted authentication of all BPDUs.",
      "It negotiates VLAN trunking protocols between switches to determine which VLANs are carried on the link.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "RSTP uses a sync mechanism (Proposal/Agreement handshake) on point-to-point links to instantly transition Designated and Root ports to Forwarding without waiting for the 30-second Listening/Learning delay.",
  },
  {
    id: 152,
    question:
      "Which multicast MAC address is used to send standard Spanning Tree Protocol BPDUs?",
    options: [
      "01:00:5E:00:00:01",
      "01:80:C2:00:00:00",
      "01:00:0C:CC:CC:CC",
      "01:00:5E:00:00:05",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Standard IEEE 802.1D/w/s BPDUs are sent to the multicast MAC address 01:80:C2:00:00:00. PVST+ uses the Cisco proprietary address 01:00:0C:CC:CC:CD for VLANs other than VLAN 1.",
  },
  {
    id: 153,
    question:
      "What is the minimum increment for Bridge Priority values in STP configurations?",
    options: ["1", "1024", "4096", "8192"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because the lowest 12 bits of the 16-bit priority field are used for the Extended System ID (VLAN number), the priority value must be configured in multiples of 4096 (e.g., 0, 4096, 8192, 12288, etc.).",
  },
  {
    id: 154,
    question:
      "If an RSTP switch receives an inferior BPDU on a Root Port, what does it do immediately?",
    options: [
      "It drops the BPDU and err-disables the port, treating it as a serious configuration violation.",
      "It accepts the inferior BPDU and recalculates the topology, adopting the worse path advertised by the neighbor.",
      "It ignores the BPDU entirely and continues forwarding data on the Root Port without any change.",
      "It immediately replies with its superior BPDU to correct the downstream switch.",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "In RSTP, if a switch receives an inferior BPDU (meaning the sender thinks it's the root or has a better path when it doesn't), it immediately fires back its superior BPDU to inform the sender of the correct topology.",
  },
  {
    id: 155,
    question:
      "You want to apply BPDU Guard to all access ports globally. Which command achieves this?",
    options: [
      "spanning-tree bpduguard default",
      "spanning-tree portfast bpduguard default",
      "spanning-tree portfast edge bpduguard",
      "bpduguard enable all",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The global command 'spanning-tree portfast bpduguard default' enables BPDU Guard on all ports that have PortFast enabled. It does not apply to non-PortFast ports.",
  },
  {
    id: 156,
    question:
      "Why does PVST+ send BPDUs to both the standard IEEE multicast MAC and the Cisco Shared Spanning Tree MAC on trunk ports?",
    options: [
      "To double the chances of packet delivery in case one of the multicast MAC addresses is filtered by the hardware.",
      "To interoperate with standard 802.1D switches on the native VLAN while maintaining per-VLAN trees for other VLANs.",
      "To trigger UDLD mechanisms so that unidirectional link failures are detected on the trunk link quickly.",
      "To load balance BPDUs across EtherChannels so each physical link carries an equal share of the traffic.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "PVST+ sends BPDUs for the native VLAN untagged to the IEEE standard MAC address (01:80:C2:00:00:00) so non-Cisco switches can participate. It sends BPDUs for other VLANs tagged to the Cisco proprietary MAC.",
  },
  {
    id: 157,
    question:
      "Which port state in RSTP replaces the 802.1D Blocking and Listening states?",
    options: ["Learning", "Disabled", "Discarding", "Forwarding"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Discarding state in RSTP drops data frames and does not learn MAC addresses, functionally replacing the Blocking, Listening, and Disabled states of standard 802.1D.",
  },
  {
    id: 158,
    question: "What is the function of the Spanning Tree Port ID?",
    options: [
      "It acts as the primary criteria for electing the Root Bridge across all switches in the spanning-tree domain.",
      "It is a tie-breaker for electing the Root Port when multiple links connect to the same upstream switch.",
      "It identifies the VLAN ID traversing the port so per-VLAN spanning-tree instances can be maintained correctly.",
      "It determines the port speed and duplex settings used for STP path cost and link type calculations.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Port ID (Priority + Port Number) is used as a final tie-breaker. If a switch has two links to the same upstream switch, the downstream switch chooses the Root Port based on the lowest Sender Port ID.",
  },
  {
    id: 159,
    question:
      "A switch has its Bridge Priority set to 4096 and is in VLAN 20. What will be its exact Bridge ID Priority value?",
    options: ["4096", "4116", "32788", "20"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The priority value is the configured priority plus the VLAN ID (Extended System ID). 4096 + 20 = 4116.",
  },
  {
    id: 160,
    question:
      "Which mechanism allows RSTP to bypass the Proposal/Agreement handshake and immediately begin forwarding on edge ports?",
    options: [
      "PortFast / Edge Port configuration",
      "BPDU Filter (dropping all BPDUs on the port)",
      "Loop Guard (preventing BPDU-loss loops)",
      "Root Guard (protecting the root election)",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Configuring a port as a PortFast or RSTP Edge Port tells the switch it is connected to a host, not another switch. Therefore, it bypasses the sync process and immediately enters the Forwarding state.",
  },
  {
    id: 161,
    question:
      "In Multiple Spanning Tree Protocol (MSTP), which three parameters must match for switches to be considered in the same MST Region?",
    options: [
      "Region Name, Revision Number, and VTP Domain",
      "Region Name, Revision Number, and VLAN-to-Instance mapping",
      "VLAN-to-Instance mapping, Hello Timer, and Max Age",
      "Region Name, Bridge Priority, and Revision Number",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "For switches to participate in the same MST region, they must have the exact same Region Name, Configuration Revision Number, and internal VLAN-to-Instance mapping table.",
  },
  {
    id: 162,
    question: "What is MST Instance 0 (MSTI 0) known as?",
    options: [
      "The External Spanning Tree (EST)",
      "The Common Spanning Tree (CST)",
      "The Internal Spanning Tree (IST)",
      "The Primary VLAN Tree (PVT)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "MSTI 0 is the Internal Spanning Tree (IST). It runs on all ports in the MST region and is responsible for building the topology within the region and communicating with other regions or STP protocols.",
  },
  {
    id: 163,
    question:
      "Which BPDU version is used by 802.1w Rapid Spanning Tree Protocol?",
    options: ["Version 0", "Version 1", "Version 2", "Version 3"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Standard 802.1D uses Version 0 BPDUs. 802.1w (RSTP) uses Version 2 BPDUs, and 802.1s (MSTP) uses Version 3 BPDUs.",
  },
  {
    id: 164,
    question:
      "In a standard STP topology, what is the recommended maximum network diameter (number of switches end-to-end) when using default timers?",
    options: ["5", "7", "15", "20"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The default STP timers (Hello 2s, Forward Delay 15s, Max Age 20s) are mathematically tuned for a maximum network diameter of 7 switches. Exceeding this can cause convergence issues.",
  },
  {
    id: 165,
    question:
      "How does changing the 'spanning-tree vlan X root primary' macro alter the STP timers?",
    options: [
      "It automatically decreases the hello timer to 1 second and doubles the forward delay accordingly.",
      "It binds the timers to the VTP synchronization process so they update across the whole domain.",
      "It does not alter the timers, only the bridge priority, leaving hello and max age untouched.",
      "It can optionally adjust the timers if the 'diameter' keyword is appended.",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "While 'root primary' lowers the priority, appending the 'diameter [number]' keyword to the command dynamically calculates and adjusts the Hello, Max Age, and Forward Delay timers to optimize for that specific network diameter.",
  },
  {
    id: 166,
    question:
      "When applying BPDU Filter at the interface configuration level using 'spanning-tree bpdufilter enable', what is the resulting behavior?",
    options: [
      "The port stops sending BPDUs but listens for them. If one is received, it participates in STP.",
      "The port unconditionally stops sending and receiving BPDUs, effectively disabling STP on that port.",
      "The port err-disables if it receives a BPDU.",
      "The port converts into a Root Port automatically.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike global BPDU Filter, configuring it directly on the interface unconditionally filters all BPDUs in both directions. This is highly dangerous as it can easily cause permanent bridging loops if connected to another switch.",
  },
  {
    id: 167,
    question:
      "Where is the best architectural placement for the STP Root Guard feature?",
    options: [
      "On all Access Layer switch ports facing end-user devices.",
      "On the Root Bridge's designated ports facing downstream switches.",
      "On Core Layer links connecting to the WAN router.",
      "On all ports configured with PortFast.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Root Guard should be placed on downstream-facing ports (typically on Core or Distribution switches) to prevent a misconfigured or rogue switch deeper in the network from stealing the Root Bridge role.",
  },
  {
    id: 168,
    question:
      "Which state does a port enter when Root Guard receives a superior BPDU?",
    options: [
      "Err-disabled",
      "Root-inconsistent",
      "Loop-inconsistent",
      "Discarding",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The port is placed into a 'root-inconsistent' state, which blocks traffic. Once the superior BPDUs cease, the port automatically recovers and transitions back through normal STP states.",
  },
  {
    id: 169,
    question:
      "Which state does a port enter when Loop Guard detects a sudden loss of BPDUs on a blocking port?",
    options: [
      "Err-disabled",
      "Root-inconsistent",
      "Loop-inconsistent",
      "Forwarding",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Loop Guard puts the port in a 'loop-inconsistent' state (which is a blocking state) to prevent it from erroneously transitioning to Forwarding and causing a loop due to a unidirectional link failure.",
  },
  {
    id: 170,
    question:
      "How does Unidirectional Link Detection (UDLD) fundamentally differ from Loop Guard?",
    options: [
      "UDLD operates at Layer 3 using IP addresses, while Loop Guard operates at Layer 2 using MAC addresses.",
      "UDLD uses STP BPDUs to detect failures, while Loop Guard uses proprietary Cisco frames for the same purpose.",
      "UDLD relies on echoing dedicated Layer 2 UDLD frames to verify bi-directional health, independent of STP.",
      "UDLD only works on copper links, while Loop Guard only works on fiber-optic media types available.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Loop Guard relies on the continued receipt of STP BPDUs. UDLD is a separate Layer 2 protocol that actively sends and expects echoed UDLD packets to verify physical bi-directional connectivity, often catching physical layer fiber faults faster than STP.",
  },
  {
    id: 171,
    question:
      "What is the behavior of UDLD in 'Aggressive Mode' when it stops receiving UDLD packets from a neighbor?",
    options: [
      "It instantly err-disables the port on the very first missed packet from the neighboring device.",
      "It sends 8 UDLD messages at 1-second intervals; if unacknowledged, it err-disables the port.",
      "It generates a syslog message but leaves the port operational and continues forwarding user traffic.",
      "It forces the switch to renegotiate speed and duplex with the neighbor before trying again.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In Aggressive Mode, if a neighbor stops responding, UDLD tries to re-establish the connection by sending 8 packets (one per second). If all 8 fail, the port is forced into the err-disable state.",
  },
  {
    id: 172,
    question:
      "You need to connect a VMware ESXi host running multiple virtual machines to a switch using a 802.1Q trunk. You want the port to transition to Forwarding immediately. Which command accomplishes this safely?",
    options: [
      "spanning-tree portfast",
      "spanning-tree portfast edge",
      "spanning-tree portfast trunk",
      "spanning-tree portfast bypass",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'spanning-tree portfast trunk' applies PortFast to a trunk port. Standard 'spanning-tree portfast' will be ignored if the port is administratively set to trunk mode, unless specifically forced.",
  },
  {
    id: 173,
    question:
      "What does the command 'show spanning-tree summary' uniquely display?",
    options: [
      "The MAC address of the Root Bridge for every VLAN along with the local port cost, designated bridge, and the forward-delay timers in use.",
      "The real-time BPDU packet count received per interface, plus the total number of topology change notifications processed.",
      "A count of ports in blocking, listening, learning, and forwarding states per VLAN, plus the status of global features like PortFast and BPDU Guard.",
      "The physical topology map of connected switches, showing exactly how every switch, port, and trunk is interconnected across the LAN.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The summary command gives a high-level overview of global STP settings (PortFast default, BPDU Guard default, etc.) and an aggregate table of port states across all active VLANs.",
  },
  {
    id: 174,
    question:
      "What is the default STP Port Priority value on a Cisco Catalyst switch?",
    options: ["0", "64", "128", "255"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default Port Priority is 128. The Port ID is a 16-bit value made up of the 8-bit priority (default 128) and the 8-bit port number.",
  },
  {
    id: 175,
    question:
      "When configuring STP Port Priority to influence Root Port selection, in what increments must the value be set?",
    options: ["1", "8", "16", "32"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because only the higher bits of the priority field are utilized for the configurable priority, the value must be configured in increments of 16 (e.g., 0, 16, 32, 48... 128... 240).",
  },
  {
    id: 176,
    question:
      "In Rapid-PVST+, how does a switch handle receiving standard 802.1D BPDUs on a port?",
    options: [
      "It err-disables the port due to the protocol mismatch detected in the received BPDUs.",
      "It ignores them entirely and continues to run Rapid-PVST+ without any kind of adjustment.",
      "It falls back to standard 802.1D STP operations on that specific port only.",
      "It converts the entire switch down to 802.1D mode, affecting every single port on the device.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "RSTP/Rapid-PVST+ is backward compatible. If it receives standard 802.1D BPDUs from a legacy switch on a specific interface, it will revert to standard 802.1D timers and states (Listening, Learning) for that port only.",
  },
  {
    id: 177,
    question:
      "Which of the following events triggers a Topology Change (TC) in RSTP (802.1w)?",
    options: [
      "Any port transitioning to a Blocking state.",
      "A non-edge port transitioning to the Forwarding state.",
      "A PortFast edge port transitioning to the Forwarding state.",
      "The refresh of a Max Age timer.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In RSTP, only non-edge ports moving to the Forwarding state cause a Topology Change. A port going down (or to discarding) does not generate a TC, unlike in legacy 802.1D.",
  },
  {
    id: 178,
    question:
      "How does MAC address table flushing differ in RSTP compared to 802.1D when a Topology Change occurs?",
    options: [
      "RSTP flushes MAC addresses across the entire network simultaneously using broadcast frames that are sent out to every switch participating in the spanning-tree topology.",
      "RSTP switches flush their own MAC tables for all non-edge ports (except the one that received the TC) immediately, rather than waiting for short aging timers.",
      "RSTP does not flush MAC tables at all during a topology change; instead it relies entirely on ARP inspection to relearn the correct addresses and paths.",
      "RSTP flushes only the MAC addresses that are associated with the Root Bridge itself, leaving all other learned addresses completely untouched and intact in the table.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In RSTP, the flush is active and instantaneous. When a switch receives a TC, it flushes MAC entries for all ports except the port that received the TC and edge ports, drastically speeding up convergence.",
  },
  {
    id: 179,
    question:
      "You want to bundle four 1 Gbps links into an EtherChannel. How does this affect the STP cost of the resulting logical interface using the standard (short) cost method?",
    options: [
      "The cost remains 4, as STP only calculates the speed of the primary physical link in the bundle and ignores the additional bandwidth entirely.",
      "The cost increases to 16, reflecting the added risk and complexity of running redundant physical links within a single bundle.",
      "The cost decreases based on the aggregated bandwidth (often yielding a cost of 3 or 1 depending on specific IOS implementations).",
      "EtherChannel disables STP cost calculations entirely, so the resulting logical interface always retains a fixed and unchanging default cost value.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "STP recognizes the EtherChannel as a single logical link with higher bandwidth. Therefore, the STP cost decreases. (Note: standard short cost for 1Gbps is 4; a 4Gbps bundle often drops the cost to 3 or lower depending on the exact platform).",
  },
  {
    id: 180,
    question:
      "What is the purpose of the 'EtherChannel Misconfiguration Guard' feature?",
    options: [
      "To prevent Layer 3 routing loops from occurring over Port-Channel interfaces, since a misconfiguration there can cause persistent routing loops.",
      "To detect if one side of a link is bundled into an EtherChannel while the other side is not, which can cause STP loops, and err-disable the ports.",
      "To ensure that the standardized LACP protocol is always used instead of the older, proprietary Cisco PAgP negotiation protocol on the entire bundle.",
      "To load balance BPDUs evenly across all of the physical links in the bundle so that no single physical link ever becomes overwhelmed with the BPDU traffic.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If one switch bundles ports (e.g., mode on) but the other doesn't, BPDUs might be dropped or misdirected, causing STP to put ports into forwarding that should be blocked. The misconfig guard detects this via STP BPDUs and err-disables the interfaces.",
  },
  {
    id: 181,
    question:
      "In PVST+, a switch is participating in VLAN 1. Which MAC address will it use as the source MAC for the BPDUs it transmits on that VLAN?",
    options: [
      "01:80:C2:00:00:00",
      "01:00:0C:CC:CC:CC",
      "The base MAC address of the switch itself.",
      "The MAC address of the Root Bridge.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The *source* MAC address of the BPDU frame is the Base MAC Address of the transmitting switch. The *destination* MAC is the multicast BPDU address.",
  },
  {
    id: 182,
    question:
      "What is the maximum number of MST Instances (MSTIs) supported by the IEEE 802.1s standard (excluding Instance 0)?",
    options: ["15", "63", "64", "4094"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The standard supports up to 64 instances total (Instance 0 plus 1 through 63). Cisco switches typically support MSTI 0 to 64.",
  },
  {
    id: 183,
    question:
      "A switch receives a BPDU with the 'Topology Change Acknowledgment' (TCA) bit set. Which protocol is generating this BPDU?",
    options: [
      "RSTP (802.1w)",
      "MSTP (802.1s)",
      "Legacy STP (802.1D)",
      "VTP (VLAN Trunking Protocol)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The TCA (Topology Change Acknowledgment) bit is used in legacy 802.1D by the Root Bridge to tell a downstream switch to stop sending TCNs. RSTP does not use TCN or TCA BPDUs; it only uses the TC bit in standard BPDUs.",
  },
  {
    id: 184,
    question:
      "Which STP feature ensures that a switch does not accidentally become a transit path for traffic if it lacks the necessary processing power to handle the root bridge role?",
    options: [
      "Enabling BPDU Guard on the interfaces",
      "Setting a high Bridge Priority (e.g., 61440)",
      "Enabling Root Guard on the uplinks",
      "Enabling Loop Guard on the ports",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By administratively configuring a very high Bridge Priority (like 61440), you ensure the switch will lose the Root Bridge election and is unlikely to become a central transit point for the spanning tree.",
  },
  {
    id: 185,
    question:
      "You want to verify which ports are forwarding for VLAN 50. Which command provides the most direct, filtered output for this?",
    options: [
      "show spanning-tree summary",
      "show spanning-tree vlan 50",
      "show spanning-tree active",
      "show interfaces trunk",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show spanning-tree vlan 50' outputs the root bridge information, local bridge information, and the role, state, and cost of all interfaces participating in VLAN 50.",
  },
  {
    id: 186,
    question: "In standard 802.1D, what is the 'Forward Delay' timer used for?",
    options: [
      "The time between sending Hello BPDUs on the root port toward the neighboring switches.",
      "The time a BPDU can exist in the network before being discarded by the receiving switches.",
      "The duration of the Listening state and the duration of the Learning state individually.",
      "The time it takes for an err-disabled port to recover automatically after the timer expires.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Forward Delay (default 15 seconds) determines how long a port stays in the Listening state, and then again how long it stays in the Learning state, totaling 30 seconds before forwarding.",
  },
  {
    id: 187,
    question:
      "If the current Root Bridge for VLAN 10 has a priority of 24576, what priority does a Cisco switch assign itself if you configure 'spanning-tree vlan 10 root primary'?",
    options: ["24576", "20480", "4096", "0"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The macro checks the current root's priority. If the root is not at the default (32768), the macro subtracts 4096 from the current root's priority to ensure the local switch wins. 24576 - 4096 = 20480.",
  },
  {
    id: 188,
    question:
      "Under which condition will the 'spanning-tree vlan X root primary' macro fail to make the switch the root?",
    options: [
      "If the current root bridge has a priority of 0 and a lower MAC address.",
      "If PortFast is enabled on the switch and overrides the priority value.",
      "If VTP is in client mode, so the switch cannot modify its configuration.",
      "If the switch is running RSTP instead of the older PVST+ spanning-tree mode.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "If another switch already has a priority of 0 (the lowest possible), the local switch can only match that priority of 0. The tie is then broken by the lowest MAC address. If the other switch has a lower MAC, the local switch will fail to become root.",
  },
  {
    id: 189,
    question:
      "How does STP behave on an interface configured as a Layer 3 routed port (using 'no switchport')?",
    options: [
      "It continues to send BPDUs but ignores received ones, breaking the spanning-tree loop prevention.",
      "STP is completely disabled on routed ports; no BPDUs are sent or processed.",
      "It automatically runs RSTP regardless of the global spanning-tree mode configured on the switch.",
      "It acts as a Root Guard, blocking any switch that tries to become the Root Bridge.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Spanning Tree Protocol only operates on Layer 2 switchports (access or trunk). When a port is converted to a Layer 3 routed port, it no longer participates in STP.",
  },
  {
    id: 190,
    question:
      "You observe an interface transitioning through 'Discarding' -> 'Learning' -> 'Forwarding' in under 3 seconds. What is the most likely reason?",
    options: [
      "The switch is running standard 802.1D with default forward-delay and max-age timers.",
      "The port is configured with PortFast, skipping all the standard state transitions.",
      "The link is full-duplex and running RSTP, utilizing the Proposal/Agreement sync process.",
      "BPDU Filter is enabled, which removes the port from spanning-tree processing.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "RSTP on full-duplex (point-to-point) links uses a handshake (Proposal/Agreement) to instantly transition Designated and Root ports to Forwarding, bypassing timer-based delays.",
  },
  {
    id: 191,
    question: "What is an RSTP 'Dispute' mechanism?",
    options: [
      "A syslog message that is generated on the switch console whenever a bridging loop is detected somewhere in the network topology by the spanning-tree protocol process itself.",
      "A mechanism where a Designated Port receives an inferior BPDU with the Designated bit set, indicating a unidirectional link problem, and moves to Discarding.",
      "A VTP conflict between switches that prevents VLAN information from being correctly propagated and synchronized across the entire management domain of the switched network.",
      "The election tie-breaker based on the lowest MAC address, which is used when the bridge priorities of two switches are exactly equal during the root election process.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In RSTP, if a switch sends superior BPDUs out a Designated Port but receives an inferior BPDU back that claims to also be a Designated Port, it implies a unidirectional link fault. The switch resolves this 'dispute' by forcing its port into the Discarding state to prevent loops.",
  },
  {
    id: 192,
    question:
      "Which command shows exactly how many Topology Changes have occurred on a specific VLAN?",
    options: [
      "show spanning-tree detail",
      "show spanning-tree vlan X detail",
      "show mac address-table count",
      "show interfaces status",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'show spanning-tree vlan X detail' command outputs specific counters for the VLAN, including the 'Number of topology changes' and the time since the last change.",
  },
  {
    id: 193,
    question:
      "By default, what triggers the 'errdisable auto-recovery' mechanism to re-enable a port shut down by BPDU Guard?",
    options: [
      "The receipt of a new BPDU.",
      "The expiration of the recovery timer, defaulting to 300 seconds (if enabled globally).",
      "A physical unplug and replug of the cable.",
      "It cannot recover automatically; manual 'shut' and 'no shut' is required.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If 'errdisable recovery cause bpduguard' is configured, the switch will automatically attempt to bring the port out of the err-disabled state after the configured timer expires (default is 300 seconds).",
  },
  {
    id: 194,
    question:
      "What is the primary difference in how MSTP (802.1s) and PVST+ handle BPDU transmission?",
    options: [
      "MSTP sends one BPDU per VLAN, while PVST+ sends one BPDU for the entire network as a single shared spanning-tree instance for all traffic.",
      "MSTP sends a single BPDU per region that carries information for all instances, whereas PVST+ sends a separate BPDU for every single VLAN.",
      "MSTP does not use BPDUs at all, instead relying on a separate out-of-band control channel that is established between the connected switches.",
      "PVST+ encrypts BPDUs using the switch's configured crypto keys so that attackers cannot read the spanning-tree topology information.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "MSTP is highly efficient because it encapsulates the state of multiple spanning tree instances (M-Records) inside a single BPDU per physical link, unlike PVST+ which generates a unique BPDU for every active VLAN on a trunk.",
  },
  {
    id: 195,
    question:
      "If Switch A has a bridge priority of 32768, Switch B is 32768, and Switch C is 32768, what determines the root bridge?",
    options: [
      "Highest IP address",
      "Lowest IP address",
      "Highest Base MAC Address",
      "Lowest Base MAC Address",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "When bridge priorities are tied, the switch with the lowest base MAC address becomes the Root Bridge.",
  },
  {
    id: 196,
    question:
      "Which global configuration command enables the 32-bit (long) path cost calculation method to accommodate 10Gbps, 40Gbps, and 100Gbps links accurately?",
    options: [
      "spanning-tree cost long",
      "spanning-tree pathcost method long",
      "spanning-tree mode long-cost",
      "spanning-tree bandwidth extend",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The command 'spanning-tree pathcost method long' changes the calculation from the 16-bit short method to the 32-bit long method, providing granular costs for modern high-speed links (e.g., 10Gbps = 2,000 instead of 2).",
  },
  {
    id: 197,
    question:
      "In a topology with 3 switches forming a triangle loop, Switch A is Root. Switch B and Switch C connect to Switch A and to each other. On the link between B and C, which port becomes the Designated Port?",
    options: [
      "The port on the switch with the highest MAC address becomes the Designated Port on the segment.",
      "The port on the switch with the lowest Root Path Cost. If tied, the lowest Sender Bridge ID.",
      "The port on the switch with the highest Root Path Cost, which is farthest from the Root Bridge.",
      "Both ports become designated, allowing the link to be used for forwarding traffic in both directions.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To elect a Designated Port on a segment, switches compare their Root Path Cost. The switch with the lowest cost to the Root claims the Designated role. If their costs are identical, the switch with the lowest Bridge ID wins the role.",
  },
  {
    id: 198,
    question:
      "Which Cisco IOS command reveals which switch is currently the Root Bridge for a specific VLAN?",
    options: [
      "show spanning-tree vlan X",
      "show cdp neighbors detail",
      "show mac address-table",
      "show vlan brief",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'show spanning-tree vlan X' command has a 'Root ID' section that explicitly lists the priority and MAC address of the current root bridge for that VLAN, and tells you which local port leads to it.",
  },
  {
    id: 199,
    question:
      "What does it mean if the 'show spanning-tree' output says 'This bridge is the root'?",
    options: [
      "The local switch has won the root election for this instance.",
      "The switch is operating in MST mode.",
      "The switch has been isolated from the network.",
      "The root bridge election is currently in progress.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "This clear indicator in the output confirms that the switch you are currently logged into holds the active Root Bridge role for that specific spanning-tree instance.",
  },
  {
    id: 200,
    question:
      "What is the primary risk of disabling Spanning Tree Protocol globally on a switch in a redundant network?",
    options: [
      "VLANs will fail to route between subnets, breaking all inter-VLAN communication.",
      "Broadcast storms and MAC database instability will instantly crash the network.",
      "Port channels will fail to bundle their physical links into a single logical interface.",
      "DHCP will hand out duplicate IP addresses to hosts on different VLANs in the network.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Without STP to block redundant Layer 2 paths, broadcast frames (like ARP) will loop endlessly, multiplying infinitely (a broadcast storm), maxing out CPU/bandwidth, and causing constant MAC address flapping until the switches crash.",
  },
  {
    id: 201,
    question:
      "Which bit inside an 802.1w BPDU flags that the transmitting switch wants to quickly synchronize and transition to forwarding?",
    options: [
      "Topology Change (TC) bit",
      "Topology Change Acknowledgment (TCA) bit",
      "Proposal bit",
      "Learning bit",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "RSTP uses the Proposal and Agreement bits within the BPDU flags byte to execute the rapid synchronization handshake on point-to-point links.",
  },
  {
    id: 202,
    question:
      "How does the 'spanning-tree vlan X priority' command differ from 'spanning-tree vlan X root primary'?",
    options: [
      "It requires a reboot to take effect, since the priority is stored in the switch's hardware registers.",
      "It allows you to manually specify the exact priority value, rather than relying on an automated script.",
      "It only applies to RSTP, not PVST+, and is silently ignored in the older 802.1D spanning-tree mode.",
      "It sets the priority value based on the switch's MAC address, overriding any manually configured value.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'priority' command lets you set the specific priority (e.g., 4096, 8192), giving you strict, permanent control. The 'root primary' macro just runs a one-time calculation to lower the priority based on the current root at that moment.",
  },
  {
    id: 203,
    question:
      "When a switch port is placed in err-disable state due to BPDU Guard, what happens to the LED status indicator on a physical Cisco switch?",
    options: [
      "It flashes green rapidly.",
      "It turns solid amber.",
      "It alternates between green and amber.",
      "It turns off completely.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "On most Catalyst switches, a port in the err-disabled state is visually indicated by a solid amber port LED, signaling a fault condition requiring attention.",
  },
  {
    id: 204,
    question:
      "In PVST+, if an access port is assigned to VLAN 20, which spanning-tree instance BPDUs will be sent out of that port?",
    options: [
      "Instance 0 only",
      "VLAN 1 BPDUs only",
      "VLAN 20 BPDUs only",
      "BPDUs for all active VLANs on the switch",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An access port only belongs to a single VLAN. Therefore, PVST+ will only transmit and process BPDUs belonging to the spanning-tree instance for that specific VLAN (VLAN 20) on that port.",
  },
  {
    id: 205,
    question:
      "You have two links between Switch A and Switch B. Link 1 is Fa0/1, Link 2 is Fa0/2. All costs and bridge IDs are tied. Switch B needs to select a Root Port. Which factor breaks the tie?",
    options: [
      "Switch B's Lowest Local Port ID.",
      "Switch A's Lowest Sender Port ID.",
      "The link that came up first chronologically.",
      "The link with the lowest MAC address.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The final tie-breaker is the Lowest Sender Port ID. Switch B will look at the port IDs advertised in the BPDUs *from* Switch A. If Switch A sends from its Fa0/1 (lower ID) and Fa0/2, Switch B will choose the connection tied to Switch A's Fa0/1 as the Root Port.",
  },
  {
    id: 206,
    question:
      "Which protocol can seamlessly block redundant links at Layer 2 without relying on Spanning Tree BPDUs, by grouping switches into a single logical entity?",
    options: [
      "VLAN Trunking Protocol (VTP)",
      "StackWise / Virtual Switching System (VSS) / vPC",
      "Routing Information Protocol (RIP)",
      "Link Aggregation Control Protocol (LACP) used alone",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Technologies like Switch Stacking, VSS, or Nexus vPC allow multiple physical switches to act as a single logical switch. When combined with EtherChannel, redundant physical links appear as a single logical link, effectively eliminating loops without STP blocking ports.",
  },
  {
    id: 207,
    question:
      "What is the primary function of the 'Extended System ID' in the Bridge ID field?",
    options: [
      "To allow the switch to support IPv6 addressing and routing on the management interface.",
      "To identify the manufacturer of the switch using the organizationally unique identifier (OUI).",
      "To borrow 12 bits from the original priority field to carry the VLAN ID, enabling PVST+.",
      "To increase the security of the Root Bridge election by requiring authentication of all BPDUs.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The original 802.1D standard used a 16-bit priority. To support Per-VLAN Spanning Tree without altering the frame size, IEEE 802.1t split the 16 bits into a 4-bit priority and a 12-bit Extended System ID containing the VLAN number (0-4095).",
  },
  {
    id: 208,
    question:
      "If an RSTP switch port is acting as an Alternate Port, what is its primary function?",
    options: [
      "It forwards traffic for a secondary VLAN while the Root Port simultaneously handles the primary VLAN traffic on the same link.",
      "It receives BPDUs from another switch and provides a backup path to the Root Bridge if the current Root Port fails.",
      "It balances traffic with the Root Port by load-sharing across the two available paths toward the Root Bridge.",
      "It acts as a backup for a Designated Port on the same switch that is connected to the same shared segment as it is.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An Alternate Port provides an alternative (backup) path toward the Root Bridge. It remains in the Discarding state until the current Root Port goes down, at which point it can transition rapidly to become the new Root Port.",
  },
  {
    id: 209,
    question:
      "A switch has the global configuration 'spanning-tree portfast bpduguard default'. Which ports will this feature actively protect?",
    options: [
      "All ports on the switch.",
      "Only ports explicitly configured as trunks.",
      "Only ports operating in the PortFast state.",
      "Only ports connected to other switches.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The keyword 'default' ties BPDU Guard to the PortFast feature. It will only monitor and err-disable ports that are currently operational as PortFast edge ports.",
  },
  {
    id: 210,
    question:
      "Which troubleshooting command displays real-time debugging of STP topology changes, port transitions, and events on a Cisco IOS device?",
    options: [
      "debug spanning-tree events",
      "show spanning-tree debug",
      "test spanning-tree topology",
      "monitor session 1 spanning-tree",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'debug spanning-tree events' outputs console messages in real-time whenever ports change states, TCNs are generated, or root elections occur, making it critical for live troubleshooting.",
  },
];
