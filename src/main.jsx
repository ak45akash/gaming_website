import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Preloader from './components/Preloader.jsx'

const Main = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3000);  // Preloader duration
  // }, []);

  return (
    <>
      {loading ? <Preloader onComplete={() => setLoading(false)} /> : <App />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
