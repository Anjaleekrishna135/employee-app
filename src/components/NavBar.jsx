import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Employee</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="AddEmployee.jsx">add employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="SearchEmployee.jsx">search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="DeleteEmployee.jsx">delete</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="true">view</a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar