exports.seed = async function(knex) {
    await knex("flashcards").insert([
        {
            term: "back-end database",
            definition: "Part of a split database that contains table objects and is stored on a file server that all users can access.",
            chapter: 13
        },
        {
            term: "Big Data",
            definition: "Large and complex data sources that defy easy handling with traditional data processing methods.",
            chapter: 13
        },
        {
            term: "business intelligence (BI)",
            definition: "Software tools designed to extract useful information from big data.",
            chapter: 13
        },
        {
            term: "Confidentiality, Integrity, and Availability (CIA) triad",
            definition: "A classic security model that guides efforts to protect data from unauthorized access, protect data from unauthorized changes, and ensure data is accessible by authorized users when needed.",
            chapter: 13
        },
        {
            term: "dashboard",
            definition: "A data visualization tool such as Power View.",
            chapter: 13
        },
        {
            term: "data analytics",
            definition: "The analysis of data to detect patterns that improve business processes and answer questions related to strategic planning.",
            chapter: 13
        },
        {
            term: "data lake",
            definition: "A collection of both structured and unstructured data of diverse data formats.",
            chapter: 13
        },
        {
            term: "data validation",
            definition: "A process that sets cells so that the values they accept are restricted in terms of type and range of data.",
            chapter: 13
        },
        {
            term: "data warehouse",
            definition: "A type of database that serves as a central repository from other data sources and databases for the purpose of data analysis.",
            chapter: 13
        },
        {
            term: "database",
            definition: "A collection of data organized in a manner that allows access, retrieval, and use of that data.",
            chapter: 13
        },
        {
            term: "database administrator (DBA)",
            definition: "A trained professional who designs or manages databases.",
            chapter: 13
        },
        {
            term: "Database as a Service (DBaaS)",
            definition: "A type of cloud service that allows users to access a database remotely through a web browser.",
            chapter: 13
        },
        {
            term: "database management system (DBMS)",
            definition: "A software program that lets you create databases and then manipulate data in them.",
            chapter: 13
        },
        {
            term: "field",
            definition: "In an Access or in an Excel table or PivotTable, a column containing a specific property for each record, such as a person, place, object, event, or idea.",
            chapter: 13
        },
        {
            term: "filter",
            definition: "To specify a set of restrictions to only display specific database records, online images, or files.",
            chapter: 13
        },
        {
            term: "foreign key",
            definition: "A primary key field from one table that you include as a field in a second table to form a relationship between the two tables.",
            chapter: 13
        },
        {
            term: "form",
            definition: "In Access, an object that provides an easy-to-use data entry screen that generally shows only one record at a time.",
            chapter: 13
        },
        {
            term: "front-end database",
            definition: "Part of a split database that contains the user interface and other objects, but not the tables that are needed for an application.",
            chapter: 13
        },
        {
            term: "high availability",
            definition: "A characteristic of a computing resource that identifies the percentage of time the resource functions reliably.",
            chapter: 13
        },
        {
            term: "index",
            definition: "In Access, a database object that is created based on a field or combination of fields. Also, a field property that keeps track of the order of the values in the field, and a list that relates field values to the records that contain those values.",
            chapter: 13
        },
        {
            term: "input mask",
            definition: "A field property that provides a visual guide for users as they enter data.",
            chapter: 13
        },
        {
            term: "key-value database",
            definition: "A nonrelational database consisting of any number of key-value pairs for each record.",
            chapter: 13
        },
        {
            term: "many-to-many relationship",
            definition: "A relationship between two database tables that connects one or more records in one table with one or more records in the other table.",
            chapter: 13
        },
        {
            term: "nonrelational database",
            definition: "A highly scalable and highly available database type that is designed to store unstructured data. Also called NoSQL database.",
            chapter: 13
        },
        {
            term: "NoSQL database",
            definition: "A highly scalable and highly available database type that is designed to store unstructured data. Also called nonrelational database.",
            chapter: 13
        },
        {
            term: "one-to-many relationship",
            definition: "A relationship between two database tables that connects each record in one table with one or more records in the other table.",
            chapter: 13
        },
        {
            term: "one-to-one relationship",
            definition: "A relationship between two database tables that connects each record in one table with exactly one record in the other table.",
            chapter: 13
        },
        {
            term: "open source program",
            definition: "Programs and apps (including operating systems) that have no restrictions from the copyright holder regarding modification and redistribution",
            chapter: 13
        },
        {
            term: "primary key",
            definition: "The field in a database that contains unique information for each record; also called a unique identifier.",
            chapter: 13
        },
        {
            term: "query",
            definition: "n Access, an object that provides a spreadsheet-like view of data, similar to that in tables; it may provide the user with a subset of fields and/or records from one or more tables. Also, SQL commands that are used to retrieve data.",
            chapter: 13
        },
        {
            term: "record",
            definition: "In Access and Excel, a row of data in a table, representing a complete set of field values for a specific person, place, object, event, or idea; also called a tuple.",
            chapter: 13
        },
        {
            term: "relational database",
            definition: "A database that consists of a collection of tables that can be joined through a common field; each table contains information on a specific subject, stored in the same file.",
            chapter: 13
        },
        {
            term: "relational database management system (RDBMS)",
            definition: "A software program in which data is organized as a collection of tables, and relationships between tables are formed through a common field.",
            chapter: 13
        },
        {
            term: "relationship",
            definition: "In Power BI, the process by which two or more tables within a data table are connected.",
            chapter: 13
        },
        {
            term: "report",
            definition: "An Access object that creates a professional printout of data that may contain enhancements such as headers, footers, and calculations on groups of records.",
            chapter: 13
        },
        {
            term: "scalable",
            definition: "A characteristic of a computing resource that allows that resource to be increased or decreased as needed.",
            chapter: 13
        },
        {
            term: "sort",
            definition: "To organize data, such as table rows, items in a list, or records in a mail merge, in ascending or descending order, based on criteria such as date, alphabetical order, file size, or filename.",
            chapter: 13
        },
        {
            term: "SQL (Structured Query Language)",
            definition: "A language that provides a standardized way to request information from a relational database system.",
            chapter: 13
        },
        {
            term: "table",
            definition: "A small, flat computer with a touch-sensitive screen that accepts input from a digital pen, stylus, or your fingertip",
            chapter: 13
        }
    ])
}
