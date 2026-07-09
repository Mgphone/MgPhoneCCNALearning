import type { QuizQuestion } from "./types";

export const networkSecurityQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which network topology requires every device to be connected to every other device?",
    options: ["Star", "Bus", "Mesh", "Ring"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In a full-mesh topology every device has a direct connection to every other device, providing high redundancy at the cost of increased cabling and complexity.",
  },
  {
    id: 2,
    question:
      "Which device operates primarily at Layer 2 of the OSI model and uses MAC addresses to forward frames?",
    options: ["Router", "Hub", "Switch", "Repeater"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A standard network switch operates at Layer 2 (Data Link Layer) and builds a MAC address table to intelligently forward frames to specific ports.",
  },
  {
    id: 3,
    question: "What is the primary function of a router in a network?",
    options: [
      "To connect devices within the same local area network (LAN)",
      "To forward data packets between different IP networks based on routing tables",
      "To provide wireless access to endpoints",
      "To block unauthorized traffic entering the network",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Routers operate at Layer 3 (Network Layer) and are responsible for determining the best path and forwarding packets between distinct IP networks/subnets.",
  },
  {
    id: 4,
    question:
      "Which Cisco network architecture design uses a two-tier model consisting only of spine switches and leaf switches?",
    options: [
      "Three-tier hierarchical model",
      "Hub-and-spoke model",
      "Spine-leaf architecture",
      "Collapsed core model",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Spine-leaf architecture is a modern data center topology where every leaf switch connects to every spine switch, offering highly predictable latency and high bandwidth.",
  },
  {
    id: 5,
    question:
      "What is the main advantage of a collapsed core network design over a traditional three-tier design?",
    options: [
      "It eliminates the need for access layer switches",
      "It combines the core and distribution layers into a single device or layer, reducing cost and complexity",
      "It provides higher security by isolating the distribution layer",
      "It allows endpoints to connect directly to the core",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In a collapsed core architecture, the core and distribution layers are combined into a single logical tier, which is cost-effective for small to medium-sized networks.",
  },
  {
    id: 6,
    question:
      "Which physical medium transmits data using pulses of light rather than electrical signals?",
    options: [
      "Unshielded Twisted Pair (UTP)",
      "Coaxial cable",
      "Shielded Twisted Pair (STP)",
      "Fiber-optic cable",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Fiber-optic cables use light to transmit data, making them immune to Electromagnetic Interference (EMI) and capable of covering much longer distances than copper.",
  },
  {
    id: 7,
    question:
      "Which type of fiber-optic cable is best suited for long-distance transmissions (up to tens of kilometers) and uses a laser as a light source?",
    options: [
      "Multimode Fiber (MMF)",
      "Single-mode Fiber (SMF)",
      "Cat 6a Copper",
      "Twinax",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Single-mode Fiber (SMF) has a very small core and uses a single beam of laser light, allowing it to span vast distances without signal degradation.",
  },
  {
    id: 8,
    question:
      "Which connector type is characterized by its small, square form factor and is commonly used with high-density fiber optic patches?",
    options: ["RJ-45", "SC Connector", "ST Connector", "LC Connector"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The LC (Lucent Connector) is a small form-factor fiber optic connector highly prevalent in modern high-density networking equipment like SFP modules.",
  },
  {
    id: 9,
    question:
      "If you need to connect two switches directly to each other using legacy Ethernet copper ports (without auto-MDIX), what kind of cable must you use?",
    options: [
      "Straight-through cable",
      "Rollover cable",
      "Crossover cable",
      "Console cable",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Like devices (switch to switch, router to router, PC to PC) traditionally require a crossover cable to ensure the transmit pins on one end connect to the receive pins on the other.",
  },
  {
    id: 10,
    question:
      "What does the IEEE Power over Ethernet (PoE) standard 802.3at (PoE+) specify as the maximum power delivered by the switch port?",
    options: ["15.4 Watts", "30 Watts", "60 Watts", "100 Watts"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IEEE 802.3at (PoE+) provides up to 30W of DC power per port. 802.3af provides 15.4W, and 802.3bt (UPoE/PoE++) provides 60W to 100W.",
  },
  {
    id: 11,
    question:
      "At which layer of the OSI model does a traditional hardware firewall primarily operate to filter traffic based on IP addresses and ports?",
    options: [
      "Layer 2 - Data Link",
      "Layer 3 and Layer 4 - Network and Transport",
      "Layer 1 - Physical",
      "Layer 7 - Application",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Traditional stateful firewalls inspect Layer 3 (IP addresses) and Layer 4 (TCP/UDP ports) to permit or deny traffic, though Next-Gen Firewalls (NGFWs) can inspect all the way up to Layer 7.",
  },
  {
    id: 12,
    question:
      "What is the PDU (Protocol Data Unit) called at the Transport Layer (Layer 4) of the OSI model?",
    options: ["Frame", "Packet", "Segment", "Bit"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Data is encapsulated into different PDUs depending on the layer: Layer 4 is a Segment (or Datagram for UDP), Layer 3 is a Packet, and Layer 2 is a Frame.",
  },
  {
    id: 13,
    question:
      "Which of the following protocols operates at the Transport Layer and provides reliable, connection-oriented data delivery?",
    options: ["IP", "UDP", "TCP", "ICMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Transmission Control Protocol (TCP) is a connection-oriented protocol that provides reliable delivery, sequencing, and error recovery using a three-way handshake and acknowledgments.",
  },
  {
    id: 14,
    question:
      "Which TCP/IP protocol is used to resolve a known IPv4 address to an unknown MAC address?",
    options: ["DNS", "DHCP", "ARP", "RARP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Address Resolution Protocol (ARP) sends a broadcast request to map a known logical IP address to an unknown physical MAC address on a local segment.",
  },
  {
    id: 15,
    question: "How long is a standard MAC address?",
    options: ["32 bits", "48 bits", "64 bits", "128 bits"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A MAC (Media Access Control) address is 48 bits long, typically written in hexadecimal format (e.g., 00:1A:2B:3C:4D:5E).",
  },
  {
    id: 16,
    question: "In a MAC address, what do the first 24 bits represent?",
    options: [
      "The network subnet",
      "The host identifier",
      "The OUI (Organizationally Unique Identifier)",
      "The serial number of the NIC",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The first 24 bits (3 bytes) of a MAC address act as the OUI, which identifies the vendor or manufacturer of the network interface card (NIC).",
  },
  {
    id: 17,
    question:
      "Which IP address range is designated as 'Private' by RFC 1918 and cannot be routed on the public internet?",
    options: [
      "8.8.8.0 - 8.8.8.255",
      "172.16.0.0 - 172.31.255.255",
      "169.254.0.0 - 169.254.255.255",
      "127.0.0.0 - 127.255.255.255",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "RFC 1918 private ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. The 169.254.x.x range is APIPA, and 127.x.x.x is loopback.",
  },
  {
    id: 18,
    question: "What is the purpose of the IPv4 Subnet Mask?",
    options: [
      "It encrypts the IP payload for security",
      "It determines which part of the IP address is the network portion and which is the host portion",
      "It assigns dynamic IP addresses to endpoints",
      "It identifies the default gateway of the local network",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The subnet mask is a 32-bit number that masks an IP address, dividing it into a network address and a host address.",
  },
  {
    id: 19,
    question:
      "If a Windows host cannot reach a DHCP server, it assigns itself an APIPA address. Which of the following is an APIPA address?",
    options: ["192.168.1.100", "169.254.55.10", "10.0.0.5", "127.0.0.1"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Automatic Private IP Addressing (APIPA) assigns an IP address in the 169.254.0.0/16 range when a DHCP server is unavailable.",
  },
  {
    id: 20,
    question:
      "What destination MAC address is used for a Layer 2 Ethernet broadcast frame?",
    options: [
      "00:00:00:00:00:00",
      "FF:FF:FF:FF:FF:FF",
      "01:00:5E:00:00:01",
      "255.255.255.255",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An Ethernet broadcast frame uses the destination MAC address FF:FF:FF:FF:FF:FF to ensure every switch port in the broadcast domain receives the frame.",
  },
  {
    id: 21,
    question:
      "Which network service translates human-readable domain names (like www.cisco.com) into IP addresses?",
    options: ["DHCP", "NAT", "DNS", "ARP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Domain Name System (DNS) acts like a phonebook for the internet, resolving human-friendly hostnames to machine-readable IP addresses.",
  },
  {
    id: 22,
    question: "Which port number is utilized by the HTTPS protocol by default?",
    options: ["Port 80", "Port 22", "Port 443", "Port 53"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "HTTP Secure (HTTPS) encrypts web traffic using TLS/SSL and operates over TCP port 443 by default.",
  },
  {
    id: 23,
    question: "What is the primary difference between TCP and UDP?",
    options: [
      "UDP is connection-oriented, TCP is connectionless",
      "TCP guarantees data delivery and order, UDP provides best-effort delivery without guarantees",
      "TCP is used exclusively for voice and video traffic",
      "UDP operates at Layer 3, TCP operates at Layer 4",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TCP uses error checking, acknowledgments, and sequencing to ensure reliable delivery. UDP has minimal overhead, no acknowledgments, and is used when speed is prioritized over reliability.",
  },
  {
    id: 24,
    question:
      "In standard subnetting, what does the CIDR notation /24 represent?",
    options: [
      "A subnet mask of 255.255.0.0",
      "A subnet mask of 255.255.255.0",
      "A network with a maximum of 24 hosts",
      "The 24th available subnet in the network",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "CIDR notation (Classless Inter-Domain Routing) indicates the number of continuous binary 1s in the subnet mask. /24 equals 24 ones, which is 255.255.255.0 in dotted decimal.",
  },
  {
    id: 25,
    question:
      "What happens to an IPv4 packet when its TTL (Time To Live) reaches zero?",
    options: [
      "The packet is encrypted",
      "The packet is fragmented",
      "The packet is dropped and an ICMP 'Time Exceeded' message is sent to the source",
      "The packet is broadcast to all neighboring routers",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The TTL field prevents routing loops. Every router decrements the TTL by 1. If it hits 0, the packet is discarded, and the router notifies the sender via ICMP.",
  },
  {
    id: 26,
    question: "Which of the following is a valid IPv6 loopback address?",
    options: ["127.0.0.1", "::1", "FE80::1", "FF02::1"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IPv6 loopback address is consisting of all 0s and a 1 at the end, written as 0:0:0:0:0:0:0:1 or compressed as ::1.",
  },
  {
    id: 27,
    question: "What is the primary role of a Hypervisor in virtualization?",
    options: [
      "To connect physical servers to the local area network",
      "To provide a physical firewall between the host OS and guest OS",
      "To abstract and allocate physical hardware resources to multiple virtual machines",
      "To route traffic between different VLANs",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A hypervisor (or Virtual Machine Monitor) is software that creates and runs virtual machines by dynamically allocating underlying physical hardware (CPU, RAM, storage) to them.",
  },
  {
    id: 28,
    question:
      "What distinguishes a Type 1 Hypervisor from a Type 2 Hypervisor?",
    options: [
      "Type 1 runs directly on the bare-metal hardware, Type 2 runs on top of an existing host operating system",
      "Type 1 only supports Windows VMs, Type 2 only supports Linux VMs",
      "Type 1 is used for containers, Type 2 is used for VMs",
      "Type 1 runs in the cloud, Type 2 runs on-premises",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Type 1 (Bare-metal) hypervisors like VMware ESXi install directly on server hardware for high performance. Type 2 (Hosted) hypervisors like VirtualBox run as an application within a standard OS.",
  },
  {
    id: 29,
    question:
      "Which cloud computing model provides the consumer with networking, storage, and processing hardware, but leaves the user responsible for the OS and applications?",
    options: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "FaaS (Function as a Service)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Infrastructure as a Service (IaaS) provides virtualized computing resources over the internet (e.g., an empty AWS EC2 instance), leaving OS installation and management to the user.",
  },
  {
    id: 30,
    question: "How does a switch build its MAC address table?",
    options: [
      "By examining the destination MAC address of incoming frames",
      "By examining the source MAC address of incoming frames",
      "By sending ARP requests to all connected devices",
      "Through manual configuration by the network administrator only",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Switches dynamically learn MAC addresses by reading the source MAC address of frames entering a port and mapping that MAC address to that specific port in its CAM table.",
  },
  {
    id: 31,
    question:
      "What action does a switch take if it receives a frame destined for a MAC address that is NOT currently in its MAC address table?",
    options: [
      "It drops the frame instantly",
      "It sends an ICMP destination unreachable message",
      "It floods the frame out of all active ports in the same VLAN, except the port it arrived on",
      "It forwards the frame only to the default gateway",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "This is known as 'unknown unicast flooding'. The switch forwards the frame out all other ports so that the intended recipient will hopefully receive it and reply, allowing the switch to learn the location.",
  },
  {
    id: 32,
    question: "Which of the following is an example of an endpoint device?",
    options: [
      "Layer 3 Switch",
      "Wireless LAN Controller (WLC)",
      "VoIP IP Phone",
      "Next-Generation Firewall (NGFW)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "An endpoint is a device at the end of a network link that originates or receives data for a user. PCs, laptops, printers, and IP phones are endpoints. The others are infrastructure devices.",
  },
  {
    id: 33,
    question:
      "What problem does Carrier Sense Multiple Access with Collision Detection (CSMA/CD) solve in legacy half-duplex Ethernet networks?",
    options: [
      "It encrypts passwords passing over the hub",
      "It dynamically assigns IP addresses to avoid conflicts",
      "It detects when two devices transmit simultaneously, causing a collision, and governs how they retransmit",
      "It ensures full-duplex communication over copper wires",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "CSMA/CD allows devices to 'listen' to the wire before transmitting. If a collision occurs, devices send a jam signal and wait a random backoff period before trying again.",
  },
  {
    id: 34,
    question:
      "Modern Ethernet LANs primarily use switches and operate in which duplex mode, effectively eliminating collisions?",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Auto-duplex"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Full-duplex operation allows devices to send and receive data simultaneously on separate wire pairs, eliminating the possibility of collisions.",
  },
  {
    id: 35,
    question:
      "At which layer of the OSI model does a Wireless Access Point (AP) primarily function?",
    options: ["Layer 1 and Layer 2", "Layer 3", "Layer 4", "Layer 7"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "APs bridge wireless 802.11 frames (Layer 1/2) to wired 802.3 Ethernet frames (Layer 1/2). They do not route IP packets natively like a Layer 3 device.",
  },
  {
    id: 36,
    question: "What is the primary function of a Default Gateway?",
    options: [
      "To resolve hostnames to IP addresses",
      "To block malicious traffic from the internet",
      "To provide a route out of the local subnet for traffic destined for remote networks",
      "To assign IP addresses to local hosts dynamically",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "When a host wants to communicate with an IP address outside of its own subnet, it must forward the packet to the MAC address of its default gateway (usually the local router).",
  },
  {
    id: 37,
    question:
      "Which of the following IP addresses is a Class A network address?",
    options: ["192.168.1.0", "172.16.0.0", "10.0.0.0", "224.0.0.0"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Class A networks range from 1.0.0.0 to 126.0.0.0. 10.0.0.0 is a Class A private network. 172.16.x.x is Class B, 192.168.x.x is Class C, and 224.x.x.x is Class D (Multicast).",
  },
  {
    id: 38,
    question:
      "In a /26 IPv4 subnet, how many valid host addresses are available?",
    options: ["14", "30", "62", "64"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A /26 prefix leaves 6 bits for hosts (32 - 26 = 6). 2^6 = 64 total addresses. Subtract 2 (for the network address and broadcast address) equals 62 usable host addresses.",
  },
  {
    id: 39,
    question:
      "Which ICMP message type is used by the ping command to request a response from a target host?",
    options: [
      "Echo Reply",
      "Echo Request",
      "Destination Unreachable",
      "Time Exceeded",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Ping sends an ICMP Echo Request message to a target. If the target is reachable and permits ICMP, it responds with an ICMP Echo Reply.",
  },
  {
    id: 40,
    question:
      "What is the main advantage of using Containers (like Docker) over traditional Virtual Machines?",
    options: [
      "Containers run different operating system kernels on the same host",
      "Containers require less overhead because they share the host system's OS kernel rather than requiring a full guest OS",
      "Containers provide hardware-level virtualization",
      "Containers do not require an IP address",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Containers package the application and its dependencies but share the underlying host OS kernel, making them much more lightweight, faster to boot, and less resource-intensive than VMs.",
  },
  {
    id: 41,
    question:
      "Which port is used by Telnet, an insecure protocol that transmits data in clear text?",
    options: ["21", "22", "23", "25"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Telnet operates on TCP port 23. It has largely been replaced by SSH (Port 22) because SSH provides secure, encrypted communication.",
  },
  {
    id: 42,
    question:
      "When a switch port is configured to connect to an end-user workstation, what VLAN is it typically assigned to?",
    options: [
      "A trunk VLAN",
      "The Native VLAN",
      "An access VLAN",
      "The Management VLAN",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Ports connecting to endpoints (PCs, printers) are configured as access ports and are assigned to a specific access VLAN to segregate broadcast domains.",
  },
  {
    id: 43,
    question: "What defines a Broadcast Domain?",
    options: [
      "A logical division of a network created by a router, where all nodes can reach each other via a Layer 2 broadcast",
      "A network segment where packet collisions can occur",
      "A group of devices sharing the same physical hub",
      "A specific set of IP addresses reserved for multicast",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A broadcast domain includes all devices that will receive a broadcast frame (like an ARP request) sent by any device in that domain. Routers (Layer 3) separate broadcast domains; switches (Layer 2) forward broadcasts.",
  },
  {
    id: 44,
    question:
      "Which of the following best describes 'SaaS' in a cloud computing environment?",
    options: [
      "Providing a virtual machine for a user to install their own database",
      "Providing an environment for developers to build and deploy applications",
      "Delivering a fully functional application over the internet accessible via a web browser (e.g., Office 365, Webex)",
      "Providing raw physical server access in a remote data center",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Software as a Service (SaaS) delivers complete software applications over the internet. The provider manages the hardware, OS, and the application itself.",
  },
  {
    id: 45,
    question:
      "What is the primary function of the Presentation Layer (Layer 6) of the OSI model?",
    options: [
      "Routing data to the correct IP address",
      "Establishing and terminating communication sessions",
      "Formatting, encrypting, and compressing data so the application layer can interpret it",
      "Providing the physical electrical signals on the wire",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Layer 6 ensures data is in a readable format for the application layer. It handles data translation, compression, and encryption/decryption (like TLS/SSL).",
  },
  {
    id: 46,
    question:
      "In the TCP/IP model, which layer maps directly to the OSI model's Network Layer?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Internet Layer",
      "Network Access Layer",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The TCP/IP model has four layers: Application, Transport, Internet, and Network Access. The Internet Layer maps to the OSI Layer 3 (Network Layer) and handles IP routing.",
  },
  {
    id: 47,
    question:
      "Which IEEE 802 standard governs Wi-Fi (Wireless LAN) communications?",
    options: ["802.1Q", "802.3", "802.11", "802.1X"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "IEEE 802.11 is the standard for Wireless Local Area Networks (WLANs). 802.3 is for Ethernet, 802.1Q is for VLAN tagging, and 802.1X is for port-based network access control.",
  },
  {
    id: 48,
    question: "What is the purpose of Auto-MDIX on a Cisco switch?",
    options: [
      "It automatically configures the speed and duplex of a port",
      "It automatically detects the required cable connection type (straight-through vs crossover) and configures the port appropriately",
      "It automatically assigns an IP address to the switch",
      "It dynamically assigns the port to a VLAN based on the device MAC",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Auto-MDIX (Automatic Medium-Dependent Interface Crossover) eliminates the need for crossover cables by electronically swapping the transmit and receive pairs if necessary.",
  },
  {
    id: 49,
    question:
      "Which of the following is a characteristic of a Next-Generation Firewall (NGFW) that is NOT typically found in a traditional stateful firewall?",
    options: [
      "Packet filtering based on IP addresses",
      "Allowing or denying traffic based on TCP port numbers",
      "Intrusion Prevention Systems (IPS) and Application Visibility/Control (AVC)",
      "Network Address Translation (NAT)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "NGFWs go beyond simple Layer 3/4 filtering by adding deep packet inspection, application-level awareness (identifying specific apps, not just ports), integrated IPS, and malware protection.",
  },
  {
    id: 50,
    question:
      "If a host has an IP address of 192.168.10.50 with a subnet mask of 255.255.255.0, what is the broadcast address for this subnet?",
    options: [
      "192.168.10.0",
      "192.168.10.254",
      "192.168.10.255",
      "255.255.255.255",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The subnet mask 255.255.255.0 (/24) indicates the first three octets are the network. The host bits are in the last octet. The broadcast address has all host bits set to 1, resulting in 192.168.10.255.",
  },
  {
    id: 51,
    question:
      "What are the three steps, in order, of the TCP Three-Way Handshake used to establish a connection?",
    options: [
      "SYN, ACK, FIN",
      "SYN, SYN-ACK, ACK",
      "REQ, ACK, DATA",
      "ACK, SYN, SYN-ACK",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "To establish a reliable TCP connection, the client sends a SYN (Synchronize), the server replies with a SYN-ACK (Synchronize-Acknowledge), and the client finishes with an ACK (Acknowledge).",
  },
  {
    id: 52,
    question:
      "Which of the following best describes Variable Length Subnet Masking (VLSM)?",
    options: [
      "Assigning IPv6 addresses dynamically using DHCPv6",
      "Using the same subnet mask for all subnets in a routing domain",
      "Subnetting a subnet to create varying sizes of networks to prevent IP address waste",
      "Translating private IP addresses to public IP addresses",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "VLSM allows network administrators to allocate IP space efficiently by creating subnets of different sizes based on the specific host requirements of each network segment.",
  },
  {
    id: 53,
    question:
      "How long is an IPv6 address, and what format is used to display it?",
    options: [
      "32 bits, Dotted Decimal",
      "64 bits, Hexadecimal",
      "128 bits, Hexadecimal",
      "128 bits, Octal",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "An IPv6 address is 128 bits long and is represented as eight groups of four hexadecimal digits separated by colons.",
  },
  {
    id: 54,
    question:
      "Which of the following is a valid compression of the IPv6 address 2001:0db8:0000:0000:0000:ff00:0042:8329?",
    options: [
      "2001:db8::ff00:42:8329",
      "2001:db8::ff::42:8329",
      "2001:0db8:0:0:0:ff00:42:8329",
      "2001:db8:0000:0000:0000:ff00:42:8329",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "You can omit leading zeros in any hextet (0db8 -> db8, 0042 -> 42), and you can replace a single contiguous block of all-zero hextets with a double colon (::). The double colon can only be used once per address.",
  },
  {
    id: 55,
    question:
      "Which two TCP port numbers are used by the File Transfer Protocol (FTP) for control and data transfer, respectively?",
    options: [
      "Port 20 and Port 21",
      "Port 21 and Port 20",
      "Port 22 and Port 23",
      "Port 69 and Port 21",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "FTP uses TCP port 21 for the control connection (commands and replies) and TCP port 20 for the actual data transfer.",
  },
  {
    id: 56,
    question:
      "Which Data Link sublayer communicates with the Network Layer (Layer 3) and identifies the network protocol being used?",
    options: [
      "Media Access Control (MAC)",
      "Logical Link Control (LLC)",
      "Physical Coding Sublayer (PCS)",
      "Carrier Sense Multiple Access (CSMA)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IEEE 802.2 Logical Link Control (LLC) sublayer acts as an interface between the hardware-focused MAC sublayer and the software-focused Network layer (like IPv4/IPv6).",
  },
  {
    id: 57,
    question:
      "How does the 'traceroute' (or tracert) utility map the path packets take to a destination?",
    options: [
      "By sending a single broadcast packet to all routers",
      "By querying the DNS server for router IP addresses",
      "By intentionally manipulating and incrementing the Time-To-Live (TTL) field in ICMP/UDP packets",
      "By utilizing the TCP Three-Way Handshake",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Traceroute sends packets with a TTL of 1, then 2, then 3. Each router along the path drops the packet when TTL hits 0 and returns an ICMP 'Time Exceeded' message, revealing its IP address to the sender.",
  },
  {
    id: 58,
    question:
      "In wireless networking, what is the difference between an SSID and a BSSID?",
    options: [
      "SSID is for 2.4GHz networks, BSSID is for 5GHz networks",
      "SSID is the human-readable network name, BSSID is the MAC address of the Access Point's radio",
      "SSID is used for encryption, BSSID is used for authentication",
      "SSID is a Layer 3 concept, BSSID is a Layer 4 concept",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Service Set Identifier (SSID) is the network name broadcasted to users (e.g., 'GuestWiFi'). The Basic Service Set Identifier (BSSID) is the unique MAC address of the AP providing that specific network.",
  },
  {
    id: 59,
    question:
      "When subnetting an IPv4 network for point-to-point WAN links between two routers, which subnet mask is the most efficient to prevent IP waste?",
    options: [
      "255.255.255.252 (/30)",
      "255.255.255.248 (/29)",
      "255.255.255.254 (/31)",
      "255.255.255.0 (/24)",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A /30 mask provides exactly 4 IP addresses: 1 network, 1 broadcast, and 2 usable host addresses, which is perfect for connecting exactly two routers. (Note: /31 is also used in modern networks per RFC 3021, but /30 is the classic CCNA answer unless /31 is explicitly specified as supported).",
  },
  {
    id: 60,
    question:
      "In the 2.4 GHz Wi-Fi spectrum, which three channels are considered non-overlapping in North America?",
    options: ["1, 5, 9", "2, 6, 10", "1, 6, 11", "3, 7, 11"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "To prevent adjacent channel interference in the 2.4 GHz band, administrators should use channels 1, 6, and 11, as they are the only channels spaced far enough apart to not overlap.",
  },
  {
    id: 61,
    question:
      "Which cloud computing model provides a fully managed environment (hardware, OS, middleware) so developers can focus solely on deploying their application code?",
    options: [
      "IaaS (Infrastructure as a Service)",
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "On-Premises",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Platform as a Service (PaaS) abstracts away the underlying infrastructure and OS, providing a ready-to-use platform (like AWS Elastic Beanstalk or Heroku) for application development.",
  },
  {
    id: 62,
    question: "What is the function of the TCP Sliding Window mechanism?",
    options: [
      "It encrypts the payload for secure transmission",
      "It provides flow control by allowing the receiver to tell the sender how much unacknowledged data it can accept",
      "It negotiates the highest possible connection speed",
      "It multiplexes multiple applications over a single port",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The TCP window size determines the amount of data a sender can transmit before requiring an acknowledgment. It dynamically scales up or down based on network congestion and receiver buffer limits.",
  },
  {
    id: 63,
    question:
      "Which of the following accurately describes an Autonomous Access Point?",
    options: [
      "It requires a Wireless LAN Controller (WLC) to function",
      "It is a standalone device that handles its own management, security, and data forwarding locally",
      "It uses CAPWAP tunnels to pass all traffic to a central hub",
      "It cannot broadcast an SSID",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Autonomous APs are independent 'fat' access points programmed individually. They do not rely on a centralized WLC, unlike Lightweight Access Points (LAPs).",
  },
  {
    id: 64,
    question:
      "What command is used on a Windows PC to view the local ARP cache?",
    options: ["arp -a", "show arp", "ipconfig /all", "netstat -rn"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'arp -a' command in the Windows (and Linux/macOS) command prompt displays the local ARP table, mapping known IP addresses to their corresponding MAC addresses.",
  },
  {
    id: 65,
    question:
      "Given the IP address 10.1.1.50 with a subnet mask of 255.255.255.248 (/29), what is the Network Address?",
    options: ["10.1.1.0", "10.1.1.48", "10.1.1.50", "10.1.1.55"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A /29 mask has block sizes of 8 in the 4th octet (256 - 248 = 8). The multiples of 8 are 0, 8, 16, 24, 32, 40, 48, 56. The IP 50 falls into the 48 subnet (range is 48 to 55). Therefore, 10.1.1.48 is the network address.",
  },
  {
    id: 66,
    question:
      "Which IPv6 prefix indicates a Global Unicast Address, which is publicly routable on the internet?",
    options: ["FE80::/10", "FF00::/8", "2000::/3", "FC00::/7"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "IPv6 Global Unicast Addresses (GUAs) currently handed out by IANA all begin with a binary 001, which corresponds to the 2000::/3 prefix range.",
  },
  {
    id: 67,
    question: "What does the term 'Dual-Stack' mean in networking?",
    options: [
      "Running two identical switches in a high-availability cluster",
      "Configuring a device with both an IPv4 address and an IPv6 address so it can communicate natively on both networks",
      "Using two default gateways on a single host",
      "Encapsulating IPv6 packets inside IPv4 packets",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Dual-stack means the network interface has both an IPv4 and IPv6 protocol stack enabled, allowing it to process and route both types of traffic simultaneously without tunneling.",
  },
  {
    id: 68,
    question:
      "In the Domain Name System (DNS), what type of record maps a hostname to an IPv6 address?",
    options: ["A Record", "AAAA Record", "CNAME Record", "MX Record"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An 'A' record resolves a name to a 32-bit IPv4 address, while an 'AAAA' (Quad-A) record resolves a name to a 128-bit IPv6 address.",
  },
  {
    id: 69,
    question:
      "How does the Transport Layer (Layer 4) distinguish between different application streams arriving at the same IP address?",
    options: [
      "By using unique MAC addresses",
      "By using VLAN tags",
      "By using source and destination Port Numbers",
      "By using different subnet masks",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Multiplexing is achieved using port numbers. When a packet arrives, the IP address gets it to the right computer, and the port number (e.g., 80 for HTTP, 443 for HTTPS) gets it to the correct application.",
  },
  {
    id: 70,
    question:
      "Which field in the Ethernet frame trailer is used to detect transmission errors?",
    options: [
      "Preamble",
      "EtherType",
      "Frame Check Sequence (FCS)",
      "Start of Frame Delimiter (SFD)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Frame Check Sequence (FCS) uses a Cyclic Redundancy Check (CRC) algorithm. The sending device calculates a value based on the frame data and attaches it. The receiver recalculates it; if they don't match, the frame is corrupted and dropped.",
  },
  {
    id: 71,
    question:
      "Which internal switch forwarding method waits until the entire frame is received and checks the FCS before forwarding it out the destination port?",
    options: [
      "Cut-Through",
      "Fragment-Free",
      "Store-and-Forward",
      "Fast-Forward",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Store-and-forward switching ensures high data integrity by caching the entire frame and checking the FCS for errors. Corrupt frames are discarded. It has higher latency than cut-through.",
  },
  {
    id: 72,
    question:
      "When a router has multiple valid routes to the exact same destination IP network from different routing protocols, how does it choose the best path?",
    options: [
      "Lowest Administrative Distance (AD)",
      "Highest Metric",
      "Longest Prefix Match",
      "Lowest MAC Address",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Administrative Distance is the 'believability' or trustworthiness of a routing protocol. A router will choose a route learned via OSPF (AD 110) over the same route learned via RIP (AD 120).",
  },
  {
    id: 73,
    question:
      "When a router receives a packet and checks its routing table, what criteria is used FIRST to select the correct route if multiple overlapping subnets match the destination IP?",
    options: [
      "Lowest Administrative Distance",
      "Lowest Metric",
      "Longest Prefix Match (Most specific subnet mask)",
      "Highest Interface Bandwidth",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The routing table always prioritizes the Longest Prefix Match (the most specific route). For example, if a packet is destined for 10.1.1.5, a route to 10.1.1.0/24 will be chosen over a route to 10.0.0.0/8, regardless of AD or metric.",
  },
  {
    id: 74,
    question:
      "Which IPv4 address class inherently supports network addresses starting with 128 through 191?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In classful networking, Class A is 1-126, Class B is 128-191, Class C is 192-223, and Class D (Multicast) is 224-239.",
  },
  {
    id: 75,
    question:
      "Why do hubs inherently create a single large collision domain, whereas switches do not?",
    options: [
      "Hubs operate at Layer 2, while switches operate at Layer 1",
      "Hubs use CSMA/CA, switches use CSMA/CD",
      "Hubs repeat incoming electrical signals out all other ports regardless of MAC addresses, operating at half-duplex",
      "Hubs strip the VLAN tags from frames",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A hub is a Layer 1 multiport repeater. Any signal received on one port is blindly flooded out all others. Because they operate at half-duplex, if two devices send simultaneously, a collision occurs. Switches dedicate bandwidth per port.",
  },
  {
    id: 76,
    question:
      "In a Power over Ethernet (PoE) ecosystem, what is the term for the switch providing the power?",
    options: [
      "Powered Device (PD)",
      "Power Sourcing Equipment (PSE)",
      "Midspan Injector",
      "Root Bridge",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Power Sourcing Equipment (PSE) is the switch or injector that delivers the power. The endpoint receiving the power (like an IP Phone or Camera) is the Powered Device (PD).",
  },
  {
    id: 77,
    question:
      "Which type of cloud computing deployment is owned and operated exclusively for a single organization?",
    options: [
      "Public Cloud",
      "Hybrid Cloud",
      "Private Cloud",
      "Community Cloud",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Private Cloud is dedicated entirely to one business or organization. It can be hosted on-premises in their own data center or by a third-party service provider, but the resources are not shared.",
  },
  {
    id: 78,
    question:
      "In server virtualization, what is the function of a vSwitch (Virtual Switch)?",
    options: [
      "It connects physical routers to the ISP",
      "It logically connects Virtual Machines within the hypervisor to each other and maps them to physical network adapters",
      "It provides routing between different hypervisors",
      "It acts as a physical hardware replacement for Top-of-Rack switches",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A virtual switch exists inside the hypervisor's software. VMs connect to the vSwitch, which then utilizes the physical server's Network Interface Cards (NICs) to send traffic out to the physical network.",
  },
  {
    id: 79,
    question:
      "If you borrow 3 bits from the host portion of an IPv4 address to create subnets, how many valid subnets do you create?",
    options: ["4", "6", "8", "16"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The formula for calculating the number of subnets is 2^n, where 'n' is the number of borrowed bits. 2^3 = 8 subnets.",
  },
  {
    id: 80,
    question:
      "When troubleshooting network connectivity on a PC, what does a successful ping to 127.0.0.1 indicate?",
    options: [
      "The default gateway is reachable",
      "The DNS server is functioning correctly",
      "The PC's internal TCP/IP protocol stack is installed and functioning properly",
      "The physical network cable is plugged in",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "127.0.0.1 is the IPv4 loopback address. Pinging it does not send traffic onto the physical wire; it simply routes traffic down the local TCP/IP stack and back up, verifying the local software configuration.",
  },
  {
    id: 81,
    question:
      "Which of the following is true regarding IPv6 Link-Local addresses?",
    options: [
      "They are routed across the global internet",
      "They are only valid for communications within a single local subnet/broadcast domain and are not forwarded by routers",
      "They are manually assigned by the ISP",
      "They begin with the prefix FC00::/7",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Link-Local addresses (FE80::/10) are used for neighbor discovery and local segment communication. A router will never forward a packet with a Link-Local source or destination address off the local link.",
  },
  {
    id: 82,
    question: "Which widely used email protocol operates on TCP Port 25?",
    options: ["POP3", "IMAP", "SMTP", "SNMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Simple Mail Transfer Protocol (SMTP) uses TCP port 25 for sending and relaying email. POP3 (Port 110) and IMAP (Port 143) are used to receive email.",
  },
  {
    id: 83,
    question:
      "What is the primary difference between an SFP transceiver and an SFP+ transceiver?",
    options: [
      "SFP uses copper, SFP+ uses fiber",
      "SFP supports 1 Gbps, while SFP+ supports 10 Gbps",
      "SFP operates at Layer 2, SFP+ operates at Layer 3",
      "SFP is single-mode only, SFP+ is multimode only",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Small Form-factor Pluggable (SFP) optics are standardly used for 1 Gigabit Ethernet links. The enhanced version, SFP+, shares the exact same physical size but supports 10 Gigabit Ethernet speeds.",
  },
  {
    id: 84,
    question:
      "When a wireless client moves from the coverage area of one Access Point to another within the same SSID, what process occurs?",
    options: ["Fragmentation", "Roaming", "Beaconing", "Subnetting"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Roaming is the process where a wireless client seamlessly disconnects from a weaker Access Point and associates with a stronger Access Point sharing the same SSID and security settings, ideally without interrupting applications.",
  },
  {
    id: 85,
    question:
      "When a client computer initiates a web request to a server on port 443, what source port does the client typically use?",
    options: [
      "Port 80",
      "Port 443",
      "A randomly generated Ephemeral Port (typically between 49152 and 65535)",
      "Port 21",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "While the destination port is well-known (443 for HTTPS), the client's OS generates a temporary, random high-numbered source port (an ephemeral port) so it can track the return traffic specifically to that browser session.",
  },
  {
    id: 86,
    question:
      "In a Small Office/Home Office (SOHO) environment, the primary 'router' usually performs all the following functions EXCEPT:",
    options: [
      "Routing traffic via NAT",
      "Running the Border Gateway Protocol (BGP) with the ISP",
      "Acting as a DHCP server",
      "Providing a Wireless Access Point",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SOHO routers are multi-function devices (Router, Switch, AP, Firewall). However, they rely on a simple default static route to the ISP. They do not run complex exterior gateway protocols like BGP.",
  },
  {
    id: 87,
    question:
      "Which OSI layer is responsible for determining the best logical path for a packet to travel through an internetwork?",
    options: [
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport",
      "Layer 5 - Session",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Network Layer (Layer 3) handles logical IP addressing and utilizes routing protocols to determine the best path to a destination network.",
  },
  {
    id: 88,
    question:
      "What is the primary operational difference between UDP and TCP regarding reliability?",
    options: [
      "UDP requires a 3-way handshake, TCP does not",
      "UDP acknowledges every packet, TCP acknowledges every 10 packets",
      "TCP is connection-oriented and provides sequencing and acknowledgments; UDP is connectionless and best-effort",
      "UDP encrypts the data by default, TCP does not",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "TCP is highly reliable due to error-checking and retransmissions. UDP is 'fire-and-forget', providing fast transmission with less overhead, making it ideal for real-time voice and video.",
  },
  {
    id: 89,
    question:
      "Which of the following is considered a Layer 7 (Application) protocol?",
    options: ["IPsec", "OSPF", "HTTP", "ICMP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Hypertext Transfer Protocol (HTTP) operates at the Application Layer (Layer 7), providing the interface for web browsers to retrieve documents from web servers.",
  },
  {
    id: 90,
    question: "In an IPv4 header, what is the purpose of the 'Protocol' field?",
    options: [
      "To identify the version of IP being used (IPv4 vs IPv6)",
      "To identify the upper-layer payload encapsulated within the packet (e.g., 6 for TCP, 17 for UDP)",
      "To establish the priority of the packet for QoS",
      "To prevent routing loops",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Protocol field in the IPv4 header tells the receiving router or host which Transport Layer protocol (like TCP, UDP, ICMP, or OSPF) is encapsulated in the payload so it can be handed off correctly.",
  },
  {
    id: 91,
    question:
      "Which standard defines the method for tagging Ethernet frames with VLAN information?",
    options: ["IEEE 802.1Q", "IEEE 802.3ad", "IEEE 802.11ac", "IEEE 802.1X"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "IEEE 802.1Q (often called Dot1Q) is the networking standard that supports Virtual LANs (VLANs) by inserting a 4-byte tag into the Ethernet frame header on trunk links.",
  },
  {
    id: 92,
    question:
      "When a switch forwards a broadcast frame, what happens to the TTL (Time-To-Live) field?",
    options: [
      "It is decremented by 1",
      "It is set to 255",
      "It remains unchanged",
      "Switches do not forward broadcast frames",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The TTL field is a Layer 3 (IP) construct. A Layer 2 switch forwarding a frame does not inspect or modify the Layer 3 IP header; therefore, the TTL remains completely unchanged.",
  },
  {
    id: 93,
    question:
      "What network service allows private, non-routable IP addresses to access the public internet by translating them to a public IP address?",
    options: ["DHCP", "NAT", "DNS", "ARP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Network Address Translation (NAT) operates on edge routers or firewalls to translate private internal IP addresses into a globally unique public IP address before traffic leaves the network.",
  },
  {
    id: 94,
    question:
      "Which of the following describes a 'Late Collision' in an Ethernet network?",
    options: [
      "A collision occurring before the first 64 bytes of the frame have been transmitted",
      "A collision occurring after the first 64 bytes of the frame have been transmitted",
      "A collision caused by a switch dropping a frame due to a full buffer",
      "A collision occurring on a full-duplex link",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In half-duplex CSMA/CD, normal collisions happen early. A late collision occurs after the 64-byte mark, almost always indicating a cabling error (cable too long) or a duplex mismatch (one side full, one side half).",
  },
  {
    id: 95,
    question:
      "Which IPv6 multicast address is used to reach all nodes (hosts and routers) on the local link?",
    options: ["FF02::1", "FF02::2", "FF02::5", "FF02::A"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "FF02::1 is the 'All-Nodes' multicast address, which effectively replaces the IPv4 subnet broadcast address. FF02::2 is the 'All-Routers' multicast address.",
  },
  {
    id: 96,
    question:
      "In a Spine-Leaf topology, why is the latency between any two endpoints highly predictable?",
    options: [
      "Because all traffic passes through a single core router",
      "Because every leaf switch is exactly one hop away from every other leaf switch via the spine",
      "Because Spanning Tree Protocol (STP) disables redundant links",
      "Because the distance is limited to 100 meters",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The full-mesh nature of Spine-Leaf means traffic from a server on Leaf A only has to go up to a Spine switch and down to Leaf B. This consistent 2-hop journey ensures predictable latency (East-West traffic).",
  },
  {
    id: 97,
    question:
      "What is the primary function of the Presentation Layer in the OSI model?",
    options: [
      "Establishing network connections",
      "Physical transmission of bits",
      "Data formatting, compression, and encryption/decryption",
      "Assigning logical IP addresses",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Layer 6 (Presentation) ensures that data sent from the Application layer of one system can be read by the Application layer of another. It handles syntax, translation (like ASCII to EBCDIC), encryption, and compression.",
  },
  {
    id: 98,
    question:
      "When comparing a Type 1 and Type 2 hypervisor, which scenario specifically requires a Type 2 hypervisor?",
    options: [
      "Deploying high-performance enterprise virtual machines in a data center",
      "Running a virtual machine on a user's personal laptop that already has Windows 11 installed",
      "Creating a Private Cloud infrastructure",
      "Running containers using Docker",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Type 2 hypervisors (like VirtualBox or VMware Workstation) run as an application on top of a host operating system. They are ideal for end-users running VMs on their personal machines. Type 1 hypervisors replace the host OS.",
  },
  {
    id: 99,
    question:
      "If a switch port is experiencing a large number of CRC (Cyclic Redundancy Check) errors in its interface statistics, what is the most likely cause?",
    options: [
      "The switch MAC address table is full",
      "A physical Layer 1 issue, such as a faulty cable, electromagnetic interference, or bad transceiver",
      "An incorrect IP subnet mask on the connected PC",
      "A routing protocol misconfiguration",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "CRC errors mean the frames are arriving corrupted. Because this is a Data Link/Physical layer check, it almost always points to bad physical media (cables, ports, interference, or duplex mismatches) rather than logical IP errors.",
  },
  {
    id: 100,
    question:
      "Which networking model uses a central orchestrator to provision, monitor, and manage the forwarding behavior of network devices via APIs?",
    options: [
      "Traditional 3-Tier Architecture",
      "Software-Defined Networking (SDN)",
      "Peer-to-Peer Networking",
      "Hub-and-Spoke Topology",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SDN separates the control plane from the data plane. A centralized controller uses APIs to communicate with and program the forwarding tables of the underlying hardware devices.",
  },
];
