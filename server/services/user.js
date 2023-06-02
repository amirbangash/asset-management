import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { User } from '../model/user.js'
import { create, profileCompletion, find, userUpdate, allUsers, passwordUpdate } from '../repo/user.js';
import { createToken } from '../utils/token.js';

dotenv.config();
const { secretKey } = process.env;



async function register(body) {
    try {
        // console.log("in services")
        const { password, email } = body;
        const checkUser = await find(email);
        if (checkUser) {
            return { statusCode: 409, message: 'User Already Exist' };
        }
        const hash = await bcrypt.hash(password, 10);
        body.password = hash;
        const user = await create(body);
        const data = {
            email: user.email,
            cnic: user.cnic,
        }
        return { statusCode: 201, userData: data, message: 'User Registered Successfully' };
    } catch (error) {
        throw new Error(error.message);
    }
}
async function findUser(body) {
    try {
        const { email, password } = body;
        const user = await find(email);
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


async function completeProfile(body) {
    try {
        const { email } = body

        // const user = await User.updateOne({ email }, { new: true })
        const isUser = await find(email);
        if (!isUser) {
            return { statusCode: 404, errMessage: 'User does not exist' }
        }
        const user = await profileCompletion(body)
        delete user.password
        return { statusCode: 201, userData: user, message: 'User Profile Created' }
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getAllUser(userType, page, limit) {
    try {
        if (userType !== 'admin') {
            return { statusCode: 404, errMessage: 'You Are Not Authorized' };
        }
        const users = await allUsers(page, limit)
        return { statusCode: 200, userData: users }
    } catch (error) {
        throw error;
    }
}

// async function updateUser(body) {

//     try {
//         const user = userUpdate(body)
//         return { statusCode: 201, userData: user }
//     } catch (error) {
//         throw error;
//     }
// }

async function updatePassword(body, id) {
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
        const user = await passwordUpdate(id, update);
        console.log("in serv user is", user)
        return { statusCode: 201, message: 'Password Updated ' }
    } catch (error) {
        throw error;
    }
};




export { register, findUser, getAllUser, updatePassword, completeProfile };


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