exports.handler = async (event) => {
  const { greeting = "Hello", subject = "World" } = event.queryStringParameters;
  return {
    statusCode: 200,
    body: `${greeting} ${subject}!`,
  };
};
