const url = `http://192.168.40.3:3000/clientes`;

// table para mosragem dos dados
var table;
function criarTabela(){
    table = 
            `<tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Data Nascimento</th>
                <th>Profissão</th>
                <th>Endereço</th>
            </tr>`;
}

// chamando a variavel que cria o cabeçalho da tabela
criarTabela();  

const leituraDados = async() =>  {

    const dados = await fetch(url);
    const clientes = await dados.json();

    preencherFormulario(clientes)

//     console.log(clientes);
//     console.log(dados);
}

leituraDados()

const preencherFormulario = (clientes) => {
    for (const cliente of clientes) {
        table +=
            `<tr>
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.profissao}</td>
                <td>${cliente.data_nasc}</td>
                <td>${cliente.endereco.logradouro}, ${cliente.endereco.numero}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade}, ${cliente.endereco.uf}, ${cliente.endereco.cep}</td>
            </tr>`;
    }

    // Mostrar os dados capturados no loop e preencher no HTML na tabela com o ID "tabelaLeitura"
    document.getElementById("tabelaLeitura").innerHTML = table;
}














