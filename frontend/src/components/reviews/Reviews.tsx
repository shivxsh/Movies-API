import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from "../reviewForm/ReviewForm";
import { Movie } from '../home/Home';

interface Review {
    id: number;
    body: string;
}

interface Props {
    getMovieData: (movieId: string) => void;
    movie: Movie | null;
    reviews: Review[];
    setReviews: (reviews: Review[]) => void;
}

const Reviews = ({ getMovieData, movie, reviews, setReviews }: Props) => {
    const revText = useRef<HTMLTextAreaElement | null>(null);
    let params = useParams<{ movieId: string }>();
    const movieId = params.movieId;

    useEffect(() => {
        if (movieId) {
            getMovieData(movieId);
        }
    }, [movieId, getMovieData]);

    const addReview = async (e: React.FormEvent) => {
        e.preventDefault();

        if (revText.current) {
            const rev = revText.current.value;

            try {
                const response = await api.post("/api/v1/reviews", { reviewBody: rev, imdbId: movieId });

                const updatedReviews = [...reviews, { id: Date.now(), body: rev }];

                revText.current.value = "";

                setReviews(updatedReviews);
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="Movie Poster" />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                    {reviews?.map((r) => (
                        <Row key={r.id}>
                            <Col>{r.body}</Col>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </Row>
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews;
