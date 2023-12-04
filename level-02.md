### @hideIteration true
### @hideIteration true

# TechKidsCamp

## エージェントにプレゼントをはこんでもらおう！

プログラムをうまくつくったあと、みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

``||present.えんとつにはいってプレゼントをわたす||``ブロックをつかうと、エージェントがえんとつにはいってプレゼントをわたしてくれるよ！

```ghost
player.onChat("run", function () {
    present.reset()
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    present.putLv2()
})
```

```template
player.onChat("run", function () {
    present.reset()
})
```