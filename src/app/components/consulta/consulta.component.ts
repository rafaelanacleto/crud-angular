import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cliente } from '../cadastro/cliente';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ClienteService } from '../../cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, FlexLayoutModule, MatIconModule, MatButton, MatTableModule, CommonModule],
  standalone: true,
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaComponent {

  filtro : Cliente = new Cliente('', '', '', '');
  clientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone'];
  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  constructor(private clienteService: ClienteService) {

    this.clientes = this.clienteService.obterStorage();
    this.dataSource = new MatTableDataSource(this.clientes);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
