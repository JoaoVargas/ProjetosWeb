import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { MdOutlineSearch } from "react-icons/md";

const BuscaCep = () => {
  const { termoBusca, setTermoBusca, buscarCep, carregando } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarCep();
  }

  const pointerCarregando = () => {
    if (carregando) {
      return ''
    }

    return ''
  }

    const botaoBuscar = () => {
    if (carregando) {
      return (
        <button 
          type="submit" 
          className='cursor-wait text-zinc-200 bg-zinc-750 absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2'
          disabled>
            Carregando...
        </button>
      );
    }

    return (
      <button 
        type="submit" 
        className='text-zinc-200 bg-zinc-750 hover:bg-zinc-800 focus:ring-zinc-800 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'>
          Buscar
      </button>
    );
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className='max-w-md mx-auto my-5'>
        <label 
          htmlFor="busca-base" 
          className="mb-2 text-sm font-medium sr-only text-zinc-200">
          Buscar
        </label>
        <div 
          className="relative">
            <div 
              className="absolute inset-y-0 flex items-center ps-3">
                <MdOutlineSearch size={25} className='text-zinc-400'/>
            </div>
            <input 
              value={termoBusca} 
              onChange={(e) => setTermoBusca(e.target.value)} 
              type="search" 
              id="busca-base" 
              className="block w-full p-4 ps-10 text-sm border rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400" 
              placeholder="Digite o CEP..." 
              required 
              pattern="\d{5}(|-)\d{3}" />
            {botaoBuscar()}
        </div>
      </form>
    </div>
  );

}

export default BuscaCep