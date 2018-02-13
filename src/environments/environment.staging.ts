export const environment = {
    production: false,
    api_url: 'https://apistaging.rock-star.io/v1'
  };

  export const AUTH_CONFIG = {
    clientID: 'vKSZDIcyYBOI7BrcpBNhusuJmilH9q2r',
    domain: 'rockstar.auth0.com',
    redirect: 'https://staging.rock-star.io/callback',
    scope: 'openid profile email download:artifacts create:artifacts',
    audience: 'http://api.rock-star.io/v1'
  };