import{a as se}from"./chunk-HFXEYQQR.js";import{a as ne,b as oe,e as re,o as ae}from"./chunk-YRCHNDR3.js";import{f as N}from"./chunk-LO62QPBT.js";import{a as z}from"./chunk-CYP52INL.js";import{$a as k,Ca as I,Fb as O,Ga as h,Gb as R,Ib as ie,Jb as E,La as Q,Na as m,Oa as n,Pa as o,Qa as D,S as u,T as g,Ta as S,Ua as f,Va as p,Za as J,_a as M,ab as j,bb as r,cb as b,db as C,eb as q,fb as Y,gb as $,hb as X,ib as Z,jb as ee,mb as U,ob as W,pa as K,qa as l,qb as H,rb as te,ya as A}from"./chunk-3A7RIER7.js";var ue=()=>[1,2,3,4,5,6,7,8,9,10];function ge(a,t){if(a&1&&(n(0,"div",16),r(1),W(2,"date"),o()),a&2){let e=p().$implicit;l(),C(" ",H(2,1,e.unlockedAt,"shortDate")," ")}}function fe(a,t){if(a&1&&(n(0,"div",12)(1,"div",13),r(2),o(),n(3,"div",14),r(4),o(),h(5,ge,3,4,"div",15),o()),a&2){let e=t.$implicit;k("rarity-common",e.rarity==="common")("rarity-rare",e.rarity==="rare")("rarity-epic",e.rarity==="epic")("rarity-legendary",e.rarity==="legendary"),l(2),b(e.icon),l(2),b(e.title),l(),m("ngIf",e.unlockedAt)}}function be(a,t){if(a&1&&(n(0,"div",9)(1,"h3"),r(2,"\u2728 Recently Unlocked"),o(),n(3,"div",10),h(4,fe,6,11,"div",11),o()()),a&2){let e=p();l(4),m("ngForOf",e.getRecentlyEarned())}}function he(a,t){if(a&1){let e=S();n(0,"button",19),f("click",function(){let s=u(e).$implicit,d=p(2);return g(d.setCategory(s))}),n(1,"span",20),r(2),o(),n(3,"span",21),r(4),o()()}if(a&2){let e=t.$implicit,i=p(2);k("active",i.selectedCategory===e),l(2),b(e),l(2),q(" ",i.getCategoryUnlockedCount(e),"/",i.getCategoryCount(e)," ")}}function ye(a,t){if(a&1&&(n(0,"div",17),h(1,he,5,5,"button",18),o()),a&2){let e=p();l(),m("ngForOf",e.categories)}}function Ce(a,t){if(a&1&&(n(0,"div",37)(1,"div",38)(2,"span"),r(3),o(),n(4,"span",39),r(5),o()(),n(6,"div",40),D(7,"div",41),o(),n(8,"div",42),r(9),o()()),a&2){let e=p().$implicit,i=p(2);l(3),b(e.requirement),l(2),C("",i.getProgressPercentage(e.progress),"%"),l(2),M("width",e.progress,"%"),l(2),q(" ",e.currentValue," / ",e.requirementValue," ")}}function xe(a,t){if(a&1&&(n(0,"div",46),r(1),W(2,"date"),o()),a&2){let e=p(2).$implicit;l(),C(" ",H(2,1,e.unlockedAt,"shortDate")," ")}}function ve(a,t){if(a&1&&(n(0,"div",43)(1,"div",44),r(2,"\u2713 Unlocked"),o(),h(3,xe,3,4,"div",45),o()),a&2){let e=p().$implicit;l(3),m("ngIf",e.unlockedAt)}}function Se(a,t){if(a&1&&(n(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27),r(4),o(),n(5,"div",28),r(6),o(),n(7,"div",29),r(8),o(),n(9,"div",30),r(10),o()(),n(11,"div",31)(12,"div",32),r(13),o(),n(14,"div",33),r(15),o(),n(16,"div",34),r(17),o(),h(18,Ce,10,6,"div",35)(19,ve,4,1,"div",36),o()()()),a&2){let e=t.$implicit;k("unlocked",e.unlocked)("rarity-common",e.rarity==="common")("rarity-rare",e.rarity==="rare")("rarity-epic",e.rarity==="epic")("rarity-legendary",e.rarity==="legendary"),l(4),b(e.icon),l(2),b(e.title),l(2),b(e.category),l(),j("rarity-"+e.rarity),l(),C(" ",e.rarity," "),l(3),b(e.icon),l(2),b(e.title),l(2),b(e.description),l(),m("ngIf",!e.unlocked),l(),m("ngIf",e.unlocked)}}function ke(a,t){if(a&1&&(n(0,"div",22),h(1,Se,20,21,"div",23),o()),a&2){let e=p();l(),m("ngForOf",e.getFilteredAchievements())}}function we(a,t){if(a&1&&(n(0,"span",58),r(1,"\u2728"),o()),a&2){let e=t.$implicit;M("animation-delay",e*100,"ms")}}function Pe(a,t){if(a&1){let e=S();n(0,"div",47),f("click",function(){u(e);let s=p();return g(s.showCelebration=!1)}),n(1,"div",48),f("click",function(s){return u(e),g(s.stopPropagation())}),n(2,"div",49)(3,"div",50),r(4),o(),n(5,"div",51),r(6,"Achievement Unlocked!"),o(),n(7,"div",52),r(8),o(),n(9,"div",53),r(10),o(),n(11,"div",54),r(12),o(),n(13,"div",55),r(14),o()(),n(15,"div",56),h(16,we,2,2,"span",57),o()()()}if(a&2){let e=p();l(4),b(e.celebratingAchievement==null?null:e.celebratingAchievement.icon),l(4),b(e.celebratingAchievement==null?null:e.celebratingAchievement.title),l(2),b(e.celebratingAchievement==null?null:e.celebratingAchievement.description),l(2),b(e.celebratingAchievement==null?null:e.celebratingAchievement.category),l(),j("rarity-"+(e.celebratingAchievement==null?null:e.celebratingAchievement.rarity)),l(),C(" ",e.celebratingAchievement==null?null:e.celebratingAchievement.rarity," "),l(2),m("ngForOf",U(8,ue))}}var V=class a{constructor(t){this.userStorage=t}badges=[];achievements=[];selectedCategory="All";showCelebration=!1;celebratingAchievement=null;categories=["All","Learning","Speed","Mastery","Consistency"];showFullGallery=!1;ngOnInit(){this.initializeAchievements(),this.updateAchievementProgress(),this.checkForNewUnlocks()}initializeAchievements(){this.achievements=[{id:"first-skill",title:"First Steps",description:"Complete your first skill",category:"Learning",icon:"\u{1F3AF}",rarity:"common",unlocked:!1,progress:0,requirement:"Complete 1 skill",requirementValue:1,currentValue:0},{id:"skill-milestone-5",title:"Skill Collector",description:"Complete 5 skills",category:"Learning",icon:"\u{1F4DA}",rarity:"rare",unlocked:!1,progress:0,requirement:"Complete 5 skills",requirementValue:5,currentValue:0},{id:"skill-milestone-10",title:"Knowledge Seeker",description:"Complete 10 skills",category:"Learning",icon:"\u{1F31F}",rarity:"epic",unlocked:!1,progress:0,requirement:"Complete 10 skills",requirementValue:10,currentValue:0},{id:"skill-milestone-25",title:"Master Learner",description:"Complete 25 skills",category:"Learning",icon:"\u{1F451}",rarity:"legendary",unlocked:!1,progress:0,requirement:"Complete 25 skills",requirementValue:25,currentValue:0},{id:"fast-learner",title:"Fast Learner",description:"Complete 3 skills in one day",category:"Speed",icon:"\u26A1",rarity:"rare",unlocked:!1,progress:0,requirement:"Complete 3 skills in 1 day",requirementValue:3,currentValue:0},{id:"speed-demon",title:"Speed Demon",description:"Complete 5 skills in one day",category:"Speed",icon:"\u{1F680}",rarity:"epic",unlocked:!1,progress:0,requirement:"Complete 5 skills in 1 day",requirementValue:5,currentValue:0},{id:"lightning-fast",title:"Lightning Fast",description:"Complete 10 skills in one day",category:"Speed",icon:"\u26A1",rarity:"legendary",unlocked:!1,progress:0,requirement:"Complete 10 skills in 1 day",requirementValue:10,currentValue:0},{id:"quiz-master",title:"Quiz Master",description:"Score 100% on a quiz",category:"Mastery",icon:"\u{1F3C6}",rarity:"rare",unlocked:!1,progress:0,requirement:"Score 100% on any quiz",requirementValue:100,currentValue:0},{id:"perfect-week",title:"Perfect Week",description:"Score 100% on 7 quizzes",category:"Mastery",icon:"\u{1F4AF}",rarity:"epic",unlocked:!1,progress:0,requirement:"Score 100% on 7 quizzes",requirementValue:7,currentValue:0},{id:"flawless-master",title:"Flawless Master",description:"Score 100% on 25 quizzes",category:"Mastery",icon:"\u2728",rarity:"legendary",unlocked:!1,progress:0,requirement:"Score 100% on 25 quizzes",requirementValue:25,currentValue:0},{id:"high-achiever",title:"High Achiever",description:"Score 90%+ on 10 quizzes",category:"Mastery",icon:"\u2B50",rarity:"rare",unlocked:!1,progress:0,requirement:"Score 90%+ on 10 quizzes",requirementValue:10,currentValue:0},{id:"early-bird",title:"Early Bird",description:"Complete a skill before 9 AM",category:"Consistency",icon:"\u{1F305}",rarity:"common",unlocked:!1,progress:0,requirement:"Complete a skill before 9 AM",requirementValue:1,currentValue:0},{id:"night-owl",title:"Night Owl",description:"Complete a skill after 10 PM",category:"Consistency",icon:"\u{1F989}",rarity:"common",unlocked:!1,progress:0,requirement:"Complete a skill after 10 PM",requirementValue:1,currentValue:0},{id:"streak-7",title:"Week Warrior",description:"Maintain a 7-day learning streak",category:"Consistency",icon:"\u{1F525}",rarity:"rare",unlocked:!1,progress:0,requirement:"7-day learning streak",requirementValue:7,currentValue:0},{id:"streak-30",title:"Monthly Champion",description:"Maintain a 30-day learning streak",category:"Consistency",icon:"\u{1F4AA}",rarity:"epic",unlocked:!1,progress:0,requirement:"30-day learning streak",requirementValue:30,currentValue:0},{id:"streak-100",title:"Centurion",description:"Maintain a 100-day learning streak",category:"Consistency",icon:"\u{1F3C5}",rarity:"legendary",unlocked:!1,progress:0,requirement:"100-day learning streak",requirementValue:100,currentValue:0}]}updateAchievementProgress(){let t=this.userStorage.getCompletionEvents(),e=this.userStorage.getQuizAttempts(),i=t.length,s=new Map;t.forEach(c=>{let w=new Date(c.at).toISOString().slice(0,10);s.set(w,(s.get(w)||0)+1)});let d=e.filter(c=>c.score===100).length,x=e.filter(c=>c.score>=90).length,y=Array.from(s.keys()).sort(),_=0,v=0,T=new Date().toISOString().slice(0,10);for(let c=0;c<y.length;c++){let w=y[c],P=new Date(w);P.setDate(P.getDate()+1);let L=P.toISOString().slice(0,10);c===0||y[c-1]===L||w===T?(_++,v=Math.max(v,_)):_=1}let F=!1,G=!1;t.forEach(c=>{let P=new Date(c.at).getHours();P<9&&(F=!0),P>=22&&(G=!0)}),this.achievements.forEach(c=>{switch(c.id){case"first-skill":c.currentValue=i,c.progress=Math.min(100,i/c.requirementValue*100),c.unlocked=i>=c.requirementValue;break;case"skill-milestone-5":c.currentValue=i,c.progress=Math.min(100,i/c.requirementValue*100),c.unlocked=i>=c.requirementValue;break;case"skill-milestone-10":c.currentValue=i,c.progress=Math.min(100,i/c.requirementValue*100),c.unlocked=i>=c.requirementValue;break;case"skill-milestone-25":c.currentValue=i,c.progress=Math.min(100,i/c.requirementValue*100),c.unlocked=i>=c.requirementValue;break;case"fast-learner":let w=Math.max(...Array.from(s.values()));c.currentValue=w,c.progress=Math.min(100,w/c.requirementValue*100),c.unlocked=w>=c.requirementValue;break;case"speed-demon":let P=Math.max(...Array.from(s.values()));c.currentValue=P,c.progress=Math.min(100,P/c.requirementValue*100),c.unlocked=P>=c.requirementValue;break;case"lightning-fast":let L=Math.max(...Array.from(s.values()));c.currentValue=L,c.progress=Math.min(100,L/c.requirementValue*100),c.unlocked=L>=c.requirementValue;break;case"quiz-master":c.currentValue=d>0?1:0,c.progress=d>0?100:0,c.unlocked=d>0;break;case"perfect-week":c.currentValue=d,c.progress=Math.min(100,d/c.requirementValue*100),c.unlocked=d>=c.requirementValue;break;case"flawless-master":c.currentValue=d,c.progress=Math.min(100,d/c.requirementValue*100),c.unlocked=d>=c.requirementValue;break;case"high-achiever":c.currentValue=x,c.progress=Math.min(100,x/c.requirementValue*100),c.unlocked=x>=c.requirementValue;break;case"early-bird":c.currentValue=F?1:0,c.progress=F?100:0,c.unlocked=F;break;case"night-owl":c.currentValue=G?1:0,c.progress=G?100:0,c.unlocked=G;break;case"streak-7":c.currentValue=v,c.progress=Math.min(100,v/c.requirementValue*100),c.unlocked=v>=c.requirementValue;break;case"streak-30":c.currentValue=v,c.progress=Math.min(100,v/c.requirementValue*100),c.unlocked=v>=c.requirementValue;break;case"streak-100":c.currentValue=v,c.progress=Math.min(100,v/c.requirementValue*100),c.unlocked=v>=c.requirementValue;break}c.unlocked&&!c.unlockedAt&&(c.unlockedAt=new Date().toISOString())})}checkForNewUnlocks(){let t=this.achievements.filter(e=>e.unlocked&&!e.unlockedAt);t.length>0&&this.celebrateAchievement(t[0])}celebrateAchievement(t){this.celebratingAchievement=t,this.showCelebration=!0,setTimeout(()=>{this.showCelebration=!1,setTimeout(()=>{this.celebratingAchievement=null},500)},4e3)}getFilteredAchievements(){return this.selectedCategory==="All"?this.achievements:this.achievements.filter(t=>t.category===this.selectedCategory)}getCategoryCount(t){return t==="All"?this.achievements.length:this.achievements.filter(e=>e.category===t).length}getCategoryUnlockedCount(t){return t==="All"?this.achievements.filter(e=>e.unlocked).length:this.achievements.filter(e=>e.category===t&&e.unlocked).length}getProgressPercentage(t){return Math.round(t)}setCategory(t){this.selectedCategory=t}getRecentlyEarned(){return this.achievements.filter(t=>t.unlocked&&t.unlockedAt).sort((t,e)=>{let i=t.unlockedAt?new Date(t.unlockedAt).getTime():0;return(e.unlockedAt?new Date(e.unlockedAt).getTime():0)-i}).slice(0,5)}toggleFullGallery(){this.showFullGallery=!this.showFullGallery}static \u0275fac=function(e){return new(e||a)(A(z))};static \u0275cmp=I({type:a,selectors:[["app-achievement-gallery"]],inputs:{badges:"badges"},decls:14,vars:5,consts:[[1,"achievement-gallery"],[1,"gallery-header"],[1,"header-top"],[1,"subtitle"],[1,"toggle-gallery-btn",3,"click"],["class","recently-earned",4,"ngIf"],["class","category-filters",4,"ngIf"],["class","achievement-grid",4,"ngIf"],["class","celebration-overlay",3,"click",4,"ngIf"],[1,"recently-earned"],[1,"recent-badges"],["class","recent-badge",3,"rarity-common","rarity-rare","rarity-epic","rarity-legendary",4,"ngFor","ngForOf"],[1,"recent-badge"],[1,"recent-icon"],[1,"recent-title"],["class","recent-date",4,"ngIf"],[1,"recent-date"],[1,"category-filters"],["class","category-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"category-btn",3,"click"],[1,"category-name"],[1,"category-count"],[1,"achievement-grid"],["class","achievement-card",3,"unlocked","rarity-common","rarity-rare","rarity-epic","rarity-legendary",4,"ngFor","ngForOf"],[1,"achievement-card"],[1,"card-inner"],[1,"card-front"],[1,"achievement-icon"],[1,"achievement-title"],[1,"achievement-category"],[1,"rarity-badge"],[1,"card-back"],[1,"achievement-icon-large"],[1,"achievement-title-large"],[1,"achievement-description"],["class","achievement-progress",4,"ngIf"],["class","unlocked-info",4,"ngIf"],[1,"achievement-progress"],[1,"progress-label"],[1,"progress-percentage"],[1,"progress-bar-container"],[1,"progress-bar-fill"],[1,"progress-text"],[1,"unlocked-info"],[1,"unlocked-badge"],["class","unlocked-date",4,"ngIf"],[1,"unlocked-date"],[1,"celebration-overlay",3,"click"],[1,"celebration-modal",3,"click"],[1,"celebration-content"],[1,"celebration-icon"],[1,"celebration-title"],[1,"celebration-name"],[1,"celebration-description"],[1,"celebration-category"],[1,"celebration-rarity"],[1,"celebration-particles"],["class","particle",3,"animation-delay",4,"ngFor","ngForOf"],[1,"particle"]],template:function(e,i){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2"),r(5,"\u{1F3C6} Achievement Gallery"),o(),n(6,"p",3),r(7,"Unlock achievements and showcase your progress"),o()(),n(8,"button",4),f("click",function(){return i.toggleFullGallery()}),r(9),o()(),h(10,be,5,1,"div",5)(11,ye,2,1,"div",6),o(),h(12,ke,2,1,"div",7)(13,Pe,17,9,"div",8),o()),e&2&&(l(9),C(" ",i.showFullGallery?"\u25BC Hide Gallery":"\u25B6 Show Full Gallery"," "),l(),m("ngIf",i.getRecentlyEarned().length>0),l(),m("ngIf",i.showFullGallery),l(),m("ngIf",i.showFullGallery),l(),m("ngIf",i.showCelebration))},dependencies:[E,O,R,ie],styles:[".achievement-gallery[_ngcontent-%COMP%]{background:#0f2138;border-radius:16px;padding:24px;border:1px solid #162E4A;margin-top:20px;transition:all .3s cubic-bezier(.4,0,.2,1)}@media(hover:hover)and (pointer:fine){.achievement-gallery[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6)}}.gallery-header[_ngcontent-%COMP%]{margin-bottom:24px}.header-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}.toggle-gallery-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#2e6bff1a;border:2px solid rgba(46,107,255,.3);border-radius:12px;color:#2e6bff;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;white-space:nowrap}.toggle-gallery-btn[_ngcontent-%COMP%]:hover{background:#2e6bff33;border-color:#2e6bff;transform:translateY(-2px);box-shadow:0 4px 12px #2e6bff4d}.gallery-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin-bottom:8px;color:#fff;display:flex;align-items:center;gap:12px}.gallery-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:14px;color:#a9b7c9;margin-bottom:20px}.recently-earned[_ngcontent-%COMP%]{background:#2e6bff0d;border:1px solid rgba(46,107,255,.2);border-radius:12px;padding:16px;margin-bottom:24px}.recently-earned[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#fff;margin-bottom:12px;display:flex;align-items:center;gap:8px}.recent-badges[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px}.recent-badge[_ngcontent-%COMP%]{background:#ffffff0d;border:2px solid rgba(255,255,255,.1);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:12px;transition:all .3s ease;min-width:200px;flex:1;max-width:300px}@media(hover:hover)and (pointer:fine){.recent-badge[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #2e6bff4d;border-color:#2e6bff66}}.recent-badge.rarity-common[_ngcontent-%COMP%]{border-color:#c8c8c84d}.recent-badge.rarity-rare[_ngcontent-%COMP%]{border-color:#2e6bff66}.recent-badge.rarity-epic[_ngcontent-%COMP%]{border-color:#8a2be266}.recent-badge.rarity-legendary[_ngcontent-%COMP%]{border-color:#ffd70080;box-shadow:0 0 12px #ffd70033}.recent-icon[_ngcontent-%COMP%]{font-size:32px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}.recent-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#fff;flex:1}.recent-date[_ngcontent-%COMP%]{font-size:11px;color:#a9b7c9;opacity:.8}.category-filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;margin-top:16px}.category-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#ffffff0d;border:2px solid rgba(255,255,255,.1);border-radius:12px;color:#a9b7c9;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;gap:8px}.category-btn[_ngcontent-%COMP%]:hover{background:#2e6bff1a;border-color:#2e6bff4d;color:#fff;transform:translateY(-2px)}.category-btn.active[_ngcontent-%COMP%]{background:#2e6bff33;border-color:#2e6bff;color:#fff;box-shadow:0 4px 12px #2e6bff4d}.category-count[_ngcontent-%COMP%]{font-size:12px;opacity:.8;padding:2px 8px;background:#ffffff1a;border-radius:10px}.achievement-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;margin-top:24px}.achievement-card[_ngcontent-%COMP%]{perspective:1000px;height:280px;cursor:pointer}.card-inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d}.achievement-card[_ngcontent-%COMP%]:hover   .card-inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:16px;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:2px solid;transition:all .3s ease}.card-front[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0f2138e6,#162e4ae6);border-color:#ffffff1a}.card-back[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0f2138f2,#162e4af2);border-color:#ffffff1a;transform:rotateY(180deg)}.rarity-common[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%], .rarity-common[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{border-color:#c8c8c84d;box-shadow:0 4px 12px #c8c8c81a}.rarity-rare[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%], .rarity-rare[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{border-color:#2e6bff66;box-shadow:0 4px 12px #2e6bff33}.rarity-epic[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%], .rarity-epic[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{border-color:#8a2be266;box-shadow:0 4px 12px #8a2be233}.rarity-legendary[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%], .rarity-legendary[_ngcontent-%COMP%]   .card-back[_ngcontent-%COMP%]{border-color:#ffd70080;box-shadow:0 4px 16px #ffd7004d;animation:_ngcontent-%COMP%_legendaryGlow 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_legendaryGlow{0%,to{box-shadow:0 4px 16px #ffd7004d}50%{box-shadow:0 4px 24px #ffd70099}}.achievement-card.unlocked[_ngcontent-%COMP%]   .card-front[_ngcontent-%COMP%]{border-color:#2e6bff99;box-shadow:0 4px 16px #2e6bff4d}.achievement-icon[_ngcontent-%COMP%]{font-size:48px;margin-bottom:12px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3))}.achievement-icon-large[_ngcontent-%COMP%]{font-size:64px;margin-bottom:16px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.3))}.achievement-title[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#fff;margin-bottom:8px}.achievement-title-large[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:#fff;margin-bottom:12px}.achievement-category[_ngcontent-%COMP%]{font-size:12px;color:#a9b7c9;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}.achievement-description[_ngcontent-%COMP%]{font-size:14px;color:#dce6f2;line-height:1.5;margin-bottom:16px}.rarity-badge[_ngcontent-%COMP%]{padding:4px 12px;border-radius:12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-top:auto}.rarity-common[_ngcontent-%COMP%]   .rarity-badge[_ngcontent-%COMP%]{background:#c8c8c833;color:#c8c8c8}.rarity-rare[_ngcontent-%COMP%]   .rarity-badge[_ngcontent-%COMP%]{background:#2e6bff33;color:#2e6bff}.rarity-epic[_ngcontent-%COMP%]   .rarity-badge[_ngcontent-%COMP%]{background:#8a2be233;color:#8a2be2}.rarity-legendary[_ngcontent-%COMP%]   .rarity-badge[_ngcontent-%COMP%]{background:#ffd70033;color:gold}.achievement-progress[_ngcontent-%COMP%]{width:100%;margin-top:auto}.progress-label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:12px;color:#a9b7c9}.progress-percentage[_ngcontent-%COMP%]{font-weight:700;color:#2e6bff}.progress-bar-container[_ngcontent-%COMP%]{width:100%;height:8px;background:#ffffff1a;border-radius:4px;overflow:hidden;margin-bottom:8px}.progress-bar-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,#2e6bff,#2558d8);border-radius:4px;transition:width .5s ease;box-shadow:0 0 8px #2e6bff80}.progress-text[_ngcontent-%COMP%]{font-size:11px;color:#a9b7c9;text-align:center}.unlocked-info[_ngcontent-%COMP%]{margin-top:auto;display:flex;flex-direction:column;align-items:center;gap:8px}.unlocked-badge[_ngcontent-%COMP%]{padding:6px 16px;background:#2e6bff33;border:2px solid #2E6BFF;border-radius:12px;color:#2e6bff;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.5px}.unlocked-date[_ngcontent-%COMP%]{font-size:11px;color:#a9b7c9}.celebration-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000c;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.celebration-modal[_ngcontent-%COMP%]{position:relative;background:linear-gradient(135deg,#0f2138,#162e4a);border:3px solid #2E6BFF;border-radius:24px;padding:40px;max-width:500px;width:90%;text-align:center;box-shadow:0 20px 60px #2e6bff66;animation:_ngcontent-%COMP%_slideUp .5s cubic-bezier(.34,1.56,.64,1)}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(50px) scale(.8);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}.celebration-content[_ngcontent-%COMP%]{position:relative;z-index:2}.celebration-icon[_ngcontent-%COMP%]{font-size:80px;margin-bottom:20px;animation:_ngcontent-%COMP%_bounce .6s ease infinite;filter:drop-shadow(0 4px 12px rgba(46,107,255,.5))}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.celebration-title[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#fff;margin-bottom:12px;text-shadow:0 2px 8px rgba(46,107,255,.5)}.celebration-name[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:#2e6bff;margin-bottom:8px}.celebration-description[_ngcontent-%COMP%]{font-size:16px;color:#dce6f2;margin-bottom:16px}.celebration-category[_ngcontent-%COMP%]{font-size:14px;color:#a9b7c9;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}.celebration-rarity[_ngcontent-%COMP%]{display:inline-block;padding:8px 20px;border-radius:16px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px}.celebration-rarity.rarity-common[_ngcontent-%COMP%]{background:#c8c8c833;color:#c8c8c8}.celebration-rarity.rarity-rare[_ngcontent-%COMP%]{background:#2e6bff33;color:#2e6bff}.celebration-rarity.rarity-epic[_ngcontent-%COMP%]{background:#8a2be233;color:#8a2be2}.celebration-rarity.rarity-legendary[_ngcontent-%COMP%]{background:#ffd70033;color:gold;animation:_ngcontent-%COMP%_pulse 1s ease infinite}@keyframes _ngcontent-%COMP%_pulse{0%,to{transform:scale(1)}50%{transform:scale(1.05)}}.celebration-particles[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:none;overflow:hidden;border-radius:24px}.particle[_ngcontent-%COMP%]{position:absolute;font-size:24px;animation:_ngcontent-%COMP%_particleFloat 2s ease-out infinite;top:50%;left:50%}@keyframes _ngcontent-%COMP%_particleFloat{0%{opacity:1;transform:translate(0) scale(1) rotate(0)}to{opacity:0;transform:translate(calc(var(--random-x, 100px) - 50px),calc(var(--random-y, -100px) - 50px)) scale(0) rotate(360deg)}}.particle[_ngcontent-%COMP%]:nth-child(1){--random-x: 150px;--random-y: -150px}.particle[_ngcontent-%COMP%]:nth-child(2){--random-x: -150px;--random-y: -150px}.particle[_ngcontent-%COMP%]:nth-child(3){--random-x: 150px;--random-y: 150px}.particle[_ngcontent-%COMP%]:nth-child(4){--random-x: -150px;--random-y: 150px}.particle[_ngcontent-%COMP%]:nth-child(5){--random-x: 0px;--random-y: -200px}.particle[_ngcontent-%COMP%]:nth-child(6){--random-x: 200px;--random-y: 0px}.particle[_ngcontent-%COMP%]:nth-child(7){--random-x: -200px;--random-y: 0px}.particle[_ngcontent-%COMP%]:nth-child(8){--random-x: 100px;--random-y: 200px}.particle[_ngcontent-%COMP%]:nth-child(9){--random-x: -100px;--random-y: 200px}.particle[_ngcontent-%COMP%]:nth-child(10){--random-x: 0px;--random-y: 200px}@media(max-width:768px){.achievement-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px}.achievement-card[_ngcontent-%COMP%]{height:240px}.category-filters[_ngcontent-%COMP%]{gap:8px}.category-btn[_ngcontent-%COMP%]{padding:8px 16px;font-size:12px}}"]})};var Ae=()=>["All","Beginner","Intermediate","Advanced"];function Me(a,t){if(a&1){let e=S();n(0,"button",8),f("click",function(){let s=u(e).$implicit,d=p(2);return g(d.onDifficultyChange(s))}),r(1),o()}if(a&2){let e=t.$implicit,i=p(2);k("active",i.selectedDifficulty===e),l(),C(" ",e," ")}}function Te(a,t){a&1&&(n(0,"div",6),h(1,Me,2,3,"button",7),o()),a&2&&(l(),m("ngForOf",U(1,Ae)))}function De(a,t){a&1&&(n(0,"span",24),r(1,"\u2B50 Portfolio Ready"),o())}function Ie(a,t){if(a&1&&(n(0,"span",25),r(1),o()),a&2){let e=t.$implicit,i=p().$implicit,s=p(2);k("matching",s.getMatchingSkills(i).includes(e)),l(),C(" ",e," ")}}function Oe(a,t){if(a&1){let e=S();n(0,"div",11),f("click",function(){let s=u(e).$implicit,d=p(2);return g(d.selectProject(s))}),n(1,"div",12)(2,"div",13)(3,"h3"),r(4),o(),n(5,"span",14),r(6),o()(),n(7,"div",15)(8,"span",16),r(9),o(),h(10,De,2,0,"span",17),o()(),n(11,"p",18),r(12),o(),n(13,"div",19)(14,"div",20)(15,"span",21),r(16,"\u23F1\uFE0F"),o(),n(17,"span"),r(18),o()(),n(19,"div",20)(20,"span",21),r(21,"\u{1F6E0}\uFE0F"),o(),n(22,"span"),r(23),o()()(),n(24,"div",22),h(25,Ie,2,3,"span",23),o()()}if(a&2){let e=t.$implicit,i=p(2);k("portfolio-ready",e.portfolioReady),l(4),b(e.title),l(2),b(e.category),l(2),M("background-color",i.getDifficultyColor(e.difficulty)),l(),C(" ",e.difficulty," "),l(),m("ngIf",e.portfolioReady),l(2),b(e.description),l(6),b(e.estimatedTime),l(5),C("",e.skills.length," skills"),l(2),m("ngForOf",e.skills)}}function Re(a,t){if(a&1&&(n(0,"div",9),h(1,Oe,26,12,"div",10),o()),a&2){let e=p();l(),m("ngForOf",e.filteredProjects)}}var B=class a{constructor(t,e,i){this.userStorage=t;this.router=e;this.projectService=i}userSkills=[];careerGoal="";projects=[];filteredProjects=[];selectedDifficulty="All";showProjects=!1;ngOnInit(){this.loadUserSkills(),this.generateProjects(),this.filterProjects()}loadUserSkills(){try{let t=this.userStorage.getUserSkills();if(t&&t.length>0)this.userSkills=t;else{let e=this.userStorage.getItem("currentSkills");e&&(this.userSkills=JSON.parse(e))}}catch{}}getCompletedLevels(){try{let t=this.userStorage.getSavedRoadmaps(),e=this.userStorage.getActiveRoadmapId();if(!e||!t||t.length===0)return{beginner:!1,intermediate:!1,advanced:!1};let i=t.find(d=>d.id===e);if(!i||!i.roadmapLevels)return{beginner:!1,intermediate:!1,advanced:!1};let s={beginner:!1,intermediate:!1,advanced:!1};for(let d of i.roadmapLevels){if(!d.skills||d.skills.length===0)continue;let x=0,y=0;for(let T of d.skills)typeof T!="string"&&(x++,T.completed&&y++);let _=x>0&&y===x,v=(d.level||"").toLowerCase();v==="beginner"?s.beginner=_:v==="intermediate"?s.intermediate=_:v==="advanced"&&(s.advanced=_)}return s}catch{return{beginner:!1,intermediate:!1,advanced:!1}}}generateProjects(){let t=[],e=this.careerGoal.toLowerCase(),i=this.getCompletedLevels();this.generateDomainProjects(t,e,i);let s=t.filter(y=>y.difficulty==="Beginner").slice(0,3),d=t.filter(y=>y.difficulty==="Intermediate").slice(0,3),x=t.filter(y=>y.difficulty==="Advanced").slice(0,3);this.projects=[...s,...d,...x]}generateDomainProjects(t,e,i){if(e.includes("web-developer")||e.includes("web developer")){i.beginner&&t.push({id:"todo-app",title:"Task Management App",description:"Build a full-featured todo application with add, edit, delete, and filter functionality. Perfect for showcasing JavaScript and DOM manipulation skills.",skills:["JavaScript","HTML","CSS"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Setup Project Structure",description:"Create HTML file with basic structure, CSS file for styling, and JavaScript file for functionality.",codeSnippet:`<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>My Tasks</h1>
    <input type="text" id="taskInput" placeholder="Add new task...">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
  </div>
  <script src="script.js"><\/script>
</body>
</html>`,tips:["Use semantic HTML5 elements","Keep CSS organized with comments","Separate concerns (HTML/CSS/JS)"]},{number:2,title:"Implement Add Task Functionality",description:"Create a function to add new tasks to the list when user clicks the Add button.",codeSnippet:`function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = \`
    <span>\${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  \`;
  taskList.appendChild(li);
  input.value = '';
}`,tips:["Validate input before adding","Clear input after adding","Use template literals for cleaner code"]},{number:3,title:"Add Delete and Edit Features",description:"Implement functionality to delete tasks and edit existing tasks.",tips:["Add event listeners for delete buttons","Create edit mode toggle","Save changes on blur or Enter key"]},{number:4,title:"Add Filtering and Local Storage",description:"Implement filter options (All, Active, Completed) and save tasks to localStorage.",tips:["Use localStorage.setItem() to save","Load tasks on page load","Update localStorage on every change"]},{number:5,title:"Style and Polish",description:"Add modern CSS styling, animations, and responsive design.",tips:["Use CSS Grid or Flexbox for layout","Add hover effects and transitions","Make it mobile-responsive"]}],githubSetup:{repositoryName:"todo-app",readmeTemplate:`# Task Management App

A simple and elegant todo application built with vanilla JavaScript.

## Features
- Add, edit, and delete tasks
- Filter tasks (All, Active, Completed)
- Local storage persistence
- Responsive design

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)

## Setup
1. Clone the repository
2. Open index.html in your browser
3. Start adding tasks!

## Live Demo
[Add your live demo link here]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Todo app"',"git branch -M main","git remote add origin https://github.com/yourusername/todo-app.git","git push -u origin main"],deploymentOptions:["GitHub Pages (Free)","Netlify (Free)","Vercel (Free)"]},resources:[{title:"MDN JavaScript Guide",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",type:"Documentation"},{title:"CSS Tricks",url:"https://css-tricks.com",type:"Tutorial"}]}),i.intermediate&&t.push({id:"weather-app",title:"Weather Dashboard",description:"Create a weather application that fetches data from a weather API and displays current conditions and forecasts.",skills:["JavaScript","API Integration","Async/Await"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Get API Key",description:"Sign up for a free weather API (OpenWeatherMap, WeatherAPI) and get your API key.",tips:["Keep API key secure","Use environment variables","Never commit API keys to GitHub"]},{number:2,title:"Create UI Layout",description:"Design the weather dashboard layout with sections for current weather, forecast, and search.",tips:["Use cards for different sections","Make it visually appealing","Plan responsive layout"]},{number:3,title:"Implement API Integration",description:"Use fetch() or axios to get weather data from the API.",codeSnippet:`async function getWeather(city) {
  const API_KEY = 'your-api-key';
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}`,tips:["Handle errors gracefully","Show loading states","Validate API responses"]},{number:4,title:"Display Weather Data",description:"Parse API response and display temperature, humidity, wind speed, and weather icons.",tips:["Format data nicely","Add weather icons","Show user-friendly messages"]},{number:5,title:"Add Search and Location Features",description:"Allow users to search by city name and get weather for their current location.",tips:["Use Geolocation API for location","Add search history","Handle invalid city names"]}],githubSetup:{repositoryName:"weather-dashboard",readmeTemplate:`# Weather Dashboard

A beautiful weather application that displays current weather and forecasts.

## Features
- Real-time weather data
- 5-day forecast
- Location-based weather
- Search by city
- Responsive design

## API Used
- OpenWeatherMap API

## Setup
1. Get API key from OpenWeatherMap
2. Add API key to config.js
3. Open index.html in browser

## Technologies
- HTML, CSS, JavaScript
- OpenWeatherMap API`,gitCommands:["git init",'echo "config.js" >> .gitignore',"git add .",'git commit -m "Initial commit: Weather dashboard"',"git remote add origin https://github.com/yourusername/weather-dashboard.git","git push -u origin main"],deploymentOptions:["Netlify (with environment variables)","Vercel (with environment variables)","GitHub Pages (requires API key in code - not recommended)"]},resources:[{title:"OpenWeatherMap API",url:"https://openweathermap.org/api",type:"API"},{title:"Fetch API Guide",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",type:"Documentation"}]},{id:"expense-tracker",title:"Expense Tracker App",description:"Build a full-stack expense tracking application with data visualization, categories, and monthly reports.",skills:["JavaScript","Local Storage","Chart.js","HTML","CSS"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Design Data Structure",description:"Plan how to store expenses (categories, amounts, dates).",tips:["Use objects for expense items","Plan for filtering and sorting","Consider data persistence"]},{number:2,title:"Create Expense Form",description:"Build a form to add new expenses with validation.",tips:["Validate input fields","Format dates properly","Handle form submission"]},{number:3,title:"Implement CRUD Operations",description:"Add functionality to create, read, update, and delete expenses.",tips:["Use array methods","Update UI dynamically","Save to localStorage"]},{number:4,title:"Add Data Visualization",description:"Use Chart.js to create charts showing spending patterns.",tips:["Install Chart.js","Create pie charts for categories","Add bar charts for monthly trends"]},{number:5,title:"Add Filtering and Reports",description:"Implement filters by category, date range, and generate reports.",tips:["Filter array data","Calculate totals","Export data (optional)"]}],githubSetup:{repositoryName:"expense-tracker",readmeTemplate:`# Expense Tracker App

A comprehensive expense tracking application with data visualization.

## Features
- Add, edit, delete expenses
- Category management
- Data visualization with charts
- Monthly reports
- Local storage persistence

## Technologies
- HTML5, CSS3, JavaScript
- Chart.js
- Local Storage API

## Setup
1. Clone the repository
2. Open index.html in browser
3. Start tracking expenses!`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Expense tracker"',"git branch -M main","git remote add origin https://github.com/yourusername/expense-tracker.git","git push -u origin main"],deploymentOptions:["GitHub Pages","Netlify","Vercel"]},resources:[{title:"Chart.js Documentation",url:"https://www.chartjs.org/docs",type:"Documentation"},{title:"Local Storage API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",type:"Documentation"}]},{id:"recipe-finder",title:"Recipe Finder App",description:"Create an app that searches for recipes using an API, displays results, and allows users to save favorites.",skills:["JavaScript","API Integration","Async/Await","Local Storage"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Choose Recipe API",description:"Select a recipe API (Spoonacular, Edamam, or TheMealDB).",tips:["Check API documentation","Understand rate limits","Get API key"]},{number:2,title:"Create Search Interface",description:"Build a search form with filters (ingredients, cuisine, diet).",tips:["Design user-friendly UI","Add loading states","Handle empty results"]},{number:3,title:"Implement API Calls",description:"Fetch recipe data from the API and handle responses.",tips:["Use async/await","Handle errors gracefully","Show loading indicators"]},{number:4,title:"Display Recipe Cards",description:"Create attractive recipe cards with images, ingredients, and instructions.",tips:["Use CSS Grid/Flexbox","Add hover effects","Make cards clickable"]},{number:5,title:"Add Favorites Feature",description:"Allow users to save favorite recipes to localStorage.",tips:["Create favorites list","Persist to localStorage","Add remove functionality"]}],githubSetup:{repositoryName:"recipe-finder",readmeTemplate:`# Recipe Finder App

A recipe search application with favorites functionality.

## Features
- Search recipes by ingredients
- Filter by cuisine and diet
- Save favorite recipes
- View recipe details

## API Used
- [Recipe API Name]

## Technologies
- HTML, CSS, JavaScript
- Recipe API
- Local Storage

## Setup
1. Get API key
2. Add to config.js
3. Open index.html`,gitCommands:["git init",'echo "config.js" >> .gitignore',"git add .",'git commit -m "Initial commit: Recipe finder"',"git remote add origin https://github.com/yourusername/recipe-finder.git","git push -u origin main"],deploymentOptions:["Netlify","Vercel","GitHub Pages"]},resources:[{title:"Spoonacular API",url:"https://spoonacular.com/food-api",type:"API"},{title:"TheMealDB API",url:"https://www.themealdb.com/api.php",type:"API"}]}),i.advanced&&t.push({id:"ecommerce-platform",title:"E-Commerce Platform",description:"Build a full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",skills:["React","Node.js","MongoDB","Stripe API","Authentication"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Setup Project Structure",description:"Create React frontend and Node.js backend with MongoDB.",tips:["Use Create React App","Setup Express server","Configure MongoDB connection"]},{number:2,title:"Build Product Catalog",description:"Create product listing, search, and filtering functionality.",tips:["Design product schema","Implement search algorithm","Add pagination"]},{number:3,title:"Implement Shopping Cart",description:"Add cart functionality with add, remove, and update quantities.",tips:["Use React Context or Redux","Persist cart state","Calculate totals"]},{number:4,title:"Add Authentication",description:"Implement user registration, login, and JWT authentication.",tips:["Use bcrypt for passwords","Implement JWT tokens","Add protected routes"]},{number:5,title:"Integrate Payment",description:"Add Stripe payment integration for checkout process.",tips:["Setup Stripe account","Create payment intent","Handle payment success/failure"]}],githubSetup:{repositoryName:"ecommerce-platform",readmeTemplate:`# E-Commerce Platform

A full-featured e-commerce platform with shopping cart and payment integration.

## Features
- Product catalog with search
- Shopping cart
- User authentication
- Payment processing (Stripe)
- Admin dashboard

## Technologies
- React
- Node.js/Express
- MongoDB
- Stripe API
- JWT Authentication

## Setup
1. Install dependencies (npm install)
2. Setup MongoDB database
3. Configure Stripe keys
4. Run frontend and backend

## Environment Variables
- MONGODB_URI
- JWT_SECRET
- STRIPE_SECRET_KEY`,gitCommands:["git init",'echo "node_modules/" >> .gitignore','echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: E-commerce platform"',"git remote add origin https://github.com/yourusername/ecommerce-platform.git","git push -u origin main"],deploymentOptions:["Vercel (Frontend)","Heroku/Railway (Backend)","MongoDB Atlas (Database)"]},resources:[{title:"Stripe Documentation",url:"https://stripe.com/docs",type:"Documentation"},{title:"React Documentation",url:"https://react.dev",type:"Documentation"}]},{id:"social-media-dashboard",title:"Social Media Dashboard",description:"Create a comprehensive social media management dashboard with analytics, scheduling, and multi-platform integration.",skills:["React","TypeScript","Node.js","GraphQL","Chart.js","OAuth"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Design Architecture",description:"Plan the dashboard structure with multiple views and components.",tips:["Use component-based architecture","Plan state management","Design API structure"]},{number:2,title:"Setup Authentication",description:"Implement OAuth for social media platforms (Twitter, Facebook, Instagram).",tips:["Use OAuth 2.0","Store tokens securely","Handle token refresh"]},{number:3,title:"Build Analytics Dashboard",description:"Create analytics views with charts showing engagement metrics.",tips:["Use Chart.js or D3.js","Fetch data from APIs","Display real-time updates"]},{number:4,title:"Implement Post Scheduling",description:"Add functionality to schedule posts across multiple platforms.",tips:["Create scheduling queue","Use cron jobs","Handle timezones"]},{number:5,title:"Add Advanced Features",description:"Implement content calendar, hashtag suggestions, and performance reports.",tips:["Use date libraries","Integrate AI APIs (optional)","Generate PDF reports"]}],githubSetup:{repositoryName:"social-media-dashboard",readmeTemplate:`# Social Media Dashboard

A comprehensive social media management dashboard.

## Features
- Multi-platform integration
- Analytics and insights
- Post scheduling
- Content calendar
- Performance reports

## Technologies
- React + TypeScript
- Node.js/Express
- GraphQL
- Chart.js
- OAuth 2.0

## Setup
1. Install dependencies
2. Configure OAuth credentials
3. Setup database
4. Run development server`,gitCommands:["git init",'echo "node_modules/" >> .gitignore','echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: Social media dashboard"',"git remote add origin https://github.com/yourusername/social-media-dashboard.git","git push -u origin main"],deploymentOptions:["Vercel","Netlify","AWS"]},resources:[{title:"OAuth 2.0 Guide",url:"https://oauth.net/2",type:"Tutorial"},{title:"GraphQL Documentation",url:"https://graphql.org/learn",type:"Documentation"}]},{id:"real-time-chat-app",title:"Real-Time Chat Application",description:"Build a real-time chat application with WebSockets, multiple rooms, file sharing, and user presence indicators.",skills:["React","Node.js","Socket.io","MongoDB","WebSockets","File Upload"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Setup WebSocket Server",description:"Create Node.js server with Socket.io for real-time communication.",tips:["Install Socket.io","Setup connection handling","Handle room management"]},{number:2,title:"Build Chat Interface",description:"Create React chat UI with message list, input field, and user list.",tips:["Design responsive layout","Handle message rendering","Add auto-scroll"]},{number:3,title:"Implement Room System",description:"Add functionality to create, join, and leave chat rooms.",tips:["Use Socket.io rooms","Manage room state","Broadcast room updates"]},{number:4,title:"Add File Sharing",description:"Implement file upload and sharing functionality.",tips:["Use Multer for file uploads","Store files securely","Display file previews"]},{number:5,title:"Add Advanced Features",description:"Implement typing indicators, read receipts, emoji reactions, and message search.",tips:["Use Socket.io events","Implement debouncing","Add search functionality"]}],githubSetup:{repositoryName:"realtime-chat-app",readmeTemplate:`# Real-Time Chat Application

A real-time chat application with multiple rooms and file sharing.

## Features
- Real-time messaging
- Multiple chat rooms
- File sharing
- User presence
- Typing indicators
- Message search

## Technologies
- React
- Node.js/Express
- Socket.io
- MongoDB
- Multer (file uploads)

## Setup
1. Install dependencies
2. Setup MongoDB
3. Configure Socket.io
4. Run server and client`,gitCommands:["git init",'echo "node_modules/" >> .gitignore','echo "uploads/" >> .gitignore',"git add .",'git commit -m "Initial commit: Real-time chat app"',"git remote add origin https://github.com/yourusername/realtime-chat-app.git","git push -u origin main"],deploymentOptions:["Heroku","Railway","AWS"]},resources:[{title:"Socket.io Documentation",url:"https://socket.io/docs",type:"Documentation"},{title:"WebSockets Guide",url:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",type:"Documentation"}]});return}if(e.includes("data-scientist")||e.includes("data scientist")){i.beginner&&t.push({id:"csv-analyzer",title:"CSV Data Analyzer",description:"Build a simple Python script to analyze CSV files, calculate basic statistics, and generate summary reports.",skills:["Python","Pandas","CSV Processing"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Load CSV File",description:"Use Pandas to read a CSV file and display basic information.",tips:["Use pd.read_csv()","Check data shape","Display first few rows"]},{number:2,title:"Calculate Statistics",description:"Compute mean, median, mode, and standard deviation for numeric columns.",tips:["Use .describe()","Calculate custom statistics","Handle missing values"]},{number:3,title:"Generate Summary Report",description:"Create a text report with key findings from the data.",tips:["Format output nicely","Include statistics","Save to file"]},{number:4,title:"Add Basic Visualizations",description:"Create simple bar charts and histograms using Matplotlib.",tips:["Start with simple plots","Add labels and titles","Save plots as images"]},{number:5,title:"Make it Interactive",description:"Add command-line arguments to specify input file and output format.",tips:["Use argparse","Add help messages","Handle errors gracefully"]}],githubSetup:{repositoryName:"csv-analyzer",readmeTemplate:`# CSV Data Analyzer

A simple Python tool to analyze CSV files and generate reports.

## Features
- Load and read CSV files
- Calculate basic statistics
- Generate summary reports
- Basic visualizations

## Technologies
- Python
- Pandas
- Matplotlib

## Usage
\`\`\`
python analyzer.py data.csv
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: CSV analyzer"',"git remote add origin https://github.com/yourusername/csv-analyzer.git","git push -u origin main"],deploymentOptions:["GitHub","Local Script","Command Line Tool"]},resources:[{title:"Pandas Documentation",url:"https://pandas.pydata.org/docs/",type:"Documentation"},{title:"Python CSV Guide",url:"https://docs.python.org/3/library/csv.html",type:"Documentation"}]},{id:"data-cleaning-tool",title:"Data Cleaning Tool",description:"Create a Python tool to clean messy datasets by handling missing values, duplicates, and data type issues.",skills:["Python","Pandas","Data Cleaning"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Identify Data Issues",description:"Write code to detect missing values, duplicates, and inconsistencies.",tips:["Use .isnull()","Check for duplicates","Identify outliers"]},{number:2,title:"Handle Missing Values",description:"Implement strategies to fill or remove missing data.",tips:["Use fillna()","Consider forward/backward fill","Document decisions"]},{number:3,title:"Remove Duplicates",description:"Identify and remove duplicate rows from the dataset.",tips:["Use .duplicated()","Keep first or last","Verify removal"]},{number:4,title:"Fix Data Types",description:"Convert columns to appropriate data types (numeric, date, string).",tips:["Use .astype()","Handle conversion errors","Parse dates correctly"]},{number:5,title:"Export Clean Data",description:"Save the cleaned dataset to a new file.",tips:["Use .to_csv()","Preserve data integrity","Document cleaning steps"]}],githubSetup:{repositoryName:"data-cleaning-tool",readmeTemplate:`# Data Cleaning Tool

A Python tool for cleaning messy datasets.

## Features
- Detect missing values
- Remove duplicates
- Fix data types
- Export clean data

## Technologies
- Python
- Pandas

## Usage
\`\`\`
python clean_data.py input.csv output.csv
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Data cleaning tool"',"git remote add origin https://github.com/yourusername/data-cleaning-tool.git","git push -u origin main"],deploymentOptions:["GitHub","Local Script","Python Package"]},resources:[{title:"Pandas Data Cleaning",url:"https://pandas.pydata.org/docs/user_guide/missing_data.html",type:"Documentation"},{title:"Data Cleaning Best Practices",url:"https://www.kaggle.com/learn/data-cleaning",type:"Tutorial"}]},{id:"simple-dashboard",title:"Simple Data Dashboard",description:"Create a basic dashboard using Python to visualize data with multiple charts in a single view.",skills:["Python","Matplotlib","Seaborn","Data Visualization"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Prepare Data",description:"Load and prepare your dataset for visualization.",tips:["Clean data first","Select relevant columns","Aggregate if needed"]},{number:2,title:"Create Individual Charts",description:"Build separate charts (bar, line, pie) using Matplotlib.",tips:["Start with one chart type","Add labels and titles","Customize colors"]},{number:3,title:"Combine Charts",description:"Use subplots to create a dashboard with multiple charts.",tips:["Use plt.subplot()","Arrange charts logically","Add overall title"]},{number:4,title:"Style the Dashboard",description:"Improve the visual appearance with better styling.",tips:["Use Seaborn for better defaults","Add grid lines","Improve spacing"]},{number:5,title:"Export Dashboard",description:"Save the dashboard as an image file.",tips:["Use plt.savefig()","Choose appropriate format","Set DPI for quality"]}],githubSetup:{repositoryName:"simple-data-dashboard",readmeTemplate:`# Simple Data Dashboard

A Python dashboard for data visualization.

## Features
- Multiple chart types
- Clean layout
- Exportable images

## Technologies
- Python
- Matplotlib
- Seaborn

## Usage
\`\`\`
python dashboard.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Data dashboard"',"git remote add origin https://github.com/yourusername/simple-data-dashboard.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Local Script"]},resources:[{title:"Matplotlib Tutorial",url:"https://matplotlib.org/stable/tutorials/index.html",type:"Tutorial"},{title:"Seaborn Guide",url:"https://seaborn.pydata.org/tutorial.html",type:"Tutorial"}]}),i.intermediate&&t.push({id:"data-analysis",title:"Data Analysis Dashboard",description:"Analyze a dataset and create visualizations using Python libraries like Pandas, Matplotlib, and Seaborn.",skills:["Python","Pandas","Data Visualization"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Choose a Dataset",description:"Select an interesting dataset from Kaggle, UCI ML Repository, or government data sources.",tips:["Choose a topic you're interested in","Ensure data is clean and complete","Check data size (not too large for first project)"]},{number:2,title:"Load and Explore Data",description:"Use Pandas to load the dataset and perform exploratory data analysis.",codeSnippet:`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('your_dataset.csv')

# Explore data
print(df.head())
print(df.info())
print(df.describe())

# Check for missing values
print(df.isnull().sum())`,tips:["Understand data structure","Identify missing values","Check data types"]},{number:3,title:"Data Cleaning",description:"Clean the dataset by handling missing values, outliers, and data type conversions.",tips:["Handle missing values appropriately","Remove or transform outliers","Convert data types if needed"]},{number:4,title:"Create Visualizations",description:"Create meaningful charts and graphs to tell a story with the data.",codeSnippet:`# Example visualizations
plt.figure(figsize=(12, 6))

# Histogram
plt.subplot(1, 2, 1)
df['column'].hist()
plt.title('Distribution')

# Scatter plot
plt.subplot(1, 2, 2)
plt.scatter(df['x'], df['y'])
plt.title('Relationship')

plt.tight_layout()
plt.show()`,tips:["Choose appropriate chart types","Add labels and titles","Use color effectively"]},{number:5,title:"Generate Insights and Report",description:"Summarize findings in a Jupyter notebook or create a dashboard.",tips:["Write clear explanations","Highlight key insights","Use markdown for formatting"]}],githubSetup:{repositoryName:"data-analysis-project",readmeTemplate:`# Data Analysis Project

A comprehensive data analysis project with visualizations and insights.

## Dataset
[Describe your dataset]

## Analysis
- Data exploration
- Data cleaning
- Statistical analysis
- Visualizations
- Key insights

## Technologies
- Python
- Pandas
- Matplotlib
- Seaborn
- Jupyter Notebook

## Setup
1. Install requirements: pip install -r requirements.txt
2. Open Jupyter notebook
3. Run all cells

## Results
[Add screenshots of visualizations]`,gitCommands:["git init",'echo "__pycache__/" >> .gitignore','echo "*.pyc" >> .gitignore','echo ".ipynb_checkpoints/" >> .gitignore',"git add .",'git commit -m "Initial commit: Data analysis project"',"git remote add origin https://github.com/yourusername/data-analysis-project.git","git push -u origin main"],deploymentOptions:["GitHub (Jupyter notebooks)","Kaggle Notebooks","Google Colab"]},resources:[{title:"Pandas Documentation",url:"https://pandas.pydata.org/docs/",type:"Documentation"},{title:"Kaggle Datasets",url:"https://www.kaggle.com/datasets",type:"Tool"}]},{id:"predictive-model",title:"Predictive Model with Scikit-learn",description:"Build a predictive model using scikit-learn to predict outcomes from data. Learn the complete ML workflow.",skills:["Python","Scikit-learn","Machine Learning","Pandas"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Prepare Dataset",description:"Load and preprocess data for machine learning.",tips:["Handle missing values","Encode categorical variables","Split features and target"]},{number:2,title:"Split Data",description:"Divide data into training and testing sets.",tips:["Use train_test_split","Set appropriate test size","Use random_state for reproducibility"]},{number:3,title:"Train Model",description:"Train a machine learning model (Linear Regression, Random Forest, etc.).",tips:["Start with simple models","Fit the model","Understand parameters"]},{number:4,title:"Evaluate Model",description:"Assess model performance using appropriate metrics.",tips:["Use accuracy, precision, recall","Create confusion matrix","Visualize results"]},{number:5,title:"Improve Model",description:"Tune hyperparameters and try different algorithms.",tips:["Use GridSearchCV","Try ensemble methods","Document improvements"]}],githubSetup:{repositoryName:"predictive-model-project",readmeTemplate:`# Predictive Model Project

A machine learning project using scikit-learn.

## Problem
[Describe prediction problem]

## Model
- Algorithm: [Model type]
- Accuracy: [Performance metric]

## Technologies
- Python
- Scikit-learn
- Pandas

## Setup
\`\`\`
pip install -r requirements.txt
python train_model.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Predictive model"',"git remote add origin https://github.com/yourusername/predictive-model-project.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Google Colab"]},resources:[{title:"Scikit-learn Guide",url:"https://scikit-learn.org/stable/user_guide.html",type:"Documentation"},{title:"Machine Learning Basics",url:"https://www.kaggle.com/learn/intro-to-machine-learning",type:"Tutorial"}]},{id:"time-series-analysis",title:"Time Series Analysis",description:"Analyze time series data to identify trends, seasonality, and make forecasts using Python.",skills:["Python","Pandas","Time Series","Statsmodels","Forecasting"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Load Time Series Data",description:"Import time series data and set datetime index.",tips:["Use pd.to_datetime()","Set index to date","Check for gaps"]},{number:2,title:"Explore Patterns",description:"Visualize data to identify trends and seasonality.",tips:["Plot time series","Use moving averages","Identify patterns"]},{number:3,title:"Decompose Time Series",description:"Separate trend, seasonality, and residuals.",tips:["Use seasonal_decompose","Visualize components","Understand patterns"]},{number:4,title:"Build Forecast Model",description:"Create a forecasting model (ARIMA, Prophet, etc.).",tips:["Choose appropriate model","Fit the model","Validate assumptions"]},{number:5,title:"Generate Forecasts",description:"Make future predictions and visualize results.",tips:["Generate forecast","Add confidence intervals","Evaluate accuracy"]}],githubSetup:{repositoryName:"time-series-analysis",readmeTemplate:`# Time Series Analysis Project

Time series analysis and forecasting project.

## Dataset
[Describe time series data]

## Analysis
- Trend analysis
- Seasonality detection
- Forecasting

## Technologies
- Python
- Pandas
- Statsmodels
- Prophet (optional)

## Results
[Document findings and forecasts]`,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Time series analysis"',"git remote add origin https://github.com/yourusername/time-series-analysis.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Kaggle"]},resources:[{title:"Time Series Analysis Guide",url:"https://www.statsmodels.org/stable/tsa.html",type:"Documentation"},{title:"Prophet Documentation",url:"https://facebook.github.io/prophet",type:"Documentation"}]}),i.advanced&&t.push({id:"deep-learning-classifier",title:"Deep Learning Image Classifier",description:"Build a deep learning model using TensorFlow/Keras to classify images. Learn neural networks and CNNs.",skills:["Python","TensorFlow","Keras","Deep Learning","CNN"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Prepare Image Dataset",description:"Load and preprocess image data for training.",tips:["Use ImageDataGenerator","Normalize pixel values","Augment data"]},{number:2,title:"Design CNN Architecture",description:"Create a convolutional neural network architecture.",tips:["Start with simple CNN","Add convolutional layers","Include pooling and dropout"]},{number:3,title:"Train Model",description:"Train the deep learning model on your dataset.",tips:["Use GPU if available","Monitor training","Save checkpoints"]},{number:4,title:"Evaluate Performance",description:"Assess model accuracy and analyze misclassifications.",tips:["Calculate metrics","Create confusion matrix","Visualize predictions"]},{number:5,title:"Optimize and Deploy",description:"Improve model performance and create inference pipeline.",tips:["Tune hyperparameters","Use transfer learning","Create prediction API"]}],githubSetup:{repositoryName:"deep-learning-classifier",readmeTemplate:`# Deep Learning Image Classifier

A CNN-based image classification model.

## Model Architecture
- [Describe architecture]
- Layers: [Number of layers]
- Parameters: [Model size]

## Performance
- Accuracy: [Metric]
- Training time: [Time]

## Technologies
- Python
- TensorFlow/Keras
- NumPy
- Matplotlib

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore','echo "models/" >> .gitignore',"git add .",'git commit -m "Initial commit: Deep learning classifier"',"git remote add origin https://github.com/yourusername/deep-learning-classifier.git","git push -u origin main"],deploymentOptions:["Google Colab","Kaggle","Local GPU"]},resources:[{title:"TensorFlow Guide",url:"https://www.tensorflow.org/learn",type:"Documentation"},{title:"Keras Documentation",url:"https://keras.io",type:"Documentation"}]},{id:"nlp-sentiment-analysis",title:"NLP Sentiment Analysis System",description:"Build a natural language processing system to analyze sentiment in text data using advanced NLP techniques.",skills:["Python","NLP","NLTK","spaCy","Machine Learning","Text Processing"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Collect Text Data",description:"Gather text data from sources (reviews, tweets, etc.).",tips:["Use APIs","Scrape data (ethically)","Clean text data"]},{number:2,title:"Preprocess Text",description:"Tokenize, remove stopwords, and normalize text.",tips:["Use NLTK or spaCy","Handle special characters","Stem or lemmatize"]},{number:3,title:"Feature Engineering",description:"Convert text to numerical features (TF-IDF, word embeddings).",tips:["Use TF-IDF vectorization","Try word embeddings","Consider BERT"]},{number:4,title:"Train Sentiment Model",description:"Build and train a model to classify sentiment.",tips:["Use Naive Bayes or SVM","Try deep learning","Handle class imbalance"]},{number:5,title:"Deploy and Evaluate",description:"Create API for predictions and evaluate on test data.",tips:["Build REST API","Test on new data","Monitor performance"]}],githubSetup:{repositoryName:"nlp-sentiment-analysis",readmeTemplate:`# NLP Sentiment Analysis System

A natural language processing system for sentiment analysis.

## Features
- Text preprocessing
- Sentiment classification
- API for predictions

## Technologies
- Python
- NLTK/spaCy
- Scikit-learn
- Flask/FastAPI

## Performance
- Accuracy: [Metric]
- F1-Score: [Metric]

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
python app.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: NLP sentiment analysis"',"git remote add origin https://github.com/yourusername/nlp-sentiment-analysis.git","git push -u origin main"],deploymentOptions:["Heroku","AWS","Google Cloud"]},resources:[{title:"NLTK Book",url:"https://www.nltk.org/book",type:"Tutorial"},{title:"spaCy Documentation",url:"https://spacy.io/usage",type:"Documentation"}]},{id:"recommendation-system",title:"Recommendation System",description:"Build a recommendation system using collaborative filtering and content-based approaches to suggest items to users.",skills:["Python","Machine Learning","Recommendation Systems","Pandas","NumPy"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Prepare Dataset",description:"Load user-item interaction data (ratings, views, purchases).",tips:["Use MovieLens or similar dataset","Understand data structure","Handle sparse matrices"]},{number:2,title:"Implement Collaborative Filtering",description:"Build user-based and item-based collaborative filtering.",tips:["Calculate similarity","Generate recommendations","Handle cold start problem"]},{number:3,title:"Build Content-Based Filtering",description:"Create recommendations based on item features.",tips:["Extract item features","Calculate similarity","Rank recommendations"]},{number:4,title:"Hybrid Approach",description:"Combine collaborative and content-based methods.",tips:["Weight different approaches","Test combinations","Optimize performance"]},{number:5,title:"Evaluate and Deploy",description:"Measure recommendation quality and create API.",tips:["Use precision/recall","Calculate RMSE","Build recommendation API"]}],githubSetup:{repositoryName:"recommendation-system",readmeTemplate:`# Recommendation System

A hybrid recommendation system using collaborative and content-based filtering.

## Approaches
- Collaborative Filtering
- Content-Based Filtering
- Hybrid Method

## Performance
- RMSE: [Metric]
- Precision@K: [Metric]

## Technologies
- Python
- Pandas
- NumPy
- Scikit-learn

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Recommendation system"',"git remote add origin https://github.com/yourusername/recommendation-system.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","API Deployment"]},resources:[{title:"Recommendation Systems Guide",url:"https://www.coursera.org/learn/recommender-systems",type:"Tutorial"},{title:"Surprise Library",url:"https://surpriselib.com",type:"Tool"}]});return}if(e.includes("software-developer")||e.includes("software developer")){i.beginner&&t.push({id:"command-line-tool",title:"Command Line Tool",description:"Build a useful command-line tool using Python or Node.js to automate a common task.",skills:["Python/Node.js","CLI","File System"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Define Tool Purpose",description:"Choose a task to automate (file organizer, text processor, etc.).",tips:["Pick a real problem","Keep scope small","Plan features"]},{number:2,title:"Setup CLI Framework",description:"Use argparse (Python) or commander.js (Node.js) for CLI interface.",tips:["Add command arguments","Create help text","Handle errors"]},{number:3,title:"Implement Core Logic",description:"Write the main functionality of your tool.",tips:["Keep functions focused","Handle edge cases","Add logging"]},{number:4,title:"Add File Operations",description:"Implement file reading, writing, or processing.",tips:["Use proper file handling","Check file existence","Handle permissions"]},{number:5,title:"Test and Package",description:"Test your tool and create installation instructions.",tips:["Test with different inputs","Create README","Add examples"]}],githubSetup:{repositoryName:"cli-tool",readmeTemplate:`# Command Line Tool

A useful CLI tool for [purpose].

## Features
- [List features]

## Installation
\`\`\`
pip install -r requirements.txt
# or
npm install
\`\`\`

## Usage
\`\`\`
[command] [options]
\`\`\``,gitCommands:["git init","git add .",'git commit -m "Initial commit: CLI tool"',"git remote add origin https://github.com/yourusername/cli-tool.git","git push -u origin main"],deploymentOptions:["GitHub","npm/pip package","Local installation"]},resources:[{title:"Python argparse",url:"https://docs.python.org/3/library/argparse.html",type:"Documentation"},{title:"Node.js CLI",url:"https://nodejs.org/en/docs/guides/getting-started-guide",type:"Documentation"}]},{id:"file-organizer",title:"File Organizer Script",description:"Create a script that automatically organizes files in a directory by type, date, or custom rules.",skills:["Python/JavaScript","File System","Automation"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Scan Directory",description:"List all files in a target directory.",tips:["Use os.listdir() or fs.readdir()","Filter files vs directories","Handle permissions"]},{number:2,title:"Categorize Files",description:"Group files by extension, size, or date.",tips:["Get file extensions","Read file metadata","Create categories"]},{number:3,title:"Create Folders",description:"Create destination folders for each category.",tips:["Check if folder exists","Create if missing","Handle errors"]},{number:4,title:"Move Files",description:"Move files to appropriate folders.",tips:["Use shutil.move() or fs.rename()","Handle conflicts","Preserve file structure"]},{number:5,title:"Add Safety Features",description:"Add dry-run mode and confirmation prompts.",tips:["Preview changes first","Ask for confirmation","Log operations"]}],githubSetup:{repositoryName:"file-organizer",readmeTemplate:`# File Organizer

Automatically organize files in a directory.

## Features
- Organize by type/date/size
- Custom rules
- Safety checks

## Usage
\`\`\`
python organize.py /path/to/directory
\`\`\``,gitCommands:["git init","git add .",'git commit -m "Initial commit: File organizer"',"git remote add origin https://github.com/yourusername/file-organizer.git","git push -u origin main"],deploymentOptions:["GitHub","Local Script","Scheduled Task"]},resources:[{title:"Python os module",url:"https://docs.python.org/3/library/os.html",type:"Documentation"},{title:"Node.js fs module",url:"https://nodejs.org/api/fs.html",type:"Documentation"}]},{id:"password-generator",title:"Password Generator Tool",description:"Build a secure password generator with customizable options (length, character types, etc.).",skills:["Python/JavaScript","Random Generation","CLI"],difficulty:"Beginner",estimatedTime:"3-5 days",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Define Character Sets",description:"Create strings for different character types (uppercase, lowercase, numbers, symbols).",tips:["Use string constants","Make sets configurable","Consider special characters"]},{number:2,title:"Implement Generation Logic",description:"Write function to randomly select characters based on options.",tips:["Use random.choice() or Math.random()","Respect length requirements","Ensure all selected types are included"]},{number:3,title:"Add Options",description:"Allow users to specify length and character types.",tips:["Use command-line arguments","Set defaults","Validate input"]},{number:4,title:"Add Strength Checker",description:"Evaluate password strength and provide feedback.",tips:["Check length","Verify character variety","Calculate entropy"]},{number:5,title:"Add Copy to Clipboard",description:"Automatically copy generated password to clipboard.",tips:["Use pyperclip or clipboard API","Show confirmation","Handle errors"]}],githubSetup:{repositoryName:"password-generator",readmeTemplate:`# Password Generator

A secure password generator tool.

## Features
- Customizable length
- Character type options
- Strength checking
- Clipboard integration

## Usage
\`\`\`
python generate.py --length 16 --uppercase --numbers --symbols
\`\`\``,gitCommands:["git init","git add .",'git commit -m "Initial commit: Password generator"',"git remote add origin https://github.com/yourusername/password-generator.git","git push -u origin main"],deploymentOptions:["GitHub","npm/pip package","Local tool"]},resources:[{title:"Python secrets module",url:"https://docs.python.org/3/library/secrets.html",type:"Documentation"},{title:"Cryptographically Secure Random",url:"https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues",type:"Documentation"}]}),i.intermediate&&t.push({id:"react-todo",title:"React Todo App with Hooks",description:"Build a modern todo application using React Hooks (useState, useEffect) and local storage. Perfect for learning React fundamentals.",skills:["React","JavaScript","HTML","CSS"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Web Development",steps:[{number:1,title:"Setup React Project",description:"Create a new React app using Create React App or Vite.",codeSnippet:`npx create-react-app react-todo-app
cd react-todo-app
npm start`,tips:["Use Create React App for beginners","Use Vite for faster development","Familiarize with project structure"]},{number:2,title:"Create Todo Component",description:"Build the main Todo component with state management using useState hook.",codeSnippet:`import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };
  
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}`,tips:["Use functional components","Learn useState hook","Understand immutability"]},{number:3,title:"Add Delete and Toggle Features",description:"Implement delete and toggle completion functionality.",tips:["Use filter for delete","Use map for toggle","Keep state immutable"]},{number:4,title:"Add Local Storage",description:"Persist todos to localStorage using useEffect hook.",tips:["Load from localStorage on mount","Save to localStorage on change","Handle JSON parsing errors"]},{number:5,title:"Style with CSS Modules or Styled Components",description:"Add modern styling to make the app visually appealing.",tips:["Use CSS Modules for scoped styles","Or use Styled Components","Make it responsive"]}],githubSetup:{repositoryName:"react-todo-app",readmeTemplate:`# React Todo App

A modern todo application built with React Hooks.

## Features
- Add, delete, and toggle todos
- Local storage persistence
- Modern React Hooks
- Responsive design

## Technologies
- React
- JavaScript (ES6+)
- CSS

## Setup
\`\`\`
npm install
npm start
\`\`\`

## Live Demo
[Add your demo link]`,gitCommands:["git init",'echo "node_modules/" >> .gitignore',"git add .",'git commit -m "Initial commit: React todo app"',"git remote add origin https://github.com/yourusername/react-todo-app.git","git push -u origin main"],deploymentOptions:["Vercel (Recommended)","Netlify","GitHub Pages"]},resources:[{title:"React Documentation",url:"https://react.dev",type:"Documentation"},{title:"React Hooks Guide",url:"https://react.dev/reference/react",type:"Tutorial"}]},{id:"rest-api",title:"REST API with Express/Flask",description:"Build a RESTful API using Express.js (Node.js) or Flask (Python) with CRUD operations and authentication.",skills:["Node.js/Python","Express/Flask","REST API","MongoDB/PostgreSQL"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Setup Server",description:"Initialize Express or Flask application with basic routing.",tips:["Install dependencies","Create server file","Test basic route"]},{number:2,title:"Connect Database",description:"Setup database connection (MongoDB or PostgreSQL).",tips:["Install database driver","Create connection","Test connection"]},{number:3,title:"Implement CRUD Operations",description:"Create endpoints for Create, Read, Update, Delete operations.",tips:["Use RESTful conventions","Handle errors","Validate input"]},{number:4,title:"Add Authentication",description:"Implement JWT authentication for protected routes.",tips:["Use JWT tokens","Hash passwords","Create middleware"]},{number:5,title:"Add Documentation",description:"Document API endpoints using Swagger or Postman.",tips:["Document all endpoints","Include examples","Add authentication info"]}],githubSetup:{repositoryName:"rest-api",readmeTemplate:`# REST API

A RESTful API built with [Express/Flask].

## Endpoints
- GET /api/items
- POST /api/items
- PUT /api/items/:id
- DELETE /api/items/:id

## Technologies
- [Express/Flask]
- [MongoDB/PostgreSQL]
- JWT Authentication

## Setup
\`\`\`
npm install
# or
pip install -r requirements.txt
\`\`\``,gitCommands:["git init",'echo "node_modules/" >> .gitignore','echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: REST API"',"git remote add origin https://github.com/yourusername/rest-api.git","git push -u origin main"],deploymentOptions:["Heroku","Railway","AWS"]},resources:[{title:"Express.js Guide",url:"https://expressjs.com/en/guide/routing.html",type:"Documentation"},{title:"Flask Documentation",url:"https://flask.palletsprojects.com",type:"Documentation"}]},{id:"task-scheduler",title:"Task Scheduler Application",description:"Build a task scheduling system with background jobs, cron-like functionality, and job management.",skills:["Node.js/Python","Task Scheduling","Background Jobs","Database"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Design Job System",description:"Plan how jobs will be stored, scheduled, and executed.",tips:["Define job structure","Plan scheduling logic","Consider persistence"]},{number:2,title:"Implement Job Queue",description:"Create a queue system for managing pending jobs.",tips:["Use Redis or in-memory queue","Handle job priorities","Implement retries"]},{number:3,title:"Add Scheduling Logic",description:"Implement cron-like scheduling for recurring jobs.",tips:["Parse cron expressions","Calculate next run time","Store schedules"]},{number:4,title:"Create Worker Process",description:"Build worker to execute scheduled jobs.",tips:["Process queue items","Handle job failures","Log execution"]},{number:5,title:"Add Management Interface",description:"Create API or UI to manage jobs (add, remove, view status).",tips:["List all jobs","Show job status","Allow manual triggers"]}],githubSetup:{repositoryName:"task-scheduler",readmeTemplate:`# Task Scheduler

A task scheduling system with background job processing.

## Features
- Schedule one-time jobs
- Recurring jobs (cron)
- Job queue management
- Status tracking

## Technologies
- [Node.js/Python]
- [Redis/Database]
- [Scheduling library]

## Usage
\`\`\`
[Usage instructions]
\`\`\``,gitCommands:["git init",'echo "node_modules/" >> .gitignore',"git add .",'git commit -m "Initial commit: Task scheduler"',"git remote add origin https://github.com/yourusername/task-scheduler.git","git push -u origin main"],deploymentOptions:["Heroku","AWS","Docker"]},resources:[{title:"Node-cron",url:"https://github.com/node-cron/node-cron",type:"Tool"},{title:"Python Schedule",url:"https://schedule.readthedocs.io",type:"Tool"}]}),i.advanced&&t.push({id:"microservices-architecture",title:"Microservices Architecture",description:"Design and implement a microservices-based application with multiple services, API gateway, and service communication.",skills:["Microservices","Docker","Kubernetes","API Gateway","Service Mesh"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Design Service Architecture",description:"Break down application into microservices and define boundaries.",tips:["Identify service boundaries","Define APIs","Plan data ownership"]},{number:2,title:"Implement Individual Services",description:"Build each microservice as independent application.",tips:["Use appropriate tech stack","Implement service APIs","Add health checks"]},{number:3,title:"Setup API Gateway",description:"Create API gateway to route requests to appropriate services.",tips:["Use Kong or similar","Handle authentication","Implement rate limiting"]},{number:4,title:"Implement Service Communication",description:"Setup inter-service communication (REST, gRPC, message queue).",tips:["Choose communication pattern","Handle failures","Add retries"]},{number:5,title:"Containerize and Deploy",description:"Containerize services with Docker and deploy to Kubernetes.",tips:["Create Dockerfiles","Write Kubernetes manifests","Setup monitoring"]}],githubSetup:{repositoryName:"microservices-app",readmeTemplate:`# Microservices Application

A microservices-based application architecture.

## Services
- [List services]

## Architecture
- API Gateway
- Service Mesh
- Container Orchestration

## Technologies
- Docker
- Kubernetes
- [Service frameworks]

## Deployment
[Deployment instructions]`,gitCommands:["git init",'echo "node_modules/" >> .gitignore',"git add .",'git commit -m "Initial commit: Microservices app"',"git remote add origin https://github.com/yourusername/microservices-app.git","git push -u origin main"],deploymentOptions:["Kubernetes","Docker Swarm","Cloud Platforms"]},resources:[{title:"Microservices Patterns",url:"https://microservices.io/patterns",type:"Tutorial"},{title:"Kubernetes Documentation",url:"https://kubernetes.io/docs",type:"Documentation"}]},{id:"distributed-system",title:"Distributed System with Consensus",description:"Build a distributed system with consensus algorithm, replication, and fault tolerance.",skills:["Distributed Systems","Consensus Algorithms","Replication","Fault Tolerance"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Design System Architecture",description:"Plan distributed system with multiple nodes and replication.",tips:["Define node roles","Plan replication strategy","Consider consistency"]},{number:2,title:"Implement Consensus Algorithm",description:"Implement Raft or similar consensus algorithm.",tips:["Understand consensus","Implement leader election","Handle log replication"]},{number:3,title:"Add Replication",description:"Implement data replication across nodes.",tips:["Replicate state","Handle conflicts","Ensure consistency"]},{number:4,title:"Implement Fault Tolerance",description:"Handle node failures and network partitions.",tips:["Detect failures","Handle partitions","Recover from failures"]},{number:5,title:"Test and Optimize",description:"Test system under various failure scenarios and optimize performance.",tips:["Test failure scenarios","Measure performance","Optimize bottlenecks"]}],githubSetup:{repositoryName:"distributed-system",readmeTemplate:`# Distributed System

A distributed system with consensus and replication.

## Features
- Consensus algorithm
- Data replication
- Fault tolerance
- High availability

## Technologies
- [Programming language]
- Network programming
- Consensus algorithms

## Architecture
[Describe architecture]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Distributed system"',"git remote add origin https://github.com/yourusername/distributed-system.git","git push -u origin main"],deploymentOptions:["Multiple Servers","Cloud Infrastructure","Docker Swarm"]},resources:[{title:"Raft Algorithm",url:"https://raft.github.io",type:"Tutorial"},{title:"Distributed Systems Concepts",url:"https://www.allthingsdistributed.com",type:"Tutorial"}]},{id:"real-time-collaboration",title:"Real-Time Collaboration Platform",description:"Build a real-time collaboration platform with conflict resolution, operational transforms, and multi-user editing.",skills:["WebSockets","Operational Transforms","Conflict Resolution","Real-Time Sync"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Software Development",steps:[{number:1,title:"Design Data Model",description:"Plan data structure for collaborative editing with versioning.",tips:["Use operational transforms","Plan conflict resolution","Design versioning"]},{number:2,title:"Implement WebSocket Server",description:"Create real-time server using WebSockets for bi-directional communication.",tips:["Handle connections","Broadcast changes","Manage rooms"]},{number:3,title:"Implement Operational Transforms",description:"Build OT algorithm to handle concurrent edits without conflicts.",tips:["Understand OT principles","Implement transform functions","Handle edge cases"]},{number:4,title:"Add Conflict Resolution",description:"Implement conflict resolution for simultaneous edits.",tips:["Detect conflicts","Apply resolution strategy","Sync state"]},{number:5,title:"Build Client Interface",description:"Create user interface for collaborative editing with presence indicators.",tips:["Show active users","Display changes in real-time","Handle disconnections"]}],githubSetup:{repositoryName:"realtime-collaboration",readmeTemplate:`# Real-Time Collaboration Platform

A platform for real-time collaborative editing.

## Features
- Real-time synchronization
- Operational transforms
- Conflict resolution
- Multi-user support

## Technologies
- WebSockets
- Operational Transforms
- [Frontend framework]
- [Backend framework]

## Architecture
[Describe architecture]`,gitCommands:["git init",'echo "node_modules/" >> .gitignore',"git add .",'git commit -m "Initial commit: Real-time collaboration"',"git remote add origin https://github.com/yourusername/realtime-collaboration.git","git push -u origin main"],deploymentOptions:["Heroku","AWS","Docker"]},resources:[{title:"Operational Transformation",url:"https://operational-transformation.github.io",type:"Tutorial"},{title:"WebSockets Guide",url:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",type:"Documentation"}]});return}if(e.includes("ai-engineer")||e.includes("ai engineer")||e.includes("artificial intelligence")){i.beginner&&t.push({id:"linear-regression",title:"Linear Regression Model",description:"Build a simple linear regression model to predict continuous values. Learn the fundamentals of supervised learning.",skills:["Python","Scikit-learn","Pandas","Matplotlib"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Load Dataset",description:"Import a dataset with features and target variable.",tips:["Use simple datasets","Understand data structure","Check for missing values"]},{number:2,title:"Explore Data",description:"Visualize relationships between features and target.",tips:["Create scatter plots","Check correlations","Identify patterns"]},{number:3,title:"Prepare Data",description:"Split data into features (X) and target (y), then into train/test sets.",tips:["Use train_test_split","Set random_state","Check split sizes"]},{number:4,title:"Train Model",description:"Create and train a LinearRegression model.",tips:["Import LinearRegression","Fit the model","Understand coefficients"]},{number:5,title:"Evaluate Model",description:"Calculate metrics (R\xB2, MSE) and visualize predictions.",tips:["Use mean_squared_error","Calculate R\xB2 score","Plot predictions vs actual"]}],githubSetup:{repositoryName:"linear-regression-model",readmeTemplate:`# Linear Regression Model

A simple linear regression model for prediction.

## Dataset
[Describe dataset]

## Model Performance
- R\xB2 Score: [Score]
- MSE: [Value]

## Technologies
- Python
- Scikit-learn
- Pandas
- Matplotlib

## Usage
\`\`\`
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Linear regression"',"git remote add origin https://github.com/yourusername/linear-regression-model.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Google Colab"]},resources:[{title:"Scikit-learn Linear Regression",url:"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html",type:"Documentation"},{title:"Linear Regression Explained",url:"https://www.kaggle.com/learn/intro-to-machine-learning",type:"Tutorial"}]},{id:"simple-classifier",title:"Simple Classification Model",description:"Build a basic classification model using scikit-learn to categorize data into classes.",skills:["Python","Scikit-learn","Classification","Pandas"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Choose Classification Problem",description:"Select a simple classification dataset (Iris, Titanic, etc.).",tips:["Start with binary classification","Use labeled datasets","Understand classes"]},{number:2,title:"Preprocess Data",description:"Handle missing values and encode categorical variables.",tips:["Fill or drop missing values","Encode categories","Scale features"]},{number:3,title:"Train Classifier",description:"Train a simple classifier (Logistic Regression or Decision Tree).",tips:["Use LogisticRegression","Fit the model","Understand predictions"]},{number:4,title:"Evaluate Performance",description:"Calculate accuracy and create confusion matrix.",tips:["Use accuracy_score","Create confusion matrix","Visualize results"]},{number:5,title:"Improve Model",description:"Try different algorithms and compare performance.",tips:["Try Decision Tree","Compare results","Document findings"]}],githubSetup:{repositoryName:"simple-classifier",readmeTemplate:`# Simple Classification Model

A basic classification model using scikit-learn.

## Problem
[Describe classification problem]

## Model
- Algorithm: [Model type]
- Accuracy: [Score]

## Technologies
- Python
- Scikit-learn
- Pandas

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Simple classifier"',"git remote add origin https://github.com/yourusername/simple-classifier.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Kaggle"]},resources:[{title:"Classification Guide",url:"https://scikit-learn.org/stable/supervised_learning.html#classification",type:"Documentation"},{title:"Confusion Matrix",url:"https://scikit-learn.org/stable/modules/generated/sklearn.metrics.confusion_matrix.html",type:"Documentation"}]},{id:"data-visualization-ml",title:"ML Data Visualization",description:"Create visualizations to understand machine learning data, model performance, and feature importance.",skills:["Python","Matplotlib","Seaborn","Data Visualization"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Visualize Dataset",description:"Create plots to understand data distribution and relationships.",tips:["Use histograms","Create scatter plots","Check correlations"]},{number:2,title:"Plot Feature Distributions",description:"Visualize how features are distributed across classes.",tips:["Use box plots","Create violin plots","Compare distributions"]},{number:3,title:"Visualize Model Performance",description:"Create plots showing model predictions vs actual values.",tips:["Scatter plot predictions","Plot residuals","Show accuracy"]},{number:4,title:"Feature Importance",description:"Visualize which features are most important for predictions.",tips:["Use feature_importances_","Create bar charts","Rank features"]},{number:5,title:"Create Dashboard",description:"Combine all visualizations into a single dashboard.",tips:["Use subplots","Add titles and labels","Export as image"]}],githubSetup:{repositoryName:"ml-data-visualization",readmeTemplate:`# ML Data Visualization

Visualizations for machine learning data and models.

## Visualizations
- Data distribution
- Feature importance
- Model performance
- Predictions vs actual

## Technologies
- Python
- Matplotlib
- Seaborn

## Usage
\`\`\`
python visualize.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: ML visualizations"',"git remote add origin https://github.com/yourusername/ml-data-visualization.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Local Script"]},resources:[{title:"Matplotlib Tutorial",url:"https://matplotlib.org/stable/tutorials/index.html",type:"Tutorial"},{title:"Seaborn Guide",url:"https://seaborn.pydata.org/tutorial.html",type:"Tutorial"}]}),i.intermediate&&t.push({id:"neural-network-basics",title:"Neural Network from Scratch",description:"Build a simple neural network from scratch using NumPy to understand how neural networks work internally.",skills:["Python","NumPy","Neural Networks","Mathematics"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Understand Basics",description:"Learn about neurons, weights, biases, and activation functions.",tips:["Study neural network theory","Understand forward propagation","Learn backpropagation"]},{number:2,title:"Implement Forward Pass",description:"Code the forward propagation through the network.",tips:["Initialize weights","Implement matrix multiplication","Apply activation functions"]},{number:3,title:"Implement Backpropagation",description:"Code the backward propagation to update weights.",tips:["Calculate gradients","Update weights","Implement learning rate"]},{number:4,title:"Train the Network",description:"Train the network on a dataset and monitor loss.",tips:["Implement training loop","Track loss over epochs","Validate performance"]},{number:5,title:"Test and Optimize",description:"Test on unseen data and optimize hyperparameters.",tips:["Evaluate on test set","Tune learning rate","Adjust network architecture"]}],githubSetup:{repositoryName:"neural-network-scratch",readmeTemplate:`# Neural Network from Scratch

A neural network implementation using only NumPy.

## Architecture
- Layers: [Number]
- Neurons per layer: [Count]
- Activation: [Function]

## Performance
- Accuracy: [Score]
- Loss: [Value]

## Technologies
- Python
- NumPy
- Mathematics

## Usage
\`\`\`
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: Neural network from scratch"',"git remote add origin https://github.com/yourusername/neural-network-scratch.git","git push -u origin main"],deploymentOptions:["GitHub","Jupyter Notebook","Local Script"]},resources:[{title:"Neural Networks Explained",url:"https://www.youtube.com/watch?v=aircAruvnKk",type:"Tutorial"},{title:"NumPy Documentation",url:"https://numpy.org/doc/stable",type:"Documentation"}]},{id:"image-classifier-cnn",title:"Image Classifier with CNN",description:"Build a convolutional neural network using TensorFlow/Keras to classify images.",skills:["Python","TensorFlow","Keras","CNN","Image Processing"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Prepare Image Data",description:"Load and preprocess image dataset (CIFAR-10, MNIST, etc.).",tips:["Normalize pixel values","Resize images","Create train/test split"]},{number:2,title:"Design CNN Architecture",description:"Create convolutional neural network with Conv2D layers.",tips:["Add convolutional layers","Include pooling layers","Add dropout for regularization"]},{number:3,title:"Compile and Train",description:"Compile model with optimizer and loss function, then train.",tips:["Choose optimizer (Adam)","Select loss function","Monitor training"]},{number:4,title:"Evaluate Model",description:"Test model on validation set and analyze performance.",tips:["Calculate accuracy","Create confusion matrix","Visualize predictions"]},{number:5,title:"Improve Performance",description:"Use data augmentation and tune hyperparameters.",tips:["Add data augmentation","Tune learning rate","Try different architectures"]}],githubSetup:{repositoryName:"cnn-image-classifier",readmeTemplate:`# CNN Image Classifier

A convolutional neural network for image classification.

## Architecture
- Convolutional layers
- Pooling layers
- Dense layers

## Performance
- Accuracy: [Score]
- Training time: [Time]

## Technologies
- Python
- TensorFlow/Keras
- NumPy

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore','echo "models/" >> .gitignore',"git add .",'git commit -m "Initial commit: CNN image classifier"',"git remote add origin https://github.com/yourusername/cnn-image-classifier.git","git push -u origin main"],deploymentOptions:["Google Colab","Kaggle","Local GPU"]},resources:[{title:"TensorFlow CNN Guide",url:"https://www.tensorflow.org/tutorials/images/cnn",type:"Tutorial"},{title:"Keras Documentation",url:"https://keras.io",type:"Documentation"}]},{id:"nlp-text-classifier",title:"NLP Text Classifier",description:"Build a natural language processing model to classify text (sentiment, spam, topic, etc.).",skills:["Python","NLP","Scikit-learn","Text Processing","TF-IDF"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Collect Text Data",description:"Gather labeled text data for classification task.",tips:["Use datasets (IMDB, Twitter)","Ensure data is labeled","Check data quality"]},{number:2,title:"Preprocess Text",description:"Clean and preprocess text data (tokenization, stopwords, etc.).",tips:["Remove special characters","Convert to lowercase","Remove stopwords"]},{number:3,title:"Feature Extraction",description:"Convert text to numerical features using TF-IDF or word embeddings.",tips:["Use TfidfVectorizer","Try CountVectorizer","Consider word embeddings"]},{number:4,title:"Train Classifier",description:"Train a classifier (Naive Bayes, SVM, or Neural Network).",tips:["Start with Naive Bayes","Try SVM","Compare performance"]},{number:5,title:"Evaluate and Deploy",description:"Evaluate model and create API for predictions.",tips:["Calculate metrics","Test on new data","Create prediction API"]}],githubSetup:{repositoryName:"nlp-text-classifier",readmeTemplate:`# NLP Text Classifier

A natural language processing model for text classification.

## Problem
[Describe classification task]

## Model
- Algorithm: [Model type]
- Accuracy: [Score]

## Technologies
- Python
- Scikit-learn
- NLTK/spaCy

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore',"git add .",'git commit -m "Initial commit: NLP text classifier"',"git remote add origin https://github.com/yourusername/nlp-text-classifier.git","git push -u origin main"],deploymentOptions:["GitHub","Heroku","AWS"]},resources:[{title:"NLTK Book",url:"https://www.nltk.org/book",type:"Tutorial"},{title:"TF-IDF Explained",url:"https://scikit-learn.org/stable/modules/feature_extraction.html",type:"Documentation"}]}),i.advanced&&t.push({id:"ml-classifier",title:"Machine Learning Classifier",description:"Build a machine learning classifier using scikit-learn to predict categories from data. Great for learning ML fundamentals.",skills:["Python","Machine Learning","Scikit-learn","Pandas"],difficulty:"Advanced",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"Data Science",steps:[{number:1,title:"Choose Dataset and Problem",description:"Select a classification problem (e.g., spam detection, sentiment analysis, image classification).",tips:["Start with a simple dataset","Choose a clear problem statement","Ensure data is labeled"]},{number:2,title:"Data Preprocessing",description:"Clean and preprocess the data for machine learning.",codeSnippet:`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load data
df = pd.read_csv('data.csv')

# Handle missing values
df = df.dropna()

# Split features and target
X = df.drop('target', axis=1)
y = df['target']

# Split train/test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Scale features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)`,tips:["Handle missing values","Encode categorical variables","Scale numerical features"]},{number:3,title:"Train Model",description:"Train a classification model using scikit-learn.",codeSnippet:`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
print(classification_report(y_test, y_pred))`,tips:["Try different algorithms","Tune hyperparameters","Use cross-validation"]},{number:4,title:"Evaluate and Visualize",description:"Create visualizations of model performance and feature importance.",tips:["Plot confusion matrix","Show feature importance","Visualize predictions"]},{number:5,title:"Create Jupyter Notebook",description:"Document your project in a Jupyter notebook with explanations.",tips:["Add markdown explanations","Include visualizations","Document findings"]}],githubSetup:{repositoryName:"ml-classifier-project",readmeTemplate:`# Machine Learning Classifier

A machine learning classification project using scikit-learn.

## Problem
[Describe the classification problem]

## Dataset
[Describe your dataset]

## Model
- Algorithm: Random Forest Classifier
- Accuracy: [Your accuracy]
- Features: [List features]

## Technologies
- Python
- Scikit-learn
- Pandas
- Matplotlib
- Jupyter Notebook

## Setup
\`\`\`
pip install -r requirements.txt
jupyter notebook
\`\`\`

## Results
[Add screenshots and results]`,gitCommands:["git init",'echo "__pycache__/" >> .gitignore','echo "*.pyc" >> .gitignore','echo ".ipynb_checkpoints/" >> .gitignore',"git add .",'git commit -m "Initial commit: ML classifier"',"git remote add origin https://github.com/yourusername/ml-classifier-project.git","git push -u origin main"],deploymentOptions:["GitHub (Jupyter notebooks)","Kaggle Notebooks","Google Colab"]},resources:[{title:"Scikit-learn Documentation",url:"https://scikit-learn.org/stable/",type:"Documentation"},{title:"Kaggle Learn",url:"https://www.kaggle.com/learn",type:"Tutorial"}]},{id:"transformer-model",title:"Transformer Model Implementation",description:"Build a transformer model for sequence-to-sequence tasks like machine translation or text generation.",skills:["Python","PyTorch/TensorFlow","Transformers","NLP","Deep Learning"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Understand Transformer Architecture",description:"Study attention mechanisms, encoder-decoder structure, and positional encoding.",tips:['Read "Attention Is All You Need"',"Understand self-attention","Learn about multi-head attention"]},{number:2,title:"Implement Attention Mechanism",description:"Code the self-attention and multi-head attention layers.",tips:["Implement Q, K, V matrices","Calculate attention scores","Apply softmax and scaling"]},{number:3,title:"Build Encoder-Decoder",description:"Create encoder and decoder stacks with transformer blocks.",tips:["Implement encoder layers","Implement decoder layers","Add residual connections"]},{number:4,title:"Train on Dataset",description:"Train transformer on sequence-to-sequence task.",tips:["Prepare dataset","Implement training loop","Use teacher forcing"]},{number:5,title:"Evaluate and Optimize",description:"Evaluate model performance and optimize for production.",tips:["Calculate BLEU/ROUGE scores","Optimize inference speed","Deploy model"]}],githubSetup:{repositoryName:"transformer-model",readmeTemplate:`# Transformer Model

A transformer model implementation for sequence-to-sequence tasks.

## Architecture
- Encoder-Decoder
- Multi-head attention
- Positional encoding

## Performance
- BLEU Score: [Score]
- Training time: [Time]

## Technologies
- Python
- PyTorch/TensorFlow
- NumPy

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore','echo "models/" >> .gitignore',"git add .",'git commit -m "Initial commit: Transformer model"',"git remote add origin https://github.com/yourusername/transformer-model.git","git push -u origin main"],deploymentOptions:["Google Colab","AWS SageMaker","Local GPU"]},resources:[{title:"Attention Is All You Need",url:"https://arxiv.org/abs/1706.03762",type:"Tutorial"},{title:"The Annotated Transformer",url:"http://nlp.seas.harvard.edu/annotated-transformer",type:"Tutorial"}]},{id:"reinforcement-learning",title:"Reinforcement Learning Agent",description:"Build a reinforcement learning agent using Q-learning or policy gradients to solve an environment.",skills:["Python","Reinforcement Learning","OpenAI Gym","Deep Q-Networks"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"AI/ML",steps:[{number:1,title:"Setup Environment",description:"Choose and setup RL environment (OpenAI Gym, Atari, etc.).",tips:["Install gym","Understand environment API","Test environment"]},{number:2,title:"Implement Q-Learning",description:"Code Q-learning algorithm with Q-table or neural network.",tips:["Understand Q-learning","Implement Q-function","Handle exploration vs exploitation"]},{number:3,title:"Build Deep Q-Network",description:"Create DQN using neural network to approximate Q-values.",tips:["Design network architecture","Implement experience replay","Use target network"]},{number:4,title:"Train Agent",description:"Train agent to learn optimal policy through trial and error.",tips:["Implement training loop","Track rewards","Monitor learning progress"]},{number:5,title:"Evaluate and Improve",description:"Test trained agent and improve with advanced techniques.",tips:["Test on environment","Try policy gradients","Implement improvements"]}],githubSetup:{repositoryName:"reinforcement-learning-agent",readmeTemplate:`# Reinforcement Learning Agent

An RL agent trained to solve [environment name].

## Algorithm
- [Q-Learning/DQN/Policy Gradient]
- Environment: [Name]

## Performance
- Average Reward: [Score]
- Episodes to solve: [Number]

## Technologies
- Python
- OpenAI Gym
- PyTorch/TensorFlow

## Setup
\`\`\`
pip install -r requirements.txt
python train.py
\`\`\``,gitCommands:["git init",'echo "__pycache__/" >> .gitignore','echo "models/" >> .gitignore',"git add .",'git commit -m "Initial commit: RL agent"',"git remote add origin https://github.com/yourusername/reinforcement-learning-agent.git","git push -u origin main"],deploymentOptions:["Google Colab","Local GPU","Cloud GPU"]},resources:[{title:"OpenAI Gym",url:"https://gym.openai.com",type:"Tool"},{title:"Deep Q-Learning",url:"https://www.nature.com/articles/nature14236",type:"Tutorial"}]});return}if(e.includes("cloud-engineer")||e.includes("cloud engineer")){i.beginner&&t.push({id:"aws-infrastructure",title:"AWS Infrastructure Setup",description:"Deploy a simple web application on AWS using EC2, S3, and CloudFront. Learn cloud infrastructure basics.",skills:["AWS","Cloud Computing","Infrastructure"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Create AWS Account",description:"Sign up for AWS free tier and understand the AWS console.",tips:["Use free tier for learning","Set up billing alerts","Understand AWS regions"]},{number:2,title:"Launch EC2 Instance",description:"Launch a virtual server on AWS EC2.",tips:["Choose appropriate instance type","Configure security groups","Use key pairs for SSH"]},{number:3,title:"Deploy Web Application",description:"Deploy a simple web app on EC2.",tips:["Use Apache or Nginx","Configure firewall rules","Test accessibility"]},{number:4,title:"Setup S3 Bucket",description:"Create S3 bucket for static assets.",tips:["Configure bucket policies","Enable static website hosting","Set up CORS if needed"]},{number:5,title:"Configure CloudFront",description:"Set up CDN using CloudFront for better performance.",tips:["Create distribution","Configure origins","Test CDN caching"]}],githubSetup:{repositoryName:"aws-infrastructure-project",readmeTemplate:`# AWS Infrastructure Project

A simple web application deployed on AWS cloud infrastructure.

## Infrastructure
- EC2 Instance
- S3 Bucket
- CloudFront CDN

## Technologies
- AWS Services
- Linux
- Web Server (Apache/Nginx)

## Setup
1. Launch EC2 instance
2. Deploy application
3. Configure S3 and CloudFront

## Cost
- Free tier eligible
- Monitor usage to avoid charges`,gitCommands:["git init","git add .",'git commit -m "Initial commit: AWS infrastructure"',"git branch -M main","git remote add origin https://github.com/yourusername/aws-infrastructure-project.git","git push -u origin main"],deploymentOptions:["AWS EC2","AWS S3 + CloudFront","AWS Elastic Beanstalk"]},resources:[{title:"AWS Documentation",url:"https://docs.aws.amazon.com",type:"Documentation"},{title:"AWS Free Tier",url:"https://aws.amazon.com/free",type:"Tool"}]},{id:"static-website-hosting",title:"Static Website Hosting on Cloud",description:"Deploy a static website to cloud storage (AWS S3, Google Cloud Storage, Azure Blob) with CDN integration.",skills:["Cloud Storage","CDN","Static Hosting","AWS/GCP/Azure"],difficulty:"Beginner",estimatedTime:"3-5 days",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Prepare Website Files",description:"Build or prepare static website files (HTML, CSS, JS).",tips:["Optimize images","Minify CSS/JS","Test locally"]},{number:2,title:"Create Storage Bucket",description:"Create cloud storage bucket for website files.",tips:["Choose appropriate region","Configure bucket settings","Set up permissions"]},{number:3,title:"Upload Files",description:"Upload website files to cloud storage.",tips:["Maintain folder structure","Set correct content types","Enable versioning"]},{number:4,title:"Configure Static Hosting",description:"Enable static website hosting on the bucket.",tips:["Set index document","Configure error pages","Test access"]},{number:5,title:"Setup CDN",description:"Configure CDN for faster global delivery.",tips:["Create distribution","Configure caching","Test performance"]}],githubSetup:{repositoryName:"static-website-cloud",readmeTemplate:`# Static Website on Cloud

A static website hosted on cloud storage with CDN.

## Infrastructure
- Cloud Storage (S3/GCS/Azure)
- CDN (CloudFront/Cloud CDN)

## Technologies
- HTML/CSS/JavaScript
- Cloud Platform

## Deployment
[Deployment instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Static website"',"git remote add origin https://github.com/yourusername/static-website-cloud.git","git push -u origin main"],deploymentOptions:["AWS S3 + CloudFront","Google Cloud Storage","Azure Blob Storage"]},resources:[{title:"AWS S3 Static Hosting",url:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",type:"Documentation"},{title:"Google Cloud Storage",url:"https://cloud.google.com/storage/docs/hosting-static-website",type:"Documentation"}]},{id:"cloud-database-setup",title:"Cloud Database Setup",description:"Set up and configure a managed database service on cloud (RDS, Cloud SQL, Azure Database).",skills:["Cloud Databases","SQL","Database Management","Cloud Services"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Choose Database Service",description:"Select managed database service (RDS, Cloud SQL, etc.).",tips:["Compare options","Consider cost","Check features"]},{number:2,title:"Create Database Instance",description:"Provision database instance with appropriate configuration.",tips:["Choose instance size","Select database engine","Configure storage"]},{number:3,title:"Configure Security",description:"Set up security groups, VPC, and access controls.",tips:["Configure firewall rules","Set up VPC","Enable encryption"]},{number:4,title:"Connect and Test",description:"Connect to database and test connectivity.",tips:["Get connection string","Test connection","Create test database"]},{number:5,title:"Setup Backups",description:"Configure automated backups and monitoring.",tips:["Enable automated backups","Set retention period","Configure monitoring"]}],githubSetup:{repositoryName:"cloud-database-setup",readmeTemplate:`# Cloud Database Setup

A managed database setup on cloud platform.

## Database
- Service: [RDS/Cloud SQL/Azure]
- Engine: [MySQL/PostgreSQL]
- Instance: [Size]

## Configuration
- Automated backups
- Monitoring
- Security groups

## Technologies
- Cloud Database Service
- SQL

## Setup
[Connection instructions]`,gitCommands:["git init",'echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: Cloud database"',"git remote add origin https://github.com/yourusername/cloud-database-setup.git","git push -u origin main"],deploymentOptions:["AWS RDS","Google Cloud SQL","Azure Database"]},resources:[{title:"AWS RDS Guide",url:"https://docs.aws.amazon.com/rds",type:"Documentation"},{title:"Cloud SQL Documentation",url:"https://cloud.google.com/sql/docs",type:"Documentation"}]}),i.intermediate&&t.push({id:"docker-kubernetes",title:"Container Orchestration with Docker & Kubernetes",description:"Containerize applications and deploy them using Docker and Kubernetes on cloud platforms.",skills:["Docker","Kubernetes","Containerization","Cloud"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Dockerize Application",description:"Create Dockerfile and build container image.",tips:["Use multi-stage builds","Optimize image size","Follow best practices"]},{number:2,title:"Push to Container Registry",description:"Push images to Docker Hub or AWS ECR.",tips:["Tag images properly","Use versioning","Set up automated builds"]},{number:3,title:"Setup Kubernetes Cluster",description:"Create Kubernetes cluster on cloud (EKS, GKE, or AKS).",tips:["Start with managed services","Understand pods and services","Configure networking"]},{number:4,title:"Deploy Application",description:"Deploy containerized app using Kubernetes manifests.",tips:["Create deployment YAML","Configure services","Set up ingress"]},{number:5,title:"Monitor and Scale",description:"Monitor application and configure auto-scaling.",tips:["Use monitoring tools","Configure HPA","Set resource limits"]}],githubSetup:{repositoryName:"docker-kubernetes-project",readmeTemplate:`# Docker & Kubernetes Project

Containerized application deployed on Kubernetes.

## Technologies
- Docker
- Kubernetes
- Cloud Platform (AWS/GCP/Azure)

## Setup
1. Build Docker image
2. Push to registry
3. Deploy to Kubernetes

## Features
- Containerization
- Orchestration
- Auto-scaling`,gitCommands:["git init",'echo "*.log" >> .gitignore',"git add .",'git commit -m "Initial commit: Docker Kubernetes project"',"git remote add origin https://github.com/yourusername/docker-kubernetes-project.git","git push -u origin main"],deploymentOptions:["AWS EKS","Google GKE","Azure AKS"]},resources:[{title:"Docker Documentation",url:"https://docs.docker.com",type:"Documentation"},{title:"Kubernetes Documentation",url:"https://kubernetes.io/docs",type:"Documentation"}]},{id:"serverless-api",title:"Serverless API with Lambda",description:"Build a serverless API using AWS Lambda, API Gateway, and DynamoDB for scalable, cost-effective applications.",skills:["Serverless","AWS Lambda","API Gateway","DynamoDB"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Design API Structure",description:"Plan API endpoints and data flow for serverless architecture.",tips:["Define endpoints","Plan data model","Consider scalability"]},{number:2,title:"Create Lambda Functions",description:"Write Lambda functions to handle API requests.",tips:["Use appropriate runtime","Handle errors","Optimize cold starts"]},{number:3,title:"Setup API Gateway",description:"Configure API Gateway to route requests to Lambda functions.",tips:["Create REST API","Configure routes","Set up CORS"]},{number:4,title:"Setup DynamoDB",description:"Create DynamoDB tables and configure access from Lambda.",tips:["Design table schema","Set up IAM roles","Configure indexes"]},{number:5,title:"Deploy and Test",description:"Deploy serverless stack and test API endpoints.",tips:["Use SAM or Serverless Framework","Test all endpoints","Monitor performance"]}],githubSetup:{repositoryName:"serverless-api",readmeTemplate:`# Serverless API

A serverless API built with AWS Lambda and API Gateway.

## Architecture
- AWS Lambda
- API Gateway
- DynamoDB

## Endpoints
- [List endpoints]

## Technologies
- AWS Serverless
- Node.js/Python

## Deployment
\`\`\`
sam deploy
# or
serverless deploy
\`\`\``,gitCommands:["git init",'echo "node_modules/" >> .gitignore','echo ".aws-sam/" >> .gitignore',"git add .",'git commit -m "Initial commit: Serverless API"',"git remote add origin https://github.com/yourusername/serverless-api.git","git push -u origin main"],deploymentOptions:["AWS SAM","Serverless Framework","Terraform"]},resources:[{title:"AWS Lambda Guide",url:"https://docs.aws.amazon.com/lambda",type:"Documentation"},{title:"Serverless Framework",url:"https://www.serverless.com",type:"Tool"}]},{id:"multi-cloud-deployment",title:"Multi-Cloud Deployment",description:"Deploy application across multiple cloud providers (AWS, GCP, Azure) for redundancy and cost optimization.",skills:["Multi-Cloud","Cloud Architecture","Terraform","Cloud Services"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Design Multi-Cloud Architecture",description:"Plan deployment strategy across multiple cloud providers.",tips:["Identify use cases","Plan redundancy","Consider costs"]},{number:2,title:"Setup Infrastructure as Code",description:"Use Terraform to define infrastructure for each cloud.",tips:["Create Terraform modules","Use cloud-specific providers","Maintain consistency"]},{number:3,title:"Deploy to First Cloud",description:"Deploy application to primary cloud provider.",tips:["Test deployment","Verify functionality","Document process"]},{number:4,title:"Deploy to Second Cloud",description:"Deploy same application to second cloud provider.",tips:["Adapt for cloud differences","Test compatibility","Verify consistency"]},{number:5,title:"Setup Load Balancing",description:"Configure load balancer to distribute traffic across clouds.",tips:["Use DNS-based routing","Configure health checks","Test failover"]}],githubSetup:{repositoryName:"multi-cloud-deployment",readmeTemplate:`# Multi-Cloud Deployment

Application deployed across multiple cloud providers.

## Architecture
- AWS
- Google Cloud
- Azure

## Infrastructure
- Terraform
- Multi-cloud strategy

## Technologies
- Terraform
- Cloud Platforms

## Deployment
[Deployment instructions]`,gitCommands:["git init",'echo "*.tfstate" >> .gitignore',"git add .",'git commit -m "Initial commit: Multi-cloud deployment"',"git remote add origin https://github.com/yourusername/multi-cloud-deployment.git","git push -u origin main"],deploymentOptions:["Terraform","Cloud-specific tools","Manual deployment"]},resources:[{title:"Terraform Multi-Cloud",url:"https://www.terraform.io/docs",type:"Documentation"},{title:"Multi-Cloud Strategy",url:"https://cloud.google.com/learn/what-is-multi-cloud",type:"Tutorial"}]}),i.advanced&&t.push({id:"cloud-native-architecture",title:"Cloud-Native Microservices",description:"Design and deploy a cloud-native microservices architecture with service mesh, API gateway, and observability.",skills:["Microservices","Service Mesh","Cloud-Native","Kubernetes","Observability"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Design Microservices",description:"Break down application into microservices with clear boundaries.",tips:["Define service boundaries","Plan APIs","Design data ownership"]},{number:2,title:"Setup Kubernetes Cluster",description:"Deploy Kubernetes cluster on cloud (EKS, GKE, AKS).",tips:["Choose managed service","Configure networking","Setup RBAC"]},{number:3,title:"Implement Service Mesh",description:"Deploy service mesh (Istio, Linkerd) for service communication.",tips:["Install service mesh","Configure policies","Enable mTLS"]},{number:4,title:"Add Observability",description:"Implement logging, monitoring, and tracing across services.",tips:["Setup centralized logging","Configure metrics","Implement distributed tracing"]},{number:5,title:"Optimize and Scale",description:"Optimize performance and implement auto-scaling.",tips:["Tune resource limits","Configure HPA/VPA","Optimize costs"]}],githubSetup:{repositoryName:"cloud-native-microservices",readmeTemplate:`# Cloud-Native Microservices

A cloud-native microservices architecture.

## Architecture
- Microservices
- Service Mesh
- Kubernetes
- Observability

## Services
[List services]

## Technologies
- Kubernetes
- Service Mesh
- Cloud Platform

## Deployment
[Deployment instructions]`,gitCommands:["git init",'echo "kubeconfig" >> .gitignore',"git add .",'git commit -m "Initial commit: Cloud-native microservices"',"git remote add origin https://github.com/yourusername/cloud-native-microservices.git","git push -u origin main"],deploymentOptions:["Kubernetes","Cloud Platforms","Service Mesh"]},resources:[{title:"Kubernetes Documentation",url:"https://kubernetes.io/docs",type:"Documentation"},{title:"Istio Guide",url:"https://istio.io/latest/docs",type:"Documentation"}]},{id:"disaster-recovery",title:"Disaster Recovery Setup",description:"Implement comprehensive disaster recovery solution with backup, replication, and failover across regions.",skills:["Disaster Recovery","Backup Strategies","Multi-Region","High Availability"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Design DR Strategy",description:"Plan disaster recovery strategy with RTO and RPO requirements.",tips:["Define RTO/RPO","Choose strategy","Plan failover process"]},{number:2,title:"Implement Backups",description:"Setup automated backups with retention policies.",tips:["Configure backup schedules","Set retention periods","Test restore process"]},{number:3,title:"Setup Replication",description:"Replicate data and infrastructure to secondary region.",tips:["Configure replication","Monitor sync status","Test replication"]},{number:4,title:"Implement Failover",description:"Create automated failover mechanism for disaster scenarios.",tips:["Setup health checks","Configure failover triggers","Test failover"]},{number:5,title:"Document and Test",description:"Document DR procedures and conduct regular DR drills.",tips:["Create runbooks","Schedule DR tests","Improve based on results"]}],githubSetup:{repositoryName:"disaster-recovery-setup",readmeTemplate:`# Disaster Recovery Setup

Comprehensive disaster recovery solution.

## Strategy
- RTO: [Time]
- RPO: [Time]
- Regions: [List]

## Components
- Automated backups
- Multi-region replication
- Automated failover

## Technologies
- Cloud Platform
- Backup Services
- Replication Tools

## Procedures
[DR procedures]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Disaster recovery"',"git remote add origin https://github.com/yourusername/disaster-recovery-setup.git","git push -u origin main"],deploymentOptions:["Multi-Region","Cloud DR Services","Custom Solution"]},resources:[{title:"AWS Disaster Recovery",url:"https://aws.amazon.com/disaster-recovery",type:"Documentation"},{title:"DR Best Practices",url:"https://cloud.google.com/solutions/disaster-recovery",type:"Tutorial"}]},{id:"cost-optimization",title:"Cloud Cost Optimization",description:"Analyze and optimize cloud costs using automation, reserved instances, and right-sizing strategies.",skills:["Cost Optimization","Cloud FinOps","Automation","Resource Management"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Cloud Computing",steps:[{number:1,title:"Analyze Current Costs",description:"Use cloud cost analysis tools to understand spending.",tips:["Review cost reports","Identify cost drivers","Categorize expenses"]},{number:2,title:"Identify Optimization Opportunities",description:"Find underutilized resources and optimization opportunities.",tips:["Right-size instances","Identify idle resources","Review storage costs"]},{number:3,title:"Implement Reserved Instances",description:"Purchase reserved instances for predictable workloads.",tips:["Analyze usage patterns","Choose RI type","Optimize RI coverage"]},{number:4,title:"Automate Cost Controls",description:"Implement automated cost controls and alerts.",tips:["Setup budget alerts","Implement auto-scaling","Use spot instances"]},{number:5,title:"Monitor and Optimize",description:"Continuously monitor costs and optimize further.",tips:["Track cost trends","Review regularly","Implement FinOps practices"]}],githubSetup:{repositoryName:"cloud-cost-optimization",readmeTemplate:`# Cloud Cost Optimization

Cloud cost optimization project with automation.

## Optimizations
- Right-sizing
- Reserved instances
- Automated scaling
- Cost monitoring

## Results
- Cost reduction: [Percentage]
- Savings: [Amount]

## Technologies
- Cloud Cost Tools
- Automation Scripts
- Monitoring

## Tools
[List tools used]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Cost optimization"',"git remote add origin https://github.com/yourusername/cloud-cost-optimization.git","git push -u origin main"],deploymentOptions:["Cloud Cost Tools","Custom Scripts","Third-party Tools"]},resources:[{title:"AWS Cost Optimization",url:"https://aws.amazon.com/pricing/cost-optimization",type:"Documentation"},{title:"FinOps Guide",url:"https://www.finops.org",type:"Tutorial"}]});return}if(e.includes("devops-engineer")||e.includes("devops engineer")){i.beginner&&t.push({id:"ci-cd-pipeline",title:"CI/CD Pipeline with GitHub Actions",description:"Build a continuous integration and deployment pipeline using GitHub Actions to automate testing and deployment.",skills:["CI/CD","GitHub Actions","Automation","DevOps"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Setup GitHub Repository",description:"Create repository and understand GitHub Actions workflow.",tips:["Use .github/workflows directory","Understand YAML syntax","Learn workflow triggers"]},{number:2,title:"Create Basic Workflow",description:"Create a simple workflow that runs on push.",tips:["Start with hello world","Test workflow execution","Check workflow logs"]},{number:3,title:"Add Testing Step",description:"Add automated testing to the pipeline.",tips:["Run unit tests","Check test coverage","Fail pipeline on test failure"]},{number:4,title:"Add Deployment Step",description:"Automate deployment to staging/production.",tips:["Use environment secrets","Deploy to cloud platform","Add approval gates"]},{number:5,title:"Add Notifications",description:"Configure notifications for pipeline status.",tips:["Notify on success/failure","Use Slack or email","Add status badges"]}],githubSetup:{repositoryName:"ci-cd-pipeline-project",readmeTemplate:`# CI/CD Pipeline Project

Automated CI/CD pipeline using GitHub Actions.

## Features
- Automated testing
- Automated deployment
- Status notifications

## Workflow
1. Push code
2. Run tests
3. Deploy if tests pass

## Technologies
- GitHub Actions
- YAML
- Cloud Platform`,gitCommands:["git init","git add .",'git commit -m "Initial commit: CI/CD pipeline"',"git branch -M main","git remote add origin https://github.com/yourusername/ci-cd-pipeline-project.git","git push -u origin main"],deploymentOptions:["GitHub Actions","Jenkins","GitLab CI"]},resources:[{title:"GitHub Actions Docs",url:"https://docs.github.com/en/actions",type:"Documentation"},{title:"CI/CD Best Practices",url:"https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment",type:"Tutorial"}]},{id:"automated-testing",title:"Automated Testing Pipeline",description:"Set up automated testing pipeline with unit tests, integration tests, and code quality checks.",skills:["Testing","CI/CD","Test Automation","Quality Assurance"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Write Unit Tests",description:"Create unit tests for application code.",tips:["Use testing frameworks","Achieve good coverage","Test edge cases"]},{number:2,title:"Setup Test Runner",description:"Configure test runner to execute tests automatically.",tips:["Choose test framework","Configure test scripts","Run tests locally"]},{number:3,title:"Add Integration Tests",description:"Create integration tests for API endpoints or services.",tips:["Test API endpoints","Mock external services","Test data flow"]},{number:4,title:"Add Code Quality Checks",description:"Integrate code quality tools (linting, formatting).",tips:["Use ESLint/Pylint","Add Prettier/Black","Set quality gates"]},{number:5,title:"Integrate with CI/CD",description:"Add testing steps to CI/CD pipeline.",tips:["Run tests on every commit","Fail pipeline on test failure","Generate test reports"]}],githubSetup:{repositoryName:"automated-testing-pipeline",readmeTemplate:`# Automated Testing Pipeline

Automated testing setup with CI/CD integration.

## Tests
- Unit tests
- Integration tests
- Code quality checks

## Coverage
- Coverage: [Percentage]

## Technologies
- Testing Framework
- CI/CD
- Quality Tools

## Usage
\`\`\`
npm test
# or
pytest
\`\`\``,gitCommands:["git init","git add .",'git commit -m "Initial commit: Testing pipeline"',"git remote add origin https://github.com/yourusername/automated-testing-pipeline.git","git push -u origin main"],deploymentOptions:["GitHub Actions","Jenkins","GitLab CI"]},resources:[{title:"Jest Documentation",url:"https://jestjs.io",type:"Documentation"},{title:"Pytest Guide",url:"https://docs.pytest.org",type:"Documentation"}]},{id:"monitoring-setup",title:"Application Monitoring Setup",description:"Set up monitoring and alerting for applications using tools like Prometheus, Grafana, or cloud monitoring services.",skills:["Monitoring","Alerting","Metrics","Observability"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Choose Monitoring Tools",description:"Select monitoring solution (Prometheus, Datadog, CloudWatch, etc.).",tips:["Compare options","Consider costs","Evaluate features"]},{number:2,title:"Instrument Application",description:"Add metrics collection to application code.",tips:["Add metrics endpoints","Track key metrics","Use appropriate libraries"]},{number:3,title:"Setup Monitoring Infrastructure",description:"Deploy monitoring stack (Prometheus, Grafana, etc.).",tips:["Install monitoring tools","Configure data collection","Setup storage"]},{number:4,title:"Create Dashboards",description:"Build dashboards to visualize metrics and logs.",tips:["Design useful dashboards","Add key metrics","Make it accessible"]},{number:5,title:"Configure Alerts",description:"Set up alerts for critical issues and thresholds.",tips:["Define alert rules","Configure notification channels","Test alerts"]}],githubSetup:{repositoryName:"monitoring-setup",readmeTemplate:`# Application Monitoring Setup

Monitoring and alerting setup for applications.

## Tools
- [Monitoring tool]
- [Visualization tool]
- [Alerting system]

## Metrics
- [List key metrics]

## Technologies
- Monitoring Stack
- Alerting

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Monitoring setup"',"git remote add origin https://github.com/yourusername/monitoring-setup.git","git push -u origin main"],deploymentOptions:["Prometheus + Grafana","Cloud Monitoring","Third-party Tools"]},resources:[{title:"Prometheus Documentation",url:"https://prometheus.io/docs",type:"Documentation"},{title:"Grafana Guide",url:"https://grafana.com/docs",type:"Documentation"}]}),i.intermediate&&t.push({id:"infrastructure-as-code",title:"Infrastructure as Code with Terraform",description:"Define and manage cloud infrastructure using Terraform. Learn Infrastructure as Code principles.",skills:["Terraform","IaC","Cloud Infrastructure","Automation"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Install Terraform",description:"Install Terraform and understand HCL syntax.",tips:["Download from terraform.io","Learn HCL basics","Understand providers"]},{number:2,title:"Create First Configuration",description:"Write Terraform config to create simple resource.",tips:["Start with S3 bucket or EC2","Use terraform init","Run terraform plan"]},{number:3,title:"Build Complex Infrastructure",description:"Create multi-resource infrastructure setup.",tips:["Use variables","Organize with modules","Use data sources"]},{number:4,title:"Manage State",description:"Configure remote state storage.",tips:["Use S3 backend","Enable state locking","Understand state management"]},{number:5,title:"Apply Best Practices",description:"Follow IaC best practices and security.",tips:["Use version control","Review before apply","Use workspaces"]}],githubSetup:{repositoryName:"terraform-infrastructure",readmeTemplate:`# Infrastructure as Code with Terraform

Cloud infrastructure defined and managed with Terraform.

## Infrastructure
- [Describe infrastructure]

## Technologies
- Terraform
- Cloud Provider (AWS/GCP/Azure)

## Usage
\`\`\`
terraform init
terraform plan
terraform apply
\`\`\``,gitCommands:["git init",'echo "*.tfstate" >> .gitignore','echo "*.tfstate.backup" >> .gitignore',"git add .",'git commit -m "Initial commit: Terraform infrastructure"',"git remote add origin https://github.com/yourusername/terraform-infrastructure.git","git push -u origin main"],deploymentOptions:["Terraform Cloud","Self-managed","CI/CD Integration"]},resources:[{title:"Terraform Documentation",url:"https://www.terraform.io/docs",type:"Documentation"},{title:"Terraform AWS Provider",url:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs",type:"Documentation"}]},{id:"configuration-management",title:"Configuration Management with Ansible",description:"Automate server configuration and application deployment using Ansible playbooks.",skills:["Ansible","Configuration Management","Automation","YAML"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Install Ansible",description:"Install Ansible and understand inventory structure.",tips:["Install on control node","Understand inventory files","Test connectivity"]},{number:2,title:"Create First Playbook",description:"Write simple playbook to configure servers.",tips:["Start with basic tasks","Use modules","Test on localhost"]},{number:3,title:"Organize with Roles",description:"Organize playbooks into reusable roles.",tips:["Create role structure","Use variables","Make roles reusable"]},{number:4,title:"Add Templates and Files",description:"Use templates and file modules for configuration.",tips:["Use Jinja2 templates","Manage configuration files","Handle secrets"]},{number:5,title:"Deploy Application",description:"Create playbook to deploy application to servers.",tips:["Install dependencies","Deploy code","Start services"]}],githubSetup:{repositoryName:"ansible-configuration",readmeTemplate:`# Configuration Management with Ansible

Ansible playbooks for server configuration.

## Playbooks
- [List playbooks]

## Roles
- [List roles]

## Technologies
- Ansible
- YAML

## Usage
\`\`\`
ansible-playbook playbook.yml
\`\`\``,gitCommands:["git init",'echo "*.retry" >> .gitignore',"git add .",'git commit -m "Initial commit: Ansible configuration"',"git remote add origin https://github.com/yourusername/ansible-configuration.git","git push -u origin main"],deploymentOptions:["Ansible Tower","AWX","Command Line"]},resources:[{title:"Ansible Documentation",url:"https://docs.ansible.com",type:"Documentation"},{title:"Ansible Best Practices",url:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html",type:"Tutorial"}]},{id:"logging-aggregation",title:"Centralized Logging System",description:"Set up centralized logging system using ELK Stack (Elasticsearch, Logstash, Kibana) or similar tools.",skills:["ELK Stack","Logging","Log Aggregation","Monitoring"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Setup Elasticsearch",description:"Deploy Elasticsearch cluster for log storage.",tips:["Configure cluster","Set up indices","Configure sharding"]},{number:2,title:"Configure Logstash",description:"Setup Logstash to collect and process logs.",tips:["Configure inputs","Add filters","Set up outputs"]},{number:3,title:"Deploy Kibana",description:"Install Kibana for log visualization and analysis.",tips:["Connect to Elasticsearch","Create dashboards","Set up visualizations"]},{number:4,title:"Configure Log Shipping",description:"Setup agents to ship logs from applications.",tips:["Install Filebeat","Configure log paths","Test log shipping"]},{number:5,title:"Create Dashboards",description:"Build dashboards for log analysis and monitoring.",tips:["Create visualizations","Set up alerts","Document queries"]}],githubSetup:{repositoryName:"centralized-logging",readmeTemplate:`# Centralized Logging System

ELK Stack setup for centralized logging.

## Components
- Elasticsearch
- Logstash
- Kibana
- Filebeat

## Features
- Log aggregation
- Search and analysis
- Dashboards
- Alerts

## Technologies
- ELK Stack
- Docker (optional)

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "logs/" >> .gitignore',"git add .",'git commit -m "Initial commit: Centralized logging"',"git remote add origin https://github.com/yourusername/centralized-logging.git","git push -u origin main"],deploymentOptions:["Docker Compose","Kubernetes","Manual Installation"]},resources:[{title:"ELK Stack Guide",url:"https://www.elastic.co/guide/index.html",type:"Documentation"},{title:"Filebeat Documentation",url:"https://www.elastic.co/guide/en/beats/filebeat/current/index.html",type:"Documentation"}]}),i.advanced&&t.push({id:"gitops-workflow",title:"GitOps Workflow Implementation",description:"Implement GitOps workflow using ArgoCD or Flux for declarative, Git-based continuous deployment.",skills:["GitOps","ArgoCD/Flux","Kubernetes","Git","CI/CD"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Understand GitOps Principles",description:"Learn GitOps methodology and benefits.",tips:["Study GitOps patterns","Understand declarative approach","Learn best practices"]},{number:2,title:"Setup Git Repository",description:"Create Git repository for application manifests.",tips:["Organize manifests","Use environment branches","Set up structure"]},{number:3,title:"Deploy ArgoCD/Flux",description:"Install and configure GitOps tool in Kubernetes.",tips:["Deploy to cluster","Configure RBAC","Connect to Git repo"]},{number:4,title:"Create Application Manifests",description:"Write Kubernetes manifests for applications.",tips:["Use Helm or Kustomize","Version manifests","Test locally"]},{number:5,title:"Implement Sync and Rollback",description:"Configure automatic sync and implement rollback procedures.",tips:["Setup auto-sync","Configure health checks","Test rollback"]}],githubSetup:{repositoryName:"gitops-workflow",readmeTemplate:`# GitOps Workflow

GitOps implementation using ArgoCD/Flux.

## Architecture
- Git Repository
- ArgoCD/Flux
- Kubernetes Cluster

## Workflow
1. Push to Git
2. ArgoCD/Flux syncs
3. Application updates

## Technologies
- ArgoCD/Flux
- Kubernetes
- Git

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: GitOps workflow"',"git remote add origin https://github.com/yourusername/gitops-workflow.git","git push -u origin main"],deploymentOptions:["ArgoCD","Flux","Jenkins X"]},resources:[{title:"ArgoCD Documentation",url:"https://argo-cd.readthedocs.io",type:"Documentation"},{title:"GitOps Guide",url:"https://www.gitops.tech",type:"Tutorial"}]},{id:"chaos-engineering",title:"Chaos Engineering Platform",description:"Build a chaos engineering platform to test system resilience by injecting failures and monitoring recovery.",skills:["Chaos Engineering","Resilience Testing","Automation","Monitoring"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Design Chaos Experiments",description:"Plan chaos experiments to test system resilience.",tips:["Identify failure scenarios","Define hypotheses","Plan experiments"]},{number:2,title:"Implement Chaos Tools",description:"Deploy chaos engineering tools (Chaos Monkey, Litmus, etc.).",tips:["Choose appropriate tools","Install and configure","Test tools"]},{number:3,title:"Create Experiment Framework",description:"Build framework to run and monitor chaos experiments.",tips:["Automate experiment execution","Monitor system metrics","Collect results"]},{number:4,title:"Implement Safety Mechanisms",description:"Add safeguards to prevent permanent damage.",tips:["Set up circuit breakers","Implement rollback","Add kill switches"]},{number:5,title:"Analyze and Improve",description:"Analyze experiment results and improve system resilience.",tips:["Review results","Identify weaknesses","Implement improvements"]}],githubSetup:{repositoryName:"chaos-engineering-platform",readmeTemplate:`# Chaos Engineering Platform

A platform for testing system resilience through chaos experiments.

## Tools
- [Chaos tool]
- Monitoring
- Automation

## Experiments
[List experiments]

## Results
[Document findings]

## Technologies
- Chaos Tools
- Monitoring Stack
- Automation

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Chaos engineering"',"git remote add origin https://github.com/yourusername/chaos-engineering-platform.git","git push -u origin main"],deploymentOptions:["Kubernetes","Cloud Platform","On-Premises"]},resources:[{title:"Chaos Engineering",url:"https://principlesofchaos.org",type:"Tutorial"},{title:"Litmus Chaos",url:"https://litmuschaos.io",type:"Tool"}]},{id:"security-automation",title:"Security Automation Pipeline",description:"Implement security automation with vulnerability scanning, compliance checks, and security testing in CI/CD.",skills:["Security Automation","Vulnerability Scanning","Compliance","DevSecOps"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"DevOps",steps:[{number:1,title:"Integrate Security Scanning",description:"Add vulnerability scanning to CI/CD pipeline.",tips:["Use SAST/DAST tools","Scan dependencies","Check container images"]},{number:2,title:"Implement Compliance Checks",description:"Add automated compliance checking (CIS benchmarks, etc.).",tips:["Use compliance tools","Define policies","Automate checks"]},{number:3,title:"Add Secret Management",description:"Implement secure secret management and scanning.",tips:["Use secret management tools","Scan for exposed secrets","Rotate secrets"]},{number:4,title:"Setup Security Monitoring",description:"Configure security monitoring and alerting.",tips:["Monitor security events","Set up alerts","Track vulnerabilities"]},{number:5,title:"Create Security Dashboard",description:"Build dashboard to visualize security posture.",tips:["Aggregate security data","Create visualizations","Track metrics"]}],githubSetup:{repositoryName:"security-automation",readmeTemplate:`# Security Automation Pipeline

Automated security scanning and compliance checking.

## Tools
- Vulnerability scanners
- Compliance tools
- Secret management

## Checks
- SAST/DAST
- Dependency scanning
- Compliance

## Technologies
- Security Tools
- CI/CD
- Monitoring

## Setup
[Setup instructions]`,gitCommands:["git init",'echo ".secrets" >> .gitignore',"git add .",'git commit -m "Initial commit: Security automation"',"git remote add origin https://github.com/yourusername/security-automation.git","git push -u origin main"],deploymentOptions:["CI/CD Integration","Standalone Tools","Cloud Security Services"]},resources:[{title:"OWASP ZAP",url:"https://www.zaproxy.org",type:"Tool"},{title:"DevSecOps Guide",url:"https://www.devsecops.org",type:"Tutorial"}]});return}if(e.includes("database-engineer")||e.includes("database engineer")){i.beginner&&t.push({id:"database-design",title:"Database Design and Implementation",description:"Design and implement a normalized database schema for a real-world application. Learn SQL and database design principles.",skills:["SQL","Database Design","Normalization","MySQL/PostgreSQL"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Define Requirements",description:"Identify entities, attributes, and relationships for the application.",tips:["Create ER diagram","Identify primary keys","Define relationships"]},{number:2,title:"Normalize Database",description:"Apply normalization rules to eliminate redundancy.",tips:["Achieve 3NF","Balance normalization vs performance","Document design decisions"]},{number:3,title:"Create Database Schema",description:"Write SQL DDL statements to create tables.",tips:["Use appropriate data types","Add constraints","Create indexes"]},{number:4,title:"Write Queries",description:"Create complex SQL queries for data retrieval.",tips:["Use JOINs effectively","Optimize queries","Use subqueries when needed"]},{number:5,title:"Add Stored Procedures",description:"Create stored procedures and triggers.",tips:["Encapsulate business logic","Use transactions","Handle errors"]}],githubSetup:{repositoryName:"database-design-project",readmeTemplate:`# Database Design Project

A well-designed database schema for [application name].

## Schema
- ER Diagram
- Table definitions
- Relationships

## Technologies
- MySQL/PostgreSQL
- SQL

## Setup
1. Create database
2. Run schema.sql
3. Insert sample data

## Features
- Normalized design
- Optimized queries
- Stored procedures`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Database design project"',"git branch -M main","git remote add origin https://github.com/yourusername/database-design-project.git","git push -u origin main"],deploymentOptions:["Local Database","Cloud Database (AWS RDS)","Docker Container"]},resources:[{title:"SQL Tutorial",url:"https://www.w3schools.com/sql",type:"Tutorial"},{title:"Database Design Guide",url:"https://www.lucidchart.com/pages/database-diagram/database-design",type:"Tutorial"}]},{id:"sql-queries-practice",title:"SQL Queries Practice Project",description:"Practice writing complex SQL queries including JOINs, subqueries, window functions, and aggregations.",skills:["SQL","Query Optimization","Database Queries"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Setup Database",description:"Install database (MySQL/PostgreSQL) and load sample data.",tips:["Use sample databases","Load test data","Familiarize with schema"]},{number:2,title:"Practice Basic Queries",description:"Write SELECT, WHERE, ORDER BY, and GROUP BY queries.",tips:["Start with simple queries","Use WHERE clauses","Practice aggregations"]},{number:3,title:"Master JOINs",description:"Practice different types of JOINs (INNER, LEFT, RIGHT, FULL).",tips:["Understand join types","Practice complex joins","Handle NULL values"]},{number:4,title:"Learn Subqueries",description:"Write subqueries and correlated subqueries.",tips:["Use subqueries in WHERE","Practice EXISTS/NOT EXISTS","Compare with JOINs"]},{number:5,title:"Advanced Queries",description:"Write queries with window functions and CTEs.",tips:["Use ROW_NUMBER, RANK","Create CTEs","Optimize queries"]}],githubSetup:{repositoryName:"sql-queries-practice",readmeTemplate:`# SQL Queries Practice

A collection of SQL queries for practice.

## Topics
- Basic queries
- JOINs
- Subqueries
- Window functions

## Database
- [Database name]

## Technologies
- SQL
- MySQL/PostgreSQL

## Usage
[How to run queries]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: SQL practice"',"git remote add origin https://github.com/yourusername/sql-queries-practice.git","git push -u origin main"],deploymentOptions:["Local Database","GitHub","SQL Fiddle"]},resources:[{title:"SQL Tutorial",url:"https://www.w3schools.com/sql",type:"Tutorial"},{title:"PostgreSQL Tutorial",url:"https://www.postgresql.org/docs/current/tutorial.html",type:"Tutorial"}]},{id:"database-backup-restore",title:"Database Backup and Restore",description:"Implement automated database backup and restore procedures with scheduling and testing.",skills:["Database Backup","Restore Procedures","Automation","SQL"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Understand Backup Types",description:"Learn about full, incremental, and differential backups.",tips:["Study backup strategies","Understand recovery models","Choose appropriate type"]},{number:2,title:"Create Backup Script",description:"Write script to perform database backups.",tips:["Use mysqldump or pg_dump","Add timestamp to filenames","Compress backups"]},{number:3,title:"Automate Backups",description:"Schedule automated backups using cron or task scheduler.",tips:["Set up cron job","Configure retention","Test scheduling"]},{number:4,title:"Test Restore Process",description:"Practice restoring from backups to verify procedures.",tips:["Test on test database","Document restore steps","Verify data integrity"]},{number:5,title:"Monitor and Maintain",description:"Monitor backup success and maintain backup files.",tips:["Check backup logs","Verify backup files","Clean old backups"]}],githubSetup:{repositoryName:"database-backup-restore",readmeTemplate:`# Database Backup and Restore

Automated database backup and restore procedures.

## Features
- Automated backups
- Scheduled execution
- Restore procedures

## Backup Strategy
- Type: [Full/Incremental]
- Schedule: [Frequency]
- Retention: [Period]

## Technologies
- Database (MySQL/PostgreSQL)
- Shell Scripts
- Cron

## Usage
[Usage instructions]`,gitCommands:["git init",'echo "backups/" >> .gitignore',"git add .",'git commit -m "Initial commit: Database backup"',"git remote add origin https://github.com/yourusername/database-backup-restore.git","git push -u origin main"],deploymentOptions:["Local Scripts","Cloud Backup Services","Scheduled Tasks"]},resources:[{title:"MySQL Backup",url:"https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html",type:"Documentation"},{title:"PostgreSQL Backup",url:"https://www.postgresql.org/docs/current/backup.html",type:"Documentation"}]}),i.intermediate&&t.push({id:"database-optimization",title:"Database Performance Optimization",description:"Optimize database performance through indexing, query optimization, and monitoring. Learn advanced database administration.",skills:["Database Optimization","Query Tuning","Indexing","Performance Monitoring"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Analyze Query Performance",description:"Use EXPLAIN to analyze slow queries.",tips:["Identify bottlenecks","Check execution plans","Monitor query times"]},{number:2,title:"Create Indexes",description:"Design and create appropriate indexes.",tips:["Index frequently queried columns","Avoid over-indexing","Monitor index usage"]},{number:3,title:"Optimize Queries",description:"Rewrite queries for better performance.",tips:["Avoid SELECT *","Use appropriate JOINs","Limit result sets"]},{number:4,title:"Configure Database",description:"Tune database configuration parameters.",tips:["Adjust buffer sizes","Configure connection pooling","Set up caching"]},{number:5,title:"Monitor and Maintain",description:"Set up monitoring and maintenance routines.",tips:["Monitor performance metrics","Schedule backups","Plan for scaling"]}],githubSetup:{repositoryName:"database-optimization-project",readmeTemplate:`# Database Optimization Project

Database performance optimization project.

## Optimizations
- Indexing strategy
- Query optimizations
- Configuration tuning

## Performance Metrics
- Query execution time
- Throughput
- Resource usage

## Technologies
- Database (MySQL/PostgreSQL)
- Monitoring tools

## Results
[Document performance improvements]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Database optimization"',"git branch -M main","git remote add origin https://github.com/yourusername/database-optimization-project.git","git push -u origin main"],deploymentOptions:["Local Testing","Cloud Database","Production Environment"]},resources:[{title:"MySQL Performance Tuning",url:"https://dev.mysql.com/doc/refman/8.0/en/optimization.html",type:"Documentation"},{title:"PostgreSQL Performance",url:"https://www.postgresql.org/docs/current/performance-tips.html",type:"Documentation"}]},{id:"database-replication",title:"Database Replication Setup",description:"Set up database replication (master-slave or master-master) for high availability and read scaling.",skills:["Database Replication","High Availability","MySQL/PostgreSQL","Backup"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Design Replication Strategy",description:"Choose replication type (master-slave, master-master, etc.).",tips:["Understand use case","Choose appropriate type","Plan failover"]},{number:2,title:"Configure Master Database",description:"Configure master database for replication.",tips:["Enable binary logging","Create replication user","Configure server ID"]},{number:3,title:"Setup Slave Database",description:"Configure slave database and start replication.",tips:["Configure server ID","Point to master","Start replication"]},{number:4,title:"Monitor Replication",description:"Monitor replication status and lag.",tips:["Check replication status","Monitor lag","Set up alerts"]},{number:5,title:"Test Failover",description:"Test failover procedures and promote slave to master.",tips:["Document failover steps","Test promotion","Verify data integrity"]}],githubSetup:{repositoryName:"database-replication",readmeTemplate:`# Database Replication Setup

Database replication configuration for high availability.

## Architecture
- Master-Slave/Master-Master
- Replication type: [Type]

## Configuration
- Master: [Details]
- Slave: [Details]

## Technologies
- MySQL/PostgreSQL
- Replication

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "*.log" >> .gitignore',"git add .",'git commit -m "Initial commit: Database replication"',"git remote add origin https://github.com/yourusername/database-replication.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Databases","Docker"]},resources:[{title:"MySQL Replication",url:"https://dev.mysql.com/doc/refman/8.0/en/replication.html",type:"Documentation"},{title:"PostgreSQL Replication",url:"https://www.postgresql.org/docs/current/high-availability.html",type:"Documentation"}]},{id:"data-warehouse-design",title:"Data Warehouse Design",description:"Design and implement a data warehouse with ETL processes, star/snowflake schema, and OLAP cubes.",skills:["Data Warehousing","ETL","Dimensional Modeling","OLAP"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Design Dimensional Model",description:"Create star or snowflake schema with facts and dimensions.",tips:["Identify facts","Define dimensions","Design relationships"]},{number:2,title:"Implement ETL Process",description:"Build ETL pipeline to extract, transform, and load data.",tips:["Extract from sources","Transform data","Load to warehouse"]},{number:3,title:"Create Data Warehouse",description:"Create database structure for data warehouse.",tips:["Create fact tables","Create dimension tables","Add indexes"]},{number:4,title:"Build OLAP Cubes",description:"Create OLAP cubes for analytical queries.",tips:["Design cubes","Define measures","Create aggregations"]},{number:5,title:"Create Reports",description:"Build reports and dashboards using warehouse data.",tips:["Write analytical queries","Create visualizations","Schedule reports"]}],githubSetup:{repositoryName:"data-warehouse",readmeTemplate:`# Data Warehouse Design

A data warehouse with ETL processes.

## Schema
- Star/Snowflake schema
- Facts: [List]
- Dimensions: [List]

## ETL
- Extract: [Sources]
- Transform: [Processes]
- Load: [Frequency]

## Technologies
- Database
- ETL Tools
- OLAP

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Data warehouse"',"git remote add origin https://github.com/yourusername/data-warehouse.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Data Warehouse","Hybrid"]},resources:[{title:"Data Warehouse Concepts",url:"https://www.kimballgroup.com/data-warehouse-business-intelligence-resources",type:"Tutorial"},{title:"ETL Best Practices",url:"https://www.etl-tools.com/etl-best-practices.html",type:"Tutorial"}]}),i.advanced&&t.push({id:"distributed-database",title:"Distributed Database System",description:"Design and implement a distributed database system with sharding, consistency, and transaction management.",skills:["Distributed Databases","Sharding","Consistency","Transactions","CAP Theorem"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Design Sharding Strategy",description:"Plan how to partition data across multiple nodes.",tips:["Choose sharding key","Design shard distribution","Plan rebalancing"]},{number:2,title:"Implement Sharding",description:"Implement sharding logic to distribute data.",tips:["Create shard manager","Implement routing","Handle shard operations"]},{number:3,title:"Handle Consistency",description:"Implement consistency model (strong, eventual, etc.).",tips:["Choose consistency model","Implement replication","Handle conflicts"]},{number:4,title:"Manage Transactions",description:"Implement distributed transaction management.",tips:["Use 2PC or similar","Handle failures","Ensure atomicity"]},{number:5,title:"Monitor and Optimize",description:"Monitor distributed system and optimize performance.",tips:["Track metrics","Identify bottlenecks","Optimize queries"]}],githubSetup:{repositoryName:"distributed-database",readmeTemplate:`# Distributed Database System

A distributed database with sharding and replication.

## Architecture
- Sharding strategy
- Consistency model
- Replication

## Components
- Shard manager
- Query router
- Replication layer

## Technologies
- Database
- Distributed Systems
- Networking

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Distributed database"',"git remote add origin https://github.com/yourusername/distributed-database.git","git push -u origin main"],deploymentOptions:["Multiple Servers","Cloud Infrastructure","Docker Swarm"]},resources:[{title:"Distributed Systems",url:"https://www.allthingsdistributed.com",type:"Tutorial"},{title:"CAP Theorem",url:"https://en.wikipedia.org/wiki/CAP_theorem",type:"Tutorial"}]},{id:"database-clustering",title:"Database Clustering and High Availability",description:"Set up database cluster with automatic failover, load balancing, and high availability configuration.",skills:["Database Clustering","High Availability","Failover","Load Balancing"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Design Cluster Architecture",description:"Plan cluster architecture with multiple nodes.",tips:["Choose cluster type","Plan node roles","Design network"]},{number:2,title:"Setup Cluster Nodes",description:"Configure multiple database nodes in cluster.",tips:["Install database","Configure clustering","Test connectivity"]},{number:3,title:"Implement Failover",description:"Configure automatic failover mechanism.",tips:["Setup health checks","Configure failover triggers","Test failover"]},{number:4,title:"Configure Load Balancing",description:"Set up load balancer to distribute queries.",tips:["Choose load balancer","Configure routing","Test distribution"]},{number:5,title:"Monitor and Maintain",description:"Monitor cluster health and maintain configuration.",tips:["Monitor all nodes","Track performance","Plan maintenance"]}],githubSetup:{repositoryName:"database-clustering",readmeTemplate:`# Database Clustering

High availability database cluster setup.

## Architecture
- Cluster type: [Type]
- Nodes: [Number]
- Failover: [Strategy]

## Configuration
- Load balancing
- Automatic failover
- Health monitoring

## Technologies
- Database
- Clustering
- Load Balancer

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Database clustering"',"git remote add origin https://github.com/yourusername/database-clustering.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Platform","Hybrid"]},resources:[{title:"MySQL Cluster",url:"https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster.html",type:"Documentation"},{title:"PostgreSQL High Availability",url:"https://www.postgresql.org/docs/current/high-availability.html",type:"Documentation"}]},{id:"database-migration-tool",title:"Database Migration and Versioning Tool",description:"Build a database migration tool to manage schema changes, versioning, and rollback capabilities.",skills:["Database Migrations","Version Control","Schema Management","Automation"],difficulty:"Advanced",estimatedTime:"4-6 weeks",portfolioReady:!0,category:"Database",steps:[{number:1,title:"Design Migration System",description:"Plan migration system with version tracking.",tips:["Design versioning scheme","Plan migration format","Consider rollback"]},{number:2,title:"Implement Migration Runner",description:"Build tool to execute migrations in order.",tips:["Track applied migrations","Execute in sequence","Handle errors"]},{number:3,title:"Add Rollback Support",description:"Implement rollback functionality for migrations.",tips:["Generate rollback scripts","Test rollbacks","Handle data loss"]},{number:4,title:"Create CLI Interface",description:"Build command-line interface for migration tool.",tips:["Add commands","Show status","Provide help"]},{number:5,title:"Integrate with CI/CD",description:"Integrate migration tool with CI/CD pipeline.",tips:["Run migrations automatically","Test in staging","Deploy to production"]}],githubSetup:{repositoryName:"database-migration-tool",readmeTemplate:`# Database Migration Tool

A tool for managing database schema migrations.

## Features
- Version control
- Migration execution
- Rollback support
- CLI interface

## Usage
\`\`\`
db-migrate up
db-migrate down
db-migrate status
\`\`\`

## Technologies
- [Language]
- Database
- CLI Framework

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Migration tool"',"git remote add origin https://github.com/yourusername/database-migration-tool.git","git push -u origin main"],deploymentOptions:["CLI Tool","Library","CI/CD Integration"]},resources:[{title:"Flyway",url:"https://flywaydb.org",type:"Tool"},{title:"Liquibase",url:"https://www.liquibase.org",type:"Tool"}]});return}if(e.includes("cybersecurity-analyst")||e.includes("cybersecurity analyst")||e.includes("cyber security")){i.beginner&&t.push({id:"security-audit",title:"Web Application Security Audit",description:"Perform a security audit on a web application, identify vulnerabilities, and provide remediation recommendations.",skills:["Security Auditing","OWASP","Vulnerability Assessment","Penetration Testing"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Setup Testing Environment",description:"Set up a safe testing environment for security testing.",tips:["Use isolated network","Get proper authorization","Document everything"]},{number:2,title:"Identify OWASP Top 10",description:"Check for common vulnerabilities from OWASP Top 10.",tips:["Test for SQL injection","Check XSS vulnerabilities","Verify authentication"]},{number:3,title:"Use Security Tools",description:"Use tools like OWASP ZAP or Burp Suite.",tips:["Run automated scans","Review findings","Validate manually"]},{number:4,title:"Document Findings",description:"Create detailed security audit report.",tips:["Categorize by severity","Provide proof of concept","Include remediation steps"]},{number:5,title:"Recommend Fixes",description:"Provide actionable recommendations for fixing vulnerabilities.",tips:["Prioritize by risk","Provide code examples","Suggest best practices"]}],githubSetup:{repositoryName:"security-audit-project",readmeTemplate:`# Security Audit Project

Security audit report for [application name].

## Vulnerabilities Found
- [List vulnerabilities]

## Severity Levels
- Critical
- High
- Medium
- Low

## Recommendations
[Provide remediation steps]

## Tools Used
- OWASP ZAP
- Burp Suite
- Manual Testing`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Security audit"',"git remote add origin https://github.com/yourusername/security-audit-project.git","git push -u origin main"],deploymentOptions:["Report Only","GitHub Repository","PDF Document"]},resources:[{title:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten",type:"Tutorial"},{title:"OWASP ZAP",url:"https://www.zaproxy.org",type:"Tool"}]},{id:"password-security-audit",title:"Password Security Audit",description:"Create a tool to audit password policies, check for weak passwords, and test password strength.",skills:["Security Auditing","Password Security","Python","Security Tools"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Understand Password Policies",description:"Research password security best practices and policies.",tips:["Study NIST guidelines","Understand complexity requirements","Learn about hashing"]},{number:2,title:"Create Password Checker",description:"Build tool to check password strength and common patterns.",tips:["Check length","Verify complexity","Detect common patterns"]},{number:3,title:"Implement Policy Validation",description:"Validate passwords against security policies.",tips:["Check minimum length","Verify character requirements","Test against dictionary"]},{number:4,title:"Add Breach Checking",description:"Check passwords against known breach databases (Have I Been Pwned API).",tips:["Use API integration","Hash passwords properly","Check securely"]},{number:5,title:"Generate Security Report",description:"Create report with findings and recommendations.",tips:["Document vulnerabilities","Provide recommendations","Include statistics"]}],githubSetup:{repositoryName:"password-security-audit",readmeTemplate:`# Password Security Audit Tool

A tool for auditing password security.

## Features
- Password strength checking
- Policy validation
- Breach checking
- Security reporting

## Technologies
- Python
- Security APIs

## Usage
\`\`\`
python audit.py
\`\`\``,gitCommands:["git init",'echo "*.log" >> .gitignore',"git add .",'git commit -m "Initial commit: Password audit"',"git remote add origin https://github.com/yourusername/password-security-audit.git","git push -u origin main"],deploymentOptions:["Local Tool","CLI Application","Web Service"]},resources:[{title:"Have I Been Pwned API",url:"https://haveibeenpwned.com/API/v3",type:"API"},{title:"NIST Password Guidelines",url:"https://pages.nist.gov/800-63-3/sp800-63b.html",type:"Tutorial"}]},{id:"vulnerability-scanner",title:"Basic Vulnerability Scanner",description:"Build a simple vulnerability scanner to identify common security issues in web applications.",skills:["Vulnerability Scanning","Security Testing","Python","Web Security"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Understand Common Vulnerabilities",description:"Study OWASP Top 10 and common web vulnerabilities.",tips:["Read OWASP documentation","Understand vulnerability types","Learn testing methods"]},{number:2,title:"Create Scanner Framework",description:"Build basic framework for vulnerability scanning.",tips:["Design scanner structure","Create plugin system","Handle errors"]},{number:3,title:"Implement Basic Checks",description:"Add checks for common vulnerabilities (SQL injection, XSS, etc.).",tips:["Test for SQL injection","Check for XSS","Verify headers"]},{number:4,title:"Add Reporting",description:"Generate reports with findings and severity levels.",tips:["Categorize findings","Assign severity","Create readable reports"]},{number:5,title:"Test and Improve",description:"Test scanner on vulnerable applications and improve detection.",tips:["Use DVWA or similar","Test accuracy","Reduce false positives"]}],githubSetup:{repositoryName:"vulnerability-scanner",readmeTemplate:`# Basic Vulnerability Scanner

A simple vulnerability scanner for web applications.

## Features
- SQL injection detection
- XSS detection
- Security header checks
- Reporting

## Vulnerabilities Checked
- [List vulnerabilities]

## Technologies
- Python
- Requests library

## Usage
\`\`\`
python scanner.py [url]
\`\`\``,gitCommands:["git init","git add .",'git commit -m "Initial commit: Vulnerability scanner"',"git remote add origin https://github.com/yourusername/vulnerability-scanner.git","git push -u origin main"],deploymentOptions:["Local Tool","CLI Application","GitHub"]},resources:[{title:"OWASP Top 10",url:"https://owasp.org/www-project-top-ten",type:"Tutorial"},{title:"DVWA",url:"https://github.com/digininja/DVWA",type:"Tool"}]}),i.intermediate&&t.push({id:"network-security",title:"Network Security Monitoring",description:"Set up network security monitoring using tools like Wireshark, Snort, or Security Onion to detect and analyze threats.",skills:["Network Security","Packet Analysis","IDS/IPS","Threat Detection"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Setup Monitoring Environment",description:"Configure network monitoring tools.",tips:["Use virtual lab","Capture network traffic","Understand protocols"]},{number:2,title:"Analyze Network Traffic",description:"Use Wireshark to analyze packet captures.",tips:["Filter traffic","Identify anomalies","Understand protocols"]},{number:3,title:"Configure IDS/IPS",description:"Set up intrusion detection/prevention system.",tips:["Use Snort or Suricata","Create custom rules","Test detection"]},{number:4,title:"Detect Threats",description:"Identify malicious activity and threats.",tips:["Look for suspicious patterns","Analyze logs","Correlate events"]},{number:5,title:"Create Incident Response Plan",description:"Document procedures for responding to security incidents.",tips:["Define response steps","Create playbooks","Test procedures"]}],githubSetup:{repositoryName:"network-security-monitoring",readmeTemplate:`# Network Security Monitoring Project

Network security monitoring and threat detection setup.

## Tools
- Wireshark
- Snort/Suricata
- Security Onion

## Findings
[Document security findings]

## Incident Response
[Document response procedures]

## Technologies
- Network Analysis
- IDS/IPS
- SIEM`,gitCommands:["git init",'echo "*.pcap" >> .gitignore',"git add .",'git commit -m "Initial commit: Network security monitoring"',"git remote add origin https://github.com/yourusername/network-security-monitoring.git","git push -u origin main"],deploymentOptions:["Lab Environment","Virtual Machines","Cloud Setup"]},resources:[{title:"Wireshark Guide",url:"https://www.wireshark.org/docs",type:"Documentation"},{title:"Snort Documentation",url:"https://www.snort.org/documents",type:"Documentation"}]},{id:"penetration-testing",title:"Penetration Testing Framework",description:"Build a penetration testing framework to systematically test application security and document findings.",skills:["Penetration Testing","Security Testing","Kali Linux","Metasploit"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Setup Testing Environment",description:"Create isolated lab environment for penetration testing.",tips:["Use virtual machines","Isolate network","Get proper authorization"]},{number:2,title:"Reconnaissance Phase",description:"Perform information gathering and reconnaissance.",tips:["Use Nmap for scanning","Gather information","Document findings"]},{number:3,title:"Vulnerability Assessment",description:"Identify and assess vulnerabilities in target systems.",tips:["Use vulnerability scanners","Manual testing","Prioritize findings"]},{number:4,title:"Exploitation",description:"Attempt to exploit identified vulnerabilities (ethically).",tips:["Use Metasploit","Test exploits safely","Document proof of concept"]},{number:5,title:"Report and Remediate",description:"Create detailed penetration test report with remediation steps.",tips:["Document all findings","Provide proof of concept","Suggest fixes"]}],githubSetup:{repositoryName:"penetration-testing-framework",readmeTemplate:`# Penetration Testing Framework

A framework for conducting penetration tests.

## Methodology
- Reconnaissance
- Scanning
- Exploitation
- Reporting

## Tools
- Nmap
- Metasploit
- Burp Suite

## Findings
[Document findings]

## Technologies
- Kali Linux
- Security Tools

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "reports/" >> .gitignore',"git add .",'git commit -m "Initial commit: Penetration testing"',"git remote add origin https://github.com/yourusername/penetration-testing-framework.git","git push -u origin main"],deploymentOptions:["Lab Environment","Virtual Machines","Cloud Lab"]},resources:[{title:"Kali Linux",url:"https://www.kali.org",type:"Tool"},{title:"Metasploit",url:"https://www.metasploit.com",type:"Tool"}]},{id:"security-automation-scripts",title:"Security Automation Scripts",description:"Create automation scripts for common security tasks like log analysis, threat detection, and incident response.",skills:["Security Automation","Python/Bash","Log Analysis","Threat Detection"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Identify Automation Opportunities",description:"Find repetitive security tasks that can be automated.",tips:["Review daily tasks","Identify patterns","Prioritize automation"]},{number:2,title:"Create Log Analysis Script",description:"Build script to analyze security logs and detect anomalies.",tips:["Parse log files","Identify patterns","Flag suspicious activity"]},{number:3,title:"Build Threat Detection Script",description:"Create script to detect known threat indicators.",tips:["Use threat intelligence","Check IOCs","Generate alerts"]},{number:4,title:"Implement Incident Response Automation",description:"Automate initial incident response steps.",tips:["Isolate affected systems","Collect evidence","Generate reports"]},{number:5,title:"Integrate and Schedule",description:"Integrate scripts with monitoring systems and schedule execution.",tips:["Use cron or scheduler","Integrate with SIEM","Set up notifications"]}],githubSetup:{repositoryName:"security-automation-scripts",readmeTemplate:`# Security Automation Scripts

Automation scripts for security tasks.

## Scripts
- Log analysis
- Threat detection
- Incident response

## Features
- Automated analysis
- Alert generation
- Report creation

## Technologies
- Python/Bash
- Security Tools

## Usage
[Usage instructions]`,gitCommands:["git init",'echo "*.log" >> .gitignore',"git add .",'git commit -m "Initial commit: Security automation"',"git remote add origin https://github.com/yourusername/security-automation-scripts.git","git push -u origin main"],deploymentOptions:["Local Scripts","Scheduled Tasks","SIEM Integration"]},resources:[{title:"Python Security",url:"https://python-security.readthedocs.io",type:"Documentation"},{title:"Security Automation",url:"https://www.sans.org/white-papers/automation",type:"Tutorial"}]}),i.advanced&&t.push({id:"advanced-penetration-testing",title:"Advanced Penetration Testing Lab",description:"Build an advanced penetration testing lab with multiple attack vectors, custom exploits, and post-exploitation frameworks.",skills:["Advanced Penetration Testing","Exploit Development","Post-Exploitation","Red Team"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Build Complex Lab Environment",description:"Create multi-tier lab with various systems and services.",tips:["Use virtualization","Create realistic scenarios","Include different OS"]},{number:2,title:"Develop Custom Exploits",description:"Write custom exploits for identified vulnerabilities.",tips:["Understand buffer overflows","Write shellcode","Test exploits"]},{number:3,title:"Implement Post-Exploitation",description:"Build post-exploitation framework for persistence and lateral movement.",tips:["Maintain access","Escalate privileges","Move laterally"]},{number:4,title:"Evade Detection",description:"Implement techniques to evade security controls and detection.",tips:["Bypass antivirus","Evade IDS/IPS","Use encryption"]},{number:5,title:"Document and Report",description:"Create comprehensive red team report with all findings.",tips:["Document attack chain","Provide remediation","Include recommendations"]}],githubSetup:{repositoryName:"advanced-pentest-lab",readmeTemplate:`# Advanced Penetration Testing Lab

An advanced penetration testing lab environment.

## Lab Architecture
- [Describe lab setup]

## Attack Vectors
- [List attack vectors]

## Exploits
- Custom exploits
- Post-exploitation tools

## Technologies
- Virtualization
- Security Tools
- Custom Scripts

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "exploits/" >> .gitignore',"git add .",'git commit -m "Initial commit: Advanced pentest lab"',"git remote add origin https://github.com/yourusername/advanced-pentest-lab.git","git push -u origin main"],deploymentOptions:["Lab Environment","Virtual Machines","Cloud Lab"]},resources:[{title:"Exploit Development",url:"https://www.corelan.be/index.php/articles",type:"Tutorial"},{title:"Metasploit Unleashed",url:"https://www.offensive-security.com/metasploit-unleashed",type:"Tutorial"}]},{id:"security-orchestration",title:"Security Orchestration Platform",description:"Build a security orchestration platform to automate security workflows, incident response, and threat hunting.",skills:["Security Orchestration","SOAR","Automation","Incident Response","API Integration"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Design Orchestration Architecture",description:"Plan platform architecture with workflow engine and integrations.",tips:["Design workflow engine","Plan integrations","Consider scalability"]},{number:2,title:"Integrate Security Tools",description:"Integrate various security tools via APIs.",tips:["Connect to SIEM","Integrate threat intel","Connect to ticketing"]},{number:3,title:"Build Workflow Engine",description:"Create workflow engine to automate security processes.",tips:["Design workflow language","Implement execution engine","Handle errors"]},{number:4,title:"Implement Playbooks",description:"Create automated playbooks for common security scenarios.",tips:["Write incident response playbooks","Create threat hunting playbooks","Test playbooks"]},{number:5,title:"Add Analytics and Reporting",description:"Implement analytics and reporting for security operations.",tips:["Track metrics","Generate reports","Create dashboards"]}],githubSetup:{repositoryName:"security-orchestration-platform",readmeTemplate:`# Security Orchestration Platform

A SOAR platform for security automation.

## Features
- Workflow automation
- Tool integrations
- Playbook execution
- Analytics

## Integrations
- [List integrated tools]

## Playbooks
- [List playbooks]

## Technologies
- Python
- APIs
- Workflow Engine

## Setup
[Setup instructions]`,gitCommands:["git init",'echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: Security orchestration"',"git remote add origin https://github.com/yourusername/security-orchestration-platform.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Platform","Docker"]},resources:[{title:"SOAR Platforms",url:"https://www.gartner.com/en/information-technology/glossary/soar-security-orchestration-automation-response",type:"Tutorial"},{title:"Security Automation",url:"https://www.sans.org/white-papers/automation",type:"Tutorial"}]},{id:"malware-analysis-lab",title:"Malware Analysis Lab",description:"Build a malware analysis lab with sandboxing, reverse engineering tools, and analysis frameworks.",skills:["Malware Analysis","Reverse Engineering","Sandboxing","Forensics"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Setup Isolated Lab Environment",description:"Create isolated virtual environment for malware analysis.",tips:["Use isolated network","Create snapshots","Implement safety measures"]},{number:2,title:"Install Analysis Tools",description:"Install and configure malware analysis tools.",tips:["Use IDA Pro or Ghidra","Install Wireshark","Set up debuggers"]},{number:3,title:"Build Sandbox System",description:"Create automated sandbox for malware execution and analysis.",tips:["Automate execution","Capture behavior","Generate reports"]},{number:4,title:"Implement Static Analysis",description:"Build tools for static analysis of malware samples.",tips:["Analyze file structure","Extract strings","Identify patterns"]},{number:5,title:"Create Analysis Reports",description:"Automate generation of detailed malware analysis reports.",tips:["Document behavior","Identify IOCs","Provide recommendations"]}],githubSetup:{repositoryName:"malware-analysis-lab",readmeTemplate:`# Malware Analysis Lab

A lab environment for malware analysis.

## Tools
- Static analysis tools
- Dynamic analysis tools
- Sandbox

## Capabilities
- Static analysis
- Dynamic analysis
- Reverse engineering

## Technologies
- Virtualization
- Analysis Tools
- Automation

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "samples/" >> .gitignore',"git add .",'git commit -m "Initial commit: Malware analysis lab"',"git remote add origin https://github.com/yourusername/malware-analysis-lab.git","git push -u origin main"],deploymentOptions:["Isolated Lab","Virtual Machines","Cloud Lab"]},resources:[{title:"Malware Analysis",url:"https://www.sans.org/white-papers/malware",type:"Tutorial"},{title:"Ghidra",url:"https://ghidra-sre.org",type:"Tool"}]});return}if(e.includes("soc-engineer")||e.includes("soc engineer")||e.includes("security operations")){i.beginner&&t.push({id:"siem-setup",title:"SIEM Setup and Log Analysis",description:"Set up a Security Information and Event Management (SIEM) system to collect, analyze, and respond to security events.",skills:["SIEM","Log Analysis","Security Monitoring","Incident Response"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Choose SIEM Tool",description:"Select and install a SIEM solution (ELK Stack, Splunk, or open source).",tips:["Start with ELK Stack","Understand log sources","Plan data retention"]},{number:2,title:"Configure Log Collection",description:"Set up log collection from various sources.",tips:["Configure syslog","Set up agents","Normalize log formats"]},{number:3,title:"Create Detection Rules",description:"Write rules to detect security events.",tips:["Define use cases","Create correlation rules","Test rules"]},{number:4,title:"Build Dashboards",description:"Create dashboards for security monitoring.",tips:["Visualize key metrics","Create alerts","Design for SOC analysts"]},{number:5,title:"Document Playbooks",description:"Create incident response playbooks.",tips:["Define procedures","Include escalation steps","Test playbooks"]}],githubSetup:{repositoryName:"siem-setup-project",readmeTemplate:`# SIEM Setup Project

Security Information and Event Management system setup.

## SIEM Solution
- [ELK Stack / Splunk / Other]

## Log Sources
- [List log sources]

## Detection Rules
- [Document detection rules]

## Dashboards
- [Describe dashboards]

## Technologies
- SIEM Platform
- Log Analysis
- Security Monitoring`,gitCommands:["git init","git add .",'git commit -m "Initial commit: SIEM setup"',"git remote add origin https://github.com/yourusername/siem-setup-project.git","git push -u origin main"],deploymentOptions:["ELK Stack","Splunk","Open Source SIEM"]},resources:[{title:"ELK Stack Guide",url:"https://www.elastic.co/guide/index.html",type:"Documentation"},{title:"SIEM Best Practices",url:"https://www.sans.org/white-papers/siem",type:"Tutorial"}]},{id:"log-analysis-basics",title:"Log Analysis Basics",description:"Learn to analyze security logs, identify patterns, and detect anomalies using log analysis tools.",skills:["Log Analysis","Security Logs","Pattern Detection","SIEM"],difficulty:"Beginner",estimatedTime:"1 week",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Understand Log Types",description:"Learn about different types of security logs (firewall, IDS, application).",tips:["Study log formats","Understand log sources","Learn common fields"]},{number:2,title:"Setup Log Collection",description:"Configure log collection from various sources.",tips:["Use syslog","Configure agents","Test collection"]},{number:3,title:"Learn Log Parsing",description:"Parse and analyze logs using grep, awk, or log analysis tools.",tips:["Use command-line tools","Write regex patterns","Extract fields"]},{number:4,title:"Identify Patterns",description:"Identify common patterns and anomalies in logs.",tips:["Look for failed logins","Detect unusual activity","Find patterns"]},{number:5,title:"Create Analysis Reports",description:"Document findings and create analysis reports.",tips:["Summarize findings","Include examples","Provide recommendations"]}],githubSetup:{repositoryName:"log-analysis-basics",readmeTemplate:`# Log Analysis Basics

A project for learning log analysis.

## Log Sources
- [List log sources]

## Analysis
- Pattern detection
- Anomaly identification
- Reporting

## Technologies
- Log Analysis Tools
- Command Line
- SIEM

## Usage
[Usage instructions]`,gitCommands:["git init",'echo "*.log" >> .gitignore',"git add .",'git commit -m "Initial commit: Log analysis"',"git remote add origin https://github.com/yourusername/log-analysis-basics.git","git push -u origin main"],deploymentOptions:["Local Analysis","SIEM Tools","Cloud Logging"]},resources:[{title:"Log Analysis Guide",url:"https://www.splunk.com/en_us/data-insights/what-is-log-analysis.html",type:"Tutorial"},{title:"ELK Stack",url:"https://www.elastic.co/guide/index.html",type:"Tool"}]},{id:"incident-response-basics",title:"Incident Response Basics",description:"Learn incident response procedures and create basic incident response playbooks for common security incidents.",skills:["Incident Response","Security Procedures","Documentation","Forensics"],difficulty:"Beginner",estimatedTime:"1-2 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Understand Incident Response",description:"Study incident response lifecycle and procedures.",tips:["Learn NIST framework","Understand phases","Study best practices"]},{number:2,title:"Create Incident Response Plan",description:"Document incident response procedures and contacts.",tips:["Define roles","Create contact list","Document procedures"]},{number:3,title:"Build Playbooks",description:"Create playbooks for common incident types.",tips:["Create malware playbook","Create phishing playbook","Document steps"]},{number:4,title:"Practice Response",description:"Practice incident response on simulated scenarios.",tips:["Use test scenarios","Follow playbooks","Document process"]},{number:5,title:"Improve Procedures",description:"Review and improve incident response procedures.",tips:["Identify gaps","Update playbooks","Train team"]}],githubSetup:{repositoryName:"incident-response-basics",readmeTemplate:`# Incident Response Basics

Incident response procedures and playbooks.

## Procedures
- Detection
- Containment
- Eradication
- Recovery

## Playbooks
- [List playbooks]

## Technologies
- Documentation
- Procedures

## Setup
[Setup instructions]`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Incident response"',"git remote add origin https://github.com/yourusername/incident-response-basics.git","git push -u origin main"],deploymentOptions:["Documentation","Wiki","Knowledge Base"]},resources:[{title:"NIST Incident Response",url:"https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",type:"Tutorial"},{title:"SANS Incident Response",url:"https://www.sans.org/white-papers/incident-response",type:"Tutorial"}]}),i.intermediate&&t.push({id:"threat-hunting",title:"Threat Hunting and Analysis",description:"Develop threat hunting capabilities to proactively search for threats and malicious activity in network and system logs.",skills:["Threat Hunting","Malware Analysis","Forensics","Security Analysis"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Define Threat Hypotheses",description:"Create hypotheses about potential threats.",tips:["Research threat landscape","Identify attack vectors","Define indicators"]},{number:2,title:"Collect Data",description:"Gather relevant data for analysis.",tips:["Collect logs","Capture network traffic","Gather system artifacts"]},{number:3,title:"Analyze Patterns",description:"Search for indicators of compromise.",tips:["Use query languages","Correlate events","Identify anomalies"]},{number:4,title:"Investigate Findings",description:"Deep dive into suspicious activities.",tips:["Use forensic tools","Analyze malware","Trace attack chain"]},{number:5,title:"Document and Report",description:"Document findings and create threat intelligence.",tips:["Write detailed reports","Share intelligence","Update detection rules"]}],githubSetup:{repositoryName:"threat-hunting-project",readmeTemplate:`# Threat Hunting Project

Proactive threat hunting and analysis project.

## Threat Hypotheses
- [List hypotheses]

## Methodology
- Data collection
- Analysis techniques
- Investigation process

## Findings
- [Document findings]

## Technologies
- SIEM
- Forensic Tools
- Analysis Tools`,gitCommands:["git init","git add .",'git commit -m "Initial commit: Threat hunting project"',"git remote add origin https://github.com/yourusername/threat-hunting-project.git","git push -u origin main"],deploymentOptions:["Lab Environment","Security Tools","Documentation"]},resources:[{title:"Threat Hunting Guide",url:"https://www.sans.org/white-papers/threat-hunting",type:"Tutorial"},{title:"MITRE ATT&CK",url:"https://attack.mitre.org",type:"Tool"}]},{id:"security-analytics",title:"Security Analytics Dashboard",description:"Build a security analytics dashboard to visualize security metrics, trends, and KPIs for SOC operations.",skills:["Security Analytics","Data Visualization","SIEM","Dashboards"],difficulty:"Intermediate",estimatedTime:"2-3 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Identify Key Metrics",description:"Define important security metrics and KPIs for SOC.",tips:["MTTR (Mean Time to Respond)","Alert volume","False positive rate","Incident trends"]},{number:2,title:"Collect Data",description:"Gather security data from various sources (SIEM, ticketing, etc.).",tips:["Query SIEM","Export data","Normalize formats"]},{number:3,title:"Create Visualizations",description:"Build charts and graphs to visualize security metrics.",tips:["Use visualization libraries","Create time series","Add filters"]},{number:4,title:"Build Dashboard",description:"Combine visualizations into comprehensive dashboard.",tips:["Organize layout","Add interactivity","Make it responsive"]},{number:5,title:"Add Real-Time Updates",description:"Implement real-time data updates and alerts.",tips:["Use WebSockets","Auto-refresh","Add notifications"]}],githubSetup:{repositoryName:"security-analytics-dashboard",readmeTemplate:`# Security Analytics Dashboard

A dashboard for visualizing security metrics and KPIs.

## Metrics
- [List key metrics]

## Visualizations
- [List chart types]

## Features
- Real-time updates
- Interactive filters
- Export capabilities

## Technologies
- [Frontend framework]
- Visualization library
- SIEM integration

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "node_modules/" >> .gitignore',"git add .",'git commit -m "Initial commit: Security analytics"',"git remote add origin https://github.com/yourusername/security-analytics-dashboard.git","git push -u origin main"],deploymentOptions:["Web Application","Dashboard Tool","SIEM Integration"]},resources:[{title:"Security Metrics",url:"https://www.sans.org/white-papers/metrics",type:"Tutorial"},{title:"Data Visualization",url:"https://www.d3js.org",type:"Tool"}]},{id:"automated-incident-response",title:"Automated Incident Response System",description:"Build an automated incident response system that detects, contains, and responds to security incidents automatically.",skills:["Incident Response Automation","SOAR","Security Automation","Playbooks"],difficulty:"Intermediate",estimatedTime:"3-4 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Design Automation Workflow",description:"Plan automated response workflow for common incidents.",tips:["Identify automatable tasks","Design decision trees","Plan escalation"]},{number:2,title:"Integrate Security Tools",description:"Connect to security tools via APIs for automation.",tips:["Connect to SIEM","Integrate with ticketing","Link to containment tools"]},{number:3,title:"Build Playbook Engine",description:"Create engine to execute automated playbooks.",tips:["Design playbook format","Implement execution","Handle errors"]},{number:4,title:"Implement Containment Actions",description:"Automate containment actions (isolate, block, etc.).",tips:["Isolate affected systems","Block malicious IPs","Revoke access"]},{number:5,title:"Add Human Oversight",description:"Implement approval gates and human review for critical actions.",tips:["Add approval workflows","Notify analysts","Log all actions"]}],githubSetup:{repositoryName:"automated-incident-response",readmeTemplate:`# Automated Incident Response System

An automated system for incident detection and response.

## Features
- Automated detection
- Automated containment
- Playbook execution
- Human oversight

## Playbooks
- [List playbooks]

## Technologies
- Automation Framework
- APIs
- Security Tools

## Setup
[Setup instructions]`,gitCommands:["git init",'echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: Automated IR"',"git remote add origin https://github.com/yourusername/automated-incident-response.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Platform","SIEM Integration"]},resources:[{title:"SOAR Platforms",url:"https://www.gartner.com/en/information-technology/glossary/soar-security-orchestration-automation-response",type:"Tutorial"},{title:"Incident Response Automation",url:"https://www.sans.org/white-papers/automation",type:"Tutorial"}]}),i.advanced&&t.push({id:"advanced-threat-detection",title:"Advanced Threat Detection System",description:"Build an advanced threat detection system using machine learning, behavioral analysis, and threat intelligence to detect sophisticated attacks.",skills:["Threat Detection","Machine Learning","Behavioral Analysis","Threat Intelligence"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Design Detection Architecture",description:"Plan ML-based threat detection system architecture.",tips:["Choose ML approach","Design feature extraction","Plan model training"]},{number:2,title:"Collect Training Data",description:"Gather labeled security data for model training.",tips:["Collect normal behavior","Gather attack samples","Label data properly"]},{number:3,title:"Build ML Models",description:"Train machine learning models for anomaly detection.",tips:["Use supervised/unsupervised learning","Train models","Validate performance"]},{number:4,title:"Integrate Threat Intelligence",description:"Integrate threat intelligence feeds for IOCs.",tips:["Connect to TI feeds","Enrich alerts","Update IOCs"]},{number:5,title:"Deploy and Monitor",description:"Deploy detection system and monitor performance.",tips:["Deploy models","Monitor false positives","Continuously improve"]}],githubSetup:{repositoryName:"advanced-threat-detection",readmeTemplate:`# Advanced Threat Detection System

ML-based threat detection system.

## Architecture
- ML models
- Feature extraction
- Threat intelligence

## Models
- [List models]
- Accuracy: [Metrics]

## Technologies
- Machine Learning
- Python
- Security Tools

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "models/" >> .gitignore',"git add .",'git commit -m "Initial commit: Advanced threat detection"',"git remote add origin https://github.com/yourusername/advanced-threat-detection.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Platform","SIEM Integration"]},resources:[{title:"ML for Security",url:"https://www.sans.org/white-papers/machine-learning",type:"Tutorial"},{title:"Threat Intelligence",url:"https://www.misp-project.org",type:"Tool"}]},{id:"security-operations-center",title:"Security Operations Center Platform",description:"Build a comprehensive SOC platform with SIEM, SOAR, threat intelligence, and analytics integrated into a single platform.",skills:["SOC Platform","SIEM","SOAR","Threat Intelligence","Analytics"],difficulty:"Advanced",estimatedTime:"8-10 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Design SOC Architecture",description:"Plan comprehensive SOC platform architecture.",tips:["Design component architecture","Plan integrations","Consider scalability"]},{number:2,title:"Build Core SIEM",description:"Implement SIEM functionality for log collection and analysis.",tips:["Collect logs","Normalize data","Create rules"]},{number:3,title:"Implement SOAR",description:"Add SOAR capabilities for automation and orchestration.",tips:["Build workflow engine","Create playbooks","Integrate tools"]},{number:4,title:"Add Threat Intelligence",description:"Integrate threat intelligence feeds and analysis.",tips:["Connect to TI feeds","Enrich data","Create IOCs"]},{number:5,title:"Build Analytics and Reporting",description:"Create analytics engine and reporting capabilities.",tips:["Build dashboards","Generate reports","Track metrics"]}],githubSetup:{repositoryName:"soc-platform",readmeTemplate:`# Security Operations Center Platform

A comprehensive SOC platform.

## Components
- SIEM
- SOAR
- Threat Intelligence
- Analytics

## Features
- Log collection
- Automated response
- Threat hunting
- Reporting

## Technologies
- [List technologies]

## Setup
[Setup instructions]`,gitCommands:["git init",'echo ".env" >> .gitignore',"git add .",'git commit -m "Initial commit: SOC platform"',"git remote add origin https://github.com/yourusername/soc-platform.git","git push -u origin main"],deploymentOptions:["On-Premises","Cloud Platform","Hybrid"]},resources:[{title:"SOC Best Practices",url:"https://www.sans.org/white-papers/soc",type:"Tutorial"},{title:"SIEM Architecture",url:"https://www.elastic.co/guide/en/security/current/index.html",type:"Documentation"}]},{id:"forensic-investigation-platform",title:"Digital Forensics Investigation Platform",description:"Build a digital forensics platform for collecting, analyzing, and preserving digital evidence from security incidents.",skills:["Digital Forensics","Evidence Collection","Forensic Analysis","Chain of Custody"],difficulty:"Advanced",estimatedTime:"6-8 weeks",portfolioReady:!0,category:"Cybersecurity",steps:[{number:1,title:"Design Forensics Workflow",description:"Plan digital forensics investigation workflow.",tips:["Define procedures","Plan evidence collection","Design chain of custody"]},{number:2,title:"Build Evidence Collection",description:"Create tools for collecting digital evidence.",tips:["Image disks","Collect memory dumps","Capture network traffic"]},{number:3,title:"Implement Analysis Tools",description:"Build tools for analyzing collected evidence.",tips:["Analyze file systems","Examine memory","Parse logs"]},{number:4,title:"Add Chain of Custody",description:"Implement chain of custody tracking for evidence.",tips:["Track evidence","Document handling","Ensure integrity"]},{number:5,title:"Create Investigation Reports",description:"Automate generation of forensic investigation reports.",tips:["Document findings","Include timeline","Provide conclusions"]}],githubSetup:{repositoryName:"forensic-investigation-platform",readmeTemplate:`# Digital Forensics Investigation Platform

A platform for digital forensics investigations.

## Features
- Evidence collection
- Forensic analysis
- Chain of custody
- Reporting

## Tools
- [List forensic tools]

## Capabilities
- Disk imaging
- Memory analysis
- Network forensics

## Technologies
- Forensic Tools
- Python
- Evidence Management

## Setup
[Setup instructions]`,gitCommands:["git init",'echo "evidence/" >> .gitignore',"git add .",'git commit -m "Initial commit: Forensics platform"',"git remote add origin https://github.com/yourusername/forensic-investigation-platform.git","git push -u origin main"],deploymentOptions:["Lab Environment","Forensic Workstation","Cloud Platform"]},resources:[{title:"Digital Forensics",url:"https://www.sans.org/white-papers/forensics",type:"Tutorial"},{title:"Autopsy",url:"https://www.autopsy.com",type:"Tool"}]});return}}filterProjects(){this.selectedDifficulty==="All"?this.filteredProjects=this.projects:this.filteredProjects=this.projects.filter(t=>t.difficulty===this.selectedDifficulty)}onDifficultyChange(t){(t==="All"||t==="Beginner"||t==="Intermediate"||t==="Advanced")&&(this.selectedDifficulty=t,this.filterProjects())}toggleProjects(){this.showProjects=!this.showProjects}selectProject(t){this.router.navigate(["/project",t.id])}getDifficultyColor(t){switch(t){case"Beginner":return"#2E6BFF";case"Intermediate":return"#2558D8";case"Advanced":return"#1a4ac0";default:return"#A9B7C9"}}getMatchingSkills(t){let e=this.userSkills.map(i=>i.name.toLowerCase());return t.skills.filter(i=>e.some(s=>s.includes(i.toLowerCase())||i.toLowerCase().includes(s)))}copyToClipboard(t){navigator.clipboard.writeText(t).then(()=>{console.log("Copied to clipboard")}).catch(e=>{console.error("Failed to copy:",e)})}static \u0275fac=function(e){return new(e||a)(A(z),A(N),A(se))};static \u0275cmp=I({type:a,selectors:[["app-project-generator"]],inputs:{userSkills:"userSkills",careerGoal:"careerGoal"},decls:10,vars:3,consts:[[1,"project-generator"],[1,"generator-header"],[1,"subtitle"],[1,"toggle-projects-btn",3,"click"],["class","difficulty-filters",4,"ngIf"],["class","projects-grid",4,"ngIf"],[1,"difficulty-filters"],["class","difficulty-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"difficulty-btn",3,"click"],[1,"projects-grid"],["class","project-card","style","cursor: pointer;",3,"portfolio-ready","click",4,"ngFor","ngForOf"],[1,"project-card",2,"cursor","pointer",3,"click"],[1,"project-header"],[1,"project-title-section"],[1,"project-category"],[1,"project-badges"],[1,"difficulty-badge"],["class","portfolio-badge",4,"ngIf"],[1,"project-description"],[1,"project-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"project-skills"],["class","skill-tag",3,"matching",4,"ngFor","ngForOf"],[1,"portfolio-badge"],[1,"skill-tag"]],template:function(e,i){e&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),r(3,"\u{1F4BC} Portfolio Project Generator"),o(),n(4,"p",2),r(5,"Generate portfolio-ready projects based on your skills"),o(),n(6,"button",3),f("click",function(){return i.toggleProjects()}),r(7),o()(),h(8,Te,2,2,"div",4)(9,Re,2,1,"div",5),o()),e&2&&(l(7),C(" ",i.showProjects?"\u25BC Hide Projects":"\u25B6 Show Projects"," "),l(),m("ngIf",i.showProjects),l(),m("ngIf",i.showProjects))},dependencies:[E,O,R],styles:['.project-generator[_ngcontent-%COMP%]{background:#0f2138;border-radius:16px;padding:24px;border:1px solid #162E4A;margin-top:20px;transition:all .3s cubic-bezier(.4,0,.2,1)}@media(hover:hover)and (pointer:fine){.project-generator[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6)}}.generator-header[_ngcontent-%COMP%]{margin-bottom:24px}.generator-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin-bottom:8px;color:#fff;display:flex;align-items:center;gap:12px}.generator-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:14px;color:#a9b7c9;margin-bottom:16px}.toggle-projects-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#2e6bff33;border:2px solid rgba(46,107,255,.4);border-radius:12px;color:#2e6bff;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;margin-top:12px;display:flex;align-items:center;gap:8px}.toggle-projects-btn[_ngcontent-%COMP%]:hover{background:#2e6bff4d;border-color:#2e6bff;transform:translateY(-2px);box-shadow:0 4px 12px #2e6bff4d}.difficulty-filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:24px}.difficulty-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#ffffff0d;border:2px solid rgba(255,255,255,.1);border-radius:12px;color:#a9b7c9;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease}.difficulty-btn[_ngcontent-%COMP%]:hover{background:#2e6bff1a;border-color:#2e6bff4d;color:#fff;transform:translateY(-2px)}.difficulty-btn.active[_ngcontent-%COMP%]{background:#2e6bff33;border-color:#2e6bff;color:#fff;box-shadow:0 4px 12px #2e6bff4d}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px}.project-card[_ngcontent-%COMP%]{background:#ffffff08;border:2px solid rgba(255,255,255,.1);border-radius:12px;padding:20px;cursor:pointer;transition:all .3s ease}@media(hover:hover)and (pointer:fine){.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6);background:#ffffff0d}}.project-card.portfolio-ready[_ngcontent-%COMP%]{border-color:#ffd7004d;background:#ffd7000d}.project-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;gap:12px}.project-title-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#fff;margin:0 0 6px}.project-category[_ngcontent-%COMP%]{font-size:12px;color:#a9b7c9;text-transform:uppercase;letter-spacing:.5px}.project-badges[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px;align-items:flex-end}.difficulty-badge[_ngcontent-%COMP%]{padding:4px 12px;border-radius:12px;font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:.5px}.portfolio-badge[_ngcontent-%COMP%]{padding:4px 10px;background:#ffd70033;border:1px solid rgba(255,215,0,.4);border-radius:10px;font-size:11px;font-weight:600;color:gold}.project-description[_ngcontent-%COMP%]{font-size:14px;color:#dce6f2;line-height:1.6;margin-bottom:16px}.project-meta[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:16px;font-size:13px;color:#a9b7c9}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.meta-icon[_ngcontent-%COMP%]{font-size:16px}.project-skills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.skill-tag[_ngcontent-%COMP%]{padding:4px 12px;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:12px;font-size:12px;color:#a9b7c9}.skill-tag.matching[_ngcontent-%COMP%]{background:#2e6bff33;border-color:#2e6bff66;color:#2e6bff;font-weight:600}.project-modal[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000c;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;overflow-y:auto;animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.modal-content[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0f2138,#162e4a);border:2px solid #2E6BFF;border-radius:16px;padding:32px;max-width:900px;width:100%;max-height:90vh;overflow-y:auto;position:relative;box-shadow:0 20px 60px #2e6bff66;animation:_ngcontent-%COMP%_slideUp .3s ease}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}.close-btn[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;background:transparent;border:none;color:#a9b7c9;font-size:32px;cursor:pointer;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:8px;transition:all .2s ease}.close-btn[_ngcontent-%COMP%]:hover{background:#ffffff1a;color:#fff}.modal-header[_ngcontent-%COMP%]{margin-bottom:20px}.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:700;color:#fff;margin-bottom:12px}.modal-badges[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.modal-description[_ngcontent-%COMP%]{font-size:16px;color:#dce6f2;line-height:1.6;margin-bottom:24px}.modal-tabs[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:24px;border-bottom:2px solid rgba(255,255,255,.1)}.tab-btn[_ngcontent-%COMP%]{padding:12px 24px;background:transparent;border:none;border-bottom:3px solid transparent;color:#a9b7c9;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;margin-bottom:-2px}.tab-btn[_ngcontent-%COMP%]:hover{color:#fff;background:#ffffff0d}.tab-btn.active[_ngcontent-%COMP%]{color:#2e6bff;border-bottom-color:#2e6bff}.tab-content[_ngcontent-%COMP%]{min-height:300px}.info-section[_ngcontent-%COMP%]{margin-bottom:24px}.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#fff;margin-bottom:12px}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}.info-item[_ngcontent-%COMP%]{font-size:14px;color:#dce6f2}.info-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff;margin-right:8px}.skills-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.resources-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.resources-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:12px}.resources-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#2e6bff;text-decoration:none;transition:all .3s ease}.resources-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#2e6bff1a;border-color:#2e6bff4d;transform:translate(4px)}.resource-type[_ngcontent-%COMP%]{font-size:11px;color:#a9b7c9;padding:2px 8px;background:#ffffff0d;border-radius:10px}.steps-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.step-item[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:12px;border-left:4px solid #2E6BFF}.step-number[_ngcontent-%COMP%]{width:40px;height:40px;background:#2e6bff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;flex-shrink:0}.step-content[_ngcontent-%COMP%]{flex:1}.step-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#fff;margin-bottom:8px}.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#dce6f2;line-height:1.6;margin-bottom:12px}.code-snippet[_ngcontent-%COMP%]{background:#0a0e14;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:16px;overflow-x:auto;margin:12px 0}.code-snippet[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#39d353;font-family:Courier New,monospace;font-size:13px;line-height:1.5}.code-inline[_ngcontent-%COMP%]{background:#2e6bff33;padding:4px 8px;border-radius:4px;color:#2e6bff;font-family:Courier New,monospace;font-size:13px}.step-tips[_ngcontent-%COMP%]{list-style:none;padding:0;margin:12px 0 0}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0 8px 24px;position:relative;font-size:13px;color:#a9b7c9;line-height:1.5}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.github-setup[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.setup-section[_ngcontent-%COMP%]{padding:20px;background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:12px}.setup-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#fff;margin-bottom:16px}.setup-item[_ngcontent-%COMP%]{font-size:14px;color:#dce6f2;margin-bottom:12px}.setup-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff;margin-right:8px}.commands-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.command-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px 16px;background:#0a0e14;border:1px solid rgba(255,255,255,.1);border-radius:8px}.command-code[_ngcontent-%COMP%]{flex:1;color:#39d353;font-family:Courier New,monospace;font-size:13px}.copy-btn[_ngcontent-%COMP%]{background:#2e6bff33;border:1px solid rgba(46,107,255,.3);border-radius:6px;padding:6px 12px;color:#2e6bff;font-size:14px;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{background:#2e6bff4d;transform:scale(1.05)}.readme-template[_ngcontent-%COMP%]{background:#0a0e14;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:16px;overflow-x:auto;margin-bottom:12px}.readme-template[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#dce6f2;font-family:Courier New,monospace;font-size:12px;line-height:1.6;white-space:pre-wrap}.copy-btn-large[_ngcontent-%COMP%]{width:100%;padding:12px;background:#2e6bff33;border:2px solid rgba(46,107,255,.4);border-radius:8px;color:#2e6bff;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn-large[_ngcontent-%COMP%]:hover{background:#2e6bff4d;border-color:#2e6bff;transform:translateY(-2px)}.deployment-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.deployment-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px;background:#ffffff08;border-radius:8px;margin-bottom:8px;font-size:14px;color:#dce6f2}.deployment-icon[_ngcontent-%COMP%]{font-size:18px}@media(max-width:768px){.projects-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.modal-content[_ngcontent-%COMP%]{padding:20px;max-height:95vh}.modal-tabs[_ngcontent-%COMP%]{flex-direction:column}.tab-btn[_ngcontent-%COMP%]{width:100%;text-align:left}}']})};function Ee(a,t){if(a&1&&(n(0,"h1"),r(1),o()),a&2){let e=p();l(),b(e.welcomeMessage)}}function ze(a,t){if(a&1&&(n(0,"h1"),r(1),o()),a&2){let e=p();l(),C("Welcome back, ",e.userName,"!")}}function Le(a,t){if(a&1){let e=S();n(0,"button",30),f("click",function(){u(e);let s=p();return g(s.showAddGoal=!s.showAddGoal)}),n(1,"span",31),r(2,"+"),o(),n(3,"span"),r(4,"Add Goal"),o()()}}function Fe(a,t){if(a&1&&(n(0,"div",32)(1,"div",33)(2,"span",34),r(3,"Today's Progress"),o(),n(4,"span",35),r(5),o()(),n(6,"div",36)(7,"div",37)(8,"div",38),D(9,"div",39),o()()(),n(10,"div",40)(11,"span",41)(12,"span",42),r(13),o(),n(14,"span",43),r(15,"Completed"),o()(),n(16,"span",44),r(17,"\u2022"),o(),n(18,"span",41)(19,"span",42),r(20),o(),n(21,"span",43),r(22,"Total"),o()()()()),a&2){let e=p();l(5),C("",e.getProgressPercentage(),"%"),l(3),M("width",e.getProgressPercentage(),"%"),l(5),b(e.getCompletedGoalsCount()),l(7),b(e.getTotalGoalsCount())}}function Ge(a,t){a&1&&(n(0,"div",45)(1,"div",46)(2,"span",47),r(3,"\u{1F389}"),o(),n(4,"span",48),r(5,"All goals completed! Great job!"),o()()())}function Ue(a,t){if(a&1){let e=S();n(0,"div",49)(1,"div",50)(2,"h4"),r(3,"Add New Goal"),o()(),n(4,"input",51),Z("ngModelChange",function(s){u(e);let d=p();return X(d.newGoalText,s)||(d.newGoalText=s),g(s)}),f("keyup.enter",function(){u(e);let s=p();return g(s.addDailyGoal())})("keyup.escape",function(){u(e);let s=p();return s.showAddGoal=!1,g(s.newGoalText="")}),o(),n(5,"div",52)(6,"button",53),f("click",function(){u(e);let s=p();return g(s.addDailyGoal())}),n(7,"span"),r(8,"\u2713 Add Goal"),o()(),n(9,"button",54),f("click",function(){u(e);let s=p();return s.showAddGoal=!1,g(s.newGoalText="")}),r(10," Cancel "),o()()()}if(a&2){let e=p();l(4),$("ngModel",e.newGoalText)}}function Ne(a,t){a&1&&(n(0,"span",66),r(1," \u2713 Completed "),o())}function Ve(a,t){if(a&1){let e=S();n(0,"div",57)(1,"div",58)(2,"label",59)(3,"input",60),f("change",function(){let s=u(e).$implicit,d=p(2);return g(d.toggleGoalComplete(s.id))}),o(),D(4,"span",61),o()(),n(5,"div",62)(6,"span",63),r(7),o(),h(8,Ne,2,0,"span",64),o(),n(9,"button",65),f("click",function(){let s=u(e).$implicit,d=p(2);return g(d.deleteGoal(s.id))}),n(10,"span"),r(11,"\u{1F5D1}\uFE0F"),o()()()}if(a&2){let e=t.$implicit;k("completed",e.completed),l(3),m("checked",e.completed),l(3),k("strikethrough",e.completed),l(),b(e.text),l(),m("ngIf",e.completed)}}function Be(a,t){if(a&1&&(n(0,"div",55),h(1,Ve,12,7,"div",56),o()),a&2){let e=p();l(),m("ngForOf",e.dailyGoals)}}function je(a,t){if(a&1){let e=S();n(0,"div",67)(1,"div",68),r(2,"\u{1F3AF}"),o(),n(3,"p",69),r(4,"No goals set for today"),o(),n(5,"p",70),r(6,"Add your first goal to start tracking your daily progress!"),o(),n(7,"button",71),f("click",function(){u(e);let s=p();return g(s.showAddGoal=!0)}),n(8,"span",31),r(9,"+"),o(),n(10,"span"),r(11,"Add Your First Goal"),o()()()}}function qe(a,t){if(a&1){let e=S();n(0,"div",76),f("click",function(){let s=u(e).$implicit,d=p(2);return g(d.openSavedRoadmap(s.id))}),n(1,"div",77)(2,"strong",78),r(3),o()(),n(4,"div",79),r(5),o(),n(6,"div",80)(7,"button",81),f("click",function(s){let d=u(e).$implicit;return p(2).openQuiz(d.id),g(s.stopPropagation())}),r(8,"Quiz"),o(),n(9,"button",82),f("click",function(s){let d=u(e).$implicit;return p(2).activateRoadmap(d.id),g(s.stopPropagation())}),r(10),o(),n(11,"button",83),f("click",function(s){let d=u(e).$implicit;return p(2).openDeleteModal(d.id),g(s.stopPropagation())}),r(12,"Delete"),o()()()}if(a&2){let e=t.$implicit,i=p(2);k("active-roadmap",i.activeRoadmapId===e.id),l(3),b(e.name),l(2),Y("",e.careerTitle," \u2022 ",e.estimatedTime," \u2022 ",e.progress,"%"),l(4),k("active-btn",i.activeRoadmapId===e.id),l(),C(" ",i.activeRoadmapId===e.id?"Active":"Activate"," "),l(),Q("aria-label",ee("Delete saved roadmap ",e.name))}}function We(a,t){if(a&1&&(n(0,"section",72)(1,"div",8)(2,"h3"),r(3,"Saved Roadmaps"),o(),n(4,"p",73),r(5,"Your generated roadmaps \u2014 click to open"),o(),n(6,"div",74),h(7,qe,13,11,"div",75),o()()()),a&2){let e=p();l(7),m("ngForOf",e.savedRoadmaps)}}function He(a,t){if(a&1){let e=S();n(0,"section",84)(1,"div",85)(2,"h3"),r(3,"\u{1F4D8} Your Roadmap"),o(),n(4,"p",73),r(5,"Continue learning and track your progress"),o(),n(6,"button",86),f("click",function(){u(e);let s=p();return g(s.goToRoadmap())}),r(7,"View Roadmap"),o(),n(8,"button",87),f("click",function(){u(e);let s=p();return g(s.openAllCourses())}),r(9,"All Courses"),o()(),n(10,"div",85)(11,"h3"),r(12,"\u{1F3AF} Update Skills"),o(),n(13,"p",73),r(14,"Modify your skills or generate a new roadmap"),o(),n(15,"button",88),f("click",function(){u(e);let s=p();return s.markSeen(),g(s.goToSkills())}),r(16,"Update Skills & Continue"),o()()()}}function Ke(a,t){if(a&1){let e=S();n(0,"section",89)(1,"h2"),r(2,"Get Started with Your Career Journey"),o(),n(3,"p",73),r(4,"Follow these steps to create your personalized roadmap"),o(),n(5,"div",90)(6,"div",91)(7,"div",92),r(8,"1"),o(),n(9,"div",93)(10,"h3"),r(11,"Enter Your Skills"),o(),n(12,"p"),r(13,"Tell us about your current technical skills and interests"),o()(),n(14,"button",94),f("click",function(){u(e);let s=p();return s.markSeen(),g(s.goToSkills())}),r(15,"Start \u2192"),o()(),n(16,"div",91)(17,"div",92),r(18,"2"),o(),n(19,"div",93)(20,"h3"),r(21,"Choose Career Goal"),o(),n(22,"p"),r(23,"Select from various career paths in computer science"),o()(),n(24,"button",94),f("click",function(){u(e);let s=p();return s.markSeen(),g(s.goToCareerGoal())}),r(25,"Choose \u2192"),o()(),n(26,"div",91)(27,"div",92),r(28,"3"),o(),n(29,"div",93)(30,"h3"),r(31,"Get AI Roadmap"),o(),n(32,"p"),r(33,"Receive a personalized learning path with resources"),o()()()()()}}function Qe(a,t){if(a&1){let e=S();n(0,"div",95),f("click",function(){u(e);let s=p();return g(s.cancelDelete())}),n(1,"div",96),f("click",function(s){return u(e),g(s.stopPropagation())}),n(2,"h4"),r(3,"Delete saved roadmap"),o(),n(4,"p"),r(5),o(),n(6,"div",97)(7,"button",98),f("click",function(){u(e);let s=p();return g(s.cancelDelete())}),r(8,"Cancel"),o(),n(9,"button",99),f("click",function(){u(e);let s=p();return g(s.confirmDelete())}),r(10,"Delete"),o()()()()}if(a&2){let e=p();l(5),C('Are you sure you want to delete "',e.deleteTargetName,'"? This action cannot be undone.')}}function Je(a,t){a&1&&(n(0,"div"),r(1,"No courses found for the selected roadmap."),o())}function Ye(a,t){if(a&1&&(n(0,"span"),r(1),o()),a&2){let e=p().$implicit;l(),C("\u2022 ",e.source)}}function $e(a,t){if(a&1&&(n(0,"div")(1,"a",107),r(2,"Open"),o()()),a&2){let e=p().$implicit;l(),m("href",e.url,K)}}function Xe(a,t){if(a&1&&(n(0,"li",104)(1,"div",105),r(2),o(),n(3,"div",106),r(4),h(5,Ye,2,1,"span",101),o(),h(6,$e,3,1,"div",101),o()),a&2){let e=t.$implicit;l(2),b(e.title),l(2),C("",e.type," "),l(),m("ngIf",e.source),l(),m("ngIf",e.url)}}function Ze(a,t){if(a&1&&(n(0,"ul"),h(1,Xe,7,4,"li",103),o()),a&2){let e=p(2);l(),m("ngForOf",e.coursesList)}}function et(a,t){if(a&1){let e=S();n(0,"div",95),f("click",function(){u(e);let s=p();return g(s.closeCoursesModal())}),n(1,"div",96),f("click",function(s){return u(e),g(s.stopPropagation())}),n(2,"h4"),r(3,"All Courses & Resources"),o(),n(4,"p",73),r(5,"Aggregated courses, certifications and project ideas from your roadmap"),o(),n(6,"div",100),h(7,Je,2,0,"div",101)(8,Ze,2,1,"ul",101),o(),n(9,"div",102)(10,"button",98),f("click",function(){u(e);let s=p();return g(s.closeCoursesModal())}),r(11,"Close"),o()()()()}if(a&2){let e=p();l(7),m("ngIf",!e.coursesList.length),l(),m("ngIf",e.coursesList.length)}}var pe=class a{constructor(t,e){this.router=t;this.userStorage=e}userName="chandu";welcomeMessage=null;badges=[];overallProgress=0;skillsCompleted=0;careerGoal="Not Set";estimatedTime="N/A";hasRoadmap=!1;isFirstLogin=!1;savedRoadmaps=[];activeRoadmapId=null;showDeleteModal=!1;deleteTargetId=null;deleteTargetName="";showCoursesModal=!1;coursesList=[];dailyGoals=[];newGoalText="";showAddGoal=!1;currentUserSkills=[];ngOnInit(){try{let t=localStorage.getItem("currentUser");if(t){let i=JSON.parse(t);i?.fullName&&(this.userName=i.fullName)}let e=sessionStorage.getItem("welcomeMessage");if(e){this.welcomeMessage=e;try{sessionStorage.removeItem("welcomeMessage")}catch{}}}catch{}try{let t=this.userStorage.getRoadmapSummary();if(t&&(this.careerGoal=t.careerTitle||this.careerGoal,this.estimatedTime=t.estimatedTime||this.estimatedTime,this.overallProgress=t.progress||0,this.skillsCompleted=t.skillsCompleted||0,this.hasRoadmap=!0),this.savedRoadmaps=this.userStorage.getSavedRoadmaps(),this.activeRoadmapId=this.userStorage.getActiveRoadmapId(),this.currentUserSkills=this.userStorage.getUserSkills(),!this.currentUserSkills||this.currentUserSkills.length===0)try{let d=this.userStorage.getItem("currentSkills");d&&(this.currentUserSkills=JSON.parse(d))}catch{this.currentUserSkills=[]}let e=`seenDashboard_${this.userName}`;this.userStorage.getItem(e)||(this.isFirstLogin=!0);let s=this.userStorage.getBadges();s&&s.length?this.badges=s:this.loadBadges(),this.loadDailyGoals()}catch{}}loadBadges(){try{let t=this.userStorage.getCompletionEvents(),e=this.userStorage.getQuizAttempts(),i=new Map;for(let d of t)if(new Date(d.at).getHours()<9){i.set("early-bird",{id:"early-bird",title:"Early Bird",description:"Completed a task before 9 AM",earnedAt:d.at});break}for(let d of t)if(new Date(d.at).getHours()>=22){i.set("night-owl",{id:"night-owl",title:"Night Owl",description:"Completed a task after 10 PM",earnedAt:d.at});break}let s=new Map;for(let d of t){let y=new Date(d.at).toISOString().slice(0,10);s.set(y,(s.get(y)||0)+1),(s.get(y)||0)>=3&&i.set("fast-learner",{id:"fast-learner",title:"Fast Learner",description:"Finished 3 skills in 1 day",earnedAt:d.at})}for(let d of e)if(d.score===100){i.set("quiz-master",{id:"quiz-master",title:"Quiz Master",description:"Scored 100% in a quiz",earnedAt:d.at});break}this.badges=Array.from(i.values()).map(d=>({id:d.id,title:d.title,description:d.description,earnedAt:d.earnedAt})),this.userStorage.setBadges(this.badges)}catch{this.badges=[]}}openDeleteModal(t){this.deleteTargetId=t;let e=this.savedRoadmaps.find(i=>i.id===t);this.deleteTargetName=e?.name||"this roadmap",this.showDeleteModal=!0}cancelDelete(){this.showDeleteModal=!1,this.deleteTargetId=null,this.deleteTargetName=""}confirmDelete(){this.deleteTargetId&&this.deleteSavedRoadmap(this.deleteTargetId),this.cancelDelete()}activateRoadmap(t){this.userStorage.setActiveRoadmapId(t),this.activeRoadmapId=t}openSavedRoadmap(t){this.userStorage.setActiveRoadmapId(t),this.activeRoadmapId=t,this.router.navigate(["/roadmap"],{queryParams:{savedId:t}})}openQuiz(t){try{this.router.navigate(["/quiz",t])}catch{}}deleteSavedRoadmap(t){let e=this.savedRoadmaps.filter(i=>i.id!==t);this.userStorage.setSavedRoadmaps(e),this.savedRoadmaps=e,this.activeRoadmapId===t&&(this.userStorage.setActiveRoadmapId(null),this.activeRoadmapId=null)}logout(){this.router.navigate(["/auth"])}goToSkills(){this.router.navigate(["/skills"])}goToCareerGoal(){this.router.navigate(["/career-goal"])}goToRoadmap(){this.markSeen(),this.router.navigate(["/roadmap"])}markSeen(){let t=`seenDashboard_${this.userName}`;this.userStorage.setItem(t,"true"),this.isFirstLogin=!1}openAllCourses(){try{this.coursesList=[];let t=this.savedRoadmaps.find(d=>d.id===this.activeRoadmapId)||this.savedRoadmaps[0];if(!t){this.showCoursesModal=!0;return}let e=t.roadmapLevels||[];for(let d of e){let x=d.skills||[];for(let y of x){if(typeof y=="string")continue;let _=y.name||"",v=y.resources||[];for(let T of v)this.coursesList.push({title:T.title,url:T.url,type:"course",source:_})}}let i=t.certifications||[];for(let d of i)this.coursesList.push({title:d,type:"certification"});let s=t.projectIdeas||[];for(let d of s)this.coursesList.push({title:d,type:"project"});this.showCoursesModal=!0}catch{this.coursesList=[],this.showCoursesModal=!0}}closeCoursesModal(){this.showCoursesModal=!1,this.coursesList=[]}loadDailyGoals(){try{let e=`dailyGoals_${new Date().toISOString().split("T")[0]}`,i=this.userStorage.getItem(e);i?this.dailyGoals=JSON.parse(i):(this.dailyGoals=[],this.saveDailyGoals())}catch{this.dailyGoals=[]}}saveDailyGoals(){try{let e=`dailyGoals_${new Date().toISOString().split("T")[0]}`;this.userStorage.setItem(e,JSON.stringify(this.dailyGoals))}catch{}}addDailyGoal(){if(this.newGoalText.trim()){let t={id:Date.now().toString(),text:this.newGoalText.trim(),completed:!1,createdAt:new Date().toISOString()};this.dailyGoals.push(t),this.newGoalText="",this.showAddGoal=!1,this.saveDailyGoals()}}toggleGoalComplete(t){let e=this.dailyGoals.find(i=>i.id===t);e&&(e.completed=!e.completed,this.saveDailyGoals())}deleteGoal(t){this.dailyGoals=this.dailyGoals.filter(e=>e.id!==t),this.saveDailyGoals()}getCompletedGoalsCount(){return this.dailyGoals.filter(t=>t.completed).length}getTotalGoalsCount(){return this.dailyGoals.length}getProgressPercentage(){return this.dailyGoals.length===0?0:Math.round(this.getCompletedGoalsCount()/this.getTotalGoalsCount()*100)}static \u0275fac=function(e){return new(e||a)(A(N),A(z))};static \u0275cmp=I({type:a,selectors:[["app-dashboard"]],decls:63,vars:22,consts:[["backTpl",""],[1,"dashboard"],[1,"header"],[1,"welcome-section"],[4,"ngIf","ngIfElse"],[1,"logout-btn",3,"click"],[1,"arrow-icon"],[1,"progress-cards"],[1,"card"],[1,"value"],[1,"progress-bar"],[1,"progress-fill"],[1,"icon"],[1,"daily-goals-section"],[1,"card","goals-card"],[1,"daily-goals-header"],[1,"header-left"],[1,"goals-subtitle"],["class","add-goal-btn",3,"click",4,"ngIf"],["class","goals-progress-container",4,"ngIf"],["class","celebration-banner",4,"ngIf"],["class","add-goal-form",4,"ngIf"],["class","goals-list",4,"ngIf"],["class","goals-empty",4,"ngIf"],[3,"userSkills","careerGoal"],[3,"badges"],["class","saved-panel",4,"ngIf"],["class","action-cards",4,"ngIf"],["class","get-started",4,"ngIf"],["class","modal-overlay",3,"click",4,"ngIf"],[1,"add-goal-btn",3,"click"],[1,"btn-icon"],[1,"goals-progress-container"],[1,"progress-header"],[1,"progress-label"],[1,"progress-percentage"],[1,"progress-bar-wrapper"],[1,"progress-bar-bg"],[1,"progress-bar-fill"],[1,"progress-shine"],[1,"progress-stats"],[1,"stat-item"],[1,"stat-value"],[1,"stat-label"],[1,"stat-divider"],[1,"celebration-banner"],[1,"celebration-content"],[1,"celebration-icon"],[1,"celebration-text"],[1,"add-goal-form"],[1,"form-header"],["type","text","placeholder","e.g., Complete JavaScript Basics quiz","autofocus","",1,"goal-input",3,"ngModelChange","keyup.enter","keyup.escape","ngModel"],[1,"goal-form-actions"],[1,"btn-primary-small",3,"click"],[1,"btn-cancel-small",3,"click"],[1,"goals-list"],["class","goal-item",3,"completed",4,"ngFor","ngForOf"],[1,"goal-item"],[1,"goal-checkbox-wrapper"],[1,"goal-checkbox"],["type","checkbox",3,"change","checked"],[1,"checkmark"],[1,"goal-content"],[1,"goal-text"],["class","goal-time",4,"ngIf"],["title","Delete goal",1,"delete-goal-btn",3,"click"],[1,"goal-time"],[1,"goals-empty"],[1,"empty-icon"],[1,"empty-title"],[1,"empty-description"],[1,"add-goal-btn-small",3,"click"],[1,"saved-panel"],[1,"subtitle"],[1,"saved-grid"],["class","saved-card",3,"active-roadmap","click",4,"ngFor","ngForOf"],[1,"saved-card",3,"click"],[1,"saved-card-top"],[1,"saved-title"],[1,"saved-card-meta"],[1,"saved-card-actions"],["title","Quiz",1,"link-btn",3,"click"],["title","Activate roadmap",1,"link-btn",3,"click"],["title","Delete saved roadmap",1,"link-btn","delete-pill",3,"click","aria-label"],[1,"action-cards"],[1,"card","large-card"],[1,"primary-btn",3,"click"],[1,"outline-btn",2,"margin-top","8px",3,"click"],[1,"outline-btn",3,"click"],[1,"get-started"],[1,"steps"],[1,"step"],[1,"step-number"],[1,"step-content"],[1,"step-btn",3,"click"],[1,"modal-overlay",3,"click"],[1,"modal",3,"click"],[1,"modal-actions"],[1,"btn","cancel",3,"click"],[1,"btn","confirm",3,"click"],[1,"course-list",2,"margin-top","10px","max-height","420px","overflow","auto"],[4,"ngIf"],[1,"modal-actions",2,"margin-top","12px"],["class","course-row",4,"ngFor","ngForOf"],[1,"course-row"],[1,"course-title"],[1,"course-meta"],["target","_blank","rel","noopener",1,"course-link",3,"href"]],template:function(e,i){if(e&1){let s=S();n(0,"div",1)(1,"header",2)(2,"div",3),h(3,Ee,2,1,"h1",4)(4,ze,2,1,"ng-template",null,0,te),n(6,"p"),r(7,"Track your progress and continue your journey"),o()(),n(8,"button",5),f("click",function(){return u(s),g(i.logout())}),n(9,"span"),r(10,"Logout"),o(),n(11,"span",6),r(12,"\u2192"),o()()(),n(13,"section",7)(14,"div",8)(15,"h3"),r(16,"Overall Progress"),o(),n(17,"div",9),r(18),o(),n(19,"div",10),D(20,"div",11),o()(),n(21,"div",8)(22,"h3"),r(23,"Skills Completed"),o(),n(24,"div",9),r(25),o(),n(26,"div",12),r(27,"\u{1F393}"),o()(),n(28,"div",8)(29,"h3"),r(30,"Career Goal"),o(),n(31,"div",9),r(32),o(),n(33,"div",12),r(34,"\u{1F3AF}"),o()(),n(35,"div",8)(36,"h3"),r(37,"Estimated Time"),o(),n(38,"div",9),r(39),o(),n(40,"div",12),r(41,"\u{1F4CA}"),o()()(),n(42,"section",13)(43,"div",14)(44,"div",15)(45,"div",16)(46,"h3"),r(47,"\u{1F4C5} Daily Goals"),o(),n(48,"p",17),r(49,"Set and track your daily learning objectives"),o()(),h(50,Le,5,0,"button",18),o(),h(51,Fe,23,5,"div",19)(52,Ge,6,0,"div",20)(53,Ue,11,1,"div",21)(54,Be,2,1,"div",22)(55,je,12,0,"div",23),o()(),D(56,"app-project-generator",24)(57,"app-achievement-gallery",25),h(58,We,8,1,"section",26)(59,He,17,0,"section",27)(60,Ke,34,0,"section",28),o(),h(61,Qe,11,1,"div",29)(62,et,12,2,"div",29)}if(e&2){let s=J(5);l(3),m("ngIf",i.welcomeMessage)("ngIfElse",s),l(15),C("",i.overallProgress,"%"),l(2),M("width",i.overallProgress,"%"),l(5),b(i.skillsCompleted),l(7),b(i.careerGoal),l(7),b(i.estimatedTime),l(11),m("ngIf",!i.showAddGoal),l(),m("ngIf",i.dailyGoals.length>0),l(),m("ngIf",i.getCompletedGoalsCount()===i.getTotalGoalsCount()&&i.getTotalGoalsCount()>0),l(),m("ngIf",i.showAddGoal),l(),m("ngIf",i.dailyGoals.length>0),l(),m("ngIf",i.dailyGoals.length===0&&!i.showAddGoal),l(),m("userSkills",i.currentUserSkills)("careerGoal",i.careerGoal),l(),m("badges",i.badges),l(),m("ngIf",i.savedRoadmaps.length),l(),m("ngIf",!i.isFirstLogin||i.hasRoadmap),l(),m("ngIf",!i.hasRoadmap&&i.isFirstLogin),l(),m("ngIf",i.showDeleteModal),l(),m("ngIf",i.showCoursesModal)}},dependencies:[R,O,E,ae,ne,oe,re,V,B],styles:['[_nghost-%COMP%]{display:block;width:100vw;min-height:100vh;margin:0;padding:0}.dashboard[_ngcontent-%COMP%]{min-height:100vh;background:linear-gradient(135deg,#071b2e,#0e2a47);color:#fff;font-family:Poppins,sans-serif;padding:40px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:40px}.welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:36px;font-weight:700;margin-bottom:8px}.welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;color:#a9b7c9}.logout-btn[_ngcontent-%COMP%]{padding:14px 28px;background:#2e6bff;border:none;border-radius:10px;color:#fff;font-size:16px;font-weight:600;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-family:Poppins,sans-serif;box-shadow:0 4px 12px #2e6bff59;white-space:nowrap}.logout-btn[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{font-size:18px;font-weight:700;display:inline-flex;align-items:center;transition:transform .3s ease}.logout-btn[_ngcontent-%COMP%]:hover{background:#2558d8;box-shadow:0 6px 18px #2e6bff73;transform:translateY(-2px)}.logout-btn[_ngcontent-%COMP%]:hover   .arrow-icon[_ngcontent-%COMP%]{transform:translate(3px)}.logout-btn[_ngcontent-%COMP%]:active{transform:translateY(0);box-shadow:0 2px 8px #2e6bff4d}.progress-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:40px}.card[_ngcontent-%COMP%]{background:#0f2138;border-radius:16px;padding:24px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid #162E4A;transition:all .3s cubic-bezier(.4,0,.2,1);cursor:default}@media(hover:hover)and (pointer:fine){.card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6)}}.action-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:20px}.large-card[_ngcontent-%COMP%]{padding:28px;border-radius:16px;display:flex;flex-direction:column;gap:18px;transition:all .3s cubic-bezier(.4,0,.2,1)}@media(hover:hover)and (pointer:fine){.large-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6)}}.primary-btn[_ngcontent-%COMP%], .outline-btn[_ngcontent-%COMP%]{padding:14px 20px;border-radius:8px;font-weight:700;cursor:pointer}.primary-btn[_ngcontent-%COMP%]{padding:14px 28px;background:#2e6bff;color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-family:Poppins,sans-serif;box-shadow:0 4px 12px #2e6bff59;white-space:nowrap}.primary-btn[_ngcontent-%COMP%]:hover{background:#2558d8;box-shadow:0 6px 18px #2e6bff73;transform:translateY(-2px)}.primary-btn[_ngcontent-%COMP%]:active{transform:translateY(0);box-shadow:0 2px 8px #2e6bff4d}.outline-btn[_ngcontent-%COMP%]{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.2)}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin-bottom:16px;color:#a9b7c9}.card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:32px;font-weight:700;margin-bottom:12px}.progress-bar[_ngcontent-%COMP%]{width:100%;height:6px;background:#fff3;border-radius:3px;overflow:hidden}.progress-fill[_ngcontent-%COMP%]{height:100%;background:#fff;border-radius:3px;transition:width .3s ease}.card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:24px;opacity:.7}.get-started[_ngcontent-%COMP%]{background:#ffffff1a;border-radius:16px;padding:32px;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2)}.get-started[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:700;margin-bottom:8px}.get-started[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:16px;color:#a9b7c9;margin-bottom:32px}.steps[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;background:#ffffff1a;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.1);transition:all .3s cubic-bezier(.4,0,.2,1)}@media(hover:hover)and (pointer:fine){.step[_ngcontent-%COMP%]:hover{background:#ffffff1f;transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6)}}.step-number[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background:#2e6bff;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;flex-shrink:0}.step-content[_ngcontent-%COMP%]{flex:1}.step-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:600;margin-bottom:4px}.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#a9b7c9}.step-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#fff3;border:1px solid rgba(255,255,255,.3);border-radius:8px;color:#fff;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;flex-shrink:0}.step-btn[_ngcontent-%COMP%]:hover{background:#ffffff4d;color:#fff}@media(max-width:1024px){.progress-cards[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:768px){.dashboard[_ngcontent-%COMP%]{padding:20px}.header[_ngcontent-%COMP%]{flex-direction:column;gap:20px}.progress-cards[_ngcontent-%COMP%]{grid-template-columns:1fr}.step[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.step-btn[_ngcontent-%COMP%]{width:100%}}.saved-roadmaps[_ngcontent-%COMP%]{margin-top:12px}.saved-roadmaps[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:8px 0 12px;font-size:14px;opacity:.95}.saved-roadmaps[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}.saved-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#ffffff0a}.active-badge[_ngcontent-%COMP%]{background:#2e6bff;color:#fff;padding:4px 8px;border-radius:12px;font-weight:700;font-size:12px;box-shadow:0 0 6px #2e6bff80;animation:_ngcontent-%COMP%_blinkGlow 1.2s linear infinite}.saved-top-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.top-delete[_ngcontent-%COMP%]{padding:6px 10px;border-radius:12px;font-size:13px;background:#ffffff08;border:1px solid rgba(255,255,255,.12);color:#fff;cursor:pointer;transition:transform .15s ease,background .15s ease}.top-delete[_ngcontent-%COMP%]:hover{background:#ffffff0f;transform:translateY(-2px)}.icon-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;padding:6px;border-radius:8px;background:#ffffff0a;border:1px solid rgba(255,255,255,.06);color:#fff;cursor:pointer}.icon-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#fff}.icon-btn[_ngcontent-%COMP%]:hover{background:#ffffff14;transform:translateY(-1px)}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:2000}.modal[_ngcontent-%COMP%]{background:#0f2138;color:#fff;border-radius:12px;padding:20px;width:92%;max-width:420px;box-shadow:0 8px 30px #000c;border:1px solid #162E4A}.modal[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 8px;font-size:18px}.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 14px;color:#a9b7c9}.modal-actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-end}.modal[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{cursor:pointer;padding:8px 12px;border-radius:8px;font-weight:700}.modal[_ngcontent-%COMP%]   .btn.cancel[_ngcontent-%COMP%]{background:transparent;border:1px solid rgba(255,255,255,.12);color:#fff}.modal[_ngcontent-%COMP%]   .btn.confirm[_ngcontent-%COMP%]{background:#ff4d4f;border:none;color:#fff}.saved-card-meta[_ngcontent-%COMP%]{font-size:15px;color:#fff}.saved-meta[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-size:12px;opacity:.8;margin-top:4px}.saved-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.link-btn[_ngcontent-%COMP%]{background:transparent;border:1px solid rgba(255,255,255,.12);color:#fff;padding:6px 12px;border-radius:8px;cursor:pointer;font-size:13px;white-space:nowrap;transition:all .2s}.link-btn[_ngcontent-%COMP%]:hover{background:#ffffff0a}.link-btn.active[_ngcontent-%COMP%]{background:#2e6bff;color:#fff;border-color:#2e6bff;font-weight:700}.link-btn.active-btn[_ngcontent-%COMP%]{background:#2e6bff33;color:#2e6bff;border-color:#2e6bff66;font-weight:700}.link-btn.active-btn[_ngcontent-%COMP%]:hover{background:#2e6bff4d}.link-btn.danger[_ngcontent-%COMP%]{background:#ff000014;border-color:#ff00002e}.link-btn.danger[_ngcontent-%COMP%]:hover{background:#ff000026}.saved-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-top:20px;padding:20px}.saved-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;margin-top:12px}.saved-card[_ngcontent-%COMP%]{background:#ffffff08;border-radius:12px;padding:12px;border:1px solid rgba(255,255,255,.06);cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1)}@media(hover:hover)and (pointer:fine){.saved-card[_ngcontent-%COMP%]:hover{background:#ffffff0d;border:3px solid rgba(46,107,255,.6);transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40}}.saved-card[_ngcontent-%COMP%]:active{transform:translateY(0);box-shadow:0 2px 6px #00000026}.saved-card.active-roadmap[_ngcontent-%COMP%]{background:#2e6bff26!important;border:4px solid #2E6BFF!important;box-shadow:0 4px 12px #2e6bff4d!important}.saved-card.active-roadmap[_ngcontent-%COMP%]:hover{border:4px solid #2E6BFF!important;box-shadow:0 6px 20px #2e6bff80!important;transform:translateY(-2px)!important;background:#2e6bff33!important}.saved-card.active-roadmap[_ngcontent-%COMP%]:active{transform:translateY(0)!important;box-shadow:0 2px 8px #2e6bff66!important}.saved-card-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.active-badge[_ngcontent-%COMP%]{background:#2e6bff;color:#fff;padding:4px 8px;border-radius:12px;font-weight:700;font-size:12px}.saved-card-meta[_ngcontent-%COMP%]{font-size:13px;opacity:.85;margin-top:6px}.saved-card-actions[_ngcontent-%COMP%]{margin-top:8px;display:flex;justify-content:flex-start;gap:8px;flex-wrap:wrap}.delete-pill[_ngcontent-%COMP%]{padding:8px 12px;border-radius:10px;background:#ffffff08;border:1px solid rgba(255,255,255,.12);color:#fff;font-weight:700;font-size:13px;cursor:pointer;transition:transform .12s ease,background .12s ease}.delete-pill[_ngcontent-%COMP%]:hover{background:#ffffff0f;transform:translateY(-2px)}@keyframes _ngcontent-%COMP%_blinkGlow{0%{box-shadow:0 0 4px #2e6bff4d}50%{box-shadow:0 0 12px #2e6bff99}to{box-shadow:0 0 4px #2e6bff4d}}.badges[_ngcontent-%COMP%]{margin-bottom:40px;margin-top:40px}.badges[_ngcontent-%COMP%]   .badge-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:12px}.badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background:linear-gradient(180deg,#ffffff0f,#ffffff08);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:14px;text-align:center;color:#fff;display:flex;flex-direction:column;gap:8px;align-items:center;transition:all .3s cubic-bezier(.4,0,.2,1)}@media(hover:hover)and (pointer:fine){.badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #2e6bff40;border:3px solid rgba(46,107,255,.6)}}.badges[_ngcontent-%COMP%]   .badge-icon[_ngcontent-%COMP%]{font-size:30px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:#ffffff0f}.badges[_ngcontent-%COMP%]   .badge-title[_ngcontent-%COMP%]{font-weight:700;font-size:14px}.badges[_ngcontent-%COMP%]   .badge-desc[_ngcontent-%COMP%]{font-size:12px;opacity:.85}.badges[_ngcontent-%COMP%]   .badge-date[_ngcontent-%COMP%]{font-size:11px;opacity:.75}.course-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px}.course-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px;border-radius:8px;background:#ffffff08;border:1px solid rgba(255,255,255,.04)}.course-title[_ngcontent-%COMP%]{font-weight:700;color:#fff}.course-meta[_ngcontent-%COMP%]{font-size:12px;opacity:.85;color:#cfe1ff}.course-link[_ngcontent-%COMP%]{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.08);padding:6px 10px;border-radius:8px;text-decoration:none}.course-link[_ngcontent-%COMP%]:hover{background:#ffffff0a}.daily-goals-section[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px}.goals-card[_ngcontent-%COMP%]{padding:16px;position:relative;overflow:hidden}.goals-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#2e6bff,#2558d8,#1a4ac0);opacity:.6}.daily-goals-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.header-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px}.goals-subtitle[_ngcontent-%COMP%]{display:none}.add-goal-btn[_ngcontent-%COMP%]{padding:8px 16px;background:linear-gradient(135deg,#2e6bff,#2558d8);border:none;border-radius:10px;color:#fff;font-size:13px;font-weight:600;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;gap:6px;box-shadow:0 4px 12px #2e6bff4d}.add-goal-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#2558d8,#1a4ac0);transform:translateY(-2px);box-shadow:0 6px 18px #2e6bff66}.btn-icon[_ngcontent-%COMP%]{font-size:18px;font-weight:700}.goals-progress-container[_ngcontent-%COMP%]{background:#2e6bff0d;border:1px solid rgba(46,107,255,.2);border-radius:10px;padding:12px;margin-bottom:12px}.progress-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.progress-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:#fff}.progress-percentage[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#2e6bff}.progress-bar-wrapper[_ngcontent-%COMP%]{margin-bottom:8px}.progress-bar-bg[_ngcontent-%COMP%]{width:100%;height:10px;background:#ffffff1a;border-radius:5px;overflow:hidden;position:relative}.progress-bar-fill[_ngcontent-%COMP%]{height:100%;background:linear-gradient(90deg,#2e6bff,#2558d8,#39d353);border-radius:6px;transition:width .6s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden;box-shadow:0 0 10px #2e6bff80}.progress-shine[_ngcontent-%COMP%]{position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:_ngcontent-%COMP%_shine 2s infinite}@keyframes _ngcontent-%COMP%_shine{0%{left:-100%}to{left:100%}}.progress-stats[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:2px}.stat-value[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#2e6bff}.stat-label[_ngcontent-%COMP%]{font-size:10px;color:#a9b7c9;text-transform:uppercase;letter-spacing:.5px}.stat-divider[_ngcontent-%COMP%]{color:#a9b7c9;font-size:14px}.celebration-banner[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2e6bff33,#39d35333);border:2px solid rgba(46,107,255,.4);border-radius:10px;padding:10px 12px;margin-bottom:12px;animation:_ngcontent-%COMP%_celebrationPulse 2s ease-in-out infinite}@keyframes _ngcontent-%COMP%_celebrationPulse{0%,to{box-shadow:0 0 #2e6bff66}50%{box-shadow:0 0 20px #2e6bff99}}.celebration-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:12px}.celebration-icon[_ngcontent-%COMP%]{font-size:20px;animation:_ngcontent-%COMP%_bounce .6s ease infinite}@keyframes _ngcontent-%COMP%_bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}.celebration-text[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#fff}.add-goal-form[_ngcontent-%COMP%]{background:#ffffff08;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:12px;margin-bottom:12px;animation:_ngcontent-%COMP%_slideDown .3s ease}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.form-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 8px;font-size:14px;font-weight:600;color:#fff}.goal-input[_ngcontent-%COMP%]{width:100%;padding:10px 12px;background:#ffffff0d;border:2px solid rgba(255,255,255,.1);border-radius:8px;color:#fff;font-size:13px;margin-bottom:10px;transition:all .3s ease}.goal-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#2e6bff;background:#ffffff14;box-shadow:0 0 0 3px #2e6bff1a}.goal-input[_ngcontent-%COMP%]::placeholder{color:#a9b7c9}.goal-form-actions[_ngcontent-%COMP%]{display:flex;gap:8px;justify-content:flex-end}.btn-primary-small[_ngcontent-%COMP%]{padding:8px 16px;background:#2e6bff;border:none;border-radius:8px;color:#fff;font-size:13px;font-weight:600;cursor:pointer;transition:all .3s ease}.btn-primary-small[_ngcontent-%COMP%]:hover{background:#2558d8;transform:translateY(-1px);box-shadow:0 4px 12px #2e6bff4d}.btn-cancel-small[_ngcontent-%COMP%]{padding:8px 16px;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#a9b7c9;font-size:13px;font-weight:600;cursor:pointer;transition:all .3s ease}.btn-cancel-small[_ngcontent-%COMP%]:hover{background:#ffffff1a;color:#fff}.goals-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.goal-item[_ngcontent-%COMP%]{background:#ffffff08;border:2px solid rgba(255,255,255,.1);border-radius:10px;padding:10px 12px;display:flex;align-items:center;gap:10px;transition:all .3s ease;animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translate(-10px)}to{opacity:1;transform:translate(0)}}@media(hover:hover)and (pointer:fine){.goal-item[_ngcontent-%COMP%]:hover{background:#ffffff0d;border-color:#2e6bff4d;transform:translate(4px)}}.goal-item.completed[_ngcontent-%COMP%]{background:#2e6bff1a;border-color:#2e6bff4d}.goal-checkbox-wrapper[_ngcontent-%COMP%]{flex-shrink:0}.goal-checkbox[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer}.goal-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{opacity:0;position:absolute;width:0;height:0}.checkmark[_ngcontent-%COMP%]{width:20px;height:20px;background:#ffffff1a;border:2px solid rgba(255,255,255,.3);border-radius:5px;display:inline-block;position:relative;transition:all .3s ease}.goal-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + .checkmark[_ngcontent-%COMP%]{background:#2e6bff;border-color:#2e6bff}.goal-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + .checkmark[_ngcontent-%COMP%]:after{content:"\\2713";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:16px;font-weight:700}.goal-content[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:4px}.goal-text[_ngcontent-%COMP%]{font-size:13px;color:#fff;font-weight:500;transition:all .3s ease}.goal-text.strikethrough[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.6;color:#a9b7c9}.goal-time[_ngcontent-%COMP%]{font-size:11px;color:#2e6bff;font-weight:600}.delete-goal-btn[_ngcontent-%COMP%]{background:transparent;border:none;color:#a9b7c9;font-size:16px;cursor:pointer;padding:4px 8px;border-radius:6px;transition:all .3s ease;flex-shrink:0}.delete-goal-btn[_ngcontent-%COMP%]:hover{background:#ff00001a;color:#f44;transform:scale(1.1)}.goals-empty[_ngcontent-%COMP%]{text-align:center;padding:20px}.empty-icon[_ngcontent-%COMP%]{font-size:36px;margin-bottom:12px;opacity:.6}.empty-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#fff;margin-bottom:6px}.empty-description[_ngcontent-%COMP%]{font-size:12px;color:#a9b7c9;margin-bottom:16px}.add-goal-btn-small[_ngcontent-%COMP%]{padding:12px 24px;background:linear-gradient(135deg,#2e6bff,#2558d8);border:none;border-radius:12px;color:#fff;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;gap:8px;box-shadow:0 4px 12px #2e6bff4d}.add-goal-btn-small[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#2558d8,#1a4ac0);transform:translateY(-2px);box-shadow:0 6px 18px #2e6bff66}.add-goal-form[_ngcontent-%COMP%]{margin-bottom:12px;padding:12px;background:#ffffff0d;border-radius:8px;border:1px solid rgba(255,255,255,.1)}.goal-input[_ngcontent-%COMP%]{width:100%;padding:8px 12px;border:1px solid rgba(255,255,255,.2);border-radius:6px;background:#ffffff1a;color:#fff;font-size:13px;margin-bottom:8px;outline:none;box-sizing:border-box}.goal-input[_ngcontent-%COMP%]::placeholder{color:#ffffff80}.goal-input[_ngcontent-%COMP%]:focus{border-color:#fff6;background:#ffffff26}.goal-form-actions[_ngcontent-%COMP%]{display:flex;gap:6px;justify-content:flex-end}.btn-primary-small[_ngcontent-%COMP%]{padding:10px 20px;background:#2e6bff;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s ease;display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:Poppins,sans-serif;box-shadow:0 4px 12px #2e6bff59;white-space:nowrap}.btn-primary-small[_ngcontent-%COMP%]:hover{background:#2558d8;box-shadow:0 6px 18px #2e6bff73;transform:translateY(-2px)}.btn-primary-small[_ngcontent-%COMP%]:active{transform:translateY(0);box-shadow:0 2px 8px #2e6bff4d}.btn-cancel-small[_ngcontent-%COMP%]{padding:6px 12px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;transition:all .3s ease}.btn-cancel-small[_ngcontent-%COMP%]:hover{background:#ffffff1a}.goals-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;max-height:200px;overflow-y:auto}.goal-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:#ffffff14;border-radius:8px;border:1px solid rgba(255,255,255,.1);transition:all .3s ease}@media(hover:hover)and (pointer:fine){.goal-item[_ngcontent-%COMP%]:hover{background:#ffffff1f;transform:translateY(-2px);box-shadow:0 4px 12px #2e6bff33;border:3px solid rgba(46,107,255,.6)}}.goal-item.completed[_ngcontent-%COMP%]{opacity:.7;background:#ffffff0d}.goal-checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;flex:1;cursor:pointer}.goal-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:16px;height:16px;cursor:pointer;accent-color:white;flex-shrink:0}.goal-text[_ngcontent-%COMP%]{font-size:13px;font-weight:500;-webkit-user-select:none;user-select:none;line-height:1.4}.goal-item.completed[_ngcontent-%COMP%]   .goal-text[_ngcontent-%COMP%]{text-decoration:line-through;opacity:.7}.delete-goal-btn[_ngcontent-%COMP%]{background:transparent;border:none;color:#fff9;font-size:20px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px;transition:all .3s ease;line-height:1;padding:0;flex-shrink:0}.delete-goal-btn[_ngcontent-%COMP%]:hover{background:#ffffff1a;color:#ffffffe6}.goals-empty[_ngcontent-%COMP%]{text-align:center;padding:16px 12px;opacity:.8}.goals-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px;font-size:13px}.add-goal-btn-small[_ngcontent-%COMP%]{padding:6px 12px;background:#fff3;border:1px solid rgba(255,255,255,.3);border-radius:6px;color:#fff;font-size:12px;font-weight:600;cursor:pointer;transition:all .3s ease}.add-goal-btn-small[_ngcontent-%COMP%]:hover{background:#ffffff4d;color:#fff}']})};export{pe as DashboardComponent};
