.PHONY: build run test clean
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
BINPATH=./bin/
BINARY_NAME=giraffeServer.exe

build: clean
	$(GOBUILD)  -o $(BINPATH)$(BINARY_NAME)   ./pkg/cmd/server

run:
	${GOCMD} run -o $(BINPATH)$(BINARY_NAME)  ./pkg/cmd/server

clean:
	@echo clean 
	rm -rf  $(BINPATH)*