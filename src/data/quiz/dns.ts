import type { QuizQuestion } from "./types";

export const dnsQuestions: QuizQuestion[] = [
  // --- DNS Fundamentals & Core Concepts ---
  {
    id: 1,
    question: "What is the primary function of DNS?",
    options: [
      "To assign IP addresses to network devices",
      "To resolve human-readable domain names to IP addresses",
      "To encrypt traffic between web browsers and servers",
      "To filter malicious websites",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DNS (Domain Name System) translates domain names (e.g., www.cisco.com) into IP addresses (e.g., 72.163.4.161), enabling users to access resources by name instead of numeric addresses.",
  },
  {
    id: 2,
    question: "At which layer of the OSI model does DNS operate?",
    options: [
      "Layer 3 (Network)",
      "Layer 4 (Transport)",
      "Layer 6 (Presentation)",
      "Layer 7 (Application)",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "DNS is an Application Layer (Layer 7) protocol that provides name resolution services for other network applications.",
  },
  {
    id: 3,
    question:
      "Which port is primarily used by DNS for standard client queries?",
    options: ["TCP Port 53", "UDP Port 53", "TCP Port 80", "UDP Port 67"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Standard DNS queries and responses are typically sent over UDP port 53 because it is fast and connectionless.",
  },
  {
    id: 4,
    question: "When does DNS use TCP Port 53 instead of UDP?",
    options: [
      "For all internal network queries on the local LAN",
      "For queries directed to the root servers only",
      "For zone transfers and responses exceeding 512 bytes",
      "When authenticating queries via DNSSEC signatures",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "DNS uses TCP port 53 for zone transfers (AXFR/IXFR) between DNS servers and when a response payload exceeds the standard UDP size limit (historically 512 bytes).",
  },
  {
    id: 5,
    question: "What does FQDN stand for?",
    options: [
      "Fully Qualified Domain Name",
      "Forward Query Domain Network",
      "File Query Data Name",
      "Fully Quantified DNS Node",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "FQDN stands for Fully Qualified Domain Name, which specifies the exact location of a node in the DNS tree hierarchy (e.g., host.example.com.).",
  },
  {
    id: 6,
    question:
      "What is the maximum allowed length of an FQDN, including the trailing dot?",
    options: [
      "63 characters",
      "128 characters",
      "253 characters",
      "255 characters",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "The maximum length of a Fully Qualified Domain Name (FQDN) is 255 octets (characters), including the root zone trailing dot.",
  },
  {
    id: 7,
    question:
      "What is the maximum length of a single label (the part between dots) in a DNS name?",
    options: [
      "15 characters",
      "32 characters",
      "63 characters",
      "128 characters",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Each individual label in a domain name (like 'www' or 'cisco') can be up to 63 characters long.",
  },
  {
    id: 8,
    question: "What is a 'Zone' in the context of DNS?",
    options: [
      "A geographic region of internet users that is served by a single provider",
      "A portion of the DNS namespace managed by a specific organization or administrator",
      "The physical server hardware that is hosting the DNS records for a domain",
      "A subnet of IP addresses that has been assigned to a single company or ISP entity",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A DNS zone is a distinct, contiguous portion of the domain name space that has been delegated to a single administrative entity.",
  },
  {
    id: 9,
    question:
      "What is the term for a DNS server that holds the master, read-write copy of a zone file?",
    options: [
      "Secondary DNS Server",
      "Caching-only DNS Server",
      "Primary (Master) DNS Server",
      "Root Hint Server",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A Primary (or Master) DNS server hosts the original, editable version of the zone file.",
  },
  {
    id: 10,
    question: "What is the purpose of a Secondary (Slave) DNS server?",
    options: [
      "To act as a backup for the primary server and share the query load",
      "To resolve names solely for local clients",
      "To host records that the primary server cannot hold",
      "To route traffic between different domains",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Secondary servers provide redundancy and load balancing by holding a read-only copy of the zone file obtained via a zone transfer from the primary server.",
  },

  // --- DNS Record Types ---
  {
    id: 11,
    question: "Which DNS record type maps a domain name to an IPv4 address?",
    options: ["AAAA Record", "A Record", "CNAME Record", "PTR Record"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'A' (Address) record is the most common DNS record, mapping a hostname to a 32-bit IPv4 address.",
  },
  {
    id: 12,
    question: "Which DNS record type maps a domain name to an IPv6 address?",
    options: ["A Record", "AAAA Record", "AAAAA Record", "MX Record"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'AAAA' (Quad-A) record maps a hostname to a 128-bit IPv6 address.",
  },
  {
    id: 13,
    question: "What is the function of a CNAME record?",
    options: [
      "Maps an IP address to a hostname",
      "Maps a hostname to another hostname (alias)",
      "Identifies the authoritative name servers for a zone",
      "Specifies the mail servers for a domain",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A CNAME (Canonical Name) record creates an alias, pointing one domain name to another domain name rather than directly to an IP address.",
  },
  {
    id: 14,
    question:
      "Which record type is used to identify the email servers responsible for receiving messages for a domain?",
    options: ["TXT", "SRV", "MX", "NS"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Mail Exchanger (MX) records specify the mail servers responsible for accepting email messages on behalf of a domain.",
  },
  {
    id: 15,
    question: "What is the purpose of the priority value in an MX record?",
    options: [
      "It determines the bandwidth allocated to the mail server.",
      "Lower numbers indicate higher priority, dictating which server should be tried first.",
      "Higher numbers indicate higher priority, dictating which server should be tried first.",
      "It limits the number of emails the server can receive.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "MX records use preference/priority numbers. Senders will attempt to deliver email to the server with the lowest priority number first.",
  },
  {
    id: 16,
    question:
      "Which DNS record provides the name of the authoritative DNS servers for a specific domain?",
    options: ["SOA Record", "NS Record", "A Record", "PTR Record"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Name Server (NS) records delegate a DNS zone to specific authoritative name servers.",
  },
  {
    id: 17,
    question: "What does the SOA record represent in a DNS zone?",
    options: [
      "Start of Authority",
      "Server Overload Alert",
      "Standard Object Architecture",
      "Synchronous Operations Area",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The Start of Authority (SOA) record is required in every zone and contains core administrative details about the zone, such as the primary name server, administrator email, and zone transfer timers.",
  },
  {
    id: 18,
    question:
      "Which field in the SOA record determines how long a secondary server will wait before checking the primary server for updates?",
    options: ["TTL", "Refresh interval", "Retry interval", "Expire interval"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Refresh interval in the SOA record tells secondary servers how often they should check the primary server to see if the zone has changed.",
  },
  {
    id: 19,
    question: "Which DNS record type is used for Reverse DNS lookups?",
    options: ["A Record", "SOA Record", "PTR Record", "CNAME Record"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Pointer (PTR) records map an IP address back to a hostname. They are heavily used in reverse DNS lookups, such as verifying mail server identities.",
  },
  {
    id: 20,
    question:
      "Which domain is reserved specifically for IPv4 reverse DNS lookups?",
    options: ["in-addr.arpa", "ip6.arpa", "reverse.net", "dns.arpa"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "For IPv4 reverse lookups, the IP address is reversed and appended with the special domain 'in-addr.arpa' (e.g., 1.168.192.in-addr.arpa for 192.168.1.1).",
  },
  {
    id: 21,
    question:
      "Which domain is reserved specifically for IPv6 reverse DNS lookups?",
    options: ["in-addr.arpa", "ip6.arpa", "ipv6-reverse.org", "v6.arpa"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IPv6 reverse lookups use the 'ip6.arpa' domain, expanding the 128-bit address into a sequence of hexadecimal nibbles separated by dots.",
  },
  {
    id: 22,
    question:
      "Which record type allows administrators to add arbitrary text into the DNS, commonly used for verification, SPF, and DKIM?",
    options: ["SRV", "TXT", "ANY", "HINFO"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Text (TXT) records hold machine-readable data, widely used for domain ownership verification and email spam prevention frameworks like SPF and DKIM.",
  },
  {
    id: 23,
    question: "What is an SRV record used for?",
    options: [
      "Defining the physical server's hardware specifications and overall capabilities",
      "Locating specific services on a network, such as SIP or Active Directory domain controllers",
      "Storing the digital certificates that a secure web server will present to clients",
      "Mapping multiple IP addresses to a single host name for load balancing purposes across servers",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Service (SRV) records specify the location (hostname and port number) of servers for specific services, like VoIP (SIP) or Microsoft Active Directory.",
  },
  {
    id: 24,
    question: "What is a wildcard DNS record?",
    options: [
      "A record that resolves to whichever IP address is currently available.",
      "A record using an asterisk (*) to match requests for non-existent subdomains.",
      "A record that randomly rotates between multiple IP addresses per query.",
      "A record that is used exclusively for network testing and debugging purposes.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A wildcard record (e.g., *.example.com) will answer queries for any subdomain that does not have an explicitly defined record.",
  },
  {
    id: 25,
    question: "Which of the following is NOT a valid DNS record type?",
    options: ["PTR", "SOA", "HTTP", "TXT"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "HTTP is a protocol, not a DNS record type. PTR, SOA, and TXT are all valid DNS record types.",
  },

  // --- DNS Hierarchy & Architecture ---
  {
    id: 26,
    question: "What sits at the very top of the DNS hierarchy?",
    options: [
      "Top-Level Domains (TLDs)",
      "The Root Domain",
      "Authoritative Name Servers",
      "Internet Service Providers",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Root domain, represented by a single dot (.), is at the very top of the DNS inverted-tree hierarchy.",
  },
  {
    id: 27,
    question: "How many logical root server clusters exist globally?",
    options: ["10", "13", "25", "512"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "There are 13 logical root server IP addresses (named A through M), though they are distributed across hundreds of physical servers globally using Anycast.",
  },
  {
    id: 28,
    question: "Which organization manages the Root Zone of the DNS?",
    options: ["IEEE", "IETF", "ICANN (via IANA)", "Cisco"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The Internet Corporation for Assigned Names and Numbers (ICANN), specifically through its IANA department, oversees the global DNS root zone.",
  },
  {
    id: 29,
    question:
      "Which of the following is an example of a Top-Level Domain (TLD)?",
    options: ["www", "google", ".com", "http://"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      ".com, .net, .org, and country codes like .uk or .jp are Top-Level Domains (TLDs) located just below the root in the hierarchy.",
  },
  {
    id: 30,
    question: "What is a ccTLD?",
    options: [
      "Corporate-Centric Top Level Domain",
      "Country Code Top Level Domain",
      "Caching Client Top Level Domain",
      "Certified Canonical Top Level Domain",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A ccTLD is a Country Code Top-Level Domain (like .us, .ca, .uk), typically restricted to use by residents or entities of that specific country.",
  },
  {
    id: 31,
    question:
      "In the FQDN 'server1.sales.cisco.com.', what does 'sales' represent?",
    options: [
      "The Top-Level Domain",
      "The Root",
      "A Subdomain",
      "The Hostname",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "'sales' is a subdomain of cisco.com. 'server1' is the specific host within that subdomain.",
  },
  {
    id: 32,
    question: "What does an Authoritative DNS server do?",
    options: [
      "It caches DNS queries on behalf of local network clients.",
      "It holds the actual, official DNS records for a specific domain.",
      "It forwards all of its queries on to the Root servers directly.",
      "It strictly filters out malicious DNS queries before answering.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An Authoritative DNS server holds the original, master records for a zone. When asked about its domain, it provides the definitive answer without querying other servers.",
  },
  {
    id: 33,
    question: "What is a Recursive DNS Server?",
    options: [
      "A server that holds the official records for a domain and answers authoritatively for it.",
      "A server that does the legwork of querying the Root, TLD, and Authoritative servers on behalf of a client.",
      "A server that only answers queries about its own host name and the records that it owns locally.",
      "A server that is used solely for carrying out zone transfers between its peer name servers.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Recursive servers (like those provided by ISPs, or public ones like 8.8.8.8) take a client's request and iteratively query the DNS hierarchy until they find the final answer.",
  },
  {
    id: 34,
    question: "What is the primary benefit of DNS caching?",
    options: [
      "It encrypts the DNS payload of every query and response that is sent out by clients.",
      "It reduces DNS resolution time and decreases network traffic to authoritative servers.",
      "It prevents DNS spoofing automatically without requiring any configuration.",
      "It allows administrators to bypass the DNS registration fees for their domains.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Caching stores recently resolved queries locally. If the same query is made again, the cached answer is used immediately, saving time and bandwidth.",
  },
  {
    id: 35,
    question:
      "What determines how long a recursive server or client will cache a DNS record?",
    options: [
      "The physical distance to the server",
      "The Time To Live (TTL) value set by the authoritative server",
      "The MTU of the network",
      "A hardcoded 24-hour timer in the operating system",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Time To Live (TTL) is a value attached to every DNS record by the domain administrator, telling resolvers how many seconds to cache the record before requesting it again.",
  },
  {
    id: 36,
    question: "What happens when the TTL of a cached DNS record expires?",
    options: [
      "The domain name becomes permanently unreachable for all users across the entire public internet.",
      "The cached record is deleted, and the resolver must perform a fresh query the next time it is requested.",
      "The DNS server automatically shuts down in order to protect the cached data that it is holding.",
      "The resolver automatically extends the TTL of the cached record by an additional 24 hours.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Once the TTL hits zero, the cached entry is considered stale and is discarded. A new query must be sent to the authoritative server to get updated information.",
  },
  {
    id: 37,
    question: "What is 'Negative Caching' in DNS?",
    options: [
      "Caching the names of malicious domains in order to block all access to them for clients on the network.",
      "Caching the fact that a requested domain does NOT exist to prevent repeated queries for non-existent names",
      "Caching records that have a TTL value of zero so that they never expire at all on the server",
      "When a cache becomes corrupted and must be rebuilt from scratch by the resolver process itself",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Negative caching stores NXDOMAIN (Non-Existent Domain) responses. If a client queries a bad name, the resolver remembers it doesn't exist to save resources on future queries.",
  },
  {
    id: 38,
    question: "Which record controls the TTL for negative caching?",
    options: [
      "The A Record's time to live value",
      "The NS Record's time to live value",
      "The Minimum TTL field in the SOA record",
      "The TXT Record's time to live value",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The last field in the SOA record (often called Minimum TTL) defines how long recursive resolvers are allowed to cache negative (NXDOMAIN) responses.",
  },
  {
    id: 39,
    question: "What is a 'Stub Resolver'?",
    options: [
      "A DNS server that only resolves IPv6 address queries on behalf of the network.",
      "The DNS client component built into an operating system (like Windows or Linux).",
      "A failed DNS query that times out and returns an error back to the client.",
      "A physical hardware appliance that is used for DNS filtering on a network.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A stub resolver is the client-side DNS service built into an OS. It cannot perform full iterative queries; it simply forwards requests to a recursive DNS server.",
  },
  {
    id: 40,
    question:
      "When a stub resolver sends a query to a recursive server, what flag does it set to ask the server to do the full lookup?",
    options: [
      "Authoritative Answer (AA)",
      "Recursion Desired (RD)",
      "Truncation (TC)",
      "Response Code (RCODE)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The client sets the Recursion Desired (RD) bit in the DNS header to ask the recursive server to perform the complete name resolution process on its behalf.",
  },

  // --- DNS Resolution Process & Query Types ---
  {
    id: 41,
    question:
      "What is the first place a Windows client checks when attempting to resolve a hostname?",
    options: [
      "The local DNS Cache",
      "The recursive DNS Server",
      "The Root Servers",
      "The local HOSTS file",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Before even checking its local DNS cache or querying a server, the OS checks the local HOSTS file (e.g., C:\\Windows\\System32\\drivers\\etc\\hosts) for a static mapping.",
  },
  {
    id: 42,
    question:
      "In standard DNS resolution, if a recursive server does not have the answer cached, who does it query first?",
    options: [
      "The Authoritative Server",
      "A Root Server",
      "The TLD Server",
      "The ISP's Default Gateway",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "If the cache is empty, the recursive server starts at the top of the tree by querying one of the 13 Root Name Servers.",
  },
  {
    id: 43,
    question:
      "What type of response does a Root server provide to a recursive server querying for 'www.cisco.com'?",
    options: [
      "The IP address of the host www.cisco.com itself",
      "An NXDOMAIN error saying the name doesn't exist",
      "A referral (the IP addresses of the .com TLD servers)",
      "An HTTP 200 OK response from the target web server",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Root servers do not hold the A records for domains. They return a referral—a list of the Authoritative TLD servers responsible for the requested top-level domain (e.g., .com).",
  },
  {
    id: 44,
    question:
      "What type of query occurs when a DNS server responds with the best answer it has (usually a referral) without querying other servers?",
    options: [
      "Recursive Query",
      "Iterative Query",
      "Reverse Query",
      "Dynamic Query",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In an Iterative query, the server provides the best information it currently has. This is how recursive servers interact with Root and TLD servers.",
  },
  {
    id: 45,
    question:
      "Which servers hold the referral information for the authoritative name servers of specific domains like 'cisco.com'?",
    options: [
      "Root Servers",
      "TLD Servers",
      "Recursive Servers",
      "Stub Resolvers",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Top-Level Domain (TLD) servers (like the .com servers) know which authoritative name servers have been assigned to handle specific domains (like cisco.com).",
  },
  {
    id: 46,
    question: "What does an NXDOMAIN response indicate?",
    options: [
      "The DNS server is down.",
      "The queried domain name does not exist.",
      "The query timed out.",
      "The domain exists but has no A record.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "NXDOMAIN (Non-Existent Domain) is an error message indicating that the requested domain name cannot be found in the DNS.",
  },
  {
    id: 47,
    question: "What is Round-Robin DNS?",
    options: [
      "A method of encrypting DNS queries in order to keep them private and secure in transit across the network.",
      "A technique to balance load by returning multiple IP addresses for a single domain in a rotating order.",
      "A protocol that is used for transferring zone files between primary and secondary servers",
      "A loop prevention mechanism that is used inside the DNS hierarchy to stop query cycles from repeating",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Round-Robin DNS distributes traffic across multiple servers by configuring one hostname with multiple A records and rotating the order in which they are returned to clients.",
  },
  {
    id: 48,
    question: "What is a 'Zone Transfer'?",
    options: [
      "Moving a registered domain from one registrar to a completely different registrar company.",
      "The process of replicating the DNS database from a primary server to a secondary server.",
      "Changing the top-level domain (TLD) portion of a registered domain name all on its own.",
      "Forwarding a query from a recursive server on to a root server directly in the hierarchy.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Zone Transfer is the bulk synchronization of DNS records from a Primary DNS server to a Secondary DNS server to ensure redundancy.",
  },
  {
    id: 49,
    question: "What is the difference between AXFR and IXFR?",
    options: [
      "AXFR is used for IPv4 address zones, while IXFR is used for IPv6 address zones.",
      "AXFR transfers the entire zone, IXFR transfers only the changes (incremental).",
      "AXFR uses UDP for its transport, while IXFR uses TCP for its transport instead.",
      "AXFR is always encrypted, while IXFR is always sent in plaintext form.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "AXFR (Full Zone Transfer) copies the entire zone file. IXFR (Incremental Zone Transfer) saves bandwidth by only transferring the records that have changed since the last update.",
  },
  {
    id: 50,
    question:
      "Which record is checked by a secondary server to determine if a zone transfer is needed?",
    options: [
      "The TTL of the A record",
      "The serial number in the SOA record",
      "The MX record priority",
      "The TXT record signature",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The secondary server compares its cached SOA serial number with the primary's SOA serial number. If the primary's number is higher, the secondary requests a zone transfer.",
  },

  // --- Dynamic DNS & Protocol Mechanics ---
  {
    id: 51,
    question: "What is DDNS (Dynamic DNS)?",
    options: [
      "A method to automatically update a name server in real time, often used for hosts whose IP addresses change frequently.",
      "A DNS server that changes its own IP address on a daily basis and updates the registry automatically for it.",
      "A protocol that finds the fastest available DNS server dynamically for each client request that arrives.",
      "A caching technique that is used to speed up repeated queries for the same names on the network itself across all clients.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Dynamic DNS (DDNS) allows a client or DHCP server to automatically update DNS records when an IP address changes, which is crucial for networks using DHCP.",
  },
  {
    id: 52,
    question:
      "What is the typical maximum payload size for a standard UDP DNS packet before it truncates and requires TCP?",
    options: ["128 bytes", "512 bytes", "1500 bytes", "4096 bytes"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Historically, standard DNS over UDP was limited to 512 bytes. If the response is larger, the server sets the Truncation (TC) flag, telling the client to retry using TCP.",
  },
  {
    id: 53,
    question: "What is EDNS (Extension Mechanisms for DNS)?",
    options: [
      "A security protocol that is designed to completely replace the DNSSEC signature system that exists today.",
      "A specification that expands the size of UDP DNS packets and adds features without changing the core protocol.",
      "A Microsoft proprietary DNS protocol that only works on Windows based name servers exclusively in their products.",
      "A method to bypass the DNS filtering that is enforced by the network administrators on the network.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "EDNS0 allows DNS clients and servers to advertise larger UDP packet sizes (often up to 4096 bytes), reducing the need to fall back to TCP for large responses.",
  },
  {
    id: 54,
    question: "What is a DNS Forwarder?",
    options: [
      "A router interface that is used for passing DHCP traffic between the network segments that are involved in the exchange.",
      "A DNS server configured to pass unresolved queries to another specific DNS server rather than querying Root servers.",
      "A switch feature that inspects DNS packets in order to detect and block security threats that pass through it.",
      "A malicious server that redirects users to lookalike phishing websites for credential theft purposes.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A forwarder is a DNS server that sends queries it cannot resolve locally to another designated server (like an ISP's DNS or Google DNS) instead of performing the full recursive lookup itself.",
  },
  {
    id: 55,
    question: "What is 'Split-Horizon' or 'Split-Brain' DNS?",
    options: [
      "A network split caused by a routing failure that isolates parts of the infrastructure from each other until it is resolved manually by an engineer.",
      "Configuring a DNS server to return different IP addresses for the same name depending on whether the query comes from the internal network or the external internet.",
      "Using two different DNS registrars for redundancy to guard against a single point of failure in the registration of the domain in question.",
      "Load balancing across multiple top-level domains so that queries are spread evenly between them for improved performance reasons overall for everyone.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Split-horizon DNS provides different answers based on the client's source IP. Internal users might get a private IP (10.0.0.5), while external users get a public IP (203.0.113.5) for the same domain name.",
  },
  {
    id: 56,
    question:
      "Which part of a DNS packet contains the query string (e.g., the hostname being looked up)?",
    options: [
      "Header",
      "Question Section",
      "Answer Section",
      "Additional Section",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Question Section contains the domain name being queried, the query type (e.g., A, MX), and the query class (usually IN for Internet).",
  },
  {
    id: 57,
    question: "What does the 'IN' class stand for in a DNS record?",
    options: ["Internal Network", "Internet", "Intranet", "Information Node"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In modern DNS, almost all records belong to the 'IN' (Internet) class. Historical classes like CH (Chaos) or HS (Hesiod) are rarely used today.",
  },
  {
    id: 58,
    question:
      "How does a client know that an incoming DNS response matches its outgoing query?",
    options: [
      "It uses the source IP address of the packet to match the response.",
      "The DNS header contains a 16-bit Transaction ID that must match.",
      "It relies on the TCP sequence number to match the response.",
      "It checks the MAC address of the device that sent the response.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The client generates a random 16-bit Transaction ID in the query header. The server copies this exact ID into the response, allowing the client to match them up.",
  },
  {
    id: 59,
    question:
      "If a DNS server responds but is NOT the master or slave for a zone, what flag is MISSING in its response?",
    options: [
      "Recursion Available (RA)",
      "Authoritative Answer (AA)",
      "Truncation (TC)",
      "Response Code (RCODE)",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The Authoritative Answer (AA) bit is set ONLY when the responding server is explicitly authoritative (primary or secondary) for the queried domain. Caches and forwarders do not set this bit.",
  },
  {
    id: 60,
    question: "What is a 'glue record'?",
    options: [
      "A record that combines IPv4 and IPv6 addresses into a single resource record entry for a host name on the zone file being served.",
      "An A or AAAA record provided by the parent zone to resolve the IP address of an authoritative name server, preventing circular dependency loops.",
      "A CNAME that points to another CNAME which in turn points to a third alias name in the zone of the same domain, creating a chain.",
      "A record that is used to attach digital signatures to the zone data for verification purposes by validating resolvers on the internet.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If a domain's name server is a subdomain of itself (e.g., ns1.example.com for example.com), a glue record (the IP of ns1) is required at the TLD level so resolvers can actually reach it.",
  },

  // --- Cisco IOS DNS Configuration ---
  {
    id: 61,
    question:
      "Which Cisco IOS global configuration command configures the router to use a specific DNS server?",
    options: [
      "dns-server 8.8.8.8",
      "ip name-server 8.8.8.8",
      "name-server 8.8.8.8",
      "ip dns server 8.8.8.8",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'ip name-server [ip-address]' command instructs the Cisco router to use that IP address for its own DNS queries.",
  },
  {
    id: 62,
    question:
      "What is the function of the 'ip domain-lookup' command on a Cisco router?",
    options: [
      "It enables the router to act as a DNS server for clients.",
      "It enables the router to resolve hostnames to IP addresses using DNS.",
      "It allows the router to dynamically register its hostname.",
      "It prevents DNS spoofing.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, 'ip domain-lookup' is enabled, allowing the router to translate names (like when you type 'ping cisco.com') into IP addresses.",
  },
  {
    id: 63,
    question:
      "Why do network administrators often issue the 'no ip domain-lookup' command on lab routers?",
    options: [
      "To save memory on the router so that it can store more routing table entries and process faster.",
      "To prevent the router from pausing to attempt a DNS broadcast lookup every time a typo is entered in the CLI.",
      "To secure the router from internet-based attacks by hiding its DNS presence from the outsiders entirely on the network.",
      "To speed up the routing protocol convergence times by avoiding DNS lookups entirely for them at all times.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If you mistype a command (e.g., 'enabel'), the router assumes it's a hostname and tries to resolve it, locking up the console for several seconds. Disabling domain lookup prevents this.",
  },
  {
    id: 64,
    question:
      "Which command assigns a default domain suffix that the Cisco router will append to unqualified hostnames?",
    options: [
      "ip domain-name example.com",
      "domain-suffix example.com",
      "ip dns suffix example.com",
      "name-server example.com",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'ip domain-name [domain]' command defines the default domain. If you 'ping server1', the router will automatically append the domain to query 'server1.example.com'.",
  },
  {
    id: 65,
    question: "How do you create a static local DNS entry on a Cisco router?",
    options: [
      "dns static host1 10.1.1.5",
      "ip host host1 10.1.1.5",
      "host host1 10.1.1.5",
      "ip static-dns host1 10.1.1.5",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ip host [name] [ip-address]' command creates a local host table entry, similar to the Windows HOSTS file, bypassing external DNS servers.",
  },
  {
    id: 66,
    question:
      "Which command enables a Cisco IOS router to act as a caching DNS server for local network clients?",
    options: [
      "ip dns server",
      "service dns",
      "ip domain-lookup",
      "dns server enable",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The 'ip dns server' global configuration command allows the router to accept DNS queries from clients, resolving them using its own name-servers and caching the responses.",
  },
  {
    id: 67,
    question: "How can you view the cached DNS entries on a Cisco router?",
    options: [
      "show ip dns cache",
      "show ip hosts",
      "show dns bindings",
      "show ip name-server",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'show ip hosts' command displays the router's statically configured hosts as well as dynamically learned (cached) DNS entries.",
  },
  {
    id: 68,
    question:
      "Which command clears the dynamically learned DNS cache on a Cisco router?",
    options: [
      "clear ip dns cache",
      "flush dns",
      "clear host all",
      "clear ip hosts *",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'clear host all' (or 'clear host *') command removes all dynamically cached hostname-to-address mappings.",
  },
  {
    id: 69,
    question:
      "When setting up SSH on a Cisco router, what MUST be configured before generating RSA crypto keys?",
    options: [
      "A DNS server IP",
      "ip domain-lookup must be disabled",
      "A hostname and an ip domain-name",
      "A static host entry",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The router uses the combination of its 'hostname' and 'ip domain-name' to generate the Fully Qualified Domain Name (FQDN) required to create the RSA cryptographic keys for SSH.",
  },
  {
    id: 70,
    question:
      "What is the maximum number of DNS servers you can configure using 'ip name-server' on a typical Cisco router?",
    options: ["2", "4", "6", "Unlimited"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Cisco IOS traditionally allows up to 6 IP addresses to be specified in the 'ip name-server' command. It will try them sequentially if the primary fails.",
  },

  // --- Troubleshooting & Tools ---
  {
    id: 71,
    question:
      "Which command line tool is natively available on Windows, Linux, and macOS to query DNS servers directly?",
    options: ["ping", "tracert", "nslookup", "netstat"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'nslookup' is a standard network administration command-line tool used for querying the Domain Name System to obtain domain name or IP address mapping.",
  },
  {
    id: 72,
    question: "What does the 'dig' command do?",
    options: [
      "Deletes DNS records directly from the zone files of the authoritative name server it connects to.",
      "Performs a deep packet inspection of DNS traffic in order to find malicious queries and responses.",
      "It is a flexible command-line tool for interrogating DNS name servers, popular on Linux/Unix systems.",
      "It scans the network for open DNS ports that could potentially be attacked by outside intruders on the network.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Domain Information Groper (dig) is a powerful tool for performing detailed DNS lookups and troubleshooting, providing more comprehensive output than nslookup.",
  },
  {
    id: 73,
    question:
      "In the Windows Command Prompt, how do you view the local DNS resolver cache?",
    options: [
      "ipconfig /showdns",
      "ipconfig /displaydns",
      "nslookup -cache",
      "netsh dns show",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'ipconfig /displaydns' outputs the contents of the local Windows DNS resolver cache, including records learned from previous queries and the HOSTS file.",
  },
  {
    id: 74,
    question: "How do you clear the local DNS cache on a Windows machine?",
    options: [
      "ipconfig /cleardns",
      "nslookup /flush",
      "ipconfig /flushdns",
      "net stop dns",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'ipconfig /flushdns' deletes all dynamic entries in the local DNS cache, forcing the PC to perform fresh queries for any new connections.",
  },
  {
    id: 75,
    question:
      "How do you change the DNS record type you are querying (e.g., to query MX records) within the interactive mode of 'nslookup'?",
    options: ["type=MX", "set type=mx", "query mx", "mx mode"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Inside nslookup interactive mode, entering 'set type=mx' (or set q=mx) tells the tool to request Mail Exchanger records instead of the default A records.",
  },
  {
    id: 76,
    question: "In 'nslookup', what does a 'Non-authoritative answer' mean?",
    options: [
      "The response is fake and was injected by an attacker into the resolver's cache somewhere along the path.",
      "The response came from a cache or recursive server, not the primary/secondary server holding the master zone.",
      "The DNSSEC signature is invalid and the record must be rejected by the validating resolver of the client.",
      "The requested domain does not exist and has never been registered with any registrar at all on the internet ever.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A non-authoritative answer simply means the response was provided by a server that caches the data (like Google DNS or an ISP), rather than the official domain owner's name server.",
  },
  {
    id: 77,
    question:
      "If 'ping cisco.com' fails with 'Ping request could not find host cisco.com', but 'ping 72.163.4.161' succeeds, what is the most likely issue?",
    options: [
      "The default gateway is misconfigured.",
      "The firewall is blocking ICMP.",
      "There is a DNS resolution failure.",
      "The MAC address is incorrect.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Reachability to an IP address proves Layer 3 connectivity. The inability to reach it by name indicates the PC cannot resolve the hostname to that IP via DNS.",
  },
  {
    id: 78,
    question:
      "What is the equivalent tool to 'ipconfig /flushdns' on a modern macOS system?",
    options: [
      "dscacheutil -flushcache, which flushes the DNS cache directly",
      "ifconfig en0 flush, which resets the interface DNS state",
      "killall -HUP mDNSResponder, which restarts the DNS daemon",
      "Both A and C are commonly used depending on the macOS version.",
    ],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "On macOS, the local DNS cache is handled by the mDNSResponder service. Administrators typically use 'sudo killall -HUP mDNSResponder' or 'dscacheutil -flushcache' to clear it.",
  },
  {
    id: 79,
    question:
      "Using 'dig', how can you specify a specific DNS server (e.g., 8.8.8.8) to query instead of your default local resolver?",
    options: [
      "dig @8.8.8.8 example.com",
      "dig example.com server 8.8.8.8",
      "dig -s 8.8.8.8 example.com",
      "dig 8.8.8.8 example.com",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "In 'dig', you prefix the target DNS server's IP address with an '@' symbol (e.g., dig @8.8.8.8 cisco.com).",
  },
  {
    id: 80,
    question: "When troubleshooting, what does 'dig +trace example.com' do?",
    options: [
      "It traces the physical router hops that lead to the DNS server along the path taken by the packets being sent to it for the query.",
      "It bypasses the local recursive server and iteratively queries the Root, TLD, and Authoritative servers itself, showing the whole chain.",
      "It logs all of the DNS traffic locally on the machine for later analysis by the administrator on duty and saves the results.",
      "It encrypts the query so that no one can see the name being looked up along the way to the server that answers it at all during the entire lookup process.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The '+trace' flag forces your local machine to act as a recursive resolver, showing exactly which Root, TLD, and Authoritative servers were contacted to resolve the name.",
  },

  // --- DNS Security & Advanced Protocols ---
  {
    id: 81,
    question: "What is DNS Spoofing (or Cache Poisoning)?",
    options: [
      "Overloading a DNS server with massive amounts of traffic to cause a Denial of Service.",
      "Injecting forged DNS data into a resolver's cache so it directs users to a malicious IP address.",
      "Stealing a domain name registration away from the rightful owner of the domain entirely at the registrar.",
      "Decrypting secure DNS traffic in order to read the queries in plaintext form on the wire during transit.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Cache poisoning tricks a DNS resolver into caching a fake IP address for a legitimate domain name, stealthily redirecting users to an attacker-controlled server.",
  },
  {
    id: 82,
    question:
      "Which protocol was designed to protect against DNS Spoofing by adding cryptographic signatures to DNS records?",
    options: ["DNSCrypt", "DNSSEC", "DoH", "TLS"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DNSSEC (DNS Security Extensions) signs DNS records cryptographically, allowing resolvers to verify that the data received actually came from the domain owner and wasn't altered in transit.",
  },
  {
    id: 83,
    question: "Does DNSSEC encrypt the DNS queries and responses?",
    options: [
      "Yes, using AES-256 encryption for both the queries and responses.",
      "Yes, using SSL to encrypt all of the queries and the responses that are sent.",
      "No, it only provides authentication and data integrity, not confidentiality.",
      "No, it only encrypts the query but never encrypts the response.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "DNSSEC signatures guarantee that the records are authentic and untampered, but the DNS packets themselves are still transmitted in plaintext over the network.",
  },
  {
    id: 84,
    question: "What does DoH stand for in modern DNS security?",
    options: [
      "DNS over HTTP",
      "DNS over HTTPS",
      "Domain Origin Hashing",
      "Dynamic Object Hosting",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DNS over HTTPS (DoH) encrypts DNS queries by wrapping them in HTTPS traffic to protect user privacy and prevent eavesdropping.",
  },
  {
    id: 85,
    question: "Which TCP port is used by DNS over HTTPS (DoH)?",
    options: ["Port 53", "Port 443", "Port 853", "Port 80"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DoH blends in with regular secure web traffic by using TCP port 443 (HTTPS).",
  },
  {
    id: 86,
    question: "What is DoT?",
    options: [
      "DNS over TCP",
      "DNS over TLS",
      "Domain over Time",
      "Data over Transport",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "DNS over TLS (DoT) is another standard for encrypting DNS traffic, securing the payload directly over the Transport Layer Security protocol.",
  },
  {
    id: 87,
    question: "Which dedicated port is used by DNS over TLS (DoT)?",
    options: ["Port 53", "Port 443", "Port 853", "Port 22"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Unlike DoH which shares port 443, DoT uses a dedicated TCP port: 853.",
  },
  {
    id: 88,
    question: "What is a DNS Sinkhole?",
    options: [
      "A server configured to hand out false IP addresses for known malicious domains to prevent users from connecting to them.",
      "A failed DNS query that times out and produces an error message for the user who sent it out to the network in the first place.",
      "A router dropping all of the DNS packets that pass through its interfaces on the network without logging the drops.",
      "A database of expired domains that are available to be re-registered by anyone who wants them for use on the market.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "A DNS Sinkhole intercepts queries to known malware/botnet domains and returns a safe, unroutable, or internal IP address, effectively blocking the malware connection.",
  },
  {
    id: 89,
    question: "How does a DNS Amplification attack work?",
    options: [
      "By guessing the password of the domain registrar account and taking over the domain completely from the owner of it.",
      "By sending a small spoofed query to an open resolver, which sends a massive response to the victim's IP, causing a DDoS.",
      "By corrupting the root name servers so that all lookups return bad data for everyone on the internet at large instead of real answers.",
      "By modifying the local HOSTS file on millions of PCs to redirect their traffic elsewhere on the network automatically.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In an amplification attack, the attacker spoofs the victim's IP and queries an open DNS server for a large record (like ANY or DNSSEC keys). The server sends the large payload to the victim, overwhelming their bandwidth.",
  },
  {
    id: 90,
    question:
      "To prevent your DNS server from being used in an Amplification DDoS attack, what should you do?",
    options: [
      "Use only IPv6 addressing for the entire network infrastructure being deployed.",
      "Disable TCP Port 53 on all of the network firewalls completely at the edge.",
      "Disable Open Recursion (restrict recursive queries to trusted internal clients only).",
      "Set all TTL values to zero so that nothing is ever cached by anyone at all.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By disabling open recursion, your DNS server will only perform iterative queries for the outside world (answering only for your authoritative domains) and will ignore recursive requests from untrusted external IPs.",
  },

  // --- Miscellaneous & Edge Cases ---
  {
    id: 91,
    question: "What is DNS rebinding?",
    options: [
      "Changing the authoritative server for a domain to a different hosting provider entirely without notice to the owner of it in advance.",
      "An attack where a malicious script bypasses the Same-Origin Policy by dynamically changing the IP address of its domain to a local/private IP.",
      "Combining two DNS zones into one single zone for easier management of the records within them both at once for the admins involved.",
      "Updating a DHCP lease so that the client gets a new address from the pool again on renewal of the lease at that time of day.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "DNS rebinding is an attack technique. An attacker tricks the victim's browser into running a script, then quickly changes the DNS record of the script's domain to point to an internal device (like a router), allowing the script to attack the local network.",
  },
  {
    id: 92,
    question:
      "If a company changes the IP address of its web server, how long does it take for all users globally to see the new IP address?",
    options: [
      "Immediately, with no delay whatsoever for anyone at all on the internet.",
      "Exactly 24 hours after the change is made to the authoritative zone file.",
      "It depends on the TTL of the previous A record cached by ISPs and clients.",
      "Until the ICANN database updates the WHOIS information for the domain.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Because recursive servers and client OSes cache DNS records, they will not query for the new IP until the Time-To-Live (TTL) of the old cached record expires.",
  },
  {
    id: 93,
    question: "What is an IDN (Internationalized Domain Name)?",
    options: [
      "A domain that is hosted on servers outside the United States entirely somewhere else in the world.",
      "A domain name containing characters from non-Latin scripts (e.g., Arabic, Chinese, Cyrillic).",
      "A domain that resolves to a server that is located in any country at all in the world.",
      "A domain that is used by the United Nations organization for its own official web sites.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IDNs allow domain names in local languages and scripts. They are encoded into ASCII using 'Punycode' for compatibility with the legacy DNS system.",
  },
  {
    id: 94,
    question:
      "In Punycode, what prefix is attached to an Internationalized Domain Name (IDN) to let the DNS system know it is an encoded string?",
    options: ["idn--", "xn--", "utf--", "uni--"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Punycode translates Unicode strings into an ASCII-compatible format starting with 'xn--' (e.g., 'münchen' becomes 'xn--mnchen-3ya').",
  },
  {
    id: 95,
    question:
      "Which public DNS service is represented by the IP address 1.1.1.1?",
    options: ["Google Public DNS", "OpenDNS", "Cloudflare", "Quad9"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "1.1.1.1 is the primary IPv4 address for Cloudflare's public, privacy-focused DNS resolver.",
  },
  {
    id: 96,
    question:
      "Which public DNS service is represented by the IP address 8.8.8.8?",
    options: ["Google Public DNS", "OpenDNS", "Cloudflare", "Quad9"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "8.8.8.8 and 8.8.4.4 are the highly popular public recursive DNS servers provided by Google.",
  },
  {
    id: 97,
    question: "What is mDNS?",
    options: ["Mobile DNS", "Multicast DNS", "Managed DNS", "Master DNS"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Multicast DNS (mDNS) resolves hostnames to IP addresses within small networks that do not include a local name server, operating on UDP port 5353 (used heavily by Apple's Bonjour).",
  },
  {
    id: 98,
    question:
      "Which pseudo-TLD is explicitly reserved by IETF for testing purposes so it will never conflict with a real domain on the Internet?",
    options: [".local", ".test", ".lan", ".corp"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "RFC 2606 reserves several domains for testing and documentation, including .test, .example, .invalid, and .localhost.",
  },
  {
    id: 99,
    question:
      "What issue can arise if you use '.local' for an Active Directory internal domain name?",
    options: [
      "It requires a special ICANN license in order to be used at all on the network.",
      "It conflicts with the mDNS protocol used by Apple Bonjour and Linux Avahi.",
      "It cannot be routed by Cisco routers because of the reserved suffix being used.",
      "It restricts the network to 254 hosts because of the addressing scheme.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The .local TLD is officially designated for link-local Multicast DNS (mDNS). Using it for a standard unicast internal DNS zone (like Active Directory) can cause severe resolution delays and failures for Apple and Linux clients.",
  },
  {
    id: 100,
    question:
      "What is the function of the DNS Resource Record (RR) 'CNAME' when pointing a root domain (e.g., example.com without the www) to another domain?",
    options: [
      "It functions perfectly normally like any other alias record would.",
      "It is illegal by RFC standards to put a CNAME at the root (zone apex).",
      "It speeds up zone transfers between the primary and secondary servers.",
      "It provides automatic load balancing for the root domain traffic itself.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "According to DNS RFCs, a CNAME cannot coexist with any other records at the same node. Because the root apex of a zone MUST contain SOA and NS records, placing a CNAME at the apex is a protocol violation (though some modern providers offer 'ALIAS' or 'ANAME' flattening features to bypass this).",
  },
];
