import { html, css, LitElement, property } from 'lit-element';
import { get, registerTranslateConfig, use } from 'lit-translate';
import { SkhemataCore } from '../skhemata-core_temp/index';

export class SkhemataLogin extends SkhemataCore {

  constructor() {
    super();
    this.addEventListener('response', function(event) {
      var customEvent = event as CustomEvent;
      console.log(customEvent.detail);
    });
  }

  @property({type: String})
  errorMessage = "";

  @property({type: Boolean})
  signingIn = false;

  clearMessage = () => {
    this.errorMessage = "";
  }

  render() {
    return html`
    <form class="control is-family-primary is-fullwidth login-form" @submit="${this.submitForm}">
        <div class = "field">
          <p class = "control">
            <label class = "label">${get('email_label')}</label>
            <input id = "email_input" class = "input is-fullwidth" type="email" name="email"></input>
          </p>
        </div>
        <div class = "field">
          <p class = "control">
            <label class = "label">${get('password_label')}</label>
            <input class = "input is-fullwidth" type="password" name="password"></input>
          </p>
        </div>
        <div class = "tile">
          <p class = "control">
            <button class = "input button is-success is-fullwidth" type="submit">${this.signingIn ? get('button_loading_label') : get('button_label')}</button>
          </p>
        </div>
    </form>
    ${
      this.errorMessage.length > 0 
        ? html`
            <div class="is-family-primary notification is-danger mt-4">
              <a class="delete" @click=${this.clearMessage}></a>
              ${this.errorMessage}
            </div>` 
        : ''
    }
    `;
  }
}
