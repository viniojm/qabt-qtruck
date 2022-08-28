import modal from '../components/modal'


class CreatePage {

    constructor() {
        this.modal = modal
    }

    form(foodtruck) {
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        if (foodtruck.name) cy.get('input[name=name]').type(foodtruck.name)
        if (foodtruck.details) cy.get('textarea[name=details]').type(foodtruck.details)
        if (foodtruck.opening_hours) cy.get('input[name=opening-hours]').type(foodtruck.opening_hours)

        cy.contains('button', foodtruck.open_on_weekends ? 'Sim' : 'Não')
            .click()

        /* if (foodtruck.open_on_weekends === 'Sim')
            cy.contains('button', 'Sim').click()

        if (foodtruck.open_on_weekends === 'Não')
            cy.contains('button', 'Não').click() */
    }

    submit() {
        cy.contains('button', 'Cadastrar').click()
    }

}

export default new CreatePage()