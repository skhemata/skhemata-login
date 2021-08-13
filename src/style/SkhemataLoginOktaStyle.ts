import { css } from '@skhemata/skhemata-base';

export const SkhemataLoginOktaStyle = css`
  .facebook {
    background-color: #3b5998;
    color: #fff;
  }
  .facebook:hover {
    color: #fff;
  }
  .microsoft {
    background-color: #00a1f1;
    color: #fff;
  }
  .microsoft:hover {
    color: #fff;
  }
  .linkedin {
    background-color: #0077b5;
    color: #fff;
  }
  .linkedin:hover {
    color: #fff;
  }

  button.button:hover {
    opacity: 0.8;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  button {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .button .column:first-child {
    text-align: center;
  }

  .button .column:last-child {
    text-align: left;
  }

  .button .column {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
