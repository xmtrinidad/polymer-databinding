import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../price-option/price-option.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

export class PriceOptionContainer extends PolymerElement {
  static get template() {
    return html`
      <style>
        .container {
          background: #fff;
          margin: 30px auto;
          padding: 30px 50px;
          display: grid;
          grid-gap: 20px;
        }
      
        @media (min-width: 768px) {
          .container {
            grid-template-columns: 1fr 1fr;
          }
        }
      
        @media (min-width: 1200px) {
          .container {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        }
      </style>
      <div class="container">
        <template is="dom-repeat" items="[[plans]]" as="plan">
          <price-option-element plan=[[plan]]></price-option-element>
        </template>
      </div>
      
    `;
  }
  static get properties() {
    return {
      plans: {
        type: Array,
        value() {
          return [
            { planType: 'basic', planPrice: '19' },
            { planType: 'starter', planPrice: '29' },
            { planType: 'small', planPrice: '49' },
            { planType: 'premium', planPrice: '69' },
          ]
        }
      }
    }
  }
}

customElements.define('price-option-container', PriceOptionContainer);