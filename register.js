import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  Alert,
  Modal,
} from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

const Register = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const validateForm = () => {
    const { fullName, email, password, confirmPassword } = form;

    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters.");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return false;
    }

    return true;
  };

  // Save user data after successful registration
  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post("http://192.168.1.10:3001/register", {
          fullName: form.fullName,
          email: form.email,
          password: form.password,
        });

        if (response.status === 201) {
          // Save user details to AsyncStorage
          await AsyncStorage.setItem('user', JSON.stringify({
            fullName: form.fullName,
            email: form.email,
          }));

          setModalVisible(true); // Show modal on success
        } else {
          Alert.alert("Error", "Registration failed.");
        }
      } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        Alert.alert("Error", error.response?.data?.error || "An error occurred during registration.");
      }
    }
  };

  const handleModalOption = (notify) => {
    setModalVisible(false); // Close modal
    if (notify) {
      navigation.navigate("Home"); // Navigate to Home
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Enter Your Personal Information</Text>

        <View style={styles.form}>
          <View style={styles.inputField}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={form.fullName}
              onChangeText={(text) => handleInputChange("fullName", text)}
              placeholder="Enter your Name"
            />
          </View>

          <View style={styles.inputField}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={form.email}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputField}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                value={form.password}
                onChangeText={(text) => handleInputChange("password", text)}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.passwordToggle}
                onPress={togglePasswordVisibility}
              >
                <Image
                  source={
                    showPassword
                      ? require("../../img/eyeOpen.png")
                      : require("../../img/eyeClose.png")
                  }
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputField}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordWrapper}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                value={form.confirmPassword}
                onChangeText={(text) => handleInputChange("confirmPassword", text)}
                placeholder="Confirm your password"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                style={styles.passwordToggle}
                onPress={toggleConfirmPasswordVisibility}
              >
                <Image
                  source={
                    showConfirmPassword
                      ? require("../../img/eyeOpen.png")
                      : require("../../img/eyeClose.png")
                  }
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.buttonSubmit} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.redirectText}>
          Already have an account?{" "}
          <Text
            style={styles.redirectLink}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalText}>Registration completed successfully.</Text>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalButtonYes]}
              onPress={() => handleModalOption(true)}
            >
              <Text style={styles.modalButtonText}>Proceed to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginTop: 150,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    marginTop: 20,
  },
  inputField: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 45,
  },
  passwordToggle: {
    position: "absolute",
    right: 10,
    top: 10,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
  },
  buttonSubmit: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  redirectText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  redirectLink: {
    color: "#1E90FF",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "45%",
  },
  modalButtonYes: {
    backgroundColor: "#1E90FF",
  },
  modalButtonNo: {
    backgroundColor: "#ddd",
  },
  modalButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Register;