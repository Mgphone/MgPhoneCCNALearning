import type { QuizQuestion } from "./types";

export const natPatQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary purpose of NAT?",
    options: [
      "To encrypt traffic between private and public networks",
      "To translate private IP addresses to public IP addresses for internet access",
      "To filter traffic based on IP addresses",
      "To assign IP addresses to devices automatically",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "NAT (Network Address Translation) allows devices with private RFC 1918 addresses to communicate with public networks by translating their addresses to a public IP.",
  },
  {
    id: 2,
    question: "In Cisco NAT terminology, what does 'Inside Local' refer to?",
    options: [
      "The public IP address assigned to a host on the inside network.",
      "The private IP address assigned to a host on the inside network.",
      "The public IP address of a destination host on the internet.",
      "The private IP address of a destination host on the internet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'Inside Local' address is the actual private IP address configured on a device within the internal network before any translation occurs.",
  },
  {
    id: 3,
    question:
      "Which of the following describes PAT (Port Address Translation)?",
    options: [
      "Translates one private IP to one public IP.",
      "Translates multiple public IPs to a single private IP.",
      "Translates multiple private IPs to a single public IP using unique source port numbers.",
      "Translates MAC addresses to IP addresses.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "PAT, also known as NAT Overload, maps multiple private IP addresses to a single public IP address by tracking unique Layer 4 source port numbers.",
  },
  {
    id: 4,
    question:
      "Which command configures a static NAT translation mapping 192.168.1.10 to 209.165.200.225?",
    options: [
      "ip nat static 192.168.1.10 209.165.200.225",
      "ip nat inside source static 209.165.200.225 192.168.1.10",
      "ip nat inside source static 192.168.1.10 209.165.200.225",
      "ip nat outside source static 192.168.1.10 209.165.200.225",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The correct syntax for static NAT is 'ip nat inside source static [local-ip] [global-ip]'.",
  },
  {
    id: 5,
    question:
      "What keyword is appended to a dynamic NAT configuration to enable PAT?",
    options: ["pat-enable", "multiplex", "overload", "port-map"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'overload' keyword tells the router to use Port Address Translation (PAT), allowing multiple inside local addresses to share a single inside global address.",
  },
  {
    id: 6,
    question:
      "When configuring NAT, what must be applied to the router interfaces?",
    options: [
      "An access control list (ACL) blocking inbound traffic.",
      "The 'ip nat inside' and 'ip nat outside' commands on the respective interfaces.",
      "A dynamic routing protocol to advertise the NAT pool.",
      "A DHCP pool for the outside network.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "For NAT to function, the router must know the direction of traffic. Interfaces connected to the internal network need 'ip nat inside', and those facing the internet need 'ip nat outside'.",
  },
  {
    id: 7,
    question:
      "Which command displays active NAT translations on a Cisco router?",
    options: [
      "show ip nat statistics",
      "show ip nat translations",
      "show nat active",
      "show ip route nat",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show ip nat translations' command lists all current static and dynamic NAT/PAT translation entries in the router's memory.",
  },
  {
    id: 8,
    question: "In standard NAT, what is the 'Inside Global' address?",
    options: [
      "The IP address of the inside host as it appears to the outside network.",
      "The actual private IP address of the inside host.",
      "The IP address of an outside host as it appears to the inside network.",
      "The actual public IP address of an outside host.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'Inside Global' address is the post-translation public IP address that represents the inside host to the outside world (the internet).",
  },
  {
    id: 9,
    question:
      "Which command clears all dynamic NAT translations from the router's translation table?",
    options: [
      "clear ip nat translations *",
      "erase ip nat all",
      "clear nat dynamic",
      "reset ip nat table",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'clear ip nat translations *' command immediately clears all dynamic entries from the NAT translation table. Static entries are not removed.",
  },
  {
    id: 10,
    question:
      "What is typically required to define the 'interesting traffic' that should be translated by Dynamic NAT?",
    options: [
      "A VLAN map",
      "A route map",
      "An Access Control List (ACL)",
      "A NAT routing table",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An ACL is used to identify which internal private IP addresses (the inside local addresses) are permitted to be translated by the NAT process.",
  },
  {
    id: 11,
    question:
      "Which block of IP addresses is defined by RFC 1918 for private Class A networks?",
    options: [
      "172.16.0.0 - 172.31.255.255",
      "192.168.0.0 - 192.168.255.255",
      "10.0.0.0 - 10.255.255.255",
      "169.254.0.0 - 169.254.255.255",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "RFC 1918 defines 10.0.0.0/8 as the private address space for Class A networks.",
  },
  {
    id: 12,
    question:
      "If a Dynamic NAT pool has 5 IP addresses and 6 internal users attempt to access the internet simultaneously (without PAT), what happens to the 6th user?",
    options: [
      "The router dynamically assigns a 6th IP address from the interface.",
      "The 6th user's connection is dropped until an IP address in the pool becomes available.",
      "The router automatically switches to PAT to accommodate the user.",
      "The first user is disconnected to make room for the 6th user.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Dynamic NAT provides a 1-to-1 mapping. Once the pool is exhausted, any additional devices cannot communicate with the outside network until an existing translation times out and frees up an IP.",
  },
  {
    id: 13,
    question:
      "Which component is NOT strictly required when configuring PAT using an external interface?",
    options: [
      "ip nat inside/outside on interfaces",
      "An ACL to define translatable traffic",
      "A dedicated NAT IP pool",
      "The 'overload' keyword",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "When configuring PAT to use the router's external interface IP (e.g., 'ip nat inside source list 1 interface gi0/0 overload'), a dedicated NAT pool is not required.",
  },
  {
    id: 14,
    question: "What is NAT64?",
    options: [
      "A mechanism to translate 64-bit MAC addresses to IPv4.",
      "A transition mechanism that allows IPv6 hosts to communicate with IPv4 servers.",
      "A proprietary Cisco NAT protocol for enterprise networks.",
      "An updated version of PAT that supports 64,000 ports.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "NAT64 is an IPv6 transition mechanism that translates IPv6 packets to IPv4 packets and vice versa, allowing IPv6-only clients to reach IPv4-only servers.",
  },
  {
    id: 15,
    question:
      "How does a router running PAT distinguish between returning traffic for multiple internal hosts sharing the same public IP?",
    options: [
      "By looking at the destination MAC address.",
      "By tracking the unique Layer 4 destination port number in the returning packet.",
      "By using DPI (Deep Packet Inspection) to read HTTP headers.",
      "By verifying the IP checksums.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The router alters the source port of outbound traffic and tracks it in the NAT table. When return traffic arrives, the router matches the Layer 4 destination port to the original internal host.",
  },
  {
    id: 16,
    question:
      "Which of the following best describes the 'Outside Local' address?",
    options: [
      "The actual public IP of a web server on the internet.",
      "The IP address of an outside host as it appears to the inside network.",
      "The internal IP address of a host before translation.",
      "The public IP assigned to the router's WAN interface.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Outside Local address is how an external device is known to the internal network. In most simple NAT deployments, this is the same as the Outside Global address, but it can be changed in complex scenarios.",
  },
  {
    id: 17,
    question:
      "You want to host a web server on your internal network (192.168.1.50) and make it accessible from the internet. Which NAT type must you use?",
    options: ["Dynamic NAT", "PAT (Overload)", "Static NAT", "NAT64"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Static NAT provides a permanent, 1-to-1 mapping between a private IP and a public IP, which is required for inbound connections to internal servers.",
  },
  {
    id: 18,
    question:
      "Which command defines a NAT pool named 'PUBLIC_IPS' containing the addresses 203.0.113.10 to 203.0.113.20?",
    options: [
      "ip nat pool PUBLIC_IPS 203.0.113.10 203.0.113.20 netmask 255.255.255.0",
      "nat pool PUBLIC_IPS start 203.0.113.10 end 203.0.113.20",
      "ip nat inside pool PUBLIC_IPS 203.0.113.10 203.0.113.20",
      "ip nat group PUBLIC_IPS 203.0.113.10 - 203.0.113.20 mask 255.255.255.0",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The correct global configuration command is 'ip nat pool [name] [start-ip] [end-ip] netmask [subnet-mask]' (or prefix-length).",
  },
  {
    id: 19,
    question:
      "When troubleshooting NAT, you notice the translation table is empty despite hosts attempting to access the internet. What is a common cause?",
    options: [
      "The NAT pool has run out of IP addresses.",
      "The ACL referenced in the NAT statement does not match the internal hosts' IP addresses.",
      "Static NAT is overriding PAT configurations.",
      "The router's routing table is missing the local LAN routes.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If the ACL configured to define 'interesting traffic' doesn't explicitly permit the internal subnets, the router will route the traffic without translating it, or drop it depending on other ACLs.",
  },
  {
    id: 20,
    question:
      "What is the theoretical maximum number of concurrent translations PAT can support for a single public IP address?",
    options: ["254", "4,096", "Approx. 65,000", "Unlimited"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because PAT uses a 16-bit field for Layer 4 ports, there are 65,535 possible port numbers available for tracking translations per public IP address.",
  },
  {
    id: 21,
    question:
      "A network engineer issues 'show ip nat statistics'. Which information can be found in the output of this command?",
    options: [
      "The specific Layer 4 ports currently being mapped.",
      "The number of active static, dynamic, and extended translations, and total hits/misses.",
      "The exact ACL rules that are permitting NAT traffic.",
      "The remaining lease time for dynamic NAT allocations.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'show ip nat statistics' command provides a high-level summary, including the total number of active translations (static/dynamic/extended), interface roles, and hit/miss counters.",
  },
  {
    id: 22,
    question: "What is port forwarding in the context of NAT?",
    options: [
      "Forwarding all UDP traffic to a single host.",
      "A Static NAT configuration that only translates a specific TCP/UDP port rather than the entire IP address.",
      "Allowing multiple internal devices to use the same private IP.",
      "Bypassing the router's routing table for faster switching.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Port forwarding (Static PAT) creates a 1-to-1 mapping for a specific port. For example, translating public IP TCP port 80 to an internal IP TCP port 80, while leaving other ports unaffected.",
  },
  {
    id: 23,
    question:
      "When a packet travels from the INSIDE network to the OUTSIDE network, in what order does a Cisco router process NAT and Routing?",
    options: [
      "NAT translation occurs first, then routing.",
      "Routing occurs first, then NAT translation.",
      "They are processed simultaneously in the CEF table.",
      "It depends on whether it is Static or Dynamic NAT.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "For Inside-to-Outside traffic, a Cisco router makes the routing decision first to determine the egress interface. Once the exit interface is determined, the NAT translation is applied before the packet leaves.",
  },
  {
    id: 24,
    question:
      "Which Cisco command enables you to configure Port Forwarding for an internal web server on port 80?",
    options: [
      "ip nat inside source static tcp 192.168.1.100 80 203.0.113.5 80",
      "ip nat forward tcp 192.168.1.100 80 outside 203.0.113.5 80",
      "ip nat static tcp 80 192.168.1.100 203.0.113.5",
      "ip nat port-forward inside 192.168.1.100 80 global 203.0.113.5 80",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The syntax for Static PAT (Port Forwarding) specifies the protocol (tcp/udp), the inside local IP and port, followed by the inside global IP and port.",
  },
  {
    id: 25,
    question:
      "Which of the following ICMP messages is used by NAT to inform a sender that a packet cannot be translated because the NAT pool is exhausted?",
    options: [
      "ICMP Type 0 (Echo Reply)",
      "ICMP Type 3 (Destination Unreachable)",
      "ICMP Type 5 (Redirect)",
      "ICMP Type 11 (Time Exceeded)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If a router cannot translate a packet due to an exhausted NAT pool (and PAT is not configured), it drops the packet and typically sends an ICMP Type 3 (Destination Unreachable) message back to the sender.",
  },
  // ... continuing from question 25

  {
    id: 26,
    question:
      "Which STP port state allows a port to learn MAC addresses but not forward data frames?",
    options: ["Blocking", "Listening", "Learning", "Forwarding"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In the Learning state, the switch port populates the MAC address table but drops user data frames to prevent loops before transitioning to Forwarding.",
  },
  {
    id: 27,
    question:
      "What is the default priority value used in the Spanning Tree Protocol (STP) Bridge ID?",
    options: ["0", "4096", "32768", "65536"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default STP bridge priority is 32768. It can be adjusted in increments of 4096.",
  },
  {
    id: 28,
    question:
      "Which Dynamic Trunking Protocol (DTP) mode actively attempts to convert the link to a trunk?",
    options: ["Dynamic auto", "Dynamic desirable", "Trunk", "Access"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Dynamic desirable actively sends DTP messages to negotiate a trunk link, whereas dynamic auto passively waits for negotiation.",
  },
  {
    id: 29,
    question:
      "What is the primary security liability of leaving DTP enabled in 'dynamic auto' mode on user-facing ports?",
    options: [
      "It causes broadcast storms.",
      "An attacker can negotiate a trunk and perform VLAN hopping.",
      "It disables PortFast.",
      "It limits bandwidth to 10 Mbps.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If an attacker sends DTP 'desirable' frames, a 'dynamic auto' port will form a trunk, allowing the attacker to inject traffic into any VLAN.",
  },
  {
    id: 30,
    question:
      "Which feature prevents a newly connected switch from inadvertently overriding the existing VTP domain database?",
    options: [
      "VTP Pruning",
      "Configuring a higher configuration revision number",
      "Setting the VTP mode to Transparent",
      "Enabling BPDU Guard",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A Transparent mode switch forwards VTP advertisements but does not update its own database or broadcast its own VLAN changes, protecting the domain.",
  },
  {
    id: 31,
    question:
      "Which EtherChannel load-balancing method is most effective for a router-on-a-stick scenario where most traffic goes to a single default gateway MAC?",
    options: [
      "Source MAC",
      "Destination MAC",
      "Source IP and Destination IP",
      "Source Port",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If destination MAC load balancing is used, all traffic to the gateway hashes to one link. Source/Destination IP hashing distributes traffic more evenly across the bundle.",
  },
  {
    id: 32,
    question:
      "Which protocol is an IEEE standard for negotiating EtherChannel bundles?",
    options: ["PAgP", "LACP", "VTP", "STP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Link Aggregation Control Protocol (LACP - 802.3ad) is the open standard, whereas PAgP is Cisco proprietary.",
  },
  {
    id: 33,
    question: "In OSPF, what is the default administrative distance?",
    options: ["90", "110", "115", "120"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "OSPF has an Administrative Distance (AD) of 110. EIGRP is 90, IS-IS is 115, and RIP is 120.",
  },
  {
    id: 34,
    question:
      "Which OSPF router type connects an OSPF area to the OSPF backbone (Area 0)?",
    options: [
      "Internal Router",
      "Backbone Router",
      "ABR (Area Border Router)",
      "ASBR (Autonomous System Boundary Router)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An Area Border Router (ABR) has interfaces in at least two areas, one of which must be Area 0, allowing it to summarize and route between areas.",
  },
  {
    id: 35,
    question:
      "When troubleshooting OSPF neighbor adjacencies, which of the following MUST match between two routers?",
    options: [
      "Router ID",
      "Hello and Dead timers",
      "Process ID",
      "Loopback interface IPs",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "For OSPF neighbors to form, Area ID, Subnet/Mask, Hello/Dead timers, and Authentication must match. Router IDs must be unique.",
  },
  {
    id: 36,
    question: "What is the metric used by OSPF to determine the best path?",
    options: ["Hop count", "Bandwidth and Delay", "Cost", "Link utilization"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "OSPF uses Cost, which is calculated based on the cumulative bandwidth of the interfaces along the path (Reference Bandwidth / Interface Bandwidth).",
  },
  {
    id: 37,
    question:
      "Which EIGRP DUAL component indicates the best path to a destination network?",
    options: [
      "Feasible Distance (FD)",
      "Reported Distance (RD)",
      "Successor",
      "Feasible Successor",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Successor is the primary route chosen by DUAL and installed in the routing table. A Feasible Successor is a backup route.",
  },
  {
    id: 38,
    question:
      "What is the purpose of an SVI (Switch Virtual Interface) on a Layer 3 switch?",
    options: [
      "To provide out-of-band management",
      "To route traffic between VLANs",
      "To trunk multiple VLANs",
      "To inspect ARP packets",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An SVI acts as the default gateway for hosts in a specific VLAN, enabling inter-VLAN routing directly on a Layer 3 switch.",
  },
  {
    id: 39,
    question: "Which IPv6 address block is reserved for Link-Local addresses?",
    options: ["2000::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "FE80::/10 is reserved for IPv6 Link-Local addresses, which are used for communication on a single LAN segment and are not routable.",
  },
  {
    id: 40,
    question:
      "When configuring IPv6 using EUI-64, which bit is flipped in the MAC address to form the Interface ID?",
    options: ["The 1st bit", "The 7th bit", "The 8th bit", "The 16th bit"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In EUI-64, the 7th bit (the Universal/Local bit) of the original MAC address is inverted to specify if the address is globally unique.",
  },
  {
    id: 41,
    question:
      "What is inserted in the middle of a MAC address during the IPv6 EUI-64 conversion process?",
    options: ["FF:FE", "FE:FF", "00:00", "FF:FF"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "To convert a 48-bit MAC address into a 64-bit Interface ID, 'FF:FE' is inserted exactly in the middle of the MAC address.",
  },
  {
    id: 42,
    question:
      "Which command correctly configures an IPv4 default static route?",
    options: [
      "ip route 0.0.0.0 255.255.255.255 [next-hop]",
      "ip route 0.0.0.0 0.0.0.0 [next-hop]",
      "ip default-network [next-hop]",
      "route default 0.0.0.0 [next-hop]",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'ip route 0.0.0.0 0.0.0.0 [next-hop/exit-interface]' directs all traffic without a more specific match to the specified gateway.",
  },
  {
    id: 43,
    question: "What does the 'floating' in a floating static route refer to?",
    options: [
      "A route configured with a higher administrative distance to act as a backup.",
      "A route that dynamically changes its next-hop based on SLA tracking.",
      "A route that load-balances traffic automatically.",
      "A route used exclusively in BGP.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "By assigning an AD higher than the primary routing protocol (e.g., higher than 110 for OSPF), the static route stays in the database and only 'floats' into the routing table if the primary route fails.",
  },
  {
    id: 44,
    question:
      "When applying an Extended IPv4 Access Control List (ACL), where should it ideally be placed?",
    options: [
      "As close to the destination as possible.",
      "As close to the source as possible.",
      "On the core router only.",
      "On the management VLAN.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Standard ACLs should be placed near the destination, but Extended ACLs should be placed as close to the source as possible to prevent unwanted traffic from consuming network bandwidth.",
  },
  {
    id: 45,
    question: "Which wildcard mask matches the subnet 192.168.10.0/24?",
    options: ["0.0.0.255", "255.255.255.0", "0.0.0.0", "255.255.255.255"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A wildcard mask is the inverse of a subnet mask. For a /24 (255.255.255.0), the wildcard mask is 0.0.0.255.",
  },
  {
    id: 46,
    question:
      "Which configuration syntax correctly creates a named extended ACL to block HTTP traffic from a specific host?",
    options: [
      "ip access-list extended BLOCK_HTTP \n deny tcp host 10.1.1.5 any eq 80",
      "access-list 100 deny http 10.1.1.5 any",
      "ip access-list standard BLOCK_HTTP \n deny host 10.1.1.5 eq 80",
      "ip route deny tcp 10.1.1.5 any eq http",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Named extended ACLs use 'ip access-list extended [NAME]', followed by permit/deny statements specifying the protocol (tcp), source, destination, and port (eq 80).",
  },
  {
    id: 47,
    question:
      "What is the implicit rule at the end of every Cisco Access Control List?",
    options: [
      "Permit ip any any",
      "Deny ip any any",
      "Permit local traffic",
      "Deny tcp any any",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Every Cisco ACL has an invisible 'deny ip any any' (or 'deny ipv6 any any') at the end. If traffic doesn't match any explicitly configured permit statement, it is dropped.",
  },
  {
    id: 48,
    question:
      "Which port security violation mode drops offending frames and generates a syslog message, but does NOT shut down the port?",
    options: ["Protect", "Restrict", "Shutdown", "Err-disable"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Restrict mode drops unauthorized frames, increments the security violation counter, and generates a syslog message. Protect mode drops frames silently without logs.",
  },
  {
    id: 49,
    question:
      "How does DHCP Snooping differentiate between legitimate DHCP servers and rogue DHCP servers?",
    options: [
      "By verifying the DHCP server's MAC address in a local database.",
      "By establishing trusted and untrusted ports.",
      "By pinging the DHCP server before allowing DHCPOFFERs.",
      "By checking the DHCP payload for malicious code.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCP Snooping configures switch ports as 'untrusted' (user ports) or 'trusted' (uplinks to legit servers). Untrusted ports drop inbound DHCPOFFER and DHCPACK messages.",
  },
  {
    id: 50,
    question:
      "What underlying database is required for Dynamic ARP Inspection (DAI) to function properly on a VLAN?",
    options: [
      "The MAC Address Table",
      "The OSPF Link-State Database",
      "The DHCP Snooping Binding Database",
      "The ARP Cache",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "DAI relies on the DHCP Snooping Binding Database (which maps IPs, MACs, and ports) to validate ARP packets. If an ARP reply doesn't match the database, DAI drops it.",
  },
  {
    id: 51,
    question:
      "Which global BGP attribute is used to influence inbound traffic from an external AS?",
    options: [
      "Local Preference",
      "Weight",
      "Multi-Exit Discriminator (MED)",
      "Next-Hop",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "MED (Multi-Exit Discriminator) is an optional non-transitive attribute advertised to eBGP peers to influence how traffic enters the local AS. Local Pref influences outbound traffic.",
  },
  {
    id: 52,
    question:
      "In QoS, which queuing mechanism guarantees a specific amount of bandwidth for time-sensitive traffic like voice?",
    options: [
      "FIFO (First-In, First-Out)",
      "WFQ (Weighted Fair Queuing)",
      "CBWFQ (Class-Based Weighted Fair Queuing)",
      "LLQ (Low Latency Queuing)",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "LLQ adds a strict priority queue (PQ) to CBWFQ, ensuring that delay-sensitive traffic (like VoIP) is always serviced before other queues.",
  },
  {
    id: 53,
    question:
      "Which protocol operates at Layer 7 and is used to translate fully qualified domain names (FQDNs) to IP addresses?",
    options: ["DHCP", "DNS", "ARP", "NTP"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Domain Name System (DNS) resolves human-readable names (like www.cisco.com) into IP addresses.",
  },
  {
    id: 54,
    question:
      "In a Software-Defined Networking (SDN) architecture, what is the responsibility of the Control Plane?",
    options: [
      "Forwarding actual user data packets",
      "Making routing decisions and defining topologies",
      "Providing physical connections to devices",
      "Storing the MAC address table",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "SDN separates the planes. The Control Plane (the 'brain') makes routing decisions, while the Data Plane (the 'muscle') forwards the packets based on those decisions.",
  },
  {
    id: 55,
    question:
      "Which API architectural style relies on HTTP methods (GET, POST, PUT, DELETE) and is heavily used in modern network automation?",
    options: ["SOAP", "XML-RPC", "REST", "gRPC"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "REST (Representational State Transfer) uses standard HTTP methods and is the foundation for most modern network programmability APIs, returning data usually in JSON.",
  },
  {
    id: 56,
    question:
      "Which data serialization format uses key-value pairs enclosed in curly braces `{}`?",
    options: ["YAML", "XML", "HTML", "JSON"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "JSON (JavaScript Object Notation) uses curly braces for objects and represents data as key-value pairs separated by colons.",
  },
  {
    id: 57,
    question: "What is the primary function of Cisco DNA Center?",
    options: [
      "Managing endpoint antivirus software",
      "Providing a centralized GUI controller for Enterprise SDN networks",
      "Acting as a standard BGP route reflector",
      "Managing public DNS records",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco DNA Center is the central management dashboard and controller for Cisco's intent-based networking (SDA) campus architecture.",
  },
  {
    id: 58,
    question:
      "Which command reveals the MAC address of a directly connected Cisco switch on a neighboring port?",
    options: [
      "show ip arp",
      "show cdp neighbors detail",
      "show mac address-table",
      "show interface status",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco Discovery Protocol (CDP) provides detailed Layer 2 information about directly connected Cisco devices, including their IP, MAC, platform, and connected port.",
  },
  {
    id: 59,
    question:
      "If a switch port is configured with 'switchport mode access' and 'switchport access vlan 10', what happens if it receives an 802.1Q tagged frame?",
    options: [
      "It strips the tag and forwards the frame.",
      "It forwards the frame only if it's tagged for VLAN 10.",
      "It drops the frame.",
      "It converts the port to a trunk.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "An access port expects untagged frames. If it receives a tagged 802.1Q frame (other than a voice VLAN tag), it drops the frame.",
  },
  {
    id: 60,
    question: "What is the purpose of the 'ip helper-address' command?",
    options: [
      "To forward broadcast UDP packets (like DHCP) as unicast to a specific server.",
      "To configure a backup gateway.",
      "To enable HSRP.",
      "To assist OSPF in finding designated routers.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Since routers do not forward broadcasts by default, 'ip helper-address' intercepts DHCP broadcast requests and relays them as unicast to a central DHCP server.",
  },
  {
    id: 61,
    question:
      "Which IPv6 configuration method relies on ICMPv6 Router Solicitation and Router Advertisement messages?",
    options: [
      "DHCPv6 Stateful",
      "SLAAC (Stateless Address Autoconfiguration)",
      "Static assignment",
      "IPv6 NAT",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "SLAAC allows a device to automatically configure its own IPv6 address based on the prefix advertised by the local router in ICMPv6 RA messages.",
  },
  {
    id: 62,
    question:
      "In standard HSRP (Hot Standby Router Protocol), what is the default hello timer and hold timer?",
    options: [
      "Hello: 1s, Hold: 3s",
      "Hello: 3s, Hold: 10s",
      "Hello: 5s, Hold: 15s",
      "Hello: 10s, Hold: 30s",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The default timers for HSRP version 1 and 2 are 3 seconds for Hello and 10 seconds for Hold/Dead.",
  },
  {
    id: 63,
    question:
      "Which command prevents a switch from participating in STP for an edge port, putting it into a forwarding state immediately?",
    options: [
      "spanning-tree portfast",
      "spanning-tree bpduguard enable",
      "spanning-tree loopguard default",
      "spanning-tree vlan 1 root primary",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "PortFast allows an access port connected to an end device (like a PC) to bypass the Listening and Learning states and transition directly to Forwarding.",
  },
  {
    id: 64,
    question: "What happens if a PortFast-enabled port receives a BPDU?",
    options: [
      "It ignores the BPDU.",
      "It becomes the root bridge.",
      "It loses its PortFast status and reverts to normal STP operation.",
      "It drops all traffic permanently.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "If a PortFast port receives a BPDU (indicating a switch is connected, not an end host), it loses PortFast status and goes through normal STP states. If BPDU Guard was enabled, it would err-disable instead.",
  },
  {
    id: 65,
    question:
      "Which wireless security protocol utilizes SAE (Simultaneous Authentication of Equals) to protect against dictionary attacks?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "WPA3 replaces WPA2's Pre-Shared Key (PSK) with SAE, which provides stronger forward secrecy and resistance to offline dictionary attacks.",
  },
  {
    id: 66,
    question:
      "What is a WLC (Wireless LAN Controller) used for in a Cisco enterprise network?",
    options: [
      "To act as a high-gain antenna for endpoints.",
      "To centrally manage, configure, and monitor Lightweight Access Points (LAPs).",
      "To route BGP across the wireless spectrum.",
      "To provide a standalone portal for Guest Wi-Fi only.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A WLC centrally manages Cisco LAPs via the CAPWAP protocol, allowing for centralized security, roaming, and radio resource management.",
  },
  {
    id: 67,
    question:
      "In a split-MAC architecture, which function is handled by the Lightweight AP (LAP)?",
    options: [
      "802.11 beacon generation and MAC layer encryption.",
      "Client authentication and roaming decisions.",
      "DHCP address assignment.",
      "WLAN configuration storage.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The LAP handles real-time, local 802.11 functions like sending beacons and encrypting frames, while the WLC handles management functions like authentication and roaming.",
  },
  {
    id: 68,
    question:
      "Which standard defines Power over Ethernet Plus (PoE+), providing up to 30 Watts of power?",
    options: ["802.3af", "802.3at", "802.3bt", "802.11ac"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "802.3af is standard PoE (15.4W), 802.3at is PoE+ (30W), and 802.3bt is UPoE/PoE++ (60W-90W).",
  },
  {
    id: 69,
    question:
      "Which tunneling protocol is inherently used by a WLC to communicate with its joined Access Points?",
    options: ["GRE", "IPsec", "CAPWAP", "L2TP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Control and Provisioning of Wireless Access Points (CAPWAP) uses UDP ports 5246 (Control) and 5247 (Data) to tunnel traffic between LAPs and the WLC.",
  },
  {
    id: 70,
    question:
      "Which configuration mode allows a router interface to accept multiple VLAN tags for inter-VLAN routing?",
    options: [
      "switchport mode trunk",
      "encapsulation dot1Q [vlan-id]",
      "ip routing",
      "vtp mode server",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "On a router performing Router-on-a-Stick, subinterfaces are created, and 'encapsulation dot1Q' is applied to map the subinterface to a specific VLAN tag.",
  },
  {
    id: 71,
    question:
      "What is the primary difference between a traditional WAN and SD-WAN?",
    options: [
      "SD-WAN uses only satellite connections.",
      "SD-WAN centralizes routing policies and separates the control plane from the data plane across WAN links.",
      "Traditional WANs encrypt all traffic by default.",
      "SD-WAN does not support broadband internet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "SD-WAN abstracts WAN hardware and uses a centralized controller to intelligently route traffic across any transport (MPLS, broadband, LTE) based on application policies.",
  },
  {
    id: 72,
    question:
      "Which protocol relies on UDP port 514 to send event notifications to a centralized server?",
    options: ["SNMP", "NTP", "Syslog", "TFTP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Syslog sends logging messages over UDP port 514. It has severity levels ranging from 0 (Emergencies) to 7 (Debugging).",
  },
  {
    id: 73,
    question: "Which Syslog severity level indicates a 'Critical' condition?",
    options: ["Level 0", "Level 1", "Level 2", "Level 7"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Syslog levels: 0-Emergency, 1-Alert, 2-Critical, 3-Error, 4-Warning, 5-Notice, 6-Informational, 7-Debug.",
  },
  {
    id: 74,
    question: "What is the purpose of the Native VLAN on an 802.1Q trunk?",
    options: [
      "To encrypt sensitive traffic.",
      "To carry traffic that does not have an 802.1Q tag.",
      "To negotiate trunking protocols.",
      "To isolate the management interface.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Native VLAN (VLAN 1 by default) carries untagged frames across a trunk link. For security, it should be changed to an unused VLAN.",
  },
  {
    id: 75,
    question:
      "What occurs when there is a Native VLAN mismatch between two switches connected via a trunk?",
    options: [
      "The trunk link shuts down immediately.",
      "STP blocks the ports.",
      "Traffic on the mismatched VLANs leaks into each other, causing security risks.",
      "CDP disables the trunk.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because Native VLAN traffic is untagged, Switch A sends untagged traffic from VLAN 10, and Switch B receives it and puts it into VLAN 20, causing VLAN leaking. CDP will also generate warning logs.",
  },
  {
    id: 76,
    question:
      "In Puppet, what is the master-agent architecture primarily used for?",
    options: [
      "Monitoring SNMP traps.",
      "Configuration management and enforcement of infrastructure as code.",
      "Load balancing web servers.",
      "Dynamic routing updates.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Puppet (along with Chef and Ansible) is an automation tool used to deploy, configure, and maintain servers and network devices.",
  },
  {
    id: 77,
    question:
      "Unlike Puppet and Chef, which configuration management tool is agentless and uses SSH?",
    options: ["SaltStack", "Terraform", "Ansible", "Docker"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Ansible pushes configurations using standard SSH/NETCONF, requiring no special agent software to be installed on the managed network devices.",
  },
  {
    id: 78,
    question: "Which statement about JSON syntax is FALSE?",
    options: [
      "Strings must be enclosed in double quotes.",
      "Booleans are represented as true or false.",
      "Arrays are enclosed in curly brackets {}.",
      "Key/value pairs are separated by a colon.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In JSON, arrays are enclosed in square brackets `[]`, while objects (dictionaries) are enclosed in curly brackets `{}`.",
  },
  {
    id: 79,
    question:
      "Which routing protocol uses Bellman-Ford as its underlying algorithm?",
    options: ["OSPF", "IS-IS", "RIP", "BGP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Routing Information Protocol (RIP) is a distance-vector protocol using the Bellman-Ford algorithm based on hop count.",
  },
  {
    id: 80,
    question:
      "Which command verifies the hardware addresses and their associated switch ports?",
    options: [
      "show ip route",
      "show mac address-table",
      "show arp",
      "show interfaces trunk",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The MAC address table (or CAM table) maps Layer 2 MAC addresses to the specific physical switch ports they were learned on.",
  },
  {
    id: 81,
    question: "What is the function of ARP (Address Resolution Protocol)?",
    options: [
      "Mapping IP addresses to MAC addresses.",
      "Mapping MAC addresses to IP addresses.",
      "Assigning IP addresses to clients.",
      "Routing packets to the default gateway.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "ARP resolves a known Layer 3 IP address to an unknown Layer 2 MAC address on the same local network.",
  },
  {
    id: 82,
    question:
      "Which technology allows multiple virtual routers to exist on the same physical router?",
    options: [
      "VLANs",
      "VRF (Virtual Routing and Forwarding)",
      "STP",
      "EtherChannel",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VRF allows a router to maintain multiple, separate routing tables simultaneously, enabling overlapping IP spaces without conflict.",
  },
  {
    id: 83,
    question: "What is the IPv6 equivalent of ARP?",
    options: [
      "DHCPv6",
      "ICMPv6 Echo",
      "NDP (Neighbor Discovery Protocol)",
      "SLAAC",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "NDP replaces ARP in IPv6. It uses ICMPv6 Neighbor Solicitation (NS) and Neighbor Advertisement (NA) messages to resolve MAC addresses.",
  },
  {
    id: 84,
    question:
      "Which command reveals if an interface has been placed in an 'err-disabled' state due to Port Security?",
    options: [
      "show interfaces status",
      "show ip interface brief",
      "show port-security interface",
      "All of the above",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "All three commands provide indicators. 'show interfaces status' explicitly lists 'err-disabled', 'brief' shows 'down/down', and 'show port-security' lists the violation count.",
  },
  {
    id: 85,
    question: "How do you recover a port from the err-disabled state manually?",
    options: [
      "Issue 'no shutdown' on the interface.",
      "Issue 'shutdown' then 'no shutdown' on the interface.",
      "Issue 'clear port-security'.",
      "Reboot the switch.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "To manually reset an err-disabled port, you must first administratively disable it with 'shutdown', then bring it back up with 'no shutdown'.",
  },
  {
    id: 86,
    question:
      "Which of the following is a characteristic of a Next-Generation Firewall (NGFW) that a traditional firewall lacks?",
    options: [
      "Stateful inspection",
      "Access Control Lists",
      "Intrusion Prevention System (IPS) and Deep Packet Inspection",
      "NAT capabilities",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "NGFWs go beyond simple Layer 3/4 port blocking by adding application-layer awareness, integrated IPS, and malware protection via Deep Packet Inspection (DPI).",
  },
  {
    id: 87,
    question:
      "What is the default behavior of OSPF over a Point-to-Point network type?",
    options: [
      "It elects a DR and BDR.",
      "It forms adjacencies without electing a DR/BDR.",
      "It uses a 30-second hello timer.",
      "It requires manual neighbor configuration.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "On point-to-point links (like serial links), OSPF does not elect a Designated Router (DR) or Backup DR (BDR) because there are only two routers on the segment.",
  },
  {
    id: 88,
    question:
      "Which IPv4 address class allows for a maximum of 254 hosts per network?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Class C networks use a default /24 mask (255.255.255.0), providing 8 bits for hosts. 2^8 - 2 = 254 usable host addresses.",
  },
  {
    id: 89,
    question:
      "Which routing logic does a router use if it has a route to 10.1.1.0/24 via OSPF and a route to 10.1.1.0/26 via EIGRP?",
    options: [
      "It load-balances between them.",
      "It chooses EIGRP because EIGRP has a lower AD (90 vs 110).",
      "It chooses EIGRP because the /26 is a longest prefix match.",
      "It chooses OSPF because of link state metrics.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The Longest Prefix Match rule always wins first. Because /26 is more specific than /24, the router will use the EIGRP route for destinations within the /26, regardless of Administrative Distance.",
  },
  {
    id: 90,
    question:
      "What is the function of a 'spine-and-leaf' topology in modern data centers?",
    options: [
      "To create a hierarchical 3-tier architecture.",
      "To provide a predictable, non-blocking fabric where every leaf connects to every spine.",
      "To centralize routing on a single core switch.",
      "To eliminate the need for VLANs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Spine-leaf designs ensure that any server can communicate with any other server across the fabric with a consistent, single hop (Leaf -> Spine -> Leaf), minimizing latency.",
  },
  {
    id: 91,
    question:
      "Which command backs up a Cisco router's running configuration to a TFTP server?",
    options: [
      "copy tftp running-config",
      "copy running-config tftp",
      "backup config tftp",
      "export running-config tftp",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'copy [source] [destination]' syntax means 'copy running-config tftp' sends the active RAM config to the server.",
  },
  {
    id: 92,
    question:
      "When configuring SSH on a Cisco router, what MUST be configured before you can generate RSA crypto keys?",
    options: [
      "An ACL",
      "A hostname and an ip domain-name",
      "VTY line passwords",
      "An enable secret password",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The crypto key generation process combines the router's hostname and the configured IP domain-name to generate the unique RSA certificate.",
  },
  {
    id: 93,
    question:
      "Which command restricts Telnet/SSH access to VTY lines by applying an Access Control List?",
    options: [
      "access-group 10 in",
      "access-class 10 in",
      "ip access-list 10 in",
      "restrict-vty 10 in",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Under the 'line vty 0 4' configuration mode, the 'access-class' command is used to apply standard ACLs to restrict incoming management connections.",
  },
  {
    id: 94,
    question:
      "What is the purpose of the 'ip routing' global configuration command?",
    options: [
      "To start the OSPF process.",
      "To enable Layer 3 routing capabilities on a Layer 3 switch.",
      "To view the routing table.",
      "To enable NAT.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Layer 3 switches function purely at Layer 2 by default. 'ip routing' turns on the routing engine, allowing SVIs and routed ports to forward traffic between subnets.",
  },
  {
    id: 95,
    question:
      "Which IPv6 address is the equivalent of the IPv4 loopback address (127.0.0.1)?",
    options: ["::1", "FE80::1", "2001::1", "FF02::1"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "::1 (or 0:0:0:0:0:0:0:1) is the IPv6 loopback address used for local device testing.",
  },
  {
    id: 96,
    question:
      "What does an OSPF router use to establish adjacency if no Router ID is explicitly configured?",
    options: [
      "The highest MAC address on the router.",
      "The highest IP address of any active physical interface.",
      "The highest IP address of any active Loopback interface.",
      "The default IP 1.1.1.1.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "OSPF Router ID selection order: 1. Manual 'router-id' command, 2. Highest active Loopback IP, 3. Highest active physical interface IP.",
  },
  {
    id: 97,
    question:
      "Which STP feature should be implemented on switch-to-switch links to prevent unidirectional link failures from causing Layer 2 loops?",
    options: [
      "BPDU Guard",
      "Root Guard",
      "UDLD (Unidirectional Link Detection)",
      "PortFast",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "UDLD actively monitors physical fiber or copper links. If one direction fails (creating a unidirectional link), UDLD err-disables the port to prevent STP loops.",
  },
  {
    id: 98,
    question:
      "When configuring a trunk, what is the default encapsulation protocol on older Cisco switches that support multiple protocols?",
    options: ["802.1Q", "ISL", "DTP", "VTP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Older Cisco switches defaulted to Cisco's proprietary ISL (Inter-Switch Link) encapsulation. Modern switches only support the standard 802.1Q.",
  },
  {
    id: 99,
    question:
      "Which of the following is true regarding EIGRP feasibility condition?",
    options: [
      "The Reported Distance (RD) must be strictly less than the current Feasible Distance (FD).",
      "The RD must be equal to or greater than the FD.",
      "The path with the highest bandwidth is always the feasible successor.",
      "EIGRP does not use a feasibility condition.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "To prevent routing loops, a backup route (Feasible Successor) is only accepted if its Reported Distance (the neighbor's cost to the destination) is less than the local router's current best Feasible Distance.",
  },
  {
    id: 100,
    question:
      "What is the primary benefit of deploying 802.1X in a campus network?",
    options: [
      "It encrypts all traffic crossing the switches.",
      "It requires users to authenticate (via RADIUS/EAP) before granting network access at the switch port.",
      "It automatically configures trunk ports.",
      "It mitigates spanning tree loops.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "802.1X provides port-based Network Access Control (NAC). A switch port remains blocked to normal traffic until the connected device successfully authenticates against an authentication server.",
  },
];
