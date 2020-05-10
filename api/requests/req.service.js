const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into requests(name, location, phone, cloth, number, cloth1, number1, cloth2, number2,
                cloth3, number3, cloth4, number4, t_price, duration)
            values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.name,
        data.location,
        data.phone,
        data.cloth,
        data.number,
        data.cloth1,
        data.number1,
        data.cloth2,
        data.number2,
        data.cloth3,
        data.number3,
        data.cloth4,
        data.number4,
        data.t_price,
        data.duration,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
