# Project Assignment Flow: 

* I have an extensive working knowledge on working in jenkins which is an ci server from building the application to deploying it to the Kubernetes clusters in aws.

* I have written robust pipeline scripts for my java based applications using declarative pipelines and groovy scripts.

* Initially configured the GitHub with Jenkins server for authentication to the GitHub repository using the pat(personal access token).

* created a multibranch pipeline job for the microservice so that whenever developer pushed the code to GitHub Jenkins will pull the latest code.

* And in the pipeline script I have written multiple stages starting from the build stage to deploying the application to the Kubernetes clusters.

* As we are developing the Go and NextJs based microservices we have used node and react and golangauge to build the applications, we have installed and configured them in Jenkins for the automatic builds and generating the executables out of it. And by default we will skip the unit tests in this stage as we are having the another stage for test. as I have mentioned we have used multiple packages for that we have used plugins in the Jenkins for configuration and all.IN the next stage we will test the application.

* After that we have sonar stage which is for code quality, we have configured it in a way that this stage will only pass if they(Developers) maintain a good coding standards while developing the application itself and if this stage will fail then it wont move to the next stage.

* We will configure quality gates in the sonar server and will write a condition in this sonar stage to wait for this pipeline only certain amount time and if the sonar server wont respod within that time with the code scan result then the pipeline will break.
in this stage we configured the SonarServer details in the Jenkins pipeline for that we have used SonarQube plugin.

* If everything goes well then we have a stage for storing the generated artifact into the artifact registry and for that we have used the JFrog tool and we configured this JFrog server in the Jenkins using the JFrog plugin. All the JFrog server details we have configured in our pipeline script under the environment variables so that the authentication will happen automatically.

* And now we need to build the docker image out of the Docker file which we have written in the project folder for this we have one stage in our pipeline which will build the Dockerfile and generates the docker image out of it and then it will push the docker image to the Docker hub. So total we have three steps over here one is to build the Docker image out of the Dockerfile which is present in the project folder. Second one is to authenticate or login to the Docker hub and third is to push the image for this we have configured the Docker hub credentials and server details in our pipeline in the environment variables so that the authentication will happen without manual intervention.

* Now we have developed the pipeline k8s deployment and helm deployments for multiple purpose using the shared library concepts. For this we have created our shared library folder for our entire organization and configured it in the Jenkins server so that every microservice will use this common and dynamic shared library without needing to wrote the pipeline for every individual microservice by this we achieved code reusability and much more.

* For this Kubernetes cluster and we have used AWS cloud eks service, For installing this we have used a terraform script and for authentication to this cluster we have written a groovy method as part of our pipeline so that it will authenticate every time to connect to this cluster automatically and then we have a dynamic method for deploying the application to this k8s cluster 
DYNAMIC method I mean every time a new commit happen to the source code and new build gets generated and new artifact and then a new docker image and this new docker image will get replaced automatically to the k8s_env.yaml(which is present in the application folder).

* This is how I have developed the Jenkins pipeline for the GoProject and Nextjs project.

* For WordPress Application I have written required kubernetes yaml files and executed it through the pipleine by writing some dynamic groovy methods which will execute those yaml files so that the wordpress webapp get deployed.


