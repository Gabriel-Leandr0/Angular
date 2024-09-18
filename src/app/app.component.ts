import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { TemplateBindingComponent } from "./components/template/template-binding/template-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, TemplateBindingComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>hello world!</h1>
    <app-first/>
    <app-template-binding/>
  `
})
export class AppComponent {
  title = 'Angular-Learning';
}
