import type { QuizQuestion } from "./types";

export const osiTcpipQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which OSI layer is responsible for logical addressing and routing?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Network Layer (Layer 3) handles logical addressing (IP addresses) and determines the best path for data to reach its destination.",
  },
  {
    id: 2,
    question:
      "What is the Protocol Data Unit (PDU) at the Transport Layer (Layer 4) of the OSI model?",
    options: ["Bit", "Frame", "Packet", "Segment"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "At the Transport Layer, data from the upper layers is broken into smaller pieces called segments (TCP) or datagrams (UDP).",
  },
  {
    id: 3,
    question:
      "Which layer of the OSI model is responsible for code formatting, data compression, and encryption?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Presentation Layer (Layer 6) ensures that data sent from the application layer of one system can be read by the application layer of another.",
  },
  {
    id: 4,
    question:
      "Which TCP/IP model layer combines the functionalities of the OSI Physical and Data Link layers?",
    options: ["Internet", "Network Access", "Transport", "Application"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Network Access layer (also called Link layer in some texts) covers all the physical and data link mechanisms required to transmit data over a local physical network.",
  },
  {
    id: 5,
    question:
      "What is the correct order of data encapsulation as a message moves down the OSI model layers?",
    options: [
      "Data, Segment, Packet, Frame, Bits",
      "Bits, Frame, Packet, Segment, Data",
      "Data, Packet, Segment, Frame, Bits",
      "Segment, Packet, Data, Frame, Bits",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Encapsulation flows from the top down: Upper-layer Data becomes a Segment (Layer 4), then a Packet (Layer 3), then a Frame (Layer 2), and finally is transmitted as Bits (Layer 1).",
  },
  {
    id: 6,
    question:
      "Which OSI layer handles hardware addressing (MAC addresses) and media access control?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Data Link Layer (Layer 2) is divided into the LLC and MAC sublayers; the MAC sublayer handles physical hardware addressing.",
  },
  {
    id: 7,
    question: "What is the primary PDU handled at the Data Link Layer?",
    options: ["Bit", "Frame", "Packet", "Segment"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Data Link layer wraps network-layer packets into frames, appending a physical header (MAC addresses) and a trailer (FCS).",
  },
  {
    id: 8,
    question:
      "Which layer of the OSI model manages the establishment, maintenance, and termination of conversations between applications?",
    options: [
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Session Layer (Layer 5) sets up, coordinates, and terminates exchanges, dialogs, and sessions between applications.",
  },
  {
    id: 9,
    question:
      "Which protocol operates at the Internet layer of the TCP/IP model?",
    options: ["TCP", "UDP", "ICMP", "HTTP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Internet layer handles routing and logical addressing. ICMP, IP, and ARP operate at this layer.",
  },
  {
    id: 10,
    question:
      "During decapsulation, what header is stripped off when moving from the Data Link layer up to the Network layer?",
    options: ["IP Header", "TCP Header", "Ethernet Header", "HTTP Header"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Decapsulation goes from bottom to top. Layer 2 strips the Ethernet header/trailer and hands the inner IP packet up to Layer 3.",
  },
  {
    id: 11,
    question:
      "Which layer is responsible for tracking individual conversations and ensuring reliable end-to-end data delivery?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Data Link Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Transport Layer (Layer 4) provides flow control, error recovery (via TCP acknowledgment), and tracks multiple simultaneous connections using port numbers.",
  },
  {
    id: 12,
    question: "What type of address is used at the OSI Physical Layer?",
    options: ["IP Address", "MAC Address", "Port Number", "None of the above"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The Physical Layer handles raw bits, voltages, frequencies, and cables. It does not look at or understand logical, physical, or service-point addressing.",
  },
  {
    id: 13,
    question: "Which protocol is a connectionless transport layer protocol?",
    options: ["TCP", "UDP", "IP", "HTTP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "User Datagram Protocol (UDP) is a simple, connectionless protocol that sends datagrams without establishing a formal connection or guaranteeing delivery.",
  },
  {
    id: 14,
    question:
      "How many layers are defined in the classic TCP/IP reference model developed by the DoD?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The original Department of Defense (DoD) TCP/IP model consists of 4 layers: Network Access, Internet, Transport, and Application.",
  },
  {
    id: 15,
    question:
      "Which component operates entirely at the Physical Layer of the OSI model?",
    options: ["Layer 2 Switch", "Router", "Repeater / Hub", "Access Point"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Hubs and repeaters regenerate electrical or optical signals without analyzing any frames or packets, meaning they function strictly at Layer 1.",
  },
  {
    id: 16,
    question:
      "What mechanism does TCP use at the Transport Layer to gracefully negotiate a connection before data transmission?",
    options: [
      "Flow Control",
      "Windowing",
      "Three-Way Handshake",
      "Sliding Windows",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "TCP establishes a reliable connection using a three-way handshake process involving SYN, SYN-ACK, and ACK flags.",
  },
  {
    id: 17,
    question:
      "Which field in a Layer 2 Ethernet frame trailer is used to detect transmission errors via a Cyclic Redundancy Check (CRC)?",
    options: [
      "Preamble",
      "Type field",
      "Frame Check Sequence (FCS)",
      "Source MAC Address",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Frame Check Sequence (FCS) contains a CRC value computed by the sending device. The receiver recalculates this to verify that the frame wasn't corrupted in transit.",
  },
  {
    id: 18,
    question:
      "To which OSI layer do protocols like DNS, FTP, and SMTP map entirely?",
    options: [
      "Transport Layer",
      "Session Layer",
      "Application Layer",
      "Presentation Layer",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "DNS, FTP, and SMTP provide direct network network services to user applications and operate at Layer 7 (Application Layer).",
  },
  {
    id: 19,
    question: "What is the purpose of port numbers at the Transport Layer?",
    options: [
      "To identify specific hosts on a local network by their unique address",
      "To identify the physical interface on a switch that received the data",
      "To differentiate multiple unique applications running on a single host",
      "To determine the best path through a WAN for the transmitted data",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Port numbers allow a host to multiplex and demultiplex incoming data streams, directing traffic to the specific application or process it belongs to.",
  },
  {
    id: 20,
    question: "What are the two sublayers of the OSI Data Link Layer?",
    options: [
      "TCP and UDP sublayers for transport handling",
      "Logical Link Control (LLC) and Media Access Control (MAC)",
      "IP and ARP sublayers for addressing functions",
      "Physical and Logical sublayers for media access",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Data Link Layer is divided into the IEEE 802.2 Logical Link Control (LLC) sublayer and the IEEE 802.3 Media Access Control (MAC) sublayer.",
  },
  {
    id: 21,
    question:
      "Which sublayer of the Data Link layer handles interface communication with upper-layer network software?",
    options: [
      "MAC sublayer",
      "LLC sublayer",
      "Network sublayer",
      "Physical sublayer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Logical Link Control (LLC) sublayer handles communication with network layer protocols and hides physical card differences from the upper software layers.",
  },
  {
    id: 22,
    question:
      "What field in an IPv4 packet header ensures packets don't loop endlessly around a network?",
    options: [
      "Header Checksum",
      "Protocol field",
      "Time to Live (TTL)",
      "Identification",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The TTL field is decremented by 1 by each router that processes the packet. If TTL hits 0, the packet is discarded and an ICMP Time Exceeded message is sent back.",
  },
  {
    id: 23,
    question:
      "Which of the following describes a function of the Network layer?",
    options: [
      "Ensuring electrical signal voltage synchronization",
      "Path selection and end-to-end routing using logical addresses",
      "Structuring frames with destination physical addresses",
      "Reassembling data streams in sequential order using sequence numbers",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The primary job of Layer 3 (Network) is identifying the most efficient logical path across interconnected networks to move packets.",
  },
  {
    id: 24,
    question:
      "Which TCP flag is used to abruptly terminate a connection due to an error or invalid packet?",
    options: ["FIN", "RST", "SYN", "PSH"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The RST (Reset) flag immediately tears down a connection without a graceful close sequence when an unrecoverable error occurs.",
  },
  {
    id: 25,
    question:
      "What value does a switch look at in a Layer 2 frame to update its forwarding table?",
    options: [
      "Destination IP address",
      "Source MAC address",
      "Destination MAC address",
      "Source Port number",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Switches dynamically learn by looking at the *Source* MAC address of incoming frames to see which physical port a device is attached to.",
  },
  {
    id: 26,
    question:
      "What value does a switch use to decide *where* to forward an incoming frame?",
    options: [
      "Destination MAC address",
      "Source MAC address",
      "Destination IP address",
      "Type field",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A switch looks up the *Destination* MAC address in its MAC address table to forward the frame out the correct interface.",
  },
  {
    id: 27,
    question:
      "Which protocol is responsible for mapping a known Layer 3 logical IP address to a Layer 2 physical MAC address?",
    options: ["DNS", "DHCP", "ARP", "RARP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Address Resolution Protocol (ARP) resolves IPv4 logical layer addresses to physical hardware MAC addresses on a local broadcast domain.",
  },
  {
    id: 28,
    question:
      "When a router receives a packet, what part of the encapsulation structure must it rewrite before forwarding it out an interface?",
    options: [
      "The Layer 3 Header",
      "The Layer 4 Header",
      "The Layer 2 Header and Trailer",
      "The Application Payload",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "As a packet moves across hops, each router strips the Layer 2 frame header/trailer and replaces it with a new one matching the outbound media link, keeping the Layer 3 information intact.",
  },
  {
    id: 29,
    question:
      "What mechanism allows a TCP receiver to throttle the sender's transmission rate to prevent buffer overflow?",
    options: [
      "Sequence numbers tracking packet order",
      "Flow control via Window Size adjustments",
      "Three-way handshake establishment",
      "Checksums verifying data integrity",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TCP uses the Window Size field in the segment header to perform flow control, letting the receiver declare how many bytes it can process before requiring an ACK.",
  },
  {
    id: 30,
    question:
      "Which of the following layers of the 5-layer updated TCP/IP model matches the OSI Layer 3?",
    options: ["Data Link", "Network Access", "Internet / Network", "Transport"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Internet layer (or Network layer in the 5-layer model) corresponds precisely to Layer 3 (Network) of the OSI model.",
  },
  {
    id: 31,
    question:
      "What TCP flag is used to signify a graceful request to close an established connection?",
    options: ["RST", "FIN", "ACK", "URG"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The FIN (Finish) flag is transmitted by a host to cleanly close down its side of a data stream connection once it finishes sending application payload.",
  },
  {
    id: 32,
    question:
      "What happens during the encapsulation process when data transitions from the Transport Layer down to the Network Layer?",
    options: [
      "The Layer 4 segment is placed inside a Layer 3 packet with source/destination IP addresses added.",
      "The Layer 3 frame is converted into bits and sent out onto the physical media immediately.",
      "Port numbers are stripped away and replaced with the destination IP address instead.",
      "MAC addresses are appended to the segment to form a complete Layer 2 frame.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Moving from Layer 4 down to Layer 3, the whole segment becomes the payload of a new Network layer packet, wrapped with an IP header containing routing details.",
  },
  {
    id: 33,
    question:
      "Which layer is primarily responsible for multiplexing multiple applications over a single network connection using sockets?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Data Link Layer",
      "Physical Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Transport layer coordinates sockets (IP Address + Port Number combinations) to track and multiplex distinct applications through the single host IP stack.",
  },
  {
    id: 34,
    question:
      "Which layer handles pins, connectors, cable types, signal voltages, and fiber optic wave specifications?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Presentation Layer",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "OSI Layer 1 (Physical) deals strictly with the mechanical, electrical, and structural specifications of the physical transmission media.",
  },
  {
    id: 35,
    question:
      "What protocol operates at the Application layer and is used to retrieve web pages?",
    options: ["HTML", "HTTP", "TCP", "TLS"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Hypertext Transfer Protocol (HTTP) is an application-layer network protocol designed to exchange structured hypertext over web platforms.",
  },
  {
    id: 36,
    question:
      "Which standard field is found in BOTH a TCP header and a UDP header?",
    options: [
      "Sequence Number",
      "Source Port",
      "Window Size",
      "Acknowledgment Number",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Both TCP and UDP require source and destination port numbers to pass incoming data to the appropriate software application process.",
  },
  {
    id: 37,
    question:
      "What is the hexadecimal MAC broadcast address used at the Data Link Layer?",
    options: [
      "255.255.255.255",
      "FF-FF-FF-FF-FF-FF",
      "00-00-00-00-00-00",
      "01-00-5E-00-00-01",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The MAC layer broadcast target is a 48-bit address composed completely of binary 1s, written in hex as FF-FF-FF-FF-FF-FF.",
  },
  {
    id: 38,
    question:
      "Which layer of the OSI model handles the framing of data packets prior to physical bit conversion?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Data Link layer takes Layer 3 packets and shapes them into discrete units called frames with specialized boundary flags.",
  },
  {
    id: 39,
    question:
      "If a computer applications wants to stream voice or video where minimal delay is preferred over error recovery, which transport option is chosen?",
    options: ["TCP", "UDP", "IP", "FTP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "UDP drops the overhead of retransmissions and handshakes, eliminating packet delivery jitter and delaying effects, which makes it ideal for real-time media streams.",
  },
  {
    id: 40,
    question:
      "Which of the following fields is part of an IPv4 packet header but NOT part of an Ethernet frame header?",
    options: [
      "Source Address",
      "Destination Address",
      "Protocol / Type",
      "Time To Live (TTL)",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "TTL is strictly a Layer 3 concept engineered inside the IP header to terminate looping network packets.",
  },
  {
    id: 41,
    question:
      "What is the primary function of the OSI Application Layer (Layer 7)?",
    options: [
      "To provide the user interface to access network services",
      "To route packets to alternative networks",
      "To convert digital signals to analog waves",
      "To compress data structures",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Layer 7 provides the direct software gateway for applications (like web browsers or email clients) to communicate with network infrastructures.",
  },
  {
    id: 42,
    question:
      "Which OSI layer provides the ability to resume data transfers via synchronization check points?",
    options: [
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Session layer provides checkpoint mechanisms within file data transfer processes to recover the stream if a connection breaks mid-transit.",
  },
  {
    id: 43,
    question:
      "What does the 'Type' field in an Ethernet II frame header identify?",
    options: [
      "The physical speed of the link at which it is currently operating",
      "The upper-layer Network protocol inside the payload (e.g., IPv4 or IPv6)",
      "The length of the data field carried inside the Ethernet frame",
      "The type of switch port that is currently active on the interface",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The EtherType field specifies which higher-layer protocol (like 0x0800 for IPv4 or 0x86DD for IPv6) needs to process the payload once the frame is stripped.",
  },
  {
    id: 44,
    question:
      "What sequence of packets accurately matches the completion of a standard TCP 3-way connection setup?",
    options: [
      "SYN, ACK, SYN-ACK",
      "SYN, SYN-ACK, ACK",
      "ACK, SYN, SYN-ACK",
      "FIN, FIN-ACK, ACK",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The correct progression is a SYN request from the initiator, a combined SYN-ACK response from the target, and a final validating ACK from the initiator.",
  },
  {
    id: 45,
    question:
      "Which layer handles the structural translation of abstract host integers into standard network byte ordering (Endianness)?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Presentation layer deals with data serialization formats, resolving incompatibilities in syntax, character maps (ASCII vs EBCDIC), or host-specific byte order styles.",
  },
  {
    id: 46,
    question:
      "Which TCP/IP protocol is used to test logical connectivity to a remote host using Echo requests?",
    options: ["ARP", "DHCP", "ICMP", "DNS"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Internet Control Message Protocol (ICMP) powers network diagnostic commands like ping, generating Echo Request and Echo Reply routines.",
  },
  {
    id: 47,
    question:
      "At which layer of the OSI model does a standard modern router operate to choose destination interfaces?",
    options: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Routers assess logical target IP fields across routing tables, a set of functions located at OSI Layer 3 (Network).",
  },
  {
    id: 48,
    question:
      "What information is encapsulated in a Layer 4 TCP segment header to track structural fragmentation ordering?",
    options: [
      "Port Numbers",
      "IP Addresses",
      "Sequence Numbers",
      "MAC Addresses",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "TCP relies on a 32-bit Sequence Number to reorder segmented blocks into their exact original sequence at the receiving endpoint.",
  },
  {
    id: 49,
    question:
      "Which layer specifies CSMA/CD or token-based operational states for managing access to physical lines?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Data Link layer's Media Access Control (MAC) sublayer dictates physical wire sharing rules, including Carrier Sense Multiple Access with Collision Detection (CSMA/CD).",
  },
  {
    id: 50,
    question:
      "What happens when an upper-layer application transmits a block of data larger than the path Maximum Transmission Unit (MTU)?",
    options: [
      "The Physical layer slows down link speed to accommodate the larger packet size.",
      "The Network layer splits the packet into smaller fragments (unless DF bit is set).",
      "The Data Link layer drops it without processing and logs the event as an error.",
      "The Session layer marks checkpoints to allow the transfer to be resumed later.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If a logical packet exceeds downstream structural boundaries (MTU), Layer 3 IP processes split the structure into multiple smaller, fragmented packets.",
  },
  {
    id: 51,
    question:
      "What is the standard byte length of an IPv4 header without option fields?",
    options: ["20 bytes", "32 bytes", "40 bytes", "64 bytes"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A standard base IPv4 packet header spans exactly 20 bytes of architectural data structures.",
  },
  {
    id: 52,
    question:
      "What is the base size of a standard TCP segment header before options are included?",
    options: ["8 bytes", "20 bytes", "32 bytes", "40 bytes"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Like IPv4 headers, a basic TCP transport header without any optional extensions takes up exactly 20 bytes.",
  },
  {
    id: 53,
    question: "What is the total byte size of a standard UDP transport header?",
    options: ["8 bytes", "20 bytes", "16 bytes", "32 bytes"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "UDP features low overhead, packing its entire control functionality (Source Port, Destination Port, Length, Checksum) into just 8 bytes.",
  },
  {
    id: 54,
    question:
      "Which layer handles the mapping of URLs (like www.cisco.com) to target logical IP endpoints?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Application Layer",
      "Data Link Layer",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Domain Name System (DNS) is an Application-layer system executing host resolution routines.",
  },
  {
    id: 55,
    question:
      "What error-checking field is evaluated during Layer 3 processing on intermediary routers?",
    options: [
      "FCS Frame Trailer",
      "Header Checksum",
      "TCP Sequence Field",
      "Window Size Identifier",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Intermediary routers calculate the IPv4 Header Checksum field at every hop to ensure the routing data structure hasn't suffered damage during transmission.",
  },
  {
    id: 56,
    question:
      "Which term describes a device reassembling fragmented fragments back into a single packet?",
    options: [
      "De-encapsulation",
      "Reassembly",
      "Serialization",
      "Demultiplexing",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Reassembly is the target host function of piecing fragmented IP pieces back together into the original complete packet structure.",
  },
  {
    id: 57,
    question:
      "Which field in the IPv4 header indicates the specific upper-layer protocol (like TCP or UDP) embedded in the packet payload?",
    options: [
      "Version",
      "Type of Service (ToS)",
      "Protocol field",
      "Identification",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Layer 3 Protocol field tracks destination assignments inside the architecture, matching numbers like 6 for TCP or 17 for UDP.",
  },
  {
    id: 58,
    question:
      "Which statement best describes the fundamental operational mode of the OSI model's layers?",
    options: [
      "Each layer acts independently without acknowledging adjacencies.",
      "Each layer provides structural services to the layer immediately above it.",
      "Lower layers depend on upper layers to generate formatting rules.",
      "All layers write data blocks into the final physical trailer frame directly.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The OSI architecture functions hierarchically; every tier encapsulates the payload from above, delivering structural facilities to its adjacent upper tier.",
  },
  {
    id: 59,
    question:
      "What does an unexpected incoming TCP segment containing an active ACK flag along with an active RST flag typically mean?",
    options: [
      "The connection is executing normal window scaling adjustments for the data flow.",
      "The target system rejected a previous synchronization request or no application is listening on that port.",
      "The link layer requires immediate frame size re-negotiation to continue forwarding the traffic.",
      "The session layer is dropping a checkpoint mark so the data transfer cannot be resumed.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Receiving a combination of RST and ACK flags indicates the remote machine received a connection request on a port where no matching service is active, dropping the handshake attempt.",
  },
  {
    id: 60,
    question:
      "Which layer handles media topology definitions like Point-to-Point, Star, or Ring configurations?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Session Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Physical layer defines structural media cables, but the Data Link layer defines the logical topology rules mapping out how devices perceive and cross links.",
  },
  {
    id: 61,
    question:
      "Which of the following is an example of a protocol running at the Data Link Layer?",
    options: [
      "IP (Internet Protocol)",
      "TCP (Transmission Control Protocol)",
      "PPP (Point-to-Point Protocol)",
      "TFTP (Trivial File Transfer Protocol)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "PPP manages encapsulation, frame formatting, and connection operations across dedicated wide area network serial lines at Layer 2.",
  },
  {
    id: 62,
    question:
      "Which layer establishes end-to-end data transmission rules using window tracking and buffer systems?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Data Link Layer",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Layer 4 (Transport) handles host-to-host transmission mechanics, managing sliding window sizing to control tracking pacing safely.",
  },
  {
    id: 63,
    question:
      "What type of address maps to a 32-bit integer normally written in dotted-decimal format?",
    options: ["MAC Address", "IPv4 Address", "IPv6 Address", "Port Number"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An IPv4 address is formatted as a 32-bit binary number, divided into four 8-bit octets expressed in standard dotted-decimal notation.",
  },
  {
    id: 64,
    question: "What is the standard size of an IPv6 address?",
    options: ["32 bits", "48 bits", "64 bits", "128 bits"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "IPv6 uses a massive 128-bit address design to expand the global internet routing space.",
  },
  {
    id: 65,
    question:
      "What layer of the OSI model handles ASCII-to-EBCDIC or JSON-to-XML serialization updates?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Data presentation format conversions, translation mechanics, and character serialization tasks are handled at Layer 6.",
  },
  {
    id: 66,
    question:
      "What is the range of well-known port numbers reserved for core network services and systems?",
    options: ["0 - 1023", "1024 - 49151", "49152 - 65535", "1 - 254"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "IANA designates ports 0 through 1023 as well-known ports, reserved for foundational protocols like HTTP, SSH, DNS, and FTP.",
  },
  {
    id: 67,
    question:
      "Which layer is responsible for translating a user input command into raw alphanumeric string blocks for transit processing?",
    options: [
      "Application Layer",
      "Presentation Layer",
      "Session Layer",
      "Transport Layer",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The Application layer directly faces software frameworks, interacting with software components to begin down-stack data transit structures.",
  },
  {
    id: 68,
    question:
      "What is a major difference between TCP and UDP at the transport layer?",
    options: [
      "TCP works at Layer 3 of the model, while UDP functions at Layer 4 of the OSI reference model.",
      "TCP provides connection-oriented, ordered delivery, whereas UDP offers best-effort connectionless delivery.",
      "UDP includes advanced window sliding algorithms for managing data flow more efficiently than TCP.",
      "TCP features lower structural header byte overhead than UDP, so it uses much less bandwidth overall.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "TCP builds a reliable, tracked stream using stateful acknowledgment mechanisms. UDP functions as a lightweight, stateless transmission method.",
  },
  {
    id: 69,
    question:
      "Which field in a TCP header verifies whether an incoming segment contains data confirming receipt of an earlier packet?",
    options: [
      "Sequence Number",
      "Acknowledgment Number",
      "Window Size",
      "Urgent Pointer",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Acknowledgment Number indicates the next expected sequence byte sequence value from the sender, acting as validation for received packets.",
  },
  {
    id: 70,
    question:
      "What layer controls half-duplex vs full-duplex communication logic states at a session level?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Session Layer",
      "Transport Layer",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The Session layer coordinates conversation directions, managing token-based permissions for half-duplex or full-duplex application dialogues.",
  },
  {
    id: 71,
    question:
      "What utility command executes ICMP Traceroute paths to map hop behaviors?",
    options: ["ping", "traceroute / tracert", "arp -a", "netstat"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Traceroute increments TTL fields in consecutive packets, utilizing ICMP Time Exceeded feedback to map every router hop along a path.",
  },
  {
    id: 72,
    question:
      "Which data encoding structure uses structural start/stop bits to control serialization across asynchronous links?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Asynchronous clocking transformations, framing bit synchronization, and raw hardware timing tasks occur inside Layer 1 physical architectures.",
  },
  {
    id: 73,
    question:
      "Which layer parses multi-layer nested fields inside incoming packets to discover destination port values?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Data Link Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Transport Layer processes look at Layer 4 fields to read the source and target application port numbers.",
  },
  {
    id: 74,
    question:
      "What does the 'Sliding Window' system prevent in TCP connections?",
    options: [
      "Routing path loops within the network topology",
      "Intermediary Layer 2 physical conflicts on the segment",
      "A fast sender overwhelming the receiver's processing buffers",
      "Duplicate IP configuration bugs on the destination host",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Sliding windows dynamic feedback limits transmission block sizes to match what the receiving device can safely buffer.",
  },
  {
    id: 75,
    question:
      "What do you call an application data block after it is wrapped with an IP header and an Ethernet header/trailer?",
    options: ["Segment", "Packet", "Frame", "Bit stream"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Once it includes the external Layer 2 Ethernet header and trailer additions, the entire wrapped block is called a Frame.",
  },
  {
    id: 76,
    question:
      "Which protocol stack design is a vendor-neutral model that serves as the official reference standard for open network systems architecture?",
    options: [
      "IBM SNA",
      "TCP/IP Model",
      "OSI Reference Model",
      "Novell NetWare",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Open Systems Interconnection (OSI) reference model was engineered by the ISO to establish universal, vendor-neutral network guidelines.",
  },
  {
    id: 77,
    question:
      "Which layer provides safe network service separation using network interface isolation hooks?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "VLAN framing (802.1Q tagging) provides logical segment isolation at Layer 2 (Data Link).",
  },
  {
    id: 78,
    question: "What happens during decapsulation at the receiving device?",
    options: [
      "Headers are stripped in order from Layer 1 up to Layer 7.",
      "The message is converted directly from a frame to an application object without analysis.",
      "Headers are added to the data block.",
      "The Transport layer calculates a routing metric.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Decapsulation moves from the bottom up, with each layer reading its specific control header, validating it, stripping it, and passing the remaining payload up to the next layer.",
  },
  {
    id: 79,
    question:
      "Which field inside a standard UDP header tracks payload data block size verification?",
    options: ["Checksum", "Length field", "Window size", "Sequence target"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The UDP Length field specifies the total byte length of the UDP header plus the payload data.",
  },
  {
    id: 80,
    question:
      "What layer handles the structural definition of Ethernet MAC addresses?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Physical MAC addresses are handled at the Data Link layer to guide local frame delivery across a shared media segment.",
  },
  {
    id: 81,
    question:
      "Which protocol uses port 22 by default for secure, encrypted terminal sessions?",
    options: ["Telnet", "SSH", "FTP", "HTTPS"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Secure Shell (SSH) operates at the Application layer and uses TCP port 22 to provide secure remote management access.",
  },
  {
    id: 82,
    question:
      "Which layer is responsible for selecting the path that packets will take across multiple networks?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Network layer examines the destination IP address and consults routing tables to make path selection decisions.",
  },
  {
    id: 83,
    question: "What is the PDU of the Network Layer?",
    options: ["Segment", "Packet", "Frame", "Bit"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Protocol Data Unit (PDU) at Layer 3 of the OSI model is a Packet.",
  },
  {
    id: 84,
    question:
      "Which layer of the OSI model defines the type of cable, connector pins, and signal voltages?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The Physical layer (Layer 1) deals with the physical media, connectors, electrical signaling, and bits.",
  },
  {
    id: 85,
    question:
      "What is the primary difference between the OSI model and the TCP/IP model's Application layer?",
    options: [
      "The TCP/IP Application layer also handles Session and Presentation layer functions.",
      "The OSI Application layer handles routing protocols directly at Layer 7.",
      "The TCP/IP model has separate layers for data formatting and encryption.",
      "There is no difference between them; they have identical boundaries in the models.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The TCP/IP model combines the functions of the OSI Application, Presentation, and Session layers into a single Application layer.",
  },
  {
    id: 86,
    question:
      "Which layer adds a trailer containing a Frame Check Sequence (FCS) during encapsulation?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Data Link layer encapsulates packets into frames and appends an FCS trailer to perform error checking on the frame.",
  },
  {
    id: 87,
    question:
      "Which layer uses logical port numbers to identify application processes on host devices?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Application Layer",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Transport layer uses source and destination port numbers to track and direct individual application data streams.",
  },
  {
    id: 88,
    question:
      "What protocol operates at the Transport layer to provide fast, lightweight, best-effort data delivery?",
    options: ["TCP", "UDP", "IP", "ICMP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "User Datagram Protocol (UDP) is a connectionless, low-overhead transport protocol that doesn't guarantee delivery.",
  },
  {
    id: 89,
    question:
      "What is the term used to describe the process of stripping off headers as data moves up the protocol stack?",
    options: [
      "Encapsulation",
      "Decapsulation",
      "De-multiplexing",
      "Fragmentation",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Decapsulation occurs at the receiving host, where each layer removes its corresponding header before passing the data up.",
  },
  {
    id: 90,
    question:
      "Which Layer 2 sublayer communicates directly with the Network layer software above it?",
    options: [
      "Media Access Control (MAC)",
      "Logical Link Control (LLC)",
      "Network Interface Layer",
      "Physical Signaling Sublayer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Logical Link Control (LLC) sublayer acts as an interface between the physical media access methods and the Network layer protocols.",
  },
  {
    id: 91,
    question:
      "Which protocol is an example of an Application layer protocol used to automatically assign IP configurations to hosts?",
    options: ["ARP", "DNS", "DHCP", "ICMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Dynamic Host Configuration Protocol (DHCP) is an application layer service that dynamically allocates network configurations to client nodes.",
  },
  {
    id: 92,
    question:
      "What is the correct 5-layer TCP/IP model order from bottom to top?",
    options: [
      "Physical, Data Link, Network, Transport, Application",
      "Network Access, Internet, Transport, Session, Application",
      "Physical, Internet, Transport, Presentation, Application",
      "Bits, Frames, Packets, Segments, Data",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The modern, updated 5-layer TCP/IP model consists of the Physical, Data Link, Network (or Internet), Transport, and Application layers.",
  },
  {
    id: 93,
    question:
      "Which TCP header flag is used to synchronize sequence numbers during connection establishment?",
    options: ["ACK", "SYN", "FIN", "RST"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The SYN (Synchronize) flag initiates a connection and establishes the initial sequence numbers between hosts.",
  },
  {
    id: 94,
    question:
      "Which layer handles end-to-end flow control, sequencing, and error recovery using acknowledgments?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Transport layer (via TCP) provides reliable connection features like flow control, data sequencing, and error recovery.",
  },
  {
    id: 95,
    question:
      "What type of address is a 48-bit address usually represented in hexadecimal format?",
    options: ["IPv4 Address", "IPv6 Address", "MAC Address", "Port Address"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Media Access Control (MAC) address is a 48-bit physical address burned into a network interface card (NIC).",
  },
  {
    id: 96,
    question:
      "Which layer is responsible for dialogue control and managing token systems between end systems?",
    options: [
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Session layer manages dialogue control, tracking which device can transmit data at a given time using tokens.",
  },
  {
    id: 97,
    question: "Which of the following is considered a Layer 1 device?",
    options: ["Switch", "Router", "Hub / Repeater", "Bridge"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Hubs and repeaters work entirely at the Physical layer (Layer 1) because they handle raw bits and signal amplification without looking at addressing.",
  },
  {
    id: 98,
    question:
      "Which field in an IP header is decremented by routers to prevent infinite routing loops?",
    options: ["TTL (Time to Live)", "Protocol", "Checksum", "Version"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Routers decrement the TTL field by 1; if it hits 0, the packet is dropped, preventing endless packet loops.",
  },
  {
    id: 99,
    question:
      "What is the process called when data from an upper layer is wrapped with control headers as it moves down the stack?",
    options: ["Decapsulation", "Encapsulation", "Multiplexing", "Segmentation"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Encapsulation is the process of adding specific control info headers (and trailers) to data as it moves down the OSI/TCP-IP models.",
  },
  {
    id: 100,
    question:
      "Which layer handles the protocol identification field that describes what is contained inside an Ethernet frame payload?",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Data Link layer frame header uses a Type or Length field (like the EtherType field) to determine which Network layer protocol gets the payload.",
  },
  {
    id: 101,
    question:
      "Which protocol belongs to the Internet layer of the TCP/IP model suite?",
    options: ["UDP", "TCP", "ICMP", "HTTP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Internet Control Message Protocol (ICMP) operates at the Internet layer to provide status feedback and diagnostics.",
  },
];
