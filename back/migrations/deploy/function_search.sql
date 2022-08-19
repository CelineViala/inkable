-- Deploy inkable:function_search to pg

BEGIN;

CREATE FUNCTION "search_city"() RETURNS text AS 

FUNCTION "search_city"() RETURNS text AS 
$$ SELECT city FROM pro WHERE city =$1 
$$ 
LANGUAGE sql; COMMIT; 