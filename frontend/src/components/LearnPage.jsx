import Quiz from './Quiz/Quiz'
import Hero from './Hero/Hero'
import Learn from './Learn/Learn'
import { useEffect } from 'react';

export default function LearnPage() {

  useEffect(() => {
      document.title = "TruthLens | Jak rozpoznać fake newsa";
    }, []);
  
  return (
    <>
        <Hero />
        <Learn />
        <Quiz />
    </>
  )
}
