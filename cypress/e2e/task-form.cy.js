/* global cy */

describe("LOGIN", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Opens the login page", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act

    //Assert
    cy.url().should("include", "/login");
  });
  it("Logs in successfully", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    cy.get("[data-cy=email-input]").type("george.bluth@reqres.in");
    cy.get("[data-cy=password-input]").type("George");
    cy.contains("Submit").click();

    //Assert
    cy.url().should("include", "/tasks");
  });
});

describe("SET TASK STATUS TO COMPLETE", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/tasks");
    cy.get("[data-cy=email-input]").type("george.bluth@reqres.in");
    cy.get("[data-cy=password-input]").type("George");
    cy.contains("Submit").click();
  });
  it("Submits a new task", () => {
    //Act
    cy.get("[data-cy=subject-input]").type("Test task");
    cy.get("[data-cy=description-input]").type("Test description");
    cy.get("[data-cy=deadline-input]").type("2024-05-22");

    cy.get("[name='George Bluth']").check();
    cy.contains("Save").click();

    //Assert
    cy.get("[data-cy=incomplete-task]").should("have.length", 1);
  });
});

describe("ADD TASK", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/tasks");
    cy.get("[data-cy=email-input]").type("george.bluth@reqres.in");
    cy.get("[data-cy=password-input]").type("George");
    cy.contains("Submit").click();
  });
  it("Can not submit task, button is disabled", () => {
    //Act
    cy.get("[data-cy=subject-input]").type("Test task");

    //Assert
    cy.contains("Save").should("be.disabled");
  });
  it("Submits a new task", () => {
    //Act
    cy.get("[data-cy=subject-input]").type("Test task");
    cy.get("[data-cy=description-input]").type("Test description");
    cy.get("[data-cy=deadline-input]").type("2024-05-22");

    cy.get("[name='George Bluth']").check();
    cy.contains("Save").click();
    cy.contains("Complete").click();

    //Assert
    cy.get("[data-cy=completed-task]").should("have.length", 1);
  });

  it("Submits 2 new tasks", () => {
    //Act
    //FIRST TASK
    cy.get("[data-cy=subject-input]").type("Test task");
    cy.get("[data-cy=description-input]").type("Test description");
    cy.get("[data-cy=deadline-input]").type("2024-05-22");

    cy.get("[name='George Bluth']").check();
    cy.contains("Save").click();

    //SECOND TASK

    cy.get("[data-cy=subject-input]").type("Test task 2");
    cy.get("[data-cy=description-input]").type("Test description 2");
    cy.get("[data-cy=deadline-input]").type("2024-05-22");

    cy.get("[name='Eve Holt']").check();
    cy.get("[name='Tracey Ramos']").check();
    cy.get("[name='Janet Weaver']").check();
    cy.contains("Save").click();

    //Assert
    cy.get("[data-cy=incomplete-task]").should("have.length", 2);
  });

  it("Submits 2 new tasks and marks one as complete", () => {
    //Act
    //FIRST TASK
    cy.get("[data-cy=subject-input]").type("Test task");
    cy.get("[data-cy=description-input]").type("Test description");
    cy.get("[data-cy=deadline-input]").type("2024-05-22");

    cy.get("[name='George Bluth']").check();
    cy.contains("Save").click();

    cy.contains("Complete").click();

    //SECOND TASK

    cy.get("[data-cy=subject-input]").type("Test task 2");
    cy.get("[data-cy=description-input]").type("Test description 2");
    cy.get("[data-cy=deadline-input]").type("2024-05-22");

    cy.get("[name='Eve Holt']").check();
    cy.get("[name='Tracey Ramos']").check();
    cy.get("[name='Janet Weaver']").check();
    cy.contains("Save").click();

    //Assert
    cy.get("[data-cy=incomplete-task]").should("have.length", 1);
    cy.get("[data-cy=completed-task]").should("have.length", 1);
  });
});
