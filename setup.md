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
* [Deployment](/deployment.md)
    - [Initial Deployment](/deployment.md#initial-deployment)
    - [Final Deployment](/deployment.md#final-deployment)
* [Design](/README.md#design)
* [Features](/features.md)
   - [Existing Features](/features.md#existing-features)
       - [Profile](/features.md#profile)
       - [Post](/features.md#post)
       - [Comments](/features.md#comments)
       - [Likes](/features.md#likes)
       - [Followers](/features.md#followers)
       - [Messages](/features.md#messages)
   - [New Features](/features.md#new-features)
* [Planning](#planning)
   - [Initial planning](#initial-plan)
   - [Plan](#plan)
   - [Lucid Chart](#lucidchart)
* [SetUp](/setup.md)
   - [Set up repository](#set-up-repository)
   - [Set up project in GitPod](#set-up-project-in-gitpod)
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
- In Heroku Config Vars for the Back-End app:
   - Add CLIENT_ORIGIN with the Front-End Heroku [launch page](https://cozycorner-pp5.herokuapp.com/)
   - Add CLIENT_ORIGIN_DEV with the Front-End Preview url (this changes over time and is a known bug, solution is an update of the Config Vars when needed)
#
* [Back to top](#)
#