import * as mongooseDef from "mongoose";
let mongoose = mongooseDef.default;
const MovieSchema = new mongoose.Schema({
    Name: String,
    DateMovie: Number,
    MonthMovie: Number,
    YearMovie: Number,
    MovieOut: Boolean,
    ShowTime: String,
    Type: String,
    YoutubeEmbedid: String,
    Synosis: String,
    CreditSynosis: String,
    CastandCrew: Array,
});
let Movie = mongoose.model('Movie', MovieSchema, 'Movie');
export default Movie;