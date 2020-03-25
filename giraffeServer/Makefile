.PHONY: build run test clean run2
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
BINPATH=./build/
BINARY_NAME=giraffeServer.exe

build:
	$(GOBUILD)  -o $(BINPATH)$(BINARY_NAME)   ./pkg/cmd/server

run:
	${GOCMD} run   ./pkg/cmd/server

run2: 
	$(BINPATH)$(BINARY_NAME)



clean:
	@echo clean 
	rm -rf  $(BINPATH)*