---
title: Changing remote Git repo
date: "2020-07-18"
cover: "/images/git.png"
topic: "git"
excerpt: "How to change the remote github url of your repository."
---

## List current remote

```
git remote -v
```

## Change remote Git repo

```
git remote set-url origin git@<your.git.repo.example.com>:<user>/<repository2.git>
```

( **NOTE** )

Replace everything inside `<>` with your data and remove the `<>` characters
