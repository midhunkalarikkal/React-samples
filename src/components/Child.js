import React from "react"

const Child = () => {
    console.log("child rendered")
    return(
        <div>
            Child
        </div>
    )
}

export default ChildMemo = React.memo(Child);