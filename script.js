//Créer un form pour taper les todos
//ajouter sur le dom ce qui est tapé dans le form à la validation du form
//Suprimer un todo lorsque l'on click dessus (.remove())
//Stocker dans le local storage la liste
//consulter le local storage au lancement de l'application pour rajouter les todos;

const form = document.querySelector("form");
console.log(form);

//LocalStorage function
const storageFunct = () => {
  window.localStorage.myTodoList = list.innerHTML;
};

//Récupérer la liste et le mettre dans le dom
const recupTodo = () => {
    if (window.localStorage.myTodoList) {
        list.innerHTML = window.localStorage.myTodoList;
    } else {
        list.innerHTML = `<li>Ajoutez et cliquez pour delete</li>`;
    }
    ;
}
recupTodo();

//Evenement du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Mettre les todos dans le ul
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storageFunct();
});

//Evenement click
list.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storageFunct();
});
