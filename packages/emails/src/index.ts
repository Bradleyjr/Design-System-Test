import { Resend } from 'resend';
import { loadEnv } from '@design-system/utils';
import { WelcomeEmail } from './templates/welcome';

type SendEmailOptions = {
  to: string;
  template: 'welcome';
  props: {
    userName: string;
    organizationName: string;
  };
};

const env = loadEnv({ ...process.env, SKIP_ENV_VALIDATION: process.env.SKIP_ENV_VALIDATION ?? 'true' });
const resend = new Resend(env.RESEND_API_KEY ?? '');

export async function sendEmail(options: SendEmailOptions) {
  switch (options.template) {
    case 'welcome':
      await resend.emails.send({
        from: 'Design System <hello@design-system.dev>',
        to: options.to,
        subject: `Welcome to ${options.props.organizationName}!`,
        react: WelcomeEmail(options.props)
      });
      break;
    default:
      throw new Error('Unknown template');
  }
}
