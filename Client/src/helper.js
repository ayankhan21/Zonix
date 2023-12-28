import CryptoJS from "crypto-js";
const VITE_SECRET_KEY = "kIzAjeayCrbqVOqiN8XoBw==";
// import {img} from './assets/'

export function encryptMessage(message) {
  const encrypted = CryptoJS.AES.encrypt(message, VITE_SECRET_KEY).toString();
  return encrypted;
}

export function decryptMessage(encryptedMessage) {
  const decrypted = CryptoJS.AES.decrypt(
    encryptedMessage,
    VITE_SECRET_KEY
  ).toString(CryptoJS.enc.Utf8);
  return decrypted;
}

// console.log(encryptMessage("😊"));
// console.log(decryptMessage(encryptMessage("😊")));
