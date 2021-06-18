import User from '../model/user.js';
const prodFieldProjection = {
    __v: false,
    //_id: false,
};
export const create = (req, res) => {
    let user = new User(req.body)
    user.save()
        .then(() => { return res.send({ success: "Create Successfully" }) })
        .catch(() => res.status(404).send({
            errors: { global: "Cann't add new user" }
        }))
}