import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10 bg-accent text-white">
           <div className="footer">
           <div>
                <span className="footer-title">Services</span> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
           </div> 
           <div className="mt-8 -mb-10 text-center">
                <p><small>Copyright © 2022 - All right reserved by SS Productions</small></p>
          </div>
        </footer>
    );
};

export default Footer;