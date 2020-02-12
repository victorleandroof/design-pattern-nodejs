const roletaRussa = (ms, next) => {
    setTimeout(() => {
      console.log('CHAMADA ASYNC CALLBACK:');
      const valor = Math.floor((Math.random() * 1000)) % 10 === 0;
      if (valor) return next(new Error('OPS O VALOR NAO EXISTE!CALLBACK'));
      next(null);
    }, ms);
  };
  
  module.exports = roletaRussa;