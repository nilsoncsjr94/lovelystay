INSERT INTO users(
    $1, 
    $2, 
    $3, 
    $4, 
    additional_info) 
    VALUES(
    $/id/, 
    $/login/, 
    $/location/, 
    $/email/, 
    $/additionalInfo:json/
    ) ON CONFLICT (id) 
    DO UPDATE SET location = 
    $/location/, 
    additional_info = 
    $/additionalInfo:json/