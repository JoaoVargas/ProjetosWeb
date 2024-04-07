import { useState } from 'react';
import './LoginPage.css'

const LoginPage = () => {
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ lembreme, setLembreme ] = useState(false);
  const [ mostrarSenha, setMostrarSenha ] = useState(false);
  const [ emaiFocus, setEmailFocus ] = useState(false);
  const [ senhaFocus, setSenhaFocus ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`${email}
    ${senha}
    ${lembreme}`)
    // Resto da função para lidar com os inputs
  };


  return (
    // wrapper geral
    <div className='flex flex-row h-screen w-screen min-h-[800px] justify-between bg-background text-text-base'>
      {/* Logo */}
      <img
        className='absolute w-[115px] h-[28px] mt-[40px] ml-[20px]'
        src='./src/assets/images/logo.svg'
        alt='Logo'
      />
      {/* Wrapper informações esquerda */}
      <div className='flex justify-center items-center w-full h-full min-w-[375px] md:min-w-[50%] md:px-[5%] md:py-[max(160px,_20vh)]'>
        {/* Bloco de login responsivo*/}
        <form 
        onSubmit={handleSubmit}
        className='flex flex-col w-full h-full gap-5 px-[20px] pt-[104px] md:justify-center md:items-center md:px-[20%] md:py-[0px] md:rounded md:bg-form-background' >
            {/*  Header  */}
            <div className='flex flex-col justify-center w-full'>
              {/* Wraper titulo */}
              <div className='flex flex-row items-center gap-3 '>
                {/* Icone titulo */}
                <img src="./src/assets/images/log-in.svg" alt="" className='size-6' />
                {/* Texto wraper */}
                <div className=' font-[Poppins] font-semibold text-2xl text-text-title'>
                  Faça seu login
                </div>
              </div>
              {/* Texto descricao */}
              <div className=' font-[Roboto] font-medium text-base'>
                Entre com suas informações de cadastro.
              </div>
            </div>
            {/* Wrapper email */}
            <div className='flex flex-col relative justify-center gap-2 w-full '>
              <label 
              htmlFor='inEmail' 
              className='font-[Poppins] font-medium text-base'>
                E-mail
              </label>
              <input 
              className='h-11 bg-background md:bg-form-background border border-text-base/50 rounded text-sm font-[Roboto] font-normal pl-10 focus:border-primary-color/75 focus:outline focus:outline-3 focus:outline-primary-color'
              type='email' 
              id="inEmail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email" 
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}/>
              <div className="absolute flex items-center ps-3 pt-8 pointer-events-none">
                <img src={emaiFocus ? "./src/assets/images/mail-focus.svg" : "./src/assets/images/mail.svg"}/>     
              </div>
            </div>
            {/* Wrapper senha */}
            <div className='flex flex-col relative justify-center gap-2 w-full '>
              <label 
              htmlFor='inSenha' 
              className='font-[Poppins] font-medium text-base'>
                Senha
              </label>
              <input 
              className='h-11 bg-background md:bg-form-background border border-text-base/50 rounded text-sm font-[Roboto] font-normal pl-10 focus:border-primary-color/75 focus:outline focus:outline-3 focus:outline-primary-color'
              type={ mostrarSenha ? "text" : "password" }
              id="inSenha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha" 
              required
              onFocus={() => setSenhaFocus(true)}
              onBlur={() => setSenhaFocus(false)}/>
              <div className="absolute ps-3 pt-8 pointer-events-none">
                <img src={senhaFocus ? "./src/assets/images/lock-focus.svg" : "./src/assets/images/lock.svg"}/>  
              </div>
              <div className="absolute right-0 pe-3 pt-8 text-primary-color">
                <img 
                src={mostrarSenha ? "./src/assets/images/eye-focus.svg" : "./src/assets/images/eye.svg"}
                className=' cursor-pointer'
                onMouseDown={() => setMostrarSenha(true)}
                onMouseUp={() => setMostrarSenha(false)}
                onTouchStart={() => setMostrarSenha(true)}
                onTouchEnd={() => setMostrarSenha(false)}
                onContextMenu={(e)=> e.preventDefault()}/>
              </div>
            </div>
            {/* Wrapper checkbox e esqueci senha */}
            <div className='flex flex-row w-full items-center justify-between gap-5'>
              {/* Wrapper checkbox */}
              <div className='flex items-center gap-2 cursor-pointer'>
                <input 
                type="checkbox"
                id="inCheckbox" 
                className='appearance-none size-5 border border-text-base/50 rounded cursor-pointer checked:bg-primary-color checked:border-primary-color'
                value={lembreme}
                onChange={() => setLembreme(!lembreme)}
                />
                <img 
                src={ lembreme ? "./src/assets/images/check.svg" : "" }
                className='absolute pointer-events-none'/>
                <label 
                htmlFor="inCheckbox"
                className=' font-[Roboto] text-base cursor-pointer'>Lembre-me</label>
              </div>
              {/* Link esqueci */}
              <a 
              href="#"
              className=' font-[Poppins] text-sm text-primary-color font-semibold hover:text-primary-color/75 active:text-primary-color/50'>
                Esqueci minha senha
              </a>
            </div>
            {/* Botao de submit */}
            <input 
            type="submit" 
            value="ENTRAR" 
            className='cursor-pointer w-full px-6 py-3 rounded font-[Poppins] text-lg font-semibold text-form-background/75 bg-primary-color hover:bg-primary-color/75 active:bg-primary-color/50'/>
            {/* Link registre-se */}
            <a 
            href="#" 
            className=' font-[Poppins] font-base text-sm text-center text-primary-color hover:text-primary-color/75 active:text-primary-color/50'>
              Não tem uma conta? <b>Registre-se</b>
            </a>
        </form>
      </div>
      {/* Imagem direita */}
      <img
        className='object-cover collapse md:min-w-[50%] md:visible'
        src={window.innerWidth < 1500 ? './src/assets/images/side-image.jpg' : './src/assets/images/side-image-2x.jpg'}
      />

    </div>
  );
}

export default LoginPage