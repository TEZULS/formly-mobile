import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import { styles } from './ProfileScreen.styles';

const ProfileScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);

  const changeAvatar = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../../assets/left_arrow.png')} style={styles.backButton}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.moreButton}>⋯</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
            <Text style={styles.menuItemText}><Image source={require('../../assets/Vector.png')} style={styles.VectorImage} /> Edit profile</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileInfo}>
          <TouchableOpacity onPress={changeAvatar} style={styles.avatarContainer}>
            <Image source={require('../../assets/pp.png')} style={styles.avatarImage} />
          </TouchableOpacity>
          <Text style={styles.name}>First name: Enzo</Text>
          <Text style={styles.email}>Email: enzo.elkoubi@icloud.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>105</Text>
            <Text style={styles.statLabel}>Subscriptions</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Subscribers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Online 8 hours ago</Text>
            <Text style={styles.statLabel}>Created on May 30, 2025</Text>
          </View>
        </View>

        <View style={styles.achievementsContainer}>
          <View style={styles.achievementItem}>
            <Image source={require('../../assets/streak.png')} style={styles.achievementIcon} />
            <Text style={styles.achievementNumber}>45</Text>
            <Text style={styles.achievementLabel}>Activity day</Text>
          </View>
          <View style={styles.achievementItem}>
            <Image source={require('../../assets/light.png')} style={styles.achievementIcon} />
            <Text style={styles.achievementNumber}>575</Text>
            <Text style={styles.achievementLabel}>XP earned</Text>
          </View>
          <View style={styles.achievementItem}>
            <Image source={require('../../assets/logo.png')} style={styles.achievementIcon} />
            <Text style={styles.achievementNumber}>850</Text>
            <Text style={styles.achievementLabel}>Formly Coins</Text>
          </View>
          <View style={styles.achievementItem}>
            <Image source={require('../../assets/light.png')} style={styles.achievementIcon} />
            <Text style={styles.achievementNumber}>3</Text>
            <Text style={styles.achievementLabel}>Fois dans le top 3</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt inventore sed dolor rerum reprehenderit numquam quam natus sunt quis odio.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;