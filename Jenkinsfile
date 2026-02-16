pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "farm-app:latest"
    }
    stages {
        stage('Checkout SCM') {
            steps { checkout scm }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    try {
                        def scannerHome = tool 'sonar-scanner'
                        withSonarQubeEnv('sonar-server') {
                            bat "${scannerHome}\\bin\\sonar-scanner.bat"
                        }
                    } catch (Exception e) {
                        echo "SonarQube setup illai, skipping this stage..."
                    }
                }
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
                    withEnv(["KUBECONFIG=C:\\Users\\acer\\.kube\\config"]) {
                        bat "kubectl apply -f deployment.yaml"
                    }
                }
            }
        }
    }
}