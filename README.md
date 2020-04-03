## 1
```blocks
radio.setGroup(1)
```

## 2
```blocks
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("acc_x", input.acceleration(Dimension.X))
})

```

## 3
```blocks
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("acc_x", input.acceleration(Dimension.X))
    basic.pause(100)
    radio.sendValue("acc_y", input.acceleration(Dimension.Y))
    basic.pause(100)
})

```


<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
