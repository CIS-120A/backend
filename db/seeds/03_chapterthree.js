exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "all-in-one computer",
            definition: "Similar to a desktop computer, but the monitor and system unit are housed together.",
            chapter: 3
        },
        {
            term: "arithmetic logic unit (ALU)",
            definition: "Responsible for performing arithmetic operations in the CPU.",
            chapter: 3
        },
        {
            term: "ASCII",
            definition: "In Computer Concepts, an 8-bit coding scheme, which means that 8 bits are used to represent uppercase and lowercase letters, mathematical operators, and logical operations.",
            chapter: 3
        },
        {
            term: "benchmark",
            definition: "A test run by a laboratory or other organization to determine processor speed and other performance factors.",
            chapter: 3
        },
        {
            term: "binary system",
            definition: "A number system that has two digits, 0 and 1.",
            chapter: 3
        },
        {
            term: "bit",
            definition: "(Short for binary digit), the smallest unit of data a computer can process.",
            chapter: 3
        },
        {
            term: "bus width",
            definition: "Determines the speed at which data in a computer travels, also referred to as word size.",
            chapter: 3
        },
        {
            term: "byte",
            definition: "A field size for Number fields that allows entries only from 0 to 255.",
            chapter: 3
        },
        {
            term: "cameras",
            definition: "Input devices that support adding pictures or videos to a computer",
            chapter: 3
        },
        {
            term: "central processing unit (CPU)",
            definition: "A complex integrated circuit that consists of millions of electronic parts and is primarily responsible for converting input (data) into meaningful output (information).",
            chapter: 3
        },
        {
            term: "clock speed",
            definition: "In Computer Concepts, the speed at which a processor can execute instructions. Clock speed either can be measured in megahertz (MHz) or gigahertz (GHz).",
            chapter: 3
        },
        {
            term: "cloud storage",
            definition: "Storing electronic files on the Internet, not on a local computer; often called storing data “in the cloud.”",
            chapter: 3
        },
        {
            term: "control unit",
            definition: "Manages the flow of instructions within the processor.",
            chapter: 3
        },
        {
            term: "cycle",
            definition: "The smallest unit of time a process can measure.",
            chapter: 3
        },
        {
            term: "dance pad",
            definition: "Game controller that is a flat, electronic device divided into panels that users press with their feet in response to instructions from the video game.",
            chapter: 3
        },
        {
            term: "desktop computer",
            definition: "Computer that typically consists of the system unit, monitor, keyboard, and mouse.",
            chapter: 3
        },
        {
            term: "device driver",
            definition: "A program that controls a device attached to your computer, such as a printer, monitor, or video card.",
            chapter: 3
        },
        {
            term: "digital pen",
            definition: "A small device, shaped like a pen, that you can use to draw, tap icons, or tap keys on an on-screen keyboard, similar to a stylus, but is more capable because it has programmable buttons.",
            chapter: 3
        },
        {
            term: "earbuds",
            definition: "Speakers that are small enough to place in your ears.",
            chapter: 3
        },
        {
            term: "External hard drives",
            definition: "Storage drive housed in a separate case, and typically connected to your computer using a USB cable.",
            chapter: 3
        },
        {
            term: "firmware",
            definition: "The instructions on the ROM chip.",
            chapter: 3
        },
        {
            term: "form factor",
            definition: "The shape and size of a computer.",
            chapter: 3
        },
        {
            term: "game controller",
            definition: "An input device you use when playing a video game.",
            chapter: 3
        },
        {
            term: "gamepad",
            definition: "Game controller held in both hands that controls the movement and actions of players or objects.",
            chapter: 3
        },
        {
            term: "hard drive",
            definition: "The most common storage medium on a computer; can be magnetic or solid state.",
            chapter: 3
        },
        {
            term: "headphones",
            definition: "Output device that consists of a pair of small listening devices that fit into a band placed over your ears.",
            chapter: 3
        },
        {
            term: "headsets",
            definition: "Includes one or more headphones for output, and a microphone for input.",
            chapter: 3
        },
        {
            term: "input device",
            definition: "Communicates instructions and commands to a computer. Common input devices are keyboard, mouse, stylus, scanner, microphone, and game controller.",
            chapter: 3
        },
        {
            term: "joystick",
            definition: "Game controller with a handheld vertical lever, mounted on a base, that you move in different directions to control the actions of the simulated vehicle or player.",
            chapter: 3
        },
        {
            term: "keyboard",
            definition: "Input device that contains not only characters such as letters, numbers, and punctuation, but also keys that can issue commands.",
            chapter: 3
        },
        {
            term: "laptop",
            definition: "A portable computer that is smaller than the average briefcase and light enough to carry comfortably; often called a notebook.",
            chapter: 3
        },
        {
            term: "microphone",
            definition: "Used to enter voice or sound data into a computer.",
            chapter: 3
        },
        {
            term: "mobile device",
            definition: "A portable or handheld computing device, such as a smartphone or a tablet, with a screen size of 10.1 inches or smaller.",
            chapter: 3
        },
        {
            term: "motherboard",
            definition: "A circuit board inside a computer that contains the microprocessor, the computer memory, and other internal devices.",
            chapter: 3
        },
        {
            term: "motion-sensing controller",
            definition: "Game controller that allows users to guide on-screen elements with air gestures.",
            chapter: 3
        },
        {
            term: "mouse",
            definition: "The most common type of pointing device used with computers.",
            chapter: 3
        },
        {
            term: "multi-core processors",
            definition: "Processor with multiple cores.",
            chapter: 3
        },
        {
            term: "multitouch screens",
            definition: "A display that can respond to multiple fingers touching the screen simultaneously.",
            chapter: 3
        },
        {
            term: "nonvolatile",
            definition: "Memory that does not lose its contents when power is removed.",
            chapter: 3
        },
        {
            term: "optical media",
            definition: "CDs, DVDs, and Blu-ray discs (BDs), use laser technology for storage and playback.",
            chapter: 3
        },
        {
            term: "output device",
            definition: "Conveys information from the computer to the user. Common output devices include displays, speakers, headphones, projectors, and printers.",
            chapter: 3
        },
        {
            term: "paging file",
            definition: "A file on a hard disk that Windows uses to hold parts of programs and data files that do not fit in RAM.",
            chapter: 3
        },
        {
            term: "peripheral device",
            definition: "A device such as a keyboard, mouse, printer, or speakers that can connected to and extend the capability of a computer.",
            chapter: 3
        },
        {
            term: "platform",
            definition: "The software, or operating system, a device uses.",
            chapter: 3
        },
        {
            term: "plug-and-play",
            definition: "In Computer Concepts, devices that begin functioning properly as soon as you connect them to your computer.",
            chapter: 3
        },
        {
            term: "pointing device",
            definition: "In Computer Concepts, a device used to point to and select specific objects on the computer screen. Examples of point devices include a mouse, touchpad, and trackball.",
            chapter: 3
        },
        {
            term: "port",
            definition: "A slot on the computer or device where you can attach a peripheral device.",
            chapter: 3
        },
        {
            term: "ower-on self test (POST)",
            definition: "At startup, a sequence that tests all computer components for proper operation.",
            chapter: 3
        },
        {
            term: "printer",
            definition: "Creates hard copy output on paper, film, and other media.",
            chapter: 3
        },
        {
            term: "processor cache",
            definition: "Stores frequently used data next to the processor so that it can easily and quickly be retrieved.",
            chapter: 3
        },
        {
            term: "projectors",
            definition: "Displays visual output from a computer on a large surface such as a wall or screen.",
            chapter: 3
        },
        {
            term: "random access memory (RAM)",
            definition: "The storage location that is part of every computer and that temporarily stores open apps and document data while a computer is on.",
            chapter: 3
        },
        {
            term: "read-only memory (ROM)",
            definition: "Permanently installed memory on your computer attached to the motherboard. The ROM chip contains the BIOS, which tells your computer how to start.",
            chapter: 3
        },
        {
            term: "restore (browser)",
            definition: "Returning an operating system or files to their default settings, or migrating back to the operating system’s previous version.",
            chapter: 3
        },
        {
            term: "scanner",
            definition: "A device that converts a paper image into an electronic file that you can open and work with on your computer.",
            chapter: 3
        },
        {
            term: "solid state drive (SSD)",
            definition: "A hard drive without moving parts, and is faster and more durable than magnetic drives.",
            chapter: 3
        },
        {
            term: "speakers",
            definition: "Output devices used to convey audio output, such as music, voice, sound effects, or other sounds.",
            chapter: 3
        },
        {
            term: "stylus",
            definition: "A pen-shaped digital tool for making selections and entering information on a touchscreen.",
            chapter: 3
        },
        {
            term: "surge suppressor",
            definition: "A device that prevents power fluctuations from damaging electronic components.",
            chapter: 3
        },
        {
            term: "swap file",
            definition: "Data that cannot fit in RAM and uses an area of the hard disk called virtual memory. Also called a paging file.",
            chapter: 3
        },
        {
            term: "tablet",
            definition: "A small, flat computer with a touch-sensitive screen that accepts input from a digital pen, stylus, or your fingertip",
            chapter: 3
        },
        {
            term: "touchpad",
            definition: "A flat surface that is touch-sensitive, and you move your finger around the touchpad to move the pointer on the screen.",
            chapter: 3
        },
        {
            term: "touchscreen",
            definition: "A display that lets you touch areas of the screen to interact with software.",
            chapter: 3
        },
        {
            term: "trackball",
            definition: "A stationary pointing device with a ball anchored inside a casing, as well as two or more buttons.",
            chapter: 3
        },
        {
            term: "Unicode",
            definition: "A coding systems that represent text and symbols in computers, communications equipment, and other devices that use text.",
            chapter: 3
        },
        {
            term: "uninterruptible power supply (UPS)",
            definition: "A device that maintains power to computer equipment in case of an interruption in the primary electrical source.",
            chapter: 3
        },
        {
            term: "USB hub",
            definition: "An external device that contains many USB ports.",
            chapter: 3
        },
        {
            term: "video card",
            definition: "A circuit board that processes image signals.",
            chapter: 3
        },
        {
            term: "virtual memory",
            definition: "In Computer Concepts, the capability of an operating system to temporarily store data on a storage medium until it can be “swapped” into RAM.",
            chapter: 3
        },
        {
            term: "voice synthesizer",
            definition: "Voice output that converts text to speech.",
            chapter: 3
        },
        {
            term: "volatile",
            definition: "Memory that loses its contents when power is removed.",
            chapter: 3
        },
        {
            term: "webcams",
            definition: "In Computer Concepts, a camera built-in to a computer, which is primarily used for videoconferencing, chatting, or online gaming.",
            chapter: 3
        },
        {
            term: "wheel",
            definition: "A type of game controller that mirrors the functionality of a steering wheel in a vehicle.",
            chapter: 3
        },
        {
            term: "word size",
            definition: "Determines the speed at which data in a computer travels, also referred to as bus width.",
            chapter: 3
        },
    ]
)}
