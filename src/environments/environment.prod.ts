export const environment = {
  production: false,
  authenticate: false,

  authentication: {
    jwtHost: '',
    storeKey: 'auth_jwt',
    paths: {
      login: '/jwt/starttoken.html?redirect=',
      logout: '/jwt/saml/logout',
      refresh: '/jwt/jwts/v1/refresh'
    }
  }
};
