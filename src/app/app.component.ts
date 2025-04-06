import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConsultaComponent } from "./components/consulta/consulta.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, ConsultaComponent, ConsultaComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crud-angular-material';
}
