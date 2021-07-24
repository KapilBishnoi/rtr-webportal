import { Component, OnInit } from '@angular/core';
import { DynamicLabelConfigService } from '../services/dynamic-label-config.service';

@Component({
  selector: 'sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private dynamicLabelConfigService:DynamicLabelConfigService) { }

  ngOnInit(): void {
  }

}
