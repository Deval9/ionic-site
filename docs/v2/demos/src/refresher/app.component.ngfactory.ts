/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import11 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/refresher/refresher.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/refresher/refresher-content.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/navigation/nav-controller';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/gestures/gesture-controller';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import31 from 'ionic-angular/components/navbar/navbar';
import * as import32 from 'ionic-angular/components/refresher/refresher-content';
import * as import33 from 'ionic-angular/components/refresher/refresher';
import * as import34 from '@angular/common/src/directives/ng_for';
import * as import35 from 'ionic-angular/components/list/list';
import * as import36 from 'ionic-angular/components/content/content';
import * as import37 from '@angular/core/src/security';
import * as import38 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import39 from '@angular/core/src/linker/query_list';
import * as import40 from 'ionic-angular/util/form';
import * as import41 from 'ionic-angular/components/item/item';
import * as import42 from '../../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import43 from 'ionic-angular/navigation/nav-controller-base';
import * as import44 from '@angular/core/src/linker/component_factory_resolver';
import * as import45 from 'ionic-angular/transitions/transition-controller';
import * as import46 from 'ionic-angular/navigation/deep-linker';
import * as import47 from 'ionic-angular/components/nav/nav';
export class Wrapper_ApiDemoPage {
  context:import0.ApiDemoPage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.ApiDemoPage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
export class Wrapper_ApiDemoApp {
  context:import0.ApiDemoApp;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.ApiDemoApp();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_ApiDemoPage_Host:import2.RenderComponentType = (null as any);
class _View_ApiDemoPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _MockProvider_0_4:import0.MockProvider;
  _ApiDemoPage_0_5:Wrapper_ApiDemoPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage_Host0,renderType_ApiDemoPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MockProvider_0_4 = new import0.MockProvider();
    this._ApiDemoPage_0_5 = new Wrapper_ApiDemoPage(this._MockProvider_0_4);
    this._appEl_0.initComponent(this._ApiDemoPage_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoPage_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MockProvider) && (0 === requestNodeIndex))) { return this._MockProvider_0_4; }
    if (((token === import0.ApiDemoPage) && (0 === requestNodeIndex))) { return this._ApiDemoPage_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApiDemoPage_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoPage_Host === (null as any))) { (renderType_ApiDemoPage_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoPageNgFactory:import9.ComponentFactory<import0.ApiDemoPage> = new import9.ComponentFactory<import0.ApiDemoPage>('ng-component',viewFactory_ApiDemoPage_Host0,import0.ApiDemoPage);
const styles_ApiDemoPage:any[] = ([] as any[]);
var renderType_ApiDemoPage:import2.RenderComponentType = (null as any);
class _View_ApiDemoPage0 extends import1.AppView<import0.ApiDemoPage> {
  _el_0:any;
  _Header_0_3:import10.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import11.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import12.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import13.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _Refresher_11_3:import14.Wrapper_Refresher;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import3.AppElement;
  _RefresherContent_13_4:import15.Wrapper_RefresherContent;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _List_17_3:import16.Wrapper_List;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import3.AppElement;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import17.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage0,renderType_ApiDemoPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import20.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import11.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import21.App),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import22.NavController,(null as any)),this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import12.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import23.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'Refresher',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import13.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import21.App),this.parentInjector.get(import24.Keyboard),this.parentInjector.get(import25.NgZone),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import26.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-refresher',(null as any));
    this._Refresher_11_3 = new import14.Wrapper_Refresher(this._Content_9_4.context,this.parentInjector.get(import25.NgZone),this.parentInjector.get(import27.GestureController));
    this._text_12 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-refresher-content',(null as any));
    this.renderer.setElementAttribute(this._el_13,'pullingText','Pull to refresh...');
    this.renderer.setElementAttribute(this._el_13,'refreshingText','Refreshing...');
    this._appEl_13 = new import3.AppElement(13,11,this,this._el_13);
    var compView_13:any = import15.viewFactory_RefresherContent0(this.viewUtils,this.injector(13),this._appEl_13);
    this._RefresherContent_13_4 = new import15.Wrapper_RefresherContent(this._Refresher_11_3.context,this.parentInjector.get(import18.Config));
    this._appEl_13.initComponent(this._RefresherContent_13_4.context,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_13.create(this._RefresherContent_13_4.context,([] as any[]),(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n  ',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_17_3 = new import16.Wrapper_List(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_17),this.renderer,this.parentInjector.get(import27.GestureController));
    this._text_18 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._appEl_19 = new import3.AppElement(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import28.TemplateRef_(this._appEl_19,viewFactory_ApiDemoPage1);
    this._NgFor_19_6 = new import17.Wrapper_NgFor(this._appEl_19.vcRef,this._TemplateRef_19_5,this.parentInjector.get(import29.IterableDiffers),this.ref);
    this._text_20 = this.renderer.createText(this._el_17,'\n  ',(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._text_16,
        this._el_17,
        this._text_21
      ]
      ),
      ([] as any[]).concat([this._el_11])
    ]
    ,(null as any));
    this._text_22 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_11,'ionRefresh',this.eventHandler(this._handle_ionRefresh_11_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_11,'ionPull',this.eventHandler(this._handle_ionPull_11_1.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    const subscription_0:any = this._Refresher_11_3.context.ionRefresh.subscribe(this.eventHandler(this._handle_ionRefresh_11_0.bind(this)));
    const subscription_1:any = this._Refresher_11_3.context.ionPull.subscribe(this.eventHandler(this._handle_ionPull_11_1.bind(this)));
    this._expr_9 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._text_22
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[
      subscription_0,
      subscription_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import31.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import32.RefresherContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._RefresherContent_13_4.context; }
    if (((token === import33.Refresher) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Refresher_11_3.context; }
    if (((token === import28.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import34.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    if (((token === import35.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._List_17_3.context; }
    if (((token === import36.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this._Refresher_11_3.detectChangesInternal(this,this._el_11,throwOnChange);
    const currVal_7:any = 'Pull to refresh...';
    this._RefresherContent_13_4.check_pullingText(currVal_7,throwOnChange,false);
    const currVal_8:any = 'Refreshing...';
    this._RefresherContent_13_4.check_refreshingText(currVal_8,throwOnChange,false);
    this._RefresherContent_13_4.detectChangesInternal(this,this._el_13,throwOnChange);
    this._List_17_3.detectChangesInternal(this,this._el_17,throwOnChange);
    const currVal_10:any = this.context.items;
    this._NgFor_19_6.check_ngForOf(currVal_10,throwOnChange,false);
    this._NgFor_19_6.detectChangesInternal(this,this._anchor_19,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = (this._Refresher_11_3.context.state !== 'inactive');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_11,'refresher-active',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._Refresher_11_3.context._top;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementStyle(this._el_11,'top',((this.viewUtils.sanitizer.sanitize(import37.SecurityContext.STYLE,currVal_6) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import37.SecurityContext.STYLE,currVal_6).toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_9:any = this._RefresherContent_13_4.context.r.state;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementAttribute(this._el_13,'state',((currVal_9 == (null as any))? (null as any): currVal_9.toString()));
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Refresher_11_3.context.ngOnDestroy();
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_ionRefresh_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.doRefresh($event)) !== false);
    return (true && pd_0);
  }
  private _handle_ionPull_11_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.doPulling($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ApiDemoPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ApiDemoPage> {
  if ((renderType_ApiDemoPage === (null as any))) { (renderType_ApiDemoPage = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ApiDemoPage,{})); }
  return new _View_ApiDemoPage0(viewUtils,parentInjector,declarationEl);
}
class _View_ApiDemoPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Item_0_4:import38.Wrapper_Item;
  _ItemContent_0_5:import38.Wrapper_ItemContent;
  _query_Label_0_0:import39.QueryList<any>;
  _query_Button_0_1:import39.QueryList<any>;
  _query_Icon_0_2:import39.QueryList<any>;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoPage1,renderType_ApiDemoPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import38.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import38.Wrapper_Item(this.parent.parentInjector.get(import40.Form),this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import38.Wrapper_ItemContent();
    this._query_Label_0_0 = new import39.QueryList<any>();
    this._query_Button_0_1 = new import39.QueryList<any>();
    this._query_Icon_0_2 = new import39.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    this._query_Label_0_0.reset(([] as any[]));
    this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_1]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import41.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._Item_0_4.context; }
    if (((token === import41.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ItemContent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Item_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this._ItemContent_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset(([] as any[]));
        this._Item_0_4.context._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset(([] as any[]));
        this._Item_0_4.context._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = import4.interpolate(1,'\n      ',this.context.$implicit,'\n    ');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_ApiDemoPage1(viewUtils,parentInjector,declarationEl);
}
var renderType_ApiDemoApp_Host:import2.RenderComponentType = (null as any);
class _View_ApiDemoApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ApiDemoApp_0_4:Wrapper_ApiDemoApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoApp_Host0,renderType_ApiDemoApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ApiDemoApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ApiDemoApp_0_4 = new Wrapper_ApiDemoApp();
    this._appEl_0.initComponent(this._ApiDemoApp_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ApiDemoApp_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ApiDemoApp) && (0 === requestNodeIndex))) { return this._ApiDemoApp_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApiDemoApp_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ApiDemoApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ApiDemoApp_Host === (null as any))) { (renderType_ApiDemoApp_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ApiDemoApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const ApiDemoAppNgFactory:import9.ComponentFactory<import0.ApiDemoApp> = new import9.ComponentFactory<import0.ApiDemoApp>('ng-component',viewFactory_ApiDemoApp_Host0,import0.ApiDemoApp);
const styles_ApiDemoApp:any[] = ([] as any[]);
var renderType_ApiDemoApp:import2.RenderComponentType = (null as any);
class _View_ApiDemoApp0 extends import1.AppView<import0.ApiDemoApp> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Nav_0_4:import42.Wrapper_Nav;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ApiDemoApp0,renderType_ApiDemoApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import42.viewFactory_Nav0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Nav_0_4 = new import42.Wrapper_Nav(this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import43.NavControllerBase,(null as any)),this.parentInjector.get(import21.App),this.parentInjector.get(import18.Config),this.parentInjector.get(import24.Keyboard),new import19.ElementRef(this._el_0),this.parentInjector.get(import25.NgZone),this.renderer,this.parentInjector.get(import44.ComponentFactoryResolver),this.parentInjector.get(import27.GestureController),this.parentInjector.get(import45.TransitionController),this.parentInjector.get(import46.DeepLinker,(null as any)));
    this._appEl_0.initComponent(this._Nav_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Nav_0_4.context,([] as any[]),(null as any));
    this.init(([] as any[]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import47.Nav) && (0 === requestNodeIndex))) { return this._Nav_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.root;
    this._Nav_0_4.check_root(currVal_0,throwOnChange,false);
    this._Nav_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_0_4.context.ngAfterViewInit(); } }
  }
}
export function viewFactory_ApiDemoApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ApiDemoApp> {
  if ((renderType_ApiDemoApp === (null as any))) { (renderType_ApiDemoApp = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_ApiDemoApp,{})); }
  return new _View_ApiDemoApp0(viewUtils,parentInjector,declarationEl);
}