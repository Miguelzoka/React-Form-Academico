import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsSave } from "react-icons/Bs"
import { AiOutlineRollback } from "react-icons/Ai"
import axios from "axios";

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if(query.id){
      axios.get('/api/disciplinas' + query.id).then(resultado => {
        const disciplinas = resultado.data
        
        for(let atributo in disciplina){
          setValue('nome', disciplina.nome[atributo])
        }
      })
    }
  }, [query.id]);

  function salvar(dados){

  }

  return (
    <Pagina titulo="Disciplinas">
        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" {...register('nome')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="curso">
        <Form.Label>Curso:</Form.Label>
        <Form.Control type="text" {...register('curso')} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit(salvar)}>
        <BsSave className="me-2"/>
        Salvar
      </Button>
      <Link className="ms-2 btn btn-danger" href={'/disciplinas'}>
        <AiOutlineRollback className="me-2"/>
        Voltar
      </Link>

    </Form>
    </Pagina>
  );
};

export default form;
