import type { QuizQuestion } from "./types";

export const staticRoutingQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which command configures a default static route on a Cisco router?",
    options: [
      "ip route 0.0.0.0 255.255.255.255 <next-hop>",
      "ip route 0.0.0.0 0.0.0.0 <next-hop>",
      "ip default-gateway <next-hop>",
      "ip route any any <next-hop>",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A default (quad-zero) static route uses 'ip route 0.0.0.0 0.0.0.0 <next-hop>' and matches any destination not found in the routing table.",
  },
  {
    id: 2,
    question:
      "What is the default Administrative Distance (AD) of a standard static route?",
    options: ["0", "1", "90", "110"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default AD for a static route is 1, making it preferred over dynamic routing protocols.",
  },
  {
    id: 3,
    question: "Which IPv6 command configures a default static route?",
    options: [
      "ipv6 route ::/0 <next-hop>",
      "ipv6 route 0::0/0 <next-hop>",
      "ipv6 route any <next-hop>",
      "ipv6 default-route ::/128",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The IPv6 default route is represented by the all-zeros address and prefix length ::/0.",
  },
  {
    id: 4,
    question: "What defines a floating static route?",
    options: [
      "A route with a lower metric than dynamic protocols",
      "A route configured with an AD higher than the primary route",
      "A route that dynamically changes its next-hop",
      "A route using a Null0 exit interface",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A floating static route acts as a backup by having a higher Administrative Distance than the primary route.",
  },
  {
    id: 5,
    question:
      "If a static route is configured to act as a backup to an OSPF route, what minimum AD must the static route have?",
    options: ["109", "110", "111", "121"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "OSPF has a default AD of 110. The floating static route must have an AD of 111 or higher to be less preferred.",
  },
  {
    id: 6,
    question: "What subnet mask is used to create an IPv4 host route?",
    options: ["255.255.255.0", "255.255.255.252", "255.255.255.255", "0.0.0.0"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A host route targets a single specific IP address, which requires a /32 mask (255.255.255.255).",
  },
  {
    id: 7,
    question: "What prefix length is used to create an IPv6 host route?",
    options: ["/64", "/127", "/128", "/0"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "An IPv6 host route points to a single device, using the maximum prefix length of /128.",
  },
  {
    id: 8,
    question: "What occurs during a recursive route lookup?",
    options: [
      "The router forwards the packet back to the original source of the packet.",
      "The router performs multiple table lookups to resolve the exit interface.",
      "The router drops the packet because the TTL value in the header has expired.",
      "The router switches to a dynamic routing protocol to find the path.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When a static route specifies only a next-hop IP, the router must perform a second lookup to find the exit interface to reach that next-hop.",
  },
  {
    id: 9,
    question:
      "Why might a network administrator configure a static route to a Null0 interface?",
    options: [
      "To load balance traffic across multiple equal paths",
      "To provide a default gateway for the remote hosts",
      "To prevent routing loops for a summarized network",
      "To enable Proxy ARP responses on the interface",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "A route to Null0 acts as a discard route, often used alongside summary routes to drop traffic destined for unallocated subnets within the summary, preventing loops.",
  },
  {
    id: 10,
    question:
      "What code represents a static route in the 'show ip route' output?",
    options: ["R", "D", "O", "S"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The letter 'S' indicates that the route was statically configured.",
  },
  {
    id: 11,
    question:
      "What does the asterisk (*) indicate in the routing table code 'S*'?",
    options: [
      "It is a floating static route.",
      "It is a candidate for the default route.",
      "It is an inactive static route.",
      "It is experiencing a recursive lookup failure.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The asterisk denotes that the static route is a candidate default route (Gateway of Last Resort).",
  },
  {
    id: 12,
    question:
      "Which command removes the static route 'ip route 10.1.1.0 255.255.255.0 192.168.1.2'?",
    options: [
      "clear ip route 10.1.1.0 255.255.255.0",
      "delete ip route 10.1.1.0 255.255.255.0",
      "no ip route 10.1.1.0 255.255.255.0 192.168.1.2",
      "remove route 10.1.1.0 255.255.255.0",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "To remove a static route, prepend the exact configuration command with the 'no' keyword.",
  },
  {
    id: 13,
    question: "What constitutes a 'fully specified' static route?",
    options: [
      "It includes both the destination network and the AD.",
      "It includes both the exit interface and the next-hop IP address.",
      "It includes the subnet mask in CIDR notation.",
      "It includes a track object for SLA monitoring.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A fully specified static route dictates both the outbound interface and the next-hop IP address.",
  },
  {
    id: 14,
    question:
      "When configuring an IPv6 static route over a multi-access network using a link-local address as the next-hop, what must be included?",
    options: [
      "A floating AD",
      "A /128 prefix",
      "The exit interface",
      "The MAC address of the next hop",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Link-local addresses are not unique globally or across interfaces. You must specify the exit interface (fully specified route) when using them as a next-hop.",
  },
  {
    id: 15,
    question:
      "What potential issue arises from using only an exit interface for a static route on an Ethernet network?",
    options: [
      "It creates a routing loop between the connected routers in the network.",
      "It forces the router to rely heavily on Proxy ARP, increasing broadcast traffic.",
      "It changes the administrative distance of the static route to a value of 0.",
      "It disables Cisco Express Forwarding (CEF) on the interface for all traffic.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "On multi-access networks (Ethernet), pointing a static route only to an exit interface causes the router to send ARP requests for every destination IP, relying on Proxy ARP.",
  },
  {
    id: 16,
    question:
      "Which configuration correctly summarizes the networks 172.16.0.0/24 and 172.16.1.0/24 into a single static route?",
    options: [
      "ip route 172.16.0.0 255.255.255.0 <next-hop>",
      "ip route 172.16.0.0 255.255.254.0 <next-hop>",
      "ip route 172.16.0.0 255.255.252.0 <next-hop>",
      "ip route 172.16.0.0 255.255.0.0 <next-hop>",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The two /24 networks vary only in the 3rd octet (0 and 1). Summarizing them requires borrowing 1 bit, changing the mask to /23 (255.255.254.0).",
  },
  {
    id: 17,
    question:
      "If a router has a static route to 192.168.10.0/24 via GigabitEthernet0/0, what happens to the route if Gig0/0 goes down?",
    options: [
      "The route remains in the routing table.",
      "The route is removed from the routing table.",
      "The router actively queries neighbors for a new path.",
      "The route's AD automatically increases.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A static route is dynamically removed from the routing table if its associated exit interface or next-hop becomes unreachable.",
  },
  {
    id: 18,
    question:
      "How do you configure an IPv4 static route to load balance traffic evenly across two paths?",
    options: [
      "Configure two static routes to the same destination with different ADs.",
      "Configure two static routes to the same destination with identical metrics and ADs.",
      "Enable the 'ip load-sharing' command globally.",
      "Configure a summary route spanning both interfaces.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Equal-cost load balancing occurs automatically when multiple static routes to the exact same destination network have the same AD and metric.",
  },
  {
    id: 19,
    question:
      "Which of the following commands creates a floating static route backing up an EIGRP route?",
    options: [
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1",
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1 89",
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1 95",
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1 floating",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "EIGRP's default AD is 90. A floating route must have a higher AD (e.g., 95) to act as a backup.",
  },
  {
    id: 20,
    question:
      "When troubleshooting, you see a static route in the running-config but not in the routing table. What is the most likely cause?",
    options: [
      "The destination network is down.",
      "The next-hop IP address is unreachable/unresolvable.",
      "The subnet mask is incorrect.",
      "Static routes do not appear in 'show ip route'.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If a router cannot resolve a path to the next-hop IP address, it considers the static route invalid and removes it from the routing table.",
  },
  {
    id: 21,
    question:
      "A router has a static route to 10.1.1.0/24 (AD 1) and an OSPF route to 10.1.1.0/25 (AD 110). Where will a packet to 10.1.1.10 be sent?",
    options: [
      "Via the static route, because AD 1 is preferred over 110.",
      "Via the OSPF route, because /25 is a longer prefix match.",
      "It will be load-balanced between both routes.",
      "It will be dropped due to a routing conflict.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Longest Prefix Match rule always overrides Administrative Distance. The /25 route is more specific, so it wins.",
  },
  {
    id: 22,
    question:
      "What is the primary advantage of a static route over a dynamic routing protocol?",
    options: [
      "Automatic failover capabilities",
      "Scalability in large enterprise networks",
      "Less CPU and memory overhead on the router",
      "Ability to detect link failures implicitly",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Static routes do not exchange routing updates or run complex algorithms, significantly reducing CPU and memory consumption.",
  },
  {
    id: 23,
    question:
      "What is the correct syntax for a directly attached IPv4 static route?",
    options: [
      "ip route 192.168.2.0 255.255.255.0 10.0.0.1",
      "ip route 192.168.2.0 255.255.255.0 GigabitEthernet0/1",
      "ip route 192.168.2.0 255.255.255.0 GigabitEthernet0/1 10.0.0.1",
      "ip route connected 192.168.2.0",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A directly attached static route uses only the local exit interface as the forwarding parameter.",
  },
  {
    id: 24,
    question:
      "Which of the following describes a 'stub network' in the context of static routing?",
    options: [
      "A network with multiple exit points to different ISPs",
      "A network with a single exit point to the rest of the topology",
      "A network that only forwards broadcast traffic",
      "A network running only BGP",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A stub network has only one connection to the rest of the network, making a default static route the most efficient routing choice.",
  },
  {
    id: 25,
    question:
      "If a static route is configured with an exit interface that is a point-to-point serial link, what does the router do with the packet?",
    options: [
      "It performs an ARP request for the destination.",
      "It encapsulates the packet in PPP or HDLC and forwards it.",
      "It drops the packet unless a next-hop IP is provided.",
      "It triggers a recursive lookup.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "On point-to-point links, ARP is not used. The router simply encapsulates the packet and sends it out the interface.",
  },
  {
    id: 26,
    question:
      "You want to forward all traffic destined for 10.5.0.0/16 out Serial0/0/0. Which command accomplishes this?",
    options: [
      "ip route 10.5.0.0 255.255.0.0 Serial0/0/0",
      "ip route 10.5.0.0 255.0.0.0 Serial0/0/0",
      "ip route 10.5.0.0 /16 Serial0/0/0",
      "ip route Serial0/0/0 10.5.0.0 255.255.0.0",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The standard format requires the destination network, the dotted-decimal subnet mask, followed by the exit interface.",
  },
  {
    id: 27,
    question: "Which IPv6 prefix defines a default route?",
    options: ["::/128", "FF00::/8", "FE80::/10", "::/0"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The IPv6 default route prefix is ::/0, equivalent to 0.0.0.0 0.0.0.0 in IPv4.",
  },
  {
    id: 28,
    question:
      "Which command restricts 'show ip route' to only display static routes?",
    options: [
      "show ip route static",
      "show ip static",
      "show ip route | include S",
      "show routes static",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'show ip route static' command filters the routing table to show only statically configured entries.",
  },
  {
    id: 29,
    question:
      "What is the primary drawback of using static routing in a rapidly growing network?",
    options: [
      "It consumes too much bandwidth for routing updates.",
      "It does not support IPv6 addressing at all.",
      "It requires high CPU utilization for route calculations.",
      "It lacks dynamic adaptability to topology changes.",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Static routes require manual intervention to update. If a link fails, static routes cannot automatically discover alternate paths unless explicitly configured to do so (e.g., floating routes).",
  },
  {
    id: 30,
    question:
      "What happens if you configure two static routes to the same destination with different Administrative Distances?",
    options: [
      "Traffic is load-balanced equally across both of the static routes.",
      "Only the route with the lower AD is installed in the routing table.",
      "The router throws a configuration error immediately upon entering it.",
      "Both are installed in the table but only the higher AD is actually used.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The router only installs the best path into the routing table. The route with the lowest AD wins, while the other remains dormant as a floating backup.",
  },
  {
    id: 31,
    question:
      "Which configuration syntax correctly assigns a floating static route AD of 50?",
    options: [
      "ip route 192.168.1.0 255.255.255.0 10.0.0.1 AD 50",
      "ip route 192.168.1.0 255.255.255.0 10.0.0.1 distance 50",
      "ip route 192.168.1.0 255.255.255.0 10.0.0.1 50",
      "ip route 50 192.168.1.0 255.255.255.0 10.0.0.1",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Administrative Distance is appended to the end of the 'ip route' command as a numeric value.",
  },
  {
    id: 32,
    question:
      "A default static route is configured as 'ip route 0.0.0.0 0.0.0.0 172.16.1.1'. What must be true for this route to function?",
    options: [
      "172.16.1.1 must be reachable via a connected interface or another route.",
      "The router must have the 'ip routing' command disabled globally.",
      "172.16.1.1 must be running OSPF on the connected interface.",
      "The exit interface must be a serial link for the route to work.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "For a next-hop static route to be installed, the router must be able to recursively resolve the next-hop IP (172.16.1.1) to an active exit interface.",
  },
  {
    id: 33,
    question:
      "Which feature allows a static route to be removed if an IP SLA track object fails?",
    options: [
      "Floating Static Routing",
      "Reliable Static Routing (Tracking)",
      "Dynamic ARP Inspection",
      "BFD over Static",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "By appending 'track [object-number]' to a static route, the route's presence in the routing table is tied to the success of an IP SLA operation.",
  },
  {
    id: 34,
    question:
      "What is the correct command to create an IPv6 fully specified static route?",
    options: [
      "ipv6 route 2001:DB8:ACAD:1::/64 GigabitEthernet0/1 FE80::1",
      "ipv6 route 2001:DB8:ACAD:1::/64 FE80::1 GigabitEthernet0/1",
      "ipv6 route full 2001:DB8:ACAD:1::/64 FE80::1",
      "ipv6 static 2001:DB8:ACAD:1::/64 GigabitEthernet0/1 FE80::1",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "In an IPv6 fully specified route, the exit interface is listed first, followed by the next-hop IP address.",
  },
  {
    id: 35,
    question:
      "In the routing table, you see: 'S 192.168.10.0/24 [1/0] via 10.1.1.2'. What does the '0' represent?",
    options: [
      "Administrative Distance",
      "Metric",
      "Interface ID",
      "Next-hop reachability state",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In the bracket [1/0], '1' is the Administrative Distance and '0' is the metric. Static routes inherently have a metric of 0.",
  },
  {
    id: 36,
    question:
      "Which network condition mandates the use of a fully specified static route in IPv6?",
    options: [
      "When the next-hop is a global unicast address on the network",
      "When the exit interface is a point-to-point link between routers",
      "When the next-hop is a link-local address on a multi-access network",
      "When summarizing multiple IPv6 prefixes into a single route",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Link-local addresses (FE80::) are only locally significant. The router needs the exit interface to know which physical link the link-local address resides on.",
  },
  {
    id: 37,
    question:
      "Which of the following is a valid IPv4 summary route for 10.1.0.0/16, 10.2.0.0/16, and 10.3.0.0/16?",
    options: [
      "10.0.0.0 255.252.0.0",
      "10.1.0.0 255.255.0.0",
      "10.0.0.0 255.0.0.0",
      "10.0.0.0 255.254.0.0",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The networks 10.1, 10.2, and 10.3 (as well as 10.0) can be summarized by moving the subnet boundary 6 bits into the second octet (/14), resulting in 10.0.0.0 255.252.0.0.",
  },
  {
    id: 38,
    question: "What is the purpose of an IPv4 host route (/32)?",
    options: [
      "To summarize multiple /24 networks into one route",
      "To act as a default gateway for the hosts",
      "To direct traffic to a specific individual device/server",
      "To create a routing loop in the routing table",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A /32 host route pinpoints a single IP address, ensuring traffic destined for that specific device uses that precise path.",
  },
  {
    id: 39,
    question:
      "If a static route points to a next-hop IP that is currently resolved by a dynamic routing protocol, what happens if the dynamic route is lost?",
    options: [
      "The static route remains active in the routing table and continues forwarding.",
      "The static route becomes inactive and is removed from the routing table.",
      "The router switches the route to the Null0 interface instead.",
      "The static route's administrative distance dynamically changes value.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Due to recursive lookup dependency, if the route to the next-hop disappears from the routing table, the static route cannot be resolved and is removed.",
  },
  {
    id: 40,
    question:
      "Which of the following commands configures a static host route for server 192.168.100.5?",
    options: [
      "ip route 192.168.100.0 255.255.255.0 10.1.1.1",
      "ip route 192.168.100.5 255.255.255.255 10.1.1.1",
      "ip route 192.168.100.5 0.0.0.0 10.1.1.1",
      "ip host 192.168.100.5 10.1.1.1",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A static host route uses the exact IP address of the host and a /32 subnet mask (255.255.255.255).",
  },
  {
    id: 41,
    question: "In standard IPv6 static routing, what is the default AD?",
    options: ["1", "20", "90", "110"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Just like IPv4, an IPv6 static route has a default Administrative Distance of 1.",
  },
  {
    id: 42,
    question:
      "Which of the following describes the difference between a next-hop route and a directly attached route?",
    options: [
      "Next-hop uses an IP address; directly attached uses an exit interface.",
      "Next-hop has AD 1; directly attached has AD 0.",
      "Next-hop is for IPv4; directly attached is for IPv6.",
      "Next-hop is used for dynamic routing; directly attached is for static.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A next-hop static route specifies the router down the line via IP, while a directly attached route points traffic directly out a local interface.",
  },
  {
    id: 43,
    question:
      "Why is a next-hop static route generally preferred over a directly attached static route on Ethernet networks?",
    options: [
      "It processes faster in the CPU.",
      "It requires less configuration.",
      "It avoids excessive Proxy ARP requests.",
      "It has a lower metric.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Directly attached routes on multi-access Ethernet cause the router to ARP for every destination IP. Next-hop routes only ARP once for the next-hop IP.",
  },
  {
    id: 44,
    question: "What is a 'black hole' route?",
    options: [
      "A default route pointing to the internet",
      "A route that dynamically changes AD",
      "A static route pointing to the Null0 interface",
      "A route that fails recursive lookup",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A route pointing to Null0 acts as a black hole; any traffic matching it is silently discarded.",
  },
  {
    id: 45,
    question:
      "When configuring a floating static route, which parameter is modified?",
    options: [
      "Subnet mask",
      "Next-hop IP",
      "Administrative Distance",
      "Metric",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Administrative Distance is manually raised above the AD of the primary protocol to make it a floating (backup) route.",
  },
  {
    id: 46,
    question: "Which show command displays the IPv6 routing table?",
    options: [
      "show ip route ipv6",
      "show ipv6 route",
      "show route ipv6",
      "show ip route v6",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show ipv6 route' command outputs the active IPv6 routing table.",
  },
  {
    id: 47,
    question:
      "Which command configures an IPv6 floating static route to back up an EIGRP for IPv6 route (AD 90)?",
    options: [
      "ipv6 route 2001:DB8::/32 2001:DB8:1::1 89",
      "ipv6 route 2001:DB8::/32 2001:DB8:1::1 95",
      "ipv6 route 2001:DB8::/32 2001:DB8:1::1 metric 95",
      "ipv6 route 2001:DB8::/32 floating 2001:DB8:1::1",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Adding a value higher than 90 (e.g., 95) at the end of the command configures the route as a floating backup.",
  },
  {
    id: 48,
    question:
      "What is required before a Cisco router will forward IPv6 packets using static routes?",
    options: [
      "ip routing",
      "ipv6 unicast-routing",
      "ipv6 enable",
      "ipv6 static enable",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The global configuration command 'ipv6 unicast-routing' must be enabled for the router to act as an IPv6 router and process IPv6 routes.",
  },
  {
    id: 49,
    question:
      "A router receives a packet destined for 10.1.1.5. It has a default route '0.0.0.0/0' via Serial0 and a static route '10.1.1.0/24' via Gig0/0. Where does it go?",
    options: [
      "Out Serial0",
      "Out Gig0/0",
      "It is dropped",
      "It is load-balanced",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The router always uses the longest prefix match. 10.1.1.0/24 is more specific than 0.0.0.0/0.",
  },
  {
    id: 50,
    question:
      "If a static route specifies a next-hop IP, what is the default AD associated with that route in IOS?",
    options: ["0", "1", "20", "255"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Regardless of whether it is a next-hop or directly attached route, standard static routes on Cisco IOS default to an AD of 1.",
  },
  {
    id: 51,
    question:
      "What happens to a static route if the interface used to reach the next-hop IP is administratively shut down?",
    options: [
      "The route remains active but drops packets.",
      "The route is removed from the routing table.",
      "The AD changes to 255.",
      "The router changes it to a floating route.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If the interface connecting to the next hop goes down, the next hop is no longer reachable, and the route is dynamically removed from the routing table.",
  },
  {
    id: 52,
    question:
      "Which of the following is a valid command to configure a floating default route?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 10.1.1.1 200",
      "ip route default 10.1.1.1 floating",
      "ip default-network 10.0.0.0 200",
      "ip route 0.0.0.0 255.255.255.255 10.1.1.1 200",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "This command defines a default route (0.0.0.0 0.0.0.0) with an AD of 200, making it a backup default route.",
  },
  {
    id: 53,
    question:
      "How does a router process a directly attached static route differently than a next-hop static route on a point-to-point interface?",
    options: [
      "It skips the recursive lookup.",
      "It requires a MAC address mapping.",
      "It assigns an AD of 90.",
      "There is no difference in processing.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A directly attached route specifies the exit interface, avoiding the need for the router to perform a recursive lookup to find an exit path.",
  },
  {
    id: 54,
    question:
      "Which command reveals the Administrative Distance of an active static route?",
    options: [
      "show ip protocols",
      "show ip route <network>",
      "show interfaces",
      "show ip arp",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Executing 'show ip route' followed by the specific network prefix will display detailed routing metrics, including AD.",
  },
  {
    id: 55,
    question: "What is the primary reason to use a summary static route?",
    options: [
      "To increase routing protocol metric accuracy",
      "To provide an automated backup link",
      "To reduce the size of the routing table",
      "To force traffic out a Null0 interface",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Route summarization consolidates multiple contiguous networks into a single route entry, keeping the routing table small and efficient.",
  },
  {
    id: 56,
    question:
      "A router has an eBGP route (AD 20) and a floating static route to the same destination. What must the static route's AD be to act as backup?",
    options: ["1", "19", "21", "5"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "To back up an eBGP route (AD 20), the floating static route must have an AD higher than 20 (e.g., 21).",
  },
  {
    id: 57,
    question:
      "Which command configures an IPv6 default route to a next-hop of 2001:DB8:A::1?",
    options: [
      "ipv6 route ::/0 2001:DB8:A::1",
      "ipv6 route ::/128 2001:DB8:A::1",
      "ipv6 default-gateway 2001:DB8:A::1",
      "ipv6 route 0.0.0.0 0.0.0.0 2001:DB8:A::1",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The IPv6 default route is ::/0, mapped to the next-hop address.",
  },
  {
    id: 58,
    question:
      "When pinging a remote network via a static route, the first ping often fails. Why?",
    options: [
      "The routing table is updating.",
      "ARP resolution is taking place.",
      "The static route has a high metric.",
      "CEF is disabled.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The first ICMP packet is often dropped while the router waits for an ARP reply to resolve the MAC address of the next-hop or target.",
  },
  {
    id: 59,
    question:
      "A static route is configured as 'ip route 10.10.10.0 255.255.255.0 192.168.1.250'. 192.168.1.250 is down. What shows in 'show ip route'?",
    options: [
      "The route is marked with '*'",
      "The route is marked 'inactive'",
      "The route is entirely absent from the output",
      "The route shows AD 255",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "If the next-hop is unreachable, the route is immediately flushed from the active routing table.",
  },
  {
    id: 60,
    question:
      "How do you view both active and inactive static routes in the Cisco IOS configuration?",
    options: [
      "show ip route static all",
      "show ip static-routes",
      "show running-config | include ip route",
      "show ip protocols",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The routing table ('show ip route') only shows active routes. To see all configured static routes, active or not, view the running configuration.",
  },
  {
    id: 61,
    question: "Which of the following creates a floating IPv6 default route?",
    options: [
      "ipv6 route ::/0 2001:DB8::1 200",
      "ipv6 route ::/0 2001:DB8::1 floating",
      "ipv6 route 0::0/0 2001:DB8::1 backup",
      "ipv6 route default 2001:DB8::1 200",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Appending an AD value (like 200) to the standard IPv6 route command creates the floating backup.",
  },
  {
    id: 62,
    question:
      "What is the outcome of the command 'ip route 172.16.1.0 255.255.255.0 Null0'?",
    options: [
      "Traffic to 172.16.1.0/24 is load balanced.",
      "Traffic to 172.16.1.0/24 is broadcast to all interfaces.",
      "Traffic to 172.16.1.0/24 is silently discarded.",
      "Traffic to 172.16.1.0/24 triggers an ICMP unreachable message.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Null0 is a virtual interface that drops all traffic sent to it, known as blackhole routing.",
  },
  {
    id: 63,
    question:
      "Which tool can be tied to a static route to conditionally remove it if a specific IP becomes unreachable?",
    options: ["CDP", "IP SLA", "LLDP", "NetFlow"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IP SLA (Service Level Agreement) can generate synthetic traffic (like pings) and tie the success of that traffic to the installation of a static route.",
  },
  {
    id: 64,
    question:
      "If 'ip classless' is disabled on an older Cisco router, what happens if it receives a packet for a subnet not in its routing table, but it has a default route?",
    options: [
      "It uses the default route.",
      "It drops the packet.",
      "It forwards it out all interfaces.",
      "It sends an ARP request.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Without 'ip classless', if a router knows about a major network but not the specific subnet requested, it drops the packet instead of using the default route.",
  },
  {
    id: 65,
    question:
      "Which of the following represents a host route in the IPv4 routing table?",
    options: ["10.1.1.0/24", "10.1.1.1/32", "0.0.0.0/0", "10.1.0.0/16"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "A /32 prefix denotes a single host IP address.",
  },
  {
    id: 66,
    question:
      "A static route has an AD of 1. A directly connected interface has an AD of 0. Which route wins if both match the exact same prefix?",
    options: [
      "The static route",
      "The directly connected interface",
      "They load balance",
      "The routing table crashes",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Lower Administrative Distance is preferred. Connected interfaces (0) beat static routes (1).",
  },
  {
    id: 67,
    question:
      "You configure 'ip route 192.168.5.0 255.255.255.0 GigabitEthernet0/0 10.0.0.2'. What type of route is this?",
    options: [
      "Next-hop static route",
      "Directly attached static route",
      "Fully specified static route",
      "Floating static route",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because it specifies both the exit interface (Gig0/0) and the next-hop IP (10.0.0.2), it is fully specified.",
  },
  {
    id: 68,
    question:
      "What is the primary risk of using directly attached static routes on Ethernet?",
    options: [
      "It forces the router to drop packets with a TTL value of 1.",
      "The router's ARP cache may overflow due to excessive Proxy ARP requests.",
      "It changes the default administrative distance of the route to 255.",
      "It disables Cisco Express Forwarding (CEF) on the interface.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The router assumes the destination is on the local Ethernet segment and ARPs for every single remote IP, rapidly exhausting the ARP table.",
  },
  {
    id: 69,
    question:
      "Which command configures an IPv6 host route to server 2001:DB8:1::100?",
    options: [
      "ipv6 route 2001:DB8:1::100/64 <next-hop>",
      "ipv6 route 2001:DB8:1::100/128 <next-hop>",
      "ipv6 route 2001:DB8:1::100/0 <next-hop>",
      "ipv6 host 2001:DB8:1::100 <next-hop>",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "IPv6 host routes utilize a /128 prefix length.",
  },
  {
    id: 70,
    question:
      "When summarizing 192.168.4.0/24, 192.168.5.0/24, 192.168.6.0/24, and 192.168.7.0/24, what is the summarized mask?",
    options: ["/21", "/22", "/23", "/24"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "These 4 subnets differ in the third octet. Summarizing 4 consecutive /24 networks requires borrowing 2 bits, yielding a /22 mask (255.255.252.0).",
  },
  {
    id: 71,
    question:
      "What code is used in the routing table to denote a directly connected static host route added by the OS?",
    options: ["S", "L", "C", "R"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Modern IOS uses 'L' (Local) for a /32 IPv4 or /128 IPv6 route to the router's own interface IP.",
  },
  {
    id: 72,
    question:
      "How is equal-cost multi-path (ECMP) achieved with static routes?",
    options: [
      "By configuring routes with different metrics for the same destination network.",
      "By configuring multiple routes to the same destination with the same AD and metric.",
      "By using a route map to select the forwarding path for the destination.",
      "By enabling HSRP on the router interfaces to provide the gateway redundancy.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Configuring identical static routes with different next-hops automatically creates an ECMP scenario for load balancing.",
  },
  {
    id: 73,
    question:
      "If a static route points to an exit interface that is up, but the link-layer protocol is down, what happens to the route?",
    options: [
      "It stays in the routing table.",
      "It goes into a floating state.",
      "It is removed from the routing table.",
      "It generates ICMP unreachable messages locally.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A route requires the interface to be 'up/up'. If the line protocol is down, the route is withdrawn.",
  },
  {
    id: 74,
    question:
      "What command verifies the specific exit path a router will take for IP 10.1.5.5?",
    options: [
      "show ip route 10.1.5.5",
      "show ip protocols",
      "ping 10.1.5.5",
      "trace 10.1.5.5",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "'show ip route [ip-address]' queries the routing table specifically for the best match to that destination.",
  },
  {
    id: 75,
    question:
      "Why would an administrator use a default static route instead of running OSPF?",
    options: [
      "To connect to a single ISP where dynamic updates are unnecessary",
      "To increase the speed of routing table convergence",
      "To enable load balancing across multiple diverse paths",
      "To advertise internal subnets to the Internet",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A stub connection to an ISP is best handled by a default static route to save overhead, as there is only one exit.",
  },
  {
    id: 76,
    question:
      "Which of the following is an example of an IPv6 default route pointing to an exit interface?",
    options: [
      "ipv6 route ::/0 Serial0/1/0",
      "ipv6 route 0.0.0.0 Serial0/1/0",
      "ipv6 route ::/128 Serial0/1/0",
      "ipv6 route default Serial0/1/0",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The correct syntax for an IPv6 default route via an exit interface is 'ipv6 route ::/0 [interface]'.",
  },
  {
    id: 77,
    question:
      "What happens if a static route's next-hop IP belongs to a subnet not found in the routing table?",
    options: [
      "The router uses the default route to resolve the next-hop address.",
      "The static route fails the recursive lookup and is not installed.",
      "The router creates a temporary ARP entry for the address.",
      "The router changes the administrative distance to 255.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If the next-hop IP is completely unknown (not resolvable), the route is invalid and is not injected into the active routing table.",
  },
  {
    id: 78,
    question:
      "Which command configures an IPv4 static route summarizing 10.0.0.0/8?",
    options: [
      "ip route 10.0.0.0 255.0.0.0 <next-hop>",
      "ip route 10.0.0.0 255.255.0.0 <next-hop>",
      "ip route 10.0.0.0 255.255.255.0 <next-hop>",
      "ip route 10.0.0.0 0.0.0.0 <next-hop>",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation: "A /8 subnet mask translates to 255.0.0.0 in decimal.",
  },
  {
    id: 79,
    question:
      "You configure 'ip route 10.1.1.0 255.255.255.0 192.168.1.1 50'. What does '50' represent?",
    options: [
      "Metric",
      "Administrative Distance",
      "Interface ID",
      "Next-hop priority",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The value appended at the end of the 'ip route' command designates the Administrative Distance.",
  },
  {
    id: 80,
    question:
      "Which of the following causes an IPv6 static route to disappear from the routing table?",
    options: [
      "The physical interface associated with the next-hop fails.",
      "The router receives a Router Advertisement.",
      "An OSPF route with an AD of 110 is learned.",
      "The routing table hits maximum capacity.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Like IPv4, IPv6 static routes are dynamically removed if the path to the next-hop becomes unreachable due to interface failure.",
  },
  {
    id: 81,
    question:
      "What is required to route traffic to the Internet using a static route on a SOHO router?",
    options: [
      "A dynamic routing protocol",
      "A default static route pointing to the ISP gateway",
      "A floating static route",
      "A summary static route for internal LANs",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A default static route (0.0.0.0/0) directs all unknown traffic, such as Internet-bound traffic, to the ISP gateway.",
  },
  {
    id: 82,
    question: "What command injects a static default route into OSPF?",
    options: [
      "default-information originate",
      "redistribute static",
      "ip default-gateway",
      "network 0.0.0.0",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Within router configuration mode, 'default-information originate' instructs OSPF to advertise a configured static default route to its neighbors.",
  },
  {
    id: 83,
    question:
      "If a static route to 172.16.0.0/16 and a static route to 172.16.10.0/24 both point to different next-hops, where does traffic for 172.16.10.5 go?",
    options: [
      "To the /16 next-hop",
      "To the /24 next-hop",
      "It is dropped",
      "It is load balanced",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Longest prefix match routing dictates that the most specific route (/24) is always chosen over the less specific route (/16).",
  },
  {
    id: 84,
    question: "How do you test if a static route is functioning properly?",
    options: [
      "Use the 'ping' and 'traceroute' commands to the destination network.",
      "Check the ARP table for the next-hop MAC address entries of the router.",
      "Restart the router interface to clear the interface error counters.",
      "Wait for syslog messages to report the route status and failures.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Ping verifies end-to-end reachability, while traceroute confirms the specific path (next-hops) the packet takes.",
  },
  {
    id: 85,
    question:
      "Why should you avoid using a directly attached static route on an interface connected to a Frame Relay or VPN cloud?",
    options: [
      "They do not support static routing at all on the routers that are attached to the cloud network.",
      "They are non-broadcast multi-access (NBMA) networks, meaning Proxy ARP will not resolve the destination.",
      "It requires a /32 subnet mask to be configured for the host routes in the routing table.",
      "The administrative distance will conflict with the BGP routes that are learned for the destination.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "NBMA networks lack the broadcast capabilities needed for ARP to resolve dynamically. Fully specified or next-hop routes must be used.",
  },
  {
    id: 86,
    question:
      "What command deletes the IPv6 default route 'ipv6 route ::/0 2001:DB8::2'?",
    options: [
      "no ipv6 route ::/0 2001:DB8::2",
      "clear ipv6 route ::/0",
      "delete ipv6 default",
      "no ipv6 default-route",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Appending 'no' to the exact configuration line removes the static route.",
  },
  {
    id: 87,
    question:
      "Which of the following routing table codes indicates a route learned through EIGRP, to compare against a static route?",
    options: ["O", "E", "D", "R"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "EIGRP routes are marked with 'D' (for DUAL algorithm), while static routes are marked with 'S'.",
  },
  {
    id: 88,
    question: "What is a 'Gateway of Last Resort'?",
    options: [
      "A firewall that acts as a proxy for the clients",
      "The router's loopback interface address",
      "A default route used when no specific match is found",
      "A route that points to the Null0 interface",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Gateway of Last Resort is the IP address a router forwards packets to when it lacks a specific route for the destination.",
  },
  {
    id: 89,
    question:
      "When creating a floating backup for a RIP route (AD 120), what is a valid AD for the static route?",
    options: ["1", "90", "110", "125"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "To act as a backup, the static route must have a higher AD than RIP's 120. 125 is a valid choice.",
  },
  {
    id: 90,
    question:
      "In the output of 'show ip route', what does '[1/0]' mean for a static route?",
    options: [
      "Metric 1, AD 0",
      "AD 1, Metric 0",
      "Priority 1, Cost 0",
      "Hops 1, Delay 0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The first number in the bracket is Administrative Distance (1 for static), and the second is the Metric (0 for static).",
  },
  {
    id: 91,
    question:
      "Which command assigns an IP to a track object for reliable static routing?",
    options: [
      "ip route track 1",
      "ip sla 1",
      "track 1 ip sla",
      "route track enable",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "You must first configure the 'ip sla' monitor to ping the destination, then tie it to a track object used by the static route.",
  },
  {
    id: 92,
    question:
      "What is the result of configuring 'ip route 0.0.0.0 0.0.0.0 Null0'?",
    options: [
      "All traffic to unknown networks is dropped.",
      "All traffic is forwarded to the ISP.",
      "The router reboots.",
      "Proxy ARP is disabled.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "This configures a default route to a black hole. Any packet that does not match a more specific route will be discarded.",
  },
  {
    id: 93,
    question:
      "You want to create a static route to the 10.10.10.0 network with a /28 mask. Which command is correct?",
    options: [
      "ip route 10.10.10.0 255.255.255.224 <next-hop>",
      "ip route 10.10.10.0 255.255.255.240 <next-hop>",
      "ip route 10.10.10.0 255.255.255.248 <next-hop>",
      "ip route 10.10.10.0 255.255.255.128 <next-hop>",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A /28 subnet mask equates to 255.255.255.240 in dotted decimal notation.",
  },
  {
    id: 94,
    question:
      "What differentiates a static route from a dynamic route during a topology change?",
    options: [
      "Static routes automatically recalculate new paths.",
      "Static routes require manual reconfiguration to find a new path.",
      "Static routes decrease their AD temporarily.",
      "Static routes change their metric to infinity.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Static routes are fixed manual entries and cannot dynamically adapt or find alternate paths if the main path fails (unless pre-configured as floating).",
  },
  {
    id: 95,
    question:
      "An IPv6 static route uses a link-local address as a next-hop. Why must the exit interface be specified?",
    options: [
      "Because link-local addresses are heavily encrypted for security reasons on the wire.",
      "Because link-local addresses exist on multiple interfaces and are not unique to the router.",
      "Because IPv6 does not support recursive lookups in the routing table for these routes.",
      "Because the administrative distance defaults to 255 without the interface specified.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Since every interface can use the same FE80:: prefix, the router needs the exit interface to know which physical link to use.",
  },
  {
    id: 96,
    question:
      "Which of the following is true regarding static routing and CPU utilization?",
    options: [
      "It requires high CPU usage to calculate the Dijkstra algorithm.",
      "It requires high CPU usage for continuous Hello packet processing.",
      "It uses virtually no CPU overhead compared to dynamic routing.",
      "It consumes massive CPU resources when calculating AD.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Static routes are manually entered and do not require background calculations or routing updates, minimizing CPU overhead.",
  },
  {
    id: 97,
    question: "What is a 'candidate default route'?",
    options: [
      "A route that might become active if the primary route in the table happens to fail.",
      "A route flagged with an asterisk (*) in the routing table, used as the Gateway of Last Resort.",
      "A route with an administrative distance of 0 that is preferred over all routes.",
      "An IPv6 route that points to the FE80::1 link-local address as the next-hop gateway.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In 'show ip route', the asterisk (*) indicates a candidate default route, meaning the router will use it for unknown destinations.",
  },
  {
    id: 98,
    question:
      "Which feature must be globally enabled for a Cisco router to forward IPv4 packets between interfaces?",
    options: ["ip routing", "ip forward", "router ospf 1", "ip route-cache"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "By default on Cisco routers, 'ip routing' is enabled, which allows the device to act as a Layer 3 forwarder.",
  },
  {
    id: 99,
    question:
      "If a static route is pointing to interface FastEthernet0/0, but FastEthernet0/0 is 'up/down', what is the state of the route?",
    options: [
      "Active",
      "Floating",
      "Removed from the routing table",
      "Marked with an asterisk (*)",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An interface must be fully 'up/up' (physical/data link) for a route tied to it to remain in the active routing table.",
  },
  {
    id: 100,
    question:
      "Which command safely replaces an existing static route pointing to 10.1.1.1 with a new route pointing to 10.2.2.2?",
    options: [
      "Simply enter the new command; it overwrites the old one.",
      "Remove the old route with 'no ip route' first, then add the new one.",
      "Use 'ip route update'.",
      "Change the AD of the old route.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Simply entering a new next-hop for the same destination will create a second route (load balancing). The original route must be negated with 'no ip route'.",
  },
  {
    id: 111,
    question:
      "Which command configures a default static route on a Cisco router?",
    options: [
      "ip route 0.0.0.0 255.255.255.255 <next-hop>",
      "ip route 0.0.0.0 0.0.0.0 <next-hop>",
      "ip default-gateway <next-hop>",
      "ip route any any <next-hop>",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A default (quad-zero) static route uses 'ip route 0.0.0.0 0.0.0.0 <next-hop>' and matches any destination that does not have a more specific entry in the routing table.",
  },
  {
    id: 222,
    question: "What is a floating static route?",
    options: [
      "A static route that is automatically removed when the interface goes down",
      "A static route with a higher administrative distance than the primary route",
      "A static route that uses the exit interface instead of the next-hop IP",
      "A static route that load-balances across multiple paths",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A floating static route is configured with a higher administrative distance (e.g., 125) than the primary route. It only appears in the routing table if the primary route fails.",
  },
  {
    id: 333,
    question:
      "Which is a required parameter when configuring a directly connected static route?",
    options: [
      "Next-hop IP address",
      "Exit interface",
      "Administrative distance",
      "Metric value",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A directly connected static route specifies the exit interface (e.g., GigabitEthernet0/0) instead of a next-hop IP. This is also called a fully specified static route.",
  },
  {
    id: 444,
    question:
      "What administrative distance is assigned to a standard static route by default?",
    options: ["0", "1", "90", "120"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The default administrative distance for a static route is 1. Connected routes are 0, and most dynamic routing protocols have higher values (OSPF 110, EIGRP 90).",
  },
  {
    id: 555,
    question: "When is a recursive static route lookup required?",
    options: [
      "When the next-hop IP is specified without an exit interface",
      "When the exit interface is a loopback",
      "When the destination is a directly connected network",
      "When the static route has an AD of 255",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "A recursive static route requires the router to perform an additional routing table lookup to determine the exit interface because only the next-hop IP is provided.",
  },
];
