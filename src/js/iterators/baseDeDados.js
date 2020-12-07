function tabelaAlimentos() {
  const tabelas = {
    alimentos: {
      1: { nome: "Arroz" },
      2: { nome: "feijao" },
      3: { nome: "batata" },
    },
  };
  return {
    get: (nome, id) => tabelas[nome][id],
    asyncGet: (nome, id) => delay(500).then(() => tabelas[nome][id]),
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const tabela = tabelaAlimentos();
