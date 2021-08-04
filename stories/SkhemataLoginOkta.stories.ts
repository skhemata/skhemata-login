import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-login.js';

export default {
  title: 'General/SkhemataLoginOkta',
  component: 'skhemata-login',
  argTypes: {
    api: {
      name: 'api',
      control: 'object',
      table: {
        category: 'HTML Attributes',
        type: {
          summary: 'object',
          detail: `
{ 
  url: string
}
`,
        },
      },
      description: 'API Object',
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  api?: any;
}

const Template: Story<ArgTypes> = ({
  api = { url: 'https://coral.thrinacia.com/api/service/restv1' },
}: ArgTypes) => html`
  <skhemata-login-okta .api=${api}> </skhemata-login-okta>
`;

export const Example = Template.bind({});
Example.args = {
  api: {
    url: 'https://coral.thrinacia.com/api/service/restv1',
  },
};
