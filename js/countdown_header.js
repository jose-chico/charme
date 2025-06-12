"use strict";(()=>{var e=class extends HTMLElement{constructor(){super()}connectedCallback(){let t=String.raw,s=this.attachShadow({mode:"open"});document.querySelector(".sticky-cta")&&(document.querySelector(".v2-countdown-header").style.bottom="61px"),s.innerHTML=t`
    <style>
      section {
        color: #f5f5f5;
        font-size: 16px;
      }
      #timer-wrapper {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        gap: 20px;
      }
      .prefix {
        font-weight: 400;
      }
      @media (min-width: 768px) {
        #timer-wrapper {
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
        }
        .prefix {
          font-weight: 700;
        }
      }
    </style>
    <section>
      ${this.getAttribute("data-body")}
      
      <div id="timer-wrapper">
        <span class="prefix">${this.getAttribute("data-prefix")}</span>
        <span class="days">0</span>D
        <span class="hours">0</span>H
        <span class="mins">0</span>M
        <span class="secs">0</span>S
      </div>
    </section>
    `;let o=new Date(this.getAttribute("data-ends-at"));window.countdown.initialiseCountdown("timer-wrapper",o,(n,u)=>{let{ms:r,days:i,hours:a,minutes:c,seconds:d}=n;r>0?(this.shadowRoot.querySelector("#timer-wrapper .secs").innerHTML=d,this.shadowRoot.querySelector("#timer-wrapper .mins").innerHTML=c,this.shadowRoot.querySelector("#timer-wrapper .hours").innerHTML=a,this.shadowRoot.querySelector("#timer-wrapper .days").innerHTML=i):this.shadowRoot.querySelector("section").remove()})}};customElements.get("countdown-header")||customElements.define("countdown-header",e)})();