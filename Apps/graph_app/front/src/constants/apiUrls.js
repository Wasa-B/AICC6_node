const DOMAIN = "http://localhost:8000";

const routes = [
  'sales_map',
  'visitors',
  'customers',
  'target_reality',
  'volume_services',
  'top_products',
  'revenue',
];

const GET_SALES_MAP_API_URL       = `${DOMAIN}/sales_map`;
const GET_VISITORS_API_URL        = `${DOMAIN}/visitors`;
const GET_CUSTOMERS_API_URL       = `${DOMAIN}/customers`;
const GET_TARGET_REALITY_API_URL  = `${DOMAIN}/target_reality`;
const GET_VOLUME_SERVICES_API_URL = `${DOMAIN}/volume_services`;
const GET_TOP_PRODUCTS_API_URL    = `${DOMAIN}/top_products`;
const GET_REVENUE_API_URL         = `${DOMAIN}/revenue`;

export {
  GET_SALES_MAP_API_URL,
  GET_VISITORS_API_URL,
  GET_CUSTOMERS_API_URL,
  GET_TARGET_REALITY_API_URL,
  GET_VOLUME_SERVICES_API_URL,
  GET_TOP_PRODUCTS_API_URL,
  GET_REVENUE_API_URL,
};
