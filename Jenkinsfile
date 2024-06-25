pipeline {
  agent any
  tools {
    nodejs '18.20.4'
  }
  stages {
    stage('Install') {
      steps {
        sh 'pnpm install'
      }
    }
    stage('Build') {
      steps {
        sh 'pnpm run build'
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
