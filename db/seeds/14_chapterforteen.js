exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "Acceptable Use Policy (AUP)",
            definition: "A document that lists guidelines and repercussions of use of the Internet and other digital company resources, including network storage, and email servers.",
            chapter: 14
        },
        {
            term: "Accessibility",
            definition: "The practice of removing barriers that may prevent individuals with disabilities from interacting with data or an app. In relation to digital content, term used to refer to content that is adaptable or available to users who require assistance.",
            chapter: 14
        },
        {
            term: "Alternative Text (alt text)",
            definition: "Text that provides descriptions for all visual elements or non-text objects in an electronic document or webpage.",
            chapter: 14
        },
         {
            term: "Catfishing",
            definition: "A deliberate attempt to mislead people about your identify by creating a fake online profile",
            chapter: 14
        },
        {
            term: "Code of Conduct",
            definition: "Part of an AUP that includes rules against causing harm to others, misuse or unauthorized access of another person’s files or data, protection of intellectual property, stealing, software piracy, and social considerations.",
            chapter: 14
        },
        {
            term: "Cyberbullying",
            definition: "Bullying that takes place on technology devices like cell phones, computers, and tablets using online social media platforms, public online forums, gaming sites, text messaging, or email. Cyberbullying includes sending, posting, or sharing negative, harmful, mean-spirited, and usually false content about another person.",
            chapter: 14
        },
         {
            term: "Data Breach",
            definition: "Any unauthorized collection or distribution of data.",
            chapter: 14
        },
        {
            term: "Digital Citizen",
            definition: "Person familiar with how to use technology to become an educated and productive member of the digital world.",
            chapter: 14
        },
        {
            term: "Digital Citizenship",
            definition: "The ethical, legal, and productive use of technology.",
            chapter: 14
        },
         {
            term: "Digital Detox",
            definition: "A period of time during which an individual refrains from using technology.",
            chapter: 14
        },
        {
            term: "Digital Divide",
            definition: "The gap between those who have access to technology and its resources and information, especially on the Internet, and those who do not.",
            chapter: 14
        },
        {
            term: "Digital Ethics",
            definition: "The set of legal and moral guidelines that govern the use of technology, including computers, mobile devices, information systems, databases, and more.",
            chapter: 14
        },
         {
            term: "Digital Footprint",
            definition: "The records of everything you do online; can be nearly impossible to completely erase.",
            chapter: 14
        },
        {
            term: "Digital Inclusion",
            definition: "The movement to ensure that all users, regardless of economic or geographic constraints, have access to the devices, data, and infrastructure required to receive high-speed, accurate, reliable information.",
            chapter: 14
        },
        {
            term: "Digital Lifestyle",
            definition: "Living in a way that involves using a variety of technologies for work and play.",
            chapter: 14
        },
         {
            term: "Digital Literacy",
            definition: "Having a current knowledge and understanding of computers, mobile devices, the web, and related technologies",
            chapter: 14
        },
        {
            term: "Distracted Driving",
            definition: "Driving a vehicle while focusing on other activities, typically involving an electronic device such as a cell phone.",
            chapter: 14
        },
        {
            term: "e-Waste",
            definition: "The waste caused from disposing of unwanted electronic devices and materials.",
            chapter: 14
        },
         {
            term: "Eye Strain",
            definition: "Eye fatigue by spending too much time looking at devices; makes eyes itchy, sore, or dry, and can cause headaches.",
            chapter: 14
        },
        {
            term: "Hoax",
            definition: "A false warning, often contained in an email message, that pretends to come from a valid source like the company’s IT department. Attackers use this method to break into computers",
            chapter: 14
        },
        {
            term: "Internet of Things (IoT)",
            definition: "An environment where processors are embedded in every product imaginable (things), and these things communicate with one another via the Internet or wireless networks.",
            chapter: 14
        },
         {
            term: "Netiquette",
            definition: "The rules of Internet etiquette.",
            chapter: 14
        },
        {
            term: "Plagiarize",
            definition: "Taking someone else’s work and passing it off as your own.",
            chapter: 14
        },
        {
            term: "Repetitive Strain Injuries (RSI)",
            definition: "Aches and pains associated with repeated and long-term usage of the devices.",
            chapter: 14
        },
         {
            term: "Smart Devices",
            definition: "A device that can communicate, locate, and predict; part of the Internet of Things (IoT).",
            chapter: 14
        },
        {
            term: "Technology Addiction",
            definition: "A condition in which a person is obsessed with using technology and feels anxiety when away from devices.",
            chapter: 14
        },
        {
            term: "Text Neck",
            definition: "Tightness or discomfort in the neck due to looking down at your phone or device for long periods.",
            chapter: 14
        },
         {
            term: "Wiki",
            definition: "A collaborative website where you and your colleagues can modify and publish content on a webpage.",
            chapter: 14
        },
        ]);
};
