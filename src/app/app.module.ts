import { AboutPage } from '../pages/about/about';
import { UnitPage } from '../pages/unit/unit';
import { NotFoundPage } from '../pages/404NotFound/404';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RacePage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RacePage, 
    UnitPage,
    NotFoundPage, 
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        {component: HomePage, name: 'Home', segment: 'home'},
        {component: RacePage, name: 'List', segment: 'list/:race'},
        {component: UnitPage, name: 'Unit', segment:'unit/:id'},
        {component: NotFoundPage, name: '404', segment: '404'}, 
        {component: AboutPage, name: 'About', segment: 'about'}
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RacePage, 
    UnitPage,
    NotFoundPage, 
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
