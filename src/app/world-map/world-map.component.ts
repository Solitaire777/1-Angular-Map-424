import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './world-map.component.html',
  styleUrl: './world-map.component.css',
  preserveWhitespaces: false
})
export class WorldMapComponent {
  countryProperties: any = {};

  constructor(
    private apiService: ApiService
  ) {}

  setCountryProperty(event: any) {
    this.apiService
      .setCountryProperties(
        event.target.id
      )
      .subscribe((data: any) => {
        this.countryProperties = {
          ...data,
          countryName:
            event.target.getAttribute(
              'name'
            ),
        };
      });
  }
}
