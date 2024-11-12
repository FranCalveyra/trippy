import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { RouteSelectionPage } from './stories/RouteSelection/RouteSelectionPage.tsx';
import ChatPage from "./stories/ChatPage/ChatPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RouteSelectionPage />} />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </Router>
    );
}

export default App;
