import { html, SkhemataBase, property } from '@skhemata/skhemata-base';
import {
  SkhemataForm,
  SkhemataFormTextbox,
  SkhemataFormButton,
} from '@skhemata/skhemata-form';
import { translationEngDefault } from './translation/SkhemataLogin/eng';

export class SkhemataLogin extends SkhemataBase {
  @property({ type: String }) error = '';

  @property({ type: Object })
  translationData = {
    eng: translationEngDefault,
  };

  private _loggedIn = false;

  async firstUpdated() {
    await super.firstUpdated();
    this._loggedIn = true;
  }

  static get scopedElements() {
    return {
      'sk-form': SkhemataForm,
      'sk-form-textbox': SkhemataFormTextbox,
      'sk-form-button': SkhemataFormButton,
    };
  }

  async handleSubmit(e: CustomEvent) {
    this.skhemata
      ?.authenticate(e.detail.data)
      .then(() => {
        this._loggedIn = true;
      })
      .catch(() => {
        this.error = 'Error logging in';
      });

    this.requestUpdate();
  }

  async handleChange() {
    if (this.error) {
      this.error = '';
    }
  }

  render() {
    return this.skhemata?.api.authToken
      ? html``
      : html`
          <sk-form @submit=${this.handleSubmit} @change=${this.handleChange}>
            <sk-form-textbox
              name="email"
              label="${this.getStr('SkhemataLogin.email')}"
              type="email"
              required
            ></sk-form-textbox>
            <sk-form-textbox
              name="password"
              label="${this.getStr('SkhemataLogin.password')}"
              type="password"
              required
            ></sk-form-textbox>
            <sk-form-button
              title="${this.getStr('SkhemataLogin.login')}"
              type="submit"
            ></sk-form-button>
          </sk-form>
          <p class="help is-danger">${this.error}</p>
        `;
  }
}
