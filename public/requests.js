
console.log("hello world")
fetch("https://319llk98wk.execute-api.us-east-1.amazonaws.com/dev/upload", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryVT8bjWWYizsFcaAS",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});