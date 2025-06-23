import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./CourseCard.styles";

const CourseCard = ({ course, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(course.isFavorite || false);

  const handleFavoritePress = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    if (onToggleFavorite) {
      onToggleFavorite(course.id, newValue);
    }
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="star"
        size={16}
        color={index < rating ? "#FFD700" : "#E0E0E0"}
        style={styles.star}
      />
    ));

  return (
    <View style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.image} />

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavoritePress}
      >
        <Icon
          name={isFavorite ? "heart" : "heart-o"}
          size={20}
          color={isFavorite ? "#e0245e" : "#black"}
        />
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.category}>{course.category}</Text>
        <Text style={styles.title}>{course.title}</Text>
        <View style={styles.footer}>
          <View style={styles.rating}>{renderStars(course.rating)}</View>
          <Text style={styles.price}>{course.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CourseCard;