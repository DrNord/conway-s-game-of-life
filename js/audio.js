import*as t from"./common.js";import*as e from"./pageViewControl.js";class o extends Audio{constructor(e){super(e);let o=this;o.onloadeddata=()=>{o.debounce_ms=50,o.playRD=t.debounce(()=>{this.playR()},this.debounce_ms)}}play0(){this.currentTime=0,this.play().then(()=>{})}playR(){let e=this.cloneNode(!1);e.muted=this.muted,e.volume=this.volume,e.currentTime=0,e.play().then(()=>{})}}let d=new Set;var a=new o("audio/notify-01.ogg");d.add(a);var n=new o("audio/beep-C5-50ms.ogg");d.add(n);var u=new o("audio/bubble_C2-C3-60msSine.ogg");d.add(u);var i=new o("audio/button-C5-200ms.ogg");d.add(i);var m=new o("audio/bubble_C3-C2-60msSine.ogg");d.add(m);var l=new o("audio/beep-C5-50ms.ogg");function s(){d.forEach(e=>e.muted=!0)}function r(){d.forEach(e=>e.muted=!1)}function c(){let o=e.getSliderPosition(document.getElementById("volume_slider"));d.forEach(e=>e.volume=o)}d.add(l);let g=new Audio("audio/dummy.ogg");g.onloadeddata=()=>{g.loop=!0,g.muted=!0,g.volume=0};export{a as unfold,n as click_tap,u as click_spawn,i as click_close,m as click_evolve,l as click_cancel,s as audioMute,r as audioUnmute,c as changeVolume,g as dummy};