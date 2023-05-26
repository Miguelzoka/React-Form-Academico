import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsSave } from "react-icons/Bs"
import { AiOutlineRollback } from "react-icons/Ai"
import axios from 'axios'

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit } = useForm()

  const form = () => {
    const { push } = useRouter()
    const {register, handleSubmit} = useForm()
  }
  
  function salvar(dados){
      axios.post('/api/disciplinas')
  }

  return (
    <Pagina titulo="Disciplina">
        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" {...register('nome')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="duracao">
        <Form.Label>Curso:</Form.Label>
        <Form.Control type="text" {...register('duracao')} />
      </Form.Group>

      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/cursos'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;
