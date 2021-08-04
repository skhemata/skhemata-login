import { html, SkhemataBase, property } from '@skhemata/skhemata-base';
import {
  SkhemataForm,
  SkhemataFormTextbox,
  SkhemataFormButton,
} from '@skhemata/skhemata-form';
import { FontAwesomeIcon } from '@riovir/wc-fontawesome';
import {
  faFacebook,
  faApple,
  faGoogle,
  faLinkedin,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import { SkhemataLoginOktaStyle } from './style/SkhemataLoginOktaStyle';
import { translationEngDefault } from './translation/SkhemataLoginOkta/eng';

const icons: any = {
  google: faGoogle,
  facebook: faFacebook,
  linkedin: faLinkedin,
  apple: faApple,
  microsoft: faMicrosoft,
};

export class SkhemataLoginOkta extends SkhemataBase {
  @property({ type: String }) error = '';

  @property({ type: Object })
  translationData = {
    eng: translationEngDefault,
  };

  private _loggedIn = false;

  static get scopedElements() {
    return {
      'sk-form': SkhemataForm,
      'sk-form-textbox': SkhemataFormTextbox,
      'sk-form-button': SkhemataFormButton,
      'fa-icon': FontAwesomeIcon,
    };
  }

  static get styles() {
    return [super.styles, SkhemataLoginOktaStyle];
  }

  async firstUpdated() {
    await super.firstUpdated();
    const params = new URLSearchParams(window.location.hash.substr(1));
    const idToken = params.get('id_token');
    if (idToken) {
      window.location.hash = '';
      this.skhemata?.authenticateOkta(idToken).then(() => {
        this.requestUpdate();
      });
    }
  }

  handleOkta = (idp: string) => {
    const nonce = Math.floor(Math.random() * 2 ** 32).toString();
    const url = new URL(
      `${this.configData.oktaDomain}/oauth2/default/v1/authorize`
    );
    url.searchParams.set('client_id', this.configData.oktaClientId);
    url.searchParams.set('idp', idp);
    url.searchParams.set('redirect_uri', window.location.href);
    url.searchParams.set('response_type', 'id_token');
    url.searchParams.set('scope', 'openid profile email');
    url.searchParams.set('nonce', nonce);
    url.searchParams.set('state', nonce);
    window.location.href = url.toString();
  };

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
          <div>
            ${Object.entries(this.configData?.providers).map(
              ([key, value]: [string, any]) => html`
                <button
                  class="button ${key}"
                  @click=${() => this.handleOkta(value.idpId)}
                >
                  <fa-icon class="icon" .icon=${icons[key]} size="2x"></fa-icon>
                  <span>${this.getStr(`SkhemataLoginOkta.${key}`)}</span>
                </button>
              `
            )}
          </div>
        `;
  }
}
