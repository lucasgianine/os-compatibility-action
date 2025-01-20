import * as github from '@actions/github'
import * as core from '@actions/core'

;(async function coreFunction () {
    try {
        const username = core.getInput('username') ?? github.context.actor
        const os = process.platform
        const greeting = `Olá, usuário ${username}! Seu sistema operacional é ${os}`

        core.setOutput('greeting', greeting)
    } catch (err: any) {
        core.setFailed(`Erro ao executar a Action: ${err.message}`)
    }
})()