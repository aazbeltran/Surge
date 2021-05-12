if ($request.headers['User-Agent'].startsWith('OnSwitch')) {
    const currentDate = new Date();
    const body = JSON.stringify({
        "request_date_ms": currentDate.getTime(),
        "request_date": currentDate.toISOString(),
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2020-01-01T00:00:00Z",
            "original_application_version": "2.2.21.1",
            "other_purchases": {},
            "management_url": null,
            "subscriptions": {
                "com.getonswitch.OnSwitch.premium.annual": {
                    "is_sandbox": false,
                    "period_type": "trial",
                    "billing_issues_detected_at": null,
                    "unsubscribe_detected_at": null,
                    "expires_date": "2099-02-09T23:59:59Z",
                    "grace_period_expires_date": null,
                    "original_purchase_date": "2020-01-01T00:00:00Z",
                    "purchase_date": "2020-01-01T00:00:00Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "premium": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2020-01-01T00:00:00Z",
                    "product_identifier": "com.getonswitch.OnSwitch.premium.annual",
                    "expires_date": "2099-02-09T23:59:59Z"
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