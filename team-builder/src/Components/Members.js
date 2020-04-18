import React from "react";

const Members = props => {
return (
    <div>
    <h2>{props.member.name}</h2>
    <p>{props.member.email}</p>
    <p>{props.member.role}</p>
    </div>
    );
};
export default Members;