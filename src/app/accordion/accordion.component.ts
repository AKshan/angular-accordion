import { Component, OnInit } from '@angular/core';
import {AccordionService} from "../accordion.service";
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('slideWithFade', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }), // initial
        animate('100ms linear', style({ height: '*', opacity: 1 })) // final
      ]),
      transition(':leave', [style({ opacity: 1, height: '*' }), animate('100ms linear', style({ opacity: 0, height: 0 }))])
    ])
  ]
})
export class AccordionComponent implements OnInit {
  faqData: any ;
  accordion_desc = 'accDesc_0';

  constructor(private accordionService: AccordionService) {
    this.accordionService.getAccordion().subscribe(res => this.faqData = res);
  }

  ngOnInit(): void {
  }

  showDesc(id: any){
    this.accordion_desc = id;
  }

}
