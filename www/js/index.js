
//nån tröck på knappen
//om det finns text i input så postar den

var value = document.getElementById('item').value;


var items = [];
var klarkoll = [];


var storeditems = JSON.parse(localStorage.getItem("storeditems"));
var storedklarkoll = JSON.parse(localStorage.getItem("storedklarkoll"));

console.log(storeditems);

console.log(items);


//bygger element som redan finns i items

var  count = 0;

for(item in storeditems){


    additem(storeditems[count]);
    count += 1;

};



document.getElementById('knapp').addEventListener('click', function() {
    var value = document.getElementById('item').value;

    if (value){
        
        additem(value);
        document.getElementById('item').value = '';

    }
    else{

        console.log('Tjosan grabben! Du skrev inget!');

    };
    

});


function additem(text){
    
    //det här säger att item's text kommer
    //kommer vara det i () efter funktion-namnet

    var tabortknapp = document.createElement("button");
    tabortknapp.setAttribute('id','tabortknapp')
    
    var klarknapp = document.createElement("button");
    klarknapp.setAttribute('id','klarknapp')


    //list är en ul i html filen som heter todo
    var todo = document.getElementById('todo');
    var done = document.getElementById('done');

    //här skapar jag en li med som kallas iten
    var item = document.createElement("li");
    item.innerText = text;

    //det här gör att item är en del av list
    todo.appendChild(item);
    item.appendChild(tabortknapp);
    item.appendChild(klarknapp);

    items.push(text);
    klarkoll.push("i");
    console.log(items);
    localStorage.clear;
    localStorage.setItem("storeditems", JSON.stringify(items));
    localStorage.setItem("storedklarkoll", JSON.stringify(klarkoll));

    console.log(items.length);


    //en funktion som tar bort ett element
    tabortknapp.addEventListener("click", function() {

        item.removeChild(tabortknapp);
        item.removeChild(klarknapp);
        
        if(item.parentElement == todo){
           todo.removeChild(item); 
        }
        else{
            done.removeChild(item);
        }

        var index = items.indexOf(text);
        if (index > -1) {
            items.splice(index, 1);
            klarkoll.splice(index, 1);
        }

        console.log(items);
        console.log(storeditems);
        localStorage.clear;
        localStorage.setItem("storeditems", JSON.stringify(items));
        localStorage.setItem("storedklarkoll", JSON.stringify(klarkoll));

    });

    if(count < storeditems.length){

        if(storedklarkoll[count] == "k"){

            console.log('ajamensan');
            done.appendChild(item);
            var index = items.indexOf(text);
            if (index > -1) {
            klarkoll[index] = "k";
            };
            localStorage.clear;
            localStorage.setItem("storeditems", JSON.stringify(items));
            localStorage.setItem("storedklarkoll", JSON.stringify(klarkoll));
            console.log(klarkoll);
            console.log(storedklarkoll);

        };
    };

    //flyttar ett element till completed tasks
    klarknapp.addEventListener("click", function complete() {

        done.appendChild(item);

        var index = items.indexOf(text);
        if (index > -1) {
            klarkoll[index] = "k";
        };

        console.log(klarkoll);
        localStorage.clear;
        localStorage.setItem("storeditems", JSON.stringify(items));
        localStorage.setItem("storedklarkoll", JSON.stringify(klarkoll));


    
    });

}



