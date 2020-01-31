import {
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DynamicContentOutletService } from './dynamic-content-outlet.service';

@Component({
  selector: 'app-dynamic-content-outlet',
  template: `<ng-container #container></ng-container>`
})
export class DynamicContentOutletComponent implements OnChanges, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  @Input() componentName: string;
  @Input() componentOptions: Object;
  private component: ComponentRef<{options: Object}>; // type: Object is a placeholder until a better, more precise type could be defined

  constructor(private dynamicContentService: DynamicContentOutletService) {  }

  public async ngOnChanges() {
    await this.renderComponent();
  }

  ngOnDestroy() {
    this.destroyComponent();
  }

  private async renderComponent() {
    this.destroyComponent();

    this.component = await this.dynamicContentService.GetComponent(this.componentName);
    this.component.instance.options = this.componentOptions;
    this.container.insert(this.component.hostView);
  }

  private destroyComponent() {
    if (this.component) {
      this.component.destroy();
      this.component = null;
    }
  }
}
