# SSL

## Install SSL certificate on your hosting/VPS

You need to install an SSL certificate on your hosting/VPS first. You can purchase an SSL certificate or use free SSL,
for example Let's Encrypt.

## Redirect http to https

First you need to change `APP_URL=http://domain.com` to `APP_URL=https://domain.com` in your `.env` file.

**Option 1:** Add `CORE_ENABLE_HTTPS_SUPPORT=true` to `.env`.

**Option 2:** Add these lines to `.env`

```dotenv
CORE_FORCE_SCHEMA=https
CORE_FORCE_ROOT_URL=https://domain.com
CORE_ENABLE_HTTPS_SUPPORT=false
```

**Option 3:** If you are using Shared Hosting, you can **Force HTTPS Redirection** for your domains. Check
this <a target="_blank" href="https://blog.cpanel.com/force-https-redirection/#:~:text=In%20the%20Domains%20interface%20in,HTTPS)%20with%20a%20toggle%20switch">
article.</a>

If it doesn't work, you have to config it in `.htaccess` or Nginx config.