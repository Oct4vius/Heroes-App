
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './newPage.component.html',
  styles: ``,
})
export class NewPageComponent {

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ]

}
