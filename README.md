# \<login-component>

Skhemata Site Login Web Component. This web component provides website user login functionality. It provides optional Okta integration.

## Installation
```bash
npm i @skhemata/skhemata-login
```

## Usage
```html
<script type="module">
  import '@skhemata/skhemata-login/skhemata-login.js';
</script>

<skhemata-login></skhemata-login>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## License

Skhemata Login is distributed under [Commercial Skhemata Licence Agreement v1](https://www.skhemata.com/license/csla-1.0) (CSLA-1.0). For license terms, see LICENSE file
