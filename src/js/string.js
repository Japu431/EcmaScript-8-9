const nome = "Matheus";
const sobrenome = "Yusuke";

const nomeCompleto = `${nome} ${sobrenome}`;

const nomeCompletoStringPadding = sobrenome.padStart(13, nome);

document.getElementById("stringPad").innerHTML = nomeCompletoStringPadding;

const nomeCompletoSobrenome = nome.padEnd(14, sobrenome);

document.getElementById("stringPadEnd").innerHTML = nomeCompletoSobrenome;

const numeroCartao = "2721";

document.getElementById("numeroCartao").innerHTML = numeroCartao.padStart(
  16,
  "*"
);
