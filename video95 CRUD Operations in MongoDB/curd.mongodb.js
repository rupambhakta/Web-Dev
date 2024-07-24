// Crud operation
use("CrudDb")
console.log(db);
// Creating a collection
db.createCollection("courses")

//Insert one in db

// db.courses.insertOne({
//     name:"Harry web dev free couse",
//     price:0,
//     assignment:10,
//     project:45
// })

//Insert many in db

// db.courses.insertMany([
//     {
//       "name": "Harry web dev free course",
//       "price": 0,
//       "assignment": 10,
//       "project": 45
//     },
//     {
//       "name": "Harry's Coding Bootcamp",
//       "price": 0,
//       "assignment": 15,
//       "project": 50
//     },
//     {
//       "name": "Web Development Crash Course",
//       "price": 0,
//       "assignment": 8,
//       "project": 40
//     },
//     {
//       "name": "Free Web Development Workshop",
//       "price": 0,
//       "assignment": 12,
//       "project": 55
//     },
//     {
//       "name": "Intro to Web Design",
//       "price": 0,
//       "assignment": 5,
//       "project": 30
//     },
//     {
//       "name": "Web Development Fundamentals",
//       "price": 0,
//       "assignment": 20,
//       "project": 60
//     },
//     {
//       "name": "Web Development for Beginners",
//       "price": 0,
//       "assignment": 7,
//       "project": 35
//     },
//     {
//       "name": "HTML/CSS Basics",
//       "price": 0,
//       "assignment": 6,
//       "project": 25
//     },
//     {
//       "name": "Harry's Web Dev Crash Course",
//       "price": 0,
//       "assignment": 10,
//       "project": 48
//     },
//     {
//       "name": "Free Web Development Tutorial",
//       "price": 0,
//       "assignment": 9,
//       "project": 42
//     }
//   ]
//   )

/*Read*/

// let a = db.courses.find({price:0})
// console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({price:0})
// console.log(b);

/*Update*/

// db.courses.updateOne({ price: 0 }, { $set: { price: 100 } })

// db.courses.updateMany({ price: 0 }, { $set: { price: 55 }})

/* DELETE*/
db.courses.deleteMany({price:55})