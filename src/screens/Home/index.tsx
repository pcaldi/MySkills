import { useEffect, useState } from "react";

import { styles } from "./styles";

import { FlatList, Text, TextInput, View } from "react-native";

import { Button } from "../../components/Button/Button";
import { SkillCard } from "../../components/SkillCard";

type SkillDataProps = {
  id: string;
  name: string;
};

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillDataProps[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((prevState) => [...prevState, data]); // ...-> spread operation

    setNewSkill("");
  }

  function handleRemoveSkill(id: string) {
    setMySkills((prevState) => prevState.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Paulo</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
        returnKeyType="done"
      />
      <Button title="Add" onPress={handleAddNewSkill} />
      <Text style={[styles.text, { marginVertical: 50 }]}>MySkills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            onPress={() => handleRemoveSkill(item.id)}
            skill={item.name}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
