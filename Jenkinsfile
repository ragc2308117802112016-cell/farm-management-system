pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "farm-app:latest"
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                bat "docker build --no-cache -t ${DOCKER_IMAGE} ."
            }
        }
        stage('Deploy to Minikube') {
            steps {
                script {
                    // Intha path unga system-la irukkaa nu oru thadava paarunga
                    withEnv(["KUBECONFIG=C:\\Users\\acer\\.kube\\config"]) {
                        bat "kubectl apply -f deployment.yaml"
                    }
                }
            }
        }
    }
}