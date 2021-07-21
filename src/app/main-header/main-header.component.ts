import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicLabelConfigService } from '../services/dynamic-label-config.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private dynamicLabelConfigService:DynamicLabelConfigService) {

   }

  ngOnInit(): void {
  }

}
