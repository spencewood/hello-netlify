exports.handler = async (event) => {
  const { greeting = "Hello", subject = "World" } = event.queryStringParameters;
  return {
    statusCode: 200,
    headers: {
      "Cache-Control": "s-maxage=300",
    },
    body: `${greeting} ${subject}!`,
  };
};
