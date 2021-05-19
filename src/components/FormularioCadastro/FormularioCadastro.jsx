import React from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';

function FormularioCadastro({enviarForm, validarCPF}) {

  return (
    <>
    <DadosPessoais enviarForm={enviarForm} validarCPF={validarCPF}/>
    <DadosUsuarios/>
    <DadosEntrega/>
    </>
  );
}

export default FormularioCadastro;