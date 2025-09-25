import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./HomePage";
import { Routes, Route } from 'react-router-dom';
import NewsPage from "./NewsPage/NewsPage";
import NewsDetailPage from "./NewsPage/NewsDetailPage";
import DonatePage from "./DonatePage";

const App = () => (
    <>
        <Header />
        <Navigation />
        <main>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news-details" element={<NewsDetailPage />} />
                <Route path="/donate" element={<DonatePage />} />
            </Routes>
        </main>
        <Footer />
    </>

);

export default App;