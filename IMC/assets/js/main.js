const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');

const result = document.querySelector('.result');
const form = document.querySelector('.form');

form.onsubmit = (event) => {
    event.preventDefault();
    console.log(weightInput.value, heightInput.value); 
    calculateIMC();
}

function calculateIMC() {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (!weight) {
        result.innerHTML = 'Peso inválido';
        return;
    } 
    if (!height) {
        result.innerHTML = 'Altura inválida';
        return;
    }

    const imc = (weight / (height * height));
    // Aqui eu faço o imc aparecer so duas casas decimais
    imc.toFixed(2);
    const classification = getClassification(imc);

    setResult(classification, imc);
}

function getClassification(imc) {
    if (imc < 16) {
        return 'Magreza Grave';
    } else if (imc < 17) {
        return 'Magreza Moderada';
    } else if (imc < 18.5) {
        return 'Magreza Leve';
    } else if (imc < 25) {
        return 'Saudável';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc < 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

function setResult(classification, imc){
    result.innerHTML = "";
    result.innerHTML += `O imc é ${imc} e a classificação é ${classification}`;
}

