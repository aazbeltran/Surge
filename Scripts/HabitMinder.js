if ($request.headers['User-Agent'].startsWith('Elevate')) {
    const currentDate = new Date();
    const body = JSON.stringify({
        "request_date_ms": currentDate.getTime(),
        "request_date": currentDate.toISOString(),
        "subscriber": {
            "non_subscriptions": {},
            "first_seen": "2020-01-01T00:00:00Z",
            "original_application_version": "355",
            "other_purchases": {
            },
            "management_url": "itms-apps://apps.apple.com/account/subscriptions",
            "subscriptions": {
                "habitminder.yearlysubscription.offer2": {
                    "is_sandbox": false,
                    "ownership_type": "PURCHASED",
                    "billing_issues_detected_at": null,
                    "period_type": "normal",
                    "expires_date": "2099-02-09T23:59:59Z",
                    "grace_period_expires_date": null,
                    "unsubscribe_detected_at": null,
                    "original_purchase_date": "2021-01-01T00:00:00Z",
                    "purchase_date": "2021-01-01T00:00:00Z",
                    "store": "app_store"
                }
            },
            "entitlements": {
                "pro-subscriptions": {
                    "grace_period_expires_date": null,
                    "purchase_date": "2021-01-01T00:00:00Z",
                    "product_identifier": "habitminder.yearlysubscription.offer2",
                    "expires_date": "2099-02-09T23:59:59Z"
                }
            },
            "original_purchase_date": "2020-01-31T22:23:19Z",
            "original_app_user_id": "$RCAnonymousID:1234",
            "last_seen": currentDate.toISOString()
        }
    });
    $done({response: {body}});
}
$done({});