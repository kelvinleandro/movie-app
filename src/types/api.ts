interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtine: number;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

interface CastMember {
  cast_id: number;
  id: number;
  character: string;
  name: string;
  profile_path: string;
}

export { Genre, Movie, CastMember };