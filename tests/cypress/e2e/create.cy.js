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
            latitude: '-23.569808847808314',
            longitude: '-46.71635627746583',
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

    it ('não deve cadastrar foodtruck com o nome duplicado', ()=>{
        const user = {
            name: 'Vinicius',
            instagram: '@vinipiurx',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
            latitude: '-23.569808847808314',
            longitude: '-46.71635627746583',
            name: 'Tienda Del Chavo',
            details: 'Um bom pastel de queijo',
            opening_hours: 'das 14h as 20h',
            open_on_weekends: true
        }

        cy.uiLogin(user)
        mapPage.createLink()
        CreatePage.form(foodtruck)
        CreatePage.submit()
        CreatePage.modal.haveText('Esse food fruck já foi cadastrado!')
    })

    it ('todos os campos são obrigatórios', ()=>{
        const user = {
            name: 'Benson',
            instagram: '@benson',
            password: 'Aaaaaa1!'
        }

        const foodtruck = {
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        CreatePage.form(foodtruck)
        CreatePage.submit()
        CreatePage.modal.haveText('O campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!')
    })
})