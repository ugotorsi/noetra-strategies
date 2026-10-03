const LOCAL_PLATFORM_URL = "http://localhost:3001";

export function getPlatformLoginUrl(): string | null {
  const configuredUrl = process.env.NEXT_PUBLIC_PLATFORM_URL?.trim();
  const platformUrl = configuredUrl || (process.env.NODE_ENV === "development" ? LOCAL_PLATFORM_URL : null);

  if (!platformUrl) {
    return null;
  }

  try {
    const url = new URL(platformUrl);
    if (url.pathname === "/") {
      url.pathname = "/login";
    }
    return url.toString();
  } catch {
    return null;
  }
}