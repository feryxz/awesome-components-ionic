function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{xhj8:function(e,n,t){"use strict";t.r(n),t.d(n,"EditableLabelPageModule",(function(){return m}));var i,o,b,r=t("ofXK"),l=t("3Pt+"),a=t("TEn/"),c=t("tyNb"),u=t("fXoL"),d=t("Kxyh"),s=[{path:"",component:(i=function(){function e(n){_classCallCheck(this,e),this.formBuilder=n,this.setupForm()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"setupForm",value:function(){this.form=this.formBuilder.group({title:["",[l.p.required]],name:["",[l.p.required]],email:["",[l.p.email,l.p.required]],password:["",[l.p.minLength(6),l.p.required]]})}},{key:"onSubmit",value:function(){}}]),e}(),i.\u0275fac=function(e){return new(e||i)(u.Qb(l.b))},i.\u0275cmp=u.Kb({type:i,selectors:[["app-editable-label"]],decls:34,vars:11,consts:[["slot","start"],["defaultHref","/fivethree"],["slot","start",3,"ngModel","ngModelChange"],["value","Not in a form",3,"editing"],["value","Text with NgModel",3,"ngModel","editing","ngModelChange"],[3,"formGroup","ngSubmit"],["value","Title","type","title","formControlName","title",3,"editing"],["value","Your Name","formControlName","name",3,"editing"],["block","","color","primary","type","submit"]],template:function(e,n){1&e&&(u.Wb(0,"ion-header"),u.Wb(1,"ion-toolbar"),u.Wb(2,"ion-buttons",0),u.Rb(3,"ion-back-button",1),u.Vb(),u.Wb(4,"ion-title"),u.Mc(5,"Editable Label"),u.Vb(),u.Vb(),u.Vb(),u.Wb(6,"ion-content"),u.Wb(7,"ion-item"),u.Wb(8,"ion-label"),u.Mc(9,"Editing"),u.Vb(),u.Wb(10,"ion-checkbox",2),u.ec("ngModelChange",(function(e){return n.editing=e})),u.Vb(),u.Vb(),u.Wb(11,"ion-card"),u.Wb(12,"ion-card-content"),u.Rb(13,"fiv-editable-label",3),u.Vb(),u.Vb(),u.Wb(14,"ion-card"),u.Wb(15,"ion-card-content"),u.Wb(16,"ion-item"),u.Wb(17,"fiv-editable-label",4),u.ec("ngModelChange",(function(e){return n.model=e})),u.Vb(),u.Vb(),u.Wb(18,"ion-item"),u.Wb(19,"ion-label"),u.Mc(20),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(21,"form",5),u.ec("ngSubmit",(function(){return n.onSubmit()})),u.Wb(22,"ion-card"),u.Wb(23,"ion-toolbar"),u.Rb(24,"fiv-editable-label",6),u.Vb(),u.Wb(25,"ion-card-content"),u.Wb(26,"ion-item"),u.Rb(27,"fiv-editable-label",7),u.Vb(),u.Vb(),u.Vb(),u.Wb(28,"ion-button",8),u.Mc(29," Login "),u.Vb(),u.Vb(),u.Wb(30,"ion-card"),u.Wb(31,"ion-card-content"),u.Mc(32),u.jc(33,"json"),u.Vb(),u.Vb(),u.Vb()),2&e&&(u.Cb(10),u.oc("ngModel",n.editing),u.Cb(3),u.oc("editing",n.editing),u.Cb(4),u.oc("ngModel",n.model)("editing",n.editing),u.Cb(3),u.Nc(n.model),u.Cb(1),u.oc("formGroup",n.form),u.Cb(3),u.oc("editing",n.editing),u.Cb(3),u.oc("editing",n.editing),u.Cb(5),u.Oc(" ",u.kc(33,9,n.form.value)," "))},directives:[a.z,a.mb,a.l,a.h,a.i,a.kb,a.u,a.D,a.J,a.r,a.c,l.k,l.n,a.m,a.n,d.n,l.q,l.l,l.f,l.e,a.k],pipes:[r.h],styles:[""]}),i)}],f=((b=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:b}),b.\u0275inj=u.Nb({factory:function(e){return new(e||b)},imports:[[c.j.forChild(s)],c.j]}),b),m=((o=function e(){_classCallCheck(this,e)}).\u0275mod=u.Ob({type:o}),o.\u0275inj=u.Nb({factory:function(e){return new(e||o)},imports:[[r.c,l.g,a.nb,f,d.o,l.o]]}),o)}}]);