import { ce } from "./utils/createElement"
import Header from "./header";


export function layout(){
    const layout = ce ("div", {
        children: [Header()]
    });
    return layout;
}