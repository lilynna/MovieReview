import * as mongooseDef from "mongoose";
let mongoose = mongooseDef.default;
const UserSchema = new mongoose.Schema({
    Email: String,
    UserName: String,
    Password: String,
});
let User = mongoose.model('User', UserSchema, 'User');
export default User;