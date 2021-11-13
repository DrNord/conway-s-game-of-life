/*!
Copyright (C) 2021 Dr. Nord
*/
function i(s,i){let o;return function(){const e=this,r=arguments;clearTimeout(o),o=setTimeout(()=>s.apply(e,r),i)}}function e(e,r,s){void 0!==ResizeObserver?(e.resize_observer=new ResizeObserver(i(r,s)),e.resize_observer.observe(e)):e.onresize=i(r,s)}export{i as debounceCancelling,e as resizeObserve};