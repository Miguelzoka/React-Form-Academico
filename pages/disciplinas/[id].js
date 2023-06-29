import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import disciplinaValidator from '@/validators/disciplinaValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/disciplinas/' + query.id).then(resultado => {
                const disciplina = resultado.data

                for (let atributo in disciplina) {
                    setValue(atributo, disciplina[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/disciplinas/' + query.id, dados)
        push('/disciplinas')
    }

    return (
        <Pagina titulo='Disciplinas'>
            <Form>
            <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.nome}
                     isValid={!errors.nome}
                      type="text" 
                      {...register('nome', disciplinaValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='curso'>
                    <Form.Label >Curso: </Form.Label>
                    <Form.Control
                     isInvalid={errors.curso}
                      isValid={!errors.curso} 
                      type="text" 
                      {...register('curso', disciplinaValidator.curso)} />
                    {
                        errors.curso &&
                        <p className='text-danger'>{errors.curso.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/disciplinas/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck />
                            Alterar
                        </Button>
                    </Link>
                    <Link href='/disciplinas/'>
                        <Button variant='danger'>
                            <HiArrowNarrowLeft />
                            Voltar
                        </Button>
                    </Link>
                </div>
            </Form>
        </Pagina>

    )
}

export default form