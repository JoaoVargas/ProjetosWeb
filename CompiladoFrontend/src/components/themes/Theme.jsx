import { useEffect } from 'react';
import './Theme.css'
import useLocalStorage from './useLocalStorage';

const Theme = () => {
  const [ theme, setTheme ] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="project-theme" data-theme={theme}>
      <div className='project-theme-title'>
        <h1>Theme Toggler</h1>
      </div>
      <div className="container-theme">
        <button
        onClick={() => handleToggleTheme()}>
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Theme