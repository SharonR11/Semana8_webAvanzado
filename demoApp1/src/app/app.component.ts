import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('selector2') selector: 
  SelectornumericoComponent = new SelectornumericoComponent();
  fijarSelector2(valor: number){
    this.selector.fijar(valor);
}
}