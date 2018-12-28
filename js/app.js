var access_token_in_cookies = getCookie("access_token_cookies");

var api = sc2.Initialize({
    app: 'steemhere',
    callbackURL: 'http://localhost:5500/app/',
    accessToken: access_token_in_cookies,
    scope: ['vote', 'comment']
  });

api.me(function(err, res) {
    console.log(err, res);
    if (!err) {
          document.getElementById("greeting").innerHTML = "<h1>Hello, "+res.user+"</h1>";
        }
});