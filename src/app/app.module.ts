import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Módulo personalizado de PrimeNg
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEsCl from '@angular/common/locales/es-CL';
import localeDeAt from '@angular/common/locales/de-AT';
import localeRu from '@angular/common/locales/ru';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsCl);
registerLocaleData(localeDeAt);
registerLocaleData(localeRu);
registerLocaleData(localeJa);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
