import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import COLORS from "@/constants/colors";
import UserDetail from "@/components/profile-screen/UserDetail";
import ThreeColumnList from "@/components/UI/ThreeColumnList";
import { ProfileStackParamList } from "@/types/navigation";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import { Movie } from "@/types/api";
import { getCurrentUserUid, getUserDoc } from "@/utils/firebase";
import SkeletonProfile from "@/components/UI/Skeleton/SkeletonProfile";
// import { fetchMoviesByIds } from "@/api/helper";

type Props = NativeStackScreenProps<ProfileStackParamList, "Profile">;

const ProfileScreen = ({ navigation }: Props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    moviesId: [] as number[],
  });
  // const [favMovies, setFavMovies] = useState<Movie[]>();
  const [isLoading, setIsLoading] = useState(false);
  const favoriteContext = useContext(FavoriteMoviesContext);

  const handleListItemPress = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  useEffect(() => {
    const fetchUserDoc = async () => {
      setIsLoading(true);
      const userDoc = await getUserDoc(getCurrentUserUid());
      setUser(userDoc);
      // const movies = await fetchMoviesByIds(userDoc.moviesId);
      // setFavMovies(movies);
      // console.log(favoriteContext.favoriteMovies);
      setIsLoading(false);
    };
    fetchUserDoc();
  }, []);

  if (isLoading) {
    return <SkeletonProfile />;
  }

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 8 }}>
      <UserDetail firstName={user.firstName} lastName={user.lastName} />
      <View style={{ paddingHorizontal: 12, width: "100%" }}>
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: 32,
            fontWeight: "bold",
            marginVertical: 12,
          }}
        >
          Favorite Movies
        </Text>
        <ThreeColumnList
          data={favoriteContext.favoriteMovies as Movie[]}
          onItemPress={handleListItemPress}
        />
        {/* <ThreeColumnList data={favMovies as Movie[]} onItemPress={handleListItemPress} /> */}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
