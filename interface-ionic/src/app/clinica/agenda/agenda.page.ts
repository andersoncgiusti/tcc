import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AgendaService } from '../services/agenda.service'
import { AgendaModel } from '../models/agenda.model'

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
  horarioAgendado = '';

  constructor(
    private navCtrl: NavController,
    private AgendaService: AgendaService
    ) 
  {
    // this.setToday();
  }

  agendamento: AgendaModel = new AgendaModel();
  agendamentos: Array<any> = new Array();

  agendamentoGet: any;

  ngOnInit() {
    this.viewCalendar();    
  }

  viewCalendar() {
    this.AgendaService.agendamentoGet()
      .subscribe(agendamentoGet => { 
        this.agendamentoGet = agendamentoGet;
        console.log('>>>>>>>>', this.agendamentoGet);
      }, err => {
        console.log('Error viewCalendar', err);      
      });
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
    this.horarioAgendado = value;   
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
