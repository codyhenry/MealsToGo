import React from "react";
import { List } from "react-native-paper";
import { menu } from "../../services/menu/menu.mock";

export const Accordion = () => {
  return (
    <>
      {menu.map((category) => (
        <List.Accordion
          title={category.title}
          left={(props) => <List.Icon {...props} icon={category.icon} />}
          key={category.title}
        >
          {category.items.map((item) => (
            <List.Item title={item} key={item} />
          ))}
        </List.Accordion>
      ))}
    </>
  );
};
