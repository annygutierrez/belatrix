import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './containers/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeContainerComponent,
    AvatarComponent,
    MenuItemComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
