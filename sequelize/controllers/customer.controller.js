const db = require("../configurations/connection");
const Customer = db.customers;

async function create(req, res) {
  const { name, email, age } = req.body;

  if (!name, !email, !age)
    return res.status(400).json({
      responseCode: "BAD_400",
      responseMessage: "some fields are missing!"
    });

  const customer = { name, email, age };

  Customer.create(customer).then((data) => {
    return res.status(201).json({
      responseCode: "CREATED_201",
      responseMessage: "customer saved successfully!",
      responseData: data
    })
  }).catch((error) => {
    return res.status(500).json({
      responseCode: "ISE_500",
      responseMessage: `something went wrong! [error: ${error}]`
    })
  });
}

async function find(req, res) {
  const email = req.params.email;

  if (!email)
    return res.status(400).json({
      responseCode: "BAD_400",
      responseMessage: "email is missing!"
    });

  Customer.findByPk(email).then((data) => {
    if (!data) {
      return res.status(404).json({
        responseCode: "NOT_404",
        responseMessage: "customer is not available!",
        responseData: data
      });
    }

    return res.status(200).json({
      responseCode: "OK_200",
      responseMessage: "customer fetched successfully!",
      responseData: data
    });
  }).catch((error) => {
    return res.status(500).json({
      responseCode: "ISE_500",
      responseMessage: `something went wrong! [error: ${error}]`
    })
  });
}

async function findAll(req, res) {
  Customer.findAll().then((data) => {
    return res.status(200).json({
      responseCode: "OK_200",
      responseMessage: "customers fetched successfully!",
      responseData: data
    })
  }).catch((error) => {
    return res.status(500).json({
      responseCode: "ISE_500",
      responseMessage: `something went wrong! [error: ${error}]`
    })
  });
}

async function update(req, res) {
  const param = req.params.email;
  const { name, age } = req.body;

  if (!param)
    return res.status(400).json({
      responseCode: "BAD_400",
      responseMessage: "email is missing!"
    });

  const customer = { name, age };

  Customer.update(customer,
    {
      where: { email: param }
    }).then((data) => {
      return res.status(201).json({
        responseCode: "CREATED_201",
        responseMessage: "customer updated successfully!",
        responseData: data
      })
    }).catch((error) => {
      return res.status(500).json({
        responseCode: "ISE_500",
        responseMessage: `something went wrong! [error: ${error}]`
      })
    });
}

async function remove(req, res) {
  const email = req.params.email;

  if (!email)
    return res.status(400).json({
      responseCode: "BAD_400",
      responseMessage: "email is missing!"
    });

  Customer.destroy({ where: { email } }).then((data) => {
    return res.status(200).json({
      responseCode: "OK_200",
      responseMessage: "customer deleted successfully!",
      responseData: data
    })
  }).catch((error) => {
    return res.status(500).json({
      responseCode: "ISE_500",
      responseMessage: `something went wrong! [error: ${error}]`
    })
  });
}

module.exports = {
  create,
  find,
  findAll,
  update,
  remove
}