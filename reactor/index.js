const callback = require('./callback');
const promise = require('./promise');
const asyncawait = require('./asyncawait');

async function testaAsyncAwait() {
    await Promise.resolve(asyncawait(2000));
}

console.log('EXECULTA CALLBACK INDEX');
callback(2000, (err) => {
    if (err) console.error(err);
    console.log('AGUARDE 2 SEGUNDOS INDEX');
    console.log('EXECULTA PROMISE INDEX');
    promise(2000).then(() => {
        console.log('AGUARDE 2 SEGUNDOS INDEX');
        console.log('EXECULTA ASYNC/AWAIT INDEX');
        try {
            testaAsyncAwait();
        } catch (err) {
            console.error(err)
        }
    }).catch(console.error);
});