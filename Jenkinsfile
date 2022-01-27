pipeline {
    agent {
        docker {
            image 'buildkite/puppeteer'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Preparing...'
                sh 'npm install'
                echo 'Building...'
                sh 'npm run build'
            }
        }
        stage('Test') {
            environment {
                DATADOG_API_KEY=credentials('DATADOG-API-KEY')
                DD_ENV='jenkins'
                DD_SERVICE='deane'
            }
            steps {
                echo 'Testing...'
                sh 'npm run test'
            }
            post {
                always {
                    sh 'npx datadog-ci junit upload ./TESTS-*.xml'
                }
            }
        }
    }
}
