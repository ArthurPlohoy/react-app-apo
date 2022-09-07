import React from 'react';
import content from './Profile.module.css';

const Profile = () => {
    return <div className={content.content}>
        <div>
            <img src='https://levelup.ua/wp-content/uploads/2019/10/anadea_2.jpg' />
        </div>
        <div>
            Avatar + description
        </div>
    <div className={content.posts}>
            my posts
            <div className={content.item}>Post 1</div>
            <div className={content.item}>Post 2</div>
            <div className={content.item}>Post 3</div>
            <div className={content.item}>Post 4</div>
            <div className={content.item}>Post 5</div>
        </div>
    </div>
}

export default Profile;