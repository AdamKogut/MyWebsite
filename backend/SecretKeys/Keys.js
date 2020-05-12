console.log(process.env.IS_PRODUCTION);
console.log(process.env.IS_PRODUCTION === "true");
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV === "production");
if (
  process.env.IS_PRODUCTION === "true" ||
  process.env.NODE_ENV === "production"
) {
  module.exports = require("./Prod");
} else {
  try {
    module.exports = require("./Dev");
  } catch (e) {
    module.exports = {};
  }
}
