pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Codigo descargado de GitHub'
            }
        }

        stage('Test') {
            steps {
                echo 'Verificando archivos...'
                sh 'test -f backend/index.php && echo OK || echo ERROR'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Desplegando en Apache...'
                sh 'cp -r backend/. /var/www/cv_site/'
                sh 'sudo chown -R www-data:www-data /var/www/cv_site'
                echo 'Despliegue completado'
            }
        }
    }

    post {
        success {
            echo 'CV actualizado correctamente'
        }
        failure {
            echo 'Pipeline fallido: revisar logs'
        }
    }
}