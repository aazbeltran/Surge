if ($request.headers['User-Agent'].startsWith('Stoic')) {
    const currentDate = new Date();
    const body = JSON.stringify({
        "request_date_ms": currentDate.getTime(),
        "request_date": currentDate.toISOString(),
        "subscriber": {
            "non_subscriptions": {
                "com.mlobodzinski.Stoic.lifetime": [
                    {
                        "id": "1234",
                        "is_sandbox": true,
                        "purchase_date": "2020-01-01T02:10:53Z",
                        "original_purchase_date": "2020-01-01T02:10:53Z",
                        "store": "app_store"
                    }
                ]
            },
            "first_seen": "2020-01-01T00:00:00Z",
            "original_application_version": "1.0",
            "other_purchases": {
                "com.mlobodzinski.Stoic.lifetime": {
                    "purchase_date": "2020-01-01T02:10:53Z"
                }
            },
            "management_url": null,
            "subscriptions": {},
            "entitlements": {
                "premium": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2020-01-01T02:10:53Z",
                    "product_identifier": "com.mlobodzinski.Stoic.lifetime",
                    "expires_date": null
                }
            },
            "original_purchase_date": "2020-01-31T22:23:19Z",
            "original_app_user_id": "966ae4de-b2b9-11eb-8529-0242ac130003",
            "last_seen": currentDate.toISOString()
        }
    });
    $done({response: {body}});
}
$done({});