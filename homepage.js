

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            width : window.outerWidth
        })
    }
    render(){
        if(this.state.width >900){
        return (
        React.createElement('div',
        {style :{display : 'flex', flexDirection : 'row',paddingTop : 10,backgroundColor : 'white', marginLeft : 30, marginRight : 30, marginBottom : 30}},
        React.createElement('div',{style : { backgroundColor : '', width : 70+'%', margin : 'auto'}},
        React.createElement('h1',
        {style : {fontFamily : 'monospace', textAlign : 'left', fontSize : 40, width : 80+'%', margin : 'auto'}},
        `Humans use only 10 percent of their brain. Is this a myth or reality?`
        ),
        React.createElement('div',{style : {lineHeight : 1.6, color : 'rgb(30, 31, 31)',fontFamily : 'Roboto', width : 65+'%', margin : 'auto', fontSize : 18}},
        React.createElement('p',{style : {padding : 20}},
        `Today we will talk about the topic about which everyone have heard at lot through their friends, teachers, 
        motivational speaker etc. You must have heard that humans only use their 10 percent of the brain and if you 
        could unlock the rest of your brainpower, you could do so much more. You could become a super genius and do 
        some exceptional things like mind reading and all. Lets talk about this in details.`
        ),
        React.createElement('p',{style : {padding : 20}},
        `The human brain is very complex and still very mysterious and this could be the reason for so many myths about 
        brain persists. The most common myth is that the human only utilize their 10 percent of the brain power. This myth
         often used to speculate about the extent of the human abilities if we could use full capacity of our brain. Brain 
         scientists have shown that there is no part of the brain which is inactive. Each part of brain get engaged when 
         doing any work. No part seems inactive.`
         ),
        React.createElement('p',{style : {padding : 20}},
        `People often experience the shortcomings of their own mental abilities such as failing to understand a complex 
        math problem or forgetting some vital piece of information. Well intentioned peoples such as motivational speakers 
        and teachers often uses this myth as to demonstrate peoples to live up to their potential. But some peoples have 
        taken this as the reality. Some uses it as their weapon for their product selling or promoting their products and 
        claims that using their product unlock your 90 percent of the brain.`
        ),
        React.createElement('p',{style : {padding : 20}},
        `At last I just want you spread this message and tell others about this. Human uses their 100 percent of the brain 
        until and unless their brain is damaged. So it is our responsibility to stop spreading such myths. If anyone talks 
        about such a myth then, you would have an answer for them.`
        )
        )
        ),
        React.createElement('div',{style : {width:30+'%', backgroundColor : 'white', padding : 10, borderRadius : 10}},
        React.createElement('img',{src : './assets/images/todayQuotes1.png', style : {width : 350, height : 500, position : 'absolute', top : 500, borderRadius : 20 }},null))
        )
        )
        }
        else{
            return(
        React.createElement('div',{style : { backgroundColor : 'white', padding : 0, marginTop : 0}},
        React.createElement('h1',
        {style : {fontFamily : 'monospace', textAlign : 'left', padding : 10}},
        `Humans use only 10 percent of their brain. Is this a myth or reality?`
        ),
        React.createElement('div',{style : {lineHeight : 1.5, color : 'black', fontFamily : 'Roboto', margin : 0, fontSize : 16}},
        React.createElement('p',{style : {padding : 20}},
        `Today we will talk about the topic about which everyone have heard at lot through their friends, teachers, 
        motivational speaker etc. You must have heard that humans only use their 10 percent of the brain and if you 
        could unlock the rest of your brainpower, you could do so much more. You could become a super genius and do 
        some exceptional things like mind reading and all. Lets talk about this in details.`
        ),
        React.createElement('p',{style : {padding : 20}},
        `The human brain is very complex and still very mysterious and this could be the reason for so many myths about 
        brain persists. The most common myth is that the human only utilize their 10 percent of the brain power. This myth
         often used to speculate about the extent of the human abilities if we could use full capacity of our brain. Brain 
         scientists have shown that there is no part of the brain which is inactive. Each part of brain get engaged when 
         doing any work. No part seems inactive.`
         ),
        React.createElement('p',{style : {padding : 20}},
        `People often experience the shortcomings of their own mental abilities such as failing to understand a complex 
        math problem or forgetting some vital piece of information. Well intentioned peoples such as motivational speakers 
        and teachers often uses this myth as to demonstrate peoples to live up to their potential. But some peoples have 
        taken this as the reality. Some uses it as their weapon for their product selling or promoting their products and 
        claims that using their product unlock your 90 percent of the brain.`
        ),
        React.createElement('p',{style : {padding : 20}},
        `At last I just want you spread this message and tell others about this. Human uses their 100 percent of the brain 
        until and unless their brain is damaged. So it is our responsibility to stop spreading such myths. If anyone talks 
        about such a myth then, you would have an answer for them.`
        )
        )
        )
            )
            }
        }
    }

/*let obj = {
    heading : {
        element : 'h1',
        s : {backgroundColor : 'red'},
        data : 'Hello Bhati ji'
    },

}

class Name extends React.Component{
    render(){
        return React.createElement(obj.heading.element,{style : obj.heading.s},obj.heading.data);
    }
}*/
ReactDOM.render(React.createElement(Main),document.getElementById('main'));
