const h2 = document.querySelector('.result');
const date = new Date();
const options = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h2.innerHTML = date.toLocaleString('pt-BR', options);
//dia da semana, dia do mes, mes, ano, hora, minuto.