import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('deve cadastrar um novo usuario', ()=>{

        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'Aaaaaa1!'
        }

        cy.apiResetUser(user.instagram)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('não deve cadastrar com instagram duplicado', ()=> {
        const user = {
            name: 'Erick Jacquin',
            instagram: '@jacquin',
            password: 'Aaaaaa1!'
        }

        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Instagram já cadastrado!')
    })
})

