# CozyCorner
![Am I Responsive](/read_me_map/amiresponsive.png)
#
* [Deployed Front-End page](https://cozycorner-pp5.herokuapp.com/)
* [Deployed Back-End page](https://portfolio-project-5-drf-api.herokuapp.com/)
#
## Navigation
Please note that this documentation has multiple pages
* [Bugs](/bugs.md)
    - [Bugs in development](/bugs.md#bugs-in-development)
    - [Bugs left unsolved](/bugs.md#bugs-left-unsolved)
* [Credits](#credits)
    - [Mentoring](#thank-you)
    - [Content credits](#content-credits)
    - [Media](#media)
* [Demographics](#demographics)
* [Deployment](/deployment.md)
    - [Initial Deployment](/deployment.md#initial-deployment)
    - [Final Deployment](/deployment.md#final-deployment)
* [Design](#design)
* [Features](#user-feautures)
   - [Existing Features](#existing-features)
       - [Navigation & Authentication](#navigation--authentication)
       - [Profile](#profile)
       - [Post](#post)
       - [Likes](#likes)
       - [Home Page](#home-page)
   - [Future Features](#future-features)
* [Planning](#planning)
   - [Initial planning](#initial-plan)
   - [Plan](#plan)
   - [Lucid Chart](#lucidchart)
* [Project Goals](#project-goals)
* [SetUp](/setup.md)
   - [Set up repository](/setup.md#set-up-repository)
   - [Set up project in GitPod](/setup.md#set-up-project-in-gitpod)
   - [Set up unique model in Gitpod](/setup.md#set-up-unique-model-in-gitpod)
* [Technologies and Libraries](#technologies-and-libraries)
* [Testing](/testing.md)
    - [First setup](/testing.md#first-setup)
    - [Testing in development](/testing.md#testing-in-development)
    - [Profile](/testing.md#profile)
    - [Post](/testing.md#post)
    - [Comments](/testing.md#comments)
    - [Likes](/testing.md#likes)
    - [Followers](/testing.md#followers)
    - [Contacts](/testing.md#contacts)
* [User Feautures](#user-feautures)
#
## Project Goals
- Design an interactive Front-End web application using HTML, CSS and advanced JavaScript, based on component composition and separation of concerns.
   - For more information see [Front-End Repository](https://github.com/mikakallberg/cozycorner)
- Explain the key role that specialist Front-End developers perform in modern software development/delivery terms.
- Create an Application Programming Interface (current repository) for comsumption by 3rd party applications.
   - Create Unique models.
      - Number of models created four, two in contacts and two in imessages.
- Create an Interactive Front-End application that consumes API data.
#
## Key role of a Front-End developer
- The key-role of a Front-End developer is to build a set of clean, user friendly and reusable resources/pages, that independent of one another can be reused, even in other projects, and updated without refreshing the whole page it's view on. 
#
## Difference for the User when using React compaired to vanilla JavaScript
- Since React JS is built up of components that are reusable on several "pages", it's more intuitive for the user. They don't have to learn to "drive the car" with each new page they visit on the platform, and the whole page doesn't reload which would paus the user flow.
#
## Planning
### Initial plan
#
Initially this project was planned as a planner tool, but after consulting  my mentor, it was switched to follow the walkthrough from the lessons on Rest-framework and React. The wireframe for that initial plan can be found if you follow this link: https://mikakallberg.github.io/wireframe-planner/
#
### Plan
#
- The current direction for this project is to follow the walkthrough given by Code Institute and add two unique models. These are Message in app imessages and Contacts in contacts. Which where added to give the User an opurtunity to message other Users directly and have private conversations.
#
### LucidChart
#
LucidChart Back-End                                         |
:----------------------------------------------------------:|
![LucidChart Back-End](/read_me_map/lucidchart.png)|
#
LucidChart FrontEnd                                                    |
:---------------------------------------------------------------------:|
![LucidChart Front-End first](/read_me_map/lucidchart_frontend_one.png)|
#
LucidChart FrontEnd                                                    |
:---------------------------------------------------------------------:|
![LucidChart Front-End second](/read_me_map/lucidchart_frontend_two.png)|
#
## Technologies and Libraries

### Languages used
- [Django Rest Framework](https://www.django-rest-framework.org/) 

- [HTML](https://www.w3schools.com/html/html_intro.asp)

- [CSS](https://www.w3schools.com/css/css_intro.asp)

- [React JS](https://reactjs.org/)

### Databases
- [Postgresql](https://www.postgresql.org/)
  - As database in Heroku

### Frameworks, tools and libraries
#### Back-End
- [Django Rest Framework](https://www.django-rest-framework.org/)
- [Channels-redis](https://channels.readthedocs.io/en/latest/index.html) 
   - Websocket tool
- [Pillow](https://pillow.readthedocs.io/en/stable/reference/Image.html)
   - To assist upload images to cloudinary
- [Psycopg2](https://pypi.org/project/psycopg2/)
   - PostgreSQL database adapter for python
- [JSON Web Tokens](https://jwt.io/)
   - Http-safety, web-tokens for kepping user logged in, authentication etc.
#### Front-End
- [React JS](https://reactjs.org/)
- [JSON Web Tokens](https://jwt.io/)
    - Web-tokens for kepping user logged in, authentication etc.
- [React Bootstrap](https://react-bootstrap-v4.netlify.app/)
   - Specilaize Bootstrap framework with React components
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
   - Assist in switches, routes and links for React apps.


### Cloud storage and deployment services
- [Cloudinary](https://cloudinary.com/)
- [Heroku](https://www.heroku.com/)
- [Gunicorn](https://gunicorn.org/)

## Demographics
- The intended user for this API is someone who wants to build a Front-End application consistent with the below stated User Goals.
- The Cozy Corner is intented for a demographic that likes social media, but want a warmer and calmer space to interact with other people, more personable.
#
## User Feautures
### Navigation & Authentication
- Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
- Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
- Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
- Avatar: As a user I can view user's avatars so that I can easily identify users of the application
#
### Profile
- Profile page: As a user I can view other users profiles so that I can see their posts and learn more about them
- Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which profiles are popular
- User profile - user stats: As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
- Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
- View all posts by a specific user: As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
- Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
- Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
#
### Post
- Post page: As a user I can view the posts page so that I can read the comments about the post
- Edit post: As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
- Create a comment: As a logged in user I can add comments to a post so that I can share my thoughts about the post
- Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is
- View comments: As a user I can read comments on posts so that I can read what other users think about the posts
- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
- Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment
### Likes
- Create posts: As a logged in user I can create posts so that I can share my images with the world!
- View a post: As a user I can view the details of a single post so that I can learn more about it
- Like a post: As a logged in user I can like a post so that I can show my support for the posts that interest me
#
### Home Page
- View most recent posts: As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
- As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
- View liked posts: As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
- View posts of followed users: As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
- Infinite scroll: As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc
#
# Future Features
- Future feautures are to user the instant message functions in the Back-End to make it possible for the Users to chat with each other.
   - This will include:
       - Making other Users contacts and displaying them in a contactlist
       - Create messages and sending them to the contacts
       - Edit a message that has been sent
       - Deleteing a message tha has been sent
- Make it possible for Users to delete their whole profiles
#
- For more information please see Agile development under the tab Projects in GitHub repo-page.
#
## Design
### Wireframes
Wireframe for desktop                                   | Wireframe for mobile
:------------------------------------------------------:|:------------------------------------------------------:
![Wireframe desktop](/read_me_map/wireframe_browser.png)| ![Wireframe mobile](/read_me_map/wireframe_mobile.png)
#
### Color Palette
![Color palette](/read_me_map/theme_front_end.png)
## Credits
## Thank you
- [Spencer Barriball](https://github.com/5pence) for always being there and being a fantastic mentor.
- Tutors at Code Institute
- Code Institute Slack-channel community for being the good and funny bunch of people I need!

### Content credits
- The biggest credit has to go Code Institute, I followed the Walkthroughs given, and developed a little on top of it.

### Media
- For how to make the README nav-bar https://github.com/artkonekt/menu/blob/master/README.md was used.
- As template for README https://github.com/mikakallberg/Portfolio-Project-4 was used.
- The theme for this project is taken from Caroline Forseys [article](https://blog.hubspot.com/marketing/color-palette-inspiration) on Hubspot. The theme is called Atumn Color Palette.

### Image credit
- The logo and favicon is from Pixabay User [cromaconceptovisual](https://pixabay.com/users/cromaconceptovisual-4595909/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6855730)
- The upload image is credited to [Jannik Texler](https://pixabay.com/users/texler-3778340/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2398772).
- The magnifying glass is credited to [Kate](https://pixabay.com/users/gdakaska-1113303/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1724298)
- The image on the sign in page is from [Monika](https://pixabay.com/users/monikas_wunderwelt-9556472/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=750662)
- The image on the sign up page is from [Anja](https://pixabay.com/users/cocoparisienne-127419/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2066402)
- Christians profile picture is from [Ryan McGuire](https://pixabay.com/users/ryanmcguire-123690/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=362183)
- Mikaelas profile picture is from [DanaTentis](https://pixabay.com/users/danatentis-2743349/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2042536)
- Matts profile picture is from [Leroy Skalstad](https://pixabay.com/users/leroy_skalstad-1202818/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2442565)
- Celines profile picture is from [Anastacia Cooper](https://pixabay.com/users/ultra_nancy-5719762/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2436545)
- Cozy fireplace is from [Rosy - The world is worth thousands of pictures](https://pixabay.com/users/roszie-6000120/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7497342)
- The wreath is from [Bianca Van Dijk](https://pixabay.com/users/biancavandijk-9606149/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5831768)
- Woman on mountain is from [StockSnap](https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2591874)
- Camera and maps is from [Dariusz Sankowski](https://pixabay.com/users/dariuszsankowski-1441456/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1130731)
- Woman on a hike is from [Olya Adamovich](https://pixabay.com/users/olichel-529835/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2896389)
- Man on a hike is from [Hermann Traub](https://pixabay.com/users/hermann-130146/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=455338)
#
* [Back to top](#)
#
