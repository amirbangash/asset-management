import express, { response } from 'express';
import bodyParser from 'body-parser';

import {
    findUser, register, completeProfile,
    getAllUser, updatePassword,
} from '../services/user.js';

async function userRegistation(req, res) {
    try {
        const { body } = req;
        const { email } = body
        const user = await register(body)
        return res.status(user.statusCode)
            .json({ msg: user.message, user: user.userData, error: user.errMessage });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
async function createUserProfile(req, res) {
    try {
        const { body } = req;
        const user = await completeProfile(body);
        return res.status(user.statusCode)
            .json({ msg: user.message, user: user.userData, error: user.errMessage });
    } catch (error) {
        return res.status(422).json({ error: error.message });
    }
}

async function userLogin(req, res) {
    try {

        const { body } = req;
        const user = await findUser(body);
        return res.status(user.statusCode)
            .json({ userRecord: user.userData, token: user.token, Error: user.errMessage });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
// async function updateUserProfile(req, res) {
//     try {
//         const { body } = req;
//         const user = await updateUser(body);
//         return res.status(user.statusCode)
//             .json({ userRecord: user.userData, token: user.token, Error: user.errMessage });
//     } catch (error) {
//         return res.status(400).json({ error: error.message });
//     }
// }

async function updateUserPassword(req, res) {
    try {
        const { body } = req
        const { id } = req.user;
        console.log("user id is ", id)
        const { newPassword, confirm } = req.body
        const user = await updatePassword(body, id)
        console.log("in controllers user is", user)
        return res.status(user.statusCode)
            .json({ userRecord: user.userData, message: user.message, error: user.errMessage });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

}
// async function UserForgetPassword(req, res) {
//     try {
//         const { id } = req.user;
//         const { newPassword, confirm } = req.body
//         if (newPassword === confirm) {
//             return res.status(user.statusCode)
//                 .json({ userRecord: user.userData, token: user.token, Error: user.errMessage });
//         }
//     } catch (error) {
//         return res.status(400).json({ error: error.message });
//     }
// }


// async function userLogout(req, res) {
//     try {
//         const { headers } = req;
//         const accessToken = headers.authorization
//             ? headers.authorization.split(' ')[1]
//             : '';
//         const user = await blacklistToken(accessToken);
//         return res.status(201).json({ msg: 'logout successful' });
//     } catch (error) {
//         return res.status(400).json({ error: error.message });
//     }
// }

async function seeAllUser(req, res) {
    try {
        const userType = req.user.role
        const { page, limit } = req.query
        const user = await getAllUser(userType, page, limit)
        return res.status(user.statusCode)
            .json({ userRecord: user.userData, token: user.token, Error: user.errMessage });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
export {
    userRegistation, userLogin, createUserProfile,
    updateUserPassword, seeAllUser
};
