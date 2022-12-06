# Start the image using Node 18
FROM node:18

# Create a new folder for our node.js project and switch to it
RUN mkdir /app
WORKDIR /app

# Add the required files and directories
COPY ./package.json /app/package.json
COPY ./emit/ /app/emit/

# Install node packages
RUN npm install

# Define Start Command
ENTRYPOINT [ "node" ]
CMD [ "/app/" ]