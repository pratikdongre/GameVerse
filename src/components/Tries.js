function cropImageUrl(url) {
  // const insertPosition = url.indexOf("media/") + 6; // Find "media/" and move 6 characters ahead
  // return url.slice(0, insertPosition) + "crop/600/400/" + url.slice(insertPosition);
  const target = "media/";
  const inserPosition = url.indexOf(target) + target.length;
  return (
    url.slice(0, inserPosition) + "crop/600/400/" + url.slice(inserPosition)
  );
}

// Example Usage
const originalUrl =
  "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg";
const croppedUrl = cropImageUrl(originalUrl);

console.log(croppedUrl);
// Output: https://media.rawg.io/media/crop/
