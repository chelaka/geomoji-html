const emojiPool = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😙",
  "😚",
  "🙂",
  "🤗",
  "🤩",
  "🤔",
  "🤨",
  "😐",
  "😑",
  "😶",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "🤐",
  "😯",
  "😪",
  "😫",
  "😴",
  "😌",
  "😛",
  "😜",
  "😝",
  "🤤",
  "😒",
  "😓",
  "😔",
  "😕",
  "🙃",
  "🤑",
  "😲",
  "☹️",
  "🙁",
  "😖",
  "😞",
  "😟",
  "😤",
  "😢",
  "😭",
  "😦",
  "😧",
  "😨",
  "😩",
  "🤯",
  "😬",
  "😰",
  "😱",
  "🥵",
  "🥶",
  "😳",
  "🤪",
  "😵",
  "😡",
  "😠",
  "🤬",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "😇",
  "🥳",
  "🥸",
  "🤓",
  "🧐",
  "🤠",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐽",
  "🐸",
  "🐵",
  "🙈",
  "🙉",
  "🙊",
  "🐒",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦢",
  "🦉",
  "🦅",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🪲",
  "🪳",
  "🕷️",
  "🕸️",
  "🦂",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🐘",
  "🦛",
  "🦏",
  "🐪",
  "🐫",
  "🦙",
  "🦒",
  "🐃",
  "🐂",
  "🐄",
  "🐎",
  "🐖",
  "🐏",
  "🐑",
  "🐐",
  "🦌",
  "🐕",
  "🐩",
  "🦮",
  "🐕‍🦺",
  "🐈",
  "🐈‍⬛",
  "🐓",
  "🦃",
  "🦤",
  "🦚",
  "🦜",
  "🦢",
  "🦩",
  "🕊️",
  "🐇",
  "🦝",
  "🦨",
  "🦡",
  "🦫",
  "🦦",
  "🦥",
  "🐁",
  "🐀",
  "🐿️",
  "🦔",
  "🍎",
  "🍔",
  "🌳",
  "🏖️",
  "🎵",
  "⭐",
  "💎",
  "🚗",
  "🍕",
  "🍉",
  "🍇",
  "🍌",
  "🍓",
  "🍒",
  "🍑",
  "🍍",
  "🥭",
  "🥝",
  "🍆",
  "🌶️",
  "🥒",
  "🥬",
  "🥦",
  "🧄",
  "🧅",
  "🥔",
  "🍠",
  "🍯",
  "🍗",
  "🍖",
  "🥩",
  "🍤",
  "🍳",
  "🥪",
  "🌮",
  "🌯",
  "🥙",
  "🧆",
  "🍣",
  "🍛",
  "🍜",
  "🍝",
  "🍤",
  "🍢",
  "🍡",
  "🥟",
  "🍥",
  "🥠",
  "🍘",
  "🍙",
  "🍚",
  "🥮",
  "🍼",
  "🥤",
  "🍹",
  "🍸",
  "🍷",
  "🍺",
  "🍻",
  "🥂",
  "🥃",
  "🧃",
  "🥡",
  "🥢",
  "🍽️",
  "🍴",
  "🎂",
  "🍰",
  "🧁",
  "🍧",
  "🍨",
  "🍦",
  "🥧",
  "🍩",
  "🍪",
  "🎉",
  "🎊",
  "🎈",
  "🎁",
  "🪅",
  "🎄",
  "🎃",
  "🕯️",
  "🎇",
  "🎆",
  "🧨",
  "🎭",
  "🎨",
  "🎸",
  "🎷",
  "🎺",
  "🎻",
  "🥁",
  "🎮",
  "🕹️",
  "🎲",
  "♟️",
  "🎯",
  "🎳",
  "🎣",
  "🎽",
  "🎿",
  "🛷",
  "🥌",
  "🎤",
  "🎧",
  "🎹",
  "🎼",
  "🎵",
  "🎶",
  "🪗",
  "🎤",
  "🛸",
  "🚀",
  "🛳️",
  "🚢",
  "✈️",
  "🚁",
  "🚂",
  "🚇",
  "🚉",
  "🚊",
  "🚕",
  "🚖",
  "🚗",
  "🚙",
  "🚚",
  "🚛",
  "🛻",
  "🚜",
  "🏎️",
  "🏍️",
  "🛵",
  "🛴",
  "🚲",
  "🦽",
  "🦼",
  "🛹",
  "🚠",
  "🚡",
  "🚟",
  "🚞",
  "🚝",
  "🚄",
  "🚅",
  "🚈",
  "🚂",
  "🚆",
  "🚇",
  "🚊",
  "🚉",
  "🚍",
  "🚎",
  "🚐",
  "🚑",
  "🚒",
  "🚓",
  "🚔",
  "🚕",
  "🚖",
  "🚗",
  "🚘",
  "🚙",
  "🚚",
  "🚛",
  "🚜",
  "🛻",
  "🚞",
  "🚟",
  "🚠",
  "🚡",
  "🚃",
  "🚋",
  "🚝",
  "🚄",
  "🚅",
  "🚈",
  "🚂",
  "🚆",
  "🛩️",
  "🛫",
  "🛬",
  "🚁",
  "🚀",
  "🚢",
  "✈️",
  "🛳️",
];

// Constants for grid calculations
const NUM_EMOJIS = 6; // Using 6 emojis
const emojiPoolSize = 200; // Updated pool size
const maxRepresentableValue = BigInt(emojiPoolSize) ** BigInt(NUM_EMOJIS);

console.log("Emoji pool size:", emojiPoolSize);
console.log(
  `Maximum representable value with ${NUM_EMOJIS} emojis:`,
  maxRepresentableValue
);

// Function to encode Block ID into emojis
function blockIDToEmojis(blockId) {
  const base = emojiPoolSize; // Base of the encoding
  let hash = BigInt(blockId); // Start with the full Block ID
  let emojis = "";

  console.log(`Encoding Block ID: ${blockId}`);
  if (hash >= maxRepresentableValue) {
    console.warn(
      `Block ID (${blockId}) exceeds max representable value (${maxRepresentableValue}). Scaling down.`
    );
    hash = hash % maxRepresentableValue; // Reduce to representable range
  }

  for (let i = 0; i < NUM_EMOJIS; i++) {
    const index = Number(hash % BigInt(base));
    emojis = emojiPool[index] + emojis;
    hash = hash / BigInt(base);
  }

  return emojis;
}

// Function to decode emojis back to a Block ID
function emojisToBlockID(emojis) {
  const emojiArray = [...emojis];
  const base = BigInt(emojiPoolSize);

  if (emojiArray.length !== NUM_EMOJIS) {
    console.error(`Emoji combination must have exactly ${NUM_EMOJIS} emojis.`);
    return null;
  }

  let blockId = BigInt(0);
  emojiArray.forEach((emoji) => {
    const index = emojiPool.indexOf(emoji);
    if (index === -1) {
      console.error(`Invalid emoji detected: "${emoji}".`);
      return null;
    }
    blockId = blockId * base + BigInt(index);
  });

  return blockId.toString();
}

// Function to calculate Block ID from latitude and longitude
function latLonToBlockID(lat, lon) {
  const GRID_SIZE_DEGREES = 5 / 111000; // 5 meters in degrees
  const TOTAL_COLUMNS = Math.ceil(360 / GRID_SIZE_DEGREES); // Total columns of grids

  const rowIndex = Math.floor((lat + 90) / GRID_SIZE_DEGREES);
  const colIndex = Math.floor((lon + 180) / GRID_SIZE_DEGREES);
  const blockId = rowIndex * TOTAL_COLUMNS + colIndex; // Unique Block ID
  return { blockId, rowIndex, colIndex };
}

// Function to get the center of a block ID
function blockIDToLatLonCenter(rowIndex, colIndex) {
  const GRID_SIZE_DEGREES = 5 / 111000; // 5 meters in degrees

  const lat = rowIndex * GRID_SIZE_DEGREES - 90 + GRID_SIZE_DEGREES / 2;
  const lon = colIndex * GRID_SIZE_DEGREES - 180 + GRID_SIZE_DEGREES / 2;
  return { lat, lon };
}

// Function to fetch geocode data from OpenStreetMap Nominatim API
async function fetchGeocode(location) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    location
  )}&format=json&limit=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data[0]; // Return the first result
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    return null;
  }
}

// Event listener for tab switching
document.getElementById("tab-1").addEventListener("click", () => {
  document.getElementById("tab-1").classList.add("active");
  document.getElementById("tab-2").classList.remove("active");
  document.getElementById("content-1").classList.add("active");
  document.getElementById("content-2").classList.remove("active");
});

document.getElementById("tab-2").addEventListener("click", () => {
  document.getElementById("tab-2").classList.add("active");
  document.getElementById("tab-1").classList.remove("active");
  document.getElementById("content-2").classList.add("active");
  document.getElementById("content-1").classList.remove("active");
});

// Event listener for location to Block ID and emoji
document.getElementById("find-button").addEventListener("click", async () => {
  const locationInput = document.getElementById("location-input").value;
  const resultDiv = document.getElementById("result");

  if (!locationInput) {
    resultDiv.innerHTML = "<p>Please enter a location.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Fetching data...</p>";
  const locationData = await fetchGeocode(locationInput);

  if (!locationData) {
    resultDiv.innerHTML = "<p>Location not found. Please try again.</p>";
    return;
  }

  const lat = parseFloat(locationData.lat);
  const lon = parseFloat(locationData.lon);
  const { blockId, rowIndex, colIndex } = latLonToBlockID(lat, lon);
  const { lat: centerLat, lon: centerLon } = blockIDToLatLonCenter(
    rowIndex,
    colIndex
  );
  const emojiCode = blockIDToEmojis(blockId);

  resultDiv.innerHTML = `
    <p><strong>Location:</strong> ${locationData.display_name}</p>
    <p><strong>Latitude:</strong> ${lat}</p>
    <p><strong>Longitude:</strong> ${lon}</p>
    <p><strong>Block ID:</strong> ${blockId}</p>
    <p><strong>Emoji Code:</strong> ${emojiCode}</p>
    <p><strong>Block Center:</strong> Lat ${centerLat.toFixed(
      6
    )}, Lon ${centerLon.toFixed(6)}</p>
  `;
});

// Event listener for emoji to Block ID and location
document.getElementById("reverse-button").addEventListener("click", () => {
  const emojiInput = document.getElementById("emoji-input").value;
  const reverseResultDiv = document.getElementById("reverse-result");

  if (!emojiInput) {
    reverseResultDiv.innerHTML = "<p>Please enter an emoji code.</p>";
    return;
  }

  const blockId = emojisToBlockID(emojiInput);

  if (!blockId) {
    reverseResultDiv.innerHTML = "<p>Invalid emoji code. Please try again.</p>";
    return;
  }

  const TOTAL_COLUMNS = Math.ceil(360 / (5 / 111000));
  const rowIndex = Math.floor(blockId / TOTAL_COLUMNS);
  const colIndex = Number(blockId % TOTAL_COLUMNS);
  const { lat: centerLat, lon: centerLon } = blockIDToLatLonCenter(
    rowIndex,
    colIndex
  );

  reverseResultDiv.innerHTML = `
    <p><strong>Emoji Code:</strong> ${emojiInput}</p>
    <p><strong>Block ID:</strong> ${blockId}</p>
    <p><strong>Block Center:</strong> Lat ${centerLat.toFixed(
      6
    )}, Lon ${centerLon.toFixed(6)}</p>
  `;
});
