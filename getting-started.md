# Getting Started

## Configuring Envato credentials

To configure Envato credentials, please follow the instructions below:

- Go to the Envato Developers website at [build.envato.com](https://build.envato.com) and log in with your Envato
  account.
- Once you're logged in, click to **My app** from the header menu.
- On the **My apps** page, click on the **Register a new app** button.
- Fill the app name, check all the **Required permissions** and check the **Terms of conditions**.
- In the **Confirmation URL** field, enter the **Confirmation URL** from **Settings** -> **Envato Integration** page
  your Envato Sale Tools site.
  ![](images/envato-credentials-1.png)
- After you have filled in all the required fields, click on the **Register App** button.
- Once the app is registered, you will need to copy the **Client ID** and **Client Secret**
  from [build.envato.com](https://build.envato.com/my-apps/)
  site and paste them into the **Envato Integration** page on your Envato Sale Tools site.

![](images/envato-credentials-2.png)

![](images/envato-credentials-3.png)

## Connect to Envato Account

## Import Statements

### Import from Envato API

### Import from CSV file

## Cronjob

Cron jobs are scheduled tasks that the system runs at predefined times or intervals. It helps to synchronize your Envato
sales with your site automatically.

### On Shared Hosting

If you are using shared hosting, you can read more about how to set up a cronjob
at [cPanel](https://docs.cpanel.net/cpanel/advanced/cron-jobs/).

### On VPS/Dedicated Server

If you are using VPS/Dedicated Server, you can follow the instructions below to set up a cronjob:

1. Go to your site's **Settings** -> **Cronjob** page, copy the cronjob command.
2. Open your server's terminal and run the command below to open the crontab file:
    ```bash
    crontab -e
    ```
3. Paste the cronjob command you copied from your site's **Settings** -> **Cronjob** page and save the file.
4. Now your Envato sales will be synchronized with your site automatically.
