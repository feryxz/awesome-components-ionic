(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0EQZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return r}));var i=n("7+OI"),a=n("LRne"),o=n("XNiG"),s=n("fXoL");class d{}function r(e){return e&&"function"==typeof e.connect}class c extends d{constructor(e){super(),this._data=e}connect(){return Object(i.a)(this._data)?this._data:Object(a.a)(this._data)}disconnect(){}}class l{constructor(e=!1,t,n=!0){this._multiple=e,this._emitChanges=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new o.a,t&&t.length&&(e?t.forEach(e=>this._markSelected(e)):this._markSelected(t[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...e){this._verifyValueAssignment(e),e.forEach(e=>this._markSelected(e)),this._emitChangeEvent()}deselect(...e){this._verifyValueAssignment(e),e.forEach(e=>this._unmarkSelected(e)),this._emitChangeEvent()}toggle(e){this.isSelected(e)?this.deselect(e):this.select(e)}clear(){this._unmarkAll(),this._emitChangeEvent()}isSelected(e){return this._selection.has(e)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){this.isSelected(e)||(this._multiple||this._unmarkAll(),this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){if(e.length>1&&!this._multiple)throw Error("Cannot pass multiple values into SelectionModel with single-value mode.")}}let p=(()=>{class e{constructor(){this._listeners=[]}notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(s.Mb)({factory:function(){return new e},token:e,providedIn:"root"}),e})()},"7+OI":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("HDdC");function a(e){return!!e&&(e instanceof i.a||"function"==typeof e.lift&&"function"==typeof e.subscribe)}},cEUy:function(e,t,n){"use strict";n.r(t),n.d(t,"ExpansionPageModule",(function(){return Y}));var i=n("ofXK"),a=n("3Pt+"),o=n("tyNb"),s=n("TEn/"),d=n("fXoL"),r=n("8LU1"),c=n("XNiG"),l=n("quSY"),p=n("0EQZ");let h=0,u=(()=>{class e{constructor(){this._stateChanges=new c.a,this._openCloseAllActions=new c.a,this.id="cdk-accordion-"+h++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=Object(r.c)(e)}openAll(){this._openCloseAll(!0)}closeAll(){this._openCloseAll(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete()}_openCloseAll(e){this.multi&&this._openCloseAllActions.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=d.Lb({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[d.Ab]}),e})(),b=0,m=(()=>{class e{constructor(e,t,n){this.accordion=e,this._changeDetectorRef=t,this._expansionDispatcher=n,this._openCloseAllSubscription=l.a.EMPTY,this.closed=new d.o,this.opened=new d.o,this.destroyed=new d.o,this.expandedChange=new d.o,this.id="cdk-accordion-child-"+b++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=Object(r.c)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(r.c)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return e.\u0275fac=function(t){return new(t||e)(d.Qb(u,12),d.Qb(d.h),d.Qb(p.d))},e.\u0275dir=d.Lb({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[d.Bb([{provide:u,useValue:void 0}])]}),e})(),g=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)}}),e})();var x=n("+rOU"),_=n("u47x"),f=n("FtGj"),y=n("/uUt"),w=n("JX91"),O=n("pLZG"),v=n("IzEk"),C=n("EY2u"),E=n("VRyK"),A=n("R0Ic"),j=n("R1ws");const S=["body"];function T(e,t){}const k=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],H=["mat-expansion-panel-header","*","mat-action-row"],P=function(e,t){return{collapsedHeight:e,expandedHeight:t}},M=function(e,t){return{value:e,params:t}};function V(e,t){if(1&e&&d.Rb(0,"span",2),2&e){const e=d.ic();d.oc("@indicatorRotate",e._getExpandedState())}}const D=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],I=["mat-panel-title","mat-panel-description","*"],Q=new d.r("MAT_ACCORDION"),R={indicatorRotate:Object(A.o)("indicatorRotate",[Object(A.l)("collapsed, void",Object(A.m)({transform:"rotate(0deg)"})),Object(A.l)("expanded",Object(A.m)({transform:"rotate(180deg)"})),Object(A.n)("expanded <=> collapsed, void => collapsed",Object(A.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),expansionHeaderHeight:Object(A.o)("expansionHeight",[Object(A.l)("collapsed, void",Object(A.m)({height:"{{collapsedHeight}}"}),{params:{collapsedHeight:"48px"}}),Object(A.l)("expanded",Object(A.m)({height:"{{expandedHeight}}"}),{params:{expandedHeight:"64px"}}),Object(A.n)("expanded <=> collapsed, void => collapsed",Object(A.h)([Object(A.j)("@indicatorRotate",Object(A.f)(),{optional:!0}),Object(A.e)("225ms cubic-bezier(0.4,0.0,0.2,1)")]))]),bodyExpansion:Object(A.o)("bodyExpansion",[Object(A.l)("collapsed, void",Object(A.m)({height:"0px",visibility:"hidden"})),Object(A.l)("expanded",Object(A.m)({height:"*",visibility:"visible"})),Object(A.n)("expanded <=> collapsed, void => collapsed",Object(A.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])};let W=(()=>{class e{constructor(e){this._template=e}}return e.\u0275fac=function(t){return new(t||e)(d.Qb(d.M))},e.\u0275dir=d.Lb({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e})(),L=0;const z=new d.r("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let N=(()=>{class e extends m{constructor(e,t,n,i,a,o,s){super(e,t,n),this._viewContainerRef=i,this._animationMode=o,this._hideToggle=!1,this.afterExpand=new d.o,this.afterCollapse=new d.o,this._inputChanges=new c.a,this._headerId="mat-expansion-panel-header-"+L++,this._bodyAnimationDone=new c.a,this.accordion=e,this._document=a,this._bodyAnimationDone.pipe(Object(y.a)((e,t)=>e.fromState===t.fromState&&e.toState===t.toState)).subscribe(e=>{"void"!==e.fromState&&("expanded"===e.toState?this.afterExpand.emit():"collapsed"===e.toState&&this.afterCollapse.emit())}),s&&(this.hideToggle=s.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=Object(r.c)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe(Object(w.a)(null),Object(O.a)(()=>this.expanded&&!this._portal),Object(v.a)(1)).subscribe(()=>{this._portal=new x.f(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}return e.\u0275fac=function(t){return new(t||e)(d.Qb(Q,12),d.Qb(d.h),d.Qb(p.d),d.Qb(d.P),d.Qb(i.e),d.Qb(j.a,8),d.Qb(z,8))},e.\u0275cmp=d.Kb({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,t,n){var i;1&e&&d.Ib(n,W,!0),2&e&&d.yc(i=d.fc())&&(t._lazyContent=i.first)},viewQuery:function(e,t){var n;1&e&&d.Rc(S,!0),2&e&&d.yc(n=d.fc())&&(t._body=n.first)},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,t){2&e&&d.Gb("mat-expanded",t.expanded)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-expansion-panel-spacing",t._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[d.Bb([{provide:Q,useValue:void 0}]),d.zb,d.Ab],ngContentSelectors:H,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(d.nc(k),d.mc(0),d.Wb(1,"div",0,1),d.ec("@bodyExpansion.done",(function(e){return t._bodyAnimationDone.next(e)})),d.Wb(3,"div",2),d.mc(4,1),d.Kc(5,T,0,0,"ng-template",3),d.Vb(),d.mc(6,2),d.Vb()),2&e&&(d.Cb(1),d.oc("@bodyExpansion",t._getExpandedState())("id",t.id),d.Db("aria-labelledby",t._headerId),d.Cb(4),d.oc("cdkPortalOutlet",t._portal))},directives:[x.b],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[R.bodyExpansion]},changeDetection:0}),e})(),K=(()=>{class e{constructor(e,t,n,i,a){this.panel=e,this._element=t,this._focusMonitor=n,this._changeDetectorRef=i,this._parentChangeSubscription=l.a.EMPTY,this._animationsDisabled=!0;const o=e.accordion?e.accordion._stateChanges.pipe(Object(O.a)(e=>!(!e.hideToggle&&!e.togglePosition))):C.a;this._parentChangeSubscription=Object(E.a)(e.opened,e.closed,o,e._inputChanges.pipe(Object(O.a)(e=>!!(e.hideToggle||e.disabled||e.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Object(O.a)(()=>e._containsFocus())).subscribe(()=>n.focusVia(t,"program")),n.monitor(t).subscribe(t=>{t&&e.accordion&&e.accordion._handleHeaderFocus(this)}),a&&(this.expandedHeight=a.expandedHeight,this.collapsedHeight=a.collapsedHeight)}_animationStarted(){this._animationsDisabled=!1}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_keydown(e){switch(e.keyCode){case f.l:case f.d:Object(f.q)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e="program",t){this._focusMonitor.focusVia(this._element,e,t)}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return e.\u0275fac=function(t){return new(t||e)(d.Qb(N,1),d.Qb(d.l),d.Qb(_.h),d.Qb(d.h),d.Qb(z,8))},e.\u0275cmp=d.Kb({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:19,hostBindings:function(e,t){1&e&&(d.Hb("@expansionHeight.start",(function(){return t._animationStarted()})),d.ec("click",(function(){return t._toggle()}))("keydown",(function(e){return t._keydown(e)}))),2&e&&(d.Db("id",t.panel._headerId)("tabindex",t.disabled?-1:0)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),d.Qc("@.disabled",t._animationsDisabled)("@expansionHeight",d.uc(16,M,t._getExpandedState(),d.uc(13,P,t.collapsedHeight,t.expandedHeight))),d.Gb("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after","after"===t._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===t._getTogglePosition()))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},ngContentSelectors:I,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,t){1&e&&(d.nc(D),d.Wb(0,"span",0),d.mc(1),d.mc(2,1),d.mc(3,2),d.Vb(),d.Kc(4,V,1,1,"span",1)),2&e&&(d.Cb(4),d.oc("ngIf",t._showToggle()))},directives:[i.o],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;position:relative}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}\n'],encapsulation:2,data:{animation:[R.indicatorRotate,R.expansionHeaderHeight]},changeDetection:0}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=d.Lb({type:e,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=d.Lb({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),e})(),q=(()=>{class e extends u{constructor(){super(...arguments),this._ownHeaders=new d.E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=Object(r.c)(e)}ngAfterContentInit(){this._headers.changes.pipe(Object(w.a)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(e=>e.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new _.g(this._ownHeaders).withWrap()}_handleHeaderKeydown(e){const{keyCode:t}=e,n=this._keyManager;t===f.f?Object(f.q)(e)||(n.setFirstItemActive(),e.preventDefault()):t===f.c?Object(f.q)(e)||(n.setLastItemActive(),e.preventDefault()):this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}}return e.\u0275fac=function(t){return G(t||e)},e.\u0275dir=d.Lb({type:e,selectors:[["mat-accordion"]],contentQueries:function(e,t,n){var i;1&e&&d.Ib(n,K,!0),2&e&&d.yc(i=d.fc())&&(t._headers=i)},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,t){2&e&&d.Gb("mat-accordion-multi",t.multi)},inputs:{multi:"multi",displayMode:"displayMode",togglePosition:"togglePosition",hideToggle:"hideToggle"},exportAs:["matAccordion"],features:[d.Bb([{provide:Q,useExisting:e}]),d.zb]}),e})();const G=d.Yb(q);let X=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)},imports:[[i.c,g,x.e]]}),e})();const B=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Kb({type:e,selectors:[["app-expansion"]],decls:23,vars:1,consts:[["slot","start"],[1,"ion-padding"],[3,"opened","closed"]],template:function(e,t){1&e&&(d.Wb(0,"ion-header"),d.Wb(1,"ion-toolbar"),d.Wb(2,"ion-buttons",0),d.Rb(3,"ion-back-button"),d.Vb(),d.Wb(4,"ion-title"),d.Mc(5,"Expansion Panel"),d.Vb(),d.Vb(),d.Vb(),d.Wb(6,"ion-content",1),d.Wb(7,"mat-accordion"),d.Wb(8,"mat-expansion-panel"),d.Wb(9,"mat-expansion-panel-header"),d.Wb(10,"mat-panel-title"),d.Mc(11," Personal data "),d.Vb(),d.Wb(12,"mat-panel-description"),d.Mc(13," Type your name and age "),d.Vb(),d.Vb(),d.Mc(14," Panel Content "),d.Vb(),d.Wb(15,"mat-expansion-panel",2),d.ec("opened",(function(){return t.panelOpenState=!0}))("closed",(function(){return t.panelOpenState=!1})),d.Wb(16,"mat-expansion-panel-header"),d.Wb(17,"mat-panel-title"),d.Mc(18," Self aware panel "),d.Vb(),d.Wb(19,"mat-panel-description"),d.Mc(20),d.Vb(),d.Vb(),d.Wb(21,"p"),d.Mc(22,"I'm visible because I am open"),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&e&&(d.Cb(20),d.Oc(" Currently I am ",t.panelOpenState?"open":"closed"," "))},directives:[s.z,s.mb,s.l,s.h,s.i,s.kb,s.u,q,N,K,U,F],styles:[""]}),e})()}];let Y=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(t){return new(t||e)},imports:[[i.c,a.g,s.nb,o.j.forChild(B),X]]}),e})()}}]);