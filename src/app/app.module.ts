import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiscountPipe } from './discount.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; // Import your custom pipe

@NgModule({
  declarations: [
    AppComponent,
    DiscountPipe,
    LoginComponent,
    RegisterComponent // Add your custom pipe here
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
