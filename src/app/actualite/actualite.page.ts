import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ModalController, NavController} from '@ionic/angular';
import {Actualite} from '../modele/actualite';
import {ActualiteDetailPage} from '../actualite-detail/actualite-detail.page';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.page.html',
  styleUrls: ['./actualite.page.scss'],
})
export class ActualitePage implements OnInit {
  nom: string;
  logo: any;
  focus: string;
  actualites = [];

  constructor(private navCtrl: NavController,private modalCtrl: ModalController) {
      let actualite = new Actualite();

      actualite.date = "23 février 2016";
      actualite.photo = "assets/images/vicat.png";
      actualite.titre = "SOCOCIM Industries sera présente sur le SEN HABITAT DAKAR 2016, du 3 au 5 mars 2016";
      actualite.description = "Du 3 au 5 mars 2016, retrouvez l’équipe SOCOCIM sur le stand 40.King Fahd Palace Hôtel Dakar Sénégal";
      actualite.contenu = "Quelles orientations majeures des politiques d’habitat au Sénégal ? \n" +
      "    Quelle place est réservée à l’habitat social ?\n" +
      "    Quelles réformes ont été initiées et mises en place ? \n" +
      "    Quels programmes ont été mis en place et quels rôles jouent les coopératives et les promoteurs immobiliers nationaux et étrangers ? \n" +
      "    Quelles mesures incitatives ont été prises pour rendre ces programmes attractifs pour les investisseurs nationaux et étrangers ?\n";

      this.actualites.push(actualite);
  }

  ngOnInit() {
      this.nom = environment.NOM;
      this.logo = environment.LOGO;
      this.focus = environment.FOCUS;
  }

  goPageBack(){
    this.navCtrl.navigateBack("/home");
  }

  async onDetail(actu){
      let modal = await this.modalCtrl.create({
          component:ActualiteDetailPage,
          componentProps:{
              actualite:actu
          }
      });

      modal.present();
  }

}
