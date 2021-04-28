exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "3D Secure",
            definition: "A standard protocol for securing credit card transactions over the Internet.",
            chapter: 2
        },
        {
            term: "Address Bar",
            definition: "In Computer Concepts, the part of a browser window that displays the location of the current webpage.",
            chapter: 2
        },
        {
            term: "app",
            definition: "Short for “application,” a computer program that performs specific tasks; also called a program.",
            chapter: 2
        },
        {
            term: "application",
            definition: "Software that lets users perform specific tasks; also called a program or an app.",
            chapter: 2
        },
        {
            term: "blogs",
            definition: "Short for web log, an informal website consisting of date- or time-stamped articles, or posts, in a diary or journal format.",
            chapter: 2
        },
        {
            term: "Boolean operators",
            definition: "A character, word, or symbol that focuses a web search. Also called a search operator.",
            chapter: 2
        },
        {
            term: "breadcrumbs",
            definition: "A step in the path you follow to display a webpage",
            chapter: 2
        },
        {
            term: "browser",
            definition: "A program, such as Microsoft Edge, that is designed to display webpages.",
            chapter: 2
        },
        {
            term: "business-to-business (B2B)",
            definition: "E-commerce model in which businesses transfer goods, services, or information between businesses.",
            chapter: 2
        },
        {
            term: "business-to-consumer (B2C)",
            definition: "E-commerce model in which businesses provide goods and services to consumers; the most widespread example is online shopping.",
            chapter: 2
        },
        {
            term: "cache",
            definition: "A holding area where your browser keeps a copy of each webpage you view. This temporary storage area helps speed up processing time.",
            chapter: 2
        },
        {
            term: "citation",
            definition: "In a research paper, a reference to a source; usually in parentheses at the end of a sentence.",
            chapter: 2
        },
        {
            term: "citation style",
            definition: "In a formal reference to a published work such as a book, journal, magazine, or website, the sequence of elements and the punctuation between them; common citation styles include MLA, APA, or Chicago.",
            chapter: 2
        },
        {
            term: "consumer-to-consumer (C2C)",
            definition: "E-commerce model in which consumers provide goods and services to other consumers; the most widespread example of this is online auctions.",
            chapter: 2
        },
        {
            term: "content aggregator",
            definition: "A website that gathers, organizes, and then distributes web content.",
            chapter: 2
        },
        {
            term: "cookies",
            definition: "A file created by a website and that stores information on your computer, such as your website preferences; also called a first-party cookie.",
            chapter: 2
        },
        {
            term: "copyright",
            definition: "An originator’s exclusive legal right to reproduce, publish, or sell intellectual property.",
            chapter: 2
        },
        {
            term: "crawlers",
            definition: "Software that combs the web to find webpages and add new data about them to a database. Also called spider.",
            chapter: 2
        },
        {
            term: "Creative Commons (CC)",
            definition: "A nonprofit organization that makes it easy for content creators to license and share their work by supplying easy-to-understand copyright licenses; the creator chooses the conditions under which the work can be used.",
            chapter: 2
        },
        {
            term: "digital certificate",
            definition: "In Computer Concepts, a technology used to verify a user’s identity by using a digital key and that has been “signed” by a trusted third party. This third party verifies the owner and that the key belongs to that owner.",
            chapter: 2
        },
        {
            term: "digital rights management (DRM)",
            definition: "A collection of technologies used by software publishers and trade groups to fight software piracy and prevent unauthorized copying of digital content; includes authentication, certificates of authenticity, encryption, and digital watermarks.",
            chapter: 2
        },
        {
            term: "domain name",
            definition: "In Computer Concepts, the portion of a URL or email address that identifies one or more IP addresses, such as cengage.com.",
            chapter: 2
        },
        {
            term: "e-commerce",
            definition: "Business transactions that occur over an electronic network such as the Internet.",
            chapter: 2
        },
        {
            term: "electronic storefront",
            definition: "An e-commerce website selling products or services.",
            chapter: 2
        },
        {
            term: "encryption",
            definition: "A security method of “scrambling” information as it is transmitted over a network. Information is scrambled in such a way that it cannot be read unless the user possesses the “key” to unlock it back to a readable format.",
            chapter: 2
        },
        {
            term: "ethics",
            definition: "The moral principles that govern people’s behavior; many schools and other organizations post codes of conduct for computer use, which can help you make ethical decisions while using a computer.",
            chapter: 2
        },
        {
            term: "fair use doctrine",
            definition: "Allows you to use a sentence or paragraph of text without permission if you include a citation to the original source.",
            chapter: 2
        },
        {
            term: "general search engine",
            definition: "A nonspecialized search engine designed to find general results; general search engines include Google, Bing, and Yahoo!",
            chapter: 2
        },
        {
            term: "hits",
            definition: "A list of matched results from an Internet search.",
            chapter: 2
        },
        {
            term: "home page",
            definition: "The main webpage around which a website is built that opens every time you start a browser.",
            chapter: 2
        },
        {
            term: "hyperlinks",
            definition: "In Access, a data type for fields that store a link to a webpage, file, or email address.",
            chapter: 2
        },
        {
            term: "Hypertext Transfer Protocol (HTTP)",
            definition: "The most common way to transfer information around the web; when the URL for a webpage starts with http://, the web browser uses this protocol for transferring the information.",
            chapter: 2
        },
        {
            term: "Hypertext Transfer Protocol Secure (HTTPS)",
            definition: "A protocol used to make a secure connection to a computer; identified by the “https” prefix in a URL and often used by banks and retail stores.",
            chapter: 2
        },
        {
            term: "index",
            definition: "In Access, a database object that is created based on a field or combination of fields. Also, a field property that keeps track of the order of the values in the field, and a list that relates field values to the records that contain those values.",
            chapter: 2
        },
        {
            term: "information literacy",
            definition: "The ability to find, evaluate, use, and communicate online information.",
            chapter: 2
        },
        {
            term: "intellectual property rights",
            definition: "Legal rights protecting those who create works such as photos, art, writing, inventions, and music.",
            chapter: 2
        },
        {
            term: "Internet",
            definition: "A global collection of millions of computers linked together to share information.",
            chapter: 2
        },
        {
            term: "Internet Engineering Task Force (IETF)",
            definition: "A nonprofit group that sets standards to allow devices, services, and applications to work together across the Internet.",
            chapter: 2
        },
        {
            term: "IP address",
            definition: "A unique number that identifies every computer on the Internet; consists of four sets of numbers from 0 to 255 separated by periods, or dots, as in 216.35.148.4.",
            chapter: 2
        },
        {
            term: "keywords",
            definition: "In Office, terms added to a file’s Document Properties that help locate the file in a search.",
            chapter: 2
        },
        {
            term: "media sharing site",
            definition: "A website that enables members to manage media such as photos, videos, and music.",
            chapter: 2
        },
        {
            term: "navigate",
            definition: "In Computer Concepts, to move from one webpage to another in a browser.",
            chapter: 2
        },
        {
            term: "navigation bar",
            definition: "In a browser, a set of buttons or hyperlinks that allows visitors to move to any page within a website.",
            chapter: 2
        },
        {
            term: "online social network",
            definition: "An online community where users can share their interests, ideas, stories, photos, music, and videos with other registered users via a social networking website, such as Facebook, Google Plus, Twitter, Instagram, or Snapchat.",
            chapter: 2
        },
        {
            term: "paraphrase",
            definition: "To restate an idea using different words from the original; paraphrasing someone else’s idea still constitutes plagiarism, which is claiming someone else’s idea as your own.",
            chapter: 2
        },
        {
            term: "plagiarism",
            definition: "To copy or use someone else’s work and claim it as your own.",
            chapter: 2
        },
        {
            term: "portal",
            definition: "A website that combines pages from many sources and provides access to those pages. Also called web portal.",
            chapter: 2
        },
        {
            term: "protocol",
            definition: "A standardized procedure used by computers to exchange information.",
            chapter: 2
        },
        {
            term: "public domain",
            definition: "An item, such as a photo, that is available and accessible to the public without requiring permission to use, and therefore not subject to copyright.",
            chapter: 2
        },
        {
            term: "query",
            definition: "In Access, an object that provides a spreadsheet-like view of data, similar to that in tables; it may provide the user with a subset of fields and/or records from one or more tables. Also, SQL commands that are used to retrieve data.",
            chapter: 2
        },
        {
            term: "search engines",
            definition: "In Computer Concepts, software used by search sites to locate relevant webpages by creating a simple query based on your search criteria and storing the collected data in a search database.",
            chapter: 2
        },
        {
            term: "search operators",
            definition: "A character, word, or symbol that focuses a web search. Also called a Boolean operator.",
            chapter: 2
        },
        {
            term: "search tool",
            definition: "An electronic tool that finds online information based on criteria you specify or selections you make.",
            chapter: 2
        },
        {
            term: "specialized search tools",
            definition: "A search tool that concentrates on specific resources, such as scholarly journals or the United States Congress.",
            chapter: 2
        },
        {
            term: "specialty search engine",
            definition: "A search engine that lets you search databases, news providers, podcasts, and other online information sources that general search engines do not always access.",
            chapter: 2
        },
        {
            term: "spiders",
            definition: "Software that combs the web to find webpages and add new data about them to the database. Also called crawler.",
            chapter: 2
        },
        {
            term: "start page",
            definition: "The main webpage around which a website is built or the webpage opens every time you start a browser. Also called a home page.",
            chapter: 2
        },
        {
            term: "subject directory",
            definition: "An online guide to subjects or websites, usually arranged in alphabetic order. Also called a web directory.",
            chapter: 2
        },
        {
            term: "top-level domain (TLD)",
            definition: "The three-letter extension after the period in a domain name, the TLD identifies the type of organization associated with the domain.",
            chapter: 2
        },
        {
            term: "Transport Layer Security (TLS)",
            definition: "Technology used to encrypt data that helps protect consumers and businesses from fraud and identity theft when conducting commerce on the Internet.",
            chapter: 2
        },
        {
            term: "uniform resource locator (URL)",
            definition: "The webpage address that identifies the location of the file on the Internet.",
            chapter: 2
        },
        {
            term: "usage rights",
            definition: "A right that indicates when you can use, share, or modify the images you find online.",
            chapter: 2
        },
        {
            term: "web",
            definition: "In Computer Concepts, a collection webpages located on computers around the world, connected through the Internet.",
            chapter: 2
        },
        {
            term: "web apps",
            definition: "An app stored on an Internet server that can be run entirely in a web browser.",
            chapter: 2
        },
        {
            term: "web directory",
            definition: "An online guide to subjects or websites, usually arranged in alphabetic order. Also called a subject directory.",
            chapter: 2
        },
        {
            term: "web portal",
            definition: "A website that combines pages from many sources and provides access to those pages. Also shortened to portal.",
            chapter: 2
        },
        {
            term: "web server",
            definition: "An Internet computer that stores webpages.",
            chapter: 2
        },
        {
            term: "webpage",
            definition: "A specially formatted document that can contain text, graphics, sound, video, and links to other webpages.",
            chapter: 2
        },
        {
            term: "website",
            definition: "A location on the World Wide Web that contains webpages linked together.",
            chapter: 2
        },
        {
            term: "wiki",
            definition: "A collaborative website where you and your colleagues can modify and publish content on a webpage.",
            chapter: 2
        },
        {
            term: "wildcard",
            definition: "A special symbol that substitutes for unknown characters in search text; the most common are the question mark (?), which stands for any single character, and the asterisk (*), which represents any group of characters.",
            chapter: 2
        },
        {
            term: "Word Stem",
            definition: "The base of a word, used in a web search to broaden a search.",
            chapter: 2
        },
        {
            term: "World Wide Web",
            definition: "A service consisting of websites located on computers around the world, connected through the Internet.",
            chapter: 2
        },
        {
            term: "World Wide Web Consortium (W3C)",
            definition: "One of the leading organizations that set guidelines for the web and that work together to write web standards.",
            chapter: 2
        },
    ]
)}
