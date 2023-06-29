import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import cursoValidator from '@/validators/cursoValidator'
import { mask } from 'remask'

const form = () => {

    const { register, handleSubmit, formState: {errors}, setValue } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/cursos', dados)
       push('/cursos')

    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Cursos'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.nome} 
                    isValid={!errors.nome} 
                    type="text" 
                    {...register('nome', cursoValidator.nome)} 
                    />
                    {
                        errors.nome && 
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='duracao'>
                    <Form.Label >Duração: </Form.Label>
                    <Form.Control 
                    mask='99'
                    isInvalid={errors.duracao} 
                    isValid={!errors.duracao} 
                    type="text" 
                    {...register('duracao', cursoValidator.duracao)}
                    onChange={handleChange}
                    />
                    {
                        errors.duracao &&
                        <p className='text-danger'>{errors.duracao.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='modalidade'>
                    <Form.Label >Modalidade: </Form.Label>
                    <Form.Control 
                    isInvalid={errors.modalidade} 
                    isValid={!errors.modalidade} 
                    type="text"
                     {...register('modalidade', cursoValidator.modalidade)} />
                    {
                        errors.modalidade &&
                        <p className='text-danger'>{errors.modalidade.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/cursos/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck/>
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/cursos/'>
                        <Button variant='danger'>
                            <HiArrowNarrowLeft/>
                            Voltar
                        </Button>
                    </Link>
                </div>

            </Form>
        </Pagina>

    )
}

export default form