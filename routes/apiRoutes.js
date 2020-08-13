const router = require("express").Router();
const workout = require("../models/workout");

module.exports = function(app){
    router.post("/api/workout", (req, res) => {
     workout.find()
     .then(data => {
        res.json(data)
     })
        .catch(err => {
        res.json(err)

     });
    });
};


    

// module.exports = function(app){
//     router.get("/api/transaction", (req, res) => {
//         Transaction.find{}

// then(dbTransaction => {
//     res.json(dbTransaction);
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// });




//   module.exports = router;
  

