const fs = require('fs');
const path = require('path');

    function versionModulo(nombreModulo, callback) {

    const fichero = path.join('./node_modules', nombreModulo, 'package.json');
    
    // leemos contenido de un fichero package.json
    fs.readFile(fichero, 'utf-8', (err, data) => {
        // en el scope: fs, path, fichero, er, data
        if (err) {
            callback(err);
            return;
        }

        try{

            // parsear el contendo del fichero convirtiendolo en un objeto
            var packageJson = JSON.parse(data);
            
        }catch(err) {
            callback(err);
            return;
        }
        //console.log(packageJson);

        // obtenemos la version
        const version = packageJson.version || '';

        // retornamos la version
        callback(null, version) ;

    });
    
}

module.exports = versionModulo;