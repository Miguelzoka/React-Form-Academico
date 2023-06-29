const professorValidator = {
  nome: {
    required: 'Campo obrigatório',
    minLength: {
      value: 3,
      message: 'Minimo de caracteres é 3'
    },
    maxLength: {
      value: 20,
      message: 'Máximo de caracteres é 20'
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: 'Digite apenas letras'
    }
  },
  cpf: {
    required: 'Campo obrigatório',
    minLength: {
      value: 14,
      message: 'Mínimo de caracteres é 14'
    }
  },
  matricula: {
    minLength: {
      value: 6,
      message: 'Mínimo de caracteres é 6'
    },
    required: 'Campo obrigatório',
  },
  salario: {
    required: 'Campo obrigatório'
  },
  email: {
    required: 'Campo obrigatório',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email inválido'
    }
  },
  telefone: {
    required: 'Campo obrigatório',
    minLength: {
      value: 16,
      message: 'Minimo de caracteres é 16'
    }
  },
  cep: {
    required: 'Campo obrigatório',
    minLength: {
      value: 9,
      message: 'Minimo de caracteres é 9'
    }
  },
  complemento: {
    required: 'Campo obrigatório',
  },
  numero: {
    required: 'Campo obrigatório',
  },
  bairro: {
    required: 'Campo obrigatório',
  },
};

export default professorValidator;
