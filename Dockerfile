FROM node:7

# Make directories to store the dependencies and the application code:

RUN mkdir -p /package
RUN mkdir -p /application
WORKDIR /application

# Set up the basics:

ENV PORT 8080
EXPOSE 8080

# Tell node where to find dependencies (they are not installed in the
# normal location

ENV NODE_PATH /package/node_modules

# Make incremental updates to the dependencies:

COPY package.json /package/package.json
RUN npm install --prefix /package

# Copy the application

COPY . /application

# By default, run the application with node:

CMD [ "node","index.js" ]

