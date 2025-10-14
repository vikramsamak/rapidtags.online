import { ImageResponse } from 'next/og';

export const alt = 'Rapitags.online | AI-Powered Hashtag Generator';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

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
          backgroundColor: '#000',
          backgroundImage:
            'linear-gradient(to bottom right, #000000 20%, #1a1a1a 100%)',
          color: '#fff',
          padding: '48px',
          fontFamily: '"SF Pro Display", "Helvetica Neue", "Arial", sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '86px',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            background: 'linear-gradient(to right, #ffffff, #cccccc)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Rapidtags.online
        </div>
        <div
          style={{
            marginTop: '24px',
            fontSize: '36px',
            fontWeight: 400,
            lineHeight: 1.4,
            textAlign: 'center',
            color: '#999999',
          }}
        >
          AI-Powered Hashtag Generator for Social Media
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
