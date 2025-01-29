"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const url =
  "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="">
      <p>{items.MenuId ? "Yay" : "Loading"}</p>
    </div>
  );
}
