FROM node:20-alpine3.17

RUN mkdir -p /home/app

WORKDIR /home/app

COPY  package*.json .

# By using npm ci command we can install the same versions that we have in our local 
# machine in the node container.
RUN npm ci  

COPY . .

# RUN npm install 


# I have added this line just to test out building, and pushing a new version of docker image to dockerhub - the new version app:1.4 
# I updated the CMD instruction to see if there will be a changment
CMD ["node", "index.js"]


