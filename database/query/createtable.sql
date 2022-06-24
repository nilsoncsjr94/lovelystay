CREATE TABLE public.users
(
    $1 integer NOT NULL,
    $2 character varying(1000) NOT NULL,
    $3 character varying(1000) NOT NULL,
    $4 cstring[] NOT NULL,
    $5 jsonb,
    daytime timestamp with time zone NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;