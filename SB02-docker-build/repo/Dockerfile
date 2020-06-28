# Use a more specific version for your production containers can help resolve issues
FROM node:12.18.1-alpine3.12 as FirstStage

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

# 1. Building app
# 2. Remove Dev Dependencies
RUN yarn build \
    && yarn install --production --frozen-lockfile --offline

# Final Stage
FROM node:12.18.1-alpine3.12

WORKDIR /usr/src/app

# Copy all files from builder
COPY --from=FirstStage /usr/src/app /usr/src/app

# This don't actually publish the port but to give better documentation to your DevOps colleagues
EXPOSE 3000

# Running the app
CMD [ "yarn", "start" ]
