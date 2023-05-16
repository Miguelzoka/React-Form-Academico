import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import { Container } from 'react-bootstrap';

const Pagina = (props) => {
  return (
    <>
      
      <Cabecalho />
      <div className="bg-secondary text-white mb-1 py-3 text-center">
        <h1>{props.titulo}</h1>
      </div>

      <Container className='mb-5'>
      {props.children}
      </Container>

      <Rodape/>
      
    </>
  )
}

export default Pagina
