const result = document.querySelector('.result');
const data = new Date();
console.log(data);

result.innerHTML = "Estou aqui!"

const diaSemana = data.getDay();
const diaSemanaTexto = data.toLocaleDateString('pt-br', { weekday: 'long'});
const mesTexto = data.toLocaleDateString('pt-br', { month: 'long'});
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();

result.innerHTML = `${diaSemanaTexto}, ${mesTexto}, ${dia}/${mes}/${ano}: ${hora}:${min}:${seg}`
