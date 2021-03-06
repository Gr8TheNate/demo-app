/**
 References:
 Backtracking algorithm:http://stackoverflow.com/questions/18168503/recursively-solving-a-sudoku-puzzle-using-backtracking-theoretically
 Game board generation without GUI: https://github.com/mooeypoo/jsSudoku/blob/master/singleton.sudoku.js
 Others:
 -http://moriel.smarterthanthat.com/tips/javascript-sudoku-backtracking-algorithm/
 -https://codepen.io/pavlovsk/pen/XmjPOE
 -http://www.emanueleferonato.com/2015/06/23/pure-javascript-sudoku-generatorsolver/
 - https://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking.html
 -http://www.geeksforgeeks.org/backtracking-set-7-suduku/
 **/

export var Sudoku = ( function (){
    var _instance, _game,

        defaultConfig = {
            'validate_on_insert': true    //if true, validation will happen on each insert, else will wait till the end
        },
        counter = 0;


    function init( config ) {
        _game = new Game( config );

        return {
            getGameBoard: function() {
                return _game.buildGUI();
            },

            //reset game board
            reset: function() {
                _game.resetGame();
            },

            //Check if the game is valid
            validate: function() {
                var isValid;

                isValid = _game.validateMatrix();
            },

            //Solve the entire board
            solve: function() {
                var isValid;
                // Make sure the board is valid first
                if ( !_game.validateMatrix() ) {
                    return false;
                }

                // Solve the game
                isValid = _game.solveGame( 0, 0 );
                return this.solutionArray;
            }
        };
    }


    function Game( config ) {
        this.config = config;

        this.cellMatrix = {};
        this.matrix = {};
        this.validation = {};

        this.resetValidationMatrices();
        this.solutionArray = {};
        return this;
    }

    Game.prototype = {

        buildGUI: function() {
            //call for the GUI function
            //Patrick, Nate


        },


        //Reset game parameters
        resetGame: function() {
            this.resetValidationMatrices();
            for ( var row = 0; row < 9; row++ ) {
                for ( var col = 0; col < 9; col++ ) {
                    // Reset GUI inputs
                    this.cellMatrix[row][col].val( '' );
                }
            }

        },

        //Rebuild validation matrices
        resetValidationMatrices: function() {
            this.matrix = { 'row': {}, 'col': {}, 'sect': {} };
            this.validation = { 'row': {}, 'col': {}, 'sect': {} };

            // Build the row/col matrix and validation arrays
            for ( var i = 0; i < 9; i++ ) {
                this.matrix.row[i] = [ '', '', '', '', '', '', '', '', '' ];
                this.matrix.col[i] = [ '', '', '', '', '', '', '', '', '' ];
                this.validation.row[i] = [];
                this.validation.col[i] = [];
            }

            // Build the section matrix and validation arrays
            for ( var row = 0; row < 3; row++ ) {
                this.matrix.sect[row] = [];
                this.validation.sect[row] = {};
                for ( var col = 0; col < 3; col++ ) {
                    this.matrix.sect[row][col] = [ '', '', '', '', '', '', '', '', '' ];
                    this.validation.sect[row][col] = [];
                }
            }
        },

        //validate the number that was inserted
        validateNumber: function( num, rowID, colID, oldNum ) {
            var isValid = true,
                // Section
                sectRow = Math.floor( rowID / 3 ),
                sectCol = Math.floor( colID / 3 );


            oldNum = oldNum || '';

            // Remove oldNum from the validation matrices,
            // if it exists in them.
            if ( this.validation.row[rowID].indexOf( oldNum ) > -1 ) {
                this.validation.row[rowID].splice(
                    this.validation.row[rowID].indexOf( oldNum ), 1
                );
            }
            if ( this.validation.col[colID].indexOf( oldNum ) > -1 ) {
                this.validation.col[colID].splice(
                    this.validation.col[colID].indexOf( oldNum ), 1
                );
            }
            if ( this.validation.sect[sectRow][sectCol].indexOf( oldNum ) > -1 ) {
                this.validation.sect[sectRow][sectCol].splice(
                    this.validation.sect[sectRow][sectCol].indexOf( oldNum ), 1
                );
            }
            // Skip if empty value

            if ( num !== '' ) {


                // Validate value
                if (
                    // Make sure value is within range
                Number( num ) > 0 &&
                Number( num ) <= 9
                ) {
                    // Check if it already exists in validation array
                    if (
                        this.validation.row[rowID].includes(num) > -1 ||
                        this.validation.col[colID].includes(num)  > -1||
                        this.validation.sect[sectRow][sectCol].includes(num) > -1
                    ) {
                        isValid = false;
                    } else {
                        isValid = true;
                    }
                }

                // Insert new value into validation array even if it isn't valid
                this.validation.row[rowID].push( num );
                this.validation.col[colID].push( num );
                this.validation.sect[sectRow][sectCol].push( num );
            }

            return isValid;
        },

        //validate the entire matrix
        validateMatrix: function() {
            var isValid, val, element,
                hasError = false;

            // Go over entire board, and compare to the cached
            // validation arrays
            for ( var row = 0; row < 9; row++ ) {
                for ( var col = 0; col < 9; col++ ) {
                    val = this.matrix.row[row][col];
                    // Validate the value
                    isValid = this.validateNumber( val, row, col, val );
                    this.cellMatrix[row][col].toggleClass( 'sudoku-input-error', !isValid );
                    if ( !isValid ) {
                        hasError = true;
                    }
                }
            }
            return !hasError;
        },

        solveGame: function( row, col ) {
            var cval, sqRow, sqCol, nextSquare, legalValues,
                sectRow, sectCol, secIndex, gameResult;

            nextSquare = this.findClosestEmptySquare( row, col );
            if ( !nextSquare ) {
                // End of board
                return true;
            } else {
                sqRow = nextSquare.data( 'row' );
                sqCol = nextSquare.data( 'col' );
                legalValues = this.findLegalValuesForSquare( sqRow, sqCol );

                // Find the segment id
                sectRow = Math.floor( sqRow / 3 );
                sectCol = Math.floor( sqCol / 3 );
                secIndex = ( sqRow % 3 ) * 3 + ( sqCol % 3 );

                // Try out legal values for this cell
                for ( var i = 0; i < legalValues.length; i++ ) {
                    cval = legalValues[i];
                    // Update value in input
                    nextSquare.val( cval );
                    // Update in matrices
                    this.matrix.row[sqRow][sqCol] = cval;
                    this.matrix.col[sqCol][sqRow] = cval;
                    this.matrix.sect[sectRow][sectCol][secIndex] = cval;

                    // Recursively keep trying
                    if ( this.solveGame( sqRow, sqCol ) ) {
                        return true;
                    } else {
                        // There was a problem, we should backtrack

                        // Remove value from input
                        this.cellMatrix[sqRow][sqCol].val( '' );
                        // Remove value from matrices
                        this.matrix.row[sqRow][sqCol] = '';
                        this.matrix.col[sqCol][sqRow] = '';
                        this.matrix.sect[sectRow][sectCol][secIndex] = '';
                    }
                }
                // If there was no success with any of the legal
                // numbers, call backtrack recursively backwards
                for(var i = 0; i <9;i++){
                    for (var j=0; j <9; j++){
                        this.solutionArray[counter] = this.matrix[i][j];
                        counter++;
                    }
                }
                return false;
            }
        },

        //Find the closest empty square
        findClosestEmptySquare: function( row, col ) {
            var walkingRow, walkingCol, found = false;
            for ( var i = ( col + 9*row ); i < 81; i++ ) {
                walkingRow = Math.floor( i / 9 );
                walkingCol = i % 9;
                if ( this.matrix.row[walkingRow][walkingCol] === '' ) {
                    found = true;
                    return this.cellMatrix[walkingRow][walkingCol];
                }
            }
        },

        //find a legal number for a given square
        findLegalValuesForSquare: function( row, col ) {
            var legalVals, legalNums, val, i,
                sectRow = Math.floor( row / 3 ),
                sectCol = Math.floor( col / 3 );

            legalNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

            // Check existing numbers in col
            for ( i = 0; i < 9; i++ ) {
                val = Number( this.matrix.col[col][i] );
                if ( val > 0 ) {
                    // Remove from array
                    if ( legalNums.indexOf( val ) > -1 ) {
                        legalNums.splice( legalNums.indexOf( val ), 1 );
                    }
                }
            }

            // Check existing numbers in row
            for ( i = 0; i < 9; i++ ) {
                val = Number( this.matrix.row[row][i] );
                if ( val > 0 ) {
                    // Remove from array
                    if ( legalNums.indexOf( val ) > -1 ) {
                        legalNums.splice( legalNums.indexOf( val ), 1 );
                    }
                }
            }

            // Check existing numbers in section
            sectRow = Math.floor( row / 3 );
            sectCol = Math.floor( col / 3 );
            for ( i = 0; i < 9; i++ ) {
                val = Number( this.matrix.sect[sectRow][sectCol][i] );
                if ( val > 0 ) {
                    // Remove from array
                    if ( legalNums.indexOf( val ) > -1 ) {
                        legalNums.splice( legalNums.indexOf( val ), 1 );
                    }
                }
            }

            if ( this.config.solver_shuffle_numbers ) {
                //randomizing the legal numbers to produce different solutions each time
                for ( i = legalNums.length - 1; i > 0; i-- ) {
                    var rand = getRandomInt( 0, i );
                    var temp = legalNums[i];
                    legalNums[i] = legalNums[rand];
                    legalNums[rand] = temp;
                }
            }

            return legalNums;
        }
    };


    function getRandomInt(min, max) {
        return Math.floor( Math.random() * ( max + 1 ) ) + min;
    }

    return {
        //singleton instance. either will create an instance or will return the instance that already exists.

        getInstance: function( config ) {
            if ( !_instance ) {
                _instance = init( config );
            }
            return _instance;
        }
    };
} );
