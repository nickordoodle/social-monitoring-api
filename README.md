## Real Time Social Monitoring API

### Quickstart

#### Pre-requisites
* Node.js
* npm
* An API client like Postman or Insomnia

#### Authentication
For all endpoints, include Basic Authentication with the following credentials:
* Username: `test`
* Password: `testpassword123`

Or if entering the header manually:
* Key: `Authorization`
* Value: `Basic dGVzdDp0ZXN0cGFzc3dvcmQxMjM=`

#### Install the dependencies

* `npm install`
* `npm install -g wscat`

#### Start the server.

* `npm start`

#### Add keywords. For simplicity and testing purposes, try adding "**his**". 
Send a POST request to `localhost:3000/api/keywords` with the following body:
```json
{
    "keyword": "his"
}
```

#### List the keywords via `localhost:3000/api/keywords`
```json
[
  "his"
]
```

#### Start the WebSocket connection
* `wscat -c ws://localhost:3000`

### Keyword Matching
The matching algorithm simply uses Node.js built in `RegExp` to match keywords
against posts. The algorithm is case-insensitive and matches partial or whole words.

#### Scalability Improvements
As the number of posts grows large, we never would want to store in-memory. Instead,
we could use a database like MongoDB. It is capable of handling large amounts of data and have built-in support for
partial string matching. Furthermore, MongoDB can scale horizontally by adding more servers as well as vertically by
increasing the server's resources.