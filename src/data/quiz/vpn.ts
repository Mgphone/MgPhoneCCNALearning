import type { QuizQuestion } from "./types";
export const vpnQuestions: QuizQuestion[] = [
  {
    id: 2,
    question:
      "Which IPsec protocol provides data confidentiality (encryption) as well as authentication?",
    options: [
      "Authentication Header (AH)",
      "Encapsulating Security Payload (ESP)",
      "Generic Routing Encapsulation (GRE)",
      "Internet Key Exchange (IKE)",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "ESP (Protocol 50) provides encryption, authentication, and integrity. AH (Protocol 51) only provides authentication and integrity, but no encryption.",
  },
  {
    id: 3,
    question:
      "What is the IP protocol number for Generic Routing Encapsulation (GRE)?",
    options: ["47", "50", "51", "89"],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "GRE uses IP protocol number 47. ESP uses 50, AH uses 51, and OSPF uses 89.",
  },
  {
    id: 4,
    question:
      "Which UDP port is used by ISAKMP/IKE for establishing IPsec VPN Phase 1 tunnels?",
    options: ["UDP 4500", "UDP 500", "TCP 443", "UDP 1701"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "IKE (Internet Key Exchange) uses UDP port 500 to negotiate Phase 1 and Phase 2 Security Associations (SAs).",
  },
  {
    id: 5,
    question:
      "When a NAT device is detected between two IPsec peers, which port does IPsec switch to for NAT Traversal (NAT-T)?",
    options: ["UDP 500", "TCP 443", "UDP 4500", "TCP 10000"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "NAT-T encapsulates the ESP payload inside a UDP header using port 4500 to allow the traffic to pass through PAT/NAT devices successfully.",
  },
  {
    id: 6,
    question:
      "What is the primary advantage of combining GRE with IPsec (GRE over IPsec)?",
    options: [
      "GRE provides stronger encryption than IPsec.",
      "IPsec supports multicast, while GRE does not.",
      "GRE can encapsulate multicast and routing protocol traffic, which IPsec then encrypts.",
      "GRE eliminates the need for IKE Phase 1.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "Standard IPsec only supports unicast traffic. GRE supports multicast and broadcast (needed for routing protocols like OSPF/EIGRP). GRE over IPsec combines GRE's protocol support with IPsec's security.",
  },
  {
    id: 7,
    question: "In an IPsec VPN, what is the purpose of Diffie-Hellman (DH)?",
    options: [
      "To encrypt the data payload.",
      "To securely exchange shared secret keys over an insecure network.",
      "To hash the data for integrity checks.",
      "To authenticate the peer using digital certificates.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Diffie-Hellman is an asymmetric mathematical algorithm that allows two parties to independently generate identical shared secret keys over an untrusted network.",
  },
  {
    id: 8,
    question:
      "Which of the following algorithms is used for data integrity and authentication (hashing) in a VPN?",
    options: ["AES", "RSA", "SHA-256", "3DES"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "SHA-256 and MD5 are hashing algorithms used to ensure data integrity (verifying data hasn't been altered). AES and 3DES are for encryption.",
  },
  {
    id: 9,
    question: "What does Perfect Forward Secrecy (PFS) ensure in an IPsec VPN?",
    options: [
      "It prevents replay attacks.",
      "It ensures that a new, independent Diffie-Hellman exchange occurs for every Phase 2 SA.",
      "It allows NAT Traversal to function.",
      "It encrypts the pre-shared key.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "PFS forces a new DH key exchange when generating IPsec Phase 2 keys. If a key is compromised, previous and future sessions remain secure because the keys are not mathematically linked.",
  },
  {
    id: 10,
    question:
      "Which IPsec mode encrypts the entire original IP packet and adds a new IP header?",
    options: ["Transport Mode", "Tunnel Mode", "Transparent Mode", "Main Mode"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "In Tunnel Mode, the entire original IP packet is encrypted, and a new IP header is appended for routing over the internet. It is typically used for site-to-site VPNs.",
  },
  {
    id: 11,
    question:
      "Which IPsec mode encrypts only the payload and retains the original IP header?",
    options: ["Transport Mode", "Tunnel Mode", "Aggressive Mode", "Quick Mode"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Transport mode retains the original IP header and only encrypts the payload. It is often used for host-to-host VPNs or when used with GRE.",
  },
  {
    id: 12,
    question:
      "Dynamic Multipoint VPN (DMVPN) relies on which protocol to resolve logical tunnel IP addresses to physical public IP addresses?",
    options: ["BGP", "NHRP", "IPsec", "IKEv2"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Next Hop Resolution Protocol (NHRP) acts like ARP for DMVPN, allowing spokes to register their public (NBMA) IPs with the hub so dynamic tunnels can be built.",
  },
  {
    id: 13,
    question:
      "What type of tunnel interface is configured on a DMVPN Hub router to allow multiple spoke connections on a single interface?",
    options: [
      "Point-to-Point GRE",
      "Multipoint GRE (mGRE)",
      "IPsec VTI",
      "SSL Tunnel",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "mGRE (Multipoint GRE) allows a single tunnel interface on the hub to terminate multiple IPsec/GRE tunnels from various spokes.",
  },
  {
    id: 14,
    question:
      "In DMVPN Phase 1, how does traffic flow between two spoke routers?",
    options: [
      "Directly from spoke to spoke.",
      "All spoke-to-spoke traffic must pass through the Hub router.",
      "Spokes cannot communicate with each other.",
      "Traffic flows unencrypted over the internet.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In DMVPN Phase 1, spokes only form tunnels with the hub. Any spoke-to-spoke traffic is routed through the hub router.",
  },
  {
    id: 15,
    question:
      "Which type of VPN allows users to securely access corporate resources from a web browser without installing a dedicated VPN client?",
    options: [
      "Site-to-Site IPsec VPN",
      "Clientless SSL VPN",
      "DMVPN",
      "FlexVPN",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Clientless SSL VPNs utilize a standard web browser and HTTPS to provide secure, limited access to specific web-based corporate resources.",
  },
  {
    id: 16,
    question:
      "What feature allows a remote access VPN client to access the corporate network through the VPN tunnel while simultaneously browsing the public internet unencrypted?",
    options: ["Hairpinning", "Split Tunneling", "NAT-T", "Route Summarization"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Split tunneling routes only corporate traffic through the encrypted VPN tunnel, while directing standard internet traffic out the user's local internet connection.",
  },
  {
    id: 17,
    question:
      "What is the primary difference between Symmetric and Asymmetric encryption?",
    options: [
      "Symmetric uses two keys, asymmetric uses one.",
      "Symmetric is slower than asymmetric.",
      "Symmetric uses the same key for encryption and decryption; asymmetric uses a public/private key pair.",
      "Symmetric is used for hashing, asymmetric is for encryption.",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "Symmetric encryption uses a single shared key (e.g., AES). Asymmetric uses a mathematically linked public and private key pair (e.g., RSA) and is generally much slower.",
  },
  {
    id: 18,
    question:
      "Which of the following is considered a highly secure, modern symmetric encryption algorithm used in IPsec?",
    options: ["DES", "3DES", "RC4", "AES"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Advanced Encryption Standard (AES) is the current standard for secure symmetric encryption. DES and 3DES are deprecated and considered weak.",
  },
  {
    id: 19,
    question:
      "In IKEv1, Phase 1 establishes the management tunnel. What does Phase 2 establish?",
    options: [
      "The Diffie-Hellman exchange.",
      "The IPsec Security Associations (SAs) used to encrypt actual user data.",
      "The peer authentication.",
      "The routing protocol adjacency.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IKE Phase 1 builds a secure management tunnel (ISAKMP SA). IKE Phase 2 uses that tunnel to negotiate the IPsec SAs that will encrypt the actual data traffic.",
  },
  {
    id: 20,
    question:
      "Which Cisco IOS command applies an IPsec crypto map to a physical interface?",
    options: [
      "crypto ipsec map MAP_NAME",
      "crypto map MAP_NAME",
      "ipsec apply MAP_NAME",
      "tunnel protection ipsec profile MAP_NAME",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The interface-level command 'crypto map [map-name]' binds the configured crypto map (and its associated ACLs and transform sets) to the physical interface.",
  },
  {
    id: 21,
    question:
      "What is the function of a 'Transform Set' in IPsec configuration?",
    options: [
      "It defines the pre-shared key.",
      "It defines the routing protocol used over the VPN.",
      "It specifies the encryption and hashing algorithms (e.g., ESP-AES ESP-SHA) used for Phase 2 data protection.",
      "It specifies the peer's IP address.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A transform set defines the specific suite of encryption and authentication protocols (like ESP with AES and SHA) that the routers will use to protect the data payload.",
  },
  {
    id: 22,
    question:
      "Which command simplifies GRE over IPsec configuration by eliminating the need for crypto maps?",
    options: [
      "crypto map dynamic",
      "crypto isakmp key",
      "tunnel protection ipsec profile",
      "ipsec over gre enable",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'tunnel protection ipsec profile' command is applied directly to the tunnel interface, applying IPsec encryption to the GRE tunnel without needing complex crypto maps and ACLs.",
  },
  {
    id: 23,
    question:
      "You configure a GRE tunnel, but it is constantly flapping (going up and down). What is the most common routing cause of this?",
    options: [
      "MTU mismatch.",
      "A recursive routing error where the tunnel destination IP is learned through the tunnel itself.",
      "Mismatched pre-shared keys.",
      "NAT is dropping the GRE packets.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "A recursive routing error occurs when a router learns the route to the tunnel's physical destination IP *through* the tunnel. It routes the tunnel into itself, causing it to crash and flap.",
  },
  {
    id: 24,
    question:
      "When encapsulating packets in IPsec and GRE, the packet size increases. Which command adjusts the TCP payload size to prevent fragmentation?",
    options: [
      "ip mtu 1400",
      "ip tcp adjust-mss 1360",
      "crypto ipsec mtu",
      "no ip unreachables",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The 'ip tcp adjust-mss' command alters the Maximum Segment Size value during the TCP 3-way handshake, ensuring end hosts send smaller packets that won't require fragmentation after VPN overhead is added.",
  },
  {
    id: 25,
    question:
      "Which VPN technology natively supports IPv6, multicast, and multi-vendor interoperability while operating without crypto maps?",
    options: ["DMVPN", "VTI (Virtual Tunnel Interface)", "SSL VPN", "GETVPN"],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPsec VTIs act as routable interfaces, supporting multicast and routing protocols natively without GRE overhead or crypto maps, and are an open standard.",
  },
  {
    id: 26,
    question:
      "What is the purpose of Hashed Message Authentication Code (HMAC)?",
    options: [
      "To encrypt passwords in the configuration file.",
      "To provide data integrity and data origin authentication using a hash combined with a secret key.",
      "To negotiate the DH group.",
      "To compress VPN data.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "HMAC combines a hashing algorithm (like SHA) with a secret key. It guarantees that the data hasn't changed (integrity) and that it definitely came from the peer holding the secret key (authentication).",
  },
  {
    id: 27,
    question:
      "In PKI (Public Key Infrastructure), what is used to verify the identity of a VPN peer instead of a pre-shared key?",
    options: [
      "Digital Certificates (X.509)",
      "Radius Tokens",
      "Diffie-Hellman Keys",
      "AES-256",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "Digital certificates, issued by a trusted Certificate Authority (CA), use asymmetric cryptography to authenticate peers dynamically and securely without manually configuring pre-shared keys.",
  },
  {
    id: 28,
    question: "What is an IPsec Security Association (SA)?",
    options: [
      "The physical cable connecting two routers.",
      "A unidirectional agreement between peers defining the security parameters for traffic.",
      "A routing protocol neighbor adjacency.",
      "The list of permitted networks in an ACL.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "An SA is a logical, unidirectional connection. For bi-directional IPsec communication, two SAs are required (one inbound, one outbound), uniquely identified by an SPI (Security Parameter Index).",
  },
  {
    id: 29,
    question: "What is the primary difference between IKEv1 and IKEv2?",
    options: [
      "IKEv2 does not support encryption.",
      "IKEv1 is faster to establish.",
      "IKEv2 is more efficient, uses fewer message exchanges, and natively supports Dead Peer Detection and EAP.",
      "IKEv1 uses TCP, IKEv2 uses UDP.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "IKEv2 is a modern enhancement that simplifies the connection process, uses fewer messages, and integrates features like NAT-T and DPD natively, making it highly robust.",
  },
  {
    id: 30,
    question:
      "What command verifies the status of IKE Phase 1 on a Cisco IOS router?",
    options: [
      "show crypto ipsec sa",
      "show crypto isakmp sa",
      "show vpn phase1",
      "show ip route",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'show crypto isakmp sa' command displays the status of the Phase 1 management tunnels. Status 'QM_IDLE' typically means Phase 1 is successful and idle.",
  },
  {
    id: 31,
    question:
      "What command verifies the status of IPsec Phase 2, including encrypted/decrypted packet counters?",
    options: [
      "show crypto isakmp sa",
      "show ipsec phase2",
      "show crypto ipsec sa",
      "show interfaces tunnel 0",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "'show crypto ipsec sa' displays the Phase 2 IPsec SAs, the active transform sets, and critical counters for encrypted, decrypted, and dropped packets.",
  },
  {
    id: 32,
    question:
      "You want to clear existing IKE Phase 1 associations to force a renegotiation. Which command do you use?",
    options: [
      "clear crypto ipsec sa",
      "clear crypto isakmp",
      "clear ip route *",
      "reset vpn all",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "'clear crypto isakmp' drops the Phase 1 management tunnels, forcing the routers to renegotiate the ISAKMP SAs.",
  },
  {
    id: 33,
    question:
      "Which of the following is a requirement for a site-to-site IPsec VPN utilizing a Crypto Map?",
    options: [
      "An Access Control List (ACL) to identify 'interesting traffic' to be encrypted.",
      "A BGP neighbor adjacency.",
      "A GRE tunnel interface.",
      "A wildcard mask in the crypto map.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Crypto maps require a standard or extended ACL to define the 'interesting traffic'. Traffic matching 'permit' in the ACL triggers the VPN encryption.",
  },
  {
    id: 34,
    question:
      "In DMVPN Phase 2, how does traffic flow between two spoke routers?",
    options: [
      "It must always pass through the hub.",
      "Spokes can build dynamic IPsec tunnels directly to each other after querying the hub via NHRP.",
      "It is routed via BGP without encryption.",
      "Spokes broadcast traffic to all other spokes.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Phase 2 allows spoke-to-spoke direct tunnels. A spoke asks the hub for the public IP of another spoke via NHRP, and then builds a dynamic mGRE tunnel directly to it.",
  },
  {
    id: 35,
    question: "What role does BGP or EIGRP play in a DMVPN environment?",
    options: [
      "They encrypt the traffic.",
      "They resolve public IP addresses.",
      "They act as the overlay routing protocol, advertising the private LAN networks across the encrypted tunnels.",
      "They establish the IKE Phase 1 tunnel.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In an overlay network like DMVPN, IPsec provides encryption, NHRP maps IPs, and routing protocols (EIGRP/BGP/OSPF) exchange the private LAN routes over the tunnels.",
  },
  {
    id: 36,
    question:
      "Which IPsec feature allows a router to detect if a VPN peer has gone offline, tearing down the SA to clear resources?",
    options: [
      "NAT-T",
      "Perfect Forward Secrecy",
      "Dead Peer Detection (DPD)",
      "Route Injection",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "DPD (or ISAKMP Keepalives) actively monitors the peer's availability. If the peer dies, DPD tears down the tunnel so traffic can be rerouted.",
  },
  {
    id: 37,
    question:
      "What does the 'SPI' (Security Parameter Index) do in an ESP packet?",
    options: [
      "It dictates the encryption algorithm.",
      "It uniquely identifies the specific IPsec Security Association (SA) the packet belongs to.",
      "It contains the hashed password.",
      "It identifies the original source IP.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The SPI is a 32-bit value in the ESP header that the receiving router uses to look up the exact SA parameters (keys, algorithms) needed to decrypt that specific packet.",
  },
  {
    id: 38,
    question:
      "What is an advantage of Cisco AnyConnect Secure Mobility Client over a standard Clientless SSL VPN?",
    options: [
      "It requires no software installation.",
      "It provides full network-layer (Layer 3) access, supporting all TCP/UDP applications, unlike the web-only access of Clientless VPNs.",
      "It only operates over port 80.",
      "It does not require authentication.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "AnyConnect installs a virtual network adapter on the client, granting full Layer 3 access to the corporate network, allowing any application protocol to function.",
  },
  {
    id: 39,
    question:
      "A client connected via AnyConnect SSL VPN is using DTLS. What is DTLS?",
    options: [
      "A weak encryption standard.",
      "Datagram Transport Layer Security, which runs over UDP to improve performance for latency-sensitive traffic like VoIP.",
      "A method for dynamic routing.",
      "A database protocol.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Standard TLS uses TCP, which can suffer from 'TCP Meltdown' if packet loss occurs in a tunnel. DTLS uses UDP port 443, providing a much faster, stateless transport ideal for VPNs.",
  },
  {
    id: 40,
    question:
      "Which of the following is true regarding GETVPN (Group Encrypted Transport VPN)?",
    options: [
      "It uses GRE tunnels.",
      "It encrypts WAN traffic without using tunnels, preserving the original source/destination IP headers.",
      "It is used primarily for remote access users.",
      "It requires NAT.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "GETVPN is a tunnel-less VPN technology used over private MPLS networks. It encrypts the payload but keeps the original IP headers intact, allowing the provider network to honor original QoS markings.",
  },
  {
    id: 41,
    question:
      "What is the function of the Key Server (KS) in a GETVPN deployment?",
    options: [
      "It routes all data traffic.",
      "It acts as a CA server.",
      "It creates and distributes security policies and encryption keys to the Group Members (GMs).",
      "It performs NAT.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In GETVPN, Group Members authenticate with the Key Server, which then pushes down identical symmetric keys (TEK/KEK) to all members, allowing them to encrypt traffic to each other without building individual tunnels.",
  },
  {
    id: 42,
    question:
      "Which technology is the Cisco recommended successor to traditional IPsec Crypto Maps and standard DMVPN?",
    options: ["FlexVPN", "L2TPv3", "PPTP", "Frame Relay"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "FlexVPN is Cisco's unified VPN solution based entirely on IKEv2. It consolidates site-to-site, remote access, and hub-and-spoke topologies under a single, simplified configuration framework.",
  },
  {
    id: 43,
    question: "Why is AH (Authentication Header) incompatible with NAT?",
    options: [
      "NAT alters the IP header, which invalidates the AH integrity hash that covers the entire packet.",
      "AH uses TCP port 80, which NAT blocks.",
      "AH encrypts the port numbers.",
      "NAT requires ESP to function.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "AH hashes the immutable fields of the IP header. NAT changes the source IP address, causing the AH integrity check to fail at the destination, resulting in dropped packets.",
  },
  {
    id: 44,
    question:
      "When configuring a VPN access control list (ACL) for a crypto map, what action triggers encryption?",
    options: ["deny", "permit", "encrypt", "log"],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "In a crypto ACL, 'permit' identifies traffic that *should* be encrypted. 'Deny' identifies traffic that should be sent in cleartext (unencrypted).",
  },
  {
    id: 45,
    question:
      "You want traffic destined for the internet to bypass the VPN tunnel on a remote router. What must you do to the crypto ACL?",
    options: [
      "Permit any any.",
      "Add a 'deny' statement for internet-bound traffic before the 'permit' statement for corporate traffic.",
      "Enable NAT-T.",
      "Configure split-tunneling on the interface.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By denying internet-bound traffic in the crypto ACL, the router will not apply IPsec encryption to it, allowing it to be routed normally to the ISP.",
  },
  {
    id: 46,
    question: "In an IPsec VPN, what is Anti-Replay protection?",
    options: [
      "A feature that prevents the same packet from being captured and retransmitted by an attacker.",
      "A feature that drops ICMP pings.",
      "A routing loop prevention mechanism.",
      "A feature that stops duplicate MAC addresses.",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "Anti-replay uses a sequence number in the ESP header. The receiver tracks these numbers; if an attacker captures a packet and resends it later, the receiver drops it because the sequence number is old.",
  },
  {
    id: 47,
    question:
      "What is the standard MTU size for an Ethernet interface before adding GRE and IPsec overhead?",
    options: ["1360 bytes", "1400 bytes", "1500 bytes", "9000 bytes"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The default Ethernet MTU is 1500 bytes. Adding GRE (24 bytes) and IPsec (up to ~60 bytes) pushes the packet over 1500, causing fragmentation if MTU/MSS is not adjusted.",
  },
  {
    id: 48,
    question:
      "Which of the following is true regarding Phase 1 IKE Main Mode vs Aggressive Mode?",
    options: [
      "Main Mode uses 3 messages; Aggressive Mode uses 6.",
      "Main Mode hides the peer identities (IPs); Aggressive Mode sends them in cleartext, making it faster but less secure.",
      "Aggressive Mode uses stronger encryption.",
      "Main Mode is only used in IKEv2.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "IKEv1 Main Mode uses 6 messages and encrypts the peer identities. Aggressive Mode uses 3 messages, sending identities in cleartext, typically used when one peer has a dynamic IP address.",
  },
  {
    id: 49,
    question:
      "A site-to-site VPN is failing. The command 'show crypto isakmp sa' shows a state of MM_NO_STATE. What does this mean?",
    options: [
      "Phase 1 successfully completed.",
      "Phase 1 failed, often due to mismatched ISAKMP policies (e.g., encryption, hash, auth method, DH group).",
      "Phase 2 failed due to mismatched transform sets.",
      "Routing is failing over the tunnel.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "MM_NO_STATE indicates that Main Mode has failed to negotiate the Phase 1 SA, almost always due to mismatched Phase 1 parameters or incorrect pre-shared keys.",
  },
  {
    id: 50,
    question:
      "What are the 5 parameters that MUST match for IKE Phase 1 to establish successfully? (Hint: HAGLE)",
    options: [
      "Hash, Authentication, Group (DH), Lifetime, Encryption",
      "Host, Algorithm, Gateway, LAN, Encryption",
      "Hash, ACL, GRE, Lifetime, ESP",
      "Header, Authentication, Group, Local, Encapsulation",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "HAGLE: Hash (SHA/MD5), Authentication (PSK/RSA), Group (Diffie-Hellman 2/5/14), Lifetime (seconds), and Encryption (AES/3DES) must match between peers.",
  },
  {
    id: 51,
    question:
      "Which Diffie-Hellman group provides the highest level of security among the following?",
    options: ["Group 1", "Group 2", "Group 5", "Group 14"],
    correctAnswer: 3,
    difficulty: "easy",
    explanation:
      "Higher DH group numbers signify larger key sizes. DH Group 1 is 768-bit, Group 2 is 1024-bit, Group 5 is 1536-bit, and Group 14 is 2048-bit.",
  },
  {
    id: 52,
    question: "What occurs during IPsec Phase 2 'Quick Mode'?",
    options: [
      "ISAKMP policies are negotiated.",
      "IPsec SAs are negotiated and established using the secure tunnel built in Phase 1.",
      "The Pre-Shared Key is exchanged.",
      "The router reboots.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Quick Mode is the IKEv1 Phase 2 process where the actual IPsec parameters (transform sets, ACLs) are agreed upon and the data SAs are created.",
  },
  {
    id: 53,
    question:
      "If a router's ACL defines 192.168.1.0/24 to 10.0.0.0/24 as interesting traffic, what MUST the peer router's ACL look like?",
    options: [
      "It must be exactly identical.",
      "It must be a perfect mirror image (10.0.0.0/24 to 192.168.1.0/24).",
      "It must permit all traffic (any any).",
      "It must use standard ACLs.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPsec crypto ACLs must be symmetrical mirror images. If Site A encrypts traffic from A to B, Site B must encrypt traffic from B to A.",
  },
  {
    id: 54,
    question:
      "You want to configure an IPsec tunnel using IPv6. Which encapsulation protocol is required?",
    options: [
      "GRE is required because IPsec does not support IPv6 natively.",
      "IPsec supports IPv6 natively using ESP and AH extension headers.",
      "L2TP must be used.",
      "IPv4-in-IPv6 tunnels.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPsec is heavily integrated into the IPv6 architecture. IPv6 uses standard Extension Headers to implement ESP and AH, allowing native IPsec without GRE.",
  },
  {
    id: 55,
    question:
      "What is 'Hairpinning' (or U-turning) in the context of a VPN concentrator?",
    options: [
      "Routing traffic through a firewall twice.",
      "Allowing VPN traffic entering an interface to be routed back out the exact same interface (e.g., Spoke-to-Hub-to-Spoke).",
      "Dropping packets with expired TTLs.",
      "Switching between TCP and UDP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "By default, Cisco security devices block traffic from entering and exiting the same interface. Enabling 'hairpinning' (same-security-traffic permit intra-interface) allows spokes to talk to each other through the hub.",
  },
  {
    id: 56,
    question:
      "Which feature allows a VPN router to dynamically push a virtual IP address, DNS servers, and split-tunneling rules to a remote AnyConnect client?",
    options: [
      "BGP Route Reflector",
      "Group Policy / IP Address Pool",
      "DHCP Snooping",
      "VLAN Trunking",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "When a remote access client authenticates, the VPN gateway uses a configured Group Policy and Address Pool to push network settings to the client's virtual adapter.",
  },
  {
    id: 57,
    question: "What is the primary role of the ISAKMP SA?",
    options: [
      "To encrypt ICMP pings.",
      "To secure the control channel so that IPsec parameters can be safely negotiated.",
      "To route OSPF traffic.",
      "To perform NAT.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The ISAKMP SA (Phase 1) creates a secure, encrypted management tunnel. Phase 2 (IPsec SAs) is then negotiated securely inside this Phase 1 tunnel.",
  },
  {
    id: 58,
    question: "What command creates an ISAKMP policy on a Cisco router?",
    options: [
      "crypto ipsec transform-set",
      "crypto isakmp policy [priority-number]",
      "crypto map",
      "interface tunnel 0",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'crypto isakmp policy [number]' command enters the configuration mode to define Phase 1 parameters (hash, authentication, DH group, etc.).",
  },
  {
    id: 59,
    question:
      "In DMVPN Phase 3, what specific feature allows spokes to discover the most optimal path to another spoke, overriding the hub's routing?",
    options: [
      "OSPF Area 0",
      "NHRP Redirect and NHRP Shortcut",
      "BGP Route Reflectors",
      "IPsec VTI",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In Phase 3, the Hub sends an 'NHRP Redirect' to spokes, prompting them to send an 'NHRP Shortcut' request. This dynamically updates the spoke's routing table with a direct route to the destination spoke.",
  },
  {
    id: 60,
    question:
      "Why might a network administrator lower the IP MTU on a GRE tunnel interface to 1400?",
    options: [
      "To increase bandwidth.",
      "To prevent packet fragmentation caused by the additional 24-byte GRE and 20-byte IP headers added to a standard 1500-byte frame.",
      "To improve encryption strength.",
      "To force TCP to use UDP.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Lowering the MTU on the tunnel interface ensures the router fragments packets *before* encrypting/encapsulating them, preventing larger post-encapsulation packets from being dropped by intermediate ISP routers.",
  },
  {
    id: 61,
    question: "Which of the following describes a site-to-site VPN?",
    options: [
      "A mobile user connecting to headquarters from a cafe.",
      "An automated, always-on encrypted connection between two fixed network locations (e.g., HQ and Branch).",
      "A clientless web portal.",
      "An SSH session into a router.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "Site-to-site VPNs connect entire networks together transparently. Devices on either LAN communicate as if they are on the same physical network.",
  },
  {
    id: 62,
    question: "What is an RSA signature in the context of VPNs?",
    options: [
      "A typed password.",
      "An asymmetric digital signature using certificates to prove identity during IKE Phase 1.",
      "A hashing algorithm for data integrity.",
      "A symmetric encryption key.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "RSA signatures utilize Public Key Infrastructure (PKI) certificates. The router signs the Phase 1 exchange with its private key, and the peer verifies it with the public key.",
  },
  {
    id: 63,
    question:
      "Which protocol provides the framework for authenticating clients in a remote access VPN using servers like RADIUS or TACACS+?",
    options: [
      "EAP (Extensible Authentication Protocol) / AAA",
      "BGP",
      "ESP",
      "AH",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "VPN concentrators integrate with AAA (Authentication, Authorization, and Accounting) servers using protocols like EAP/RADIUS to validate user credentials against a central database (like Active Directory).",
  },
  {
    id: 64,
    question:
      "Which payload protocol does IPsec ESP use to identify the upper-layer protocol it is encrypting?",
    options: ["Next Header", "Protocol 47", "TCP Port 500", "EtherType"],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "The ESP trailer contains a 'Next Header' field (similar to the Protocol field in an IP header) that identifies what is encrypted inside the payload (e.g., TCP, UDP, or ICMP).",
  },
  {
    id: 65,
    question:
      "What does the 'tunnel mode ipsec ipv4' command do when applied to a tunnel interface?",
    options: [
      "It creates a GRE tunnel.",
      "It converts the interface into an IPsec Virtual Tunnel Interface (VTI), eliminating GRE encapsulation.",
      "It disables IPv6.",
      "It applies a crypto map.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "This command configures an IPsec VTI. Instead of encapsulating IP in GRE and then in IPsec, it encapsulates the payload directly in IPsec, saving overhead bytes.",
  },
  {
    id: 66,
    question:
      "When troubleshooting an IPsec VPN, you see packets incrementing in the 'pkts encaps' counter, but the 'pkts decaps' counter remains at 0. What does this suggest?",
    options: [
      "The VPN is functioning perfectly.",
      "Your router is encrypting and sending traffic, but the remote peer is either not receiving it or failing to send encrypted traffic back.",
      "The ACL is denying all traffic.",
      "Phase 1 has failed.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If you are encapsulating (encrypting) but not decapsulating (decrypting), traffic is only flowing one way. This could be due to routing issues on the return path, ISP blocking ESP/UDP 500, or a mismatched crypto ACL on the remote side.",
  },
  {
    id: 67,
    question: "What is the purpose of the 'crypto isakmp key' command?",
    options: [
      "To set the symmetric encryption algorithm.",
      "To define the Pre-Shared Key (PSK) and the peer IP address for Phase 1 authentication.",
      "To apply the crypto map.",
      "To set the DH group.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'crypto isakmp key [password] address [peer-ip]' command tells the router which password to use when attempting to authenticate with a specific remote peer during Phase 1.",
  },
  {
    id: 68,
    question: "In an IPsec VPN, what happens when the SA lifetime expires?",
    options: [
      "The VPN permanently shuts down.",
      "The routers seamlessly renegotiate a new SA with fresh keys before the old one expires.",
      "The router reboots.",
      "Traffic is sent in cleartext.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IPsec SAs have a configured lifetime (in seconds or kilobytes). Before expiration, IKE quietly negotiates a new SA to ensure uninterrupted, secure traffic flow with fresh keys.",
  },
  {
    id: 69,
    question:
      "What happens if Peer A has a Phase 2 lifetime of 3600 seconds and Peer B has a lifetime of 86400 seconds?",
    options: [
      "Phase 2 will fail to negotiate.",
      "The SA will negotiate successfully and use the shorter lifetime (3600 seconds).",
      "The SA will negotiate successfully and use the longer lifetime.",
      "The tunnel will flap continuously.",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "Unlike Phase 1 (where lifetimes must match exactly in some implementations), Phase 2 negotiation will succeed, and both peers will agree to use the shortest proposed lifetime.",
  },
  {
    id: 70,
    question:
      "A company wants a hub-and-spoke VPN topology where spoke routers do not need static IP addresses. Which VPN technology natively supports dynamic spoke IPs?",
    options: [
      "Standard Site-to-Site IPsec with crypto maps.",
      "DMVPN (Dynamic Multipoint VPN).",
      "L2TPv3.",
      "Point-to-point GRE.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "DMVPN allows spoke routers to have dynamic IP addresses (like DHCP or PPPoE from an ISP) because spokes actively register their current IP with the static hub using NHRP.",
  },
  {
    id: 71,
    question:
      "Which encryption standard is currently mandated by the US Government (Suite B) for top-secret information over VPNs?",
    options: ["DES", "3DES", "AES-256", "RC4"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "AES (Advanced Encryption Standard), specifically with 256-bit keys, is the modern cryptographic standard required for securing highly sensitive communications.",
  },
  {
    id: 72,
    question:
      "What is the primary vulnerability of using a Pre-Shared Key (PSK) compared to Digital Certificates?",
    options: [
      "PSKs are slower to process.",
      "PSKs do not support AES.",
      "If the PSK is weak or shared among many peers, it is vulnerable to brute-force attacks and compromises the entire group.",
      "PSKs cannot be used with IKEv2.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "PSKs rely on humans creating strong passwords. If the password is weak or leaked, anyone can authenticate. Certificates are uniquely tied to the device and mathematically nearly impossible to brute-force.",
  },
  {
    id: 73,
    question:
      "Which command would you use to verify if NHRP has successfully registered spoke IPs on a DMVPN Hub?",
    options: [
      "show ip route",
      "show crypto isakmp sa",
      "show ip nhrp",
      "show dmvpn status",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "The 'show ip nhrp' command displays the NHRP cache, mapping the logical tunnel IP addresses of the spokes to their physical public IP addresses.",
  },
  {
    id: 74,
    question:
      "What type of VPN would you deploy to securely connect two OSPF networks over the internet using standard Cisco IOS?",
    options: [
      "SSL Clientless VPN",
      "IPsec Tunnel Mode without GRE",
      "GRE over IPsec or IPsec VTI",
      "PPTP",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "OSPF uses multicast. Native IPsec does not support multicast. Therefore, you must use GRE over IPsec or an IPsec VTI to encapsulate the OSPF multicast packets.",
  },
  {
    id: 75,
    question:
      "When configuring a crypto map, what does the 'set peer' command define?",
    options: [
      "The local router's IP address.",
      "The public IP address of the remote VPN gateway.",
      "The internal LAN subnet of the remote site.",
      "The routing protocol.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'set peer' command explicitly defines the physical destination IP address that the router should send the encrypted packets to.",
  },
  {
    id: 76,
    question:
      "If an attacker captures ESP packets on the internet, which of the following can they read in cleartext?",
    options: [
      "The original source and destination LAN IP addresses.",
      "The TCP/UDP port numbers of the payload.",
      "The new public IP header and the ESP SPI.",
      "The payload data.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "In IPsec Tunnel mode, the entire original packet (private IPs, ports, data) is encrypted. The attacker can only see the new outer public IP header and the ESP header (which contains the SPI and Sequence Number).",
  },
  {
    id: 77,
    question: "What is an 'AnyConnect Profile'?",
    options: [
      "A hardware component in a firewall.",
      "An XML file pushed to the client dictating VPN behavior (e.g., auto-reconnect, trusted network detection).",
      "The encryption algorithm used.",
      "A routing table.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "The AnyConnect profile is an XML file managed on the VPN gateway and downloaded by the client. It controls the UI and behavior of the client application.",
  },
  {
    id: 78,
    question:
      "What is the function of the 'tunnel source' command in a GRE configuration?",
    options: [
      "It specifies the physical interface or IP address that the tunnel will use to source encapsulated packets.",
      "It specifies the internal LAN subnet.",
      "It defines the encryption key.",
      "It specifies the destination public IP.",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "The 'tunnel source' command tells the router which interface (e.g., GigabitEthernet0/0) or public IP address to use as the source IP in the new GRE/IP header.",
  },
  {
    id: 79,
    question:
      "In an IPsec VPN, what does the 'clear crypto session' command do?",
    options: [
      "It clears the routing table.",
      "It tears down all active Phase 1 and Phase 2 IPsec connections.",
      "It erases the crypto configuration.",
      "It clears NAT translations.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "This command forcibly drops all active VPN tunnels, which is useful for forcing routers to renegotiate after a configuration change.",
  },
  {
    id: 80,
    question:
      "Which of the following describes 'Tunnel Mode' ESP encapsulation?",
    options: [
      "[Original IP][ESP Header][Data]",
      "[New IP][ESP Header][Original IP][Data][ESP Trailer][ESP Auth]",
      "[ESP Header][New IP][Data]",
      "[Original IP][Data][ESP Auth]",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "In Tunnel mode, a completely new IP header is prepended. The ESP header follows, then the original IP packet (encrypted), followed by the ESP trailer (encrypted), and the ESP Auth trailer (unencrypted).",
  },
  {
    id: 81,
    question:
      "Which of the following describes 'Transport Mode' ESP encapsulation?",
    options: [
      "[Original IP][ESP Header][Data][ESP Trailer][ESP Auth]",
      "[New IP][ESP Header][Data]",
      "[ESP Header][Original IP][Data]",
      "[Original IP][New IP][Data]",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "In Transport mode, the original IP header is kept intact. The ESP header is inserted *after* the original IP header and *before* the Layer 4 payload.",
  },
  {
    id: 82,
    question:
      "You want to configure OSPF over a DMVPN. Which OSPF network type should you configure on the mGRE tunnel interface to ensure proper DR/BDR election and neighbor discovery?",
    options: [
      "Point-to-Point",
      "Broadcast or Non-Broadcast",
      "Loopback",
      "Point-to-Multipoint",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "DMVPN is a multi-access network. For OSPF, you typically configure it as Broadcast (if relying on multicast mapping) or Point-to-Multipoint, ensuring the Hub becomes the DR.",
  },
  {
    id: 83,
    question:
      "In DMVPN, why is it critical that the Hub router does NOT change the next-hop attribute when advertising EIGRP routes to Spokes in Phase 2/3?",
    options: [
      "To save bandwidth.",
      "To force all traffic through the hub.",
      "So that Spokes know the actual IP of the destination Spoke, allowing direct Spoke-to-Spoke tunnels.",
      "To prevent routing loops.",
    ],
    correctAnswer: 2,
    difficulty: "hard",
    explanation:
      "By disabling 'next-hop-self' on the Hub, Spokes learn routes with the next-hop pointing to the remote Spoke's tunnel IP. This allows NHRP to map that IP to a public IP and build a direct tunnel.",
  },
  {
    id: 84,
    question:
      "Which phase of IKEv1 involves exchanging the Diffie-Hellman public values?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Quick Mode"],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "The DH mathematical exchange occurs during Phase 1 to generate the shared secret key used to protect the ISAKMP management tunnel.",
  },
  {
    id: 85,
    question:
      "What is the purpose of the 'match address' command inside a crypto map?",
    options: [
      "To match the peer's IP address.",
      "To bind the crypto map to a physical interface.",
      "To associate the crypto ACL that defines the 'interesting traffic' to be encrypted.",
      "To match the transform set.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "The 'match address [ACL_NUMBER]' command links the Access Control List to the crypto map, telling the router exactly which packets trigger the IPsec encryption.",
  },
  {
    id: 86,
    question:
      "Which of the following protocols is essentially obsolete due to a lack of encryption, often replaced by IPsec or OpenVPN?",
    options: [
      "PPTP (Point-to-Point Tunneling Protocol)",
      "IKEv2",
      "SSTP",
      "WireGuard",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "PPTP is a legacy Microsoft protocol. Its authentication and encryption (MPPE) have been mathematically cracked and it is considered highly insecure.",
  },
  {
    id: 87,
    question:
      "When configuring a Cisco ASA firewall for Remote Access VPN, which feature assigns IP addresses to connecting clients?",
    options: [
      "DHCP Snooping",
      "Local IP Address Pool",
      "NAT Pool",
      "VLAN Interface",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A Local IP Address Pool is defined on the ASA and referenced in the Tunnel Group/Group Policy to hand out virtual private IPs to AnyConnect clients.",
  },
  {
    id: 88,
    question:
      "What does the 'tunnel destination' command do on a standard point-to-point GRE interface?",
    options: [
      "Specifies the internal LAN subnet of the remote site.",
      "Specifies the public IP address of the remote router where the GRE packets should be sent.",
      "Specifies the routing protocol.",
      "Specifies the encryption key.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "The 'tunnel destination' provides the outer IP address used in the encapsulation header, allowing the internet to route the GRE packet to the remote peer.",
  },
  {
    id: 89,
    question:
      "You have a GRE tunnel interface configured, but you forgot to configure an IP routing protocol or static route over it. Can the LANs communicate?",
    options: [
      "Yes, GRE routes automatically.",
      "Yes, if IPsec is enabled.",
      "No, the router does not know to send LAN traffic into the tunnel interface.",
      "No, the tunnel will remain down.",
    ],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "A tunnel interface acts like any physical interface. Without a routing protocol or static route directing traffic to the tunnel interface, the router will simply drop the packets or send them out the default gateway unencapsulated.",
  },
  {
    id: 90,
    question:
      "Which of the following describes 'Asymmetric Routing' in a VPN scenario?",
    options: [
      "Using RSA keys.",
      "When a packet takes one encrypted tunnel to reach a destination, but the return packet takes a different path or tunnel, often causing stateful firewalls to drop the traffic.",
      "Using different encryption algorithms for Phase 1 and Phase 2.",
      "Routing IPv4 in one direction and IPv6 in the other.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "Asymmetric routing occurs when paths diverge. Firewalls track TCP states; if a firewall sees a SYN-ACK return packet but never saw the original SYN (because it went over a different tunnel), it drops it.",
  },
  {
    id: 91,
    question: "What is an IPsec 'Lifetime' measured in?",
    options: [
      "Seconds and Kilobytes",
      "Minutes and Packets",
      "Hours and Megabytes",
      "Days and Sessions",
    ],
    correctAnswer: 0,
    difficulty: "easy",
    explanation:
      "IPsec SA lifetimes can be configured based on time (default is typically 3600 or 86400 seconds) and/or volume of data (in kilobytes).",
  },
  {
    id: 92,
    question:
      "Which algorithm ensures that an attacker has not modified an ESP packet in transit?",
    options: ["AES", "Diffie-Hellman", "HMAC-SHA or HMAC-MD5", "RSA"],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "HMACs (Hash-based Message Authentication Codes) like SHA or MD5 generate a hash value attached to the packet. The receiver recalculates the hash; if it matches, the packet is unaltered.",
  },
  {
    id: 93,
    question:
      "In a site-to-site VPN, you ping the remote LAN from your local router's CLI, but the ping fails. However, PCs on the LAN can ping the remote site successfully. Why?",
    options: [
      "The router's ping uses its public outbound interface IP as the source, which is not permitted in the Crypto ACL. PCs use the private LAN IP, which is permitted.",
      "Routers cannot ping through VPNs.",
      "The ICMP protocol is blocked by ESP.",
      "The NAT-T port is incorrect.",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "By default, a router sources pings from the exit interface (public IP). The Crypto ACL expects traffic from the private LAN. To test from the router, you must use an extended ping sourced from the LAN interface (e.g., 'ping 10.1.1.1 source g0/1').",
  },
  {
    id: 94,
    question:
      "Which IKEv2 component replaces the IKEv1 Main Mode and Quick Mode structure?",
    options: [
      "IKE_SA_INIT and IKE_AUTH",
      "ISAKMP_START and IPSEC_BUILD",
      "PHASE1_INIT and PHASE2_INIT",
      "DH_EXCHANGE and KEY_EXCHANGE",
    ],
    correctAnswer: 0,
    difficulty: "hard",
    explanation:
      "IKEv2 streamlines the process using pairs of exchanges: IKE_SA_INIT (negotiates crypto and DH) followed by IKE_AUTH (authenticates peers and creates the first IPsec SA).",
  },
  {
    id: 95,
    question:
      "What happens if the ESP protocol (Protocol 50) is blocked by an ISP firewall?",
    options: [
      "Phase 1 will fail.",
      "Phase 1 and Phase 2 negotiate successfully (via UDP 500), but actual data traffic will not pass through the tunnel.",
      "The VPN falls back to GRE.",
      "The VPN falls back to SSL.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "IKE management uses UDP 500 and will succeed. But the encrypted data payload uses ESP (Protocol 50). If ESP is blocked, the tunnel looks 'up' but data gets blackholed.",
  },
  {
    id: 96,
    question:
      "How does NAT-T solve the problem of ESP being blocked by NAT routers?",
    options: [
      "It disables ESP and uses AH.",
      "It wraps the ESP packet inside a UDP header (Port 4500), allowing NAT devices to track the connection using port numbers.",
      "It changes the NAT router's configuration.",
      "It forces the use of IKEv2.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "NAT requires Layer 4 port numbers to map private IPs to public IPs. ESP is Layer 3 and lacks ports. NAT-T encapsulates ESP in UDP 4500, giving NAT the port numbers it needs.",
  },
  {
    id: 97,
    question: "Which of the following is true regarding SSL/TLS VPNs?",
    options: [
      "They require specialized client hardware.",
      "They operate at Layer 4-7, utilizing standard web encryption (TCP 443) which easily passes through most corporate firewalls.",
      "They are only used for site-to-site topologies.",
      "They cannot provide full Layer 3 access.",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "SSL/TLS VPNs are popular because outbound TCP 443 (HTTPS) is almost universally permitted through firewalls, making remote access highly reliable from anywhere.",
  },
  {
    id: 98,
    question: "What is the primary vulnerability of Split Tunneling?",
    options: [
      "It slows down the VPN connection.",
      "It allows a compromised remote client to act as a bridge between the public internet and the secure corporate network.",
      "It breaks DNS resolution.",
      "It causes asymmetric routing.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "If a user is simultaneously connected to the corporate LAN (via VPN) and a malicious public network, malware could potentially pivot through the user's machine directly into the corporate LAN.",
  },
  {
    id: 99,
    question:
      "You want to implement a highly scalable, hub-and-spoke VPN that supports multicast and dynamic spoke-to-spoke tunnels. What is the best Cisco solution?",
    options: [
      "Clientless SSL VPN",
      "Standard IPsec with Crypto Maps",
      "DMVPN",
      "GETVPN",
    ],
    correctAnswer: 2,
    difficulty: "easy",
    explanation:
      "DMVPN (Dynamic Multipoint VPN) is specifically engineered for scalable hub-and-spoke networks, natively supporting dynamic spoke-to-spoke tunnels and routing protocols via mGRE.",
  },
  {
    id: 100,
    question:
      "Which command reveals the translated NAT IP address and port if NAT-T is active on an IPsec session?",
    options: [
      "show crypto ipsec sa",
      "show crypto isakmp sa detail",
      "show ip nat translations",
      "show crypto map",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "The 'show crypto isakmp sa detail' command displays the peer's actual IP and the translated IP/port if a NAT device altered it during transit.",
  },
  {
    id: 101,
    question:
      "What is the primary function of an IPsec Virtual Tunnel Interface (VTI)?",
    options: [
      "To negotiate SSL connections.",
      "To provide a routable, logical interface for IPsec without the 24-byte overhead and complexity of GRE.",
      "To perform deep packet inspection.",
      "To replace DMVPN.",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "VTIs simplify IPsec configuration by acting as standard routable interfaces, supporting multicast and routing protocols natively, rendering crypto maps and GRE largely unnecessary for point-to-point links.",
  },
  {
    id: 1,
    question: "What is the primary purpose of a VPN?",
    options: [
      "To increase internet bandwidth",
      "To create a secure, encrypted tunnel over an untrusted network",
      "To replace physical routers in a network",
      "To filter malicious traffic from the internet",
    ],
    correctAnswer: 1,
    difficulty: "easy",
    explanation:
      "A VPN (Virtual Private Network) establishes an encrypted connection (tunnel) over a public network, providing confidentiality, integrity, and authentication for data in transit.",
  },
  {
    id: 222,
    question:
      "Which IPsec protocol provides encryption and authentication for the entire IP packet?",
    options: [
      "AH (Authentication Header)",
      "ESP (Encapsulating Security Payload)",
      "IKE (Internet Key Exchange)",
      "ISAKMP",
    ],
    correctAnswer: 1,
    difficulty: "hard",
    explanation:
      "ESP provides both encryption (confidentiality) and authentication (integrity) for the payload. AH only provides authentication without encryption. IKE handles key exchange.",
  },
  {
    id: 333,
    question:
      "What is the difference between IPsec tunnel mode and transport mode?",
    options: [
      "Tunnel mode encrypts the entire original IP packet; transport mode only encrypts the payload",
      "Transport mode creates a tunnel through NAT; tunnel mode does not",
      "Tunnel mode uses ESP; transport mode uses AH",
      "There is no difference; they are the same",
    ],
    correctAnswer: 0,
    difficulty: "medium",
    explanation:
      "In tunnel mode, a new IP header is added and the entire original packet is encrypted — used for site-to-site VPNs. Transport mode only encrypts the payload (Layer 4 and above).",
  },
  {
    id: 444,
    question: "What is a site-to-site VPN?",
    options: [
      "A VPN where individual end hosts connect to a remote network",
      "A VPN that connects entire networks, typically between routers at different locations",
      "A VPN that uses SSL/TLS instead of IPsec",
      "A VPN that only works over cellular networks",
    ],
    correctAnswer: 1,
    difficulty: "medium",
    explanation:
      "A site-to-site VPN connects two or more entire networks (e.g., branch to headquarters) through tunnel endpoints typically on routers or firewalls. End hosts are unaware of the VPN.",
  },
  {
    id: 555,
    question:
      "Which protocol establishes and manages IPsec security associations (SAs)?",
    options: ["ESP", "AH", "IKE", "SSL"],
    correctAnswer: 2,
    difficulty: "medium",
    explanation:
      "IKE (Internet Key Exchange) manages the negotiation of security associations, including mutual authentication and key exchange, for IPsec tunnels.",
  },
];
