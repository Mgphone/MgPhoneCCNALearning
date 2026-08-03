import type { QuizQuestion } from "./types";
export const troubleshootingQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which command tests end-to-end connectivity and measures round-trip time?",
    options: ["traceroute", "ping", "telnet", "show ip route"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Ping (using ICMP Echo Request/Reply) tests reachability between two devices and measures round-trip time. Traceroute shows the path taken, not just reachability.",
  },
  {
    id: 2,
    question:
      "A user cannot reach a web server. You ping the server's IP address successfully, but pinging its hostname fails. What is the most likely issue?",
    options: [
      "The default gateway is misconfigured.",
      "The DNS server is unreachable or misconfigured.",
      "There is an ACL blocking ICMP traffic.",
      "The web server is offline.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If IP connectivity works but hostname resolution fails, the issue lies with the Domain Name System (DNS).",
  },
  {
    id: 3,
    question:
      "Which command displays the Layer 1 and Layer 2 status of an interface simultaneously?",
    options: [
      "show ip interface brief",
      "show interfaces",
      "show ip route",
      "show controllers",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show interfaces' provides detailed Layer 1 (line status) and Layer 2 (protocol status, MAC, errors) information.",
  },
  {
    id: 4,
    question:
      "An interface shows 'up/down'. What is the most common cause of this state?",
    options: [
      "The cable is unplugged.",
      "The interface is administratively shut down.",
      "A Layer 2 framing or clocking issue exists.",
      "There is an IP address conflict.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Up/Down means Layer 1 (physical) is functional, but Layer 2 (data link) is failing, often due to encapsulation mismatches or keepalive failures.",
  },
  {
    id: 5,
    question:
      "Two switches are connected via GigabitEthernet. Switch A is set to full-duplex, and Switch B is set to half-duplex. What will be the symptom?",
    options: [
      "The link will transition to err-disable.",
      "The link will remain down/down.",
      "High collision rates and late collisions on Switch B.",
      "STP will block the port immediately.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A duplex mismatch causes the half-duplex side to experience collisions (and late collisions), while the full-duplex side experiences runts and FCS errors.",
  },
  {
    id: 6,
    question:
      "You issue 'show interfaces trunk' and see no output. The connected switch is configured with 'switchport mode dynamic auto'. What is the issue?",
    options: [
      "The local switch is also set to dynamic auto.",
      "The native VLANs mismatch.",
      "VTP domain mismatch.",
      "The local switch is set to dynamic desirable.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "If both sides are set to 'dynamic auto', neither side will initiate trunking, so the link falls back to an access port.",
  },
  {
    id: 7,
    question:
      "A PC in VLAN 10 cannot ping a PC in VLAN 20. Both are connected to the same Layer 2 switch. What is missing?",
    options: [
      "A trunk link connecting the two PCs directly together.",
      "A Layer 3 routing device (Router or Layer 3 Switch).",
      "Spanning Tree Protocol to prevent loops in the network.",
      "An IP helper-address on the switch for DHCP forwarding.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "VLANs are separate broadcast domains. Layer 3 routing (Router on a Stick or an SVI on a Multilayer Switch) is required for inter-VLAN communication.",
  },
  {
    id: 8,
    question:
      "What is the primary symptom of a Native VLAN mismatch on an 802.1Q trunk?",
    options: [
      "The trunk port goes into err-disable state.",
      "CDP generates continuous warning messages on the console.",
      "All traffic on the trunk is dropped.",
      "The switches reboot.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco Discovery Protocol (CDP) will detect the native VLAN mismatch and flood the console with syslog warning messages.",
  },
  {
    id: 9,
    question:
      "An access port is placed into an err-disabled state immediately after a PC is plugged in. What is the most likely cause?",
    options: [
      "Speed mismatch.",
      "Duplex mismatch.",
      "Port Security violation.",
      "Missing VLAN assignment.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Port security is designed to immediately shut down (err-disable) a port if an unauthorized MAC address is detected or the maximum MAC limit is exceeded.",
  },
  {
    id: 10,
    question:
      "Which command reveals if a port was shut down due to BPDU Guard?",
    options: [
      "show interfaces status err-disabled",
      "show spanning-tree summary",
      "show ip interface brief",
      "show vlan brief",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'show interfaces status err-disabled' command lists all err-disabled ports and explicitly states the reason (e.g., bpduguard).",
  },
  {
    id: 11,
    question:
      "You configure 'switchport port-security violation restrict'. What happens when an unauthorized PC connects?",
    options: [
      "The port shuts down and is placed into the err-disabled state immediately.",
      "The traffic is dropped, and a syslog message/SNMP trap is generated.",
      "The traffic is dropped silently without any notification to the network admin.",
      "The MAC address is learned dynamically and added to the secure MAC table.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'restrict' violation mode drops unauthorized frames, generates a syslog message, increments the violation counter, and leaves the port up.",
  },
  {
    id: 12,
    question:
      "A DHCP client cannot obtain an IP address from a server located on a different subnet. What must be configured on the router interface facing the client?",
    options: [
      "ip address dhcp",
      "ip helper-address",
      "ip forward-protocol",
      "ip nat inside",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ip helper-address' command configures the router to act as a DHCP relay agent, converting broadcast DHCP requests into unicast packets directed at the DHCP server.",
  },
  {
    id: 13,
    question:
      "Legitimate PCs are being blocked by DHCP Snooping. The switch port connected to the legitimate DHCP server is set to default. How do you fix this?",
    options: [
      "Configure 'ip dhcp snooping trust' on the port connected to the DHCP server.",
      "Disable DHCP snooping globally to stop it from blocking legitimate clients.",
      "Configure 'ip helper-address' on the switch to relay the DHCP broadcasts.",
      "Set the DHCP server port to untrusted so it stops forwarding DHCP offers.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "By default, all ports are untrusted in DHCP Snooping. You must explicitly trust the uplink or port connecting to the legitimate DHCP server.",
  },
  {
    id: 14,
    question:
      "Dynamic ARP Inspection (DAI) is dropping all ARP packets from statically IP-addressed hosts on a VLAN. Why?",
    options: [
      "DAI only works with IPv6, so it cannot validate IPv4 ARP packets at all.",
      "Statically addressed hosts do not have entries in the DHCP Snooping binding database.",
      "The hosts are sending gratuitous ARPs, which DAI always drops by default on all interfaces.",
      "DAI requires Port Security to be configured on the switch port before it will function.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "DAI validates ARP packets against the DHCP Snooping binding table. Static IPs have no DHCP bindings. You must configure an ARP ACL for the static hosts.",
  },
  {
    id: 15,
    question:
      "You suspect an asymmetric routing issue. Which tool provides the path a packet takes from source to destination?",
    options: ["ping", "traceroute", "netstat", "nslookup"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Traceroute identifies the sequence of routers (hops) a packet traverses, which is critical for identifying asymmetric routing paths.",
  },
  {
    id: 16,
    question:
      "You configure 'channel-group 1 mode on' on Switch A and 'channel-group 1 mode active' on Switch B. What is the status of the EtherChannel?",
    options: [
      "It forms successfully using LACP.",
      "It forms successfully using PAgP.",
      "It fails to form due to protocol mismatch.",
      "Switch B dynamically changes to 'mode on'.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "'Mode on' forces the bundle without a negotiation protocol. 'Mode active' strictly uses LACP. They will not negotiate and the channel will fail or err-disable.",
  },
  {
    id: 17,
    question:
      "Which command quickly shows the operational status and protocol of all EtherChannels on a switch?",
    options: [
      "show etherchannel summary",
      "show interfaces port-channel 1",
      "show spanning-tree",
      "show lacp neighbors",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show etherchannel summary' provides a concise table showing the port-channel ID, status (e.g., SU for Layer 2 in-use), protocol (LACP/PAgP), and bundled ports.",
  },
  {
    id: 18,
    question:
      "A PC cannot reach the internet. 'show ip route' on the local router reveals no Gateway of Last Resort. What configuration is missing?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 [next-hop/interface]",
      "ip default-gateway [ip-address]",
      "ip route 255.255.255.255 0.0.0.0 [next-hop]",
      "router ospf 1",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A default static route ('ip route 0.0.0.0 0.0.0.0') is required for a router to forward traffic to unknown destinations (like the internet).",
  },
  {
    id: 19,
    question:
      "You configure a floating static route. Why is it not appearing in the routing table?",
    options: [
      "The primary route via a routing protocol (or lower AD static route) is currently active.",
      "The floating route's next-hop is unreachable.",
      "Floating routes only appear in the running-config, never the routing table.",
      "It requires a redistribution command.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A floating static route has a higher Administrative Distance. It remains hidden in the routing table until the primary route (with a lower AD) fails.",
  },
  {
    id: 20,
    question:
      "Two OSPF routers are stuck in the 'INIT' state. What is the most likely cause?",
    options: [
      "MTU mismatch between the two connected interfaces.",
      "One router is not receiving Hello packets from the other.",
      "Router ID conflict causing an unstable OSPF process.",
      "Authentication mismatch between the two OSPF routers.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The INIT state means a router has received a Hello packet, but its own Router ID is not in the neighbor's Hello packet (indicating one-way communication).",
  },
  {
    id: 21,
    question:
      "Two OSPF routers transition to 'EXSTART' and then get stuck in 'EXSTART/EXCHANGE'. What is the cause?",
    options: [
      "Hello timer mismatch between the two routers.",
      "Area ID mismatch on the shared network segment.",
      "MTU mismatch on the connecting interfaces.",
      "Subnet mask mismatch on the connecting link.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If OSPF Database Description (DBD) packets are dropped because they exceed the interface MTU, the neighbor relationship hangs in the EXSTART/EXCHANGE states.",
  },
  {
    id: 22,
    question:
      "An OSPF neighbor fails to form. You verify Hello and Dead timers match. What else must match for OSPF to form an adjacency?",
    options: [
      "Process ID.",
      "Router ID.",
      "Area ID and Subnet Mask.",
      "Priority value.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "For OSPF neighbors to form, Area ID, Subnet Mask, Hello/Dead timers, Authentication, and Stub flag must match. Process IDs do not need to match.",
  },
  {
    id: 23,
    question:
      "You apply 'passive-interface GigabitEthernet0/0' under 'router ospf 1'. What is the result on G0/0?",
    options: [
      "It stops advertising its subnet into OSPF, so the network is hidden from neighbors.",
      "It stops sending and receiving OSPF Hello packets, preventing adjacencies on that interface.",
      "It becomes a stub area, blocking external routes from being injected into the OSPF domain.",
      "It lowers the OSPF cost of the interface, making the link more preferred for traffic.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The passive-interface command stops routing protocol updates (Hellos) out the interface but still advertises the connected subnet into the OSPF domain.",
  },
  {
    id: 24,
    question:
      "An IPv6 host has the address 2001:DB8:ACAD:1::10/64. It cannot ping its default gateway at 2001:DB8:ACAD:2::1. Why?",
    options: [
      "IPv6 routing is disabled on the gateway router.",
      "The host and gateway are in different subnets.",
      "ICMPv6 is blocked by default on the switch.",
      "EUI-64 must be used for the host address.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The host is on subnet 2001:DB8:ACAD:1::/64, while the gateway is on 2001:DB8:ACAD:2::/64. They are on different subnets and require an intermediate router.",
  },
  {
    id: 25,
    question:
      "Which IPv6 address indicates a link-local address, often used for routing protocol adjacencies?",
    options: ["2001::/3", "FC00::/7", "FE80::/10", "FF00::/8"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "FE80::/10 is the IPv6 link-local prefix. Link-local addresses are strictly used for communication on a single segment and are never routed.",
  },
  {
    id: 26,
    question:
      "A standard ACL is placed on a router's interface. Where is the most optimized location to place a standard ACL?",
    options: [
      "As close to the source as possible.",
      "As close to the destination as possible.",
      "On the core router.",
      "It does not matter.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Standard ACLs only filter based on source IP. Placing them too close to the source could inadvertently block traffic to legitimate alternative destinations.",
  },
  {
    id: 27,
    question:
      "You apply an extended ACL inbound on an interface. Traffic is being dropped unexpectedly. What is at the end of every ACL?",
    options: [
      "An explicit permit any any.",
      "An implicit deny any (or deny ip any any).",
      "A logging statement.",
      "A redirect rule.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Every Access Control List ends with an invisible 'implicit deny' rule that blocks all traffic not explicitly permitted by preceding statements.",
  },
  {
    id: 28,
    question:
      "Which configuration syntax correctly identifies a host in an Extended IPv4 ACL?",
    options: [
      "permit ip 192.168.1.1 255.255.255.0 any",
      "permit ip host 192.168.1.50 any",
      "permit 192.168.1.50 any",
      "permit ip 192.168.1.50 0.0.0.255 any",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In extended ACLs, a specific host is designated using the 'host' keyword followed by the IP, or by using a wildcard mask of 0.0.0.0.",
  },
  {
    id: 29,
    question:
      "A router translates internal private IPs to a single public IP address using port numbers. What is this called?",
    options: [
      "Static NAT",
      "Dynamic NAT",
      "PAT (NAT Overload)",
      "Policy-Based Routing",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Port Address Translation (PAT), also known as NAT Overload, uses source port numbers to map multiple private IP addresses to a single public IP address.",
  },
  {
    id: 30,
    question:
      "You configure NAT, but translations are not occurring. You verify the ACL and pool. What interface-level commands are frequently forgotten?",
    options: [
      "ip nat inside and ip nat outside",
      "ip virtual-reassembly",
      "ip route-cache flow",
      "ip access-group",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "NAT requires interfaces to be explicitly defined as 'ip nat inside' (facing the private network) and 'ip nat outside' (facing the public/ISP network).",
  },
  {
    id: 31,
    question:
      "You want to SSH into a router, but the connection is refused. You can ping the router. What configuration is missing?",
    options: [
      "Crypto key generation (crypto key generate rsa).",
      "ip default-gateway for the management subnet.",
      "Line console 0 login local authentication setup.",
      "Enable secret for privileged exec access.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "SSH requires RSA keys to encrypt the session. If 'crypto key generate rsa' hasn't been run, the SSH server will not start.",
  },
  {
    id: 32,
    question:
      "Under 'line vty 0 4', you configure 'transport input telnet'. What is the result?",
    options: [
      "Only SSH is allowed.",
      "Both SSH and Telnet are allowed.",
      "Only Telnet is allowed, SSH is blocked.",
      "All remote access is blocked.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'transport input' command strictly defines which protocols can connect to the VTY lines. Specifying 'telnet' explicitly blocks SSH.",
  },
  {
    id: 33,
    question:
      "A switch's time is showing as 1993. You configure an NTP server, but 'show ntp status' says 'Clock is unsynchronized'. What might block NTP?",
    options: [
      "An ACL blocking UDP port 123.",
      "An ACL blocking TCP port 123.",
      "Spanning tree blocking the port.",
      "CDP is disabled.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Network Time Protocol (NTP) relies on UDP port 123. If firewalls or ACLs block this port, the clock cannot synchronize.",
  },
  {
    id: 34,
    question:
      "Which protocol securely synchronizes network configurations and automates device provisioning using JSON/XML?",
    options: ["SNMPv2c", "NETCONF / RESTCONF", "Syslog", "TFTP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "NETCONF and RESTCONF are modern network automation protocols that securely transport configuration data encoded in XML or JSON using SSH or HTTPS.",
  },
  {
    id: 35,
    question:
      "In a Python script automating a Cisco router, a REST API call returns an HTTP 401 code. What does this mean?",
    options: [
      "Resource Not Found.",
      "Internal Server Error.",
      "Unauthorized (Authentication failure).",
      "Bad Request (Syntax error).",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "HTTP 401 means Unauthorized. The API key, token, or credentials provided in the script are missing or invalid.",
  },
  {
    id: 36,
    question:
      "What is the result of configuring 'spanning-tree portfast' on a trunk port connected to another switch?",
    options: [
      "The link operates normally with faster convergence.",
      "A temporary or permanent bridging loop may occur.",
      "The trunk fails to negotiate.",
      "BPDU Guard automatically err-disables it.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Portfast bypasses Listening/Learning states. If applied to a switch-to-switch link, it can instantly create a bridging loop before BPDUs have time to block the redundant path.",
  },
  {
    id: 37,
    question:
      "You replace a router. The new router has the same IP, but local PCs cannot ping it. PCs can ping each other. What is the cause?",
    options: [
      "The PCs have the old router's MAC address cached in their ARP tables.",
      "The switch's MAC address table is full and cannot store any new entries.",
      "The new router needs a default route to reach the local PCs.",
      "DHCP is disabled on the new router, so the PCs cannot get an IP.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The PCs' ARP cache still maps the gateway IP to the old router's MAC address. Clearing the ARP cache on the PCs or waiting for the timeout will fix it.",
  },
  {
    id: 38,
    question:
      "A wireless client successfully authenticates to a WPA2-Enterprise WLAN but gets a 169.254.x.x IP address. What is the issue?",
    options: [
      "RADIUS server is unreachable.",
      "DHCP server is unreachable or exhausted.",
      "Wrong Pre-Shared Key (PSK).",
      "The Access Point is offline.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A 169.254.x.x address is an APIPA address, meaning the client authenticated at Layer 2 but failed to obtain a Layer 3 DHCP address.",
  },
  {
    id: 39,
    question:
      "Which Cisco IOS command displays the DR and BDR for an OSPF multi-access network?",
    options: [
      "show ip ospf neighbor",
      "show ip route ospf",
      "show ip protocols",
      "show ospf database",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ip ospf neighbor' displays the neighbor ID, state (e.g., FULL/DR or FULL/BDR), and the local interface connected to that neighbor.",
  },
  {
    id: 40,
    question:
      "An EIGRP adjacency is flapping. What is a common configuration cause for this behavior?",
    options: [
      "Mismatched K-values.",
      "Mismatched Autonomous System (AS) numbers.",
      "Unidirectional link or missing metric weights.",
      "Overlapping subnets or duplicate Router IDs.",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "Duplicate Router IDs in EIGRP (or OSPF) can cause continuous adjacency flapping as routers get confused about the origin of routing updates.",
  },
  {
    id: 41,
    question:
      "You want to back up a router's configuration to a server. Which protocol transfers files unencrypted?",
    options: ["SCP", "SFTP", "TFTP", "HTTPS"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Trivial File Transfer Protocol (TFTP) operates over UDP port 69 and transfers files in cleartext. SCP and SFTP use SSH for encryption.",
  },
  {
    id: 42,
    question:
      "Which JSON data structure represents an ordered list of items, denoted by square brackets [ ]?",
    options: ["Object", "Dictionary", "Array", "Key-Value Pair"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In JSON, square brackets [ ] enclose an Array (an ordered list of values). Curly braces { } enclose an Object.",
  },
  {
    id: 43,
    question:
      "A MAC address is 48 bits long. How is an IPv6 MAC-based EUI-64 address generated?",
    options: [
      "By inverting the first bit of the MAC address to mark it local.",
      "By appending FFFF to the end of the MAC and using the result directly.",
      "By inserting FFFE in the middle and inverting the 7th bit.",
      "By hashing the MAC address with MD5 to produce a fixed 64-bit output.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "EUI-64 splits the 48-bit MAC in half, inserts 'FFFE' in the middle, and flips the 7th bit (Universal/Local bit) to create a 64-bit interface ID.",
  },
  {
    id: 44,
    question:
      "You observe a high number of 'runts' in the 'show interfaces' output. What is a runt?",
    options: [
      "A frame larger than 1518 bytes.",
      "A frame smaller than 64 bytes with a bad FCS.",
      "A late collision.",
      "A broadcast storm packet.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A runt is an Ethernet frame that is smaller than the minimum legal size of 64 bytes, usually caused by collisions or a faulty NIC.",
  },
  {
    id: 45,
    question:
      "How do you verify which VLANs are allowed across a specific trunk link?",
    options: [
      "show vlan brief",
      "show interface trunk",
      "show spanning-tree",
      "show mac address-table",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show interface trunk' displays the trunking status, native VLAN, and explicitly lists the VLANs allowed and active on the trunk.",
  },
  {
    id: 46,
    question:
      "A default route is configured as 'ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/1'. Why is this dangerous on an Ethernet network?",
    options: [
      "It disables CEF switching, forcing the router to use the much slower process-switching path for all traffic.",
      "It causes an ARP request for every unknown destination IP on the internet, exhausting router memory.",
      "It creates a permanent routing loop between the router and all of the directly connected devices on that interface.",
      "It only works for IPv6 traffic and is completely ignored for IPv4 packets under any circumstance.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Routing out a multi-access interface without a next-hop IP forces the router to send an ARP request for every external destination, leading to huge ARP tables and failure. Always use a next-hop IP.",
  },
  {
    id: 47,
    question:
      "Which command assigns an IPv6 address to an interface using Stateless Address Autoconfiguration (SLAAC)?",
    options: [
      "ipv6 address dhcp",
      "ipv6 address autoconfig",
      "ipv6 enable",
      "ipv6 nd ra suppress",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'ipv6 address autoconfig' command allows the interface to generate its own IPv6 address using SLAAC based on Router Advertisement (RA) messages.",
  },
  {
    id: 48,
    question:
      "A switch has PoE enabled, but an IP phone is not powering on. The command 'show power inline' reveals the port is in 'fault' state. What is likely wrong?",
    options: [
      "CDP is disabled on the port so the phone cannot be discovered.",
      "The switch power supply budget is exceeded or there is a cable short.",
      "The phone is not configured with a voice VLAN, so it gets no data tags.",
      "Port security blocked the phone's MAC address from accessing the port.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A 'fault' state in PoE indicates a hardware-level issue, such as a short circuit in the cable or the switch lacking sufficient wattage to power the device.",
  },
  {
    id: 49,
    question:
      "You want to capture traffic from Fa0/1 and analyze it on Fa0/2 using Wireshark. Which feature must be configured?",
    options: ["NetFlow (traffic flow export)", "SNMPv3 (secure monitoring)", "SPAN (Switched Port Analyzer)", "Syslog (log message capture)"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "SPAN (Port Mirroring) copies traffic from a source port to a destination port, allowing network analyzers to inspect the packets without interrupting flow.",
  },
  {
    id: 50,
    question:
      "What is the primary difference between a traditional WAN and SD-WAN?",
    options: [
      "SD-WAN uses physical dedicated leased lines only and cannot take advantage of broadband or LTE transports.",
      "SD-WAN decouples the control plane from the data plane, centralizing management across multiple WAN transport links.",
      "Traditional WANs use OSPF as their primary routing protocol, while SD-WAN implementations use the RIP protocol in its place.",
      "SD-WAN cannot use broadband internet at all, so it must rely on private MPLS circuits for all of its traffic.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "SD-WAN uses Software-Defined Networking (SDN) principles to abstract the transport hardware, using a centralized controller to dynamically route traffic over MPLS, broadband, or LTE based on policy.",
  },
  {
    id: 51,
    question:
      "Which command shows the OSPF process ID, Router ID, and networks being advertised?",
    options: [
      "show ip route",
      "show ip ospf interface",
      "show ip protocols",
      "show ip ospf database",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show ip protocols' gives a high-level summary of active routing protocols, their AS/Process IDs, Router IDs, and the specific networks they are configured to route.",
  },
  {
    id: 52,
    question:
      "You configure HSRP between two routers. Router A is Active, Router B is Standby. Router A goes down, but PC traffic drops. What could be the issue?",
    options: [
      "The PCs are configured with Router A's physical IP instead of the HSRP Virtual IP.",
      "HSRP preempt is missing on Router B, so it cannot take over the active role quickly.",
      "Router B has a higher priority, so it would win the election incorrectly.",
      "Spanning Tree is blocking traffic on the link between the two routers.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "First Hop Redundancy Protocols (FHRPs) like HSRP require end hosts to point to the Virtual IP address as their default gateway, not the physical interface IP of the routers.",
  },
  {
    id: 53,
    question:
      "Which wireless security protocol utilizes SAE (Simultaneous Authentication of Equals) to protect against dictionary attacks?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "WPA3 replaces WPA2's Pre-Shared Key (PSK) handshake with SAE, providing forward secrecy and robust protection against offline dictionary attacks.",
  },
  {
    id: 54,
    question:
      "You want to limit remote SSH access to a router to only specific IT management IPs. How do you apply the ACL?",
    options: [
      "ip access-group 10 in on the Gigabit interface.",
      "access-class 10 in on the VTY lines.",
      "access-list 10 out on the VTY lines.",
      "ip nat inside source list 10.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "To restrict management plane access (SSH/Telnet), you apply a standard ACL to the VTY lines using the 'access-class [number] in' command.",
  },
  {
    id: 55,
    question:
      "A dynamic NAT pool has 5 public IPs. 6 inside users try to access the internet simultaneously. What happens to the 6th user if PAT is NOT configured?",
    options: [
      "The user's traffic is dropped until a public IP becomes available.",
      "The router dynamically borrows an additional IP address from the ISP.",
      "The router shares the 5th public IP automatically among all the users.",
      "The connection works but is very slow due to heavy network congestion.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Without Port Address Translation (NAT Overload), Dynamic NAT is a strictly 1-to-1 mapping. If the pool is exhausted, subsequent internal hosts are denied translation and dropped.",
  },
  {
    id: 56,
    question:
      "What is the administrative distance of an External OSPF route (O E2)?",
    options: ["90", "110", "120", "170"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "All OSPF routes (Intra-area, Inter-area, and External) share the same default Administrative Distance of 110.",
  },
  {
    id: 57,
    question:
      "Which component of SDN architecture handles the actual forwarding of data packets?",
    options: [
      "Management Plane",
      "Control Plane",
      "Data Plane",
      "Application Plane",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Data Plane (or Forwarding Plane) is responsible for moving packets through the network hardware based on tables built by the Control Plane.",
  },
  {
    id: 58,
    question:
      "What is the purpose of the 'logging synchronous' command on a console line?",
    options: [
      "It synchronizes router logs with an NTP server for accurate timestamps.",
      "It prevents console syslog messages from interrupting your active CLI typing.",
      "It encrypts syslog messages so that attackers cannot read the sensitive log data.",
      "It limits the number of logs sent per second to the syslog server.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'logging synchronous' repaints the command line input after a console message appears, keeping your typed commands clean and readable.",
  },
  {
    id: 59,
    question:
      "A switch receives a frame with a destination MAC of FFFF.FFFF.FFFF. What does the switch do?",
    options: [
      "Drops the frame silently because broadcast frames are never forwarded.",
      "Routes the frame to the destination based on the routing table.",
      "Floods the frame out all ports in the VLAN except the receiving port.",
      "Sends it to the controller for further policy decision making.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "FFFF.FFFF.FFFF is the Layer 2 broadcast address. The switch will flood broadcast frames out every interface participating in the source's VLAN, except the incoming port.",
  },
  {
    id: 60,
    question: "An IPv6 route is shown as '::/0'. What does this represent?",
    options: [
      "The loopback address.",
      "The default route.",
      "An unspecified address.",
      "A multicast route.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "::/0 is the IPv6 equivalent of 0.0.0.0 0.0.0.0, representing the IPv6 default route for all unknown destinations.",
  },
  {
    id: 61,
    question:
      "You want to verify the MAC address of a directly connected router. Which protocol dynamically discovers the IP-to-MAC mapping for IPv4?",
    options: ["NDP", "ARP", "DHCP", "DNS"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Address Resolution Protocol (ARP) resolves known IPv4 addresses to unknown Layer 2 MAC addresses.",
  },
  {
    id: 62,
    question:
      "You want to verify the MAC address of a directly connected router. Which protocol dynamically discovers the IP-to-MAC mapping for IPv6?",
    options: ["NDP", "ARP", "ICMPv4", "EIGRP"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "IPv6 does not use ARP. It uses the Neighbor Discovery Protocol (NDP), utilizing ICMPv6 Neighbor Solicitation and Advertisement messages to map IPs to MACs.",
  },
  {
    id: 63,
    question:
      "In a Controller-Based architecture (like Cisco DNA Center), which API connects the controller to the network infrastructure devices?",
    options: [
      "Northbound API",
      "Southbound API",
      "Eastbound API",
      "Westbound API",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Southbound APIs (like NETCONF, OpenFlow, or SSH/CLI) are used by the SDN controller to push configurations down to the physical routers and switches.",
  },
  {
    id: 64,
    question:
      "A trunk port is configured with 'switchport trunk allowed vlan 10,20'. You run 'switchport trunk allowed vlan 30'. What happens?",
    options: [
      "VLAN 30 is added; the trunk now allows 10, 20, 30.",
      "VLANs 10 and 20 are removed; the trunk ONLY allows VLAN 30.",
      "The command is rejected.",
      "VLAN 30 becomes the native VLAN.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Without the 'add' keyword (e.g., 'switchport trunk allowed vlan add 30'), the command completely overrides the previous list, dropping traffic for VLANs 10 and 20.",
  },
  {
    id: 65,
    question:
      "Which 802.11 frame type is used by a wireless client to discover available Access Points?",
    options: [
      "Beacon frame",
      "Probe Request",
      "Authentication frame",
      "RTS/CTS",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Clients actively scan for networks by broadcasting Probe Requests. APs respond with Probe Responses. (Beacons are passively sent by APs).",
  },
  {
    id: 66,
    question:
      "What is the primary function of a Wireless LAN Controller (WLC) in a split-mac architecture?",
    options: [
      "To handle the real-time RF framing and radio transmissions on the air interface.",
      "To centralize management, authentication, and roaming for Lightweight Access Points (LAPs).",
      "To act as a firewall that filters all incoming wireless traffic before it is forwarded.",
      "To replace Layer 3 routing functions on the access layer of the wireless network.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In a split-MAC architecture, the LAP handles real-time RF transmissions, while the WLC handles non-real-time tasks like security, roaming, and management.",
  },
  {
    id: 67,
    question:
      "Which protocol establishes a secure tunnel between a Lightweight Access Point and a WLC?",
    options: ["IPsec", "GRE", "CAPWAP", "SSL/TLS"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Control and Provisioning of Wireless Access Points (CAPWAP) creates a tunnel to transmit control plane management traffic (encrypted) and data plane user traffic to the WLC.",
  },
  {
    id: 68,
    question:
      "When applying an Access Control List, what is the default behavior if an interface does not have an ACL applied?",
    options: [
      "All traffic is denied.",
      "All traffic is permitted.",
      "Only routing updates are permitted.",
      "It prompts for authentication.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If no ACL is bound to an interface via 'ip access-group', the router forwards all traffic by default without restriction.",
  },
  {
    id: 69,
    question:
      "Which OSPF network type is the default on an Ethernet link and elects a DR/BDR?",
    options: [
      "Point-to-Point",
      "Non-Broadcast",
      "Broadcast",
      "Point-to-Multipoint",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Ethernet interfaces default to the OSPF 'Broadcast' network type, which uses multicast to discover neighbors and elects a Designated Router to minimize LSA flooding.",
  },
  {
    id: 70,
    question:
      "What command forces an immediate OSPF SPF calculation and resets the adjacencies?",
    options: [
      "clear ip route *",
      "clear ip ospf process",
      "restart ospf 1",
      "no router ospf 1",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'clear ip ospf process' command tears down OSPF adjacencies, clears the database, and forces a recalculation, which is useful after changing a Router ID.",
  },
  {
    id: 71,
    question:
      "You want to securely copy a file from your laptop to a router. Which transport protocol does SCP use?",
    options: ["UDP", "TCP", "ICMP", "IP"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Secure Copy Protocol (SCP) relies on SSH, which operates over TCP port 22, ensuring reliable and encrypted file delivery.",
  },
  {
    id: 72,
    question: "Which syslog severity level is represented by level 0?",
    options: ["Informational", "Warning", "Critical", "Emergency"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Syslog levels range from 0 (Emergency - system is unusable) to 7 (Debugging). Level 1 is Alert, 2 is Critical.",
  },
  {
    id: 73,
    question:
      "You have a network 192.168.1.0/24. You borrow 3 bits for subnetting. How many usable hosts per subnet do you get?",
    options: ["8", "30", "32", "6"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Borrowing 3 bits leaves 5 bits for hosts. 2^5 = 32. Subtract 2 (network and broadcast addresses) = 30 usable hosts.",
  },
  {
    id: 74,
    question:
      "Which technology allows multiple virtual routing tables to exist on a single physical router simultaneously?",
    options: [
      "VLANs",
      "VRF (Virtual Routing and Forwarding)",
      "VTP (VLAN Trunking Protocol)",
      "SVI",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VRF creates isolated routing and forwarding tables on a single router, allowing overlapping IP spaces and segmented traffic paths.",
  },
  {
    id: 75,
    question:
      "A route in the routing table has an AD of 90 and a metric of 30720. Which protocol generated this route?",
    options: ["OSPF", "Static Route", "EIGRP", "RIP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Internal EIGRP has a default Administrative Distance of 90. Its metric is a composite value usually in the tens or hundreds of thousands.",
  },
  {
    id: 76,
    question:
      "If a router receives a packet destined for 10.1.1.5, and has routes for 10.1.1.0/24 (OSPF) and 10.1.1.0/28 (RIP), which does it choose?",
    options: [
      "The OSPF route because its AD (110) is lower than RIP (120).",
      "The RIP route because it has the longest prefix match (/28).",
      "It load balances between them.",
      "It drops the packet.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Longest Prefix Match rule always overrides Administrative Distance. AD is only used to break ties if the prefix lengths are identical.",
  },
  {
    id: 77,
    question:
      "Which quality of service (QoS) marking mechanism operates at Layer 2?",
    options: ["DSCP", "IP Precedence", "CoS (Class of Service)", "NBAR"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Class of Service (CoS) uses a 3-bit field within the 802.1Q VLAN tag to mark frames at Layer 2. DSCP operates at Layer 3 inside the IP header.",
  },
  {
    id: 78,
    question:
      "What does a First Hop Redundancy Protocol (FHRP) MAC address starting with 0000.0c07.ac... indicate?",
    options: ["VRRP", "GLBP", "HSRPv1", "HSRPv2"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "0000.0c07.acXX is the well-known virtual MAC address for HSRP version 1, where XX is the group number in hex.",
  },
  {
    id: 79,
    question:
      "Which of the following is a characteristic of single-mode fiber (SMF) compared to multi-mode fiber (MMF)?",
    options: [
      "Uses an LED light source.",
      "Has a larger core diameter.",
      "Supports much longer distances.",
      "Is cheaper to implement for short patch cables.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "SMF uses a laser light source and a very small core, eliminating modal dispersion and allowing transmission over many kilometers.",
  },
  {
    id: 80,
    question:
      "A PoE+ (802.3at) port provides a maximum of how much power to a device?",
    options: ["15.4 W", "30 W", "60 W", "90 W"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Standard PoE (802.3af) provides up to 15.4W. PoE+ (802.3at) provides up to 30W. UPOE/PoE++ provide 60W or higher.",
  },
  {
    id: 81,
    question:
      "You want to allow ping (Echo Request) through an Extended ACL. Which protocol keyword must you use?",
    options: ["ip", "tcp", "udp", "icmp"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Ping operates using Internet Control Message Protocol (ICMP). You must permit ICMP to allow ping, rather than TCP or UDP.",
  },
  {
    id: 82,
    question: "Which command assigns a device name to a Cisco IOS switch?",
    options: [
      "name [hostname]",
      "hostname [name]",
      "system-name [name]",
      "set host [name]",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The global configuration command 'hostname' changes the name of the device, which updates the CLI prompt immediately.",
  },
  {
    id: 83,
    question:
      "What does the 'ip routing' command do on a Layer 3 Catalyst switch?",
    options: [
      "Enables an IP routing protocol like OSPF on the switch automatically.",
      "Enables IPv6 routing globally on the switch hardware.",
      "Enables the switch to forward packets between VLANs at Layer 3.",
      "Configures a default route for outbound internet traffic.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Multilayer switches act as Layer 2 devices by default. The global 'ip routing' command enables the routing engine, allowing it to route between SVIs and routed ports.",
  },
  {
    id: 84,
    question:
      "In standard JSON syntax, how are key-value pairs separated from each other?",
    options: [
      "By a semicolon (;)",
      "By a colon (:)",
      "By a comma (,)",
      "By a period (.)",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In JSON, keys are separated from values by a colon (:), but consecutive key-value pairs within an object are separated by commas (,).",
  },
  {
    id: 85,
    question:
      "You need to automate device configurations securely using an API over HTTP. Which encoding format is predominantly used in REST APIs?",
    options: ["YAML", "XML", "JSON", "CSV"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "While REST can support multiple formats (like XML), JSON (JavaScript Object Notation) is the dominant, lightweight data format used in modern RESTful APIs.",
  },
  {
    id: 86,
    question: "What is the primary role of a Cisco DNA Center in a network?",
    options: [
      "To act as a core routing engine that forwards all of the data traffic in the enterprise network.",
      "To provide an SDN controller for design, policy provisioning, and assurance in enterprise networks.",
      "To serve solely as a syslog server that collects device logs from all network devices for compliance.",
      "To replace the perimeter firewalls with its built-in security inspection and filtering features.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cisco DNA Center is the central management and control platform (SDN controller) for Cisco SD-Access, providing automated provisioning and analytics.",
  },
  {
    id: 87,
    question:
      "A switch port is configured with 'switchport mode access' and 'switchport access vlan 99'. If you connect another switch to this port, what happens?",
    options: [
      "They negotiate a trunk link carrying all allowed VLANs between them.",
      "The link operates as an access link passing only VLAN 99 traffic.",
      "The port err-disables immediately due to the security violation.",
      "Spanning tree blocks the port to prevent a Layer 2 loop from forming.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Hardcoding 'mode access' disables DTP trunk negotiation. The port will operate as a standard access port for VLAN 99, even if a switch is connected.",
  },
  {
    id: 88,
    question: "Which of the following describes a 'Type 1' hypervisor?",
    options: [
      "It runs on top of a standard host operating system like Windows.",
      "It runs directly on the server's bare-metal hardware.",
      "It is used exclusively for containerization.",
      "It requires a software router to function.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A Type 1 (Bare-metal) hypervisor runs directly on the hardware (e.g., VMware ESXi). A Type 2 hypervisor runs on top of an OS (e.g., VirtualBox).",
  },
  {
    id: 89,
    question: "In cloud computing, what does SaaS stand for?",
    options: [
      "Storage as a Service",
      "Software as a Service",
      "Security as a Service",
      "Systems as a Service",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SaaS provides users with access to a vendor's cloud-based software (like Office 365 or Webex) without needing to install or maintain the underlying application.",
  },
  {
    id: 90,
    question:
      "You want to verify if a routing protocol has installed a default route. Which command specifically filters the routing table to show only the default route?",
    options: [
      "show ip route ospf",
      "show ip route 0.0.0.0",
      "show ip route connected",
      "show ip route default",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip route 0.0.0.0' specifically queries the routing table for the quad-zero default route and displays its source and metrics.",
  },
  {
    id: 91,
    question:
      "What is the function of the 'ip domain-lookup' command (which is enabled by default)?",
    options: [
      "It enables the router to act as a DNS server for all of the connected local clients.",
      "It forces the router to resolve mistyped CLI commands to DNS, often causing a long freeze.",
      "It encrypts DNS queries so that the lookup traffic cannot be read by network attackers.",
      "It dynamically assigns hostnames to devices based on their MAC addresses and IPs.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, if you type an unrecognized command, the router assumes it's a hostname and tries to resolve it via DNS, locking the CLI. 'no ip domain-lookup' disables this.",
  },
  {
    id: 92,
    question:
      "Which spanning-tree version is configured by default on a modern Cisco Catalyst switch?",
    options: ["IEEE 802.1D CST", "IEEE 802.1s MST", "PVST+", "Rapid-PVST+"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "PVST+ (Per-VLAN Spanning Tree Plus) is the historical and out-of-the-box default on Cisco Catalyst switches, though most admins immediately upgrade to Rapid-PVST+.",
  },
  {
    id: 93,
    question:
      "You are setting up Port Security. Which MAC address learning method allows the switch to dynamically learn the MAC and save it to the startup-config?",
    options: [
      "Dynamic learning",
      "Static learning",
      "Sticky learning",
      "Portfast learning",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'sticky' keyword tells the switch to dynamically learn the connected MAC address and write it into the running configuration, which can then be saved.",
  },
  {
    id: 94,
    question: "What does the syslog severity level '5' represent?",
    options: ["Errors", "Warnings", "Notifications", "Informational"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Syslog levels: 0-Emerg, 1-Alert, 2-Crit, 3-Err, 4-Warn, 5-Notice (Notifications), 6-Info, 7-Debug. Level 5 indicates normal, but significant, conditions (like interface up/down).",
  },
  {
    id: 95,
    question:
      "Which field in an IPv4 header is decremented by 1 every time the packet passes through a router?",
    options: [
      "Fragment Offset",
      "Type of Service",
      "Header Checksum",
      "Time to Live (TTL)",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The TTL field prevents routing loops. It is decremented by routers. If it reaches 0, the router drops the packet and sends an ICMP Time Exceeded message.",
  },
  {
    id: 96,
    question: "How does IPv6 prevent infinite routing loops?",
    options: [
      "By using the TTL field.",
      "By using the Hop Limit field.",
      "By utilizing OSPFv3 exclusively.",
      "By dropping packets after 15 hops.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IPv6 replaced the IPv4 'Time to Live' (TTL) field with the identically functioning 'Hop Limit' field.",
  },
  {
    id: 97,
    question:
      "Which command displays the amount of flash memory available on a Cisco router?",
    options: ["show memory", "show flash:", "show version", "show processes"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show flash:' command lists the files in flash memory (including the IOS image) and displays total and free space.",
  },
  {
    id: 98,
    question:
      "When automating network configurations, what is a key advantage of JSON over XML?",
    options: [
      "JSON requires a strict schema definition to be declared for every document that it produces.",
      "JSON uses tags, making it highly verbose and explicit for every single data element in the file.",
      "JSON is generally lighter, easier for humans to read, and maps directly to Python dictionaries.",
      "JSON is proprietary to Cisco, so it cannot be used with network equipment from other vendors.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "JSON is less verbose than XML because it uses simple key-value pairs and arrays without closing tags, making it faster to parse and highly compatible with Python.",
  },
  {
    id: 99,
    question:
      "A router interface is configured with IPv6. You want to see the link-local and global unicast addresses. Which command is best?",
    options: [
      "show ipv6 neighbors",
      "show ipv6 route",
      "show ipv6 interface brief",
      "show ip interface brief",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show ipv6 interface brief' outputs the interface status alongside both its link-local (FE80::) and any assigned global unicast IPv6 addresses.",
  },
  {
    id: 100,
    question:
      "Which network plane is heavily protected by features like Control Plane Policing (CoPP)?",
    options: [
      "Data Plane",
      "Management Plane",
      "Control Plane",
      "Forwarding Plane",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "CoPP restricts the rate of traffic destined specifically for the router's CPU (Control Plane), protecting it from DoS attacks and ensuring routing protocols remain stable.",
  },
  {
    id: 222,
    question:
      "What does a '!' (exclamation mark) indicate when running a ping?",
    options: [
      "The ping timed out",
      "A successful ping reply was received",
      "The destination is unreachable",
      "The packet was fragmented",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In Cisco IOS, '!' indicates a successful echo reply. '.' indicates a timeout, 'U' indicates destination unreachable, and 'M' indicates a fragmentation problem.",
  },
  {
    id: 333,
    question: "What is a common cause of excessive CRC errors on an interface?",
    options: [
      "IP address misconfiguration",
      "Cabling issues or faulty hardware",
      "Routing protocol misconfiguration",
      "VLAN mismatch",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "CRC (Cyclic Redundancy Check) errors typically indicate physical layer issues such as bad cabling, faulty transceivers, or electromagnetic interference causing frame corruption.",
  },
  {
    id: 444,
    question: "What does the 'show ip interface brief' command output do?",
    options: [
      "Shows detailed interface configuration including all running parameters",
      "Shows a summary of interface IP addresses, status, and protocol status",
      "Shows the routing table entries for each interface on the device",
      "Shows the MAC address table entries for each interface on the switch",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip interface brief' displays each interface's IP address, line status (up/down), and protocol status (up/down) in a table format, quickly identifying down interfaces.",
  },
  {
    id: 555,
    question: "What usually causes a duplex mismatch on a switch link?",
    options: [
      "Both devices are set to full-duplex, matching speed and duplex settings",
      "Both devices are set to half-duplex, matching speed and duplex settings",
      "One side is hard-coded to full-duplex while the other is set to auto-negotiation",
      "The cable length exceeds 100 meters, which is the maximum Ethernet segment limit",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Duplex mismatch occurs when one interface is manually configured for full-duplex while the other side is set to auto-negotiation (which fails to detect the duplex setting). This causes late collision errors and poor performance.",
  },
];
