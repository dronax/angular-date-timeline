import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'lib-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent implements OnInit {
  @Input() events!: CalendarEvent[]
  @Output() showMore = new EventEmitter<any>()
  monthGrid: { date: Date; events: CalendarEvent[] }[][] = [];
  public selectedDay = new Date()
  currentDate: Date = new Date();
  ngOnInit(): void {
    this.generateMonthGrid()
  }


  generateMonthGrid() {
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const startDate = new Date(firstDay);
    startDate.setDate(firstDay.getDate() - firstDay.getDay());

    this.monthGrid = [];
    for (let week = 0; week < 6; week++) {
      const weekArray = [];
      for (let day = 0; day < 7; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + (week * 7) + day);

        const dayEvents = this.events.filter(event =>
          this.isDateInEventRange(currentDate, event)
        ).map(event => ({
          ...event,
          displayTitle: this.getEventDisplayTitle(currentDate, event)
        }));

        weekArray.push({
          date: currentDate,
          events: dayEvents
        });
      }
      this.monthGrid.push(weekArray);
    }
  }
  isDateInEventRange(date: Date, event: CalendarEvent): boolean {
    if (!event.start) return false;
    const eventStart = new Date((new Date(event.start).setHours(0, 0, 0, 0)));
    const eventEnd = event.end ? new Date((new Date(event.end).setHours(0, 0, 0, 0))) : eventStart;
    return date >= eventStart && date <= eventEnd;
  }

  goToNextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateMonthGrid();
  }

  goToPreviousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateMonthGrid();
  }
  getEventDisplayTitle(currentDate: Date, event: CalendarEvent): string {
    const eventStart = new Date(event.start);

    if (this.isSameDay(currentDate, eventStart)) {
      return event.title;
    }
    if (currentDate.getDay() == 0) {
      return event.title;
    }

    // For subsequent days, return a continuation marker or empty string
    return this.isDateInEventRange(currentDate, event) ? '' : '';
  }
  isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
  isLastDayOfEvent(currentDate: Date, event: CalendarEvent): boolean {
    if (!event.end) {
      return this.isSameDay(currentDate, new Date(event.start));
    }
    return this.isSameDay(currentDate, new Date(event.end));
  }

  isMiddleDayOfEvent(currentDate: Date, event: CalendarEvent): boolean {
    if (!event.end) {
      return false;
    }
    const start = new Date(event.start);
    const end = new Date(event.end);
    return currentDate > start && currentDate < end;
  }
  public viewMore(events: CalendarEvent[]): void {
    this.showMore.emit(events)
  }
  public viewEvent(): void {
  }
  public selectDay(date?: any): void {
    if (date) {
      this.selectedDay = date
    } else {
      this.selectedDay = new Date()
      this.currentDate = new Date();
      this.generateMonthGrid();
    }

  }

}
