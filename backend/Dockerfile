FROM php:8.3-fpm

# System dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip unzip git \
    libicu-dev libxml2-dev default-mysql-client libzip-dev \
    curl gnupg2 lsb-release ca-certificates nano \
    && rm -rf /var/lib/apt/lists/*

# Node.js LTS (if you use Vite, npm, etc.)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# PHP Extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql intl xml bcmath opcache zip

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

#  FIX: Correct copy statement
COPY . .

# Install PHP dependencies for production
RUN composer install --no-dev --optimize-autoloader

# Laravel setup (optional in image build; can move to entrypoint)
RUN php artisan key:generate \
    && php artisan config:cache \
    && php artisan route:cache

EXPOSE 8008

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8008"]
