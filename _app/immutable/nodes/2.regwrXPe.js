import{a as C,t as E}from"../chunks/disclose-version.CW1F8DPW.js";import"../chunks/legacy.QFATHhyM.js";import{E as H,Z as K,_ as q,$ as G,j as J,J as M,a0 as Y,a1 as Z,a2 as g,a3 as U,D as $,F as O,I as V,w as Q,y as X,a4 as tt,l as T,z as b,B as _,A as w,v as et,a5 as st,a6 as at}from"../chunks/runtime.CszH60Yz.js";import{i as z}from"../chunks/if.VWGTYLop.js";import{a as rt}from"../chunks/render.BZ5rSyJy.js";import{i as lt}from"../chunks/lifecycle.BBeJNjRZ.js";import{o as nt}from"../chunks/index-client.CxaX_rCm.js";/* empty css                    */const it=()=>performance.now(),h={tick:e=>requestAnimationFrame(e),now:()=>it(),tasks:new Set};function P(){const e=h.now();h.tasks.forEach(t=>{t.c(e)||(h.tasks.delete(t),t.f())}),h.tasks.size!==0&&h.tick(P)}function ot(e){let t;return h.tasks.size===0&&h.tick(P),{promise:new Promise(n=>{h.tasks.add(t={c:e,f:n})}),abort(){h.tasks.delete(t)}}}function I(e,t){e.dispatchEvent(new CustomEvent(t))}function pt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function N(e){const t={},n=e.split(";");for(const s of n){const[i,l]=s.split(":");if(!i||l===void 0)break;const d=pt(i.trim());t[d]=l.trim()}return t}const ct=e=>e;function A(e,t,n,s){var i=(e&U)!==0,l="in",d,u=t.inert,a,v;function x(){var c=V,m=M;$(null),O(null);try{return d??(d=n()(t,(s==null?void 0:s())??{},{direction:l}))}finally{$(c),O(m)}}var f={is_global:i,in(){t.inert=u,a==null||a.abort(),I(t,"introstart"),a=R(t,x(),v,1,()=>{I(t,"introend"),a==null||a.abort(),a=d=void 0})},out(c){{c==null||c(),d=void 0;return}},stop:()=>{a==null||a.abort()}},o=M;if((o.transitions??(o.transitions=[])).push(f),rt){var p=i;if(!p){for(var r=o.parent;r&&r.f&H;)for(;(r=r.parent)&&!(r.f&K););p=!r||(r.f&q)!==0}p&&G(()=>{J(()=>f.in())})}}function R(e,t,n,s,i){if(Y(t)){var l,d=!1;return Z(()=>{if(!d){var c=t({direction:"in"});l=R(e,c,n,s,i)}}),{abort:()=>{d=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(!(t!=null&&t.duration))return i(),{abort:g,deactivate:g,reset:g,t:()=>s};const{delay:u=0,css:a,tick:v,easing:x=ct}=t;var f=[];if(v&&v(0,1),a){var o=N(a(0,1));f.push(o,o)}var p=()=>1-s,r=e.animate(f,{duration:u});return r.onfinish=()=>{var c=1-s,m=s-c,j=t.duration*Math.abs(m),S=[];if(j>0){if(a)for(var F=Math.ceil(j/16.666666666666668),k=0;k<=F;k+=1){var B=c+m*x(k/F),W=a(B,1-B);S.push(N(W))}p=()=>{var y=r.currentTime;return c+m*x(y/j)},v&&ot(()=>{if(r.playState!=="running")return!1;var y=p();return v(y,1-y),!0})}r=e.animate(S,{duration:j,fill:"forwards"}),r.onfinish=()=>{p=()=>s,v==null||v(s,1-s),i()}},{abort:()=>{r&&(r.cancel(),r.effect=null,r.onfinish=g)},deactivate:()=>{i=g},reset:()=>{},t:()=>p()}}const vt=e=>e;function dt(e){const t=e-1;return t*t*t+1}function D(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function L(e,{delay:t=0,duration:n=400,easing:s=vt}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:s,css:l=>`opacity: ${l*i}`}}function ut(e,{delay:t=0,duration:n=400,easing:s=dt,x:i=0,y:l=0,opacity:d=0}={}){const u=getComputedStyle(e),a=+u.opacity,v=u.transform==="none"?"":u.transform,x=a*(1-d),[f,o]=D(i),[p,r]=D(l);return{delay:t,duration:n,easing:s,css:(c,m)=>`
			transform: ${v} translate(${(1-c)*f}${o}, ${(1-c)*p}${r});
			opacity: ${a-x*m}`}}var ft=E('<div class="space-y-8 svelte-n3pjl6"><div class="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm mb-4 shadow-lg svelte-n3pjl6"><span class="mr-2 inline-block w-2 h-2 bg-text-primary rounded-full animate-pulse svelte-n3pjl6"></span> Coming Soon</div> <div class="flex items-center gap-4 justify-center svelte-n3pjl6"><h1 class="text-7xl font-bold text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text svelte-n3pjl6">yaerguOS</h1> <img src="/lilypad.png" alt="lilypad" class="h-24 w-auto animate-float svelte-n3pjl6" style="animation: float 3s ease-in-out infinite;"></div> <div class="max-w-2xl mx-auto space-y-4 svelte-n3pjl6"><p class="text-xl text-white/90 svelte-n3pjl6">A modern, highly optimized arch-based linux distribution powered by KDE plasma.</p> <p class="text-lg text-white/80 svelte-n3pjl6">Built for looks, performance and ease of use.</p></div> <div class="flex justify-center gap-4 mt-8 svelte-n3pjl6"><button class="group px-8 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl svelte-n3pjl6"><span class="flex items-center gap-2 svelte-n3pjl6">Join Waitlist <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 svelte-n3pjl6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" class="svelte-n3pjl6"></path></svg></span></button> <button class="group px-8 py-3 rounded-lg bg-text-primary/20 backdrop-blur-sm border border-text-primary/30 text-text-primary hover:bg-text-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl svelte-n3pjl6"><span class="flex items-center gap-2 svelte-n3pjl6">Learn More <svg class="w-4 h-4 transition-transform group-hover:translate-x-1 svelte-n3pjl6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" class="svelte-n3pjl6"></path></svg></span></button></div></div>'),ht=E('<h2 class="text-4xl font-bold text-center mb-24 text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text svelte-n3pjl6">Features that separate the yaergu system from any other</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto svelte-n3pjl6"><div class="group bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 svelte-n3pjl6"><div class="mb-8 svelte-n3pjl6"><div class="w-20 h-20 mb-6 bg-gradient-to-br from-hero-top to-text-primary/30 rounded-xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg svelte-n3pjl6"><img src="/ayva.png" alt="Ayva" class="w-full h-full svelte-n3pjl6"></div> <h3 class="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-white/90 bg-clip-text svelte-n3pjl6">Ayva</h3></div> <p class="text-text-muted mb-8 svelte-n3pjl6">Voice assistant bundled with yaerguOS, designed to be easy to use and to help the user with their tasks, provide info and more.</p> <ul class="space-y-3 svelte-n3pjl6"><li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> Open websites, apps and more</li> <li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> Assist in everyday tasks</li> <li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-yellow-500 text-lg svelte-n3pjl6">~</span> AI powered answers (WIP)</li></ul></div> <div class="group bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 svelte-n3pjl6"><div class="mb-8 svelte-n3pjl6"><div class="w-20 h-20 mb-6 bg-gradient-to-br from-hero-top to-text-primary/30 rounded-xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg svelte-n3pjl6"><img src="/yns-icon.svg" alt="YNS" class="w-full h-full svelte-n3pjl6"></div> <h3 class="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-white/90 bg-clip-text svelte-n3pjl6">YNS</h3></div> <p class="text-text-muted mb-8 svelte-n3pjl6">Package manager with fast installation, wide variety of yaerguOS utilites, and not resource heavy.</p> <ul class="space-y-3 svelte-n3pjl6"><li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> Install apps and games</li> <li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> Easy updates</li> <li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-yellow-500 text-lg svelte-n3pjl6">~</span> CLI interface</li></ul></div> <div class="group bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 svelte-n3pjl6"><div class="mb-8 svelte-n3pjl6"><div class="w-20 h-20 mb-6 bg-gradient-to-br from-hero-top to-text-primary/30 rounded-xl p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg svelte-n3pjl6"><img src="/discover.png" alt="Discover" class="w-full h-full svelte-n3pjl6"></div> <h3 class="text-2xl font-bold text-transparent bg-gradient-to-r from-white to-white/90 bg-clip-text svelte-n3pjl6">Discover</h3></div> <p class="text-text-muted mb-8 svelte-n3pjl6">Software center with a wide variety of apps from flathub including vscodium, vlc etc.. Built-in discover app from kde plasma.</p> <ul class="space-y-3 svelte-n3pjl6"><li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> Wide variety</li> <li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> Fast downloads</li> <li class="flex items-center gap-3 text-text-muted group-hover:text-white/80 transition-colors duration-300 svelte-n3pjl6"><span class="text-text-primary text-lg svelte-n3pjl6">✓</span> From KDE</li></ul></div></div>',1),xt=E('<main class="min-h-screen flex flex-col svelte-n3pjl6"><section class="py-32 text-center relative overflow-hidden svelte-n3pjl6"><div class="absolute inset-0 bg-gradient-radial from-hero-top/20 to-transparent pointer-events-none svelte-n3pjl6"></div> <div class="absolute inset-0 opacity-30 svelte-n3pjl6"><div class="absolute top-20 left-20 w-72 h-72 bg-text-primary/20 rounded-full filter blur-3xl animate-pulse svelte-n3pjl6"></div> <div class="absolute bottom-20 right-20 w-96 h-96 bg-hero-top/30 rounded-full filter blur-3xl animate-pulse svelte-n3pjl6" style="animation-delay: 1s;"></div></div> <div class="container mx-auto px-4 relative svelte-n3pjl6"><!></div></section> <section class="py-32 relative flex-grow overflow-hidden svelte-n3pjl6"><div class="absolute inset-0 bg-gradient-radial from-features-bg/50 to-transparent pointer-events-none svelte-n3pjl6"></div> <div class="absolute inset-0 opacity-30 svelte-n3pjl6"><div class="absolute top-40 right-20 w-64 h-64 bg-text-primary/10 rounded-full filter blur-3xl animate-pulse svelte-n3pjl6"></div> <div class="absolute bottom-40 left-20 w-80 h-80 bg-hero-top/20 rounded-full filter blur-3xl animate-pulse svelte-n3pjl6" style="animation-delay: 2s;"></div></div> <div class="container mx-auto px-4 relative svelte-n3pjl6"><!></div></section> <footer class="py-12 relative svelte-n3pjl6"><div class="absolute inset-0 bg-black/20 backdrop-blur-sm svelte-n3pjl6"></div> <div class="container mx-auto px-4 relative svelte-n3pjl6"><div class="flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 svelte-n3pjl6"><div class="svelte-n3pjl6"><p class="text-lg svelte-n3pjl6">© 2025 yaerguOS. All rights reserved.</p></div> <div class="flex gap-8 svelte-n3pjl6"><a href="https://github.com/yaerguos" class="hover:text-white transition-all duration-200 hover:-translate-y-1 svelte-n3pjl6"><span class="flex items-center gap-2 svelte-n3pjl6"><svg class="w-5 h-5 svelte-n3pjl6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" class="svelte-n3pjl6"></path></svg> GitHub</span></a> <a href="https://discord.gg/yaerguos" class="hover:text-white transition-all duration-200 hover:-translate-y-1 svelte-n3pjl6"><span class="flex items-center gap-2 svelte-n3pjl6"><svg class="w-5 h-5 svelte-n3pjl6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" class="svelte-n3pjl6"></path></svg> Discord</span></a> <a href="https://twitter.com/yaerguos" class="hover:text-white transition-all duration-200 hover:-translate-y-1 svelte-n3pjl6"><span class="flex items-center gap-2 svelte-n3pjl6"><svg class="w-5 h-5 svelte-n3pjl6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" class="svelte-n3pjl6"></path></svg> Twitter</span></a></div></div></div></footer></main>');function Ct(e,t){Q(t,!1);let n=at(!1);nt(()=>{tt(n,!0)}),lt();var s=xt(),i=b(s),l=_(b(i),4),d=b(l);{var u=o=>{var p=ft();A(1,p,()=>ut,()=>({y:-20,duration:800})),C(o,p)};z(d,o=>{T(n)&&o(u)})}w(l),w(i);var a=_(i,2),v=_(b(a),4),x=b(v);{var f=o=>{var p=ht(),r=et(p),c=_(r,2);A(1,r,()=>L,()=>({duration:800,delay:200})),A(1,c,()=>L,()=>({duration:800,delay:400})),C(o,p)};z(x,o=>{T(n)&&o(f)})}w(v),w(a),st(2),w(s),C(e,s),X()}export{Ct as component};
