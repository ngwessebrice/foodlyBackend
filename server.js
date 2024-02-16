const express = require("express")
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const CategoryRouter = require("./routes/category");
const RestaurantRouter = require("./routes/restaurant");
const FoodRouter = require("./routes/food");
const RatingRouter = require("./routes/rating");
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/user");
const AddressRouter = require("./routes/address");
const CartRouter = require("./routes/cart");
const OrderRouter = require("./routes/order");


dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => console.log("Foodly Connected to database"))
.catch((err) => console.log(err));


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", AuthRouter);
app.use("/api/users", UserRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/restaurant", RestaurantRouter);
app.use("/api/foods", FoodRouter);
app.use("/api/rating", RatingRouter)
app.use("/api/address", AddressRouter);
app.use("/api/cart", CartRouter);
app.use("/api/order", OrderRouter);




app.listen(process.env.PORT || 6013, () => console.log(`Foodly Backend is listening on port ${process.env.PORT}!`))
