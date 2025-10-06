import "./App.css";
import { Button } from "./components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link, Outlet } from "react-router";

function App() {
  {
    /*const [cart, setCart] = useState<Salad[]>(initialCart);

  function addSalad(salad: Salad) {
    setCart([...cart, salad]);
  }*/
  }
  return (
    <div className="grid grid-rows-1 gap-4 max-w-5xl">
      <h1 className="text-3xl font-bold text-center ">Booksearch Engine</h1>
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
      {<Outlet />}
      <Button className="w-24 self-center mt-8 mb-8" onClick={getData}>
        getBooks
      </Button>
    </div>
  );
}

async function getData() {
  const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error: any) {
    console.error(error.message);
  }
}

export default App;
