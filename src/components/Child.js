import React from "react"

const Child = ({handleClick}) => {
    console.log("child rendered")
    return(
        <div>
            Child
        </div>
    )
}

export default ChildMemo = React.memo(Child);