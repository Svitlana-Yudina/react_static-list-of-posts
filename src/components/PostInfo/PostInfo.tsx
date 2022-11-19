import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {(user)
            ? <UserInfo user={user} />
            : 'Oops... Unknown user'}

        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>
      <CommentList comments={comments} />
    </div>
  );
};
