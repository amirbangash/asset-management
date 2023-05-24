const verify = (req, res, next) => {
    console.log("hello in verify token")
    const token =
        req.body.token || req.query.token || req.headers['x-access-token'];
    console.log(token)

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
        return next();
    } catch (err) {
        console.log("error is ", err)
        return res.status(401).send('Invalid Token');
    }

};
module.exports.verify = verify