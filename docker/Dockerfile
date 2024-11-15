# Utiliser une image officielle PHP avec Apache
FROM php:8.1-apache

# Copie des fichiers de ton projet dans le conteneur
COPY . /var/www/html/

# Configuration du répertoire de travail dans le conteneur
WORKDIR /var/www/html

# Activer les extensions PHP si nécessaire
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Exposer le port 80 pour accéder à ton site
EXPOSE 80

# Démarrer Apache en mode foreground
CMD ["apache2-foreground"]

