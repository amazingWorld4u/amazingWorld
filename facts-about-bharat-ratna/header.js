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
function responsive(){
    if(window.innerWidth > 200){
document.getElementById("header").style = "text-align :center; padding : 5vw; background-color : rgba(126, 119, 146, 0.377); margin : 0px; position : relative;";
       //title
        let header = document.getElementById('header');
        let elements = [
                {
                "element":"div",
                "textNode":"",
                "attr":{
                    "style":"",
                    "class":"",
                },
                "childs":[
                    {
                        "element":"h1",
                        "textNode":"",
                        "attr":{
                            "style":"color : white;font-family: verdana;font-size:10vmin"
                        },
                        "childs":[
                            {
                                "element":"a",
                                "textNode":"AMAZING WORLD",
                                "attr":{
                                    "style":"text-decoration : none; color:white",
                                    "href":"/"
                                },
                                "childs":[]
                            }
                        ]
                    },
                    {
                        "element":"ul",
                        "textNode":"",
                        "attr":{
                            "style":"list-style-type : none; text-align : left;display : inline"
                        },
                        "childs":[
                            {
                                "element":"li",
                                "textNode":"",
                                "attr":{
                                    "style":" display : inline;margin:10px"
                                },
                                "childs":[
                                    {
                                        "element":"a",
                                        "textNode":"Home",
                                        "attr":{
                                            "style":"text-decoration :none;color : white;padding : 2vmin;font-weight : bolder;border : 1px dotted white",
                                            "href":"/"
                                        },
                                        "childs":[]
                                    }
                                ]
                            },
                            {
                                "element":"li",
                                "textNode":"",
                                "attr":{
                                    "style":"display : inline;"
                                },
                                "childs":[
                                    {
                                        "element":"a",
                                        "textNode":"Download My App",
                                        "attr":{
                                            "style":"text-decoration :none;color : white;padding : 2vmin;font-weight : bolder;border : 1px dotted white",
                                            "href":"https://play.google.com/store/apps/details?id=com.quotesproject"
                                        },
                                        "childs":[]
                                    }
                                ]
                            }
                        ]
                    },

                ]
            }
        ]
        decorator(elements,header);
    }
    /*
    else{
        let container = document.getElementById('header');
        container.style = "padding : 10px"
        let elements = [
            {
                "element":"div",
                "textNode":"",
                "attr":{
                    "style":"background-color :gray; position : relative;"
                },
                "childs":[
                    {
                        "element":"h1",
                        "textNode":"AmazingWorld",
                        "attr":{
                            "style":"color : blue; padding-top : 30px; display : inline"
                        },
                        "childs":[]
                    },
                    {
                        "element":"span",
                        "textNode":"Menu",
                        "attr":{
                            "style":""
                        },
                        "childs":[]
                    },
                    {
                        "element":"div",
                        "textNode":"",
                        "attr":{
                            "style" : "display : none"
                        },
                        "childs":[
                            {
                                "element":"p",
                                "textNode":"Downlaod My App",
                                "attr":"",
                                "childs":[]
                            },
                            {
                                "element":"p",
                                "textNode":"Home",
                                "attr":"",
                                "childs":[]
                            }
                        ]
                    }
                ]
            }
        ]
        decorator(elements,container);
    }*/
}

responsive();
  
