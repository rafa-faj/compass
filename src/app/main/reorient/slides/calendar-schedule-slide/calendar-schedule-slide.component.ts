import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

/** Slide for setting up calendar events. */
@Component({
  selector: 'app-calendar-schedule-slide',
  templateUrl: './calendar-schedule-slide.component.html',
  styleUrls: ['./calendar-schedule-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarScheduleSlideComponent implements OnInit {

  // --------------- INPUTS AND OUTPUTS ------------------
  @Output() nextSlide: EventEmitter<void> = new EventEmitter<void>();
  @Output() prevSlide: EventEmitter<void> = new EventEmitter<void>();

  // --------------- LOCAL UI STATE ----------------------
 

  constructor() { }

  ngOnInit() {
  }

  // --------------- DATA BINDING FUNCTIONS --------------


  // --------------- EVENT BINDING FUNCTIONS -------------


  // --------------- OTHER -------------------------------
}