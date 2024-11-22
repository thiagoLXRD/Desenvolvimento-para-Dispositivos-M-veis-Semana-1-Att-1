import React from 'react';
import ReactDOM from 'react-dom/client';

function ExibirCtt(props){
  return <p>Nome {props.nome} {props.sobrenome}, CPF {props.cpf}, Contato {props.contato}, Email {props.email} </p>
}

function App(){
  return(
    <div>
      <h1>Questão 1 - ExibirCtt</h1>
      <ExibirCtt nome = "João" sobrenome = "Araújo" cpf = "000.000.000-00" contato = "(84) 99204-1473" email = "jpdr3551@gmail.com"/>
      <ExibirCtt nome = "Thiago" sobrenome = "Alexandre" cpf = "111.111.111-11" contato = "(84) 99234-1473" email = "JeováJr@gmail.com"/>
      <ExibirCtt nome = "Jorge" sobrenome = "Matheus" cpf = "222.222.222-22" contato = "(84) 99202-2423" email = "neymar@gmail.com"/>
      <ExibirCtt nome = "Jaaziel" sobrenome = "Pereira" cpf = "333.333.333-33" contato = "(84) 93254-6463" email = "Brigadeiricesdaju@gmail.com"/>
      <ExibirCtt nome = "Maysa" sobrenome = "Almeida" cpf = "444.444.444-44" contato = "(84) 99224-1365" email = "maysinha2015@gmail.com"/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App/>
  </div>
);

