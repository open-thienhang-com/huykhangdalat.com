import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketplaceLayoutComponent } from './marketplace/marketplace-layout/marketplace-layout.component';
import { RoomListComponent } from './marketplace/components/room-list/room-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarketplaceLayoutComponent, RoomListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'huykhang-app';
}
