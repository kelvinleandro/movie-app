import {
  HomeScreenProps,
  ExploreScreenProps,
  MovieDetailScreenProps,
  ProfileScreenProps,
} from "./screens";

export type HomeStackParamList = {
  Home: undefined;
  MovieDetail: MovieDetailScreenProps;
};

export type ExploreStackParamList = {
  Explore: undefined;
  MovieDetail: MovieDetailScreenProps;
};

export type ProfileStackParamList = {
  Profile: undefined;
  MovieDetail: MovieDetailScreenProps;
};

export type MainTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  ProfileTab: undefined;
};
