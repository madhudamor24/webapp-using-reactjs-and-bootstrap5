import './App.css';
import Header from './My Components/Header';
import { Items } from './My Components/Items';
import { Footer } from './My Components/Footer';
import { AddItem } from './My Components/AddItem';
import React, { useEffect, useState } from 'react';

function App() {
  let initItem;
  if (localStorage.getItem("items") === null) {
    initItem = [];
  }
  else {
    initItem = JSON.parse(localStorage.getItem("items"));
  }

  const onDelete = (item) => {
    console.log("I am OnDelete of item ", item);

    setItems(items.filter((e) => {
      return e !== item;
    }))

    localStorage.setItem("items", JSON.stringify(items));
  }

  const addItem = (item_name, price) => {
    console.log("I am adding this item", item_name, price);

    let sno;

    if (items.length === 0) {
      sno = 0;
    }
    else {
      sno = items[items.length - 1].sno + 1;
    }

    const myItem = {
      sno: sno,
      item_name: item_name,
      price: price
    }

    setItems([...items, myItem]);
    console.log(myItem);
  }


  const [items, setItems] = useState(initItem);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])

  return (
    <>
      <Header title='Jigiriz Impex' />
      <AddItem addItem={addItem} />
      <Items items={items} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;

