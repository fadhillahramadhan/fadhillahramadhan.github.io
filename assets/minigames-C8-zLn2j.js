import{n as e,r as t,t as n}from"./lucide-sjqSAqvF.js";document.querySelector(`#app`).innerHTML=`
<div class="desktop-environment">
  <div class="desktop-workspace">
    <div class="desktop-icon" data-app="breach">
      <div class="icon-container" style="color: #ef4444;"><i data-lucide="terminal-square" width="24" height="24"></i></div>
      <div class="icon-label">System Breach</div>
    </div>
    <div class="desktop-icon" data-app="bird">
      <div class="icon-container" style="color: #eab308;"><i data-lucide="bird" width="24" height="24"></i></div>
      <div class="icon-label">Cyber Bird</div>
    </div>
    <div class="desktop-icon" data-app="memory">
      <div class="icon-container" style="color: #3b82f6;"><i data-lucide="layers" width="24" height="24"></i></div>
      <div class="icon-label">Memory Match</div>
    </div>
    <div class="desktop-icon" data-app="browser">
      <div class="icon-container" style="color: #8b5cf6;"><i data-lucide="globe" width="24" height="24"></i></div>
      <div class="icon-label">Browser</div>
    </div>
    <div class="desktop-icon" data-app="files">
      <div class="icon-container" style="color: #f59e0b;"><i data-lucide="folder-open" width="24" height="24"></i></div>
      <div class="icon-label">Files</div>
    </div>
  </div>

  <!-- Windows -->
  <div class="os-window minimized" id="window-breach" style="z-index: 10;">
    <div class="os-titlebar" data-window="breach">
      <div class="os-title"><i data-lucide="terminal-square" width="14" height="14" color="#ef4444"></i> System Breach Simulator</div>
      <div class="os-controls">
        <button class="os-control-btn os-minimize" data-action="minimize" data-window="breach"><i data-lucide="minus"></i></button>
        <button class="os-control-btn os-maximize" data-action="maximize" data-window="breach"><i data-lucide="square"></i></button>
        <button class="os-control-btn os-close" data-action="close" data-window="breach"><i data-lucide="x"></i></button>
      </div>
    </div>
    <div class="os-content" style="padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <div class="minigame-container" style="width: 100%; max-width: 400px; background: #111; padding: 24px; border-radius: 12px; border: 1px solid #333; text-align: center;">
        <div class="progress-bar-container" style="width: 100%; height: 24px; background: #000; border-radius: 12px; margin-bottom: 20px; overflow: hidden; border: 2px solid #333;">
          <div id="hack-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, #f97316, #ef4444); transition: width 0.1s;"></div>
        </div>
        <button id="hack-btn" style="background: #000; color: var(--orange); border: 2px solid var(--orange); padding: 12px 30px; font-family: 'Fira Code', monospace; font-size: 14px; font-weight: 600; border-radius: 30px; cursor: pointer; transition: all 0.2s;">
          > EXECUTE_HACK
        </button>
        <div id="hack-status" style="margin-top: 15px; font-family: 'Fira Code', monospace; color: var(--text-muted); font-size: 12px; height: 16px;">Ready to initiate connection.</div>
      </div>
    </div>
  </div>

  <div class="os-window minimized" id="window-bird" style="z-index: 10;">
    <div class="os-titlebar" data-window="bird">
      <div class="os-title"><i data-lucide="bird" width="14" height="14" color="#eab308"></i> Cyber Bird</div>
      <div class="os-controls">
        <button class="os-control-btn os-minimize" data-action="minimize" data-window="bird"><i data-lucide="minus"></i></button>
        <button class="os-control-btn os-maximize" data-action="maximize" data-window="bird"><i data-lucide="square"></i></button>
        <button class="os-control-btn os-close" data-action="close" data-window="bird"><i data-lucide="x"></i></button>
      </div>
    </div>
    <div class="os-content" style="padding: 24px; display: flex; align-items: center; justify-content: center;">
      <div class="minigame-container" style="background: #111; padding: 16px; border-radius: 12px; border: 1px solid #333; text-align: center; position: relative; width: 100%; max-width: 450px;">
        <canvas id="cyber-bird-canvas" width="400" height="300" style="background: #000; border-radius: 8px; border: 2px solid #333; max-width: 100%; height: auto; cursor: pointer;"></canvas>
        <div id="cyber-bird-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(0,0,0,0.7); border-radius: 12px; pointer-events: none;">
          <h3 style="color: #eab308; margin-bottom: 10px; font-size: 24px;">CYBER BIRD</h3>
          <p style="color: #fff; font-size: 14px; margin-bottom: 20px;">Click canvas to jump</p>
          <button id="cyber-bird-start" style="background: #eab308; color: #000; border: none; padding: 10px 24px; font-family: 'Fira Code', monospace; font-weight: bold; border-radius: 30px; pointer-events: auto; cursor: pointer;">PLAY</button>
        </div>
        <div id="cyber-bird-score" style="position: absolute; top: 30px; right: 40px; color: #fff; font-family: 'Fira Code', monospace; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 0px #000;">0</div>
      </div>
    </div>
  </div>

  <div class="os-window minimized" id="window-memory" style="z-index: 10;">
    <div class="os-titlebar" data-window="memory">
      <div class="os-title"><i data-lucide="layers" width="14" height="14" color="#3b82f6"></i> Memory Match</div>
      <div class="os-controls">
        <button class="os-control-btn os-minimize" data-action="minimize" data-window="memory"><i data-lucide="minus"></i></button>
        <button class="os-control-btn os-maximize" data-action="maximize" data-window="memory"><i data-lucide="square"></i></button>
        <button class="os-control-btn os-close" data-action="close" data-window="memory"><i data-lucide="x"></i></button>
      </div>
    </div>
    <div class="os-content" style="padding: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <div class="minigame-container" style="width: 100%; max-width: 450px; background: #111; padding: 24px; border-radius: 12px; border: 1px solid #333; display: flex; flex-direction: column; align-items: center;">
        <div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 20px; color: #fff; font-family: 'Fira Code', monospace; font-size: 14px;">
          <div>Matches: <span id="memory-score" style="color: #3b82f6;">0</span> / 8</div>
          <div>Moves: <span id="memory-moves">0</span></div>
        </div>
        <div id="memory-board" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%; perspective: 1000px;">
          <!-- Cards generated by JS -->
        </div>
        <button id="memory-restart" style="margin-top: 24px; background: transparent; color: #3b82f6; border: 2px solid #3b82f6; padding: 10px 24px; font-family: 'Fira Code', monospace; font-weight: bold; border-radius: 30px; cursor: pointer; transition: all 0.2s; display: none;">PLAY AGAIN</button>
      </div>
    </div>
  </div>

  <!-- Browser Window -->
  <div class="os-window minimized" id="window-browser" style="z-index: 10; width: 900px; height: 620px; top: 40px; left: 80px;">
    <div class="os-titlebar" data-window="browser">
      <div class="os-title"><i data-lucide="globe" width="14" height="14" color="#8b5cf6"></i> Browser</div>
      <div class="os-controls">
        <button class="os-control-btn os-minimize" data-action="minimize" data-window="browser"><i data-lucide="minus"></i></button>
        <button class="os-control-btn os-maximize" data-action="maximize" data-window="browser"><i data-lucide="square"></i></button>
        <button class="os-control-btn os-close" data-action="close" data-window="browser"><i data-lucide="x"></i></button>
      </div>
    </div>
    <div class="os-content" style="padding: 0; display: flex; flex-direction: column;">
      <div id="browser-toolbar" style="background: #1e1e1e; padding: 8px 12px; display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #333; flex-shrink: 0;">
        <button id="browser-back" title="Back" style="background: #333; border: none; color: #fff; width: 28px; height: 28px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i data-lucide="arrow-left" width="14" height="14"></i></button>
        <button id="browser-forward" title="Forward" style="background: #333; border: none; color: #fff; width: 28px; height: 28px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i data-lucide="arrow-right" width="14" height="14"></i></button>
        <button id="browser-refresh" title="Refresh" style="background: #333; border: none; color: #fff; width: 28px; height: 28px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i data-lucide="refresh-cw" width="14" height="14"></i></button>
        <button id="browser-home" title="Home" style="background: #333; border: none; color: #fff; width: 28px; height: 28px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i data-lucide="home" width="14" height="14"></i></button>
        <input id="browser-url" type="text" value="https://fadhillahramadhan.github.io" style="flex: 1; background: #111; border: 1px solid #444; border-radius: 20px; color: #fff; padding: 5px 14px; font-size: 13px; outline: none; font-family: monospace;" />
        <button id="browser-go" style="background: #8b5cf6; border: none; color: #fff; padding: 5px 14px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px;">Go</button>
        <button id="browser-newtab" title="Open in New Tab" style="background: #333; border: none; color: #fff; width: 28px; height: 28px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;"><i data-lucide="external-link" width="14" height="14"></i></button>
      </div>
      <div style="flex: 1; position: relative; overflow: hidden;">
        <iframe id="browser-iframe" src="https://fadhillahramadhan.github.io" style="width: 100%; height: 100%; border: none; background: #fff; display: block;"></iframe>
        <div id="browser-blocked" style="display: none; position: absolute; inset: 0; background: #0d0d0d; flex-direction: column; align-items: center; justify-content: center; gap: 16px; text-align: center; padding: 40px;">
          <div style="width: 64px; height: 64px; border-radius: 16px; background: #1e1e1e; border: 1px solid #333; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="shield-off" width="32" height="32" color="#ef4444"></i>
          </div>
          <h3 style="color: #fff; font-size: 18px; margin: 0;">Site Blocked Embedding</h3>
          <p style="color: #666; font-size: 13px; max-width: 360px; margin: 0; line-height: 1.6;">
            <strong style="color: #ef4444;" id="blocked-domain">google.com</strong> refuses to be embedded in iframes.
            This is a security policy set by the site itself (<code style="color:#8b5cf6;">X-Frame-Options: DENY</code>).
            It cannot be bypassed — but you can open it in a real tab!
          </p>
          <button id="browser-open-tab" style="background: #8b5cf6; color: #fff; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
            <i data-lucide="external-link" width="16" height="16"></i> Open in New Tab
          </button>
          <div style="color: #444; font-size: 12px;">Works in iframe: fadhillahramadhan.github.io • wikipedia.org • codepen.io</div>
        </div>
      </div>
    </div>
  </div>

  <!-- File Explorer Window -->
  <div class="os-window minimized" id="window-files" style="z-index: 10; width: 860px; height: 580px; top: 60px; left: 100px;">
    <div class="os-titlebar" data-window="files">
      <div class="os-title"><i data-lucide="folder-open" width="14" height="14" color="#f59e0b"></i> File Explorer</div>
      <div class="os-controls">
        <button class="os-control-btn os-minimize" data-action="minimize" data-window="files"><i data-lucide="minus"></i></button>
        <button class="os-control-btn os-maximize" data-action="maximize" data-window="files"><i data-lucide="square"></i></button>
        <button class="os-control-btn os-close" data-action="close" data-window="files"><i data-lucide="x"></i></button>
      </div>
    </div>
    <div class="os-content" style="padding: 0; display: flex; flex-direction: row; height: 100%;">
      <!-- Left sidebar -->
      <div style="width: 180px; background: #161616; border-right: 1px solid #2a2a2a; padding: 12px 0; flex-shrink: 0; overflow-y: auto;">
        <div style="padding: 6px 16px; font-size: 10px; color: #666; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Quick Access</div>
        <div class="fe-sidebar-item active" data-folder="desktop"><i data-lucide="monitor" width="14" height="14"></i> Desktop</div>
        <div class="fe-sidebar-item" data-folder="projects"><i data-lucide="folder" width="14" height="14"></i> Projects</div>
        <div class="fe-sidebar-item" data-folder="games"><i data-lucide="gamepad-2" width="14" height="14"></i> Games</div>
        <div style="padding: 6px 16px; margin-top: 8px; font-size: 10px; color: #666; text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Portfolio</div>
        <div class="fe-sidebar-item" data-folder="docs"><i data-lucide="file-text" width="14" height="14"></i> Documents</div>
        <div class="fe-sidebar-item" data-folder="about"><i data-lucide="user" width="14" height="14"></i> About Me</div>
      </div>
      <!-- Right pane -->
      <div style="flex: 1; display: flex; flex-direction: column; overflow: hidden;">
        <div style="padding: 8px 16px; background: #111; border-bottom: 1px solid #222; font-size: 12px; color: #666; display: flex; align-items: center; gap: 6px;">
          <i data-lucide="chevron-right" width="12" height="12"></i>
          <span id="fe-path">Desktop</span>
        </div>
        <div id="fe-grid" style="flex: 1; padding: 20px; display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 8px; align-content: start; overflow-y: auto;"></div>
      </div>
    </div>
  </div>

  <!-- Start Menu -->
  <div class="start-menu" id="start-menu">
    <div class="start-menu-header">
      <img src="/profile.png" alt="Fadhillah" class="start-menu-avatar">
      <div>
        <div style="color: #fff; font-weight: bold;">Fadhillah OS</div>
        <div style="color: var(--text-muted); font-size: 12px;">Admin</div>
      </div>
    </div>
    <a href="/index.html" class="start-menu-item">
      <i data-lucide="home" width="20" height="20"></i> Return to Portfolio
    </a>
    <a href="/projects.html" class="start-menu-item">
      <i data-lucide="folder" width="20" height="20"></i> Projects Explorer
    </a>
    <a href="https://github.com/fadhillahramadhan" target="_blank" class="start-menu-item">
      <i data-lucide="github" width="20" height="20"></i> GitHub
    </a>
  </div>

  <!-- Taskbar -->
  <div class="os-taskbar">
    <div class="taskbar-start" id="start-btn">
      <i data-lucide="flame" width="18" height="18" color="#ff5a36"></i> Start
    </div>
    <div class="taskbar-divider"></div>
    <div class="taskbar-apps" id="taskbar-apps"></div>
    <div class="taskbar-time" id="taskbar-time">
      <div id="time-display">12:00 PM</div>
      <div id="date-display" style="font-size: 10px; color: #888;">10/24/2023</div>
    </div>
  </div>
</div>
`,n({icons:e,nameAttr:`data-lucide`});{let r=100,i=new Set,a=()=>{let e=new Date;document.getElementById(`time-display`).textContent=e.toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),document.getElementById(`date-display`).textContent=e.toLocaleDateString()};setInterval(a,1e3),a();let o=document.getElementById(`start-btn`),s=document.getElementById(`start-menu`);o.addEventListener(`click`,e=>{e.stopPropagation(),s.classList.toggle(`open`)}),document.addEventListener(`click`,()=>{s.classList.remove(`open`)}),s.addEventListener(`click`,e=>e.stopPropagation());let c=e=>{let t=document.getElementById(`window-${e}`);if(t){r++,t.style.zIndex=r,document.querySelectorAll(`.taskbar-app`).forEach(e=>e.classList.remove(`active`));let n=document.getElementById(`task-${e}`);n&&n.classList.add(`active`)}},l=t=>{let r=document.getElementById(`window-${t}`);if(r.classList.contains(`minimized`)){if(r.classList.remove(`minimized`),r.style.pointerEvents=`auto`,r.style.opacity=`1`,r.style.transform=`none`,c(t),!i.has(t)){i.add(t);let r=document.getElementById(`taskbar-apps`),a={breach:{icon:`terminal-square`,color:`#ef4444`},bird:{icon:`bird`,color:`#eab308`},memory:{icon:`layers`,color:`#3b82f6`},browser:{icon:`globe`,color:`#8b5cf6`},files:{icon:`folder-open`,color:`#f59e0b`}}[t]||{icon:`square`,color:`#fff`},o=a.icon,s=a.color,c=document.createElement(`div`);c.className=`taskbar-app active`,c.id=`task-${t}`,c.innerHTML=`<i data-lucide="${o}" width="20" height="20" color="${s}"></i>`,c.addEventListener(`click`,()=>l(t)),r.appendChild(c),n({icons:e,nameAttr:`data-lucide`})}}else{r.style.opacity=``,r.style.transform=``,r.classList.add(`minimized`),r.style.pointerEvents=`none`;let e=document.getElementById(`task-${t}`);e&&e.classList.remove(`active`)}},u=e=>{let t=document.getElementById(`window-${e}`);t.style.opacity=``,t.style.transform=``,t.classList.add(`minimized`),t.style.pointerEvents=`none`,i.delete(e);let n=document.getElementById(`task-${e}`);n&&n.remove()};document.querySelectorAll(`.desktop-icon`).forEach(e=>{e.addEventListener(`dblclick`,()=>{l(e.dataset.app)}),e.addEventListener(`click`,()=>{window.innerWidth<=768&&l(e.dataset.app)})}),document.querySelectorAll(`.os-window`).forEach(e=>{e.addEventListener(`mousedown`,()=>c(e.id.replace(`window-`,``)))}),document.querySelector(`.desktop-environment`).addEventListener(`click`,e=>{let t=e.target.closest(`.os-control-btn`);if(!t)return;e.stopPropagation();let n=t.dataset.action,r=t.dataset.window;if(!n||!r)return;let i=document.getElementById(`window-${r}`);i&&(n===`close`?u(r):n===`minimize`?l(r):n===`maximize`&&(i.classList.contains(`maximized`)?(i.classList.remove(`maximized`),i._savedLeft!==void 0&&(i.style.left=i._savedLeft),i._savedTop!==void 0&&(i.style.top=i._savedTop)):(i._savedLeft=i.style.left,i._savedTop=i.style.top,i.style.left=``,i.style.top=``,i.style.width=``,i.style.height=``,i.classList.add(`maximized`))))}),document.querySelector(`.desktop-environment`).addEventListener(`mousedown`,e=>{e.target.closest(`.os-control-btn`)&&e.stopPropagation()});let d=null;document.querySelectorAll(`.os-titlebar`).forEach(e=>{e.addEventListener(`mousedown`,t=>{if(t.target.closest(`.os-control-btn`))return;let n=e.closest(`.os-window`);if(!n||n.classList.contains(`maximized`))return;t.preventDefault();let r=n.getBoundingClientRect();d={win:n,startX:t.clientX,startY:t.clientY,initialLeft:r.left,initialTop:r.top},n.style.transition=`none`,c(n.id.replace(`window-`,``))})}),document.addEventListener(`mousemove`,e=>{if(!d)return;let t=e.clientX-d.startX,n=e.clientY-d.startY;d.win.style.left=`${d.initialLeft+t}px`,d.win.style.top=`${d.initialTop+n}px`}),document.addEventListener(`mouseup`,()=>{d&&=(d.win.style.transition=``,null)});let f=document.getElementById(`hack-btn`),p=document.getElementById(`hack-progress`),m=document.getElementById(`hack-status`),h=0,g;f&&f.addEventListener(`click`,()=>{if(!(h>=100)){if(h+=8,h>100&&(h=100),p.style.width=h+`%`,t({targets:f,scale:[.95,1],duration:200,easing:`easeOutQuad`}),h===100){m.textContent=`ACCESS GRANTED. Welcome to the mainframe.`,m.style.color=`#10b981`,f.style.background=`var(--orange)`,f.style.color=`#fff`,f.textContent=`SYSTEM_HACKED`,f.style.cursor=`default`,g&&clearInterval(g);return}g||=(m.textContent=`Warning: Tracing connection...`,m.style.color=`#ef4444`,setInterval(()=>{h>0&&(h-=3,h<0&&(h=0),p.style.width=h+`%`),h===0&&(m.textContent=`Connection lost. Try again.`,m.style.color=`var(--text-muted)`,clearInterval(g),g=null)},200))}});let _=document.getElementById(`cyber-bird-canvas`),v=_?_.getContext(`2d`):null,y=document.getElementById(`cyber-bird-start`),b=document.getElementById(`cyber-bird-overlay`),x=document.getElementById(`cyber-bird-score`);if(_&&v&&y){let e={x:50,y:150,velocity:0,gravity:.3,jump:-5,size:10},n=[],r=0,i=0,a=!1,o,s=()=>{v.fillStyle=`#eab308`,v.beginPath(),v.arc(e.x,e.y,e.size,0,Math.PI*2),v.fill()},c=()=>{v.fillStyle=`#10b981`,n.forEach(e=>{v.fillRect(e.x,0,e.width,e.top),v.fillRect(e.x,_.height-e.bottom,e.width,e.bottom)})},l=0,u=d=>{if(!a)return;o=requestAnimationFrame(u),l||=d;let p=d-l;if(!(p<1e3/60)){if(l=d-p%(1e3/60),e.velocity+=e.gravity,e.y+=e.velocity,(e.y+e.size>_.height||e.y-e.size<0)&&f(),r%90==0){let e=Math.random()*(_.height-120-40)+20,t=_.height-120-e;n.push({x:_.width,width:30,top:e,bottom:t,passed:!1})}n.forEach(n=>{n.x-=2,e.x+e.size>n.x&&e.x-e.size<n.x+n.width&&(e.y-e.size<n.top||e.y+e.size>_.height-n.bottom)&&f(),n.x+n.width<e.x&&!n.passed&&(i++,x.textContent=i,n.passed=!0,t({targets:x,scale:[1.5,1],duration:300,easing:`easeOutQuad`}))}),n=n.filter(e=>e.x+e.width>0),v.clearRect(0,0,_.width,_.height),c(),s(),r++}},d=t=>{a&&(t&&t.preventDefault(),e.velocity=e.jump)},f=()=>{a=!1,cancelAnimationFrame(o),b.style.display=`flex`,b.querySelector(`h3`).textContent=`SYSTEM CRASH`,b.querySelector(`h3`).style.color=`#ef4444`,b.querySelector(`p`).textContent=`Final Score: `+i,y.textContent=`REBOOT`};y.addEventListener(`click`,()=>{e={x:50,y:150,velocity:0,gravity:.3,jump:-5,size:10},n=[],i=0,r=0,x.textContent=`0`,b.style.display=`none`,a=!0,l=performance.now(),u(performance.now()),d()}),_.addEventListener(`mousedown`,d),_.addEventListener(`touchstart`,d),window.addEventListener(`keydown`,e=>{e.code===`Space`&&a&&d(e)}),v.clearRect(0,0,_.width,_.height),s()}let S=document.getElementById(`memory-board`),C=document.getElementById(`memory-score`),w=document.getElementById(`memory-moves`),T=document.getElementById(`memory-restart`);if(S){let r=[`cpu`,`database`,`cloud`,`lock`,`server`,`shield`,`wifi`,`code`],i=[...r,...r],a=0,o=0,s=[],c=!1,l=e=>{for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},u=()=>{S.innerHTML=``,l(i).forEach(e=>{let t=document.createElement(`div`);t.classList.add(`memory-card`),t.dataset.icon=e,t.innerHTML=`
          <div class="memory-card-inner">
            <div class="memory-card-front"></div>
            <div class="memory-card-back"><i data-lucide="${e}" width="24" height="24"></i></div>
          </div>
        `,t.addEventListener(`click`,d),S.appendChild(t)}),n({icons:e,nameAttr:`data-lucide`})};function d(){c||this===s[0]||this.classList.contains(`matched`)||(this.classList.add(`flipped`),s.push(this),s.length===2&&(a++,w.textContent=a,f()))}function f(){let[e,n]=s;e.dataset.icon===n.dataset.icon?(e.classList.add(`matched`),n.classList.add(`matched`),o++,C.textContent=o,s=[],o===8&&setTimeout(()=>{T.style.display=`block`,t({targets:`.memory-card`,rotateY:`+=360`,duration:1e3,delay:t.stagger(100)})},500)):(c=!0,setTimeout(()=>{e.classList.remove(`flipped`),n.classList.remove(`flipped`),s=[],c=!1},1e3))}T.addEventListener(`click`,()=>{a=0,o=0,C.textContent=o,w.textContent=a,T.style.display=`none`,u()}),u()}let E=document.getElementById(`browser-iframe`),D=document.getElementById(`browser-url`),O=document.getElementById(`browser-back`),k=document.getElementById(`browser-forward`),A=document.getElementById(`browser-refresh`),j=document.getElementById(`browser-home`),M=document.getElementById(`browser-go`),N=document.getElementById(`browser-newtab`),P=document.getElementById(`browser-blocked`),F=document.getElementById(`blocked-domain`),I=document.getElementById(`browser-open-tab`);if(E&&D){let t=`https://fadhillahramadhan.github.io`,r=[t],i=0,a=t,o=null,s=t=>{try{let e=new URL(t).hostname.replace(/^www\./,``);F&&(F.textContent=e)}catch{}P&&(P.style.display=`flex`,n({icons:e,nameAttr:`data-lucide`}))},c=()=>{P&&(P.style.display=`none`)},l=e=>{/^https?:\/\//i.test(e)||(e=`https://`+e),r=r.slice(0,i+1),r.push(e),i++,a=e,c(),E.src=e,D.value=e,o&&clearTimeout(o),o=setTimeout(()=>{try{E.contentWindow.location.href===`about:blank`&&s(e)}catch{}},3e3)};E.addEventListener(`load`,()=>{o&&clearTimeout(o);try{E.contentWindow.location.href===`about:blank`&&r.length>1?s(a):c()}catch{c()}}),M.addEventListener(`click`,()=>l(D.value)),D.addEventListener(`keydown`,e=>{e.key===`Enter`&&l(D.value)}),O.addEventListener(`click`,()=>{i>0&&(i--,a=r[i],c(),E.src=a,D.value=a)}),k.addEventListener(`click`,()=>{i<r.length-1&&(i++,a=r[i],c(),E.src=a,D.value=a)}),A.addEventListener(`click`,()=>{c(),E.src=a}),j.addEventListener(`click`,()=>l(t)),N&&N.addEventListener(`click`,()=>window.open(a,`_blank`)),I&&I.addEventListener(`click`,()=>window.open(a,`_blank`))}let L=document.getElementById(`fe-grid`),R=document.getElementById(`fe-path`),z=document.querySelectorAll(`.fe-sidebar-item`),B={desktop:{label:`Desktop`,items:[{name:`System Breach`,icon:`terminal-square`,color:`#ef4444`,action:()=>l(`breach`)},{name:`Cyber Bird`,icon:`bird`,color:`#eab308`,action:()=>l(`bird`)},{name:`Memory Match`,icon:`layers`,color:`#3b82f6`,action:()=>l(`memory`)},{name:`Browser`,icon:`globe`,color:`#8b5cf6`,action:()=>l(`browser`)},{name:`File Explorer`,icon:`folder-open`,color:`#f59e0b`,action:()=>l(`files`)}]},projects:{label:`Projects`,items:[{name:`Cashbaik`,img:`/hot-projects-cashbaik.webp`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`/projects.html`,D&&(D.value=`/projects.html`)},300))}},{name:`Wazlink`,img:`/hot-project-wazlink.png`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`/projects.html`,D&&(D.value=`/projects.html`)},300))}},{name:`Biartau`,img:`/hot-project-biartau.png`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`/projects.html`,D&&(D.value=`/projects.html`)},300))}},{name:`All Projects`,icon:`folder`,color:`#f59e0b`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`/projects.html`,D&&(D.value=`/projects.html`)},300))}}]},games:{label:`Games`,items:[{name:`System Breach`,icon:`terminal-square`,color:`#ef4444`,action:()=>l(`breach`)},{name:`Cyber Bird`,icon:`bird`,color:`#eab308`,action:()=>l(`bird`)},{name:`Memory Match`,icon:`layers`,color:`#3b82f6`,action:()=>l(`memory`)}]},docs:{label:`Documents`,items:[{name:`Resume.html`,icon:`file-text`,color:`#10b981`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`/resume.html`,D&&(D.value=`/resume.html`)},300))}},{name:`Portfolio`,icon:`globe`,color:`#8b5cf6`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`https://fadhillahramadhan.github.io`,D&&(D.value=`https://fadhillahramadhan.github.io`)},300))}}]},about:{label:`About Me`,items:[{name:`Profile`,img:`/profile.png`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`/index.html`,D&&(D.value=`/index.html`)},300))}},{name:`GitHub`,icon:`github`,color:`#fff`,action:()=>{E&&(l(`browser`),setTimeout(()=>{E.src=`https://github.com/fadhillahramadhan`,D&&(D.value=`https://github.com/fadhillahramadhan`)},300))}},{name:`Instagram`,icon:`instagram`,color:`#e1306c`,action:()=>{window.open(`https://www.instagram.com/fadhillah_ramadhan`,`_blank`)}},{name:`WhatsApp`,icon:`message-circle`,color:`#25D366`,action:()=>{window.open(`https://wa.me/628999462641`,`_blank`)}}]}},V=t=>{let r=B[t];!r||!L||(R&&(R.textContent=r.label),L.innerHTML=``,r.items.forEach(e=>{let t=document.createElement(`div`);t.style.cssText=`display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 6px;border-radius:8px;cursor:pointer;transition:background 0.2s;text-align:center;`,t.addEventListener(`mouseenter`,()=>t.style.background=`rgba(255,255,255,0.07)`),t.addEventListener(`mouseleave`,()=>t.style.background=`transparent`),e.img?t.innerHTML=`
          <img src="${e.img}" style="width:52px;height:52px;object-fit:cover;border-radius:8px;border:1px solid #333;">
          <span style="font-size:11px;color:#ccc;word-break:break-word;">${e.name}</span>`:t.innerHTML=`
          <div style="width:52px;height:52px;border-radius:12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;color:${e.color};">
            <i data-lucide="${e.icon}" width="24" height="24"></i>
          </div>
          <span style="font-size:11px;color:#ccc;word-break:break-word;">${e.name}</span>`,t.addEventListener(`dblclick`,e.action),t.addEventListener(`click`,()=>{window.innerWidth<=768&&e.action()}),L.appendChild(t)}),n({icons:e,nameAttr:`data-lucide`}))};z.length>0&&(z.forEach(e=>{e.addEventListener(`click`,()=>{z.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),V(e.dataset.folder)})}),V(`desktop`))}