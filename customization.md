# Customization

## Primary Key types

Before going to install, you should know about the primary key types of your database. There are 3 types of primary key
in Envato Sale Tools:

- `UUID` (default) - e.g `b2d9c9e0-1b0a-4e1a-8c0a-0e1a8c0a0e1a`
- `ULID` - e.g `01F9Z3ZJZ0YQZJZJZJZJZJZJZJ`
- `BIGINT` - e.g `1234567890`

The default primary key type is `UUID`, it’s recommended to use this type. If you want to use `ULID` or `BIGINT`, you
should change it in `.env` by setting `CORE_TYPE_ID=` to `ULID` or `BIGINT` before installing.

## URL Rewriting

### Apache

The Laravel framework ships with a `public/.htaccess` file that is used to allow URLs without `index.php`. If you use
Apache to serve your Laravel application, be sure to enable the `mod_rewrite` module.

If the `.htaccess` file that ships with Laravel does not work with your Apache installation, try this one:

```nginx
Options +FollowSymLinks
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

If your web host doesn't allow the `FollowSymlinks` option, try replacing it with Options `+SymLinksIfOwnerMatch`.

### Nginx

If you are deploying your application to a server that is running Nginx, you may use the following configuration file as
a starting point for configuring your web server. Most likely, this file will need to be customized depending on your
server's configuration.

Please ensure, like the configuration below, your web server directs all requests to your
application's `public/index.php`
file. You should never attempt to move the `index.php` file to your project's root, as serving the application from the
project root will expose many sensitive configuration files to the public Internet:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /srv/example.com/public;
 
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
 
    index index.php;
 
    charset utf-8;
 
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
 
    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }
 
    error_page 404 /index.php;
 
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }
 
    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```
