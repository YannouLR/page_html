function changeColor() {
    let color = ['red', 'blue', 'green', 'rgb(100, 255, 10)',];
    let random_number = Math.floor(Math.random() * color.length)
    let selected_color = color[random_number];
    document.getElementsByClassName('position-left')[0].style.backgroundColor = selected_color;
}


document.querySelector("#validate").addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();
    submit();
})
function submit(){
    nom = document.getElementById('lastname').value;
    prenom = document.getElementById('firstname').value;
    address = document.getElementById('address').value;
    age = document.getElementById('age').value;
    qualif = document.getElementById('person_type').value;

    console.log(nom, prenom, address, age, qualif)
}
document.querySelector("#multiply").addEventListener('click', function(ev){
    let numero1 = document.getElementById('nb1').value;
    let numero2 = document.getElementById('nb2').value;

    //let resultat = nb1 * nb2
    //document.getElementById('resultat').innerHTML = resultat
    let resultat = multiply(numero1, numero2);
    document.getElementById('resultat').innerHTML = resultat;
})


function multiply ($number_1, $number_2){
    return $number_1 * $number_2;
    // $resultat = $nombre_1 * $number_2;
    //return ($resultat);
}

var $resultat = multiply(2, 3);
var qualif = ['éléve', 'professeur'];
qualif.forEach((value, index ) => {
    let b_option = document.createElement('option');
    b_option.setAttribute('value', value)
    b_option.innerHTML = value

    document.getElementById('person_type').appendChild(b_option)
})