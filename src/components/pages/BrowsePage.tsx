import "./BrowsePage.css";
import { useRef, useState } from "react";
import SampleVideo from "../../assets/video.mp4";
import movies from "../../data/movies.json";
import MovieCard from "../MovieCard";
import ArrowLeft from "../../assets/arrow-left.svg";
import { handleScroll } from "../../utils/MovieContainerUtils";

function BrowsePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoveredScroll, sethoveredScroll] = useState(false);

    return (
        <>
            <div className="billboard-container">
                <video className="billboard-video" autoPlay loop>
                    <source src={SampleVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div
                className="scroll-container"
                onMouseEnter={() => sethoveredScroll(true)}
                onMouseLeave={() => sethoveredScroll(false)}
            >
                <button
                    className="scroll-button-left"
                    onClick={() =>
                        handleScroll(
                            containerRef,
                            scrollPosition,
                            setScrollPosition,
                            "left"
                        )
                    }
                >
                    <img
                        className={`scroll-arrow ${hoveredScroll && "hovered"}`}
                        src={ArrowLeft}
                        alt=""
                    />
                </button>

                <div className="movies-container row-margin" ref={containerRef}>
                    <div className="category-container">
                        {movies.map((movie) => (
                            <div
                                className="movie-card-holder"
                                key={movie.imdbID}
                            >
                                <MovieCard movie={movie} />
                            </div>
                        ))}

                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.imdbID + "_duplicate"}
                                movie={movie}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className="scroll-button-right"
                    onClick={() =>
                        handleScroll(
                            containerRef,
                            scrollPosition,
                            setScrollPosition,
                            "right"
                        )
                    }
                >
                    <img
                        className={`scroll-arrow ${hoveredScroll && "hovered"}`}
                        src={ArrowLeft}
                        alt=""
                    />
                </button>
            </div>
        </>
    );
}

export default BrowsePage;
