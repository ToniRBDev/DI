import { useState, useEffect } from 'react';
import { Guitar, Footer, Header } from './components/';
import { db } from './data/db';

const initialData = JSON.parse(localStorage.getItem('cart')) ?? [];
export default function App() {
  // El useState de react recibe como parámetro la inicialización del estado, en este caso en un Array de guitarras
  // guitars: el estado actual, que se le ha asignado el estado de db.
  // setGuitars: Una función que nos ayuda a modificar el estado
  const [guitars, setGuitars] = useState(db);
  const handleClick = () => {
    const guitarToni = {
      id: 80,
      name: 'TONI',
      image: 'guitarra_02',
      description: 'The guitar of guitars',
      price: 2500,
    };
    setGuitars([...guitars, guitarToni]);
    console.log('He añadido una guitarra');
  };

  // Creamos un state del carrito, si hay datos en localStorage, nos muestra el carrito con esos datos
  const [cart, setCart] = useState(initialData);
  // Añadimos una guitarra al carro: si ya la hay, sumamos 1 a la cantidad
  const addToCart = (guitar) => {
    cart.some((item) => item.id === guitar.id)
      ? setCart(
          cart.map((item) =>
            item.id === guitar.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        )
      : setCart([...cart, { ...guitar, quantity: 1 }]);
    console.log(cart);
  };

  //Creamos una función para vaciar el carrito
  const emptyCart = () => {
    setCart([]);
  };

  //Creamos una función para eliminar un item del carrito
  const delItemCart = (id) => {
    const newState = cart.filter((item) => item.id !== id);
    setCart(newState);
  };

  // Guardamos el estado del carrito en localStorage
  useEffect(()=>{
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  //Función para modificar la cantidad de un item en el carrito
  // delta indica si se aumenta o si disminuye ( +1, -1)
  const updateQuantity = (id, delta) => {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <>
      <Header
        key={cart.key}
        cart={cart}
        emptyCart={emptyCart}
        delItemCart={delItemCart}
        updateQuantity={updateQuantity}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {guitars.map((guitar) => {
            return (
              <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
            );
          })}
        </div>
      </main>
      <Footer />
      <button
        type="button"
        className="btn btn-dark w-100"
        onClick={() => {
          handleClick();
        }}
      >
        Añadir guitarra
      </button>
    </>
  );
}
