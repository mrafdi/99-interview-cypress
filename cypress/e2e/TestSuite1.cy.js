/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/
const h2data = require('../fixtures/h2.json')

describe("Web Suite 1", () => {
  beforeEach(() => {
    //Optional
    cy.visit('https://www.pawshake.com.sg/')
  });

  it("Test Case 1 - h2 check", () => {
    //Write your automation script here for Test Case 1
    for(var i=0; i <= 12; i++) {
      cy.get('h2').eq(i).should('contain', h2data[i])
    }
  });
});
