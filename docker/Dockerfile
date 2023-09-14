FROM node:18-alpine AS builder
# app будет в корне в контерейнере докера
WORKDIR /build
# скопировать все файлы package с расширением json
COPY ./package*.json ./

RUN npm i

# скопировать ВСЁ из папки src с компа в папку /build в докере
COPY ./tsconfig*.json ./
COPY ./src ./src
COPY ./public ./public

RUN npm run build

# multy-stage-сборка
# Сборка frontend-а
FROM nginx:1.25.2-alpine AS frontend

COPY --from=builder /build/build /usr/share/nginx/html

# Скопировать конфиг nginx в контейнер докера
COPY ./docker/nginx/conf.d /etc/nginx/conf.d

# выделить порт для раздачи фронта
EXPOSE 80

# После уcтановки через RUN и конфигурации - в директиву CMD передается массив команд
# точка с запятой - чтобы команды выполнялись параллельно. Для последовательного выполнения ставится '&&'
CMD ["nginx", "-g", "daemon off;"]