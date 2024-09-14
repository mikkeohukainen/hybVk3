import { Appbar } from "react-native-paper";

export default function MyAppBar({ navigation, back }) {
  return (
    <Appbar.Header mode="center-aligned" elevated={true}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="MD nav demo" />
      {!back ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate("Second")}
        />
      ) : null}
    </Appbar.Header>
  );
}
