import "./Navbar.css";
import NetflixLogo from "../assets/netflix_logo.svg";
import NotificationIcon from "../assets/notification_icon.svg";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
    const [isMainPage, setIsMainPage] = useState<boolean>(false);

    useEffect(() => {
        checkPage(window.location.pathname);
    }, []);

    function checkPage(pathname: string) {
        if (pathname === "/" || pathname === "/browse") {
            setIsMainPage(true);
        } else {
            setIsMainPage(false);
        }
    }

    return (
        <header className="standard-space">
            <div className="header-left">
                <div className="logo-container">
                    <Link to={"/"} className="logo-link">
                        <img
                            className="logo"
                            src={NetflixLogo}
                            alt=""
                            onClick={() => checkPage("/")}
                        />
                    </Link>
                </div>

                <nav>
                    <ol>
                        <li>
                            <NavLink
                                to={"/browse"}
                                id="browse-link-id"
                                className={`${isMainPage ? "active" : ""}`}
                                onClick={() => checkPage("/browse")}
                            >
                                Browse
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/shows"}
                                onClick={() => checkPage("/shows")}
                            >
                                TV Shows
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/movies"}
                                onClick={() => checkPage("/movies")}
                            >
                                Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/new"}
                                onClick={() => checkPage("/new")}
                            >
                                New & Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/mylist"}
                                onClick={() => checkPage("/mylist")}
                            >
                                My List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/browsebylanguage"}
                                onClick={() => checkPage("/browsebylanguage")}
                            >
                                Browse by Languages
                            </NavLink>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="header-right">
                <button className="search-button"></button>
                {/* <input type="text" placeholder="Titles, people, genres" /> */}

                <NavLink to={"/kids"} onClick={() => checkPage("/kids")}>
                    Kids
                </NavLink>

                <img src={NotificationIcon} alt="" />

                <button className="profile-button">{":)"}</button>
            </div>
        </header>
    );
}

export default Navbar;
