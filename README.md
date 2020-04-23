# Stand-up Randomizer

This simple extension allows randomizing things! I use it for randomizing 
stand-up meeting orders.

After installing, go to the settings page of the plugin and add people there. 
The members should be specified in the textarea so that there is one name per 
line. For example:

```
Pranash
Jessica
Sam
Makisu
```

Then the extension icon can be clicked in the toolbar and the randomizer will 
start.

![Stand-up Randomizer](img/demo.gif)


## Development

Use `web-ext` to develop the extension locally:

```bash
web-ext run
```


## Building a release

```bash
web-ext build
```
