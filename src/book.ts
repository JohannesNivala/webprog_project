class Book {
  public title: string;
  public author: string;
  public year: string;
  public pages: string;
  public publisher: string;
  public ISBN: string;
  public language: string;
  public cover_id: string;

  constructor(
    title: string,
    author: string,
    year: string,
    pages: string,
    publisher: string,
    ISBN: string,
    language: string,
    cover_id: string
  ) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.publisher = publisher;
    this.ISBN = ISBN;
    this.language = language;
    this.cover_id = cover_id;
  }
}
