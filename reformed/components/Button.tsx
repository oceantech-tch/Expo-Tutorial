import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  color?: string;
};

export default function Button({ title, onPress, color = "#007AFF" }: Props) {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.label} numberOfLines={1}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    minWidth: 150,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});