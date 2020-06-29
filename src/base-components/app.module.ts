import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeviewModule } from 'ngx-treeview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './pagelayout/pagelayout.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from '@src/services/users/users.service';

import { environment } from '@src/environments/environment';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EnvironmentNames } from '@src/environments/environments.name';
import { InMemoryDataService } from '@src/mock-data/in-memory-data-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

let devModules = [];
if (environment.envName === EnvironmentNames.mock) {
    devModules = [
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { delay: 100, passThruUnknownUrl: true }
        )
    ];
}

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    UsersComponent,
  ],
  imports: [
    StoreModule.forRoot({}),
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    OAuthModule.forRoot(),
    NgbModule.forRoot(),
    TreeviewModule.forRoot(),
    NgxDatatableModule,
    ...devModules
  ],
  exports: [
    OAuthModule,
    StoreModule,
    HttpClientModule,
    NgbModule,
    HttpModule,
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    { provide: AuthConfig, useValue: environment.authConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: AppModule,
        providers: [
            UsersService
        ],
    };
}
}
