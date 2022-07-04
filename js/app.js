/*!
Conway's Game of Life
Copyright (C) 2022 Dr. Nord
*/
import*as h from"./pageViewControl.js";import*as w from"./gameOfLife.js";import*as f from"./common.js";import*as E from"./audio.js";let v=new Uint8Array(1);function e(){window.onresize=t,window.onscroll=o,window.onload=()=>{window.dispatchEvent(new Event("resize")),v.pointer_down=!1,v.pointer_events_cache=[],v.pointer_2touch_diff=-1,v.pointer_1touch_timer=null,v.pointer_down_position={x:0,y:0},v.settings_apply_audio=!1,v.dragenter_counter=0,w.gameOfLife(),function(){screen.orientation.onchange=()=>{window.dispatchEvent(new Event("resize"))},window.onclick=e=>{h.closeUnnecessary(e),E.playDummy(),document.getElementById("game_info").classList.remove("glow"),document.getElementById("lang_switch").classList.remove("glow")},document.getElementById("lang_switch").onclick=h.langSwitch;var e=document.getElementsByClassName("accordion");Array.from(e).forEach(t=>{t.addEventListener("click",()=>{E.click_tap.play0(),t.classList.toggle("active");let e=t.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})});let t=document.getElementById("gamepad_switch");t.user_hover=!1,t.onclick=()=>{h.gamepadSwitch(),I()},t.onpointerover=()=>{t.user_hover=!0,t.classList.contains("pressed")||h.moveMenuToHud()},t.onpointerleave=()=>{t.user_hover=!1,t.classList.contains("pressed")||h.moveMenuToHeader()};let n=document.getElementById("controls_container");n.onpointerover=()=>{!t.classList.contains("pressed")&&document.getElementById("fullwindow").user_fullwindow&&h.moveMenuToHud()},n.onpointerleave=()=>{t.classList.contains("pressed")||h.moveMenuToHeader()};let o=document.getElementById("controls_container_2");o.onpointerover=n.onpointerover,o.onpointerleave=n.onpointerleave;let i=document.getElementById("cogs");i.switch=h.dropmenuSwitch,i.onclick=i.switch,document.getElementById("game_edit_all_spawn_kill").onclick=()=>{E.click_tap.play0();let e=document.getElementById("game_edit_all_spawn_kill");e.children[0].classList.contains("fa-minus-square")?(w.game.fill(0),e.children[0].classList.add("fa-plus-square"),e.children[0].classList.remove("fa-minus-square")):(w.game.fill(1),e.children[0].classList.add("fa-minus-square"),e.children[0].classList.remove("fa-plus-square"))},document.getElementById("play_epoch").onclick=()=>{E.click_tap.play0(),w.game.nextEpoch()},document.getElementById("switch_audio").onclick=h.audioSwitch,document.getElementById("switchLight").onclick=function(){h.lightSwitch(this),w.game.triggerUpdate_colors(),w.game.visualize()},document.getElementById("fullwindow").user_fullwindow=!1,document.getElementById("fullwindow").onclick=()=>{h.fullwindowSwitch(),I()},document.getElementById("fullscreen").onclick=h.fullscreenSwitch,document.onfullscreenchange=h.fullscreenSwitchIcon,document.onscroll=h.settingsButtonTransparency;let l=document.getElementById("mainHeader");f.resizeObserveWithDebounce(l,()=>{h.settingsButtonTransparency()},10),f.resizeObserveWithDebounce(l.children[0],()=>{h.heightControlOnResize(l)},10);let c=document.getElementById("mainFooter");f.resizeObserveWithDebounce(c,()=>{h.heightControlOnResize(c)},10);let d=document.getElementsByClassName("game_edit");d.user_mode="";for(var a of d)a.onclick=h.gameEditSwitch,a.user_game_edit_buttons=d;window.ondrop=e=>{e.preventDefault()},window.ondragover=e=>{e.preventDefault()};let m=document.getElementById("mainContent");function r(e){v.pointer_events_cache=[],0===v.pointer_events_cache.length&&(v.pointer_down=!1),v.pointer_events_cache.length<2&&(v.pointer_2touch_diff=-1),""===d.user_mode&&(document.getElementById("game-field").style.cursor="")}m.ondrop=e=>{e.preventDefault(),m.style.backgroundColor="",v.dragenter_counter=0,e.dataTransfer.items[0].type.includes("image")?(e=e.dataTransfer.items[0].getAsFile(),w.game.loadField(e)):console.log("Please, choose a correct image to drag'n'drop")},m.ondragover=e=>{e.preventDefault()},m.ondragenter=e=>{++v.dragenter_counter&&(m.style.backgroundColor="var(--colorCanvasFontLighter)")},m.ondragleave=e=>{--v.dragenter_counter<=0&&(m.style.backgroundColor="")},m.onpointerdown=t=>{if("game-container"===t.target.id||"game-field"===t.target.id){v.t_down=performance.now(),t.preventDefault(),v.pointer_down=!0,v.pointer_down_position={x:t.clientX,y:t.clientY};let e=v.pointer_events_cache;0===e.filter(e=>e.pointerId===t.pointerId).length&&e.push(t),1===e.length&&(""===d.user_mode?document.getElementById("game-field").style.cursor="grabbing":(k(v.pointer_1touch_timer),v.pointer_1touch_timer=setTimeout(()=>{v.pointer_1touch_timer=null,"game_edit_evolution"===d.user_mode?(E.click_evolve.playR(),w.game.nextEpoch()):w.game.cellSpawn(t,!1,d.user_mode)},100))),2===e.length&&(k(v.pointer_1touch_timer),v.pointer_down_position={x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2})}},window.onpointerup=r,window.onpointercancel=r,window.onpointermove=e=>{var t=w.game,n=document.getElementById("game-field").getBoundingClientRect(),o=e.clientX-n.x,n=e.clientY-n.y,o=Math.ceil(o/t.cell_size),n=Math.ceil(n/t.cell_size);1<=o&&o<=t.cols&&1<=n&&n<=t.rows?w.game.hud.cell_cxr.innerText=o+"x"+n:w.game.hud.cell_cxr.innerText="-"},window.onpointerdown=window.onpointermove,m.onpointermove=n=>{if("game-container"===n.target.id||"game-field"===n.target.id){n.preventDefault();let t=v.pointer_events_cache;for(let e=0;e<t.length;e++)if(t[e].pointerId===n.pointerId){t[e]=n;break}var e,o;v.pointer_down&&1===t.length&&(""===d.user_mode?(k(v.pointer_1touch_timer),B({x:n.clientX,y:n.clientY},v.pointer_down_position,w.game.inst)):"game_edit_evolution"===d.user_mode?(clearTimeout(v.pointer_1touch_timer),E.click_evolve.playRD(),w.game.nextEpoch()):null===v.pointer_1touch_timer&&w.game.cellSpawn(n,!0,d.user_mode)),v.pointer_down&&2===t.length&&(e=Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2)),o={x:(t[0].clientX+t[1].clientX)/2,y:(t[0].clientY+t[1].clientY)/2},0<v.pointer_2touch_diff&&(w.game.cell_size*=e/v.pointer_2touch_diff,w.game.activateZoom(o)),B(o,v.pointer_down_position,w.game.inst),v.pointer_2touch_diff=e)}},document.getElementById("mainContent").onwheel=t=>{t.preventDefault();{let e=w.game;t.deltaY<0?e.cell_size+=.1*e.cell_size:0<t.deltaY&&(e.cell_size-=.1*e.cell_size),e.activateZoom({x:t.clientX,y:t.clientY})}},document.getElementById("hud_info_switch").onclick=h.hudInfoSwitch,document.getElementById("savegame").onclick=h.saveGame,document.getElementById("loadgame").onclick=h.loadGame;let s=document.getElementById("t_epoch");s.oninput=w.game.changeSimTime,s.onchange=()=>{E.click_tap.play0()},s.value=(100-w.game.percentageVal(w.game.dt_epoch_ms,w.game.dt_epoch_min,w.game.dt_epoch_max)).toString(),document.getElementById("speed_faster").onclick=h.sliderUp10percent,document.getElementById("speed_faster").user_bind_slider=s,document.getElementById("speed_slower").onclick=h.sliderDown10percent,document.getElementById("speed_slower").user_bind_slider=s;let g=document.getElementById("zoom_slider");g.oninput=w.game.zoomSlide,g.onchange=()=>{E.click_tap.play0()},g.value=w.game.percentageVal(w.game.cell_size,w.game.cell_size_min,w.game.cell_size_max).toString(),document.getElementById("zoomIn").onclick=()=>{E.click_tap.play0(),w.game.zoomIn()},document.getElementById("zoomOut").onclick=()=>{E.click_tap.play0(),w.game.zoomOut()};let u=document.getElementById("volume_slider");u.oninput=E.changeVolume,u.onchange=()=>{E.click_tap.play0()},u.value=Number(50).toString(),E.changeVolume(),document.getElementById("volume_plus").onclick=h.sliderUp10percent,document.getElementById("volume_plus").user_bind_slider=u,document.getElementById("volume_minus").onclick=h.sliderDown10percent,document.getElementById("volume_minus").user_bind_slider=u,document.getElementById("fit_field").onclick=()=>{E.click_close.play0(),w.game.fitField(),w.game.restart()},document.getElementById("playPause").onclick=()=>{E.click_tap.play0(),w.game.playPause()},document.getElementById("restart").onclick=()=>{E.click_close.play0(),w.game.restart()};let p=document.getElementById("game_settings");function _(){E.click_close.play0(),v.settings_apply_audio=!0,w.game.settingsApply(),w.game.restart()}p.switch=h.gameSettingsModalSwitch.bind(v,w.game,!0),p.onclick=p.switch,document.getElementById("settings_field_width").oninput=h.validateNatural,document.getElementById("settings_field_width").value=w.game.cols,document.getElementById("settings_field_height").oninput=h.validateNatural,document.getElementById("settings_field_height").value=w.game.rows,document.getElementById("settings_dt_epoch_min").oninput=h.validateNatural,document.getElementById("settings_dt_epoch_min").value=w.game.dt_epoch_min,document.getElementById("settings_dt_epoch_max").oninput=h.validateNatural,document.getElementById("settings_dt_epoch_max").value=w.game.dt_epoch_max,document.getElementById("settings_alive_probability").oninput=h.validateFloat,document.getElementById("settings_alive_probability").value=w.game.alive_probability,document.getElementById("settings_apply").onclick=_,document.getElementById("settings_cancel").onclick=()=>{p.switch()},document.getElementById("settings_close").onclick=()=>{p.switch()},document.getElementById("game_settings_modal").onkeydown=e=>{switch(e.key){case"Enter":_();break;case"Escape":p.switch()}};let y=document.getElementById("game_info");y.switch=h.gameInfoModalSwitch,y.onclick=y.switch,document.getElementById("game_info_modal").onclick=()=>{},document.getElementById("info_close").onclick=()=>{y.switch()},document.getElementById("have_fun").onclick=()=>{y.switch()},document.getElementById("game_info_modal").onkeydown=e=>{switch(e.key){case"Enter":case"Escape":y.switch()}}}(),h.langSwitch("EN")}}function t(){var e=parseInt(window.getComputedStyle(document.body).getPropertyValue("--main-width-max")),t=parseInt(window.getComputedStyle(document.body).getPropertyValue("--main-width-min")),n=document.documentElement.clientWidth;e<n?document.body.style.setProperty("--main-foreground-width",e+"px"):n<t?document.body.style.setProperty("--main-foreground-width",t+"px"):document.body.style.setProperty("--main-foreground-width","100%");t=document.documentElement.clientHeight;document.body.style.setProperty("--main-foreground-visible-height",t+"px"),o(),I(),function(){let e=document.getElementById("mainFooter"),t=document.getElementById("footer_info"),n=document.getElementById("footer_buttons"),o=document.getElementById("footer_slides"),i=document.getElementById("footer_slides0"),l=parseFloat(window.getComputedStyle(t).width),c=parseFloat(window.getComputedStyle(n.children[0]).width),d=parseFloat(window.getComputedStyle(o.children[0]).width),a=parseFloat(window.getComputedStyle(e.children[0]).width)-parseFloat(window.getComputedStyle(e.children[0]).paddingLeft)-parseFloat(window.getComputedStyle(e.children[0]).paddingRight);t.style.flexGrow=a<l+c+d?Number(1).toString():"";let m=a-c-2*l;m<0&&(m=0);let r;r=d<=l?l-d:0;i.style.flexGrow=r.toString(),n.style.flexGrow=m.toString()}()}function o(){let e=document.getElementById("mainVisibleWindow");e.style.top=-window.scrollY+"px",e.style.left=-window.scrollX+"px"}function I(){let e=document.getElementById("game_title"),t=document.getElementById("gamepad_area_left"),n=document.getElementById("gamepad_area_right"),o=document.getElementById("controls_container");var i=document.getElementsByClassName("headerMenuElems"),l=parseFloat(window.getComputedStyle(i[0]).width),c=parseFloat(window.getComputedStyle(i[1]).width),d=l+c,i=Math.max(l,c),l=parseFloat(window.getComputedStyle(document.getElementById("game-container")).width),c=parseFloat(window.getComputedStyle(document.getElementById("gamepad_switch")).width);d+2*c<=l?(o.style.flexDirection="row",t.style.width="0",n.style.width="0"):d+c<=l?(o.style.flexDirection="row",t.style.width=Number(l-c-d).toString()+"px",n.style.width=Number(c).toString()+"px"):i+2*c<=l?(o.style.flexDirection="column",t.style.width="0",n.style.width="0"):i+c<=l?(o.style.flexDirection="column",t.style.width=Number(l-c-i).toString()+"px",n.style.width=Number(c).toString()+"px"):(o.style.flexDirection="row",t.style.width="0",n.style.width="0"),document.getElementById("gamepad_switch").classList.contains("pressed")?(e.style.paddingLeft=t.style.width,e.style.paddingRight=n.style.width):(e.style.paddingLeft="0",e.style.paddingRight="0")}function B(e,t,n){var o=e.x-t.x,i=e.y-t.y;n.update(),n.scroll({x:n.scroll().position.x-o,y:n.scroll().position.y-i}),t.x=e.x,t.y=e.y}function k(e){clearTimeout(e)}export{e as app};