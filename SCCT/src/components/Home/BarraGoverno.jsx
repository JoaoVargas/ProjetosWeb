const BarraGoverno = () => {
  return (
    <div className='barraGoverno'>
      <div className='containerBarraGoverno'>
        <a
          href='http://www.sc.gov.br/'
          target='_blank'
        >
          <span>GOVERNO DE SANTA CATARINA</span>
        </a>
        <a
          href='http://www.ouvidoria.sc.gov.br/'
          target='_blank'
        >
          <span>Ouvidoria</span>
        </a>
        <a
          href='http://www.transparencia.sc.gov.br/'
          target='_blank'
        >
          <span>Portal da Transparencia</span>
        </a>
        <button>
          <div>Destaques:</div>
          <div>V</div>
        </button>
      </div>
    </div>
  );
};

export default BarraGoverno;
