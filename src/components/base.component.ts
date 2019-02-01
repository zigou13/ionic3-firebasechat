import { AuthService } from '../providers/auth/auth.service';
import { NavController, AlertController, App, MenuController } from 'ionic-angular';
import { OnInit } from '@angular/core';


export abstract class BaseComponent implements OnInit {

  protected navCtrl: NavController;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {

  }

  ngOnInit(): void {
    this.navCtrl = this.app.getActiveNavs()[0];
  }

  onLogout():void {
    this.alertCtrl.create({
      message: 'Deseja sair?',
      buttons: [
        {
          text:'Sim',
          handler: () => {
            this.authService.logout()
              .then(() => {
                this.navCtrl.setRoot('SigninPage');
                this.menuCtrl.enable(false, 'user-menu');
              });
          }
        },
        {
          text: 'Não'
        }
      ]
    }).present();
  }
}
