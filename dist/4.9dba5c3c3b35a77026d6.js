(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IYw8:function(i,t,e){"use strict";e.r(t),e.d(t,"AppsModule",function(){return D});var n=e("ofXK"),a=e("1kSV"),o=e("tyNb"),r=e("fXoL"),c=e("LRne");const s=[{id:1,image:"assets/images/blog/101.jpg",heading:"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",subHeading:"Labore irure irure laborum quis tempor aliqua. Dude",blogDate:"Feb 19, 2020",blogDetail:"Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat."},{id:2,image:"assets/images/blog/202.jpg",heading:"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",subHeading:"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.",blogDate:"Feb 17, 2020",blogDetail:"Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla."},{id:3,image:"assets/images/blog/303.jpg",heading:"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.",subHeading:"Adipisicing sit minim occaecat nulla proident exercitation do laboris.",blogDate:"Feb 15, 2020",blogDetail:"Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis."},{id:4,image:"assets/images/blog/404.jpg",heading:"Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.",subHeading:"Labore irure irure laborum quis tempor aliqua. Dude",blogDate:"Feb 19, 2020",blogDetail:"Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat."},{id:5,image:"assets/images/blog/505.jpg",heading:"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",subHeading:"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.",blogDate:"Feb 17, 2020",blogDetail:"Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla."},{id:6,image:"assets/images/blog/707.jpg",heading:"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.",subHeading:"Adipisicing sit minim occaecat nulla proident exercitation do laboris.",blogDate:"Feb 15, 2020",blogDetail:"Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis."},{id:7,image:"assets/images/blog/808.jpg",heading:"Dolore pariatur amet ullamco aliquip mollit aliqua qui.",subHeading:"Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.",blogDate:"Feb 17, 2020",blogDetail:"Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla."},{id:8,image:"assets/images/blog/909.jpg",heading:"Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.",subHeading:"Adipisicing sit minim occaecat nulla proident exercitation do laboris.",blogDate:"Feb 15, 2020",blogDetail:"Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis."}];var l=e("tk/3");let b=(()=>{class i{constructor(i){this.http=i,this.Blogs=[],this.loginStatusService=!1,this.detailId=-1,this.showEdit=!1}getBlog(){return Object(c.a)(s)}addPost(i){this.Blogs.splice(0,0,i)}deletePost(i){this.Blogs=this.Blogs.filter(t=>t.id!==i)}}return i.\u0275fac=function(t){return new(t||i)(r.Ub(l.a))},i.\u0275prov=r.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function u(i,t){if(1&i&&(r.Nb(0,"div",12),r.Nb(1,"li"),r.Nb(2,"div",13),r.Nb(3,"div",14),r.Nb(4,"div",15),r.Nb(5,"h5",16),r.vc(6),r.Mb(),r.Jb(7,"img",17),r.Mb(),r.Nb(8,"h5",16),r.vc(9),r.Mb(),r.Nb(10,"h5",16),r.vc(11),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&i){const i=t.$implicit;r.wb(6),r.wc(i.name),r.wb(1),r.ec("src",i.image,r.oc),r.wb(2),r.xc(" ",i.points," "),r.wb(2),r.xc(" Divisione: ",i.division," ")}}let d=(()=>{class i{constructor(i,t,e){this.service=i,this.router=t,this.http=e,this.blogsDetail=[],this.getData(),this.service.showEdit=!1}getData(){return i=this,void 0,e=function*(){const i=yield fetch("./assets/JSON/player.json"),t=yield i.json();this.relayOn=t},new((t=void 0)||(t=Promise))(function(n,a){function o(i){try{c(e.next(i))}catch(t){a(t)}}function r(i){try{c(e.throw(i))}catch(t){a(t)}}function c(i){var e;i.done?n(i.value):(e=i.value,e instanceof t?e:new t(function(i){i(e)})).then(o,r)}c((e=e.apply(i,[])).next())});var i,t,e}ngOnInit(){}print(){console.log("A")}loginClick(){this.router.navigate(["/login"])}newPost(){this.router.navigate(["/post"])}viewDetail(i){this.service.detailId=i,this.service.loginStatusService&&(this.service.showEdit=!0),this.router.navigate(["/blogDetail",i])}}return i.\u0275fac=function(t){return new(t||i)(r.Ib(b),r.Ib(o.c),r.Ib(l.a))},i.\u0275cmp=r.Cb({type:i,selectors:[["app-blog"]],decls:19,vars:1,consts:[["id","banner-innerpage",1,"banner-innerpage",2,"background-image","url(assets/images/landingpage/banner_tt.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"subtitle","op-5",2,"margin-left","60%","line-height","20px"],[1,"bg-light","spacer","feature1"],[1,"col-md-8","no-trans","text-center"],[1,"title"],[1,"subtitle"],["id","contents",1,"row","m-t-40","justify-content-center"],[3,"click"],[1,"serv"],["class","col-md-4 wrap-feature1-box",4,"ngFor","ngForOf"],[1,"col-md-4","wrap-feature1-box"],["data-aos","fade-right","data-aos-duration","1200",1,"card","card-shadow"],[1,"card-body","p-40","text-center"],[1,"icon-space","display-5"],[1,"font-medium"],[2,"width","240px","height","179px","object-fit","cover",3,"src"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div"),r.Nb(4,"h5",3),r.vc(5," \u201cLo sport insegna che per la vittoria non basta il talento, ci vuole il lavoro e il sacrificio quotidiano. Nello sport come nella vita\u201d "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"div",4),r.Nb(7,"div",1),r.Nb(8,"div",2),r.Nb(9,"div",5),r.Nb(10,"h2",6),r.vc(11,"Membri del team"),r.Mb(),r.Nb(12,"h6",7),r.vc(13," Qua sotto trovi tutti i membri del team Corridonia Tennis-tavolo "),r.Mb(),r.Mb(),r.Mb(),r.Nb(14,"div",8),r.Nb(15,"a",9),r.Xb("click",function(){return t.print()}),r.Nb(16,"div",10),r.Nb(17,"ul"),r.tc(18,u,12,4,"div",11),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&i&&(r.wb(18),r.ec("ngForOf",t.relayOn))},directives:[n.j],styles:[".serv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding-left:0}.serv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;flex:0 0 33.333333%}#contents[_ngcontent-%COMP%]{display:contents;text-align:center}@media (max-width:992px){#banner-innerpage[_ngcontent-%COMP%]{display:none}#contents[_ngcontent-%COMP%]{margin-top:35%;display:block}}"]}),i})();function p(i,t){if(1&i&&(r.Nb(0,"div",2),r.Nb(1,"div",3),r.Nb(2,"div",4),r.Nb(3,"div",5),r.Jb(4,"i"),r.Mb(),r.Nb(5,"h5",6),r.vc(6),r.Mb(),r.Nb(7,"p",7),r.vc(8),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&i){const i=t.$implicit;r.wb(4),r.yb(i.icon),r.wb(2),r.wc(i.field),r.wb(2),r.xc(" ",i.fieldText," ")}}let g=(()=>{class i{constructor(){this.relayOn=[{icon:"sl-icon-envelope-open text-info-gradiant",field:"Mandaci una mail",fieldText:"fabrizio.perticarari@virgilio.it"},{icon:"sl-icon-call-end text-info-gradiant",field:"Chiamaci",fieldText:"Chiamaci al +39 3663467422"},{icon:"sl-icon-map text-info-gradiant",field:"Vieni da noi",fieldText:"Vieni a trovarci in loco"}]}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Cb({type:i,selectors:[["app-relay-on"]],decls:2,vars:1,consts:[[1,"row","m-t-40"],["class","col-md-4 wrap-feature1-box",4,"ngFor","ngForOf"],[1,"col-md-4","wrap-feature1-box"],["data-aos","fade-right","data-aos-duration","1200",1,"card","card-shadow"],[1,"card-body","p-40","text-center"],[1,"icon-space","display-5"],[1,"font-medium"],[1,"m-t-20"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.tc(1,p,9,4,"div",1),r.Mb()),2&i&&(r.wb(1),r.ec("ngForOf",t.relayOn))},directives:[n.j],styles:[""]}),i})(),m=(()=>{class i{constructor(i){this.service=i,this.service.showEdit=!1}showMap(){window.open("http://maps.google.com/maps?daddr=43.2480501,13.5074901","_blank")}}return i.\u0275fac=function(t){return new(t||i)(r.Ib(b))},i.\u0275cmp=r.Cb({type:i,selectors:[["app-about"]],decls:29,vars:0,consts:[[1,"banner-innerpage",2,"background-image","url(assets/images/landingpage/banner_tt.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","no-trans","align-self-center","text-center"],[1,"title"],[1,"bg-light","spacer","feature1"],[1,"col-md-7","text-center","no-trans",2,"font-size","x-large","color","black"],[1,"subtitle"],[1,"spacer"],[1,"row","justify-content-center","m-b-30"],[1,"col-md-7","text-center","no-trans"],["data-toggle","collapse",1,"btn","btn-info-gradiant","btn-md","btn-arrow","m-t-20",3,"click"],[1,"ti-arrow-right"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"h1",4),r.vc(5,"Chi siamo"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"div",5),r.Nb(7,"div",1),r.Nb(8,"div",2),r.Nb(9,"div",6),r.vc(10," Siamo la squadra di Tennis Tavolo di Corridonia da 30 anni, insieme abbiamo raggiunto molti traguardi e soddisfazioni. "),r.Jb(11,"br"),r.Jb(12,"br"),r.Jb(13,"br"),r.Nb(14,"h2",4),r.vc(15,"Contattaci"),r.Mb(),r.Nb(16,"h6",7),r.vc(17," Puoi contattarci in diversi modi: "),r.Mb(),r.Mb(),r.Mb(),r.Jb(18,"app-relay-on"),r.Mb(),r.Mb(),r.Nb(19,"div",8),r.Nb(20,"div",1),r.Nb(21,"div",9),r.Nb(22,"div",10),r.Nb(23,"h2",4),r.vc(24," Vieni a trovarci e divertiti con noi! "),r.Mb(),r.Nb(25,"a",11),r.Xb("click",function(){return t.showMap()}),r.Nb(26,"span"),r.vc(27,"Clicca per vedere dove siamo nella mappa"),r.Jb(28,"i",12),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb())},directives:[g],styles:[""]}),i})(),v=(()=>{class i{constructor(i,t,e){this.service=t,this.router=e,this.blogDetail=null,this.id=i.snapshot.paramMap.get("id")}ngOnInit(){this.blogDetail=this.service.Blogs.filter(i=>i.id===+this.id)[0]}loginClick(){this.router.navigate(["/login"])}newPost(){this.service.showEdit=!1,this.router.navigate(["/post"])}editPost(){var i;this.service.showEdit=!1,this.router.navigate(["/editPost",null===(i=this.blogDetail)||void 0===i?void 0:i.id])}}return i.\u0275fac=function(t){return new(t||i)(r.Ib(o.a),r.Ib(b),r.Ib(o.c))},i.\u0275cmp=r.Cb({type:i,selectors:[["app-blog-detail"]],decls:31,vars:4,consts:[[1,"banner-innerpage",2,"background-image","url(assets/images/landingpage/banner-bg2.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","align-self-center","text-center"],[1,"title"],[1,"subtitle","op-5"],[1,"col-md-8","no-trans"],[1,"mini-spacer"],[1,"d-flex","align-items-center","text-uppercase","m-t-40","font-13","font-medium"],["routerLink","",1,"link"],[1,"ml-auto"],[1,"title","font-light"],[1,"m-t-30","m-b-30"],[1,"m-t-30"],["type","button",1,"btn","bg-facebook","btn-rounded","mr-3"],[1,"fa","fa-facebook"],["type","button",1,"btn","bg-twitter","btn-rounded"],[1,"fa","fa-twitter"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"h1",4),r.vc(5,"BLOG DETAIL PAGE"),r.Mb(),r.Nb(6,"h5",5),r.vc(7," We are Small Team of Creative People working together "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(8,"div",1),r.Nb(9,"div",2),r.Nb(10,"div",6),r.Nb(11,"div",7),r.Nb(12,"div",8),r.Nb(13,"a",9),r.vc(14,"John Deo"),r.Mb(),r.Nb(15,"div",10),r.Nb(16,"a",9),r.vc(17),r.Mb(),r.Mb(),r.Mb(),r.Nb(18,"h2",11),r.vc(19),r.Mb(),r.Nb(20,"p",12),r.vc(21),r.Mb(),r.Nb(22,"p",12),r.vc(23),r.Mb(),r.Nb(24,"div",13),r.Nb(25,"button",14),r.Jb(26,"i",15),r.vc(27," Facebook "),r.Mb(),r.Nb(28,"button",16),r.Jb(29,"i",17),r.vc(30," Twitter "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&i&&(r.wb(17),r.xc("",null==t.blogDetail?null:t.blogDetail.blogDate," "),r.wb(2),r.xc(" ",null==t.blogDetail?null:t.blogDetail.heading," "),r.wb(2),r.xc(" ",null==t.blogDetail?null:t.blogDetail.subHeading," "),r.wb(2),r.xc(" ",null==t.blogDetail?null:t.blogDetail.blogDetail," "))},directives:[o.e],styles:[""]}),i})();const f=function(i){return{active:i}},h=function(){return["active"]};let M=(()=>{class i{constructor(i){this.router=i,this.logoutStatus=!1,this.currentUrl=""}ngOnInit(){this.currentUrl="/",this.router.events.subscribe(i=>{i instanceof o.b&&(this.currentUrl=i.url)})}isHomeActive(){return"/"===this.currentUrl}}return i.\u0275fac=function(t){return new(t||i)(r.Ib(o.c))},i.\u0275cmp=r.Cb({type:i,selectors:[["app-banner-navigation"]],decls:14,vars:7,consts:[["id","h6-info",1,"navbar-collapse","hover-dropdown","font-14","ml-auto"],["id","title-page"],[1,"title",2,"color","white"],["id","ul-id",1,"navbar-nav","ml-auto"],[1,"nav-item",3,"ngClass"],["routerLink","/",1,"nav-link"],[1,"nav-item",3,"routerLinkActive"],["routerLink","/about",1,"nav-link"],["routerLink","/orari",1,"nav-link"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"h1",2),r.vc(3,"Tennis tavolo Corridonia"),r.Mb(),r.Mb(),r.Nb(4,"ul",3),r.Nb(5,"li",4),r.Nb(6,"a",5),r.vc(7," Home "),r.Mb(),r.Mb(),r.Nb(8,"li",6),r.Nb(9,"a",7),r.vc(10," Chi siamo "),r.Mb(),r.Mb(),r.Nb(11,"li",6),r.Nb(12,"a",8),r.vc(13," Orari "),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&i&&(r.wb(5),r.ec("ngClass",r.ic(3,f,t.isHomeActive())),r.wb(3),r.ec("routerLinkActive",r.hc(5,h)),r.wb(3),r.ec("routerLinkActive",r.hc(6,h)))},directives:[n.i,o.e,o.d],styles:[".active[_ngcontent-%COMP%]{color:#ff0}a[_ngcontent-%COMP%]{font-size:larger}#title-page[_ngcontent-%COMP%]{margin-right:100px}@media (max-width:992px){#ul-id[_ngcontent-%COMP%]{flex-direction:row;justify-content:center}#title-page[_ngcontent-%COMP%]{text-align:center;margin-right:0}}"]}),i})(),N=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Cb({type:i,selectors:[["app-banner"]],decls:7,vars:0,consts:[["id","top",1,"topbar"],[1,"header6"],[1,"container","po-relative"],[1,"navbar","navbar-expand-lg","h6-nav-bar"],["routerLink","",1,"navbar-brand"],["src","assets/images/logos/ping-pong-logo.png","alt","wrapkit",2,"width","100px"],[1,"ml-auto"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"nav",3),r.Nb(4,"a",4),r.Jb(5,"img",5),r.Mb(),r.Jb(6,"app-banner-navigation",6),r.Mb(),r.Mb(),r.Mb(),r.Mb())},directives:[a.b,o.e,M],styles:[""]}),i})(),w=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Cb({type:i,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"footer4","b-t","spacer"],[1,"container","text-center"],[1,"round-social","light"],["routerLink","#",1,"link"],[1,"fa","fa-facebook"],[1,"mt-3","copyright"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"a",3),r.Jb(4,"i",4),r.Mb(),r.Mb(),r.Nb(5,"div",5),r.vc(6," Tutti i diritti riservati da Tennis Tavolo Corridonia. "),r.Mb(),r.Mb(),r.Mb())},directives:[o.e],styles:[""]}),i})();const x=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Cb({type:i,selectors:[["app-full"]],decls:10,vars:0,consts:[["id","main-wrapper"],[1,"page-wrapper"],[1,"container-fluid"],[1,"blog-home2"],["href","#top",1,"bt-top","btn","btn-circle","btn-lg","btn-info"],[1,"ti-arrow-up"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Jb(1,"app-banner"),r.Nb(2,"div",1),r.Nb(3,"div",2),r.Nb(4,"div",3),r.Nb(5,"div"),r.Jb(6,"router-outlet"),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"a",4),r.Jb(8,"i",5),r.Mb(),r.Mb(),r.Jb(9,"app-footer"),r.Mb())},directives:[N,o.g,w],styles:[""]}),i})(),children:[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:d},{path:"blogDetail/:id",component:v},{path:"about",component:m},{path:"orari",component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Cb({type:i,selectors:[["app-orari"]],decls:40,vars:0,consts:[[1,"banner-innerpage",2,"background-image","url(assets/images/landingpage/banner_tt.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","no-trans","align-self-center","text-center"],[1,"title"],[1,"bg-light","spacer","feature1"],[1,"col-md-7","text-center","no-trans"],[1,"subtitle"],[1,"spacer"],[1,"row","justify-content-center","m-b-30"],["data-toggle","collapse","href","#",1,"btn","btn-info-gradiant","btn-md","btn-arrow","m-t-20"],[1,"ti-arrow-up"]],template:function(i,t){1&i&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"h1",4),r.vc(5,"Orari palestra"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"div",5),r.Nb(7,"div",1),r.Nb(8,"div",2),r.Nb(9,"div",6),r.Nb(10,"h2",4),r.vc(11,"Mercoled\xec sera: "),r.Mb(),r.Nb(12,"h6",7),r.vc(13," 21:30 - 24:00 "),r.Mb(),r.Mb(),r.Mb(),r.Nb(14,"div",2),r.Nb(15,"div",6),r.Nb(16,"h2",4),r.vc(17,"Venerd\xec sera: "),r.Mb(),r.Nb(18,"h6",7),r.vc(19," 21:00 - 24:00 "),r.Mb(),r.Mb(),r.Mb(),r.Nb(20,"div",2),r.Nb(21,"div",6),r.Nb(22,"h2",4),r.vc(23,"Sabato o domenica: "),r.Mb(),r.Nb(24,"h6",7),r.vc(25," Partite di torneo con orario variabile di categoria D1 e D2 "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(26,"div",8),r.Nb(27,"div",1),r.Nb(28,"div",9),r.Nb(29,"div",6),r.Nb(30,"h2",4),r.vc(31," Scrivici un messaggio "),r.Mb(),r.Nb(32,"textarea"),r.vc(33,"        "),r.Mb(),r.Jb(34,"br"),r.Jb(35,"br"),r.Nb(36,"a",10),r.Nb(37,"span"),r.vc(38,"Clicca per inviare il messaggio, ti risponderemo quanto prima "),r.Jb(39,"i",11),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb())},styles:["textarea[_ngcontent-%COMP%]{width:600px;height:200px}@media (max-width:992px){textarea[_ngcontent-%COMP%]{width:300px}}"]}),i})()}]}];let y=(()=>{class i{}return i.\u0275mod=r.Gb({type:i}),i.\u0275inj=r.Fb({factory:function(t){return new(t||i)},imports:[[o.f.forChild(x)],o.f]}),i})();var q=e("3Pt+");let D=(()=>{class i{}return i.\u0275mod=r.Gb({type:i}),i.\u0275inj=r.Fb({factory:function(t){return new(t||i)},providers:[b],imports:[[n.b,y,a.a,q.a,q.e,l.b]]}),i})()}}]);