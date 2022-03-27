module.exports = ({ env }) => ({
  email: {
    provider: env('EMAIL_PROVIDER', 'nodemailer'),
    providerOptions: {
      host: env('EMAIL_SMTP_HOST', 'smtp.gmail.com'),
      port: env('EMAIL_SMTP_PORT', 465),
      secure: true,
      auth: {
        user: env('EMAIL_SMTP_USER'), // seu email
        pass: env('EMAIL_SMTP_PASS'), // sua senha
      },
    },
    settings: {
      defaultFrom: env('EMAIL_ADDRESS_FROM', ' contato@muzicrave.com.br'), // seu email
      defaultReplyTo: env('EMAIL_ADDRESS_REPLY', 'contato@muzicrave.com.br'), // seu email
    },
  },
})