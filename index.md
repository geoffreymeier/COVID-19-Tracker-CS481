## USA COVID-19 Tracker

Watch the video below to see a brief overview of the web app:

{% include youtubePlayer.html id="c2oZnhXck-s" %}

[Click here to access the live webapp online.](http://ec2-54-69-145-50.us-west-2.compute.amazonaws.com:3000)

### Group Members

- Sean Sanderson - Front End (React)
- Jasmine Jess - Backend Research/Cloud infrastructure (Django/AWS)
- Geoffrey Meier - Continuous Integration/Cloud infrastructure (Travis CI/AWS)

### Technologies Used

#### ReactJS

We used ReactJS for our frontend. This includes an interactive map, which allows the user to click on a specific state and will then pop up with a new view showing that state's COVID-19 data

#### API (COVID Tracking Project)

We used the [COVID Tracking Project](https://covidtracking.com/) API to pull our COVID data. 

#### AWS

We used an AWS EC2 instance to host our application on the web. We also used AWS CodePipeline and CodeDeploy to implement continuous integration and deployment for our project.
