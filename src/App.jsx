import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ background: '#0a3d62', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h1>Geospatial Task Consultancy (GTC)</h1>
        <p>Mapping purpose into every space, more than the best you required.</p>
      </header>

      <section style={{ padding: '20px' }}>
        <h2>About Us</h2>
        <p>GTC is Nigeria’s leading geospatial service provider. We deliver precision mapping, boundary surveys, GIS analysis, and consultancy for government and private sector clients.</p>
      </section>

      <section style={{ background: '#f0f0f0', padding: '20px' }}>
        <h2>Services</h2>
        <ul>
          <li>Land & Boundary Surveys</li>
          <li>GIS & Mapping Solutions</li>
          <li>Drone Surveying & Remote Sensing</li>
          <li>Urban Planning & Layout Design</li>
          <li>Geospatial Data Management</li>
        </ul>
      </section>

      <section style={{ padding: '20px' }}>
        <h2>Contact Us</h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name" required /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" required /></label>
          </p>
          <p>
            <label>Message: <textarea name="message" required></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>

      <footer style={{ background: '#0a3d62', color: 'white', textAlign: 'center', padding: '20px' }}>
        <p>📍 1 Ife Garage, Opposite St. Hellen, Ondo City</p>
        <p>📞 08102661193, 08126959364</p>
        <p>✉️ Geotaskconsultancy@gmail.com</p>
        <p>© {new Date().getFullYear()} Geospatial Task Consultancy</p>
      </footer>
    </div>
  )
}
