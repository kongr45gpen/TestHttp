import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP } from '@ionic-native/http/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Zip } from '@ionic-native/zip/ngx';

import * as BrowserFS from "browserfs";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    FileChooser,
    Zip,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    BrowserFS.configure({
      fs: "InMemory",
      options: {}
    }, function(error) { console.error(error) });

    // @ts-ignore
    var fs = require('fs');
    fs.writeFile('/test.txt', 'Cool, I can do this in the browser!');
  }
}
