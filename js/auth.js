import { account } from "./appwrite.js";
import { ID } from "https://cdn.jsdelivr.net/npm/appwrite@23.0.0/+esm";

// CREATE ACCOUNT
export async function signup(name, email, password) {
  try {
    await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    await account.createEmailPasswordSession(email, password);

    return {
      success: true,
      message: "Account created successfully."
    };

  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}

// LOGIN
export async function login(email, password) {
  try {
    await account.createEmailPasswordSession(email, password);

    return {
      success: true,
      message: "Login successful."
    };

  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
}

// GET CURRENT USER
export async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error) {
    return null;
  }
}

// LOGOUT
export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    return false;
  }
}
