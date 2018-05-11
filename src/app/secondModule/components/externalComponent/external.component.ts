import { Component } from '@angular/core';

@Component({
  selector: 'app-external-component',
  templateUrl: './external.template.html',
  styleUrls: ['./external.template.scss']
})
export class ExternalComponent {
  title = 'external';
}
