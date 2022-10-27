# CozyCorner
* [Deployed Front-End page](https://cozycorner-pp5.herokuapp.com/)
* [Deployed Back-End page](https://portfolio-project-5-drf-api.herokuapp.com/)
#
## Navigation
#
* [Learning Outcomes](#learning-outcomes)
* [Bugs](/bugs.md)
    - [Bugs in development](/bugs.md#bugs-in-development)
    - [Bugs left unsolved](/bugs.md#bugs-left-unsolved)
* [Credits](#credits)
    - [Mentoring](#thank-you)
    - [Content credits](#content-credits)
    - [Media](#media)
* [Design](/README.md#design)
* [Features](/README.md#user-feautures)
   - [Existing Features](/README.md#existing-features)
       - [Navigation & Authentication](/README.md#navigation--authentication)
       - [Profile](/README.md#profile)
       - [Post](/README.md#post)
       - [Likes](/README.mdd#likes)
       - [Home Page](/features.md#home-page)
   - [Future Features](/README.md#future-features)
* [Planning](/README.md#planning)
   - [Initial planning](/README.md#initial-plan)
   - [Plan](/README.md#plan)
   - [Lucid Chart](/README.md#lucidchart)
* [SetUp](/setup.md)
   - [Set up repository](#set-up-repository)
   - [Set up project in GitPod](#set-up-project-in-gitpod)
    - [Initial Deployment](#initial-deployment)
    - [Final Deployment](#final-deployment)
* [Testing](/testing.md)
    - [First setup](/testing.md#first-setup)
    - [Testing in development](/testing.md#testing-in-development)
    - [Profile](/testing.md#profile)
    - [Post](/testing.md#post)
    - [Comments](/testing.md#comments)
    - [Likes](/testing.md#likes)
    - [Followers](/testing.md#followers)
    - [Messages](/testing.md#messages)
* [Technologies and Libraries](#technologies-and-libraries)
* [User Experience](#user-experience-ux)
    - [Demographics](#demographics)
    - [User Goal](#user-goals) 
#
# Set up repository
- Start with a new empty repo
   - Since there are items from the full-template that can interfere with React.
   - choose a name with all lower case letters
   - Create repository
   - Add items to do
   - Create project
   - Add items to project
#
# Set up project in GitPod
- Launch repository to GitPod and let build finish to minimize risk of disturbance to automatic setup
- Enter command: "npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm"
   - To install correct dependencies
   - All dependencies needed are now installed.
- npm start
   - to test if React is compiled successfully
#
# Initial Deployment
- After the [set up in GitPod](#set-up-project-in-gitpod), make the initial deployment to Heroku.
- In Heroku:
    - Front-End app
        - Create a new app called cozycorner-pp5
        - connect to cozycorner repository in GitHub
        - Launch app to create a url
        - After connection up the Front-End and the Back-End, relaunch page with API database
    - BackEnd app
        - In Config Vars
            - Add CLIENT_ORIGIN and https://cozycorner-pp5.herokuapp.com as value to give deployed page access to API database
            - Add CLIENT_ORIGIN_DEV and https://3000-mikakallberg-cozycorner-5xekjfruf8l.ws-eu72.gitpod.io as value (this changes over time and is a known bug, solution is an update of the Config Vars when needed)
#
# Final Deployment
#
* [Back to top](#)
#