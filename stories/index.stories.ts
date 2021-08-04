import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-login.js';

export default {
  title: 'General/SkhemataLogin',
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
}: ArgTypes) => html` <skhemata-login .api=${api}> </skhemata-login> `;

export const Example = Template.bind({});
Example.args = {
  api: {
    url: 'https://coral.thrinacia.com/api/service/restv1',
  },
};
