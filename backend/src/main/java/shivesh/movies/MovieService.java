package shivesh.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    // Autowired annotation instantiates the class for us
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
        //findAll() comes under the mongo repository class which we have extended.
        return movieRepository.findAll();
    }

    //The return type "Optional<Movie>" specifies that, the return type could also be "null" incase where id is not present in the repository.
    public Optional<Movie> singleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
