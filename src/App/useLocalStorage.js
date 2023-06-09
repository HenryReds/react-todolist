import React from "react";

const TODO_V1_LOCALSTORAGE = 'TODO_V1';

function useLocalStorage(itemName, initialValue) {
  const defaultTodos = [
    { text: 'Cortar Cebolla', completed: true },
    { text: 'Tomar Curso', completed: false },
    { text: ' por la llorona', completed: false },
    { text: 'LALALALA', completed: false }
  ];

  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, 
      JSON.stringify(newItem));
    setItem(newItem);
  };  

  return [item, saveItem];
}

export { useLocalStorage };