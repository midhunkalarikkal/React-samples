import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Input = () => {

    const { userName ,setUserInfo} = useContext(UserContext)
    return(
        <div className="name-div">
            <input className="name-input" type="text" value={userName} placeholder="Enter a name" onChange={(e) => {
                setUserInfo(e.target.value)
            }}/>
            <button className="name-btn">Submit name</button>
        </div>
    )
}

export default Input;