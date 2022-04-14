import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import React from "react";

import { ImageSlider } from "components";
import { styles } from "./Styles";

const HotelModal = (props) => {
  const { visible, item, setVisible } = props;

  return (
    <Modal visible={visible}>
      <ImageSlider images={item?.images} onPress={() => setVisible(false)} />
      <Text style={styles.title}>{item?.name}</Text>
      <Text>{item?.addressLine1}</Text>
      <Text>4.5</Text>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      {/* room tags */}
      {/* price */}
    </Modal>
  );
};

export default HotelModal;
