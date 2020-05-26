export const environment = {
  production: false,
  api_url: 'https://api.rock-star.io'
};

export const AUTH_CONFIG = {
  clientID: '8fGEyRsBmUNp7BfEjaV3nfpw5pAl4dU2',
  domain: 'rockstar.auth0.com',
  redirect: `${window.location.origin}`,
  scope: 'openid profile email search:products read:products download:artifacts create:artifacts',
  audience: 'https://api.rock-star.io/',
  namespace: 'http://www.rock-star.io/roles'
};

export const ICONFINDER_CONFIG = {
  api_url: 'https://api.iconfinder.com/v3/',
  api_client_id: 'JU9i5bRf8ZltFSonov6HjbpsWjRdldHxvlVddb1utBDpbL0Ai8fev1q9WoHI56Br',
  api_client_secret: 'wQmQpG1EWcWuCeaDwfaJog1YkVYb9PMaS92VI0HYI5U5SWHU6yiempxEDPjuuTrX'
}

export const AUTH0_USER_SERVICE_CONFIG = {
  token_url: 'https://rockstar.auth0.com/oauth/token',
  api_url: 'https://rockstar.auth0.com/api/v2/',
  clientID: '2FelqDJ5NJH7AXvf7Gqq4q7ciSdc5Pmu',
  clientSecret: 'rhHr9vGDIGitMRKV9qmc9jWUHN24nr6jPakcDuXJhBIrlWkJMM6P8CkwUeJEuWGL',
  grant: 'client_credentials'
}

export const SWAGGERHUB_CONFIG = {
  organization: 'rockstar',
  api_url: '',
  api_key: 'eyJUb2tlblR5cGUiOiJBUEkiLCJzYWx0IjoiOTkyNDQwNTQtYjQ2MC00Y2E5LTk0NjItMmFiZDZkOTNkY2I4IiwiYWxnIjoiSFM1MTIifQ.eyJqdGkiOiI0OWRiMWMyMC00MjMyLTRmZWYtODNiOS04NzBiYWIzNjcwNmIiLCJpYXQiOjE1MTI2NjAwNTJ9.bfZX8tPOnPm-hOMy1bBPLsjop0zGroVo3wAssB8qJ2aoI-6--sDsNUFdXUCgby1wFRoTNclBBAwXVRkUtfMjdg'
}

export const CONTENTFUL_SERVICE_CONFIG = {
  space_id: 'twvbu1gxtnm1',
  access_token: '9751dacd380c40e8531c6420790ee5e022c7520d7c49dbb7985460d6e467cfb6',
  api_url: 'https://cdn.contentful.com'
}

export const NOUNPROJECT_CONFIG = {
  key: '4a0e4ed7d5fb47b8a417fe6b73464689',
  secret: '6e58572b4a474d209acd583434eff38e'
}