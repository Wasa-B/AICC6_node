const database = require("../database/database");

const getDataBase = (query, name)=>{
  return async(req, res)=>{
    try {
      const result = await database.pool.query(query);
      return res.status(200).json(result.rows);
    } catch (error) {
      return res.status(500).json({
        message: "Error Occured while getting " + name + " " + error.message,
      });
    }
  }
}
exports.getSalesMap       = getDataBase("SELECT * FROM sales_map", "sales map");
exports.getVisitors       = getDataBase("SELECT * FROM visitors", "visitors");
exports.getCostomers      = getDataBase("SELECT * FROM customers", "customers");
exports.getTargetReality  = getDataBase("SELECT * FROM target_reality", "target reality");
exports.getVolumeServices = getDataBase("SELECT * FROM volume_services", "volume services");
exports.getTopProducts    = getDataBase("SELECT * FROM top_products", "top products");
exports.getRevenue        = getDataBase("SELECT * FROM revenue", "revenue");