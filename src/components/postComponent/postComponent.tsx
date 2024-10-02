import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PostComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwidXNlcklkIjoiNjY2NDBmOWQxMGMwMzgyMTQ2MDk1MDNlIiwicm9sZSI6ImFkbWluIiwidGVybXNBbmRDb25kaXRpb25zIjpmYWxzZSwiaWF0IjoxNzI3ODcyNTQ1LCJleHAiOjE3Mjc4NzYxNDV9.gioSMGdUtiCK2eKzFh6yiRD7Q4ySs6qfyxf1el_KcwE'; // Replace with a valid token
        const response = await axios.get('https://platform-sphere-jombl.onrender.com/v1/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      {/* User info and avatar */}
      <View style={styles.userContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/300' }} // Placeholder avatar
        />
        <Text style={styles.username}>Username</Text>
      </View>

      {/* Post image */}
      {item.mediaUrl.length > 0 && <Image style={styles.image} source={{ uri: item.mediaUrl[0] }} resizeMode="cover" />}

      {/* Post actions: Like, Comment, Share */}
      <View style={styles.actionRow}>
        <TouchableOpacity>
          <FontAwesome name="heart-o" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="comment-o" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="paper-plane-o" size={24} color="black" style={styles.actionIcon} />
        </TouchableOpacity>
      </View>

      {/* Post content and date */}
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.date}>{new Date(item.createdAt).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : posts.length === 0 ? (
        <Text>No posts available</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          keyboardShouldPersistTaps="handled"
          // Ensure the FlatList has enough height to enable scrolling
          contentContainerStyle={{ paddingBottom: 20 }} // Optional padding at the bottom
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#eaeaea',
  },
  actionRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'flex-start',
  },
  actionIcon: {
    marginRight: 15,
  },
  content: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
  date: {
    paddingHorizontal: 10,
    marginTop: 5,
    fontSize: 12,
    color: '#999',
  },
});

export default PostComponent;
