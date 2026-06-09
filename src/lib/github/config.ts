export const GITHUB_PAT = process.env.GITHUB_PAT;
export const GITHUB_ORGS = process.env.GITHUB_ORGS;

export const getFetchOptions = () => ({
  headers: {
    Authorization: `Bearer ${GITHUB_PAT}`,
    Accept: "application/vnd.github.v3+json",
  },
  next: { revalidate: 3600 },
});
