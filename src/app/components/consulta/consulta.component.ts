import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cliente } from '../cadastro/cliente';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ClienteService } from '../../cliente.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Endereco } from '../cadastro/endereco';

@Component({
  selector: 'app-consulta',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, MatIconModule, MatButton, MatTableModule, CommonModule, RouterLink, MatProgressSpinnerModule],
  standalone: true,
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaComponent implements OnInit {

  filtro : Cliente = new Cliente('', '', '', '', new Endereco('', '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
  clientes: Cliente[] = [];
  isLoading = true;
  progress = 0;
  displayedColumns: string[] = ['id', 'nome', 'email', 'telefone', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>(this.clientes);
  router: any;

  constructor(private clienteService: ClienteService, router : Router, private cdr: ChangeDetectorRef) {       
  }

  carregarDados(): void {
   
    // Simulação de um carregamento assíncrono
    setTimeout(() => {      
      this.clientes = this.clienteService.obterStorage();
      this.dataSource = new MatTableDataSource(this.clientes);    
        
      this.isLoading = false;      
      this.cdr.detectChanges(); // Notifica o Angular para verificar as mudanças
    }, 1500);
  }

  ngOnInit(): void {
    // Simulação de um carregamento assíncrono   
    this.carregarDados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  excluirItem(id: string): void {
      this.clienteService.remover(id);
      // 3. Atualize a fonte de dados da tabela
      this.dataSource.data = [...this.dataSource.data]; // Crie uma nova referência para forçar a atualização
      // 4. Atualize a tabela
      this.dataSource._updateChangeSubscription();
      this.isLoading = true;
      // Opcional: Você pode adicionar uma lógica para comunicar essa exclusão ao seu backend      
      this.carregarDados();    

  }

}
