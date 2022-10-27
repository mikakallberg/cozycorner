# CozyCorner

* [Deployed Front-End page](https://cozycorner-pp5.herokuapp.com/)
* [Deployed Back-End page](https://portfolio-project-5-drf-api.herokuapp.com/)
#
## Navigation
#
* [Bugs](/bugs.md)
    - [Bugs in development](/bugs.md#bugs-in-development)
    - [Bugs left unsolved](/bugs.md#bugs-left-unsolved)
* [Credits](#credits)
    - [Mentoring](#thank-you)
    - [Content credits](#content-credits)
    - [Media](#media)
* [Deployment](/deployment.md)
    - [Initial Deployment](/deployment.md#initial-deployment)
    - [Final Deployment](/deployment.md#final-deployment)
* [Design](/README.md#design)
* [Features](/README.md#user-feautures)
   - [Existing Features](/README.md#existing-features)
       - [Navigation & Authentication](/README.md#navigation--authentication)
       - [Profile](/README.md#profile)
       - [Post](/README.md#post)
       - [Likes](/README.mdd#likes)
       - [Home Page](/features.md#home-page)
   - [Future Features](/README.md#future-features)
* [Learning Outcomes](#learning-outcomes)
* [Planning](#planning)
   - [Initial planning](#initial-plan)
   - [Plan](#plan)
   - [Lucid Chart](#lucidchart)
* [SetUp](/setup.md)
   - [Set up repository](/setup.md#set-up-repository)
   - [Set up project in GitPod](/setup.md#set-up-project-in-gitpod)
   - [Set up unique model in Gitpod](/setup.md#set-up-unique-model-in-gitpod)
* [Technologies and Libraries](#technologies-and-libraries)
* [Testing](/testing.md)
    - [First setup](#first-setup)
    - [Testing in development](#testing-in-development)
    - [Profile](#profile)
    - [Post](#post)
    - [Comments](#comments)
    - [Likes](#likes)
    - [General testing](#general-testing)
* [User Experience](#user-experience-ux)
    - [Demographics](#demographics)
    - [User Goal](#user-goals)
  
#
## First setup
- Test initial launch of React App in preview
   - Successfull, please see image
- Test initial launch in Heroku
   - Successfull, please see image
#
React Compiles Successfully in Preview                                |
:--------------------------------------------------------------------:|
![React Compile Preview](/read_me_map/react_compiled_successfully.png)|
#
React Compiles Successfully from Heroku                       |
:------------------------------------------------------------:|
![React Compile Heroku](/read_me_map/heroku_react_success.png)|
#
# Testing in development
- A logged out User can only view items
- A logged out User can log in or register an account
#
## Profiles
- Testing creating a profile for the User Matt
- Testing editing profile: 
         - Bio
         - Image
         - Username
         - Password
     - Successfull
- Testing Follow and Unfollowing other Users
    - Following from 'Most Followed Users'
    - Following from Profile page
- Testing items followers and following change when following and unfollowing a User
- A User can view other Users profiles
- A User can only access the edit and delete tools on the Profile page they own.
- The posts from the Users a User follows appear on the Feed-page
- If user logs out from edit profile-page, user is transported to home-page
- if user tries to access edit profile-page from logged out, they are transported to home-page
#
## Post
- A logged in user can create posts with a chosen image or with a default image
- If title is not filled in error thrown: "This field may not be blank"
- If image not chosen error thrown
- If image is to big byte-wise error thrown
- If image is to big pixel-wise error thrown
- If cancel create post user is transported to home page
- If logged user tries to acces create post-page, they are transported to logged out home-page

#
## Comments
- A User can view their own and other Users posts
   - In that view they can comment that post
   - If a User created a comment, they can then edit or delete that comment
   - If a user did not create a comment, they can only view the comment
   - If the owner of the commented post, deletes that posts, the comments are deleted as well
- The comment-count changes when the number of comments change
- No empty comment is accepted, error thrown
#
## Likes
- A User can like and unlike other Users posts
- A User can not like their own post
- A User can only like a post if they haven't already liked it
- A users liked posts appear on the Like-page
- The like-count changes when the number of likes change-
- If a user logs out from Liked-page, they are transported to home page

#
## General Testing
- Tested the:
     - Collaps of the NavBar
     - Toggle of the Navbar
     - Responsiveness of the layout
     - upload of images to Cloudinary from UI
     - Login
        - error thrown if wrong username
        - error thrown if wrong password
        - error thrown if no username
        - error thrown if no password
     - Register
        - error thrown if no username
        - error thrown if no password and confirmed password
        - error thrown if password and confirm password doesn't add upp
     - Saving data to Back-End
     - Editing data in Back-End from Front-End, updated_at is updated in Back-End
     - No broken links found
     - testing responsiveness with [AmIResponsive](https://ui.dev/amiresponsive?url=https://cozycorner-pp5.herokuapp.com/)

#
* [Back to top](#)
#