import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Início',
      url: '/tabs',
      icon: 'home'
    },
    {
      title: 'Vinho',
      url: '/vinho',
      icon: 'wine'
    },
    {
      title: 'Tipo de Vinho',
      url: '/tipo-vinho',
      icon: 'list'
    },
    {
      title: 'Nacionalidade',
      url: '/nacionalidade',
      icon: 'flag'
    },
    {
      title: 'Uva',
      url: '/uva',
      icon: 'leaf'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
