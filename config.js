require('dotenv').config();

var CONFIG = {

    admin_user : process.env.ADMIN_USER,
    admin_password : process.env.ADMIN_PASS
}

module.exports={
    CONFIG
}