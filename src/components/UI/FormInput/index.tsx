import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";
import COLORS from "@/constants/colors";

interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  textInputConfig?: TextInputProps;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const FormInput = <T extends Record<string, any>>({
  control,
  name,
  textInputConfig,
  rules,
}: InputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={{ width: "100%" }}>
            <TextInput
              mode="outlined"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              textColor={COLORS.primary}
              error={!!error}
              activeOutlineColor={COLORS.secondary}
              outlineStyle={{
                borderColor: !error ? COLORS.secondary : "#FF0000",
                borderWidth: 2,
              }}
              {...textInputConfig}
            />
          </View>
          {error && (
            <Text style={{ color: "#FF0000", alignSelf: "center" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 8,
    backgroundColor: "#fcfcfc",
    alignSelf: "center"
  },
});
