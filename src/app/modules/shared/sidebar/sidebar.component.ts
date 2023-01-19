import { Component, OnInit } from '@angular/core';
import { GifsServicesService } from '../../gifs/services/gifs-services.service';
import { Gif, SearchGifsResponse } from '../../gifs/services/interface/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsServicesService: GifsServicesService) { }

  get list() {
    return this.gifsServicesService.historial;
  }

  mostrar(l: string) {
    this.gifsServicesService.buscarGifs(l);
  }
}
