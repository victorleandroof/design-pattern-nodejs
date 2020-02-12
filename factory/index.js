const mamiferoFactory = require('./mamifero');

const baleiaFactory = mamiferoFactory('baleia');
const macacoFactory = mamiferoFactory('macaco');

const baleiaJubarte = baleiaFactory({cor:'azul',especie:'jubarte',peso:'1 tonelada'});
const macacoPrego = macacoFactory({cor:'preto e bege',especie:'Macaco-prego',amigavel:true,inteligente:true});

baleiaJubarte.imprimir();
macacoPrego.imprimir();