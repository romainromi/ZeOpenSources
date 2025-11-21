// export function formulaire(){
    
//     // gestion d'erreur_Form
//     const formIsValid = (article) => {
//       let errors = [];
//       if (
//         !article.author ||
//         !article.category ||
//         !article.content ||
//         !article.img ||
//         !article.title
//       ) {
//         errors.push("Vous devez renseigner tous les champs");
//       }
//       if (article.content.length < 20) {
//         errors.push("Le contenu de votre article est trop court !");
//       }
//       if (errors.length) {
//         let errorHTML = "";
//         errors.forEach((e) => {
//           errorHTML += <li>${e}</li>;
//         });
//         errorElement.innerHTML = errorHTML;
//         return false;
//       } else {
//         errorElement.innerHTML = "";
//       }
//       return true;
//     };
// }