
const AWS = require("aws-sdk")

export const handler = async (event) => {
console.log('kkk')
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const {id} = event.pathParameters
console.log({id})
  let todo;

  try {
    const result = await dynamodb.get({
       TableName: "TodoTable",
       Key: {id}
      }).promise()
      todo = result.Item
  } catch (error) {
    console.log(error)
  }


  
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

