import {
  HomeScreenProps,
  ExploreScreenProps,
  MovieDetailScreenProps,
  ProfileScreenProps,
} from "./screens";

export type HomeStackParamList = {
  Home: HomeScreenProps;
  MovieDetail: MovieDetailScreenProps;
};

export type ExploreStackParamList = {
  Explore: ExploreScreenProps;
  MovieDetail: MovieDetailScreenProps;
};

export type ProfileStackParamList = {
  Profile: ProfileScreenProps;
  MovieDetail: MovieDetailScreenProps;
};

export type MainTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  ProfileTab: undefined;
};
