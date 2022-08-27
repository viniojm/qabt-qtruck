import mapPage from '../support/pages/Map'
import CreatePage from '../support/pages/Create'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
            latitude: '-23.593604408436704',
            longitude: '-46.684293150901794',
            name: 'Tienda Del Chavo',
            details: 'O melhor lugar para tomar um suco gelado e conversar com os amigos',
            opening_hours: 'das 14h as 20h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        CreatePage.form(foodtruck)
        CreatePage.submit()
        CreatePage.modal.haveText('Food truck cadastrado com sucesso!')
    })
})