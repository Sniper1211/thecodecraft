import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'The Code Craft - 技术博客与独立开发'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '40px 80px',
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 900,
              margin: 0,
              marginBottom: 20,
              background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'sans-serif',
            }}
          >
            The Code Craft
          </h1>
          <p
            style={{
              fontSize: 32,
              margin: 0,
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: 800,
              fontFamily: 'sans-serif',
            }}
          >
            探索编程艺术 · 分享技术实践 · 记录独立开发
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
