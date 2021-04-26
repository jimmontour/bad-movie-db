import mongoose from 'mongoose'

const { Schema } = mongoose

const movieSchema = new Schema({
   title: String,
   description: String,
   year: Date,
   genre: String,
   tags: [String],
   selectedFile: String,
   rating: {
      type: Number,
      min : 1,
      max: 4,
      default: 3
   },
   createdAt: {
      type: Date,
      default: new Date()
   }
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
