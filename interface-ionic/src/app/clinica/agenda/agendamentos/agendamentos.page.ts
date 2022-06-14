import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AgendaService } from '../../services/agenda.service'
import { AgendaModel } from '../../models/agenda.model'

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private AgendaService: AgendaService
    ) { }

  openBack() {
    this.navCtrl.navigateRoot('agenda');
  }

  agendamento: AgendaModel = new AgendaModel();
  agendamentos: Array<any> = new Array();

  agendamentoGet: any;
  agendamentoPatchId: any;
  agendamentoDeleteId: any;
  agenda: any;

  ngOnInit() {
    this.list();   
  }

  list() {
    this.AgendaService.agendamentoGet()
    .subscribe((agendamentoGet) => { 
      this.agendamentoGet = agendamentoGet;
      console.log('#######', agendamentoGet); 
    })
  }

  update(id: any) {
    this.AgendaService.agendamentoPatchId(id, this.agenda)
    .subscribe((agendamentoPatchId) => { 
      console.log('agendamentoPatchId', agendamentoPatchId);
      
      this.agendamentoPatchId = new AgendaModel();
      this.list();
    })
  }

  delete(id: any) {
    this.AgendaService.agendamentoDeleteId(id)
    .subscribe((agendamentoDeleteId) => { 
      console.log('agendamentoDeleteId', agendamentoDeleteId);
      
      this.agendamentoDeleteId = new AgendaModel();
      this.list(); 
    })
  }
}
