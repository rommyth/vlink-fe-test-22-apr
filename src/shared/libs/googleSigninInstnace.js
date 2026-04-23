// 599940706502-fqdf7m3uvonl1hao1rcc7v83375p0nr9.apps.googleusercontent.com

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIEND_ID } from '../utils/constant.secret';

GoogleSignin.configure({
  webClientId: WEB_CLIEND_ID,
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
});
