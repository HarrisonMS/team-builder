import React, { useState } from "react";

const MembersForm = props => {

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""

    });
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.valu});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", emal: "", role: ""})
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input
                name="name"
                id="name"
                type="text"
                placeholder=" Full name here please"
                onChange={changeHandler}
                value= {member.name}
            />
        </form>
    )
}

export default MembersForm;