CREATE TABLE public.url
(
	url_id bigint NOT NULL,
	url_link_shared_id character varying(36) COLLATE pg_catalog."default",
	url_url character varying(2000) COLLATE pg_catalog."default",
	CONSTRAINT url_pkey PRIMARY KEY (url_id)
)
WITH (
	OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.url
	OWNER to urls;
	
CREATE SEQUENCE public.url_id_seq
	INCREMENT 1
	START 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	CACHE 1;

ALTER SEQUENCE public.url_id_seq
	OWNER TO urls;