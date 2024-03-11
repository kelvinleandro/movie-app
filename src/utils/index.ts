export function getTmdbImage(path: string, file_size: string = "original"): string {
  const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${file_size}`;
  return `${IMAGE_BASE_URL}${path}`
}