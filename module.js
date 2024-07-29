const prompt = require('prompt-sync')();
const usuarios = [];

const verificarNome = nome => nome == '';

const verificarNumero = numero => numero < 0 || isNaN(numero);

const modelo = () => {

    let usuario = {
        nome: '',
        email: '',
        telefone: []
    };

    while (true) {

        usuario.nome = prompt('Digite seu nome: ');

        if (verificarNome(usuario.nome)) {
            console.log('Insira um nome válido.');
        } else {
            break;
        }
    }

    while (true) {

        usuario.email = prompt('Insira seu e-mail: ');

        if (verificarNome(usuario.email)) {
            console.log('Insira um e-mail válido.');
        } else {
            break;
        }
    }

    while (true) {

        usuario.telefone.push = prompt('Insira seu telefone: ');

        if (verificarNumero(usuario.telefone)) {
            console.log('Insira um telefone válido.');
        } else {
            break;
        }
    }

    usuarios.push(usuario)
    console.log(usuarios);
};

module.exports = {
    modelo
};