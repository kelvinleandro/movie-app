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
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
}

interface CastMember {
  cast_id: number;
  id: number;
  character: string;
  name: string;
  profile_path: string;
}

interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
}

export { Genre, Movie, CastMember, CrewMember };