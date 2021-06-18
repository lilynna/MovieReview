import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import mongooseDbConnect from './config/database.js';
import { default as movie } from './route/movieRoute.js';
import { default as user } from './route/userRoute.js';
import Movie from './model/Movie.js';
import movies from './Movie.js';
// our own modules need to put file extension .js

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err });
}

var app = express();
app.use('/public', express.static(path.join(process.cwd(), "public")));
app.use(logger("short"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);
mongooseDbConnect();

Movie.find()
    .then(result => {
        if (result.length === 0) {
            Movie.insertMany(movies, function (err, docs) {
                if (!err) {
                    docs.forEach(e =>
                        console.log(JSON.stringify(e, null, "\t"))
                    );
                    console.log("done!!");
                    //process.kill(process.pid, 'SIGINT');
                }
            });
        }
    })
    .catch(err => res.status(500).send({ errors: { global: "Server Error" } }))

// REST for movie
app.use('/movies', movie);

// REST for user
app.use('/user', user);

app.get('/', (req, res) => {
    res.send('Invalid Endport');
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})
app.get('/', (req, res) => res.status(404).send("Not Found"));
app.use('/*', (req, res) => res.status(422).send("Unsupported path entity"));

var port = 4000;
app.listen(port, () => console.log(`Server started at port ${port}`));