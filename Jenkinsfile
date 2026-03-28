pipeline {
    // 'any' tells Jenkins to use the tools available in the current environment
    agent any 

    stages {
        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Jest tests...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: OpsPulse-Core Node.js CI is working!'
        }
        failure {
            echo 'FAILED: Check the logs above.'
        }
    }
}