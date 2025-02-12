import { Text, View } from "react-native";
import SignIn from "./SignInView";
import SignInView from "./SignInView";
import SignupView from "./SignupView";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/*<SignInView/>*/}
      <SignupView/>
    </View>
  );
}
