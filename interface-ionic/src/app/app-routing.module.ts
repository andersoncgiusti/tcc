import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./clinica/home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: 'agenda',
    loadChildren: () => import('./clinica/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfis',
    loadChildren: () => import('./clinica/perfis/perfis.module').then( m => m.PerfisPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./clinica/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'home-paciente',
    loadChildren: () => import('./paciente/home-paciente/home-paciente.module').then( m => m.HomePacientePageModule)
  },
  {
    path: 'prontuario',
    loadChildren: () => import('./paciente/prontuario/prontuario.module').then( m => m.ProntuarioPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/signup/signup.module').then( m => m.SignupPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
