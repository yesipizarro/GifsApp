import { Component } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  get resultados() {
    return this.gifsServicesService.resulados;
  }
  constructor(private gifsServicesService: GifsServicesService) { }
}
