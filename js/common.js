/*!
Copyright (C) 2021 Dr. Nord
*/
function i(t,i){let n;return function(){const e=this,r=arguments;clearTimeout(n),n=setTimeout(()=>t.apply(e,r),i)}}function e(e,r){let t=!1;return function(){t||(e.apply(this,arguments),t=!0,setTimeout(()=>t=!1,r))}}function r(e,r,t){void 0!==ResizeObserver?(e.resize_observer=new ResizeObserver(i(r,t)),e.resize_observer.observe(e)):e.onresize=i(r,t)}export{i as debounceCancelling,e as debounce,r as resizeObserveWithDebounce};