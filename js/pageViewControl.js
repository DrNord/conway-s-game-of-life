/*!
Copyright (C) 2021 Dr. Nord
*/
import*as a from"./audio.js";import*as e from"./gameOfLife.js";let s={text:null},l={text:null},n=document.getElementsByClassName("translatable");function o(t,e){null===t.text?fetch("text_"+e+".json").then(e=>e.json()).then(e=>{t.text=e,i(t.text)}):i(t.text)}function i(t){Array.from(n).forEach(e=>{void 0!==t[e.id]&&("string"==typeof t[e.id]?e.innerHTML=t[e.id]:(null!==t[e.id].innerHTML&&(e.innerHTML=t[e.id].innerHTML),e.title=t[e.id].title))})}function t(e){a.click_tap.play0();let t=document.getElementById("lang_text"),n=document.getElementById("gi_h2-3-parent");switch("string"==typeof e&&(t.innerText=e),t.innerText){case"RU":t.innerText="EN",document.documentElement.lang="ru-RU",n.style.maxWidth="calc(21 * var(--main-font-size))",o(s,"ru");break;case"EN":t.innerText="RU",document.documentElement.lang="en-US",n.style.maxWidth="calc(14 * var(--main-font-size))",o(l,"en");break;default:console.log(t.innerText+" is not supported")}}function d(){let e=this.user_bind_slider;a.click_tap.play0();let t=Number(parseInt(e.value)+10);t>Number(e.max)&&(t=Number(e.max)),e.value=t.toString(),e.dispatchEvent(new Event("input"))}function m(){let e=this.user_bind_slider;a.click_tap.play0();let t=Number(parseInt(e.value)-10);t<Number(e.min)&&(t=Number(e.min)),e.value=t.toString(),e.dispatchEvent(new Event("input"))}function c(e){var t=parseInt(e.min),n=parseInt(e.max);return parseInt(e.value)/(n-t)}function u(){a.click_tap.play0();let e=document.getElementById("gamepad_switch");e.classList.contains("pressed")?(e.classList.remove("pressed"),e.user_hover&&document.getElementById("fullwindow").user_fullwindow||r(),document.getElementById("fullwindow").user_fullwindow||H(e)):(A(e),e.classList.add("pressed"),g())}function r(){let e=document.getElementById("controls_container");H(e);let t=e.getElementsByClassName("menuElems");var n=parseFloat(window.getComputedStyle(document.body).getPropertyValue("--main-transition-time"));e.user_timeout=setTimeout(()=>{Array.from(t).forEach(e=>{document.getElementById("menu_title").appendChild(e),Array.from(e.getElementsByClassName("button")).forEach(e=>{e.classList.remove("halfOpaque")})})},1e3*n);let s=document.getElementById("controls_container_2");H(s);let l=s.getElementsByClassName("movableFooterMenuElem");s.user_timeout=setTimeout(()=>{Array.from(l).forEach(e=>{document.getElementById("dropMenu").appendChild(e),Array.from(e.getElementsByClassName("button")).forEach(e=>{e.classList.remove("halfOpaque")})})},1e3*n)}function g(){let t=document.getElementById("controls_container");clearTimeout(t.user_timeout),A(document.getElementById("controls_container"));var e=document.getElementById("menu_title").getElementsByClassName("menuElems");Array.from(e).forEach(e=>{t.appendChild(e),Array.from(e.getElementsByClassName("button")).forEach(e=>{e.classList.add("halfOpaque")})});let n=document.getElementById("controls_container_2");clearTimeout(n.user_timeout),A(document.getElementById("controls_container_2"));e=document.getElementById("dropMenu").getElementsByClassName("movableFooterMenuElem");Array.from(e).forEach(e=>{n.appendChild(e),Array.from(e.getElementsByClassName("button")).forEach(e=>{e.classList.add("halfOpaque")})})}function y(e){a.click_tap.play0();let t=document.body.classList,n=e.getElementsByTagName("i")[0],s=document.getElementById("game-scroll");t.contains("colorsDarkMode")?(t.add("colorsLightMode"),t.remove("colorsDarkMode"),n.classList.add("fa-moon"),n.classList.remove("fa-sun"),s.classList.add("os-theme-dark"),s.classList.remove("os-theme-light")):(t.add("colorsDarkMode"),t.remove("colorsLightMode"),n.classList.add("fa-sun"),n.classList.remove("fa-moon"),s.classList.add("os-theme-light"),s.classList.remove("os-theme-dark"))}function p(){let e=document.getElementById("cogs"),t=document.getElementById("dropMenu");e.classList.contains("pressed")&&("flex"===document.getElementById("game_settings_modal_container").style.display||"flex"===document.getElementById("game_info_modal_container").style.display)||a.click_tap.play0(),t.classList.contains("visible")?(H(t),e.classList.remove("pressed")):(A(t),e.classList.add("pressed"))}function f(){a.click_tap.play0();let e=document.getElementById("hud-info");var t=this;t.classList.contains("pressed")?(t.classList.remove("pressed"),e.style.display="none"):(t.classList.add("pressed"),e.style.display="")}function _(){a.click_tap.play0(),e.game.saveField()}function E(){a.click_tap.play0(),e.game.input.click()}function h(e){let t=document.getElementById("settingsSection"),n=document.getElementById("game_settings_modal");var s=document.getElementById("game_settings_modal_container");let l=document.getElementById("game_settings"),a=document.getElementById("game_info_modal");var o=document.getElementById("game_info_modal_container");let i=document.getElementById("game_info");t.contains(e.target)||document.getElementById("dropMenu").classList.contains("visible")&&document.getElementById("cogs").switch(),n.contains(e.target)||l.contains(e.target)||"flex"===s.style.display&&document.getElementById("game_settings").switch(),a.contains(e.target)||i.contains(e.target)||"flex"===o.style.display&&document.getElementById("game_info").switch()}function B(){a.click_tap.play0();let e=document.getElementById("game-field");var t=this;t.classList.contains("pressed")?(t.classList.remove("pressed"),t.user_game_edit_buttons.user_mode="",e.style.cursor="",document.getElementById("hud-info").style.opacity=""):(""!==t.user_game_edit_buttons.user_mode&&document.getElementById(t.user_game_edit_buttons.user_mode).classList.remove("pressed"),t.classList.add("pressed"),t.user_game_edit_buttons.user_mode=t.id,e.style.cursor="crosshair","game_edit_evolution"!==t.id?document.getElementById("hud-info").style.opacity="70%":document.getElementById("hud-info").style.opacity="")}function v(){a.click_tap.muted=!1;this.classList.contains("pressed")?(this.classList.remove("pressed"),a.audioUnmute(),a.click_tap.playR()):(this.classList.add("pressed"),a.audioMute())}function I(e){let t=document.getElementById("game_settings_modal_container");"flex"!==t.style.display?(a.unfold.play0(),document.getElementById("settings_field_width").value=e.cols.toString(),document.getElementById("settings_field_height").value=e.rows.toString(),t.style.display="flex",document.getElementById("game_settings_modal").focus(),document.getElementById("dropMenu").classList.contains("visible")&&document.getElementById("cogs").switch()):(this.settings_apply_audio||a.click_cancel.play0(),this.settings_apply_audio=!1,t.style.display="none")}function L(){let e=document.getElementById("game_info_modal_container");var t;"flex"!==e.style.display?(a.unfold.play0(),e.style.display="flex",document.getElementById("game_info_modal").focus(),document.getElementById("dropMenu").classList.contains("visible")&&document.getElementById("cogs").switch()):(a.click_cancel.play0(),e.style.display="none",t=document.getElementsByClassName("accordion"),Array.from(t).forEach(e=>{e.classList.remove("active");let t=e.nextElementSibling;t.style.maxHeight=null}))}function x(){a.click_tap.play0(),(null==document.fullscreenElement?document.documentElement.requestFullscreen():document.exitFullscreen()).then(()=>{})}function b(){let e=document.getElementById("fullscreen").getElementsByTagName("i")[0].classList;null==document.fullscreenElement?(e.add("fa-expand"),e.remove("fa-compress")):(e.add("fa-compress"),e.remove("fa-expand"))}function w(e){e=e.data;let t=new RegExp("^(\\d+)$");t.test(this.value)||null==e||(this.value=this.value.slice(0,this.value.length-e.length))}function k(e){e=e.data;let t=new RegExp("^(\\d+)[.]?(\\d*)$","gm");t.test(this.value)||null==e||(this.value=this.value.slice(0,this.value.length-e.length))}function N(){var e=document.getElementById("mainHeader").offsetHeight/2;let t=document.getElementById("gamepad_switch");document.body.scrollTop>=e||document.documentElement.scrollTop>=e?t.classList.add("halfOpaque"):t.classList.remove("halfOpaque")}function T(){a.click_tap.play0();let e=document.getElementById("fullwindow"),t=e.getElementsByTagName("i")[0];var n="fa-expand-alt",s="fa-compress-alt";let l=document.getElementById("gamepad_switch");e.user_fullwindow?(e.user_fullwindow=!1,S(document.getElementById("mainHeader")),S(document.getElementById("mainFooter")),t.classList.add(n),t.classList.remove(s),l.classList.contains("pressed")||(H(l),r())):(e.user_fullwindow=!0,F(document.getElementById("mainHeader")),F(document.getElementById("mainFooter")),t.classList.add(s),t.classList.remove(n),A(l))}function M(e){0!==parseInt(e.style.height)&&(e.style.height=C(e))}function C(e){return e.getElementsByTagName("div")[0].scrollHeight+"px"}function A(e){e.classList.remove("invisible"),e.classList.add("visible")}function H(e){e.classList.remove("visible"),e.classList.add("invisible")}function F(e){e.style.height="0"}function S(e){e.style.height=C(e)}export{t as langSwitch,d as sliderUp10percent,m as sliderDown10percent,c as getSliderPosition,u as gamepadSwitch,r as moveMenuToHeader,g as moveMenuToHud,y as lightSwitch,p as dropmenuSwitch,f as hudInfoSwitch,_ as saveGame,E as loadGame,h as closeUnnecessary,B as gameEditSwitch,v as audioSwitch,I as gameSettingsModalSwitch,L as gameInfoModalSwitch,x as fullscreenSwitch,b as fullscreenSwitchIcon,w as validateNatural,k as validateFloat,N as settingsButtonTransparency,T as fullwindowSwitch,M as heightControlOnResize,C as getContentHeight};