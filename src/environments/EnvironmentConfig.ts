import { AuthConfig } from 'angular-oauth2-oidc';

export class EnvironmentConfig {
    envName: string;
    authConfig: AuthConfig;
    apiBaseUrl: string;
}
