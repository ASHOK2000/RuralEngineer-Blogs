import React from 'react';
import { Container } from "react-bootstrap";

const AdvertisementPoster = () => {
    return (
        <Container>

            <div style={styles.container}>
                <h2 style={styles.heading}>Unlock the Power of Seamless Integrations!</h2>
                <p style={styles.description}>
                    If you need professional assistance or custom development for your projects,
                    I'm here to help! With expertise in<strong> payment gateway integrations, Nest | Express</strong> development,
                    and more, your ideas can become reality.
                </p>
                <div style={styles.ctaContainer}>
                    <p style={styles.ctaText}>
                        Explore My Freelance Services on Fiverr
                    </p>
                    <p>                Phonepe || Stripe || Razorpay || Zoom
                    </p>
                    <a
                        href="https://www.fiverr.com/ashokkushwaha67"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.ctaButton}
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </Container>

    );
};

const styles = {
    // container: {
    //     padding: '20px',
    //     backgroundColor: '#f4f4f4',
    //     borderRadius: '10px',
    //     textAlign: 'center',
    //     maxWidth: '600px',
    //     margin: '20px auto',
    // },
    // heading: {
    //     color: '#333',
    //     fontSize: '24px',
    //     marginBottom: '10px',
    // },
    description: {
        color: '#666',
        fontSize: '16px',
        marginBottom: '20px',
    },
    ctaContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    ctaText: {
        color: '#444',
        fontSize: '18px',
        marginBottom: '10px',
    },
    ctaButton: {
        backgroundColor: '#0e9af7',
        color: '#fff',
        padding: '7px 13px',
        borderRadius: '5px',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default AdvertisementPoster;
