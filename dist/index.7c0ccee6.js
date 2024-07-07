// const topHeading = React.createElement("h1", {id: "heading"}, "Hello from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));  
// root.render(topHeading); 
const parentDiv = React.createElement("div", {
    className: "parentDiv"
}, [
    React.createElement("div", {
        className: "childDiv1"
    }, [
        React.createElement("h1", {}, "H1 tag from childDiv1"),
        React.createElement("h2", {}, "H2 tag from childDiv1")
    ]),
    React.createElement("div", {
        className: "childDiv2"
    }, [
        React.createElement("h1", {}, "H1 tag from childDiv2"),
        React.createElement("h2", {}, "H2 tag from childDiv2")
    ])
]);
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(parentDiv);

//# sourceMappingURL=index.7c0ccee6.js.map
