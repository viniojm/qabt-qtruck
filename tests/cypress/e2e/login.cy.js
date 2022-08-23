import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'


describe('Login', () => {
  it('deve logar com sucesso', () => {
    const user = {
      name: 'Vinicius',
      instagram: '@vinipiurx',
      password: 'Aaaaaa1!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)

  })

  it('nao deve logar com senha incorreta', () => {
    const user = {
      instagram: '@vinipiurx',
      password: 'aaaaa!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', () => {
    const user = {
      instagram: '@vinipiu',
      password: 'Aaaaaa1!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()
    
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram deve ser obrigatório', () => {
    const user = {
      password: 'Aaaaaa1!'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha deve ser obrigatória', () => {
    const user = {
      instagram: '@vinipiurx'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatários', () => {
    const user = {
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
})