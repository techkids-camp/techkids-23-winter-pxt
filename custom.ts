
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * カスタムブロック
 */
//% weight=1000 color=#0fbc11 icon="\uf06b" block="プレゼント"
namespace present {
    let isDebug = false;
    //% block
    export function enableDebug() {
        isDebug = true;
    }
    //% blockId=putLv1
    //% block="えんとつに入ってプレゼントをわたす"
    export function putLv1(): void {
        let positions = [
            world(177, 89, 321),
            world(177, 89, 322),
            world(176, 89, 321),
            world(176, 89, 322)
        ];
        let isOk = comparePositions(positions);
        debug("Lv1: " + isOk);
        if (isOk) {
            funcRun("say Ok")
        } else {
            funcRun("say NG")
        }
    }

    //% blockId=putLv2
    //% block="えんとつに入ってプレゼントをわたす"
    export function putLv2(): void {
        let positions = [
            world(146, 97, 361),
            world(146, 97, 360),
            world(146, 97, 359),
            world(147, 97, 361),
            world(147, 97, 360),
            world(147, 97, 359),
            world(148, 97, 361),
            world(148, 97, 360),
            world(148, 97, 359),
        ];
        let isOk = comparePositions(positions);
        debug("Lv2: " + isOk);
        if (isOk) {
            funcRun("say Ok")
        } else {
            funcRun("say NG")
        }
    }

    let works = 0b000;
    //% blockId=putLv3
    //% block="おおきなプレゼントをおく"
    export function putLv3(): void {
        let positions1 = [
            world(176, 73, 323),
            world(176, 73, 322)
        ];
        let positions2 = [
            world(149, 71, 352),
            world(148, 71, 352),
            world(147, 71, 352),
            world(146, 71, 352),
            world(145, 71, 352),
        ];
        let positions3 = [
            world(122, 70, 326),
        ];
        debug("Before Bit: " + works)
        if (comparePositions(positions1)) {
            works = works | 0b001;
            debug("Home 1 Ok")
            funcRun("function cl_check/lv3/progress-1");
        } else if (comparePositions(positions2)) {
            works = works | 0b010;
            debug("Home 2 Ok")
            funcRun("function cl_check/lv3/progress-2");
        } else if (comparePositions(positions3)) {
            works = works | 0b100;
            debug("Home 3 Ok")
            funcRun("function cl_check/lv3/progress-3");
        } else {
            debug("Home Ng")
            funcRun("function cl_check/lv3/progress-miss");
        }
        debug("After Bit: " + works)
    }
    //% blockId=putLv3End
    //% block="プレゼントくばりをおわりにする"
    export function putLv3End(): void {
        // 完了したタスクの数を数える
        let completedTasks = 0;

        // 3つのタスクに対して各ビットをチェック
        for (let i = 0; i < 3; i++) {
            if ((works & (1 << i)) !== 0) {
                completedTasks++;
            }
        }
        debug("Current Bit: " + works)
        debug("Completed Tasks: " + completedTasks)


        if (completedTasks == 2) {
            funcRun("function cl_check/lv3/clear-2");
        } else if (completedTasks == 3) {
            funcRun("function cl_check/lv3/clear-3");
        } else if (completedTasks == 1) {
            funcRun("function cl_check/lv3/miss-1");
        } else {
            funcRun("function cl_check/miss");
        }
    }

    //% blockId=reset
    //% block="エージェントをさいしょにもどす"
    export function reset(): void {
        works = 0b000;
        agent.teleport(world(155, 70, 322), EAST)
    }
    function comparePositions(positions: Position[]): boolean {
        return positions.some((value, index) => {
            return comparePosition(value);
        });
    }
    function comparePosition(position2: Position): boolean {
        let position1 = agent.getPosition();
        return compareAxisPosition(position1, position2, Axis.X) &&
            compareAxisPosition(position1, position2, Axis.Y) &&
            compareAxisPosition(position1, position2, Axis.Z);
    }
    function compareAxisPosition(position1: Position, position2: Position, axis: Axis): boolean {
        return Math.trunc(position1.getValue(axis)) == Math.trunc(position2.getValue(axis));
    }
    function debug(message: string) {
        if (isDebug) {
            player.say(message);
        }
    }
    function funcRun(command: string) {
        if (isDebug) {
            player.say("Executing Command: " + command);
        }
        player.execute(command);
    }
}
