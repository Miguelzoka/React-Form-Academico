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
import professorValidator from '@/validators/professorValidator'
import { mask } from 'remask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/professores/' + query.id).then(resultado => {
                const aluno = resultado.data

                for (let atributo in aluno) {
                    setValue(atributo, aluno[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/professores/' + query.id, dados)
        push('/professores')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Professores'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome}
                        isValid={!errors.nome}
                        type="text"
                        {...register('nome', professorValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='cpf'>
                    <Form.Label >CPF: </Form.Label>
                    <Form.Control
                        mask='999.999.999-99'
                        isInvalid={errors.cpf}
                        isValid={!errors.cpf}
                        type="text"
                        {...register('cpf', professorValidator.cpf)}
                        onChange={handleChange}
                    />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='matricula'>
                    <Form.Label >Matrícula: </Form.Label>
                    <Form.Control
                        mask='9-9999'
                        isInvalid={errors.matricula}
                        isValid={!errors.matricula}
                        type="text"
                        {...register('matricula', professorValidator.matricula)}
                        onChange={handleChange}
                    />
                    {
                        errors.matricula &&
                        <p className='text-danger'>{errors.matricula.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='salario'>
                    <Form.Label >Salário: </Form.Label>
                    <Form.Control
                        mask='R$ 9.999,99'
                        isInvalid={errors.salario}
                        isValid={!errors.salario}
                        type="text"
                        {...register('salario', professorValidator.salario)}
                        onChange={handleChange}
                    />
                    {
                        errors.salario &&
                        <p className='text-danger'>{errors.salario.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        mask='(99) 9.9999-9999'
                        isInvalid={errors.email}
                        isValid={!errors.email}
                        type="text"
                        {...register('email', professorValidator.email)}
                    />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                        mask='(99) 9.9999-9999'
                        isInvalid={errors.telefone}
                        isValid={!errors.telefone}
                        type="text"
                        {...register('telefone', professorValidator.telefone)}
                        onChange={handleChange}
                    />
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='cep'>
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control
                        mask='99999-999'
                        isInvalid={errors.cep}
                        isValid={!errors.cep}
                        type="text"
                        {...register('cep', professorValidator.cep)}
                        onChange={handleChange}
                    />
                    {
                        errors.cep &&
                        <p className='text-danger'>{errors.cep.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='logradouro'>
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control
                        isInvalid={errors.logradouro}
                        isValid={!errors.logradouro}
                        type="text"
                        {...register('logradouro', professorValidator.logradouro)} />
                    {
                        errors.logradouro &&
                        <p className='text-danger'>{errors.logradouro.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='complemento'>
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control
                        isInvalid={errors.complemento}
                        isValid={!errors.complemento}
                        type="text"
                        {...register('complemento', professorValidator.complemento)} />
                    {
                        errors.complemento &&
                        <p className='text-danger'>{errors.complemento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='numero'>
                    <Form.Label>Número: </Form.Label>
                    <Form.Control
                        mask='99'
                        isInvalid={errors.numero}
                        isValid={!errors.numero}
                        type="text"
                        {...register('numero', professorValidator.numero)}
                        onChange={handleChange}
                    />
                    {
                        errors.numero &&
                        <p className='text-danger'>{errors.numero.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='bairro'>
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control
                        isInvalid={errors.bairro}
                        isValid={!errors.bairro}
                        type="text"
                        {...register('bairro', professorValidator.bairro)} />
                    {
                        errors.bairro &&
                        <p className='text-danger'>{errors.bairro.message}</p>
                    }
                </Form.Group>


                <div className='text-center'>
                    <Link href='/professores/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck />
                            Alterar
                        </Button>
                    </Link>
                    <Link href='/professores/'>
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