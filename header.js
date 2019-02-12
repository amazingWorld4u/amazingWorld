class Header extends React.Component {
    constructor(props){
    super(props);
    this.state = ({
        width : window.outerWidth,
        menuVisible : false
    })
    }
    render() {
        if(this.state.width > 900){
        return React.createElement('div',{style :{position : 'relative', padding : 50, backgroundColor : 'white', marginLeft : 30, marginRight : 30, marginTop : 30 }},
        React.createElement('h1',{style : {margin : 0, padding : 50, fontFamily : 'monospace', fontSize : 40, fontWeight : 'bold'}},
        React.createElement('a',{href : "./index.html", style:{textDecoration : 'none', color : 'black'}},
        "amazingWorld")),
        React.createElement('ul',{style : {padding : 100,listStyleType : 'none',display : 'inline', position : 'absolute', top:  0, right : 50, backgroundColor : ''}},
        React.createElement('li',{style : {display : 'inline', backgroundColor : 'black', color : 'white', padding : 10, borderRightColor :'gray', borderRightStyle : 'solid',borderRightWidth : 1 }},
        React.createElement('a',{href : './index.html',style : {color : 'white',textDecoration : 'none', padding : 10, fontWeight : 'bold'}},'Home')),
        React.createElement('li',{style : {display : 'inline', backgroundColor : 'black',color : 'white', padding : 10, fontWeight:'bold'}},
        React.createElement('a',{href : 'https://play.google.com/store/apps/details?id=com.quotesproject', style : {color : 'white',textDecoration : 'none', padding : 10}},'Download My App'))
        ));
    }
    else{
        return(
            React.createElement('div',{style : {backgroundColor : 'white', paddingTop : 30,paddingRight : 30,paddingBottom : 30, marginTop : 5, marginLeft : 5, marginRight : 5}},
            React.createElement('h1',{style : {padding : 0, margin : 0}},`AmazingWorld`),
            React.createElement('div',{style : {position : 'absolute', top :0, right : 0, padding : 45, textDecoration : 'none'}},
            React.createElement('a',{href :'#',style : {padding : 10, backgroundColor : 'black', textDecoration : 'none', color: 'white', fontWeight : 'bold'}, onClick : ()=>{this.setState({menuVisible : !this.state.menuVisible})}},'Menu')),
            this.state.menuVisible ? 
            React.createElement('div',null,
            React.createElement('ul',{style : {listStyleType : 'none'}},
            React.createElement('li',null,React.createElement('a',{href : './index.html',style : { display :'block',textDecoration : 'none', padding : 10, color : 'white', fontWeight : 'bold', backgroundColor : 'black', borderBottomColor : 'gray', borderBottomWidth : 1,borderBottomStyle : 'solid'}},'Home')),
            React.createElement('li',null,React.createElement('a',{href : 'https://play.google.com/store/apps/details?id=com.quotesproject',style : {display : 'block',textDecoration : 'none',padding : 10, color : 'white', fontWeight : 'bold', backgroundColor : 'black'}},'Download Quotes App')))): null)
        )
    }
  }
}
 
ReactDOM.render(React.createElement(Header),document.getElementById('header'));