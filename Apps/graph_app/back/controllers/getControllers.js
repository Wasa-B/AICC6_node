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

exports.getVisitors = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM visitors");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting visitors " + error.message,
    });
  }
}

exports.getCostomers = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM customers");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting customers " + error.message,
    });
  }
}

exports.getTargetReality = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM target_reality");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting target reality " + error.message,
    });
  }
}

exports.getVolumeServices = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM volume_services");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting volume services " + error.message,
    });
  }
}

exports.getTopProducts = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM top_products");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting top products " + error.message,
    });
  }
}

exports.getRevenue = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM revenue");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting revenue " + error.message,
    });
  }
}

exports.getVisitors = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM visitors");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting visitors " + error.message,
    });
  }
}

exports.getVisitors = async(req,res)=>{
  try {
    const result = await database.pool.query("SELECT * FROM visitors");
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured while getting visitors " + error.message,
    });
  }
}