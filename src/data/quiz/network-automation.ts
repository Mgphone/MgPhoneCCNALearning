import type { QuizQuestion } from "./types";

export const networkAutomationQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "What is a key characteristic of a controller-based (SDN) network architecture?",
    options: [
      "Each network device makes independent forwarding decisions",
      "A central controller provides a global view and programs forwarding tables on devices",
      "Routing protocols are replaced by static routes only",
      "All network devices must be from the same vendor",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In SDN (Software-Defined Networking), a centralized controller has a global view of the network and programs forwarding rules on switches/routers, separating the control plane from the data plane.",
  },
  {
    id: 2,
    question:
      "Which interface is used for communication between the SDN controller and the network infrastructure devices?",
    options: [
      "Northbound Interface (NBI)",
      "Westbound Interface",
      "Eastbound Interface",
      "Southbound Interface (SBI)",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Southbound APIs (like OpenFlow or NETCONF) facilitate communication between the SDN controller and the physical or virtual network devices (the data plane).",
  },
  {
    id: 3,
    question:
      "What is the primary function of a Northbound API in a software-defined architecture?",
    options: [
      "To connect the SDN controller to external management applications and orchestration systems",
      "To push configuration directly to legacy switches",
      "To establish OSPF neighbor adjacencies",
      "To encrypt data plane traffic",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Northbound APIs (often RESTful APIs) allow the SDN controller to communicate with higher-level applications, management platforms, and orchestration tools.",
  },
  {
    id: 4,
    question:
      "Which automation configuration management tool uses a push-based model and does not require an agent to be installed on the managed devices?",
    options: ["Puppet", "Chef", "Ansible", "SaltStack"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Ansible uses an agentless, push-based architecture, typically communicating with managed network devices over SSH.",
  },
  {
    id: 5,
    question:
      "In a Cisco Spine-and-Leaf architecture, which statement is true regarding device connectivity?",
    options: [
      "Leaf switches connect directly to other leaf switches",
      "Spine switches connect directly to other spine switches",
      "Every leaf switch connects to every spine switch",
      "Endpoints connect directly to the spine switches",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In a spine-and-leaf topology, every leaf switch is connected to every spine switch. Endpoints connect to the leaf switches, and leaf switches never connect directly to each other.",
  },
  {
    id: 6,
    question:
      "When converting a MAC address to an IPv6 EUI-64 interface ID, what specific bit-level modification occurs?",
    options: [
      "The 7th bit of the MAC address is inverted (flipped)",
      "The 8th bit of the MAC address is inverted (flipped)",
      "The 1st bit of the MAC address is set to 1",
      "The last bit of the MAC address is set to 0",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "To create an EUI-64 interface ID, FFFE is inserted into the middle of the 48-bit MAC address, and the 7th bit (the Universal/Local bit) of the first byte is flipped.",
  },
  {
    id: 7,
    question: "Which IPv6 prefix is designated for Link-Local addresses?",
    options: ["FC00::/7", "FE80::/10", "2000::/3", "FF00::/8"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IPv6 Link-Local addresses, which are required on every IPv6-enabled interface and used for local segment communication, always begin with the prefix FE80::/10.",
  },
  {
    id: 8,
    question: "What is the primary function of Dynamic ARP Inspection (DAI)?",
    options: [
      "To automatically assign IP addresses to hosts based on their MAC addresses",
      "To validate ARP packets in a network and intercept invalid ARP requests and responses",
      "To prevent unauthorized DHCP servers from operating on the network",
      "To block unauthorized traffic entering a Layer 3 interface",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DAI intercepts, logs, and discards ARP packets with invalid MAC-to-IP address bindings, protecting against ARP spoofing and poisoning. It relies on the DHCP snooping binding database.",
  },
  {
    id: 9,
    question:
      "When configuring DHCP Snooping, what is the default trust state of all switch ports?",
    options: ["Trusted", "Untrusted", "Desirable", "Auto"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, all interfaces are configured as untrusted when DHCP snooping is enabled. Ports connected to legitimate DHCP servers must be explicitly configured as trusted.",
  },
  {
    id: 10,
    question:
      "In Port Security, what happens when a port is configured with the violation mode 'restrict' and a violation occurs?",
    options: [
      "The port shuts down and goes into an err-disabled state",
      "The switch drops the traffic, generates a syslog message, and increments the violation counter",
      "The switch drops the traffic silently without incrementing any counters",
      "The switch forwards the traffic but logs a warning message",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In 'restrict' mode, unauthorized frames are dropped, a syslog message is sent, and the violation counter increments. Unlike 'shutdown' mode, the port remains up.",
  },
  {
    id: 11,
    question:
      "Which command correctly applies a named extended Access Control List (ACL) called 'BLOCK_WEB' inbound on an interface?",
    options: [
      "ip access-list BLOCK_WEB in",
      "ip access-group BLOCK_WEB in",
      "access-class BLOCK_WEB in",
      "apply acl BLOCK_WEB inbound",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ip access-group [name] [in/out]' command is used in interface configuration mode to apply an IPv4 ACL to an interface.",
  },
  {
    id: 12,
    question:
      "According to Cisco best practices, where should a Standard IPv4 ACL be placed?",
    options: [
      "As close to the source as possible",
      "As close to the destination as possible",
      "On the core routers only",
      "On the switch virtual interfaces (SVIs) only",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Standard ACLs filter based only on the source IP address. Placing them too close to the source could inadvertently block traffic intended for other, permitted destinations. Therefore, they should be placed as close to the destination as possible.",
  },
  {
    id: 13,
    question:
      "Which of the following components are used by EIGRP in its default metric calculation?",
    options: [
      "Bandwidth and Load",
      "Delay and Reliability",
      "Bandwidth and Delay",
      "Hop count and Bandwidth",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "By default, EIGRP uses only Bandwidth (slowest link in the path) and Delay (cumulative delay of the path) to calculate its metric (K1 and K3).",
  },
  {
    id: 14,
    question: "In EIGRP terminology, what is a Feasible Successor?",
    options: [
      "The primary route with the lowest metric to a destination",
      "A backup route that meets the feasibility condition",
      "A router that redistributes routes into EIGRP",
      "The metric value of the primary path",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Feasible Successor is a backup route that is guaranteed to be loop-free because its Advertised Distance (AD) is less than the Feasible Distance (FD) of the Successor (primary) route.",
  },
  {
    id: 15,
    question:
      "When establishing an OSPF adjacency, what is the purpose of the Hello packet?",
    options: [
      "To send the complete link-state database to a new neighbor",
      "To discover neighbors, establish adjacencies, and maintain keepalives",
      "To request specific link-state records from a neighbor",
      "To acknowledge the receipt of an LSU",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "OSPF Hello packets are sent periodically to discover neighbors, negotiate adjacency parameters, and act as keepalives to ensure the neighbor is still active.",
  },
  {
    id: 16,
    question:
      "On a multi-access network (like Ethernet), how does OSPF determine which router becomes the Designated Router (DR)?",
    options: [
      "The router with the highest OSPF priority, followed by the highest Router ID",
      "The router with the lowest OSPF priority, followed by the lowest MAC address",
      "The router with the highest loopback IP address only",
      "The router that sends the first Hello packet",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The DR election is won by the router with the highest OSPF interface priority (default is 1). If priorities tie, the router with the highest OSPF Router ID wins.",
  },
  {
    id: 17,
    question:
      "Which protocol is an IEEE standard used for negotiating EtherChannel bundles?",
    options: ["PAgP", "VTP", "LACP", "STP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "LACP (Link Aggregation Control Protocol) is the IEEE 802.3ad standard for bundling links. PAgP is Cisco-proprietary.",
  },
  {
    id: 18,
    question:
      "What is the default load-balancing method used by EtherChannel on Cisco Catalyst switches?",
    options: [
      "Source IP address",
      "Destination IP address",
      "Source MAC address",
      "Destination port number",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "By default, most Cisco Catalyst switches use the source MAC address (src-mac) to determine which physical link in the EtherChannel bundle a frame will traverse.",
  },
  {
    id: 19,
    question:
      "Which DTP (Dynamic Trunking Protocol) mode will actively attempt to convert a link into a trunk?",
    options: ["Access", "Dynamic Auto", "Dynamic Desirable", "Nonegotiate"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Dynamic Desirable actively sends DTP negotiation frames to the other side to form a trunk. Dynamic Auto will form a trunk only if the other side initiates it.",
  },
  {
    id: 20,
    question: "What is the primary benefit of VTP Pruning?",
    options: [
      "It prevents loops in the Layer 2 topology",
      "It limits unnecessary broadcast, multicast, and unknown unicast traffic across trunk links",
      "It automatically assigns IP addresses to VLAN interfaces",
      "It encrypts VLAN traffic between switches",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VTP pruning reduces unnecessary bandwidth consumption on trunk links by blocking broadcast and unknown unicast traffic for VLANs that do not have active ports on the receiving switch.",
  },
  {
    id: 21,
    question:
      "When troubleshooting an IPv4 static route, you notice the route is not in the routing table. The command used was 'ip route 192.168.1.0 255.255.255.0 10.0.0.2'. What is the most likely reason?",
    options: [
      "The administrative distance of static routes is too high",
      "The next-hop IP address (10.0.0.2) is not reachable or the interface is down",
      "Static routes require a routing protocol to be active",
      "The command syntax is incorrect",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A static route will only be installed in the routing table if the outgoing interface is up/up and the next-hop IP address is reachable. If 10.0.0.2 is unreachable, the route is suppressed.",
  },
  {
    id: 22,
    question:
      "What is the purpose of the 'ip default-gateway' command on a Layer 2 switch?",
    options: [
      "To enable IP routing on the switch",
      "To allow hosts connected to the switch to reach the internet",
      "To allow the switch itself to be managed from a remote network",
      "To route traffic between different VLANs",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A Layer 2 switch requires a default gateway so that management traffic (like SSH, SNMP, or Syslog) originating from the switch's SVI can be routed to destinations outside its local subnet.",
  },
  {
    id: 23,
    question:
      "Which Spanning Tree feature immediately transitions an access port into the forwarding state, bypassing listening and learning states?",
    options: ["BPDU Guard", "PortFast", "UplinkFast", "Root Guard"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "PortFast is configured on ports connected to end devices (like PCs or servers) to bypass the 30-second STP listening/learning phases, allowing immediate network access.",
  },
  {
    id: 24,
    question:
      "What happens if a port configured with both PortFast and BPDU Guard receives a BPDU?",
    options: [
      "The switch drops the BPDU and leaves the port forwarding",
      "The port becomes the new root port",
      "The port transitions into an err-disabled state",
      "The port transitions back to the STP listening state",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "BPDU Guard protects the spanning-tree domain by immediately placing a PortFast-enabled port into an err-disabled state if it receives a BPDU, preventing accidental loops from rogue switches.",
  },
  {
    id: 25,
    question:
      "In standard JSON data formatting, what characters are used to enclose a JSON object?",
    options: [
      "Square brackets [ ]",
      "Curly braces { }",
      "Angle brackets < >",
      "Parentheses ( )",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In JSON, objects (which consist of key/value pairs) are enclosed in curly braces { }, while arrays are enclosed in square brackets [ ].",
  },
  {
    id: 26,
    question:
      "What administrative distance is assigned to an external EIGRP route by default?",
    options: ["90", "110", "120", "170"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Internal EIGRP routes have a default administrative distance (AD) of 90, while external EIGRP routes (redistributed into EIGRP) have an AD of 170.",
  },
  {
    id: 27,
    question:
      "Which IPv6 transition mechanism embeds an IPv4 address inside an IPv6 address for tunneling over an IPv4 network?",
    options: ["NAT64", "6to4 tunneling", "ISATAP", "Dual-stack"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "6to4 tunneling is a mechanism that automatically embeds a site's IPv4 address within the 2002::/16 IPv6 prefix to allow IPv6 islands to communicate over an IPv4 network.",
  },
  {
    id: 28,
    question:
      "What is the purpose of the 'spanning-tree vlan 10 root primary' command?",
    options: [
      "It disables STP on VLAN 10",
      "It sets the switch's priority to a low value to ensure it becomes the root bridge for VLAN 10",
      "It statically hardcodes the bridge priority to 0",
      "It forces VLAN 10 to use RSTP instead of PVST+",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "This command runs a macro that lowers the switch's STP priority for VLAN 10 significantly below the current root bridge's priority, attempting to make it the new root.",
  },
  {
    id: 29,
    question:
      "Which command verifies that a switch is successfully performing Inter-VLAN routing via an SVI?",
    options: [
      "show vlan brief",
      "show ip route",
      "show interface trunk",
      "show mac address-table",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "To verify Inter-VLAN routing (Layer 3), you must check the routing table using 'show ip route' to ensure the connected subnets for the SVIs are present.",
  },
  {
    id: 30,
    question:
      "Which field in an IPv4 packet header is decremented by 1 every time the packet passes through a router?",
    options: [
      "Header Checksum",
      "Time to Live (TTL)",
      "Fragment Offset",
      "Differentiated Services",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The TTL field prevents routing loops by ensuring packets do not circulate indefinitely. When it reaches 0, the router discards the packet.",
  },
  {
    id: 31,
    question: "What mechanism does TCP use to handle flow control?",
    options: [
      "Three-way handshake",
      "Windowing",
      "Sequence numbers",
      "Port numbers",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TCP uses sliding windows (windowing) for flow control, allowing the receiver to tell the sender how much data it can accept before an acknowledgment is required.",
  },
  {
    id: 32,
    question:
      "Which wireless security protocol uses the CCMP encryption protocol based on the AES algorithm?",
    options: ["WEP", "WPA", "WPA2", "TKIP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "WPA2 replaced WPA and uses the Advanced Encryption Standard (AES) combined with CCMP to provide strong security for wireless networks.",
  },
  {
    id: 33,
    question:
      "In a traditional network, which plane is responsible for building the routing and MAC address tables?",
    options: [
      "Data Plane",
      "Control Plane",
      "Management Plane",
      "Forwarding Plane",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Control Plane is responsible for the intelligence of the network, executing routing protocols like OSPF and building the necessary tables used by the data plane.",
  },
  {
    id: 34,
    question:
      "Which data encoding format uses tags enclosed in angle brackets and is widely used for NETCONF?",
    options: ["JSON", "YAML", "XML", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "XML (eXtensible Markup Language) uses tags (like <name>Router1</name>) and is the default encoding format used by the NETCONF automation protocol.",
  },
  {
    id: 35,
    question:
      "What occurs if you apply an access control list to an interface but the ACL contains no 'permit' statements?",
    options: [
      "All traffic is permitted by default",
      "Only management traffic is permitted",
      "All traffic is denied due to the implicit deny at the end of the ACL",
      "The router ignores the ACL",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Every ACL has an invisible 'implicit deny all' rule at the very end. If an ACL has no 'permit' statements, it will drop all traffic passing through the interface in that direction.",
  },
  {
    id: 36,
    question: "Which MAC address is a well-known IPv4 multicast MAC address?",
    options: [
      "FF:FF:FF:FF:FF:FF",
      "01:00:5E:00:00:05",
      "00:00:0C:07:AC:01",
      "33:33:00:00:00:01",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IPv4 multicast MAC addresses always begin with 01:00:5E. The OUI 00:00:0C belongs to Cisco (HSRP), 33:33 is for IPv6 multicast, and FF:FF:FF:FF:FF:FF is broadcast.",
  },
  {
    id: 37,
    question: "What command is used to configure an IPv6 default static route?",
    options: [
      "ipv6 route 0.0.0.0 0.0.0.0 [next-hop]",
      "ipv6 route ::/0 [next-hop]",
      "ipv6 route any any [next-hop]",
      "ip route ::/0 [next-hop]",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The IPv6 equivalent of the IPv4 default route (0.0.0.0 0.0.0.0) is ::/0, representing all possible IPv6 addresses.",
  },
  {
    id: 38,
    question: "How does OSPF calculate the cost of a link?",
    options: [
      "Reference bandwidth divided by interface bandwidth",
      "Cumulative delay added to lowest bandwidth",
      "Hop count to the destination",
      "Reliability divided by interface load",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "OSPF cost is determined by dividing the reference bandwidth (default 100 Mbps) by the interface's actual bandwidth. FastEthernet and GigabitEthernet both default to a cost of 1 unless the reference bandwidth is adjusted.",
  },
  {
    id: 39,
    question:
      "In Network Address Translation (NAT), what does the term 'Inside Global' refer to?",
    options: [
      "The private IP address of the host on the local network",
      "The public IP address assigned to the host as it reaches the internet",
      "The public IP address of the destination server on the internet",
      "The private IP address of the destination server",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Inside Global is the legitimate, routable public IP address that represents one or more inside local IP addresses to the outside world.",
  },
  {
    id: 40,
    question:
      "Which STP port state actively populates the MAC address table but does not yet forward user data frames?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In the Learning state, the switch begins analyzing source MAC addresses from received frames to populate its CAM table, preparing for the Forwarding state.",
  },
  {
    id: 41,
    question:
      "When configuring a trunk port, which VLAN is untagged by default across the trunk link?",
    options: [
      "VLAN 1002",
      "The Native VLAN (default VLAN 1)",
      "The Management VLAN",
      "All active VLANs are tagged",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By standard 802.1Q operation, frames belonging to the Native VLAN are sent across a trunk link without a VLAN tag. By default on Cisco switches, this is VLAN 1.",
  },
  {
    id: 42,
    question: "Which of the following describes an 'Anycast' IPv6 address?",
    options: [
      "An address that sends traffic to a single specific host",
      "An address that sends traffic to all hosts on the local subnet",
      "An address assigned to multiple devices; traffic is routed to the nearest device",
      "An address used exclusively for loopback testing",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Anycast addresses are assigned to multiple interfaces (usually on different routers). A packet sent to an anycast address is delivered to the closest interface based on routing metrics.",
  },
  {
    id: 43,
    question:
      "If a switch receives a frame with a destination MAC address that is not in its MAC address table, what action does it take?",
    options: [
      "Drops the frame",
      "Floods the frame out of all ports except the receiving port",
      "Sends an ARP request to find the destination MAC",
      "Forwards the frame only to the default gateway",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "When a switch encounters an unknown unicast frame, it floods the frame out all active interfaces in that VLAN except the interface on which it was received.",
  },
  {
    id: 44,
    question:
      "Which REST API HTTP method is typically used to update an existing resource or create one if it doesn't exist?",
    options: ["GET", "POST", "PUT", "PATCH"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The PUT method is idempotent and is used to fully replace a resource at a specific URI or create it if it does not already exist. PATCH is used for partial updates.",
  },
  {
    id: 45,
    question:
      "What determines the Root Bridge election in Rapid Spanning Tree Protocol (RSTP)?",
    options: [
      "Highest Bridge ID",
      "Lowest Bridge ID",
      "Highest MAC address",
      "Lowest port cost",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Both STP and RSTP elect the Root Bridge based on the lowest Bridge ID, which is a combination of the Bridge Priority and the MAC address.",
  },
  {
    id: 46,
    question:
      "You have a subnet of 192.168.10.0/28. How many usable host IP addresses are available in this subnet?",
    options: ["14", "16", "30", "32"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A /28 subnet leaves 4 bits for hosts (32 - 28 = 4). 2^4 = 16 total IPs. Subtract 2 (network and broadcast addresses) leaves 14 usable host IPs.",
  },
  {
    id: 47,
    question:
      "Which protocol provides a secure, encrypted connection for remote CLI administration of a router?",
    options: ["Telnet", "HTTP", "TFTP", "SSH"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Secure Shell (SSH) encrypts network traffic and provides secure remote CLI access, replacing the insecure, clear-text Telnet protocol.",
  },
  {
    id: 48,
    question:
      "In wireless networking, what is the role of a WLC (Wireless LAN Controller)?",
    options: [
      "To act as a standalone access point",
      "To centralize the management and configuration of Lightweight Access Points (LAPs)",
      "To encrypt data traversing the wired network",
      "To provide PoE (Power over Ethernet) to access points",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A WLC manages multiple Lightweight Access Points (LAPs), handling configurations, security policies, roaming, and radio frequency management centrally.",
  },
  {
    id: 49,
    question:
      "When applying a named standard ACL, which parameter is evaluated to determine if traffic is permitted or denied?",
    options: [
      "Source IP address only",
      "Destination IP address only",
      "Both Source and Destination IP addresses",
      "TCP/UDP port numbers",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Standard ACLs (numbered 1-99 or named standard) can only match and filter traffic based on the source IP address.",
  },
  {
    id: 50,
    question:
      "Which switching mechanism is the most efficient and is used by default on modern Cisco Catalyst switches?",
    options: [
      "Process Switching",
      "Fast Switching",
      "Cisco Express Forwarding (CEF)",
      "Cut-Through Switching",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "CEF is a hardware-based switching topology that pre-computes the routing table (FIB) and Layer 2 MAC address resolution (Adjacency Table), making it the fastest and default method on modern Cisco devices.",
  },
  {
    id: 51,
    question:
      "How does PVST+ (Per-VLAN Spanning Tree Plus) modify the Bridge ID to accommodate multiple VLANs without requiring a unique MAC address for each?",
    options: [
      "It uses a completely different 64-bit MAC address for each VLAN",
      "It embeds the VLAN ID into the System ID Extension field",
      "It ignores the MAC address and only uses the Bridge Priority",
      "It appends the VLAN ID to the end of the Bridge ID",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "PVST+ utilizes MAC Address Reduction, taking 12 bits from the original 16-bit Bridge Priority field to create the System ID Extension, which carries the VLAN ID.",
  },
  {
    id: 52,
    question:
      "When configuring LACP for an EtherChannel, which combination of modes will successfully form an aggregation?",
    options: [
      "Passive and Passive",
      "On and Active",
      "Active and Passive",
      "Auto and Desirable",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "LACP forms a bundle if at least one side is Active. Active/Passive or Active/Active will work. Passive/Passive will not form a bundle, and 'On' does not use LACP negotiation.",
  },
  {
    id: 53,
    question:
      "What are the default Spanning Tree Protocol (STP) timers for Hello, Forward Delay, and Max Age?",
    options: [
      "Hello: 1s, Forward Delay: 10s, Max Age: 15s",
      "Hello: 2s, Forward Delay: 15s, Max Age: 20s",
      "Hello: 5s, Forward Delay: 20s, Max Age: 30s",
      "Hello: 2s, Forward Delay: 30s, Max Age: 20s",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, STP sends Hello BPDUs every 2 seconds, waits 15 seconds in both the Listening and Learning states (Forward Delay), and stores BPDUs for 20 seconds (Max Age).",
  },
  {
    id: 54,
    question:
      "What is the primary difference between a standard Access Control List (ACL) and an extended ACL?",
    options: [
      "Standard ACLs can only block traffic, while extended ACLs can permit or block",
      "Standard ACLs filter based on destination IP, while extended ACLs filter based on source IP",
      "Standard ACLs filter based only on source IP, while extended ACLs can filter based on source, destination, protocol, and port numbers",
      "Standard ACLs are numbered 100-199, while extended ACLs are numbered 1-99",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Standard ACLs (1-99, 1300-1999) check only the source IP address. Extended ACLs (100-199, 2000-2699) offer granular control by checking source/destination IPs, protocols (TCP/UDP/ICMP), and port numbers.",
  },
  {
    id: 55,
    question:
      "When configuring a Layer 3 EtherChannel on a Cisco Catalyst switch, what must be done to the physical interfaces before assigning them to the channel group?",
    options: [
      "Assign them to a VLAN",
      "Configure them as trunk ports",
      "Issue the 'no switchport' command",
      "Enable PortFast",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "To create a Layer 3 EtherChannel (a routed port bundle), you must first convert the participating Layer 2 switch ports to Layer 3 ports using the 'no switchport' command.",
  },
  {
    id: 56,
    question:
      "Which Spanning Tree feature prevents a newly connected switch from becoming the Root Bridge?",
    options: ["BPDU Guard", "Root Guard", "Loop Guard", "UDLD"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Root Guard prevents a port from becoming a Root Port. If a port configured with Root Guard receives a superior BPDU, it places the port into a root-inconsistent (blocking) state.",
  },
  {
    id: 57,
    question:
      "In VTP (VLAN Trunking Protocol), which mode allows a switch to create, modify, and delete local VLANs but does NOT advertise its VLAN configuration to other switches?",
    options: ["Server", "Client", "Transparent", "Off"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "VTP Transparent mode allows local VLAN configuration, but the switch does not participate in VTP synchronization. It simply forwards VTP advertisements to other switches.",
  },
  {
    id: 58,
    question:
      "Which protocol is a vendor-neutral Layer 2 discovery protocol specified in IEEE 802.1AB?",
    options: [
      "CDP (Cisco Discovery Protocol)",
      "LLDP (Link Layer Discovery Protocol)",
      "STP (Spanning Tree Protocol)",
      "VTP (VLAN Trunking Protocol)",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "LLDP is the open standard (IEEE 802.1AB) alternative to Cisco's proprietary CDP, used to discover neighbor devices on the local network segment.",
  },
  {
    id: 59,
    question:
      "When an IP Phone is connected to a Cisco switch port alongside a PC, how does the switch handle the traffic from both devices?",
    options: [
      "The switch combines both into a single untagged VLAN",
      "The switch uses an access VLAN for the PC (untagged) and a voice VLAN for the phone (tagged)",
      "The switch requires an EtherChannel to separate the traffic",
      "The port must be configured as a standard 802.1Q trunk allowing all VLANs",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco switches use a unique configuration where the port acts as an access port for the PC's untagged data traffic, while utilizing a secondary Voice VLAN to accept tagged traffic from the IP phone.",
  },
  {
    id: 60,
    question:
      "In RSTP (Rapid Spanning Tree Protocol), which port role acts as an immediate backup to the Root Port?",
    options: [
      "Designated Port",
      "Alternate Port",
      "Backup Port",
      "Forwarding Port",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An Alternate Port provides a backup path to the Root Bridge and immediately transitions to the forwarding state if the current Root Port fails, greatly speeding up convergence.",
  },
  {
    id: 61,
    question: "How is a floating static route configured in Cisco IOS?",
    options: [
      "By configuring a static route with an administrative distance higher than the primary routing protocol",
      "By configuring a static route with an administrative distance of 1",
      "By using the 'floating' keyword at the end of the ip route command",
      "By lowering the metric of the static route to 0",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A floating static route is a backup route. It is configured with an Administrative Distance (AD) higher than the primary route (e.g., AD 130 to back up OSPF's 110), so it only enters the routing table if the primary route drops.",
  },
  {
    id: 62,
    question:
      "Which OSPF LSA type is generated by a Designated Router (DR) to describe the routers connected to a multi-access network?",
    options: [
      "Type 1 (Router LSA)",
      "Type 2 (Network LSA)",
      "Type 3 (Summary LSA)",
      "Type 5 (External LSA)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Type 2 (Network) LSAs are created only by the DR on broadcast/multi-access networks (like Ethernet) to represent the subnet and all attached routers.",
  },
  {
    id: 63,
    question:
      "For two EIGRP routers to form a neighbor adjacency, which of the following parameters MUST match?",
    options: [
      "Hello and Dead timers",
      "Autonomous System (AS) Number and K-Values",
      "Router IDs",
      "Interface MAC addresses",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unlike OSPF, EIGRP does not require matching timers to form an adjacency. However, the AS number, metric weights (K-Values), and authentication passwords must match perfectly.",
  },
  {
    id: 64,
    question:
      "What is the effect of configuring an interface as a 'passive-interface' in OSPF?",
    options: [
      "It prevents the interface from being advertised into OSPF",
      "It stops sending and receiving OSPF Hello packets on that interface, preventing adjacencies, but still advertises the subnet",
      "It completely disables IP routing on that interface",
      "It turns the interface into an OSPF stub network",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A passive interface in OSPF stops sending and processing routing updates/Hellos out of that port (preventing malicious or accidental neighbor formations), but the router still advertises that interface's network to its other OSPF neighbors.",
  },
  {
    id: 65,
    question:
      "In EIGRP, what condition must be met for a route to become a Feasible Successor?",
    options: [
      "The Feasible Distance must be equal to the Advertised Distance",
      "The Advertised Distance (AD) of the backup route must be strictly less than the Feasible Distance (FD) of the Successor route",
      "The Advertised Distance must be greater than the Feasible Distance",
      "The metric must be manually configured using the variance command",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The EIGRP Feasibility Condition dictates that a backup route is loop-free (and thus a Feasible Successor) only if its reported/advertised distance from the neighbor is less than the best total distance (FD) of the primary route.",
  },
  {
    id: 66,
    question:
      "Which IPv6 addressing mechanism allows a host to generate its own global unicast address without the need for a DHCPv6 server?",
    options: [
      "NAT64",
      "SLAAC (Stateless Address Autoconfiguration)",
      "Anycast addressing",
      "DHCPv6 Stateful Autoconfiguration",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SLAAC uses ICMPv6 Router Advertisements (RA) to provide the network prefix to the host. The host then generates its own interface ID using EUI-64 or a randomly generated number.",
  },
  {
    id: 67,
    question:
      "If an OSPF network contains 10 Gigabit Ethernet links, what adjustment should be made to ensure OSPF correctly calculates metrics?",
    options: [
      "Change the OSPF hello timer",
      "Adjust the auto-cost reference-bandwidth",
      "Manually configure the route priority",
      "Configure OSPF to use bandwidth and delay as metrics",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, OSPF's reference bandwidth is 100 Mbps. This means 100 Mbps, 1 Gbps, and 10 Gbps links all calculate to a cost of 1. You must increase the reference bandwidth (e.g., to 10000) so OSPF can differentiate high-speed links.",
  },
  {
    id: 68,
    question:
      "When redistributing static routes into OSPF, what is the default metric type assigned to the external routes?",
    options: ["Type 1 (E1)", "Type 2 (E2)", "Type 3 (E3)", "Internal (O)"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, routes redistributed into OSPF are tagged as External Type 2 (E2). The cost of an E2 route remains static throughout the OSPF domain, whereas E1 routes add internal OSPF path costs to the external metric.",
  },
  {
    id: 69,
    question:
      "Which routing protocol natively supports unequal-cost load balancing?",
    options: ["OSPF", "RIPv2", "EIGRP", "BGP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "EIGRP can perform unequal-cost load balancing across multiple paths by using the 'variance' command, which acts as a multiplier against the Feasible Distance.",
  },
  {
    id: 70,
    question:
      "Which command configures an IPv4 default route to forward traffic to the next-hop IP 192.168.1.1?",
    options: [
      "ip route 0.0.0.0 255.255.255.255 192.168.1.1",
      "ip route 255.255.255.255 0.0.0.0 192.168.1.1",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip default-network 192.168.1.1",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default route matches any destination IP address not specifically found in the routing table. It is represented by the network 0.0.0.0 and a subnet mask of 0.0.0.0.",
  },
  {
    id: 71,
    question:
      "In standard Access Control Lists (ACLs), how is the wildcard mask 0.0.0.255 interpreted?",
    options: [
      "Match the first three octets exactly, ignore the last octet",
      "Ignore the first three octets, match the last octet exactly",
      "Match all four octets exactly",
      "Ignore all four octets (match any)",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "In a wildcard mask, a '0' bit means 'match exactly' and a '1' bit means 'ignore'. Therefore, 0.0.0.255 requires the first three octets to match the specified IP, functioning like a /24 subnet mask.",
  },
  {
    id: 72,
    question:
      "Which command restricts Telnet and SSH access to the VTY lines of a Cisco router using an ACL named 'ADMINS'?",
    options: [
      "ip access-group ADMINS in",
      "access-class ADMINS in",
      "access-list ADMINS apply vty",
      "line vty filter ADMINS",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "To apply an ACL to the virtual terminal (VTY) lines for management access control, you enter line configuration mode and use the 'access-class' command, not 'ip access-group'.",
  },
  {
    id: 73,
    question:
      "What is the function of the 'switchport port-security mac-address sticky' command?",
    options: [
      "It requires manual entry of all allowed MAC addresses",
      "It dynamically learns MAC addresses and writes them to the running configuration",
      "It blocks any MAC address that has been learned dynamically",
      "It ages out MAC addresses after a specific timer expires",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'sticky' feature allows the switch to dynamically learn the MAC addresses of connected devices and automatically add them to the running configuration. If the running config is saved, they survive a reboot.",
  },
  {
    id: 74,
    question:
      "What information is stored in the DHCP Snooping Binding Database?",
    options: [
      "Routing tables and next-hop IPs",
      "VLAN IDs, MAC addresses, assigned IP addresses, lease times, and interface bindings",
      "A list of trusted DHCP servers and their IP addresses",
      "Spanning tree bridge IDs and port states",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCP Snooping monitors DHCP traffic on untrusted ports to build a binding table mapping MAC addresses to their leased IP addresses, lease times, VLANs, and the physical switch port. This database is later used by features like DAI and IP Source Guard.",
  },
  {
    id: 75,
    question:
      "Which feature prevents IP spoofing by verifying the source IP address of traffic against the DHCP Snooping binding table?",
    options: [
      "Dynamic ARP Inspection (DAI)",
      "Unicast Reverse Path Forwarding (uRPF)",
      "IP Source Guard (IPSG)",
      "Port Security",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "IP Source Guard filters traffic on a Layer 2 port by strictly checking the source IP address (and optionally MAC address) against the DHCP snooping binding database or static IP source bindings.",
  },
  {
    id: 76,
    question:
      "Which AAA protocol encrypts the entire payload of the packet and separates authentication from authorization?",
    options: ["RADIUS", "TACACS+", "Kerberos", "Diameter"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TACACS+ is a Cisco-proprietary protocol that encrypts the entire payload, uses TCP (port 49), and separates Authentication, Authorization, and Accounting. RADIUS only encrypts the password and uses UDP.",
  },
  {
    id: 77,
    question:
      "What is the primary key exchange mechanism introduced in WPA3 to protect against offline dictionary attacks?",
    options: [
      "Pre-Shared Key (PSK)",
      "Simultaneous Authentication of Equals (SAE)",
      "Temporal Key Integrity Protocol (TKIP)",
      "Extensible Authentication Protocol (EAP)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "WPA3 replaces WPA2's 4-way handshake PSK method with SAE (Simultaneous Authentication of Equals), heavily mitigating the risk of offline dictionary and brute-force password attacks.",
  },
  {
    id: 78,
    question:
      "In Network Address Translation (NAT), which term describes the process of mapping multiple private IP addresses to a single public IP address using different port numbers?",
    options: [
      "Static NAT",
      "Dynamic NAT",
      "Port Address Translation (PAT) / NAT Overload",
      "Destination NAT",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "PAT, also known as NAT Overload, uses unique source port numbers to differentiate traffic sessions, allowing thousands of internal private IP addresses to share a single public IP address.",
  },
  {
    id: 79,
    question:
      "In HSRP (Hot Standby Router Protocol), what is the default priority value used to elect the Active router?",
    options: ["0", "100", "128", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default HSRP priority is 100. The router with the highest priority becomes the Active router. If priorities tie, the router with the highest IP address on the HSRP interface wins.",
  },
  {
    id: 80,
    question:
      "Which ICMPv6 message type is sent by an IPv6 host to locate routers on the local link?",
    options: [
      "Neighbor Solicitation (Type 135)",
      "Neighbor Advertisement (Type 136)",
      "Router Solicitation (Type 133)",
      "Router Advertisement (Type 134)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Hosts send Router Solicitation (RS) messages (ICMPv6 Type 133) to the all-routers multicast address (FF02::2) to prompt local routers to immediately send a Router Advertisement (RA).",
  },
  {
    id: 81,
    question:
      "What is the primary difference between Stateful and Stateless DHCPv6?",
    options: [
      "Stateful provides the IP address, while Stateless only provides DNS and domain name information to hosts using SLAAC",
      "Stateless tracks IP address leases, while Stateful does not",
      "Stateful is used for IPv4, Stateless is used for IPv6",
      "Stateful does not require a DHCP server",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "In Stateless DHCPv6, the host generates its own IP address via SLAAC and only asks the DHCPv6 server for 'other' information like DNS servers. Stateful DHCPv6 operates like traditional DHCP, handing out specific IPs and tracking their leases.",
  },
  {
    id: 82,
    question:
      "In NTP (Network Time Protocol), what does a Stratum value of 1 indicate?",
    options: [
      "The device is an unsynchronized client",
      "The device is directly attached to a highly accurate time source, such as a GPS or atomic clock",
      "The device is 1 network hop away from the client",
      "The device is the lowest priority time server in the network",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Stratum levels define the distance from the reference clock. A Stratum 0 device is the atomic clock itself. A Stratum 1 device is a server directly connected to a Stratum 0 source.",
  },
  {
    id: 83,
    question: "Which Syslog severity level corresponds to 'Critical' events?",
    options: ["Level 0", "Level 1", "Level 2", "Level 3"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Syslog levels are: 0-Emergencies, 1-Alerts, 2-Critical, 3-Errors, 4-Warnings, 5-Notifications, 6-Informational, 7-Debugging.",
  },
  {
    id: 84,
    question:
      "What significant security enhancements does SNMPv3 introduce over SNMPv2c?",
    options: [
      "It uses community strings instead of passwords",
      "It introduces message integrity, authentication, and payload encryption",
      "It replaces UDP with TCP for guaranteed delivery",
      "It disables trap messages to prevent flooding",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "SNMPv1 and v2c send community strings in clear text. SNMPv3 provides strong security through cryptographic authentication (MD5/SHA) and data payload encryption (DES/AES).",
  },
  {
    id: 85,
    question:
      "Which IPv6 multicast address is utilized by OSPFv3 to reach all OSPF routers on a segment?",
    options: ["FF02::5", "FF02::6", "FF02::9", "FF02::A"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "OSPFv3 uses FF02::5 to reach all OSPF routers (equivalent to 224.0.0.5 in IPv4) and FF02::6 to reach OSPF Designated Routers (equivalent to 224.0.0.6).",
  },
  {
    id: 86,
    question:
      "In Quality of Service (QoS), which DSCP (Differentiated Services Code Point) value is standardly recommended for voice traffic?",
    options: ["AF41", "CS3", "EF (Expedited Forwarding)", "Best Effort (BE)"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Expedited Forwarding (EF), which corresponds to DSCP value 46, provides the low delay, low jitter, and low loss requirements essential for Voice over IP (VoIP) traffic.",
  },
  {
    id: 87,
    question:
      "What is the primary function of a Cisco DNA Center in a modern network?",
    options: [
      "It acts as a standalone firewall for perimeter defense",
      "It is an SDN controller that provides centralized management, automation, and assurance for campus and branch networks",
      "It is a routing protocol that replaces BGP",
      "It translates private IPv4 addresses to global IPv6 addresses",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco DNA (Digital Network Architecture) Center is the foundational controller and analytics platform at the heart of Cisco's intent-based networking, automating configuration and monitoring network health.",
  },
  {
    id: 88,
    question:
      "Which of the following data serialization formats is characterized by its strict use of indentation to define structure and is heavily used in Ansible playbooks?",
    options: ["JSON", "XML", "YAML", "HTML"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "YAML (YAML Ain't Markup Language) uses whitespace and indentation to denote data structure, making it highly human-readable. It is the standard format for Ansible playbooks.",
  },
  {
    id: 89,
    question:
      "When interacting with a REST API, what does an HTTP status code of 404 indicate?",
    options: [
      "Success (OK)",
      "Internal Server Error",
      "Unauthorized Access",
      "Not Found",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "A 404 status code means the server successfully received the request, but the specific resource requested by the client does not exist or cannot be found.",
  },
  {
    id: 90,
    question:
      "Which HTTP verb is used to retrieve data from a REST API without modifying the resource?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The GET method is used strictly to read or retrieve data from a server. It is a 'safe' and 'idempotent' operation, meaning it does not alter the state of the data.",
  },
  {
    id: 91,
    question:
      "What is the purpose of a 'Southbound API' in an SDN architecture?",
    options: [
      "To allow the controller to communicate with the physical network hardware",
      "To allow external applications to program the controller",
      "To connect two different SDN controllers together",
      "To authenticate users logging into the network",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Southbound APIs (like NETCONF, OpenFlow) operate between the SDN controller (Control Plane) and the network switches/routers (Data Plane) to push forwarding instructions.",
  },
  {
    id: 92,
    question:
      "In Python, which popular third-party library is commonly used to make HTTP requests to REST APIs?",
    options: ["Netmiko", "NAPALM", "Requests", "Paramiko"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'requests' library is the de facto standard in Python for sending HTTP/1.1 requests, making it incredibly simple to interact with REST APIs (e.g., requests.get(), requests.post()).",
  },
  {
    id: 93,
    question:
      "Which of the following configuration management tools requires a 'master' server and 'agent' software installed on the target nodes?",
    options: ["Ansible", "Puppet", "Terraform", "Python scripts using Netmiko"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike Ansible, which is agentless and uses SSH, Puppet operates on a pull-based model that requires a Puppet Agent to be installed on managed devices to pull configurations from a Puppet Master.",
  },
  {
    id: 94,
    question:
      "What is the purpose of the 'git commit' command in version control?",
    options: [
      "To upload code to a remote repository like GitHub",
      "To save changes to the local repository, creating a snapshot of the current state",
      "To merge two branches together",
      "To initialize a brand new repository",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A 'git commit' records changes to the local repository. It essentially takes a snapshot of your staged files. To upload those commits, you would subsequently use 'git push'.",
  },
  {
    id: 95,
    question:
      "In a Cisco wireless network, what protocol encapsulates data and management traffic between a Lightweight Access Point (LAP) and the Wireless LAN Controller (WLC)?",
    options: ["IPsec", "CAPWAP", "GRE", "LWAPP"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "CAPWAP (Control and Provisioning of Wireless Access Points) establishes secure tunnels (UDP ports 5246 for control and 5247 for data) between LAPs and the WLC.",
  },
  {
    id: 96,
    question:
      "What does an Administrative Distance (AD) of 1 indicate in a Cisco routing table?",
    options: [
      "A directly connected route",
      "A statically configured route",
      "An internal EIGRP route",
      "An OSPF route",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Directly connected routes have an AD of 0. Static routes have an AD of 1. EIGRP defaults to 90, and OSPF defaults to 110. The lower the AD, the more trusted the route source.",
  },
  {
    id: 97,
    question:
      "What is the difference between a collision domain and a broadcast domain?",
    options: [
      "Switches break up broadcast domains, Routers break up collision domains",
      "Hubs break up collision domains, Switches break up broadcast domains",
      "Switches break up collision domains, Routers break up broadcast domains",
      "VLANs break up collision domains, Routers break up broadcast domains",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Every port on a switch is its own collision domain. However, switches forward broadcasts out of all ports in the same VLAN. Routers (and Layer 3 switches) do not forward broadcasts, thus breaking up broadcast domains.",
  },
  {
    id: 98,
    question:
      "When configuring Dynamic ARP Inspection (DAI), which ports should be configured as 'trusted'?",
    options: [
      "Ports connected to end-user PCs",
      "Ports connected to other switches or trusted routers",
      "Ports configured for PortFast",
      "All ports by default",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DAI relies on DHCP Snooping. Uplinks to other trusted switches or routers should be configured as trusted so DAI does not inspect and potentially drop legitimate ARP traffic traversing the network backbone.",
  },
  {
    id: 99,
    question: "Which type of IPv6 address starts with the prefix FD00::/8?",
    options: ["Global Unicast", "Link-Local", "Unique Local", "Multicast"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Unique Local Addresses (ULAs) use the prefix FC00::/7 (which includes FC and FD). They are analogous to IPv4 private addresses (RFC 1918) and are not routable on the global internet.",
  },
  {
    id: 100,
    question:
      "What does the 'CI/CD' acronym stand for in the context of network automation and software development?",
    options: [
      "Continuous Integration / Continuous Deployment",
      "Controller Interface / Configuration Database",
      "Cisco Infrastructure / Cisco Deployment",
      "Configuration Integration / Code Delivery",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "CI/CD refers to the automated practices of merging developer code into a central repository (Continuous Integration) and automatically releasing it to production environments (Continuous Deployment/Delivery).",
  },
];
