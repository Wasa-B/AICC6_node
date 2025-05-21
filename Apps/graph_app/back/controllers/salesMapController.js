const database = require("../database/database");

exports.getSalesMap = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM sales_map");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting sales map " + error.message,
    });
  }
}