import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext.jsx';

import { MdDeleteForever, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const ListaCeps = () => {
  const { ceps, delCep, mostrarModal, setCeps } = useContext(GlobalContext);
  const [ordenado, setOrdenado] = useState('');

  const ordenarPropriedade = (lista, prop) => {
    var sortOrder = 1;

    if(prop[0] === "-") {
        sortOrder = -1;
        prop = prop.substr(1);
    }

    return lista.sort((a,b) => (a[prop] > b[prop]) ? 1 * sortOrder : ((b[prop] > a[prop]) ? -1 * sortOrder : 0))
}

  const ordenarCep = () => {
    if (ordenado == 'cep') {
      setOrdenado('-cep');
      setCeps(ordenarPropriedade(ceps, '-cep'));

      return
    }
    
    setOrdenado('cep');
    setCeps(ordenarPropriedade(ceps, 'cep'));
  }

  const ordenarUf = () => {
    if (ordenado == 'uf') {
      setOrdenado('-uf');
      setCeps(ordenarPropriedade(ceps, '-uf'));

      return
    }
    
    setOrdenado('uf');
    setCeps(ordenarPropriedade(ceps, 'uf'));
  }

  const ordenarCidade = () => {
    if (ordenado == 'cidade') {
      setOrdenado('-cidade');
      setCeps(ordenarPropriedade(ceps, '-localidade'));

      return
    }
    
    setOrdenado('cidade');
    setCeps(ordenarPropriedade(ceps, 'localidade'));
    
  }

  const ordenarBairro = () => {
    if (ordenado == 'bairro') {
      setOrdenado('-bairro');
      setCeps(ordenarPropriedade(ceps, '-bairro'));

      return
    }
    
    setOrdenado('bairro');
    setCeps(ordenarPropriedade(ceps, 'bairro'));
    
  }

  const ordenarRua = () => {
    if (ordenado == 'rua') {
      setOrdenado('-rua');
      setCeps(ordenarPropriedade(ceps, '-logradouro'));

      return
    }
    
    setOrdenado('rua');
    setCeps(ordenarPropriedade(ceps, 'logradouro'));
    
  }

  return (
    <div className='flex flex-row justify-center overflow-x-auto rounded-lg shadow-lg sm:mx-36'>
      <table className='w-full text-left text-gray-400'>
        <thead className='text-zinc-400 bg-zinc-700 uppercase'>
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className='cursor-pointer flex items-center'>
                <a onClick={() => {ordenarCep()}}>CEP</a> 
                {(ordenado == 'cep') ? <MdOutlineKeyboardArrowDown/> : ((ordenado == '-cep') ? <MdOutlineKeyboardArrowUp/> : null)}
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className='cursor-pointer flex items-center'>
                <a onClick={() => {ordenarUf()}}>UF</a> 
                {(ordenado == 'uf') ? <MdOutlineKeyboardArrowDown/> : ((ordenado == '-uf') ? <MdOutlineKeyboardArrowUp/> : null)}
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className='cursor-pointer flex items-center'>
                <a onClick={() => {ordenarCidade()}}>Cidade</a> 
                {(ordenado == 'cidade') ? <MdOutlineKeyboardArrowDown/> : (ordenado == '-cidade') ? <MdOutlineKeyboardArrowUp/> : null}
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className='cursor-pointer flex items-center'>
                <a onClick={() => {ordenarBairro()}}>Bairro</a> 
                {(ordenado == 'bairro') ? <MdOutlineKeyboardArrowDown/> : (ordenado == '-bairro') ? <MdOutlineKeyboardArrowUp/> : null}
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className='cursor-pointer flex items-center'>
                <a onClick={() => {ordenarRua()}}>Rua</a> 
                {(ordenado == 'rua') ? <MdOutlineKeyboardArrowDown/> : (ordenado == '-rua') ? <MdOutlineKeyboardArrowUp/> : null}
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ceps.map((cep) => {
            return (
              <tr key={cep.cep} className=" border-t bg-zinc-800 border-zinc-700 hover:bg-zinc-750 font-light">
                  <th scope="row" className="px-6 py-4 ">
                      <a 
                        onClick={() => {mostrarModal(cep)}}
                        className="cursor-pointer font-semibold text-zinc-200 whitespace-nowrap hover:underline">
                        {cep.cep}
                      </a>
                  </th>
                  <td className="px-6 py-4">
                      {cep.uf}
                  </td>
                  <td className="px-6 py-4">
                      {cep.localidade}
                  </td>
                  <td className="px-6 py-4">
                      {cep.bairro}
                  </td>
                  <td className="px-6 py-4">
                      {cep.logradouro}
                  </td>
                  <td className="px-6 py-4">
                      <a 
                        onClick={() => {delCep(cep.cep)}} 
                        className="text-zinc-500 hover:text-red-400 hover:cursor-pointer">
                        <MdDeleteForever size={25}/>
                      </a>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ); 
}

export default ListaCeps