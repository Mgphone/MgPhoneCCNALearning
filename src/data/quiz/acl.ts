import type { QuizQuestion } from "./types";
export const aclQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the difference between a standard and an extended ACL?",
    options: [
      "Standard ACLs filter by source IP only; extended ACLs filter by source, destination, protocol, and port",
      "Standard ACLs are applied to interfaces; extended ACLs are applied globally to the router",
      "Standard ACLs evaluate Layer 4 port numbers; extended ACLs evaluate only Layer 3 source addresses",
      "There is no practical difference between them; they are fully interchangeable in any scenario",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Standard ACLs (1–99, 1300–1999) match only the source IP address. Extended ACLs (100–199, 2000–2699) can match source, destination, protocol, and port numbers.",
  },
  {
    id: 2,
    question: "Which number range is valid for a standard IPv4 ACL?",
    options: ["100 - 199", "1 - 99", "2000 - 2699", "1000 - 1099"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Standard IPv4 ACLs use the number ranges 1-99 and the expanded range 1300-1999.",
  },
  {
    id: 3,
    question: "Where should a standard ACL ideally be placed in a network?",
    options: [
      "As close to the source as possible",
      "As close to the destination as possible",
      "On the core router only",
      "It doesn't matter where it is placed",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Because standard ACLs only filter based on the source IP address, placing them too close to the source could inadvertently block traffic intended for other valid destinations. Therefore, they should be placed as close to the destination as possible.",
  },
  {
    id: 4,
    question: "Where should an extended ACL ideally be placed?",
    options: [
      "As close to the source as possible",
      "As close to the destination as possible",
      "On the destination switch",
      "On the perimeter firewall only",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Extended ACLs filter on multiple criteria (source/destination IP, ports, etc.), so they can accurately identify traffic. Placing them as close to the source as possible saves network bandwidth by dropping unwanted traffic early.",
  },
  {
    id: 5,
    question: "What is the wildcard mask for a /24 subnet (255.255.255.0)?",
    options: ["0.0.0.15", "0.0.0.255", "0.0.255.255", "255.255.255.0"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A wildcard mask is the inverse of the subnet mask. Subtracting 255.255.255.0 from 255.255.255.255 results in 0.0.0.255.",
  },
  {
    id: 6,
    question:
      "Which wildcard mask matches exactly one specific host IP address?",
    options: ["0.0.0.0", "255.255.255.255", "0.0.0.255", "1.1.1.1"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The wildcard mask 0.0.0.0 dictates that all 32 bits of the IP address must match exactly, meaning it matches a single host.",
  },
  {
    id: 7,
    question:
      "Which keyword can be used in an ACL to replace the '0.0.0.0' wildcard mask?",
    options: ["any", "all", "host", "single"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'host' keyword can be used before an IP address (e.g., 'host 192.168.1.1') instead of typing the IP address followed by the 0.0.0.0 wildcard mask.",
  },
  {
    id: 8,
    question:
      "Which keyword replaces the IP address and wildcard mask '0.0.0.0 255.255.255.255'?",
    options: ["every", "any", "all", "permit-all"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'any' keyword means that the ACL will match any IPv4 address, replacing the need to type '0.0.0.0 255.255.255.255'.",
  },
  {
    id: 9,
    question:
      "What rule exists at the very bottom of every Cisco ACL by default?",
    options: [
      "Explicit permit any",
      "Implicit deny any",
      "Implicit permit any",
      "Explicit deny any",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Every Cisco ACL has an invisible 'implicit deny any' statement at the very end. If a packet does not match any configured statements, it is dropped.",
  },
  {
    id: 10,
    question: "How does a router process ACL statements against a packet?",
    options: [
      "Bottom-up, processing all statements",
      "Top-down, stopping at the first match",
      "Top-down, processing all statements to find the most specific match",
      "Randomly, based on sequence numbers only",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Routers evaluate ACL statements sequentially from top to bottom. The process stops immediately once a condition matches the packet.",
  },
  {
    id: 11,
    question: "Which command applies an IPv4 ACL to an interface?",
    options: [
      "access-class [number] in|out",
      "ip access-group [number] in|out",
      "apply access-list [number] in|out",
      "ip access-list [number] in|out",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'ip access-group' command is used in interface configuration mode to apply an IPv4 ACL to filter traffic entering (in) or leaving (out) that interface.",
  },
  {
    id: 12,
    question:
      "Which command applies an ACL to control Telnet or SSH access on VTY lines?",
    options: [
      "ip access-group",
      "access-class",
      "line access-list",
      "vty access-group",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "To restrict traffic coming into or going out of management lines (like VTY lines 0 4), the 'access-class' command is used in line configuration mode.",
  },
  {
    id: 13,
    question: "What happens if you apply an empty ACL to an interface?",
    options: [
      "All traffic is permitted",
      "All traffic is dropped due to the implicit deny",
      "The interface goes into an err-disabled state",
      "The router generates a syslog warning and ignores the ACL",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "If an ACL is applied to an interface but has no rules (or doesn't exist yet), the implicit deny does not take effect. All traffic is permitted until at least one rule is added.",
  },
  {
    id: 14,
    question:
      "Which of the following is a valid named extended ACL configuration command?",
    options: [
      "ip access-list extended 199",
      "ip access-list extended BLOCK_WEB",
      "access-list extended BLOCK_WEB",
      "ip extended access-list BLOCK_WEB",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Named ACLs are created using the 'ip access-list {standard | extended} [name]' global configuration command.",
  },
  {
    id: 15,
    question:
      "How can you insert a new rule between sequence numbers 10 and 20 in a named ACL?",
    options: [
      "It is impossible; you must delete and recreate the ACL",
      "Enter ACL config mode and use sequence number 15",
      "Use the 'insert' command before the rule",
      "Use the 'resequence' command globally",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In modern Cisco IOS, you can enter the named or numbered ACL configuration mode and explicitly type a sequence number (like 15) to insert a rule exactly where you want it.",
  },
  {
    id: 16,
    question:
      "Which command displays the sequence numbers and hit counts of all IPv4 ACLs on a router?",
    options: [
      "show ip interfaces",
      "show access-lists",
      "show ip route",
      "show running-config | include acl",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show access-lists' (or 'show ip access-lists') command displays all configured ACLs, their sequence numbers, and how many packets have matched each rule (hit counts).",
  },
  {
    id: 17,
    question: "What is the wildcard mask to match the 172.16.64.0/19 network?",
    options: ["0.0.15.255", "0.0.31.255", "0.0.63.255", "0.0.127.255"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A /19 subnet mask is 255.255.224.0. Subtracting this from 255.255.255.255 gives a wildcard mask of 0.0.31.255.",
  },
  {
    id: 18,
    question:
      "If an ACL has the statement 'deny ip any any', what will be the hit count for the implicit deny?",
    options: [
      "The implicit deny hit count will increment instead of the explicit deny",
      "The explicit deny will increment, and the implicit deny will never be reached",
      "Both the explicit and implicit deny counters will increment by the same amount",
      "The router will crash and reload due to the conflicting deny statements",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Because the explicit 'deny ip any any' matches all remaining traffic, the router stops processing at that statement. The invisible implicit deny at the bottom will never be reached.",
  },
  {
    id: 19,
    question:
      "Which port number is associated with the 'eq www' keyword in an extended ACL?",
    options: ["21", "22", "80", "443"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The keyword 'www' in an extended ACL is an alias for TCP port 80 (HTTP).",
  },
  {
    id: 20,
    question:
      "Which parameter in an extended ACL checks if a TCP session was already initiated from the inside network?",
    options: ["established", "init", "ack-syn", "permit-return"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'established' keyword allows return TCP traffic only if the TCP packet has the ACK or RST bits set, indicating it is part of an existing session.",
  },
  {
    id: 21,
    question:
      "Which wildcard mask is used to match a subnet with a /27 prefix?",
    options: ["0.0.0.7", "0.0.0.15", "0.0.0.31", "0.0.0.63"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A /27 subnet mask is 255.255.255.224. Subtracting this from 255.255.255.255 results in 0.0.0.31.",
  },
  {
    id: 22,
    question:
      "Which command shows which ACLs are applied to GigabitEthernet0/1 and in what direction?",
    options: [
      "show ip interface GigabitEthernet0/1",
      "show access-lists GigabitEthernet0/1",
      "show mac address-table interface GigabitEthernet0/1",
      "show ip access-lists interface GigabitEthernet0/1",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'show ip interface' command displays IPv4-specific interface information, including the names or numbers of inbound and outbound ACLs applied to it.",
  },
  {
    id: 23,
    question: "What is the result of using the 'remark' keyword in an ACL?",
    options: [
      "It creates an exception to the implicit deny at the end of the ACL",
      "It adds a descriptive comment to the ACL for administration purposes",
      "It logs all traffic that matches the next rule to the syslog server",
      "It marks matching packets for QoS prioritization in the IP header",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'remark' keyword is used to add a comment or description to an ACL to make it easier for administrators to understand its purpose. It has no effect on packet filtering.",
  },
  {
    id: 24,
    question:
      "Which protocol number represents ICMP when configuring an extended ACL?",
    options: ["1", "6", "17", "89"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "When writing extended ACLs, ICMP is protocol 1. However, in IOS, you typically use the keyword 'icmp' instead of the number. TCP is 6, UDP is 17, and OSPF is 89.",
  },
  {
    id: 25,
    question: "In an extended ACL, what does the keyword 'eq' mean?",
    options: [
      "Equal to (matches a specific port)",
      "Equivalent queue (for QoS)",
      "Established quarter (time-based)",
      "Extended query",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'eq' keyword stands for 'equal to' and is used to match a specific TCP or UDP port number.",
  },
  {
    id: 26,
    question:
      "Which operator would you use in an extended ACL to permit ports 1024 and above?",
    options: ["eq 1024", "gt 1023", "lt 1024", "neq 1024"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'gt' (greater than) operator matches ports strictly higher than the specified number. 'gt 1023' matches 1024 to 65535.",
  },
  {
    id: 27,
    question:
      "Which command removes a single line from a named ACL without deleting the entire ACL?",
    options: [
      "no access-list [name] [sequence-number]",
      "no [sequence-number] inside the ACL config mode",
      "clear access-list line [number]",
      "remove rule [number]",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In named ACL configuration mode (or numbered ACL config mode in modern IOS), you can remove a specific line by typing 'no' followed by its sequence number (e.g., 'no 10').",
  },
  {
    id: 28,
    question:
      "What is the default sequence numbering increment when creating a new ACL?",
    options: ["1", "5", "10", "100"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "By default, Cisco IOS assigns sequence numbers in increments of 10 (10, 20, 30, etc.) to allow space for inserting new rules later.",
  },
  {
    id: 29,
    question:
      "Which command reorganizes the sequence numbers of an ACL to start at 10 and increment by 10?",
    options: [
      "ip access-list resequence [acl-name] 10 10",
      "rebuild access-list [acl-name] 10 10",
      "sequence-reset [acl-name] 10 10",
      "ip acl reset [acl-name] 10 10",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The global configuration command 'ip access-list resequence [name/number] [starting-number] [increment]' renumbers the rules evenly.",
  },
  {
    id: 30,
    question:
      "Which statement will successfully permit HTTP traffic to a server at 192.168.1.50?",
    options: [
      "permit tcp any host 192.168.1.50 eq 80",
      "permit udp any host 192.168.1.50 eq 80",
      "permit http any host 192.168.1.50",
      "permit tcp host 192.168.1.50 any eq 80",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "HTTP uses TCP. The source is 'any', the destination is 'host 192.168.1.50', and the destination port is 'eq 80'.",
  },
  {
    id: 31,
    question:
      "An ACL has statements 10 permit ip 10.0.0.0 0.255.255.255 any and 20 deny ip 10.1.1.0 0.0.0.255 any. What happens to traffic from 10.1.1.5?",
    options: [
      "It is denied because of rule 20",
      "It is permitted because rule 10 is matched first",
      "It is dropped by the implicit deny",
      "It is load-balanced between permit and deny",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "ACLs are processed top-down. 10.1.1.5 matches the 10.0.0.0/8 network in sequence 10. Since it's a match, processing stops and the packet is permitted. Rule 20 is never checked for this packet.",
  },
  {
    id: 32,
    question: "How do you log packets that match a specific ACL rule?",
    options: [
      "Apply the 'log' keyword at the end of the ACL statement",
      "Use the 'logging host' global command",
      "Configure 'ip access-group log' on the interface",
      "Enable 'debug ip packet acl'",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Appending the 'log' or 'log-input' keyword to the end of an ACL statement instructs the router to send a syslog message when a packet matches that statement.",
  },
  {
    id: 33,
    question:
      "What type of ACL only supports filtering based on the source IPv4 address?",
    options: [
      "Extended ACL",
      "Standard ACL",
      "Time-based ACL",
      "Reflexive ACL",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Standard IPv4 ACLs check only the source IP address in the packet header.",
  },
  {
    id: 34,
    question:
      "Which configuration mode must you be in to apply an ACL to an interface?",
    options: [
      "Global configuration mode",
      "Line configuration mode",
      "Interface configuration mode",
      "Privileged EXEC mode",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "To apply an ACL to an interface using 'ip access-group', you must first enter interface configuration mode (e.g., 'interface gigabitethernet 0/0').",
  },
  {
    id: 35,
    question: "Which of the following is true regarding outbound ACLs?",
    options: [
      "They filter traffic before the routing table lookup",
      "They filter traffic after the routing table lookup",
      "They apply only to router-generated traffic",
      "They cannot be extended ACLs",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Outbound ACLs process packets after the router has checked the routing table and determined the exit interface.",
  },
  {
    id: 36,
    question: "Which of the following is true regarding inbound ACLs?",
    options: [
      "They filter traffic before the routing table lookup",
      "They filter traffic after the routing table lookup",
      "They are only used on WAN interfaces",
      "They cannot deny broadcast traffic",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Inbound ACLs process packets as they arrive on the interface, before the router performs a routing table lookup. This saves CPU cycles if the packet is destined to be dropped.",
  },
  {
    id: 37,
    question:
      "What is the standard ACL number range that was added later as an expansion?",
    options: ["100 - 199", "1300 - 1999", "2000 - 2699", "3000 - 3999"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "When standard ACLs ran out of numbers (1-99), Cisco expanded the range to 1300-1999.",
  },
  {
    id: 38,
    question:
      "What is the extended ACL number range that was added later as an expansion?",
    options: ["1300 - 1999", "2000 - 2699", "1 - 99", "100 - 199"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation: "The expanded range for extended IPv4 ACLs is 2000-2699.",
  },
  {
    id: 39,
    question:
      "You need to allow users to ping a server but block all other traffic. Which protocol should be permitted in the extended ACL?",
    options: ["TCP", "UDP", "ICMP", "IP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Ping relies on the Internet Control Message Protocol (ICMP) Echo Request and Echo Reply messages.",
  },
  {
    id: 40,
    question:
      "In an IPv6 ACL, what rule is implicitly added at the end before the implicit deny?",
    options: [
      "permit ipv6 any any",
      "permit icmp any any nd-na and nd-ns",
      "permit tcp any any established",
      "There are no implicit permits in IPv6 ACLs",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IPv6 relies heavily on Neighbor Discovery (ND) ICMPv6 messages. To prevent breaking network functionality, Cisco implicitly permits 'nd-na' and 'nd-ns' (Neighbor Advertisement/Solicitation) before the implicit deny.",
  },
  {
    id: 41,
    question: "How do you configure an IPv6 ACL?",
    options: [
      "ipv6 access-list [name]",
      "ip access-list ipv6 [name]",
      "access-list ipv6 [name]",
      "ipv6 access-group [name]",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "IPv6 ACLs are always named (not numbered) and are created using the global command 'ipv6 access-list [name]'.",
  },
  {
    id: 42,
    question: "Which command applies an IPv6 ACL to an interface?",
    options: [
      "ipv6 access-group [name] in|out",
      "ipv6 traffic-filter [name] in|out",
      "ip access-group [name] in|out",
      "ipv6 access-class [name] in|out",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike IPv4 which uses 'ip access-group', IPv6 ACLs are applied to interfaces using the 'ipv6 traffic-filter' command.",
  },
  {
    id: 43,
    question:
      "What wildcard mask matches the IP address range 192.168.1.0 through 192.168.1.15?",
    options: ["0.0.0.15", "0.0.0.31", "0.0.0.7", "0.0.0.255"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The range spans 16 addresses (0 to 15), which corresponds to a /28 subnet block. The wildcard mask for a /28 is 0.0.0.15.",
  },
  {
    id: 44,
    question:
      "A network administrator writes 'access-list 1 permit 192.168.1.0 0.0.0.255'. What happens to traffic from 10.1.1.1?",
    options: [
      "It is permitted",
      "It is denied by the implicit deny",
      "It is routed to the null interface",
      "It generates an ICMP unreachable message",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Since the packet from 10.1.1.1 does not match the only permit statement, it hits the implicit 'deny any' at the end of the ACL and is dropped.",
  },
  {
    id: 45,
    question:
      "Which is a valid reason for an ACL not blocking traffic as expected?",
    options: [
      "The ACL was applied in the wrong direction on the interface",
      "The ACL has no implicit deny statement at the end of the list",
      "The ACL uses sequence numbers to order its rules",
      "The router has too much RAM to process the ACL efficiently",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Applying an ACL in the wrong direction (e.g., 'in' instead of 'out') is a common configuration error that prevents traffic from being filtered as intended.",
  },
  {
    id: 46,
    question:
      "What keyword can be used to describe the source port in an extended ACL?",
    options: [
      "src-port (placed after the destination IP address and wildcard mask)",
      "source-eq (placed before the protocol keyword at the start of the rule)",
      "sport (placed after the destination port at the very end of the ACL rule)",
      "eq (placed after the source IP and before the destination IP)",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "In an extended ACL, the source port operator (like eq, lt, gt) and port number are placed immediately after the source IP address and wildcard mask.",
  },
  {
    id: 47,
    question:
      "Which ACL statement permits all traffic from the 10.0.0.0/8 network?",
    options: [
      "access-list 10 permit 10.0.0.0 255.0.0.0",
      "access-list 10 permit 10.0.0.0 0.255.255.255",
      "access-list 10 permit 10.0.0.0 0.0.0.255",
      "access-list 10 permit any 10.0.0.0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A /8 subnet mask is 255.0.0.0, so the corresponding wildcard mask is 0.255.255.255.",
  },
  {
    id: 48,
    question: "Which IPv6 ACL statement denies all IPv6 traffic?",
    options: [
      "deny ipv6 any any",
      "deny ip any any",
      "deny any",
      "deny ipv6 all",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "In IPv6 ACLs, the command to explicitly deny all traffic is 'deny ipv6 any any'.",
  },
  {
    id: 49,
    question:
      "How many ACLs can be applied to a single router interface for a specific protocol?",
    options: [
      "One per interface for a specific protocol and direction",
      "Two per interface (one inbound, one outbound)",
      "Four per interface (two inbound, two outbound)",
      "Unlimited, as many as the interface can support",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "You can apply one ACL per protocol (e.g., IPv4), per direction (inbound or outbound), per interface. This means a maximum of two IPv4 ACLs per interface.",
  },
  {
    id: 50,
    question:
      "If you edit a numbered standard ACL in global configuration mode by typing 'access-list 1 permit host 1.1.1.1', where does the rule go?",
    options: [
      "At the very top of the ACL, before all existing rules",
      "At the very bottom, before the implicit deny",
      "It overwrites the entire ACL with only the new rule",
      "It is placed alphabetically among the existing rules",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When adding rules using the legacy global configuration 'access-list [number]' command, new statements are appended to the bottom of the ACL.",
  },
  {
    id: 51,
    question: "Which router command deletes standard ACL 10 completely?",
    options: [
      "clear access-list 10",
      "no access-list 10",
      "delete access-list 10",
      "remove acl 10",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'no access-list [number]' global configuration command completely removes a numbered ACL from the router.",
  },
  {
    id: 52,
    question:
      "What wildcard mask matches all odd-numbered hosts in the 192.168.1.0/24 subnet?",
    options: ["0.0.0.254", "0.0.0.255", "0.0.0.1", "255.255.255.254"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "A wildcard mask of 0.0.0.254 checks all bits except the last bit (which determines odd/even). If the network statement specifies an odd number (like .1), it matches all odd addresses.",
  },
  {
    id: 53,
    question: "Which of the following describes the function of an ACL?",
    options: [
      "It encrypts payload data",
      "It acts as a packet filter based on defined criteria",
      "It dynamically assigns IP addresses",
      "It routes packets between autonomous systems",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An Access Control List (ACL) is a sequential list of permit or deny statements that apply to IP addresses or upper-layer protocols to filter traffic.",
  },
  {
    id: 54,
    question:
      "Which statement is true about ACLs and router-generated traffic?",
    options: [
      "Outbound ACLs on the exit interface filter router-generated traffic",
      "Inbound ACLs on the ingress interface filter router-generated traffic",
      "ACLs applied to an interface do not filter traffic generated by the router itself",
      "Router-generated traffic must be explicitly permitted by an inbound ACL to forward",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "By default, ACLs applied to interfaces only filter traffic passing through the router, not traffic originating from the router itself (like pings or routing updates from the CLI).",
  },
  {
    id: 55,
    question:
      "To deny Telnet traffic to a specific subnet but permit SSH, what protocol should be specified in the extended ACL?",
    options: ["IP", "UDP", "TCP", "ICMP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Both Telnet (port 23) and SSH (port 22) operate over the TCP protocol.",
  },
  {
    id: 56,
    question:
      "Which of the following correctly permits HTTPS traffic from any source to host 10.1.1.1?",
    options: [
      "permit tcp any host 10.1.1.1 eq 443",
      "permit udp any host 10.1.1.1 eq 443",
      "permit tcp host 10.1.1.1 any eq https",
      "permit ip any host 10.1.1.1 eq 443",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "HTTPS uses TCP port 443. The command specifies TCP, source 'any', destination 'host 10.1.1.1', and matches port 443 with 'eq 443'.",
  },
  {
    id: 57,
    question:
      "Why should you generally configure more specific rules before general rules in an ACL?",
    options: [
      "To save router memory by keeping the ACL as short as possible",
      "Because ACLs process top-down and stop at the first match",
      "Because specific rules use fewer CPU cycles to process",
      "To bypass the implicit deny at the bottom of the ACL",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Since ACLs stop processing upon the first match, placing a broad rule (like 'permit ip any any') at the top will negate all specific filtering rules placed below it.",
  },
  {
    id: 58,
    question:
      "An extended ACL is numbered 101. You want to apply it inbound on Serial0/0/0. What is the command?",
    options: [
      "ip access-list 101 in",
      "access-group 101 inbound",
      "ip access-group 101 in",
      "access-list 101 in",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In interface configuration mode, the command is 'ip access-group 101 in'.",
  },
  {
    id: 59,
    question:
      "You want to clear the hit counters of all ACLs. Which command do you use?",
    options: [
      "clear access-list counters",
      "clear ip access-list",
      "reset access-list",
      "no ip access-list counters",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The privileged EXEC command 'clear access-list counters' resets the hit counts to zero for all ACLs.",
  },
  {
    id: 60,
    question:
      "What happens if a packet's source IP address does not match any 'permit' or 'deny' statements in a standard ACL?",
    options: [
      "The packet is forwarded to the default gateway",
      "The packet is dropped",
      "The packet is broadcasted",
      "The packet is inspected by the CPU",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If no statements match, the packet hits the implicit deny at the end of the ACL and is dropped.",
  },
  {
    id: 61,
    question: "Which wildcard mask is equivalent to a /30 subnet mask?",
    options: ["0.0.0.1", "0.0.0.3", "0.0.0.7", "0.0.0.15"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A /30 mask is 255.255.255.252. Subtracting that from 255.255.255.255 leaves a wildcard mask of 0.0.0.3.",
  },
  {
    id: 62,
    question:
      "Which command lists only the specific ACL named 'BLOCK_SSH' and its contents?",
    options: [
      "show access-list BLOCK_SSH",
      "show ip interface BLOCK_SSH",
      "show running-config BLOCK_SSH",
      "show access-lists BLOCK_SSH",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The command 'show access-lists [acl-name/number]' displays the details of a specific ACL.",
  },
  {
    id: 63,
    question:
      "Which operator is used to match a range of port numbers in an extended ACL?",
    options: ["eq", "range", "btwn", "range-port"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'range' keyword is used to specify a starting port and an ending port (e.g., 'range 20 21').",
  },
  {
    id: 64,
    question:
      "You apply ACL 10 inbound on an interface. Later, you apply ACL 20 inbound on the same interface. What happens?",
    options: [
      "Both ACLs merge together",
      "ACL 10 remains, and an error is thrown for ACL 20",
      "ACL 20 replaces ACL 10 as the inbound filter",
      "The router load-balances between the two ACLs",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because only one IPv4 ACL is allowed per interface, per direction, applying a new ACL replaces the existing one in that direction.",
  },
  {
    id: 65,
    question:
      "In IPv6, what is the equivalent of the IPv4 '0.0.0.0 255.255.255.255' (any) statement?",
    options: [
      "only 'any' is accepted, never '::/0'",
      "only 'all' is accepted, never 'any'",
      "'::/0' is used only by routing protocols",
      "both 'any' and '::/0' can be used",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "In IPv6 ACL configuration, the keyword 'any' is most common, but '::/0' mathematically represents the entire IPv6 address space.",
  },
  {
    id: 66,
    question:
      "Which command enters the configuration mode for an extended named ACL called 'FIREWALL'?",
    options: [
      "ip access-list extended FIREWALL",
      "access-list extended FIREWALL",
      "access-list FIREWALL extended",
      "ip ext acl FIREWALL",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The correct global configuration command is 'ip access-list extended FIREWALL'.",
  },
  {
    id: 67,
    question:
      "What is the primary difference between how standard and extended ACLs are processed on a router?",
    options: [
      "Standard ACLs process faster because they inspect less of the packet header",
      "Extended ACLs process in hardware; standard ACLs in software",
      "Standard ACLs ignore the implicit deny",
      "There is no difference in processing speed on modern CEF-enabled routers",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Standard ACLs only look at the source IP address (Layer 3), whereas extended ACLs inspect source, destination, protocol, and port numbers (Layer 3 and 4), making standard ACL evaluation computationally lighter.",
  },
  {
    id: 68,
    question:
      "What is the correct syntax to deny a specific host (192.168.1.99) in a standard ACL?",
    options: [
      "deny 192.168.1.99 255.255.255.255",
      "deny host 192.168.1.99",
      "deny 192.168.1.99/32",
      "deny ip host 192.168.1.99",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In a standard ACL, you can just use 'deny host 192.168.1.99'. You do not need to specify 'ip' because standard ACLs only filter IPv4.",
  },
  {
    id: 69,
    question: "Which standard ACL statement allows the 172.16.0.0/16 network?",
    options: [
      "permit 172.16.0.0 0.0.255.255",
      "permit 172.16.0.0 255.255.0.0",
      "permit 172.16.0.0 0.255.255.255",
      "permit 172.16.0.0 /16",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "A /16 subnet mask is 255.255.0.0. The wildcard mask is the inverse: 0.0.255.255.",
  },
  {
    id: 70,
    question:
      "Which port number matches the 'domain' keyword in an extended ACL?",
    options: ["22", "53", "80", "443"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'domain' keyword corresponds to DNS, which uses port 53 (TCP and UDP).",
  },
  {
    id: 71,
    question:
      "You want to block TFTP traffic. Which protocol and port should you deny?",
    options: ["TCP eq 69", "UDP eq 69", "TCP eq 21", "UDP eq 21"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation: "TFTP (Trivial File Transfer Protocol) relies on UDP port 69.",
  },
  {
    id: 72,
    question:
      "What happens to the remaining ACL rules if a 'resequence' command is issued?",
    options: [
      "They are permanently deleted from the configuration of the router",
      "They are reordered alphabetically by the description text of each rule",
      "Their sequence numbers change, but their physical order and logic remain identical",
      "The rules are sorted from most specific to least specific by matching criteria",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Resequencing only changes the numbers (e.g., from 12, 17, 24 to 10, 20, 30). The top-down processing order and logic of the ACL do not change.",
  },
  {
    id: 73,
    question:
      "When applying an ACL to VTY lines, what must match between the ACL and the access-class command?",
    options: [
      "The ACL name or number",
      "The direction must be outbound",
      "It must be an extended ACL",
      "The protocol must be SSH",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'access-class [name/number]' command must reference the exact name or number of the configured ACL.",
  },
  {
    id: 74,
    question:
      "If a router has no ACLs configured, what happens to traffic crossing its interfaces?",
    options: [
      "All traffic is dropped at every interface by default",
      "Only routing updates are allowed to cross interfaces",
      "All traffic is permitted and routed normally",
      "It requires a default permit rule to be configured first",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "ACLs are an optional security feature. By default, a router routes all IP traffic according to its routing table without filtering.",
  },
  {
    id: 75,
    question:
      "Which component of an extended ACL statement specifies the destination network?",
    options: [
      "The first IP address and wildcard mask",
      "The second IP address and wildcard mask",
      "The protocol keyword",
      "The eq keyword",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Extended ACL syntax is: [action] [protocol] [source IP] [source wildcard] [destination IP] [destination wildcard].",
  },
  {
    id: 76,
    question: "Which of the following is true regarding wildcard masks?",
    options: [
      "A 0 means 'ignore this bit', a 1 means 'match this bit'",
      "A 0 means 'match this bit', a 1 means 'ignore this bit'",
      "They must be contiguous like subnet masks",
      "They are only used in extended ACLs",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In Cisco wildcard masks, a 0 indicates that the corresponding bit in the IP address must exactly match, whereas a 1 indicates that the bit can be any value (ignored).",
  },
  {
    id: 77,
    question: "Can wildcard masks be non-contiguous (e.g., 0.255.0.255)?",
    options: [
      "No, they must follow the same contiguous rules as subnet masks",
      "Yes, they can be non-contiguous to match specific bit patterns across subnets",
      "Only in IPv6, which uses 128-bit addresses instead of 32-bit IPv4",
      "Only on Layer 2 switches, which handle frames rather than routed packets",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike subnet masks, wildcard masks do not have to be a contiguous string of 1s followed by 0s. They can be non-contiguous to match specific odd/even networks or specific patterns.",
  },
  {
    id: 78,
    question:
      "Which keyword matches traffic originating from any port but going to a specific destination port?",
    options: [
      "source-port any, which explicitly matches every source port",
      "There is no keyword; you simply omit the source port parameter",
      "eq any, which is valid syntax for matching any source port",
      "permit-any-port, which matches traffic from all source ports",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If you do not specify a source port (e.g., 'eq [port]') immediately after the source IP, the ACL inherently matches all source ports.",
  },
  {
    id: 79,
    question:
      "Which log message severity level is generated when a packet matches an ACL statement with the 'log' keyword?",
    options: [
      "0 - Emergency",
      "3 - Error",
      "6 - Informational",
      "7 - Debugging",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "ACL logging generates syslog messages at severity level 6 (Informational) by default.",
  },
  {
    id: 80,
    question:
      "When troubleshooting, which command shows the number of matches for the implicit deny?",
    options: [
      "show access-lists, which displays the match count of the implicit deny rule",
      "show ip interface, which reports the implicit deny match counters directly",
      "show log, which increments a counter for every implicit deny hit received",
      "The implicit deny does not increment counters in 'show access-lists' by default",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Because it is an invisible rule, the implicit deny does not show up in 'show access-lists', nor does it keep a hit counter. To see drops, you must add an explicit 'deny ip any any' at the end.",
  },
  {
    id: 81,
    question: "Which of the following is a valid named standard ACL command?",
    options: [
      "ip access-list standard RESTRICT_LAN",
      "ip access-list RESTRICT_LAN standard",
      "access-list standard RESTRICT_LAN",
      "standard access-list RESTRICT_LAN",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The correct global command is 'ip access-list standard [name]'.",
  },
  {
    id: 82,
    question: "What does the 'established' keyword check for in a TCP header?",
    options: [
      "SYN and FIN bits",
      "ACK or RST bits",
      "URG and PSH bits",
      "Only the SYN bit",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'established' keyword permits traffic if the TCP packet has the Acknowledgment (ACK) or Reset (RST) bits set, proving it is a response to an internally initiated session.",
  },
  {
    id: 83,
    question:
      "Which statement accurately describes IPv6 ACL implicit rules compared to IPv4?",
    options: [
      "They are exactly the same as IPv4: only an implicit deny at the end",
      "IPv6 has no implicit rules of any kind at the end of the ACL",
      "IPv6 implicitly permits Neighbor Discovery before the implicit deny",
      "IPv6 implicitly permits all ICMPv6 traffic before the implicit deny",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "IPv6 ACLs include 'permit icmp any any nd-na' and 'permit icmp any any nd-ns' before the final 'deny ipv6 any any' to allow local link resolution to function.",
  },
  {
    id: 84,
    question:
      "How does the router treat a packet if an ACL applied to an interface has been deleted from the global configuration?",
    options: [
      "It drops all traffic",
      "It permits all traffic",
      "It uses the last known good configuration",
      "It puts the interface in shutdown mode",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If the 'ip access-group' command refers to a non-existent ACL, the router permits all traffic, as there are no rules to evaluate.",
  },
  {
    id: 85,
    question:
      "A network has a perimeter router. To block spoofed private IP addresses from entering from the Internet, where should the ACL be applied?",
    options: [
      "Inbound on the internal interface",
      "Outbound on the Internet-facing interface",
      "Inbound on the Internet-facing interface",
      "Outbound on the internal interface",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "To stop spoofed packets at the edge, the ACL should be applied inbound on the external (Internet-facing) interface to drop them before they are routed.",
  },
  {
    id: 86,
    question:
      "What is the maximum number of standard ACLs using the traditional 1-99 range?",
    options: ["99", "100", "1000", "Unlimited"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The traditional range 1 to 99 provides 99 standard ACLs. (0 is not used for standard ACLs).",
  },
  {
    id: 87,
    question:
      "You need to match all IP addresses in the 10.0.0.0/8 network that have an even number in the third octet. Which wildcard mask does this?",
    options: ["0.255.254.255", "0.255.1.255", "0.255.0.255", "0.255.255.254"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The 254 in the third octet (11111110 in binary) means 'ignore the first 7 bits, but the last bit must match exactly'. If the network statement has a 0 in the third octet, it matches all even numbers.",
  },
  {
    id: 88,
    question:
      "Which command would you use to verify if an access class is applied to the VTY lines?",
    options: [
      "show running-config | section vty",
      "show line vty 0 4",
      "show access-class",
      "Both A and B",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Checking the running configuration for the 'line vty' section or using 'show line' will reveal which access class is applied to secure terminal access.",
  },
  {
    id: 89,
    question:
      "Which statement represents a standard ACL rule to permit all traffic?",
    options: [
      "permit ip any any",
      "permit any",
      "permit all",
      "permit 0.0.0.0 255.255.255.255",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In a standard ACL, which only checks the source, you only need to specify 'permit any' (or 'permit 0.0.0.0 255.255.255.255'). 'permit ip any any' is extended syntax.",
  },
  {
    id: 90,
    question:
      "Why might a network engineer use named ACLs instead of numbered ACLs?",
    options: [
      "Named ACLs are processed faster than numbered ACLs on the same hardware",
      "Named ACLs allow alphanumeric descriptive names for easier identification",
      "Numbered ACLs do not support sequence numbers for rule insertion",
      "Named ACLs bypass the implicit deny at the end of the list",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Named ACLs allow engineers to use meaningful names (like BLOCK_TELNET), making the configuration much easier to read and maintain.",
  },
  {
    id: 91,
    question: "What is an Object Group in relation to ACLs (advanced CCNA)?",
    options: [
      "A way to group multiple IP addresses or ports to simplify ACL creation",
      "A physical grouping of router interfaces used for traffic engineering",
      "A method to bypass the implicit deny and permit all traffic",
      "A Layer 2 security feature used to secure switch ports against attacks",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Object groups (Network or Service) allow you to define a list of IPs or ports once, and reference that group in a single ACL statement, drastically reducing ACL length.",
  },
  {
    id: 92,
    question: "Which of the following is true about Time-Based ACLs?",
    options: [
      "They require NTP to be configured to function properly",
      "They dynamically change IP addresses based on the time of day",
      "They only work with standard ACLs",
      "They delete themselves after the time expires",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Time-based ACLs activate or deactivate rules based on the router's clock. NTP (Network Time Protocol) is highly recommended to ensure the router's time is accurate.",
  },
  {
    id: 93,
    question: "Which command defines the time range for a time-based ACL?",
    options: [
      "clock-range [name]",
      "time-range [name]",
      "acl-time [name]",
      "schedule [name]",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The global configuration command 'time-range [name]' is used to create a schedule, which is then referenced at the end of an extended ACL statement.",
  },
  {
    id: 94,
    question: "What does the keyword 'neq' mean in an extended ACL?",
    options: [
      "Network equivalent queue",
      "Not equal to",
      "Near end quality",
      "Next equivalent query",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'neq' (not equal to) operator matches any port EXCEPT the one specified.",
  },
  {
    id: 95,
    question:
      "An ACL statement reads: 'deny tcp any host 10.1.1.5 eq 23'. What traffic is blocked?",
    options: [
      "SSH to 10.1.1.5",
      "Telnet to 10.1.1.5",
      "All TCP traffic to 10.1.1.5",
      "Telnet from 10.1.1.5 to any destination",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "TCP port 23 is Telnet. The destination is host 10.1.1.5. This blocks Telnet sessions initiated toward that specific host.",
  },
  {
    id: 96,
    question:
      "If a router has two interfaces (G0/0 and G0/1), and you want to prevent traffic from a host on G0/0 from reaching a server on G0/1, where is the most efficient placement for an extended ACL?",
    options: [
      "Outbound on G0/1",
      "Inbound on G0/0",
      "Inbound on G0/1",
      "Outbound on G0/0",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Placing the extended ACL inbound on G0/0 (closest to the source) stops the unwanted traffic before the router has to process it through the routing table.",
  },
  {
    id: 97,
    question:
      "Which wildcard mask matches exactly the first half of a /24 subnet (e.g., 192.168.1.0 to 192.168.1.127)?",
    options: ["0.0.0.127", "0.0.0.128", "0.0.0.63", "0.0.0.255"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The range from 0 to 127 spans 128 addresses, which is equivalent to a /25 subnet. The wildcard mask for a /25 is 0.0.0.127.",
  },
  {
    id: 98,
    question: "Which command creates a numbered extended ACL?",
    options: [
      "access-list 150",
      "ip access-list 150",
      "access-list extended 150",
      "ip access-list extended 150",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "While you can use legacy 'access-list 150' directly, to enter named configuration mode for a numbered ACL (which allows sequencing), you use 'ip access-list extended 150'.",
  },
  {
    id: 99,
    question:
      "What happens if you type an ACL statement with a typo in the IP address while in numbered ACL global config mode (e.g., access-list 10 permit 192.168.1.999)?",
    options: [
      "The router accepts it but marks it inactive",
      "The router rejects the command with an 'Invalid input detected' error",
      "The router assumes it is a hostname and tries to resolve it via DNS",
      "The router changes it to 255.255.255.255",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The IOS CLI checks syntax immediately. Since 999 is outside the valid 0-255 range for an octet, it throws an invalid input error and does not add the rule.",
  },
  {
    id: 100,
    question:
      "Which practice is recommended when editing a long, complex ACL on a production router?",
    options: [
      "Edit it live using sequence numbers while the network is busy with traffic flows",
      "Delete the entire ACL and retype all of its rules in as short a time as possible",
      "Copy the ACL to a text editor, make changes, remove the old ACL, and paste the new one",
      "Apply an empty ACL to the interface before starting to edit the real one on it",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Using a text editor (like Notepad) is a best practice. It prevents partial implementation of rules, accidental lockouts during live editing, and allows for easy backup and syntax checking before pasting it back.",
  },
];
