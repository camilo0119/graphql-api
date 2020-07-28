FROM smartroadsense/postgres-cli:latest

COPY script.sql script.sql

ENTRYPOINT plsql -h ${BD_HOST} -d ${DB_NAME} -u ${DB_USER} -f script.sql