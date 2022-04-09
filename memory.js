
var cards= ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png", "9.png","6.png","5.png","4.png","2.png","3.png","9.png","8.png","7.png","1.png"];

shuffle(cards);


var c0=document.getElementById('c0');
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
var c4=document.getElementById('c4');
var c5=document.getElementById('c5');
var c6=document.getElementById('c6');

var c7=document.getElementById('c7');
var c8=document.getElementById('c8');
var c9=document.getElementById('c9');
var c10=document.getElementById('c10');
var c11=document.getElementById('c11');
var c12=document.getElementById('c12');

var c13=document.getElementById('c13');
var c14=document.getElementById('c14');
var c15=document.getElementById('c15');
var c16=document.getElementById('c16');
var c17=document.getElementById('c17');



c0.addEventListener("click", ()=>{decouvrirCarte(0);});
c1.addEventListener("click", ()=>{decouvrirCarte(1);});
c2.addEventListener("click", ()=>{decouvrirCarte(2);});
c3.addEventListener("click", ()=>{decouvrirCarte(3);});
c4.addEventListener("click", ()=>{decouvrirCarte(4);});

c5.addEventListener("click", ()=>{decouvrirCarte(5);});
c6.addEventListener("click", ()=>{decouvrirCarte(6);});
c7.addEventListener("click", ()=>{decouvrirCarte(7);});
c8.addEventListener("click", ()=>{decouvrirCarte(8);});

c9.addEventListener("click", ()=>{decouvrirCarte(9);});
c10.addEventListener("click", ()=>{decouvrirCarte(10);});
c11.addEventListener("click", ()=>{decouvrirCarte(11);});
c12.addEventListener("click", ()=>{decouvrirCarte(12);});
c13.addEventListener("click", ()=>{decouvrirCarte(13);});
c14.addEventListener("click", ()=>{decouvrirCarte(14);});

c15.addEventListener("click", ()=>{decouvrirCarte(15);});
c16.addEventListener("click", ()=>{decouvrirCarte(16);});
c17.addEventListener("click", ()=>{decouvrirCarte(17);});

var uneVisible = false; 
var compteurTours=0;
var visible_nr;
var blockerCarte = false;
var pairesRestantes=9;



function decouvrirCarte(nr){
    var opacityValue= $('#c' + nr).css('opacity')

    if(opacityValue !=0 && blockerCarte==false && visible_nr!==nr){

        blockerCarte = true;


        var image= "url(img/" + cards[nr] + ")";
        $('#c'+nr).css('background-image', image);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
    
            if(uneVisible == false){
        
                uneVisible = true;
                visible_nr = nr;
                blockerCarte=false;

        
            }else{
    
                    if(cards[visible_nr]==cards[nr])
                    {
                        setTimeout(()=>{cacheCarte(nr, visible_nr)  },750 );
            
                    
                    
                    }else{
                    
                        setTimeout(()=>{recouvrirCartes(nr, visible_nr)  },1000 );
                        
                    }
            
                compteurTours++;
                $('.score').html('Compteur des tours: ' +compteurTours );
                uneVisible = false;
            
                }
            
    
    
    
        }


    }

    function ChangeImageOrder() {
        var temp = cards;
      
        while(temp.length > 0) 
            var x = Math.floor(temp.length * Math.random())
     
            delete temp[x];
        }

   

function cacheCarte (nr1, nr2){

    $('#c' + nr1).css('opacity', '0');
    $('#c' + nr2).css('opacity', '0');
    pairesRestantes--;
    console.log(pairesRestantes);


    if(pairesRestantes ==0){
        $('.board').html('<h2> Bravo ! <br> Tu as gagné <br> en ' + compteurTours+ ' tours <h2>')
        $('h1').css('font-size', '100px');
        $('.titre').css('visibility', 'hidden')
    }
    blockerCarte=false
}

function recouvrirCartes(nr1, nr2){
    $('#c'+nr1).css('background-image', 'url(img/karta.png)');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');

    $('#c'+nr2).css('background-image', 'url(img/karta.png)');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');

    blockerCarte=false;
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
