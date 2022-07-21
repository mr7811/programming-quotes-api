import {NavLink} from 'react-router-dom'

import React from 'react'

function Nav() {
return (

    <nav>
<div>

 <NavLink to= "/">Home </NavLink>   
<div>
<NavLink to= "/quotes">Home All quotes</NavLink>
<NavLink to= "/add-quotes">Add Quote </NavLink>
</div>

</div>

    </nav>


    )

}
export default Nav;