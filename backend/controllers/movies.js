import Movie from '../models/Movie.js'

export const getMovies = async (req, res) => {
   try {
   const postMovies = await Movie.find();
   res.status(200).json(postMovies);
   } catch (error) {
      res.status(404).json(error)
   }
}

export const addMovie = async (req, res) => {
   const movie = req.body;
   const newMovie = new Movie(movie)
   try {
      await newMovie.save()
      res.status(201).json(newMovie)
   } catch (error) {
      res.status(409).json(error)
   }
}

// Update movie

// Delete movie
