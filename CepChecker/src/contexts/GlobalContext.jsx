import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();

const getCepsLS = () => {
  let cepsLocal = localStorage.getItem('cepsLocal');
  if (cepsLocal) {
    cepsLocal = JSON.parse(localStorage.getItem('cepsLocal'));
  } else {
    cepsLocal = [];
  }

  return cepsLocal;
};

const GlobalContextProvider = (props) => {
  const [ceps, setCeps] = useState(getCepsLS);
  const [termoBusca, setTermoBusca] = useState('');
  const [modalAtivo, setModalAtivo] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [cepSelecionado, setCepSelecionado] = useState(null);


  const getCep = async () => {
    setCarregando(true);

    try {
      const { data } = await axios('https://viacep.com.br/ws/' + termoBusca + '/json/');
      if (data == 'undefined' || data.erro) {
        alert("Cep não encontrado");
        setCarregando(false); 
        return
      } 

      for (let cepNode of ceps) {
        if (cepNode.cep == data.cep) {
          alert("Cep ja cadastrado");
          setCarregando(false);
          return;
        }
      }

      addCep(data);

    } catch (error) {
      alert("Erro ao buscar cep");
      console.log(error.response);
    }

    setCarregando(false);
  };
  
  const addCep = (cep) => {
    const listaCepsAtualizada = [...ceps, cep];
    setCeps(listaCepsAtualizada);
    localStorage.setItem('cepsLocal', JSON.stringify(listaCepsAtualizada));
  };

  const buscarCep = () => {
    getCep();
    setTermoBusca('');
  };

  const delCep = (cepId) => {
    const listaCepsAtualizada = ceps.filter(
      (cep) => cep.cep !== cepId
    );
    setCeps(listaCepsAtualizada);
    localStorage.setItem('cepsLocal', JSON.stringify(listaCepsAtualizada));
  };

  const mostrarModal = (cep) => {
    if (!modalAtivo) {
      setCepSelecionado(cep);
      setModalAtivo(true);
    }
  }

  const fecharModal = () => {
    setModalAtivo(false);
    setCepSelecionado(null);
  }

  return (
    <GlobalContext.Provider value={{
      ceps,
      setCeps,
      buscarCep,
      termoBusca,
      setTermoBusca,
      carregando,
      delCep,
      modalAtivo,
      setModalAtivo,
      mostrarModal,
      fecharModal,
      cepSelecionado,
    }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider