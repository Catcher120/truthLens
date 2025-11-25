import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import LearnPage from './components/LearnPage';
import NotFound from './components/NotFound/NotFound';
import HomePage from './components/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
