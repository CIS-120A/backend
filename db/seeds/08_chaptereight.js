exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "4GL",
            definition: "Fourth-generation programming language; provides a graphical environment in which the programmer uses a combination of English-like instructions, graphics, icons, and symbols to create code.",
            chapter: 8
        },
        {
            term: "Access Control",
            definition: "Security measure that defines who can use a program or app, and what actions they can do within the program or app.",
            chapter: 8
        },
        {
            term: "Activation",
            definition: "A technique that some manufacturers use to ensure that you do not install a program or app on additional devices beyond what you have paid for. Activation usually is required upfront, or after a certain trial period, after which the program or app has limited functionality or stops working.",
            chapter: 8
        },
        {
            term: "Adaptive Development",
            definition: "The same as agile development.",
            chapter: 8
        },
        {
            term: "Agile Development",
            definition: "Software development method that incorporates flexibility in the goals and scope of the project; agile projects may evolve in phases, releasing components as they are finalized, and adding functionality as it is needed or requested by users.",
            chapter: 8
        },
        {
            term: "Analysis Phase",
            definition: "The initial phase of the software development life cycle, including reviewing and approving requests for the project, allocating resources, and forming a project team.",
            chapter: 8
        },
        {
            term: "Antispyware",
            definition: "A program that detects and removes spyware; also called antimalware.",
            chapter: 8
        },
        {
            term: "Antivirus",
            definition: "A program that locates and destroys viruses and other malware before they infect a device.",
            chapter: 8
        },
        {
            term: "App",
            definition: "Short for “application,” a computer program that performs specific tasks; also called a program.",
            chapter: 8
        },
         {
            term: "Application",
            definition: "Software that lets users perform specific tasks; also called a program or an app.",
            chapter: 8
        },
        {
            term: "Assembly Language",
            definition: "The second generation of programming languages; uses symbolic instruction codes, such as A for add, M for multiply, and L for load.",
            chapter: 8
        },
        {
            term: "Class",
            definition: "In object-oriented programming, a type of object that defines the format of the object and the actions an object can perform.",
            chapter: 8
        },
        {
            term: "Code Repository",
            definition: "Web-based tool programmers use to archive and host source code; often used by open source projects so that developers can access the parts of the code they want to modify.",
            chapter: 8
        },
        {
            term: "Compiler",
            definition: "A separate program that converts the entire source program into machine language before executing it.",
            chapter: 8
        },
        {
            term: "Copyright",
            definition: "An originator’s exclusive legal right to reproduce, publish, or sell intellectual property.",
            chapter: 8
        },
        {
            term: "Crash",
            definition: "Occurs when a program or app stops functioning correctly.",
            chapter: 8
        },
        {
            term: "Debugger",
            definition: "In programming, to find and correct an error in VBA code. In Excel, to find and correct errors in a worksheet.",
            chapter: 8
        },
        {
            term: "Design Phase",
            definition: "Using the data gathered during the feasibility study and detailed analysis to present a solution to the need or request.",
            chapter: 8
        },
         {
            term: "Development",
            definition: "The process of creating programs and apps from the idea stage to distribution to users.",
            chapter: 8
        },
        {
            term: "DevOps",
            definition: "A software development approach that encourages collaboration between the development and operations, produces programs quickly, and then offers continuous updates to increase the functionality of the program.",
            chapter: 8
        },
        {
            term: "Digital Rights Management (DRM)",
            definition: "A collection of technologies used by software publishers and trade groups to fight software piracy and prevent unauthorized copying of digital content; includes authentication, certificates of authenticity, encryption, and digital watermarks.",
            chapter: 8
        },
        {
            term: "Documentation",
            definition: "The unlocked portion of a worksheet where users are able to enter and change data.",
            chapter: 8
        },
        {
            term: "Feasibility",
            definition: "The measure of the suitability of the development process to the individual project at any given time.",
            chapter: 8
        },
        {
            term: "Freeware",
            definition: "Software that is copyrighted and provided at no cost, but the developer retains all rights to the product.",
            chapter: 8
        },
        {
            term: "Implementation Phase",
            definition: "A working model that demonstrates the functionality of the program or app.",
            chapter: 8
        },
        {
            term: "Integrated Development Environment (IDE)",
            definition: "Combines advanced code editing tools, debugging tools, and a graphical user interface to interact with file management tools, to simplify the process of developing websites and applications.",
            chapter: 8
        },
        {
            term: "Intellectual Property (IP)",
            definition: "Legal rights protecting those who create works such as photos, art, writing, inventions, and music.",
            chapter: 8
        },
         {
            term: "Interpreter",
            definition: "Translates and executes one statement in a program at a time. Interpreters do not produce or store object code. Each time the source program runs, the interpreter translates instructions statement by statement.",
            chapter: 8
        },
        {
            term: "License Agreement",
            definition: "Specifies the number of devices on which you can install the product, any expiration dates, and other restrictions.",
            chapter: 8
        },
        {
            term: "Machine Language",
            definition: "The first generation of programming languages; their instructions use a series of binary digits (0s and 1s).",
            chapter: 8
        },
        {
            term: "Malware",
            definition: "Malicious software, such as viruses and spyware, that can delete or corrupt files and gather personal information.",
            chapter: 8
        },
        {
            term: "Method",
            definition: "An action that an object can perform; procedures are often written to invoke methods in response to user actions.",
            chapter: 8
        },
        {
            term: "Native App",
            definition: "An app written for a specific operating system and installed on a computer or mobile device.",
            chapter: 8
        },
        {
            term: "Object",
            definition: "In object linking and embedding (OLE), the data to be exchanged between another document or program.",
            chapter: 8
        },
        {
            term: "Object-Oriented Programing (OOP)",
            definition: "A common method of programming that focuses on objects that represent real persons, events, or transactions, and the behavior and data associated with those objects.",
            chapter: 8
        },
        {
            term: "Open Source",
            definition: "Programs and apps (including operating systems) that have no restrictions from the copyright holder regarding modification and redistribution; users can add functionality and sell or give away their versions to others",
            chapter: 8
        },
         {
            term: "Patch",
            definition: "Software update that addresses a single issue.",
            chapter: 8
        },
        {
            term: "Piracy",
            definition: "Illegally copying software, movies, music, and other digital materials.",
            chapter: 8
        },
        {
            term: "Planning Phase",
            definition: "The set of activities used to build a program.",
            chapter: 8
        },
        {
            term: "Predictive Development",
            definition: "Software development that uses a linear, structured development cycle.",
            chapter: 8
        },
        {
            term: "Procedural Language",
            definition: "Third generation of programming languages that use a series of English-like words to write instructions, such as ADD for addition, or PRINT for printing.",
            chapter: 8
        },
        {
            term: "Program",
            definition: "A set of coded instructions written for a computer, such as an operating system program or an application program; also called an application or an app.",
            chapter: 8
        },
        {
            term: "Programming Language",
            definition: "A set of words, abbreviations, and symbols. A programmer or developer uses a programming language to create instructions for a program or app.",
            chapter: 8
        },
        {
            term: "Prototype",
            definition: "A working model that demonstrates the functionality of the program or app.",
            chapter: 8
        },
        {
            term: "Public Domain",
            definition: "An item, such as a photo, that is available and accessible to the public without requiring permission to use, and therefore not subject to copyright.",
            chapter: 8
        },
         {
            term: "Quality Assurance",
            definition: "Testing software and reporting any issues to the developers.",
            chapter: 8
        },
        {
            term: "Ransomware",
            definition: "A type of malware that prevents a user’s device from properly and fully functioning until a fee is paid. The ransomware embeds itself onto the computer in such a way that it cannot be bypassed, even by rebooting.",
            chapter: 8
        },
        {
            term: "Rapid Application Development (RAD)",
            definition: "Uses a condensed or shortened software development process to produce a quality product.",
            chapter: 8
        },
        {
            term: "Registration",
            definition: "Submitting your name and other personal information to the manufacturer or developer of software.",
            chapter: 8
        },
        {
            term: "Service Pack",
            definition: "A collection of software updates combined in one package.",
            chapter: 8
        },
        {
            term: "Shareware",
            definition: "Software that is copyrighted and distributed for free for a trial period, after which you must send payment to continue using the program.",
            chapter: 8
        },
        {
            term: "Software",
            definition: "The programs and apps that instruct the computer to perform tasks. Software processes data into meaningful information.",
            chapter: 8
        },
        {
            term: "Software as a Service (SaaS)",
            definition: "Software that is distributed online for a monthly subscription or an annual fee.",
            chapter: 8
        },
        {
            term: "Software Development Life Cycle (SDLC)",
            definition: "The set of activities used to build a program.",
            chapter: 8
        },
        {
            term: "Source Code Editor",
            definition: "A text editor designed for programming.",
            chapter: 8
        },
        {
            term: "Spyware",
            definition: "Software that tries to collect personal information or change computer settings without your consent.",
            chapter: 8
        },
        {
            term: "Support and Security Phase",
            definition: "Phase of the software development life cycle in which the new program or app is built and delivered to users.",
            chapter: 8
        },
        {
            term: "Syntax",
            definition: "A set of rules; used for functions in Excel, procedures in VBA, and queries and properties in Access.",
            chapter: 8
        },
        {
            term: "System Proposal",
            definition: "Using the data gathered during the feasibility study and detailed analysis to present a solution to the need or request.",
            chapter: 8
        },
        {
            term: "Testing",
            definition: "A process in which each app or program function is tested to ensure it works properly.",
            chapter: 8
        },
        {
            term: "Troubleshooting",
            definition: "The steps you take to identify and solve a problem, such as a crash.",
            chapter: 8
        },
        {
            term: "Updates",
            definition: "In Access, to add, change, and delete records in database tables to keep them current and accurate.",
            chapter: 8
        },
        {
            term: "Upgrade",
            definition: "New releases of the program or app, and may require an additional fee to enable the upgrade to install.",
            chapter: 8
        },
        {
            term: "User Experience (UX)",
            definition: "The focus on the user’s reaction to and interaction with a product, including its efficiency, effectiveness, and ease of use.",
            chapter: 8
        },
        {
            term: "Waterfall Method",
            definition: "A linear, structured software development cycle that takes each step individually and completes it before continuing to the next phase.",
            chapter: 8
        },
        {
            term: "Wireframe",
            definition: "A blueprint of different aspects of a program that also indicates how a user gets from one area of the program to another.",
            chapter: 8
        }
        ]);
};
