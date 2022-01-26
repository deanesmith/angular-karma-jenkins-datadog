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
                DD_ENV='local'
                DD_SERVICE='angular-test'
            }
            steps {
                echo 'Testing...'
                sh 'npm run test'
            }
            post {
                always {
                    sh './node_modules/.bin/datadog-ci junit upload --service bodata ./TESTS-*.xml'
                }
            }
        }
    }
}
