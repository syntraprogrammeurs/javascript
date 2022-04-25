/*let grid = document.getElementById('game');*/
//genereren van 3 rijen
/*let fragment = document.createDocumentFragment();*/

/*let guessesAllowed = 3;
let wordLength = 3;*/

/*let generateGrid = () =>{
    Array.from({length:guessesAllowed}).forEach(item => {
        let row = document.createElement('div');
        row.classList.add('row');
        //tile opbouw
        Array.from({length:wordLength}).forEach(item=>{
            let tile = document.createElement('div')
            tile.classList.add('tile','justify-content-center','d-flex','align-items-center');
            row.appendChild(tile);
        });
        fragment.appendChild(row);
    });
    grid.appendChild(fragment);
}
generateGrid();*/

/*
document.addEventListener('keyup',e =>{
   alert(e.key);
});*/

document.addEventListener('alpine:init', ()=>{
    Alpine.data('game', ()=>{
        return{
            guessesAllowed:4,
            wordLength:3,
            currentRowIndex:0,
            currentTileIndex:0,
            word:'',
            words: ['dog','cat', 'bel', 'cup'],
            generatedWord:'',
            init(){
                this.board = Array.from({length:this.guessesAllowed},()=>{
                    return Array.from({length:this.wordLength}, ()=>'X');
                });
                this.generatedWord = this.words[Math.floor(Math.random()*this.words.length)];
                console.log(this.generatedWord);
            },
            onKeyPress(key){
                if(/^[A-z]$/.test(key) && this.currentTileIndex !== this.wordLength){
                  this.fillTile(key);
                  this.word += key;
                }else if(key == 'Enter'){
                    if(this.currentTileIndex == this.wordLength){
                        this.submitGuess();
                        this.currentRowIndex++;
                        this.currentTileIndex=0;
                    }
                }
            },
            fillTile(key){
                this.board[this.currentRowIndex][this.currentTileIndex]=key;
                if(this.currentTileIndex == this.wordLength){
                    this.currentRowIndex++;
                    this.currentTileIndex=0;
                }else{
                    this.currentTileIndex++;
                }
            },
            submitGuess(){
               if(this.word == this.generatedWord){
                   alert('hoera gewonnen')
               }else{
                   alert('probeer nog eens');
               }
            }
        };
    });
});