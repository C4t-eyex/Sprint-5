const express = require('express');

const app = express();
const path = require('path');
// settings.
app.set('port', process.env.PORT | 8090);
app.use(express.json());
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Resources')));
app.use(require('./Routes/UsuariosRoute'));
app.listen(app.get('port'), () => {
    console.log('Server startup now ' + app.get('port'));
});