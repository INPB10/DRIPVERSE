import { Client, Account } from "https://cdn.jsdelivr.net/npm/appwrite@23.0.0/+esm";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("6aad1dab003061e40404");

const account = new Account(client);

// Appwrite connection ping
async function pingAppwrite() {
  try {
    await account.get();
    console.log("DRIPVERSE: Appwrite connected + user session active");
    return true;
  } catch (error) {
    if (error.code === 401) {
      console.log("DRIPVERSE: Appwrite connected");
      return true;
    }

    console.error("DRIPVERSE: Appwrite connection failed", error);
    return false;
  }
}

export { client, account, pingAppwrite };
