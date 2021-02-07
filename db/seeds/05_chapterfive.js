exports.seed = async function(knex) {
    await knex("flashcards").insert([
            {
                term: "absolute reference",
                definition: "A cell reference that does not change when the formula containing that reference is moved to a new location.",
                chapter: 5
            },
            {
                term: "animations",
                definition: "In PowerPoint, an effect applied to an object that makes the object appear, disappear, change, or move.",
                chapter: 5
            },
        {
            term: "Apache OpenOffice",
            definition: "An open source suite of productivity apps.",
            chapter: 5
        },
        {
            term: "app",
            definition: "Short for “application,” a computer program that performs specific tasks; also called a program.",
            chapter: 5
        },
        {
            term: "app store",
            definition: "An online store to help you locate and download apps for your mobile device.",
            chapter: 5
        },
        {
            term: "Apple iWork",
            definition: "A productivity suite for computers running macOS and iPhones and iPads running the iOS operating system.",
            chapter: 5
        },
        {
            term: "application software",
            definition: "Programs that help you perform specific tasks when using your computer or smartphone. They are also called software applications or apps.",
            chapter: 5
        },
        {
            term: "argument",
            definition: "In Excel and Access, and in Word tables, information necessary for a formula or function to calculate an answer.",
            chapter: 5
        },
        {
            term: "Big Data",
            definition: "Large and complex data sources that defy easy handling with traditional data processing methods.",
            chapter: 5
        },
        {
            term: "bitmap",
            definition: "A grid of square colored dots, called pixels, that form a picture; also, a file containing a graphic that consists of a bitmap.",
            chapter: 5
        },
        {
            term: "built-in functions",
            definition: "Features in spreadsheet apps that perform financial, mathematical, logical, date and time, and other calculations.",
            chapter: 5
        },
        {
            term: "cell",
            definition: "The box formed by the intersection of a column and a row.",
            chapter: 5
        },
        {
            term: "cell address",
            definition: "A cell’s location, expressed by its column letter and row number, such as A1.",
            chapter: 5
        },
        {
            term: "charts",
            definition: "A graphic that represents data using bars, columns, dots, lines, or other symbols to make the data easier to understand and to make it easier to see the relationships among the data.",
            chapter: 5
        },
        {
            term: "clip art",
            definition: "Premade pictures and symbols you can use in electronic documents.",
            chapter: 5
        },
        {
            term: "communications apps",
            definition: "Apps that provide tools for sharing or receiving information.",
            chapter: 5
        },
        {
            term: "conditional formatting",
            definition: "Special formatting that is applied if values meet specified criteria.",
            chapter: 5
        },
        {
            term: "controls",
            definition: "In Access, any form or report element such as a label, text box, or combo box. In Windows, an object used to manipulate a window or to use a program.",
            chapter: 5
        },
        {
            term: "cross-platform",
            definition: "Tools that developers can use to build apps that work on multiple platforms, rather than writing different code for Android or iPhone devices.",
            chapter: 5
        },
        {
            term: "database",
            definition: "A collection of data organized in a manner that allows access, retrieval, and use of that data.",
            chapter: 5
        },
        {
            term: "device management apps",
            definition: "Apps that provide tools for maintaining your computer or mobile device.",
            chapter: 5
        },
        {
            term: "documents",
            definition: "In Excel, to make notes about basic worksheet assumptions, complex formulas, or questionable data.",
            chapter: 5
        },
        {
            term: "document management tools",
            definition: "Tools that protect and organize files and let you share documents with others.",
            chapter: 5
        },
        {
            term: "Drawing apps",
            definition: "Apps that let you create simple, two-dimensional images, which are often vector graphics.",
            chapter: 5
        },
        {
            term: "field",
            definition: "In an Access or in an Excel table or PivotTable, a column containing a specific property for each record, such as a person, place, object, event, or idea.",
            chapter: 5
        },
        {
            term: "field name",
            definition: "In Access, Excel, Publisher, or in a Word table, a column label that describes a data field.",
            chapter: 5
        },
        {
            term: "filter",
            definition: "To specify a set of restrictions to only display specific database records, online images, or files.",
            chapter: 5
        },
        {
            term: "form",
            definition: "In Access, an object that provides an easy-to-use data entry screen that generally shows only one record at a time.",
            chapter: 5
        },
        {
            term: "format",
            definition: "The process of changing the appearance of text and objects.",
            chapter: 5
        },
        {
            term: "formulas",
            definition: "A mathematical statement in a spreadsheet or table cell that calculates a value using cell references, numbers, and arithmetic operators such as +, -, *, and /.",
            chapter: 5
        },
        {
            term: "function",
            definition: "A named operation that replaces the action of an arithmetic expression.",
            chapter: 5
        },
        {
            term: "G suite",
            definition: "Google’s web-based productivity applications for creating documents, spreadsheets, presentations, email, and calendars.",
            chapter: 5
        },
        {
            term: "graphics and media apps",
            definition: "Apps that allow you to interact with and edit digital media.",
            chapter: 5
        },
        {
            term: "insertion point",
            definition: "A blinking vertical line that appears when you click in a paragraph, cell or text box; indicating where new text or an object will be inserted.",
            chapter: 5
        },
        {
            term: "local applications",
            definition: "An application that runs from the hard drive of a local computer.",
            chapter: 5
        },
        {
            term: "macros",
            definition: "A named set of instructions written in the Visual Basic programming language that perform tasks automatically in a specified order.",
            chapter: 5
        },
        {
            term: "m-commerce",
            definition: "Also known as mobile commerce. These apps let you use your mobile device to make online purchases of goods and services.",
            chapter: 5
        },
        {
            term: "Microsoft Office 365",
            definition: "Microsoft’s productivity suite which includes word processing, spreadsheets, and presentation apps, as well as Microsoft Outlook for email, Microsoft OneNote for note taking, and Microsoft Access for databases.",
            chapter: 5
        },
        {
            term: "mobile apps",
            definition: "Apps that you access on a smartphone or tablet.",
            chapter: 5
        },
        {
            term: "mobile commerce",
            definition: "Also known as m-commerce. These apps let you use your mobile device to make online purchases of goods and services.",
            chapter: 5
        },
        {
            term: "mobile first design",
            definition: "A design principle centered on building apps to work on mobile devices first because these typically have more restrictions, such as smaller screens.",
            chapter: 5
        },
        {
            term: "name",
            definition: "A component of a function or formula that indicates what will occur. For example SUM is the name of a function.",
            chapter: 5
        },
        {
            term: "native app",
            definition: "An app written for a specific operating system and installed on a computer or mobile device.",
            chapter: 5
        },
        {
            term: "on-screen keyboard",
            definition: "A keyboard displayed on-screen that includes keys for typing text, numbers, and symbols.",
            chapter: 5
        },
        {
            term: "operators",
            definition: "A mathematical symbol used in a formula to combine different values, resulting in a single value that is displayed within the cell.",
            chapter: 5
        },
        {
            term: "page orientation",
            definition: "The direction in which content is printed on the page.",
            chapter: 5
        },
        {
            term: "paint apps",
            definition: "An app designed for drawing pictures, shapes, and other graphics with various onscreen tools, such as a text, pen, brush, eyedropper, and paint bucket.",
            chapter: 5
        },
        {
            term: "personal interest apps",
            definition: "Apps that give you tools to pursue your interests.",
            chapter: 5
        },
        {
            term: "photo and image editing apps",
            definition: "Apps that provide the capabilities of paint apps and let you enhance and modify existing photos and images.",
            chapter: 5
        },
        {
            term: "pivot tables",
            definition: "A spreadsheet table designed to create meaningful data summaries that analyze worksheets containing large amounts of data.",
            chapter: 5
        },
        {
            term: "pixels",
            definition: "Short for picture element, an individual point of color on a display screen or printout.",
            chapter: 5
        },
        {
            term: "platform-specific",
            definition: "Mobile apps designed for a specific operating system like Android or iPhone.",
            chapter: 5
        },
        {
            term: "portable apps",
            definition: "Apps that run from a removable storage device such as an external hard drive or flash drive, or from the cloud.",
            chapter: 5
        },
        {
            term: "presentation",
            definition: "A PowerPoint document that lets you create and deliver a dynamic, professional-looking message to an audience in the form of a slide show.",
            chapter: 5
        },
        {
            term: "presentation apps",
            definition: "An app that lets you create visual aids for presentations to communicate ideas, messages, and other information to a group.",
            chapter: 5
        },
        {
            term: "presentation software",
            definition: " software program used to organize and present information in the form of an electronic slide show.",
            chapter: 5
        },
        {
            term: "productivity apps",
            definition: "Apps for personal use that you may use to create documents, develop presentations, track appointments, or to stay organized.",
            chapter: 5
        },
        {
            term: "productivity suite",
            definition: "A collection of productivity apps such as Microsoft Office 365, Apple iWork, G Suite, or Apache OpenOffice.",
            chapter: 5
        },
        {
            term: "query",
            definition: "In Power BI or similar programs, a request for information from a data source.",
            chapter: 5
        },
        {
            term: "raster",
            definition: "Another name for bitmap images.",
            chapter: 5
        },
        {
            term: "read-only access",
            definition: "A way to share files so others may read the file, but cannot change it.",
            chapter: 5
        },
        {
            term: "records",
            definition: "In Access and Excel, a row of data in a table, representing a complete set of field values for a specific person, place, object, event, or idea; also called a tuple.",
            chapter: 5
        },
        {
            term: "relational database",
            definition: "A database that consists of a collection of tables that can be joined through a common field; each table contains information on a specific subject, stored in the same file.",
            chapter: 5
        },
        {
            term: "relational database management system (RDBMS)",
            definition: "A software program in which data is organized as a collection of tables, and relationships between tables are formed through a common field.",
            chapter: 5
        },
        {
            term: "relative reference",
            definition: "A cell reference that changes when the formula containing that reference is moved to a new location",
            chapter: 5
        },
        {
            term: "report",
            definition: "An Access object that creates a professional printout of data that may contain enhancements such as headers, footers, and calculations on groups of records.",
            chapter: 5
        },
        {
            term: "responsive design",
            definition: "A way to provide content so that it adapts appropriately to the size of the display on any device.",
            chapter: 5
        },
        {
            term: "scroll bars",
            definition: "Bars on the right edge (vertical scroll bar) and bottom edge (horizontal scroll bar) of a document window that let you view a document that is too large to fit on the screen at once.",
            chapter: 5
        },
        {
            term: "server",
            definition: "A powerful, high-capacity computer you access using the Internet or other network; it stores files and “serves” them, that is, makes the files available to, users; usually grouped at a location called a data center.",
            chapter: 5
        },
        {
            term: "slide master",
            definition: "The template for the slides in a presentation that contains theme elements and styles, text formatting, the slide background, and other objects that appear on all the slides in the presentation.",
            chapter: 5
        },
        {
            term: "slide show",
            definition: "A term used to describe a PowerPoint presentation.",
            chapter: 5
        },
        {
            term: "sort",
            definition: "To organize data, such as table rows, items in a list, or records in a mail merge, in ascending or descending order, based on criteria such as date, alphabetical order, file size, or filename.",
            chapter: 5
        },
        {
            term: "sparklines",
            definition: "A quick, simple chart located within a cell that serves as a visual indicator of data trends.",
            chapter: 5
        },
        {
            term: "spreadsheet",
            definition: "A grid of cells that contain numbers and text; in Microsoft Excel, a spreadsheet is called a worksheet.",
            chapter: 5
        },
        {
            term: "SQL (Structured Query Language)",
            definition: "A language that provides a standardized way to request information from a relational database system.",
            chapter: 5
        },
        {
            term: "style",
            definition: "A named collection of formats that are stored together and can be applied to text or objects.",
            chapter: 5
        },
        {
            term: "tables",
            definition: "In Access, a collection of records for a single subject, such as all of the customer records; the fundamental building block of a relational database because it stores all of the data.",
            chapter: 5
        },
        {
            term: "template",
            definition: "In Computer Concepts, a document that has been preformatted for specific purpose (such as an invitation, a brochure, a flyer, a cover letter, or a resume).",
            chapter: 5
        },
        {
            term: "transitions",
            definition: "The manner in which a slide appears on the screen in place of the previous slide during a slide show.",
            chapter: 5
        },
        {
            term: "trendlines",
            definition: "A line that represents the general direction in a series of data.",
            chapter: 5
        },
        {
            term: "vector",
            definition: "A format for storing digital images that tend to be simple images composed of shapes, lines, and diagrams.",
            chapter: 5
        },
        {
            term: "video editing apps",
            definition: "Apps that allow you to modify a segment of a video, called a clip.",
            chapter: 5
        },
        {
            term: "view-only link",
            definition: "A link to a workbook on a OneDrive that can be viewed by users.",
            chapter: 5
        },
        {
            term: "web app",
            definition: "An app stored on an Internet server that can be run entirely in a web browser.",
            chapter: 5
        },
        {
            term: "web-based applications",
            definition: "In Computer Concepts, a program that you access over the Internet, in a browser on your computer or on your mobile device, also known as a web app.",
            chapter: 5
        },
        {
            term: "what-if analysis",
            definition: "A way to explore the impact that changing input values has on calculated values and output values",
            chapter: 5
        },
        {
            term: "word processing software",
            definition: "Commonly used software to create documents and reports, mailing labels, flyers, brochures, newsletters, resumes, letters, and more.",
            chapter: 5
        },
        {
            term: "workbook",
            definition: "A collection of related worksheets contained within a single file.",
            chapter: 5
        },
        {
            term: "worksheets",
            definition: "A single sheet in a workbook file that is laid out in in a grid of rows and columns",
            chapter: 5
        },
        ]
    )}
