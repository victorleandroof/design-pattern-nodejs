const Funcionario = require('./funcionario');
const GerenteVenda = require('./gerente');

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const funcionario = Funcionario({ emitter });

const desconto = GerenteVenda({ emitter, nome: 'desconto' });
const venda = GerenteVenda({ emitter, nome: 'venda' });

funcionario.publicarVenda();
