import {
  MovieDetailScreenProps,
  FullCastScreenProps,
} from "./screens";

export type HomeStackParamList = {
  Home: undefined;
  MovieDetail: MovieDetailScreenProps;
  FullCast: FullCastScreenProps;
};

export type ExploreStackParamList = {
  Explore: undefined;
  MovieDetail: MovieDetailScreenProps;
  FullCast: FullCastScreenProps;
};

export type ProfileStackParamList = {
  Profile: undefined;
  MovieDetail: MovieDetailScreenProps;
  FullCast: FullCastScreenProps;
};

export type MainTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  ProfileTab: undefined;
};
