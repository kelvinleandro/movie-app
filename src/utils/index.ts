export function getTmdbImage(
  path: string | undefined,
  file_size: string = "original"
): string {
  const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/${file_size}`;
  return `${IMAGE_BASE_URL}${path}`;
}

export function formatRuntime(runtime: number| undefined): string {
  if(!runtime) return "";
  
  const durationMs = runtime * 60 * 1000;

  const hours = Math.floor(durationMs / (60 * 60 * 1000));
  const minutes = Math.floor((durationMs % (60 * 60 * 1000)) / (60 * 1000));

  let result = "";
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += `${minutes > 0 ? " " : ""}${minutes}m`;
  }

  return result.trim();
}
