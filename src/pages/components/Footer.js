import React from 'react'

const Footer = () => {

    return (
        <footer className="container-fluid px-0 d-flex flex-column justify-content-center align-items-center align-content-center foot">
            <div>Copyright Eva_Kitchen © {new Date().getFullYear()}. All Rights Reserved</div>
            {/* <div> Developed by <a target="blank" href="http://dverybest.dx.am/">DveryBest</a></div> */}
        </footer>
    )
}
export default Footer;