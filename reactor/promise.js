const roletaRussa = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('CHAMADA ASYNC PROMISE:');
      const valor = Math.floor((Math.random() * 1000)) % 10 === 0;
      if (valor) return reject(new Error('OPS O VALOR NAO EXISTE! PROMISE'));
      resolve();
    }, ms);
  });

module.exports = roletaRussa;