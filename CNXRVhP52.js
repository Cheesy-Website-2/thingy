import{T as e}from"./C0d46PVP.js";import{L as t,N as n,P as r,_ as i,c as a,f as o,y as s}from"./DRfnHkI0.js";import{t as c,u as l}from"./DJ89Uu6r.js";import{r as u}from"./CR-wQH8q2.js";import{t as d}from"./BhdGPRwm2.js";var f=0;function p(e,t,n=!1){t=`#`+t;let{r,g:i,b:a}=l(t),o=n?`dark-`:``;return`
		--${o}theme-${e}: ${t};
		--${o}theme-${e}-trans: rgba(${r}, ${i}, ${a}, 0);
		--${o}theme-${e}-rgb: ${r}, ${i}, ${a};
	`}function m(e,t,n=!1){let r=n?`dark-`:``;return`
		--${r}theme-${e}: var(--theme-${t});
		--${r}theme-${e}-trans: var(--theme-${t}-trans);
		--${r}theme-${e}-rgb: var(--theme-${t}-rgb);
	`}function h(e){return`
		--theme-${e}: var(--dark-theme-${e});
		--theme-${e}-trans: var(--dark-theme-${e}-trans);
		--theme-${e}-rgb: var(--dark-theme-${e}-rgb);
	`}var g=Symbol(`ThemeData`);function _(t){let n=e(t.theme),r=e(t.isDark);return{theme:n,isDarkTheme:r,isLightTheme:e(()=>!r.value)}}var v=s({__name:`AppTheme`,props:{isRoot:{type:Boolean},theme:{default:null},forceDark:{type:Boolean},forceLight:{type:Boolean}},setup(e){let{theme:s,isDark:l}=u(),v=`theme-`+ ++f,y=e.isRoot?`:root`:`#`+v,b=a(()=>e.theme??s.value??c),x=a(()=>l.value&&!e.forceLight||e.forceDark);r(g,_({theme:b,isDark:x}));let S=a(()=>{let e=``,t=b.value;return e+=`
		${y} {
			${p(`white`,`fff`)}
			${p(`black`,`000`)}

			${p(`darkest`,t.darkest_)}
			${p(`darker`,t.darker_)}
			${p(`dark`,t.dark_)}
			${p(`gray`,t.gray_)}
			${p(`gray-subtle`,t.graySubtle_)}
			${p(`light`,t.light_)}
			${p(`lighter`,t.lighter_)}
			${p(`lightest`,t.lightest_)}

			${p(`highlight`,t.highlight_)}
			${p(`highlight-fg`,t.highlightFg_)}
			${p(`backlight`,t.backlight_)}
			${p(`backlight-fg`,t.backlightFg_)}
			${p(`notice`,t.notice_)}
			${p(`notice-fg`,t.noticeFg_)}
			${p(`bi-bg`,t.biBg_)}
			${p(`bi-fg`,t.biFg_)}
			${m(`bg`,`white`)}
			${m(`bg-offset`,`lightest`)}
			${p(`bg-backdrop`,t.bgBackdrop_)}
			${m(`bg-subtle`,`lighter`)}
			${m(`fg`,`dark`)}
			${m(`fg-muted`,`light`)}
			${m(`link`,`backlight`)}
			${m(`link-hover`,`black`)}
			${m(`primary`,`link`)}
			${m(`primary-fg`,`backlight-fg`)}

			${p(`highlight`,t.darkHighlight_,!0)}
			${p(`backlight`,t.darkBacklight_,!0)}
			${p(`notice`,t.darkNotice_,!0)}
			${p(`bi-bg`,t.darkBiBg_,!0)}
			${p(`bi-fg`,t.darkBiFg_,!0)}
			${m(`bg`,`dark`,!0)}
			${m(`bg-offset`,`darker`,!0)}
			${p(`bg-backdrop`,t.darkBgBackdrop_,!0)}
			${m(`bg-subtle`,`gray-subtle`,!0)}
			${m(`fg`,`lightest`,!0)}
			${m(`fg-muted`,`light`,!0)}
			${p(`link`,t.darkHighlight_,!0)}
			${m(`link-hover`,`white`,!0)}
			${m(`primary`,`link`,!0)}
			${p(`primary-fg`,t.darkPrimaryFg_,!0)}
		}
	`,x.value&&(e+=`
			${y} {
				${h(`highlight`)}
				${h(`backlight`)}
				${h(`notice`)}
				${h(`bi-bg`)}
				${h(`bi-fg`)}
				${h(`bg`)}
				${h(`bg-offset`)}
				${h(`bg-backdrop`)}
				${h(`bg-subtle`)}
				${h(`fg`)}
				${h(`fg-muted`)}
				${h(`link`)}
				${h(`link-hover`)}
				${h(`primary`)}
				${h(`primary-fg`)}
			}
		`),e.replace(/\s+/g,``)});return(e,r)=>(n(),o(`div`,{id:v},[i(d,{content:S.value},null,8,[`content`]),t(e.$slots,`default`)]))}});export{v as t};