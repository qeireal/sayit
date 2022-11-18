const bossMessages = [
    "Hey! Could you take this backend task ASAP? I know that you're designer. But it's urgent!",
    "Hi! You must make this task at the Saturday. Or I will fire you!",
    "Long time no see! Sorry, there will no promotion these couple years",
];

export function getBossMessage() {
    return bossMessages[Math.floor(Math.random() * bossMessages.length)];
}
