import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

/** Slide introducing calendar synchronization. */
@Component({
  selector: 'app-calendar-info-slide',
  templateUrl: './calendar-info-slide.component.html',
  styleUrls: ['./calendar-info-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarInfoSlideComponent implements OnInit {

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