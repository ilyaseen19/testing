const { getUsers } = require("./ip.service");

module.exports = {
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        data: results,
      });
    });
  },
};
