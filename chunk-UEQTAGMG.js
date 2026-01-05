import{I as n}from"./chunk-3A7RIER7.js";var a=class r{showAlert(t,e="Validation Error"){alert(`${e}

${t}`)}validateEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}validatePassword(t){return t.length>=6}validateMaxLength(t,e){return t.length<=e}validateRequired(t){return t.trim().length>0}static \u0275fac=function(e){return new(e||r)};static \u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"})};export{a};
