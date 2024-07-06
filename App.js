const heading = React.createElement("h1", {id:"heading", xyz: "abc"}, "Hello World from React!");

console.log(heading);
//here h1 tag is an obj,
// createElement has -> type , props(atrributes & children)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);