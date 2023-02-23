import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import { Projects } from './pages/Projects.jsx';
import { Contact } from './pages/Contact.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Home } from './pages/Home.jsx';
import { CursorFancy } from './components/cursorFancy.jsx';

function App() {
    return (
        <div className="p-2 bg-black">
            <CursorFancy />
            <Router>
                <Navbar />
                <div className='min-h-screen'>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="*" element={<ErrorPage />}></Route>
                    </Routes>
                </div>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
