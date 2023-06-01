import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Fa } from "react-icons";
import { FaRegTrashAlt } from "react-icons/Fa"
import { BiEditAlt } from "react-icons/Bi"
import axios from "axios";

const index = () => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
      axios.get('/api/disciplinas').then( resultado => {
        setDisciplinas(resultado.data);
      })
  }, []);

  function getAll(){
    axios.get('/api/disciplinas').then(resultado => {
      setDisciplinas(resultado.data)
    })
  }

  function excluir(id){
    if (confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/disciplinas' + id)
      getAll()
    }
  }

  return (
    <Pagina titulo="Disciplinas">

      <Link href="/disciplinas/form" className="mb-2 btn btn-primary">
        <AiFillPlusCircle /> Novo
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apagar</th>
            <th>Nome</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/disciplina/' + item.id}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
                <FaRegTrashAlt onClick={()=>excluir(item.id)} className="text-danger" />
              </td>
              <td>{item.id}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
