import type { QuizQuestion } from "./types";

export const ntpQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the purpose of NTP in a network?",
    options: [
      "To synchronize the clocks of network devices to a common time reference",
      "To transfer configuration files securely between network devices",
      "To monitor and analyze network traffic patterns in real-time",
      "To authenticate users before allowing them access to network devices",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "NTP (Network Time Protocol) synchronizes device clocks across a network to ensure accurate timestamps for logging, debugging, and security features.",
  },
  {
    id: 2,
    question: "Which Transport Layer protocol and port number does NTP use?",
    options: ["TCP port 123", "UDP port 123", "TCP port 161", "UDP port 69"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "NTP operates over UDP using port 123 to send and receive time synchronization updates.",
  },
  {
    id: 3,
    question:
      "What term describes the hierarchical distance of a device from the authoritative time source in NTP?",
    options: ["Hop count", "Metric", "Stratum", "Priority"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "NTP uses a hierarchical system called Stratum levels to indicate the distance from the authoritative reference clock.",
  },
  {
    id: 4,
    question:
      "What is the highest valid stratum level before an NTP clock is considered unsynchronized or unreachable?",
    options: ["15", "16", "255", "0"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Stratum levels range from 1 to 15. A stratum level of 16 indicates that a device is unsynchronized and its time is not reliable.",
  },
  {
    id: 5,
    question:
      "Which command configures a Cisco router to act as an authoritative NTP server using its own internal clock?",
    options: [
      "ntp server enable",
      "ntp master",
      "ntp primary",
      "clock timezone",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ntp master [stratum]' command allows a router to act as an NTP server using its local software clock as the time source.",
  },
  {
    id: 6,
    question:
      "Which command provides a quick summary of whether the router's clock is synchronized and displays its current stratum level?",
    options: [
      "show ntp associations",
      "show ntp status",
      "show clock detail",
      "show ntp info",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show ntp status' command indicates if the clock is synchronized, the stratum level, and the reference IP address of the time source.",
  },
  {
    id: 7,
    question:
      "In the output of 'show ntp associations', what does an asterisk (*) symbol next to an IP address indicate?",
    options: [
      "The server is unreachable",
      "The router is currently synchronized to this peer",
      "The peer is configured with a higher stratum level",
      "NTP authentication failed for this peer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The asterisk (*) denotes the system peer, meaning it is the time source to which the router is currently synchronized.",
  },
  {
    id: 8,
    question:
      "What is the default stratum level assigned to a Cisco router when the 'ntp master' command is used without specifying a number?",
    options: ["1", "5", "8", "15"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "If no stratum number is specified, the 'ntp master' command defaults to stratum 8 on Cisco IOS devices.",
  },
  {
    id: 9,
    question:
      "Which command forces the router to periodically update its hardware calendar (NVRAM clock) with the time learned from NTP?",
    options: [
      "ntp hardware-sync",
      "clock update-calendar",
      "ntp update-calendar",
      "clock read-calendar",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'ntp update-calendar' command ensures that the router's hardware clock is regularly updated to match the software clock synchronized via NTP.",
  },
  {
    id: 10,
    question:
      "Why is it considered a best practice to configure 'ntp source loopback 0' on a router?",
    options: [
      "To prevent unauthorized devices from querying the router",
      "To ensure NTP packets are sent from a stable, always-up IP address",
      "To force the router to act as a Stratum 1 server",
      "To encrypt NTP traffic using the loopback key",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Loopback interfaces never go down unless manually shut down. Using it as the source interface ensures reliable and consistent NTP associations even if a physical interface fails.",
  },
  {
    id: 11,
    question:
      "What cryptographic algorithm is utilized for standard NTP authentication on Cisco IOS routers?",
    options: ["SHA-256", "RSA", "AES", "MD5"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Standard NTP authentication uses MD5 hashing to secure time updates between clients and servers.",
  },
  {
    id: 12,
    question: "What does a stratum level of 0 represent in the NTP hierarchy?",
    options: [
      "An unsynchronized clock that cannot provide reliable time",
      "A standard core network router with a calibrated hardware clock",
      "An authoritative reference clock, such as an atomic clock or GPS",
      "A client device that synchronizes from an upstream time server",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Stratum 0 devices are high-precision timekeeping devices like GPS receivers or atomic clocks. They cannot be connected to over the network; they provide time directly to Stratum 1 servers.",
  },
  {
    id: 13,
    question:
      "Which of the following commands is NOT part of configuring NTP authentication on a Cisco router?",
    options: [
      "ntp authenticate",
      "ntp authentication-key",
      "ntp trusted-key",
      "ntp secure-mode",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The command 'ntp secure-mode' does not exist. NTP authentication requires 'ntp authenticate', defining the key with 'ntp authentication-key', and trusting it with 'ntp trusted-key'.",
  },
  {
    id: 14,
    question:
      "How does symmetric active mode ('ntp peer') differ from client/server mode ('ntp server')?",
    options: [
      "It requires strict IPsec encryption for all symmetric mode traffic",
      "Both devices can synchronize to each other depending on who has the better stratum",
      "It only works on IPv6 networks with multicast enabled globally",
      "It restricts time updates to a single broadcast domain on the local segment",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In symmetric active mode, configured with 'ntp peer', two devices monitor each other and the one with the higher (worse) stratum will synchronize to the one with the lower (better) stratum.",
  },
  {
    id: 15,
    question:
      "If an NTP client receives time updates from a Stratum 2 server and a Stratum 4 server simultaneously, what happens?",
    options: [
      "It synchronizes with both and averages the time",
      "It synchronizes with the Stratum 4 server",
      "It synchronizes with the Stratum 2 server",
      "It rejects both due to a conflict",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "NTP will prefer the time source with the lowest stratum number, as it is closer to the authoritative reference clock (Stratum 0).",
  },
  {
    id: 16,
    question:
      "In the output of 'show ntp associations', what does a plus sign (+) indicate?",
    options: [
      "The peer is currently synchronizing the router with its time updates",
      "The peer is unreachable and will be removed after several poll failures",
      "The peer is an excellent candidate for synchronization, but is not the current active peer",
      "The peer has a misconfigured authentication key that causes packets to be dropped",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The plus sign (+) denotes a candidate peer that has passed all validation checks and can be used as a backup if the current system peer (*) fails.",
  },
  {
    id: 17,
    question:
      "What does the 'reach' field represent in the 'show ntp associations' output?",
    options: [
      "The hop count to the server measured across all of the intermediate routers in the path",
      "An octal shift register indicating the success or failure of the last 8 NTP polling attempts",
      "The IP address of the reference clock that the peer is currently synchronized to upstream",
      "The calculated network delay in milliseconds between the local client and the remote peer",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'reach' field is an 8-bit shift register displayed in octal format (up to 377). It tracks the success of the most recent polling intervals; 377 means the last 8 polls were successful.",
  },
  {
    id: 18,
    question:
      "Which feature can be used to restrict which devices are allowed to query a Cisco router for time?",
    options: [
      "ntp access-group",
      "ntp restrict",
      "ip access-list standard",
      "ntp passive-interface",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'ntp access-group' command applies standard access control lists (ACLs) to control which peers or clients can interact with the router's NTP process.",
  },
  {
    id: 19,
    question:
      "A router is configured with 'ntp master 4'. When a client successfully synchronizes with this router, what stratum level will the client report?",
    options: ["Stratum 3", "Stratum 4", "Stratum 5", "Stratum 16"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A client synchronizing to a time server always adds 1 to the stratum level of its parent. If the server is stratum 4, the client becomes stratum 5.",
  },
  {
    id: 20,
    question:
      "Why is accurate NTP timekeeping considered critical for Public Key Infrastructure (PKI) and digital certificates?",
    options: [
      "Because certificates embed time-based data in their signatures, so incorrect clocks invalidate the trust chain for all verifying clients",
      "Because certificates have strict validity periods, and incorrect time causes premature expiration or rejection of valid certificates",
      "Because NTP servers are the designated authorities that issue and sign all digital certificates for the enterprise",
      "Because PKI depends on UDP port 123 to transport certificate revocation lists securely between all the servers",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Digital certificates have 'Valid From' and 'Valid To' dates. If a device's clock is significantly wrong, it will evaluate valid certificates as expired or not yet valid, breaking VPNs, HTTPS, and 802.1X.",
  },
  {
    id: 21,
    question: "What is SNTP?",
    options: [
      "Secure Network Time Protocol, an encrypted version of NTP that adds IPsec tunnels around every single time packet",
      "Simple Network Time Protocol, a version that provides time without the complex internal algorithms needed to maintain high accuracy",
      "Standard Network Time Protocol, the legacy version used only on IPv4 networks without any authentication options available",
      "Synchronous Network Time Protocol, used over serial links to synchronize the hardware clock of remote branch routers",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SNTP uses the same packet format as NTP but lacks the complex mathematical algorithms used to maintain high precision, making it lighter on device resources.",
  },
  {
    id: 22,
    question:
      "If the output of 'show ntp status' states that the clock is unsynchronized, what stratum level is typically displayed?",
    options: ["0", "1", "15", "16"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "A stratum of 16 indicates that the device has no valid time source and is unsynchronized.",
  },
  {
    id: 23,
    question:
      "Which command configures a specific time zone on a Cisco router, which is crucial for interpreting NTP timestamps locally?",
    options: [
      "ntp timezone",
      "clock timezone",
      "set timezone",
      "time-format offset",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "While NTP runs strictly in UTC (Coordinated Universal Time), the 'clock timezone [name] [offset]' command is required for the router to display time in the local timezone.",
  },
  {
    id: 24,
    question: "In the context of NTP, what does 'dispersion' refer to?",
    options: [
      "The amount of time the network clock is offset from the hardware clock",
      "The estimated maximum error of the local clock relative to the reference clock",
      "The physical distance between the client and the server",
      "The algorithm used to encrypt NTP packets",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Dispersion represents the maximum error/variance in timekeeping between the local device and the NTP reference clock, factoring in network delay and clock drift.",
  },
  {
    id: 25,
    question:
      "What is the primary operational difference between NTPv3 and NTPv4?",
    options: [
      "NTPv4 uses TCP instead of UDP",
      "NTPv4 includes native support for IPv6",
      "NTPv3 supports Stratum 0, while NTPv4 does not",
      "NTPv3 encrypts all traffic by default, while NTPv4 requires manual keying",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "One of the most significant enhancements in NTP version 4 is native support for IPv6, along with improved security and clock resolution algorithms.",
  },
  {
    id: 26,
    question: "Which of the following describes the NTP 'offset' value?",
    options: [
      "The round-trip delay to the NTP server in both directions",
      "The time difference between the local clock and the server's clock",
      "The stratum level of the upstream server currently in use",
      "The maximum error margin of the time source over the last hour",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Offset is the calculated time difference (usually in milliseconds) between the client's local software clock and the NTP server's clock.",
  },
  {
    id: 27,
    question:
      "What does an NTP reference ID of '127.127.1.1' signify in the 'show ntp status' output?",
    options: [
      "The router is synchronized to an external loopback address on the upstream provider",
      "The router is using its own local hardware clock as the authoritative time source",
      "The NTP server is unreachable due to a routing failure in the network",
      "The router is synchronized to a Stratum 0 atomic clock over the wide area network",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The pseudo-IP address 127.127.1.1 is used as the reference ID when a Cisco device is configured as an NTP master using its own local clock.",
  },
  {
    id: 28,
    question:
      "Which NTP access-group parameter allows a remote device to query for time, but denies it from synchronizing the local router or sending control queries?",
    options: ["peer", "serve", "serve-only", "query-only"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'serve-only' access-group allows the router to provide time to clients matching the ACL, but rejects any attempts by those clients to peer with or synchronize the router.",
  },
  {
    id: 29,
    question:
      "Which NTP access-group parameter provides the most unrestricted access, allowing time requests, control queries, and synchronization?",
    options: ["serve-only", "query-only", "peer", "serve"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'peer' access-group permits full NTP access, allowing the router to both serve time to and synchronize its own clock with the remote devices permitted by the ACL.",
  },
  {
    id: 30,
    question:
      "What is the primary risk of allowing unrestricted NTP control queries on a perimeter router?",
    options: [
      "It allows external attackers to change the router's timezone",
      "It exposes the router to NTP amplification DDoS attacks (e.g., via monlist)",
      "It forces the router to become a Stratum 16 device",
      "It disables MD5 authentication",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Unrestricted NTP access, specifically control queries, can be exploited for NTP amplification attacks where forged small requests generate massive responses directed at a victim.",
  },
  {
    id: 31,
    question:
      "If a Cisco router has two NTP servers configured—Server A (Stratum 3, delay 50ms) and Server B (Stratum 3, delay 10ms)—which server will it prefer?",
    options: [
      "Server A",
      "Server B",
      "It will load balance between both",
      "It will drop both connections due to a stratum tie",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When stratum levels are tied, NTP relies on other metrics like root delay and root dispersion to choose the best time source. The server with the lower delay (Server B) will be preferred.",
  },
  {
    id: 32,
    question:
      "What command enables an interface to send NTP broadcast packets to the local subnet?",
    options: [
      "ntp broadcast client",
      "ntp broadcast",
      "ip ntp broadcast",
      "ntp server broadcast",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The interface-level command 'ntp broadcast' configures the router to periodically send NTP broadcast messages out that specific interface.",
  },
  {
    id: 33,
    question:
      "When configuring 'ntp broadcast client' on an interface, what is a primary security concern?",
    options: [
      "The client will automatically upgrade to a Stratum 1 server and serve time to the subnet",
      "Any device on the subnet can broadcast rogue time updates unless NTP authentication is used",
      "It disables the hardware calendar on the interface for the entire chassis",
      "It requires a direct connection to an atomic clock on the management plane of the device",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Broadcast mode is inherently insecure because a client will listen to any time broadcasts on the segment. NTP authentication is highly recommended to verify the source.",
  },
  {
    id: 34,
    question: "Which IPv6 command is used to configure an NTP server?",
    options: [
      "ntp server-ipv6 [ipv6-address]",
      "ntp server [ipv6-address]",
      "ipv6 ntp server [ipv6-address]",
      "ntp peer [ipv6-address] v6",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Cisco IOS uses the exact same 'ntp server' command for both IPv4 and IPv6 addresses.",
  },
  {
    id: 35,
    question: "What is the function of the 'ntp max-associations' command?",
    options: [
      "It limits the number of hops an NTP packet can travel through the routing domain",
      "It restricts the number of time zones the router can track for logging purposes",
      "It sets a hard limit on the number of peers/clients the router will synchronize with or serve",
      "It defines the maximum allowable stratum level that the router will advertise to peers",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'ntp max-associations' command limits the number of concurrent NTP associations, which helps protect the router's CPU and memory from being exhausted by too many NTP connections.",
  },
  {
    id: 36,
    question:
      "In standard NTP operation, what is the default polling interval range?",
    options: [
      "1 to 5 seconds",
      "16 to 32 seconds",
      "64 to 1024 seconds",
      "3600 to 7200 seconds",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By default, NTP polling dynamically scales from 64 seconds (2^6) up to 1024 seconds (2^10) depending on the stability of the network and the clock.",
  },
  {
    id: 37,
    question:
      "Which command manually overrides the default minimum polling interval for a specific NTP server?",
    options: [
      "ntp server [ip] poll [seconds]",
      "ntp server [ip] minpoll [power of 2]",
      "ntp poll-interval [seconds]",
      "ntp server [ip] frequency [seconds]",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'minpoll' and 'maxpoll' keywords appended to the 'ntp server' command allow you to set the intervals, expressed as a power of 2 (e.g., minpoll 4 = 16 seconds).",
  },
  {
    id: 38,
    question:
      "If a router's hardware clock (calendar) is accurate, but the software clock resets after a reboot, what command was missing?",
    options: [
      "ntp hardware-sync",
      "ntp update-calendar",
      "clock read-calendar",
      "clock write-memory",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'ntp update-calendar' command tells the router to periodically save the NTP-synchronized software time to the battery-backed hardware calendar.",
  },
  {
    id: 39,
    question:
      "What does the 'delay' field represent in the 'show ntp associations' output?",
    options: [
      "The amount of time the server delays responding to a client",
      "The calculated round-trip time to the NTP peer",
      "The time it takes to process the MD5 hash",
      "The time until the next polling interval",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The delay field indicates the round-trip network transit time between the local router and the remote NTP peer, measured in milliseconds.",
  },
  {
    id: 40,
    question:
      "Which of the following will cause an NTP client to reject a time update from a server?",
    options: [
      "The server is Stratum 1",
      "The client and server are in different timezones",
      "The server has a stratum level of 16",
      "The server's offset is 5 milliseconds",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "A stratum level of 16 is considered infinite/unsynchronized. Clients will always reject time updates from a Stratum 16 source.",
  },
  {
    id: 41,
    question:
      "How do you configure a router to adjust for Daylight Saving Time (Summer Time) automatically?",
    options: [
      "ntp summer-time enable",
      "clock summer-time [zone-name] recurring",
      "ntp timezone DST",
      "clock timezone [zone-name] +1",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'clock summer-time [name] recurring' command tells the router to automatically shift its local display time forward and backward according to standard DST rules.",
  },
  {
    id: 42,
    question:
      "Which command enables NTP debugging to view the raw packet exchanges and synchronization events?",
    options: [
      "debug ip ntp",
      "debug ntp events",
      "debug ntp packets",
      "Both B and C",
    ],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Cisco IOS provides 'debug ntp events' for high-level synchronization state changes and 'debug ntp packets' for detailed packet-level exchanges.",
  },
  {
    id: 43,
    question: "What happens if you configure 'ntp master 15' on a router?",
    options: [
      "It becomes an unsynchronized server that no other device on the network will trust",
      "Clients synchronizing to it will become Stratum 16 and consider themselves unsynchronized",
      "It acts as a Stratum 1 server and synchronizes the entire network",
      "It disables the NTP process entirely on all of the router's interfaces",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "If a master is set to Stratum 15, a client syncing to it adds 1 to the stratum, making the client Stratum 16. The client will immediately flag its own time as unsynchronized.",
  },
  {
    id: 44,
    question:
      "What is the primary difference between the 'ntp server' and 'ntp peer' commands?",
    options: [
      "ntp server establishes the session over TCP; ntp peer communicates over UDP for all exchanges",
      "ntp server creates a client/server relationship; ntp peer creates a symmetric active relationship",
      "ntp peer is only used for IPv6 and multicast time distribution within the campus",
      "ntp server requires authentication on every poll; ntp peer never requires any authentication keys",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ntp server' command means the router will only request time. The 'ntp peer' command allows both routers to act as a client and a server to each other, depending on who has the better stratum.",
  },
  {
    id: 45,
    question:
      "In a 'show ntp associations' output, what does the symbol '~' indicate next to a peer?",
    options: [
      "The peer is the active system peer",
      "The peer is a candidate",
      "The peer is statically configured",
      "The peer's time is rejected or not trusted",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The tilde (~) indicates that the NTP association was statically configured using a command like 'ntp server' or 'ntp peer', as opposed to being dynamically discovered via broadcast/multicast.",
  },
  {
    id: 46,
    question:
      "When troubleshooting NTP over an IPsec VPN tunnel, which port must be permitted through any firewalls?",
    options: ["TCP 123", "UDP 123", "TCP 443", "UDP 500"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "NTP operates entirely on UDP port 123. If firewalls block this port, time synchronization will fail.",
  },
  {
    id: 47,
    question:
      "What is the effect of the 'ntp disable' command on a specific interface?",
    options: [
      "It stops the global NTP process across the entire router",
      "It prevents the interface from processing incoming NTP packets",
      "It changes the NTP version from v4 to v3 on the specific interface",
      "It removes the hardware clock synchronization for the whole device",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Applied at the interface level, 'ntp disable' drops any incoming NTP packets on that specific port, securing it from unwanted NTP interactions without disabling NTP globally.",
  },
  {
    id: 48,
    question: "Which of the following is true about NTP authentication?",
    options: [
      "It encrypts the time data payload using a shared secret key",
      "It prevents man-in-the-middle attacks from altering the timestamp",
      "It uses SSL certificates for validation of each time packet",
      "It is required by default on all Cisco routers in the enterprise",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "NTP authentication appends an MD5 MAC (Message Authentication Code) to the packet to verify the sender's identity and ensure the timestamp hasn't been tampered with. It does not encrypt the timestamp itself.",
  },
  {
    id: 49,
    question:
      "Which command designates an authentication key as valid for NTP synchronization?",
    options: [
      "ntp authenticate",
      "ntp key [number]",
      "ntp trusted-key [number]",
      "crypto key generate",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "After defining a key with 'ntp authentication-key', you must explicitly trust it using the 'ntp trusted-key [number]' command before the router will accept it.",
  },
  {
    id: 50,
    question:
      "A router receives NTP packets, but 'show ntp associations' shows a reachability of '0'. What is the most likely cause?",
    options: [
      "The server is perfectly synchronized with its upstream reference clock",
      "The router is blocking UDP 123 outbound, or the return traffic is blocked",
      "The stratum level reported by the server is a reliable value of one",
      "The hardware calendar is broken and cannot store the updated time value",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A reachability of 0 (in octal) means no valid NTP packets have been received in the last 8 polling intervals, usually pointing to a routing issue or an ACL blocking UDP port 123.",
  },
  {
    id: 51,
    question:
      "Which NTP version introduced native support for public-key cryptography (Autokey)?",
    options: ["NTPv1", "NTPv2", "NTPv3", "NTPv4"],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "NTPv4 introduced Autokey, a security protocol that uses public-key cryptography to authenticate NTP servers, moving beyond the shared secret MD5 keys of NTPv3.",
  },
  {
    id: 52,
    question: "What is the function of the 'ntp source' command?",
    options: [
      "It specifies the upstream server to query for authoritative time information",
      "It dictates which local IP address is placed in the source IP field of outgoing NTP packets",
      "It determines the stratum of the local router that will be advertised outward",
      "It authenticates the NTP master using the configured MD5 authentication key",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'ntp source' command forces the router to use a specific interface's IP address (like Loopback0) as the source IP for all outbound NTP requests.",
  },
  {
    id: 53,
    question:
      "If 'show ntp status' shows 'Clock is synchronized, stratum 2, reference is 192.168.1.1', what is the stratum of the device at 192.168.1.1?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A client always adds 1 to the stratum of its time source. Since the local router is stratum 2, its reference server (192.168.1.1) must be stratum 1.",
  },
  {
    id: 54,
    question:
      "What does the 'ref clock' value indicate in the 'show ntp associations' output if it displays 'INIT'?",
    options: [
      "The router is initializing its connection to a Stratum 0 device on the local network",
      "The NTP peer itself is currently unsynchronized and trying to establish a connection",
      "The MD5 key was accepted and validated for the authentication exchange",
      "The connection is fully synchronized and providing valid time updates to the router",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'INIT' state in the reference clock field means the remote peer has not yet synchronized to its own upstream time source, so it cannot provide valid time.",
  },
  {
    id: 55,
    question:
      "Which command allows you to view the time on a Cisco router without checking the NTP status?",
    options: [
      "show ntp time",
      "show clock",
      "show run | include time",
      "show hardware-clock",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show clock' command is the standard way to view the current software time and timezone on a Cisco device.",
  },
  {
    id: 56,
    question:
      "Which type of time source does a Stratum 1 server synchronize with?",
    options: [
      "A Stratum 2 server on the public network",
      "A Stratum 15 server located nearby on the LAN",
      "A Stratum 0 device (e.g., GPS, CDMA, atomic clock)",
      "The Internet's global DNS time service",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Stratum 1 servers are directly connected to Stratum 0 hardware time sources, such as GPS receivers or atomic clocks, via direct connections (not over a network).",
  },
  {
    id: 57,
    question:
      "What is the primary reason to use NTP over manually setting the clock on network devices?",
    options: [
      "NTP encrypts the device configuration and protects it from tampering",
      "Manual clocks drift over time, breaking log correlation and time-based security protocols",
      "NTP increases bandwidth speed by compressing the network payload",
      "Manual clocks cannot be configured with a timezone or daylight saving rules",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Hardware clocks naturally lose or gain time (drift). Without NTP, device times will eventually desynchronize, making syslog correlation impossible and breaking time-sensitive features like certificates.",
  },
  {
    id: 58,
    question:
      "In the 'show ntp associations' output, what does the 'poll' column represent?",
    options: [
      "The number of times the server has been queried",
      "The maximum offset allowed",
      "The current polling interval in seconds",
      "The authentication key number being used",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'poll' column shows the current polling interval, in seconds, before the router will send its next time request to that specific peer.",
  },
  {
    id: 59,
    question:
      "What happens if the local clock on a router is manually changed to a time that is 5 years in the future, while NTP is running?",
    options: [
      "NTP immediately steps the clock back to the correct time without any delay at all",
      "NTP will reject the server updates because the offset is too large (panic threshold)",
      "NTP crashes and the router must be reloaded to restore the service",
      "The router automatically reboots to clear the erroneous time configuration",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "NTP has a 'panic threshold' (typically 1000 seconds). If the local time differs from the server time by more than this threshold, NTP will generally abort synchronization to prevent drastic, disruptive time jumps.",
  },
  {
    id: 60,
    question:
      "How do you bypass the NTP panic threshold and force a router to update its time even if the offset is massive?",
    options: [
      "Issuing the 'ntp panic disable' command to bypass the threshold check",
      "Using the 'clock set' command manually to bring it closer to the real time",
      "Configuring the 'ntp force-sync' command on the target interface",
      "Configuring 'ntp max-offset ignore' to suppress the sanity check",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The most practical way to fix a massive offset is to manually use the 'clock set' command to get the router's time close to reality, allowing NTP to take over fine-tuning.",
  },
  {
    id: 61,
    question: "Which of the following is an advantage of SNTP over NTP?",
    options: [
      "Higher precision and accuracy",
      "Less CPU and memory overhead",
      "Native support for IPSec",
      "Support for Stratum 0 over the network",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Simple Network Time Protocol (SNTP) demands fewer resources because it omits the complex internal algorithms used by standard NTP to track and correct long-term clock drift.",
  },
  {
    id: 62,
    question:
      "Which Cisco IOS command defines an NTP server and automatically appends a specific authentication key to the requests?",
    options: [
      "ntp server [ip-address] key [key-number]",
      "ntp server [ip-address] authenticate [key-number]",
      "ntp peer [ip-address] md5 [key-number]",
      "ntp authenticate server [ip-address]",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "To send an authenticated NTP request, you append the 'key' keyword and the key number to the 'ntp server' command.",
  },
  {
    id: 63,
    question:
      "What is the maximum number of NTP servers you can configure on a Cisco router?",
    options: ["Fixed at exactly one server per interface", "Hard-capped at four servers per VRF instance", "Limited to sixteen servers per routing table", "Limited only by NVRAM and system memory"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Cisco IOS does not have a strict hardcoded limit for the number of NTP servers you can define, though practically, configuring 3 to 5 is recommended for redundancy.",
  },
  {
    id: 64,
    question:
      "Which field in the IPv4 header does NTP occasionally use for QoS marking to ensure time packets are prioritized?",
    options: ["TTL", "Protocol", "DSCP", "Source IP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Differentiated Services Code Point (DSCP) is used to prioritize NTP packets, preventing network congestion from causing artificial delay/jitter which ruins time accuracy.",
  },
  {
    id: 65,
    question: "In standard NTP, what does a reference ID of 'LOCL' mean?",
    options: [
      "Local clock",
      "Lost connection",
      "Locked synchronization",
      "Local area broadcast",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The reference ID 'LOCL' stands for Local Clock, indicating the device is acting as its own time source (ntp master).",
  },
  {
    id: 66,
    question:
      "If an NTP server is configured with the 'prefer' keyword, what is its effect?",
    options: [
      "It becomes the only server the router will poll for time synchronization updates",
      "It overrides the stratum hierarchy completely for the entire selection process",
      "NTP will favor this server over others with similar accuracy and stratum metrics",
      "It disables authentication requirements for that particular configured server",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'prefer' keyword tells the NTP process to favor that specific server during the clock selection process, provided the server's time is within a valid and sane range compared to others.",
  },
  {
    id: 67,
    question: "What is the difference between 'clock set' and 'ntp server'?",
    options: [
      "They are identical commands that produce the exact same synchronization behavior",
      "clock set defines the hardware clock state; ntp server defines the timezone for all logging output",
      "clock set is a manual, one-time adjustment; ntp server provides continuous, dynamic synchronization",
      "clock set works over UDP transport; ntp server works over TCP transport exclusively",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'clock set' command manually forces the time at that exact moment. 'ntp server' sets up an ongoing process to keep the time accurate constantly.",
  },
  {
    id: 68,
    question:
      "When observing 'show ntp associations', what does it mean if the stratum column shows a dash '-' or '16'?",
    options: [
      "The peer is a Stratum 1 atomic clock with perfect accuracy",
      "The peer's time is completely unsynchronized and invalid",
      "The peer is configured for IPv6 address family support",
      "The peer is in symmetric active mode with bidirectional sync",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A stratum of 16 (or a dash indicating it cannot be calculated) means the peer is unsynchronized and cannot provide valid time.",
  },
  {
    id: 69,
    question:
      "Which of the following NTP architectures provides the best fault tolerance for a large enterprise campus?",
    options: [
      "Pointing all switches to a single core router acting as 'ntp master' with no external reference source available at the site",
      "Configuring two core routers to sync to external Internet servers, peer with each other, and serve time to all downstream switches",
      "Configuring every switch to query public Internet NTP servers directly across the Internet edge firewalls on the network perimeter",
      "Using manual clocks on the edge switches and restricting NTP synchronization to only the distribution core layer of the campus network",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A tiered architecture where core routers sync externally and peer internally prevents external bandwidth exhaustion, maintains internal synchronization if the Internet fails, and provides redundancy.",
  },
  {
    id: 70,
    question:
      "Which command verifies if the router's hardware clock (calendar) is currently synced to the software clock?",
    options: [
      "show ntp status",
      "show clock detail",
      "show calendar",
      "Both B and C",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "The 'show calendar' command displays the hardware clock's time. Comparing this to 'show clock' (or 'show clock detail') verifies if they match.",
  },
  {
    id: 71,
    question:
      "What is the risk of having a massive difference in time between a Cisco Unified Communications Manager (CUCM) and its IP Phones?",
    options: [
      "The phones will ring endlessly and flood the call manager with phantom call attempts that consume all the signaling resources",
      "The phones may fail to register because security certificates or timestamps on registration requests will be invalid",
      "The phones will switch to IPv6 and register through the dual-stack signaling gateway to bypass the certificate checks",
      "Voice VLANs will shut down automatically until the time difference between the systems is corrected",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IP telephony relies heavily on accurate timestamps for signaling, TLS certificate validation, and Voicemail timestamps. Drastic time differences cause registration failures.",
  },
  {
    id: 72,
    question:
      "Which command specifies a local interface to send NTP multicast packets from?",
    options: [
      "ntp multicast [ip-address]",
      "ip ntp multicast",
      "ntp server multicast",
      "multicast-routing ntp",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The interface command 'ntp multicast [ip-address]' configures the interface to send time updates to a specific multicast group (often 224.0.1.1).",
  },
  {
    id: 73,
    question:
      "If an NTP client has a reachability of 377 (octal), how many of the last 8 polls were successful?",
    options: ["0", "4", "7", "8"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "377 in octal translates to 11111111 in binary. This 8-bit shift register means that all 8 of the last 8 polling attempts were successful.",
  },
  {
    id: 74,
    question:
      "Which timezone format does NTP natively use for all packet transmissions?",
    options: [
      "PST (Pacific Standard Time)",
      "EST (Eastern Standard Time)",
      "UTC (Coordinated Universal Time)",
      "The timezone configured on the master router",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "NTP transmits all timestamps purely in UTC. It is up to the local client device to apply timezone and DST offsets for display purposes.",
  },
  {
    id: 75,
    question:
      "Which command will display the configured NTP timezone and DST offsets on a Cisco router?",
    options: [
      "show ntp status",
      "show clock detail",
      "show ntp associations",
      "show timezone",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'show clock detail' reveals the current time, the timezone abbreviation, the UTC offset, and the source of the time (e.g., NTP).",
  },
  {
    id: 76,
    question:
      "Which access-group restricts an NTP server from receiving time updates, but allows it to peer?",
    options: ["serve-only", "serve", "peer", "query-only"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'peer' access-group allows full symmetric active/passive relationships. If you want to restrict receiving updates, you would use 'serve', which ignores peer/sync requests but answers client queries.",
  },
  {
    id: 77,
    question: "What is the function of the 'ntp passive' command?",
    options: [
      "It disables the NTP process entirely and stops all time updates on the router while active",
      "It drops all NTP broadcast packets received on every interface of the router immediately upon arrival",
      "It prevents the router from establishing symmetric active peer associations with unconfigured neighbors",
      "It encrypts the NTP packets with a per-neighbor symmetric key that must be shared in advance manually",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By default, if a router receives a symmetric active request, it can form a passive association. 'ntp passive' prevents the router from engaging in these dynamic peerings unless explicitly configured.",
  },
  {
    id: 78,
    question: "When deploying Network Time Protocol, what is 'clock jitter'?",
    options: [
      "The physical hardware breaking down",
      "The short-term variation of the clock's frequency",
      "The latency between the client and server",
      "The stratum level changing randomly",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Jitter in NTP refers to the short-term fluctuations in the clock's frequency, whereas 'wander' refers to long-term drift.",
  },
  {
    id: 79,
    question:
      "Which command drops the NTP association with a specific server without removing it from the running-config?",
    options: [
      "clear ntp associations",
      "clear ntp status",
      "clear ip route",
      "restart ntp",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The 'clear ntp associations' command resets the NTP process, clearing the current peers and forcing the router to send new discovery/polling packets.",
  },
  {
    id: 80,
    question:
      "What does the 'ntp allow-mode control' command do in modern Cisco IOS versions?",
    options: [
      "It enforces MD5 hashing on all control plane traffic entering the router from any external source at all times",
      "It permits legacy NTP mode 6 control queries, which are often disabled by default to prevent DDoS attacks",
      "It forces the router to become an NTP master and advertise itself at stratum one to all neighbors",
      "It enables IPv6 support for NTP by loading the dual-stack module into the running process on the router",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Mode 6 control packets (like monlist) can be used for amplification attacks. Modern IOS versions disable them by default; this command explicitly re-enables them if needed by a monitoring server.",
  },
  {
    id: 81,
    question:
      "What does a reachability of 376 (octal) signify in 'show ntp associations'?",
    options: [
      "Perfect synchronization with zero error margin across all polls",
      "The most recent poll failed, but the 7 previous polls were successful",
      "The peer is disconnected and will be removed from the table soon",
      "The router is unsynchronized and showing a large accumulated error",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In binary, 376 is 11111110. Since the shift register shifts right to left, a 0 at the end indicates the very last polling attempt was dropped or unacknowledged.",
  },
  {
    id: 82,
    question:
      "Which global configuration command is required to enable NTP authentication?",
    options: [
      "ntp authenticate",
      "ip ntp auth",
      "crypto ntp enable",
      "ntp secure",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'ntp authenticate' command globally turns on the NTP authentication process. Without it, configured keys and trusted-keys are ignored.",
  },
  {
    id: 83,
    question:
      "How does NTP protect against routing loops where two routers might try to sync to each other continuously?",
    options: [
      "Using the Spanning Tree Protocol to block redundant time paths between the two synchronizing devices on the LAN",
      "By utilizing Stratum levels to ensure time always flows downstream from lower to higher stratum numbers",
      "By dropping UDP packets after 15 hops using the IP TTL field carried inside every single time packet",
      "By using the BGP AS-PATH attribute to prevent the time updates from ever looping within the routing domain",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The stratum hierarchy guarantees a loop-free time topology. A router will only sync to a peer if that peer has a strictly lower (better) stratum level.",
  },
  {
    id: 84,
    question:
      "What happens if you configure an NTP server via a hostname rather than an IP address?",
    options: [
      "The configuration will be rejected with an error message because hostnames are never supported in NTP server commands",
      "The router uses DNS to resolve the hostname to an IP address, then stores the IP address in the configuration",
      "NTP queries will be sent to the DNS server instead of the intended time server on the local area network itself",
      "The router will use broadcast mode to discover the time server automatically on the local segment instead",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If DNS is configured, the router resolves the FQDN to an IP address. In legacy IOS, it saves the IP to the config. In modern IOS-XE, it can retain the hostname to dynamically re-resolve it if the IP changes.",
  },
  {
    id: 85,
    question:
      "Which of the following scenarios describes 'Asymmetric Routing' affecting NTP?",
    options: [
      "NTP packets go out one interface but return via another, causing wild variations in transit delay calculation",
      "NTP operates over TCP instead of UDP, relying on connection-oriented delivery for every time exchange performed",
      "One router is Stratum 1 and the other is Stratum 16 so the two devices can never agree on a time value at all",
      "MD5 keys are misconfigured between the client and server so all of the authentication exchanges will fail",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "NTP algorithms assume network transit time is roughly symmetrical. If the outbound path takes 10ms but the return path takes 90ms (asymmetric routing), NTP struggles to calculate a precise clock offset.",
  },
  {
    id: 86,
    question:
      "Which metric is the best indicator of the stability of a clock source in the 'show ntp associations detail' output?",
    options: ["Root Delay", "Dispersion", "Reach", "Stratum"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Dispersion indicates the estimated error or variance of the clock. A wildly fluctuating dispersion means the network or the remote clock is unstable.",
  },
  {
    id: 87,
    question:
      "What does the 'sys.peer' label in the 'show ntp status' command output mean?",
    options: [
      "The router is currently running in symmetric active mode with its configured peer device",
      "The IP address of the server currently providing the authoritative time to this router",
      "The router is acting as a master and serving time to downstream clients",
      "The router's broadcast address used for distributing time on the subnet",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The sys.peer (system peer) is the chosen master time source that the local router's clock is actively synchronizing with.",
  },
  {
    id: 88,
    question:
      "When setting up NTP authentication, what happens if the 'ntp trusted-key' command is omitted?",
    options: [
      "The router will accept the key but log a warning and continue to synchronize anyway",
      "The router will synchronize but without authentication and silently ignore the key settings",
      "The router will refuse to synchronize with the server because it does not trust the configured key",
      "The key will automatically be trusted after 24 hours of continuous polling with the server",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Creating a key is not enough. You must explicitly tell the router to trust the key using 'ntp trusted-key [id]'. Otherwise, authenticated packets using that key are dropped.",
  },
  {
    id: 89,
    question:
      "If a router's CPU is pegged at 100% due to processing thousands of NTP mode 6 queries, what feature is likely missing?",
    options: [
      "Using the ntp master command globally",
      "An ACL applied via 'ntp access-group'",
      "Using the ntp hardware-sync command on the device",
      "Using the clock timezone command for the router",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Without an 'ntp access-group' ACL to restrict who can query the router, it is vulnerable to external scanning and DDoS amplification attacks that drain CPU resources.",
  },
  {
    id: 90,
    question: "What is 'Root Dispersion'?",
    options: [
      "The physical distance from the local router to the nearest switch measured in fiber optic cable kilometers",
      "The total accumulated error from the local client all the way back to the Stratum 0 primary reference clock",
      "The time it takes to process an MD5 hash of the packet on the router's central control plane processor",
      "The maximum hop count for an NTP packet before the time data is considered too stale to use",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Root dispersion represents the maximum possible error of the local clock relative to the absolute authoritative time at the Stratum 0 root.",
  },
  {
    id: 91,
    question:
      "Which feature can be used alongside NTP to provide cryptographic validation of routing protocol updates (e.g., OSPFv3 or EIGRP)?",
    options: [
      "Keychain routing",
      "Time-based Key Chains",
      "BGP Route Reflectors",
      "Spanning Tree BPDU Guard",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Time-based key chains allow routers to automatically roll over their cryptographic passwords at specific dates/times, which strictly requires NTP synchronization to function properly across the network.",
  },
  {
    id: 92,
    question:
      "What is the typical default Stratum level of a public Internet NTP server (like pool.ntp.org)?",
    options: ["0", "1", "2 or 3", "15"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Public NTP pools are usually Stratum 2 or 3 devices that sync to Stratum 1 servers, ensuring the load is distributed away from the core Stratum 1 atomic clocks.",
  },
  {
    id: 93,
    question:
      "Which of the following is true about SNTP clients synchronizing with standard NTP servers?",
    options: [
      "It is impossible; they use completely different packet structures and port numbers",
      "SNTP clients can seamlessly query standard NTP servers and parse the time payload",
      "SNTP clients require TCP port 123 instead of UDP for all time exchanges",
      "NTP servers must be configured to 'SNTP compatibility mode' before accepting the clients",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SNTP and NTP use the exact same UDP payload and packet structure. An SNTP client simply ignores the complex drift algorithms and just grabs the timestamp.",
  },
  {
    id: 94,
    question:
      "What does the 'clock save interval' command do in relation to NTP?",
    options: [
      "It sets how often the router writes the NTP time to NVRAM hardware calendar",
      "It changes the polling interval used for the synchronization process",
      "It limits the number of log files created by the NTP synchronization service",
      "It delays the NTP packet transmission by a fixed number of seconds",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "Some platforms use 'clock save interval [hours]' (similar to 'ntp update-calendar') to dictate how frequently the software clock overwrites the battery-backed hardware clock.",
  },
  {
    id: 95,
    question:
      "If a router shows 'Clock is unsynchronized' but 'show ntp associations' shows a server with a '+' symbol, what does this mean?",
    options: [
      "The server is rejecting the MD5 key and dropping all of the authenticated packets immediately upon receiving them",
      "The router has found a valid candidate, but NTP is still calculating delay and offset before officially synchronizing",
      "The server is a Stratum 16 device so its time is marked as invalid and completely unusable for any synchronization at all",
      "The network is blocking UDP 123 so the router cannot send or receive any time synchronization packets across the network",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "NTP does not synchronize immediately. It takes several polling cycles to calculate the delay, offset, and dispersion. A '+' means the peer is valid and being evaluated, and synchronization will likely occur soon.",
  },
  {
    id: 96,
    question:
      "Which command reveals the number of NTP packets sent and received, as well as bad packets and dropped connections?",
    options: [
      "show ntp status",
      "show ntp associations detail",
      "show ntp counters",
      "show ntp statistics",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The 'show ntp counters' (or 'show ntp statistics' on some platforms) command displays deep diagnostics, including packet counts, dropped packets, and protocol errors.",
  },
  {
    id: 97,
    question:
      "What is the primary danger of using 'ntp master 1' on a core enterprise router?",
    options: [
      "It prevents downstream switches from syncing to the external sources and forces them to use the local clock of the core router instead",
      "It shuts down external WAN interfaces and disables all of the routing protocols that are currently running across those critical external links, disrupting connectivity",
      "It falsely advertises the router as having an atomic-level clock, potentially overwriting legitimately accurate external NTP sources in the network",
      "It breaks OSPF routing and causes the entire network to lose connectivity to all of the external authoritative time sources entirely, severing the uplinks",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Setting a router to Stratum 1 tells the network it has an atomic clock. If its internal hardware clock is drifting, it will force that inaccurate time onto the entire network, superseding legitimate Stratum 2 internet sources.",
  },
  {
    id: 98,
    question: "How does the 'ntp source' command mitigate network instability?",
    options: [
      "It prevents routing loops by relying on the loopback interface's built-in loop prevention mechanisms entirely",
      "By binding NTP to a loopback interface, the NTP association won't drop if a specific physical interface goes down",
      "It automatically encrypts the traffic between the client and the server using an IPsec transport tunnel for security",
      "It decreases the polling interval so the router synchronizes more frequently with the upstream server device",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Loopback interfaces never go down unless manually shut down. Using them as the source ensures the NTP session remains active regardless of physical topology changes.",
  },
  {
    id: 99,
    question:
      "What happens during a leap second event in a synchronized NTP environment?",
    options: [
      "NTP crashes and requires a manual restart of the service on every single synchronized device in the entire enterprise network before any time can resume",
      "The Stratum 0/1 reference clocks insert a leap second indicator into the NTP packets, which clients process to adjust their local time seamlessly",
      "The router reboots to apply the extra second and then continues with the normal polling cycle without any issue at all, losing no configuration state whatsoever",
      "The hardware calendar resets to zero and the router loses the time reference until the next manual set is performed by the network operator on site, causing a complete outage",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "NTP packets contain a Leap Indicator (LI) field. When a leap second is approaching, upstream authoritative servers set this field to notify clients to add or subtract a second at midnight.",
  },
  {
    id: 100,
    question:
      "Which protocol is recommended for time synchronization in high-speed, precision-critical environments (like data centers or finance) where sub-microsecond accuracy is required, replacing NTP?",
    options: [
      "SNTP, a simplified version of the NTP protocol",
      "The HTTP Time Protocol used over port 80",
      "PTP (Precision Time Protocol / IEEE 1588)",
      "CDP Time Sync, a Cisco-proprietary feature",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Precision Time Protocol (PTP) utilizes hardware-level timestamping on switches to provide sub-microsecond accuracy, far exceeding NTP's millisecond-level precision.",
  },
];
