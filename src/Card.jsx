import React, { useState, useEffect } from 'react';
import Profile from './myprofile.jpeg'; // Your profile image
import LoaderImage from './logo.png'; // Replace with your loader image

export default function Card() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set loading to false after 2 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <img src={LoaderImage} alt="Loading..." className="loader-image" />
                </div>
            ) : (
                <div className="card">
                    <div className="header">
                        <div className="profile-image">
                            <img src={Profile} alt="Abhishek Thakre" />
                        </div>
                        <h2>Abhishek Thakre</h2>
                        <p>Fullstack Web Developer</p>
                        <div className="contact-buttons">
                            <a href="tel:9689941705">
                                <button className="call">
                                    <i className="fas fa-phone" /> CALL
                                </button>
                            </a>
                            <a href="mailto:abhishekthakare060@gmail.com">
                                <button className="email">
                                    <i className="fas fa-envelope" /> EMAIL
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="body">
                        <p className="description">
                            Experienced frontend developer with a passion for creating visually
                            stunning and user-friendly websites.
                        </p>
                        <hr />
                        <div className="contact-info">
                            <a href="tel:9689941705" style={{ textDecoration: "none" }}>
                                <div className="mycard">
                                    <i className="fas fa-phone" style={{ marginTop: "30px", padding: "0px 20px", fontSize:"16px" }} />
                                    <div className="mycard-data">
                                        <p style={{ color: "black" }}> 9689041705</p>
                                        <p>Mobile</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <a
                                href="mailto:abhishekthakare060@gmail.com"
                                style={{ textDecoration: "none" }}
                            >
                                <div className="mycard">
                                    <i className="fas fa-envelope" style={{ marginTop: "30px", padding: "0px 20px", fontSize:"16px" }} />
                                    <div className="mycard-data">
                                        <p style={{ color: "black" }}> abhishekthakre060@gmail.com</p>
                                        <p>E-mail</p>
                                    </div>
                                </div>
                            </a>
                            <hr />
                            <div className="mycard">
                                <i className="fas fa-briefcase" style={{ marginTop: "30px", padding: "0px 20px", fontSize:"16px" }} />
                                <div className="mycard-data">
                                    <p style={{ color: "black" }}>Sky Vision IT Solutions</p>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <hr />
                            <a
                                href="https://abhishekthakre.netlify.app"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="mycard">
                                    <i className="fas fa-globe" style={{ marginTop: "30px", padding: "0px 20px", fontSize:"16px" }} />
                                    <div className="mycard-data">
                                        <p style={{ color: "black" }}>https://abhishekthakre.netlify.app</p>
                                        <p>Web Site</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <hr />
                        <div className="social-media">
                            <h3>Social Media</h3>
                            <div className="social-icons">
                                <div className="social">
                                    <a
                                        href="https://www.linkedin.com/in/abhishek-thakre-3a111024b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </div>
                                <div className="social">
                                    <a href="https://github.com/Abhishekthakre2001" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer" style={{ textDecoration: "none" }}>
                        <a href="https://abhishekthakre.netlify.app/Abhishek_Thakre_Resume.pdf">
                            <button className="vcard-button">
                                <i className="fas fa-download" /> DOWNLOAD VCARD
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
