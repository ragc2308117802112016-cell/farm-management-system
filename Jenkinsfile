pipeline {
    agent any
    environment {
        // Docker image name-ai inga fix panrom
        DOCKER_IMAGE = "farm-app:latest"
        // Windows-la binary path errors varaama irukka environment variables check panrom
    }
    stages {
        stage('Checkout') {
            steps {
                // GitHub-la irunthu code-ai download pannum
                checkout scm
            }
        }
       stage('SonarQube Analysis') {
    steps {
        script {
            def scannerHome = tool 'sonar-scanner'
            // Inga YOUR_TOKEN-ku bathila neenga generate panna token-ai paste pannunga
            bat "${scannerHome}\\bin\\sonar-scanner -Dsonar.projectKey=farm-management-project -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=YOUR_TOKEN"
        }
    }
}
        stage('Build Docker Image') {
            steps {
                // Docker image build panna bat command
                bat "docker build -t ${DOCKER_IMAGE} ."
            }
        }
        stage('Deploy to Minikube') {
            steps {
                // Kubernetes (Minikube)-la deploy panna kubectl use panrom
                bat "kubectl apply -f deployment.yaml"
            }
        }
    }
    post {
        always {
            echo 'Build Process Finished!'
        }
        success {
            echo 'Unga Farm App success-ah build aagi deploy aayiduchi!'
        }
        failure {
            echo 'Build failed. Console logs-ai check pannunga.'
        }
    }
}