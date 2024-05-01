import React from 'react';
import ReactDOM  from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Routes
} from 'react-router-dom';

class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <body>
            <div class="heading">
                <div class="jumbotron text-center" id="heading">
                    <h1 class="myname">PRAVEEN K</h1>
                    <p class="myoccupation">IT STUDENT</p>
                    <u1 class="nav nav-pills nav-justified" id="navigation">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">
                                Home
                            </a>
                            </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="/contact">
                                Contact
                            </a>
                        </li>
                    </u1>

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src="https://raw.githubusercontent.com/Athiban-32/logo/main/logo.png"
                                class="rounded-circle mx-auto d-block"
                                alt="Hii this is Xcode Emulators"
                                width="140px"
                                height="160px"/>
                            </div>
                            <br />

                        </div>
                        <div class="col-sm-8">
                            <h2 class="myskills">My Skills</h2>
                            <br/>
                            <p class="skills">
                                I am much Interested to learn Cloud computing.I having some Knowledge in AWS and GCP.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2 class="languages">Programming Language</h2>
                            <br/>
                            <u1 class="skills">
                                <li>
                                 HTML,CSS,JavaScript
                                 </li>
                                 <li>
                                    MySql,MongoDB
                                 </li>
                            </u1>
                            </div>
        
                            <div class="col-sem-6">
                                <h2 class="Currently Studying">Currently Studying</h2>
                                <br/>
                                <ul class="study">
                                <li>
                                    I am Currently Studying in Karpagam institute of technology
                                </li>
                                <li>
                                    Devops
                                </li>
                                <li>
                                    Web Development
                                </li>
                                </ul>
                                </div>   
                                <br/>   
                                </div>
                                <div class="col-sem-12">
                                    <h2 class="myskills">My Projects</h2>
                                    <br/>
                                    <table class="table table-dark table-stripped">
                                        <thead>
                                            <tr>
                                                <th>Project Domain</th>
                                                <th>Languages Used</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Drosinesss detection</td>
                                                <td>Python,MongoDB</td>
                                            </tr>
                                            <tr>
                                                <td>IoT device</td>
                                                <td>embedded C</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <a href={"https://github.com/Athiban-32/Conver-Day-to-Night-Image"}></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <a href={"https://github.com/Athiban-32/QRCode"}></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>       
                                    <div class="jumbotron text-center" id="footer">
                                        <u1 class="nav justify-content-center">
                                            <li class="nav-item">
                                                <a href="https://www.linkedin.com/in/praveen-k-2a0b272b3/"
                                                class="fa fa-linkedin nav-link"
                                                style={{color:"blue"}}
                                                />
                                            </li>
                                            <li class="nav-item">
                                                <a href="https://github.com/praveen80154"
                                                class="fa fa-github nav-link"
                                                style={{color:"blue"}}
                                                />
                                            </li>
                                            
                                        </u1>
                                    </div>


            </div>
            </body>
        );
    }
}

export default Home;