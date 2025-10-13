async function getUppercaseTitlesByUser(userId = 1) {
    const posts= await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        const postUser1TituloMayusculas= posts.filter(respuesta => respuesta.userId===userId)
        .map(ru1=> ({...ru1, title: ru1.title.toUpperCase()}));

console.log(postUser1TituloMayusculas);

}

getUppercaseTitlesByUser();

    /*const postUsuario1 = posts.filter(post => post.userId===userId);
    const postU1TitMayusculas= postUsuario1.map(post => {
                    const {userId, id, title, body} = post;

                return {userId,
                         id,
                         tittle: title.toUpperCase(),
                          body};
    const postU1TitMayusculas = postUsuario1.map((post) => ({...post, title : post.title.toUpperCase()})) ;
    console.log(postU1TitMayusculas);*/

    async function totalElectronics() {
      const products = await (await fetch ('https://fakestoreapi.com/products')).json();
      const precioTotalElectronics = products.filter(e => e.category === "electronics")
        .map(e => e.price).reduce((acumulador, precio) => acumulador+precio,0);

      console.log(precioTotalElectronics);
      
    }
    totalElectronics();

async function usersWithPostsCount() {
  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const postsURL ='https://jsonplaceholder.typicode.com/posts';
  const [users, posts] =await Promise.all([(await fetch(usersURL)).json(), fetch(postsURL).then(post => post.json())]);

  const numeroPostsPorUsuario = posts.reduce((acumulador, post) => {
        acumulador[post.userId] = (acumulador[post.userId] || 0) + 1;
        return acumulador;
  }, {});

  console.log(numeroPostsPorUsuario);


  

  console.log(users);

}

usersWithPostsCount();