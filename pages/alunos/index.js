import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'
import axios from 'axios'


const index = () => {

  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    axios.get('/api/alunos').then(resultado => {
      setAlunos(resultado.data);
    })
  }, [])

  function getAll() {
    axios.get('/api/alunos').then(resultado => {
      setAlunos(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/alunos/' + id)
      getAll()
    }
  }


  return (
    <Pagina titulo='Alunos'>
      <Button href='/alunos/form' className='mb-2' variant="primary">Novo
        <AiOutlinePlus />
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Opções</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Matrícula</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Número</th>
            <th>Bairro</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(item => (
            <tr key={item.id}>
              <td>
                <Link href={'/alunos/' + item.id}>
                  <BiEditAlt className='me-3' style={{ cursor: 'pointer' }} />
                </Link>
                <BsTrash3Fill style={{ cursor: 'pointer' }}
                  onClick={() => excluir(item.id)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}

export default index