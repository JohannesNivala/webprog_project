import { Button } from "./components/ui/button";
import { useState, type FormEvent } from "react";
import { AlertCircleIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Label } from "./components/ui/label";
import { useOutletContext, useNavigate } from "react-router";
import { Alert, AlertTitle } from "./components/ui/alert";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import getBooks from "./use-fetch-books";
import Book from "./book";

const MAX_BOOKS: number = 100;

type PropsType = { setBooks: (books: Book[]) => void };
function SearchBooks() {
  const { setBooks } = useOutletContext<PropsType>();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [character, setCharacter] = useState("");
  const [language, setLanguage] = useState("");
  const [isbn, setIsbn] = useState("");
  const [HasSubmittedEmpty, setHasSubmittedEmpty] = useState(false);
  let navigate = useNavigate();

  interface Language {
    name: string;
    code: string;
  }

  const languages: Language[] = [
    { name: "Arabic", code: "ara" },
    { name: "Bengali", code: "ben" },
    { name: "Chinese", code: "zho" },
    { name: "Dutch; Flemish", code: "nld" },
    { name: "English", code: "eng" },
    { name: "French", code: "fra" },
    { name: "German", code: "deu" },
    { name: "Hindi", code: "hin" },
    { name: "Indonesian", code: "ind" },
    { name: "Italian", code: "ita" },
    { name: "Japanese", code: "jpn" },
    { name: "Korean", code: "kor" },
    { name: "Malay", code: "msa" },
    { name: "Persian", code: "fas" },
    { name: "Polish", code: "pol" },
    { name: "Portuguese", code: "por" },
    { name: "Russian", code: "rus" },
    { name: "Spanish; Castilian", code: "spa" },
    { name: "Swedish", code: "swe" },
    { name: "Turkish", code: "tur" },
  ];

  return (
    <Card className="w-full p-3">
      <form
        id="book-search-form"
        onSubmit={async (event: FormEvent) => {
          event.preventDefault();

          if (!(title || author || character || isbn)) {
            setHasSubmittedEmpty(true);
            return;
          }
          setHasSubmittedEmpty(false);
          var data = await getBooks(title, author, character, isbn, language);
          console.log(data);

          let i = 0;
          let books: Book[] = [];
          for (let bookIndex in data.docs) {
            if (i < MAX_BOOKS) {
              let book_data = data.docs[bookIndex];
              books.push(
                new Book(
                  book_data.title,
                  book_data.author_name,
                  book_data.first_publish_year,
                  book_data.language,
                  book_data.cover_edition_key
                )
              );
              i += 1;
            }
          }
          setBooks(books);
          console.log(books);
          navigate("/view-books");
        }}
      >
        <div className="grid gap-6 grid-cols-2">
          <SelectText
            label="Titel"
            value={title}
            onValueChange={setTitle}
            setHasSubmittedEmpty={setHasSubmittedEmpty}
          ></SelectText>
          <SelectText
            label="Author"
            value={author}
            onValueChange={setAuthor}
            setHasSubmittedEmpty={setHasSubmittedEmpty}
          ></SelectText>
          <SelectText
            label="Character"
            value={character}
            onValueChange={setCharacter}
            setHasSubmittedEmpty={setHasSubmittedEmpty}
          ></SelectText>
          <SelectText
            label="ISBN"
            value={isbn}
            onValueChange={setIsbn}
            setHasSubmittedEmpty={setHasSubmittedEmpty}
          ></SelectText>
          <Label className="flex items-center justify-center flex-col gap-3">
            <span className="text-base font-semibold -mb-1">Language</span>
            <Select
              name="language"
              value={language}
              onValueChange={setLanguage}
            >
              <SelectTrigger className="w-sm">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language: Language) => (
                  <SelectItem value={language.code} key={language.code}>
                    {language.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Label>
        </div>
        {HasSubmittedEmpty && !language && (
          <ErrorBox errorString="Please fill in atleast one"></ErrorBox>
        )}
        {HasSubmittedEmpty && language && (
          <ErrorBox errorString="Can't only search with language"></ErrorBox>
        )}
        <Button type="submit" className="float-right">
          Search
        </Button>
      </form>
    </Card>
  );
}

type SelectTextType = {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  setHasSubmittedEmpty: (value: boolean) => void;
};
function SelectText({
  label,
  value,
  onValueChange,
  setHasSubmittedEmpty,
}: SelectTextType) {
  return (
    <Label className="grid grid-cols-1 gap-2 mb-4">
      <span className="text-base font-semibold -mb-1">{label}</span>
      <Input
        type="name"
        placeholder={label}
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value);
          setHasSubmittedEmpty(false);
        }}
      />
    </Label>
  );
}

type ErrorBoxType = {
  errorString: string;
};
function ErrorBox({ errorString }: ErrorBoxType) {
  return (
    <Alert
      variant="default"
      className=" border-yellow-400 bg-yellow-50 mb-5 mt-5"
    >
      <AlertCircleIcon className="text-yellow-400" />
      <AlertTitle>{errorString}</AlertTitle>
    </Alert>
  );
}

export default SearchBooks;
