!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{akgU:function(n,i,o){"use strict";o.d(i,"a",(function(){return b}));var r=o("vkgz"),c=o("AytR"),s=o("fXoL"),a=o("tk/3"),u=c.a.apiBaseURL,b=function(){var n=function(){function n(t){e(this,n),this.http=t}return t(n,[{key:"getPeople",value:function(){return this.http.get(u+"/test/list").pipe(Object(r.a)((function(e){return console.log("getPeople",e)})))}},{key:"getPerson",value:function(e){return this.http.get("".concat(u,"/test/").concat(e)).pipe(Object(r.a)((function(e){return console.log("getPerson",e)})))}},{key:"savePerson",value:function(e){return this.http.post("".concat(u,"/test/").concat(e.id),e).pipe(Object(r.a)((function(e){return console.log("getPerson",e)})))}}]),n}();return n.\u0275fac=function(e){return new(e||n)(s.Nb(a.a))},n.\u0275prov=s.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},hzZp:function(n,i,o){"use strict";o.r(i),o.d(i,"Feature1Module",(function(){return C}));var r,c,s=o("ofXK"),a=o("tyNb"),u=o("fXoL"),b=((c=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=u.Bb({type:c,selectors:[["app-feature1"]],decls:10,vars:0,consts:[["routerLink","overview","routerLinkActive","active"],["routerLink","list","routerLinkActive","active"],["routerLink","edit","routerLinkActive","active"]],template:function(e,n){1&e&&(u.Kb(0,"h2"),u.ac(1,"Feature1 Module"),u.Jb(),u.Kb(2,"nav"),u.Kb(3,"a",0),u.ac(4,"Overview"),u.Jb(),u.Kb(5,"a",1),u.ac(6,"List"),u.Jb(),u.Kb(7,"a",2),u.ac(8,"Edit"),u.Jb(),u.Jb(),u.Ib(9,"router-outlet"))},directives:[a.c,a.b,a.e],styles:["nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border-radius:1000px;background-color:#333;border:2px solid #333;color:#ddd;cursor:pointer;padding:.5em;margin:.25em;display:inline-block;text-decoration:none}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#666}"]}),c),p=((r=function(){function n(){e(this,n)}return t(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u.Bb({type:r,selectors:[["app-overview"]],decls:2,vars:0,template:function(e,n){1&e&&(u.Kb(0,"p"),u.ac(1,"overview works!"),u.Jb())},styles:[""]}),r),l=o("quSY"),f=o("qWvF"),d=function(e){return["../edit",e]};function v(e,n){if(1&e&&(u.Kb(0,"tr"),u.Kb(1,"td"),u.ac(2),u.Jb(),u.Kb(3,"td"),u.ac(4),u.Jb(),u.Kb(5,"td"),u.ac(6),u.Jb(),u.Kb(7,"td"),u.Kb(8,"a",1),u.ac(9,"Edit"),u.Jb(),u.Jb(),u.Jb()),2&e){var t=n.$implicit,i=n.index;u.xb(2),u.bc(i),u.xb(2),u.bc(t.name),u.xb(2),u.bc(t.age),u.xb(2),u.Ub("routerLink",u.Vb(4,d,i))}}var g,h,m,y,k=((g=function(){function n(t){e(this,n),this.service=t,this.subscriptions=new l.a}return t(n,[{key:"ngOnInit",value:function(){this.initSimpsons()}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}},{key:"initSimpsons",value:function(){var e=this,n=this.service.getPeople().subscribe((function(n){return e.simpsons=n}));this.subscriptions.add(n)}}]),n}()).\u0275fac=function(e){return new(e||g)(u.Hb(f.FeatureService))},g.\u0275cmp=u.Bb({type:g,selectors:[["app-list"]],decls:11,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(e,n){1&e&&(u.Kb(0,"p"),u.ac(1,"list works!"),u.Jb(),u.Kb(2,"table"),u.Kb(3,"tr"),u.Kb(4,"th"),u.ac(5,"ID"),u.Jb(),u.Kb(6,"th"),u.ac(7,"Name"),u.Jb(),u.Kb(8,"th"),u.ac(9,"Age"),u.Jb(),u.Jb(),u.Zb(10,v,10,6,"tr",0),u.Jb()),2&e&&(u.xb(10),u.Ub("ngForOf",n.simpsons))},directives:[s.i,a.c],styles:[""]}),g),J=o("3Pt+"),w={Feature1Component:b,OverviewComponent:p,ListComponent:k,EditComponent:(h=function(){function n(t,i){e(this,n),this.route=t,this.service=i,this.person={}}return t(n,[{key:"ngOnInit",value:function(){var e=this;this.subscriptions=new l.a,this.id=Number(this.route.snapshot.paramMap.get("id"));var n=this.service.getPerson(this.id).subscribe((function(n){e.person=n,e.person.id=e.id,e.original=JSON.parse(JSON.stringify(e.person))}));this.subscriptions.add(n)}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}},{key:"save",value:function(){console.log("save",this.person),this.service.savePerson(this.person).subscribe((function(e){return console.log("save",e)}))}},{key:"reset",value:function(){console.log("reset",this.person,this.original),this.person=JSON.parse(JSON.stringify(this.original))}}]),n}(),h.\u0275fac=function(e){return new(e||h)(u.Hb(a.a),u.Hb(f.FeatureService))},h.\u0275cmp=u.Bb({type:h,selectors:[["app-edit"]],decls:8,vars:4,consts:[["type","number","name","id","readonly","",3,"ngModel","ngModelChange"],["type","text","name","name","autocomplete","off",3,"ngModel","ngModelChange"],["type","number","name","age",3,"ngModel","ngModelChange"],["type","button","name","save","value","Save",3,"click"],["type","button","name","reset","value","Reset",3,"click"]],template:function(e,n){1&e&&(u.Kb(0,"p"),u.ac(1),u.Jb(),u.Kb(2,"form"),u.Kb(3,"input",0),u.Qb("ngModelChange",(function(e){return n.person.id=e})),u.Jb(),u.Kb(4,"input",1),u.Qb("ngModelChange",(function(e){return n.person.name=e})),u.Jb(),u.Kb(5,"input",2),u.Qb("ngModelChange",(function(e){return n.person.age=e})),u.Jb(),u.Kb(6,"input",3),u.Qb("click",(function(){return n.save()})),u.Jb(),u.Kb(7,"input",4),u.Qb("click",(function(){return n.reset()})),u.Jb(),u.Jb()),2&e&&(u.xb(1),u.cc("Edit ",n.id,""),u.xb(2),u.Ub("ngModel",n.person.id),u.xb(1),u.Ub("ngModel",n.person.name),u.xb(1),u.Ub("ngModel",n.person.age))},directives:[J.i,J.d,J.e,J.g,J.a,J.c,J.f],styles:[""]}),h)},K=[{path:"",component:w.Feature1Component,children:[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"overview",component:w.OverviewComponent},{path:"list",component:w.ListComponent},{path:"edit/:id",component:w.EditComponent}]}],O=((y=function n(){e(this,n)}).\u0275mod=u.Fb({type:y}),y.\u0275inj=u.Eb({factory:function(e){return new(e||y)},imports:[[a.d.forChild(K)],a.d]}),y),C=((m=function n(){e(this,n)}).\u0275mod=u.Fb({type:m}),m.\u0275inj=u.Eb({factory:function(e){return new(e||m)},imports:[[s.b,J.b,O]]}),m)},iekl:function(e,n){},qWvF:function(e,n,t){"use strict";var i=t("akgU");t.d(n,"FeatureService",(function(){return i.a})),t("iekl")}}])}();