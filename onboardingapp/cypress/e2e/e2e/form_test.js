//describe block
describe('Functionality Test', () => {
    
    //before each - visits application
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    //Variables
    const nameInput = () => cy.get(':nth-child(1) > input')
    const emailInput = () => cy.get(':nth-child(3) > input')
    const passInput = () => cy.get(':nth-child(5) > input')


    it('Selects name and types in the field', () => {
        const name = 'Percival Wright'
        nameInput().type(name)
        nameInput().should('exist')
    })

    it('Selects email and types in the field', () => {
        const email = 'PWright@email.com'
        emailInput().type(email)
        emailInput().should('exist')
    })

    it('Selects password and types in the field', () => {
        const password = 'funcoder'
        passInput().type(password)
        passInput().should('exist')
    })


})