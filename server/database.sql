CREATE TABLE shopMetaData(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    log_clicks INTEGER NOT NULL,
    log_date DATE
    );
