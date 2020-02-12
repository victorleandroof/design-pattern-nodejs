const Macaco = require('./macaco');
const Baleia = require('../baleia');

const mamiferoPorTipo = {
    "macaco":Macaco,
    "baleia":Baleia
}

module.exports = (tipo,parametros) => {
    const MinhaClass = mamiferoPorTipo[tipo];
    return MinhaClass ? MyClass(parametros) : null;
}