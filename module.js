const prompt = require('prompt-sync')();
const usuarios = [];

const verificarNome = nome => nome == '';

const verificarNumero = numero => numero < 0 || isNaN(numero);

const verificarEmail = email => {

    let emailValido = true

    usuarios.forEach(usuario => {
        if (email == usuario.email) {
            valido = false
        }
    });

    return emailValido && email != '';
};

let updateId = 1;

const modelo = () => {

    let usuario = {
        nome: '',
        email: '',
        telefone: [],
        id: ''
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

        if (verificarNome(verificarEmail(usuario.email))) {
            console.log('Insira um e-mail válido.');
        } else {
            break;
        }
    }

    while (true) {

        usuario.telefone.push(prompt('Insira seu telefone: '));

        if (verificarNumero(usuario.telefone)) {
            console.log('Insira um telefone válido.');
        } else {
            let resposta = prompt('Deseja adicionar outro número? (s/n) ');

            if (verificarNome(resposta)) {
                console.log('Insira uma opção válida.');
            } else {
                if (resposta == 's') {
                    usuario.telefone.push(prompt('Insira um novo telefone: '));
                } else {
                    break;
                }
            }
        }
    }

    usuario.id = updateId;
    updateId++;
    return usuario
};

const criarCadastro = () => {

    let usuario = modelo();
    if (usuario != undefined) {
        usuarios.push(usuario);
        console.log('Usuário cadastrado com sucesso.');
        console.log(usuarios)
    }
};

const listaCadastro = () => {

    usuarios.forEach((usuario, index) => {
        console.log(`${index, + 1}. ${usuario.nome}, ${usuario.email}.`);

        usuario.telefone.forEach((telefone, index) => {
            console.log(`${index + 1}: ${telefone}`);
        });
    });
};

const atualizarCadastro = () => {

    listaCadastro();

    while (true) {

        let id = prompt('Escolha pelo ID qual cadastro deseja atualizar: ');

        if (verificarNumero(id)) {
            console.log('Insira um ID válido.');
        } else {
            const usuario = modelo(id);
            usuarios[id] = usuario;
            console.log('Cadastro atualizado com sucesso.');
            break;
        }
    }
};

const removerCadastro = () => {

    listaCadastro();

    while (true) {

        let opcao = prompt('Escolha pelo ID qual cadastro deseja remover: ');

        if (verificarNumero(opcao)) {
            console.log('Insira um ID válido.');
        } else {

        }
    }
};

module.exports = {
    criarCadastro,
    listaCadastro,
    atualizarCadastro,
    removerCadastro
};