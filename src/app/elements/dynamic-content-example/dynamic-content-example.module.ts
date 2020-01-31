import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContentExampleComponent } from './dynamic-content-example/dynamic-content-example.component';



@NgModule({
  declarations: [DynamicContentExampleComponent],
  entryComponents: [DynamicContentExampleComponent],
  imports: [
    CommonModule
  ]
})
export class DynamicContentExampleModule {
  static dynamicComponentsMap = {
    DynamicContentExampleComponent
  };
 }
