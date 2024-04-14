FROM registry.access.redhat.com/ubi9/go-toolset:latest as builder

WORKDIR /build
ADD . /build/


RUN mkdir /tmp/cache
RUN git config --global --add safe.directory /build
RUN CGO_ENABLED=0 GOCACHE=/tmp/cache go build  -mod=vendor -v -o /tmp/api-server .

FROM scratch

WORKDIR /app
COPY --from=builder /tmp/api-server /app/api-server

CMD [ "/app/api-server" ]
