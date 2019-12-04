import React from "react";
import AddButton from '@comp/AddButton'

const Navbar = ({className}) => {
return (
        <div className={className}>
        <AddButton text='Add movie'/>
        </div>
    ) 
}

export default Navbar;