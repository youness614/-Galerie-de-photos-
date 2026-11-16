/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

  // Vérification : l'événement se déclenche-t-il ?
  console.log("L'événement onmouseover s'est déclenché");

  // Informations sur l'image survolée
  console.log("alt : " + previewPic.alt);
  console.log("src : " + previewPic.src);

  // 1) Changer l'image d'arrière-plan de la div #image
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

  // 2) Changer le texte de la div #image avec le texte alt de l'image
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

  console.log("L'événement onmouseout s'est déclenché");

  // 1) Remettre l'image d'arrière-plan d'origine (url vide, comme dans le CSS)
  document.getElementById("image").style.backgroundImage = "url('')";

  // 2) Remettre le texte d'origine (celui du HTML)
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}