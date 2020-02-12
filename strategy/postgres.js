module.exports = ({
    save: (doc) => console.log('salvo no postgres'),
    update: (doc) => console.log('atualizado no postgres'),
    delete: (doc) => console.log('deletado no postgres')
  });