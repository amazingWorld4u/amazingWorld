
function body(){
    if(window.innerWidth > 900){
        let mainElement = document.getElementById("body");
        
        let elements = [
            {
                "element":"div",
                "textNode":"",
                "attr":{
                    "style":"padding : 50px;border-top : 1px solid gray;font-family : verdana"
                },
                "childs":[
                    {
                        "element":"h1",
                        "textNode":"",
                        "attr":{},
                        "childs":[
                            {
                                "element":"a",
                                "class":"",
                                "id":"",
                                "textNode":"The Facts You Should Know About Bharat Ratna",
                                "href":"/",
                                "attr":{
                                "style":"text-decoration:none; color : rgba(84, 147, 150)",
                                },
                                "childs":[]
                            }
                        ]
                    }
                    ]
            },
            {
                "element":"div",
                "class":"st",
                "id":"",
                "textNode":"",
                "attr":{
                "style":"display : flex; flex-drection : row",
                },
                "childs":[
                    {
                        "element":"div",
                        "class":"",
                        "id":"",
                        "textNode":"",
                        "href":"",
                        "attr":{
                        "style":"flex : 0.3",
                        },
                        "childs":[]
                    },
                    {
                        "element":"div",
                        "class":"",
                        "id":"",
                        "textNode":"",
                        "href":"",
                        "attr":{
                        "style":"flex : 1;font-size : 20px;font-family : Quicksand; font-weight :light; padding : 30px;line-height : 1.5",
                        },
                        "childs":[
                            {
                                "element":"p",
                                "style":"",
                                "class":"",
                                "id":"",
                                "textNode":`Bharat Ratna is the highest civilian award of the Republic of India which was instituted in 1954.
                                The award is given in the recognition of exceptional service of the higher order without distinction of race, 
                                occupation, position or sex,`,
                                "href":"",
                                "attr":{},
                                "childs":[]
                            },
                            {
                                "element":"h2",
                                "style":"",
                                "class":"",
                                "id":"",
                                "textNode":"Key Points",
                                "href":"",
                                "attr":{},
                                "childs":[]
                            },
                            {
                                "element":"ul",
                                "class":"",
                                "id":"",
                                "textNode":"",
                                "href":"",
                                "attr":{
                                "style":"font-size:18px",
                                },
                                "childs":[
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"The first recipients of the Bharat Ratna were politician C. Rajagopalachari, Sarvepalli Radhakrishnan and Dr. C.V Raman honoured in 1954.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Lal Bahadur Shashtri was the first individual to be awarded with award posthumously.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"In 2014, Sachin Tendulkar became the youngest(at age of 40) and the first recepient of Bharat Ratna in the field of Sports.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Bharat Ratna has been awarded to two non-Indians Pakistan’s Abdul Ghaffar Khan and former South African President Nelson Mandela.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"The award was originally confined in the field of Art , Literature, Science and Public Interest as per 1954 regulations.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"In 2011, some amendments were made, and the scope was changed to include “any field of human endeavour”.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"The Recommendations for the awards can only be made by the Prime Minister to the President.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Only three nominees can be awarded in a year.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"In 1999, for the first time four individuals were awarded with Bharat Ratna.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Recipient cannot use the award as a prefix or suffix to their name.",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Bharat Ratna medals are produced at Aliport Mint, Kolkata along with other Civilian and Military awards. ",
                                        "href":"",
                                        "attr":{},
                                        "childs":[]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "element":"div",
                        "class":"",
                        "id":"",
                        "textNode":"",
                        "href":"",
                        "attr":{
                        "style":"flex : 0.5",
                        },
                        "childs":[
                            
                        ]
                    }
                ]
            }
        ]
        function decorator(data,parent){
            data.forEach((elem)=>{
                let topElement = document.createElement(elem.element);//element created for top level
                
                topElement.innerHTML = elem.textNode;
                setAttribute(topElement,elem.attr);
                parent.appendChild(topElement);
                
                if(elem.childs.length > 0){
                    console.log("hello");
                    decorator(elem.childs,topElement)
                }
                
            });
        }
        function setAttribute(el,attrs){
            for(let key in attrs){
                el.setAttribute(key,attrs[key])
            }
        }
        decorator(elements,mainElement);
        //document.getElementsByClassName('st')[0].style.backgroundColor = 'white';
    }
    else{
        let mainElement = document.getElementById("body");
        let elements = [
            {
                "element":"div",
                "style":"color : red; padding : 10px;border-top : 1px solid gray;font-family : verdana",
                "class":"",
                "id":"",
                "textNode":"",
                "href":"",
                "childs":[
                    {
                        "element":"h1",
                        "style":"",
                        "class":"",
                        "id":"",
                        "textNode":"",
                        "href":"",
                        "childs":[
                            {
                                "element":"a",
                                "style":"text-decoration:none; color : rgba(84, 147, 150)",
                                "class":"",
                                "id":"",
                                "textNode":"The Facts You Should Know About Bharat Ratna",
                                "href":"/",
                                "childs":[]
                            }
                        ]
                    }
                    ]
            },
            {
                "element":"div",
                "style":"",
                "class":"st",
                "id":"",
                "textNode":"",
                "childs":[
                    {
                        "element":"div",
                        "style":"font-size : 18px;font-family : Quicksand; font-weight : 400; padding : 10px;line-height : 1.5",
                        "class":"",
                        "id":"",
                        "textNode":"",
                        "href":"",
                        "childs":[
                            {
                                "element":"p",
                                "style":"",
                                "class":"",
                                "id":"",
                                "textNode":`Bharat Ratna is the highest civilian award of the Republic of India which was instituted in 1954.
                                The award is given in the recognition of exceptional service of the higher order without distinction of race, 
                                occupation, position or sex,`,
                                "href":"",
                                "childs":[]
                            },
                            {
                                "element":"h2",
                                "style":"",
                                "class":"",
                                "id":"",
                                "textNode":"Key Points",
                                "href":"",
                                "childs":[]
                            },
                            {
                                "element":"ul",
                                "style":"font-size:18px",
                                "class":"",
                                "id":"",
                                "textNode":"",
                                "href":"",
                                "childs":[
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"The first recipients of the Bharat Ratna were politician C. Rajagopalachari, Sarvepalli Radhakrishnan and Dr. C.V Raman honoured in 1954.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Lal Bahadur Shashtri was the first individual to be awarded with award posthumously.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"In 2014, Sachin Tendulkar became the youngest(at age of 40) and the first recepient of Bharat Ratna in the field of Sports.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Bharat Ratna has been awarded to two non-Indians Pakistan’s Abdul Ghaffar Khan and former South African President Nelson Mandela.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"The award was originally confined in the field of Art , Literature, Science and Public Interest as per 1954 regulations.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"In 2011, some amendments were made, and the scope was changed to include “any field of human endeavour”.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"The Recommendations for the awards can only be made by the Prime Minister to the President.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Only three nominees can be awarded in a year.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"In 1999, for the first time four individuals were awarded with Bharat Ratna.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Recipient cannot use the award as a prefix or suffix to their name.",
                                        "href":"",
                                        "childs":[]
                                    },
                                    {
                                        "element":"li",
                                        "style":"",
                                        "class":"",
                                        "id":"",
                                        "textNode":"Bharat Ratna medals are produced at Aliport Mint, Kolkata along with other Civilian and Military awards. ",
                                        "href":"",
                                        "childs":[]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "element":"div",
                        "style":"",
                        "class":"",
                        "id":"",
                        "textNode":"",
                        "href":"",
                        "childs":[]
                    }
                ]
            }
        ]
        function decorator(data,parent){
            data.forEach((elem)=>{
                let topElement = document.createElement(elem.element);//element created for top level
                topElement.style = elem.style;//style setting
                topElement.className = elem.class;
                topElement.id = elem.id;
                topElement.innerHTML = elem.textNode;
                parent.appendChild(topElement);
                if(elem.element == 'a'){
                    topElement.setAttribute("href",elem.href);
                }
                if(elem.childs.length > 0){
                    console.log("hello");
                    decorator(elem.childs,topElement)
                }
                
            });
        }
        decorator(elements,mainElement);
    }
}

body();


/*
[
    {
        "element":"",
        "style":"",
        "class":"",
        "id":"",
        "textNode":"",
        "href":"",
        "childs":[]
    }
]
*/
let ab = [
    {
        "width":  "300",
        "height":""
    }
]
function decorator(data,parent){
    data.forEach((elem)=>{
        let topElement = document.createElement(elem.element);//element created for top level
        topElement.style = elem.style;//style setting
        topElement.className = elem.class;
        topElement.id = elem.id;
        topElement.innerHTML = elem.textNode;
        parent.appendChild(topElement);
        if(elem.element == 'a'){
            topElement.setAttribute("href",elem.href);
        }
        if(elem.element == "img"){
            topElement.setAttribute("src",elem.src);
        }
        if(elem.childs.length > 0){
            console.log("hello");
            decorator(elem.childs,topElement)
        }
        
    });
}
