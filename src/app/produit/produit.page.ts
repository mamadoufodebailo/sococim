import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavController} from '@ionic/angular';
import {ProduitDetailPage} from '../produit-detail/produit-detail.page';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  produits = [
      {
          id: 1,
          prix: 3000,
          nombre: 0,
          centime:0,
          photo: "assets/images/fourneau.jpg",
          text: "CIMENT HAUT FOURNEAU CEM III/B-42.5 N CE",
          description: ['travaux en béton armé ou non, hydrauliques et souterrains (fondations)',
              'travaux souterrains en milieu agressif (terrains gypseux, eaux d\'égouts et industrielles, ...) et travaux à la mer']
      },
      {
          id: 2,
          prix: 4500,
          nombre: 0,
          centime:0,
          photo: "assets/images/composite.jpg",
          text: "CIMENT AU CALCAIRE CEM II/B-LL 32.5 R CE",
          description:['béton en élévation armé ou non, ouvrage courant, dallages sols industriels, fondations, travaux souterrains non agressifs',
              'enduit, béton courant, chape']
      },
      {
          id: 3,
          prix: 3700,
          nombre: 0,
          centime:0,
          photo: "assets/images/portland.jpg",
          text: "CIMENT PORTLAND CEM I 42.5 N CE",
          description:['travaux en béton armé ou en béton précontraint','fabrication de blocs ou d\'ouvrages à décoffrage rapide']
      }
      ];

  constructor(private navCtrl: NavController,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.nom = environment.NOM;
    this.logo = environment.LOGO;
    this.focus = environment.FOCUS;
  }

  goPageBack(){
    this.navCtrl.navigateBack("/home");
  }

  async onDetail(prod){
      let modal = await this.modalCtrl.create({
          component:ProduitDetailPage,
          componentProps:{
              produit:prod
          }
      });

      modal.present();
  }

}
