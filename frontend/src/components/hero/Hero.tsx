import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

interface Movie {
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    genres: string[];
    poster: string;
    backdrops: string[];
    reviewIds: string[];
}

interface Props {
    movies: Movie[];
}

const Hero = ({ movies }: Props) => {
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className='movie-card-container'>
                                    <div className='movie-card'>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt="Movie Poster" />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero
