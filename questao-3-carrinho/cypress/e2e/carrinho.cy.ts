/// <reference types="cypress" />

const USUARIO = "standard_user";
const SENHA = "secret_sauce";

const PRODUTOS = [
  "sauce-labs-backpack",
  "sauce-labs-bike-light",
  "sauce-labs-bolt-t-shirt",
];

describe("Carrinho - contador reflete as ações do cliente", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-test="username"]').type(USUARIO);
    cy.get('[data-test="password"]').type(SENHA);
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  });

  it("adiciona 3 produtos, remove 1 e o ícone do carrinho exibe exatamente 2", () => {
  
    cy.get(".shopping_cart_badge").should("not.exist");

    
    PRODUTOS.forEach((produto) => {
      cy.get(`[data-test="add-to-cart-${produto}"]`).click();
    });
    cy.get(".shopping_cart_badge").should("have.text", "3");

    
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();

    
    cy.get(".shopping_cart_badge")
      .should("be.visible")
      .and("have.text", "2");
  });

  it("(extra) o emblema do carrinho é renderizado com fundo vermelho", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get(".shopping_cart_badge")
      .should("have.text", "2")
      .and("have.css", "background-color", "rgb(226, 35, 26)");
  });
});
