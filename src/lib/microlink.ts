export function getOptimizedScreenshotUrl(repoUrl: string): string {
  // We use device=macbook to get a standard 16:9 desktop layout for the screenshots.
  const params = new URLSearchParams({
    url: repoUrl,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    waitFor: '5000',
    device: 'macbook'
  });

  return `https://api.microlink.io/?${params.toString()}`;
}
