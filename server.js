/**
 * require = pr récup des modules.
 * récupère un module (depuis node)
 * peut faire 'http' car petit lib' de node.
 */
const http = require('http');
/**
 * importe l'app
 * si met pas ./, cherche dans node_modules
 */
const app = require('./app')

/**
 * un fois que c'est importé, créer le serveur
 * y passe l'app express qui lui gère les req et res d'internet.
 */
const server = http.createServer(app);

/**
 * par défaut : port en dur, mais là passe par var d'environnement (stoké dans la machine, et on peut en créer soi meme aussi)
 * port nodes 3000 majorité des cas. apache php : un autre.
 * Si il existe un var d'envi, la prendre, sinon 3000.
 */
server.listen(process.env.PORT || 3000);

/**
 * 
 */
