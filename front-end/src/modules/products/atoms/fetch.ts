import { useState } from "react";

const fetchProductItems = async () => {
  const [loading, setLoading] = useState(false);
  const url = "/product"
  
  try{
    setLoading(true);
    const res = await fetch(`${url}/`);
    const jsonData = await res.json();
  } catch (error) {
    console.error('Error fetching products: ', error);
  } finally {
    setLoading(false);
  }
};
