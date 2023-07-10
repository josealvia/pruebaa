FROM postgres:14.3

ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=postgres
COPY . /var/lib/postgresql