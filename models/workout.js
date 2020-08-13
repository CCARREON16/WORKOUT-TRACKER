const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
  
    day: {
      type: Date,
      default: Date.now

  },
  excercises:  
  {
  type: {
    type: String,  
    trim: true,
    required: "enter excercise type"
  },
  name: {
      type: String,
      trim: true, 
      required: "enter a excercise name"
  },
  duration: {
    type: Number,
    trim: true, 
    required: "How many minutes was the duration of your workout?"

},
 weight: {
     type: Number,
     trim: true,
 },
  reps: {
    type: Number,
    trim: true,
},
sets: {
    type: Number,
    trim: true,
},
 distance: {
    type: Number,
    trim: true,
}
  }
}),

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;







  