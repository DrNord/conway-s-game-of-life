/*!
Conway's Game of Life
Copyright (C) 2021 Dr. Nord
*/
"use strict";import*as s from"./webGl.js";import*as a from"./common.js";let d=null;function e(){console.log("Initialize the Game of Life");var e=document.getElementById("game-canvas");d=new t(e),d.w_engine.postMessage({cmd:"init",rows:d.rows,cols:d.cols,alive_probability:d.alive_probability}),d.play(),d.w_engine.onmessage=e=>{var t=e.data;switch(t.cmd){case"data":d.fieldState.cells_alive=t.cells_alive,d.fieldState.data=t.field,d.fieldState.epoch_counter=t.epoch_counter,d.visualize();break;case"busy":d.w_engine.ready=!1;break;case"ready":d.w_engine.ready=!0;break;default:console.log("From worker-engine: command '"+t.cmd+"' is not supported.")}},d.w_timer_visualize.onmessage=()=>{d.w_engine.postMessage({cmd:"get-data"})},d.w_visual.onmessage=e=>{e=e.data;d.drawEngine.ctx.gl.vertices=e.vertices,d.drawEngine.cells_alive[0]=e.quantity,e.cell_size>=d.cell_size_make_gap?d.drawEngine.cell_size=Math.floor(e.cell_size*d.cell_size_gap_factor):d.drawEngine.cell_size=e.cell_size,d.drawEngine.rgba_color=d.cell_color_rgba,d.drawEngine.draw(),d.w_timer_visualize.postMessage({cmd:"ready"})}}function n(){let e=d;e.w_timer_visualize.run?e.pause():e.play()}function o(){let e=d;e.cols_new=Math.floor((e.container.clientWidth-4-e.cell_size)/e.cell_size),e.rows_new=Math.floor((e.container.clientHeight-4-e.cell_size)/e.cell_size),e.restart()}function c(){let e=d;e.rows=e.rows_new,e.cols=e.cols_new,e.alive_probability=e.alive_probability_new,e.setApplyViewport(),e.w_engine.postMessage({cmd:"init",rows:e.rows,cols:e.cols,alive_probability:e.alive_probability}),e.w_engine.postMessage({cmd:"get-data"})}function _(){let e=d;e.cell_size<e.cell_size_max&&(e.cell_size++,e.activateZoom())}function r(){let e=d;e.cell_size>e.cell_size_min&&(e.cell_size--,e.activateZoom())}function m(){let e=d;var t=e.getSliderPosition(this);e.cell_size=e.scaleVal(t,e.cell_size_min,e.cell_size_max),p()}function p(){let e=d;document.getElementById("zoom_slider").value=e.percentageVal(e.cell_size,e.cell_size_min,e.cell_size_max).toString();var t=parseInt(e.field.style.width),i=parseInt(e.field.style.height),l=e.canvas.width,s=e.canvas.height,a=(e.inst.scroll().position.x+l/2)/t,n=(e.inst.scroll().position.y+s/2)/i;e.setApplyViewport();l=parseInt(e.field.style.width),t=parseInt(e.field.style.height),s=e.canvas.width,i=e.canvas.height;e.inst.scroll({x:a*l-s/2+.5,y:n*t-i/2+.5})}function g(e){var t=Number(e.min),i=Number(e.max);return Number(e.value)/(i-t)}function h(e,t,i){return e*(i-t)+t}function u(){let e=d;var t=1-e.getSliderPosition(this);e.dt_epoch_ms=e.scaleVal(t,e.dt_epoch_min,e.dt_epoch_max),e.w_engine.postMessage({cmd:"set_dt",dt_ms:e.dt_epoch_ms})}function w(){let e=d,t=document.getElementById("settings_field_width"),i=Number(t.value);i<2&&(i=2),t.value=i.toString(),e.cols_new=i;let l=document.getElementById("settings_field_height"),s=Number(l.value);s<2&&(s=2),l.value=s.toString(),e.rows_new=s;let a=document.getElementById("settings_alive_probability"),n=Number(a.value);n<0&&(n=0),1<n&&(n=1),a.value=n.toString(),e.alive_probability_new=n;let o=document.getElementById("settings_dt_epoch_min"),c=Number(o.value);c<0&&(c=0),o.value=c.toString(),e.dt_epoch_min_new=c;let _=document.getElementById("settings_dt_epoch_max"),r=Number(_.value);r<=c&&(r=c+500),_.value=r.toString(),e.dt_epoch_max_new=r,e.dt_epoch_min=e.dt_epoch_min_new,e.dt_epoch_max=e.dt_epoch_max_new,e.dt_epoch_ms>e.dt_epoch_max&&(e.dt_epoch_ms=e.dt_epoch_max),e.dt_epoch_ms<e.dt_epoch_min&&(e.dt_epoch_ms=e.dt_epoch_min),document.getElementById("t_epoch").value=(100-e.percentageVal(e.dt_epoch_ms,e.dt_epoch_min,e.dt_epoch_max)).toString(),e.w_engine.postMessage({cmd:"set_dt",dt_ms:e.dt_epoch_ms})}function v(){let e=d;e.settingsApply(),e.restart(),document.getElementById("game_settings").switch()}function t(e){let t=this;function i(){t.inst.update(),t.scroll_x=-t.inst.scroll().position.x,t.scroll_y=-t.inst.scroll().position.y,t.w_timer_visualize.run||t.visualize()}function l(){t.setViewport(),i()}t.container=document.getElementById("game-container"),t.viewport=document.getElementById("game-viewport"),t.scroll=document.getElementById("game-scroll"),t.field=document.getElementById("game-field"),t.cell_size=5,t.cell_size_max=50,t.cell_size_min=1,t.cell_size_make_gap=5,t.cell_size_gap_factor=.9,t.cell_color_rgba=[1,1,1,1],t.cols=Math.floor((t.container.clientWidth-4-t.cell_size)/t.cell_size),t.rows=Math.floor((t.container.clientHeight-4-t.cell_size)/t.cell_size),t.cols_new=t.cols,t.rows_new=t.rows,t.dt_epoch_ms=0,t.dt_epoch_min=0,t.dt_epoch_min_new=t.dt_epoch_min,t.dt_epoch_max=500,t.dt_epoch_max_new=t.dt_epoch_max,t.dt_visual_ms=1e3/60,t.dt_resize_ms=1,t.alive_probability=.3,t.alive_probability_new=t.alive_probability,t.canvas=e,t.canvas.height=0,t.canvas.width=0,t.scroll_x=0,t.scroll_y=0,t.vertices=new Float32Array(t.rows*t.cols*2).fill(0),t.drawEngine=new s.WebGl_init(t.canvas,t.vertices,t.cell_size),t.fieldState=new Array(1).fill(0),t.fieldState.rows=t.rows+2,t.fieldState.cols=t.cols+2,t.fieldState.cells_alive=0,t.fieldState.epoch_counter=0,t.fieldState.data=new Uint8Array((t.rows+2)*(t.cols+2)+4).fill(0),t.w_engine=new Worker("./js/worker-engine.js"),t.w_visual=new Worker("./js/worker-visual.js"),t.w_timer_visualize=new Worker("./js/worker-timer.js"),t.w_timer_visualize.run=!1,t.inst=OverlayScrollbars(document.getElementById("game-scroll"),{className:"os-theme-light",scrollbars:{clickScrolling:!0},callbacks:{onScroll:i}}),t.changeSimTime=u,t.fitFieldRestart=o,t.playPause=n,t.restart=c,t.nextEpoch=y,t.zoomIn=_,t.zoomOut=r,t.zoomSlide=m,t.settingsApply=w,t.settingsApplyRestart=v,t.percentageVal=(e,t,i)=>(e-t)/(i-t)*100,t.play=E,t.pause=S,t.runGame=f,t.runVisual=z,t.stopVisual=x,t.pauseGame=b,t.visualize=M,t.setViewport=function(){var e=parseFloat(window.getComputedStyle(t.viewport).borderLeftWidth);t.field.style.width=t.cols*t.cell_size+"px",t.field.style.height=t.rows*t.cell_size+"px",t.viewport.style.width=Math.min(Math.floor(t.container.clientWidth-2),parseFloat(t.field.style.width)+2*e)+"px",t.viewport.style.height=Math.min(Math.floor(t.container.clientHeight-2),parseFloat(t.field.style.height)+2*e)+"px",t.scroll.style.width=t.viewport.clientWidth+"px",t.scroll.style.height=t.viewport.clientHeight+"px",t.canvas.width=t.viewport.clientWidth,t.canvas.height=t.viewport.clientHeight,t.drawEngine.ctx.gl.viewport(0,0,t.canvas.width,t.canvas.height)},t.setApplyViewport=l,t.activateZoom=p,t.getSliderPosition=g,t.scaleVal=h,a.resizeObserve(t.container,l,t.dt_resize_ms),t.setApplyViewport()}function y(){let e=d;e.w_engine.postMessage({cmd:"next_epoch"}),e.w_engine.postMessage({cmd:"get-data"})}function f(){this.w_engine.postMessage({cmd:"start",dt_ms:this.dt_epoch_ms}),this.runVisual()}function z(){this.w_timer_visualize.postMessage({cmd:"start",dt_ms:this.dt_visual_ms}),this.w_timer_visualize.run=!0,this.w_timer_visualize.postMessage({cmd:"ready"})}function b(){this.w_engine.postMessage({cmd:"stop"}),this.stopVisual()}function x(){this.w_timer_visualize.postMessage({cmd:"stop"}),this.w_timer_visualize.run=!1}function E(){if(this.runGame(),this.w_timer_visualize.run){let e=document.getElementById("playPause").getElementsByTagName("i")[0];e.classList.remove("fa-play-circle"),e.classList.add("fa-pause-circle")}}function S(){if(this.pauseGame(),!this.w_timer_visualize.run){let e=document.getElementById("playPause").getElementsByTagName("i")[0];e.classList.remove("fa-pause-circle"),e.classList.add("fa-play-circle")}}function M(){var e=this;e.w_visual.postMessage({cmd:"set_dimensions",rows:e.rows,cols:e.cols,cell_size:e.cell_size,canvas_width:e.canvas.width,canvas_height:e.canvas.height,scroll_x:e.scroll_x,scroll_y:e.scroll_y}),e.w_visual.postMessage({cmd:"get_webgl_coordinates",field:e.fieldState.data})}export{d as game,e as gameOfLife};