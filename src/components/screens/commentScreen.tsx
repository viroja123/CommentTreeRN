import React from 'react';
import CommentBox from './commentBox';
import commets from './commentsData.json';
import {FlatList, View} from 'react-native';

const CommentScreen = () => {
  const renderComments = ({item, index}) => {
    console.log('item', item);
    return (
      <CommentBox
        comment={item}
        isParent={true}
        isLastComment={commets.post.length - 1 === index}
        renderSubComment={subcomments => {
          return subcomments
            ? subcomments.map((subcomment, subCommentIndex) => {
                return (
                  <CommentBox
                    key={`SubComment-${subCommentIndex}`}
                    comment={subcomment}
                    isLastComment={subcomments.length - 1 === subCommentIndex}
                    isLevelOne={true}
                    renderSubComment={superSubComments => {
                      return superSubComments
                        ? superSubComments.map(
                            (superComment, superCommentIndex) => {
                              return (
                                <CommentBox
                                  key={`SuperComment-${superCommentIndex}`}
                                  renderSubComment={() => null}
                                  isLastComment={
                                    superSubComments.length - 1 ===
                                    superCommentIndex
                                  }
                                  comment={superComment}
                                />
                              );
                            },
                          )
                        : null;
                    }}
                  />
                );
              })
            : null;
        }}
      />
    );
  };
  return (
    <FlatList
      data={commets.post}
      renderItem={renderComments}
      keyExtractor={comment => `Comment-${comment.id}`}
    />
  );
};

export default CommentScreen;
