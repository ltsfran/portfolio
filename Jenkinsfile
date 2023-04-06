pipeline {
  agent any
  tools {
    nodejs '18.15.0'
  }
  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
    stage('Ws size') {
      steps {
        sh 'du -sh ${WORKSPACE}'
      }
    }
  }
  post {
    always {
      cleanWs(
        deleteDirs: true,
        notFailBuild: true,
        patterns: [
          [pattern: '**'],
          [pattern: '**/node_modules/**', type: 'EXCLUDE']
        ]
      )
    }   
  }
}
