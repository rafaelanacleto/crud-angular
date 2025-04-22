import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AppComponent,
    //     pathMatch: 'full'
    // },

    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'cadastro/remove/:id', component: CadastroComponent },
    { path: 'consulta', component: ConsultaComponent },
    
];
