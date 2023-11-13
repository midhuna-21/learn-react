const heading = React.createElement("div", {id: "parent"}, 
[React.createElement("div",{id: "child"}, 
[React.createElement("h1", {}, "hello"
),React.createElement("h2", {}, "hi goodmorning")])
,
React.createElement("div", {id: "child2"}, 
React.createElement("h3", {} , "ni etha"),
React.createElement("h5",{},"react is what"))
]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)