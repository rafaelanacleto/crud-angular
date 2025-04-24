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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { Cliente } from './cliente';
import { ClienteService } from '../../cliente.service';
import { ActivatedRoute } from '@angular/router';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Endereco } from './endereco';

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

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
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
