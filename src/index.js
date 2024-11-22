import React from 'react';
import ReactDOM from 'react-dom/client';

function ExibirCtt(props){
  return <p>Nome {props.nome} {props.sobrenome}, cpf {props.cpf}, Contato {props.contato}, Email {props.email} </p>
}

function App(){
  return(
    <div>
      <h1>Questão 1</h1>
      <ExibirCtt nome = "João" sobrenome = "Araújo" cpf = "000.000.000-00" contato = "(84) 99204-1473" email = "jp@gmail.com"/>
      <ExibirCtt nome = "Thiago" sobrenome = "Alexandre" cpf = "111.111.111-11" contato = "(84) 99234-1473" email = "thiago@gmail.com"/>
      <ExibirCtt nome = "Jorge" sobrenome = "Matheus" cpf = "252.345.482-00" contato = "(84) 99202-2423" email = "jorge@gmail.com"/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
);

