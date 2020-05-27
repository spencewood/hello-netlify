exports.handler = async (event) => {
  const greeting = event.queryStringParameters.name || "Hello";
  const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    headers: {
      "Cache-Control": "max-age=300",
    },
    body: `${greeting} ${subject}!`,
  };
};
