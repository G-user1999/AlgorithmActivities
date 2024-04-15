var Player = /** @class */ (function () {
    function Player(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = canvas.width / 2;
        this.width = 50;
        this.height = 20;
    }
    Player.prototype.draw = function () {
        if (this.ctx === null)
            return;
        this.ctx.fillStyle = "Purple";
        this.ctx.fillRect(this.x - this.width / 2, this.canvas.height - this.height, this.width, this.height);
    };
    return Player;
}());
var Obstacle = /** @class */ (function () {
    function Obstacle(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * (canvas.width = 50);
        this.y = 0;
        this.width = 50;
        this.height = 20;
    }
    Obstacle.prototype.draw = function () {
        if (this.ctx === null)
            return;
        this.ctx.fillStyle = "Yellow";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Obstacle.prototype.update = function (speed) {
        this.y += speed;
        if (this.y > this.canvas.height) {
            this.y = 0;
            this.x = Math.random() * (this.canvas.width - this.width);
        }
    };
    return Obstacle;
}());
var Game = /** @class */ (function () {
    function Game(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(canvas, ctx);
        this.obstacle = [];
        this.speed = 2;
        this.gameover = false;
        canvas.addEventListener('mousemove', this.movePlayer.bind(this));
    }
    Game.prototype.movePlayer = function (event) {
        this.player.x = event.clientX - this.canvas.offsetLeft;
    };
    Game.prototype.start = function () {
        // Chama repetidamente a função update() para atualizar o estado do jogo
        setInterval(this.update.bind(this), 1000 / 60); // 60 FPS
    };
    // Método para atualizar o estado do jogo
    Game.prototype.update = function () {
        if (this.gameover)
            return; // Se o jogo acabou, não atualiza mais
        // Atualiza a posição dos obstáculos
        for (var _i = 0, _a = this.obstacle; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            obstacle.update(this.speed);
            // Verifica se houve uma colisão entre o jogador e um obstáculo
            if (this.checkCollision(obstacle)) {
                this.gameover = true; // Marca o jogo como finalizado
                console.log('Game Over!'); // Exibe mensagem de Game Over no console
                break; // Interrompe o loop, pois o jogo acabou
            }
        }
        // Limpa o canvas
        this.clearCanvas();
        // Desenha o jogador
        this.player.draw();
        // Desenha os obstáculos
        for (var _b = 0, _c = this.obstacle; _b < _c.length; _b++) {
            var obstacle = _c[_b];
            obstacle.draw();
        }
    };
    // Método para verificar colisões entre o jogador e os obstáculos
    Game.prototype.checkCollision = function (obstacle) {
        // Verifica se houve uma colisão entre os retângulos delimitados pelo jogador e pelo obstáculo
        return this.player.x < obstacle.x + obstacle.width &&
            this.player.x + this.player.width > obstacle.x &&
            this.player.y < obstacle.y + obstacle.height &&
            this.player.y + this.player.height > obstacle.y;
    };
    // Método para limpar o canvas
    Game.prototype.clearCanvas = function () {
        if (this.ctx === null)
            return; // Verifica se o contexto de renderização está disponível
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa o canvas
    };
    return Game;
}());
// Adiciona um ouvinte de evento para iniciar o jogo quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('gameCanvas'); // Obtém a referência ao elemento <canvas>
    var ctx = canvas.getContext('2d'); // Obtém o contexto de renderização 2D do canvas
    if (ctx === null) {
        throw new Error('canvas'); // Lança um erro se o contexto de renderização não estiver disponível
    }
    var game = new Game(canvas, ctx); // Cria uma instância da classe Game com o elemento <canvas> e o contexto de renderização como argumentos
    game.start(); // Inicia o jogo
});
