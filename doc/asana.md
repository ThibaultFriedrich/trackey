# asana


* https://asana.com/guide/help/api/api
* https://github.com/Asana/node-asana
* https://asana.com/developers/api-reference/tasks

```javascript
var asana = require('asana');
var client = asana.Client.create().useAccessToken('my_access_token');
client.users.me().then(function(me) {
  console.log(me);
});

```
