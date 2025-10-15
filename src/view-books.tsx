import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { useOutletContext } from "react-router";
import Book from "./book";
import { Label } from "@radix-ui/react-label";

type PropsType = { books: Book[] };
function ViewBooks() {
  const { books } = useOutletContext<PropsType>();

  if (books.length != 0) {
    return (
      <div className="grid grid-cols-4 gap-4 mb-10 w-full">
        {books.map((book: Book) => (
          <Card className="w-full p-3" key={book.id}>
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>Author: {book.author}</CardDescription>
              <CardDescription>Publishing year: {book.year}</CardDescription>
              <CardDescription>
                Written languages: {book.languages?.join(", ") || "none"}
              </CardDescription>
              <CardContent className="flex justify-center">
                <img
                  src={
                    "https://covers.openlibrary.org/b/OLID/" +
                    book.cover_id +
                    "-M.jpg"
                  }
                  key={book.cover_id}
                />
              </CardContent>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    );
  } else {
    return <Label>No books found, try to search for something else.</Label>;
  }
}

export default ViewBooks;
