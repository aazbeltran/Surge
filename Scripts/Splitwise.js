const obj = JSON.parse($response.body);

if (obj.user !== undefined) {
    obj.user = {...obj.user, pro: true};
}

$done({body: JSON.stringify(obj)});