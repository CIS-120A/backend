const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const chapterRouter = require('./routersModel/chapterRouter');
const scoreRouter = require('./routersModel/scoreRouter');


const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use('/chapter', chapterRouter);
server.use('/score', scoreRouter);

server.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Welcome to CIS120-A Flash Card App'
    })
});

server.use('/', (err, req, res, next) => {
    res.status(500).json({
        errorMessage: `Error: ${err}`
    })
    next()
});

server.listen(PORT, () => {
    console.log(`--- server running on ${PORT} ---`)
})
