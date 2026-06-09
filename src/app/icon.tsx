import { ImageResponse } from 'next/og';
import { fetchProfileData } from '@/lib/github';

export const size = { width: 256, height: 256 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function Icon() {
  const profileData = await fetchProfileData();
  const avatarUrl = profileData?.avatarUrl;

  if (!avatarUrl) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1a1a1a',
            borderRadius: '50%',
            color: 'white',
            fontSize: 100,
          }}
        >
          KA
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatarUrl} width={256} height={256} style={{ borderRadius: '50%', objectFit: 'cover' }} alt="Icon" />
      </div>
    ),
    { ...size }
  );
}
