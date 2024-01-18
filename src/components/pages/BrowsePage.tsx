import "./BrowsePage.css";
import { useRef, useState } from "react";
import SampleVideo from "../../assets/video.mp4";
import movies from "../../data/movies.json";
import MovieCard from "../MovieCard";
import ArrowLeft from "../../assets/arrow-left.svg";

function BrowsePage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoveredScroll, sethoveredScroll] = useState(false);

    const handleScroll = (direction: "left" | "right") => {
        const step = 500; // Adjust the step size as needed
        const container = containerRef.current!;
        const maxScroll = container.scrollWidth - container.clientWidth;

        let newScrollLeft;

        if (direction === "left") {
            newScrollLeft = scrollPosition - step;
            if (newScrollLeft < 0) {
                newScrollLeft = maxScroll;
            }
        } else {
            newScrollLeft = scrollPosition + step;
            if (newScrollLeft > maxScroll) {
                newScrollLeft = 0;
            }
        }

        container.scrollLeft = newScrollLeft;
        setScrollPosition(newScrollLeft);
    };

    return (
        <>
            <div className="billboard-container">
                <video className="billboard-video" autoPlay>
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
                    onClick={() => handleScroll("left")}
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
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                        {/* Duplicate the movies for infinite scrolling */}
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
                    onClick={() => handleScroll("right")}
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
