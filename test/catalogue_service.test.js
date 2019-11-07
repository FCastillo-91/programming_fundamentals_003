const catalogueService = require("../app/catalogue_service");

describe("catalogueService.countBooksByAuthor", () => {
  test("returns the total number of books written by the given author", () => {
    expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
    expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
    expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
  });
});

describe("catalogueService.checkBookByTitle", () => {
  test("returns true if the book exists", () => {
    expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
    expect(catalogueService.checkBookByTitle("James And The Giant Peach")).toBe(false);
  });
});

describe("catalogueService.countBooksByFirstLetter", () => {
  test("returns total number of books that beging with this letter", () => {
    expect(catalogueService.countBooksByFirstLetter("t")).toBe(5);
  });

  test("returns total number of books that beging with this letter", () => {
    expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
  });
});

describe("catalogueService.getQuantity", () => {
  test("return the quantity of this item which is in stock", () => {
    expect(catalogueService.getQuantity("A Place of Greater Safety")).toBe(11);
  });
});

describe("catalogueService.getBooksByAuthor", () => {
  test("return the title of books by given author", () => {
    expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual(
      [
        { title: "2666", author: "Robert Bolaño", stock: 17 },
        { title: "By Night In Chile", author: "Robert Bolaño", stock: 8 }
      ]
      );
  });
});

describe("catalogue.Service.checkQuantity", () => {
  test("returns true if there are at least as many books in stock as the given quantity, and false otherwise", () => {
    expect(catalogueService.checkQuantity("By Night In Chile", 4)).toBe(true);
    expect(catalogueService.checkQuantity("By Night In Chile", 100)).toBe(false);
  });
});
