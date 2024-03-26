class Player {
    x: number;
    width: number;
    height: number;

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null) {
        this.x = canvas.width / 2;
        this.width = 50;
        this.height = 20;
    }
    draw(): void{
        if (this.ctx === null) return;
        this.ctx.fillStyle = "Purple";
        this.ctx.fillRect(this.x - this.width /2, this.canvas.height - this.height, this.width, this.height)
    }
}
class Obstacle {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null) {
        this.x = Math.random() * (canvas.width = 50);
        this.y = 0;
        this.width = 50;
        this.height = 20;

    }
    draw(): void{
        if (this.ctx === null) return;
        this.ctx.fillStyle = "Yellow";
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    update(speed: number): void {
        this.y += speed;
        if (this.y > this.canvas.height) {
            this.y = 0;
            this.x = Math.random() * (this.canvas.width - this.width);
        }
    }
}
class Game {
    private player: Player;
    private obstacle: Obstacle;
    private speed: number;
    private gameover: boolean;

    constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D | null){
        this.player = new Player(canvas, ctx);
        this.obstacle = [];
        this.speed = 2;
        this.gameover = false;
        canvas.addEventListener('mousemove', this.movePlayer.bind(this));
    }
    movePlayer(event: MouseEvent): void {
        this.player.x = event.clientX - this.canvas.offsetLeft;
    }
    updateObstacle(): void{

    }
}

// Adiciona um ouvinte de evento para iniciar o jogo quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement; // Obtém a referência ao elemento <canvas>
    const ctx = canvas.getContext('2d'); // Obtém o contexto de renderização 2D do canvas
    if (ctx === null) {
        throw new Error('canvas'); // Lança um erro se o contexto de renderização não estiver disponível
    }
    const game = new Game(canvas, ctx); // Cria uma instância da classe Game com o elemento <canvas> e o contexto de renderização como argumentos
    game.start(); // Inicia o jogo
});