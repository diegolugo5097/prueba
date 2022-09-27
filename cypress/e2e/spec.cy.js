describe("Navigation to product", () => {
  it("show page product", () => {
    cy.visit("http://localhost:3000/product");
    cy.get("#1").click();
    cy.get("#carrito").click();
    cy.get(".items_drawer").contains("p", "Zapato azul");
  });
});
