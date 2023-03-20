FROM node:16-alpine AS builder
WORKDIR /var/www/app
COPY package.json yarn.lock ./
# Устанавливаем зависимости
RUN yarn --frozen-lockfile --no-audit --prefer-offline
# Копируем исходный код и собираем приложение
COPY . .
RUN yarn build


FROM node:16-alpine as production
WORKDIR /var/www/app
COPY --from=builder /var/www/app/package.json /var/www/app/yarn.lock  ./
# Устанавливаем только зависимости, необходимые в продакшене
RUN yarn --prod --frozen-lockfile --no-audit --prefer-offline
COPY --from=builder /var/www/app/dist ./dist/
EXPOSE 3000
CMD ["node", "./dist/main.js"]