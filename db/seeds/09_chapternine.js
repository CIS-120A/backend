exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "Absolute Reference",
            definition: "A cell reference that does not change when the formula containing that reference is moved to a new location.",
            chapter: 9
        },
        {
            term: "Attributes",
            definition: "In Access, property of an entity or a column in a table.",
            chapter: 9
        },
        {
            term: "Banner",
            definition: "A newsletter portion that contains the title and usually an issue information line; also called a nameplate.",
            chapter: 9
        },
        {
            term: "Client-Side Script",
            definition: "Script that runs in your browser to control a webpage’s behavior and often make it interactive; usually written in JavaScript.",
            chapter: 9
        },
        {
            term: "Code Editor",
            definition: "A type of text editor that has additional features to help write code accurately and efficiently.",
            chapter: 9
        },
        {
            term: "Content Management System (CMS)",
            definition: "A tool used to create a blog or website that you usually install or manage on your web server.",
            chapter: 9
        },
        {
            term: "Creative Commons",
            definition: "A non-profit organization that makes it easy for content creators to license and share their work by supplying easy-to-understand copyright licenses; the creator chooses the conditions under which the work can be used.",
            chapter: 9
        },
        {
            term: "CSS (Cascading Style Sheets)",
            definition: "Used to specify the format and appearance of content on webpages.",
            chapter: 9
        },
        {
            term: "Deprecated",
            definition: "A quality of a technology indicating that developers are discouraged from using it because a newer technology has been created to take its place.h",
            chapter: 9
        },
        {
            term: "Domain Registrar",
            definition: "An organization that sells and manages web domain names.",
            chapter: 9
        },
        {
            term: "Dynamic",
            definition: "In a multipage workbook, describes pagination represented by horizontal or vertical dashed lines, which indicate where pages print separately, and which adjust automatically when the workbook content changes.",
            chapter: 9
        },
        {
            term: "Embedded Styles",
            definition: "To place a copy of an object created in a source file into a destination file so that a one-way connection to the source program becomes part of the destination file; you can then edit the embedded object using the source program.",
            chapter: 9
        },
        {
            term: "External Link",
            definition: "Link to another website",
            chapter: 9
        },
        {
            term: "FTP (File Transfer Protocol) Client",
            definition: "App used to upload or download files between your local computer and a remote web server.",
            chapter: 9
        },
        {
            term: "HTML",
            definition: "A special language that software developers use to create and format webpage elements; stands for Hypertext Markup Language.",
            chapter: 9
        },
        {
            term: "Hyperlink",
            definition: "In Access, a data type for fields that store a link to a webpage, file, or email address.",
            chapter: 9
        },
        {
            term: "Inline Style",
            definition: "In HTML, a style attribute of most HTML tags.",
            chapter: 9
        },
        {
            term: "Integrated Development Environment (IDE)",
            definition: "Combines advanced code editing tools, debugging tools, and a graphical user interface to interact with file management tools, to simplify the process of developing websites and applications.",
            chapter: 9
        },
        {
            term: "JavaScript",
            definition: "A popular language for writing scripts that run in your browser to control a webpage’s behavior and often make it interactive.",
            chapter: 9
        },
        {
            term: "Local Computer",
            definition: "The computer storing files to publish to a server using an FTP client.",
            chapter: 9
        },
        {
            term: "One-Sided Tag",
            definition: "HTML 5 tag that does not require a closing tag.",
            chapter: 9
        },
        {
            term: "Plugin",
            definition: "Third-party program that extends the built-in functionality of an application or browser.",
            chapter: 9
        },
        {
            term: "Project",
            definition: "An organized set of tasks required to reach a goal.",
            chapter: 9
        },
        {
            term: "Publish",
            definition: "To share Excel workbook data on a network or on the web so that others can access it using a web browser.",
            chapter: 9
        },
        {
            term: "Relative Reference",
            definition: "A cell reference that changes when the formula containing that reference is moved to a new location",
            chapter: 9
        },
        {
            term: "Remote Web Server",
            definition: "A web server on the Internet.",
            chapter: 9
        },
        {
            term: "Responsive Design",
            definition: "A way to provide content so that it adapts appropriately to the size of the display on any device.",
            chapter: 9
        },
        {
            term: "Script",
            definition: "Programming code that performs a series of commands and can be embedded in a webpage.",
            chapter: 9
        },
        {
            term: "Scripting Language",
            definition: "Programming language used to code webpage scripts, such as Python, Java, JavaScript, PHP, Ruby, or C#.",
            chapter: 9
        },
        {
            term: "Search Engine Optimization (SEO)",
            definition: "Tools to allow search engines to better find or index your website.",
            chapter: 9
        },
        {
            term: "Server-Side Script",
            definition: "Script that runs on server, often to process data from an online form or interact with a database.",
            chapter: 9
        },
        {
            term: "Static",
            definition: "Describes webpage content that does not change very often.",
            chapter: 9
        },
        {
            term: "Style Sheet",
            definition: "External file that stores style information for a larger website to create a consistent appearance across all pages in the website.",
            chapter: 9
        },
        {
            term: "Tags",
            definition: "In HTML, codes used to identify or 'mark up' the content in a webpage such as, <p></p> tags to markup a paragraph.",
            chapter: 9
        },
        {
            term: "Text Editor",
            definition: "Third-party program that extends the built-in functionality of an application or browser.",
            chapter: 9
        },
        {
            term: "Uptime",
            definition: "A measure of the percent of time a website is “up” or online; indicator of a web host’s reliability.",
            chapter: 9
        },
        {
            term: "URL",
            definition: "An abbreviation for Uniform Resource Locator, which is a webpage address that identifies the location of the file on the Internet.",
            chapter: 9
        },
        {
            term: "Web Address",
            definition: "A unique address on the Internet where a webpage resides; also called a URL.",
            chapter: 9
        },
        {
            term: "Webpage",
            definition: "A specially formatted document that can contain text, graphics, sound, video, and links to other webpages.",
            chapter: 9
        },
        {
            term: "Website Analytics",
            definition: "A set of measurements that helps you to understand how people use your website.",
            chapter: 9
        },
        {
            term: "Website Builder",
            definition: "A way to provide content so that it adapts appropriately to the size of the display on any device.",
            chapter: 9
        },
        {
            term: "World Wide Web Consortium (W3C)",
            definition: "One of the leading organizations that set guidelines for the web and that work together to write web standards.",
            chapter: 9
        },
        {
            term: "XML",
            definition: "Short for Extensible Markup Language, a language used to mark up structured data so that it can be more easily shared between different computer programs; contains XML tags that identify field names and data.",
            chapter: 9
        },
        ]);
};
