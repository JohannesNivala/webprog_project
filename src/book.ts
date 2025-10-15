import { v4 as uuidv4 } from "uuid";

class Book {
  public title: string;
  public author: string;
  public year: string;
  public languages: string[];
  public cover_id: string;
  public id: string;

  constructor(
    title: string,
    author: string,
    year: string,
    languages: string[],
    cover_id: string
  ) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.languages = languages;
    this.cover_id = cover_id;
    this.id = uuidv4();
  }
}

export default Book;
