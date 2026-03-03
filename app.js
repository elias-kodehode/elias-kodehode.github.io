const coffeeList = [
    {
      "title": "Svart kaffe",
      "description": "Veldig god svart kaffe",
      "price": "40,-"
    },
    {
      "title": "Cappucino",
      "description": "Veldig god cappucino",
      "price": "49,-"
    },
    {
      "title": "Espresso",
      "description": "Veldig god Espresso",
      "price": "45,-"
    },
    {
      "title": "Mocha",
      "description": "Veldig god Mocha",
      "price": "45,-"
    },
    {
        "title": "Macchiato",
        "description": "Veldig god Macchiato",
        "price": "49,-"
    },
    {
        "title": "Americano",
        "description": "Veldig god Americano",
        "price": "49,-"
    },
    {
        "title": "Kaffe Latte",
        "description": "Veldig god Kaffe Latte",
        "price": "49,-"
    }
];

const breakfastList = [
    {
        "title": "Croissant",
        "description": "Veldig god Corssaint",
        "price": "49,-"
    },
    {
        "title": "Sandwich",
        "description": "Veldig god sandwich",
        "price": "79,-"
    },
    {
        "title": "Scones",
        "description": "Veldig god Scones",
        "price": "29,-"
    },
    {
        "title": "Skolebrød",
        "description": "Veldig god Skolebrød",
        "price": "40,-"
    }
];

const validateJson = true;
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if("content" in document.createElement("template")){

    try{
        instantiateTemplate("#kaffe", coffeeList);
        instantiateTemplate("#frokost", breakfastList)
    }catch(error){
        console.error(error);
    }

}



function instantiateTemplate(parentQuery, list){
    //parent
    var parent = document.querySelector(parentQuery);
    //template to be copied
    var template = document.querySelector("#menu-item-template");
    for (let i = 0; i < list.length; i++) {

        //Instance of template
        var clone = document.importNode(template.content, true);

        var header = clone.querySelector(".menu-item-name");
        var price = clone.querySelector(".pris")
        var description = clone.querySelector(".beskrivelse");

        if(validateJson){
            
            if(list[i].title == null || ""){
                throw new Error(`Missing title`);
            }

            if(list[i].description == null || ""){
                throw new Error("Missing description");
            }

            if(list[i].price == null || ""){
                throw new Error("Missing price");
            }
        }


        header.textContent = list[i].title;
        price.textContent = list[i].price;
        description.textContent = list[i].description;
        parent.appendChild(clone);
    }

}
