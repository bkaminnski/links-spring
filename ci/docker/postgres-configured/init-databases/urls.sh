#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER urls WITH PASSWORD 'urls';
    CREATE DATABASE urls;
    GRANT ALL PRIVILEGES ON DATABASE urls TO urls;
EOSQL