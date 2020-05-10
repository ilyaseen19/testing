const pool = require("../../config/database");

module.exports = {
  getUsers: (callBack) => {
    pool.query(`select * from ironPrice`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
