/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Web Suite 3", () => {
  beforeEach(() => {
    //Optional
    cy.visit('https://www.pawshake.com.sg/')
  });

  it("Test Case 1 - check search", () => {
    //Write your automation script here for Test Case 1
    var service = "House Sitting"
    var location = "One-north"
    cy.get('.sc-570b540b-2.hGoQiU').click();
    cy.get('.sc-190fcf9b-4.etwApk').contains(service).click(); // select House Sitting
    cy.get('input[placeholder="Your street name"]').type(location);
    cy.wait(4000).get('#ex-list-item-0').contains('One-north Crescent').click(); // select first suggestion
    cy.get('input[placeholder="Pick a date"]').eq(0).click();
    cy.get('.rdp-month.rdp-caption_end button[name=day]').contains('1').click(); // select date 1 next month
    cy.get('button.sc-dcd0d8ed-0').eq(0).click(); // click Search Now
    cy.url().should('include', '/search')
    cy.get('.max-w-screen-lg').should('be.visible');
    cy.get('.shrink-0~span').should('contain', service);
    cy.get('input[placeholder="Select location"]').invoke('attr', 'value').should('contain', location);
    // no assertion for date since it will be blank after search
  });
});
