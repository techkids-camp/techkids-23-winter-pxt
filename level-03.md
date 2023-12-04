### @hideIteration true
### @hideIteration true

# TechKidsCamp

## エージェントにプレゼントをはこんでもらおう！

２けん目のいえのげんかんにプレゼントをくばろう！
もしはやくおわったら、３けん目のいえのげんかんにもプレゼントをくばってみよう！

プログラムをうまくつくったあと、みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

``||present.おおきなプレゼントをおく||``ブロックをつかうと、エージェントが**大きなプレゼント**をおいてくれるよ！
``||present.プレゼントくばりをおわりにする||``ブロックをつかうと、プレゼントくばりをおわりにするよ！

```ghost
player.onChat("run", function () {
    present.reset()
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    present.putLv3()
    present.putLv3End()
    for (let index = 0; index < 4; index++) {
    	
    }
})
```

```template
player.onChat("run", function () {
    present.reset()
})
```