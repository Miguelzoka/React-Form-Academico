import Pagina from "@/components/Pagina";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsSave } from "react-icons/Bs"
import { AiOutlineRollback } from "react-icons/Ai"

const form = () => {

  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {

    if(query.id){
      const id = query.id
      const cursos = JSON.parse(window.localStorage.getItem("cursos"))
      const curso = cursos[id]

      for(let atributo in curso){
        setValue(atributo, curso[atributo])
      }

    }
  }, [query.id]);

  console.log(query.id)

  function salvar(dados){
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }

  return (
    <Pagina titulo="Formulário">
        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" {...register('nome')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="duracao">
        <Form.Label>Duração:</Form.Label>
        <Form.Control type="text" {...register('duracao')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>Modalidade:</Form.Label>
        <Form.Control type="text" {...register('modalidade')} />
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
