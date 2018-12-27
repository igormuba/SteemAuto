var api = sc2.Initialize({
    app: 'steemhere',
    callbackURL: '127.0.0.1:5500/app.html/',
    accessToken: 'access_token',
    scope: ['vote']
  });

  var link = api.getLoginURL();
  console.log(link)