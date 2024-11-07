require("dotenv").config();
// const dotenv = require('dotenv');
// dotenv.congit();

const { dbConnect } = require("./functions/dbFunctions.js");
const {app} = require("./server.js");



// module.exports = app;
// const app = require()



const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    await dbConnect();
    console.log("Server is running on port http://localhost:" + PORT);
})

