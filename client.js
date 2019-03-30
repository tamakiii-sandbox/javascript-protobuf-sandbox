const path = require('path')
const caller = require('grpc-caller')

const PROTO_PATH = __dirname + '/hello.proto'
const client = caller('0.0.0.0:50051', PROTO_PATH, 'Greeter')

client.sayHello({ name: 'Bob' }, (err, res) => {
  console.log(res)
})
