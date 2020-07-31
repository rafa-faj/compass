// -------------------------------------------------------
// This file has your input and output data.
// DO NOT edit this file, just view it. :)
// -------------------------------------------------------

import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PrePostTestAnimations } from './pre-post-test.animations';

@Component({
  selector: 'app-pre-post-test',
  templateUrl: './pre-post-test.component.html',
  styleUrls: ['./pre-post-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: PrePostTestAnimations,
})
export class PrePostTestComponent implements OnInit {


  // --------------- INPUTS AND OUTPUTS ------------------

  // This is the data that you will bind in your HTML!
  // These inputs pass dynamic text & images into your component.
  
  // This is the title of the activity:
  @Input() activityTitle: string;
  
  // This is the 3 chunks of text explaining the activity:
  @Input() text1: string;
  @Input() text2: string;
  @Input() text3: string;

  // This is the src URL's of the 3 images:
  @Input() image1: string;
  @Input() image2: string;
  @Input() image3: string;

  // This is the event you will emit:
  @Output() getStarted: EventEmitter<void> = new EventEmitter<void>();



  constructor() { }

  ngOnInit() {
  }
}
