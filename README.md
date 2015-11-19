# www.adamandjosie.in/love static site

[Hugo][hugo] powered static website for [Josie and my wedding][homepage]

Site is currently hosted in S3, behind CloudFront.

## Development

Edit the content with live-reload preview server:

```
edit.sh
```

Build the distribution version (deleting the old build):

```
build.sh
```

Upload the newly built site (assumes S3 credentials are set in env):

```
sync.sh
```

[hugo]: https://gohugo.io
[homepage]: https://www.adamandjosie.in/love/
