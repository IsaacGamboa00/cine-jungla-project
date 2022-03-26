import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:any = 'cine-jungla-project';
  prueba:any = 'este es un tesxto de prueba';

  usuario = {
    id: '123',
    name: 'isok', 
  }


 

 getText(state:any){
   if(state == true){
     return 'soy true';
   }else{
    return 'soy false';
   }
 }


}
