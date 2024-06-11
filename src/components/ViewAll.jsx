import React from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">name</th>
                                    <th scope="col">designation</th>
                                    <th scope="col">salary</th>
                                    <th scope="col">experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>James</td>
                                    <td>Security</td>
                                    <td>5000</td>
                                    <td>3</td>
                                </tr>
                                <tr>

                                    <td>Jacob</td>
                                    <td>manager</td>
                                    <td>6000</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>supplier</td>
                                    <td>7000</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ViewAll