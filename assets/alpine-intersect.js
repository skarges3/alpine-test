(()=>{function l(e){e.directive("intersect",(t,{value:i,expression:o,modifiers:n},{evaluateLater:r,cleanup:u})=>{let s=r(o),a={rootMargin:h(n),threshold:p(n)},c=new IntersectionObserver(d=>{d.forEach(f=>{f.isIntersecting!==(i==="leave")&&(s(),n.includes("once")&&c.disconnect())})},a);c.observe(t),u(()=>{c.disconnect()})})}function p(e){return e.includes("full")?.99:e.includes("half")?.5:0}function x(e){let t=e.match(/^(-?[0-9]+)(px|%)?$/);return t?t[1]+(t[2]||"px"):void 0}function h(e){let t="margin",i="0px 0px 0px 0px",o=e.indexOf(t);if(o===-1)return i;let n=[];for(let r=1;r<5;r++)n.push(x(e[o+r]||""));return n=n.filter(r=>r!==void 0),n.length?n.join(" ").trim():i}document.addEventListener("alpine:init",()=>{window.Alpine.plugin(l)});})();