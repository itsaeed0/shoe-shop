export function ce(
    name,
    {
        className, children = [], events = {}, restAttr = {}, innerText = {}
    }){
        const element = document.createElement(name);
        element.className = className;
        Object.keys(events).forEach((eventKeys)=>{
            element.addEventListener(eventKeys, events[eventKeys]);
        });
        children.forEach((child)=>{
            element.appendChild(child);
        });
        Object.keys(restAttr).forEach((key)={
            element.setAttribute(key, restAttr[key]);
        });
        if(innerText){
            element.innerText = innerText;
        }
        return element;
    }