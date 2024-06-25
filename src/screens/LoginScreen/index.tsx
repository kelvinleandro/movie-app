import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form/";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/AuthStack";
import { Button, ActivityIndicator, TextInput } from "react-native-paper";

import FormInput from "@/components/UI/FormInput";
import BouncingImage from "@/components/UI/BouncingImage";
import { loginUser } from "@/utils/firebase";
import { AuthContext } from "@/context/AuthContext";
import COLORS from "@/constants/colors";

interface LoginFields {
  email: string;
  password: string;
}

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "Login">;
};

const LoginScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();
  const authCtx = useContext(AuthContext);
  const [isLogging, setIsLogging] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const loginHandler = async (credentials: LoginFields) => {
    console.log(credentials);
    setIsLogging(true);
    try {
      const response = await loginUser(credentials.email, credentials.password);
      const token = await response.user.getIdToken();
      authCtx.authenticate(token);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("auth/invalid-credential")
      ) {
        Alert.alert(
          "Login Error",
          "Invalid credentials. Please check your email and password."
        );
      } else {
        console.log("Login Error:", error);
        Alert.alert("Login Error", "Failed to Login. Please try again later.");
      }
    }
    setIsLogging(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.root}>
        <BouncingImage
          source={require("@/assets/clapperboard.png")}
          style={{
            width: Dimensions.get("window").width * 0.5,
            height: Dimensions.get("window").width * 0.5,
            resizeMode: "contain",
          }}
        />

        <Text style={styles.screenTitle}>Welcome to ClapperFlix</Text>

        <FormInput
          control={control}
          name="email"
          textInputConfig={{
            label: "Email",
            placeholder: "Type your email",
            keyboardType: "email-address",
          }}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
        />

        <FormInput
          control={control}
          name="password"
          textInputConfig={{
            label: "Password",
            placeholder: "Type your password",
            secureTextEntry: !passwordVisible,
            right: (
              <TextInput.Icon
                icon={!passwordVisible ? "eye" : "eye-off"}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            ),
          }}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          }}
        />

        <Button
          mode="contained"
          onPress={handleSubmit(loginHandler)}
          labelStyle={{ fontSize: 16 }}
          style={{ width: 120, marginVertical: 8 }}
          buttonColor={COLORS.secondary}
          textColor={COLORS.text}
        >
          {!isLogging ? "Login" : <ActivityIndicator color={COLORS.text} />}
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.replace("SignUp")}
          textColor={COLORS.secondary}
        >
          Don't have an account? Sign up
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    padding: 38,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 14,
    color: COLORS.secondary,
  },
});
