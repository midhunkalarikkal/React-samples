import {React , useState} from 'react'
import ReactDOM from 'react-dom/client'
import { Counter } from './src/components/Counter'
import { UserDetails } from './src/components/UserDetails'
import { CounterTwo} from './src/components/CounterTwo'
import {createBrowserRouter , RouterProvider, Outlet , Link} from 'react-router-dom';

import FirstClass from './src/components/FirstClass';
import SecondClass from './src/components/SecondClass';
import ThirdClass from './src/components/ThirdClass';

// Sample heading
// const heading = React.createElement("h1", {id : "heading"}, "Hello world from React!")


// Sample react.createElement
/*
<div id="parent1">
<div id="child2">
<h1>Hi iam the H1 tag</h1>
<h2>Hi iam the H2 tag</h2>
</div>
</div>
*/

// const parent = React.createElement("div", { id : "Parent" },
//     React.createElement("div",{ id : "child1"},
//         React.createElement("h1",{},"Hi iam the H1 tag"),
//     )
// )

// Sample react.createElement with nested elements with array
/*
    <div id="parent1">
        <div id="child2">
            <h1>Hi iam the H1 tag</h1>
            <h2>Hi iam the H2 tag</h2>
        </div>
        <div id="child2">
            <h1>Hi iam the H1 tag</h1>
            <h2>Hi iam the H2 tag</h2>
        </div>
    </div>
*/

// const parentTwo = React.createElement("div",{ id:"parentTwo"},
//     [
//         React.createElement("div",{ id:"p2child1"},
//         [
//             React.createElement("h1",{},"Hi iam the h1 tag"),
//             React.createElement("h2",{},"Hi iam the h2 tag")
//         ]
//     ),React.createElement("div",{ id:"p2child2"},[
//         React.createElement("h1",{},"Hi iam the h1 tag"),
//         React.createElement("h2",{},"Hi iam the h2 tag")
//     ])]
// )



// Using jsx instead of Core react
const jsxHeading = <h1>Hi this is Midhun K Paniker</h1>;

/// Functional component \\\
// type 1 using normal function
const Heading = function(){
    return(
        <h1>This is the functional component using noraml function</h1>
    )
}

// type 2 using return and curly
const HeadingOne = () => {
    return <h1>This is functional component using return and curly brace</h1>
}

// type 3 without return and curly
const HeadingTwo = () => <h1>This is functional component without using return and curly brace</h1>;

// type 4 without return and curly wrapped in a parenthesis
const HeadingThree = () => (
    <div>
        {Heading()}
        <HeadingOne></HeadingOne>
        <HeadingTwo/>
        <h1>This is functional component without using return and curly brace but wrap in a parenthesis</h1>
    </div>
);

// `Header Component` from scratch using `Functional Component` with JSX
// - Add a `Logo on Left`
// - Add a `search bar in middle`
// - Add `User icon on right`
// - Add `CSS to make it look nice`

//sample css object
const navbarBackgroundColor = {
    backgroundColor: "#2c3e50"
}

const Navbar = () => {
    return (
        <nav className="navbar" style={navbarBackgroundColor}>
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBhwWT_lkLxqE389PVpukWurM-fT4vMdqBA&s" alt="No image" className="image"/>
            </div>
            <div className="searchBar" style={{ backgroundColor: "#2c3e50"}}>
                <input type="text" className="input"/>
                <button className="button">Search</button>
            </div>
            <div className="userIcon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQHstFutlfl8tgZAtY8nDWucSWEvFM5AETQ&s" alt="" className="userIcon"/>
            </div>
            <div>
                <Link to="/nextpage">Next Page</Link>
            </div>
            <div>
                <Link to='/classcom'>Class Component</Link>
            </div>
        </nav>
    )
}

const users = [
    { id: 1, name: "Alice", emailId: "alice@example.com" },
    { id: 2, name: "Bob", emailId: "bob@example.com" },
    { id: 3, name: "Charlie", emailId: "charlie@example.com" },
    { id: 4, name: "David", emailId: "david@example.com" }
];

const DetailBox = ({userData}) => {
    const {name , emailId} = userData;
    return(
        <div className="profile_card">
            <h1>{name}</h1>
            <p>{emailId}</p>
        </div>
    )
}


const AppBody = () => {
    return (
        <section className="AppBody">
            <Navbar/>
            <div className="detailBox-container">
                <h3>User details</h3>
                {
                users.map((user) =>(
                    <DetailBox key={user.id} userData = {user}/>
                ))
                }
            </div>
            <Counter />
            <Outlet />
        </section>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppBody />,
        children : [
            {
                path : '/nextpage',
                element :  <UserDetails />
            },
            {
                path : '/classcom',
                element : <FirstClass name={"First"}/>
            }
        ]
    }
])


/// Creating the root \\\
const root = ReactDOM.createRoot(document.getElementById("root"))

///  Rendering the element \\\

// jsx element rendering
root.render(jsxHeading)

// functional component rendering
root.render(<RouterProvider  router={appRouter}/>)

