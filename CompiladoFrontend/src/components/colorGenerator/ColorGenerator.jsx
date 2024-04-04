import { useState } from 'react';
import './ColorGenerator.css'

const ColorGenerator = () => {
  const [ color, setColor ] = useState('#ffffff');
  const [ searchHex, setsearchHex ] = useState('');
  const [ searchRgb, setsearchRgb ] = useState('');

  function handleColorGenerate() {
    const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    for (let i = 0; i< 6; i++) {
      color += range[Math.floor(Math.random()*range.length)]
    }

    setColor(color);
  }

  function translateHexRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return 'rgb('+ r + ',' + g + ',' + b + ')'
  }
  function translateRgbHex(rgb) {
    const regex = /\((\d+),\s*(\d+),\s*(\d+)\)/;
    const matches = regex.exec(rgb);

    if (!matches) {
      return null;
    }

    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      return null;
    }

    const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

    return `#${hex.toUpperCase()}`;

  }

  const handleChangeHex = (event) => {
    setsearchHex(event.target.value);
  };
  const handleChangeRgb = (event) => {
    setsearchRgb(event.target.value);
  };

  const handleSearchHexColor = () => {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

    if (regex.test(searchHex)) {
      setColor(searchHex)
      setsearchHex('')
    }
  };
  const handleSearchRgbColor = () => {
    const regex = /^(rgb)?\(?([01]?\d\d?|2[0-4]\d|25[0-5])(\W+)([01]?\d\d?|2[0-4]\d|25[0-5])\W+(([01]?\d\d?|2[0-4]\d|25[0-5])\)?)$/


    if (regex.test(searchRgb)) {
      setColor(translateRgbHex(searchRgb))
      setsearchRgb('')
    }
  };

  return (
    <div className="project-color">
      <div className='project-color-title'>
        <h1>Color Generator</h1>
      </div>
      <div className="container">
        <button
          onClick={() => handleColorGenerate()}
          >
          Generate Random Color 
        </button>
        <div 
          className="search-form">
          <input 
            onChange={ handleChangeHex }
            value={ searchHex }
            placeholder="#ffffff"
            />
          <button 
            onClick={ handleSearchHexColor }
            className=''>
              Search HEX
          </button>
        </div>
        <div 
          className="search-form">
          <input 
            onChange={ handleChangeRgb }
            value={ searchRgb }
            placeholder="rgb(255, 255, 255)"
            />
          <button 
            onClick={ handleSearchRgbColor }
            className=''>
              Search RGB
          </button>
        </div>
        <div className="values">
          <div className="value-color">
            <h3>HEX: </h3>
            <p>{color}</p>
          </div>
          <div className="value-color">
            <h3>RGB: </h3>
            <p>{translateHexRgb(color)}</p>
          </div>
        </div>
        <div 
          className="wraper-color"
          style={{
            background: color
          }}
          >
        </div>
      </div>
    </div>
  );
}

export default ColorGenerator