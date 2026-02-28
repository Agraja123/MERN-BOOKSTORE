import {  Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import BookDetailedPage from "./pages/BookDetailedPage";
import { Toaster } from "react-hot-toast";
const App= () => {
    return (
            <div className="App">
                <Toaster position="top-center" />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/book/:id" element={<BookDetailedPage />} />
                </Routes>
            </div>
        
    );
}

// Make sure this is a default export
export default App;