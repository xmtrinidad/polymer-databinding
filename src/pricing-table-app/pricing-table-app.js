import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import './price-option-container/price-option-container.js';

/**
 * @customElement
 * @polymer
 */
class PricingTableApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: #2ede7c;
        }
      </style>
      <main>
        <price-option-container></price-option-container>
      </main>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'pricing-table-app'
      }
    };
  }
}

window.customElements.define('pricing-table-app', PricingTableApp);
