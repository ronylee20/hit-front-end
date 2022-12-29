const LOCAL_STORAGE_KEY = "expenses";

export function useDatabase() {
  const addItem = (item) => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const updatedItems = [...items, item];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const deleteItem = (id) => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const updatedItems = items.filter((item) => item.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const updateItem = (id, updatedItem) => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const getData = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  };

  return { addItem, deleteItem, updateItem, getData };
}
