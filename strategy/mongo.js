module.exports = ({
    save: (doc) => console.log('salvo no mongo'),
    update: (doc) => console.log('atualizado no mongo'),
    delete: (doc) => console.log('deletado no mongo')
  });