const disciplinaValidator = {
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
    curso: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 20,
            message: 'O máximo de caracteres é 20'
        },    
        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Digite apenas letras'
          }
    }
}

export default disciplinaValidator