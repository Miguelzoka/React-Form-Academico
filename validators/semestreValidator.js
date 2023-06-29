const semestreValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 30,
            message: 'O máximo de caracteres é 10'
        },
        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Digite apenas letras'
        }
    },

    inicio: {
        required: 'Campo obrigatório',
    },

    fim: {
        required: 'Campo obrigatório',
    },

}

export default semestreValidator