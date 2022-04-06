import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {
  /* constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  private compile(params) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(DialogComponent)
      .create(this.injector);

    componentRef.instance.title = params.title;
    componentRef.instance.message = params.message;
    componentRef.instance.layout = params.template;
    componentRef.instance.singleAction = params.singleAction;
    componentRef.instance.confirmation = params.confirmButtonToken;
    componentRef.instance.cancelation = params.cancelButtonToken;

    if (params.confirmCallback) {
      componentRef.instance.confirmed.subscribe(() => {
        params.confirmCallback();
      });
    }

    if (params.cancelCallback) {
      componentRef.instance.cancelled.subscribe(() => {
        params.cancelCallback();
      });
    }

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);
  }

  show(
    title: string,
    message: string,
    confirmCallback: Function,
    cancelCallback?: Function,
    confirmButtonToken: string = 'common.actions.proceed',
    singleAction: boolean = false,
    cancelButtonToken: string = 'common.actions.cancel',
  ) {
    this.compile({ title, message, confirmCallback, cancelCallback, confirmButtonToken, singleAction, cancelButtonToken });
  }

  showTemplate(
    template: TemplateRef<any>,
    confirmCallback: Function,
    cancelCallback?: Function,
    confirmButtonToken: string = 'common.actions.proceed',
    singleAction: boolean = false,
    cancelButtonToken: string = 'common.actions.cancel',
  ) {
    this.compile({ template, confirmCallback, cancelCallback, confirmButtonToken, singleAction, cancelButtonToken });
  }

  // Show dialog and return an observable with the button clicked (true/false)
  confirm(title: string, message?: string, confirmButtonToken = 'common.actions.proceed'): Subject<any> {
    const response$ = new Subject();

    this.show(
      title,
      message,
      () => {
        response$.next(true);
        response$.complete();
      },
      () => {
        response$.next(false);
        response$.complete();
      },
      confirmButtonToken,
    );

    return response$;
  } */
}
