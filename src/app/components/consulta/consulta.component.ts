import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-consulta',
  imports: [MatToolbarModule],
  template: `
  
  <mat-toolbar color="primary">
    <span>Consulta</span>
    <span class="spacer"></span>
    <button mat-button routerLink="/consulta/novo">Novo</button>
  </mat-toolbar>`,
  styleUrl: './consulta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaComponent { }
