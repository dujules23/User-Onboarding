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
    const checkInput = () => cy.get(':nth-child(7) > input')
    const submitButton = () => cy.get('button')
    const emailError = () => cy.get('[style="color: red;"] > :nth-child(2)')
    
    const name = 'Percival Wright'
    const email = 'PWright@email.com'
    const password = 'funcoder'

    it('Selects name and types in the field', () => {
        
        nameInput().type(name)
        nameInput().should('exist')
    })

    it('Selects email and types in the field', () => {
        
        emailInput().type(email)
        emailInput().should('exist')
    })

    it('Selects password and types in the field', () => {
        
        passInput().type(password)
        passInput().should('exist')
    })

    it('Makes sure you can check tos', () => {
        checkInput().click()
        checkInput().should('exist')
    })

    it('Makes sure you can submit form', () => {
        nameInput().type(name)
        emailInput().type(email)
        passInput().type(password)
        checkInput().click()
        submitButton().click()
        submitButton().should('exist')
    })

    
    it('Form Validation', () => {
        emailInput().type(email)
        emailInput().clear()
        emailError().should('exist')
    })

})