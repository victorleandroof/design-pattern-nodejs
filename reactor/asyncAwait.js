const roletaRussa = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('CHAMADA ASYNC ASYNCAWAIT:');
      const valor = Math.floor((Math.random() * 1000)) % 10 === 0;
      if (valor) return reject(new Error('OPS VALOR NAO EXISTE! ASYNCAWAIT'));
      resolve();
    }, ms);
  });

module.exports = roletaRussa;