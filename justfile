service := "podman"

build:
    {{service}} compose build

build-dev:
    {{service}} compose -f docker-compose.yml -f docker-compose.dev.yml up --build app

up:
    {{service}} compose up -d

setup: build-dev up

bash:
    {{service}} run -it --rm --entrypoint bash tada_app