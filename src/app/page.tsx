"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { TMenuSection, TMenu } from "../../types";
const url =
  "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

export default function Home() {
  const [sections, setSections] = useState<TMenuSection>([]); // empty array allowed as values are optional

  useEffect(() => {
    axios.get<TMenu>(url).then(({ data }) => {
      setSections(data.MenuSections);
    });
  }, []);

  return (
    <div className="">
      <p>{sections.length ? "Yay" : "Loading"}</p>
      {sections.length}
    </div>
  );
}
