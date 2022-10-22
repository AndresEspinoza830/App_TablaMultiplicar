const { multiplicar } = require('./Recursos/tabla');
const { argv } = require('./config/yargs');

console.clear();

multiplicar(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

