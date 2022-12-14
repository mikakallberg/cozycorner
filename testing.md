# CozyCorner

* [Deployed Front-End page](https://cozycorner-pp5.herokuapp.com/)
* [Deployed Back-End page](https://portfolio-project-5-drf-api.herokuapp.com/)
#
## Navigation
#
* [Bugs](/bugs.md)
    - [Bugs in development](/bugs.md#bugs-in-development)
    - [Bugs left unsolved](/bugs.md#bugs-left-unsolved)
* [Credits](/README.md#credits)
    - [Mentoring](/README.md#thank-you)
    - [Content credits](/README.md#content-credits)
    - [Media](/README.md#media)
* [Demographics](/README.md#demographics)
* [Design](/README.md#design)
* [Features](/README.md#user-feautures)
   - [Existing Features](/README.md#existing-features)
       - [Navigation & Authentication](/README.md#navigation--authentication)
       - [Profile](/README.md#profile)
       - [Post](/README.md#post)
       - [Likes](/README.mdd#likes)
       - [Home Page](/README.md#home-page)
   - [Future Features](/README.md#future-features)
* [Planning](/README.md#planning)
   - [Initial planning](/README.md#initial-plan)
   - [Plan](/README.md#plan)
   - [Lucid Chart](/README.md#lucidchart)
* [Project Goals](/README.md#project-goals)
* [SetUp](/setup.md)
    - [Set up repository](/setup.md#set-up-repository)
    - [Set up project in GitPod](/setup.md#set-up-project-in-gitpod)
    - [Set up unique model in Gitpod](/setup.md#set-up-unique-model-in-gitpod)
    - [Initial Deployment](/setup.md#initial-deployment)
    - [Final Deployment](/setup.md#final-deployment)
* [Technologies and Libraries](/README.md#technologies-and-libraries)
* [Testing](/testing.md)
    - [First setup](#first-setup)
    - [Testing in development](#testing-in-development)
    - [Profile](#profile)
    - [Post](#post)
    - [Comments](#comments)
    - [Likes](#likes)
    - [General testing](#general-testing)
* [User Feautures](/README.md#user-feautures)
  
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
- All testing is done on multiple users
#
## Profiles
- Testing creating a profile
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
     - NavBar in different views
     - Responsiveness of the layout down to 320px.
     - upload of images to Cloudinary from UI
     - Login
        - error thrown if wrong username
        - error thrown if wrong password
        - error thrown if no username
        - error thrown if no password
     - Register
        - error thrown if no username
        - error thrown if username is taken
        - error thrown if no password and confirmed password
        - error thrown if password and confirm password doesn't add upp
     - Saving data to Back-End
     - Editing data in Back-End from Front-End, updated_at is updated in Back-End
     - No broken links found
     - testing responsiveness with [AmIResponsive](https://ui.dev/amiresponsive?url=https://cozycorner-pp5.herokuapp.com/)
#
## Images from testing
Error credentials                                       | Error login
:------------------------------------------------------:|:--------------------------------------------:
![Error credentials](/read_me_map/error_credentials.png)| ![Error login](/read_me_map/error_login.png)
#
Error message image upload                                 | Error message user exists
:---------------------------------------------------------:|:----------------------------------------------------------:
![Error message image](/read_me_map/errormessage_image.png)| ![Error message user exists](/read_me_map/user_exists.png)
#
Access edit and delete comment                                      | Access Edit and delete post
:------------------------------------------------------------------:|:------------------------------------------------------------:
![Acces edit and delete](/read_me_map/access_editdelete_comment.png)| ![Access edit and delete](/read_me_map/access_editdelete.png)
#
Searchbar post                                    | Searchbar user
:------------------------------------------------:|:-------------------------------------------------:
![Searchbar post](/read_me_map/searchbar_post.png)| ![Searchbar user](/read_me_map/searchbar_user.png)
#
Search bar not found                                        | Updated image
:----------------------------------------------------------:|:-----------------------------------------------:
![Search bar not found](/read_me_map/searchbar_notfound.png)| ![Updated image](/read_me_map/updated_image.png)
#
User already exists mobile                                | Password to short
:--------------------------------------------------------:|:------------------------------------------------------:
![User already exists mobile](/read_me_map/user_taken.png)| ![Password to short](/read_me_map/password_toshort.png)
#
Blank lines                                 | Passwords doesn't match
:------------------------------------------:|:-------------------------------------------------------------:
![Blank lines](/read_me_map/blank_lines.png)| ![Passwords doesn't match](/read_me_map/password_nomatch.png)
#
Unable to login with credentials mobile                                    |
:-------------------------------------------------------------------------:|
![Unable to login with credentials mobile](/read_me_map/unable_to_login.png)| 
#
* [Back to top](#)
#