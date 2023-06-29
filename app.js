const express = require("express");
const candyRoute = require("./routes/candy");
const app = express();
const  sequelize = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require('cors')
app.use(cors())

app.use(bodyParser.json());


app.use(candyRoute);


sequelize.sync().then(() => {
	app.listen(3000);
}
).catch((err) => {
	console.log(err);
});