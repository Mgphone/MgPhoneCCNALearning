import type { QuizQuestion } from "./types";

export const dhcpQuestions: QuizQuestion[] = [
  // --- DHCP Basics & DORA Process ---
  {
    id: 1,
    question: "What does the acronym DORA stand for in the DHCP process?",
    options: [
      "Discover, Offer, Request, Acknowledgment",
      "Detect, Open, Read, Assign",
      "Data, Offer, Request, Accept",
      "Discover, Open, Request, Accept",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "DORA describes the four-step DHCP process: the client sends a Discover, the server replies with an Offer, the client sends a Request, and the server sends an Acknowledgment.",
  },
  {
    id: 2,
    question: "At which layer of the OSI model does DHCP operate?",
    options: [
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)",
      "Layer 7 (Application)",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "DHCP is an Application Layer (Layer 7) protocol that relies on UDP at the Transport layer to function.",
  },
  {
    id: 3,
    question:
      "What type of message does a DHCP client initially send to find a DHCP server?",
    options: ["Unicast", "Multicast", "Broadcast", "Anycast"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The initial DHCPDISCOVER message is sent as a Layer 2 (FF:FF:FF:FF:FF:FF) and Layer 3 (255.255.255.255) broadcast because the client does not yet have an IP address or know the server's IP.",
  },
  {
    id: 4,
    question: "Which UDP ports are used by DHCP for IPv4?",
    options: [
      "Ports 20 and 21",
      "Ports 67 and 68",
      "Ports 69 and 70",
      "Ports 80 and 443",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DHCP uses UDP port 67 for the server destination port and UDP port 68 for the client destination port.",
  },
  {
    id: 5,
    question:
      "During the DORA process, which message is sent by the client to officially accept the offered IP address?",
    options: ["DHCPDISCOVER", "DHCPOFFER", "DHCPREQUEST", "DHCPACK"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The DHCPREQUEST message is sent by the client to accept the IP address offered by the server. It is broadcasted to inform all other listening DHCP servers that an offer was accepted.",
  },
  {
    id: 6,
    question:
      "If a DHCP client reboots, what message does it send to attempt to reclaim its previously assigned IP address?",
    options: ["DHCPDISCOVER", "DHCPREQUEST", "DHCPINFORM", "DHCPRENEW"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Upon rebooting, a client will skip the Discover phase and send a DHCPREQUEST to try and reclaim its previously leased IP address.",
  },
  {
    id: 7,
    question: "What is the source IP address of a DHCPDISCOVER packet?",
    options: [
      "255.255.255.255",
      "169.254.0.1",
      "0.0.0.0",
      "The client's previous IP address",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Because the client does not yet possess an IP address, the source IP in the IPv4 header of a DHCPDISCOVER message is 0.0.0.0.",
  },
  {
    id: 8,
    question:
      "What happens if a DHCP client fails to receive a DHCPOFFER after sending a DHCPDISCOVER?",
    options: [
      "It randomly generates a public IP address for itself.",
      "It permanently disables its entire network interface.",
      "It typically assigns itself an APIPA address (169.254.x.x).",
      "It sends a DHCPNAK message out to the entire network.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "If no DHCP server responds, most modern operating systems will auto-assign a link-local Automatic Private IP Address (APIPA) in the 169.254.0.0/16 range.",
  },
  {
    id: 9,
    question:
      "Which DHCP message is used by a client to politely return its leased IP address to the server before the lease expires?",
    options: ["DHCPDECLINE", "DHCPNAK", "DHCPRELEASE", "DHCPINFORM"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A DHCPRELEASE message is sent by a client to the server to voluntarily relinquish its IP address lease.",
  },
  {
    id: 10,
    question:
      "Which DHCP message does a client send if it determines the IP address offered is already in use by another device?",
    options: ["DHCPNAK", "DHCPRELEASE", "DHCPDECLINE", "DHCPDISCOVER"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "If the client detects an IP conflict (usually via Gratuitous ARP), it will send a DHCPDECLINE message to the server rejecting the offer.",
  },

  // --- Advanced DHCP Messages & Timers ---
  {
    id: 11,
    question:
      "Which message does a DHCP server send to deny a client's DHCPREQUEST?",
    options: ["DHCPDECLINE", "DHCPNAK", "DHCPDENY", "DHCPREJECT"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The DHCP server sends a DHCPNAK (Negative Acknowledgment) if the requested IP is no longer available or invalid for the subnet.",
  },
  {
    id: 12,
    question: "What is the purpose of the DHCPINFORM message?",
    options: [
      "To request a brand new IP address and the complete configuration from the DHCP server.",
      "To request local configuration parameters (like DNS) when the client already has an IP address.",
      "To inform the DHCP server that the client is shutting down gracefully.",
      "To inform the DHCP server that an IP address conflict was detected on the network.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "DHCPINFORM is used by clients that already have an IP address (often statically assigned) to obtain other configuration parameters like DNS servers or domain names.",
  },
  {
    id: 13,
    question:
      "At what point does a DHCP client normally attempt to renew its IP address lease with the server?",
    options: [
      "At 25% of the lease time (T1 timer)",
      "At 50% of the lease time (T1 timer)",
      "At 87.5% of the lease time (T2 timer)",
      "Exactly when the lease expires",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The client will unicast a DHCPREQUEST to the original server to renew its lease when the T1 timer expires, which defaults to 50% of the lease duration.",
  },
  {
    id: 14,
    question: "What happens when the DHCP T2 timer (Rebinding timer) expires?",
    options: [
      "The client releases its IP address immediately.",
      "The client broadcasts a DHCPREQUEST to any available server.",
      "The client sends a DHCPDISCOVER.",
      "The server forcefully drops the client connection.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If the original server does not respond to the T1 renewal, the T2 timer triggers (usually at 87.5% of the lease). The client then broadcasts a DHCPREQUEST hoping any server can extend the lease.",
  },
  {
    id: 15,
    question:
      "How does a Cisco IOS DHCP server check for IP conflicts before offering an address to a client?",
    options: [
      "By sending an ICMP Echo Request (Ping) to the address",
      "By sending a Gratuitous ARP",
      "By querying the DNS server",
      "By listening for DHCPDECLINE messages first",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "By default, a Cisco IOS DHCP server sends ICMP Echo Requests (pings) to an IP address before offering it to ensure no other device on the network is currently using it.",
  },
  {
    id: 16,
    question:
      "What is the default number of ping packets a Cisco IOS DHCP server sends to check for an IP conflict?",
    options: ["1", "2", "3", "5"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The default conflict logging behavior uses 2 ICMP echo requests with a timeout of 500ms.",
  },
  {
    id: 17,
    question:
      "How does a DHCP client check for IP conflicts after receiving an IP address?",
    options: [
      "It pings the DHCP server to verify connectivity first.",
      "It sends an ICMP Echo Request to the offered IP to test the address.",
      "It sends a Gratuitous ARP (Address Resolution Protocol) request.",
      "It queries the switch CAM table for duplicate MAC entries.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Before officially using the leased IP, the client broadcasts a Gratuitous ARP. If another host replies, the client knows the IP is in use and sends a DHCPDECLINE.",
  },
  {
    id: 18,
    question:
      "Which field in the DHCP packet header contains the hardware MAC address of the requesting client?",
    options: ["yiaddr", "siaddr", "chaddr", "giaddr"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'chaddr' (Client Hardware Address) field contains the Layer 2 MAC address of the client requesting the IP address.",
  },
  {
    id: 19,
    question: "What is the purpose of the 'yiaddr' field in a DHCP packet?",
    options: [
      "It contains the IP address of the DHCP relay agent in the packet.",
      "It contains the 'Your' (client) IP address offered by the server.",
      "It holds the IP address of the DHCP server in the exchange.",
      "It is used for storing the subnet mask value in the packet.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'yiaddr' (Your IP Address) field is populated by the DHCP server in the DHCPOFFER message to indicate the IP address being offered to the client.",
  },
  {
    id: 20,
    question: "Which DHCP option number is used to specify the subnet mask?",
    options: ["Option 1", "Option 3", "Option 6", "Option 15"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "DHCP Option 1 specifies the Subnet Mask. Option 3 is the Default Router, Option 6 is the DNS Server, and Option 15 is the Domain Name.",
  },

  // --- Cisco IOS DHCP Server Configuration ---
  {
    id: 21,
    question:
      "Which global configuration command creates a DHCP pool named 'LAN_POOL'?",
    options: [
      "dhcp pool LAN_POOL",
      "ip dhcp pool LAN_POOL",
      "network dhcp LAN_POOL",
      "ip pool dhcp LAN_POOL",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The command 'ip dhcp pool [pool-name]' creates the pool and drops the user into DHCP pool configuration mode.",
  },
  {
    id: 22,
    question:
      "Within DHCP pool configuration mode, which command defines the range of IP addresses to be leased?",
    options: [
      "range 192.168.1.1 192.168.1.254",
      "ip range 192.168.1.0 /24",
      "network 192.168.1.0 255.255.255.0",
      "subnet 192.168.1.0 mask 255.255.255.0",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'network [network-id] [subnet-mask]' command defines the address space from which the DHCP server will allocate IP addresses.",
  },
  {
    id: 23,
    question:
      "How do you specify the default gateway for DHCP clients in a Cisco IOS DHCP pool?",
    options: [
      "default-gateway [ip-address]",
      "ip route 0.0.0.0 0.0.0.0 [ip-address]",
      "default-router [ip-address]",
      "gateway [ip-address]",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'default-router' command within the DHCP pool configuration mode specifies the default gateway IP address handed out to clients.",
  },
  {
    id: 24,
    question: "What is the purpose of the 'ip dhcp excluded-address' command?",
    options: [
      "To prevent specific IP addresses from being leased to clients.",
      "To block specific MAC addresses from receiving an IP.",
      "To define the default gateway.",
      "To remove a DHCP pool from the configuration.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'ip dhcp excluded-address' command ensures that statically assigned IPs (like routers, servers, printers) within the network subnet are not dynamically handed out by the DHCP server.",
  },
  {
    id: 25,
    question:
      "From which configuration mode must the 'ip dhcp excluded-address' command be executed?",
    options: [
      "User EXEC mode",
      "Privileged EXEC mode",
      "Global configuration mode",
      "DHCP pool configuration mode",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Unlike commands like 'network' or 'default-router', the 'ip dhcp excluded-address' command is executed in global configuration mode.",
  },
  {
    id: 26,
    question: "Which command assigns a DNS server of 8.8.8.8 to DHCP clients?",
    options: [
      "dns 8.8.8.8",
      "ip name-server 8.8.8.8",
      "dns-server 8.8.8.8",
      "name-server 8.8.8.8",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'dns-server' command is used inside the DHCP pool configuration mode to assign DNS servers to clients.",
  },
  {
    id: 27,
    question: "What is the default DHCP lease time on a Cisco IOS router?",
    options: ["12 hours", "1 day", "7 days", "Infinite"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, a Cisco IOS DHCP server grants an IP lease for 1 day (24 hours).",
  },
  {
    id: 28,
    question: "Which command configures a DHCP lease time of 4 hours?",
    options: ["lease 4", "lease 0 4", "lease time 4", "lease 4 0 0"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The syntax for the lease command is 'lease [days] [hours] [minutes]'. To set 4 hours, use 'lease 0 4'.",
  },
  {
    id: 29,
    question:
      "Which command disables the DHCP server service on a Cisco router globally?",
    options: [
      "no service dhcp",
      "no ip dhcp pool",
      "shutdown dhcp",
      "disable ip dhcp",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The global configuration command 'no service dhcp' completely stops the router from acting as a DHCP server or relay agent.",
  },
  {
    id: 30,
    question:
      "How do you specify a domain name (e.g., cisco.com) to be pushed to DHCP clients?",
    options: [
      "domain-name cisco.com",
      "ip domain-name cisco.com",
      "name cisco.com",
      "set domain cisco.com",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Inside the DHCP pool configuration mode, the 'domain-name' command specifies the domain suffix to be appended to client hostnames.",
  },

  // --- Cisco IOS DHCP Client & Verifications ---
  {
    id: 31,
    question:
      "Which command configures a router interface to obtain its IP address from a DHCP server?",
    options: [
      "ip address auto",
      "ip address dhcp",
      "dhcp enable",
      "ip dhcp client",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The interface command 'ip address dhcp' configures the interface to act as a DHCP client and request an IP address dynamically.",
  },
  {
    id: 32,
    question:
      "What command displays a list of all assigned IP addresses and their associated MAC addresses on a Cisco DHCP server?",
    options: [
      "show ip dhcp pool",
      "show ip dhcp binding",
      "show ip route",
      "show mac address-table",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'show ip dhcp binding' displays the mapping of leased IP addresses to the hardware (MAC) addresses of the clients.",
  },
  {
    id: 33,
    question:
      "If a user reports an IP conflict, which command on the Cisco router will show IP addresses the DHCP server has identified as conflicting?",
    options: [
      "show ip dhcp binding",
      "show ip arp",
      "show ip dhcp conflict",
      "show ip dhcp pool",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'show ip dhcp conflict' command lists IP addresses that the server discovered were already in use (via ping) or reported by clients (via DHCPDECLINE).",
  },
  {
    id: 34,
    question:
      "Which command clears all active IP bindings from the DHCP server database?",
    options: [
      "clear ip dhcp pool",
      "clear ip dhcp binding *",
      "reset ip dhcp all",
      "delete dhcp binding",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'clear ip dhcp binding *' clears all dynamic leases. You can also specify a specific IP instead of '*' to clear a single binding.",
  },
  {
    id: 35,
    question: "What information does the 'show ip dhcp pool' command provide?",
    options: [
      "The client MAC addresses that are currently assigned leases on the DHCP server's pools",
      "Pool utilization statistics, such as total addresses, leased addresses, and excluded addresses",
      "The exact IP address conflicts that were found and reported on the network by clients",
      "The DNS server's current operational status and the addresses it resolves for clients",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "This command provides a summary of the configured pools, showing the index, total number of IP addresses, leased addresses, and pending events.",
  },
  {
    id: 36,
    question:
      "When a Cisco router interface is configured with 'ip address dhcp', what happens to its default route?",
    options: [
      "You must configure a static default route manually before DHCP can operate properly on it.",
      "The router ignores the default gateway value that is provided by the DHCP server.",
      "The router automatically installs a static default route based on the DHCP default-router option.",
      "The router runs OSPF to dynamically discover the default gateway that is on the link.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "By default, when an interface receives an IP via DHCP, the router installs a default route (gateway of last resort) using the default-router IP supplied in the DHCP offer, indicated by an administrative distance of 254.",
  },
  {
    id: 37,
    question:
      "How do you clear a specific IP conflict from the DHCP server so the address can be assigned again?",
    options: [
      "clear ip arp",
      "clear ip dhcp binding *",
      "clear ip dhcp conflict [ip-address]",
      "no ip dhcp excluded-address [ip-address]",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Using 'clear ip dhcp conflict [ip-address]' (or '*' for all) removes the conflict record, returning the IP to the available pool.",
  },
  {
    id: 38,
    question:
      "Which command provides real-time monitoring of DHCP server packet processing (Offers, Requests, etc.)?",
    options: [
      "show ip dhcp packets",
      "debug ip dhcp server events",
      "debug ip dhcp server packet",
      "show debugging dhcp",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'debug ip dhcp server packet' displays real-time DHCP reception and transmission messages (Discover, Offer, Request, ACK).",
  },
  {
    id: 39,
    question:
      "What does the '*' symbol indicate in the output of 'show ip dhcp binding'?",
    options: [
      "A static binding",
      "An active dynamic binding",
      "An IP address conflict",
      "An expired lease",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "While not explicitly asterisked in all IOS versions, static bindings configured manually to specific MAC addresses bypass the dynamic pool mechanics.",
  },
  {
    id: 40,
    question:
      "Which command assigns a specific IP address permanently to a specific MAC address in Cisco IOS?",
    options: [
      "hardware-address [mac-address] inside the pool",
      "static-bind [ip] [mac] in the global config",
      "ip dhcp static [mac] [ip] in the pool mode",
      "mac-address [mac] inside the pool globally",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "To create a manual binding, you create a host pool, specify the 'host [ip-address] [mask]', and then tie it to a MAC using 'hardware-address [mac-address]'. You also specify the 'client-identifier'.",
  },

  // --- DHCP Relay Agent (IP Helper) ---
  {
    id: 41,
    question: "Why is a DHCP Relay Agent necessary?",
    options: [
      "To encrypt all DHCP traffic between clients and servers",
      "To translate IPv4 DHCP messages into IPv6 equivalents",
      "Because routers do not forward Layer 2 broadcasts by default",
      "To increase the speed of the IP address assignment process",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "DHCPDISCOVER messages are broadcasts. Routers block broadcasts, preventing clients from reaching a DHCP server on a different subnet unless a relay agent is used.",
  },
  {
    id: 42,
    question:
      "Which interface configuration command configures a Cisco router to act as a DHCP Relay Agent?",
    options: [
      "ip dhcp relay [ip-address]",
      "ip helper-address [ip-address]",
      "relay-agent [ip-address]",
      "ip forward-protocol dhcp",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'ip helper-address [server-ip]' command tells the router interface to intercept specific UDP broadcasts (like DHCP) and forward them as unicast to the specified server.",
  },
  {
    id: 43,
    question:
      "On which interface must the 'ip helper-address' command be applied?",
    options: [
      "The interface closest to the DHCP Server in the topology",
      "The interface receiving the broadcast from the DHCP clients",
      "The serial WAN interface facing the service provider",
      "The loopback interface that is configured on the router",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The command is applied to the ingress interface—the default gateway interface (physical or SVI) facing the local LAN where the DHCP clients reside.",
  },
  {
    id: 44,
    question:
      "When a DHCP Relay Agent converts a broadcast to a unicast packet, what IP address does it place in the 'giaddr' (Gateway IP Address) field of the DHCP payload?",
    options: [
      "The hardware MAC address of the DHCP client being served",
      "The IP address of the DHCP server that will respond",
      "The IP address of the receiving interface on the relay agent",
      "The broadcast address 255.255.255.255 of the network",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The relay agent inserts the IP address of its receiving interface into the 'giaddr' field. The DHCP server uses this IP to determine which subnet/pool the client belongs to.",
  },
  {
    id: 45,
    question:
      "Besides DHCP (UDP 67/68), which of the following protocols is ALSO forwarded by default when 'ip helper-address' is configured?",
    options: [
      "HTTP (TCP 80)",
      "TFTP (UDP 69)",
      "SSH (TCP 22)",
      "BGP (TCP 179)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, 'ip helper-address' forwards 8 UDP services: TFTP (69), DNS (53), Time (37), NetBIOS name/datagram (137/138), BOOTP/DHCP Server/Client (67/68), and TACACS (49).",
  },
  {
    id: 46,
    question:
      "How does the centralized DHCP server know where to send the DHCPOFFER reply when a relay agent is used?",
    options: [
      "It broadcasts the reply to all clients on the network.",
      "It unicasts it back to the IP address found in the giaddr field.",
      "It multicasts it to all routers on the local segment.",
      "It sends it directly to the client's MAC address in the reply.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The server reads the 'giaddr' field and unicasts the DHCPOFFER back to the relay agent's interface IP. The relay agent then forwards it to the client.",
  },
  {
    id: 47,
    question:
      "What happens if a DHCP pool is not configured for the subnet matching the 'giaddr' field on the central DHCP server?",
    options: [
      "The server assigns an IP from a random pool.",
      "The server drops the request and does not offer an IP address.",
      "The server returns an IP from the default VLAN 1 pool.",
      "The server sends a DHCPDECLINE to the relay agent.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If the DHCP server cannot match the giaddr to any configured network pool, it simply drops the Discover message.",
  },
  {
    id: 48,
    question:
      "Which global command stops the router from forwarding TFTP broadcasts while leaving 'ip helper-address' intact for DHCP?",
    options: [
      "no ip forward-protocol udp 69",
      "deny tftp any any",
      "no ip helper-address tftp",
      "ip dhcp relay only",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "To tune which UDP broadcasts are forwarded by the helper address, you use 'no ip forward-protocol udp [port-number]'. TFTP uses port 69.",
  },
  {
    id: 49,
    question:
      "Can multiple 'ip helper-address' commands be configured on a single interface?",
    options: [
      "No, only one helper address is allowed per interface.",
      "Yes, the router will broadcast the request to all configured helper addresses simultaneously.",
      "Yes, the router will unicast the request to all configured helper addresses simultaneously.",
      "Yes, but it uses them in an active/standby fashion.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "You can configure multiple helper addresses. The router will replicate the broadcast packet and forward it as a unicast packet to all configured helper IP addresses.",
  },
  {
    id: 50,
    question:
      "If the interface connecting the router to the DHCP clients is an SVI (Interface VLAN 10), where should 'ip helper-address' be configured?",
    options: [
      "On the physical trunk port",
      "On interface VLAN 10",
      "On interface VLAN 1 (native)",
      "Globally on the switch",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The helper address must be configured on the Layer 3 interface that serves as the default gateway for the clients, which is the SVI (interface vlan 10) in an inter-VLAN routing setup.",
  },

  // --- DHCP Snooping & Security ---
  {
    id: 51,
    question: "What type of attack does DHCP Snooping mitigate?",
    options: [
      "MAC Flooding",
      "Rogue DHCP Server / DHCP Spoofing",
      "VLAN Hopping",
      "STP Root Guard manipulation",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DHCP Snooping is a Layer 2 security feature that acts like a firewall between untrusted hosts and trusted DHCP servers, preventing malicious rogue DHCP servers from handing out invalid IPs.",
  },
  {
    id: 52,
    question:
      "In DHCP Snooping, what is the default state of all switch ports when the feature is enabled globally?",
    options: ["Trusted", "Untrusted", "Err-disabled", "Shutdown"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When DHCP Snooping is enabled, all interfaces default to 'Untrusted'. Untrusted ports will drop DHCP Server messages (Offer, Ack, Nak).",
  },
  {
    id: 53,
    question:
      "Which switch ports should be configured as DHCP Snooping 'Trusted' ports?",
    options: [
      "Ports connected directly to end-user PC workstations on the local LAN",
      "Ports connected to unauthorized wireless access points or unknown devices",
      "Uplink ports to other switches and ports connected to the legitimate DHCP server",
      "Only the management VLAN port that is used for switch administration",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Trusted ports should only be interfaces pointing toward the legitimate DHCP server, such as uplinks to core switches or direct server connections.",
  },
  {
    id: 54,
    question: "Which command enables DHCP Snooping globally on a Cisco switch?",
    options: [
      "ip dhcp snooping",
      "dhcp snooping enable",
      "switchport port-security dhcp",
      "spanning-tree dhcp guard",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The global configuration command 'ip dhcp snooping' turns the feature on for the switch.",
  },
  {
    id: 55,
    question:
      "After enabling DHCP snooping globally, what additional step is required for it to start inspecting traffic?",
    options: [
      "It must be enabled on a per-interface basis.",
      "It must be enabled for specific VLANs.",
      "The switch must be rebooted.",
      "A static MAC address must be configured.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "You must specify which VLANs to monitor using the global command 'ip dhcp snooping vlan [vlan-id]'.",
  },
  {
    id: 56,
    question:
      "Which command makes a specific interface a Trusted port for DHCP Snooping?",
    options: [
      "ip dhcp snooping trust",
      "switchport mode trust",
      "dhcp trust enable",
      "trust port dhcp",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Applied at the interface level, 'ip dhcp snooping trust' allows the port to forward DHCPOFFER and DHCPACK messages.",
  },
  {
    id: 57,
    question:
      "What information is stored in the DHCP Snooping Binding Database?",
    options: [
      "The switch's management IP addresses used for remote administration",
      "MAC address, leased IP, lease time, VLAN, and port of untrusted clients",
      "The full routing table of the core router including its prefix lengths",
      "A list of MAC addresses that are currently blocked by the switch",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The binding database maps a client's MAC address to its assigned IP address, lease time, VLAN, and the specific untrusted switch port it is connected to.",
  },
  {
    id: 58,
    question:
      "What happens if an attacker on an Untrusted port sends a DHCPOFFER message?",
    options: [
      "The switch forwards the DHCPOFFER message to the client without any issues on the port.",
      "The switch drops the packet and optionally logs the violation or err-disables the port.",
      "The switch automatically changes the port to Trusted designation on the network.",
      "The switch floods the DHCPOFFER message out to all of the VLANs on the switch.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Untrusted ports are not allowed to send server-sourced messages. The switch drops the packet to prevent the rogue DHCP server attack.",
  },
  {
    id: 59,
    question:
      "Which security feature inherently relies on the DHCP Snooping Binding Database to function?",
    options: [
      "Port Security (MAC locking)",
      "BPDU Guard on access ports",
      "Dynamic ARP Inspection (DAI)",
      "Storm Control for broadcasts",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Dynamic ARP Inspection (DAI) uses the DHCP Snooping Binding Database to verify that ARP requests/replies match valid MAC-to-IP bindings before forwarding them.",
  },
  {
    id: 60,
    question:
      "What mitigates a DHCP Starvation attack, where an attacker rapidly requests all available IPs using spoofed MAC addresses?",
    options: [
      "Setting all switch ports to Trusted mode",
      "DHCP Snooping rate limiting and Port Security",
      "BPDU Filter applied to all trunk ports",
      "VLAN Access Control Lists (VACLs) configured",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Port security restricts the number of MACs per port, and DHCP Snooping rate limiting (ip dhcp snooping limit rate) restricts the number of DHCP packets a port can process per second.",
  },

  // --- DHCP Option 82 & Advanced Snooping ---
  {
    id: 61,
    question: "What is DHCP Option 82?",
    options: [
      "The option that provides the default gateway.",
      "The DHCP Relay Agent Information Option.",
      "The option specifying the TFTP server.",
      "The option defining IPv6 stateless autoconfiguration.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Option 82 is inserted by a switch (or relay agent) to provide additional topological information (like port and switch MAC) to the DHCP server for address assignment policies.",
  },
  {
    id: 62,
    question:
      "What does a Cisco switch with DHCP Snooping enabled do by default to a DHCPDISCOVER message before forwarding it?",
    options: [
      "It drops it.",
      "It converts it to unicast.",
      "It inserts Option 82 information.",
      "It strips the client's MAC address.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By default, Cisco switches with DHCP snooping enabled will insert Option 82 information into client DHCP requests.",
  },
  {
    id: 63,
    question:
      "If a router acts as a DHCP server and receives a packet with Option 82 but isn't configured to support it, what happens?",
    options: [
      "It accepts the DHCP packet and processes the request normally without any problems.",
      "By default, Cisco IOS DHCP servers drop packets containing Option 82 if 'giaddr' is 0.0.0.0.",
      "It returns a DHCPDECLINE message back to the DHCP client that sent it the packet.",
      "It crashes the entire DHCP server process running on the router device immediately.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A common issue: if a switch inserts Option 82, the server drops it if giaddr is 0.0.0.0. You must configure 'ip dhcp relay information trust-all' on the router.",
  },
  {
    id: 64,
    question:
      "Which interface command restricts an untrusted port to 10 DHCP packets per second?",
    options: [
      "ip dhcp snooping rate 10",
      "ip dhcp snooping limit rate 10",
      "storm-control dhcp 10",
      "switchport port-security maximum 10",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The interface command 'ip dhcp snooping limit rate 10' sets a threshold. Exceeding this rate will place the port into an err-disabled state.",
  },
  {
    id: 65,
    question:
      "Which command shows the DHCP Snooping configuration and trusted/untrusted port statuses?",
    options: [
      "show ip dhcp snooping",
      "show dhcp trust",
      "show switchport dhcp",
      "show ip dhcp binding",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ip dhcp snooping' displays global status, configured VLANs, and a table showing which interfaces are trusted and their configured rate limits.",
  },
  {
    id: 66,
    question:
      "How do you recover a port that was err-disabled due to a DHCP Snooping rate limit violation?",
    options: [
      "Reboot the entire switch to bring the error-disabled port back up again.",
      "Issue the 'clear port-security' command on the affected interface port on the switch.",
      "Issue 'shutdown' then 'no shutdown' on the interface, or configure errdisable recovery.",
      "The port recovers automatically on its own after a fixed 30 second delay.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Like all err-disabled states, it requires administrator intervention (shut/no shut) unless 'errdisable recovery cause dhcp-rate-limit' is configured globally.",
  },
  {
    id: 67,
    question: "What is IP Source Guard (IPSG)?",
    options: [
      "It blocks ping sweeps by dropping ICMP echo request packets before they can propagate any further on the network segment.",
      "It uses the DHCP Snooping database to block traffic from IP addresses not assigned by DHCP on that specific port.",
      "It encrypts the source IP addresses inside the packet headers to provide security for the traffic in transit.",
      "It provides redundant DHCP servers by automatically failing over the address pools to a backup server.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IPSG prevents IP spoofing by filtering traffic based on the DHCP Snooping database. If a user manually changes their IP to one not leased to their MAC/Port, IPSG drops the traffic.",
  },
  {
    id: 68,
    question:
      "If you have a statically assigned server on a VLAN with DHCP Snooping enabled, how do you prevent DAI and IPSG from blocking it?",
    options: [
      "Set the server's switch port to Trusted in DHCP snooping.",
      "Disable DHCP snooping on that specific port on the switch.",
      "Create a static IP-to-MAC binding in the DHCP Snooping database.",
      "Use an access-list to bypass the switch's filtering entirely.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "For static hosts, you must configure a static ARP/Snooping entry using 'ip dhcp snooping binding [mac] vlan [id] [ip] interface [id]' so the switch knows the IP is legitimate.",
  },
  {
    id: 69,
    question: "What command disables the insertion of Option 82 on a switch?",
    options: [
      "no dhcp option 82",
      "no ip dhcp snooping information option",
      "disable option 82",
      "ip dhcp snooping strip option",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The global command 'no ip dhcp snooping information option' prevents the switch from adding Option 82 payload to client packets.",
  },
  {
    id: 70,
    question:
      "A client sends a DHCPRELEASE message. Which port is allowed to receive this and forward it to the server?",
    options: [
      "Only Trusted ports",
      "Only Untrusted ports",
      "Untrusted ports, because it comes from the client",
      "Neither, the server must query the client",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Client-sourced messages (Discover, Request, Release, Decline) are allowed ingress on Untrusted ports and are then forwarded out Trusted ports toward the server.",
  },

  // --- Troubleshooting & Operations ---
  {
    id: 71,
    question:
      "A PC cannot reach the internet and has an IP address of 169.254.10.5. What is the most likely issue?",
    options: [
      "The DNS server is down.",
      "The PC cannot reach the DHCP server.",
      "The default gateway is misconfigured on the router.",
      "DHCP Snooping is blocking the default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "169.254.x.x is an APIPA address, meaning the PC attempted to contact a DHCP server but received no response.",
  },
  {
    id: 72,
    question:
      "You configured 'ip helper-address 10.1.1.100' on G0/0. The DHCP server at 10.1.1.100 has a pool for 192.168.1.0/24. What IP address must be on G0/0 for this to work?",
    options: [
      "Any address from the 10.0.0.0/8 range",
      "Any IP address at all will work fine",
      "An IP address in the 192.168.1.0/24 subnet.",
      "The wildcard address 0.0.0.0 for the pool",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The interface with the helper-address must reside in the same subnet as the DHCP pool. Its IP populates the 'giaddr' field so the server knows which pool to pull from.",
  },
  {
    id: 73,
    question:
      "If a DHCP pool is exhausted (0 available IP addresses), what does the server do when a new DHCPDISCOVER is received?",
    options: [
      "It deletes the oldest lease to make room.",
      "It drops the DHCPDISCOVER and ignores the request.",
      "It offers an APIPA address.",
      "It reboots the DHCP process.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If there are no available IP addresses in the assigned pool, the DHCP server simply ignores the Discover message and does not respond.",
  },
  {
    id: 74,
    question:
      "When pinging from a router to test connectivity to a DHCP server, why might the ping succeed but DHCP still fails for clients?",
    options: [
      "Ping uses UDP while DHCP uses TCP, so they are completely unrelated protocols.",
      "Ping proves Layer 3 connectivity, but an ACL or firewall might be blocking UDP port 67/68.",
      "The router has a static IP address configured, which causes a conflict with DHCP.",
      "The DHCP server is out of APIPA addresses and cannot assign one to the client.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Ping (ICMP) only verifies routing and basic Layer 3 reachability. It does not verify that UDP ports 67/68 are open end-to-end.",
  },
  {
    id: 75,
    question:
      "What command displays the database agent configuration for saving DHCP Snooping bindings to flash/TFTP across reboots?",
    options: [
      "show ip dhcp snooping binding",
      "show ip dhcp snooping database",
      "show dhcp backup",
      "show flash dhcp",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "'show ip dhcp snooping database' shows the URL where the bindings are saved (e.g., flash:dhcp_snooping.db) and the status of the write process.",
  },
  {
    id: 76,
    question:
      "Which Windows Command Prompt command is used to release a DHCP lease?",
    options: [
      "ipconfig /flushdns",
      "ipconfig /release",
      "ipconfig /renew",
      "netsh dhcp reset",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "'ipconfig /release' instructs Windows to send a DHCPRELEASE message to the server.",
  },
  {
    id: 77,
    question:
      "Which Windows Command Prompt command forces the client to start the DORA process or renew its lease?",
    options: [
      "ipconfig /flush",
      "ipconfig /all",
      "ipconfig /renew",
      "ipconfig /discover",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'ipconfig /renew' attempts to contact the DHCP server to renew the existing lease or obtain a new one if currently without an IP.",
  },
  {
    id: 78,
    question:
      "What happens if a DHCP client is moved from VLAN 10 to VLAN 20 without rebooting or releasing its IP?",
    options: [
      "It immediately gets a brand new IP address from the DHCP server assigned to VLAN 20 right away on boot.",
      "It retains the VLAN 10 IP, cannot communicate on VLAN 20, and will eventually lose the IP when the lease expires.",
      "The switch automatically changes the client's IP address to match the new VLAN assignment on the port.",
      "It uses proxy ARP to maintain connectivity across both of the VLAN boundaries that it spans in the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unless a physical link state change forces a network stack refresh, the client will hold its VLAN 10 IP address. Because it's on the wrong subnet (VLAN 20), traffic to the gateway will fail.",
  },
  {
    id: 79,
    question:
      "Which Cisco IOS troubleshooting command helps determine if a router is actually intercepting and forwarding DHCP broadcasts as a relay agent?",
    options: [
      "debug ip dhcp relay",
      "debug ip udp packet",
      "show ip route",
      "show ip helper",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Since DHCP relay uses standard UDP forwarding mechanisms, 'debug ip udp packet' (filtered by an ACL) or specific DHCP debugs will show the broadcast-to-unicast translation.",
  },
  {
    id: 80,
    question:
      "If a switch has DHCP Snooping enabled and an authorized DHCP server is connected to Fa0/1, what is the consequence of forgetting to issue 'ip dhcp snooping trust' on Fa0/1?",
    options: [
      "Clients will receive IPs, but they won't be logged in the binding database.",
      "All DHCPOFFER and DHCPACK messages from the server will be dropped by the switch.",
      "The server port will be placed into the err-disabled state by the switch.",
      "The Option 82 information will not be inserted into the messages.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because all ports default to untrusted, Fa0/1 will block the server-sourced DHCP replies, preventing all clients on the switch from receiving IP addresses.",
  },

  // --- DHCPv6 & IPv6 Auto-configuration ---
  {
    id: 81,
    question:
      "Which protocol does IPv6 use natively to discover routers and network prefixes instead of DHCP?",
    options: [
      "IPv4 ARP request mechanism",
      "NDP (Neighbor Discovery Protocol)",
      "IGMP group report mechanism",
      "OSPFv3 neighbor hello mechanism",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IPv6 uses NDP (specifically Router Solicitation and Router Advertisement ICMPv6 messages) to provide clients with network prefixes and gateway information.",
  },
  {
    id: 82,
    question: "What does SLAAC stand for in IPv6?",
    options: [
      "Stateful Local Address Assignment Client",
      "Stateless Address Autoconfiguration",
      "Standard Local Area Address Configuration",
      "Static Link Address Assignment Control",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SLAAC allows an IPv6 host to generate its own global unicast address using the prefix advertised by the local router, without needing a DHCPv6 server.",
  },
  {
    id: 83,
    question: "In IPv6, what is the equivalent of the DHCPv4 DORA process?",
    options: [
      "DORA",
      "SARR (Solicit, Advertise, Request, Reply)",
      "DISC (Discover, Inform, Sync, Commit)",
      "ICMP (Identify, Connect, Manage, Ping)",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The DHCPv6 process uses SARR: Solicit (Client), Advertise (Server), Request (Client), Reply (Server).",
  },
  {
    id: 84,
    question:
      "Which multicast address is used by a DHCPv6 client to reach all available DHCPv6 servers/relay agents?",
    options: ["FF02::1", "FF02::2", "FF02::1:2", "FF05::1:3"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "FF02::1:2 is the All-DHCP-Relay-Agents-and-Servers link-local multicast address.",
  },
  {
    id: 85,
    question: "Which UDP ports does DHCPv6 use?",
    options: [
      "UDP 67 and 68",
      "UDP 546 and 547",
      "TCP 546 and 547",
      "UDP 53 and 54",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCPv6 uses UDP port 546 for clients and UDP port 547 for servers.",
  },
  {
    id: 86,
    question: "What is Stateless DHCPv6?",
    options: [
      "The server hands out IPs but doesn't track any of the leases it assigns to clients.",
      "The client gets its IP via SLAAC, and uses DHCPv6 only to get DNS and domain names.",
      "The client randomly generates an IP and DNS server address for itself each time.",
      "A rogue DHCPv6 server is answering the requests that arrive on the network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In Stateless DHCPv6, the server does NOT maintain a state (binding database) of IP addresses. SLAAC provides the IP/Gateway, and DHCPv6 provides 'other' info like DNS.",
  },
  {
    id: 87,
    question: "What is Stateful DHCPv6?",
    options: [
      "The DHCPv6 server uses TCP instead of UDP for all of its message exchanges with the clients on the network.",
      "The client relies entirely on the router for its IP, DNS, and Gateway configuration values on the link.",
      "The DHCPv6 server assigns the IPv6 address, tracks the lease, and provides DNS, functioning similarly to DHCPv4.",
      "The DHCPv6 server only tracks the MAC addresses of its clients, not their IP addresses at all in its database.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Stateful DHCPv6 tracks leases and bindings in a database (state), providing the full IPv6 address and options to the client, much like DHCPv4.",
  },
  {
    id: 88,
    question:
      "In an IPv6 Router Advertisement (RA), which flag tells the client to use Stateful DHCPv6?",
    options: [
      "A flag (Autonomous)",
      "O flag (Other Configuration)",
      "M flag (Managed Address Configuration)",
      "S flag (Stateful)",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "When the M (Managed) flag is set to 1 in the RA, it tells the client to ignore SLAAC for addressing and contact a DHCPv6 server for a stateful address.",
  },
  {
    id: 89,
    question:
      "In an IPv6 Router Advertisement (RA), which flag tells the client to use SLAAC for its IP, but contact DHCPv6 for DNS (Stateless DHCPv6)?",
    options: [
      "A generic flag bit value",
      "O flag (Other Configuration)",
      "M flag for managed config",
      "D flag for dynamic delegation",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "When the O (Other) flag is set to 1, the client uses SLAAC for its IP address and contacts a Stateless DHCPv6 server for 'other' information like DNS servers.",
  },
  {
    id: 90,
    question:
      "Instead of a MAC address, what does DHCPv6 use to uniquely identify clients and servers?",
    options: [
      "IPv6 Link-Local address",
      "DUID (DHCP Unique Identifier)",
      "EUI-64 value",
      "SLAAC Hash",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCPv6 uses a DUID to identify clients and servers. This ensures identification remains constant even if network interfaces change.",
  },

  // --- Mixed Scenario & Review ---
  {
    id: 91,
    question:
      "A company implements VoIP. The IP phones need to know the IP address of the TFTP server to download their firmware. Which DHCP Option is commonly used for this?",
    options: ["Option 3", "Option 43", "Option 66 or 150", "Option 82"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Option 150 (Cisco proprietary) provides a list of TFTP server IPs. Option 66 (Standard) provides a single TFTP server name/IP.",
  },
  {
    id: 92,
    question:
      "Which command configures a DHCP pool to push Option 150 (TFTP server 10.1.1.5) to Cisco IP Phones?",
    options: [
      "tftp-server 10.1.1.5",
      "option 150 ip 10.1.1.5",
      "dhcp option 150 10.1.1.5",
      "ip helper-address 10.1.1.5",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Inside the DHCP pool configuration, use the command 'option 150 ip [ip-address]' to supply the TFTP server address to phones.",
  },
  {
    id: 93,
    question:
      "What is the primary difference between a DHCP Client and a BOOTP Client?",
    options: [
      "BOOTP uses TCP while DHCP uses UDP for its transport protocol.",
      "BOOTP does not support dynamic leases; addresses are permanently mapped.",
      "DHCP cannot provide a default gateway address to the clients.",
      "BOOTP is used exclusively for IPv6 address assignment to clients.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "BOOTP (the predecessor to DHCP) required manual, static mapping of MAC to IP. DHCP introduced dynamic allocation with lease timers.",
  },
  {
    id: 94,
    question:
      "A router has an SVI for VLAN 50 with IP 192.168.50.1/24. It is configured as a DHCP server with pool 'VLAN50'. Does it need an 'ip helper-address' for clients in VLAN 50 to get IPs?",
    options: [
      "Yes, because VLAN 50 is on a switch so broadcast traffic is blocked from the router.",
      "No, because the router interface itself is in the same broadcast domain as the clients.",
      "Yes, helper-address is mandatory for all DHCP to function correctly on the router.",
      "No, but Option 82 is required in every DHCP packet that gets relayed on the network.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If the DHCP server (the router) has an interface physically or logically connected to the client broadcast domain, it will hear the DHCPDISCOVER broadcasts natively. No relay is needed.",
  },
  {
    id: 95,
    question:
      "When configuring 'ip dhcp excluded-address 192.168.1.1 192.168.1.10', what IPs are excluded?",
    options: [
      "Only 192.168.1.1 and 192.168.1.10",
      "Addresses from 192.168.1.1 through 192.168.1.10 inclusive",
      "Addresses from 192.168.1.2 through 192.168.1.9",
      "All addresses except 192.168.1.1 to 192.168.1.10",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The syntax specifies a low and high IP address. It excludes that entire range, including the starting and ending IPs.",
  },
  {
    id: 96,
    question:
      "What is the expected outcome if a Cisco switch receives a DHCPOFFER packet on an untrusted port, but the destination MAC address matches a client that previously sent a DHCPDISCOVER?",
    options: [
      "The switch forwards it to the client.",
      "The switch drops the packet.",
      "The switch converts it to a unicast packet.",
      "The switch changes the port state to Trusted.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DHCP Snooping explicitly drops any server-generated messages (Offer, Ack, Nak) received on an Untrusted port, regardless of whether a client requested it.",
  },
  {
    id: 97,
    question:
      "If a Windows PC is currently holding a DHCP lease of 192.168.1.50, what happens if the network cable is unplugged and plugged back in?",
    options: [
      "The PC immediately sends a DHCPDISCOVER message to find a new DHCP server.",
      "The PC drops its IP and falls back to an APIPA address instead.",
      "The PC sends a DHCPREQUEST to confirm if the IP is still valid on this network.",
      "The PC keeps the IP and sends nothing at all until the T1 timer expires.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Upon link state UP, a Windows client attempts to verify its existing lease by broadcasting a DHCPREQUEST. If it receives a NAK or no reply (in some conditions), it falls back to DISCOVER.",
  },
  {
    id: 98,
    question:
      "What is the purpose of the 'ip dhcp ping packets 0' command in Cisco IOS?",
    options: [
      "It makes the router ping infinitely before assigning an IP address.",
      "It disables the DHCP conflict ping check feature to speed up IP assignment.",
      "It blocks all ping traffic from the DHCP clients entirely.",
      "It configures the ping command to run over TCP instead of ICMP.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Setting ping packets to 0 disables the pre-assignment conflict check. The server will offer the IP immediately without verifying if it is in use.",
  },
  {
    id: 99,
    question:
      "Which IPv6 command configures a router interface to act as a DHCPv6 Relay Agent?",
    options: [
      "ipv6 helper-address [ipv6-address]",
      "ipv6 dhcp relay destination [ipv6-address]",
      "ip forward-protocol dhcpv6 in global mode",
      "ipv6 relay destination [ipv6-address]",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IPv6 equivalent to 'ip helper-address' is the interface command 'ipv6 dhcp relay destination [ipv6-server-address]'.",
  },
  {
    id: 100,
    question:
      "Which of the following scenarios absolutely requires a DHCP Relay Agent?",
    options: [
      "The DHCP Server and clients are in the same VLAN and in the same subnet as each other.",
      "The DHCP Server is a Windows Server device, not a Cisco Router device.",
      "The DHCP Server and clients are separated by a Layer 3 boundary (different subnets).",
      "The network is using IPv6 addressing instead of IPv4 addressing on it.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Because initial DHCP messages are broadcasts, and routers drop Layer 2 broadcasts, a relay agent is required whenever the client and server reside in different broadcast domains (subnets).",
  },
];
