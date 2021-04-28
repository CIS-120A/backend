exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "Alternative Text (alt text)",
            definition: "Descriptive text added to an object. Also called alt text.",
            chapter: 1
        },
        {
            term: "Americans with Disabilities Act (ADA)",
            definition: "Law that requires any company with 15 or more employees to make reasonable attempts to accommodate the needs of physically challenged workers.",
            chapter: 1
        },
        {
            term: "Artificial Intelligence (AI)",
            definition: "The technological use of logic and prior experience to simulate human intelligence.",
            chapter: 1
        },
        {
            term: "Audio Books",
            definition: "Reads aloud to the user instead of the user reading on a printed page or on the screen.",
            chapter: 1
        },
        {
            term: "Augmented Reality (AR)",
            definition: "A type of virtual reality that uses an image of an actual place or thing and adds digital information to it.",
            chapter: 1
        },
        {
            term: "BYOD (bring your own device)",
            definition: "Policy that enables employees to use their personal devices to conduct business.",
            chapter: 1
        },
        {
            term: "Chip-and-Pin Technology",
            definition: "An improvement in card technology that stores data on an embedded chip instead of a magnetic stripe.",
            chapter: 1
        },
        {
            term: "Computer",
            definition: "An electronic device, operating under the control of instructions stored in its own memory, that can accept data, process the data to produce information, and store the information for future use.",
            chapter: 1
        },
        {
            term: "Computer Literacy",
            definition: "Having a current knowledge and understanding of computers, mobile devices, the web, and related technologies.",
            chapter: 1
        },
        {
            term: "Computer-Aided Manufacturing (CAM)",
            definition: "Used by manufacturers to streamline production and ship products more quickly. With CAM, robots perform work that is too dangerous, detailed, or monotonous for people.",
            chapter: 1
        },
        {
            term: "Data",
            definition: "Raw facts, such as text or numbers",
            chapter: 1
        },
        {
            term: "Digital Assistants",
            definition: "Apps like Amazon’s Alexa or Apple’s Siri that use natural language processing to respond to your verbal commands or questions, using search technology to provide answers or perform a task, such as adding an item to a grocery list.",
            chapter: 1
        },
        {
            term: "Digital Citizen",
            definition: "Person familiar with how to use technology to become an educated and productive member of the digital world.",
            chapter: 1
        },
        {
            term: "Digital Divide",
            definition: "The gap between those who have access to technology and its resources and information, especially on the Internet, and those who do not.",
            chapter: 1
        },
        {
            term: "Digital Literacy",
            definition: "Having a current knowledge and understanding of computers, mobile devices, the web, and related technologies",
            chapter: 1
        },
        {
            term: "Embedded Computer",
            definition: "A computer that functions as one component in a larger product, and which has a specific purpose.",
            chapter: 1
        },
        {
            term: "Enterprise Computing",
            definition: "Refers to the use of technology by a company’s employees to meet the needs of a large business.",
            chapter: 1
        },
        {
            term: "Graphic Organizers",
            definition: "Software that enables a user to create an outline or structure of information.",
            chapter: 1
        },
        {
            term: "Green Computing",
            definition: "A practice that involves reducing electricity consumed and environmental waste generated when using computers, mobile devices, and related technologies.",
            chapter: 1
        },
        {
            term: "Hardware",
            definition: "The device itself and its components, such as wires, cases, switches, and electronic circuits.",
            chapter: 1
        },
        {
            term: "Individuals with Disabilities Education Act (IDEA)",
            definition: "U.S. law that requires that public schools purchase or acquire funding for adaptive technologies.",
            chapter: 1
        },
        {
            term: "Information",
            definition: "Data that has been processed to become meaningful.",
            chapter: 1
        },
        {
            term: "Information Technology (IT) department",
            definition: "Department in medium and large businesses responsible for ensuring that all the computer operations, mobile devices, and networks run smoothly.",
            chapter: 1
        },
        {
            term: "Integrated Circuits",
            definition: "Developed in the 1960s, packed the equivalent of thousands of vacuum tubes or transistors into a silicon chip about the size of your thumb.",
            chapter: 1
        },
        {
            term: "Intelligent Classroom",
            definition: "Classroom in which technology is used to facilitate learning and communication.",
            chapter: 1
        },
        {
            term: "Intelligent Workplace",
            definition: "Uses technology to enable workers to connect to the company’s network, communicate with each other, use productivity software and apps, meet via web conferencing, and more.",
            chapter: 1
        },
        {
            term: "Internet of Things (IoT)",
            definition: "An environment where processors are embedded in every product imaginable (things), and these things communicate with one another via the Internet or wireless networks.",
            chapter: 1
        },
        {
            term: "Kiosk",
            definition: "A freestanding booth usually placed in a public area that can contain a display device used to show information to the public or event attendees.",
            chapter: 1
        },
        {
            term: "Learning Management System (LMS)",
            definition: "Web-based sites where students can check their progress in a course, take practice tests, and exchange messages with the instructor or other students.",
            chapter: 1
        },
        {
            term: "Machine-to-Machine (M2M)",
            definition: "Using computers to monitor computer assembly lines and equipment.",
            chapter: 1
        },
        {
            term: "Microprocessor",
            definition: "The “brains” of a computer; a chip that contains a central processing unit.",
            chapter: 1
        },
        {
            term: "Mobile Health (mHealth)",
            definition: "Refers to healthcare professionals using smartphones or tablets to access health records stored in the cloud, and patients using digital devices to monitor their conditions and treatments.",
            chapter: 1
        },
        {
            term: "Natural Language Processing",
            definition: "A form of data input in which computers interpret and digitize spoken words or commands.",
            chapter: 1
        },
        {
            term: "Personal Computer (PC)",
            definition: "Computers designed for personal use, as opposed to commercial or industrial use.",
            chapter: 1
        },
        {
            term: "Robotics",
            definition: "The science that combines engineering and technology to create and program robots. Robots are useful in situations where it is impractical, dangerous, or inconvenient to use a human.",
            chapter: 1
        },
        {
            term: "Screen Reader",
            definition: "Technology that uses audio output to describe the contents of the screen.",
            chapter: 1
        },
        {
            term: "Smart Devices",
            definition: "A device that can communicate, locate, and predict; part of the Internet of Things (IoT).",
            chapter: 1
        },
        {
            term: "Software",
            definition: "The programs and apps that instruct the computer to perform tasks. Software processes data into meaningful information.",
            chapter: 1
        },
        {
            term: "Speech Recognition Programs",
            definition: "Software that helps a user to input data or information verbally.",
            chapter: 1
        },
        {
            term: "Telecommuting",
            definition: "Working from home.",
            chapter: 1
        },
        {
            term: "Transistors",
            definition: "Smaller, cheaper, and more reliable replacement for vacuum tubes in the second generation of computers.",
            chapter: 1
        },
        {
            term: "Vacuum Tubes",
            definition: "Cylindrical glass tubes that controlled the flow of electrons, used in the first generation of computers.",
            chapter: 1
        },
        {
            term: "Virtual Reality (VR)",
            definition: "The use of computers to simulate a real or imagined environment that appears as a three-dimensional (3-D) space.",
            chapter: 1
        }
    ])
};
