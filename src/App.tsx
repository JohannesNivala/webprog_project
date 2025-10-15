import "./App.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, Outlet } from "react-router";
import { useState } from "react";
import Book from "./book";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl font-bold text-center">Booksearch Engine</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/search">Search</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/view-books">View Books</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {<Outlet context={{ setBooks, books }} />}
    </div>
  );
}

export default App;
