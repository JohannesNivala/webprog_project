import type { C } from "node_modules/react-router/dist/development/index-react-server-client-2EDmGlsZ.d.mts";

const url = "https://openlibrary.org/search.json?";
async function getBooks(
  title?: string,
  author?: string,
  character?: string,
  isbn?: string,
  language?: string
) {
  var query = url;
  var searches: string[] = [];
  if (title) {
    searches.push("title=" + parseInput(title));
  }
  if (author) {
    searches.push("author=" + parseInput(author));
  }
  if (character) {
    searches.push("person=" + parseInput(character));
  }
  if (isbn) {
    searches.push("isbn=" + parseInput(isbn));
  }
  if (language) {
    searches.push("language=" + parseInput(language));
  }

  query = query + searches.join("&");

  try {
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.log(error.message);
  }
}

function parseInput(input: string) {
  return input.trim().replaceAll(" ", "+");
}

export default getBooks;
