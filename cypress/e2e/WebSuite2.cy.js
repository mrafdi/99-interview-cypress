/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Web Suite 2", () => {
  beforeEach(() => {
    //Optional
    cy.visit('https://www.pawshake.com.sg/')
  });

  it("Test Case 1 - check if link works", () => {
    //Write your automation script here for Test Case 1
    cy.get('.sc-e8ad0dd2-17.hMxna').children().should('have.length', 3);
    for(var i=0; i <= 2; i++) {
      cy.get('.sc-9836ea38-2.lehXrI.sc-e8ad0dd2-18.izYgcd a').eq(i).invoke('attr', 'href').then((url) => {
        cy.request(url).then((response) => {
          expect(response.status).to.equal(200);
        });
      });
    };
  });
});
