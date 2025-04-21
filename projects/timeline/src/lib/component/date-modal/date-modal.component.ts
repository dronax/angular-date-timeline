import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { YearRangesPipe } from '../../shared/pipe/year-ranges.pipe';

@Component({
  selector: 'lib-date-modal',
  standalone: true,
  imports: [CommonModule, YearRangesPipe],
  templateUrl: './date-modal.component.html',
  styleUrl: './date-modal.component.css'
})
export class DateModalComponent implements OnInit {
  @Input() currentDate!: Date
  @Input() position: any
  @Output() onNewDateSelection = new EventEmitter<any>
  public isMonthView: boolean = true
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  currentYear = signal(0); // string value
  currentMonth: any
  ngOnInit(): void {
    console.log(this.currentDate)
    if (this.currentDate == undefined) {
      this.currentDate = new Date()
    }
    this.currentYear.set(this.currentDate.getFullYear())
    this.currentMonth = this.currentDate.getMonth()
  }
  public changeMonth(index: number): void {
    this.currentMonth = index
    let newDate = new Date()
    newDate.setFullYear(this.currentYear())
    newDate.setMonth(this.currentMonth)
    this.onNewDateSelection.emit(newDate)
  }
  public selectYear(year: number, index: number): void {
    let correctedYear = Math.floor(year / 10) * 10 + index
    this.currentYear.set(correctedYear)
    this.isMonthView = true
  }
  public increaseYear(): void {
    this.currentDate.setFullYear(this.currentDate.getFullYear() + 1)
    this.currentYear.set(this.currentDate.getFullYear())
    this.currentMonth = this.currentDate.getMonth()
  }
  public decreaseYear(): void {
    this.currentDate.setFullYear(this.currentDate.getFullYear() - 1)
    this.currentYear.set(this.currentDate.getFullYear())
    this.currentMonth = this.currentDate.getMonth()
  }
  public changeYearIndex(number: any): void {
    this.currentYear = number
  }
  public increaseYearIndex(): void {
    this.currentYear.set(this.currentYear() + 11)
  }
  public decreaseYearIndex(): void {
    this.currentYear.set(this.currentYear() - 11)
  }
  public toggleCalendarView(): void {
    this.isMonthView = !this.isMonthView
  }
}
