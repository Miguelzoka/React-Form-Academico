import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Fa } from "react-icons";
import { FaRegTrashAlt } from "react-icons/Fa"

const index = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos (getAll())
  }, []);

  function getAll(){
    return JSON.parse(window.localStorage.getItem("cursos")) || []
  }

  function excluir(id){
    const itens = getAll()
    itens.splice(id, 1)
    window.localStorage.setItem('cursos', JSON.stringify(itens))
    setCursos(itens)
  }

  return (
    <Pagina titulo="Cursos">
      <Link href="/cursos/form" className="mb-2 btn btn-primary">
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
          {cursos.map((item, i) => (
            <tr key={i}>
              <td>
                <FaRegTrashAlt onClick={()=>excluir(i)} className="text-danger" />
              </td>
              <td>{item.nome}</td>
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
