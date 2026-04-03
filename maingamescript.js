const FPS = 60;
const canvas = document.getElementById("gamecanvas");
const draw = canvas.getContext("2d");
const latest_date;
const current_date;

//----関数内で使う変数
let draw_background_toggle = true;

//----ループ処理
init();
function init(){
latest_date = Date.now();

  
  
current_date = Date.now();  
  setTimeout(() => init(), (1 / FPS) - (current_date - latest_date)); //1フレーム当たりの時間-このフレームの実行にかかった時間,待機すべき時間を計算
}

//----以下通常の処理
function draw_background()
{
  if(draw_background_toggle == true)
  {
    draw.fillstyle = "white";
  }else if(draw_background_toggle == false)
  {
    draw.fillstyle = "black";
  }

  fillRect(0,0,1920,1080);
}
  
    

