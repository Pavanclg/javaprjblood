pipeline {
    agent any

    stages {

       stage('Clone') {
    steps {
        git branch: 'main',
            url: 'https://github.com/Pavanclg/javaprjblood.git'
    }
}

        stage('Build Backend Docker Image') {
            steps {
                sh 'cd backend && sudo docker build -t blood-backend .'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                sh 'cd frontend && sudo docker build -t blood-frontend .'
            }
        }

        stage('Docker Images') {
            steps {
                sh 'sudo docker images'
            }
        }
    }
}