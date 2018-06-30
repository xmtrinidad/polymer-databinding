import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export class PriceOption extends PolymerElement {
  static get properties() {
    return {
      plan: Object
    }
  }
  static get template() {
    return html`
      <style>
        .card {
          text-align: center;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
      
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      
        li {
          margin: 20px;
        }
      
        button,
        button:hover,
        button:active {
          margin-top: 40px;
          background-color: #fff;
          border-color: #2ede7c !important;
          color: #000;
          font-weight: bold;
        }
      
        .Plan {
          cursor: pointer;
        }
      
        .Plan__type {
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 10px;
        }
      
        .Plan__price {
          font-weight: bold;
          color: #10e27a !important;
          font-size: 2rem;
        }
      
        .Plan__duration {
          font-size: .85rem;
          color: #10e27a !important;
          font-weight: bold;
        }
      
        .Plan--active {
          background-color: #2ede7c !important;
        }
      </style>
      
      <div class="card Plan">
        <div class="card-body">
          <h5 class="card-title Plan__type">[[plan.planType]]</h5>
          <h6 class="card-subtitle mb-2 text-muted Plan__price">$[[plan.planPrice]]</h6>
          <h6 class="card-subtitle mb-2 text-muted Plan__duration">/Monthly</h6>
          <ul>
            <li>Up to 4 persons</li>
            <li>10gb Cloud Storage</li>
            <li>Unlimited File Upload</li>
            <li>Unlimited Access</li>
            <li>Free Support</li>
          </ul>
          <button class="btn btn-primary btn-block Plan--active">Get Started</button>
        </div>
      </div>
    `;
  }
}

customElements.define('price-option-element', PriceOption);