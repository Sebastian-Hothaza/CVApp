import PerInfo from "./perInfo"
import EduInfo from "./eduInfo"
import ExpInfo from "./expInfo"

function UserInfo(){
    return(
        <div className="userInfo">
        <PerInfo/>
        <EduInfo/>
        <ExpInfo/>
        </div>
    )
}

export default UserInfo