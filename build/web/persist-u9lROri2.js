/**
 * copy-cat: Copyright SquidDev 2026
 *
 * - @squid-dev/cc-web-term: Copyright SquidDev (BSD-3-Clause)
 * - jsx-runtime: Copyright  (MIT)
 * - preact: Copyright  (MIT)
 * - setimmediate: Copyright YuzuJS (MIT)
 * - style-inject: Copyright EGOIST (MIT)
 * - tslib: Copyright Microsoft Corp. (0BSD)
 * - wasm-feature-detect: Copyright Surma (Apache-2.0)
 *
 * @license
 */

define(['require', 'exports'], (function (require, exports) { 'use strict';

    function _interopNamespaceDefault(e) {
        const n = Object.create(null);
        if (e) {
            for (const k in e) {
                if (k !== 'default') {
                    const d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: () => e[k]
                    });
                }
            }
        }
        n.default = e;
        return Object.freeze(n);
    }

    var n,l,u$1,i,r,o,e,f$1,c,s,a,p={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return m(l,e,i,r,null)}function m(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$1:o,__i:-1,__u:0};return null==o&&null!=l.vnode&&l.vnode(e),e}function b(){return {current:null}}function k(n){return n.children}function x(n,l){this.props=n,this.context=l;}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?S(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=true)&&i.push(n)&&!$.__r++||r!=l.debounceRendering)&&((r=l.debounceRendering)||o)($);}function $(){for(var n,u,t,r,o,f,c,s=1;i.length;)i.length>s&&i.sort(e),n=i.shift(),s=i.length,n.__d&&(t=void 0,r=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,N(f,t,c),r.__e=r.__=null,t.__e!=o&&C(t)));$.__r=0;}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_,m=t&&t.__k||v,b=l.length;for(f=P(u,l,m,f,b),a=0;a<b;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p:m[y.__i]||p,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&B(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),(_=!!(4&y.__u))||h.__k===y.__k?f=A(y,f,n,_):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?("string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?o=n.__k[r]=m(null,o,null,null,null):w(o)?o=n.__k[r]=m(k,{children:o},null,null,null):null==o.constructor&&o.__b>0?o=n.__k[r]=m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[r]=o,f=r+h,o.__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),D(e,e));return t}function A(n,l,u,t){var i,r;if("function"==typeof n.type){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,l=A(i[r],l,u,t));return l}n.__e!=l&&(t&&(l&&n.type&&!l.parentNode&&(l=S(n)),u.insertBefore(n.__e,l||null)),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function L(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],s=null!=c&&0==(2&c.__u);if(null===c&&null==e||s&&e==c.key&&f==c.type)return u;if(t>(s?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return  -1}function T(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y.test(l)?u:u+"px";}function j(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$1,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c,n.addEventListener(l,r?a:s,r)):n.removeEventListener(l,r?a:s,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=E),C&&C.sub(h),h.state||(h.state={}),h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),u.__v==t.__v||!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k&&null==a.key&&(L=V(a.props.children)),f=I(n,w(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else {for(T=o.length;T--;)g(o[T]);z(u);}else u.__e=t.__e,u.__k=t.__k,n.then||z(u);l.__e(n,u,t);}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=q(t.__e,u,t,i,r,o,e,c,s);return (a=l.diffed)&&a(u),128&u.__u?void 0:f}function z(n){n&&n.__c&&(n.__c.__e=true),n&&n.__k&&n.__k.forEach(z);}function N(n,u,t){for(var i=0;i<t.length;i++)B(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l.__e(n,u.__v);}});}function V(n){return "object"!=typeof n||null==n||n.__b&&n.__b>0?n:w(n)?n.map(V):d({},n)}function q(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props||p,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l.__m&&l.__m(t,e),c=false),e=null;}if(null==x)b===k||c&&u.data==k||(u.data=k);else {if(e=e&&n.call(u.childNodes),!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j(u,a,null,d,o);}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j(u,a,m,b[a],o));}return u}function B(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l.__e(n,t);}}function D(n,u,t){var i,r;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||B(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&D(i[r],u,t||"function"!=typeof n.type);t||g(n.__e),n.__c=n.__=n.__e=void 0;}function E(n,l,u){return this.constructor(n,u)}function G(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l.__&&l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],O(t,u=(!r&&i||t).__k=_(k,null,[u]),o||p,p,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),N(e,u,f);}n=v.slice,l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),M(this));},x.prototype.render=k,i=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f$1=/(PointerCapture)$|Capture$/i,c=0,s=F(false),a=F(true);

    var f=0;function u(e,t,n,o,i,u){t||(t={});var a,c,p=t;if("ref"in p)for(c in p={},t)"ref"==c?a=t[c]:p[c]=t[c];var l$1={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a) void 0===p[c]&&(p[c]=a[c]);return l.vnode&&l.vnode(l$1),l$1}

    const termFont = "term_font-7d20694439125422.png";

    const termFontHd = "term_font_hd-0506b6efe5f7feae.png";

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    class Semaphore {
        constructor() {
            this.listeners = new Set();
        }
        attach(listener) {
            this.listeners.add(listener);
        }
        detach(listener) {
            this.listeners.delete(listener);
        }
        signal() {
            for (const listener of this.listeners)
                listener();
        }
    }

    const debug = window.location.protocol === "file:" || window.location.hostname === "localhost";
    /* eslint-disable no-console */
    const logger = debug
        ? (name) => (msg) => console.log(`[${name}] ${msg}`)
        : () => () => 0;

    const gifWorker = "gif.worker-8b0d4d4953c887a3.js";

    /*
     * The MIT License (MIT)
     *
     * Copyright (c) 2013-2018 Johan Nordberg
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * Typescript port of https://github.com/jnordberg/gif.js, largely to avoid dragging
     * in the entirity of EventEmitter.
     */
    const log$1 = logger("GIF encoding");
    const defaults$1 = {
        workers: 2,
        repeat: 0,
        background: "#fff",
        quality: 10,
        transparent: null,
        dither: false, // see GIFEncoder.js for dithering options
    };
    const frameDefaults = {
        delay: 500, // ms
    };
    class GIF {
        constructor(options) {
            this.running = false;
            this.frames = [];
            this.freeWorkers = [];
            this.activeWorkers = [];
            this.nextFrame = 0;
            this.finishedFrames = 0;
            this.globalPalette = true;
            this.options = Object.assign(Object.assign({}, defaults$1), options);
        }
        addFrame(image, options) {
            let data;
            if (image instanceof ImageData) {
                data = image.data;
            }
            else if (image instanceof CanvasRenderingContext2D) {
                data = this.getContextData(image);
            }
            else {
                throw new Error("Invalid image");
            }
            this.frames.push(Object.assign(Object.assign(Object.assign({}, frameDefaults), options), { transparent: this.options.transparent, data }));
        }
        render() {
            if (this.running)
                throw new Error("Already rendering");
            this.running = true;
            this.nextFrame = 0;
            this.finishedFrames = 0;
            this.imageParts = this.frames.map(() => null);
            const numWorkers = this.spawnWorkers();
            // We need to wait for the palette
            if (this.globalPalette === true) {
                this.renderNextFrame();
            }
            else {
                for (let i = 0; i < numWorkers; i++)
                    this.renderNextFrame();
            }
            if (this.onProgress)
                this.onProgress(0);
        }
        abort() {
            while (true) {
                const worker = this.activeWorkers.shift();
                if (worker == null)
                    break;
                log$1("Killing active worker");
                worker.terminate();
            }
            this.running = false;
            if (this.onAbort)
                this.onAbort();
        }
        spawnWorkers() {
            const numWorkers = Math.min(this.options.workers, this.frames.length);
            for (let i = this.freeWorkers.length; i < numWorkers; i++) {
                log$1(`Spawning worker ${i}`);
                const worker = new Worker(gifWorker);
                worker.onmessage = (event) => {
                    this.activeWorkers.splice(this.activeWorkers.indexOf(worker), 1);
                    this.freeWorkers.push(worker);
                    return this.frameFinished(event.data);
                };
                this.freeWorkers.push(worker);
            }
            return numWorkers;
        }
        frameFinished(frame) {
            if (!this.imageParts)
                throw new Error("No image data!");
            log$1(`Frame ${frame.index} finished - ${this.activeWorkers.length} active`);
            this.finishedFrames++;
            if (this.onProgress)
                this.onProgress(this.finishedFrames / this.frames.length);
            this.imageParts[frame.index] = frame;
            // Remember calculated palette, spawn the rest of the workers
            if (this.globalPalette === true) {
                this.globalPalette = frame.globalPalette;
                log$1("Global palette analyzed");
                if (this.frames.length > 2) {
                    for (let i = 1; i < this.freeWorkers.length; i++)
                        this.renderNextFrame();
                }
            }
            if (this.imageParts.indexOf(null) >= 0) {
                return this.renderNextFrame();
            }
            else {
                return this.finishRendering();
            }
        }
        finishRendering() {
            if (!this.imageParts)
                throw new Error("No image data!");
            const imageParts = this.imageParts;
            let len = 0;
            for (const frame of imageParts) {
                len += (frame.data.length - 1) * frame.pageSize + frame.cursor;
            }
            const lastFrame = imageParts[this.frames.length - 1];
            len += lastFrame.pageSize - lastFrame.cursor;
            log$1(`Rendering finished - filesize ${Math.round(len / 1000)}kb`);
            const data = new Uint8Array(len);
            let offset = 0;
            for (const frame of imageParts) {
                for (let i = 0; i < frame.data.length; i++) {
                    data.set(frame.data[i], offset);
                    offset += i === frame.data.length - 1 ? frame.cursor : frame.pageSize;
                }
            }
            if (this.onFinished)
                this.onFinished(new Blob([data], { type: "image/gif" }));
        }
        renderNextFrame() {
            if (this.freeWorkers.length === 0)
                throw new Error("No free workers");
            if (this.nextFrame >= this.frames.length)
                return;
            const worker = this.freeWorkers.shift();
            const task = this.getTask(this.nextFrame++);
            log$1(`Starting frame ${task.index + 1} of ${this.frames.length}`);
            this.activeWorkers.push(worker);
            return worker.postMessage(task);
        }
        getContextData(ctx) {
            return ctx.getImageData(0, 0, this.options.width, this.options.height).data;
        }
        getTask(index) {
            const frame = this.frames[index];
            return {
                index,
                data: frame.data,
                last: index === (this.frames.length - 1),
                delay: frame.delay,
                dispose: -1,
                transparent: frame.transparent,
                width: this.options.width,
                height: this.options.height,
                quality: this.options.quality,
                dither: this.options.dither,
                globalPalette: this.globalPalette,
                repeat: this.options.repeat,
                canTransfer: true,
            };
        }
    }

    const pad = (val, len) => {
        const str = val.toString();
        return str.length >= len ? str : "0".repeat(len - str.length) + str;
    };
    /**
     * Save a Blob to a file
     *
     * @param prefix The file's prefix
     * @param extension The appropriate extension
     * @param blob The blob to save to
     */
    const saveBlob = (prefix, extension, blob) => {
        if (!blob)
            return;
        // Somewhat inspired by https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js
        // Goodness knows how well this works on non-modern browsers.
        const element = document.createElement("a");
        const url = URL.createObjectURL(blob);
        const now = new Date();
        element.download = `${prefix}-${now.getFullYear()}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(), 2)}_` +
            `${pad(now.getHours(), 2)}-${pad(now.getMinutes(), 2)}.${extension}`;
        element.rel = "noopener";
        element.href = url;
        setTimeout(() => URL.revokeObjectURL(url), 60e3);
        setTimeout(() => {
            try {
                element.dispatchEvent(new MouseEvent("click"));
            }
            catch (e) {
                const mouseEvent = document.createEvent("MouseEvents");
                mouseEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
                element.dispatchEvent(mouseEvent);
            }
        }, 0);
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    const terminalButtonsRight = "pU4zsq_terminalButtonsRight";
    const terminalInfo = "pU4zsq_terminalInfo";
    const iconFont = "pU4zsq_iconFont";
    const terminalProgress = "pU4zsq_terminalProgress";
    const actionButton = "pU4zsq_actionButton";
    const terminalBar = "pU4zsq_terminalBar";
    const terminalInput = "pU4zsq_terminalInput";
    const terminalCanvas = "pU4zsq_terminalCanvas";
    const terminalButton = "pU4zsq_terminalButton";
    const terminalView = "pU4zsq_terminalView";
    styleInject(".pU4zsq_actionButton {\n  color: inherit;\n  font-family: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  cursor: pointer;\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n\n.pU4zsq_actionButton.pU4zsq_disabled {\n  cursor: initial;\n  color: #888;\n}\n\n.pU4zsq_iconFont {\n  height: 1em;\n  overflow: visible;\n}\n\n.pU4zsq_terminalView {\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  display: flex;\n  overflow-x: hidden;\n}\n\n.pU4zsq_terminalCanvas {\n  image-rendering: optimizeSpeed;\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-optimize-contrast;\n  image-rendering: -o-crisp-edges;\n  image-rendering: optimize-contrast;\n  -ms-interpolation-mode: nearest-neighbor;\n  display: block;\n}\n\n.pU4zsq_terminalBar {\n  color: #000;\n  fill: #000;\n  background: #eee;\n  font-size: .8em;\n}\n\n.pU4zsq_terminalInfo, .pU4zsq_terminalButton {\n  padding: 3px;\n  display: inline-block;\n}\n\n.pU4zsq_terminalButtonsRight {\n  float: right;\n}\n\n.pU4zsq_terminalButton:hover {\n  background: #ddd;\n}\n\n.pU4zsq_terminalButton.pU4zsq_disabled:hover {\n  background: none;\n}\n\n.pU4zsq_terminalInput {\n  z-index: -1000;\n  opacity: 0;\n  position: absolute;\n}\n\n.pU4zsq_terminalProgress {\n  background: #333;\n  height: 2px;\n}\n");

    const mk = (child, viewbox) => {
        const node = _("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: viewbox !== null && viewbox !== void 0 ? viewbox : "0 0 1000 1000", class: iconFont }, child);
        return () => node;
    };
    const power = "M857 650q0 87 -34 166t-91 137 -137 92 -166 34 -167 -34 -136 -92 -92 -137 -34 -166q0 -102 45 -191t126 -151q24 -18 54 -14t46 28q18 23 14 53t-28 47q-54 41 -84 101t-30 127q0 58 23 111t61 91 91 61 111 23 110 -23 92 -61 61 -91 22 -111q0 -68 -30 -127t-84 -101q-23 -18 -28 -47t14 -53q17 -24 47 -28t53 14q81 61 126 151t45 191zm-357 -429v358q0 29 -21 50t-50 21 -51 -21 -21 -50v-358q0 -29 21 -50t51 -21 50 21 21 50z";
    const video = "M1000 346v608q0 23 -22 32 -7 3 -14 3 -15 0 -25 -10l-225 -225v92q0 67 -47 114t-113 47h-393q-67 0 -114 -47t-47 -114v-392q0 -67 47 -114t114 -47h393q66 0 113 47t47 114v92l225 -225q10 -10 25 -10 7 0 14 2 22 10 22 33z";
    const NoEntry = mk(_("path", { d: "M679 686v-72q0 -14 -11 -25t-25 -10h-429q-14 0 -25 10t-10 25v72q0 14 10 25t25 10h429q14 0 25 -10t11 -25zm178 -36q0 117 -57 215t-156 156 -215 58 -216 -58 -155 -156 -58 -215 58 -215 155 -156 216 -58 215 58 156 156 57 215z" }), "0 200 870 870");
    const Off = mk(_("path", { d: power }));
    const On = mk(_("path", { d: power, fill: "green" }));
    const Camera = mk(_("path", { d: "M536 525q66 0 113 47t47 114 -47 113 -113 47 -114 -47 -47 -113 47 -114 114 -47zm393 -232q59 0 101 42t41 101v500q0 59 -41 101t-101 42h-786q-59 0 -101 -42t-42 -101v-500q0 -59 42 -101t101 -42h125l28 -76q11 -27 39 -47t58 -20h286q29 0 57 20t39 47l29 76h125zm-393 643q103 0 176 -74t74 -176 -74 -177 -176 -73 -177 73 -73 177 73 176 177 74z" }), "0 0 1100 1100");
    const Videocam = mk(_("path", { d: video }), "0 100 1000 1000");
    const VideocamRecording = mk(_("path", { d: video, fill: "red" }), "0 100 1000 1000");
    const Fullscreen = mk(_("path", { d: "M421 261q0-7-5-13l-185-185 80-81q10-10 10-25t-10-25-25-11h-250q-15 0-25 11t-11 25v250q0 15 11 25t25 11 25-11l80-80 186 185q5 6 12 6t13-6l64-63q5-6 5-13z m436 482v-250q0-15-10-25t-26-11-25 11l-80 80-185-185q-6-6-13-6t-13 6l-64 64q-5 5-5 12t5 13l186 185-81 81q-10 10-10 25t10 25 25 11h250q15 0 26-11t10-25z" }), "0 -100 900 900");

    const convertMouseButton = (btn) => {
        switch (btn) {
            case 0: return 1; // Left
            case 1: return 3; // Middle
            case 2: return 2; // Right
            default: return undefined;
        }
    };
    const convertMouseButtons = (btn) => {
        if ((btn & 1) !== 0)
            return 1; // Left
        if ((btn & 2) !== 0)
            return 2; // Right
        if ((btn & 4) !== 0)
            return 3; // Middle
        return undefined;
    };
    /**
     * Mapping of KeyboardEvent.code and KeyboardEvent.key
     *
     * @see https://www.w3.org/TR/uievents-key/
     * @see https://www.w3.org/TR/uievents-code/
     */
    const keyboardCodes = {
        "Digit1": 0 /* EKeyCode.One */, "1": 0 /* EKeyCode.One */,
        "Digit2": 1 /* EKeyCode.Two */, "2": 1 /* EKeyCode.Two */,
        "Digit3": 2 /* EKeyCode.Three */, "3": 2 /* EKeyCode.Three */,
        "Digit4": 3 /* EKeyCode.Four */, "4": 3 /* EKeyCode.Four */,
        "Digit5": 4 /* EKeyCode.Five */, "5": 4 /* EKeyCode.Five */,
        "Digit6": 5 /* EKeyCode.Six */, "6": 5 /* EKeyCode.Six */,
        "Digit7": 6 /* EKeyCode.Seven */, "7": 6 /* EKeyCode.Seven */,
        "Digit8": 7 /* EKeyCode.Eight */, "8": 7 /* EKeyCode.Eight */,
        "Digit9": 8 /* EKeyCode.Nine */, "9": 8 /* EKeyCode.Nine */,
        "Digit0": 9 /* EKeyCode.Zero */, "0": 9 /* EKeyCode.Zero */,
        "Minus": 10 /* EKeyCode.Minus */, "-": 10 /* EKeyCode.Minus */,
        "Equal": 11 /* EKeyCode.Equals */,
        "Backspace": 12 /* EKeyCode.Backspace */,
        "Tab": 13 /* EKeyCode.Tab */,
        "KeyQ": 30 /* EKeyCode.Q */, "Q": 30 /* EKeyCode.Q */,
        "KeyW": 36 /* EKeyCode.W */, "W": 36 /* EKeyCode.W */,
        "KeyE": 18 /* EKeyCode.E */, "E": 18 /* EKeyCode.E */,
        "KeyR": 31 /* EKeyCode.R */, "R": 31 /* EKeyCode.R */,
        "KeyT": 33 /* EKeyCode.T */, "T": 33 /* EKeyCode.T */,
        "KeyY": 38 /* EKeyCode.Y */, "Y": 38 /* EKeyCode.Y */,
        "KeyU": 34 /* EKeyCode.U */, "U": 34 /* EKeyCode.U */,
        "KeyI": 22 /* EKeyCode.I */, "I": 22 /* EKeyCode.I */,
        "KeyO": 28 /* EKeyCode.O */, "O": 28 /* EKeyCode.O */,
        "KeyP": 29 /* EKeyCode.P */, "P": 29 /* EKeyCode.P */,
        "BracketLeft": 40 /* EKeyCode.LeftBracket */, "(": 40 /* EKeyCode.LeftBracket */,
        "BracketRight": 41 /* EKeyCode.RightBracket */, ")": 41 /* EKeyCode.RightBracket */,
        "Enter": 42 /* EKeyCode.Enter */,
        "ControlLeft": 43 /* EKeyCode.LeftCtrl */, "Control": 43 /* EKeyCode.LeftCtrl */,
        "KeyA": 14 /* EKeyCode.A */, "A": 14 /* EKeyCode.A */,
        "KeyS": 32 /* EKeyCode.S */, "S": 32 /* EKeyCode.S */,
        "KeyD": 17 /* EKeyCode.D */, "D": 17 /* EKeyCode.D */,
        "KeyF": 19 /* EKeyCode.F */, "F": 19 /* EKeyCode.F */,
        "KeyG": 20 /* EKeyCode.G */, "G": 20 /* EKeyCode.G */,
        "KeyH": 21 /* EKeyCode.H */, "H": 21 /* EKeyCode.H */,
        "KeyJ": 23 /* EKeyCode.J */, "J": 23 /* EKeyCode.J */,
        "KeyK": 24 /* EKeyCode.K */, "K": 24 /* EKeyCode.K */,
        "KeyL": 25 /* EKeyCode.L */, "L": 25 /* EKeyCode.L */,
        "Semicolon": 44 /* EKeyCode.SemiColon */, ";": 44 /* EKeyCode.SemiColon */,
        "Quote": 45 /* EKeyCode.Apostrophe */, "'": 45 /* EKeyCode.Apostrophe */,
        "Backquote": 46 /* EKeyCode.Grave */, "`": 46 /* EKeyCode.Grave */,
        "ShiftLeft": 47 /* EKeyCode.LeftShift */, "Shift": 47 /* EKeyCode.LeftShift */,
        "IntlBackslash": 48 /* EKeyCode.Backslash */,
        "KeyZ": 39 /* EKeyCode.Z */, "Z": 39 /* EKeyCode.Z */,
        "KeyX": 37 /* EKeyCode.X */, "X": 37 /* EKeyCode.X */,
        "KeyC": 16 /* EKeyCode.C */, "C": 16 /* EKeyCode.C */,
        "KeyV": 35 /* EKeyCode.V */, "V": 35 /* EKeyCode.V */,
        "KeyB": 15 /* EKeyCode.B */, "B": 15 /* EKeyCode.B */,
        "KeyN": 27 /* EKeyCode.N */, "N": 27 /* EKeyCode.N */,
        "KeyM": 26 /* EKeyCode.M */, "M": 26 /* EKeyCode.M */,
        "Comma": 49 /* EKeyCode.Comma */, ",": 49 /* EKeyCode.Comma */,
        "Period": 50 /* EKeyCode.Period */, ".": 50 /* EKeyCode.Period */,
        "Slash": 51 /* EKeyCode.Slash */, "/": 51 /* EKeyCode.Slash */,
        "ShiftRight": 52 /* EKeyCode.RightShift */,
        "NumpadMultiply": 53 /* EKeyCode.Multiply */,
        "AltLeft": 54 /* EKeyCode.LeftAlt */, "Alt": 54 /* EKeyCode.LeftAlt */,
        "Space": 55 /* EKeyCode.Space */, " ": 55 /* EKeyCode.Space */,
        "CapsLock": 56 /* EKeyCode.CapsLock */,
        "F1": 57 /* EKeyCode.F1 */,
        "F2": 58 /* EKeyCode.F2 */,
        "F3": 59 /* EKeyCode.F3 */,
        "F4": 60 /* EKeyCode.F4 */,
        "F5": 61 /* EKeyCode.F5 */,
        "F6": 62 /* EKeyCode.F6 */,
        "F7": 63 /* EKeyCode.F7 */,
        "F8": 64 /* EKeyCode.F8 */,
        "F9": 65 /* EKeyCode.F9 */,
        "F10": 66 /* EKeyCode.F10 */,
        "NumLock": 72 /* EKeyCode.NumLock */,
        "ScollLock": 73 /* EKeyCode.ScrollLock */,
        "Numpad7": 81 /* EKeyCode.NumPad7 */,
        "Numpad8": 82 /* EKeyCode.NumPad8 */,
        "Numpad9": 83 /* EKeyCode.NumPad9 */,
        "NumpadSubtract": 84 /* EKeyCode.NumPadSubtract */,
        "Numpad4": 78 /* EKeyCode.NumPad4 */,
        "Numpad5": 79 /* EKeyCode.NumPad5 */,
        "Numpad6": 80 /* EKeyCode.NumPad6 */,
        "NumpadAdd": 85 /* EKeyCode.NumPadAdd */,
        "Numpad1": 75 /* EKeyCode.NumPad1 */,
        "Numpad2": 76 /* EKeyCode.NumPad2 */,
        "Numpad3": 77 /* EKeyCode.NumPad3 */,
        "Numpad0": 74 /* EKeyCode.NumPad0 */,
        "NumpadDecimal": 86 /* EKeyCode.NumPadDecimal */,
        "F11": 67 /* EKeyCode.F11 */,
        "F12": 68 /* EKeyCode.F12 */,
        "F13": 69 /* EKeyCode.F13 */,
        "F14": 70 /* EKeyCode.F14 */,
        "F15": 71 /* EKeyCode.F15 */,
        // I have absolutely no clue about these. If someone has a keyboard with these
        // on, please confim that they're right.
        "KanaMode": 87 /* EKeyCode.Kana */,
        "Convert": 88 /* EKeyCode.Convert */,
        "NonConvert": 89 /* EKeyCode.Noconvert */,
        "IntlYen": 90 /* EKeyCode.Yen */,
        "NumpadEqual": 91 /* EKeyCode.NumPadEquals */,
        "Cirmcumflex": 92 /* EKeyCode.Circumflex */,
        "At": 93 /* EKeyCode.At */,
        "Colon": 94 /* EKeyCode.Colon */,
        "Underscore": 95 /* EKeyCode.Underscore */,
        "Kanji": 96 /* EKeyCode.Kanji */,
        "Stop": 97 /* EKeyCode.Stop */,
        "Ax": 98 /* EKeyCode.Ax */,
        "NumpadEnter": 99 /* EKeyCode.NumPadEnter */,
        "ControlRight": 100 /* EKeyCode.RightCtrl */,
        "NumpadComma": 101 /* EKeyCode.NumPadComma */,
        "NumpadDivide": 102 /* EKeyCode.NumPadDivide */,
        "AltRight": 103 /* EKeyCode.RightAlt */,
        "Pause": 104 /* EKeyCode.Pause */,
        "Home": 105 /* EKeyCode.Home */,
        "ArrowUp": 106 /* EKeyCode.Up */,
        "PageUp": 107 /* EKeyCode.PageUp */,
        "ArrowLeft": 108 /* EKeyCode.Left */,
        "ArrowRight": 109 /* EKeyCode.Right */,
        "End": 110 /* EKeyCode.End */,
        "ArrowDown": 111 /* EKeyCode.Down */,
        "PageDown": 112 /* EKeyCode.PageDown */,
        "Insert": 113 /* EKeyCode.Insert */,
        "Delete": 114 /* EKeyCode.Delete */,
    };
    const convertKey = (key) => keyboardCodes[key];
    const lwjgl3Codes = [
        49 /* one */, 50 /* two */, 51 /* three */, 52 /* four */, 53 /* five */, 54 /* six */, 55 /* seven */, 56 /* eight */, 57 /* nine */, 48 /* zero */,
        45 /* minus */,
        61 /* equals */,
        259 /* backspace */,
        258 /* tab */,
        65 /* a */, 66 /* b */, 67 /* c */, 68 /* d */, 69 /* e */, 70 /* f */, 71 /* g */, 72 /* h */, 73 /* i */, 74 /* j */, 75 /* k */, 76 /* l */, 77 /* m */, 78 /* n */, 79 /* o */, 80 /* p */, 81 /* q */, 82 /* r */, 83 /* s */, 84 /* t */, 85 /* u */, 86 /* v */, 87 /* w */, 88 /* x */, 89 /* y */, 90 /* z */,
        91 /* leftBracket */,
        93 /* rightBracket */,
        257 /* enter */,
        341 /* leftCtrl */,
        -1 /* semiColon */,
        39 /* apostrophe */,
        96 /* grave */,
        340 /* leftShift */,
        92 /* backslash */,
        44 /* comma */,
        46 /* period */,
        47 /* slash */,
        344 /* rightShift */,
        -1 /* multiply */,
        342 /* leftAlt */,
        32 /* space */,
        280 /* capsLock */,
        290 /* f1 */, 291 /* f2 */, 292 /* f3 */, 293 /* f4 */, 294 /* f5 */, 295 /* f6 */, 296 /* f7 */, 297 /* f8 */, 298 /* f9 */, 299 /* f10 */, 300 /* f11 */, 301 /* f12 */, 302 /* f13 */, 303 /* f14 */, 304 /* f15 */,
        282 /* numLock */,
        281 /* scrollLock */,
        320 /* numPad0 */, 321 /* numPad1 */, 322 /* numPad2 */, 323 /* numPad3 */, 324 /* numPad4 */, 325 /* numPad5 */, 326 /* numPad6 */, 327 /* numPad7 */, 328 /* numPad8 */, 329 /* numPad9 */,
        333 /* numPadSubtract */,
        334 /* numPadAdd */,
        330 /* numPadDecimal */,
        -1 /* kana */,
        -1 /* convert */,
        -1 /* noconvert */,
        -1 /* yen */,
        -1 /* numPadEquals */,
        -1 /* circumflex */,
        -1 /* at */,
        -1 /* colon */,
        -1 /* underscore */,
        -1 /* kanji */,
        -1 /* stop */,
        -1 /* ax */,
        335 /* numPadEnter */,
        345 /* rightCtrl */,
        -1 /* numPadComma */,
        331 /* numPadDivide */,
        346 /* rightAlt */,
        284 /* pause */,
        268 /* home */,
        265 /* up */,
        266 /* pageUp */,
        263 /* left */,
        262 /* right */,
        269 /* end */,
        264 /* down */,
        267 /* pageDown */,
        260 /* insert */,
        261 /* delete */,
    ];
    const lwjgl3Code = (key) => {
        const result = lwjgl3Codes[key];
        return result < 0 ? undefined : result;
    };

    const defaultPalette = {
        0: "rgb(240,240,240)",
        1: "rgb(242,178,51)",
        2: "rgb(229,127,216)",
        3: "rgb(153,178,242)",
        4: "rgb(222,222,108)",
        5: "rgb(127,204,25)",
        6: "rgb(242,178,204)",
        7: "rgb(76,76,76)",
        8: "rgb(153,153,153)",
        9: "rgb(76,153,178)",
        a: "rgb(178,102,229)",
        b: "rgb(37,49,146)",
        c: "rgb(127,102,76)",
        d: "rgb(87,166,78)",
        e: "rgb(204,76,76)",
        f: "rgb(0,0,0)", // Black
    };
    class TerminalData {
        constructor() {
            this.text = [];
            this.fore = [];
            this.back = [];
            this.palette = defaultPalette;
            this.currentFore = "0";
            this.sizeX = 0;
            this.sizeY = 0;
            this.cursorX = 0;
            this.cursorY = 0;
            this.cursorBlink = false;
        }
        resize(width, height) {
            this.sizeX = width;
            this.sizeY = height;
            this.text = new Array(height);
            this.fore = new Array(height);
            this.back = new Array(height);
            let baseText = "";
            let baseFore = "";
            let baseBack = "";
            for (let x = 0; x < width; x++) {
                baseText += " ";
                baseFore += this.currentFore;
                baseBack += "f";
            }
            for (let y = 0; y < height; y++) {
                this.text[y] = baseText;
                this.fore[y] = baseFore;
                this.back[y] = baseBack;
            }
        }
    }

    const cellWidth = 6;
    const cellHeight = 9;
    const terminalMargin = 4;
    const fonts = {};
    const loadPalette = ({ image, paletteCache }, colour) => {
        const cached = paletteCache[colour];
        if (cached)
            return cached;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        context.globalCompositeOperation = "destination-atop";
        context.fillStyle = colour;
        context.globalAlpha = 1.0;
        context.fillRect(0, 0, image.width, image.height);
        context.drawImage(image, 0, 0);
        paletteCache[colour] = canvas;
        return canvas;
    };
    const loadFont = (path) => {
        const cached = fonts[path];
        if (cached)
            return cached;
        const image = new Image();
        image.src = path;
        const font = fonts[path] = {
            path,
            image,
            scale: 1,
            margin: 1,
            paletteCache: {},
        };
        font.promise = new Promise(resolve => {
            image.onload = () => {
                for (const key in defaultPalette) {
                    if (!Object.prototype.hasOwnProperty.call(defaultPalette, key))
                        continue;
                    loadPalette(font, defaultPalette[key]);
                }
                font.scale = font.margin = image.width / 256;
                font.promise = undefined;
                resolve(font);
            };
        });
        return font;
    };
    const background = (ctx, x, y, color, scale, width, height, palette) => {
        let actualWidth = cellWidth * scale;
        let actualHeight = cellHeight * scale;
        let cellX = x * actualWidth + terminalMargin;
        let cellY = y * actualHeight + terminalMargin;
        if (x === 0) {
            cellX -= terminalMargin;
            actualWidth += terminalMargin;
        }
        if (x === width - 1) {
            actualWidth += terminalMargin;
        }
        if (y === 0) {
            cellY -= terminalMargin;
            actualHeight += terminalMargin;
        }
        if (y === height - 1) {
            actualHeight += terminalMargin;
        }
        ctx.beginPath();
        ctx.rect(cellX, cellY, actualWidth, actualHeight);
        ctx.fillStyle = palette[color] || palette.f;
        ctx.fill();
    };
    const foreground = (ctx, x, y, color, chr, palette, scale, font) => {
        if (font.promise)
            return;
        const actualWidth = cellWidth * scale;
        const actualHeight = cellHeight * scale;
        const cellX = x * actualWidth + terminalMargin;
        const cellY = y * actualHeight + terminalMargin;
        const charcode = chr.charCodeAt(0);
        const imageW = cellWidth * font.scale;
        const imageH = cellHeight * font.scale;
        const imgX = font.margin + (charcode % 16) * (imageW + font.margin * 2);
        const imgY = font.margin + Math.floor(charcode / 16) * (imageH + font.margin * 2);
        ctx.drawImage(loadPalette(font, palette[color] || palette["0"]), imgX, imgY, imageW, imageH, cellX, cellY, cellWidth * scale, cellHeight * scale);
    };
    const terminal = (ctx, term, blink, scale, font) => {
        const sizeX = term.sizeX;
        const sizeY = term.sizeY;
        for (let y = 0; y < sizeY; y++) {
            for (let x = 0; x < sizeX; x++) {
                background(ctx, x, y, term.back[y].charAt(x), scale, term.sizeX, term.sizeY, term.palette);
                foreground(ctx, x, y, term.fore[y].charAt(x), term.text[y].charAt(x), term.palette, scale, font);
            }
        }
        if (blink && term.cursorBlink &&
            term.cursorX >= 0 && term.cursorX < sizeX &&
            term.cursorY >= 0 && term.cursorY < sizeY) {
            foreground(ctx, term.cursorX, term.cursorY, term.currentFore, "_", term.palette, scale, font);
        }
    };
    const bsod = (ctx, width, height, text, scale, font) => {
        ctx.beginPath();
        ctx.rect(0, 0, width * cellWidth * scale + terminalMargin * 2, height * cellHeight * scale + terminalMargin * 2);
        ctx.fillStyle = defaultPalette.b;
        ctx.fill();
        const startX = Math.floor((width - text.length) / 2);
        const startY = Math.floor((height - 1) / 2);
        for (let x = 0; x < text.length; x++) {
            foreground(ctx, startX + x, startY, "0", text.charAt(x), defaultPalette, scale, font);
        }
    };

    var __awaiter = (window && window.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    const log = logger("Terminal");
    const clamp = (value, min, max) => {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    const labelElement = (id, label) => {
        if (id === null && label === null)
            return "Unlabeled computer";
        if (id === null)
            return `${label}`;
        if (label === null)
            return `Computer #${id}`;
        return `${label} (Computer #${id})`;
    };
    class Terminal extends x {
        constructor(props, context) {
            super(props, context);
            this.canvasElem = b();
            this.inputElem = b();
            this.wrapperElem = b();
            this.changed = false;
            this.lastBlink = false;
            this.mounted = false;
            this.drawQueued = false;
            this.lastX = -1;
            this.lastY = -1;
            this.gif = null;
            this.lastGifFrame = null;
            this.onResized = () => {
                this.changed = true;
                this.queueDraw();
            };
            this.onPaste = (event) => {
                this.onEventDefault(event);
                this.paste(event.clipboardData);
            };
            this.onMouse = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                // If we"re a mouse move and nobody is pressing anything, let"s
                // skip for now.
                if (event.type === "mousemove" && event.buttons === 0)
                    return;
                const { x, y } = this.convertMousePos(event);
                switch (event.type) {
                    case "mousedown": {
                        const button = convertMouseButton(event.button);
                        if (button) {
                            this.props.computer.queueEvent("mouse_click", [button, x, y]);
                            this.lastX = x;
                            this.lastY = y;
                        }
                        break;
                    }
                    case "mouseup": {
                        const button = convertMouseButton(event.button);
                        if (button) {
                            this.props.computer.queueEvent("mouse_up", [button, x, y]);
                            this.lastX = x;
                            this.lastY = y;
                        }
                        break;
                    }
                    case "mousemove": {
                        const button = convertMouseButtons(event.buttons);
                        if (button && (x !== this.lastX || y !== this.lastY)) {
                            this.props.computer.queueEvent("mouse_drag", [button, x, y]);
                            this.lastX = x;
                            this.lastY = y;
                        }
                    }
                }
            };
            this.onMouseWheel = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                const { x, y } = this.convertMousePos(event);
                if (event.deltaY !== 0) {
                    this.props.computer.queueEvent("mouse_scroll", [Math.sign(event.deltaY), x, y]);
                }
            };
            this.onEventDefault = (event) => {
                var _a;
                event.preventDefault();
                (_a = this.inputElem.current) === null || _a === void 0 ? void 0 : _a.focus();
            };
            this.onKey = (event) => {
                if (!this.canvasElem)
                    return;
                // When receiving Ctrl+V (hopefully the keyboard shortcut to paste!), don't
                // queue an event, but don't cancel the default either.
                if (event.ctrlKey && event.code === "KeyV")
                    return;
                // Try to pull the key number from the event. We first try the key code
                // (ideal, as it's independent of layout), then the key itself, or the
                // uppercase key (tacky shortcut to handle 'a' and 'A').
                let code = convertKey(event.code);
                if (code === undefined)
                    code = convertKey(event.key);
                if (code === undefined)
                    code = convertKey(event.key.toUpperCase());
                if (code !== undefined || event.key.length === 1)
                    this.onEventDefault(event);
                if (event.type === "keydown") {
                    if (code !== undefined)
                        this.props.computer.keyDown(code, event.repeat);
                    if (!event.altKey && !event.ctrlKey && event.key.length === 1) {
                        this.props.computer.queueEvent("char", [event.key]);
                    }
                }
                else if (event.type === "keyup") {
                    if (code !== undefined)
                        this.props.computer.keyUp(code);
                }
            };
            this.onInput = (event) => {
                const target = event.target;
                this.onEventDefault(event);
                // Some browsers (*cough* Chrome *cough*) don't provide
                // KeyboardEvent.{code, key} for printable characters. Let's scrape it from
                // the input instead.
                const value = target.value;
                if (!value)
                    return;
                target.value = "";
                this.props.computer.queueEvent(value.length === 1 ? "char" : "paste", [value]);
            };
            this.onTerminate = (event) => {
                this.onEventDefault(event);
                this.props.computer.queueEvent("terminate", []);
            };
            this.onChanged = () => {
                this.changed = true;
                this.queueDraw();
            };
            this.onPowerOff = (event) => {
                this.onEventDefault(event);
                this.props.computer.shutdown();
            };
            this.onPowerOn = (event) => {
                this.onEventDefault(event);
                this.props.computer.turnOn();
            };
            this.onScreenshot = (event) => {
                var _a;
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                (_a = this.canvasElem.current) === null || _a === void 0 ? void 0 : _a.toBlob(blob => saveBlob("computer", "png", blob), "image/png", 1);
            };
            this.onRecord = (event) => {
                this.onEventDefault(event);
                if (!this.canvasElem)
                    return;
                switch (this.state.recording) {
                    // Skip the cases when we've got no data
                    case 2 /* RecordingState.Rendering */:
                        break;
                    // If we're not recording, start recording.
                    case 0 /* RecordingState.None */:
                        this.gif = new GIF({
                            width: this.canvasElem.current.width,
                            height: this.canvasElem.current.height,
                            quality: 10,
                        });
                        this.lastGifFrame = Date.now();
                        this.setState({ recording: 1 /* RecordingState.Recording */ });
                        break;
                    case 1 /* RecordingState.Recording */:
                        if (!this.gif) {
                            this.setState({ recording: 0 /* RecordingState.None */ });
                            return;
                        }
                        this.setState({ recording: 2 /* RecordingState.Rendering */ });
                        this.addGifFrame(true);
                        this.gif.onFinished = blob => {
                            this.setState({ recording: 0 /* RecordingState.None */ });
                            saveBlob("computer", "gif", blob);
                        };
                        this.gif.onProgress = progress => this.setState({ progress });
                        this.gif.onAbort = () => {
                            this.setState({ recording: 0 /* RecordingState.None */ });
                            console.error("Rendering GIF failed");
                        };
                        this.gif.render();
                        this.gif = null;
                        this.lastGifFrame = null;
                }
            };
            this.makeFullscreen = (event) => {
                var _a;
                this.onEventDefault(event);
                (_a = this.base) === null || _a === void 0 ? void 0 : _a.requestFullscreen().catch(e => {
                    console.error("Cannot make full-screen", e);
                });
            };
            this.onDrop = (e) => {
                this.onEventDefault(e);
                if (!e.dataTransfer)
                    return;
                const files = [];
                if (e.dataTransfer.items) {
                    const items = e.dataTransfer.items;
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < items.length; i++) {
                        const item = items[i];
                        if (item.kind === "file")
                            files.push(item.getAsFile());
                    }
                }
                else {
                    const items = e.dataTransfer.files;
                    // eslint-disable-next-line @typescript-eslint/prefer-for-of
                    for (let i = 0; i < items.length; i++)
                        files.push(items[i]);
                }
                if (files.length == 0)
                    return;
                Promise.all(files.map((x) => __awaiter(this, void 0, void 0, function* () { return ({ name: x.name, contents: yield x.arrayBuffer() }); })))
                    .then(x => this.props.computer.transferFiles(x))
                    .catch(e => console.error("Error handling drop", e));
            };
            this.setState({
                recording: 0 /* RecordingState.None */,
                progress: 0,
            });
            this.vdom = [
                _("canvas", { class: terminalCanvas, ref: this.canvasElem, onMouseDown: this.onMouse, onMouseUp: this.onMouse, onMouseMove: this.onMouse, onWheel: this.onMouseWheel, onContextMenu: this.onEventDefault, onDragOver: this.onEventDefault, onDrop: this.onDrop }),
                _("input", { type: "text", class: terminalInput, ref: this.inputElem, onPaste: this.onPaste, onKeyDown: this.onKey, onKeyUp: this.onKey, onInput: this.onInput }),
            ];
        }
        componentDidMount() {
            // Fetch the "key" elements
            this.canvasContext = this.canvasElem.current.getContext("2d");
            // Subscribe to some events to allow us to schedule a redraw
            window.addEventListener("resize", this.onResized);
            this.props.changed.attach(this.onChanged);
            // Set some key properties
            this.changed = true;
            this.lastBlink = false;
            this.mounted = true;
            // Focus on the input element
            if (this.props.focused)
                this.inputElem.current.focus();
            // And let's draw!
            this.queueDraw();
        }
        componentWillUnmount() {
            this.canvasContext = undefined;
            this.props.changed.detach(this.onChanged);
            window.removeEventListener("resize", this.onResized);
            this.lastBlink = false;
            this.mounted = false;
            this.drawQueued = false;
        }
        render({ id, label, on }, { recording, progress }) {
            const recordingDisabled = recording === 2 /* RecordingState.Rendering */;
            return _("div", { class: terminalView },
                _("div", { ref: this.wrapperElem },
                    ...this.vdom,
                    _("div", { class: terminalBar },
                        _("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: on ? "Turn this computer off" : "Turn this computer on", onClick: on ? this.onPowerOff : this.onPowerOn }, on ? _(On, null) : _(Off, null)),
                        _("span", { class: terminalInfo }, labelElement(id, label)),
                        _("span", { class: terminalButtonsRight },
                            _("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: "Take a screenshot of the terminal.", onClick: this.onScreenshot },
                                _(Camera, null)),
                            _("button", { class: `${actionButton} ${terminalButton} ${recordingDisabled ? "disabled" : ""}`, type: "button", title: "Record the terminal to a GIF.", onClick: this.onRecord }, recording === 1 /* RecordingState.Recording */ ? _(VideocamRecording, null) : _(Videocam, null)),
                            _("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: "Make the terminal full-screen", onClick: this.makeFullscreen },
                                _(Fullscreen, null)),
                            _("button", { class: `${actionButton} ${terminalButton}`, type: "button", title: "Send a `terminate' event to the computer.", onClick: this.onTerminate },
                                _(NoEntry, null)))),
                    _("div", { class: terminalProgress, style: `width: ${recording === 2 /* RecordingState.Rendering */ ? progress * 100 : 0}%` })));
        }
        componentDidUpdate() {
            var _a;
            this.changed = true;
            this.queueDraw();
            if (this.props.focused)
                (_a = this.inputElem.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
        queueDraw() {
            if (this.mounted && !this.drawQueued) {
                this.drawQueued = true;
                window.requestAnimationFrame(time => {
                    this.drawQueued = false;
                    if (!this.mounted)
                        return;
                    // We push the previous frame before drawing the next one.
                    this.addGifFrame();
                    this.draw(time);
                    // Schedule another redraw to handle the cursor blink
                    if (this.props.terminal.cursorBlink)
                        this.queueDraw();
                });
            }
        }
        draw(time) {
            if (!this.canvasElem || !this.canvasContext || !this.wrapperElem)
                return;
            const { terminal: terminal$1, font: fontPath } = this.props;
            const sizeX = terminal$1.sizeX || 51;
            const sizeY = terminal$1.sizeY || 19;
            const font = loadFont(fontPath);
            if (font.promise) {
                void font.promise.then(() => this.queueDraw());
                return;
            }
            const blink = Math.floor(time / 400) % 2 === 0;
            const changed = this.changed;
            if (!changed && (!terminal$1.cursorBlink || this.lastBlink === blink ||
                terminal$1.cursorX < 0 || terminal$1.cursorX >= sizeX ||
                terminal$1.cursorY < 0 || terminal$1.cursorY >= sizeY)) {
                return;
            }
            this.lastBlink = blink;
            this.changed = false;
            const canvasElem = this.canvasElem.current;
            const wrapperElem = this.wrapperElem.current;
            // Calculate terminal scaling to fit the screen
            const actualWidth = wrapperElem.parentElement.clientWidth - terminalMargin * 2;
            /* [Note 'Padding']: 70px = 30px top-padding + action-bar + arbitrary bottom-padding. See styles.module.css too. */
            const actualHeight = wrapperElem.parentElement.clientHeight - terminalMargin * 2 - 40;
            const width = sizeX * cellWidth;
            const height = sizeY * cellHeight;
            // The scale has to be an integer (though converted within the renderer) to ensure pixels are integers.
            // Otherwise you get texture issues.
            const scale = Math.max(1, Math.min(Math.floor(actualHeight / height), Math.floor(actualWidth / width)));
            const ctx = this.canvasContext;
            // If we"re just redrawing the cursor. We"ve aborted earlier if the cursor is not visible/
            // out of range and hasn"t changed.
            if (!changed) {
                if (blink) {
                    foreground(ctx, terminal$1.cursorX, terminal$1.cursorY, terminal$1.currentFore, "_", terminal$1.palette, scale, font);
                }
                else {
                    const x = terminal$1.cursorX;
                    const y = terminal$1.cursorY;
                    background(ctx, x, y, terminal$1.back[y].charAt(x), scale, sizeX, sizeY, terminal$1.palette);
                    foreground(ctx, x, y, terminal$1.fore[y].charAt(x), terminal$1.text[y].charAt(x), terminal$1.palette, scale, font);
                }
                return;
            }
            // Actually update the canvas dimensions.
            const canvasWidth = width * scale + terminalMargin * 2;
            const canvasHeight = height * scale + terminalMargin * 2;
            if (canvasElem.height !== canvasHeight || canvasElem.width !== canvasWidth) {
                canvasElem.height = canvasHeight;
                canvasElem.width = canvasWidth;
                canvasElem.style.height = `${canvasHeight}px`;
                wrapperElem.style.width = canvasElem.style.width = `${canvasWidth}px`;
            }
            // Prevent blur when up/down-scaling
            ctx.imageSmoothingEnabled = false;
            // And render!
            if (terminal$1.sizeX === 0 && terminal$1.sizeY === 0) {
                bsod(ctx, sizeX, sizeY, "No terminal output", scale, font);
            }
            else {
                terminal(ctx, terminal$1, blink, scale, font);
            }
        }
        paste(clipboard) {
            if (!clipboard)
                return;
            let content = clipboard.getData("text");
            if (!content)
                return;
            // Limit to allowed characters (actually slightly more generous but
            // there you go).
            content = content.replace(/[^\x20-\xFF]/gi, "");
            // Strip to the first newline
            content = content.replace(/[\r\n].*/, "");
            // Limit to 512 characters
            content = content.substring(0, 512);
            // Abort if we"re empty
            if (!content)
                return;
            this.props.computer.queueEvent("paste", [content]);
        }
        addGifFrame(force) {
            if (!this.gif || !this.canvasContext)
                return;
            if (!this.lastGifFrame) {
                console.error("Pushing a frame, but no previous frame!!");
                return;
            }
            // We limit ourselves to 20fps, just so we're not producing an insane number
            // of frames.
            const now = Date.now();
            if (!force && now - this.lastGifFrame < 50)
                return;
            log(`Adding frame for ${now - this.lastGifFrame} seconds`);
            this.gif.addFrame(this.canvasContext, { delay: now - this.lastGifFrame });
            this.lastGifFrame = now;
        }
        convertMousePos(event) {
            const canvasElem = this.canvasElem.current;
            if (!canvasElem)
                throw "impossible";
            const box = canvasElem.getBoundingClientRect();
            const x = clamp(Math.floor((event.clientX - box.left - terminalMargin)
                / (canvasElem.width - 2 * terminalMargin) * this.props.terminal.sizeX) + 1, 1, this.props.terminal.sizeX);
            const y = clamp(Math.floor((event.clientY - box.top - terminalMargin)
                / (canvasElem.height - 2 * terminalMargin) * this.props.terminal.sizeY) + 1, 1, this.props.terminal.sizeY);
            return { x, y };
        }
    }

    (function (global, undefined$1) {

        if (global.setImmediate) {
            return;
        }

        var nextHandle = 1; // Spec says greater than zero
        var tasksByHandle = {};
        var currentlyRunningATask = false;
        var doc = global.document;
        var registerImmediate;

        function setImmediate(callback) {
          // Callback can either be a function or a string
          if (typeof callback !== "function") {
            callback = new Function("" + callback);
          }
          // Copy function arguments
          var args = new Array(arguments.length - 1);
          for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i + 1];
          }
          // Store and register the task
          var task = { callback: callback, args: args };
          tasksByHandle[nextHandle] = task;
          registerImmediate(nextHandle);
          return nextHandle++;
        }

        function clearImmediate(handle) {
            delete tasksByHandle[handle];
        }

        function run(task) {
            var callback = task.callback;
            var args = task.args;
            switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined$1, args);
                break;
            }
        }

        function runIfPresent(handle) {
            // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
            // So if we're currently running a task, we'll need to delay this invocation.
            if (currentlyRunningATask) {
                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                // "too much recursion" error.
                setTimeout(runIfPresent, 0, handle);
            } else {
                var task = tasksByHandle[handle];
                if (task) {
                    currentlyRunningATask = true;
                    try {
                        run(task);
                    } finally {
                        clearImmediate(handle);
                        currentlyRunningATask = false;
                    }
                }
            }
        }

        function installNextTickImplementation() {
            registerImmediate = function(handle) {
                process.nextTick(function () { runIfPresent(handle); });
            };
        }

        function canUsePostMessage() {
            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
            // where `global.postMessage` means something completely different and can't be used for this purpose.
            if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;
                global.onmessage = function() {
                    postMessageIsAsynchronous = false;
                };
                global.postMessage("", "*");
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
            }
        }

        function installPostMessageImplementation() {
            // Installs an event handler on `global` for the `message` event: see
            // * https://developer.mozilla.org/en/DOM/window.postMessage
            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

            var messagePrefix = "setImmediate$" + Math.random() + "$";
            var onGlobalMessage = function(event) {
                if (event.source === global &&
                    typeof event.data === "string" &&
                    event.data.indexOf(messagePrefix) === 0) {
                    runIfPresent(+event.data.slice(messagePrefix.length));
                }
            };

            if (global.addEventListener) {
                global.addEventListener("message", onGlobalMessage, false);
            } else {
                global.attachEvent("onmessage", onGlobalMessage);
            }

            registerImmediate = function(handle) {
                global.postMessage(messagePrefix + handle, "*");
            };
        }

        function installMessageChannelImplementation() {
            var channel = new MessageChannel();
            channel.port1.onmessage = function(event) {
                var handle = event.data;
                runIfPresent(handle);
            };

            registerImmediate = function(handle) {
                channel.port2.postMessage(handle);
            };
        }

        function installReadyStateChangeImplementation() {
            var html = doc.documentElement;
            registerImmediate = function(handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement("script");
                script.onreadystatechange = function () {
                    runIfPresent(handle);
                    script.onreadystatechange = null;
                    html.removeChild(script);
                    script = null;
                };
                html.appendChild(script);
            };
        }

        function installSetTimeoutImplementation() {
            registerImmediate = function(handle) {
                setTimeout(runIfPresent, 0, handle);
            };
        }

        // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
        var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
        attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

        // Don't get fooled by e.g. browserify environments.
        if ({}.toString.call(global.process) === "[object process]") {
            // For Node.js before 0.9
            installNextTickImplementation();

        } else if (canUsePostMessage()) {
            // For non-IE10 modern browsers
            installPostMessageImplementation();

        } else if (global.MessageChannel) {
            // For web workers, where supported
            installMessageChannelImplementation();

        } else if (doc && "onreadystatechange" in doc.createElement("script")) {
            // For IE 6–8
            installReadyStateChangeImplementation();

        } else {
            // For older browsers
            installSetTimeoutImplementation();
        }

        attachTo.setImmediate = setImmediate;
        attachTo.clearImmediate = clearImmediate;
    }(typeof self === "undefined" ? typeof global === "undefined" ? window : global : self));

    /*
     *  Copyright 2024 Alexey Andreev.
     *
     *  Licensed under the Apache License, Version 2.0 (the "License");
     *  you may not use this file except in compliance with the License.
     *  You may obtain a copy of the License at
     *
     *       http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     *  distributed under the License is distributed on an "AS IS" BASIS,
     *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *  See the License for the specific language governing permissions and
     *  limitations under the License.
     */


    let globalsCache = new Map();
    let exceptionFrameRegex = /.+:wasm-function\[[0-9]+]:0x([0-9a-f]+).*/;
    let getGlobalName = function(name) {
        let result = globalsCache.get(name);
        if (typeof result === "undefined") {
            result = new Function("return " + name + ";");
            globalsCache.set(name, result);
        }
        return result();
    };
    let setGlobalName = function(name, value) {
        new Function("value", name + " = value;")(value);
    };

    function defaults(imports, userExports, options, module) {
        let context = {
            exports: null,
            userExports: userExports,
            stackDeobfuscator: null
        };
        if (!hasStringBuiltins()) {
            stringImports(imports);
        }
        dateImports(imports);
        consoleImports(imports);
        coreImports(imports, context, options, module);
        asyncImports(imports);
        jsoImports(imports, context);
        imports.teavmMath = Math;
        return {
            supplyExports(exports$1) {
                context.exports = exports$1;
            },
            supplyStackDeobfuscator(deobfuscator) {
                context.stackDeobfuscator = deobfuscator;
            }
        }
    }

    let javaExceptionSymbol = Symbol("javaException");
    class JavaError extends Error {
        #context

        constructor(context, javaException) {
            super();
            this.#context = context;
            this[javaExceptionSymbol] = javaException;
            context.exports["teavm.setJsException"](javaException, this);
        }
        get message() {
            let exceptionMessage = this.#context.exports["teavm.exceptionMessage"];
            let stringToJs = this.#context.exports["teavm.stringToJs"];
            if (typeof exceptionMessage === "function" && typeof stringToJs === "function") {
                let message = exceptionMessage(this[javaExceptionSymbol]);
                if (message != null) {
                    return stringToJs(message);
                }
            }
            return "(could not fetch message)";
        }
    }

    function stringImports(imports) {
        imports["wasm:js-string"] = {
            fromCharCode: code => String.fromCharCode(code),
            fromCharCodeArray: () => { throw new Error("Not supported"); },
            intoCharCodeArray: () => { throw new Error("Not supported"); },
            concat: (first, second) => first + second,
            charCodeAt: (string, index) => string.charCodeAt(index),
            length: s => s.length,
            substring: (s, start, end) => s.substring(start, end)
        };
    }

    function dateImports(imports) {
        imports.teavmDate = {
            currentTimeMillis: () => new Date().getTime(),
            dateToString: timestamp => new Date(timestamp).toString(),
            getYear: timestamp => new Date(timestamp).getFullYear(),
            setYear(timestamp, year) {
                let date = new Date(timestamp);
                date.setFullYear(year);
                return date.getTime();
            },
            getMonth: timestamp =>new Date(timestamp).getMonth(),
            setMonth(timestamp, month) {
                let date = new Date(timestamp);
                date.setMonth(month);
                return date.getTime();
            },
            getDate: timestamp =>new Date(timestamp).getDate(),
            setDate(timestamp, value) {
                let date = new Date(timestamp);
                date.setDate(value);
                return date.getTime();
            },
            create: (year, month, date, hrs, min, sec) => new Date(year, month, date, hrs, min, sec).getTime(),
            createFromUTC: (year, month, date, hrs, min, sec) => Date.UTC(year, month, date, hrs, min, sec)
        };
    }

    function consoleImports(imports) {
        let stderr = "";
        let stdout = "";
        imports.teavmConsole = {
            putcharStderr(c) {
                if (c === 10) {
                    console.error(stderr);
                    stderr = "";
                } else {
                    stderr += String.fromCharCode(c);
                }
            },
            putcharStdout(c) {
                if (c === 10) {
                    console.log(stdout);
                    stdout = "";
                } else {
                    stdout += String.fromCharCode(c);
                }
            },
        };
    }

    function coreImports(imports, context, options, module) {
        let memoryOptions = options.memory || {};
        let finalizationRegistry = new FinalizationRegistry(heldValue => {
            let report = context.exports["teavm.reportGarbageCollectedValue"];
            if (typeof report !== "undefined") {
                report(heldValue.queue, heldValue.ref);
            }
        });
        let stringFinalizationRegistry = new FinalizationRegistry(heldValue => {
            let report = context.exports["teavm.reportGarbageCollectedString"];
            if (typeof report === "function") {
                report(heldValue);
            }
        });
        imports.teavm = {
            createWeakRef(value, ref, queue) {
                if (queue !== null) {
                    finalizationRegistry.register(value, { ref: ref, queue: queue });
                }
                return new WeakRef(value);
            },
            deref: weakRef => {
                let result = weakRef.deref();
                return result !== void 0 ? result : null;
            },
            createStringWeakRef(value, heldValue) {
                stringFinalizationRegistry.register(value, heldValue);
                return new WeakRef(value);
            },
            stringDeref: weakRef => weakRef.deref(),
            takeStackTrace() {
                let stack = new Error().stack;
                let addresses = [];
                for (let line of stack.split("\n")) {
                    let match = exceptionFrameRegex.exec(line);
                    if (match !== null && match.length >= 2) {
                        let address = parseInt(match[1], 16);
                        addresses.push(address);
                    }
                }
                return {
                    getStack() {
                        let result;
                        if (context.stackDeobfuscator) {
                            try {
                                result = context.stackDeobfuscator(addresses);
                            } catch (e) {
                                console.warn("Could not deobfuscate stack", e);
                            }
                        }
                        if (!result) {
                            result = addresses.map(address => {
                                return {
                                    className: "java.lang.Throwable$FakeClass",
                                    method: "fakeMethod",
                                    file: "Throwable.java",
                                    line: address
                                };
                            });
                        }
                        return result;
                    }
                };
            },
            decorateException(javaException) {
                new JavaError(context, javaException);
            },
            linearMemory() {
                return context.exports["teavm.memory"].buffer;
            },
            notifyHeapResized: memoryOptions.onResize || function() {}
        };
        if (module) {
            let memDefaults = getMemoryDefaults(module);
            let imported = memDefaults !== null ? memDefaults.imported : hasImportedMemory(module);
            if (imported) {
                let memoryInstance = memoryOptions["external"];
                if (!memoryInstance) {
                    if (memDefaults === null) {
                        memDefaults = {};
                    }
                    let minSize = memoryOptions.minSize || memDefaults.min || 0;
                    let maxSize = memoryOptions.maxSize || memDefaults.max;
                    memoryInstance = new WebAssembly.Memory({
                        shared: memoryOptions.shared === true,
                        initial: minSize,
                        maximum: maxSize
                    });
                }
                imports.teavm.memory = memoryInstance;
            }
        }
    }

    function asyncImports(imports) {
        imports.teavmAsync = {
            offer(instance, fn, time) {
                let dt = Math.max(0, time - Date.now());
                return setTimeout(() => {
                    fn(instance);
                }, dt);
            },
            kill(id) {
                clearTimeout(id);
            }
        };
    }

    function hasImportedMemory(module) {
        return WebAssembly.Module.imports(module)
            .findIndex(({module, name, kind}) => module === "teavm" && name === "memory" && kind === "memory") >= 0;
    }

    function getMemoryDefaults(module) {
        let sections = WebAssembly.Module.customSections(module, "teavm.memoryRequirements");
        if (sections.length !== 1) {
            return null;
        }
        return JSON.parse(new TextDecoder().decode(sections[0]));
    }

    function jsoImports(imports, context) {
        let javaObjectSymbol = Symbol("javaObject");
        let functionsSymbol = Symbol("functions");
        let functionOriginSymbol = Symbol("functionOrigin");
        let wrapperCallMarkerSymbol = Symbol("wrapperCallMarker");

        let jsWrappers = new WeakMap();
        let javaWrappers = new WeakMap();
        let primitiveWrappers = new Map();
        let primitiveFinalization = new FinalizationRegistry(token => primitiveWrappers.delete(token));
        let hashCodes = new WeakMap();
        let lastHashCode = 2463534242;
        let nextHashCode = () => {
            let x = lastHashCode;
            x ^= x << 13;
            x ^= x >>> 17;
            x ^= x << 5;
            lastHashCode = x;
            return x;
        };

        function identity(value) {
            return value;
        }
        function sanitizeName(str) {
            let result = "";
            let firstChar = str.charAt(0);
            result += isIdentifierStart(firstChar) ? firstChar : '_';
            for (let i = 1; i < str.length; ++i) {
                let c = str.charAt(i);
                result += isIdentifierPart(c) ? c : '_';
            }
            return result;
        }
        function isIdentifierStart(s) {
            return s >= 'A' && s <= 'Z' || s >= 'a' && s <= 'z' || s === '_' || s === '$';
        }
        function isIdentifierPart(s) {
            return isIdentifierStart(s) || s >= '0' && s <= '9';
        }
        function setProperty(obj, prop, value) {
            if (obj === null) {
                setGlobalName(prop, value);
            } else {
                obj[prop] = value;
            }
        }
        function javaExceptionToJs(e) {
            if (e instanceof WebAssembly.Exception) {
                let tag = context.exports["teavm.javaException"];
                let getJsException = context.exports["teavm.getJsException"];
                if (e.is(tag)) {
                    let javaException = e.getArg(tag, 0);
                    let extracted = extractException(javaException);
                    if (extracted !== null) {
                        return extracted;
                    }
                    let wrapper = getJsException(javaException);
                    if (typeof wrapper === "undefined") {
                        wrapper = new JavaError(context, javaException);
                    }
                    return wrapper;
                }
            }
            return e;
        }
        function jsExceptionAsJava(e) {
            if (javaExceptionSymbol in e) {
                return e[javaExceptionSymbol];
            } else {
                return context.exports["teavm.js.wrapException"](e);
            }
        }
        function rethrowJsAsJava(e) {
            context.exports["teavm.js.throwException"](jsExceptionAsJava(e));
        }
        function extractException(e) {
            return context.exports["teavm.js.extractException"](e);
        }
        function rethrowJavaAsJs(e) {
            throw javaExceptionToJs(e);
        }
        function getProperty(obj, prop) {
            try {
                return obj !== null ? obj[prop] : getGlobalName(prop)
            } catch (e) {
                rethrowJsAsJava(e);
            }
        }
        function defineFunction(fn, vararg) {
            let params = [];
            let paramsForString = [];
            for (let i = 0; i < fn.length; ++i) {
                let name = "p" + i;
                params.push(name);
                paramsForString.push(name);
            }
            if (vararg) {
                let last = paramsForString.length - 1;
                paramsForString[last] = "..." + paramsForString[last];
            }
            let paramsAsString = paramsForString.join(", ");
            return new Function("rethrowJavaAsJs", "fn",
                `return function(${paramsAsString}) {\n` +
                `    try {\n` +
                `        return fn(${params.join(', ')});\n` +
                `    } catch (e) {\n` +
                `        rethrowJavaAsJs(e);\n` +
                `    }\n` +
                `};`
            )(rethrowJavaAsJs, fn);
        }
        function renameConstructor(name, c) {
            return new Function(
                "constructor",
                `return function ${name}(marker, javaObject) {\n` +
                `    return constructor.call(this, marker, javaObject);\n` +
                `}\n`
            )(c);
        }
        imports.teavmJso = {
            stringBuiltinsSupported: () => hasStringBuiltins(),
            isUndefined: o => typeof o === "undefined",
            emptyArray: () => [],
            appendToArray: (array, e) => array.push(e),
            unwrapBoolean: value => value ? 1 : 0,
            wrapBoolean: value => !!value,
            getProperty: getProperty,
            setProperty: setProperty,
            setPropertyPure: setProperty,
            global(name) {
                try {
                    return getGlobalName(name);
                } catch (e) {
                    rethrowJsAsJava(e);
                }
            },
            createClass(name, parent, constructor) {
                name = sanitizeName(name || "JavaObject");
                let action;
                let fn = renameConstructor(name, function (marker, javaObject) {
                    if (marker === wrapperCallMarkerSymbol) {
                        action.call(this, javaObject);
                    } else if (constructor === null) {
                        throw new Error("This class can't be instantiated directly");
                    } else {
                        try {
                            return constructor.apply(null, arguments);
                        } catch (e) {
                            rethrowJavaAsJs(e);
                        }
                    }
                });
                if (parent === null) {
                    action = function (javaObject) {
                        this[javaObjectSymbol] = javaObject;
                        this[functionsSymbol] = null;
                    };
                } else {
                    action = function (javaObject) {
                        parent.call(this, javaObject);
                    };
                }
                fn.prototype = Object.create(parent ? parent.prototype : Object.prototype);
                fn.prototype.constructor = fn;
                let boundFn = renameConstructor(name, function(javaObject) {
                    return fn.call(this, wrapperCallMarkerSymbol, javaObject);
                });
                boundFn[wrapperCallMarkerSymbol] = fn;
                boundFn.prototype = fn.prototype;
                return boundFn;
            },
            exportClass(cls) {
                return cls[wrapperCallMarkerSymbol];
            },
            defineMethod(cls, name, fn, vararg) {
                let params = [];
                let paramsForString = [];
                for (let i = 1; i < fn.length; ++i) {
                    let name = "p" + i;
                    params.push(name);
                    paramsForString.push(name);
                }
                if (vararg) {
                    let last = paramsForString.length - 1;
                    paramsForString[last] = "..." + paramsForString[last];
                }
                let paramsAsString = paramsForString.join(", ");
                cls.prototype[name] = new Function("rethrowJavaAsJs", "fn",
                    `return function(${paramsAsString}) {\n` +
                    `    try {\n` +
                    `        return fn(${['this', params].join(", ")});\n` +
                    `    } catch (e) {\n` +
                    `        rethrowJavaAsJs(e);\n` +
                    `    }\n` +
                    `};`
                )(rethrowJavaAsJs, fn);
            },
            defineStaticMethod(cls, name, fn, vararg) {
                cls[name] = defineFunction(fn, vararg);
            },
            defineFunction: defineFunction,
            defineProperty(cls, name, getFn, setFn) {
                let descriptor = {
                    get() {
                        try {
                            return getFn(this);
                        } catch (e) {
                            rethrowJavaAsJs(e);
                        }
                    }
                };
                if (setFn !== null) {
                    descriptor.set = function(value) {
                        try {
                            setFn(this, value);
                        } catch (e) {
                            rethrowJavaAsJs(e);
                        }
                    };
                }
                Object.defineProperty(cls.prototype, name, descriptor);
            },
            defineStaticProperty(cls, name, getFn, setFn) {
                let descriptor = {
                    get() {
                        try {
                            return getFn();
                        } catch (e) {
                            rethrowJavaAsJs(e);
                        }
                    }
                };
                if (setFn !== null) {
                    descriptor.set = function(value) {
                        try {
                            setFn(value);
                        } catch (e) {
                            rethrowJavaAsJs(e);
                        }
                    };
                }
                Object.defineProperty(cls, name, descriptor);
            },
            javaObjectToJS(instance, cls) {
                if (instance === null) {
                    return null;
                }
                let existing = jsWrappers.get(instance);
                if (typeof existing != "undefined") {
                    let result = existing.deref();
                    if (typeof result !== "undefined") {
                        return result;
                    }
                }
                let obj = new cls(instance);
                jsWrappers.set(instance, new WeakRef(obj));
                return obj;
            },
            unwrapJavaObject(instance) {
                return instance[javaObjectSymbol];
            },
            asFunction(instance, propertyName) {
                if (instance === null || instance === undefined) {
                    return null;
                }
                let functions = instance[functionsSymbol];
                if (functions === null) {
                    functions = Object.create(null);
                    instance[functionsSymbol] = functions;
                }
                let result = functions[propertyName];
                if (typeof result !== 'function') {
                    result = function() {
                        return instance[propertyName].apply(instance, arguments);
                    };
                    result[functionOriginSymbol] = instance;
                    functions[propertyName] = result;
                }
                return result;
            },
            functionAsObject(fn, property) {
                if (fn === null || fn === void 0) {
                    return null;
                }
                let origin = fn[functionOriginSymbol];
                if (typeof origin !== 'undefined') {
                    let functions = origin[functionsSymbol];
                    if (functions !== void 0 && functions[property] === fn) {
                        return origin;
                    }
                }
                return {
                    [property]: function(...args) {
                        try {
                            return fn(...args);
                        } catch (e) {
                            rethrowJavaAsJs(e);
                        }
                    }
                };
            },
            wrapObject(obj) {
                if (obj === null) {
                    return null;
                }
                if (typeof obj === "object" || typeof obj === "function" || "string" === "symbol") {
                    let result = obj[javaObjectSymbol];
                    if (typeof result === "object") {
                        return result;
                    }
                    result = javaWrappers.get(obj);
                    if (result !== void 0) {
                        result = result.deref();
                        if (result !== void 0) {
                            return result;
                        }
                    }
                    result = context.exports["teavm.jso.createWrapper"](obj);
                    javaWrappers.set(obj, new WeakRef(result));
                    return result;
                } else {
                    let result = primitiveWrappers.get(obj);
                    if (result !== void 0) {
                        result = result.deref();
                        if (result !== void 0) {
                            return result;
                        }
                    }
                    result = context.exports["teavm.jso.createWrapper"](obj);
                    primitiveWrappers.set(obj, new WeakRef(result));
                    primitiveFinalization.register(result, obj);
                    return result;
                }
            },
            isPrimitive: (value, type) => typeof value === type || value === null,
            instanceOf: (value, type) => value instanceof type,
            instanceOfOrNull: (value, type) => value === null || value instanceof type,
            sameRef: (a, b) => a === b,
            hashCode: (obj) => {
                if (typeof obj === "object" || typeof obj === "function" || typeof obj === "symbol") {
                    let code = hashCodes.get(obj);
                    if (typeof code === "number") {
                        return code;
                    }
                    code = nextHashCode();
                    hashCodes.set(obj, code);
                    return code;
                } else if (typeof obj === "number") {
                    return obj | 0;
                } else if (typeof obj === "bigint") {
                    return BigInt.asIntN(obj, 32);
                } else if (typeof obj === "boolean") {
                    return obj ? 1 : 0;
                } else {
                    return 0;
                }
            },
            apply: (instance, method, args) => {
                try {
                    if (instance === null) {
                        let fn = getGlobalName(method);
                        return fn(...args);
                    } else {
                        return instance[method](...args);
                    }
                } catch (e) {
                    rethrowJsAsJava(e);
                }
            },
            concatArray: (a, b) => [...a, ...b],
            getJavaException: e => e[javaExceptionSymbol],
            getJSException: e => {
                let getJsException = context.exports["teavm.getJsException"];
                return getJsException(e);
            },
            jsExports: () => context.userExports
        };
        for (let name of ["wrapByte", "wrapShort", "wrapChar", "wrapInt", "wrapLong", "wrapFloat", "wrapDouble",
            "unwrapByte", "unwrapShort", "unwrapChar", "unwrapInt", "unwrapLong", "unwrapFloat", "unwrapDouble"]) {
            imports.teavmJso[name] = identity;
        }
        function wrapCallFromJavaToJs(call) {
            try {
                return call();
            } catch (e) {
                rethrowJsAsJava(e);
            }
        }
        let argumentList = [];
        for (let i = 0; i < 32; ++i) {
            let args = argumentList.length === 0 ? "" : argumentList.join(", ");
            let argsAndBody = [...argumentList, "body"].join(", ");
            imports.teavmJso["createFunction" + i] = new Function("wrapCallFromJavaToJs", ...argumentList, "body",
                `return new Function('wrapCallFromJavaToJs', ${argsAndBody}).bind(this, wrapCallFromJavaToJs);`
            ).bind(null, wrapCallFromJavaToJs);
            imports.teavmJso["bindFunction" + i] = (f, ...args) => f.bind(null, ...args);
            imports.teavmJso["callFunction" + i] = new Function("rethrowJsAsJava", "fn", ...argumentList,
                `try {\n` +
                `    return fn(${args});\n` +
                `} catch (e) {\n` +
                `    rethrowJsAsJava(e);\n` +
                `}`
            ).bind(null, rethrowJsAsJava);
            imports.teavmJso["callMethod" + i] = new Function("rethrowJsAsJava", "getGlobalName", "instance",
                "method", ...argumentList,
                `try {\n`+
                `    return instance !== null\n` +
                `        ? instance[method](${args})\n` +
                `        : getGlobalName(method)(${args});\n` +
                `} catch (e) {\n` +
                `    rethrowJsAsJava(e);\n` +
                `}`
            ).bind(null, rethrowJsAsJava, getGlobalName);
            imports.teavmJso["construct" + i] = new Function("rethrowJsAsJava", "constructor", ...argumentList,
                `try {\n` +
                `    return new constructor(${args});\n` +
                `} catch (e) {\n` +
                `    rethrowJsAsJava(e);\n` +
                `}`
            ).bind(null, rethrowJsAsJava);
            imports.teavmJso["arrayOf" + i] = new Function(...argumentList, "return [" + args + "]");

            let param = "p" + (i + 1);
            argumentList.push(param);
        }
    }

    async function wrapImports(wasmModule, imports) {
        let promises = [];
        let propertiesToAdd = {};
        for (let { module, name } of extractImports(wasmModule)) {
            if (module in imports) {
                continue;
            }
            let names = propertiesToAdd[module];
            if (names === void 0) {
                let namesByModule = [];
                names = namesByModule;
                propertiesToAdd[module] = names;
                promises.push((async () => {
                    let moduleInstance = await new Promise((resolve, reject) => require([module], m => resolve(/*#__PURE__*/_interopNamespaceDefault(m)), reject));
                    let importsByModule = {};
                    for (let name of namesByModule) {
                        let importedName = name === "__self__" ? moduleInstance : moduleInstance[name];
                        importsByModule[name] = new WebAssembly.Global(
                            { value: "externref", mutable: false },
                            importedName
                        );
                    }
                    imports[module] = importsByModule;
                })());
            }
            names.push(name);
        }
        if (promises.length === 0) {
            return;
        }
        await Promise.all(promises);
    }

    function extractImports(module) {
        let sections = WebAssembly.Module.customSections(module, "teavm.imports");
        if (sections.length !== 1) {
            return WebAssembly.Module.imports(module).filter(importDecl => importDecl.kind === "global");
        }
        return JSON.parse(new TextDecoder().decode(sections[0]));
    }

    async function load(src, options) {
        if (!options) {
            options = {};
        }

        let isNodeJs = options.nodejs || typeof process !== "undefined";
        let deobfuscatorOptions = options.stackDeobfuscator || {};
        let debugInfoLocation = deobfuscatorOptions.infoLocation || "auto";
        let compilationPromise = compileModule(src, isNodeJs);
        let [deobfuscatorFactory, module, debugInfo] = await Promise.all([
            deobfuscatorOptions.enabled ? getDeobfuscator(src, deobfuscatorOptions, isNodeJs) : Promise.resolve(null),
            compilationPromise,
            fetchExternalDebugInfo(src, debugInfoLocation, deobfuscatorOptions, isNodeJs)
        ]);

        const importObj = {};
        let userExports = {};
        const defaultsResult = defaults(importObj, userExports, options, module);
        if (typeof options.installImports !== "undefined") {
            options.installImports(importObj);
        }
        if (!options.noAutoImports) {
            await wrapImports(module, importObj);
        }
        let instance = await WebAssembly.instantiate(module, importObj);

        defaultsResult.supplyExports(instance.exports);
        if (deobfuscatorFactory) {
            let moduleToPass = debugInfoLocation === "auto" || debugInfoLocation === "embedded" ? module : null;
            let deobfuscator = createDeobfuscator(moduleToPass, debugInfo, deobfuscatorFactory);
            if (deobfuscator !== null) {
                defaultsResult.supplyStackDeobfuscator(deobfuscator);
            }
        }
        let teavm = {
            exports: userExports,
            instance: instance,
            module: instance.module
        };
        for (let key in instance.exports) {
            let exportObj = instance.exports[key];
            if (exportObj instanceof WebAssembly.Global) {
                Object.defineProperty(userExports, key, {
                    get: () => exportObj.value
                });
            }
        }
        return teavm;
    }

    async function compileModule(src, isNodeJs) {
        let [response, close] = await openPath(src, isNodeJs);
        let result = await WebAssembly.compileStreaming(response, { builtins: ["js-string"] });
        close();
        return result;
    }

    function hasStringBuiltins() {
        if (stringBuiltinsCache === null) {
            /*
              (module
               (type  (func))
               (import "wasm:js-string" "cast" (func (type 0)))
              )
             */
            let bytes = new Int8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 23, 1, 14, 119, 97,
                115, 109, 58, 106, 115, 45, 115, 116, 114, 105, 110, 103, 4, 99, 97, 115, 116, 0, 0, 3, 1, 0,
                5, 4, 1, 1, 0, 0, 10, -127, -128, -128, 0, 0]);
            stringBuiltinsCache = !WebAssembly.validate(bytes, {builtins: ["js-string"]});
        }
        return stringBuiltinsCache;
    }

    async function getDeobfuscator(path, options, isNodeJs) {
        try {
            const importObj = {};
            const defaultsResult = defaults(importObj, {}, {});
            const instance = await instantiateModule(options.path, path, isNodeJs, importObj);
            defaultsResult.supplyExports(instance.exports);
            return instance;
        } catch (e) {
            console.warn("Could not load deobfuscator", e);
            return null;
        }
    }

    async function instantiateModule(optionsPath, path, isNodeJs, importObj) {
        if (typeof optionsPath === "object") {
            return await WebAssembly.instantiate(optionsPath, importObj, { builtins: ["js-string"] });
        }
        const deobfuscatorPath = optionsPath || path + "-deobfuscator.wasm";
        let [response, close] = await openPath(deobfuscatorPath, isNodeJs);
        const { instance } = await WebAssembly.instantiateStreaming(
            response,
            importObj,
            {
                builtins: ["js-string"]
            }
        );
        close();
        return instance;
    }

    async function openPath(src, isNodeJs) {
        let response;
        let close;
        if (!isNodeJs) {
            response = await fetch(src);
            close = () => {};
        } else {
            let fs = await importNodeFs();
            let fileHandle = await fs.open(src, "r");
            let stream = await fileHandle.readableWebStream();
            response = new Response(stream, {
                headers: { 'Content-Type': 'application/wasm' },
            });
            close = () => fileHandle.close();
        }
        return [response, close];
    }

    let nodeFsImportObject;
    async function importNodeFs() {
        if (!nodeFsImportObject) {
            nodeFsImportObject = new Promise((resolve, reject) => require(['node:fs/promises'], m => resolve(/*#__PURE__*/_interopNamespaceDefault(m)), reject));
        }
        return await nodeFsImportObject;
    }

    let stringBuiltinsCache = null;

    function createDeobfuscator(module, externalData, deobfuscatorFactory) {
        let deobfuscator = null;
        let deobfuscatorInitialized = false;
        function ensureDeobfuscator() {
            if (!deobfuscatorInitialized) {
                deobfuscatorInitialized = true;
                if (externalData !== null) {
                    try {
                        deobfuscator = deobfuscatorFactory.exports.createFromExternalFile.value(externalData);
                    } catch (e) {
                        console.warn("Could not load create deobfuscator", e);
                    }
                }
                if (deobfuscator == null && module !== null) {
                    try {
                        deobfuscator = deobfuscatorFactory.exports.createForModule.value(module);
                    } catch (e) {
                        console.warn("Could not create deobfuscator from module data", e);
                    }
                }
            }
        }
        return addresses => {
            ensureDeobfuscator();
            return deobfuscator !== null ? deobfuscator.deobfuscate(addresses) : [];
        }
    }

    async function fetchExternalDebugInfo(path, debugInfoLocation, options, isNodeJs) {
        if (!options.enabled) {
            return null;
        }
        if (debugInfoLocation !== "auto" && debugInfoLocation !== "external") {
            return null;
        }
        if (typeof options.externalInfoPath === "object") {
            return options.externalInfoPath;
        }
        let location = options.externalInfoPath || path + ".teadbg";
        let buffer;
        if (!isNodeJs) {
            let response = await fetch(location);
            if (!response.ok) {
                return null;
            }
            buffer = await response.arrayBuffer();
        } else {
            let fs = await importNodeFs();
            buffer = (await fs.readFile(location)).buffer;
        }

        return new Int8Array(buffer);
    }

    const exceptions=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11])),gc=()=>(async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,95,1,120,0])))();

    const wasmClasses = "classes-18fbee6899abd62e.wasm";

    const loadClasses = () => __awaiter$1(void 0, void 0, void 0, function* () {
        if (typeof WebAssembly === "object" && typeof WebAssembly.compileStreaming === "function" &&
            (yield exceptions()) && (yield gc())) {
            try {
                console.log("Loading WASM runtime");
                return (yield load(wasmClasses)).exports;
            }
            catch (e) {
                console.error("Failed to load WebAssembly runtime", e);
            }
        }
        console.log("Using JS runtime");
        return yield new Promise((resolve, reject) => require(['./classes-DkE0XXMB'], resolve, reject));
    });
    let loaded = false;
    let doAddComputer = null;
    const start = (computer, config) => __awaiter$1(void 0, void 0, void 0, function* () {
        if (loaded) {
            if (!doAddComputer)
                throw new Error("Failed to load computer (see previous errors for a possible reason");
            return doAddComputer(computer);
        }
        const [classes, { version, resources }] = yield Promise.all([loadClasses(), new Promise((resolve, reject) => require(['./resources-COY_ANUZ'], resolve, reject))]);
        if (loaded) {
            if (!doAddComputer)
                throw new Error("Failed to load computer (see previous errors for a possible reason");
            return doAddComputer(computer);
        }
        loaded = true;
        const encoder = new TextEncoder();
        window.$javaCallbacks = {
            config,
            setup: add => doAddComputer = add,
            modVersion: version,
            listResources: () => Object.keys(resources),
            getResource: path => new Int8Array(encoder.encode(resources[path]))
        };
        classes.main([]);
        if (!doAddComputer)
            throw new Error("Callbacks.setup was never called");
        return doAddComputer(computer);
    });

    const colours = "0123456789abcdef";
    const splitName = (file) => {
        const lastIndex = file.lastIndexOf("/");
        if (lastIndex < 0)
            return ["", file];
        return [file.substring(0, lastIndex), file.substring(lastIndex + 1)];
    };
    const joinName = (parent, child) => parent === "" ? child : `${parent}/${child}`;
    const empty$1 = new Int8Array(0);
    const decoder = new TextDecoder("UTF-8", { fatal: false });
    const encoder = new TextEncoder();
    class FileSystemEntry {
        constructor(persistance, path, children, contents, attributes) {
            this.exists = true;
            this.persistance = persistance;
            this.path = path;
            this.children = children;
            this.contents = contents;
            this.attributes = attributes !== null && attributes !== void 0 ? attributes : { modification: 0, creation: 0 };
        }
        static create(persistance, path, directory) {
            const now = Date.now();
            const instance = new FileSystemEntry(persistance, path, directory ? [] : null, directory ? null : empty$1, { creation: now, modification: now });
            instance.save();
            return instance;
        }
        isDirectory() {
            return this.children != null;
        }
        getChildren() {
            if (this.children === null)
                throw Error("Not a directory");
            return this.children;
        }
        setChildren(children) {
            if (this.children === null)
                throw Error("Not a directory");
            this.children = children;
            if (this.semaphore)
                this.semaphore.signal();
            this.save();
        }
        getContents() {
            if (this.contents !== null)
                return this.contents;
            if (this.children !== null)
                throw Error("Not a file");
            return this.contents = this.persistance.getContents(this.path);
        }
        getStringContents() {
            return decoder.decode(this.getContents());
        }
        setContents(contents) {
            if (this.children !== null)
                throw Error("Not a file");
            if (!this.exists)
                return { error: "File has been deleted", value: null };
            this.attributes.modification = Date.now();
            if (typeof contents === "string") {
                const encoded = encoder.encode(contents);
                this.contents = new Int8Array(encoded);
            }
            else {
                this.contents = contents instanceof Int8Array ? contents : new Int8Array(contents);
            }
            this.save();
            if (this.semaphore)
                this.semaphore.signal();
            return { value: true };
        }
        delete() {
            this.exists = false;
            if (this.children === null) {
                this.persistance.removeContents(this.path);
            }
            else {
                this.persistance.removeChildren(this.path);
            }
            this.persistance.removeAttributes(this.path);
            if (this.semaphore)
                this.semaphore.signal();
        }
        save() {
            if (this.children !== null)
                this.persistance.setChildren(this.path, this.children);
            if (this.contents !== null)
                this.persistance.setContents(this.path, this.contents);
            this.persistance.setAttributes(this.path, this.attributes);
        }
        getSemaphore() {
            var _a;
            return (_a = this.semaphore) !== null && _a !== void 0 ? _a : (this.semaphore = new Semaphore());
        }
        doesExist() {
            return this.exists;
        }
        getAttributes() {
            const directory = this.isDirectory();
            return Object.assign({ directory, size: directory ? 0 : this.getContents().length }, this.attributes);
        }
    }
    class ComputerAccess {
        constructor(persistance, terminal, semaphore, stateChange) {
            this.filesystem = new Map();
            this.callbacks = [];
            this.removed = false;
            this.persistance = persistance;
            this.terminal = terminal;
            this.semaphore = semaphore;
            this.stateChanged = stateChange;
            this.label = persistance.getLabel();
            const queue = [""];
            while (true) {
                const path = queue.pop();
                if (path === undefined)
                    break;
                const children = persistance.getChildren(path);
                const attributes = persistance.getAttributes(path);
                if (children !== null) {
                    this.filesystem.set(path, new FileSystemEntry(persistance, path, children, null, attributes));
                    for (const child of children)
                        queue.push(joinName(path, child));
                }
                else if (path === "") {
                    // Create a new entry
                    this.filesystem.set("", new FileSystemEntry(persistance, "", [], null, attributes));
                }
                else {
                    // Assume it's a file
                    this.filesystem.set(path, new FileSystemEntry(persistance, path, null, null, attributes));
                }
            }
        }
        getLabel() {
            return this.label;
        }
        setState(label, on) {
            if (this.label !== label) {
                this.label = label;
                this.persistance.setLabel(label);
            }
            this.stateChanged(label, on);
        }
        updateTerminal(width, height, x, y, blink, cursorColour) {
            this.terminal.resize(width, height);
            this.terminal.cursorX = x;
            this.terminal.cursorY = y;
            this.terminal.cursorBlink = blink;
            this.terminal.currentFore = colours.charAt(cursorColour);
        }
        setTerminalLine(line, text, fore, back) {
            this.terminal.text[line] = text;
            this.terminal.fore[line] = fore;
            this.terminal.back[line] = back;
        }
        setPaletteColour(colour, r, g, b) {
            this.terminal.palette[colours.charAt(colour)] =
                `rgb(${(r * 0xFF) & 0xFF},${(g * 0xFF) & 0xFF},${(b * 0xFF) & 0xFF})`;
        }
        flushTerminal() {
            this.semaphore.signal();
        }
        getEntry(path) {
            var _a;
            return (_a = this.filesystem.get(path)) !== null && _a !== void 0 ? _a : null;
        }
        createDirectory(path) {
            const entry = this.filesystem.get(path);
            if (!entry) {
                const [parentName, fileName] = splitName(path);
                const parent = this.createDirectory(parentName);
                if (parent.value === null)
                    return parent;
                const file = FileSystemEntry.create(this.persistance, path, true);
                parent.value.setChildren([...parent.value.getChildren(), fileName]);
                this.filesystem.set(path, file);
                return { value: file };
            }
            else if (entry.isDirectory()) {
                return { value: entry };
            }
            else {
                return { error: `/${path}: File exists`, value: null };
            }
        }
        createFile(path) {
            const entry = this.filesystem.get(path);
            if (!entry) {
                const [parentName, fileName] = splitName(path);
                const parent = this.filesystem.get(parentName);
                if (parent == null || !parent.isDirectory())
                    return { error: `/${path}: Access denied`, value: null };
                const file = FileSystemEntry.create(this.persistance, path, false);
                parent.setChildren([...parent.getChildren(), fileName]);
                this.filesystem.set(path, file);
                return { value: file };
            }
            else if (entry.isDirectory()) {
                return { error: `/${path}: Cannot write to directory`, value: null };
            }
            else {
                return { value: entry };
            }
        }
        deleteEntry(path) {
            const pathEntry = this.filesystem.get(path);
            if (!pathEntry)
                return pathEntry;
            // Remove from the parent
            const [parentName, fileName] = splitName(path);
            const parent = this.filesystem.get(parentName);
            parent.setChildren(parent.getChildren().filter(x => x !== fileName));
            // And delete any children
            const queue = [path];
            while (true) {
                const file = queue.pop();
                if (file === undefined)
                    break;
                const entry = this.filesystem.get(file);
                if (!entry)
                    continue;
                this.filesystem.delete(file);
                entry.delete();
                if (!entry.isDirectory())
                    continue;
                for (const child of entry.getChildren())
                    queue.push(joinName(file, child));
            }
        }
        start(config, options) {
            start(this, config)
                .then(computer => {
                this.computer = computer;
                if (this.removed)
                    computer.dispose();
                const { width, height, label } = options !== null && options !== void 0 ? options : {};
                if (typeof width === "number" && typeof height === "number")
                    computer.resize(width, height);
                if (typeof this.label === "string")
                    computer.setLabel(this.label);
                else if (typeof label === "string")
                    computer.setLabel(label);
                for (const callback of this.callbacks)
                    callback(computer);
            })
                .catch(e => console.error("Cannot start computer", e));
        }
        queueEvent(event, args) {
            var _a;
            (_a = this.computer) === null || _a === void 0 ? void 0 : _a.event(event, args);
        }
        keyDown(key, repeat) {
            const code = lwjgl3Code(key);
            if (code !== undefined)
                this.queueEvent("key", [code, repeat]);
        }
        keyUp(key) {
            const code = lwjgl3Code(key);
            if (code !== undefined)
                this.queueEvent("key_up", [code]);
        }
        turnOn() {
            var _a;
            (_a = this.computer) === null || _a === void 0 ? void 0 : _a.turnOn();
        }
        shutdown() {
            var _a;
            (_a = this.computer) === null || _a === void 0 ? void 0 : _a.shutdown();
        }
        reboot() {
            var _a;
            (_a = this.computer) === null || _a === void 0 ? void 0 : _a.reboot();
        }
        dispose() {
            var _a;
            this.removed = true;
            (_a = this.computer) === null || _a === void 0 ? void 0 : _a.dispose();
        }
        transferFiles(files) {
            var _a;
            (_a = this.computer) === null || _a === void 0 ? void 0 : _a.transferFiles(files);
        }
        setPeripheral(side, kind) {
            if (this.computer) {
                this.computer.setPeripheral(side, kind);
            }
            else {
                this.callbacks.push(handler => handler.setPeripheral(side, kind));
            }
        }
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    // Use a lookup table to find the index.
    const lookup = new Uint8Array(256);
    for (let i = 0; i < chars.length; i++)
        lookup[chars.charCodeAt(i)] = i;
    const encode = (buffer) => {
        const bytes = new Uint8Array(buffer);
        const len = bytes.length;
        let base64 = "";
        for (let i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
        }
        if ((len % 3) === 2) {
            base64 = base64.substring(0, base64.length - 1) + "=";
        }
        else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + "==";
        }
        return base64;
    };
    const decode = (base64) => {
        let bufferLength = base64.length * 0.75;
        const len = base64.length;
        if (base64.endsWith("=")) {
            bufferLength--;
            if (base64[base64.length - 2] === "=") {
                bufferLength--;
            }
        }
        const arraybuffer = new ArrayBuffer(bufferLength);
        const bytes = new Uint8Array(arraybuffer);
        let p = 0;
        for (let i = 0; i < len; i += 4) {
            const encoded1 = lookup[base64.charCodeAt(i)];
            const encoded2 = lookup[base64.charCodeAt(i + 1)];
            const encoded3 = lookup[base64.charCodeAt(i + 2)];
            const encoded4 = lookup[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return arraybuffer;
    };

    let enabled = true;
    const get = (key) => {
        if (!enabled)
            return null;
        try {
            return localStorage.getItem(key);
        }
        catch (e) {
            console.error("Error reading from storage, disabling all further access.", e);
            enabled = false;
            return null;
        }
    };
    const set = (key, value) => {
        if (!enabled)
            return;
        try {
            localStorage.setItem(key, value);
        }
        catch (e) {
            console.error("Error writing to localStorage, disabling all further access.", e);
            enabled = false;
        }
    };
    const remove = (key) => {
        if (!enabled)
            return;
        try {
            localStorage.removeItem(key);
        }
        catch (e) {
            console.error("Error writing to storage, disabling all further access.", e);
            enabled = false;
        }
    };

    const empty = new Int8Array(0);
    /**
     * A persistance instance which saves nothing, useful for temporary file systems.
     */
    class VoidPersistence {
        getLabel() { return null; }
        setLabel() { }
        getContents() { return empty; }
        setContents() { }
        removeContents() { }
        getChildren() { return null; }
        setChildren() { }
        removeChildren() { }
        getAttributes() { return null; }
        setAttributes() { }
        removeAttributes() { }
    }
    /**
     * Persistance instance which saves to storage.
     */
    class StoragePersistence {
        constructor(id) {
            this.prefix = `computer[${id}]`;
        }
        getLabel() {
            return get(`${this.prefix}.label`);
        }
        setLabel(label) {
            if (label === null) {
                remove(`${this.prefix}.label`);
            }
            else {
                set(`${this.prefix}.label`, label);
            }
        }
        getContents(path) {
            const contents = get(`${this.prefix}.files[${path}].b64`);
            return contents ? new Int8Array(decode(contents)) : empty;
        }
        setContents(path, contents) {
            set(`${this.prefix}.files[${path}].b64`, encode(contents));
        }
        removeContents(path) {
            remove(`${this.prefix}.files[${path}].b64`);
        }
        getChildren(path) {
            const children = get(`${this.prefix}.files[${path}].children`);
            if (children === null)
                return null;
            try {
                return JSON.parse(children);
            }
            catch (e) {
                console.error(`Error loading path "${path}"`);
                return null;
            }
        }
        setChildren(path, children) {
            set(`${this.prefix}.files[${path}].children`, JSON.stringify(children));
        }
        removeChildren(path) {
            remove(`${this.prefix}.files[${path}].children`);
        }
        getAttributes(path) {
            const attributes = get(`${this.prefix}.files[${path}].attributes`);
            if (attributes === null)
                return null;
            try {
                return JSON.parse(attributes);
            }
            catch (e) {
                console.error(`Error loading attributes for "${path}"`);
                return null;
            }
        }
        setAttributes(path, attr) {
            set(`${this.prefix}.files[${path}].attributes`, JSON.stringify(attr));
        }
        removeAttributes(path) {
            remove(`${this.prefix}.files[${path}].attributes`);
        }
    }

    exports.ComputerAccess = ComputerAccess;
    exports.G = G;
    exports.Semaphore = Semaphore;
    exports.StoragePersistence = StoragePersistence;
    exports.Terminal = Terminal;
    exports.TerminalData = TerminalData;
    exports.VoidPersistence = VoidPersistence;
    exports._ = _;
    exports.__awaiter = __awaiter$1;
    exports.actionButton = actionButton;
    exports.get = get;
    exports.iconFont = iconFont;
    exports.joinName = joinName;
    exports.saveBlob = saveBlob;
    exports.set = set;
    exports.splitName = splitName;
    exports.styleInject = styleInject;
    exports.termFont = termFont;
    exports.termFontHd = termFontHd;
    exports.u = u;
    exports.x = x;

}));
