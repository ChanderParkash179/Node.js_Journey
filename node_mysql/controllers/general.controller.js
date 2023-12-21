async function test(req, res) {
  const response = {
    responseCode: "SUCCESS_200",
    responseMessage: "App is running properly!",
    responseData: "",
  };

  return res.status(200).json(response);
}

module.exports = {
  test,
};
