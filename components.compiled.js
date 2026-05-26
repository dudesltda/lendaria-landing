var{useState,useEffect,useRef}=React;function Tag({children:o,variant:e="bare",style:a}){const r={fontFamily:"var(--font-mono)",fontWeight:500,fontSize:12,letterSpacing:0,textTransform:"uppercase",padding:e==="bare"?"0":"6px 10px",lineHeight:1,display:"inline-flex",alignItems:"center",gap:6,whiteSpace:"nowrap"},t={bare:{color:"var(--color-ink)"},yellow:{background:"var(--color-yellow)",color:"var(--color-ink)"},dark:{background:"var(--color-ink)",color:"var(--color-yellow)"},outline:{border:"2px solid var(--color-ink)",padding:"4px 10px"},red:{background:"var(--color-signal-red)",color:"var(--color-paper)"},green:{background:"var(--color-signal-green)",color:"var(--color-paper)"}}[e];return React.createElement("span",{style:{...r,...t,...a}},"[",o,"]")}function Button({children:o,variant:e="primary",size:a="md",as:r="button",arrow:t=!1,block:n=!1,style:s,...p}){const g={sm:{padding:"9px 14px",fontSize:12},md:{padding:"13px 20px",fontSize:14},lg:{padding:"17px 26px",fontSize:16}},u={primary:{background:"var(--color-yellow)",color:"var(--color-ink)",border:"2px solid var(--color-ink)"},secondary:{background:"transparent",color:"var(--color-ink)",border:"2px solid var(--color-ink)"},dark:{background:"var(--color-ink)",color:"var(--color-yellow)",border:"2px solid var(--color-ink)"},ghost:{background:"transparent",color:"var(--color-ink)",border:"2px solid transparent"},destructive:{background:"transparent",color:"var(--color-signal-red)",border:"2px solid var(--color-signal-red)"}},v={fontFamily:"var(--font-sans)",fontWeight:700,letterSpacing:0,textTransform:"uppercase",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:10,transition:"all 100ms linear",boxShadow:"none",transform:"none",...g[a],...u[e],...s},l=i=>{Object.assign(i.style,u[e],s||{},{boxShadow:"none",transform:"none"})},d=i=>{i.style.transform="translate(-2px, -2px)",i.style.boxShadow="6px 6px 0 var(--color-ink)",e==="primary"&&(i.style.background="var(--color-ink)",i.style.color="var(--color-yellow)"),e==="secondary"&&(i.style.background="var(--color-ink)",i.style.color="var(--color-paper)"),e==="dark"&&(i.style.background="var(--color-yellow)",i.style.color="var(--color-ink)",i.style.borderColor="var(--color-ink)"),e==="ghost"&&(i.style.transform="none",i.style.boxShadow="none",i.style.color="var(--color-mute)"),e==="destructive"&&(i.style.background="var(--color-signal-red)",i.style.color="var(--color-paper)")};return React.createElement(r,{style:v,onMouseEnter:i=>{d(i.currentTarget)},onMouseLeave:i=>{l(i.currentTarget)},onFocus:i=>{d(i.currentTarget)},onBlur:i=>{l(i.currentTarget)},...p},o,t&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontWeight:400}},"\u2192"))}function Avatar({initials:o,color:e="yellow",size:a=36}){return React.createElement("div",{style:{width:a,height:a,background:e==="yellow"?"var(--color-yellow)":"var(--color-ink)",color:e==="yellow"?"var(--color-ink)":"var(--color-yellow)",fontFamily:"var(--font-display)",fontSize:a*.4,display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,letterSpacing:0,border:"1px solid var(--color-ink)"}},o)}function PhotoBlock({label:o="FOTO",ratio:e="4 / 3",style:a}){return React.createElement("div",{style:{aspectRatio:e,background:"var(--color-paper-warm)",border:"2px solid var(--color-ink)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",backgroundImage:"repeating-linear-gradient(135deg, transparent 0 11px, rgba(14,14,14,.04) 11px 12px)",...a}},"[",o,"]")}function BracketHeadline({children:o,size:e=96,color:a="var(--color-ink)"}){const r=String(o).split(/(\[[^\]]+\])/g);return React.createElement("h1",{style:{fontFamily:"var(--font-display)",fontSize:e,lineHeight:.9,letterSpacing:0,textTransform:"uppercase",margin:0,color:a}},r.map((t,n)=>t.startsWith("[")&&t.endsWith("]")?React.createElement("em",{key:n,style:{fontStyle:"normal",background:a==="var(--color-ink)"?"var(--color-ink)":"var(--color-yellow)",color:a==="var(--color-ink)"?"var(--color-yellow)":"var(--color-ink)",padding:"0 0.08em"}},t):React.createElement(React.Fragment,{key:n},t)))}function SkipLink({href:o="#conteudo-principal",children:e="Pular para o conte\xFAdo"}){return React.createElement("a",{className:"skip-link",href:o},e)}function ProgressBar({value:o=0,max:e=100,variant:a="linear-thin",label:r,showPercent:t=!1,tone:n="yellow-on-dark",segments:s=12,ringSize:p=64,style:g,ariaLabel:u}){const v=Math.max(1,Number(e)||1),l=Math.max(0,Math.min(v,Number(o)||0)),d=Math.round(l/v*100),c=n==="ink-on-paper"?{track:"var(--color-rule-cool)",fill:"var(--color-ink)",text:"var(--color-ink)",mute:"var(--color-mute)"}:{track:"rgba(255,255,240,.15)",fill:"var(--color-yellow)",text:"var(--color-paper)",mute:"var(--color-mute-soft)"};if(a==="linear-thin"||a==="linear-thick"){const i=a==="linear-thick"?8:4;return React.createElement("div",{style:{...g},role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":v,"aria-label":u||r||"Progresso"},r&&React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:c.text,marginBottom:6}},React.createElement("span",null,r),t&&React.createElement("span",{style:{color:c.mute}},d,"%")),React.createElement("div",{style:{height:i,background:c.track,position:"relative"}},React.createElement("div",{style:{width:d+"%",height:"100%",background:c.fill,transition:"width 200ms linear"}})))}if(a==="stepped"){const i=Math.max(1,Math.floor(s)),k=Math.round(l/v*i);return React.createElement("div",{style:{...g},role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":v,"aria-label":u||r||"Progresso por segmentos"},r&&React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:c.text,marginBottom:8}},React.createElement("span",null,r),t&&React.createElement("span",{style:{color:c.mute}},k,"/",i)),React.createElement("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gap:3}},Array.from({length:i},(h,x)=>React.createElement("span",{key:x,"aria-hidden":"true",style:{height:12,background:x<k?c.fill:c.track,border:n==="ink-on-paper"?"1px solid var(--color-ink)":"1px solid rgba(255,255,240,.18)",transition:"background 100ms linear"}}))))}if(a==="ring"){const i=p,k=6,h=(i-k)/2,x=2*Math.PI*h,S=x-d/100*x;return React.createElement("div",{style:{display:"inline-flex",alignItems:"center",gap:12,...g},role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":v,"aria-label":u||r||"Progresso circular"},React.createElement("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,style:{flexShrink:0}},React.createElement("circle",{cx:i/2,cy:i/2,r:h,fill:"none",stroke:c.track,strokeWidth:k}),React.createElement("circle",{cx:i/2,cy:i/2,r:h,fill:"none",stroke:c.fill,strokeWidth:k,strokeDasharray:x,strokeDashoffset:S,strokeLinecap:"butt",transform:`rotate(-90 ${i/2} ${i/2})`,style:{transition:"stroke-dashoffset 200ms linear"}}),React.createElement("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fontFamily:"var(--font-display)",fontSize:i*.28,fill:c.text,letterSpacing:"0"},d)),r&&React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:c.text,lineHeight:1.3}},r,t&&React.createElement("div",{style:{color:c.mute}},l,"/",v)))}return null}function StatCard({eyebrow:o,value:e,label:a,delta:r,deltaDir:t="up",variant:n="default",style:s}){const p={default:{bg:"var(--color-paper)",fg:"var(--color-ink)",mute:"var(--color-mute)"},inverse:{bg:"var(--color-ink)",fg:"var(--color-paper)",mute:"var(--color-mute-soft)"},accent:{bg:"var(--color-yellow)",fg:"var(--color-ink)",mute:"var(--color-mute)"}}[n],g=t==="down"?"var(--color-signal-red)":t==="up"?n==="inverse"?"var(--color-yellow)":"var(--color-signal-green)":p.mute,u=t==="down"?"\u2193":t==="up"?"\u2191":"\u2192";return React.createElement("div",{style:{background:p.bg,color:p.fg,border:"2px solid var(--color-ink)",padding:"20px 22px 22px",display:"flex",flexDirection:"column",gap:8,minHeight:168,transition:"all 100ms linear",...s}},o&&React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontWeight:500,fontSize:11,letterSpacing:0,textTransform:"uppercase",color:p.mute,lineHeight:1}},"[",o,"]"),React.createElement("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(48px, 6vw, 84px)",lineHeight:.9,letterSpacing:0,textTransform:"uppercase",marginTop:4}},e),a&&React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontWeight:500,fontSize:14,lineHeight:1.3,color:p.fg,marginTop:"auto"}},a),r&&React.createElement("div",{style:{display:"inline-flex",alignItems:"center",gap:6,fontFamily:"var(--font-mono)",fontWeight:500,fontSize:11,letterSpacing:0,textTransform:"uppercase",color:g,marginTop:2}},React.createElement("span",{"aria-hidden":"true"},u),React.createElement("span",null,r)))}function Modal({open:o,onClose:e,title:a,eyebrow:r,children:t,variant:n="default",primaryLabel:s="Confirmar",ghostLabel:p="Cancelar",onPrimary:g,onGhost:u,destructive:v=!1}){const l=useRef(null),d=useRef(null);if(useEffect(()=>{if(!o)return;d.current=document.activeElement;const i=document.body.style.overflow;document.body.style.overflow="hidden";const k=setTimeout(()=>{const x=l.current&&l.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])');x&&x.length?x[0].focus():l.current&&l.current.focus()},0),h=x=>{if(x.key==="Escape"){x.preventDefault(),e&&e();return}if(x.key==="Tab"&&l.current){const S=Array.from(l.current.querySelectorAll('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')).filter(F=>F.offsetParent!==null);if(S.length===0)return;const z=S[0],I=S[S.length-1];x.shiftKey&&document.activeElement===z?(x.preventDefault(),I.focus()):!x.shiftKey&&document.activeElement===I&&(x.preventDefault(),z.focus())}};return document.addEventListener("keydown",h),()=>{clearTimeout(k),document.removeEventListener("keydown",h),document.body.style.overflow=i,d.current&&d.current.focus&&d.current.focus()}},[o,e]),!o)return null;const c={default:520,wide:760,confirm:440};return React.createElement("div",{role:"dialog","aria-modal":"true","aria-labelledby":"lkd-modal-title",onClick:i=>{i.target===i.currentTarget&&e&&e()},style:{position:"fixed",inset:0,zIndex:100,background:"var(--color-paper-warm)",display:"flex",alignItems:"center",justifyContent:"center",padding:24}},React.createElement("div",{ref:l,tabIndex:-1,style:{background:"var(--color-paper)",color:"var(--color-ink)",border:"2px solid var(--color-ink)",boxShadow:"12px 12px 0 var(--color-ink)",maxWidth:c[n]||c.default,width:"100%",maxHeight:"calc(100vh - 48px)",overflow:"auto",padding:0,outline:"none"}},React.createElement("div",{style:{padding:"20px 24px 16px",borderBottom:"2px solid var(--color-ink)",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16}},React.createElement("div",{style:{flex:1,minWidth:0}},r&&React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontWeight:500,fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",marginBottom:6}},"[",r,"]"),a&&React.createElement("h2",{id:"lkd-modal-title",style:{fontFamily:"var(--font-display)",fontSize:28,lineHeight:.95,letterSpacing:0,textTransform:"uppercase",margin:0}},a)),React.createElement("button",{type:"button","aria-label":"Fechar",onClick:e,style:{width:36,height:36,border:"2px solid var(--color-ink)",background:"var(--color-paper)",color:"var(--color-ink)",fontFamily:"var(--font-display)",fontSize:16,cursor:"pointer",flexShrink:0,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 100ms linear"},onMouseEnter:i=>{i.currentTarget.style.background="var(--color-ink)",i.currentTarget.style.color="var(--color-yellow)"},onMouseLeave:i=>{i.currentTarget.style.background="var(--color-paper)",i.currentTarget.style.color="var(--color-ink)"}},"\xD7")),React.createElement("div",{style:{padding:"20px 24px",fontFamily:"var(--font-sans)",fontSize:15,lineHeight:1.55}},t),n==="confirm"&&React.createElement("div",{style:{padding:"16px 24px 20px",borderTop:"1px solid var(--color-rule-cool)",display:"flex",justifyContent:"flex-end",gap:12,flexWrap:"wrap"}},React.createElement(Button,{variant:"ghost",onClick:u||e},p),React.createElement(Button,{variant:v?"destructive":"primary",onClick:g,arrow:!v},s))))}function Tabs({items:o,defaultIndex:e=0,variant:a="default",onChange:r,style:t}){const[n,s]=useState(e),p=useRef([]),g=l=>{s(l),r&&r(l,o[l])},u=(l,d)=>{let c=null;if(l.key==="ArrowRight"?c=(d+1)%o.length:l.key==="ArrowLeft"?c=(d-1+o.length)%o.length:l.key==="Home"?c=0:l.key==="End"&&(c=o.length-1),c!=null){l.preventDefault(),g(c);const i=p.current[c];i&&i.focus()}},v=a==="pill-brutalist";return React.createElement("div",{style:t},React.createElement("div",{role:"tablist","aria-label":"Abas",style:{display:"flex",gap:v?8:0,borderBottom:v?"none":"1px solid var(--color-rule-cool)",flexWrap:"wrap"}},o.map((l,d)=>{const c=d===n,i=`lkd-tab-${d}`,k=`lkd-tabpanel-${d}`;return v?React.createElement("button",{key:i,ref:h=>p.current[d]=h,id:i,role:"tab",type:"button","aria-selected":c,"aria-controls":k,tabIndex:c?0:-1,onClick:()=>g(d),onKeyDown:h=>u(h,d),style:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:13,letterSpacing:0,textTransform:"uppercase",padding:"10px 16px",border:"2px solid var(--color-ink)",background:c?"var(--color-ink)":"var(--color-paper)",color:c?"var(--color-yellow)":"var(--color-ink)",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8,transition:"all 100ms linear",boxShadow:c?"4px 4px 0 var(--color-ink)":"none",transform:c?"translate(-1px, -1px)":"none"}},l.label,l.count!=null&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,padding:"1px 6px",background:c?"var(--color-yellow)":"var(--color-ink)",color:c?"var(--color-ink)":"var(--color-paper)",letterSpacing:0}},l.count)):React.createElement("button",{key:i,ref:h=>p.current[d]=h,id:i,role:"tab",type:"button","aria-selected":c,"aria-controls":k,tabIndex:c?0:-1,onClick:()=>g(d),onKeyDown:h=>u(h,d),style:{fontFamily:"var(--font-sans)",fontWeight:c?700:500,fontSize:14,letterSpacing:0,textTransform:"uppercase",padding:"12px 18px 14px",background:"transparent",color:c?"var(--color-ink)":"var(--color-mute)",border:"none",borderBottom:c?"3px solid var(--color-ink)":"3px solid transparent",marginBottom:-1,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8,position:"relative",transition:"color 100ms linear, border-color 100ms linear"}},c&&React.createElement(React.Fragment,null,React.createElement("span",{"aria-hidden":"true",style:{fontFamily:"var(--font-mono)",color:"var(--color-ink)"}},"["),React.createElement("span",null,l.label),React.createElement("span",{"aria-hidden":"true",style:{fontFamily:"var(--font-mono)",color:"var(--color-ink)"}},"]")),!c&&React.createElement("span",null,l.label),l.count!=null&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,color:c?"var(--color-ink)":"var(--color-mute-soft)",marginLeft:2}},"\xB7 ",l.count))})),React.createElement("div",{style:{paddingTop:20}},o.map((l,d)=>React.createElement("div",{key:`lkd-tabpanel-${d}`,id:`lkd-tabpanel-${d}`,role:"tabpanel","aria-labelledby":`lkd-tab-${d}`,hidden:d!==n},d===n&&l.content))))}function DataTable({columns:o=[],rows:e=[],density:a="comfortable",tone:r="paper",selectable:t=!1,selected:n=[],onSelectChange:s,sortKey:p,sortDir:g,onSort:u,rowKey:v="id",onRowClick:l,empty:d,caption:c,style:i}){const k=a==="compact"?40:52,h=r==="warm"?"var(--color-paper-warm)":"var(--color-paper)",x=r==="warm"?"var(--color-rule)":"var(--color-rule-cool)",S=e.map((m,b)=>m&&m[v]!=null?m[v]:b),z=t&&S.length>0&&S.every(m=>n.indexOf(m)!==-1),I=t&&!z&&S.some(m=>n.indexOf(m)!==-1),F=()=>{s&&s(z?[]:S.slice())},A=m=>{if(!s)return;const b=n.indexOf(m);s(b===-1?n.concat([m]):n.filter(f=>f!==m))},T=m=>{if(!(!m.sortable||!u))return p!==m.key?u(m.key,"asc"):g==="asc"?u(m.key,"desc"):g==="desc"?u(null,null):u(m.key,"asc")},C=m=>{if(!m.sortable)return null;const b=p===m.key;return React.createElement("span",{"aria-hidden":"true",style:{fontFamily:"var(--font-mono)",fontSize:10,marginLeft:6,opacity:b?1:.35}},b?g==="desc"?"\u25BC":"\u25B2":"\u25BE")};return React.createElement("div",{style:{border:"2px solid var(--color-ink)",background:h,overflow:"hidden",position:"relative",...i}},c&&React.createElement("div",{style:{padding:"12px 16px",borderBottom:"2px solid var(--color-ink)",background:"var(--color-ink)",color:"var(--color-paper)",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}},React.createElement("span",null,"[",c,"]"),React.createElement("span",{style:{color:"var(--color-mute-soft)"}},e.length," ",e.length===1?"registro":"registros")),React.createElement("div",{style:{overflowX:"auto"}},React.createElement("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"auto",fontFamily:"var(--font-sans)",fontSize:14,color:"var(--color-ink)"}},React.createElement("thead",null,React.createElement("tr",{style:{background:"var(--color-ink)",color:"var(--color-paper)",position:"sticky",top:0,zIndex:2}},t&&React.createElement("th",{scope:"col",style:{width:44,padding:"0 12px",textAlign:"center",borderRight:"1px solid var(--color-ink-rule)",height:k}},React.createElement("input",{type:"checkbox","aria-label":"Selecionar todas",checked:z,ref:m=>{m&&(m.indeterminate=I)},onChange:F,style:{accentColor:"var(--color-yellow)",cursor:"pointer"}})),o.map((m,b)=>{const f=m.align||"left",y=p===m.key;return React.createElement("th",{key:m.key||b,scope:"col","aria-sort":y?g==="desc"?"descending":"ascending":"none",onClick:()=>T(m),style:{padding:"0 14px",textAlign:f,verticalAlign:"middle",fontFamily:"var(--font-mono)",fontWeight:500,fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-paper)",cursor:m.sortable?"pointer":"default",userSelect:"none",borderRight:b<o.length-1?"1px solid var(--color-ink-rule)":"none",height:k,width:m.width,whiteSpace:"nowrap",position:m.sticky?"sticky":"static",left:m.sticky?t?44:0:"auto",background:m.sticky?"var(--color-ink)":"transparent",zIndex:m.sticky?3:"auto"}},m.headerRender?m.headerRender(m):React.createElement("span",{style:{display:"inline-flex",alignItems:"center"}},"[",m.label,"]",C(m)))}))),React.createElement("tbody",null,e.length===0&&React.createElement("tr",null,React.createElement("td",{colSpan:o.length+(t?1:0),style:{padding:"48px 24px",textAlign:"center",fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",borderBottom:"none"}},d||"[SEM REGISTROS]")),e.map((m,b)=>{const f=m&&m[v]!=null?m[v]:b,y=n.indexOf(f)!==-1,_=b===e.length-1;return React.createElement("tr",{key:f,onClick:l?()=>l(m,b):void 0,style:{background:y?"var(--color-yellow)":b%2===1&&r==="paper"?"var(--color-paper-warm)":"transparent",cursor:l?"pointer":"default",transition:"background 100ms linear"},onMouseEnter:w=>{!y&&l&&(w.currentTarget.style.background="var(--color-paper-deep)")},onMouseLeave:w=>{y||(w.currentTarget.style.background=b%2===1&&r==="paper"?"var(--color-paper-warm)":"transparent")}},t&&React.createElement("td",{style:{padding:"0 12px",textAlign:"center",borderRight:"1px solid "+x,borderBottom:_?"none":"1px solid "+x,height:k},onClick:w=>w.stopPropagation()},React.createElement("input",{type:"checkbox","aria-label":`Selecionar linha ${b+1}`,checked:y,onChange:()=>A(f),style:{accentColor:"var(--color-yellow)",cursor:"pointer"}})),o.map((w,M)=>{const L=w.align||"left",N=m?m[w.key]:null,O=w.render?w.render(m,b):N??"";return React.createElement("td",{key:w.key||M,style:{padding:"8px 14px",textAlign:L,verticalAlign:"middle",borderRight:M<o.length-1?"1px solid "+x:"none",borderBottom:_?"none":"1px solid "+x,height:k,position:w.sticky?"sticky":"static",left:w.sticky?t?44:0:"auto",background:w.sticky?y?"var(--color-yellow)":h:"transparent",zIndex:w.sticky?1:"auto",whiteSpace:w.nowrap?"nowrap":"normal"}},O)}))})))))}function DataTableNameCell({avatar:o,name:e,meta:a,initials:r}){return React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12,minWidth:0}},o?React.createElement("img",{src:o,alt:"",style:{width:32,height:32,objectFit:"cover",border:"2px solid var(--color-ink)",flexShrink:0}}):React.createElement("div",{style:{width:32,height:32,flexShrink:0,background:"var(--color-yellow)",color:"var(--color-ink)",border:"2px solid var(--color-ink)",fontFamily:"var(--font-display)",fontSize:12,display:"inline-flex",alignItems:"center",justifyContent:"center",textTransform:"uppercase",letterSpacing:0}},r||(e?e.slice(0,2):"??")),React.createElement("div",{style:{display:"flex",flexDirection:"column",minWidth:0}},React.createElement("span",{style:{fontFamily:"var(--font-sans)",fontWeight:600,fontSize:14,color:"var(--color-ink)",lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},e),a&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,color:"var(--color-mute)",marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},a)))}var __lkd_toast_state={items:[],listeners:[],nextId:1};function __lkd_toast_emit(){__lkd_toast_state.listeners.forEach(o=>{try{o(__lkd_toast_state.items)}catch{}})}function __lkd_toast_push(o){const e=o&&o.id!=null?o.id:__lkd_toast_state.nextId++,a=Object.assign({title:"",body:"",variant:"default",duration:5e3,action:null},o||{},{id:e});return __lkd_toast_state.items=__lkd_toast_state.items.concat([a]),__lkd_toast_emit(),a.duration>0&&setTimeout(()=>__lkd_toast_dismiss(e),a.duration),e}function __lkd_toast_dismiss(o){__lkd_toast_state.items=__lkd_toast_state.items.filter(e=>e.id!==o),__lkd_toast_emit()}function __lkd_toast_clear(){__lkd_toast_state.items=[],__lkd_toast_emit()}function ToastProvider({position:o="bottom-right",max:e=5}){const[a,r]=useState(__lkd_toast_state.items);useEffect(()=>{const n=s=>r(s.slice(-e));return __lkd_toast_state.listeners.push(n),()=>{__lkd_toast_state.listeners=__lkd_toast_state.listeners.filter(s=>s!==n)}},[e]);const t={"top-left":{top:24,left:24},"top-right":{top:24,right:24},"bottom-left":{bottom:24,left:24},"bottom-right":{bottom:24,right:24}}[o]||{bottom:24,right:24};return a.length===0?null:React.createElement("div",{role:"region","aria-label":"Notifica\xE7\xF5es",style:{position:"fixed",zIndex:200,display:"flex",flexDirection:"column",gap:12,maxWidth:"min(420px, calc(100vw - 32px))",pointerEvents:"none",...t}},a.map(n=>React.createElement(ToastItem,{key:n.id,...n})))}function ToastItem({id:o,title:e,body:a,variant:r="default",action:t}){const n={default:{bg:"var(--color-paper)",border:"var(--color-ink)",fg:"var(--color-ink)",bar:"var(--color-ink)",glyph:"[\u2022]"},info:{bg:"var(--color-paper)",border:"var(--color-ink)",fg:"var(--color-ink)",bar:"var(--color-yellow)",glyph:"[i]"},success:{bg:"var(--color-paper)",border:"var(--color-signal-green)",fg:"var(--color-ink)",bar:"var(--color-signal-green)",glyph:"[\u2713]"},warning:{bg:"var(--color-yellow)",border:"var(--color-ink)",fg:"var(--color-ink)",bar:"var(--color-ink)",glyph:"[!]"},error:{bg:"var(--color-paper)",border:"var(--color-signal-red)",fg:"var(--color-signal-red)",bar:"var(--color-signal-red)",glyph:"[\xD7]"}}[r]||n.default,s=n;return React.createElement("div",{role:r==="error"||r==="warning"?"alert":"status","aria-live":r==="error"||r==="warning"?"assertive":"polite",style:{display:"grid",gridTemplateColumns:"8px 1fr auto",background:s.bg,color:s.fg,border:"2px solid "+s.border,boxShadow:"8px 8px 0 var(--color-ink)",pointerEvents:"auto",fontFamily:"var(--font-sans)"}},React.createElement("div",{style:{background:s.bar},"aria-hidden":"true"}),React.createElement("div",{style:{padding:"12px 14px",minWidth:0}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:s.fg,opacity:.7,marginBottom:4}},React.createElement("span",{style:{marginRight:6}},s.glyph),r.toUpperCase()),e&&React.createElement("div",{style:{fontFamily:"var(--font-display)",fontSize:16,lineHeight:1.1,letterSpacing:0,textTransform:"uppercase",marginBottom:a?4:0}},e),a&&React.createElement("div",{style:{fontSize:13,lineHeight:1.45,color:s.fg}},a),t&&React.createElement("div",{style:{marginTop:8}},React.createElement("button",{type:"button",onClick:()=>{try{t.onClick&&t.onClick()}catch{}__lkd_toast_dismiss(o)},style:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:12,letterSpacing:0,textTransform:"uppercase",padding:"6px 12px",background:"transparent",border:"2px solid "+s.fg,color:s.fg,cursor:"pointer",transition:"all 100ms linear"},onMouseEnter:p=>{p.currentTarget.style.background=s.fg,p.currentTarget.style.color=s.bg},onMouseLeave:p=>{p.currentTarget.style.background="transparent",p.currentTarget.style.color=s.fg}},t.label||"A\xC7\xC3O"," \u2192"))),React.createElement("button",{type:"button","aria-label":"Fechar notifica\xE7\xE3o",onClick:()=>__lkd_toast_dismiss(o),style:{width:36,alignSelf:"stretch",border:"none",borderLeft:"2px solid "+s.border,background:"transparent",color:s.fg,fontFamily:"var(--font-display)",fontSize:14,cursor:"pointer",transition:"all 100ms linear"},onMouseEnter:p=>{p.currentTarget.style.background=s.fg,p.currentTarget.style.color=s.bg},onMouseLeave:p=>{p.currentTarget.style.background="transparent",p.currentTarget.style.color=s.fg}},"\xD7"))}function CommandPalette({items:o=[],open:e,onOpenChange:a,placeholder:r="Buscar aula, m\xF3dulo, her\xF3i, comando...",shortcut:t="k",empty:n="[NADA ENCONTRADO]",title:s="CMD / CTRL + K"}){const p=e!==void 0,[g,u]=useState(!1),v=p?e:g,l=f=>{p||u(f),a&&a(f)},[d,c]=useState(""),[i,k]=useState(0),h=useRef(null),x=useRef(null),S=useRef(null);useEffect(()=>{const f=y=>{const _=(t||"k").toLowerCase();(y.metaKey||y.ctrlKey)&&y.key.toLowerCase()===_&&(y.preventDefault(),l(!v))};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[v,t]),useEffect(()=>{if(!v)return;S.current=document.activeElement;const f=document.body.style.overflow;document.body.style.overflow="hidden",c(""),k(0);const y=setTimeout(()=>{h.current&&h.current.focus()},0);return()=>{clearTimeout(y),document.body.style.overflow=f,S.current&&S.current.focus&&S.current.focus()}},[v]);const z=(d||"").trim().toLowerCase(),I=z?o.filter(f=>[f.label,f.hint,f.section,...f.keywords||[]].filter(Boolean).join(" ").toLowerCase().indexOf(z)!==-1):o,F=[],A={};I.forEach(f=>{const y=f.section||"RESULTADOS";A[y]==null&&(A[y]=F.length,F.push({name:y,items:[]})),F[A[y]].items.push(f)});const T=I,C=T.length>0?Math.max(0,Math.min(i,T.length-1)):0;useEffect(()=>{k(0)},[d]);const m=f=>{if(f.key==="ArrowDown")f.preventDefault(),k(y=>Math.min((T.length||1)-1,y+1));else if(f.key==="ArrowUp")f.preventDefault(),k(y=>Math.max(0,y-1));else if(f.key==="Home")f.preventDefault(),k(0);else if(f.key==="End")f.preventDefault(),k(Math.max(0,T.length-1));else if(f.key==="Enter"){f.preventDefault();const y=T[C];if(y){try{y.onSelect&&y.onSelect(y)}catch{}l(!1)}}else f.key==="Escape"&&(f.preventDefault(),l(!1))};if(!v)return null;let b=-1;return React.createElement("div",{role:"dialog","aria-modal":"true","aria-label":"Paleta de comandos",onClick:f=>{f.target===f.currentTarget&&l(!1)},style:{position:"fixed",inset:0,zIndex:180,background:"var(--color-paper-warm)",display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"10vh 24px"}},React.createElement("div",{style:{width:"min(640px, 100%)",background:"var(--color-paper)",color:"var(--color-ink)",border:"2px solid var(--color-ink)",boxShadow:"12px 12px 0 var(--color-ink)",display:"flex",flexDirection:"column",maxHeight:"80vh"}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 16px",borderBottom:"2px solid var(--color-ink)",background:"var(--color-ink)",color:"var(--color-paper)",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},React.createElement("span",null,"[",s,"]"),React.createElement("span",{style:{color:"var(--color-mute-soft)"}},"ESC PARA FECHAR")),React.createElement("div",{style:{display:"flex",alignItems:"center",borderBottom:"2px solid var(--color-ink)"}},React.createElement("span",{"aria-hidden":"true",style:{padding:"0 14px",fontFamily:"var(--font-display)",fontSize:18,color:"var(--color-ink)"}},"\u203A"),React.createElement("input",{ref:h,type:"text",value:d,onChange:f=>c(f.target.value),onKeyDown:m,placeholder:r,"aria-label":"Buscar","aria-controls":"lkd-cmdk-listbox","aria-activedescendant":T[C]?`lkd-cmdk-opt-${T[C].id}`:void 0,style:{flex:1,height:52,border:"none",outline:"none",background:"transparent",color:"var(--color-ink)",fontFamily:"var(--font-sans)",fontSize:18,padding:"0 14px 0 0",letterSpacing:0}}),d&&React.createElement("button",{type:"button","aria-label":"Limpar busca",onClick:()=>c(""),style:{margin:"0 10px",width:28,height:28,border:"2px solid var(--color-ink)",background:"var(--color-paper)",color:"var(--color-ink)",cursor:"pointer",fontFamily:"var(--font-display)",fontSize:12}},"\xD7")),React.createElement("div",{id:"lkd-cmdk-listbox",role:"listbox",ref:x,style:{overflowY:"auto",maxHeight:"min(60vh, 480px)"}},T.length===0&&React.createElement("div",{style:{padding:"40px 18px",textAlign:"center",fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)"}},n),F.map((f,y)=>React.createElement("div",{key:f.name+y},React.createElement("div",{style:{padding:"10px 18px 6px",fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",borderTop:y===0?"none":"1px solid var(--color-rule-cool)"}},"[",f.name,"]"),f.items.map(_=>{b++;const w=b===C;return React.createElement("div",{key:_.id,id:`lkd-cmdk-opt-${_.id}`,role:"option","aria-selected":w,onMouseEnter:()=>k(b),onClick:()=>{try{_.onSelect&&_.onSelect(_)}catch{}l(!1)},style:{display:"flex",alignItems:"center",gap:12,padding:"10px 18px",background:w?"var(--color-yellow)":"transparent",color:"var(--color-ink)",borderLeft:w?"4px solid var(--color-ink)":"4px solid transparent",cursor:"pointer",transition:"background 80ms linear"}},React.createElement("span",{"aria-hidden":"true",style:{width:24,fontFamily:"var(--font-mono)",fontSize:14,color:"var(--color-ink)"}},_.icon||"\u203A"),React.createElement("span",{style:{flex:1,fontFamily:"var(--font-sans)",fontSize:14,fontWeight:600,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},_.label),_.hint&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,color:w?"var(--color-ink)":"var(--color-mute)",whiteSpace:"nowrap"}},_.hint))})))),React.createElement("div",{style:{padding:"8px 16px",borderTop:"2px solid var(--color-ink)",background:"var(--color-paper-warm)",fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}},React.createElement("span",null,"\u2191\u2193 navegar \xB7 \u23CE abrir \xB7 ESC fechar"),React.createElement("span",null,T.length," ",T.length===1?"item":"itens"))))}function Stepper({steps:o=[],current:e=0,variant:a="horizontal",onStepClick:r,showContent:t=!0,style:n}){if(!o.length)return null;const s=a==="vertical",p=o.map((v,l)=>v.status?v.status:l<e?"done":l===e?"active":"idle"),g={idle:{bg:"var(--color-paper)",fg:"var(--color-mute)",border:"var(--color-rule-cool)",num:"var(--color-mute)"},active:{bg:"var(--color-yellow)",fg:"var(--color-ink)",border:"var(--color-ink)",num:"var(--color-ink)"},done:{bg:"var(--color-ink)",fg:"var(--color-yellow)",border:"var(--color-ink)",num:"var(--color-yellow)"},error:{bg:"var(--color-signal-red)",fg:"var(--color-paper)",border:"var(--color-signal-red)",num:"var(--color-paper)"}},u=({i:v,status:l})=>{const d=g[l]||g.idle,c=!!r&&(l==="done"||l==="idle"||l==="active"),i=l==="done"?"\u2713":l==="error"?"!":String(v+1).padStart(2,"0");return React.createElement("button",{type:"button",disabled:!c,onClick:c?()=>r(v):void 0,"aria-current":l==="active"?"step":void 0,style:{width:40,height:40,flexShrink:0,background:d.bg,color:d.num,border:`2px solid ${d.border}`,fontFamily:"var(--font-display)",fontSize:14,letterSpacing:0,textTransform:"uppercase",cursor:c?"pointer":"default",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 100ms linear"}},i)};return s?React.createElement("div",{style:n,"aria-label":"Etapas (Stepper)"},React.createElement("ol",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:0}},o.map((v,l)=>{const d=p[l],c=g[d]||g.idle,i=l===o.length-1;return React.createElement("li",{key:l,style:{display:"grid",gridTemplateColumns:"40px 1fr",gap:16,position:"relative"}},React.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4}},React.createElement(u,{i:l,status:d}),!i&&React.createElement("div",{style:{width:2,flex:1,minHeight:28,background:d==="done"?"var(--color-ink)":"var(--color-rule-cool)"}})),React.createElement("div",{style:{paddingBottom:i?0:20}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",marginBottom:4}},"[ETAPA ",String(l+1).padStart(2,"0")," \xB7 ",d.toUpperCase(),"]"),React.createElement("div",{style:{fontFamily:"var(--font-display)",fontSize:20,lineHeight:1.1,letterSpacing:0,textTransform:"uppercase",color:"var(--color-ink)"}},v.label),v.hint&&React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontSize:14,lineHeight:1.4,color:"var(--color-mute)",marginTop:4}},v.hint),t&&d==="active"&&v.content&&React.createElement("div",{style:{marginTop:12,padding:16,border:"2px solid var(--color-ink)",background:"var(--color-paper-warm)"}},v.content)))}))):React.createElement("div",{style:n,"aria-label":"Etapas (Stepper)"},React.createElement("ol",{style:{listStyle:"none",margin:0,padding:0,display:"grid",gridTemplateColumns:`repeat(${o.length}, 1fr)`,gap:0}},o.map((v,l)=>{const d=p[l],c=p[l+1],i=l===o.length-1;return React.createElement("li",{key:l,style:{display:"flex",flexDirection:"column",alignItems:"stretch",minWidth:0}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:0}},React.createElement(u,{i:l,status:d}),!i&&React.createElement("div",{style:{flex:1,height:2,marginLeft:0,background:d==="done"||c==="done"||c==="active"?"var(--color-ink)":"var(--color-rule-cool)"}})),React.createElement("div",{style:{paddingTop:12,paddingRight:i?0:12}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:10,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",marginBottom:2}},"[ETAPA ",String(l+1).padStart(2,"0"),"]"),React.createElement("div",{style:{fontFamily:"var(--font-display)",fontSize:14,lineHeight:1.15,letterSpacing:0,textTransform:"uppercase",color:d==="idle"?"var(--color-mute)":"var(--color-ink)"}},v.label),v.hint&&React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontSize:12,lineHeight:1.4,color:"var(--color-mute)",marginTop:4}},v.hint)))})),t&&o[e]&&o[e].content&&React.createElement("div",{style:{marginTop:20,padding:20,border:"2px solid var(--color-ink)",background:"var(--color-paper-warm)"}},o[e].content))}function Marquee({items:o,dark:e=!1}){return React.createElement("div",{className:`lkd-marquee${e?" lkd-marquee--dark":""}`},React.createElement("div",{className:"lkd-marquee__track","aria-hidden":"true"},[o,o].map((r,t)=>React.createElement("div",{className:"lkd-marquee__group",key:t},r.map((n,s)=>React.createElement("span",{className:"lkd-marquee__item",key:`${t}-${s}`},React.createElement("span",{className:"lkd-marquee__text"},n),React.createElement("span",{className:"lkd-marquee__dot"},"\u25CF")))))),React.createElement("style",null,`
        .lkd-marquee {
          --marquee-bg: var(--color-yellow);
          --marquee-fg: var(--color-ink);
          background: var(--marquee-bg);
          color: var(--marquee-fg);
          border-top: 2px solid var(--color-ink);
          border-bottom: 2px solid var(--color-ink);
          overflow: hidden;
          width: 100%;
          contain: paint;
        }

        .lkd-marquee--dark {
          --marquee-bg: var(--color-ink);
          --marquee-fg: var(--color-yellow);
        }

        .lkd-marquee__track {
          width: max-content;
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: lkd-marquee 36s linear infinite;
          will-change: transform;
        }

        .lkd-marquee__group {
          display: inline-flex;
          align-items: center;
          flex: 0 0 auto;
        }

        .lkd-marquee__item {
          min-height: 86px;
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding: 16px 30px 17px 0;
          font-family: var(--font-display);
          font-size: 48px;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
          color: currentColor;
          white-space: nowrap;
          word-break: normal;
          overflow-wrap: normal;
        }

        .lkd-marquee__text {
          display: inline-block;
          transform: translateY(.04em);
        }

        .lkd-marquee__dot {
          font-family: var(--font-mono);
          font-size: 18px;
          line-height: 1;
          transform: translateY(-.03em);
        }

        @media (max-width: 900px) {
          .lkd-marquee__item {
            min-height: 74px;
            gap: 24px;
            padding: 14px 24px 15px 0;
            font-size: 40px;
          }
        }

        @media (max-width: 520px) {
          .lkd-marquee__item {
            min-height: 64px;
            gap: 18px;
            padding: 12px 18px 13px 0;
            font-size: 32px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lkd-marquee__track {
            animation: none;
            transform: translateX(0);
          }
        }

        @keyframes lkd-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
      `))}const MARKETING_NAV_CSS=`
  .lkd-nav-shell,
  .lkd-nav-shell * {
    box-sizing: border-box;
  }

  .lkd-nav-shell a,
  .lkd-nav-shell a:hover,
  .lkd-nav-shell a:focus-visible {
    text-decoration: none !important;
  }

  .lkd-offer-bar {
    background: var(--color-ink);
    color: var(--color-yellow);
    padding: 9px 32px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing:0;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .lkd-nav {
    width: 100%;
    min-height: 72px;
    background: var(--color-paper);
    color: var(--color-ink);
    border-bottom: 2px solid var(--color-ink);
    display: flex !important;
    align-items: center;
    gap: clamp(16px, 2vw, 32px);
    padding: 0 32px;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .lkd-nav--dark {
    background: var(--color-ink);
    color: var(--color-yellow);
    border-bottom-color: var(--color-yellow);
  }

  .lkd-nav__brand {
    display: inline-flex !important;
    align-items: center !important;
    flex: 0 0 auto;
    min-height: 40px !important;
    color: inherit;
  }

  .lkd-nav__lockup {
    display: block;
    width: 190px;
    height: auto;
  }

  .lkd-nav--compact .lkd-nav__lockup {
    width: 180px;
  }

  .lkd-nav__mark {
    display: none;
    width: 38px;
    height: 38px;
  }

  .lkd-nav__links {
    min-width: 0;
    display: flex !important;
    align-items: center;
    gap: clamp(14px, 2vw, 26px);
    margin-left: clamp(0px, 1.4vw, 24px);
    flex: 1 1 auto;
    width: auto !important;
    overflow: visible !important;
  }

  .lkd-nav__link,
  .lkd-nav__summary,
  .lkd-nav__mobile-summary {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing:0;
    color: currentColor;
    line-height: 1;
    white-space: nowrap !important;
    word-break: normal !important;
    overflow-wrap: normal !important;
  }

  .lkd-nav__link {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    padding: 4px 0 6px;
    border-bottom: 2px solid transparent;
    transition: color 100ms linear, border-color 100ms linear;
  }

  .lkd-nav__link:hover,
  .lkd-nav__link:focus-visible,
  .lkd-nav__summary:hover,
  .lkd-nav__summary:focus-visible {
    color: var(--color-mute);
    outline: 0;
  }

  .lkd-nav--dark .lkd-nav__link:hover,
  .lkd-nav--dark .lkd-nav__link:focus-visible,
  .lkd-nav--dark .lkd-nav__summary:hover,
  .lkd-nav--dark .lkd-nav__summary:focus-visible {
    color: var(--color-paper);
  }

  .lkd-nav__link.is-active,
  .lkd-nav__group.is-active > .lkd-nav__summary {
    border-bottom-color: currentColor;
  }

  .lkd-nav__group {
    position: relative;
    flex: 0 0 auto;
  }

  .lkd-nav__summary {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px;
    padding: 4px 0 6px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    list-style: none;
  }

  .lkd-nav__summary::-webkit-details-marker,
  .lkd-nav__mobile-summary::-webkit-details-marker {
    display: none;
  }

  .lkd-nav__chevron {
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1;
  }

  .lkd-nav__submenu {
    position: absolute;
    top: calc(100% + 10px);
    left: -12px;
    min-width: 224px;
    display: none;
    gap: 0;
    padding: 8px;
    background: var(--color-paper);
    color: var(--color-ink);
    border: 2px solid var(--color-ink);
    box-shadow: 8px 8px 0 var(--color-ink);
    z-index: 80;
  }

  .lkd-nav--dark .lkd-nav__submenu {
    background: var(--color-ink);
    color: var(--color-yellow);
    border-color: var(--color-yellow);
    box-shadow: 8px 8px 0 var(--color-yellow);
  }

  .lkd-nav__group[open] .lkd-nav__submenu,
  .lkd-nav__group:hover .lkd-nav__submenu,
  .lkd-nav__group:focus-within .lkd-nav__submenu {
    display: grid;
  }

  .lkd-nav__submenu-link {
    display: flex !important;
    align-items: center !important;
    min-height: 40px !important;
    padding: 0 12px;
    color: currentColor;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 700;
    letter-spacing:0;
    text-transform: uppercase;
    white-space: nowrap !important;
    border: 1px solid transparent;
  }

  .lkd-nav__submenu-link:hover,
  .lkd-nav__submenu-link:focus-visible,
  .lkd-nav__submenu-link.is-active {
    color: var(--color-ink);
    background: var(--color-yellow);
    border-color: currentColor;
    outline: 0;
  }

  .lkd-nav__actions {
    margin-left: auto !important;
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    flex: 0 0 auto;
    width: auto !important;
  }

  .lkd-nav__action {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center;
    gap: 10px;
    padding: 9px 14px;
    border: 2px solid transparent;
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 800;
    letter-spacing:0;
    line-height: 1;
    text-transform: uppercase;
    color: currentColor;
    white-space: nowrap !important;
    word-break: normal !important;
    overflow-wrap: normal !important;
    transition: color 100ms linear, background 100ms linear, transform 100ms linear, box-shadow 100ms linear;
  }

  .lkd-nav__action--login:hover,
  .lkd-nav__action--login:focus-visible {
    color: var(--color-mute);
    outline: 0;
  }

  .lkd-nav--dark .lkd-nav__action--login:hover,
  .lkd-nav--dark .lkd-nav__action--login:focus-visible {
    color: var(--color-paper);
  }

  .lkd-nav__action--primary {
    background: var(--color-yellow);
    color: var(--color-ink);
    border-color: var(--color-ink);
  }

  .lkd-nav--dark .lkd-nav__action--primary {
    border-color: var(--color-yellow);
  }

  .lkd-nav__action--primary:hover,
  .lkd-nav__action--primary:focus-visible {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--color-ink);
    background: var(--color-ink);
    color: var(--color-yellow);
    outline: 0;
  }

  .lkd-nav--dark .lkd-nav__action--primary:hover,
  .lkd-nav--dark .lkd-nav__action--primary:focus-visible {
    box-shadow: 5px 5px 0 var(--color-yellow);
    background: var(--color-yellow);
    color: var(--color-ink);
  }

  .lkd-nav__mobile {
    display: none;
    margin-left: auto;
    color: currentColor;
  }

  .lkd-nav__mobile-summary {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center;
    gap: 10px;
    padding: 0 12px;
    border: 2px solid currentColor;
    cursor: pointer;
    list-style: none;
  }

  .lkd-nav__mobile-panel {
    position: absolute;
    left: 16px;
    right: 16px;
    top: calc(100% + 10px);
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    padding: 8px;
    background: var(--color-paper);
    color: var(--color-ink);
    border: 2px solid var(--color-ink);
    box-shadow: 8px 8px 0 var(--color-ink);
    z-index: 90;
  }

  .lkd-nav__mobile:not([open]) .lkd-nav__mobile-panel {
    display: none;
  }

  .lkd-nav__mobile[open] .lkd-nav__mobile-panel {
    display: grid;
  }

  .lkd-nav--dark .lkd-nav__mobile-panel {
    background: var(--color-ink);
    color: var(--color-yellow);
    border-color: var(--color-yellow);
    box-shadow: 8px 8px 0 var(--color-yellow);
  }

  .lkd-nav__mobile-link {
    min-height: 44px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between;
    padding: 0 12px;
    color: currentColor;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 800;
    letter-spacing:0;
    text-transform: uppercase;
    white-space: nowrap !important;
  }

  .lkd-nav__mobile-link:hover,
  .lkd-nav__mobile-link:focus-visible,
  .lkd-nav__mobile-link.is-active {
    background: var(--color-yellow);
    color: var(--color-ink);
    outline: 0;
  }

  @media (max-width: 1180px) {
    .lkd-nav {
      min-height: 68px;
      padding-left: 24px;
      padding-right: 24px;
      gap: 20px;
    }

    .lkd-nav__lockup {
      display: none !important;
    }

    .lkd-nav__mark {
      display: block !important;
    }

    .lkd-nav__links {
      margin-left: 0;
    }
  }

  @media (max-width: 980px) {
    .lkd-nav__action--login {
      display: none !important;
    }
  }

  @media (max-width: 900px) {
    .lkd-offer-bar {
      padding: 8px 16px;
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }

    .lkd-nav {
      min-height: 64px !important;
      display: grid !important;
      grid-template-columns: auto minmax(0, 1fr);
      align-items: center !important;
      gap: 10px 14px !important;
      padding: 10px 16px !important;
      overflow: visible !important;
    }

    .lkd-nav > .lkd-nav__links {
      display: none !important;
      width: auto !important;
    }

    .lkd-nav > .lkd-nav__mobile {
      display: block !important;
      justify-self: end;
      width: auto !important;
      max-width: 100% !important;
    }

    .lkd-nav > .lkd-nav__actions {
      grid-column: 1 / -1;
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100% !important;
      max-width: 100% !important;
      margin-left: 0 !important;
      gap: 8px !important;
      overflow: visible !important;
    }

    .lkd-nav__action {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 11px;
    }

    .lkd-nav__action--login {
      display: inline-flex !important;
    }
  }

  @media (max-width: 420px) {
    .lkd-nav > .lkd-nav__actions {
      grid-template-columns: 1fr;
    }
  }
`;function MarketingNavStyles(){return React.createElement("style",null,MARKETING_NAV_CSS)}function marketingNavModel(o="",e){if(Array.isArray(e)&&e.length){const n=e.filter(s=>s.label!=="In\xEDcio");return{primary:n.slice(0,3),secondary:n.slice(3),mobile:n}}const a={label:"Comunidade",href:`${o}curso.html`},r={label:"Ca\xE7ada",href:`${o}rpg/cacada-mediocridade.html`},t=[{label:"Cultura",href:`${o}cultura-lendaria.html`},{label:"Fundador",href:`${o}fundador.html`},{label:"Manifesto",href:`${o}manifesto/index.html`},{label:"Sistema",href:`${o}styleguide-retro.html`}];return{primary:[a,r],secondary:t,mobile:[a,r,...t]}}function navIsActive(o,e){return o===e||o==="Curso"&&e==="Comunidade"}function MarketingLogo({basePath:o="",dark:e=!1}={}){const a=e?"white":"black";return React.createElement("a",{className:"lkd-nav__brand",href:`${o}index.html`,"aria-label":"Ir para o in\xEDcio da Academia Lend\xE1r[IA]"},React.createElement("img",{className:"lkd-nav__lockup",src:`${o}assets/logo/lockup-${a}.svg`,width:"190",height:"22",alt:"","aria-hidden":"true"}),React.createElement("img",{className:"lkd-nav__mark",src:`${o}assets/logo/mark-${a}.svg`,width:"38",height:"38",alt:"","aria-hidden":"true"}))}function MarketingNavLinks({active:o,model:e}){const a=e.primary.slice(0,1),r=e.primary.slice(1),t=e.secondary.some(n=>navIsActive(o,n.label));return React.createElement("div",{className:"lkd-nav__links"},a.map(n=>React.createElement("a",{key:n.label,href:n.href,className:`lkd-nav__link${navIsActive(o,n.label)?" is-active":""}`},n.label)),e.secondary.length>0&&React.createElement("details",{className:`lkd-nav__group${t?" is-active":""}`},React.createElement("summary",{className:"lkd-nav__summary"},"Explorar ",React.createElement("span",{className:"lkd-nav__chevron"},"\u2193")),React.createElement("div",{className:"lkd-nav__submenu"},e.secondary.map(n=>React.createElement("a",{key:n.label,href:n.href,className:`lkd-nav__submenu-link${navIsActive(o,n.label)?" is-active":""}`},n.label)))),r.map(n=>React.createElement("a",{key:n.label,href:n.href,className:`lkd-nav__link${navIsActive(o,n.label)?" is-active":""}`},n.label)))}function MarketingMobileMenu({active:o,model:e}){return React.createElement("details",{className:"lkd-nav__mobile"},React.createElement("summary",{className:"lkd-nav__mobile-summary"},"Menu ",React.createElement("span",{className:"lkd-nav__chevron"},"\u2630")),React.createElement("div",{className:"lkd-nav__mobile-panel"},e.mobile.map(a=>React.createElement("a",{key:a.label,href:a.href,className:`lkd-nav__mobile-link${navIsActive(o,a.label)?" is-active":""}`},a.label," ",React.createElement("span",null,"\u2192")))))}function MarketingNavActions({basePath:o=""}={}){return React.createElement("div",{className:"lkd-nav__actions"},React.createElement("a",{className:"lkd-nav__action lkd-nav__action--login",href:`${o}courses/platform.html`},"Entrar ",React.createElement("span",null,"\u2192")),React.createElement("a",{className:"lkd-nav__action lkd-nav__action--primary",href:`${o}curso.html#oferta`},"Garantir vaga ",React.createElement("span",null,"\u2192")))}function Nav({active:o="In\xEDcio",showCountdown:e=!0,basePath:a=""}={}){const r=marketingNavModel(a),[t,n]=useState({h:23,m:47,s:12});useEffect(()=>{const p=setInterval(()=>{n(g=>{let u=g.s-1,v=g.m,l=g.h;return u<0&&(u=59,v-=1),v<0&&(v=59,l-=1),l<0&&(l=23),{h:l,m:v,s:u}})},1e3);return()=>clearInterval(p)},[]);const s=p=>String(p).padStart(2,"0");return React.createElement("div",{className:"lkd-nav-shell"},React.createElement(MarketingNavStyles,null),e&&React.createElement("div",{className:"lkd-offer-bar"},React.createElement("span",null,"[TURMA 04 ABERTA] \xB7 \xDALTIMAS 48H \xB7 30% OFF NO PLANO ANUAL"),React.createElement("span",{style:{display:"flex",gap:6}},React.createElement("b",null,s(t.h)),":",React.createElement("b",null,s(t.m)),":",React.createElement("b",null,s(t.s)))),React.createElement("nav",{className:"lkd-nav lkd-nav--light","aria-label":"Navega\xE7\xE3o principal"},React.createElement(MarketingLogo,{basePath:a}),React.createElement(MarketingNavLinks,{active:o,model:r}),React.createElement(MarketingMobileMenu,{active:o,model:r}),React.createElement(MarketingNavActions,{basePath:a})))}function TopNav({active:o="In\xEDcio",links:e,basePath:a="",showCta:r=!0,variant:t="light"}={}){const n=t==="dark",s=marketingNavModel(a,e);return React.createElement("div",{className:"lkd-nav-shell"},React.createElement(MarketingNavStyles,null),React.createElement("nav",{className:`lkd-nav lkd-nav--compact ${n?"lkd-nav--dark":"lkd-nav--light"}`,"aria-label":"Navega\xE7\xE3o principal"},React.createElement(MarketingLogo,{basePath:a,dark:n}),React.createElement(MarketingNavLinks,{active:o,model:s}),React.createElement(MarketingMobileMenu,{active:o,model:s}),r&&React.createElement(MarketingNavActions,{basePath:a})))}function Colofon({edition:o="VOLUME I \xB7 OUT 2025",signer:e="ALAN NICOLAS",subtitle:a="CONSTRUINDO O INFINITO, HOJE",basePath:r=""}={}){return React.createElement("footer",{style:{background:"var(--color-paper-warm)",color:"var(--color-ink)",borderTop:"2px solid var(--color-ink)"}},React.createElement("div",{style:{maxWidth:1180,margin:"0 auto",padding:"56px 32px 40px"}},React.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr auto",gap:32,alignItems:"end"}},React.createElement("div",null,React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)"}},"[COLOFON \xB7 ",o,"]"),React.createElement("div",{style:{fontFamily:"var(--font-display)",fontSize:56,lineHeight:.9,letterSpacing:0,textTransform:"uppercase",marginTop:12}},"Academia",React.createElement("br",null),"Lend\xE1r[IA].")),React.createElement("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,lineHeight:1.6,color:"var(--color-ink)",maxWidth:"52ch",margin:0,justifySelf:"center"}},"Impresso digitalmente em Archivo Black + Archivo + JetBrains\xA0Mono. Composto numa grade de 8\xA0px, encadernado com bordas duras de 2\xA0px e sombras 12/12. Feito no Brasil, em portugu\xEAs, para quem constr\xF3i."),React.createElement("div",{style:{textAlign:"right"}},React.createElement("span",{style:{fontFamily:"var(--font-display)",fontSize:80,lineHeight:.85,letterSpacing:0,color:"var(--color-ink)"},className:"lkd-inf"},"\u221E"),React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",marginTop:4}},a))),React.createElement("div",{style:{marginTop:40,paddingTop:16,borderTop:"1px solid var(--color-rule)",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)",flexWrap:"wrap",gap:16}},React.createElement("span",null,"\xA9 2025 \xB7 Assinado por ",e," \xB7 CNPJ 00.000.000/0001-00"),React.createElement("span",{style:{display:"flex",gap:18}},React.createElement("a",{href:`${r}index.html`,style:{color:"var(--color-ink)"}},"In\xEDcio"),React.createElement("a",{href:`${r}curso.html`,style:{color:"var(--color-ink)"}},"Comunidade"),React.createElement("a",{href:`${r}cultura-lendaria.html`,style:{color:"var(--color-ink)"}},"Cultura"),React.createElement("a",{href:`${r}rpg/cacada-mediocridade.html`,style:{color:"var(--color-ink)"}},"Ca\xE7ada"),React.createElement("a",{href:`${r}fundador.html`,style:{color:"var(--color-ink)"}},"Fundador"),React.createElement("a",{href:`${r}manifesto/index.html`,style:{color:"var(--color-ink)"}},"Manifesto")))))}function Footer({basePath:o=""}={}){const e=[{l:"In\xEDcio",href:`${o}index.html`},{l:"Comunidade",href:`${o}curso.html`},{l:"Cultura",href:`${o}cultura-lendaria.html`},{l:"Ca\xE7ada",href:`${o}rpg/cacada-mediocridade.html`},{l:"Fundador",href:`${o}fundador.html`},{l:"Manifesto",href:`${o}manifesto/index.html`},{l:"Sistema",href:`${o}styleguide-retro.html`}],a=[{l:"Instagram"},{l:"YouTube"},{l:"LinkedIn"}];return React.createElement("footer",{style:{background:"var(--color-ink)",color:"var(--color-paper)",borderTop:"2px solid var(--color-ink)"}},React.createElement("div",{style:{maxWidth:1320,margin:"0 auto",padding:"56px 32px 28px"}},React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:48,alignItems:"start"}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"flex-start"}},React.createElement("img",{src:`${o}assets/logo/lockup-white.svg`,width:"240",height:"28",alt:"Academia Lend\xE1r[IA]",style:{display:"block"}}),React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},"Construindo o ",React.createElement("span",{className:"lkd-inf",style:{color:"var(--color-yellow)"}},"\u221E"),", hoje.")),React.createElement("nav",{"aria-label":"Navega\xE7\xE3o do rodap\xE9",style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap",fontFamily:"var(--font-sans)",fontWeight:500,fontSize:13,textTransform:"uppercase",letterSpacing:0}},e.map(r=>React.createElement("a",{key:r.l,href:r.href,className:"lkd-tr",style:{color:"var(--color-paper)"},onMouseEnter:t=>{t.currentTarget.style.color="var(--color-yellow)"},onMouseLeave:t=>{t.currentTarget.style.color="var(--color-paper)"}},r.l)))),React.createElement("div",{style:{marginTop:32,paddingTop:16,borderTop:"1px solid rgba(246,195,36,.25)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16,fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},React.createElement("span",null,"\xA9 2025 Academia Lend\xE1r[IA] \xB7 CNPJ 00.000.000/0001-00 \xB7 Feito no Brasil"),React.createElement("span",{style:{display:"flex",gap:20}},a.map(r=>r.href?React.createElement("a",{key:r.l,href:r.href,className:"lkd-tr",style:{color:"var(--color-yellow)"}},r.l):React.createElement("span",{key:r.l,"aria-disabled":"true",style:{color:"var(--color-yellow)",opacity:.65}},r.l))))))}function ModuleCard({num:o,title:e,hours:a,lessons:r,projects:t,status:n="default",featured:s=!1}){const[p,g]=useState(!1),u=n==="locked";return React.createElement("div",{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{background:s?"var(--color-ink)":u?"var(--color-paper-warm)":"var(--color-paper)",color:s?"var(--color-yellow)":"var(--color-ink)",border:"2px solid var(--color-ink)",padding:22,display:"flex",flexDirection:"column",gap:12,transition:"all 120ms linear",transform:p&&!u?"translate(-2px, -2px)":"none",boxShadow:p&&!u?s?"6px 6px 0 var(--color-yellow)":"6px 6px 0 var(--color-ink)":"none",minHeight:220,opacity:u?.65:1,cursor:u?"default":"pointer"}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},React.createElement("span",null,"[M\xD3DULO ",String(o).padStart(2,"0"),"]"),React.createElement("span",{style:{fontWeight:500}},a)),React.createElement("h3",{style:{fontFamily:"var(--font-display)",fontSize:24,lineHeight:.95,letterSpacing:0,textTransform:"uppercase",margin:0}},e),React.createElement("div",{style:{marginTop:"auto",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},React.createElement("span",null,u?"EM BREVE":`${r} AULAS \xB7 ${t} PROJ.`),React.createElement("span",{style:{fontSize:18}},u?"\u2715":"\u2192")))}function GiantQuote({size:o=140,color:e="var(--color-yellow)",style:a,mark:r="\xAB"}){return React.createElement("span",{"aria-hidden":"true",style:{fontFamily:"var(--font-display)",fontSize:o,lineHeight:.7,letterSpacing:0,color:e,display:"inline-block",pointerEvents:"none",userSelect:"none",...a}},r)}function Testimonial({quote:o,name:e,role:a,initials:r,dark:t=!0}){return React.createElement("div",{style:{background:t?"var(--color-ink)":"var(--color-paper)",color:t?"var(--color-yellow)":"var(--color-ink)",padding:28,display:"flex",flexDirection:"column",gap:18,border:t?"none":"2px solid var(--color-ink)",minHeight:240,position:"relative",overflow:"hidden"}},React.createElement(GiantQuote,{size:120,color:"var(--color-yellow)",style:{position:"absolute",top:-8,left:10,opacity:t?1:.9}}),React.createElement("blockquote",{style:{margin:"44px 0 0",fontFamily:"var(--font-display)",fontSize:24,lineHeight:1.1,letterSpacing:0,textTransform:"none",color:t?"var(--color-yellow)":"var(--color-ink)",position:"relative"}},o),React.createElement("div",{style:{marginTop:"auto",display:"flex",alignItems:"center",gap:12}},React.createElement(Avatar,{initials:r,color:"yellow"}),React.createElement("div",null,React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:14}},e),React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:t?"var(--color-paper)":"var(--color-mute)",marginTop:2}},a))))}function PricingCard({plan:o,price:e,oldPrice:a,installments:r,features:t,cta:n,featured:s=!1}){return React.createElement("div",{style:{background:s?"var(--color-yellow)":"var(--color-paper)",border:"2px solid var(--color-ink)",padding:32,display:"flex",flexDirection:"column",gap:20,boxShadow:s?"12px 12px 0 var(--color-ink)":"none"}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:0,textTransform:"uppercase"}},"[PLANO \xB7 ",o.toUpperCase(),s?" \xB7 RECOMENDADO":"","]"),React.createElement("div",{style:{fontFamily:"var(--font-display)",fontSize:56,lineHeight:.9,letterSpacing:0,textTransform:"uppercase"}},o==="Lend\xE1rio"?React.createElement(React.Fragment,null,"Curso",React.createElement("br",null),"+ comunidade."):React.createElement(React.Fragment,null,"Acesso",React.createElement("br",null),"ao curso.")),React.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:12}},React.createElement("span",{style:{fontFamily:"var(--font-display)",fontSize:72,lineHeight:.85,letterSpacing:0}},"R$\xA0",e),React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,letterSpacing:0,textTransform:"uppercase"}},r),a&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,letterSpacing:0,textDecoration:"line-through",color:"var(--color-mute)"}},"R$ ",a)),React.createElement("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10}},t.map(p=>React.createElement("li",{key:p,style:{display:"flex",gap:12,alignItems:"flex-start",fontFamily:"var(--font-sans)",fontSize:15,lineHeight:1.4}},React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontWeight:700,color:"var(--color-ink)",flexShrink:0}},"+"),p))),React.createElement(Button,{variant:s?"dark":"secondary",size:"lg",arrow:!0,style:{marginTop:"auto",justifyContent:"center",width:"100%"}},n))}function Faq({items:o}){const[e,a]=useState(0);return React.createElement("div",{style:{borderTop:"2px solid var(--color-ink)"}},o.map((r,t)=>React.createElement("div",{key:t,style:{borderBottom:"1px solid var(--color-rule-cool)"}},React.createElement("button",{onClick:()=>a(e===t?-1:t),style:{width:"100%",textAlign:"left",padding:"20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",background:"transparent",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontWeight:700,fontSize:18,color:"var(--color-ink)"}},React.createElement("span",null,r.q),React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:20,transform:e===t?"rotate(45deg)":"none",transition:"transform 100ms linear"}},"+")),e===t&&React.createElement("p",{style:{fontFamily:"var(--font-sans)",fontSize:15,lineHeight:1.55,color:"var(--color-mute)",maxWidth:"70ch",paddingBottom:20,margin:0}},r.a))))}const SidebarIcon=({name:o})=>{const e={home:React.createElement(React.Fragment,null,React.createElement("path",{d:"M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"})),trail:React.createElement(React.Fragment,null,React.createElement("path",{d:"M4 4h6v6H4z"}),React.createElement("path",{d:"M14 14h6v6h-6z"}),React.createElement("path",{d:"M10 7h4v0"}),React.createElement("path",{d:"M17 10v4"}),React.createElement("path",{d:"M7 14h4M14 17v-4"})),project:React.createElement(React.Fragment,null,React.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),React.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),React.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),React.createElement("rect",{x:"3",y:"14",width:"7",height:"7"})),book:React.createElement(React.Fragment,null,React.createElement("path",{d:"M3 5a2 2 0 0 1 2-2h4a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H5a2 2 0 0 1-2-2z"}),React.createElement("path",{d:"M13 7a4 4 0 0 1 4-4h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5a3 3 0 0 0-3 3z"})),materials:React.createElement(React.Fragment,null,React.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}),React.createElement("path",{d:"M14 2v6h6M9 13h6M9 17h4"})),exercise:React.createElement(React.Fragment,null,React.createElement("path",{d:"M9 11l3 3 8-8"}),React.createElement("rect",{x:"3",y:"3",width:"18",height:"18"})),discord:React.createElement(React.Fragment,null,React.createElement("circle",{cx:"12",cy:"12",r:"9"}),React.createElement("circle",{cx:"9",cy:"11",r:"1.5"}),React.createElement("circle",{cx:"15",cy:"11",r:"1.5"}),React.createElement("path",{d:"M8 16c2 1 6 1 8 0"})),calendar:React.createElement(React.Fragment,null,React.createElement("path",{d:"M8 2v4M16 2v4"}),React.createElement("rect",{x:"3",y:"4",width:"18",height:"18"}),React.createElement("path",{d:"M3 10h18"})),cert:React.createElement(React.Fragment,null,React.createElement("path",{d:"M21.4 10.9 12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z"}),React.createElement("path",{d:"M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"})),user:React.createElement(React.Fragment,null,React.createElement("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),React.createElement("circle",{cx:"12",cy:"7",r:"4"}))}[o];return React.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"square",strokeLinejoin:"miter"},e)};function SidebarItem({icon:o,label:e,count:a,active:r,href:t="platform.html"}){const[n,s]=useState(!1);return React.createElement("a",{href:t,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{display:"grid",gridTemplateColumns:"8px 18px 1fr auto",gap:12,alignItems:"center",padding:"9px 14px 9px 6px",background:r?"var(--color-yellow)":n?"rgba(246,195,36,.08)":"transparent",color:r?"var(--color-ink)":"var(--color-paper)",position:"relative",transition:"background 100ms linear",fontFamily:"var(--font-sans)",fontWeight:r?700:500,fontSize:14}},React.createElement("span",{style:{width:3,height:r?18:0,background:"var(--color-ink)",transition:"height 100ms linear"}}),React.createElement(SidebarIcon,{name:o}),React.createElement("span",null,e),a!=null&&React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",background:r?"var(--color-ink)":"transparent",color:r?"var(--color-yellow)":"var(--color-paper)",border:r?"none":"1px solid rgba(255,255,240,.25)",padding:"2px 6px",lineHeight:1}},a))}function SidebarSection({label:o,children:e}){return React.createElement("div",{style:{marginTop:16}},React.createElement("div",{style:{padding:"0 14px 6px 17px",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},"[",o,"]"),React.createElement("div",null,e))}function Sidebar({active:o="In\xEDcio"}){return React.createElement("aside",{style:{width:268,background:"var(--color-ink)",color:"var(--color-paper)",display:"flex",flexDirection:"column",height:"100vh",position:"sticky",top:0,flexShrink:0,borderRight:"2px solid var(--color-ink)"}},React.createElement("a",{href:"index.html",style:{display:"block",padding:"18px 18px 16px",borderBottom:"1px solid rgba(255,255,240,.12)"}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-yellow)",marginBottom:6}},"[FORJA \xB7 TURMA 04]"),React.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},React.createElement("img",{src:"../assets/logo/lockup-white.svg",width:"170",height:"20",alt:"Academia Lend\xE1r[IA]",style:{display:"block"}}))),React.createElement("div",{style:{padding:"16px 14px 8px"}},React.createElement("a",{href:"lesson.html",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 14px",background:"var(--color-yellow)",color:"var(--color-ink)",fontFamily:"var(--font-sans)",fontWeight:700,fontSize:13,letterSpacing:0,textTransform:"uppercase",border:"2px solid var(--color-yellow)"}},React.createElement("span",null,"Retomar trilha"),React.createElement("span",{style:{fontFamily:"var(--font-mono)"}},"\u2192"))),React.createElement("div",{style:{margin:"8px 14px 4px",padding:"12px 14px",background:"rgba(246,195,36,.08)",border:"1px solid rgba(246,195,36,.2)"}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-yellow)",marginBottom:4}},"[M\xD3DULO 03 \xB7 AGORA]"),React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:13,color:"var(--color-paper)",lineHeight:1.3,marginBottom:10}},"Avalia\xE7\xE3o autom\xE1tica de prompts."),React.createElement(ProgressBar,{value:32,max:100,variant:"linear-thin",tone:"yellow-on-dark",ariaLabel:"Progresso do m\xF3dulo atual"}),React.createElement("div",{style:{marginTop:6,display:"flex",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},React.createElement("span",null,"32%"),React.createElement("span",null,"26 MIN RESTANTES"))),React.createElement("nav",{"aria-label":"Navega\xE7\xE3o da plataforma",style:{flex:1,overflowY:"auto",paddingBottom:16}},React.createElement(SidebarSection,{label:"JORNADA"},React.createElement(SidebarItem,{icon:"home",label:"In\xEDcio",active:o==="In\xEDcio"}),React.createElement(SidebarItem,{icon:"trail",label:"Trilha",active:o==="Trilha",count:"03/12"}),React.createElement(SidebarItem,{icon:"project",label:"Projetos",active:o==="Projetos",count:"4"})),React.createElement(SidebarSection,{label:"OFICINA"},React.createElement(SidebarItem,{icon:"book",label:"Aulas",active:o==="Curso",href:"lesson.html"}),React.createElement(SidebarItem,{icon:"materials",label:"Materiais",active:o==="Materiais"}),React.createElement(SidebarItem,{icon:"exercise",label:"Exerc\xEDcios",active:o==="Exerc\xEDcios",count:"2"})),React.createElement(SidebarSection,{label:"COMUNIDADE"},React.createElement(SidebarItem,{icon:"discord",label:"Discord",active:o==="Discord",count:"\u25CF"}),React.createElement(SidebarItem,{icon:"calendar",label:"Encontros",active:o==="Encontros",count:"3"}),React.createElement(SidebarItem,{icon:"cert",label:"Certificado",active:o==="Certificado"}))),React.createElement("div",{style:{padding:"14px 14px 16px",borderTop:"1px solid rgba(255,255,240,.12)",display:"flex",alignItems:"center",gap:12}},React.createElement("div",{style:{width:38,height:38,background:"var(--color-yellow)",color:"var(--color-ink)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontSize:16,letterSpacing:0,flexShrink:0}},"VL"),React.createElement("div",{style:{flex:1,minWidth:0}},React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:13,color:"var(--color-paper)",lineHeight:1.1,marginBottom:3}},"Voc\xEA Lend\xE1rio"),React.createElement("div",{style:{display:"flex",gap:6,fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},React.createElement("span",{style:{color:"var(--color-yellow)"}},"NV.03"),React.createElement("span",{style:{color:"var(--color-mute-soft)"}},"\xB7"),React.createElement("span",{style:{color:"var(--color-paper)"}},"APRENDIZ"))),React.createElement("button",{"aria-label":"Conta",style:{width:28,height:28,border:"1px solid rgba(255,255,240,.25)",background:"transparent",color:"var(--color-paper)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}},React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("path",{d:"m6 9 6 6 6-6"})))),React.createElement("div",{style:{padding:"10px 16px",borderTop:"1px solid rgba(255,255,240,.12)",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},React.createElement("span",null,"CONSTRUINDO O \u221E"),React.createElement("a",{href:"../manifesto/index.html",style:{color:"var(--color-yellow)"}},"MANIFESTO \u2192")))}function LessonSidebar({activeLessonNum:o="3.03"}){const e={num:"03",title:"Prompt engineering em produ\xE7\xE3o",durationDone:"1H 31MIN",durationTotal:"4H 12MIN",pct:32},a=[{num:"3.01",title:"O que \xE9 um prompt, de verdade.",dur:"22 MIN",state:"done"},{num:"3.02",title:"Padr\xF5es: few-shot, chain-of-thought, role.",dur:"31 MIN",state:"done"},{num:"3.03",title:"Avalia\xE7\xE3o autom\xE1tica de prompts.",dur:"38 MIN",state:"now"},{num:"3.04",title:"Custos, lat\xEAncia e o trade-off do modelo.",dur:"27 MIN",state:"upcoming"},{num:"3.05",title:"Projeto: pipeline com avalia\xE7\xE3o.",dur:"1H 12MIN",state:"locked"}],r=t=>t==="done"?React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("path",{d:"M20 6 9 17l-5-5"})):t==="now"?React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor"},React.createElement("polygon",{points:"6 3 20 12 6 21 6 3"})):t==="locked"?React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("rect",{x:"3",y:"11",width:"18",height:"11"}),React.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})):React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("circle",{cx:"12",cy:"12",r:"9"}));return React.createElement("aside",{style:{width:320,background:"var(--color-ink)",color:"var(--color-paper)",display:"flex",flexDirection:"column",height:"100vh",position:"sticky",top:0,flexShrink:0,borderRight:"2px solid var(--color-ink)"}},React.createElement("div",{style:{padding:"14px 18px",borderBottom:"1px solid rgba(255,255,240,.12)",display:"flex",alignItems:"center",gap:12}},React.createElement("a",{href:"platform.html","aria-label":"Voltar",style:{width:32,height:32,border:"1px solid rgba(255,255,240,.25)",color:"var(--color-paper)",display:"flex",alignItems:"center",justifyContent:"center"}},React.createElement("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},React.createElement("path",{d:"m15 18-6-6 6-6"}))),React.createElement("a",{href:"index.html",style:{display:"flex",alignItems:"center",gap:8}},React.createElement("img",{src:"../assets/logo/lockup-white.svg",width:"150",height:"17",alt:"Academia Lend\xE1r[IA]",style:{display:"block"}}))),React.createElement("div",{style:{padding:"20px 18px 16px",borderBottom:"1px solid rgba(255,255,240,.12)"}},React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-yellow)",marginBottom:8}},"[M\xD3DULO ",e.num," \xB7 TURMA 04]"),React.createElement("h2",{style:{fontFamily:"var(--font-display)",fontSize:22,lineHeight:1,letterSpacing:0,textTransform:"uppercase",color:"var(--color-paper)",margin:0,marginBottom:14}},e.title,"."),React.createElement(ProgressBar,{value:e.pct,max:100,variant:"linear-thin",tone:"yellow-on-dark",ariaLabel:"Progresso do m\xF3dulo"}),React.createElement("div",{style:{marginTop:8,display:"flex",justifyContent:"space-between",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},React.createElement("span",{style:{color:"var(--color-paper)"}},e.pct,"% \xB7 2 / 5 AULAS"),React.createElement("span",{style:{color:"var(--color-mute-soft)"}},e.durationDone," / ",e.durationTotal))),React.createElement("nav",{"aria-label":"Aulas do m\xF3dulo",style:{flex:1,overflowY:"auto",padding:"12px 0"}},React.createElement("div",{style:{padding:"0 18px 8px",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},"[AULAS]"),a.map(t=>{const n=t.num===o,s=t.state==="locked";return React.createElement(s?"div":"a",{key:t.num,...s?{"aria-disabled":!0}:{href:"lesson.html"},style:{display:"grid",gridTemplateColumns:"4px 44px 14px 1fr auto",gap:10,alignItems:"center",padding:"11px 14px 11px 0",background:n?"var(--color-yellow)":"transparent",color:n?"var(--color-ink)":s?"var(--color-mute-soft)":"var(--color-paper)",cursor:s?"default":"pointer",borderBottom:"1px solid rgba(255,255,240,.06)"}},React.createElement("span",{style:{width:3,height:n?28:0,background:"var(--color-ink)"}}),React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,color:n?"var(--color-ink)":"var(--color-mute-soft)",textAlign:"center"}},t.num),React.createElement("span",{style:{color:n?"var(--color-ink)":t.state==="done"||t.state==="now"?"var(--color-yellow)":s?"var(--color-mute-soft)":"var(--color-paper)",display:"flex"}},r(t.state)),React.createElement("span",{style:{fontFamily:"var(--font-sans)",fontWeight:n?700:500,fontSize:13,lineHeight:1.3,textDecoration:t.state==="done"&&!n?"line-through":"none",color:t.state==="done"&&!n?"var(--color-mute-soft)":"inherit"}},t.title),React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:n?"var(--color-ink)":"var(--color-mute-soft)"}},t.dur))}),React.createElement("div",{style:{padding:"16px 18px 8px"}},React.createElement("a",{href:"platform.html",style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-yellow)"}},"\u2190 VER TODOS OS M\xD3DULOS"))),React.createElement("div",{style:{padding:"12px 14px",borderTop:"1px solid rgba(255,255,240,.12)",display:"flex",alignItems:"center",gap:10}},React.createElement("div",{style:{width:32,height:32,background:"var(--color-yellow)",color:"var(--color-ink)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontSize:14,letterSpacing:0,flexShrink:0}},"VL"),React.createElement("div",{style:{flex:1,minWidth:0}},React.createElement("div",{style:{fontFamily:"var(--font-sans)",fontWeight:700,fontSize:12,color:"var(--color-paper)",lineHeight:1.1,marginBottom:2}},"Voc\xEA Lend\xE1rio"),React.createElement("div",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute-soft)"}},"NV.03 \xB7 CHAMA: 12 DIAS"))))}function LessonRow({num:o,title:e,duration:a,state:r="upcoming"}){const t=r==="now"?"var(--color-yellow)":"transparent",n=r==="locked";return React.createElement(n?"div":"a",{...n?{"aria-disabled":!0}:{href:"lesson.html"},style:{display:"grid",gridTemplateColumns:"56px 1fr auto auto",gap:18,alignItems:"center",padding:"14px 12px",background:t,borderBottom:"1px solid var(--color-rule-cool)",color:n?"var(--color-mute-soft)":"var(--color-ink)",cursor:n?"default":"pointer"}},React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,color:"var(--color-mute)"}},o),React.createElement("span",{style:{display:"flex",alignItems:"center",gap:12}},React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5"},r==="done"&&React.createElement(React.Fragment,null,React.createElement("circle",{cx:"12",cy:"12",r:"10"}),React.createElement("path",{d:"m9 12 2 2 4-4"})),r==="now"&&React.createElement("polygon",{points:"6 3 20 12 6 21 6 3"}),r==="upcoming"&&React.createElement("circle",{cx:"12",cy:"12",r:"10"}),r==="locked"&&React.createElement(React.Fragment,null,React.createElement("rect",{x:"3",y:"11",width:"18",height:"11"}),React.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))),React.createElement("span",{style:{fontFamily:"var(--font-sans)",fontWeight:600,fontSize:15,textDecoration:r==="done"?"line-through":"none",color:r==="done"?"var(--color-mute)":"inherit"}},e)),React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase",color:"var(--color-mute)"}},a),React.createElement("span",{style:{fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},r==="now"?React.createElement(Tag,{variant:"dark",style:{padding:"4px 8px"}},"AGORA"):r==="done"?"\u21BA rever":r==="locked"?"[BLOQUEADO]":"iniciar \u2192"))}function VideoPlaceholder(){return React.createElement("div",{style:{aspectRatio:"16/9",background:"var(--color-ink)",position:"relative",border:"2px solid var(--color-ink)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-yellow)"}},React.createElement("button",{style:{width:96,height:96,background:"var(--color-yellow)",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"var(--color-ink)"},"aria-label":"Reproduzir"},React.createElement("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"currentColor"},React.createElement("polygon",{points:"6 3 20 12 6 21 6 3"}))),React.createElement("div",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"12px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"linear-gradient(transparent, rgba(14,14,14,.9))",fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:0,textTransform:"uppercase"}},React.createElement("span",null,"[AULA 3.03] \xB7 AVALIA\xC7\xC3O AUTOM\xC1TICA DE PROMPTS EM PRODU\xC7\xC3O"),React.createElement("span",null,"38:14 / 38:14")))}function Container({children:o,style:e}){return React.createElement("div",{style:{maxWidth:1320,margin:"0 auto",padding:"0 32px",...e}},o)}var LkdToast={push:__lkd_toast_push,dismiss:__lkd_toast_dismiss,clear:__lkd_toast_clear,success:o=>__lkd_toast_push(Object.assign({},o,{variant:"success"})),error:o=>__lkd_toast_push(Object.assign({},o,{variant:"error"})),warning:o=>__lkd_toast_push(Object.assign({},o,{variant:"warning"})),info:o=>__lkd_toast_push(Object.assign({},o,{variant:"info"}))};Object.assign(window,{Tag,Button,Avatar,PhotoBlock,BracketHeadline,GiantQuote,SkipLink,ProgressBar,StatCard,Modal,Tabs,DataTable,DataTableNameCell,ToastProvider,LkdToast,CommandPalette,Stepper,Marquee,Nav,TopNav,Footer,Colofon,ModuleCard,Testimonial,PricingCard,Faq,Sidebar,LessonSidebar,LessonRow,VideoPlaceholder,Container});
