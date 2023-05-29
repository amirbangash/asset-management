import { User } from '../model/user.js';

let create = async (body) => {
    const user = await User.create(body);
    return user;
};

let find = async (email) => {

    // const user = await User.aggregate([
    //     { $match: { email: email } },
    //     { $limit: 1 },
    //     { $project: { __v: 0, password: 0 } }
    // ])
    // return user[0]
    const user = await User.findOne({ email }).lean()
    return user

}

let allUsers = async (page, limit) => {
    try {
        const skip = (page - 1) * limit;
        const user = await User.aggregate([
            { $project: { password: 0 } },
            { $skip: skip },
            { $limit: parseInt(limit) },

        ]);
        return user;

    } catch (error) {
        throw error;
    }
}

async function profileCompletion(body) {
    try {
        const { email } = body
        const user = await User.findOneAndUpdate({ email }, body, { new: true }).lean()
        // const user = await User.findOne({ email })
        // console.log(user)
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}

let userUpdate = async (email, body) => {
    const user = await User.updateOne({ email }, body, { new: true });
    return user;
};

let passwordUpdate = async (id, update) => {
    const user = await User.updateOne({ _id: id }, update)
    console.log("in repos user is", user)
    return user
}

export { create, find, allUsers, profileCompletion, userUpdate, passwordUpdate };
