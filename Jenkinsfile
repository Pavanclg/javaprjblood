pipeline {
    agent any

    stages {

        stage('Build Backend Docker Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t blood-backend .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t blood-frontend .'
                }
            }
        }

        stage('Show Docker Images') {
            steps {
                sh 'docker images'
            }
        }

    }
}