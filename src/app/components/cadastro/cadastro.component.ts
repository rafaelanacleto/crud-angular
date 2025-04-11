import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, MatFormField, MatInput, MatButton, MatIcon, MatSelect, ReactiveFormsModule, MatLabel, MatError],
  templateUrl: './cadastro.component.html',
  standalone: true,
  styleUrl: './cadastro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadastroComponent {
  ngForm: any;
  cliente: Cliente = new Cliente('', '', '', '');

  onSubmit(): void {
    console.log('Form submitted:', this.ngForm.value);
  }
}
