exports.handler = async (event) => {
    JSON.stringify(event)
    event["queryStringParameters"]["keyword"] = "Mounika Says " + event["queryStringParameters"]["keyword"];
    const response = {
        statusCode: 200,
        body: event
    };
    return response;
};
