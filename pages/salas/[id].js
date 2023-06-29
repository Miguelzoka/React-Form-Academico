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
import salaValidator from '@/validators/salaValidator'
import { mask } from 'remask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/salas/' + query.id).then(resultado => {
                const sala = resultado.data

                for (let atributo in sala) {
                    setValue(atributo, sala[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/salas/' + query.id, dados)
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
                    <Form.Control isInvalid={errors.tipo} isValid={!errors.tipo} type="text" {...register('tipo', salaValidator.tipo)} />
                    {
                        errors.tipo &&
                        <p className='text-danger'>{errors.tipo.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/salas/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck />
                            Alterar
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