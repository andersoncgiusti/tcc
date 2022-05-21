import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectedMode = 'date-time';
  showPicker = false;
  dateValue = new Date() + 'dd-MM-yyyy';
  formattedString = '';

  constructor(private navCtrl: NavController) 
  {
    // this.setToday();
  }

  ngOnInit() {
  }

  openHome() {
    this.navCtrl.navigateRoot('home');
  }

  openAgenda() {
    this.navCtrl.navigateRoot('agenda');
  }

  openPerfis() {
    this.navCtrl.navigateRoot('perfis');
  }

  openPagamento() {
    this.navCtrl.navigateRoot('pagamento');
  }

  openCadatros() {
    this.navCtrl.navigateRoot('agenda/agendamentos');
  }

  setToday(value) {
    console.log(value);    
  }

  displayCalendar = false;
  calendar = true;
  
  openCalendar() {
    this.displayCalendar = !this.displayCalendar;  
    this.calendar = !this.calendar;  
  }

  close() {
    this.calendar = !this.calendar; 
    this.displayCalendar = !this.displayCalendar; 
  }

  

}
