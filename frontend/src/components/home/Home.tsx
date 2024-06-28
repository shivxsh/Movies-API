import Hero from '../hero/Hero';

export interface Movie {
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


const Home = ({ movies }: Props) => {
    return (
        <div>
            <Hero movies={movies} />
        </div>
    )
}

export default Home
