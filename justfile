service := "docker compose"

build:
    {{service}} build

build-dev:
    {{service}} -f docker-compose.yml -f docker-compose.dev.yml up --build app

up:
    {{service}} up -d

setup: build up

bash:
    docker run -it --rm --entrypoint bash tada_app