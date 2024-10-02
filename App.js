
const parent =React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"I am h1 tag"),
            React.createElement("h2",{},"I am h2 tag"),
            React.createElement("h3",{},"I am h3 tag")
        ]
    ))

//catch how to create the parent and child 


const heading = React.createElement("h1",{id: "heading" , xyz:"abc" },"Hello world from React!");// 2nd argument?
     
console.log(parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


