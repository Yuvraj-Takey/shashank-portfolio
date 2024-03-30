import {getFollowers} from "info-insta"
// const infoInsta = require('info-insta');

// const followers = require('instagram-followers');
// import followers from "instagram-followers"

const getFollowersServ = async () => {
    // const followerCount = await infoInsta.getFollowers('shashank_udakhe');
    const followerCount = await getFollowers('shashank_udakhe');    
    return followerCount;
}

export {getFollowersServ}

