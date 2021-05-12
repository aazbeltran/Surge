const obj = JSON.parse($response.body);

if (obj.user !== undefined) {
    obj.user = {...obj.user, pro: true};
}

if (obj.metadata !== undefined && obj.metadata.features !== undefined) {
    Object.entries(obj.metadata.features).map(([key, props]) => {
        if (props.enabled !== undefined) {
            props.enabled = true;
        }
        obj.metadata.features[key] = props;
    })
}

$done({body: JSON.stringify(obj)});