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
            // bin kulla windows-x86-64 folder-ku poyi .bat file-ai call pannanum
            bat "${scannerHome}\\bin\\windows-x86-64\\sonar-scanner.bat -Dsonar.projectKey=farm-management-project -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=sqp_03de2a1d7239df809dd828971d69b8cefde80fdb"
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