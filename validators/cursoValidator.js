const cursoValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 40,
            message: 'O máximo de caracteres é 40'
        },
        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Digite apenas letras'
        }
    },

    duracao: {
        required: 'Campo obrigatório',
        min: {
            value: 2,
            message: 'O Duração minima é 2'
        },
        max: {
            value: 10,
            message: 'A Duração máxima é 10'
        },
    },

    modalidade: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo de caracteres é 10'
        }
    }
}

export default cursoValidator