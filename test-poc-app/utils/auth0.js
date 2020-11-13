import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    domain: '3v-uk.eu.auth0.com',
    clientId: '0zYtxawfuONGZgcFjzTqcJObAFlTLLOB',
    clientSecret: 'np1jUuTrT_5iUSQykIqnPt7jZdF8enl6rBsTqxTWqwuhqVm6eQUsI5y6xNJNjsFw',
    scope: 'openid profile',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000/',
    session: {
        cookieSecret: 'Imprivata-test=PoCdcfjdkfjdickdmckdfjefdmcdkcndfhijejdfosclmckdnkfjeomdcldmclsmlcrjincjkcmslmcdlmclms',
        cookieLifetime: 60 * 60 * 8,
        storeIdToken: false,
        storeAccessToken: false,
        storeRefreshToken: false
    },
    oidcClient: {
        httpTimeout: 2500,
        clockTolerance: 10000
    }
});