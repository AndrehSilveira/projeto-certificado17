import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioEscolarComponent } from "./formulario-escolar/formulario-escolar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioEscolarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-certificado';
}
