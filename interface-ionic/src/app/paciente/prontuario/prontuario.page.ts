import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.page.html',
  styleUrls: ['./prontuario.page.scss'],
})
export class ProntuarioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openHome() {
    this.navCtrl.navigateRoot('home-paciente');
  }

  openProntuario() {
    this.navCtrl.navigateRoot('prontuario');
  }

}
