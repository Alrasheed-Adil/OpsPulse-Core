pipeline {
    // This tells Jenkins to use a Node.js container for the whole process
    agent {
        docker { 
            image 'node:18-alpine' 
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Executing Jest tests...'
                // If this fails, the whole pipeline stops!
                sh 'npm test'
            }
        }

        stage('Security Audit') {
            steps {
                echo 'Checking for vulnerable packages...'
                // A standard step in any modern org
                sh 'npm audit fix --force || true' 
            }
        }

        stage('Build Artifact') {
            steps {
                echo 'Packaging the app for deployment...'
                sh 'tar -czf opspulse-app.tar.gz index.js package.json'
                // This saves the file in Jenkins so you can download it later
                archiveArtifacts artifacts: 'opspulse-app.tar.gz', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline Finished Successfully!'
        }
        failure {
            echo 'Tests failed! Check the index.test.js file.'
        }
    }
}