# Updating

## Automatic Updates

To update Envato Sale Tools, go to **Settings** -> **System Updater** and click the **Download & Install Update**
button if an update is available.

![Update](images/update.png)

## Manual Updates

We recommend using the automatic update method above. However, if you prefer to update manually, your hosting/VPS must
support SSH Access/Terminal to running command line.

To start manual update can download the latest version of Envato Sale Tools from
your [CodeCanyon](https://codecanyon.net/downloads) account.

Extract the zip file and upload the contents to your server, overwriting these existing folders/files:

- `app`
- `database`
- `config`
- `platform`
- `public`
- `vendor`
- `composer.json`
- `composer.lock`

After uploading, run the following commands to update the dependencies and clear the cache:

```shell
php artisan migrate
php artisan core:asset:publish
```
