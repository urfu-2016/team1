export function getQuestsByName(quests, nameStart) {
    return quests.filter(quest => quest.title.toLowerCase().startsWith(nameStart.toLowerCase()));
}
