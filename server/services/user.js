import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { User } from '../model/user.js'
import { createToken } from '../utils/token.js';

dotenv.config();
const { secretKey } = process.env;



async function userRegistation(body) {
    try {
        const { password, email } = body;
        const checkUser = await User.findOne({ email }).lean()
        if (checkUser) {
            return { statusCode: 409, message: 'User Already Exist' };
        }
        const hash = await bcrypt.hash(password, 10);
        body.password = hash;
        const user = await User.create(body);
        return { statusCode: 201, message: 'User Registered Successfully' };
    } catch (error) {
        console.log("we have an error in services", error.message)
        throw new Error(error.message);
    }
}
async function userLogin(body) {
    try {
        const { email, password } = body;
        const user = await User.findOne({ email }).lean()
        if (!user) {
            return { statusCode: 404, errMessage: 'User does not exist' }
        }
        if (user) {
            const verify = await bcrypt.compare(password, user.password);
            if (!verify) {
                return { statusCode: 401, errMessage: 'Invalid credentials' }
            }
            if (verify) {
                const token = await createToken(user)
                delete user._id
                delete user.password
                delete user.__v
                return { statusCode: 200, userData: user, token: token }
            }

        }
    } catch (error) {
        throw new Error(error.message);
    }
}


async function createUserProfile(body) {
    try {
        const { email } = body

        // const user = await User.updateOne({ email }, { new: true })
        const isUser = await User.findOne({ email }).lean()
        if (!isUser) {
            return { statusCode: 404, errMessage: 'User does not exist' }
        }
        const user = await User.findOneAndUpdate({ email }, body, { new: true }).lean()
        delete user.password
        return { statusCode: 201, userData: user, message: 'User Profile Created' }
    } catch (error) {
        throw new Error(error.message)
    }
}

async function seeAllUser(userType, skip, limit) {

    try {
        if (userType !== 'admin') {
            return { statusCode: 404, errMessage: 'You Are Not Authorized' };
        }
        const user = await User.aggregate([
            { $project: { password: 0 } },
            { $skip: parseInt(skip) },
            { $limit: parseInt(limit) },

        ]);
        return { statusCode: 200, userData: user }
    } catch (error) {
        throw error;
    }
}


async function updateUserPassword(body, id) {
    try {
        var { newPassword, confirm } = body
        if (newPassword !== confirm) {
            return { statusCode: 404, errMessage: 'Passwords do not match' }
        }
        const isUser = await User.findOne({ _id: id })
        console.log("isUser is ", isUser)
        const oldPassword = isUser.password
        const passwordMatch = await bcrypt.compare(newPassword, oldPassword)
        if (passwordMatch) {
            return { statusCode: 409, message: 'you are using the old password' }
        }
        newPassword = await bcrypt.hash(newPassword, 10)
        const update = { password: newPassword };;
        const user = await User.updateOne({ _id: id }, update)
        console.log("in serv user is", user)
        return { statusCode: 201, message: 'Password Updated ' }
    } catch (error) {
        throw error;
    }
};




export default { userRegistation, userRegistation, createUserProfile, userLogin, updateUserPassword, seeAllUser }


// async function logoutUser(token) {
//     try {

//         const user = await blacklistingToken(token)
//         return { statusCode: 200, message: 'Logout Successful' }
//     } catch (error) {

//     }
// }

// async function forgetPassword(body) {
//     const user = await User.findOne({ email: body.email })
//     if (!user) {
//         // return JSON.stringify('This email does not exist')
//         return { statusCode: 404, errMessage: 'email does not exis' }
//     }
// create transporter
// let transporter = nodemailer.createTransport({
//     service: 'outlook',
//     auth: {
//         user: SENDER,
//         pass: 'Akhtar@09'
//     }
// });

// generate random verification code
//     let verificationCode = Math.floor(100000 + Math.random() * 900000);

//     // setup email data
//     let mailOptions = {
//         from: SENDER,
//         to: user.email,
//         subject: 'Verification Code',
//         text: `Your verification code is ${verificationCode}.`
//     };

//     // send email
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         }
//         else {
//             return { 'Email sent: ': info.response }
//         }
//     });

// }

// async function updateUser(body) {
//     try {
//         const user = await User.findOneAndUpdate({ email: body.email }, { new: true });
//         return { statusCode: 201, userData: user }
//     } catch (error) {
//         throw error;
//     }
// }