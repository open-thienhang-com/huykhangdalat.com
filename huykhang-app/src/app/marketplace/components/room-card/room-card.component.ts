import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent {
  @Input({ required: true }) room!: Room;

  bookRoom() {
    alert(`Đang chuyển tới trang đặt phòng cho: ${this.room.name}`);
  }
}
