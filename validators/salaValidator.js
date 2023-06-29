const salaValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLenght: {
            value: 2,
            message: 'Minimo de caracteres é 2'
        },
        maxLength: {
            value: 20,
            message: 'Máximo de caracteres é 10'
        },
    },

    capacidade: {
        required: 'Campo obrigatório',
        max: {
            value: 70,
            message: 'Capacidade máxima de 70 pessoas'
        }
    },

    tipo: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'Digite no minimo 3 caracteres'
        },
        maxLength: {
            value: 20,
            message: 'Digite no máximo 20 caracteres'
        },
        pattern: {
            value: /[A-Za-z\s]+$/,
            message: 'Digite apenas letras'
        }
    }

}

export default salaValidator