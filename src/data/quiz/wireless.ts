import type { QuizQuestion } from "./types";
export const wirelessQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Which IEEE standard governs Wi-Fi (Wireless LAN)?",
    options: ["802.3", "802.11", "802.15", "802.16"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The IEEE 802.11 standard defines Wireless LAN (Wi-Fi) protocols, including 802.11a/b/g/n/ac/ax. 802.3 defines Ethernet, 802.15 covers Bluetooth/Zigbee, and 802.16 covers WiMAX.",
  },
  {
    id: 2,
    question:
      "In the 2.4 GHz band, which three channels are non-overlapping in North America?",
    options: ["1, 5, 9", "1, 6, 11", "2, 7, 12", "3, 8, 13"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Channels 1, 6, and 11 are the only three non-overlapping channels in the 2.4 GHz band, as they have the required 22 MHz of separation between their center frequencies.",
  },
  {
    id: 3,
    question:
      "Which mechanism does 802.11 use to avoid collisions on the wireless medium?",
    options: [
      "CSMA/CD",
      "Token Passing",
      "CSMA/CA",
      "Time-Division Multiplexing",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Wi-Fi uses Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA). It cannot detect collisions reliably like Ethernet (CSMA/CD), so it tries to avoid them by listening before transmitting.",
  },
  {
    id: 4,
    question:
      "What is the primary function of a Wireless LAN Controller (WLC) in a Split-MAC architecture?",
    options: [
      "To handle real-time RF transmissions and beacon generation.",
      "To manage authentication, roaming, security policies, and RF management for all joined APs.",
      "To act as a DHCP server for all wireless clients.",
      "To physically route packets between VLANs at wire speed.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In a Split-MAC architecture, the WLC handles non-real-time management functions (security, roaming, RRM), while the Lightweight AP handles real-time RF framing and beacons.",
  },
  {
    id: 5,
    question:
      "Which protocol establishes a secure control tunnel between a Lightweight Access Point and a WLC?",
    options: ["IPsec", "GRE", "CAPWAP", "LWAPP"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Control and Provisioning of Wireless Access Points (CAPWAP) is the IETF standard protocol used to encapsulate control and data traffic between a LAP and a WLC.",
  },
  {
    id: 6,
    question:
      "Which UDP ports are used by CAPWAP for control and data traffic?",
    options: [
      "Control: 5246, Data: 5247",
      "Control: 500, Data: 4500",
      "Control: 1812, Data: 1813",
      "Control: 161, Data: 162",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "CAPWAP uses UDP port 5246 for the encrypted Control tunnel and UDP port 5247 for the unencrypted (by default) Data tunnel.",
  },
  {
    id: 7,
    question:
      "What does an Access Point broadcast to advertise the existence of a wireless network?",
    options: [
      "Probe Requests",
      "Authentication Frames",
      "Beacon Frames",
      "Association Responses",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "APs broadcast Beacon frames periodically (usually every 100ms) to advertise the SSID, supported rates, and security capabilities of the BSS.",
  },
  {
    id: 8,
    question:
      "A wireless client actively searching for a specific SSID sends which type of frame?",
    options: ["Beacon", "Probe Request", "Association Request", "RTS"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In active scanning, the client sends a Probe Request looking for a specific SSID (or a null probe for all SSIDs). The AP replies with a Probe Response.",
  },
  {
    id: 9,
    question:
      "Which 802.11 standard operates exclusively in the 5 GHz band and introduced MU-MIMO on the downlink?",
    options: ["802.11n", "802.11g", "802.11ac", "802.11ax"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "802.11ac (Wi-Fi 5) operates only in the 5 GHz band, supports wider channels (up to 160 MHz), and introduced Downlink Multi-User MIMO (MU-MIMO).",
  },
  {
    id: 10,
    question:
      "What is the defining feature of 802.11ax (Wi-Fi 6) designed to improve efficiency in dense environments?",
    options: [
      "CCK modulation",
      "OFDMA (Orthogonal Frequency-Division Multiple Access)",
      "Single-User MIMO",
      "WPA2 encryption",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "OFDMA allows an AP to divide a single channel into smaller Resource Units (RUs), serving multiple clients simultaneously in the same transmission window to drastically improve efficiency.",
  },
  {
    id: 11,
    question:
      "Which wireless security protocol mandates the use of SAE (Simultaneous Authentication of Equals) for personal networks?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "WPA3 replaces the vulnerable Pre-Shared Key (PSK) 4-way handshake of WPA2 with SAE, which is resistant to offline dictionary attacks and provides forward secrecy.",
  },
  {
    id: 12,
    question:
      "In WPA2-Enterprise, which protocol is responsible for authenticating the user credentials against an external server?",
    options: ["802.1X / EAP", "AES-CCMP", "TKIP", "SAE"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "WPA2-Enterprise uses IEEE 802.1X and Extensible Authentication Protocol (EAP) to authenticate users individually via a RADIUS server, rather than using a single shared password.",
  },
  {
    id: 13,
    question:
      "What encryption algorithm is utilized by WPA2 to secure data payloads?",
    options: ["RC4", "TKIP", "AES-CCMP", "DES"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "WPA2 requires the use of the Advanced Encryption Standard (AES) utilizing the Counter Mode CBC-MAC Protocol (CCMP) for robust data confidentiality and integrity.",
  },
  {
    id: 14,
    question: "What is a BSSID?",
    options: [
      "The human-readable name of the wireless network.",
      "The MAC address of the Access Point's radio offering the BSS.",
      "The shared password for the network.",
      "A collection of multiple Access Points.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Basic Service Set Identifier (BSSID) is a 48-bit identifier, typically the MAC address of the AP's radio interface serving that specific network.",
  },
  {
    id: 15,
    question:
      "When multiple Access Points broadcast the same SSID and allow clients to roam seamlessly between them, what is this called?",
    options: [
      "Basic Service Set (BSS)",
      "Independent Basic Service Set (IBSS)",
      "Extended Service Set (ESS)",
      "Ad-hoc Network",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "An ESS (Extended Service Set) consists of two or more interconnected BSSs that share the same SSID, allowing clients to roam across a larger physical area.",
  },
  {
    id: 16,
    question:
      "Which AP mode is the default for Cisco Lightweight Access Points and provides standard client connectivity?",
    options: ["Monitor Mode", "Local Mode", "FlexConnect Mode", "Sniffer Mode"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Local Mode is the default operational state where the AP serves clients and tunnels all data traffic back to the WLC via CAPWAP.",
  },
  {
    id: 17,
    question:
      "Which AP mode allows the Access Point to locally switch data traffic onto the local VLAN if the WLC becomes unreachable?",
    options: [
      "Local Mode",
      "Monitor Mode",
      "FlexConnect Mode",
      "Rogue Detector Mode",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "FlexConnect (formerly H-REAP) allows APs at remote branch sites to survive a WAN outage by switching client traffic locally rather than tunneling it back to a centralized WLC.",
  },
  {
    id: 18,
    question:
      "An AP is placed into Monitor Mode. What is its primary function?",
    options: [
      "To serve guest clients only.",
      "To act as a dedicated sensor for location services, rogue detection, and wIPS, without serving clients.",
      "To capture packets and forward them to a Wireshark server.",
      "To bridge two wired networks together.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Monitor mode transforms the AP into a dedicated listening device. It scans all channels for rogue APs, intrusion attempts, and location tracking, but cannot serve Wi-Fi clients.",
  },
  {
    id: 19,
    question:
      "You want an AP to capture all wireless traffic on channel 6 and forward it to a PC running a packet analyzer. Which mode should it be in?",
    options: [
      "SE-Connect",
      "Sniffer Mode",
      "Monitor Mode",
      "Rogue Detector Mode",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Sniffer mode dedicates the AP to capturing 802.11 frames on a specific channel and forwarding them inside a UDP wrapper to a designated packet analyzer (like Wireshark).",
  },
  {
    id: 20,
    question: "What is the purpose of the WLC Virtual Interface?",
    options: [
      "It connects the WLC to the management VLAN.",
      "It provides a physical port for APs to connect to.",
      "It is an unroutable IP (default 1.1.1.1) used for mobility management, DHCP relay, and web authentication portals.",
      "It routes traffic between wireless clients.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The Virtual Interface is a logical construct. It is used as the source IP for WebAuth login pages, DHCP relay, and coordinating roaming between different controllers.",
  },
  {
    id: 21,
    question:
      "When configuring a WLC, which interface handles CAPWAP tunnels, AP management, and RADIUS communication?",
    options: [
      "Management Interface",
      "Virtual Interface",
      "Service Port",
      "Dynamic Interface",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The Management Interface is the primary interface on the WLC. It terminates CAPWAP tunnels, communicates with RADIUS/NTP servers, and provides GUI/CLI access.",
  },
  {
    id: 22,
    question: "What is a Dynamic Interface on a WLC?",
    options: [
      "An interface used exclusively for AP upgrades.",
      "An out-of-band management port.",
      "A logical interface mapped to a specific VLAN, used to drop client traffic onto the wired network.",
      "An interface that changes its IP address constantly.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Dynamic interfaces are analogous to VLANs. You map a WLAN (SSID) to a Dynamic Interface so that when client traffic exits the CAPWAP tunnel at the WLC, it is placed onto that specific VLAN.",
  },
  {
    id: 23,
    question:
      "Which wireless metric defines the difference in decibels between the received signal strength and the background noise?",
    options: ["RSSI", "EIRP", "SNR (Signal-to-Noise Ratio)", "FSPL"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "SNR represents how much stronger the actual data signal is compared to the ambient RF noise floor. A higher SNR (e.g., 25+ dB) is required for fast data rates.",
  },
  {
    id: 24,
    question: "An AP transmits at 100 mW. What is this value in dBm?",
    options: ["10 dBm", "20 dBm", "30 dBm", "100 dBm"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Using the Rule of 10s and 3s: 1 mW = 0 dBm. 10 mW = 10 dBm (multiply by 10 = add 10 dB). 100 mW = 20 dBm (multiply by 10 again = add 10 dB).",
  },
  {
    id: 25,
    question:
      "An antenna has a gain of 3 dBi. What does this mean for the effective transmit power?",
    options: [
      "The power is halved.",
      "The power is doubled.",
      "The power increases tenfold.",
      "The power is multiplied by 3.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "According to the Rule of 3s, adding 3 dB of gain effectively doubles the power of the signal directed in the antenna's primary propagation pattern.",
  },
  {
    id: 26,
    question:
      "What is the standard unit used to measure the gain of an antenna relative to an ideal, theoretical isotropic radiator?",
    options: ["dBm", "mW", "dBi", "dBd"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "dBi (Decibels relative to Isotropic) measures an antenna's directional gain compared to a theoretical antenna that radiates perfectly equally in all directions.",
  },
  {
    id: 27,
    question:
      "Which RF phenomenon occurs when a signal bounces off a smooth, non-absorbent surface, often causing multipath issues?",
    options: ["Refraction", "Diffraction", "Reflection", "Scattering"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Reflection occurs when an RF wave strikes a large, flat, dense object (like a metal door or glass) and bounces off, creating multiple, delayed copies of the signal (multipath).",
  },
  {
    id: 28,
    question:
      "Which RF phenomenon occurs when a wave bends as it passes through a medium of a different density?",
    options: ["Scattering", "Absorption", "Diffraction", "Refraction"],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "Refraction is the bending of an RF wave as it passes from one medium to another (e.g., air to glass), altering its trajectory.",
  },
  {
    id: 29,
    question:
      "Which type of antenna provides 360-degree coverage in the horizontal plane and is best placed in the center of a room?",
    options: [
      "Patch Antenna",
      "Omnidirectional Antenna",
      "Yagi Antenna",
      "Parabolic Dish",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Omnidirectional (dipole) antennas radiate RF energy equally in all directions on the horizontal plane, shaped much like a donut.",
  },
  {
    id: 30,
    question:
      "Which type of directional antenna is highly focused, looks like a satellite dish, and is used for long-distance point-to-point bridging?",
    options: ["Dipole", "Patch", "Parabolic Dish", "Sector"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A Parabolic Dish provides the highest gain and narrowest beamwidth, making it ideal for extremely long-distance outdoor links.",
  },
  {
    id: 31,
    question:
      "In an 802.11 network, who is responsible for making the decision to roam from one AP to another?",
    options: [
      "The Wireless LAN Controller",
      "The Access Point",
      "The RADIUS Server",
      "The Wireless Client",
    ],
    correctAnswer: 3,
    difficulty: "medium",
    explanation:
      "In standard 802.11 environments, roaming is entirely a client-driven decision. The client evaluates RSSI and SNR to decide when to disconnect and associate with a better AP.",
  },
  {
    id: 32,
    question: "What is Layer 2 roaming in a WLC environment?",
    options: [
      "Roaming between APs managed by different WLCs on different subnets.",
      "Roaming between APs managed by the same WLC where the WLAN maps to the same subnet.",
      "Roaming using an IPsec tunnel.",
      "Roaming that requires re-authentication.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Layer 2 roaming occurs when a client moves between APs and remains on the same IP subnet, requiring no changes to its IP address.",
  },
  {
    id: 33,
    question:
      "During a Layer 3 roam between two WLCs, what role does the original WLC play to ensure the client keeps its IP address?",
    options: [
      "It acts as a DHCP server.",
      "It becomes the Anchor Controller, tunneling traffic to the Foreign Controller.",
      "It drops the connection to force a DHCP renew.",
      "It hands over the MAC address table.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "To preserve the client's IP address and TCP sessions during an L3 roam, the original WLC acts as an Anchor, building an EoIP/CAPWAP mobility tunnel to the new Foreign WLC to forward traffic.",
  },
  {
    id: 34,
    question:
      "Which Cisco WLC feature automatically adjusts AP transmit power and channel assignments to optimize the RF environment?",
    options: [
      "wIPS",
      "CleanAir",
      "Radio Resource Management (RRM)",
      "Band Select",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "RRM acts as a built-in RF engineer. It continuously monitors the environment and utilizes DCA (Dynamic Channel Assignment) and TPC (Transmit Power Control) to optimize coverage and mitigate interference.",
  },
  {
    id: 35,
    question:
      "What is the purpose of Dynamic Frequency Selection (DFS) in the 5 GHz band?",
    options: [
      "To compress wireless frames.",
      "To legally avoid causing interference to military and weather radar systems operating in the same frequencies.",
      "To load balance clients across channels.",
      "To detect rogue APs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Many 5 GHz channels share space with radar systems. DFS mandates that if an AP detects a radar signature on its channel, it must immediately vacate that channel to avoid interference.",
  },
  {
    id: 36,
    question:
      "Which 802.11 frame is used by a client to formally request disconnection from an Access Point?",
    options: ["Deauthentication", "Disassociation", "RTS", "Null Data"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A Disassociation frame is sent by a client (or AP) to terminate the BSS association gracefully. Deauthentication goes a step further and tears down the authentication state as well.",
  },
  {
    id: 37,
    question: "What does the 802.11w standard provide?",
    options: [
      "Faster roaming (Fast BSS Transition)",
      "Management Frame Protection (MFP)",
      "Higher throughput using OFDMA",
      "Power saving for IoT devices",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "802.11w (MFP) encrypts and authenticates robust management frames (like Deauths and Disassociations) to prevent spoofing and denial-of-service (DoS) attacks.",
  },
  {
    id: 38,
    question:
      "Which protocol is utilized to discover a WLC if the AP and WLC are on different subnets and a DHCP option is not used?",
    options: [
      "DNS (resolving CISCO-CAPWAP-CONTROLLER.localdomain)",
      "CDP (Cisco Discovery Protocol)",
      "ARP",
      "OSPF",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "If an AP boots on a different subnet and DHCP Option 43 is not configured, it will attempt a DNS lookup for 'CISCO-CAPWAP-CONTROLLER' appended with the local domain name to find the WLC.",
  },
  {
    id: 39,
    question:
      "What DHCP option is traditionally used to provide lightweight APs with the IP addresses of the WLCs?",
    options: ["Option 15", "Option 43", "Option 66", "Option 150"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DHCP Option 43 is configured on the DHCP server to pass a list of WLC management IP addresses to the APs during the DHCP lease process.",
  },
  {
    id: 40,
    question:
      "Which EAP method uses a TLS tunnel requiring both a client certificate and a server certificate for mutual authentication?",
    options: ["PEAP", "EAP-FAST", "EAP-TLS", "LEAP"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "EAP-TLS is the most secure wireless authentication protocol. It requires PKI infrastructure because both the RADIUS server and the endpoint client must present digital certificates.",
  },
  {
    id: 41,
    question:
      "Which EAP method establishes a secure TLS tunnel using a server-side certificate, and then authenticates the client inside the tunnel using MSCHAPv2 (username/password)?",
    options: ["EAP-TLS", "PEAP", "EAP-MD5", "WPA3"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Protected EAP (PEAP) is highly popular because it only requires a digital certificate on the RADIUS server. The client simply uses standard Active Directory credentials inside the encrypted PEAP tunnel.",
  },
  {
    id: 42,
    question: "How does an AP handle traffic for a 'Hidden' SSID?",
    options: [
      "It disables the radio completely.",
      "It encrypts the beacon frames.",
      "It sets the SSID field to null (blank) in its Beacon frames.",
      "It requires a VPN to connect.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "To hide an SSID, the AP continues to transmit Beacon frames, but sets the SSID length to 0 or null. Clients must already know the name and actively probe for it.",
  },
  {
    id: 43,
    question: "What is Co-Channel Interference (CCI)?",
    options: [
      "Interference from microwaves and Bluetooth devices.",
      "When APs on overlapping, adjacent channels transmit at the same time causing signal corruption.",
      "When multiple APs are configured on the exact same channel, forcing all clients and APs to wait their turn due to CSMA/CA.",
      "When a signal reflects off a wall.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "CCI is actually channel contention. Because they share the same channel, devices must defer transmission when they hear others, increasing airtime wait and lowering throughput.",
  },
  {
    id: 44,
    question: "What is Adjacent Channel Interference (ACI)?",
    options: [
      "When APs share the exact same channel.",
      "When APs transmit on channels that partially overlap (e.g., channels 1 and 2), corrupting each other's data frames.",
      "Interference from non-Wi-Fi devices.",
      "When an AP is placed too close to a client.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "ACI occurs when frequencies overlap (like 2.4 GHz channels 1 and 2). It raises the noise floor and causes frame corruption because the CSMA/CA mechanism cannot cleanly read the overlapping transmissions.",
  },
  {
    id: 45,
    question: "Cisco 'CleanAir' technology provides which specific capability?",
    options: [
      "Spectrum intelligence that physically classifies and locates non-Wi-Fi interference sources (microwaves, Bluetooth, jammers).",
      "It cleans viruses from wireless clients.",
      "It automatically configures WPA3.",
      "It compresses wireless data to increase speed.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "CleanAir uses a dedicated silicon chip on the AP to perform hardware-level spectrum analysis, identifying the exact type of non-802.11 interference and allowing RRM to route around it.",
  },
  {
    id: 46,
    question: "What is a 'Rogue AP'?",
    options: [
      "An AP that has crashed.",
      "An unauthorized access point connected to the corporate network, posing a severe security risk.",
      "An AP configured in monitor mode.",
      "An AP operating on 5 GHz only.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A Rogue AP is an unauthorized device physically plugged into the wired corporate network, often by an employee. It bypasses corporate security policies and provides an open backdoor to the LAN.",
  },
  {
    id: 47,
    question:
      "When configuring a WLAN on a WLC, which security protocol provides data confidentiality without strong authentication (and is now obsolete)?",
    options: ["WEP", "WPA2", "WPA3", "802.1X"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Wired Equivalent Privacy (WEP) uses a static RC4 cipher that can be mathematically cracked in minutes. It is completely obsolete and unsupported in modern enterprise networks.",
  },
  {
    id: 48,
    question:
      "Which feature prevents wireless clients on the same SSID from communicating directly with each other?",
    options: [
      "Port Security",
      "Peer-to-Peer Blocking (Client Isolation)",
      "VLAN Trunking",
      "Dynamic ARP Inspection",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Peer-to-Peer Blocking forces all wireless client traffic to go to the default gateway rather than allowing devices on the same AP/SSID to attack or talk to each other, common in Guest networks.",
  },
  {
    id: 49,
    question: "In a Cisco Unified Wireless Network, what is a Mobility Group?",
    options: [
      "A group of clients sharing an SSID.",
      "A group of WLCs that share client roaming information and context, allowing seamless roaming across controllers.",
      "A physical group of Access Points on the ceiling.",
      "A QoS profile for Voice over WLAN.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Controllers placed in the same Mobility Group establish mobility tunnels and exchange database context. This allows a client to roam from WLC1 to WLC2 without dropping sessions.",
  },
  {
    id: 50,
    question:
      "What is a major advantage of the 'Cisco Mobility Express' architecture?",
    options: [
      "It requires a massive physical appliance for a few APs.",
      "It completely eliminates the need for any controller.",
      "It embeds the WLC software directly onto a master Access Point, ideal for small to medium branch deployments without hardware controllers.",
      "It operates entirely over the internet.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Mobility Express runs a virtual WLC image on an actual AP (the active controller). It can manage other APs on the same subnet without needing a separate physical or virtual controller appliance.",
  },
  {
    id: 51,
    question: "Which of the following frames is an 802.11 Control Frame?",
    options: [
      "Beacon",
      "Association Request",
      "RTS (Request to Send)",
      "QoS Data",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "RTS, CTS (Clear to Send), and ACK are Control Frames used to mediate access to the medium. Beacons and Associations are Management Frames. QoS Data is a Data Frame.",
  },
  {
    id: 52,
    question:
      "If a wireless client supports 2x2:2 MIMO, what does the final '2' represent?",
    options: [
      "2 transmit antennas",
      "2 receive antennas",
      "2 spatial streams",
      "2 frequency bands",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "In TxRx:S notation, Tx is transmit antennas, Rx is receive antennas, and S is the number of spatial streams. More spatial streams linearly increase throughput.",
  },
  {
    id: 53,
    question: "What is the primary function of the RTS/CTS mechanism?",
    options: [
      "To encrypt data.",
      "To mitigate the 'Hidden Node' problem by reserving the airtime before transmitting large frames.",
      "To associate with an AP.",
      "To request an IP address.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If two clients can hear the AP but cannot hear each other (hidden nodes), they might transmit simultaneously, causing a collision. RTS/CTS reserves the medium by silencing all nodes that hear the AP's CTS.",
  },
  {
    id: 54,
    question:
      "Which of the following is true regarding 802.11 physical carrier sense?",
    options: [
      "It relies on the Network Allocation Vector (NAV) timer.",
      "It checks the voltage on the copper wire.",
      "It uses Clear Channel Assessment (CCA) to measure RF energy on the frequency before transmitting.",
      "It sends an ICMP ping.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "Physical carrier sense uses CCA to measure raw RF energy (Energy Detect) and preamble detection (Carrier Sense) to ensure the channel is quiet before a radio begins transmission.",
  },
  {
    id: 55,
    question: "What is the function of the Network Allocation Vector (NAV)?",
    options: [
      "It is the physical carrier sense mechanism.",
      "It is a virtual carrier sense timer that counts down to zero, based on the duration values found in overheard 802.11 frames.",
      "It allocates IP addresses.",
      "It measures distance to the AP.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "When a client hears a frame intended for someone else, it reads the 'Duration' field and sets its NAV timer. The client will not attempt to transmit until its NAV counts down to zero, serving as Virtual Carrier Sense.",
  },
  {
    id: 56,
    question:
      "Which Wi-Fi band offers the greatest range and penetration through solid objects, but has limited bandwidth and only 3 non-overlapping channels?",
    options: ["2.4 GHz", "5 GHz", "6 GHz", "900 MHz"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Lower frequencies (2.4 GHz) have longer wavelengths, allowing them to penetrate walls better and travel further than 5 GHz, but they suffer from severe congestion and limited channel space.",
  },
  {
    id: 57,
    question:
      "Which Wi-Fi band was opened up by Wi-Fi 6E (802.11ax), providing 1200 MHz of clean spectrum and up to 59 new 20MHz non-overlapping channels?",
    options: ["2.4 GHz", "5 GHz", "6 GHz", "60 GHz"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Wi-Fi 6E extends the 802.11ax standard into the 6 GHz band, providing a massive amount of interference-free spectrum exclusively for newer devices.",
  },
  {
    id: 58,
    question:
      "A client is configured to connect to an SSID using 'WPA2 Personal'. What information must the user provide to connect?",
    options: [
      "A username and password (RADIUS).",
      "A digital certificate.",
      "A Pre-Shared Key (PSK).",
      "A MAC address.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'Personal' signifies the use of a Pre-Shared Key (PSK), a single password shared among all users to authenticate to the network. 'Enterprise' uses 802.1X.",
  },
  {
    id: 59,
    question:
      "On a WLC, which feature ensures that slow, legacy clients do not drag down the performance of the entire BSS by monopolizing airtime?",
    options: ["Band Steering", "Airtime Fairness (ATF)", "DFS", "CleanAir"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Airtime Fairness allocates a set percentage of transmission time to clients rather than a set amount of data. This prevents a slow 802.11b client from hogging the channel to send a large file.",
  },
  {
    id: 60,
    question:
      "You want to force dual-band clients (capable of 2.4 and 5 GHz) to preferentially connect to the less congested 5 GHz band. Which WLC feature should you enable?",
    options: [
      "Band Select (Band Steering)",
      "Client Load Balancing",
      "RRM",
      "Coverage Hole Detection",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Band Select delays probe responses on the 2.4 GHz radio, encouraging dual-band clients to associate with the 5 GHz radio which replies immediately.",
  },
  {
    id: 61,
    question:
      "Which WLC interface is used for out-of-band management and system recovery, and cannot route traffic to the enterprise network?",
    options: [
      "Virtual Interface",
      "Management Interface",
      "Service Port",
      "Dynamic Interface",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The Service Port is a physical interface on the WLC used strictly for out-of-band management. It must be on a different subnet than the Management Interface and does not route to the rest of the network.",
  },
  {
    id: 62,
    question:
      "An AP is placed into 'Rogue Detector' mode. How does it identify rogue access points?",
    options: [
      "It scans the airwaves for unauthorized SSIDs.",
      "It connects to the local switch port and monitors wired ARP traffic to match MAC addresses of wireless clients heard in the air.",
      "It attempts to hack into nearby APs.",
      "It captures packets for Wireshark.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Rogue Detector APs have their radios turned off. They sit on the wired network trunk listening to ARP packets. If they see a MAC address on the wire that another AP reported seeing in the air on an unauthorized SSID, it flags a Rogue AP on the wired network.",
  },
  {
    id: 63,
    question:
      "Calculate the EIRP (Effective Isotropic Radiated Power). The AP transmits at 15 dBm. There is 2 dB of cable loss, and the antenna provides 6 dBi of gain. What is the EIRP?",
    options: ["9 dBm", "17 dBm", "19 dBm", "23 dBm"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "EIRP = Transmit Power - Cable Loss + Antenna Gain. (15 dBm - 2 dB + 6 dBi = 19 dBm). This is the actual power radiated into the air.",
  },
  {
    id: 64,
    question:
      "In outdoor point-to-point wireless links, what is the 'Fresnel Zone'?",
    options: [
      "The blind spot directly underneath a high-gain antenna.",
      "The elliptical, 3D area surrounding the visual line of sight between two antennas that must remain largely free of physical obstructions.",
      "The distance before the RF signal drops below the noise floor.",
      "The frequency overlap area.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The Fresnel Zone is the football-shaped area around the direct line of sight. For optimal performance, at least 60% of the first Fresnel Zone must be clear of obstructions like trees or buildings.",
  },
  {
    id: 65,
    question:
      "Which RF behavior describes an RF signal breaking into multiple smaller, weaker signals when hitting an uneven surface, like tree leaves or a chain-link fence?",
    options: ["Refraction", "Reflection", "Absorption", "Scattering"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Scattering occurs when an RF wave hits a rough, uneven surface or objects smaller than its wavelength (like dust, rain, or foliage), scattering the energy in multiple directions and weakening it.",
  },
  {
    id: 66,
    question:
      "Which RF behavior describes an RF signal losing energy and converting to heat as it passes through a dense medium, like concrete or water?",
    options: ["Absorption", "Diffraction", "Reflection", "Multipath"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Absorption is the primary cause of signal attenuation indoors. Materials like brick, concrete, drywall, and water (including human bodies) absorb RF energy, converting it to trace amounts of heat.",
  },
  {
    id: 67,
    question:
      "What is the maximum Quadrature Amplitude Modulation (QAM) supported by the 802.11ax (Wi-Fi 6) standard?",
    options: ["64-QAM", "256-QAM", "1024-QAM", "4096-QAM"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "802.11ax introduced 1024-QAM, which packs 10 bits of data per symbol, offering a 25% throughput increase over 802.11ac's 256-QAM in very clean RF environments.",
  },
  {
    id: 68,
    question:
      "What is the maximum channel width supported by the 802.11ac (Wi-Fi 5) standard to achieve gigabit speeds?",
    options: ["20 MHz", "40 MHz", "80 MHz", "160 MHz"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "802.11ac supports channel bonding up to 160 MHz wide (combining eight 20 MHz channels). However, using 160 MHz in enterprise environments is rarely practical due to the lack of available non-overlapping channels.",
  },
  {
    id: 69,
    question:
      "Which IEEE 802.11 amendment provides 'Fast BSS Transition', allowing a client to pre-authenticate with a target AP before actually roaming to it, critical for VoIP over Wi-Fi?",
    options: ["802.11r", "802.11k", "802.11v", "802.11w"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "802.11r (Fast Roaming) allows the client to cache and securely pass authentication keys to the new AP before breaking the connection with the old AP, drastically reducing roam times.",
  },
  {
    id: 70,
    question:
      "Which IEEE 802.11 amendment allows an AP to send a 'Neighbor Report' to a client, helping the client discover the best APs to roam to without actively scanning all channels?",
    options: ["802.11r", "802.11k", "802.11v", "802.11w"],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "802.11k (Radio Resource Measurement) allows the AP to provide the client with a list of nearby APs and their channels, saving the client battery life and time by preventing off-channel scanning.",
  },
  {
    id: 71,
    question:
      "Which IEEE 802.11 amendment includes 'BSS Transition Management', allowing the infrastructure to suggest or force a client to roam to a less congested AP for load balancing?",
    options: ["802.11r", "802.11k", "802.11v", "802.11ax"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "802.11v (Wireless Network Management) allows the WLC/AP to send transition management frames to the client, advising it to move to a different AP to balance the network load.",
  },
  {
    id: 72,
    question:
      "In a centralized WLC deployment, which device handles the DHCP requests from wireless clients by default?",
    options: [
      "The Lightweight AP.",
      "The WLC acts as a DHCP relay, forwarding the requests to an external DHCP server.",
      "The local access switch.",
      "The client uses APIPA.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "When client traffic exits the CAPWAP tunnel at the WLC, the WLC's Dynamic Interface intercepts the DHCP Discover and acts as a DHCP Relay Agent, unicasting it to the configured DHCP server.",
  },
  {
    id: 73,
    question:
      "A FlexConnect AP is configured for 'Local Switching'. What happens to the client data traffic?",
    options: [
      "It is tunneled back to the WLC via CAPWAP.",
      "It is dropped directly onto the local VLAN at the branch switch.",
      "It is routed over an IPsec VPN.",
      "It is blocked until the WLC is reachable.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Local Switching means the AP removes the 802.11 headers, adds 802.3 headers, and dumps the data frames directly onto the local trunk port at the branch office, bypassing the WLC data tunnel.",
  },
  {
    id: 74,
    question: "What is 'FlexConnect Local Authentication'?",
    options: [
      "The AP requires an admin to log in locally.",
      "The AP can authenticate 802.1X clients using a local branch RADIUS server or its own local database if the WAN link to the central WLC goes down.",
      "The AP uses WEP.",
      "The client authenticates to the switch instead of the AP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If the CAPWAP control tunnel drops (WAN failure), the AP goes into Standalone mode. With Local Authentication enabled, it can still process EAP authentications locally, allowing new clients to join the network.",
  },
  {
    id: 75,
    question:
      "Which of the following is true regarding WPA2-Enterprise vs WPA2-Personal?",
    options: [
      "Enterprise uses AES; Personal uses TKIP.",
      "Enterprise requires an 802.1X/RADIUS authentication server; Personal uses a single Pre-Shared Key (PSK).",
      "Enterprise cannot be used on 5 GHz.",
      "Enterprise does not encrypt the data payload.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Both use AES-CCMP for encryption. The difference is authentication: Enterprise uses EAP over 802.1X tied to an identity store (like Active Directory), while Personal relies on a static PSK.",
  },
  {
    id: 76,
    question:
      "Which UDP port is traditionally used by a WLC to send authentication requests to a RADIUS server (like Cisco ISE)?",
    options: ["UDP 53", "UDP 161", "UDP 1812", "TCP 443"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "RADIUS Authentication uses UDP port 1812. RADIUS Accounting uses UDP port 1813.",
  },
  {
    id: 77,
    question:
      "In older Cisco WLC architectures, what was the specific purpose of the 'AP-Manager' interface?",
    options: [
      "To route guest traffic.",
      "To terminate CAPWAP/LWAPP control tunnels from the APs.",
      "To manage switch ports.",
      "To act as the default gateway.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Historically, the AP-Manager interface handled AP joins and CAPWAP control tunnels, while the Management interface handled GUI/CLI. In modern WLCs (like the 9800 or vWLC), these functions are combined into the Management interface.",
  },
  {
    id: 78,
    question:
      "Which of the following is the correct order of the CAPWAP AP State Machine process?",
    options: [
      "Image -> Config -> Discover -> Join -> Run",
      "Discover -> Join -> Image -> Config -> Run",
      "Join -> Discover -> Config -> Image -> Run",
      "Discover -> Config -> Join -> Run -> Image",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The AP discovers a WLC, sends a Join request, downloads the correct OS Image (if its local version mismatches the WLC), downloads its Configuration, and finally enters the Run state to serve clients.",
  },
  {
    id: 79,
    question:
      "If an AP is on the exact same Layer 2 subnet as the WLC Management interface, how does it typically discover the WLC without DNS or DHCP options?",
    options: [
      "OSPF multicast",
      "Local Subnet Broadcast (255.255.255.255)",
      "ARP",
      "BGP",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "During the Discovery phase, if the AP has an IP address, it sends a CAPWAP Discovery Request to the local broadcast address. If the WLC is on the same subnet, it will hear it and reply.",
  },
  {
    id: 80,
    question:
      "Cisco WLCs use default QoS profiles for WLANs. Which QoS profile is designated for Voice traffic and maps to 802.1p CoS 5?",
    options: ["Bronze", "Silver", "Gold", "Platinum"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "The WLC QoS profiles are: Platinum (Voice), Gold (Video), Silver (Best Effort/Data), and Bronze (Background/Guest). Platinum provides the highest priority.",
  },
  {
    id: 81,
    question:
      "By default, when you create a new WLAN on a Cisco WLC, which QoS profile is assigned to it?",
    options: ["Platinum", "Gold", "Silver", "Bronze"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Silver is the default QoS profile for new WLANs. It represents 'Best Effort' traffic, standard for normal data clients.",
  },
  {
    id: 82,
    question:
      "What is 'Client Load Balancing' (or Aggressive Load Balancing) on a Cisco WLC?",
    options: [
      "Spreading the processing load across multiple WLC CPUs.",
      "The WLC delays probe/authentication responses to a client on a heavily loaded AP, encouraging the client to associate with a neighboring, less loaded AP.",
      "Splitting a client's traffic across 2.4 GHz and 5 GHz simultaneously.",
      "Dropping client packets to reduce bandwidth.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If an AP hits a threshold of clients, the WLC will temporarily ignore connection attempts from new clients, hoping the client will hear a neighboring AP and associate there instead.",
  },
  {
    id: 83,
    question:
      "On a Cisco Access Point, which Transmit Power Control (TPC) level represents the absolute maximum power the AP radio can transmit?",
    options: ["Level 1", "Level 5", "Level 8", "Level 10"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "In Cisco RRM, Power Level 1 is the highest possible transmit power. Each subsequent level (2, 3, 4, etc.) reduces the power by 3 dB (cutting the power in half).",
  },
  {
    id: 84,
    question:
      "What is the primary goal of Transmit Power Control (TPC) in Cisco's Radio Resource Management (RRM)?",
    options: [
      "To increase power to maximum at all times for best coverage.",
      "To dynamically adjust AP power levels downward to minimize Co-Channel Interference (CCI) and optimize cell sizes.",
      "To save electricity costs.",
      "To encrypt the data frames.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If APs are too dense and transmit at full power, their coverage cells overlap heavily, causing Co-Channel Interference. TPC dials down the power to create optimal, non-interfering micro-cells.",
  },
  {
    id: 85,
    question:
      "What does Dynamic Channel Assignment (DCA) do in a WLC environment?",
    options: [
      "It assigns IP addresses to APs.",
      "It evaluates RF metrics to automatically change AP channel assignments, avoiding interference and neighboring AP overlap.",
      "It changes the client's MAC address.",
      "It bonds 2.4 GHz and 5 GHz channels.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DCA is part of RRM. It analyzes the RF environment globally across the controller and changes AP channels to minimize Co-Channel and Adjacent Channel Interference.",
  },
  {
    id: 86,
    question: "What is Coverage Hole Detection (CHD) in Cisco RRM?",
    options: [
      "A feature that alerts the admin if an AP goes offline.",
      "A feature that monitors client SNR and RSSI; if clients are connected but receiving weak signals, the WLC can increase the transmit power of that AP to fill the 'hole'.",
      "A feature that blocks rogue APs.",
      "A feature that redirects guests to a captive portal.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "CHD identifies areas where legitimate clients have poor signal. It can temporarily override TPC and increase an AP's power to cover the dead spot.",
  },
  {
    id: 87,
    question: "What is a WLC LAG (Link Aggregation)?",
    options: [
      "The latency introduced by CAPWAP.",
      "Bundling multiple physical WLC distribution ports into a single logical Port-Channel, providing redundancy and bandwidth aggregation.",
      "A routing protocol for wireless.",
      "A feature to delay guest authentication.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "LAG allows you to connect multiple cables from the WLC to the switch (using EtherChannel/Port-Channel). It provides higher throughput and instant failover if a cable dies.",
  },
  {
    id: 88,
    question:
      "When you enable LAG on a Cisco WLC, what happens to the Dynamic Interfaces?",
    options: [
      "They must be manually mapped to physical ports.",
      "They are deleted.",
      "They are automatically mapped to the single logical LAG port, and manual port mapping is disabled.",
      "They become management interfaces.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "When LAG is enabled, all physical distribution system ports function as one. Therefore, all Dynamic Interfaces (VLANs) are tied to the LAG bundle, simplifying configuration.",
  },
  {
    id: 89,
    question:
      "WPA3 Enterprise introduces an optional 192-bit security suite for highly sensitive environments (like government). Which encryption cipher does this suite mandate?",
    options: ["RC4", "AES-CCMP (128-bit)", "AES-GCMP (256-bit)", "TKIP"],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "The WPA3 192-bit security suite (often called WPA3-Enterprise Suite B) mandates AES with Galois/Counter Mode Protocol (GCMP) using a 256-bit key, replacing the older CCMP standard.",
  },
  {
    id: 90,
    question:
      "In the 802.1X authentication framework, what role does the wireless client device (e.g., a smartphone or laptop) play?",
    options: [
      "The Authenticator",
      "The Supplicant",
      "The Authentication Server",
      "The Key Server",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The Supplicant is the client device requesting network access. It supplies the credentials (username/password or certificate) to the Authenticator.",
  },
  {
    id: 91,
    question:
      "In the 802.1X authentication framework for a centralized wireless network, which device acts as the Authenticator?",
    options: [
      "The Supplicant (Client)",
      "The Wireless LAN Controller (WLC)",
      "The RADIUS Server (Cisco ISE)",
      "The Default Gateway",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The WLC acts as the Authenticator. It blocks data traffic until authentication is complete. It takes EAP messages from the client and forwards them to the RADIUS server.",
  },
  {
    id: 92,
    question:
      "In the 802.1X authentication framework, which device acts as the Authentication Server?",
    options: [
      "The Supplicant",
      "The Wireless LAN Controller (WLC)",
      "The RADIUS Server (e.g., Cisco ISE or FreeRADIUS)",
      "The Access Point",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The RADIUS Server holds the policies and validates the credentials against an identity store (like AD). It sends an Access-Accept or Access-Reject back to the WLC.",
  },
  {
    id: 93,
    question:
      "Which EAP method was developed by Cisco as an alternative to LEAP, establishing a secure TLS tunnel using a Protected Access Credential (PAC) file instead of requiring digital certificates?",
    options: ["EAP-TLS", "EAP-FAST", "PEAP", "EAP-MD5"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "EAP-FAST (Flexible Authentication via Secure Tunneling) generates a PAC file dynamically to build a secure tunnel, making it easier to deploy than EAP-TLS since no PKI infrastructure is required.",
  },
  {
    id: 94,
    question:
      "What does 'Polarization' refer to in reference to an RF antenna?",
    options: [
      "The frequency band the antenna uses.",
      "The physical orientation of the electric field of the radio wave (e.g., vertical or horizontal).",
      "The strength of the signal.",
      "The length of the antenna.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Polarization describes the plane in which the electric field oscillates. For best reception, the transmitting and receiving antennas should have matching polarization (usually vertical in standard Wi-Fi).",
  },
  {
    id: 95,
    question: "What is 'Spatial Multiplexing' in 802.11n/ac/ax?",
    options: [
      "Sending the same data over different channels.",
      "Sending multiple, independent streams of data simultaneously over multiple antennas in the same frequency channel to drastically increase throughput.",
      "Compressing the data payload.",
      "Combining 2.4 GHz and 5 GHz.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Spatial Multiplexing relies on MIMO (Multiple Input, Multiple Output). The AP breaks data into independent streams and transmits them simultaneously from different antennas, using multipath reflections to the receiver's advantage.",
  },
  {
    id: 96,
    question: "What is Maximal Ratio Combining (MRC)?",
    options: [
      "A technique where a receiver uses multiple antennas to listen to the same signal (plus its multipath reflections) and mathematically combines them to create a stronger, clearer signal.",
      "A method of bonding channels together.",
      "A security encryption key exchange.",
      "A routing metric.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "MRC allows a MIMO receiver to take degraded, slightly out-of-phase copies of a signal from its various antennas and combine them, improving SNR and effectively increasing range.",
  },
  {
    id: 97,
    question:
      "Which MIMO technology allows an Access Point to phase its transmissions from multiple antennas so that the RF energy converges constructively directly at the client's location?",
    options: [
      "Spatial Multiplexing",
      "Transmit Beamforming (TxBF)",
      "MRC",
      "CSMA/CA",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Transmit Beamforming focuses RF energy toward a specific client rather than radiating it equally everywhere. This increases the SNR at the client's location, allowing for faster data rates.",
  },
  {
    id: 98,
    question:
      "What is the purpose of MACsec (802.1AE) in a wireless environment?",
    options: [
      "To encrypt wireless frames over the air.",
      "To provide point-to-point Layer 2 encryption on the wired Ethernet link between the Access Point and the switch port.",
      "To block unauthorized MAC addresses.",
      "To authenticate clients.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "MACsec secures the wired connection. If an attacker unplugs an AP and plugs in a laptop, or taps the wire, MACsec ensures they cannot read the traffic or inject frames into the network.",
  },
  {
    id: 99,
    question:
      "How does the Cisco Meraki architecture differ from traditional Cisco Catalyst WLC architectures?",
    options: [
      "Meraki requires an on-premise hardware controller.",
      "Meraki APs are managed via a centralized Cloud Dashboard (control plane), but data traffic is switched locally (data plane) without tunneling to a central controller.",
      "Meraki only supports 2.4 GHz.",
      "Meraki does not support 802.1X.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Meraki is a cloud-managed solution. The APs pull their configuration and report telemetry to the Meraki Cloud, but client data drops directly onto the local LAN, eliminating the CAPWAP data tunnel bottleneck.",
  },
  {
    id: 100,
    question: "What is the primary use case for a Wireless Bridge?",
    options: [
      "To serve Wi-Fi to laptops in a conference room.",
      "To wirelessly connect two physically separated wired networks (e.g., two buildings) over a dedicated RF link.",
      "To connect a wired PC to a WLC.",
      "To filter malicious traffic.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Wireless bridges act like a long, invisible Ethernet cable. They use highly directional antennas to backhaul traffic between two buildings where laying fiber is impossible or too expensive.",
  },
  {
    id: 101,
    question:
      "In a Cisco Mesh wireless network, what is the difference between a Root Access Point (RAP) and a Mesh Access Point (MAP)?",
    options: [
      "A RAP is a controller; a MAP is an AP.",
      "A RAP is physically wired to the core network; a MAP relies solely on a wireless backhaul connection to a RAP or another MAP to reach the network.",
      "A MAP serves clients; a RAP does not.",
      "A RAP uses 5 GHz; a MAP uses 2.4 GHz.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Mesh networks are used where ethernet isn't available (like outdoor light poles). The RAP connects to the wired LAN. The MAPs backhaul their traffic wirelessly through each other until it reaches the RAP.",
  },
  {
    id: 102,
    question:
      "By default, how is client data traffic handled inside a CAPWAP tunnel between an AP and a WLC?",
    options: [
      "It is encrypted using IPsec.",
      "It is encapsulated in UDP and sent unencrypted.",
      "It is encrypted using DTLS.",
      "It is sent via TCP.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "By default, the CAPWAP Control tunnel is encrypted with DTLS, but the CAPWAP Data tunnel (UDP 5247) is unencrypted to save CPU overhead on the AP and WLC.",
  },
  {
    id: 103,
    question:
      "If security policy mandates that CAPWAP data traffic must be encrypted from the AP to the WLC, which protocol is used?",
    options: [
      "IPsec",
      "SSL",
      "DTLS (Datagram Transport Layer Security)",
      "MACsec",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Data DTLS can be enabled on the WLC to encrypt the CAPWAP data payloads. Note that this requires hardware encryption support on both the AP and the WLC to prevent massive performance drops.",
  },
  {
    id: 104,
    question:
      "WPA3 introduces mandatory Protected Management Frames (PMF). What specific wireless attack does this prevent?",
    options: [
      "Man-in-the-Middle (MitM)",
      "Deauthentication (Deauth) Denial-of-Service attacks",
      "Dictionary attacks on the PSK",
      "VLAN Hopping",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In WPA2 without PMF, an attacker can easily spoof a client's MAC address and send unencrypted Deauth frames, disconnecting the client continuously. PMF encrypts these frames, rendering the attack impossible.",
  },
  {
    id: 105,
    question:
      "What is Opportunistic Wireless Encryption (OWE), also known as Wi-Fi Enhanced Open?",
    options: [
      "A way to crack WEP keys.",
      "A WPA3 feature that provides individualized data encryption for open (password-less) guest networks using a Diffie-Hellman exchange.",
      "A method of bypassing 802.1X.",
      "A protocol for prioritizing voice traffic.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "OWE solves the problem of coffee-shop Wi-Fi. It allows users to connect without a password (no authentication), but dynamically encrypts the airlink so others cannot sniff the data in transit.",
  },
  {
    id: 106,
    question:
      "In 802.11, what is the purpose of the ACK (Acknowledgment) frame?",
    options: [
      "To request a DHCP address.",
      "To confirm the successful receipt of a unicast data frame. If the sender doesn't receive an ACK, it retransmits the frame.",
      "To authenticate a user.",
      "To associate with the AP.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Because CSMA/CA cannot detect collisions after transmitting, 802.11 relies on positive acknowledgment. Every unicast data frame must be explicitly ACKed by the receiver.",
  },
  {
    id: 107,
    question: "What is the primary consequence of the 'Hidden Node' problem?",
    options: [
      "Clients cannot see the SSID.",
      "High collision rates because two clients transmitting to the AP cannot hear each other, causing their frames to collide at the AP.",
      "The AP drops its CAPWAP tunnel.",
      "Encryption keys fail to sync.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If Client A and Client B are on opposite sides of an AP and out of range of each other, they both think the channel is clear. They transmit simultaneously, colliding at the AP. RTS/CTS mitigates this.",
  },
  {
    id: 108,
    question: "What is the 'Near/Far' problem in wireless networking?",
    options: [
      "When a client is too far away to get an IP address.",
      "When a client transmitting at high power close to the AP drowns out the weak signal of a client transmitting from far away.",
      "When the WLC is placed across a WAN link.",
      "When antennas are mismatched.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If a laptop right next to the AP screams at full power, the AP's receiver can be overwhelmed, preventing it from hearing the quiet whispers of a smartphone at the edge of the cell.",
  },
  {
    id: 109,
    question:
      "An AP receives a client signal at -65 dBm. The measured noise floor is -90 dBm. What is the Signal-to-Noise Ratio (SNR)?",
    options: ["25 dB", "-25 dB", "155 dB", "-155 dB"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "SNR is the absolute difference between the signal strength and the noise floor. |-65| - |-90| = 25 dB. An SNR of 25 dB is considered excellent for high-speed data.",
  },
  {
    id: 110,
    question: "What does Free Space Path Loss (FSPL) describe?",
    options: [
      "The loss of packets due to a bad cable.",
      "The natural, mathematical degradation of RF signal strength as the wave expands outward over distance through unobstructed space.",
      "The loss of signal due to concrete walls.",
      "The loss of encryption keys over the air.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Even in a vacuum, RF energy spreads out as it travels (Inverse Square Law), making the signal weaker the further you get from the antenna. This is FSPL.",
  },
  {
    id: 222,
    question:
      "What is the difference between an Access Point in autonomous mode versus lightweight mode?",
    options: [
      "Autonomous APs handle all functions independently; lightweight APs require a wireless LAN controller (WLC)",
      "Autonomous APs only support 2.4 GHz; lightweight APs support 5 GHz",
      "Autonomous APs are less secure than lightweight APs",
      "There is no difference; they are interchangeable terms",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Autonomous APs operate in stand-alone mode with full configuration on the AP itself. Lightweight APs rely on a WLC (split-MAC architecture) for management, roaming, and security.",
  },
  {
    id: 333,
    question: "Which 2.4 GHz channel is non-overlapping?",
    options: ["Channel 3", "Channel 5", "Channel 6", "Channel 8"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "In the 2.4 GHz band, channels 1, 6, and 11 are the only non-overlapping channels. Each channel is 22 MHz wide with 5 MHz separation, causing adjacent channels to overlap.",
  },
  {
    id: 444,
    question: "What is the maximum data rate supported by 802.11ac (Wi-Fi 5)?",
    options: ["54 Mbps", "450 Mbps", "1.3 Gbps", "6.9 Gbps"],
    correctAnswer: 3,
    difficulty: "hard",
    explanation:
      "802.11ac (Wi-Fi 5) can theoretically reach up to 6.9 Gbps using 160 MHz channels, 8 spatial streams (MU-MIMO), and 256-QAM modulation. Practical real-world rates are lower.",
  },
  {
    id: 555,
    question: "What is a Service Set Identifier (SSID)?",
    options: [
      "The MAC address of a wireless access point",
      "The name that identifies a wireless network",
      "The encryption key used for wireless security",
      "The channel frequency used by an access point",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "An SSID is a human-readable name (up to 32 characters) that identifies a wireless network. Clients use the SSID to discover and connect to a specific WLAN.",
  },
];
