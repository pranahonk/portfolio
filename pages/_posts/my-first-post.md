---
title: Export your Medium posts to Markdown
layout: post
date: 2018-02-13
tags:
  - Tutorial
---


There’s a simple solution to avoid copy/pasting and re-editing your Medium articles.

![](https://miro.medium.com/max/1080/1*QDYH5xE3GnM_7spZ0eSuog.png)



First of all, you need to install node on your computer.

There is an installer for node for all platforms, just download it and install it like you would any other program:

- ***[https://nodejs.org/en/download/](https://nodejs.org/en/download/)***

Once you have this installed, you fire up the **Command Prompt** on **Windows** or **Terminal** on **MacOS** or **Linux** and run this command.

```python
npm install -g mediumexporter
```

This installs **mediumexporter**. Once installed, you can export your Medium post to markdown format.

Go to the directory where you want to file to be exported to.

***(on Windows)***

```bash
cd c:\Users(username)\Desktop 
```
    

***(on Mac)***
```bash
cd ~/Desktop
```


Next type on 1 line:

```bash
mediumexporter [https://medium.com/p/export-your-medium-posts-to-markdown-b5ccc8cb0050](https://medium.com/@yeong.crypto/export-your-medium-posts-to-markdown-b5ccc8cb0050) > medium_post.md
```

    

You’ll see a file called **medium_post.md** containing your Medium post in markdown format. You might have to adjust a couple of things, but most of the time it’s fairly good at preserving formatting and structure.

If you want it copied directly to your clipboard (on OSX) you can add the following **(| pbcopy)** :

```bash
mediumexporter [https://medium.com/p/export-your-medium-posts-to-markdown-b5ccc8cb0050](https://medium.com/@yeong.crypto/export-your-medium-posts-to-markdown-b5ccc8cb0050) | pbcopy
```
    

If you don’t like command line solutions there are also a **Google Chrome Extensions**, although they’re good and fast the result often does require a bit more editing:

- **[Export to Markdown](https://chrome.google.com/webstore/detail/convert-medium-posts-to-m/aelnflnmpbjgipamcogpdoppjbebnjea?hl=en)**
- **[Export to Markdown](https://chrome.google.com/webstore/detail/export-to-markdown/dodkihcbgpjblncjahodbnlgkkflliim?hl=en)**
- **[Medium Article Downloader](https://chrome.google.com/webstore/detail/medium-article-downloader/nhbfnahbjjaaplgnkffponncahohkfbb?hl=en)**

![If you enjoyed reading the article don’t forget to applaud.](https://cdn-images-1.medium.com/max/2000/1*eHf64Iyl2VhGN5WVOiu1rw.gif)
<div style="font-style: italic; text-align: center;" markdown="1">
    If you enjoyed reading the article don’t forget to applaud.
</div>
