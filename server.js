import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/',(req, res)=> {
    res.render('index', {
        content: 'Hello Express and <em>EJS</em>!'
    });
});

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port,()=>{
    console.log('Express listening on port', config.port);
});
