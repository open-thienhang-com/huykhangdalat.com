import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Room, ApiResponse } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private http = inject(HttpClient);
  // Default URL format from API_SPEC
  private apiUrl = 'http://api.thienhang.com/data-mesh/domains/hotel/rooms/rooms';

  getRooms(): Observable<Room[]> {
    return this.http.get<ApiResponse<Room[]>>(this.apiUrl).pipe(
      map(response => {
        // Mock a price for the UI if not available from API specifically
        const data = response?.data || [];
        return data.map(room => ({
          ...room,
          price_per_day: room.price_per_day || Math.floor(Math.random() * (200 - 80 + 1) + 80) // 80 to 200 $ mock
        }));
      }),
      catchError(error => {
        console.error('Error fetching rooms:', error);
        return of([]); // return empty array on error for graceful degrade
      })
    );
  }
}
