import React, { useState } from "react";

const MembersForm = props => {

    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""

    });
    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: ""})
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
            <label for="email"> Email: </label>
            <input
                name="email"
                id="email"
                type="email"
                placeholder="@email"
                onChange={changeHandler}
                value= {member.email}
            />
            <label for="name"> Role: </label>
            <input
                name="role"
                id="role"
                type="text"
                placeholder="Whats your role"
                onChange={changeHandler}
                value= {member.role}
            />
            <button type = "submit"> Submit </button>
        </form>
    )
}

export default MembersForm;