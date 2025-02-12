let nomesDosAmigos = [];

function adicionarAmigo() {
    let nomes = document.querySelector('#amigo').value;
    
    if (nomes === '') {
        alert('Por favor, insira um nome.');
    } else {
        nomesDosAmigos.push(nomes);
        console.log(nomesDosAmigos)// Para verificar se o nome foi adicionado
        limparCampo();
    }
}
function limparCampo () {
   let nomes = document.querySelector('#amigo');
   nomes.value = '';
}

    
