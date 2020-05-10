const pool = require("../../config/database");

module.exports = {
  getUsers: (callBack) => {
    pool.query(`select * from washPrice`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
