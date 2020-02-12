module.exports = ({
    save: (doc) => console.log('salvo no mysql'),
    update: (doc) => console.log('atualizado no mysql'),
    delete: (doc) => console.log('deletado no mysql')
  });