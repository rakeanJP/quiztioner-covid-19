   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'Saya pergi keluar rumah', options:['ya','tidak'],answer:1},   //1
                          {q:'Saya menggunakan tranportasi umum',options:['ya','tidak'],answer:1},  //2
                          {q:'Saya tidak memakai masker',options:['ya','tidak'],answer:1},  //3
                          {q:'Saya menjabat tangan dengan orang lain',options:['ya','tidak'],answer:1}, //4
                          {q:'Saya tidak mencuci tangan',options:['ya','tidak'],answer:1}, //5
                          {q:'Saya sering menyentuh benda sekitar',options:['ya','tidak'],answer:1},  //6
                          {q:'Saya tidak menjaga jarak dengan orang lain',options:['ya','tidak'],answer:1}, //7
                          {q:'Saya makan diluar rumah(warung/restoran)',options:['ya','tidak'],answer:1}, //8
                          {q:'Saya tidak minum dengan air hangat',options:['ya','tidak'],answer:1}, //9
                          {q:'Saya diwilayah kelurahan tempat pasien tertular',options:['ya','tidak'],answer:1},  //10
                          {q:'Saya tidak memasang hand sanitizer disekitar lingkungan saya',options:['ya','tidak'],answer:1}, //11
                          {q:'Saya tidak mencuci tangan saat sampai dirumah',options:['ya','tidak'],answer:1},  //12
                          {q:'Saya tidak menyediakan peralatan mencegah virus corona(hand sanirizer, tissue basah, masker, sabun cuci tangan)',options:['ya','tidak'],answer:1},  //13
                          {q:'Saya tidak mencuci baju dengan air hangat',options:['ya','tidak'],answer:1}, //14
                          {q:'Saya tidak membagikan quiztioner ini kepada orang terdekat kita',options:['ya','tidak'],answer:1}, //15
                          {q:'saya dalam sehari tidak kena cahaya matahari minimal selama 15 menit',options:['ya','tidak'],answer:1}, //16
                          {q:'saya tidak berolahraga',options:['ya','tidak'],answer:1},//17
                          {q:'saya jarang minum vitamin C/E dan kurang tidur ',options:['ya','tidak'],answer:1},//18
                          {q:'usia saya diatas 60 tahun',options:['ya','tidak'],answer:1},//19
                          {q:'saya mempunyai penyakit:jantung/diabetes/gangguan pernafasan kronis',options:['ya','tidak'],answer:1},//20
                          {q:'Saya tidak menutup mulut saat batuk/bershin',options:['ya','tidak'],answer:1}//21

                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                
                           this.scoreCard();
                        }
                        else{

                          let hasilresiko;
                          if(this.score < 7){
                            hasilresiko = "Rendah";
                          }
                          else if (this.score < 15){
                            hasilresiko = "Sedang silahkan pergi ke klink/puskesmas/rumah sakit untuk melakukan rapid test";
                          }
                         else if (this.score < 21){
                            hasilresiko = "Tinggi, silahkan pergi ke rumah sakit terdekat yang menyediakan layanan untuk ODP/PDP "; //coba ken
                          }
                        quizBox.innerHTML= "Anda kemungkinan terinfeksi dalam kategori "+hasilresiko +" terinfeksi virus covid-19";   
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();  
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Sebaiknya hindari, hal ini bisa berdampak buruk bagi anda dan orang sekitar anda";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Lanjutkan, hal ini bisa berdampak bai";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+"ngt/"+this.questions.leh;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



