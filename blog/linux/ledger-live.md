---
title: Install Ledger Live for Linux
date: '2022-03-08'
topic: 'linux'
cover: '/images/ledger-live.jpg'
author: 'Chris'
excerpt: 'If you hold Bitcoin you should be keeping it offline in a hardware wallet like a Ledger. In this article I will show you how to install ledger-live for Linux.'
---

## Process

1. Navigate to [ledger.com/ledger-live/download](https://www.ledger.com/ledger-live/download)

2. Choose desktop and download for Linux

3. Download the Ledger Live AppImage.

4. Make the file executable in a terminal:

```
chmod +x ledger-live-*.AppImage
```

5. Enter the following command to automatically add the udev rules and reload udev to allow USB access to your Ledger device:

```
wget -q -O - https://raw.githubusercontent.com/LedgerHQ/udev-rules/master/add_udev_rules.sh | sudo bash
```

6. Rename the application

```
mv ledger-live-*.AppImage ledger-live

sudo mv ledger-live /usr/local/bin/
```

7. Get the Icon

```
sudo mkdir -p /usr/local/share/icons/

wget https://github.com/ChristianChiarulli/website/blob/master/blog/images/ledger-live.png

sudo mv ledger-live.png /usr/local/share/icons/
```

8. Add entry to desktop

Create the following file `ledger-live.desktop`:

**NOTE** If you get a sandboxing error, run the app with --no-sandbox

```
[Desktop Entry]
Type=Application
Name=Ledger Live
Comment=Ledger Live
Icon=/usr/local/share/icons/ledger-live.png
Exec=/usr/local/bin/ledger-live
Terminal=false
Categories=crypto;wallet
```

Move the `.desktop` to your applications folder:

```
sudo mkdir -p /usr/local/share/applications/

mv ledger-live.desktop /usr/local/share/applications
```

9. Take ownership of your Bitcoin

## References

[Ledger Support](https://support.ledger.com/hc/en-us/articles/360006395553-Download-and-install-Ledger-Live)

[creating a desktop entry](https://askubuntu.com/questions/902672/registering-appimage-files-as-a-desktop-app)
