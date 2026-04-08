import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async () => {
  // Font — Inter Regular from jsDelivr
  const fontRes = await fetch(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/inter-latin-400-normal.woff'
  );
  const fontData = await fontRes.arrayBuffer();

  // Bold font weight for the name
  const fontBoldRes = await fetch(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/inter-latin-700-normal.woff'
  );
  const fontBoldData = await fontBoldRes.arrayBuffer();

  // Profile photo → base64 data URL
  const imgBuf = fs.readFileSync(
    path.resolve('./public/images/profile.jpg')
  );
  const imgSrc = `data:image/jpeg;base64,${imgBuf.toString('base64')}`;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '1200px',
          height: '630px',
          background: '#09090b',
          fontFamily: 'Inter',
          overflow: 'hidden',
        },
        children: [
          // Emerald left accent bar
          {
            type: 'div',
            props: {
              style: {
                width: '6px',
                height: '100%',
                background: '#34d399',
                flexShrink: 0,
              },
            },
          },
          // Text block
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px 56px',
                flex: 1,
                gap: 0,
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 68,
                      fontWeight: 700,
                      color: '#f4f4f5',
                      lineHeight: 1.05,
                      marginBottom: 20,
                      letterSpacing: '-0.02em',
                    },
                    children: 'Philip Abakah',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 30,
                      fontWeight: 400,
                      color: '#34d399',
                      marginBottom: 28,
                      letterSpacing: '-0.01em',
                    },
                    children: 'Optometrist & AI Engineer',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 21,
                      fontWeight: 400,
                      color: '#71717a',
                      lineHeight: 1.5,
                      marginBottom: 48,
                    },
                    children: 'Building assistive intelligence for human vision.',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: 18,
                      fontWeight: 400,
                      color: '#3f3f46',
                      letterSpacing: '0.04em',
                    },
                    children: 'philipabakah.com',
                  },
                },
              ],
            },
          },
          // Profile photo circle
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '300px',
                flexShrink: 0,
                marginRight: '64px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '240px',
                      height: '240px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '3px solid #27272a',
                      display: 'flex',
                    },
                    children: [
                      {
                        type: 'img',
                        props: {
                          src: imgSrc,
                          width: 240,
                          height: 320,
                          style: {
                            width: '240px',
                            height: '320px',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            marginTop: '-20px',
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontData, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBoldData, weight: 700, style: 'normal' },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
