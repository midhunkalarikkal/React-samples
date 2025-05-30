//   Old version start \\

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
const Heading = function () {
  return <h1>This is the functional component using noraml function</h1>;
};

// type 2 using return and curly
const HeadingOne = () => {
  return <h1>This is functional component using return and curly brace</h1>;
};

// type 3 without return and curly
const HeadingTwo = () => (
  <h1>This is functional component without using return and curly brace</h1>
);

// type 4 without return and curly wrapped in a parenthesis
const HeadingThree = () => (
  <div>
    {Heading()}
    <HeadingOne></HeadingOne>
    <HeadingTwo />
    <h1>
      This is functional component without using return and curly brace but wrap
      in a parenthesis
    </h1>
  </div>
);
//   Old version end \\












import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./src/components/Main/Navbar";
import Body from "./src/components/Main/Body";

import { Counter } from "./src/components/Counter";
import Lazy from "./src/components/Lazy";
import UserContext from "./src/utils/UserContext";
import UseMemo from "./src/components/UseMemo";
import UseReducer from "./src/components/UseReducer";
import UseCallback from "./src/components/UseCallback";
import StateLifting from "./src/components/StateLifting";
import PropsLifting from "./src/components/PropsLifting";
import Test from "./src/components/Test";
import ForwardRef from "./src/components/ForwardRef";

const Sample = lazy(() => import("./src/components/Sample"))
const AppBody = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {

  }, []);

  return (
    <UserContext.Provider value={{
      userName,
      setUserName
    }}>
      <section className="AppBody">
        <Navbar />
        <Body />
      </section>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppBody />,
    children: [
      {
        path: "/lazy",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Lazy />
          </Suspense>
        ),
      },
      {
        path: '/counter',
        element: <Counter />
      },
      {
        path: "/useMemo",
        element: <UseMemo />,
      },
      {
        path: "/useCallback",
        element: <UseCallback />
        
      },
      {
        path: "/useReducer",
        element: <UseReducer />,
      },
      {
        path: "/stateLifting",
        element: <StateLifting />,
      },
      {
        path: "/propsLifting",
        element: <PropsLifting />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/forwardRef",
        element: <ForwardRef />
      },{
        path : "/sample/:id",
        element : <Suspense fallback={<h1>Loading</h1>}>
          <Sample />
        </Suspense>
      }
    ],
  },
]);

/// Creating the root \\\
const root = ReactDOM.createRoot(document.getElementById("root"));

// jsx element rendering
root.render(jsxHeading);

// functional component rendering
root.render(<RouterProvider router={appRouter} />);
