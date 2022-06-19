import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.page.html',
  styleUrls: ['./home-paciente.page.scss'],
})
export class HomePacientePage implements OnInit {
  today;
  selectedDate;
  age = 0;


  constructor(private navCtrl: NavController) { 
    this.today = new Date().toISOString();
  }

  ngOnInit() {
  }

  openHome() {
    this.navCtrl.navigateRoot('home-paciente');
  }

  openProntuario() {
    this.navCtrl.navigateRoot('prontuario');
  }

  calcAge() {
    let today: any = new Date();
    let selectedDate: any = new Date(this.selectedDate);

    let age = Math.round((Math.abs(selectedDate - today) / 24 * 60 * 60 * 1000) / 365);
    this.age = age;
  }

  agendamento = true;
  toDisplayAgendamento = false;
  
  agenda() {
    this.toDisplayAgendamento = !this.toDisplayAgendamento;  
    this.agendamento = !this.agendamento; 
  }

  close() {
    this.agendamento = !this.agendamento; 
    this.toDisplayAgendamento = !this.toDisplayAgendamento; 
  }

  horarioAgendado = '';

  setToday(value) {
    console.log(value); 
    this.horarioAgendado = 'Data escolhida ' + value;   
  }

}
