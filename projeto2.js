const precoEtanol = 3.89;
const precoGasolina = 5.56;
const entradakmPorLitros = require('prompt-sync') ({sigint: true});
let kmPorLitros;
kmPorLitros = entradakmPorLitros ("Digite quantos KMs seu automovel faz por litro: ");
console.log(`Seu Automovel percorre ${kmPorLitros} por Litro.`);

const entradaDistanciaEmKm = require('prompt-sync') ({sigint: true});
let distanciaEmKm;
distanciaEmKm = entradaDistanciaEmKm ("Digite qual a distancia da sua viagem, em KMs : ");
console.log(`A Distancia é: ${distanciaEmKm}`);

const entradaTipoCombustivel = require('prompt-sync') ({sigint: true});
let tipoCombustivel;
tipoCombustivel = entradaTipoCombustivel ("Digite qual o tipo de combustivel deseja abastecer?, Entre etanol e gasolina: ");
console.log(`O tipo escolhido foi: ${tipoCombustivel}`);

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`valor que será gasto para fazer a viagem é de: ${valorGasto.toFixed(2)}`);
} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`O valor que será gasto para fazer a viagem é de: ${valorGasto.toFixed(2)}`);
} else {
    console.log('Resposta invalida. Por favor, responda com etanol ou gasolina');
}



