/**
 * Utility to fetch data from Strapi REST API
 */
export async function fetchStrapiAPI(
  path: string,
  urlParamsObject: Record<string, any> = {},
  options: RequestInit = {}
) {
  try {
    // 1. Build the Strapi URL
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
    
    // Convert object to query string (e.g., { populate: '*' } -> ?populate=*)
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${strapiUrl}/api${path}${queryString ? `?${queryString}` : ""}`;

    // 2. Trigger API call
    const response = await fetch(requestUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      // Next.js caching: 'force-cache' (static) or 'no-store' (dynamic)
      // or use 'next: { revalidate: 3600 }' to update every hour
      next: { revalidate: 60 }, 
      ...options,
    });

    if (!response.ok) {
      throw new Error(`An error occurred please try again. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
}