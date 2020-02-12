const postgres = require('./postgres');
const mongo = require('./mongo');
const mysql = require('./mysql');

const bdPorConfig = {
  0: postgres,
  1: mysql,
  2: mongo
};

const random = Math.floor(Math.random() * 3);
const bd = bdPorConfig[random];
bd.save({msg:'sucesso'});
bd.update({msg:'sucesso'});
bd.delete({msg:'sucesso'});