import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicLabelConfigService {

  constructor(private dynamicLabel:TranslateService) {
    this.dynamicLabel.use('en')
   }

   changeLanguage(languageType:string){
     this.dynamicLabel.use(languageType);
   }
}
