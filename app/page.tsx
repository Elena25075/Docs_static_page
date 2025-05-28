import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '2rem', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          JetFormBuilder Documentation
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Complete guide to building powerful forms with JetFormBuilder
        </p>
        <Link 
          href="/get-started"
          style={{ 
            display: 'inline-block',
            background: 'white',
            color: '#667eea',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
