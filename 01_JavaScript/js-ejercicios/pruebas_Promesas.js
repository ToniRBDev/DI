
async function usersWithPostCount(){

  const urlUsers='https://jsonplaceholder.typicode.com/users/'; 
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts/';
  
  // Promise.all nos devuelve un array de 2 posicioes
  // [0]=array de objetos users ||  [1]= array de objetos posts
  // desestructuramos el array para que queden 2 arrays distintos, todavía sin formatear a JSON
  const [usersResponse, postsResponse] = await Promise.all(  
    [fetch(urlUsers), fetch(urlPosts)]);       

  // pasamos los datos a JSON, de nuevo con Promise.all para optimizar los tiempos
  // desestructuramos el array de nuevo y ya tenermos 2 arrays en formato json
  const [users, posts] = await Promise.all(
    [usersResponse.json(), postsResponse.json()]);  

    const numeroDePostsPorUsuario = users.map(user => { // Obtenemos un nuevo array, por cada usuario
      const usersCount = posts.filter(post => post.userId == user.id).length; // recorremos los posts y filtramos los posts que coincidan con el ide de ese usuario y obtenemos el tamaño de array para contarlos
      return {userId: user.id,    //Por cada usuario, retornamos un nuevo objeto con el id del usuario y el numero de posts cuyo id de usuario coincidan en el del usuario actual
              postsCount: usersCount}
    });

    //Ordenamos el array anterior 
    numeroDePostsPorUsuario.sort((user1, user2) => user2.postsCount - user1.postsCount);

    console.log(numeroDePostsPorUsuario);
}

usersWithPostCount();



