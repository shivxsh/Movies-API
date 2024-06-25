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
                    movies.map((movie, index) => {
                        return (
                            <Paper elevation={3} key={index}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` } as React.CSSProperties}>
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
