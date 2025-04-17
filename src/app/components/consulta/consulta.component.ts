import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Cliente } from '../cadastro/cliente';

@Component({
  selector: 'app-consulta',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, FlexLayoutModule, MatIconModule],
  standalone: true,
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaComponent {

  filtro : Cliente = new Cliente('', '', '', '');

  pesquisar() {
    // Implementar lógica de pesquisa
  }
  limpar() {
    this.filtro = new Cliente('', '', '', '');
  }
  // Implementar lógica de limpeza
  // Implementar lógica de exibição de resultados
  // Implementar lógica de exibição de detalhes do cliente
  // Implementar lógica de edição do cliente
  // Implementar lógica de exclusão do cliente
  // Implementar lógica de exibição de mensagem de sucesso
  // Implementar lógica de exibição de mensagem de erro
  // Implementar lógica de exibição de mensagem de confirmação
  // Implementar lógica de exibição de mensagem de aviso
  // Implementar lógica de exibição de mensagem de informação

}
