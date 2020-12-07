    (async function asyncListaLivros() {
        try {
            const resposta = await fetch(
            "https://www.googleapis.com/books/v1/volumes?q=javascript"
            );
        
            const dados = await resposta.json();
            const itens = dados.items.map((item) => item);
            const info = itens.map((item) => item.volumeInfo);
            const titulo = info.map((infor) => infor.title);
        
            renderizarLista("asyncListaLivros", titulo);

        } catch (e) {
            console.log('Error => ' + error );
        } finally {
            console.log("A função Async Livros foi executada!!!")
        }
    })();
