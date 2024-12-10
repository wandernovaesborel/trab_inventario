document.getElementById('botaoAdicionarItem').addEventListener('click', function () {
    window.location.href = 'adicionar.html';
});

// Carregar produtos do Firestore
db.collection('produtos').get().then(snapshot => {
    const produtosLista = document.getElementById('produtos-lista');
    const produtos = [];
    snapshot.forEach(doc => {
        const produto = doc.data();
        produto.id = doc.id;
        produtos.push(produto);
        produtosLista.innerHTML += `
        <table>
            <tr>
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.preco}</td>
                <td>
                    <a href="editar.html?id=${produto.id}"><span class="material-icons">edit</span></a> |
                    <a href="#" onclick="excluirProduto('${produto.id}')"><span class="material-icons">delete</span></a>
                </td>
            </tr>
        </table>
        `;
    });

    // Gráfico de produtos
    const ctx = document.getElementById('graficoProdutos').getContext('2d');
    const nomes = produtos.map(p => p.nome);
    const quantidades = produtos.map(p => p.quantidade);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nomes,
            datasets: [{
                label: 'Quantidade de Produtos',
                data: quantidades,
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        }
    });
});

function excluirProduto(id) {
    db.collection('produtos').doc(id).delete().then(() => {
        window.location.reload();
    });
}