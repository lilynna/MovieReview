import Movie from '../model/Movie.js';

const prodFieldProjection = {
    __v: false,
    //_id: false,
};

export const list = (req, res) => {
    Movie.find()
        .then(result => { res.json(result) })
        .catch(err => res.status(500).send({ errors: { global: "Server Error" } }))
};

export const get = (req, res) => {
    const name = req.params.name;
    Movie.findOne({ Name: name })
        .then(Movie => {
            if (!Movie) {
                return res.status(404).send({
                    errors: {
                        global: "Movie not found with name " + name
                    }
                });
            }
            res.json(Movie); // default status = 200
        }).catch(err => {
            return res.status(500).send({
                errors: {
                    global: "Error retrieving Movie with name " + name
                }
            });
        });
};;