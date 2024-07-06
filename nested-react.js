/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2> 
 *      </div>
 *      <div id="child2">
 *          <h1></h1>
 *          <h2></h2> 
 *      </div>
 * </div>
 * ReactElement(Object)=> HTML(Browser Understands)
  */

const heading = React.createElement("div",{id:"parent"},[
        React.createElement("div", {id:"child"},[
            React.createElement("h1", {}, "Hello world React from h1 tag!"),
            React.createElement("h2", {}, "Hello world React from h2 tag!")
        ]),

        React.createElement("div", {id:"child2"},[
            React.createElement("h2", {}, "Hello world React from h1 tag! child2"),
            React.createElement("h2", {}, "Hello world React from h2 tag! child2")
        ]),
    ]
);


//JSX



console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
