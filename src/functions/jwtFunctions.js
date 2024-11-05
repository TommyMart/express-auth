const jwt = require("jsonwebtoken")

let jwtSecretKey = process.env.JWT_SECRET_KEY;
require("dotenv").config();

// async function generateJWT(userDetailsObj)
async function generateJWT(userId, username, roles = null){
    return jwt.sign({
        userId: userId,
        username: username,
        roles: roles 
        },
        jwtSecretKey,
        {
            expiresIn: "7d"
        }
    );
} 

function decodeJWT(tokenToDecode){
    
    return jwt.verify(tokenToDecode, jwtSecretKey)
}

async function validateUserAuth(request, response, next){
    let providedToken = request.headers.jwt;
    console.log(providedToken);

    if (!providedToken) {
        return response.staus(404).json({
            message: "No token found"
        })
    }

    let decodedData = decodeJWT(providedToken);

    if (decodedData,userId){
        next();
    } else {
        return response.status(403).json({
            message: "Signin failed"
        })
    }

}

module.exports = {
    generateJWT,
    decodeJWT,
    validateUserAuth
}