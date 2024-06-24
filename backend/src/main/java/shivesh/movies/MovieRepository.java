package shivesh.movies;

import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

//MongoRepository is an interface that provides all necessary CRUD operations for application building.
// Parameters: 1) Entity/Model class name. 2) Type of the ID that the entity uses.
@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {

    //This is a dynamic query, where we want to search for a movie using its imdbId.
    // Optional<> is used since this function could also return null.
    Optional<Movie> findMovieByImdbId(String imdbId);
}
