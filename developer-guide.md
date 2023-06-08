# Developer Guide

## Setup

### Install Composer & Npm dependencies

If use native environment:

```shell
composer install
npm install
```

### Create database

### Copy `.env.example` to `.env`

```shell
cp .env.example .env
```

### Update database connection and redis connection on `.env`

> If you use Docker, set `DATABASE_HOST=mysql` and `REDIS_HOST=redis`.
> In this step, you can update another configuration in dotenv file.

### Run database migrations and database seeding.

```shell
# on native environment
php artisan migrate
php artisan db:seed UserSeeder
```

### Run build CSS/JS files

```shell
# Development
npm run dev

# Build
npm run build

npm run build-installer
```

## Publish assets

```shell
php artisan core:asset:publish
```