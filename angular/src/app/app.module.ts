import {
  ApplicationRef,
  DoBootstrap,
  Injector,
  NgModule,
  Type,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { createCustomElement } from '@angular/elements';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

function getAngularJSResource(serviceName: string) {
  return (window as any).angular
    ?.element(document.body)
    .injector()
    .get(serviceName);
}

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: 'AuthService',
      useFactory: () => getAngularJSResource('AuthService'),
    },
    {
      provide: '$state',
      useFactory: () => getAngularJSResource('$state'),
    },
    {
      provide: '$stateParams',
      useFactory: () => getAngularJSResource('$stateParams'),
    },
  ],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  creteCustomElement(component: Type<any>, selectorName: string): any {
    const customElement = createCustomElement(component, {
      injector: this.injector,
    });
    customElements.define(selectorName, customElement);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    this.creteCustomElement(AppHeaderComponent, 'app-header-ce');
    this.creteCustomElement(LoginComponent, 'app-login-ce');
    this.creteCustomElement(UsersComponent, 'app-users-ce');
  }
}
