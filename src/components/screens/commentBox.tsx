import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import getTimeDifference from '../../utils/methods';

const CommentBox = ({
  renderSubComment,
  comment,
  isParent,
  isLastComment,
  isLevelOne,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={{paddingHorizontal: 20}}>
      <View>
        <View
          style={{
            borderLeftWidth: 2,
            borderColor: !isParent && !isLastComment ? 'black' : 'transparent',
            position: 'absolute',
            top: 0,
            bottom: 0,
          }}
        />
        <View style={{flexDirection: 'row'}}>
          {!isParent && (
            <View
              style={{
                width: 20,
                height: 18,
                borderLeftWidth: 2,
                borderBottomStartRadius: 10,
                borderBottomWidth: 2,
                borderBottomLeftRadius: 10,
                borderColor: 'black',
                top: -1,
              }}
            />
          )}
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg',
              }}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'cover',
                borderRadius: 50,
                marginHorizontal: 10,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
            {comment?.comments.length > 0 && (
              <View style={{flex: 1, borderLeftWidth: 2, marginTop: 4}} />
            )}
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#D3D3D3',
                borderRadius: 24,
                padding: 10,
              }}>
              <Text>{comment.id}</Text>
              <Text>{comment.message}</Text>
            </View>
            <TouchableOpacity>
              <Image
                resizeMode="cover"
                style={{
                  width: 84,
                  height: 120,
                  borderRadius: 10,
                  marginVertical: 8,
                }}
                source={{
                  uri: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=600&width=1200&fit=bounds',
                }}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text>{getTimeDifference(comment.createdAt)}</Text>
              <Text>Like</Text>
              <Text>Reply</Text>
            </View>
          </View>
        </View>
        <View style={{paddingLeft: isParent ? 3.7 : isLevelOne ? 23.6 : 26}}>
          {isParent && isCollapsed && (
            <Pressable
              style={{
                marginLeft: 20,
                flexDirection: 'row',
                alignSelf: 'flex-start',
              }}
              onPress={() => setIsCollapsed(false)}>
              <View
                style={{
                  width: 20,
                  height: 18,
                  borderLeftWidth: 2,
                  borderBottomStartRadius: 10,
                  borderBottomWidth: 2,
                  borderBottomLeftRadius: 10,
                  borderColor: 'black',
                }}
              />
              <Text
                style={{
                  paddingVertical: 6,
                  fontWeight: 500,
                  color: 'black',
                  paddingHorizontal: 10,
                }}>
                View More !!
              </Text>
            </Pressable>
          )}
          {isParent ? (
            <Collapsible collapsed={isCollapsed}>
              {renderSubComment(comment?.comments ?? null)}
            </Collapsible>
          ) : (
            renderSubComment(comment?.comments ?? null)
          )}
        </View>
      </View>
      <Modal
        visible={false}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          // setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View style={{position: 'relative'}}>
            <Image
              source={{
                uri: '',
              }}
              style={{
                width: 360,
                height: 700,
                borderRadius: 20,
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                // setModalVisible(false);
                // setImageUrl('');
              }}
              style={{
                position: 'absolute',
                top: 8,
                right: 0,
                backgroundColor: 'transparent',
                borderRadius: 40,
                padding: 5,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CommentBox;
