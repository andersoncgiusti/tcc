import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  openBack() {
    this.navCtrl.navigateRoot('agenda');
  }

  ngOnInit() {
  }

}
