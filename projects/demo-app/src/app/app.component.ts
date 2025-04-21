import { Component, OnInit } from '@angular/core';
import { TimelineComponent } from '../../../timeline/src/public-api';
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
  public isLoading: boolean = true
  myEvents: CalendarEvent[] = [
    {
      id: 1,
      title: "Product Strategy Meeting",
      start: new Date("2025-04-22T10:00:00"),
      end: new Date("2025-04-22T12:00:00"),
      type: "work",
      color: "#1E90FF"
    },
    {
      id: 2,
      title: "Birthday Brunch",
      start: new Date("2025-04-27T11:00:00"),
      end: new Date("2025-04-27T13:00:00"),
      type: "personal",
      color: "#FF69B4"
    },
    {
      id: 3,
      title: "Team Standup",
      start: new Date("2025-05-01T09:30:00"),
      end: new Date("2025-05-01T10:00:00"),
      type: "work",
      color: "#32CD32"
    },
    {
      id: 4,
      title: "Mother's Day",
      start: new Date("2025-05-11"),
      end: new Date("2025-05-11"),
      type: "holiday",
      allDay: true,
      color: "#FFD700"
    },
    {
      id: 5,
      title: "Doctor Appointment",
      start: new Date("2025-05-14T15:30:00"),
      end: new Date("2025-05-14T16:15:00"),
      type: "personal",
      color: "#FF6347"
    },
    {
      id: 6,
      title: "Dev Conference",
      start: new Date("2025-06-04T09:00:00"),
      end: new Date("2025-06-12T17:00:00"),
      type: "work",
      color: "#4682B4"
    },
    {
      id: 7,
      title: "Summer Break Start",
      start: new Date("2025-06-15"),
      end: new Date("2025-06-15"),
      type: "holiday",
      allDay: true,
      color: "#FFA07A"
    },
    {
      id: 8,
      title: "Beach Day",
      start: new Date("2025-06-22T10:00:00"),
      end: new Date("2025-06-22T18:00:00"),
      type: "personal",
      color: "#00CED1"
    },
    {
      id: 9,
      title: "All-Hands Meeting",
      start: new Date("2025-07-01T13:00:00"),
      end: new Date("2025-07-01T14:30:00"),
      type: "work",
      color: "#9370DB"
    },
    {
      id: 10,
      title: "Fourth of July",
      start: new Date("2025-07-04"),
      end: new Date("2025-07-04"),
      type: "holiday",
      allDay: true,
      color: "#DC143C"
    },
    {
      id: 11,
      title: "Camping Weekend",
      start: new Date("2025-07-11T15:00:00"),
      end: new Date("2025-07-13T15:00:00"),
      type: "personal",
      color: "#228B22"
    },
    {
      id: 12,
      title: "Date Night",
      start: new Date("2025-07-18T19:00:00"),
      end: new Date("2025-07-18T22:00:00"),
      type: "personal",
      color: "#C71585"
    },
    {
      id: 13,
      title: "Team Offsite",
      start: new Date("2025-07-24T08:00:00"),
      end: new Date("2025-07-25T17:00:00"),
      type: "work",
      color: "#8A2BE2"
    },
    {
      id: 14,
      title: "Family BBQ",
      start: new Date("2025-08-03T13:00:00"),
      end: new Date("2025-08-03T18:00:00"),
      type: "personal",
      color: "#FF8C00"
    },
    {
      id: 15,
      title: "Quarterly Review",
      start: new Date("2025-08-07T10:00:00"),
      end: new Date("2025-08-07T12:00:00"),
      type: "work",
      color: "#4169E1"
    },
    {
      id: 16,
      title: "Wedding Anniversary",
      start: new Date("2025-08-10"),
      end: new Date("2025-08-10"),
      type: "personal",
      allDay: true,
      color: "#FFB6C1"
    },
    {
      id: 17,
      title: "Webinar: Future of AI",
      start: new Date("2025-08-15T16:00:00"),
      end: new Date("2025-08-15T17:30:00"),
      type: "work",
      color: "#20B2AA"
    },
    {
      id: 18,
      title: "Pool Party",
      start: new Date("2025-08-17T14:00:00"),
      end: new Date("2025-08-17T19:00:00"),
      type: "personal",
      color: "#87CEFA"
    },
    {
      id: 19,
      title: "Back to School Prep",
      start: new Date("2025-08-25T09:00:00"),
      end: new Date("2025-08-25T11:00:00"),
      type: "other",
      color: "#F08080"
    },
    {
      id: 20,
      title: "Volunteer Day",
      start: new Date("2025-08-30T08:00:00"),
      end: new Date("2025-08-30T14:00:00"),
      type: "other",
      color: "#B0C4DE"
    }
  ];


  ngOnInit(): void {
    // this.calendarService.getAllDates({ queryParams: { pageSize: 0 } }).subscribe({
    //   next: (res: any) => {
    //     if (res.succeed) {
    //       this.myEvents = res.data.list.map((item: any) => ({
    //         id: item.id,
    //         title: item.packageName || 'No Title',
    //         start: (item.starts),
    //         end: item.ends ? (item.ends) : null,
    //         color: this.getEventColor(item.packageId),
    //         type: 'work', // Adjust logic based on your needs
    //         allDay: true,
    //         displayTitle: `${item.packageName} - ${item.totalSeatsInBasic + item.totalSeatsInStandard + item.totalSeatsInPremium} Seats`
    //       }));
    //     } else {
    //       // this.myEvents = []
    //     }
    //     this.isLoading = false
    //   },
    //   error: (err: any) => {
    //     this.myEvents = []
    //
    //     console.log(err)
    //   }
    // })

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
  public onDateChange($event: any): void {
    console.log($event)
  }


}

