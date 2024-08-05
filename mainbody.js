import React, { useContext } from 'react';
import '../CSS/MainBody.css';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../contexts/SharedState';

export default function Mainbody() {
    const states = useContext(Context);
    const navigate = useNavigate();

    const handleRegister = () => {
        // Navigate to registration page or show alert if user is not logged in
        if (states.user.data === undefined) {
            states.showAlert('Please login to continue', 'red', 3000);
            navigate('/login');
        } else {
            navigate('/register');
        }
    };

    return (
        <>
            <div className='container-fluid p-4'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img
                            className='img-fluid rounded blurry-border'
                            width='95%'
                            src='https://example.com/nepse-image.jpg' // Replace with a relevant NEPSE image
                            alt='NEPSE Overview'
                        />
                    </div>
                    <div className='col-sm-6'>
                        <div className='h1'>Welcome to NEPSE</div>
                        <div className='h5 text-muted'>Explore the Nepal Stock Exchange and stay updated!</div>
                        <p className='container fs-5 mt-5'>
                            The Nepal Stock Exchange (NEPSE) is the premier stock exchange in Nepal,
                            providing a platform for the trading of stocks, bonds, and other financial instruments.
                            NEPSE aims to enhance market transparency and provide investors with a secure trading environment.
                            Explore market trends, stock prices, and investment opportunities with NEPSE.
                        </p>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <img
                                    width={300}
                                    src='https://example.com/nepse-admission.png' // Replace with a relevant image
                                    alt='NEPSE Registration'
                                />
                            </div>
                            <div className='col-sm-6 mt-4'>
                                <a
                                    className='btn btn-outline-dark d-block'
                                    onClick={handleRegister}
                                >
                                    Register Now
                                </a>
                                <Link className='btn btn-danger d-block mt-3' to='/contact'>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
