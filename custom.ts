
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * カスタムブロック
 */
//% weight=1 color=#0fbc11 icon="\uf06b" block="プレゼント"
namespace present {
    //% block="えんとつに入ってプレゼントをわたす"
    export function putLv1(): void {
        let positions = [
            world(1,1,1)
        ];
        let isOk = positions.some((value,index)=>{
            return comparePosition(player.position(),value);
        })
        if(isOk){
            player.execute("say Ok")
        }else{
            player.execute("say NG")
        }
    }
    function comparePosition(position1: Position, position2: Position): boolean {
        return compareAxisPosition(position1,position2,Axis.X) &&
            compareAxisPosition(position1, position2, Axis.Y) &&
            compareAxisPosition(position1, position2, Axis.Z);
    }
    function compareAxisPosition(position1: Position,position2: Position, axis: Axis): boolean {
        return Math.trunc(position1.getValue(axis)) == Math.trunc(position2.getValue(axis));
    }
}
