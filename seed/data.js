import db from "../db/connection.js";
import sunlightModel from "../Sunlight/model/sunlightModel.js";
import sunlightData from "../Sunlight/sunlightData.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert dataOne into database
  await sunlightModel.insertMany(sunlightData);

  db.close();
};

insertData();
