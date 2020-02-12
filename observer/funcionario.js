module.exports = ({ emitter }) => {
    const publicarVenda = () => {
      emitter.emit('venda', { content: 'R$30,00' });
    };
    return { publicarVenda };
};