FROM node:18-slim AS build

WORKDIR /opt

COPY .npmrc ~
COPY . .

RUN npm install pnpm -g \
 && pnpm install \
 && pnpm build

FROM nginx:1.22-alpine-slim AS runtime

LABEL maintainers="Leryn <leryn1122@gmail.com>"
LABEL description="vsp-site"

COPY ci/docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /opt/dist/ /usr/share/nginx/html/

EXPOSE 80/tcp