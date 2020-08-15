const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
});

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);
app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});
// const express = require("express");
// const mongoose = require("mongoose");

// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
//     useNewUrlParser: true,
//     useFindAndModify: false
// });
// // Routes
// app.use(require("./routes/apiRoutes.js"));
// app.use(require("./routes/htmlRoutes.js"))

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });