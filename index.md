# USA COVID-19 Tracker

Watch the video below to see a brief overview of the web app:

{% include youtubePlayer.html id="c2oZnhXck-s" %}

[Click here to access the live webapp online.](http://ec2-54-69-145-50.us-west-2.compute.amazonaws.com:3000)

## Group Members

- Sean Sanderson - Front End (React)
- Jasmine Jess - Backend Research/Cloud infrastructure (Django/AWS)
- Geoffrey Meier - Continuous Integration/Cloud infrastructure (Travis CI/AWS)

## Technologies

### ReactJS

We used ReactJS for our frontend. This includes an interactive map, which allows the user to click on a specific state and will then pop up with a new view showing that state's COVID-19 data

### API (COVID Tracking Project)

We used the [COVID Tracking Project](https://covidtracking.com/) API to pull our COVID data. This information is pulled directly by our app's frontend framework.

### AWS

We used an AWS EC2 instance to host our application on the web. We also used AWS CodePipeline and CodeDeploy to implement continuous integration and deployment for our project.

### Travis CI (scrapped)

Our project initially used Travis CI for continuous integration, but this was later switched over to using AWS CodePipeline and CodeDeploy

### Django (scrapped)

Our initial plan was to use Django for a backend, and to pull and cache data from COVID Tracking Project in a database. However, this proved to be a much larger undertaking than we had anticipated, and the decision was made to use a serverless (frontend-only) approach to pull the data.


## Skills Learned

Through this project, we also learned and developed a number of skills, including collaborating remotely using tools like Zoom and Google Hangouts, as well as working as part of a team to develop a project from the ground up.

