// arquivo: ovni.js

function Ovni(context, imagem) {
    this.context = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
}

Ovni.prototype = {
    atualizar: function() {
        this.y += this.velocidade;
    },
    desenhar: function() {
        var ctx = this.context;
        var img = this.imagem;
        ctx.drawImage(img, this.x, this.y, img.width, img.height);
    }
}
