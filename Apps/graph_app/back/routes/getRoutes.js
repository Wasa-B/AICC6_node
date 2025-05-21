const router = require("express").Router();
const getControllers = require("../controllers/getControllers");

router.get("/sales_map", getControllers.getSalesMap);
router.get("/visitors", getControllers.getVisitors);
router.get("/customers", getControllers.getCostomers);
router.get("/target_reality", getControllers.getTargetReality);
router.get("/volume_services", getControllers.getVolumeServices);
router.get("/top_products", getControllers.getTopProducts);
router.get("/revenue", getControllers.getRevenue);

module.exports = router;
