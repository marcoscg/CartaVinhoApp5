import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, MenuController  } from '@ionic/angular';

import { Login } from './shared/login.model';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [LoginService]
})
export class LoginPage implements OnInit {

  public login: Login = new Login;
  submitted = false;

  /**
   * 
   * @param router 
   * @param loginService 
   * @param toastController 
   */
  constructor(
    public menuCtrl: MenuController,
    public loadingController: LoadingController,
    public router: Router, 
    private loginService: LoginService,
    public toastController: ToastController
  ) { }

  /**
   * 
   */
  ngOnInit() {
  }

  /**
   * 
   */
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  /**
   * 
   */
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Acessando...'
    });
    await loading.present();
  }  

  /**
   * 
   * @param msg 
   */
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }  

  /**
   * 
   * @param form 
   */
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.presentLoading();
      this.loginService.login(this.login)
      .subscribe(
        () => {
          this.loadingController.dismiss();
          this.menuCtrl.enable(true);
          this.router.navigateByUrl('/tabs');
        },
        error => {
          this.loadingController.dismiss();
          this.presentToast('Usuário e senha não coincidem.');
        }
      );      
    }
  }

  /**
   * 
   */
  onSignup() {
    this.router.navigateByUrl('/signup');
  }

}
