import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import salaValidator from '@/validators/salaValidator'
import { mask } from 'remask'

const form = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/salas', dados)
        push('/salas')

    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Salas'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        isValid={!errors.nome}
                        type="text"
                        {...register('nome', salaValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='capacidade'>
                    <Form.Label >Capacidade: </Form.Label>
                    <Form.Control
                        mask='99'
                        isInvalid={errors.capacidade}
                        isValid={!errors.capacidade}
                        type="text"
                        {...register('capacidade', salaValidator.capacidade)}
                        onChange={handleChange}
                    />
                    {
                        errors.capacidade &&
                        <p className='text-danger'>{errors.capacidade.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='tipo'>
                    <Form.Label >Tipo: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.tipo}
                     isValid={!errors.tipo} 
                     type="text" 
                     {...register('tipo', salaValidator.tipo)} />
                    {
                        errors.tipo &&
                        <p className='text-danger'>{errors.tipo.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/salas/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck />
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/salas/'>
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