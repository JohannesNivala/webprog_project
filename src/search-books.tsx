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

function SearchBooks() {
  return (
    <Card className="w-full p-3">
      <form
        id="book-search-form"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          //Logic to handle the form submission
        }}
      >
        <Label className="grid grid-cols-1 gap-2 mb-4">
          <span className="text-base font-semibold -mb-1">
            Do some searching
          </span>
          <p>Be a good guy</p>
        </Label>
      </form>
    </Card>
  );
}

export default SearchBooks;
