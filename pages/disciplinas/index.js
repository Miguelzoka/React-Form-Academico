import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { Fa } from "react-icons";
import { FaRegTrashAlt } from "react-icons/Fa"
import { BiEditAlt } from "react-icons/Bi"

const index = () => {
  const [disciplinas, setDisciplina] = useState([]);

  useEffect(() => {

  }, []);

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
          {disciplinas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/disciplina/' + i}> 
                <BiEditAlt title='Alterar' className="text-primary" />
                </Link>
                {' '}
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
