// Each feature module that we would need available to the cms must be added to the registry here

interface RegistryItem {
  componentName: string;
  modulePath: string;
  moduleName: string;
}

export const DynamicContentOutletRegistry: RegistryItem[] = [
  {
    componentName: 'DynamicContentExampleComponent',
    modulePath: 'src/app/elements/dynamic-content-example/dynamic-content-example.module',
    moduleName: 'DynamicContentExampleModule'
  }
];
