// Arquivo: animacao.js

function Animacao(context) {
    this.context = context;
    this.sprites = [];
    this.ligado = false;
    this.processamentos = [];
    this.spritesExcluir = [];
    this.processamentosExcluir = [];
}

Animacao.prototype = {
    novoSprite: function(sprite) {
        this.sprites.push(sprite);
        sprite.animacao = this;
    },
    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function() {
        this.ligado = false;
    },
    proximoFrame: function() {
        // Posso continuar?
        if (!this.ligado) {
            return;
        }
        // A cada ciclo, limpamos a tela ou desenhamos um fundo.
        // this.limparTela();
        // Atualizamos o estado dos sprites.
        for (var i in this.sprites) {
            this.sprites[i].atualizar();
        }
        // Desenhamos os sprites.
        for (var i in this.sprites) {
            this.sprites[i].desenhar();
        }
        // Processamentos gerais.
        for (var i in this.processamentos) {
            this.processamentos[i].processar();
        }
        // Processamento de exclusões.
        this.processarExclusoes();
        // Chamamos o próximo ciclo.
        var animacao = this;
        requestAnimationFrame(function() {
            animacao.proximoFrame();
        });
    },
    limparTela: function() {
        var ctx = this.context; // Só para facilitar a escrita ;)
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    },
    novoProcessamento: function(processamento) {
        this.processamentos.push(processamento);
        processamento.animacao = this;
    },
    excluirSprite: function(sprite) {
        this.spritesExcluir.push(sprite);
    },
    excluirProcessamento: function(processamento) {
        this.processamentosExcluir.push(processamento);
    },
    processarExclusoes: function() {
        // Criar novos arrays.
        var novoSprites = [];
        var novoProcessamentos = [];
        // Adicionar somente se não constar no array de excluídos.
        for (var i in this.sprites) {
            if (this.spritesExcluir.indexOf(this.sprites[i]) == -1) {
                novoSprites.push(this.sprites[i]);
            }
        }
        for (var i in this.processamentos) {
            if (this.processamentosExcluir.indexOf(this.processamentos[i]) == -1) {
                novoProcessamentos.push(this.processamentos[i]);
            }
        }
        // Limpar os arrays de exclusões.
        this.spritesExcluir = [];
        this.processamentosExcluir = [];
        // Substituir os arrays velhos pelos novos.
        this.sprites = novoSprites;
        this.processamentos = novoProcessamentos;
    }
}
