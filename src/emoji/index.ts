// https://www.emojiall.com/zh-hans/all-emojis?type=normal
// https://emojipedia.org/

const smileys = new Map();
// smileys.set("U+1F601","😁");
// smileys.set("U+1F604","😄");
// smileys.set("U+1F606","😆");
// smileys.set("U+1F605","😅");
// smileys.set("U+1F923","🤣");
// smileys.set("U+1F603","😃");
// smileys.set("U+1F602","😂");
// smileys.set("U+1F642","🙂");
// smileys.set("U+1F609","😉");
// // const affectionate = new Map();
// smileys.set("U+1F60A","😊");
// smileys.set("U+1F607","😇");
// smileys.set("U+1F970","🥰");
// smileys.set("U+1F60D","😍");
// smileys.set("U+1F929","🤩");
// smileys.set("U+1F618","😘");
// smileys.set("U+1F617","😗");
// smileys.set("U+1F61A","😚");
// smileys.set("U+1F619","😙");
// smileys.set("U+1F972","🥲");
// smileys.set("U+1F60F","😏");

// // Mammals & Marsupials
// smileys.set("U+1F435","🐵");
// smileys.set("U+1F412","🐒");
// smileys.set("U+1F98D","🦍");
// smileys.set("U+1F9A7","🦧");
// smileys.set("U+1F436","🐶");
// smileys.set("U+1F415","🐕");
// smileys.set("U+1F9AE","🦮");

smileys.set("U+1F604", "😄");
smileys.set("U+1F606", "😆");
smileys.set("U+1F60D", "😍");
smileys.set("U+1F612", "😒");
smileys.set("U+1F614", "😔");
smileys.set("U+1F618", "😘");
smileys.set("U+1F61A", "😚");
smileys.set("U+1F61C", "😜");
smileys.set("U+1F61D", "😝");
smileys.set("U+1F620", "😠");
smileys.set("U+1F622", "😢");
smileys.set("U+1F624", "😤");
smileys.set("U+1F626", "😦");
smileys.set("U+1F628", "😨");
smileys.set("U+1F62A", "😪");
smileys.set("U+1F62D", "😭");
smileys.set("U+1F630", "😰");
smileys.set("U+1F631", "😱");
smileys.set("U+1F632", "😲");
smileys.set("U+1F633", "😳");
smileys.set("U+1F635", "😵");
smileys.set("U+1F638", "😸");
smileys.set("U+1F639", "😹");
smileys.set("U+1F63A", "😺");
smileys.set("U+1F63B", "😻");
smileys.set("U+1F63C", "😼");
smileys.set("U+1F63D", "😽");
smileys.set("U+1F63E", "😾");
smileys.set("U+1F63F", "😿");
smileys.set("U+1F640", "🙀");
smileys.set("U+1F641", "🙁");
smileys.set("U+1F642", "🙂");
smileys.set("U+1F643", "🙃");
smileys.set("U+1F644", "🙄");
smileys.set("U+1F645", "🙅");
smileys.set("U+1F646", "🙆");
smileys.set("U+1F647", "🙇");

smileys.set("U+1F64B", "🙋");
smileys.set("U+1F64D", "🙍");
smileys.set("U+1F64E", "🙎");
smileys.set("U+1F64F", "🙏");
smileys.set("U+1F601", "😁");
smileys.set("U+1F602", "😂");
smileys.set("U+1F603", "😃");
smileys.set("U+1F605", "😅");
smileys.set("U+1F607", "😇");
smileys.set("U+1F609", "😉");
smileys.set("U+1F60A", "😊");
smileys.set("U+1F60B", "😋");
smileys.set("U+1F60C", "😌");
smileys.set("U+1F60F", "😏");
smileys.set("U+1F611", "😑");
smileys.set("U+1F613", "😓");
smileys.set("U+1F615", "😕");
smileys.set("U+1F617", "😗");
smileys.set("U+1F61B", "😛");
smileys.set("U+1F61E", "😞");
smileys.set("U+1F61F", "😟");
smileys.set("U+1F621", "😡");
smileys.set("U+1F623", "😣");
smileys.set("U+1F625", "😥");
smileys.set("U+1F629", "😩");
smileys.set("U+1F62B", "😫");
smileys.set("U+1F62C", "😬");
smileys.set("U+1F62E", "😮");
smileys.set("U+1F630", "😰");
smileys.set("U+1F634", "😴");
smileys.set("U+1F636", "😶");
smileys.set("U+1F637", "😷");




smileys.set("U+1F648", "🙈");
smileys.set("U+1F649", "🙉");
smileys.set("U+1F64A", "🙊");
smileys.set("U+1F42D", "🐭"); // Mouse Face
smileys.set("U+1F439", "🐹"); // Hamster Face
smileys.set("U+1F430", "🐰"); // Rabbit Face
smileys.set("U+1F43A", "🐺"); // Wolf Face
smileys.set("U+1F428", "🐨"); // Koala
smileys.set("U+1F42F", "🐯"); // Tiger Face
smileys.set("U+1F431", "🐱"); // Cat Face
smileys.set("U+1F43B", "🐻"); // Bear Face
smileys.set("U+1F43C", "🐼"); // Panda Face
smileys.set("U+1F417", "🐗"); // Boar
smileys.set("U+1F434", "🐴"); // Horse Face
smileys.set("U+1F40E", "🐎"); // Horse
smileys.set("U+1F984", "🦄"); // Unicorn Face
smileys.set("U+1F42E", "🐮"); // Cow Face
smileys.set("U+1F402", "🐂"); // Ox
smileys.set("U+1F403", "🐃"); // Water Buffalo
smileys.set("U+1F404", "🐄"); // Cow
smileys.set("U+1F437", "🐷"); // Pig Face
smileys.set("U+1F416", "🐖"); // Pig
smileys.set("U+1F43D", "🐽"); // Pig Nose
smileys.set("U+1F40F", "🐏"); // Ram
smileys.set("U+1F411", "🐑"); // Ewe
smileys.set("U+1F410", "🐐"); // Goat
smileys.set("U+1F42A", "🐪"); // Camel
smileys.set("U+1F42B", "🐫"); // Two-Hump Camel
smileys.set("U+1F41F", "🐟"); // Fish
smileys.set("U+1F420", "🐠"); // Tropical Fish
smileys.set("U+1F421", "🐡"); // Blowfish
smileys.set("U+1F419", "🐙"); // Octopus
smileys.set("U+1F41A", "🐚"); // Spiral Shell
smileys.set("U+1F40C", "🐌"); // Snail
smileys.set("U+1F98B", "🦋"); // Butterfly
smileys.set("U+1F41B", "🐛"); // Bug
smileys.set("U+1F41C", "🐜"); // Ant
smileys.set("U+1F41D", "🐝"); // Honeybee
smileys.set("U+1F41E", "🐞"); // Lady Beetle
smileys.set("U+1F997", "🦗"); // Cricket
smileys.set("U+1F577", "🕷️"); // Spider
smileys.set("U+1F578", "🕸️"); // Spider Web
smileys.set("U+1F982", "🦂"); // Scorpion
smileys.set("U+1F99F", "🦟"); // Mosquito
smileys.set("U+1F9A0", "🦠"); // Microbe


export default smileys