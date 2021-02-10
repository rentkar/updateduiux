import React from 'react'

export default class Collapsible extends React.Component {
    componentDidMount() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }
    render() {
        return (<div className='menu_collaps'>
            <button className="collapsible">POLICIES</button>
            <div className="content">
                <hr />
                <a >Shipping Policy</a>
                <a >Return & Refund</a>
                <a >Privacy Policy</a>
                <a >Rental Terms & Conditions</a>
                <a >Terms of Use</a>
                <hr />
            </div>
            <button className="collapsible">ABOUT US</button>
            <div className="content">
                <hr />
                <a >Shipping Policy</a>
                <a >Return & Refund</a>
                <a >Privacy Policy</a>
                <a >Rental Terms & Conditions</a>
                <a >Terms of Use</a>
                <hr />
            </div>
            <button className="collapsible">CONTACT</button>
            <div className="content">
                <hr />
                <a href='#'>Shipping Policy</a>
                <a href='#'>Return & Refund</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Rental Terms & Conditions</a>
                <a href='#'>Terms of Use</a>
                <hr />
            </div>
            <button className="collapsible">OUR BENEFITS</button>
            <div className="content">
                <hr />
                <a href='#'>Shipping Policy</a>
                <a href='#'>Return & Refund</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Rental Terms & Conditions</a>
                <a href='#'>Terms of Use</a>
                <hr />
            </div>
            <button className="collapsible">FAQ</button>
            <div className="content">
                <hr />
                <a href='#'>Shipping Policy</a>
                <a href='#'>Return & Refund</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Rental Terms & Conditions</a>
                <a href='#'>Terms of Use</a>
                <hr />
            </div>
            <button className="collapsible">BLOG</button>
            <div className="content">
                <hr />
                <a href='#'>Shipping Policy</a>
                <a href='#'>Return & Refund</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Rental Terms & Conditions</a>
                <a href='#'>Terms of Use</a>
                <hr />
            </div>
        </div>)
    }
}