const prompt = require('prompt-sync')();
const funcao = require('./module.js');

console.log(`Vamos iniciar um cadastro por ID.`);

//while (true) {

console.log(`Escolha uma opção abaixo:
1. Cadastrar.
2. Listar.
3. Atualizar.
4. Remover.
5. Sair.`);
let opcao = prompt('');
console.log(opcao)

switch (opcao) {

    case 1:

        funcao.criarCadastro();

        break;

    case 2:

        funcao.listaCadastro();

        break;

    case 3:

        funcao.atualizarCadastro();

        break;

    case 4:

        funcao.removerCadastro();

        break;

    case 5:

        process.exit();

        break;

    default:

        console.log('Opção inválida.');

        break;
};
//};