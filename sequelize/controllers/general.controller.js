async function test(req, res) {
  const body = {
    responseCode: "200_OK",
    responseMessage: "App is working properly",
    responseData: "null",
  }
  return res.status(200).json(body);
}

module.exports = { test }