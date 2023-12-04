### @flyoutOnly true
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
    present.putLv1()
})
```

```template
player.onChat("run", function () {
    present.reset()
})
```