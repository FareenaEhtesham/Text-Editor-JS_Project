
function run(){
   
    writing.document.designMode="On";
 
 }
 
 function execute(command){
    writing.document.execCommand(command,false,null);
 }
 
 function selectCommand(command ,arg){
 
     writing.document.execCommand(command,false,arg);
 }
 