import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-mail', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Make sure transporter is declared here
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'harshgilitwala22@gmail.com',
        pass: 'owsnmljtqalqapyt' // Gmail app password
      }
    });

    // Beautiful HTML email template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Message</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .header h1 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px;
        }
        
        .info-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 30px;
            border-left: 5px solid #667eea;
        }
        
        .info-item {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-start;
        }
        
        .info-item:last-child {
            margin-bottom: 0;
        }
        
        .info-label {
            font-weight: 700;
            color: #667eea;
            min-width: 80px;
            font-size: 15px;
        }
        
        .info-value {
            flex: 1;
            font-size: 16px;
            color: #2d3748;
        }
        
        .info-value a {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .info-value a:hover {
            color: #764ba2;
            text-decoration: underline;
        }
        
        .message-section {
            background: white;
            border-radius: 15px;
            padding: 30px;
            border: 2px solid #e2e8f0;
            margin-top: 20px;
        }
        
        .message-label {
            font-weight: 700;
            color: #667eea;
            font-size: 18px;
            margin-bottom: 15px;
            display: block;
        }
        
        .message-content {
            background: #f8fafc;
            padding: 25px;
            border-radius: 12px;
            border-left: 4px solid #764ba2;
            font-size: 16px;
            line-height: 1.7;
            color: #4a5568;
            white-space: pre-wrap;
            font-family: inherit;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            color: #718096;
            font-size: 14px;
        }
        
        .timestamp {
            display: inline-block;
            background: #edf2f7;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 13px;
            margin-top: 10px;
        }
        
        .badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            margin-top: 15px;
        }
        
        @media (max-width: 600px) {
            .content {
                padding: 25px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .info-item {
                flex-direction: column;
            }
            
            .info-label {
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>🌟 New Portfolio Message</h1>
            <p>Someone reached out through your portfolio website</p>
        </div>
        
        <div class="content">
            <div class="info-card">
                <div class="info-item">
                    <span class="info-label">From:</span>
                    <span class="info-value">${name}</span>
                </div>
                
                <div class="info-item">
                    <span class="info-label">Email:</span>
                    <span class="info-value">
                        <a href="mailto:${email}">${email}</a>
                    </span>
                </div>
                
                <div class="info-item">
                    <span class="info-label">Date:</span>
                    <span class="info-value">${new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</span>
                </div>
            </div>
            
            <div class="message-section">
                <span class="message-label">💬 Message:</span>
                <div class="message-content">
${message.replace(/\n/g, '\n')}
                </div>
            </div>
            
            <div class="footer">
                <div class="timestamp">
                    📅 Sent at ${new Date().toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                    })}
                </div>
                <div class="badge">
                    Portfolio Contact Form
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    // Send email with both text and HTML versions
    await transporter.sendMail({
      from: `"${name}" <harshgilitwala22@gmail.com>`,
      to: 'harshgilitwala7@gmail.com',
      replyTo: email,
      subject: `🎯 Portfolio Message from ${name}`,
      text: `
Hi Harsh,

This message is sent after seeing my portfolio website.

Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
Sent via Portfolio Contact Form
      `,
      html: htmlTemplate
    });

    res.json({ 
      success: true, 
      message: 'Email sent successfully!'
    });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: err.message 
    });
  }
});

// Optional: Add a test endpoint to verify server is running
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: '/send-mail',
      GET: '/test'
    }
  });
});

app.listen(5000, () => {
  console.log('✅ Server running at http://localhost:5000');
  console.log('📧 Send emails to: POST http://localhost:5000/send-mail');
  console.log('🔧 Test endpoint: GET http://localhost:5000/test');
});