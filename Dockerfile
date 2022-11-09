FROM node:slim

ENV DIR=/my-portfolio
ENV PORT=9000

WORKDIR ${DIR}

ADD . .

RUN yarn init -y
RUN yarn install
RUN yarn global add @angular/cli

CMD ng serve --port ${PORT} --host 0.0.0.0

EXPOSE ${PORT}
