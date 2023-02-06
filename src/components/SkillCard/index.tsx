import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type SkillCardProps = TouchableOpacityProps & {
  skill: string;
};

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.skillButton} {...rest}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}
