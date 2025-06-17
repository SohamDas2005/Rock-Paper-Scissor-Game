let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
            };

        updatescore();

       
        function playGame(playerMove){
            const computerMove =  pickMove();
                let result = '';

                if(playerMove === 'Scissor'){
                    if(computerMove === 'Rock'){
                    result = 'lose';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'you win';
                    }
                    else if(computerMove === 'Scissor'){
                        result = 'Tie';
                    }
                }
                else if(playerMove === 'Paper'){
                    if(computerMove === 'Rock'){
                        result = 'you win';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'Tie';
                    }
                    else if(computerMove === 'Scissor'){
                        result = 'lose';
                    }
                }
                else if(playerMove === 'Rock'){
                    if(computerMove === 'Rock'){
                        result = 'Tie';
                    }
                    else if(computerMove === 'Paper'){
                        result = 'lose';
                    }
                    else if(computerMove === 'Scissor'){
                        result = 'you win';
                    }
                }

                if(result === 'you win'){
                    score.wins += 1;
                }
                else if(result === 'Tie'){
                    score.ties += 1;
                }
                else if(result === 'lose'){
                    score.losses += 1;
                }

                localStorage.setItem('score',JSON.stringify(score));

                updatescore(); 

                document.querySelector(`.js-result`).innerHTML = result;

                document.querySelector(`.js-moves`).innerHTML = `You <img src="${playerMove}-emoji.png" class="move-icon"> <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
 

        }

        function updatescore(){
            document.querySelector(`.js-score`).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
        }

        function pickMove(){
            const randomNumber = Math.random();
            let computerMove = '';
            if(randomNumber >= 0 && randomNumber < 1/3){
                computerMove = 'Rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'Paper';
            }
            else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'Scissor';
            }
            return computerMove;

        }