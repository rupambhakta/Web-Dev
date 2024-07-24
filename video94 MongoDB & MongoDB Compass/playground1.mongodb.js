
use('sigma');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
    {
        "name": "Java",
        "price": 20000,
        "instructor": "Rupam"
    },
    {
        "name": "Python",
        "price": 18000,
        "instructor": "Sarah"
    },
    {
        "name": "JavaScript",
        "price": 22000,
        "instructor": "John"
    },
    {
        "name": "C++",
        "price": 25000,
        "instructor": "Emily"
    },
    {
        "name": "Ruby",
        "price": 19000,
        "instructor": "Michael"
    },
    {
        "name": "HTML/CSS",
        "price": 15000,
        "instructor": "Anna"
    },
    {
        "name": "SQL",
        "price": 17000,
        "instructor": "David"
    },
    {
        "name": "React",
        "price": 23000,
        "instructor": "Michelle"
    },
    {
        "name": "Angular",
        "price": 21000,
        "instructor": "Daniel"
    },
    {
        "name": "Node.js",
        "price": 24000,
        "instructor": "Rachel"
    }
]
);


// Print a message to the output window.
console.log(`Done inserting data`);


