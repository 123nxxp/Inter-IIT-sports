import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Home } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

import {Youtube } from 'lucide-react'
import {Instagram} from 'lucide-react'
import {Facebook} from 'lucide-react'
import {Linkedin} from 'lucide-react'
import './CSS/footer.css'
const Footer = () => {
    return (
        <footer1 style={styles.footer1}>
            <div style={styles.description}>
                <h4 className='CRTDH-name-footer1'>Inter IIT Sports Meet 2023</h4>
                <hr></hr>
                <p className='CRTDH-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto ullam.</p>
                <div className="social-icons">
                    <hr></hr>
                    <h4 className='CRTDH-name-footer1' style={{marginBottom:'0px',marginTop:'30px'}}>Connect with us!</h4>
                    <span>
                        <a target='blank' href='https://www.facebook.com/profile.php?id=100007227152962'><Facebook className="fa-brands fb1"/></a>
                        <a target='blank' href='https://www.instagram.com/ayush_socool'><Instagram className="fa-brands insta1"/></a> 
                        <a target='blank' href='https://www.linkedin.com/in/ayush-singh-kushwah-0717931b9/'><Linkedin className="fa-brands linkedin1"/></a>
                        <a target='blank' href='https://www.youtube.com/channel/UCAoBCMDA6s-wUOGfKF9c2kQ'><Youtube className="fa-brands youtube1"/></a>
                    </span>
                </div>
            </div>
            <div className="quick-links-block" style={styles.quickLinks}>
                <h4 className='CRTDH-name-footer1'>Quick Links</h4>
                <Link to='' className='quick-links-link'> <p className='quick-links'><ArrowRight /> &nbsp;Home</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;About us</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Schedule</p></Link>
                <Link to='' className='quick-links-link'><p className='quick-links'><ArrowRight /> &nbsp;Leaderboard</p></Link>
            </div>
            <div style={styles.reachUs}>
                <h4 className='CRTDH-name-footer1'>Reach Us</h4>
                <p className='Head-office'><Home />&nbsp;&nbsp;Get In Touch</p>
                <p className='head-office-address'>
                    <Link to="https://www.google.com/maps/dir//Indian+Institute+Of+Technology+Gandhinagar+(IIT+Gandhinagar)+Indian+Institute+of+Technology+Palaj,+Gujarat+382355/@23.2114236,72.6842489,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x395c2adec1f16d8d:0xdc447b8706689bc3" target='_blank' style={{color:'white',textDecoration:'none'}}>
                    Academic Block 4/405, IIT Gandhinagar, Palaj, Gandhinagar,
                    Gujarat - 382355</Link> </p>
                <hr></hr>
                <p className='Head-office'><Phone />&nbsp;&nbsp;CALL US</p>
                <p className='head-office-address'>+91-9925029889 (M)</p>
                <hr></hr>
                <p className='Head-office'><Mail />&nbsp;&nbsp;Email</p>
                <p className='head-office-address'>crtdh@iitgn.ac.in</p>
            </div>
        </footer1>
    );
};

export default Footer;

const styles = {
    footer1: {
        backgroundColor: '#0351a4',
        color: '#fff',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    description: {
        flex: '1 1 30%',
        marginBottom: '20px',
        padding: '20px',
    },
    quickLinks: {
        display: 'flex',
        // justifyContent:'center',
        flexDirection: 'column',
        // alignItems:'center',
        flex: '1 1 30%',
        padding: '20px 20px 20px 70px',
    },
    reachUs: {
        flex: '1 1 30%',
        marginBottom: '20px',
        display: 'flex',
        // justifyContent:'center',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '20px',
    }
};
