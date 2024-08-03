const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/goFood";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db.collection("food_items");
    const categoryData = await mongoose.connection.db.collection("foodcategory");
    const data = await fetchedData.find({}).toArray();
    const catData = await categoryData.find({}).toArray();

    global.food_items = data;
    global.food_category = catData;
   
    // Add any additional processing logic here if needed

    // Close the MongoDB connection when done
    // await mongoose.connection.close();
    // console.log("Connection closed");
  } catch (err) {
    console.error("Error:", err);
  }
};

module.exports = mongoDB;
