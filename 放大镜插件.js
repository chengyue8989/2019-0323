class Magnifying {
    constructor(newSmallBox,newBigBox,newMask){
        this.SmallBox=newSmallBox;
        this.BigBox=newBigBox;
        this.Mask=newMask;
    }
    // setstyle(){
    //     this.SmallBox.cssText=` width: 400px;
    //         height: 400px;
    //         background: url(img/img4.jpg) no-repeat;
    //         background-size: 400px 400px;
    //         position: relative;
    //         top: 100px;
    //         left: 80px;
    //         cursor: move;`;
    // }
    onmouseenter(){
        let that=this;
        this.SmallBox.onmouseenter=function () {
            that.BigBox.style.display="block";
            that.Mask.style.display="block";
        }
    }
    onmouseleave(){
        let that=this;
        this.SmallBox.onmouseleave=function () {
            that.BigBox.style.display="none";
            that.Mask.style.display="none";
        }
    }
    onmousemove(){
        let that=this;
        this.SmallBox.onmousemove=function (evt) {
           let e=evt||event;
           let left1=e.pageX-this.offsetLeft-that.Mask.offsetWidth/2;
           let top1=e.pageY-this.offsetTop-that.Mask.offsetHeight/2;

            if(left1<0){
                left1=0;
            }
            //注意运动的最大距离
            if(left1>this.offsetWidth-that.Mask.offsetWidth){
                left1=this.offsetWidth-that.Mask.offsetWidth;
            }
            if(top1<0){
                top1=0;
            }
            if(top1>this.offsetHeight-that.Mask.offsetHeight){
                top1=this.offsetHeight-that.Mask.offsetHeight;
            }
            that.Mask.style.left=left1+"px";
            that.Mask.style.top=top1+"px";

           let x=that.BigBox.offsetWidth*left1/that.Mask.offsetWidth;
           let y=that.BigBox.offsetHeight*top1/that.Mask.offsetHeight;
            //注意是反向
            that.BigBox.style.backgroundPositionX=-x+"px";
            that.BigBox.style.backgroundPositionY=-y+"px";

        }
    }
    bindhtml(){
        // this.setstyle();
        this.onmouseenter();
        this.onmouseleave();
        this.onmousemove();

    }
}