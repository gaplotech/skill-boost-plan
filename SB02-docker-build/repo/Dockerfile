# Use a more specific version for your production containers can help resolve issues
FROM node:12.18.1-alpine3.12

# Create app directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json yarn.lock ./

# Should use same package management as same as your development workflow
# The dependencies lock file is critical for reproduce to same behaviour
RUN yarn install --frozen-lockfile

# Copying Assets files
COPY public ./public

# Copying source files
COPY pages ./pages

# Building app
RUN yarn build

# This don't actually publish the port but to give better documentation to your DevOps colleagues
EXPOSE 3000

# Running the app
CMD [ "yarn", "start" ]
