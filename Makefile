# Project
SHELL := /bin/sh
NAME := vsp-site
VERSION := 0.1.0
BUILD_DATE := $(shell date +%Y%m%d)
GIT_VERSION := $(shell git describe --long --all)
SHA := $(shell git rev-parse --short=8 HEAD)

# Toolchain
NPM := pnpm
NPX := pnpx

# Main

# Docker
DOCKER := docker
DOCKER_CONTEXT := .
DOCKERFILE := ci/docker/Dockerfile
REGISTRY := harbor.leryn.top/library
IMAGE_NAME := $(PROJECT)
FULL_IMAGE_NAME = $(REGISTRY)/$(IMAGE_NAME):$(VERSION)

##@ General

.PHONY: help
help: ## Print help info.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

.PHONY: all
all: install build test ## Run all steps to build release artifact.
# all: get-toolchains install check build test ## Run all steps to build release artifact.

##@ Development

.PHONY: install
install: ## Install dependencies.
	$(NPM) install

.PHONY: check
check: ## Check
	$(NPM) lint

.PHONY: format
format: ## Format against code.
	$(NPM) format

.PHONY: clean
clean: ## Clean target artifact.
	$(NPM) clean

.PHONY: unittest
unittest: ## Run all unit tests.
	$(NPM) test:unit

.PHONY: test
test: ## Run all integrate tests.
	$(NPM) test:integrate

##@ Build

bootstrap: ## Bootstrap.
	$(NPM) bootstrap

build: ## Build target artifact.
	$(NPM) build

##@ CI

.PHONY: get-toolchains
get-toolchains: ## Install toolchains for base image.
	npm install -g pnpm

.PHONY: docker-build
docker-build: ## Build docker image.
	$(DOCKER) build -t $(FULL_IMAGE_NAME) -f $(DOCKERFILE) $(DOCKER_CONTEXT)
