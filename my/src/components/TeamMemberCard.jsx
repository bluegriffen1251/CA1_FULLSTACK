import { useState} from "react";

function TeamMemeberCard () {
    const [TeamMember,JobTitle] = useState([])
    return(
        <>
        <div>
            <h2>Team Members</h2>
            <div className="Id:1">
                <h3>Team Member 1 : John Doe</h3>
                <h3>Job Title:Software Engineer</h3>
            </div>
        </div>
        <div>
          
            <div className="Id:2">
                <h3>Team Member 2 : Jagath</h3>
                <h3>Job Title:Software Engineer</h3>
            </div>
        </div>
        </>
    )

}
export default TeamMemeberCard;
