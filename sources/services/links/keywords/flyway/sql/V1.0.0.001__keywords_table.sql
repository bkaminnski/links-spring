CREATE TABLE public.keywords
(
	keyw_id bigint NOT NULL,
	keyw_link_shared_id character varying(36) COLLATE pg_catalog."default",
	keyw_keywords character varying(2000) COLLATE pg_catalog."default",
	CONSTRAINT keyw_pkey PRIMARY KEY (keyw_id)
)
WITH (
	OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.keywords
	OWNER to keywords;
	
CREATE SEQUENCE public.keyw_id_seq
	INCREMENT 1
	START 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	CACHE 1;

ALTER SEQUENCE public.keyw_id_seq
	OWNER TO keywords;