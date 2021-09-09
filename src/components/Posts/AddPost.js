import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView, 
  TextInput,
  Text
} from 'react-native';
import ImageIcon from '../../assets/svg/ImageIcon';
import {colors, relWidth} from '../../config/consts';
import Button from '../ui/Button';
import Label from '../ui/Label';
import {FullCenterView, Row} from '../ui/Layouts';
import {styles as cardStyles} from './PostCardStyles';
import {launchImageLibrary} from 'react-native-image-picker';
import useToast from '../../hooks/useToast';
import axiosClient from '../../config/axiosClient';

const AddPost = ({visible, setVisible, setPosts}) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState()
  const [ToastAlert, showToast] = useToast();
  const [uploadProgress, setUploadProgress] = useState()
  

  const handlePublish = async () => {
        if (title.trim() === '' || content.trim() === '' || !image) {
            showToast({msg: 'Fill in all the fields'})
            return;
        }

        const form = new FormData();
        form.append('title', title)
        form.append('content', content)
        form.append('image', {name: image.fileName, type: image.type, uri: image.uri});

        try {
            const config = {
                onUploadProgress: function(progressEvent) {
                  let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                  setUploadProgress(percentCompleted)
                }
              }
            const res = await axiosClient.post('/posts', form, config)
            setPosts((prev) => [res.data, ...prev])
            setTitle('')
            setContent('')
            setImage()
            setUploadProgress()
            setVisible(false)
        } catch (error) {
            showToast({msg: 'An error occurred'})
        }
  }

  const handleSelectImage = () => {
     launchImageLibrary({mediaType: 'photo'}, ({assets, errorMessage}) => {
        if (assets) {
            const image = assets[0];
            setImage(image)
        }
     })
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
 
      <FullCenterView style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
         <ToastAlert />
        <View style={styles.modalView}>
            {uploadProgress && <Text style={{color: colors.darkTwo}}>{uploadProgress}%</Text>}
          <Label text="New Post" />
          <Row>
            <TouchableOpacity
              style={cardStyles.imageContainer}
              activeOpacity={0.5}
              onPress={handleSelectImage}
              >
              <Image 
                style={cardStyles.image} 
                resizeMode="cover"
                source={{uri: image && image.uri}}
            />
              <ImageIcon size={35} />
            </TouchableOpacity>
            <ScrollView style={cardStyles.contentContainer}>
              <TextInput 
              placeholder="Title" 
              style={cardStyles.title} 
              onChangeText={(text) => setTitle(text)}
              value={title}
              />
              <TextInput
                placeholder="Content"
                multiline={true}
                style={cardStyles.content}
                onChangeText={(text) => setContent(text)}
                value={content}
              />
            </ScrollView>
          </Row>
          <Button text="Publish"  onPress={handlePublish}/>
        </View>
      </FullCenterView>
    </Modal>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  modalView: {
    width: relWidth(80),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
  },
});
