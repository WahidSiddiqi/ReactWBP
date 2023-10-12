import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-mode')

  return (
    <div>
      <Header />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

function changeTheme(themeBtn) {
  console.log(themeBtn);
}

export default App;
