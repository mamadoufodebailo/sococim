import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import {text} from '@angular/core/src/render3/instructions';
import {type} from 'os';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  nom: string;
  logo: any;
  focus: string;

  constructor(private router:Router,private navCtrl: NavController,
              private alertCtrl: AlertController){

  }

  ngOnInit(){
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
  }

  openPage(page){

    switch (page){
        case 'presentation' : this.router.navigateByUrl("/presentation");
            break;
        case 'produit' : this.router.navigateByUrl("/produit");
            break;
        case 'rse' : this.router.navigateByUrl("/rse");
            break;
        case 'contact' : this.router.navigateByUrl("/contact");
            break;
        case 'fondation' : this.router.navigateByUrl("/fondation");
            break;
        case 'distributeur' : this.router.navigateByUrl("/distributeur");
            break;
        case 'actualite' : this.router.navigateByUrl("/actualite");
            break;
        case 'commande': this.showAlert();
            break;
    }
  }

  openCommande(type){
      this.router.navigateByUrl("/commande/"+type);
  }

  async showAlert(){
      const alert = await this.alertCtrl.create({
          header: 'Choisissez votre type de commande',
          buttons:[
              {
                  text:'Entreprise',
                  handler:()=> {
                      this.openCommande('entreprise')
                  }
              },
              {
                  text:'Particulier',
                  handler:()=> {
                      this.openCommande('particulier')
                  }
              }
          ]
      });

      return await alert.present();
  }

}
