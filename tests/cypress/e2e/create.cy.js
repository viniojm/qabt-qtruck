import mapPage from '../support/pages/Map'

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
            description: 'O melhor lugar para tomar um suco gelado e conversar com os amuigos',
            opening_hours: 'das 14h as 20h'
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)

        

        cy.wait(30000)

    })
})