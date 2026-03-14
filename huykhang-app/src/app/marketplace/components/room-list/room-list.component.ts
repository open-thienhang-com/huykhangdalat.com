import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { RoomCardComponent } from '../room-card/room-card.component';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RoomCardComponent],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  private roomService = inject(RoomService);
  
  rooms: Room[] = [];
  isLoading = true;

  ngOnInit() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
      this.isLoading = false;
    });
  }
}
