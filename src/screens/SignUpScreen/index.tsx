import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form/";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/AuthStack";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";

import FormInput from "@/components/UI/FormInput";
import { createUserDoc, registerUser } from "@/utils/firebase";
import { AuthContext } from "@/context/AuthContext";
import COLORS from "@/constants/colors";
import { User } from "@/types/firebase";

interface SignUpFields {
  email: string;
  password: string;
  repeatPassword: string;
  repeatEmail: string;
  firstName: string;
  lastName: string;
}

type Props = {
  navigation: NativeStackNavigationProp<AuthStackParamList, "SignUp">;
};

const SignUpScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFields>();
  const email = watch("email");
  const password = watch("password");
  const authCtx = useContext(AuthContext);
  const [isSigningUp, setisSigningUp] = useState(false);
  const [pwdsVisible, setPwdsVisible] = useState({
    pwd: false,
    confirmPwd: false
  })

  const pwdsVisibilityHandler = (field: keyof typeof pwdsVisible) => {
    setPwdsVisible(current => ({
      ...current,
      [field]: !current[field]
    }));
  }

  const signUpHandler = async (credentials: SignUpFields) => {
    // console.log(credentials);
    setisSigningUp(true);
    try {
      const response = await registerUser(credentials.email, credentials.password);
      const token = await response.user.getIdToken();
      authCtx.authenticate(token);
      // try to create a document in firestore collection
      const user: User = {
        uid: response.user.uid,
        firstName: credentials.firstName,
        lastName: credentials.lastName
      };
      await createUserDoc(user);
    } catch (error) {
      if (error instanceof Error && error.message.includes('auth/email-already-in-use')) {
        Alert.alert("Registration Error", "This email address is already in use. Please use a different email address.");
      } else {
        console.error('Registration error:', error);
        Alert.alert("Registration Error", "Failed to register. Please try again later.");
      }
    }
    setisSigningUp(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.root}>
        <Text style={styles.screenTitle}>Sign Up</Text>
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <FormInput
              control={control}
              name="firstName"
              textInputConfig={{
                label: "First Name",
                placeholder: "First Name",
              }}
              rules={{
                required: "Required",
                validate: {
                  trim: value => value.trim() === value,
                  minLength: value => value.trim().length > 0 || "It must be at least 1 character"
                }
              }}
              />
          </View>
          <View style={styles.rowItem}>
            <FormInput
              control={control}
              name="lastName"
              textInputConfig={{
                label: "Last Name",
                placeholder: "Last Name",
              }}
              rules={{
                required: "Required",
                validate: {
                  trim: value => value.trim() === value,
                  minLength: value => value.trim().length > 0 || "It must be at least 1 character"
                }
              }}
            />
          </View>
        </View>

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
          name="repeatEmail"
          textInputConfig={{
            label: "Confirm Email",
            placeholder: "Repeat your email",
            keyboardType: "email-address",
          }}
          rules={{
            validate: (value) => value === email || "Email does not match",
          }}
        />

        <FormInput
          control={control}
          name="password"
          textInputConfig={{
            label: "Password",
            placeholder: "Type your password",
            secureTextEntry: !pwdsVisible.pwd,
            right: (
              <TextInput.Icon
                icon={!pwdsVisible.pwd ? "eye" : "eye-off"}
                onPress={() => pwdsVisibilityHandler('pwd')}
              />
            ),
          }}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters",
            },
          }}
        />

        <FormInput
          control={control}
          name="repeatPassword"
          textInputConfig={{
            label: "Confirm Password",
            placeholder: "Repeat your password",
            secureTextEntry: !pwdsVisible.confirmPwd,
            right: (
              <TextInput.Icon
                icon={!pwdsVisible.confirmPwd ? "eye" : "eye-off"}
                onPress={() => pwdsVisibilityHandler('confirmPwd')}
              />
            ),
          }}
          rules={{
            validate: (value) => value === password || "Password does not match",
          }}
        />

        <Button
          mode="contained"
          onPress={handleSubmit(signUpHandler)}
          labelStyle={{ fontSize: 16 }}
          style={{ width: 120, marginVertical: 8 }}
          buttonColor={COLORS.secondary}
          textColor={COLORS.text}
        >
          {!isSigningUp ? "Sign Up" : (<ActivityIndicator color={COLORS.text} />)}
        </Button>

        <Button
          mode="text"
          onPress={() => navigation.replace("Login")}
          textColor={COLORS.secondary}
        >
          Already have an account? Login
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: 38
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 14,
    color: COLORS.secondary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  rowItem: {
    flex: 1,
  }
});
