import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { PaginationDot } from "components";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from "./Styles";

const ImageSlider = (props) => {
  const { images, onPress } = props;

  return (
    <View style={styles.scrollContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {images?.map((image, index) => (
          <ImageBackground
            style={styles.image}
            source={{ uri: image.url }}
            key={index}
          >
            <TouchableOpacity style={styles.closeWrapper} activeOpacity={0.7} onPress={onPress}>
              <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.bubbleWrapper}>
              {images?.map((image) => (
                <>
                  {console.log(image?.position, index)}
                  <PaginationDot isSelected={image?.position === index} />
                </>
              ))}
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageSlider;
