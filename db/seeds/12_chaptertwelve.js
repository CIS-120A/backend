exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "Artificial Intelligence (AI)",
            definition: "The technological use of logic and prior experience to simulate human intelligence.",
            chapter: 12
        },
        {
            term: "Artificial Neural Network (ANN)",
            definition: "A mesh network of signals that apply multiple layers of processing to perform deep learning processes similarly to how the human brain functions.",
            chapter: 12
        },
        {
            term: "Chatbot",
            definition: "A feature on a website or app that uses AI technology to provide text-based support and communication services.",
            chapter: 12
        },
        {
            term: "Cloud Computing",
            definition: "Providing and using computer tools, such as software, via the Internet (or the cloud).",
            chapter: 12
        },
        {
            term: "Customer Relationship Management (CRM)",
            definition: "A collection of computer services that help companies customize their interactions with customers.",
            chapter: 12
        },
        {
            term: "Data Analytics",
            definition: "The analysis of data to detect patterns that improve business processes and answer questions related to strategic planning.",
            chapter: 12
        },
        {
            term: "Dataset",
            definition: "Incoming information provided to an AI system.",
            chapter: 12
        },
        {
            term: "e-Business",
            definition: "Any kind of business activity conducted over a network of some kind, such as the Internet.",
            chapter: 12
        },
        {
            term: "e-Commerce",
            definition: "Business transactions that occur over an electronic network such as the Internet.",
            chapter: 12
        },
        {
            term: "Infrastructure as a Service (IaaS)",
            definition: "A type of cloud service that allows customers to configure cloud-based networking infrastructure the way they want, such as routing, servers, operating systems, storage spaces, and security settings.",
            chapter: 12
        },
        {
            term: "Internet of Things (IoT)",
            definition: "An environment where processors are embedded in every product imaginable (things), and these things communicate with one another via the Internet or wireless networks.",
            chapter: 12
        },
        {
            term: "Machine Learning (ML)",
            definition: "A branch of AI that uses statistics to help machines learn from data, identify patterns, and make decisions to progressively improve their performance without much human intervention.",
            chapter: 12
        },
        {
            term: "Natural Language Processing (NLP)",
            definition: "A form of data input in which computers interpret and digitize spoken words or commands.",
            chapter: 12
        },
        {
            term: "Omnichannel",
            definition: "A marketing strategy that relies on multiple types of contact per customer, such as targeted ads on social media, paid results on search engines, or contacts by email or phone.",
            chapter: 12
        },
        {
            term: "On-Premises",
            definition: "Computer hardware in a local office or data center.",
            chapter: 12
        },
        {
            term: "Payment Card Industry Data Security Standard (PCI DSS)",
            definition: "A set of standards that applies to all merchants who use credit card services from any of the major credit card companies, such as Visa, Mastercard, Discover, and American Express.",
            chapter: 12
        },
        {
            term: "Platform as a Service (PaaS)",
            definition: "A type of cloud service that allows cloud customers to run their own applications without having to manage underlying servers.",
            chapter: 12
        },
        {
            term: "Private Cloud",
            definition: "Cloud technology running on hardware used by only a single organization.",
            chapter: 12
        },
        {
            term: "Public Cloud",
            definition: "Cloud technology running on hardware used by many organizations.",
            chapter: 12
        },
        {
            term: "Reinforcement Learning",
            definition: "An AI learning model that is best used when the “right” answer is not available but some answers are better than others. The machine attempts to optimize its performance given a certain set of standards.",
            chapter: 12
        },
        {
            term: "Robotic Process Automation (RPA)",
            definition: "Automatic processes running on servers that input or transfer data, such as transferring customer data from a call center system to a customer relationship management system.",
            chapter: 12
        },
        {
            term: "Smart Device",
            definition: "A device that can communicate, locate, and predict; part of the Internet of Things (IoT).",
            chapter: 12
        },
        {
            term: "Software as a Service (SaaS)",
            definition: "Software that is distributed online for a monthly subscription or an annual fee.",
            chapter: 12
        },
        {
            term: "Supervised Learning",
            definition: "An AI learning model that relies on a labeled training dataset so the machine can learn the “right” answers.",
            chapter: 12
        },
        {
            term: "Turing Test",
            definition: "A test scenario posed by Alan Turing to determine when an AI system has become sufficiently advanced to sound as natural as a human.",
            chapter: 12
        },
        {
            term: "Unique Selling Proposition (USP)",
            definition: "A statement about how a company and its products are different and better than the competition’s.",
            chapter: 12
        },
        {
            term: "Unsupervised Learning",
            definition: "An AI learning model that requires the machine to look for patterns and relationships in unlabeled training data and then categorize data according to those patterns.",
            chapter: 12
        },
        {
            term: "Wake Word",
            definition: "A key word that alerts an AI-powered personal assistant to record and interpret a spoken command.",
            chapter: 12
        },
        ]);
};
