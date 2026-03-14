import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marketplace-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace-layout.component.html',
  styleUrls: ['./marketplace-layout.component.scss']
})
export class MarketplaceLayoutComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
