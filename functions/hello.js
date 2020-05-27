exports.handler = async (event) => {
  const { greeting = "Hello", subject = "World" } = event.queryStringParameters;
  return {
    statusCode: 200,
    headers: {
      "Cache-Control": "max-age=300",
    },
    body: `${greeting} ${subject}!`,
  };
};
