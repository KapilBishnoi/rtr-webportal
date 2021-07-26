import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DynamicLabelConfigService {

  defaultLang:string = environment.defaultLanguage;

  constructor(private dynamicLabel:TranslateService) {
    this.dynamicLabel.use(this.defaultLang)
   }

   changeLanguage(languageType:string){
     this.dynamicLabel.use(languageType);
   }
}
