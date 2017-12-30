#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER descriptions WITH PASSWORD 'descriptions';
    CREATE DATABASE descriptions;
    GRANT ALL PRIVILEGES ON DATABASE descriptions TO descriptions;
EOSQL