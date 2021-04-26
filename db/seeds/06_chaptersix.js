exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "address spoofing",
            definition: "An attack that changes the devices address so that data is sent to the attackers computer. ",
            chapter: 6
        },
        {
            term: "attackers",
            definition: "An individual who launches attacks against other users and their computers, AKA threat actor",
            chapter: 6
        },
        {
            term: "authentication",
            definition: "The process of ensuring that the person requesting access to a computer or other resource is authentic, and not an imposter",
            chapter: 6
        },
        {
            term: "biometric security",
            definition: "A way to verify your identity based on physical characteristics.",
            chapter: 6
        },
        {
            term: "cookie",
            definition: "A file created by a website and that stores information on your computer, such as your website preferences; also called a first-party cookie.",
            chapter: 6
        },
        {
            term: "cyberbullying",
            definition: "Bullying that takes place on technology devices.",
            chapter: 6
        },
        {
            term: "cyberstalking",
            definition: "The use of technology to stalk another person through email, text messages, phone calls, and other forms of communication.",
            chapter: 6
        },
        {
            term: "cyberterrorists",
            definition: "An individual who attacks a nation’s computer networks, like the electrical power grid, to cause disruption and panic among citizens.",
            chapter: 6
        },
        {
            term: "data backup",
            definition: "The process of copying files from a computer’s hard drive to be stored in a remote location.",
            chapter: 6
        },
        {
            term: "data mining",
            definition: "The process of sifting through big data to find the important questions that will yield fruitful results.",
            chapter: 6
        },
        {
            term: "decryption",
            definition: "The process of unlocking encrypted information back into a readable format.",
            chapter: 6
        },
        {
            term: "digital certificate",
            definition: "Code attached to a file that verifies the identity of the creator of the file.",
            chapter: 6
        },
        {
            term: "e-waste",
            definition: "Electronic waste from discarded digital devices. It often contains toxic metals such as lead and mercury.",
            chapter: 6
        },
        {
            term: "encryption",
            definition: "A security method of scrambling information as it is transmitted over a network, needs a key to unscramble",
            chapter: 6
        },
        {
            term: "ergonomics",
            definition: "An applied science that specifies the design and arrangement of items that you use so that you and the items interact efficiently and safely.",
            chapter: 6
        },
        {
            term: "hactivists",
            definition: "Attackers who are strongly motivated by principles or beliefs.",
            chapter: 6
        },
        {
            term: "hoax",
            definition: "A false warning, often contained in an email message that pretends to come from a valid source like the company’s IT department. Attackers use this method to break into computers.",
            chapter: 6
        },
        {
            term: "identity theft",
            definition: "Using someone’s personal information, such as their name, Social Security number, or credit card number, to commit financial fraud.",
            chapter: 6
        },
        {
            term: "insiders",
            definition: "The security threat to a company that comes from its own employees, contractors, and business partners.",
            chapter: 6
        },
        {
            term: "malware",
            definition: "Malicious software, such as viruses and spyware, that can delete or corrupt files and gather personal information.",
            chapter: 6
        },
        {
            term: "nation state actors",
            definition: "Government-sponsored attacker that launches computer attacks against their enemies.",
            chapter: 6
        },
        {
            term: "password",
            definition: "A string of uppercase and lowercase letters, numbers, and symbols that when entered correctly, allow you to open a password-protected database or to obtain access to a Window user’s account.",
            chapter: 6
        },
        {
            term: "password manager",
            definition: "A program that helps you create and store multiple strong passwords in single user “vault” file that is protected by one strong master password.",
            chapter: 6
        },
        {
            term: "phishing",
            definition: "In Computer Concepts, sending an email or displaying a web announcement that falsely claims to be from a legitimate enterprise in an attempt to trick the user into giving private information.",
            chapter: 6
        },
        {
            term: "privacy",
            definition: "The state or condition of being free from public attention to the degree that you determine.",
            chapter: 6
        },
        {
            term: "ransomware",
            definition: "A type of malware that prevents a user’s device from properly and fully functioning until a fee is paid. The ransomware embeds itself onto the computer in such a way that it cannot be bypassed, even by rebooting.",
            chapter: 6
        },
        {
            term: "repetitive strain injury (RSI)",
            definition: "Aches and pains associated with repeated and long-term usage of the devices.",
            chapter: 6
        },
        {
            term: "script kiddies",
            definition: "An individual who wants to attack computers, but lacks the knowledge of computers and networks needed to do so.",
            chapter: 6
        },
        {
            term: "social engineering",
            definition: "A category of attacks that attempts to trick the victim into giving valuable information to the attacker by means of clever manipulation.",
            chapter: 6
        },
        {
            term: "spam",
            definition: "Unwanted email messages sent from an unknown sender to many email accounts, usually advertising a product or service such as low-cost medication.",
            chapter: 6
        },
        {
            term: "strong password",
            definition: "n Computer Concepts, a combination of letters, numbers, and/or symbols that unlocks access to protected electronic data that is a minimum of 15-20 characters in length.",
            chapter: 6
        },
        {
            term: "surge protector",
            definition: "A device that protects computer equipment by absorbing electrical spikes, surges, or noise before they can reach the equipment.",
            chapter: 6
        },
        {
            term: "technology addiction",
            definition: "A behavioral hazard that occurs when a user is obsessed with using a technology device and cannot walk away from it without feeling extreme anxiety.",
            chapter: 6
        },
        {
            term: "Trojan",
            definition: "Malware that hides inside another program, often one downloaded from the web.",
            chapter: 6
        },
        {
            term: "two factor authentication (2FA)",
            definition: "A method that combines multiple types of authentication to increase security.",
            chapter: 6
        },
        {
            term: "uninterruptible power supply (UPS)",
            definition: "A device that maintains power to computer equipment in case of an interruption in the primary electrical source.",
            chapter: 6
        },
        {
            term: "virus",
            definition: "In Computer Concepts, malicious computer code that reproduces itself on the same computer.",
            chapter: 6
        },
        {
            term: "weak password",
            definition: "Short in length (less than 15 characters),uses a common word, a predictable sequence of characters, or personal information.",
            chapter: 6
        },
        {
            term: "Wi-Fi",
            definition: "A wireless data network technology that provides high-speed data connections that do not require a physical connection. It is used for mobile devices.",
            chapter: 6
        },
        {
            term: "wireless routers",
            definition: "This central connection device needed for a home-based Wi-Fi network, acts as the “base station” for the wireless devices, sending and receiving wireless signals between all devices as well as providing the “gateway” to the external Internet.",
            chapter: 6
        },
        {
            term: "worm",
            definition: "A collection of harmful computer code that spreads throughout a computer and/or network without requiring user interaction.",
            chapter: 6
        }
    ])
}