export function getQuestsByName(quests, nameStart) {
    return quests.filter(quest => quest.title.toLowerCase().startsWith(nameStart.toLowerCase()));
}

export function makeMap(keyFn) {
    return function (arr) {
        let obj = {};
        arr.forEach(x => obj[keyFn(x)] = x);
        return obj;
    };
}

export function catchAsync(statusCode, fn) {
    return function (req, res) {
        fn(req, res)
            .then(data => res.status(statusCode).json(data))
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });
    }
}

export function normalize(entity) {
    return JSON.parse(JSON.stringify(entity));
}
