import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext.jsx';

import { MdClose } from "react-icons/md";

const ModalDetalhesCep = () => {
  const { cepSelecionado, fecharModal, modalAtivo } = useContext(GlobalContext);
  if (modalAtivo) {
    return (
      <div className='flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-zinc-810'>
        <div className='relative p-4 w-full max-w-2xl max-h-full'>
          <div className='relative rounded-lg shadow bg-zinc-700'>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-zinc-200">
                    CEP - {cepSelecionado.cep}
                </h3>
                <button 
                  type="button" 
                  className="text-zinc-400 hover:bg-zinc-600 hover:text-zinc-50 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " 
                  onClick={() => {fecharModal()}}
                  >
                    <MdClose size={35}/>
                    <span className="sr-only">Fechar</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                UF
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.uf}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                Localidade
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.localidade}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                Bairro
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.bairro}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                Logradouro
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.logradouro}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                Complemento
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.complemento}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                DDD
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.ddd}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                GIA
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.gia}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                IBGE
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.ibge}
              </p>
              <h5 className=" text-md font-medium leading-relaxed text-zinc-200">
                Siafi
              </h5>
              <p className="text-base leading-relaxed text-zinc-400">
                {cepSelecionado.siafi}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalDetalhesCep