import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class mainComponent {
  title: any = 'cine-jungla-project';
  prueba: any = 'este es un tesxto de prueba';

  usuario = {
    id: '123',
    name: 'isok',
  }




  getText(state: any) {
    if (state == true) {
      return 'soy true';
    } else {
      return 'soy false';
    }
  }


}
