# CozyCorner
* [Deployed Front-End page](https://cozycorner-pp5.herokuapp.com/)
* [Deployed Back-End page](https://portfolio-project-5-drf-api.herokuapp.com/)
#
## Navigation
#
* [Bugs](/bugs.md)
    - [Bugs in development](#bugs-in-development)
    - [Bugs left unsolved](#bugs-left-unsolved)
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
       - [Home Page](/features.md#home-page)
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
   - [Initial Deployment](#initial-deployment)
   - [Final Deployment](#final-deployment)
* [Technologies and Libraries](/README.md#technologies-and-libraries)
* [Testing](/testing.md)
    - [First setup](/testing.md#first-setup)
    - [Testing in development](/testing.md#testing-in-development)
    - [Profile](/testing.md#profile)
    - [Post](/testing.md#post)
    - [Comments](/testing.md#comments)
    - [Likes](/testing.md#likes)
    - [Followers](/testing.md#followers)
    - [Messages](/testing.md#messages)
* [User Experience](#user-experience-ux)
    - [Demographics](#demographics)
    - [User Goal](/README.md#user-goals)

#
## Bugs in development
- Added README-files to fast and hindered installment of dependencies
   - Delete all files that could interfere
   - Install dependencies
   - Recreate README-files
- Problem uploading images for Users
   - bug solved by adding back default image to posts/models.py in the Back-End
- While developing the Front-End part of this project I couldn't get post_count, following_count and follow_count to work in the profile.
   - These fields where not added to profiles/serializers.py in the Back-End. 
   - Added items and bug resolved.
#
* [Back to top](#)
#