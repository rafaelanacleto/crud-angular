import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-consulta',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatCardModule, FlexLayoutModule, MatIconModule],
  standalone: true,
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaComponent {}
