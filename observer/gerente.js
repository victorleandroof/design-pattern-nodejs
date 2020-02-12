module.exports = ({nome, emitter}) => {
    const listeners = {
        desconto: ({objeto}) => console.log(`Desconto para venda solicitada: ${objeto}`),
        venda: ({objeto }) => console.log(`Venda realizada: ${objeto}`),
        outros: ({objeto }) => console.log(`Outros: ${objeto}`)
    };
    const handler = listeners[nome] || listeners.outros;
    emitter.on('outros', handler);
};