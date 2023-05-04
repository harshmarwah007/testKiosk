FROM node:alpine3.16 as builder
WORKDIR /app
ARG BRANCH_NAME
RUN git checkout $
COPY package.json package-lock.json ./

# Expose port 3000
# EXPOSE 3000
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:1.21.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", " daemon off;"]