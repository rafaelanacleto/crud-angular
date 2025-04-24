import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import { Cliente } from './cliente';
import { ClienteService } from '../../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from './endereco';
import { BrasilApiService } from '../../brasil-api.service';

@Component({
  selector: 'app-cadastro',
  imports: [
    MatCardModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatIcon,
    ReactiveFormsModule,
    MatLabel,
    NgxMaskDirective,
    MatSelectModule,
  ],
  providers: [provideNgxMask()],
  templateUrl: './cadastro.component.html',
  standalone: true,
  styleUrl: './cadastro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroComponent implements OnInit {
  ngForm: any;
  id: string = '';
  atualizando: boolean = false;
  cliente: Cliente = new Cliente('', '', '', '', new Endereco('', '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
  private _snackBar = inject(MatSnackBar);
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private brasilApi: BrasilApiService
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('ID recebido:', this.id);
    console.log('snapshot', this.activatedRoute.snapshot);

    if (this.id) {
      this.atualizando = true;
      this.cliente = this.clienteService.obterClientePorId(this.id);
    }
  }

  buscarEndereco(cep: string) {
    this.brasilApi.getCep(cep).subscribe((endereco: Endereco) => {
      this.cliente.endereco = endereco;
      console.log('Endereço encontrado:', endereco);
      this.cliente.endereco.cep = endereco.cep;
      this.cliente.endereco.logradouro = endereco.logradouro;
      this.cliente.endereco.bairro = endereco.bairro;
      this.cliente.endereco.localidade = endereco.localidade;
      this.cliente.endereco.uf = endereco.uf;
      this.cliente.endereco.estado = endereco.estado;
      this.cliente.endereco.numero = endereco.numero;
      this.cliente.endereco.complemento = endereco.complemento;
      this.cliente.endereco.unidade = endereco.unidade;
      this.cliente.endereco.regiao = endereco.regiao;
      this.cliente.endereco.ibge = endereco.ibge;
    })};

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  salvar() {
    if (this.atualizando) {
      this.clienteService.atualizar(this.cliente);
      this.atualizando = false;
      this.openSnackBar('Cliente atualizado com sucesso!', 'Fechar');
    
    } else {
      console.log('Cliente a ser salvo:', this.cliente);
      this.clienteService.salvar(this.cliente);
      this.openSnackBar('Cliente criado com sucesso!', 'Fechar');
    }
    this.cliente = new Cliente('', '', '', '', new Endereco('', '', '', '', '', '', '', '', '', '', '', '', '', '', ''));
  }
}
