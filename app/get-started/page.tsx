export default function GetStartedPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '2rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '1rem' }}>
          Getting Started with JetFormBuilder
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem' }}>
          Learn how to install, configure, and create your first form with JetFormBuilder.
        </p>
        
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '2rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#1e293b', marginBottom: '1rem' }}>Quick Installation</h2>
          <ol style={{ color: '#475569', lineHeight: '1.8' }}>
            <li>Go to your WordPress admin dashboard</li>
            <li>Navigate to Plugins → Add New</li>
            <li>Search for "JetFormBuilder"</li>
            <li>Install and activate the plugin</li>
            <li>Go to JetFormBuilder → Add New to create your first form</li>
          </ol>
        </div>

        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          padding: '2rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#1e293b', marginBottom: '1rem' }}>What's Next?</h2>
          <ul style={{ color: '#475569', lineHeight: '1.8' }}>
            <li>Create your first contact form</li>
            <li>Learn about different field types</li>
            <li>Set up form actions and notifications</li>
            <li>Customize form styling</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
