function createTools(e){(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)?($(".icone-active-help-25").attr("aria-hidden","true"),$(".icone-active-help-25")):(new Accessibility(e),$("._access-icon").empty(),$("._access-menu").attr("aria-hidden","true"),$("._access-menu").attr("tabindex",-1),$("._access-menu").find("i").attr("aria-hidden","true"),$("._access-menu").find("i").attr("tabindex",-1),$("._access-menu").find("ul").attr("aria-hidden","true"),$("._access-menu").find("ul").attr("tabindex",-1),$("._access-menu").find("ul").find("li").attr("aria-hidden","true"),$("._access-menu").find("ul").find("li"))).attr("tabindex",-1)}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["./dist"]=t():e["./dist"]=t()}(window,function(){return i=[function(e,t,i){"use strict";i.r(t);let s=document.body||document.getElementsByTagName("body")[0],n=new Map,a={jsonToHtml:(e,t)=>{var i,s,n=document.createElement(e.type);for(i in e.attrs)0===i.indexOf("#")&&t?n.setAttribute(e.attrs[i],t[i.substring(1)]):n.setAttribute(i,e.attrs[i]);for(s in e.children){var o=null;((o="#text"==e.children[s].type?0==e.children[s].text.indexOf("#")?document.createTextNode(t[e.children[s].text.substring(1)]):document.createTextNode(e.children[s].text):a.jsonToHtml(e.children[s],t))&&o.tagName&&"undefined"!==o.tagName.toLowerCase()||3==o.nodeType)&&n.appendChild(o)}return n},injectStyle:(e,t={})=>{var i=document.createElement("style");return i.appendChild(document.createTextNode(e)),t.className&&i.classList.add(t.className),s.appendChild(i),i},getFormattedDim:e=>{var t;return e?(t=function(e,t){return{size:e.substring(0,e.indexOf(t)),sufix:t}},-1<(e=String(e)).indexOf("%")?t(e,"%"):-1<e.indexOf("px")?t(e,"px"):-1<e.indexOf("em")?t(e,"em"):-1<e.indexOf("rem")?t(e,"rem"):-1<e.indexOf("pt")?t(e,"pt"):"auto"==e?t(e,""):void 0):null},extend:(e,t)=>{for(var i in e)"object"==typeof e[i]?t&&t[i]&&(e[i]=a.extend(e[i],t[i])):"object"==typeof t&&void 0!==t[i]&&(e[i]=t[i]);return e},injectIconsFont(e,t){if(e&&e.length){let i=document.getElementsByTagName("head")[0],s=0,n=()=>{--s||t()};e.forEach(e=>{var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,t.className="_access-font-icon-"+s++,t.onload=n,a.deployedObjects.set("."+t.className,!0),i.appendChild(t)})}},isFontLoaded(e,t){try{const i=()=>t(document.fonts.check("1em "+e));document.fonts.ready.then(()=>{i()},()=>{i()})}catch(e){return t(!0)}},warn(e){},deployedObjects:{get:e=>n.get(e),contains:e=>n.has(e),set:(e,t)=>{n.set(e,t)},remove:e=>{n.delete(e)},getAll:()=>n}};var r=a,o=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},c=function(e){var t=window.localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}};let l={icon:{position:{bottom:{size:50,units:"px"},right:{size:10,units:"px"},type:"fixed"},dimensions:{width:{size:50,units:"px"},height:{size:50,units:"px"}},zIndex:"9999",backgroundColor:"transparent",color:"#fff",img:"accessible",circular:!1,circularBorder:!1,fontFaceSrc:["https://fonts.googleapis.com/icon?family=Material+Icons"],fontFamily:"Material Icons",fontClass:"material-icons",useEmojis:!1},hotkeys:{enabled:!1,helpTitles:!0,keys:{toggleMenu:["ctrlKey","altKey",65],invertColors:["ctrlKey","altKey",73],grayHues:["ctrlKey","altKey",71],underlineLinks:["ctrlKey","altKey",85],bigCursor:["ctrlKey","altKey",67],readingGuide:["ctrlKey","altKey",82],textToSpeech:["ctrlKey","altKey",84],speechToText:["ctrlKey","altKey",83]}},buttons:{font:{size:18,units:"px"}},guide:{cBorder:"#20ff69",cBackground:"#000000",height:"12px"},menu:{dimensions:{width:{size:25,units:"vw"},height:{size:"auto",units:""}},fontFamily:"RobotoDraft, Roboto, sans-serif, Arial"},labels:{resetTitle:"Reset",closeTitle:"Close",menuTitle:"Accessibility Options",increaseText:"increase text size",decreaseText:"decrease text size",increaseTextSpacing:"increase text spacing",decreaseTextSpacing:"decrease text spacing",invertColors:"invert colors",grayHues:"gray hues",bigCursor:"big cursor",readingGuide:"reading guide",underlineLinks:"underline links",textToSpeech:"text to speech",speechToText:"speech to text"},textToSpeechLang:"en-US",speechToTextLang:"en-US",textPixelMode:!1,textEmlMode:!0,animations:{buttons:!0},modules:{increaseText:!0,decreaseText:!0,increaseTextSpacing:!0,decreaseTextSpacing:!0,invertColors:!0,grayHues:!0,bigCursor:!0,readingGuide:!0,underlineLinks:!0,textToSpeech:!0,speechToText:!0},session:{persistent:!0}},u=null;class d{constructor(e={}){e=(u=this).deleteOppositesIfDefined(e),this.options=r.extend(l,e),this.disabledUnsupportedFeatures(),this.sessionState={textSize:0,textSpace:0,invertColors:!1,grayHues:!1,underlineLinks:!1,bigCursor:!1,readingGuide:!1},this.options.icon.useEmojis?(this.fontFallback(),this.build()):r.injectIconsFont(this.options.icon.fontFaceSrc,()=>{this.build(),r.isFontLoaded(this.options.icon.fontFamily,e=>{e||(r.warn(this.options.icon.fontFamily+" font was not loaded, using emojis instead"),this.fontFallback(),this.destroy(),this.build())})})}initFontSize(){var e,t;this.htmlInitFS||(e=r.getFormattedDim(getComputedStyle(this.html).fontSize),t=r.getFormattedDim(getComputedStyle(this.body).fontSize),this.html.style.fontSize=e.size/16*100+"%",this.htmlOrgFontSize=this.html.style.fontSize,this.body.style.fontSize=t.size/e.size+"em")}fontFallback(){this.options.icon.useEmojis=!0,this.options.icon.fontFamily=null,this.options.icon.img="",this.options.icon.fontClass=""}deleteOppositesIfDefined(e){return e.icon&&e.icon.position&&(e.icon.position.left&&(delete l.icon.position.right,l.icon.position.left=e.icon.position.left),e.icon.position.top)&&(delete l.icon.position.bottom,l.icon.position.top=e.icon.position.top),e}disabledUnsupportedFeatures(){"webkitSpeechRecognition"in window&&"https:"==location.protocol||(r.warn("speech to text isn't supported in this browser or in http protocol (https required)"),this.options.modules.speechToText=!1),window.SpeechSynthesisUtterance&&window.speechSynthesis||(r.warn("text to speech isn't supported in this browser"),this.options.modules.textToSpeech=!1),-1<navigator.userAgent.toLowerCase().indexOf("firefox")&&(r.warn("grayHues isn't supported in firefox"),this.options.modules.grayHues=!1)}injectCss(){var e=`
        ._access-scrollbar::-webkit-scrollbar-track, .mat-autocomplete-panel::-webkit-scrollbar-track, .mat-tab-body-content::-webkit-scrollbar-track, .mat-select-panel:not([class*='mat-elevation-z'])::-webkit-scrollbar-track, .mat-menu-panel::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
        }
        
        ._access-scrollbar::-webkit-scrollbar, .mat-autocomplete-panel::-webkit-scrollbar, .mat-tab-body-content::-webkit-scrollbar, .mat-select-panel:not([class*='mat-elevation-z'])::-webkit-scrollbar, .mat-menu-panel::-webkit-scrollbar {
            width: 6px;
            background-color: #F5F5F5;
        }
        
        ._access-scrollbar::-webkit-scrollbar-thumb, .mat-autocomplete-panel::-webkit-scrollbar-thumb, .mat-tab-body-content::-webkit-scrollbar-thumb, .mat-select-panel:not([class*='mat-elevation-z'])::-webkit-scrollbar-thumb, .mat-menu-panel::-webkit-scrollbar-thumb {
            background-color: #999999;
        }
        ._access-icon {
    visibility:hidden; 
       position: ${this.options.icon.position.type};
            background-repeat: no-repeat;
            background-size: contain;
            cursor: pointer;
            opacity: 0;
            transition-duration: .5s;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            ${this.options.icon.useEmojis?"":"box-shadow: 1px 1px 5px rgba(0,0,0,.5);"}
     }
        ._access-icon:hover {
            `+(this.options.animations.buttons&&!this.options.icon.useEmojis?"\n            box-shadow: 1px 1px 10px rgba(0,0,0,.9);\n            ":"")+"\n        }\n        .circular._access-icon {\n            border-radius: 50%;\n            border: .5px solid white;\n        }\n        "+(this.options.animations.buttons&&this.options.icon.circularBorder?"\n        .circular._access-icon:hover {\n            border: 5px solid white;\n            border-style: double;\n            font-size: 35px!important;\n            vertical-align: middle;\n            padding-top: 2px;\n            text-align: center;\n        }\n        ":"")+`
        .access_read_guide_bar{
            box-sizing: border-box;
            background: ${this.options.guide.cBackground};
            width: 100%!important;
            min-width: 100%!important;
            position: fixed!important;
            height: ${this.options.guide.height} !important;
            border: solid 3px ${this.options.guide.cBorder};
            border-radius: 5px;
            top: 15px;
            z-index: 2147483647;
        }
        .access-high-contrast *{
            background-color: #000 !important;
            background-image: none !important;
            border-color: #fff !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            color: #fff !important;
            text-indent: 0 !important;
            text-shadow: none !important;
        }
        ._access-menu {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            position: fixed;
            width: ${this.options.menu.dimensions.width.size+this.options.menu.dimensions.width.units};
            height: ${this.options.menu.dimensions.height.size+this.options.menu.dimensions.height.units};
            transition-duration: .5s;
            z-index: ${this.options.icon.zIndex+1};
            opacity: 1;
            background-color: #fff;
            color: #000;
            border-radius: 3px;
            border: solid 1px #f1f0f1;
            font-family: ${this.options.menu.fontFamily};
            min-width: 300px;
            box-shadow: 0px 0px 1px #aaa;
            max-height: 100vh;
            ${"rtl"==getComputedStyle(this.body).direction?"text-indent: -5px":""}
        }
        ._access-menu.close {
            z-index: -1;
            width: 0;
            opacity: 0;
            background-color: transparent;
        }
        ._access-menu.bottom {
            bottom: 0;
        }
        ._access-menu.top {
            top: 0;
        }
        ._access-menu.left {
            left: 0;
        }
        ._access-menu.close.left {
            left: -${this.options.menu.dimensions.width.size+this.options.menu.dimensions.width.units};
        }
        ._access-menu.right {
            right: 0;
        }
        ._access-menu.close.right {
            right: -${this.options.menu.dimensions.width.size+this.options.menu.dimensions.width.units};
        }
        ._access-menu ._text-center {
            text-align: center;
        }
        ._access-menu h3 {
            font-size: 24px !important;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 0;
            color: rgba(0,0,0,.87);
            letter-spacing: initial!important;
            word-spacing: initial!important;
        }
        ._access-menu ._menu-close-btn {
            left: 5px;
            color: #d63c3c;
            transition: .3s ease;
            transform: rotate(0deg);
        }
        ._access-menu ._menu-reset-btn:hover,._access-menu ._menu-close-btn:hover {
            ${this.options.animations.buttons?"transform: rotate(180deg);":""}
        }
        ._access-menu ._menu-reset-btn {
            right: 5px;
            color: transparent;
            transition: .3s ease;
            transform: rotate(0deg);
        }
        ._access-menu ._menu-btn {
            position: absolute;
            top: 5px;
            cursor: pointer;
            font-size: 24px !important;
            font-weight: bold;
        }
        ._access-menu ul {
            padding: 0;
            position: relative;
            font-size: 18px !important;
            margin: 0;
            overflow: auto;
            max-height: calc(100vh - 77px);
        }
        html._access_cursor * {
            cursor: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyOS4xODhweCIgaGVpZ2h0PSI0My42MjVweCIgdmlld0JveD0iMCAwIDI5LjE4OCA0My42MjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5LjE4OCA0My42MjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iI0Q5REFEOSIgc3Ryb2tlLXdpZHRoPSIxLjE0MDYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIyLjgsNC41NDkgMjYuODQ3LDE5LjkwMiAxNi45NjQsMjIuNzAxIDI0LjIzOSwzNy43NDkgMTguMjc4LDQyLjAxNyA5Ljc0MSwzMC43MjQgMS4xMzgsMzUuODA5ICIvPjxnPjxnPjxnPjxwYXRoIGZpbGw9IiMyMTI2MjciIGQ9Ik0yOS4xNzUsMjEuMTU1YzAuMDcxLTAuNjEzLTAuMTY1LTEuMjUzLTAuNjM1LTEuNTczTDIuMTY1LDAuMjU4Yy0wLjQyNC0wLjMyLTAuOTg4LTAuMzQ2LTEuNDM1LTAuMDUzQzAuMjgyLDAuNDk3LDAsMS4wMywwLDEuNjE3djM0LjE3MWMwLDAuNjEzLDAuMzA2LDEuMTQ2LDAuNzc2LDEuNDM5YzAuNDcxLDAuMjY3LDEuMDU5LDAuMjEzLDEuNDgyLTAuMTZsNy40ODItNi4zNDRsNi44NDcsMTIuMTU1YzAuMjU5LDAuNDgsMC43MjksMC43NDYsMS4yLDAuNzQ2YzAuMjM1LDAsMC40OTQtMC4wOCwwLjcwNi0wLjIxM2w2Ljk4OC00LjU4NWMwLjMyOS0wLjIxMywwLjU2NS0wLjU4NiwwLjY1OS0xLjAxM2MwLjA5NC0wLjQyNiwwLjAyNC0wLjg4LTAuMTg4LTEuMjI2bC02LjM3Ni0xMS4zODJsOC42MTEtMi43NDVDMjguNzA1LDIyLjI3NCwyOS4xMDUsMjEuNzY4LDI5LjE3NSwyMS4xNTV6IE0xNi45NjQsMjIuNzAxYy0wLjQyNCwwLjEzMy0wLjc3NiwwLjUwNi0wLjk0MSwwLjk2Yy0wLjE2NSwwLjQ4LTAuMTE4LDEuMDEzLDAuMTE4LDEuNDM5bDYuNTg4LDExLjc4MWwtNC41NDEsMi45ODVsLTYuODk0LTEyLjMxNWMtMC4yMTItMC4zNzMtMC41NDEtMC42NC0wLjk0MS0wLjcyYy0wLjA5NC0wLjAyNy0wLjE2NS0wLjAyNy0wLjI1OS0wLjAyN2MtMC4zMDYsMC0wLjU4OCwwLjEwNy0wLjg0NywwLjMyTDIuOCwzMi41OVY0LjU0OWwyMS41OTksMTUuODA2TDE2Ljk2NCwyMi43MDF6Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==),auto!important;
        }
        ._access-menu ul li {
            list-style-type: none;
            cursor: pointer;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            border: solid 1px #f1f0f1;
            padding: 10px 0 10px 30px;
            margin: 5px;
            border-radius: 4px;
            transition-duration: .5s;
            transition-timing-function: ease-in-out;
            font-size: ${this.options.buttons.font.size+this.options.buttons.font.units} !important;
            line-height: ${this.options.buttons.font.size+this.options.buttons.font.units} !important;
            text-indent: 5px;
            background: #f9f9f9;
            color: rgba(0,0,0,.6);
            letter-spacing: initial!important;
            word-spacing: initial!important;
        }
        ._access-menu ul.before-collapse li {
            opacity: 0.05;
        }
        ._access-menu ul li.active, ._access-menu ul li.active:hover {
            color: #fff;
            background-color: #000;
        }
        ._access-menu ul li:hover {
            color: rgba(0,0,0,.8);
            background-color: #eaeaea;
        }
        ._access-menu ul li.not-supported {
            display: none;
        }
        ._access-menu ul li:before {
            content: ' ';
            ${this.options.icon.useEmojis?"":"font-family: "+this.options.icon.fontFamily+";"}
            text-rendering: optimizeLegibility;
            font-feature-settings: "liga" 1;
            font-style: normal;
            text-transform: none;
            line-height: ${this.options.icon.useEmojis?"1.1":"1"};
            font-size: ${this.options.icon.useEmojis?"20px":"24px"} !important;
            width: 30px;
            height: 30px;
            display: inline-block;
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
            left: 8px;
            position: absolute;
            color: rgba(0,0,0,.6);
            direction: ltr;
        }
        ._access-menu ul li svg path {
            fill: rgba(0,0,0,.6);
        }
        ._access-menu ul li:hover svg path {
            fill: rgba(0,0,0,.8);
        }
        ._access-menu ul li.active svg path {
            fill: #fff;
        }
        ._access-menu ul li:hover:before {
            color: rgba(0,0,0,.8);
        }
        ._access-menu ul li.active:before {
            color: #fff;
        }
        ._access-menu ul li[data-access-action="increaseText"]:before {
            content: ${this.options.icon.useEmojis?'"🔼"':'"zoom_in"'};
        }
        ._access-menu ul li[data-access-action="decreaseText"]:before {
            content: ${this.options.icon.useEmojis?'"🔽"':'"zoom_out"'};
        }
        ._access-menu ul li[data-access-action="increaseTextSpacing"]:before {
            content: ${this.options.icon.useEmojis?'"🔼"':'"unfold_more"'};
            transform: rotate(90deg) translate(-7px, 2px);
        }
        ._access-menu ul li[data-access-action="decreaseTextSpacing"]:before {
            content: ${this.options.icon.useEmojis?'"🔽"':'"unfold_less"'};
            transform: rotate(90deg) translate(-7px, 2px);
        }
        ._access-menu ul li[data-access-action="invertColors"]:before {
            content: ${this.options.icon.useEmojis?'"🎆"':'"invert_colors"'};
        }
        ._access-menu ul li[data-access-action="grayHues"]:before {
            content: ${this.options.icon.useEmojis?'"🌫️"':'"format_color_reset"'};
        }
        ._access-menu ul li[data-access-action="underlineLinks"]:before {
            content: ${this.options.icon.useEmojis?'"💯"':'"format_underlined"'};
        }
        ._access-menu ul li[data-access-action="bigCursor"]:before {
            /*content: 'touch_app';*/
        }
        ._access-menu ul li[data-access-action="readingGuide"]:before {
            content: ${this.options.icon.useEmojis?'"↔️"':'"border_horizontal"'};
        }
        ._access-menu ul li[data-access-action="textToSpeech"]:before {
            content: ${this.options.icon.useEmojis?'"⏺️"':'"record_voice_over"'};
        }
        ._access-menu ul li[data-access-action="speechToText"]:before {
            content: ${this.options.icon.useEmojis?'"🎤"':'"mic"'};
        }`;r.injectStyle(e,{className:"_access-main-css"}),r.deployedObjects.set("._access-main-css",!1)}injectIcon(){let e=.8*this.options.icon.dimensions.width.size,t=.9*this.options.icon.dimensions.width.size,i=.1*this.options.icon.dimensions.width.size,s=`width: ${this.options.icon.dimensions.width.size+this.options.icon.dimensions.width.units}
            ;height: ${this.options.icon.dimensions.height.size+this.options.icon.dimensions.height.units}
            ;font-size: ${e+this.options.icon.dimensions.width.units}
            ;line-height: ${t+this.options.icon.dimensions.width.units}
            ;text-indent: ${i+this.options.icon.dimensions.width.units}
            ;background-color: ${this.options.icon.useEmojis?"transparent":this.options.icon.backgroundColor};color: `+this.options.icon.color;for(var n in this.options.icon.position)s+=";"+n+":"+this.options.icon.position[n].size+this.options.icon.position[n].units;s+=";z-index: "+this.options.icon.zIndex;var o=`_access-icon ${this.options.icon.fontClass} _access`+(this.options.icon.circular?" circular":""),o=r.jsonToHtml({type:"i",attrs:{class:o,style:s,title:this.options.labels.menuTitle},children:[{type:"#text",text:this.options.icon.img}]});return this.body.appendChild(o),r.deployedObjects.set("._access-icon",!1),o}parseKeys(e){return this.options.hotkeys.enabled&&this.options.hotkeys.helpTitles?"Hotkey: "+e.map(function(e){return Number.isInteger(e)?String.fromCharCode(e).toLowerCase():e.replace("Key","")}).join("+"):""}injectMenu(){var e,t=r.jsonToHtml({type:"div",attrs:{class:"_access-menu close _access"},children:[{type:"h3",attrs:{class:"_text-center"},children:[{type:"i",attrs:{class:"_menu-close-btn _menu-btn "+this.options.icon.fontClass,title:this.options.labels.closeTitle},children:[{type:"#text",text:this.options.icon.useEmojis?"X":"close"}]},{type:"#text",text:this.options.labels.menuTitle},{type:"i",attrs:{class:"_menu-reset-btn _menu-btn "+this.options.icon.fontClass,title:this.options.labels.resetTitle},children:[{type:"#text",text:this.options.icon.useEmojis?"♲":"refresh"}]}]},{type:"ul",attrs:{class:this.options.animations.buttons?"before-collapse _access-scrollbar":"_access-scrollbar"},children:[{type:"li",attrs:{"data-access-action":"increaseText"},children:[{type:"#text",text:this.options.labels.increaseText}]},{type:"li",attrs:{"data-access-action":"decreaseText"},children:[{type:"#text",text:this.options.labels.decreaseText}]},{type:"li",attrs:{"data-access-action":"increaseTextSpacing"},children:[{type:"#text",text:this.options.labels.increaseTextSpacing}]},{type:"li",attrs:{"data-access-action":"decreaseTextSpacing"},children:[{type:"#text",text:this.options.labels.decreaseTextSpacing}]},{type:"li",attrs:{"data-access-action":"invertColors",title:this.parseKeys(this.options.hotkeys.keys.invertColors)},children:[{type:"#text",text:this.options.labels.invertColors}]},{type:"li",attrs:{"data-access-action":"grayHues",title:this.parseKeys(this.options.hotkeys.keys.grayHues)},children:[{type:"#text",text:this.options.labels.grayHues}]},{type:"li",attrs:{"data-access-action":"underlineLinks",title:this.parseKeys(this.options.hotkeys.keys.underlineLinks)},children:[{type:"#text",text:this.options.labels.underlineLinks}]},{type:"li",attrs:{"data-access-action":"bigCursor",title:this.parseKeys(this.options.hotkeys.keys.bigCursor)},children:[{type:"div",attrs:{id:"iconBigCursor"}},{type:"#text",text:this.options.labels.bigCursor}]},{type:"li",attrs:{"data-access-action":"readingGuide",title:this.parseKeys(this.options.hotkeys.keys.readingGuide)},children:[{type:"#text",text:this.options.labels.readingGuide}]},{type:"li",attrs:{"data-access-action":"textToSpeech"},children:[{type:"#text",text:this.options.labels.textToSpeech}]},{type:"li",attrs:{"data-access-action":"speechToText"},children:[{type:"#text",text:this.options.labels.speechToText}]}]}]});for(e in this.options.icon.position)t.classList.add(e);return this.body.appendChild(t),setTimeout(function(){var e=document.getElementById("iconBigCursor");e&&(e.outerHTML=e.outerHTML+'<svg version="1.1" id="iconBigCursorSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="position: absolute;width: 19px;height: 19px;left: 17px;enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M 423.547 323.115 l -320 -320 c -3.051 -3.051 -7.637 -3.947 -11.627 -2.304 s -6.592 5.547 -6.592 9.856 V 480 c 0 4.501 2.837 8.533 7.083 10.048 c 4.224 1.536 8.981 0.192 11.84 -3.285 l 85.205 -104.128 l 56.853 123.179 c 1.792 3.883 5.653 6.187 9.685 6.187 c 1.408 0 2.837 -0.277 4.203 -0.875 l 74.667 -32 c 2.645 -1.131 4.736 -3.285 5.76 -5.973 c 1.024 -2.688 0.939 -5.675 -0.277 -8.299 l -57.024 -123.52 h 132.672 c 4.309 0 8.213 -2.603 9.856 -6.592 C 427.515 330.752 426.598 326.187 423.547 323.115 Z"/></svg>',document.getElementById("iconBigCursor").remove())},1),r.deployedObjects.set("._access-menu",!1),document.querySelector("._access-menu ._menu-close-btn").addEventListener("click",()=>{this.toggleMenu()},!1),document.querySelector("._access-menu ._menu-reset-btn").addEventListener("click",()=>{this.resetAll()},!1),t}addListeners(){var t=document.querySelectorAll("._access-menu ul li");for(let e=0;e<t.length;e++)t[e].addEventListener("click",e=>{e=e||window.event;this.invoke(e.target.getAttribute("data-access-action"))},!1)}disableUnsupportedModules(){for(var e in this.options.modules)this.options.modules[e]||(e=document.querySelector('li[data-access-action="'+e+'"]'))&&e.classList.add("not-supported")}resetAll(){this.menuInterface.textToSpeech(!0),this.menuInterface.speechToText(!0),this.menuInterface.underlineLinks(!0),this.menuInterface.grayHues(!0),this.menuInterface.invertColors(!0),this.menuInterface.bigCursor(!0),this.menuInterface.readingGuide(!0),this.resetTextSize(),this.resetTextSpace()}resetTextSize(){this.resetIfDefined(this.initialValues.body.fontSize,this.body.style,"fontSize"),void 0!==this.htmlOrgFontSize&&(this.html.style.fontSize=this.htmlOrgFontSize);var t=document.querySelectorAll("[data-init-font-size]");for(let e=0;e<t.length;e++)t[e].style.fontSize=t[e].getAttribute("data-init-font-size"),t[e].removeAttribute("data-init-font-size");this.sessionState.textSize=0,this.onChange(!0)}resetTextSpace(){this.resetIfDefined(this.initialValues.body.wordSpacing,this.body.style,"wordSpacing"),this.resetIfDefined(this.initialValues.body.letterSpacing,this.body.style,"letterSpacing");var t=document.querySelectorAll("[data-init-word-spacing]"),i=document.querySelectorAll("[data-init-letter-spacing]");for(let e=0;e<t.length;e++)t[e].style.wordSpacing=t[e].getAttribute("data-init-word-spacing"),t[e].removeAttribute("data-init-word-spacing");for(let e=0;e<i.length;e++)t[e].style.letterSpacing=t[e].getAttribute("data-init-letter-spacing"),t[e].removeAttribute("data-init-letter-spacing");this.sessionState.textSpace=0,this.onChange(!0)}alterTextSize(e){this.sessionState.textSize+=e?1:-1,this.onChange(!0);let i=2;if(e||(i*=-1),this.options.textPixelMode){var s=document.querySelectorAll("*:not(._access)");for(let t=0;t<s.length;t++){let e=getComputedStyle(s[t]).fontSize;e&&-1<e.indexOf("px")&&(s[t].getAttribute("data-init-font-size")||s[t].setAttribute("data-init-font-size",e),e=+e.replace("px","")+i,s[t].style.fontSize=e+"px")}}else if(this.options.textEmlMode){let e=this.html.style.fontSize;e.indexOf("%")?(e=+e.replace("%",""),this.html.style.fontSize=e+i+"%"):r.warn("Accessibility.textEmlMode, html element is not set in %.")}else{e=r.getFormattedDim(getComputedStyle(this.body).fontSize);void 0===this.initialValues.body.fontSize&&(this.initialValues.body.fontSize=e.size+e.sufix),e&&e.sufix&&!isNaN(+e.size)&&(this.body.style.fontSize=+e.size+i+e.sufix)}}alterTextSpace(e){this.sessionState.textSpace+=e?1:-1,this.onChange(!0);let s=1;if(e||(s*=-1),this.options.textPixelMode){var n=document.querySelectorAll("*:not(._access)"),t=Array.prototype.slice.call(document.querySelectorAll("._access-menu *"));for(let i=0;i<n.length;i++)if(!t.includes(n[i])){let e=n[i].style.wordSpacing,t=(e&&-1<e.indexOf("px")?(n[i].getAttribute("data-init-word-spacing")||n[i].setAttribute("data-init-word-spacing",e),e=+e.replace("px","")+s,n[i].style.wordSpacing=e+"px"):(n[i].setAttribute("data-init-word-spacing",e),n[i].style.wordSpacing=s+"px"),n[i].style.letterSpacing);t&&-1<t.indexOf("px")?(n[i].getAttribute("data-init-letter-spacing")||n[i].setAttribute("data-init-letter-spacing",t),t=+t.replace("px","")+s,n[i].style.letterSpacing=t+"px"):(n[i].setAttribute("data-init-letter-spacing",t),n[i].style.letterSpacing=s+"px")}}else{e=r.getFormattedDim(getComputedStyle(this.body).wordSpacing),e=(void 0===this.initialValues.body.wordSpacing&&(this.initialValues.body.wordSpacing=""),e&&e.sufix&&!isNaN(+e.size)&&(this.body.style.wordSpacing=+e.size+s+e.sufix),r.getFormattedDim(getComputedStyle(this.body).letterSpacing));void 0===this.initialValues.body.letterSpacing&&(this.initialValues.body.letterSpacing=""),e&&e.sufix&&!isNaN(+e.size)&&(this.body.style.letterSpacing=+e.size+s+e.sufix)}}speechToText(){"webkitSpeechRecognition"in window&&(this.recognition=new webkitSpeechRecognition,this.recognition.continuous=!0,this.recognition.interimResults=!0,this.recognition.onstart=()=>{this.body.classList.add("_access-listening")},this.recognition.onend=()=>{this.body.classList.remove("_access-listening")},this.recognition.onresult=t=>{let i="";if(void 0!==t.results){for(let e=t.resultIndex;e<t.results.length;++e)t.results[e].isFinal&&(i+=t.results[e][0].transcript);i&&this.speechToTextTarget&&(this.speechToTextTarget.parentElement.classList.remove("_access-listening"),"input"==this.speechToTextTarget.tagName.toLowerCase()||"textarea"==this.speechToTextTarget.tagName.toLowerCase()?this.speechToTextTarget.value=i:null!=this.speechToTextTarget.getAttribute("contenteditable")&&(this.speechToTextTarget.innerText=i))}},this.recognition.lang=this.options.speechToTextLang,this.recognition.start())}textToSpeech(e){if(window.SpeechSynthesisUtterance&&window.speechSynthesis){var s=new window.SpeechSynthesisUtterance(e);s.lang=this.options.textToSpeechLang;let t=window.speechSynthesis.getVoices(),i=!1;for(let e=0;e<t.length;e++)if(t[e].lang===s.lang){s.voice=t[e],i=!0;break}i||r.warn("text to speech language not supported!"),window.speechSynthesis.speak(s)}}listen(){"object"==typeof u.recognition&&"function"==typeof u.recognition.stop&&u.recognition.stop(),u.speechToTextTarget=window.event.target,u.speechToText(window.event.target.innerText)}read(){window.event.preventDefault(),window.event.stopPropagation(),u.textToSpeech(window.event.target.innerText)}runHotkey(e){"toggleMenu"===e?this.toggleMenu():this.menuInterface.hasOwnProperty(e)&&this.options.modules[e]&&this.menuInterface[e](!1)}toggleMenu(){this.menu.classList.contains("close")?(this.options.animations&&this.options.animations.buttons&&setTimeout(()=>{this.menu.querySelector("ul").classList.toggle("before-collapse")},500),setTimeout(()=>{this.menu.classList.toggle("close")},10)):this.options.animations&&this.options.animations.buttons?(setTimeout(()=>{this.menu.classList.toggle("close")},500),setTimeout(()=>{this.menu.querySelector("ul").classList.toggle("before-collapse")},10)):this.menu.classList.toggle("close")}invoke(e){"function"==typeof this.menuInterface[e]&&this.menuInterface[e]()}build(){this.initialValues={underlineLinks:!1,textToSpeech:!1,bigCursor:!1,readingGuide:!1,body:{},html:{}},this.body=document.body||document.getElementsByTagName("body")[0],this.html=document.documentElement||document.getElementsByTagName("html")[0],this.options.textEmlMode&&this.initFontSize(),this.injectCss(),this.icon=this.injectIcon(),this.menu=this.injectMenu(),this.addListeners(),this.disableUnsupportedModules(),this.options.hotkeys.enabled&&(document.onkeydown=function(s){var e=Object.entries(u.options.hotkeys.keys).find(function(e){let t=!0;for(var i=0;i<e[1].length;i++)Number.isInteger(e[1][i])?s.keyCode!=e[1][i]&&(t=!1):null!=s[e[1][i]]&&0!=s[e[1][i]]||(t=!1);return t});null!=e&&u.runHotkey(e[0])}),this.icon.addEventListener("click",()=>{this.toggleMenu()},!1),setTimeout(()=>{this.icon.style.opacity="1"},10),this.updateReadGuide=function(e){e="touchmove"==e.type?e.changedTouches[0].clientY:e.y;document.getElementById("access_read_guide_bar").style.top=e-(parseInt(u.options.guide.height.replace("px"))+5)+"px"},this.menuInterface={increaseText:()=>{this.alterTextSize(!0)},decreaseText:()=>{this.alterTextSize(!1)},increaseTextSpacing:()=>{this.alterTextSpace(!0)},decreaseTextSpacing:()=>{this.alterTextSpace(!1)},invertColors:e=>{void 0===this.initialValues.html.backgroundColor&&(this.initialValues.html.backgroundColor=getComputedStyle(this.html).backgroundColor),void 0===this.initialValues.html.color&&(this.initialValues.html.color=getComputedStyle(this.html).color),e?(this.resetIfDefined(this.initialValues.html.backgroundColor,this.html.style,"backgroundColor"),this.resetIfDefined(this.initialValues.html.color,this.html.style,"color"),document.querySelector('._access-menu [data-access-action="invertColors"]').classList.remove("active"),this.initialValues.invertColors=!1,this.sessionState.invertColors=this.initialValues.invertColors,this.onChange(!0),this.html.style.filter=""):(document.querySelector('._access-menu [data-access-action="invertColors"]').classList.toggle("active"),this.initialValues.invertColors=!this.initialValues.invertColors,this.sessionState.invertColors=this.initialValues.invertColors,this.onChange(!0),this.initialValues.invertColors?(this.initialValues.grayHues&&this.menuInterface.grayHues(!0),this.html.style.filter="invert(1)"):this.html.style.filter="")},grayHues:e=>{if(void 0===this.initialValues.html.filter&&(this.initialValues.html.filter=getComputedStyle(this.html).filter),void 0===this.initialValues.html.webkitFilter&&(this.initialValues.html.webkitFilter=getComputedStyle(this.html).webkitFilter),void 0===this.initialValues.html.mozFilter&&(this.initialValues.html.mozFilter=getComputedStyle(this.html).mozFilter),void 0===this.initialValues.html.msFilter&&(this.initialValues.html.msFilter=getComputedStyle(this.html).msFilter),e)document.querySelector('._access-menu [data-access-action="grayHues"]').classList.remove("active"),this.initialValues.grayHues=!1,this.sessionState.grayHues=this.initialValues.grayHues,this.onChange(!0),this.resetIfDefined(this.initialValues.html.filter,this.html.style,"filter"),this.resetIfDefined(this.initialValues.html.webkitFilter,this.html.style,"webkitFilter"),this.resetIfDefined(this.initialValues.html.mozFilter,this.html.style,"mozFilter"),this.resetIfDefined(this.initialValues.html.msFilter,this.html.style,"msFilter");else{let e;document.querySelector('._access-menu [data-access-action="grayHues"]').classList.toggle("active"),this.initialValues.grayHues=!this.initialValues.grayHues,this.sessionState.grayHues=this.initialValues.grayHues,this.onChange(!0),this.initialValues.grayHues?(e="grayscale(1)",this.initialValues.invertColors&&this.menuInterface.invertColors(!0)):e="",this.html.style.webkitFilter=e,this.html.style.mozFilter=e,this.html.style.msFilter=e,this.html.style.filter=e}},underlineLinks:e=>{let t="_access-underline",i=()=>{var e=document.querySelector("."+t);e&&(e.parentElement.removeChild(e),r.deployedObjects.remove("."+t))};if(e)return this.initialValues.underlineLinks=!1,this.sessionState.underlineLinks=this.initialValues.underlineLinks,this.onChange(!0),document.querySelector('._access-menu [data-access-action="underlineLinks"]').classList.remove("active"),i();document.querySelector('._access-menu [data-access-action="underlineLinks"]').classList.toggle("active"),this.initialValues.underlineLinks=!this.initialValues.underlineLinks,this.sessionState.underlineLinks=this.initialValues.underlineLinks,this.onChange(!0),this.initialValues.underlineLinks?(r.injectStyle("\n                    body a {\n                        text-decoration: underline !important;\n                    }\n                ",{className:t}),r.deployedObjects.set("."+t,!0)):i()},bigCursor:e=>{e?(this.html.classList.remove("_access_cursor"),document.querySelector('._access-menu [data-access-action="bigCursor"]').classList.remove("active"),this.initialValues.bigCursor=!1,this.sessionState.bigCursor=!1,this.onChange(!0)):(document.querySelector('._access-menu [data-access-action="bigCursor"]').classList.toggle("active"),this.initialValues.bigCursor=!this.initialValues.bigCursor,this.sessionState.bigCursor=this.initialValues.bigCursor,this.onChange(!0),this.html.classList.toggle("_access_cursor"))},readingGuide:e=>{e?(null!=document.getElementById("access_read_guide_bar")&&document.getElementById("access_read_guide_bar").remove(),document.querySelector('._access-menu [data-access-action="readingGuide"]').classList.remove("active"),this.initialValues.readingGuide=!1,this.sessionState.readingGuide=this.initialValues.readingGuide,this.onChange(!0),document.body.removeEventListener("touchmove",this.updateReadGuide,!1),document.body.removeEventListener("mousemove",this.updateReadGuide,!1)):(document.querySelector('._access-menu [data-access-action="readingGuide"]').classList.toggle("active"),this.initialValues.readingGuide=!this.initialValues.readingGuide,this.sessionState.readingGuide=this.initialValues.readingGuide,this.onChange(!0),this.initialValues.readingGuide?((e=document.createElement("div")).id="access_read_guide_bar",e.classList.add("access_read_guide_bar"),document.body.append(e),document.body.addEventListener("touchmove",this.updateReadGuide,!1),document.body.addEventListener("mousemove",this.updateReadGuide,!1)):(null!=document.getElementById("access_read_guide_bar")&&document.getElementById("access_read_guide_bar").remove(),document.body.removeEventListener("touchmove",this.updateReadGuide,!1),document.body.removeEventListener("mousemove",this.updateReadGuide,!1)))},textToSpeech:e=>{this.onChange(!1);let t="_access-text-to-speech",i=()=>{var e=document.querySelector("."+t);e&&(e.parentElement.removeChild(e),document.removeEventListener("click",this.read,!1),r.deployedObjects.remove("."+t))};if(e)return document.querySelector('._access-menu [data-access-action="textToSpeech"]').classList.remove("active"),this.initialValues.textToSpeech=!1,i();document.querySelector('._access-menu [data-access-action="textToSpeech"]').classList.toggle("active"),this.initialValues.textToSpeech=!this.initialValues.textToSpeech,this.initialValues.textToSpeech?(r.injectStyle("\n                        *:hover {\n                            box-shadow: 2px 2px 2px rgba(180,180,180,0.7);\n                        }\n                    ",{className:t}),r.deployedObjects.set("."+t,!0),document.addEventListener("click",this.read,!1)):i()},speechToText:e=>{this.onChange(!1);let i="_access-speech-to-text",t=()=>{this.recognition&&(this.recognition.stop(),this.body.classList.remove("_access-listening"));var e=document.querySelector("."+i),t=(e&&(e.parentElement.removeChild(e),r.deployedObjects.remove("."+i)),document.querySelectorAll("._access-mic"));for(let e=0;e<t.length;e++)t[e].removeEventListener("focus",this.listen,!1),t[e].classList.remove("_access-mic")};if(e)return document.querySelector('._access-menu [data-access-action="speechToText"]').classList.remove("active"),this.initialValues.speechToText=!1,t();if(document.querySelector('._access-menu [data-access-action="speechToText"]').classList.toggle("active"),this.initialValues.speechToText=!this.initialValues.speechToText,this.initialValues.speechToText){var e=`
                        body:after {
                            content: ${this.options.icon.useEmojis?'"🎤"':'"mic"'};
                            ${this.options.icon.useEmojis?"":"font-family: '"+this.options.icon.fontFamily+"';"}
                            position: fixed;
                            z-index: 1100;
                            top: 1vw;
                            right: 1vw;
                            width: 36px;
                            height: 36px;
                            font-size: 30px;
                            line-height: 36px;
                            border-radius: 50%;
                            background: rgba(255,255,255,0.7);
                            display: flex;
                            justify-content: center;
                            aling-items: center;
                        }

                        body._access-listening:after {
                            animation: _access-listening-animation 2s infinite ease;
                        }

                        @keyframes _access-listening-animation {
                            0%  {background-color: transparent;}
                            50%  {background-color: #EF9A9A;}
                        }
                    `,s=(r.injectStyle(e,{className:i}),r.deployedObjects.set("."+i,!0),document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable]'));for(let e=0;e<s.length;e++)s[e].addEventListener("blur",()=>{"object"==typeof this.recognition&&"function"==typeof this.recognition.stop&&this.recognition.stop()},!1),s[e].addEventListener("focus",this.listen,!1),s[e].parentElement.classList.add("_access-mic")}else t()}},this.options.session.persistent&&this.setSessionFromCache()}resetIfDefined(e,t,i){void 0!==e&&(t[i]=e)}onChange(e){e&&this.options.session.persistent&&this.saveSession()}saveSession(){o("_accessState",this.sessionState)}setSessionFromCache(){var t=c("_accessState");if(t){if(t.textSize){let e=t.textSize;if(0<e)for(;e--;)this.alterTextSize(!0);else for(;e++;)this.alterTextSize(!1)}if(t.textSpace){let e=t.textSpace;if(0<e)for(;e--;)this.alterTextSpace(!0);else for(;e++;)this.alterTextSpace(!1)}t.invertColors&&this.menuInterface.invertColors(),t.grayHues&&this.menuInterface.grayHues(),t.underlineLinks&&this.menuInterface.underlineLinks(),t.bigCursor&&this.menuInterface.bigCursor(),t.readingGuide&&this.menuInterface.readingGuide(),this.sessionState=t}}destroy(){var e;for(e of r.deployedObjects.getAll()){var t=document.querySelector(e);t&&t.parentElement.removeChild(t)}}}d.init=e=>{r.warn('"Accessibility.init()" is deprecated! Please use "new Accessibility()" instead'),new d(e)};i=d;window.Accessibility=i}],s={},n.m=i,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0);function n(e){var t;return(s[e]||(t=s[e]={i:e,l:!1,exports:{}},i[e].call(t.exports,t,t.exports,n),t.l=!0,t)).exports}var i,s}),events.on("ready",function(){var e="Inverter cores",t="Tonalidade cinza",i="Sublinhar links",s="Aumentar o cursor",n="pt-BR",o=navigate.currentScreen.model.language,a=("es"==o?(e="Invertir colores",t="Tono gris",i="Subrayar enlaces",s="Agrandar el cursor",n="es"):"en"==o&&(e="Invert colors",t="Grayscale",i="Underline links",s="Enlarge mouse pointer",n="en"),{labels:{menuTitle:" ",increaseText:"Aumentar",decreaseText:"Diminuir",increaseTextSpacing:"Aumentar espaçamento das fontes",decreaseTextSpacing:"Diminuir espaçamento das fontes",invertColors:e,grayHues:t,underlineLinks:i,bigCursor:s,readingGuide:"reading guide (in my language)",textToSpeech:"text to speech (in my language)",speechToText:"speech to text (in my language)"},textToSpeechLang:n,speechToTextLang:n,hotkeys:{enabled:!0},icon:{circular:!0,img:"",position:{top:{size:0,units:"px"},left:{size:0,units:"px"},type:"fixed"}},modules:{increaseText:!1,decreaseText:!1,invertColors:!0,increaseTextSpacing:!1,decreaseTextSpacing:!1,grayHues:!0,underlineLinks:!0,bigCursor:!0,readingGuide:!1,textToSpeech:!1,speechToText:!1},textPixelMode:!0}),r=navigate.currentScreen.model.acessibility;setTimeout(function(){r.tools&&createTools(a)},1e3)});
//# sourceMappingURL=accessibility-tools.js.map
