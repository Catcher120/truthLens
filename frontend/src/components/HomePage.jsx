import Main from './Main'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useEffect } from 'react';

export default function HomePage() {

  useEffect(() => {
    document.title = "TruthLens | Sprawdź wiargodność tekstu";
  }, []);
  
  return (
    <div>
        <Main />
    </div>
  )
}
