import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';

const CLIENT_ID = environment.client_Id;
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, SocialLoginModule],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              CLIENT_ID
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }