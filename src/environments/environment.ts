export const environment = {
  production: false,
  api_url: 'http://localhost/v1'
};

export const AUTH_CONFIG = {
  clientID: '8fGEyRsBmUNp7BfEjaV3nfpw5pAl4dU2',
  domain: 'rockstar.auth0.com',
  redirect: 'http://localhost:4200/explore',
  scope: 'openid profile email search:products read:products search:metadata read:metadata download:artifacts create:artifacts search:collections read:collections create:collections update:collections delete:collections',
  audience: 'https://api.rock-star.io/'
};

export const ICONFINDER_CONFIG = {
  api_url: 'https://api.iconfinder.com/v3/',
  api_client_id: 'JU9i5bRf8ZltFSonov6HjbpsWjRdldHxvlVddb1utBDpbL0Ai8fev1q9WoHI56Br',
  api_client_secret: 'wQmQpG1EWcWuCeaDwfaJog1YkVYb9PMaS92VI0HYI5U5SWHU6yiempxEDPjuuTrX'
}

export const AUTH0_MANAGEMENT_CONFIG = {
  api_url: 'https://rock-star.auth0.com/api/v2',
  api_client_id: '2FelqDJ5NJH7AXvf7Gqq4q7ciSdc5Pmu',
  api_client_secret: 'rhHr9vGDIGitMRKV9qmc9jWUHN24nr6jPakcDuXJhBIrlWkJMM6P8CkwUeJEuWGL'
}