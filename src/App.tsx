import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </RootLayout>
        </BrowserRouter>
    );
}

export default App;
