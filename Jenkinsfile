pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('SonarQube Analysis') {
            steps {
                // SonarQube Scanner run aagum
                sh 'sonar-scanner'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t farm-app:latest .'
            }
        }
        stage('Deploy to Minikube') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}