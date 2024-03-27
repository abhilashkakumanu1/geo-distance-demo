# Geo Distance Demo

- [Geo Distance Demo](#geo-distance-demo)
  - [Set up](#set-up)
    - [Prerequisites](#prerequisites)
    - [Commands](#commands)
  - [Observations](#observations)
  - [Known Caveats](#known-caveats)
  - [Swagger Docs](#swagger-docs)

## Set up

### Prerequisites

1. docker, docker-compose

### Commands

```bash
# Start the setup (server & db)
docker-compose up -d

# Stop the setup (server & db)
docker-compose down

# Stop setup & Clear the DB data
docker-compose down --volumes

# Get into the server container
docker exec -it geo-distance-demo-server sh

# Note: First get into the container before running this command
# Create Tables
yarn run setup:db

# Note: First get into the container before running this command
# Seed Data
yarn run setup:db

# E2E Tests
yarn run test
```

## Observations

1. Instead of storing lat, long as decimal points in the DB, the better way is to store them as `POINT` types & use [PostGIS](http://postgis.net/workshops/postgis-intro/geography.html). It comes with built-in support for several geo-spatial queries. Haven't implemented this because of time constraints, and also that the requirements specifically asks to adhere to the given schema.
2. Also, prisma natively doesn't support PostGIS types, sin, cos functions. We can use prisma for migration but when it comes to geo-spatial queries, prisma doesn't seem to give us any advantage over using postgres client with raw SQL queries
3. Unit tests doesn't make sense in our case as there is no business logic involved. E2E tests makes more sense

## Known Caveats

1. Postgres DB credentials are hardcoded into docker-compose file. In prod environment these have to be passed through .env file
2. CMD in docker-compose file is setup for live-reload i.e it for dev environment. For prod environment we have create another compose file (docker-compose.prod.file) that doesn't have live reload and executes `yarn run start` command instead of `yarn run dev`
3. E2E tests require server to be running to work

## Swagger Docs

Swagger docs is running at `/api-docs` endpoint
