import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true
})
export class ButtonComponent {
  @Input()label: string = '';
  buttonText: string = 'ACESSAR';
  buttonTexts: string[] = ['VENDER', 'COMPRAR'];
  buttonNumber: number = 1;
  buttonObeject = {
    label: 'adicionar ao carrinho',
  };
}
