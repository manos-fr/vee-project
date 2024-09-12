SET check_function_bodies = false;
INSERT INTO business.somes (id, amount, areas, updated_at, name, foundation, location, status, match_date, deadline, created_at) VALUES (1, 3939949, '["Thessaloniki"]', '2024-09-12 13:53:15.380962+00', 'Someone', 'Someone Foundation', 'USA', 'Done', NULL, NULL, '2024-09-12 13:53:15.380962+00');
SELECT pg_catalog.setval('business.somes_id_seq', 1, true);
