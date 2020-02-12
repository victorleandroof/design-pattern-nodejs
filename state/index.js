const MaquinaEstado = require('./maquinaEstado');
const maquinaEstado = MaquinaEstado();

let estado = maquinaEstado.init();

console.log(`Estado atual ${estado.getNome()}. Cor atual ${estado.getCor()}  e Label Atual "${estado.getLabel()}"`); // TODO

estado = maquinaEstado.transition(estado);
console.log(`Estado atual ${estado.getNome()}. Cor atual ${estado.getCor()}  e Label Atual "${estado.getLabel()}"`); // IN PROGRESS

estado = maquinaEstado.transition(estado);
console.log(`Estado atual ${estado.getNome()}. Cor atual ${estado.getCor()}  e Label Atual "${estado.getLabel()}"`); // DONE

estado = maquinaEstado.transition(estado);
console.log(`Estado atual ${estado.getNome()}. Cor atual ${estado.getCor()}  e Label Atual "${estado.getLabel()}"`); // DONE
