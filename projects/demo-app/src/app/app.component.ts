import { Component, inject, OnInit } from '@angular/core';
import { TimelineComponent } from '../../../timeline/src/public-api';
import { TimelineService } from '../../shared/service/timeline.service';
interface CalendarEvent {
  id?: number;
  title: string;
  start: Date;
  end?: Date;
  color?: string;
  type?: 'personal' | 'work' | 'holiday' | 'other';
  allDay?: boolean;
  displayTitle?: string
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  private calendarService = inject(TimelineService)
  public myEvents: CalendarEvent[] = []
  public isLoading: boolean = true

  ngOnInit(): void {
    this.calendarService.getAllDates({ queryParams: { pageSize: 0 } }).subscribe({
      next: (res: any) => {
        this.myEvents = res.data.list.map((item: any) => ({
          id: item.id,
          title: item.packageName || 'No Title',
          start: (item.starts),
          end: item.ends ? (item.ends) : null,
          color: this.getEventColor(item.packageId),
          type: 'work', // Adjust logic based on your needs
          allDay: true,
          displayTitle: `${item.packageName} - ${item.totalSeatsInBasic + item.totalSeatsInStandard + item.totalSeatsInPremium} Seats`
        }));
        this.isLoading = false
      },
      error: (err: any) => {
        console.log(err)
      }
    })

  }
  public viewMoreEvents(event: any): void {
    console.log(event)
  }
  private getEventColor(status: number): string {
    switch (status % 4) {
      case 0: return 'red';   // Unavailable
      case 1: return 'green'; // Available
      case 2: return 'orange'; // Partially Available
      default: return 'gray'; // Default case
    }
  }


}

