import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import semestreValidator from '@/validators/semestreValidator'

const form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/semestres', dados)
        push('/semestres')

    }

    return (
        <Pagina titulo='Semestres'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        isValid={!errors.nome}
                        type="text"
                        {...register('nome', semestreValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='inicio'>
                    <Form.Label >Inicio: </Form.Label>
                    <Form.Control
                        isInvalid={errors.inicio}
                        isValid={!errors.inicio}
                        type="date"
                        {...register('inicio', semestreValidator.inicio)} 
                        />
                    {
                        errors.inicio &&
                        <p className='text-danger'>{errors.inicio.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='fim'>
                    <Form.Label >fim: </Form.Label>
                    <Form.Control
                        isInvalid={errors.fim}
                        isValid={!errors.fim}
                        type="date"
                        {...register('fim', semestreValidator.fim)} 
                        />
                    {
                        errors.fim &&
                        <p className='text-danger'>{errors.fim.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/semestres/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck />
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/semestres/'>
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