const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // despues de un const, si hay {} se esta usando destructuración

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}
//console.log(process.argv); // Sirve para ver donde se ubica node y proyecto que se esta ejecutando.

// let parametro = argv[2];
// let base = parametro.split('=')[1]