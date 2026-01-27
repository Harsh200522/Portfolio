import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import '../style/Contact.css';
import Swal from 'sweetalert2';


const Contact = () => {
  // ✅ Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '918849860553'; 

  const handleEmailSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:5000/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      // SweetAlert success with custom CSS
      Swal.fire({
        icon: 'success',
        title: 'Email Sent!',
        text: 'Your message has been sent successfully!',
        confirmButtonColor: '#667eea',
        background: '#f8fafc',
        backdrop: `
          rgba(102, 126, 234, 0.4)
          url("https://i.pinimg.com/originals/8b/45/91/8b4591a8d1f00d8d013b54e1e4b94f9e.gif")
          left top
          no-repeat
        `,
        customClass: {
          popup: 'animated-popup',
          title: 'sweet-title',
          htmlContainer: 'sweet-text',
          confirmButton: 'sweet-confirm-button',
          icon: 'sweet-icon'
        },
        showClass: {
          popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
          popup: 'animate__animated animate__zoomOut'
        },
        buttonsStyling: false,
        willOpen: () => {
          // Add custom styles
          const style = document.createElement('style');
          style.textContent = `
            .animated-popup {
              border-radius: 20px !important;
              border: none !important;
              box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3) !important;
              padding: 2.5rem !important;
            }
            
            .sweet-title {
              font-size: 28px !important;
              font-weight: 700 !important;
              color: #2d3748 !important;
              margin-bottom: 15px !important;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .sweet-text {
              font-size: 16px !important;
              color: #4a5568 !important;
              line-height: 1.6 !important;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            }
            
            .sweet-confirm-button {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
              color: white !important;
              border: none !important;
              padding: 12px 32px !important;
              font-size: 16px !important;
              font-weight: 600 !important;
              border-radius: 12px !important;
              cursor: pointer !important;
              transition: all 0.3s ease !important;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
              letter-spacing: 0.5px !important;
              text-transform: uppercase !important;
              margin-top: 20px !important;
            }
            
            .sweet-confirm-button:hover {
              transform: translateY(-3px) !important;
              box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4) !important;
            }
            
            .sweet-confirm-button:active {
              transform: translateY(-1px) !important;
            }
            
            .sweet-icon {
              width: 80px !important;
              height: 80px !important;
              border: 4px solid #c6f6d5 !important;
              background: #f0fff4 !important;
            }
            
            .swal2-success-ring {
              border: 4px solid rgba(102, 126, 234, 0.3) !important;
            }
            
            .swal2-success-line-tip,
            .swal2-success-line-long {
              background-color: #48bb78 !important;
            }
            
            .swal2-error [class^="swal2-x-mark-line"] {
              background-color: #f56565 !important;
            }
            
            .swal2-icon.swal2-error {
              border-color: #fed7d7 !important;
              color: #f56565 !important;
            }
          `;
          document.head.appendChild(style);
        }
      });

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
    } else {
      throw new Error('Failed to send email');
    }
  } catch (err) {
    // SweetAlert error with custom CSS
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong. Please try again!',
      confirmButtonColor: '#667eea',
      background: '#f8fafc',
      backdrop: `
        rgba(245, 101, 101, 0.4)
        url("https://i.pinimg.com/originals/8b/45/91/8b4591a8d1f00d8d013b54e1e4b94f9e.gif")
        left top
        no-repeat
      `,
      customClass: {
        popup: 'animated-popup-error',
        title: 'sweet-title-error',
        htmlContainer: 'sweet-text-error',
        confirmButton: 'sweet-confirm-button-error',
        icon: 'sweet-icon-error'
      },
      showClass: {
        popup: 'animate__animated animate__shakeX'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
      },
      buttonsStyling: false,
      willOpen: () => {
        // Add custom styles for error
        const style = document.createElement('style');
        style.textContent = `
          .animated-popup-error {
            border-radius: 20px !important;
            border: none !important;
            box-shadow: 0 20px 60px rgba(245, 101, 101, 0.3) !important;
            padding: 2.5rem !important;
          }
          
          .sweet-title-error {
            font-size: 28px !important;
            font-weight: 700 !important;
            color: #2d3748 !important;
            margin-bottom: 15px !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            background: linear-gradient(135deg, #f56565 0%, #ed64a6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .sweet-text-error {
            font-size: 16px !important;
            color: #4a5568 !important;
            line-height: 1.6 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          
          .sweet-confirm-button-error {
            background: linear-gradient(135deg, #f56565 0%, #ed64a6 100%) !important;
            color: white !important;
            border: none !important;
            padding: 12px 32px !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            border-radius: 12px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            letter-spacing: 0.5px !important;
            text-transform: uppercase !important;
            margin-top: 20px !important;
          }
          
          .sweet-confirm-button-error:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 10px 25px rgba(245, 101, 101, 0.4) !important;
          }
          
          .sweet-confirm-button-error:active {
            transform: translateY(-1px) !important;
          }
          
          .sweet-icon-error {
            width: 80px !important;
            height: 80px !important;
            border: 4px solid #fed7d7 !important;
            background: #fff5f5 !important;
          }
          
          .swal2-error-ring {
            border: 4px solid rgba(245, 101, 101, 0.3) !important;
          }
          
          .swal2-x-mark-line-left,
          .swal2-x-mark-line-right {
            background-color: #f56565 !important;
          }
          
          .swal2-icon.swal2-error [class^="swal2-x-mark-line"] {
            height: 5px !important;
          }
        `;
        document.head.appendChild(style);
      }
    });
  }
}




  const handleGitHubOpen = () => {
    window.open('https://github.com/Harsh200522', '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInOpen = () => {
    window.open('https://www.linkedin.com/in/harsh-gilitwala-36a0813a8', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-section">
      <h1 className="section-heading">Contact Me</h1>
      <p className="contact-subtitle">
        Feel free to reach out for projects, internships, or collaboration.
      </p>

      {/* CONTACT INFO */}
      <div className="contact-info-container">
        {/* EMAIL */}
        <div
            className="contact-info-card email-card"
            onClick={() => window.location.href = 'mailto:harshgilitwala7@gmail.com'}
            style={{ cursor: 'pointer' }}
          >
          <div className="contact-icon-wrapper">
            <FaEnvelope className="contact-icon email-icon" />
          </div>
          <div className="contact-details">
            <h3 className="contact-label">Email</h3>
            <span className="contact-value">harshgilitwala7@gmail.com</span>
          </div>
        </div>

        {/* WHATSAPP */}
        <div
          className="contact-info-card whatsapp-card"
          onClick={() =>
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hi Harsh!')}`, '_blank')
          }
          style={{ cursor: 'pointer' }}
        >
          <div className="contact-icon-wrapper">
            <FaWhatsapp className="contact-icon whatsapp-icon" />
          </div>
          <div className="contact-details">
            <h3 className="contact-label">WhatsApp</h3>
            <span className="contact-value">Chat with me</span>
          </div>
        </div>

        {/* LINKEDIN */}
        <div
          className="contact-info-card linkedin-card"
          onClick={handleLinkedInOpen}
          style={{ cursor: 'pointer' }}
        >
          <div className="contact-icon-wrapper">
            <FaLinkedin className="contact-icon linkedin-icon" />
          </div>
          <div className="contact-details">
            <h3 className="contact-label">LinkedIn</h3>
            <span className="contact-value">Visit Profile</span>
          </div>
        </div>

        {/* GITHUB */}
        <div
          className="contact-info-card github-card"
          onClick={handleGitHubOpen}
          style={{ cursor: 'pointer' }}
        >
          <div className="contact-icon-wrapper">
            <FaGithub className="contact-icon github-icon" />
          </div>
          <div className="contact-details">
            <h3 className="contact-label">GitHub</h3>
            <span className="contact-value">View Repositories</span>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <form className="contact-form-container" onSubmit={handleEmailSubmit}>
        <div className="form-input-group">
          <input
            type="text"
            className="form-input name-input"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-input-group">
          <input
            type="email"
            className="form-input email-input"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-input-group">
          <textarea
            className="form-textarea message-textarea"
            placeholder="Your Message"
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="form-submit-btn" style={{ cursor: 'pointer' }}>
          <FaEnvelope style={{ marginRight: '8px' }} />
            Send Email
        </button>
      </form>
    </div>
  );
};

export default Contact;
