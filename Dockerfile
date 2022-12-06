# Start the image using ubuntu 22.04
FROM ubuntu:22.04

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