import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageIcon from '../../assets/svg/ImageIcon';
import { colors } from '../../config/consts';
import { Row } from '../ui/Layouts';
import { styles } from './PostCardStyles'


const PostCard = ({image, title, content}) => {
    return (  
        <View style={styles.cardContainer}>
             <Row>
                 <View style={styles.imageContainer}>
                     <Image 
                        style={styles.image}
                        source={{uri: image}}
                        resizeMode= 'cover'
                     />
                     <ImageIcon size = {35}/>
                 </View>
                  <ScrollView style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text  style={styles.content}>{content}</Text>
                  </ScrollView>
             </Row>
        </View>
    );
}
 
export default PostCard;