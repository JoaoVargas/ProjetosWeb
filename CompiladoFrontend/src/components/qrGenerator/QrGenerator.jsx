import { useState } from 'react';
import QRCode from 'react-qr-code'
import './QrGenerator.css'

const QrGenerator = () => {
  const [ input, setInput ] = useState('');
  const [ qrCode, setQrCode ] = useState('');

  function handleGenerateQr() {
    setQrCode(input);
    setInput('')
  }

  return (
    <div className="project-qrgenerator">
      <div className='project-qrgenerator-title'>
        <h1>Qr Generator</h1>
      </div>
      <div className="container-qrgenerator">
        <div className='wrapper-input-qrgenerator'>
          <input 
          type="text"
          onChange={ (e) => setInput(e.target.value) }
          value={ input }
          placeholder="Input link"/>
          <button
          onClick={() => handleGenerateQr()}
          disabled={!(input && input.trim() !== '')}>
            Generate
          </button>
        </div>
        <div
        className='wrapper-qrcode-qrgenerator'>
          <div className='qrcode-qrgenerator'>
            <QRCode 
            size={400} 
            id='' 
            value={qrCode}
            bgColor='var(--paleta-1)'
            fgColor='var(--paleta-4)'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrGenerator