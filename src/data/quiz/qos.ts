import type { QuizQuestion } from "./types";

export const qosQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "What is the primary goal of Quality of Service (QoS) in a network?",
    options: [
      "To increase the total amount of bandwidth available equally to all network traffic",
      "To manage packet loss, delay, and jitter by prioritizing certain types of traffic",
      "To encrypt all data traffic passing through the network for added security",
      "To reduce the number of routing hops traveled between the source and destination devices",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "QoS manages network resources by classifying and prioritizing traffic types (e.g., voice, video) to ensure performance requirements for delay-sensitive and loss-sensitive applications.",
  },
  {
    id: 2,
    question:
      "Which network performance metric refers to the variation in the arrival time of data packets?",
    options: ["Latency", "Jitter", "Bandwidth", "Throughput"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Jitter is the variance in packet delay over time. High jitter is particularly disruptive to real-time applications like voice and video.",
  },
  {
    id: 3,
    question:
      "What is the maximum recommended one-way delay (latency) for acceptable voice quality over an enterprise network?",
    options: ["50 ms", "150 ms", "300 ms", "500 ms"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco and ITU-T guidelines recommend keeping one-way end-to-end delay at or below 150 ms to preserve natural interactive voice communication.",
  },
  {
    id: 4,
    question:
      "Which QoS model relies on the Resource Reservation Protocol (RSVP) to secure explicit path resources before sending data?",
    options: [
      "Best-Effort",
      "Differentiated Services (DiffServ)",
      "Integrated Services (IntServ)",
      "Low Latency Queuing (LLQ)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Integrated Services (IntServ) model uses a stateful, hard-reservation approach where RSVP requests resource allocations from every router along the path.",
  },
  {
    id: 5,
    question:
      "How many bits are used for the Differentiated Services Code Point (DSCP) field in the IPv4 Type of Service (ToS) byte?",
    options: ["3 bits", "4 bits", "6 bits", "8 bits"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The DiffServ model repurposes the 8-bit ToS byte, allocating the first 6 bits for the DSCP value and leaving the remaining 2 bits for Explicit Congestion Notification (ECN).",
  },
  {
    id: 6,
    question:
      "Where is the Class of Service (CoS) marking field physically located?",
    options: [
      "In the Type of Service (ToS) byte of the IPv4 packet header field",
      "In the Traffic Class field located inside the IPv6 packet header",
      "In the 3-bit Priority Code Point (PCP) field within an IEEE 802.1Q VLAN tag",
      "In the flag bits that are located inside the Layer 4 TCP packet header",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "CoS is a Layer 2 QoS marking tool located inside the 802.1Q Ethernet frame header extension tag.",
  },
  {
    id: 7,
    question:
      "What is the decimal DSCP value corresponding to the Expedited Forwarding (EF) phb, typically assigned to voice payloads?",
    options: ["10", "24", "34", "46"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Expedited Forwarding (EF) has a binary value of 101110, which translates to decimal 46. It specifies strict priority queuing.",
  },
  {
    id: 8,
    question:
      "What primary action separates traffic policing from traffic shaping when packet rates exceed a configured limit?",
    options: [
      "Policing marks the out-of-profile traffic, while shaping encrypts all of the excess traffic instead",
      "Policing buffers the excess packets in memory queues, while shaping immediately drops them out instead",
      "Policing immediately drops or remarks traffic, while shaping buffers excess packets to smooth out bursts.",
      "Shaping works only at Layer 2 of the stack, while policing works strictly at Layer 3 boundaries",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Traffic shaping retains excess packets in a software buffer queue to maintain a steady line rate, whereas a traffic policing mechanism applies immediate drops or penalty remarking.",
  },
  {
    id: 9,
    question:
      "Which queuing architecture integrates Class-Based Weighted Fair Queuing (CBWFQ) with a strict priority mechanism for latency-sensitive applications?",
    options: [
      "First-In, First-Out (FIFO)",
      "Priority Queuing (PQ)",
      "Weighted Fair Queuing (WFQ)",
      "Low Latency Queuing (LLQ)",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Low Latency Queuing (LLQ) extends CBWFQ capabilities by designating a strict priority queue to isolate and send sensitive VoIP traffic ahead of other classes.",
  },
  {
    id: 10,
    question:
      "What phenomenon occurs when a router's queue buffer fills completely, forcing all subsequent incoming packets to be dropped indiscriminately?",
    options: [
      "Jittering",
      "Tail Drop",
      "Random Early Detection",
      "Global Synchronization",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Tail drop occurs when a queue interface buffer is full, causing all new incoming frames to be dropped regardless of priority until buffer space opens up.",
  },
  {
    id: 11,
    question:
      "What is the major structural problem associated with Tail Drop when handling multiple concurrent TCP connection streams?",
    options: [
      "Packet inversion",
      "TCP Global Synchronization",
      "Sliding window lock",
      "VLAN tag bleeding",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Tail drop can cause multiple TCP streams to drop packets simultaneously. This leads to all hosts shrinking their window sizes at the exact same time, producing a cyclical wave of network underutilization known as TCP Global Synchronization.",
  },
  {
    id: 12,
    question:
      "Which congestion avoidance technology drops random packets from specific TCP streams before the interface buffer fills completely to prevent global synchronization?",
    options: [
      "FIFO",
      "Strict Priority Queuing",
      "Weighted Random Early Detection (WRED)",
      "Traffic Shaping",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "WRED systematically discards non-essential packets as the average queue depth increases, prompting specific TCP senders to slow down before a full tail drop occurs.",
  },
  {
    id: 13,
    question:
      "How many bits are available for traffic classification within the legacy IP Precedence field?",
    options: ["3 bits", "4 bits", "6 bits", "8 bits"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Legacy IP Precedence uses the first 3 bits of the ToS byte, yielding 8 distinct priority classes (0 through 7).",
  },
  {
    id: 14,
    question:
      "What is the maximum percentage of target packet loss recommended to maintain baseline operational voice quality?",
    options: ["Less than 1%", "Between 3% and 5%", "Exactly 10%", "Up to 15%"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "VoIP streams require tight delivery reliability; losing more than 1% of payload packets causes audible dropouts and artifacts.",
  },
  {
    id: 15,
    question:
      "Which mathematical formula defines the interaction between the Committed Information Rate (CIR), Committed Burst (Bc), and Time Interval (Tc)?",
    options: [
      "CIR = Bc * Tc",
      "CIR = Bc / Tc",
      "Tc = CIR / Bc",
      "Bc = Tc / CIR",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The target traffic shaping operational rate is governed by CIR = Bc / Tc, meaning the rate equals bits sent per burst split over the processing interval.",
  },
  {
    id: 16,
    question:
      "What does the term 'Trust Boundary' refer to in enterprise QoS deployments?",
    options: [
      "The perimeter firewall interface that inspects the network traffic and blocks all unauthorized internet connections",
      "The exact point in the network topology where device data fields are analyzed and classifications are accepted or overwritten",
      "The RADIUS server authorization group that is used to manage network access privileges for all authenticated users",
      "The physical boundary of the data center cage that separates the network equipment from the rest of the office facility",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The trust boundary defines where incoming packet markings (like those from a PC or IP Phone) are either trusted or reset to zero by an administrative device like an access switch.",
  },
  {
    id: 17,
    question:
      "What are the three core categories of DSCP Assured Forwarding (AF) behavior types defined within each class group?",
    options: [
      "Low, Medium, and High drop preferences",
      "Best, Intermediate, and Worst path selections",
      "Gold, Silver, and Bronze bandwidth targets",
      "Expedited, Controlled, and Guaranteed latency levels",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Each Assured Forwarding class has three drop precedence tiers. For example, AF11 has low drop preference, AF12 medium, and AF13 high drop preference.",
  },
  {
    id: 18,
    question:
      "What is the binary value of the Assured Forwarding class identifier 'AF41'?",
    options: ["100010", "100100", "111000", "011010"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "AF values are calculated using the formula 8x + 2y where x is class (4) and y is drop drop preference (1). Binary representation of AF41 is 100010 (decimal 34).",
  },
  {
    id: 19,
    question:
      "In Cisco Modular Quality of Service Command-Line Interface (MQC), what configuration block maps traffic criteria to a class name?",
    options: ["policy-map", "class-map", "service-policy", "traffic-desc"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The `class-map` command is used in MQC to isolate and group traffic based on criteria like ACL numbers, protocol names, or interface scopes.",
  },
  {
    id: 20,
    question:
      "In MQC, which configuration component binds configured actions (like bandwidth or priority limits) to defined traffic groups?",
    options: ["class-map", "access-list", "policy-map", "service-policy"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "`policy-map` defines what QoS mechanisms (e.g. priority, shape, bandwidth) apply to the traffic matching the assigned class-maps.",
  },
  {
    id: 21,
    question:
      "Which MQC command activates a policy-map on a specific network interface?",
    options: [
      "traffic-shape enable",
      "qos-attach",
      "service-policy [input|output] [name]",
      "ip access-group [name]",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The `service-policy` command attaches an engineered policy-map to an interface for inbound or outbound traffic processing.",
  },
  {
    id: 22,
    question:
      "What metric value is assigned to the DSCP Default PHB (Per-Hop Behavior)?",
    options: ["000000", "001000", "101110", "111000"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The Default PHB corresponds to standard best-effort service, using a DSCP binary value of 000000 (decimal 0).",
  },
  {
    id: 23,
    question:
      "Which field in an IPv6 header replaces the legacy IPv4 Type of Service (ToS) byte for QoS functions?",
    options: ["Flow Label", "Traffic Class", "Next Header", "Hop Limit"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 8-bit Traffic Class field in the IPv6 header functions exactly like the IPv4 ToS field to hold DSCP and ECN values.",
  },
  {
    id: 24,
    question:
      "What mechanism is typically used by an enterprise router to delay web traffic bursts without discarding packets?",
    options: [
      "Traffic Policing",
      "Traffic Shaping",
      "Weighted Elimination",
      "Strict Drop Policies",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Traffic shaping uses memory buffers to smooth egress traffic rates over time, making it ideal for managing compliance with contracted WAN line rates.",
  },
  {
    id: 25,
    question:
      "What layer of the OSI reference model is completely unreached by Class of Service (CoS) values?",
    options: ["Layer 1", "Layer 2", "Layer 3", "Both A and C"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "CoS is strictly a Layer 2 tagging artifact. Therefore, Layer 1 (bits) and Layer 3 (IP structures) do not contain or parse CoS fields.",
  },
  {
    id: 26,
    question:
      "What is the equivalent IP Precedence value for a packet marked with DSCP CS3 (Class Selector 3)?",
    options: ["1", "3", "5", "7"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Class Selector DSCP values match legacy IP Precedence bits exactly by keeping the last 3 bits set to 0. CS3 maps to IP Precedence 3.",
  },
  {
    id: 27,
    question:
      "When applying WRED, what type of traffic is typically protected from packet drops compared to TCP streams?",
    options: [
      "HTTP traffic",
      "UDP traffic streams",
      "FTP downloads",
      "SSH administration channels",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "WRED targets TCP traffic because dropping TCP segments triggers window adjustments that alleviate congestion. It avoids dropping stateless UDP traffic like voice payloads since UDP does not back off in response to drops.",
  },
  {
    id: 28,
    question:
      "What happens by default to the DSCP markings of an inbound IP packet when passing from an untrusted switch interface?",
    options: [
      "The markings are automatically upgraded to EF.",
      "The switch resets the DSCP field to 0 (Best Effort).",
      "The switch converts the Layer 3 markings into Layer 2 CoS 7.",
      "The packet is dropped immediately.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An interface configured as untrusted will overwrite incoming QoS markings, rewriting fields to a default state of 0.",
  },
  {
    id: 29,
    question:
      "Which QoS component acts as a 'meter' to check if a traffic stream aligns with a defined profile?",
    options: [
      "Shaper/Policer",
      "Queuing block",
      "WRED scheduler",
      "Link compressor",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Traffic policing and shaping engines use token-bucket meters to measure whether passing data complies with configured CIR limits.",
  },
  {
    id: 30,
    question:
      "What is the primary target of using Link Fragmentation and Interleaving (LFI) on slow WAN circuits?",
    options: [
      "To encrypt the data payloads of all of the voice and video traffic that traverses the slow WAN link",
      "To chop up large data frames so small voice packets aren't delayed waiting for big frames to transmit",
      "To compress the RTP video paths in order to reduce the bandwidth that is used on the link",
      "To automate the dynamic backup routing paths that are used for failover when a link drops",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "LFI slices large data frames into smaller pieces and inserts latency-sensitive voice packets between them, reducing serialization delay on slow links (under 768 Kbps).",
  },
  {
    id: 31,
    question:
      "What is the recommended maximum one-way jitter threshold for high-quality interactive video traffic?",
    options: ["30 ms", "100 ms", "200 ms", "500 ms"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "To prevent video freezing and jerkiness, jitter across video paths should be kept well under 30 ms.",
  },
  {
    id: 32,
    question:
      "What is the decimal value of the Assured Forwarding marker 'AF21'?",
    options: ["12", "18", "22", "26"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "AF21 uses binary format 010010, which calculates to decimal 18 in the ToS byte translation rules.",
  },
  {
    id: 33,
    question:
      "Which queuing strategy divides available bandwidth equally among active traffic conversations without explicit manual sorting?",
    options: [
      "First-In, First-Out (FIFO)",
      "Priority Queuing (PQ)",
      "Weighted Fair Queuing (WFQ)",
      "Low Latency Queuing (LLQ)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "WFQ dynamically identifies data conversations based on addressing hashes and divides bandwidth fairly among active flows to prevent high-volume streams from starving smaller ones.",
  },
  {
    id: 34,
    question:
      "Which QoS mechanism alters packet bits directly to record a classification decision for downstream nodes?",
    options: ["Queuing", "Marking", "Shaping", "Dropping"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Marking is the process of writing QoS indicators (like DSCP values or CoS bits) directly into packet headers so subsequent network nodes can process them accordingly.",
  },
  {
    id: 35,
    question:
      "What command inside a class-map matches any traffic that fails to fit into other custom categories?",
    options: [
      "match any",
      "match protocol ip",
      "class class-default",
      "match access-list default",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The built-in `class-default` system block automatically collects all residual data traffic that did not match your custom explicit class rule criteria.",
  },
  {
    id: 36,
    question:
      "What is the standard QoS model for the modern internet, which uses hop-by-hop classification decisions?",
    options: [
      "Best Effort",
      "Integrated Services (IntServ)",
      "Differentiated Services (DiffServ)",
      "Dynamic Multi-Pathing",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Differentiated Services (DiffServ) model provides scalable, hop-by-hop QoS based on individual packet markings, avoiding the overhead of tracking end-to-end path reservations.",
  },
  {
    id: 37,
    question:
      "What field inside a Layer 2 frame header contains the CoS indicator?",
    options: [
      "The Ethernet preamble at the start of the frame",
      "The EtherType type field in the frame header",
      "Priority Code Point (PCP) inside the 802.1Q tag",
      "The FCS trailer space at the end of the frame",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The CoS indicator resides in the 3-bit PCP field within the 802.1Q VLAN header extension.",
  },
  {
    id: 38,
    question:
      "What happens if a network engineer marks an interface with the `bandwidth` command rather than configuring actual QoS policies?",
    options: [
      "The physical port speed is hard-limited to the configured value and cannot be exceeded under any circumstances.",
      "It only alters routing protocol metrics (like OSPF or EIGRP) and has no direct impact on packet queuing priority.",
      "The port automatically applies LLQ scheduling to all of the traffic that passes through the physical interface port.",
      "The interface activates compressed payload delivery modes for all of the data that is being sent out of the physical port.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The interface-level `bandwidth` command is an informational parameter used for path-cost calculations in routing protocols; it does not impose actual traffic limits or structural queuing behavior.",
  },
  {
    id: 39,
    question:
      "Which tool can remark out-of-profile packets to a lower priority instead of dropping them outright?",
    options: [
      "Traffic Policer",
      "FIFO Queue Scheduler",
      "Payload Compressor",
      "Hardware Link Shaper",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Policers can be configured with dual-rate token buckets to remark out-of-profile packets (e.g., from AF41 to AF43) rather than immediately dropping them.",
  },
  {
    id: 40,
    question:
      "What DSCP class selector maps directly to legacy IP Precedence 5?",
    options: ["CS1", "CS3", "CS5", "EF"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Class Selector 5 (CS5) uses binary 101000, aligning its high bits with legacy IP Precedence tier 5.",
  },
  {
    id: 41,
    question:
      "Which compression mechanism shrinks voice headers from 40 bytes to 2 or 4 bytes to conserve bandwidth on slow links?",
    options: [
      "The G.711 codec conversion process",
      "Compressed Real-Time Transport Protocol (cRTP)",
      "The Deflate compression algorithm",
      "The IEEE 802.1Q VLAN stripping process",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "cRTP compresses the combined IP/UDP/RTP voice packet header down from 40 bytes to 2 or 4 bytes, saving significant overhead on low-speed WAN interfaces.",
  },
  {
    id: 42,
    question:
      "What is the binary representation of the Differentiated Services Code Point for AF11?",
    options: ["001010", "001100", "010010", "011010"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "AF11 corresponds to Class 1, Low Drop Preference. Its 6-bit DSCP binary value is 001010 (decimal 10).",
  },
  {
    id: 43,
    question:
      "Which QoS mechanism can only be applied to outbound interface configurations?",
    options: [
      "Traffic Classification",
      "Traffic Policing",
      "Traffic Shaping",
      "Marking rules",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Traffic shaping requires holding packets in an egress memory buffer queue, meaning it can only be applied to outbound traffic on an interface.",
  },
  {
    id: 44,
    question:
      "What type of delay is caused by the time it takes to physically move bits down a transmission medium at the speed of light?",
    options: [
      "Serialization Delay",
      "Propagation Delay",
      "Queuing Delay",
      "Processing Delay",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Propagation delay is the fixed physical travel time required for an electromagnetic signal to traverse a cable link distance.",
  },
  {
    id: 45,
    question:
      "What type of delay is caused by the time it takes to clock a frame onto a physical wire based on the interface speed?",
    options: [
      "Processing Delay",
      "Queuing Delay",
      "Serialization Delay",
      "Propagation Delay",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Serialization delay is the time needed to write bits onto an interface, which directly decreases as the underlying physical line rate increases.",
  },
  {
    id: 46,
    question:
      "What is the default queuing configuration on interfaces running above 2.048 Mbps on Cisco routers?",
    options: [
      "Weighted Fair Queuing (WFQ)",
      "First-In, First-Out (FIFO)",
      "Low Latency Queuing (LLQ)",
      "Class-Based Weighted Fair Queuing (CBWFQ)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco routers default to simple FIFO queuing on high-speed interfaces (above 2.048 Mbps) because high bandwidth naturally minimizes queuing delays.",
  },
  {
    id: 47,
    question:
      "What mechanism is used to communicate congestion status directly back to endpoints without discarding packets?",
    options: [
      "The classic Tail Drop discard mechanism",
      "WRED with Explicit Congestion Notification (ECN)",
      "The RSVP end-to-end path signaling mechanism",
      "The applied traffic policing filter rules",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "When enabled, ECN uses the last 2 bits of the ToS byte to mark packets as experiencing congestion instead of dropping them, prompting compatible end-stations to lower their TCP transmission rates.",
  },
  {
    id: 48,
    question:
      "What is the default behavior of an entry-level unmanaged network switch regarding QoS tags?",
    options: [
      "It drops all frames that carry an 802.1Q VLAN tag header on the switch port.",
      "It strips the 802.1Q VLAN tags from the frames and drops them before forwarding.",
      "It passes the tags through transparently but treats all frames with basic FIFO priority.",
      "It automatically enforces strict LLQ queuing and scheduling rules on every ingress port.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Unmanaged switches typically forward frame tags unchanged but ignore the internal priority fields, processing everything via best-effort FIFO delivery.",
  },
  {
    id: 49,
    question:
      "Which mathematical burst type matches traffic rates that cross the absolute top bandwidth limit in a dual-bucket policer configuration?",
    options: [
      "Committed Burst (Bc)",
      "Excess Burst (Be)",
      "Interval Burst (Bi)",
      "Peak Burst (Bp)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Excess Burst (Be) metric represents the maximum quantity of bits allowed to exceed the normal Committed Burst (Bc) threshold during a specific time interval.",
  },
  {
    id: 50,
    question:
      "Which type of traffic classification is based on analyzing dynamic application behavior rather than standard layer 3/4 port parameters?",
    options: [
      "Access Control List filtering",
      "NBAR (Network Based Application Recognition)",
      "IP Precedence parsing",
      "VLAN interface mapping",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco NBAR performs deep packet inspection (DPI) up to Layer 7 to identify applications that use dynamic ports or mask their traffic within standard protocols like HTTP.",
  },
  {
    id: 51,
    question:
      "What happens to priority queue traffic in an LLQ setup if it exceeds its configured maximum bandwidth allocation during times of network congestion?",
    options: [
      "It borrows unused bandwidth from the lower-priority queues to compensate.",
      "It is policed and excess packets are dropped to prevent starving other traffic queues.",
      "The router shuts down the entire interface immediately to prevent further congestion.",
      "The queue depth is automatically doubled to accommodate the extra traffic.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "LLQ subjects the priority queue to a built-in policer during congestion, dropping traffic that exceeds the allocated rate to ensure other data queues aren't completely starved.",
  },
  {
    id: 52,
    question:
      "Which command inside a MQC class-map forces the match logic to require meeting every defined condition?",
    options: ["match-any", "match-all", "match-none", "match-strict"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Using `class-map match-all` creates an AND logical relationship, requiring traffic to satisfy every configured criteria rule to join that class.",
  },
  {
    id: 53,
    question:
      "Which command inside an MQC class-map allows traffic to match if it meets at least one of the defined conditions?",
    options: ["match-all", "match-any", "match-single", "match-boolean"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Using `class-map match-any` creates an OR logical relationship, grouping traffic into the class if it satisfies any single configured condition.",
  },
  {
    id: 54,
    question:
      "What are the three core models defined for network QoS implementation architectures?",
    options: [
      "LAN, WAN, and Cloud-based service delivery models",
      "Best-Effort, Integrated Services, and Differentiated Services",
      "FIFO, Priority, and Fair Queuing scheduling mechanisms",
      "Static, Dynamic, and Adaptive configuration modes",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The industry standard models for network QoS implementation are Best-Effort (no guarantees), IntServ (hard reservations), and DiffServ (prioritized classes).",
  },
  {
    id: 55,
    question:
      "What type of traffic is marked with DSCP value CS6, which is traditionally reserved for network infrastructure control?",
    options: [
      "Voice payload traffic",
      "Routing protocol updates (e.g., OSPF, BGP)",
      "Web browsing data",
      "SSH administration terminal streams",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco network nodes automatically mark critical control plane traffic, such as OSPF or BGP routing packets, with high priority flags like IP Precedence 6 or DSCP CS6.",
  },
  {
    id: 56,
    question:
      "Which queue scheduling method can cause lower-priority traffic classes to experience starvation if high-priority traffic volumes aren't restricted?",
    options: [
      "Weighted Fair Queuing (WFQ)",
      "Strict Priority Queuing (PQ)",
      "Class-Based Weighted Fair Queuing (CBWFQ)",
      "First-In, First-Out (FIFO)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Strict Priority Queuing always services the highest-priority queue first. If that queue is constantly full, all lower-priority queues are starved of bandwidth.",
  },
  {
    id: 57,
    question:
      "Which parameters are typically evaluated by a legacy Weighted Fair Queuing (WFQ) engine to dynamically sort traffic?",
    options: [
      "The source MAC address and the associated VLAN ID number of the frame",
      "Source and destination IP addresses, protocol type, and Layer 4 port numbers",
      "The packet length and the arrival interface link speed values",
      "The destination autonomous system path number in the BGP table",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "WFQ uses an addressing 5-tuple (source/destination IP, protocol, source/destination port) to automatically categorize traffic into independent conversations.",
  },
  {
    id: 58,
    question:
      "What is the primary benefit of deploying Class-Based Weighted Fair Queuing (CBWFQ)?",
    options: [
      "It encrypts the payload data of each individual traffic class to secure the network from eavesdropping and data theft attacks.",
      "It allows network administrators to define specific traffic classes and assign guaranteed minimum bandwidth to each class.",
      "It dynamically compresses the video frames to reduce the total bandwidth that is consumed by multimedia traffic streams.",
      "It routes the traffic along alternative physical paths in order to completely bypass the congested network segments and links.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "CBWFQ allows you to create custom traffic classes based on network needs and guarantee a minimum bandwidth allocation for each class during periods of congestion.",
  },
  {
    id: 59,
    question:
      "What baseline performance characteristic is most critical for interactive high-definition video conferencing compared to file downloads?",
    options: [
      "Massive raw throughput availability",
      "Low latency and minimal jitter",
      "Data payload encryption speed",
      "Storage buffer capacity",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "While file downloads just need high throughput, live video conferencing requires low delay and steady packet pacing (minimal jitter) to avoid broken audio and frozen frames.",
  },
  {
    id: 60,
    question:
      "Which QoS baseline model describes a standard network with no prioritization policies or traffic guarantees?",
    options: ["Best-Effort", "IntServ", "DiffServ", "LLQ Engine"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The Best-Effort model is the default network behavior where all traffic is treated equally, and there are no guarantees for delivery or performance.",
  },
  {
    id: 61,
    question:
      "What decimal target value matches the Assured Forwarding class 'AF33'?",
    options: ["24", "26", "28", "30"],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "AF33 uses binary value 011110, which translates to decimal 30 in the standard ToS byte conversion rules.",
  },
  {
    id: 62,
    question:
      "Where should classification and marking be performed to optimize network performance?",
    options: [
      "As close to the destination host as possible in the network to minimize the overhead",
      "As close to the traffic source as possible, typically at the access layer switch boundary",
      "Exclusively on the external core internet routers that belong to the service provider",
      "On the central management server that controls the entire corporate network infrastructure",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Performing classification and marking at the edge allows the rest of the network to leverage those markings, ensuring consistent end-to-end prioritization.",
  },
  {
    id: 63,
    question:
      "Which layer 2 field is modified to apply Class of Service (CoS) values across Inter-Switch Link (ISL) paths?",
    options: [
      "The Frame Check Sequence (FCS) trailer space at the frame end",
      "The custom 1-byte user field inside the proprietary ISL frame header",
      "The source MAC address low bit configuration in the frame header",
      "The inner IP protocol flag space inside the encapsulated packet",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In legacy Cisco ISL encapsulation, CoS values are stored within the lowest 3 bits of the custom 1-byte user field in the ISL header.",
  },
  {
    id: 64,
    question:
      "What is the maximum target packet loss metric for interactive video data traffic?",
    options: [
      "Between 0.1% and 1%",
      "Exactly 5%",
      "Up to 8%",
      "No limit exists",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Video applications can tolerate small amounts of packet loss, but exceeding 1% results in severe image pixelation and frame distortion.",
  },
  {
    id: 65,
    question:
      "What does an administrative action of 'remarking' a packet mean?",
    options: [
      "Adding a descriptive text note inside the device log files for the record keeping",
      "Changing the packet's existing QoS marking to a different value at a network boundary",
      "Re-encrypting the data payload with a stronger cryptographic algorithm key",
      "Modifying the destination IP address that is carried inside the packet's IP header",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Remarking is changing a packet's QoS marking (e.g. dropping a non-compliant packet from AF21 down to AF23) as it passes through a policy engine like a traffic policer.",
  },
  {
    id: 66,
    question:
      "Which statement describes an operational difference between policing and shaping?",
    options: [
      "Policing relies on hardware clocks, while shaping uses software loops to time its bursts.",
      "Policing drops or remarks traffic immediately, whereas shaping buffers excess traffic to flatten spikes.",
      "Shaping works exclusively on inbound traffic paths and never on the outbound direction of a link.",
      "Policing increases the serialization delay significantly on high-speed network links and interfaces.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Policing enforces hard rate limits by dropping or remarking excess traffic immediately. Shaping buffers excess bursts to smooth out the traffic flow, adding minor buffering delay.",
  },
  {
    id: 67,
    question:
      "What is the primary function of the Explicit Congestion Notification (ECN) field bits?",
    options: [
      "To identify the application type of the packet payload",
      "To notify endpoints of network congestion without dropping packets",
      "To perform cryptographic verification of the packet contents",
      "To calculate the metric value of the route in the table",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "ECN utilizes the last 2 bits of the ToS field to mark packets when a router experiences congestion, allowing end devices to scale back transmission rates before packets are dropped.",
  },
  {
    id: 68,
    question:
      "What value is used to calculate the time interval (Tc) in traffic shaping operations?",
    options: [
      "Tc = Bc / CIR",
      "Tc = CIR / Be",
      "Tc = Bc * CIR",
      "Tc = CIR + Bc",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The shaping time interval is calculated using Tc = Bc / CIR, determining how frequently the token bucket is refilled.",
  },
  {
    id: 69,
    question:
      "What happens if an incoming packet matches multiple class-map rules in a complex policy-map design?",
    options: [
      "The router applies all of the matching class-map actions simultaneously to the incoming packet in parallel.",
      "The router applies the actions from the first matching class-map sequence and skips subsequent classes.",
      "The packet is discarded immediately by the router due to the ambiguity of the multiple class matches that were found.",
      "The policy map execution fails and the router logs a configuration error for the administrator to review.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Policy maps process traffic top-down. The first class-map rule that matches a packet executes its actions, and subsequent rules are skipped.",
  },
  {
    id: 70,
    question:
      "Which configuration parameter limits the maximum number of packets a single CBWFQ queue can hold before tail-drop occurs?",
    options: [
      "queue-limit",
      "bandwidth-percent",
      "priority-level",
      "shape-average",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The `queue-limit` command sets the maximum packet capacity for a specific class queue before it starts dropping new arrivals.",
  },
  {
    id: 71,
    question:
      "What type of queuing delay variation describes a situation where packets wait behind a large file transfer burst?",
    options: [
      "Propagation variation",
      "Queuing delay / Jitter",
      "Processing lag",
      "Encoding conversion delay",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Variable wait times in interface buffers cause variations in end-to-end latency, which is experienced as jitter by the destination host.",
  },
  {
    id: 72,
    question:
      "What metric category represents the total bandwidth consumed by headers compared to the data payload?",
    options: [
      "Compression ratio",
      "Protocol Overhead",
      "Throughput maximum",
      "Serialization cost",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Protocol overhead is the extra bandwidth used by headers (like IP, UDP, and RTP) relative to the actual application data payload.",
  },
  {
    id: 73,
    question:
      "Which DSCP class selector maps directly to legacy IP Precedence 0?",
    options: ["CS0 / Default", "CS1", "CS4", "Best"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Class Selector 0 (CS0), or Default, uses binary 000000, which maps directly to legacy best-effort IP Precedence 0.",
  },
  {
    id: 74,
    question:
      "What configuration command combines matching capabilities across protocol headers up to Layer 7 inside an MQC class map?",
    options: [
      "match access-list",
      "match protocol [protocol-name]",
      "match ip precedence",
      "match vlan",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The `match protocol` command leverages NBAR engine capabilities to identify specific application types by analyzing traffic signatures up to Layer 7.",
  },
  {
    id: 75,
    question: "What is the primary purpose of Cisco AutoQoS tools?",
    options: [
      "To automatically encrypt all of the network traffic that passes between the remote sites and branches",
      "To generate macro templates that simplify and automate the deployment of standard Cisco QoS configurations",
      "To dynamically adjust the physical link speeds of the interfaces to match the current bandwidth demand",
      "To route the network traffic around the congested paths by using the alternate links that are available",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco AutoQoS automates QoS deployment by discovering network traffic types and generating appropriate class-maps, policy-maps, and interface commands based on best practices.",
  },
  {
    id: 76,
    question:
      "What type of delay is introduced by the mathematical processing and sampling of audio signals inside a VoIP codec?",
    options: [
      "Serialization Delay",
      "Propagation Delay",
      "Packetization Delay",
      "Queuing Delay",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Packetization delay is the time a codec takes to collect digital audio samples and package them into an IP packet payload.",
  },
  {
    id: 77,
    question:
      "Which token bucket parameter regulates the sustainable average transmission speed allowed by a traffic shaper?",
    options: [
      "Committed Information Rate (CIR)",
      "Excess Burst (Be)",
      "Peak Information Rate (PIR)",
      "Interval time (Tc)",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The CIR defines the long-term average bandwidth limit enforced by a traffic shaping or policing configuration.",
  },
  {
    id: 78,
    question:
      "What occurs if an enterprise network relies completely on a single strict priority queue for all data traffic types?",
    options: [
      "The network automatically activates payload compression for all of the traffic.",
      "It behaves exactly like a basic FIFO queue because all traffic has the same priority.",
      "The router switches to a stateful IntServ model with explicit reservations.",
      "Routing loops occur automatically across the entire network as a result of the change.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Placing all traffic into one priority queue treats all packets equally, effectively reverting the interface behavior back to standard FIFO queuing.",
  },
  {
    id: 79,
    question: "What is the binary value of the Assured Forwarding code 'AF23'?",
    options: ["010110", "010011", "100110", "011110"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "AF23 corresponds to Class 2, High Drop Preference. Its 6-bit DSCP binary value is 010110 (decimal 22).",
  },
  {
    id: 80,
    question:
      "Which QoS model is considered the most scalable architecture for modern, large-scale networks?",
    options: [
      "Best-Effort",
      "Integrated Services (IntServ)",
      "Differentiated Services (DiffServ)",
      "Static Path Allocation",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "DiffServ is highly scalable because it operates on a hop-by-hop basis using simple packet markings, avoiding the need to maintain end-to-end path reservation states.",
  },
  {
    id: 81,
    question:
      "What is the decimal equivalent of the DSCP Class Selector 4 (CS4) marking?",
    options: ["16", "24", "32", "40"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "CS4 sets the fourth bit in the 6-bit DSCP field, resulting in binary 100000, which equals decimal 32.",
  },
  {
    id: 82,
    question:
      "Which feature prevents a traffic shaper from causing buffer bloat and excessive delays on an interface?",
    options: [
      "Configuring a reasonable queue-limit on the shaper's internal buffers",
      "Disabling WRED on all of the egress interfaces of the router",
      "Enabling payload compression on the outgoing interface links",
      "Using a single strict priority queue for all traffic classes",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Limiting the shaper's buffer depth via the `queue-limit` command prevents it from holding too many packets, keeping latency within acceptable bounds during bursts.",
  },
  {
    id: 83,
    question:
      "Which command assigns a traffic shaping policy to an average target rate of 1 Mbps?",
    options: [
      "shape average 1000000",
      "traffic-shape rate 1000",
      "police cir 1000000",
      "bandwidth 1000",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The command `shape average 1000000` configures an outbound traffic shaper with a target bits-per-second rate of 1,000,000 (1 Mbps).",
  },
  {
    id: 84,
    question:
      "What is the primary benefit of prioritizing interactive video traffic over general web data?",
    options: [
      "It encrypts the video stream to protect the privacy of the conference call",
      "It ensures smooth playback and reduces artifacts caused by packet delay or jitter.",
      "It reduces the compressed video file size in order to save storage capacity",
      "It changes the video resolution dynamically based on the available bandwidth",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Prioritizing video traffic ensures timely packet delivery, preventing visual artifacts and audio dropouts during live calls.",
  },
  {
    id: 85,
    question:
      "What is the typical drop probability behavior of WRED as the average queue size approaches the maximum threshold?",
    options: [
      "The drop probability remains at zero for all of the traffic classes until the average queue depth completely fills up to the top.",
      "The drop probability increases linearly until it hits the maximum drop threshold, then drops everything (tail drop).",
      "The drop probability decreases gradually to zero as the average queue size grows larger and the congestion level increases.",
      "The drop probability changes randomly regardless of the current average queue depth or the fill level of the buffer space.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "WRED discards packets at an increasing rate as the average queue depth climbs toward the maximum threshold, eventually reverting to full tail drop if the buffer fills completely.",
  },
  {
    id: 86,
    question:
      "Which of the following fields can be used for traffic classification at Layer 4?",
    options: [
      "Source MAC address",
      "Destination IP address",
      "TCP/UDP port numbers",
      "VLAN ID",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Layer 4 classification relies on identifying specific applications via their TCP or UDP port numbers (e.g. port 80 for HTTP).",
  },
  {
    id: 87,
    question:
      "What happens if a network packet arrives at a router with an unrecognized DSCP value?",
    options: [
      "The packet is dropped immediately by the router without any notification",
      "The packet is processed using standard default (best-effort) PHB rules.",
      "The router triggers an ICMP error message back to the source",
      "The packet is routed to a quarantine network for further inspection",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unrecognized DSCP markings are treated as Default PHB (best-effort), ensuring the packet is still forwarded normally without special prioritization.",
  },
  {
    id: 88,
    question:
      "Which mechanism can dynamically adjust its drop criteria based on the IP Precedence or DSCP value of passing traffic?",
    options: [
      "FIFO",
      "Weighted Random Early Detection (WRED)",
      "Strict Priority Queuing",
      "Link Fragmentation",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "WRED can use different drop profiles based on IP Precedence or DSCP, dropping lower-priority packets sooner than higher-priority ones as congestion rises.",
  },
  {
    id: 89,
    question:
      "What is the decimal equivalent of the Assured Forwarding marking 'AF43'?",
    options: ["34", "36", "38", "40"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "AF43 corresponds to Class 4, High Drop Preference. Its binary format is 100110, which equals decimal 38.",
  },
  {
    id: 90,
    question:
      "Which parameter represents the actual time slot duration used to transmit a single burst of bits in a shaping configuration?",
    options: [
      "Committed Information Rate (CIR)",
      "Interval time (Tc)",
      "Committed Burst (Bc)",
      "Excess Burst (Be)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The interval time (Tc) is the time slice during which the shaper transmits the configured burst size (Bc) before pausing to calculate the next cycle.",
  },
  {
    id: 91,
    question:
      "What feature should be enabled at the access layer to protect QoS trust settings from being exploited by unauthorized end devices?",
    options: [
      "Disabling all of the VLANs on the access switch to prevent any unauthorized network access at all",
      "Configuring conditional trust boundaries that reset markings unless the device is a recognized IP Phone",
      "Enabling strict priority queuing on all of the switch ports to always favor the high-priority traffic classes",
      "Using static routing only for all of the network traffic paths and destination networks in the enterprise",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Conditional trust configurations verify connected endpoints via protocols like CDP/LLDP, disabling trust settings if a user connects a PC directly to an access port to forge high-priority markings.",
  },
  {
    id: 92,
    question:
      "Which parameter defines the minimum bandwidth guaranteed to a specific class-map within a CBWFQ configuration?",
    options: [
      "bandwidth [kbps]",
      "priority [kbps]",
      "shape percent",
      "queue-limit",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The `bandwidth` command inside a policy-map class defines the minimum bit-rate allocation guaranteed to that class during periods of network congestion.",
  },
  {
    id: 93,
    question:
      "What is the primary operational difference between the `bandwidth` and `priority` commands inside a Cisco MQC policy-map?",
    options: [
      "There is no operational difference between the two commands; they perform identical functions within the policy map.",
      "`bandwidth` allocates minimum guaranteed bandwidth, while `priority` creates a strict low-latency priority queue.",
      "`priority` compresses the data payloads of the matching class traffic automatically in order to save the bandwidth used.",
      "`bandwidth` can only be applied to the incoming traffic streams that arrive on the physical interface port and nothing else.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The `bandwidth` command guarantees a minimum bandwidth allocation for a class, whereas the `priority` command activates low-latency strict queuing, sending that class's traffic ahead of all others.",
  },
  {
    id: 94,
    question:
      "What configuration command resets a packet's DSCP field back to zero within an MQC policy map class?",
    options: [
      "set dscp default",
      "police drop",
      "clear precedence",
      "set cos 0",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The command `set dscp default` overwrites the DSCP field, resetting its value to 000000 (Best-Effort).",
  },
  {
    id: 95,
    question:
      "What is the maximum target packet loss metric for standard mission-critical data applications?",
    options: ["0%", "Less than 1%", "Up to 5%", "No limit is defined"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Enterprise data applications expect reliable delivery, and performance degrades significantly if packet loss exceeds 1%.",
  },
  {
    id: 96,
    question:
      "What is the binary representation of the Differentiated Services Code Point for AF32?",
    options: ["011100", "011010", "100010", "011110"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "AF32 corresponds to Class 3, Medium Drop Preference. Its 6-bit DSCP binary value is 011010 (decimal 26).",
  },
  {
    id: 97,
    question:
      "Which QoS model operates on a stateful connection architecture that requires end-to-end signaling before data flows?",
    options: [
      "Best-Effort",
      "Integrated Services (IntServ)",
      "Differentiated Services (DiffServ)",
      "Class-Based Marking",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IntServ model uses RSVP to negotiate resource reservations along the entire path before data transmission begins, requiring routers to track state info for each active flow.",
  },
  {
    id: 98,
    question:
      "What is the term used to describe dropping low-priority packets before a full tail-drop event occurs?",
    options: [
      "Congestion Management",
      "Congestion Avoidance",
      "Traffic Control",
      "Link Optimization",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Congestion avoidance mechanisms (like WRED) proactively drop packets when buffers start to fill, encouraging TCP senders to slow down before severe congestion occurs.",
  },
  {
    id: 99,
    question:
      "Which command maps an access-list directly to a policy-map's classification process inside an MQC class-map?",
    options: [
      "match access-group [number]",
      "match access-list [name]",
      "match ip access-group [number]",
      "match class-map [name]",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The `match access-group [number|name]` command links an Access Control List (ACL) to a class-map to identify and filter matching traffic.",
  },
  {
    id: 100,
    question:
      "Which QoS feature uses a single token bucket to enforce a hard rate limit on an interface?",
    options: [
      "Single-rate, two-color policer",
      "Dual-rate, three-color policer",
      "Class-based traffic shaper",
      "Adaptive link scheduler",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "A single-rate, two-color policer uses one token bucket to monitor traffic against a single rate limit, identifying packets as either conforming or exceeding.",
  },
  {
    id: 200,
    question:
      "Which QoS model signals the network to reserve resources for a specific traffic flow?",
    options: [
      "Best-effort",
      "IntServ (Integrated Services)",
      "DiffServ (Differentiated Services)",
      "FIFO (First In, First Out)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IntServ uses RSVP to reserve bandwidth end-to-end. DiffServ marks packets with DSCP and treats them based on per-hop behavior, without end-to-end signaling.",
  },
  {
    id: 300,
    question: "What is the purpose of a trust boundary in QoS?",
    options: [
      "To define which network devices are allowed to mark or remark QoS values",
      "To encrypt the traffic that flows between the trusted devices",
      "To limit the bandwidth that is available to the trusted devices",
      "To authenticate the users before their traffic is allowed to be prioritized",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The trust boundary determines whether the switch trusts QoS markings from connected devices (e.g., IP phones marking traffic). Typically, the boundary is at the access layer switch.",
  },
  {
    id: 400,
    question: "What is the default queuing method on a Cisco switch interface?",
    options: [
      "Priority Queuing (PQ)",
      "Custom Queuing (CQ)",
      "Weighted Fair Queuing (WFQ)",
      "First In, First Out (FIFO)",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The default queuing method on Cisco switch interfaces is FIFO (First In, First Out), where packets are transmitted in the order they arrive without any prioritization.",
  },
  {
    id: 500,
    question: "Which DSCP marking is commonly used for voice traffic?",
    options: [
      "DSCP 0 (Best Effort)",
      "DSCP 46 (Expedited Forwarding / EF)",
      "DSCP 10 (AF11)",
      "DSCP 56 (Network Control)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DSCP 46 (Expedited Forwarding) is the standard marking for interactive voice traffic, providing low latency, low jitter, and low loss treatment through the network.",
  },
];
