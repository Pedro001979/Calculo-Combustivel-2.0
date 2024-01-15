const precoEtanol = 3.89;
const precoGasolina = 5.56;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const entrada = require('prompt-sync') ({sigint: true});
let tipoCombustivel;
tipoCombustivel = entrada ("Digite qual o tipo de combustivel deseja abastecer?, Entre etanol e gasolina: ");
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


