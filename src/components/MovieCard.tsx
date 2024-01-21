import { useState } from "react";
import Watermark from "../assets/watermark.svg";
import { Movie } from "../utils/types";
import "./MovieCard.css";

interface MovieCardProps {
    movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <>
            {hovered ? (
                <div
                    className="video-container"
                    style={{
                        position: "relative",
                        width: "600px" /* 16:9 Aspect Ratio */,
                        height: "100%",
                        transition: "all 0.4s ease",
                    }}
                >
                    <iframe
                        className="trailer-video"
                        onMouseLeave={() => setHovered(false)}
                        src="https://www.youtube.com/embed/5PSNL1qE6VY?autoplay=1&controls=1&mute=1&showinfo=0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <div
                    className="movie-card"
                    onMouseEnter={() => setHovered(true)}
                >
                    <img
                        className="video-thumbnail"
                        src={movie.Poster?.replace("http", "https")}
                        alt=""
                    />
                    <p className="video-title">{movie.Title}</p>
                    <img src={Watermark} alt="" className="video-watermark" />
                </div>
            )}
        </>
    );
}

export default MovieCard;
