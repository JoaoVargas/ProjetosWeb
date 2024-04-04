import { useState } from 'react';
import './acordiao.css'
import data from './data.js'

const Acordiao = () => {
  const [ selected, setSelected] = useState(null);
  const [ multiSelected, setMultiSelected ] = useState([]);
  const [ singleSelect, setSingleSelect ] = useState(true);
  
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let oldMultiSelect = [...multiSelected];
    const findIndex = oldMultiSelect.indexOf(getCurrentId);
    findIndex === -1
      ? oldMultiSelect.push(getCurrentId)
      : oldMultiSelect.splice(findIndex, 1)

    setMultiSelected(oldMultiSelect);
  }


  return (
    <div>
      <div className="project">
        <h1>Acordian Menu</h1>
      </div>
      <div className='wrapper' >
        <div className="accordian">
          <button
            onClick={() => {setSingleSelect(!singleSelect)}}
            >
            {singleSelect ? 'Single Select' : 'Multi Select'}
          </button>
          {
            data && data.length > 0 ? 
              data.map((item) => (
                <div 
                  key={item.id}
                  className="item"
                  >
                  <div 
                    className="title" 
                    onClick={
                      singleSelect 
                        ? () => handleSingleSelection(item.id)
                        : () => handleMultiSelection(item.id)
                    }
                    >
                    <h3>{item.question}</h3>
                    <span><strong>+</strong></span>
                  </div>
                  {
                    // singleSelect
                    //   ? item.id === selected
                    //     ?
                    //       <div className="content">
                    //         {item.answer}
                    //       </div> 
                    //     : 
                    //       null
                    //   : multiSelected.inde(item.id) !== -1
                    //     ?
                    //       <div className="content">
                    //         {item.answer}
                    //       </div> 
                    //     : 
                    //       null
                    
                    singleSelect
                      ? item.id === selected && (
                          <div className="content">
                            {item.answer}
                          </div> 
                        )
                      : multiSelected.indexOf(item.id) !== -1 && (
                          <div className="content">
                            {item.answer}
                          </div> 
                        )
                  }
                </div>
              )):
              <div>
                Erro ao buscar dados
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Acordiao