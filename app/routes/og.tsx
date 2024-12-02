import { ImageResponse } from '@vercel/og';
import type { LoaderFunctionArgs } from '@remix-run/node';
import persiteSource from 'PERSITE_SOURCE';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const mode = persiteSource.theme.radixConfig.appearance;
  const fontColor = mode === 'dark' ? '#ffffff' : '#000000';
  const shadowColor = mode === 'dark' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)';
  const backgroundImageSrc = `${url.origin}/ogbackground-${mode}.jpg`;
  const avatarImageSrc = `${url.origin}/avatar.jpg`;
  
  return new ImageResponse(
    (
      <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <img src={backgroundImageSrc} style={{position: 'absolute'}}/>
        <div style={{display: 'flex', width: '300px', height: '300px', borderRadius: '100%', overflow: 'hidden', position: 'relative', boxShadow: `0 0 40px ${shadowColor}`}}>
          <img src={avatarImageSrc} alt="" style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}/>
        </div>
        <div style={{display: 'flex', height: '300px', flexDirection: 'column', justifyContent: 'center', paddingLeft: '40px', textShadow: `0 0 40px ${shadowColor}`}}>
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: fontColor,
              margin: '0'
            }}
          >
            {persiteSource.name}
          </h1>
          <span
            style={{
              fontSize: '35px',
              color: fontColor,
            }}
          >
            {persiteSource.slogan}
          </span>
        </div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
