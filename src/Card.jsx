import React, { useState, useEffect } from 'react';
import Profile from './myprofile.jpeg'; // Your profile image
import LoaderImage from './logo.png'; // Replace with your loader image
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        name: '',
        mobile: '',
        email: '',
        description: '',
        designation: '',
        company: '',
        website: '',
        linkedin: '',
        github: '',
        headerColor: ''
    });

    useEffect(() => {
        // Fetch URL parameters
        const queryParams = new URLSearchParams(window.location.search);
        const extractedData = {
            name: queryParams.get('name') || '',
            mobile: queryParams.get('mobile') || '',
            email: queryParams.get('email') || '',
            description: queryParams.get('description') || '',
            designation: queryParams.get('designation') || '',
            company: queryParams.get('company') || '',
            website: queryParams.get('website') || '',
            linkedin: queryParams.get('linkedin') || '',
            github: queryParams.get('github') || '',
            headerColor: queryParams.get('headerColor') || ''
        };

        console.log(extractedData); // Console log the data

        // Set state with extracted data
        setData(extractedData);

        // Set loading to false after 3 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader-container">
                    <img src={LoaderImage} alt="Loading..." className="loader-image" />
                </div>
            ) : (
                <div className="card" >
                    <div className="header" style={{ backgroundColor: data.headerColor }}>
                        <div className="profile-image">
                            <img src={Profile} alt={data.name} />
                        </div>
                        <h2>{data.name || 'Name not provided'}</h2>
                        <p>{data.designation || 'Designation not provided'}</p>
                        <div className="contact-buttons">
                            {data.mobile && (
                                <a href={`tel:${data.mobile}`}>
                                    <button className="call">
                                        <i className="fas fa-phone" /> CALL
                                    </button>
                                </a>
                            )}
                            {data.email && (
                                <a href={`mailto:${data.email}`}>
                                    <button className="email">
                                        <i className="fas fa-envelope" /> EMAIL
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="body">
                        <p className="description">
                            {data.description || 'Description not provided'}
                        </p>
                        <hr />
                        <div className="contact-info">
                            {data.mobile && (
                                <a href={`tel:${data.mobile}`} style={{ textDecoration: "none" }}>
                                    <div className="mycard">
                                        <i className="fas fa-phone" style={{ marginTop: "30px", padding: "0px 20px", fontSize: "16px", color: data.headerColor }} />
                                        <div className="mycard-data">
                                            <p style={{ color: "black" }}>{data.mobile}</p>
                                            <p>Mobile</p>
                                        </div>
                                    </div>
                                </a>
                            )}
                            <hr />
                            {data.email && (
                                <a href={`mailto:${data.email}`} style={{ textDecoration: "none" }}>
                                    <div className="mycard">
                                        <i className="fas fa-envelope" style={{ marginTop: "30px", padding: "0px 20px", fontSize: "16px", color: data.headerColor }} />
                                        <div className="mycard-data">
                                            <p style={{ color: "black" }}>{data.email}</p>
                                            <p>E-mail</p>
                                        </div>
                                    </div>
                                </a>
                            )}
                            <hr />
                            {data.company && (
                                <div className="mycard">
                                    <i className="fas fa-briefcase" style={{ marginTop: "30px", padding: "0px 20px", fontSize: "16px", color: data.headerColor }} />
                                    <div className="mycard-data">
                                        <p style={{ color: "black" }}>{data.company}</p>
                                        <p>{data.designation || 'Designation not provided'}</p>
                                    </div>
                                </div>
                            )}
                            <hr />
                            {data.website && (
                                <a href={data.website} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                                    <div className="mycard">
                                        <i className="fas fa-globe" style={{ marginTop: "30px", padding: "0px 20px", fontSize: "16px", color: data.headerColor }} />
                                        <div className="mycard-data">
                                            <p style={{ color: "black" }}>{data.website}</p>
                                            <p>Web Site</p>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </div>
                        <hr />
                        <div className="social-media">
                            <h3>Social Media</h3>
                            <div className="social-icons">
                                {data.linkedin && (
                                    <div className="social"  style={{ backgroundColor: data.headerColor }}>
                                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin" />
                                        </a>
                                    </div>
                                )}
                                {data.github && (
                                    <div className="social"  style={{ backgroundColor: data.headerColor }}>
                                        <a href={data.github} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github" />
                                        </a>
                                    </div>
                                )}
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
