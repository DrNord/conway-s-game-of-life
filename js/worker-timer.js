/*!
Copyright (C) 2021 Dr. Nord
*/
"use strict";let s=new function(t){var e=this;e.dt=t,e.prev=0,e.now=0,e.dst_is_ready=!1,e.timer_handle=null,e.start=i,e.proceed=o,e.tick=a,e.stop=r,e.postMsg=n}(1e3);function r(){null!=this.timer_handle&&(clearTimeout(this.timer_handle),this.timer_handle=null)}function i(){let t=this;t.stop(),t.prev=performance.now(),t.postMsg(t.prev),t.timer_handle=setTimeout(()=>t.tick(),t.dt)}function o(){let t=this;t.stop(),t.prev=performance.now(),t.timer_handle=setTimeout(()=>t.tick(),t.dt)}function a(){this.now=performance.now(),this.postMsg(this.now);let t=this;var e=t.now-(t.prev+t.dt);t.timer_handle=setTimeout(()=>t.tick(),t.dt-e),t.prev+=t.dt}function n(t){this.dst_is_ready&&(postMessage({now:t}),this.dst_is_ready=!1)}self.onmessage=t=>{var e=t.data;if(void 0!==e.dt_ms&&(s.dt=e.dt_ms,s.timer_handle&&s.proceed()),void 0!==e.cmd)switch(e.cmd){case"act":s.postMsg(performance.now());break;case"ready":s.dst_is_ready=!0;break;case"start":s.start();break;case"stop":s.stop();break;case"set_dt":break;default:console.log("Worker-timer: command '"+e.cmd+"' is not supported.")}};