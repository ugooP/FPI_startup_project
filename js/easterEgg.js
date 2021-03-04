let changeCopyright = document.getElementById("copyrightDate");
changeCopyright.addEventListener("click", changing)


function changing(){
    // Change the text on click
    if (changeCopyright.innerHTML == "<img style='width:10%; float:right;' src='https://nsm09.casimages.com/img/2021/03/04//21030404182825719517295678.jpg'>"){
       changeCopyright.innerHTML = "<p>'©2021 Formation pour l’innovation,'<br>'Tous droits réservés.'</p>"
    } else{
       changeCopyright.innerHTML = "<img style='width:10%; float:right;' src='https://nsm09.casimages.com/img/2021/03/04//21030404182825719517295678.jpg'>"
    }
}