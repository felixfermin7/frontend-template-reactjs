import { useState } from "react";

function Help() {
  // an state element per each input field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');    
  return (
    <div>
      <h1>Help Page</h1>
      <p>This is the help page. Here you can find assistance.</p>
      
      <form>
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            //validate email format 
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(e.target.value)) {
              setEmailError('Please enter a valid email address.');
            } else {
              setEmailError('');
            }
          }}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>

        {/* Subject Dropdown */}
        <div>
          <label htmlFor="subject">Subject:</label>
          <select id="subject" name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="general">General Inquiry</option>
            <option value="technical">Technical Support</option>
            <option value="billing">Billing</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}>
            {message}
          </textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Help