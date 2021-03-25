const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./keys");
const UserSchema = require("../model/usersModel");





const jwtOptions = {
    secretOrKey: keys.secretOrKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, next) => {
    try {
        const user = await UserSchema.findById(payload.id);
        console.log('user :>> ', user);
        if (!user) {
            return next(null, false);
        }
        next(null, user);
    } catch (error) {
        next(error, false);
    }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
    jwtStrategy,
};