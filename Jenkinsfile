pipeline {
    agent any
    stages {
        stage('Descargar codigo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/RuthDanielaAguirre/cv-daniela.git'
            }
        }
        stage('Validar PHP') {
            steps {
                sh 'find backend -name "*.php" -exec php -l {} \\;'
            }
        }
        stage('Desplegar en Apache') {
            steps {
                sh 'sudo rm -rf /var/www/html/cv_site'
                sh 'sudo cp -r backend /var/www/html/cv_site'
                sh 'sudo chown -R www-data:www-data /var/www/html/cv_site'
                sh 'sudo systemctl reload apache2'
            }
        }
    }
}
