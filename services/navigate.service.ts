import {Injectable,EventEmitter} from '@angular/core'

export class NavigationService
{
   public  pushDat =new EventEmitter<Object>();
    public pathTitle=
    {
        title:"current Path",
        url:"" 
    }
    constructor()
    {

    }
    storePath(currentTitle,url)
    {
        let currenttitl=currentTitle;
        
        this.pathTitle.url = url;
        this.pathTitle.title=currenttitl;
        this.pushDat.emit(this.pathTitle);
        return this.pathTitle;
        
    }

}