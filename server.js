const app = require('./app');
const server = require('http').Server(app);
const socketInit = require('./socket');

    
    

const PORT = process.env.PORT || 3000;
socketInit(server);
server.listen(PORT, () => {
    console.log(`Server trabajando en http://localhost:${PORT}`);
})


server.on('error', (error) => {
    console.log(`Error en servidor ${error}`);
})