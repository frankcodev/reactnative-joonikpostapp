import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import axiosClient from '../../config/axiosClient';
import { relHeight } from '../../config/consts';
import tokenHeader from '../../config/tokenHeader';
import useToast from '../../hooks/useToast';
import SessionHeader from '../Auth/SessionHeader';
import Button from '../ui/Button';
import AddPost from './AddPost';
import PostCard from './PostCard';

const PostsScreen = () => {

    const [posts, setPosts] = useState([])
    const [ToastAlert, showToast] = useToast();

    const handleGetPosts = async () => {
        try {
            await tokenHeader();
            const res = await axiosClient.get('/posts');
            setPosts(res.data.reverse())
        } catch (error) {
            showToast({msg: 'An error occurred'})
        }
    }

    useEffect(() => {
        handleGetPosts();
    }, [])


    const [addVisible, setAddVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container} >
            <AddPost visible={addVisible} setVisible={setAddVisible} setPosts={setPosts}/>
            <ToastAlert />
            <SessionHeader />
            <View style={styles.postsContainer}>
                <FlatList 
                    data = {posts}
                    renderItem = {({item}) => (
                        <PostCard {...item} />
                    )}
                    ItemSeparatorComponent = {() => (
                        <View style={{height: 30}}></View>
                    )}
                    style={{paddingHorizontal: 28}}
                />
              </View>
            
            <Button text="Add new" style={{ marginBottom: 40 }} onPress={() => setAddVisible(true)}/>
         
        </SafeAreaView>
    )
}

export default PostsScreen;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    postsContainer: {
      maxHeight: relHeight(60)
    }
})