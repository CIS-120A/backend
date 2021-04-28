exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "Adware",
            definition: "A type of spyware that changes your browser settings to display advertisements.",
            chapter: 10
        },
        {
            term: "Authentication",
            definition: "The process of ensuring that the person requesting access to a computer or other resources is authentic, and not an imposter.",
            chapter: 10
        },
        {
            term: "Bandwidth",
            definition: "A term commonly used to describe the capacity of a communication channel.",
            chapter: 10
        },
        {
            term: "Body Area Network (BAN)",
            definition: "A form of personal area network that consists of small, lightweight biosensors implanted in the body.",
            chapter: 10
        },
        {
            term: "Bus Network",
            definition: "Wires on which data travels to and from the CPU.",
            chapter: 10
        },
        {
            term: "Cable Modem",
            definition: "Device that sends and receives digital data over a cable TV connection.",
            chapter: 10
        },
        {
            term: "Client",
            definition: "Network architecture in which one or more computers act as a server, and the other computers on the network request resources from the server.",
            chapter: 10
        },
        {
            term: "Client Server Network",
            definition: "Network architecture in which one or more computers act as a server, and the other computers on the network request resources from the server.",
            chapter: 10
        },
        {
            term: "Cloud Computing",
            definition: "Providing and using computer tools, such as software, via the Internet (or the cloud).",
            chapter: 10
        },
          {
            term: "Denial of Service (DoS) Attack",
            definition: "A type of attack, usually on a server, that is meant to overload the server with network traffic so that it cannot provide necessary services.",
            chapter: 10
        },
        {
            term: "Distributed Denial of Service (DDoS) Attack",
            definition: "A denial of service attack that uses multiple computers to attack a server or other network resource.",
            chapter: 10
        },
        {
            term: "DSL Modem",
            definition: "A broadband technology that creates a high-speed connection to the Internet through standard telephone lines.",
            chapter: 10
        },
        {
            term: "Encryption",
            definition: "A security method of “scrambling” information as it is transmitted over a network. Information is scrambled in such a way that it cannot be read unless the user possesses the “key” to unlock it back to a readable format.",
            chapter: 10
        },
        {
            term: "Ethernet",
            definition: "The most common network standard for wired networks.",
            chapter: 10
        },
        {
            term: "Evil Twin",
            definition: "A normal-looking yet fraudulent Wi-Fi network that allows hackers to capture personal information users transmit.",
            chapter: 10
        },
        {
            term: "Extranet",
            definition: "Allows outsiders (such as customers, vendors, and suppliers) to access an organization’s intranet.",
            chapter: 10
        },
        {
            term: "Firewall",
            definition: "A protective barrier between a computer or network and others on the Internet.",
            chapter: 10
        },
        {
            term: "Hub",
            definition: "A device that provides a central point for cables in a network, and transfers all data to all devices.",
            chapter: 10
        },
          {
            term: "Internet Peer-to-Peer (internet P2P) Network",
            definition: "A type of P2P network where users share files with each other over the Internet.",
            chapter: 10
        },
        {
            term: "Internet Service Provider (ISP)",
            definition: "A company that sells Internet access.",
            chapter: 10
        },
        {
            term: "Intranet",
            definition: "An internal network site used by a group of people who work together.",
            chapter: 10
        },
        {
            term: "Local Area Network (LAN)",
            definition: "A type of network installed to link multiple PCs together so they can share hardware and software resources.",
            chapter: 10
        },
        {
            term: "MAC Address",
            definition: "A unique hardware address identified for your computer or device.",
            chapter: 10
        },
        {
            term: "Malware",
            definition: "Malicious software, such as viruses and spyware, that can delete or corrupt files and gather personal information.",
            chapter: 10
        },
        {
            term: "Mesh Network",
            definition: "Network topology in which all devices interconnect with each other. If a single device on the network fails, the rest of the network will continue to function by communicating via an alternate route.",
            chapter: 10
        },
        {
            term: "Metropolitan Area Network (MAN)",
            definition: "A type of wide area network (WAN) that is operated by a city or county.",
            chapter: 10
        },
        {
            term: "Mobile Hotspot",
            definition: "Wireless network available in public places such as hotels, restaurants, and coffee shops.",
            chapter: 10
        },
          {
            term: "Modem",
            definition: "A device that sends and receives data over telephone or cable lines and is connected to your computer.",
            chapter: 10
        },
        {
            term: "Net Neutrality",
            definition: "The concept that one website has the same value or priority as other websites, resulting in equal, unrestricted access to each site.",
            chapter: 10
        },
        {
            term: "Network",
            definition: "A collection of two or more computers connected together to share resources.",
            chapter: 10
        },
        {
            term: "Network Architecture",
            definition: "Network topology in which all devices interconnect with each other. If a single device on the network fails, the rest of the network will continue to function by communicating via an alternate route.",
            chapter: 10
        },
        {
            term: "Network Attached Storage (NAS)",
            definition: "One or more hard drives that connect directly to a network and provide a centralized location for storing programs and data on large and small networks.",
            chapter: 10
        },
        {
            term: "Network Interface Card (NIC)",
            definition: "A device that connects a computer to a network.",
            chapter: 10
        },
        {
            term: "Network Standards",
            definition: "Specify the way computers access a network, the type(s) of hardware used, data transmission speeds, and the types of cable and wireless technology used.",
            chapter: 10
        },
        {
            term: "Network Topology",
            definition: "A broadband technology that creates a high-speed connection to the Internet through standard telephone lines.",
            chapter: 10
        },
        {
            term: "Peer-to-Peer (P2P) Network",
            definition: "A network architecture in which a small number of computers (often fewer than 10) communicate directly with one another and can share each other’s resources.",
            chapter: 10
        },
          {
            term: "Personal Area Network (PAN)",
            definition: "Network that connects personal digital devices within a range of approximately 30 feet, such as a smartwatch that connects to your cell phone.",
            chapter: 10
        },
        {
            term: "Phishing",
            definition: "An attempt to deceive you into revealing personal or financial information when you respond to an email message or visit a website.",
            chapter: 10
        },
        {
            term: "Protocol",
            definition: "A standardized procedure used by computers to exchange information.",
            chapter: 10
        },
        {
            term: "Ransomware",
            definition: "A type of malware that prevents a user’s device from properly and fully functioning until a fee is paid. The ransomware embeds itself onto the computer in such a way that it cannot be bypassed, even by rebooting.",
            chapter: 10
        },
        {
            term: "Ring Network",
            definition: "Network topology in which data travels from one device to the next in a sequential fashion; if one device on the network fails, network communication could cease to function. No longer common.",
            chapter: 10
        },
        {
            term: "Rootkit",
            definition: "Malware that gains administrator-level, or root-level, access to a computer or network without the system or users detecting its presence.",
            chapter: 10
        },
        {
            term: "Router",
            definition: "A device that directs traffic on a network and lets you share a single Internet connection among several computers.",
            chapter: 10
        },
        {
            term: "Server",
            definition: "A powerful, high-capacity computer you access using the Internet or other network; it stores files and “serves” them, that is, makes the files available to, users; usually grouped at a location called a data center.",
            chapter: 10
        },
        {
            term: "Social Engineering",
            definition: "A category of attacks that attempts to trick the victim into giving valuable information to the attacker. At its core, social engineering relies on an attacker’s clever manipulation of human nature in order to persuade the victim to provide information or take actions.",
            chapter: 10
        },
          {
            term: "Spyware",
            definition: "Software that tries to collect personal information or change computer settings without your consent.",
            chapter: 10
        },
        {
            term: "Star Network",
            definition: "Network topology in which each device on the network is attached to a central device such as a server or switch. If the central device fails, the other devices will be unable to communicate. If a connected device fails, all other devices will still be able to communicate.",
            chapter: 10
        },
        {
            term: "Strong Password",
            definition: "In Computer Concepts, a combination of letters, numbers, and/or symbols that unlocks access to protected electronic data that is a minimum of 15-20 characters in length.",
            chapter: 10
        },
        {
            term: "Switch",
            definition: "In a field in Word, a comman that follows \\*, \\#, \\@, or \\! and turns on or off certain features of a field.",
            chapter: 10
        },
        {
            term: "TCP/IP (Transmission Control Protocol / Internet Protocol",
            definition: "A unique number that identifies every computer on the Internet; consists of four sets of numbers from 0 to 255 separated by periods, or dots, as in 216.35.148.4.",
            chapter: 10
        },
        {
            term: "Trojan",
            definition: "Malware that hides inside another program, often one downloaded from the web.",
            chapter: 10
        },
        {
            term: "Virtual Private Network (VPN)",
            definition: "A private, secure path across a public network that allows authorized users secure access to a company or other network.",
            chapter: 10
        },
        {
            term: "Virus",
            definition: "In Computer Concepts, malicious computer code that reproduces itself on the same computer. Almost all viruses “infect” by inserting themselves into a computer file. When the file is opened, the virus is activated.",
            chapter: 10
        },
        {
            term: "Wide Area Network (WAN)",
            definition: "Network that connects devices in a large geographic region, such as a multinational company or national retail chain.",
            chapter: 10
        },
        {
            term: "Wi-Fi Hotspot",
            definition: "A unique number that identifies every computer on the Internet; consists of four sets of numbers from 0 to 255 separated by periods, or dots, as in 216.35.148.4.",
            chapter: 10
        },
        {
            term: "Wired Network",
            definition: "Sends signals and data through cables to connect to other network devices; tend to be more secure and transmit data faster than wireless networks.",
            chapter: 10
        },
        {
            term: "Wireless Network",
            definition: "A type of printer or other device that is connected to either a wired or wireless network to which you have access.",
            chapter: 10
        },
        {
            term: "Wireless Network Key",
            definition: "A broadband technology that uses infrared light or radio-frequency signals to communicate with devices that are physically connected to a network or the Internet.",
            chapter: 10
        },
        {
            term: "Worm",
            definition: "A collection of harmful computer code that spreads throughout a computer and/or network without requiring user interaction.",
            chapter: 10
        },
        {
            term: "Zombie",
            definition: "A device infected with malware that an attacker uses to control the device remotely.",
            chapter: 10
        },
        ]);
};
