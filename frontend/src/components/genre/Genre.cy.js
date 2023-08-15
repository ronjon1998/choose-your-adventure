import Homepage from "../homepage/Homepage"
const navigate = () => {}

describe("HomePage", () => {
    it("Shows the title", () => {
        cy.mount(<Homepage navigate={navigate}/>);
        cy.get(".title").should("contain.text","Infinity Trails")
    })

    it("Shows the introduction message", () => {
        cy.mount(<Homepage navigate={navigate}/>);
        cy.get(".intro").should("contain.text","Welcome to your next adventure")
    })
})