import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServicesService } from '../services/gifs-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ViewChild('txtSerch') txtSerch!: ElementRef<HTMLInputElement>;

  constructor(private gifsServicesService: GifsServicesService) { }
  serch() {
    const value = this.txtSerch.nativeElement.value;
    if (value.trim().length === 0) {
      return;
    }

    this.gifsServicesService.buscarGifs(value);
    this.txtSerch.nativeElement.value = '';
  }
}
