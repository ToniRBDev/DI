# Ejercicios: `fetch` + Promesas + `async/await` + métodos de arrays

## 1) Filtra y transforma posts

**Enunciado:** Descarga los posts y quédate solo con los de
`userId = 1`. Devuelve un array de títulos en mayúsculas.

``` js
  // 1) fetch posts
  // 2) json
  // 3) filter por userId
  // 4) map a títulos en mayúsculas
async function getUppercaseTitlesByUser(userId = 1) {
    const posts= await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        const postUser1TituloMayusculas= posts.filter(respuesta => respuesta.userId===userId)
        .map(ru1=> ({...ru1, title: ru1.title.toUpperCase()}));

console.log(postUser1TituloMayusculas);

}
getUppercaseTitlesByUser();

```

------------------------------------------------------------------------

## 2) Suma de precios (reduce)

**Enunciado:** Descarga los productos de Fake Store API y calcula el
**precio total** de los productos con `category = 'electronics'`.

``` js

    async function totalElectronics() {
      const products = await (await fetch ('https://fakestoreapi.com/products')).json();
      const precioTotalElectronics = products.filter(e => e.category === "electronics")
        .map(e => e.price).reduce((acumulador, precio) => acumulador+precio,0);

      console.log(precioTotalElectronics);
      
    }
    totalElectronics();
```

------------------------------------------------------------------------

## 3) Combinación con `Promise.all`

**Enunciado:** Descarga **usuarios** y **posts** en paralelo. Devuelve
una lista de objetos `{ userName, postsCount }`, ordenada
descendentemente por `postsCount`.

``` js
async function usersWithPostCount() {
  // Promise.all([fetch users, fetch posts])
  // Para cada usuario, cuenta cuántos posts tiene
  // Devuelve [{ userName, postsCount }] ordenado por postsCount desc
}
```

## 4) Pipeline: buscar, filtrar, normalizar, ordenar

**Enunciado:** De JSONPlaceholder, toma **comments**, filtra los que
contengan la palabra `'qui'` en `body`, normaliza `email` a minúsculas,
y ordénalos por `postId` asc y después por `email` asc.

``` js
async function cleanComments() {
  // GET /comments
  // filter body includes 'qui' (case-insensitive)
  // map: email a minúsculas
  // sort por postId, luego email
}
```
