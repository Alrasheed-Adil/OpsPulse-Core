pipeline {
    agent any

    stages {
        stage('Webhook Triggered') {
            steps {
                echo 'Build started from webhook trigger.'
            }
        }
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
            }
        }
        stage('Set Permissions') {
            steps {
                // This ensures the container can execute the script
                sh 'chmod +x script.sh'
            }
        }
        stage('Execute Logic') {
            steps {
                echo 'Running the core script...'
                sh './script.sh'
            }
        }
    }
    
    post {
        success {
            echo 'SUCCESS: OpsPulse-Core is officially running!'
        }
    }
}
