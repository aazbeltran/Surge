let obj = {};
try {
    obj = JSON.parse($response.body);
} catch (htmlBody) {
    $done({});
}

if (obj.user !== undefined) {
    obj.user = {...obj.user, pro: true};
}

if (obj.metadata !== undefined && obj.metadata.features !== undefined) {
    Object.entries(obj.metadata.features).map(([key, props]) => {
        if (key === 'pro_settings') {
            props.visible = false;
        }
        if (props.enabled !== undefined) {
            props.enabled = true;
        }
        obj.metadata.features[key] = props;
    })
}

if (obj.subscriptions !== undefined) {
    obj.subscriptions = obj.subscriptions.map(subscription => ({
        ...subscription,
        expires_at: '2099-12-31T23:59:59-05:00'
    }))
}

$done({body: JSON.stringify(obj)});