// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { EnvironmentConfig } from './EnvironmentConfig';
import {EnvironmentNames} from './environments.name';

export const environment: EnvironmentConfig = {
  envName: EnvironmentNames.prod,
  authConfig: {
    // Url of the Identity Provider
    issuer: 'https://localhost:44301',
    loginUrl: 'https://localhost:44301/connect/authorize',
    postLogoutRedirectUri: "http://localhost:4200",
    // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4200/login',
    // window.location.origin, The SPA's id. The SPA is registerd with this id at the
    silentRefreshRedirectUri: 'http://localhost:4200/silent-refresh.html',
    // auth-server
    clientId: 'users',
    responseType: 'token',
    // set the scope for the permissions the client should request The first three
    // are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile was roles email',
    oidc: true,
    showDebugInformation: true
  },
  apiBaseUrl: 'https://localhost:44310'
};
