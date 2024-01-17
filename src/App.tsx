import "./general/reset.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import {
    BrowsePage,
    ShowsPage,
    MoviesPage,
    NewAndPopularPage,
    MyListPage,
    BrowseByLanguagePage,
    KidsPage,
} from "./components/pages";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<BrowsePage />}></Route>
                <Route path="/browse" element={<BrowsePage />}></Route>
                <Route path="/shows" element={<ShowsPage />}></Route>
                <Route path="/movies" element={<MoviesPage />}></Route>
                <Route path="/new" element={<NewAndPopularPage />}></Route>
                <Route path="/mylist" element={<MyListPage />}></Route>
                <Route
                    path="/browsebylanguage"
                    element={<BrowseByLanguagePage />}
                ></Route>
                <Route path="/kids" element={<KidsPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
