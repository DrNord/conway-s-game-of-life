/*!
Copyright (C) 2021 Dr. Nord
*/
let e=new i(2,2,"x32"),s=new Worker("worker-timer.js");function i(t,a,e){switch(e){case"x32":this.bytesPlatform=4,this.youngerBitMask=16843009,DataView.prototype.getUintPlatform=DataView.prototype.getUint32,DataView.prototype.setUintPlatform=DataView.prototype.setUint32;break;case"x64-test":this.bytesPlatform=8,this.youngerBitMask=72340172838076670,DataView.prototype.getUintPlatform=DataView.prototype.getBigUint64,DataView.prototype.setUintPlatform=DataView.prototype.setBigUint64;break;default:this.bytesPlatform=1,this.youngerBitMask=1,DataView.prototype.getUintPlatform=DataView.prototype.getUint8,DataView.prototype.setUintPlatform=DataView.prototype.setUint8}this.rows=t+2,this.cols=a+2,this.cells_all=t*a,this.cells_alive=0,this.epoch_counter=0,this.data=new Uint8Array(this.rows*this.cols+this.bytesPlatform).fill(16),this.dataRaw=new DataView(this.data.buffer),this.dataNext=new Uint8Array(this.rows*this.cols+this.bytesPlatform).fill(16),this.dataNextRaw=new DataView(this.dataNext.buffer),this.print2d=r,this.fillRand_noBorder=o,this.lifeEpoch=l}function o(e){this.cells_alive=0;for(let a=1;a<this.rows-1;a++)for(let t=1;t<this.cols-1;t++){var s=a*this.cols+t;this.data[s]=Math.random()<e?1:0,this.cells_alive+=this.data[s]}}function r(t){let s=0;switch(t){case"state":s=this.data;break;case"next":s=this.dataNext}for(let e=0;e<this.rows;e++){let a=" ";for(let t=0;t<this.cols;t++){var i=e*this.cols+t;a+=" "+(16===s[i]?"*":s[i])}console.log(a)}}function l(){this.cells_alive=0;for(let e=this.cols+1;e<(this.rows-1)*this.cols;e+=this.bytesPlatform){var s=this.dataRaw.getUintPlatform(e-this.cols-1)+this.dataRaw.getUintPlatform(e-this.cols)+this.dataRaw.getUintPlatform(e-this.cols+1)+this.dataRaw.getUintPlatform(e-1)+this.dataRaw.getUintPlatform(e+1)+this.dataRaw.getUintPlatform(e+this.cols-1)+this.dataRaw.getUintPlatform(e+this.cols)+this.dataRaw.getUintPlatform(e+this.cols+1),i=this.dataRaw.getUintPlatform(e),o=~(s>>2),r=s>>1;let t=(i&o&r|o&r&s)&this.youngerBitMask;t&=~(i>>4);i=t|i&this.youngerBitMask<<4;this.dataNextRaw.setUintPlatform(e,i);let a=0;for(a=0;t;a++)t&=t-1;this.cells_alive+=a}var t=this.data;this.data=this.dataNext,this.dataNext=t,this.dataRaw=new DataView(this.data.buffer),this.dataNextRaw=new DataView(this.dataNext.buffer),this.epoch_counter++}s.onmessage=()=>{postMessage({cmd:"busy"}),e.lifeEpoch(),s.postMessage({cmd:"ready"}),postMessage({cmd:"ready"})},self.onmessage=function(t){var a=t.data;if(void 0!==a.cmd)switch(a.cmd){case"get-data":postMessage({cmd:"data",field:e.data,cells_alive:e.cells_alive,counter:e.epoch_counter});break;case"next_epoch":s.postMessage({cmd:"act"});break;case"set_dt":s.postMessage({cmd:"set_dt",dt_ms:a.dt_ms});break;case"start":s.postMessage({cmd:"start",dt_ms:a.dt_ms});break;case"stop":s.postMessage({cmd:"stop"});break;case"init":e=new i(a.rows,a.cols,"x32"),e.fillRand_noBorder(a.alive_probability);break;case"fill":e.fillRand_noBorder(a.alive_probability);break;default:console.log("Worker-engine: command '"+a.cmd+"' is not supported.")}},s.postMessage({cmd:"ready"});