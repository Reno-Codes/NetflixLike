import Watermark from "../assets/watermark.svg";
import "./MovieCard.css";

interface Movie {
    Title: string;
    Images: string[];
    Year?: string;
    Runtime?: string;
    Genre?: string;
}

interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className="movie-card">
            <img className="video-thumbnail" src={movie.Images[0]} alt="" />
            <p className="video-title">{movie.Title}</p>
            <img src={Watermark} alt="" className="video-watermark" />
        </div>
    );
}

export default MovieCard;
