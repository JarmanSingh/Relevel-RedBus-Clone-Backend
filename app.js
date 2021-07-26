const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const bookingRoutes = require("./routes/booking");
const busServiceRoutes = require("./routes/busservice");


app.use(bookingRoutes);
app.use(busServiceRoutes);

const start = async () => {
  await connect();
  app.listen(8000, () => console.log("Listening at Port 8000"));
};

start();
