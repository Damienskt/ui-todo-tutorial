const DEV_URL = "https://damienskt.github.io/ui-todo-tutorial/";

describe("CRUD flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL).wait(1000);
  });

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  it("should be able to add todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Write TODO app");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();
    cy.get("[data-cy=todo-task__name]").should(
      "have.text",
      "Buy GroceriesWrite TODO appSend masks to grandma"
    );
  });

  it("should be able to delete todo", () => {
    cy.get("[data-cy=todo-task__button-delete").first().click();
    cy.get("[data-cy=todo-task__name]").should(
      'not.have.text',
      "Buy Groceries"
    );
  });

  it("should be able to delete all todo", () => {
    const options = { multiple: true};
    cy.get("[data-cy=todo-task__button-delete").click(options);
    cy.get("[data-cy=todo-task__name]").should(
      'not.exist'
    );
  });
});
